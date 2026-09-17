// Hook PreToolUse: deja invocar solo la skill que se pasa como argumento.
// Lo declara un agente en su cabecera, para que un protocolo de uso exclusivo
// de otro agente no se pueda ejecutar desde el. Salida 2 = llamada bloqueada.
const allowed = process.argv[2];
let raw = '';
process.stdin.on('data', (c) => (raw += c));
process.stdin.on('end', () => {
  let input;
  try {
    input = JSON.parse(raw);
  } catch {
    process.stderr.write('allow-only-skill: entrada no es JSON; se bloquea por defecto.\n');
    process.exit(2);
  }
  if (input.tool_name !== 'Skill') process.exit(0);
  const skill = (input.tool_input && input.tool_input.skill) || '';
  if (allowed && skill === allowed) process.exit(0);
  process.stderr.write(
    `Bloqueado: este agente solo puede invocar la skill "${allowed}", no "${skill}". ` +
      'No intentes ejecutar ese protocolo por otra via: detente y dilo en tu reporte.\n'
  );
  process.exit(2);
});
