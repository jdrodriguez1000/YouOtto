// Test de anchors.js. Se corre con: node --test .claude/checks/anchors.test.js
const { test } = require('node:test');
const assert = require('node:assert');
const { spawnSync } = require('node:child_process');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');

const control = path.join(__dirname, 'anchors.js');
const { slugify, anclasRotas } = require('./anchors.js');

// Escribe un .md temporal y devuelve su ruta.
const conArchivo = (contenido) => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'anchors-'));
  const ruta = path.join(dir, 'muestra.md');
  fs.writeFileSync(ruta, contenido);
  return ruta;
};

test('un ancla que corresponde a su titulo resuelve', () => {
  const ruta = conArchivo('| [X](#x-001---titulo-simple)\n\n### X-001 - Titulo simple\n');
  assert.deepStrictEqual(anclasRotas(ruta), []);
});

test('un ancla que no corresponde a ningun titulo se detecta', () => {
  const ruta = conArchivo('| [X](#x-001---otra-cosa)\n\n### X-001 - Titulo simple\n');
  const rotas = anclasRotas(ruta);
  assert.strictEqual(rotas.length, 1);
  assert.strictEqual(rotas[0].ancla, 'x-001---otra-cosa');
  assert.strictEqual(rotas[0].numero, 1);
});

// Regresion de un defecto real: un simbolo rodeado de espacios desaparece del slug,
// pero sus dos espacios siguen dando dos guiones, y el ancla escrita a mano puso uno.
test('un simbolo entre espacios deja dos guiones en el slug', () => {
  assert.strictEqual(slugify('X-002 - de A → B'), 'x-002---de-a--b');
  const bueno = conArchivo('| [X](#x-002---de-a--b)\n\n### X-002 - de A → B\n');
  assert.deepStrictEqual(anclasRotas(bueno), []);
  const malo = conArchivo('| [X](#x-002---de-a-b)\n\n### X-002 - de A → B\n');
  assert.strictEqual(anclasRotas(malo).length, 1);
});

// Regresion de otro defecto real, el primero de esta clase que se detecto: el punto de
// un nombre de archivo se elimina y no se convierte en guion.
test('el punto de un nombre de archivo desaparece sin dejar guion', () => {
  assert.strictEqual(slugify('X-003 - notas.md completo'), 'x-003---notasmd-completo');
});

test('un enlace dentro de una cerca no se cuenta, ni con la cerca indentada', () => {
  const ruta = conArchivo('### X-001 - Titulo\n\n```\n](#roto)\n```\n\n  ~~~\n  ](#roto)\n  ~~~\n');
  assert.deepStrictEqual(anclasRotas(ruta), []);
});

test('una cita de un enlace entre backticks no se cuenta', () => {
  const ruta = conArchivo('### X-001 - Titulo\n\nDevuelve `](#s-001---algo-que-no-existe)` y eso es prosa.\n');
  assert.deepStrictEqual(anclasRotas(ruta), []);
});

test('dos titulos iguales reciben sufijo, como en GitHub', () => {
  const ruta = conArchivo('| [a](#repetido)\n| [b](#repetido-1)\n\n### Repetido\n\n### Repetido\n');
  assert.deepStrictEqual(anclasRotas(ruta), []);
  const malo = conArchivo('| [b](#repetido-2)\n\n### Repetido\n\n### Repetido\n');
  assert.strictEqual(anclasRotas(malo).length, 1);
});

test('sale 1 y nombra el archivo cuando hay un ancla rota', () => {
  const ruta = conArchivo('| [X](#no-existe)\n\n### X-001 - Titulo\n');
  const r = spawnSync(process.execPath, [control, ruta]);
  assert.strictEqual(r.status, 1);
  assert.match(r.stdout.toString(), /total anclas rotas: 1/);
});

test('sale 0 cuando todas resuelven', () => {
  const ruta = conArchivo('| [X](#x-001---titulo)\n\n### X-001 - Titulo\n');
  const r = spawnSync(process.execPath, [control, ruta]);
  assert.strictEqual(r.status, 0);
  assert.match(r.stdout.toString(), /total anclas rotas: 0/);
});

test('sale 1 si no se le pasa ninguna ruta', () => {
  assert.strictEqual(spawnSync(process.execPath, [control]).status, 1);
});
