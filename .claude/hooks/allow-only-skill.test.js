// Test de allow-only-skill.js. Se corre con: node --test .claude/hooks/allow-only-skill.test.js
const { test } = require('node:test');
const assert = require('node:assert');
const { spawnSync } = require('node:child_process');
const path = require('node:path');

const hook = path.join(__dirname, 'allow-only-skill.js');
const run = (allowed, input) =>
  spawnSync(process.execPath, [hook, allowed], { input: typeof input === 'string' ? input : JSON.stringify(input) });

test('bloquea una skill distinta de la permitida', () => {
  const r = run('protocol-close', { tool_name: 'Skill', tool_input: { skill: 'protocol-audit' } });
  assert.strictEqual(r.status, 2);
  assert.match(r.stderr.toString(), /protocol-audit/);
});

test('deja pasar la skill permitida', () => {
  const r = run('protocol-close', { tool_name: 'Skill', tool_input: { skill: 'protocol-close' } });
  assert.strictEqual(r.status, 0);
});

test('no toca otras herramientas', () => {
  const r = run('protocol-close', { tool_name: 'Bash', tool_input: { command: 'git status' } });
  assert.strictEqual(r.status, 0);
});

test('bloquea si la entrada no es JSON', () => {
  assert.strictEqual(run('protocol-close', 'no-json').status, 2);
});

test('bloquea una skill sin nombre', () => {
  assert.strictEqual(run('protocol-close', { tool_name: 'Skill', tool_input: {} }).status, 2);
});
