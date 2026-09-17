// Control de anclas internas: comprueba que cada enlace `](#ancla)` de un archivo
// Markdown resuelva a un titulo del mismo archivo. Se le pasan las rutas a revisar.
// Salida 1 = hay al menos un ancla rota; salida 0 = todas resuelven.
//
// Replica el algoritmo de github-slugger (el que usa GitHub para derivar el id de
// un encabezado): elimina puntuacion y simbolos Unicode salvo `-` y `_`, pasa a
// minusculas, y convierte los espacios en guiones. Los titulos repetidos reciben
// sufijo `-1`, `-2`, ... igual que hace GitHub.
//
// Limite declarado: la replica se validó contra github-slugger sobre los titulos
// reales de este repositorio, no contra su tabla de rangos completa. Un titulo con
// caracteres que ninguno de esos titulos usa podria derivar distinto.

const fs = require('node:fs');

const slugify = (texto) =>
  texto
    .replace(/[\p{P}\p{S}]/gu, (c) => (c === '-' || c === '_' ? c : ''))
    .toLowerCase()
    .replace(/ /g, '-');

// Quita los tramos de codigo inline: una cita de un enlace dentro de backticks no
// es un enlace, y contarla como tal produce un falso positivo.
const sinCodigoInline = (linea) => linea.replace(/`[^`]*`/g, '');

// Recorre las lineas de un archivo saltandose los bloques con cerca (``` o ~~~),
// con o sin indentacion.
const recorrer = (lineas, visitar) => {
  let dentroDeCerca = false;
  lineas.forEach((linea, i) => {
    if (/^\s*(```|~~~)/.test(linea)) {
      dentroDeCerca = !dentroDeCerca;
      return;
    }
    if (!dentroDeCerca) visitar(linea, i + 1);
  });
};

const anclasRotas = (ruta) => {
  const lineas = fs.readFileSync(ruta, 'utf8').split(/\r?\n/);

  const vistos = new Map();
  const validos = new Set();
  recorrer(lineas, (linea) => {
    const encabezado = linea.match(/^#{1,6}\s+(.*)$/);
    if (!encabezado) return;
    const base = slugify(encabezado[1].trim());
    const n = vistos.get(base) || 0;
    vistos.set(base, n + 1);
    validos.add(n === 0 ? base : `${base}-${n}`);
  });

  const rotas = [];
  recorrer(lineas, (linea, numero) => {
    for (const enlace of sinCodigoInline(linea).matchAll(/\]\(#([^)]+)\)/g)) {
      if (!validos.has(enlace[1])) rotas.push({ ruta, numero, ancla: enlace[1] });
    }
  });
  return rotas;
};

if (require.main === module) {
  const rutas = process.argv.slice(2);
  if (rutas.length === 0) {
    process.stderr.write('anchors: no se paso ninguna ruta.\n');
    process.exit(1);
  }
  const rotas = rutas.flatMap(anclasRotas);
  for (const r of rotas) process.stdout.write(`ROTA ${r.ruta}:${r.numero} -> #${r.ancla}\n`);
  process.stdout.write(`total anclas rotas: ${rotas.length}\n`);
  process.exit(rotas.length === 0 ? 0 : 1);
}

module.exports = { slugify, anclasRotas };
