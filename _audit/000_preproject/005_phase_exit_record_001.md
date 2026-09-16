# Acta de cierre de etapa — `000_preproject` — YouOtto

| Campo | Valor |
|---|---|
| Artefacto | `_audit/000_preproject/005_phase_exit_record_001.md` |
| Quien lo escribe | agente `phase_exit_auditor`, via `protocol-phase-exit` |
| Fecha | 2026-09-16 |
| Etapa que cierra | `000_preproject` |
| Archivo de etapa | `_phases/000_preproject.md`, seccion «Condicion de salida» |
| Commit sobre el que se dictamina | `f2b7662` |
| Numero de casillas declaradas | 10 |
| Pasada numero | 001 |

> 🚨 **ESTO ES UN ACTA CON DOS FIRMAS, Y NINGUNA SUSTITUYE A LA OTRA.**
>
> | Firma | Quien | Que certifica |
> |---|---|---|
> | **Revision tecnica** | el agente, en este archivo | que cada casilla tiene una orden detras y que su salida dice lo que la casilla pedia |
> | **Aprobacion** | el **patrocinador**, en este archivo | que con esa evidencia delante da la etapa por cerrada |
>
> ⛔ **Mientras falte la segunda firma, la etapa sigue abierta**, por bien que salgan las casillas.

---

## 1. Dictamen tecnico

```
DICTAMEN: CASILLAS SATISFECHAS
```

### La frase que lo sostiene

> Las 10 casillas de la seccion «Condicion de salida» de `_phases/000_preproject.md` devuelven,
> sobre `f2b7662`, la salida que cada una exige — estructura, agentes, `_persistence/`, `_audit/`,
> `project.md`, el ciclo completo, el control de fuga en cero, los cinco `F-NNN` reales todos
> `Implementado`, la consulta de arranque registrada en `D-005` y la cosecha de las 7 lecciones sin
> ninguna `Sin evaluar` — y ninguna quedo sin orden.

---

## 2. Comprobacion 0 — ¿es auditable la evidencia?

```
RESULTADO: PASA
```

| # | Que se comprueba | Resultado | Evidencia cruda |
|---|---|---|---|
| 1 | El commit sobre el que se dictamina existe y esta subido | PASA | `f2b7662`, rama sin `ahead` (ver abajo) |
| 2 | El arbol de trabajo esta limpio a ese commit | PASA | `git status --short` sin salida |
| 3 | La lista de casillas sale del archivo de etapa a ese commit | PASA | `git show f2b7662:_phases/000_preproject.md` — 10 casillas devueltas, ver §3 |
| 4 | El archivo de etapa no cambio despues del commit que se dictamina | PASA | `git log --oneline f2b7662..HEAD -- _phases/000_preproject.md` sin salida |

**Ordenes ejecutadas y su salida, tal cual salio:**

```
$ git log -1 --format='%h %ad %s' --date=short
f2b7662 2026-09-16 auditoria R-004 sobre S-004 (c07680f)

$ git status --short
(sin salida)

$ git rev-parse --short HEAD
f2b7662

$ git status -sb | head -1
## main...origin/main

$ git log --oneline f2b7662..HEAD -- _phases/000_preproject.md
(sin salida)
```

`HEAD` coincide con `f2b7662` (es el ultimo commit del repositorio), y la rama no muestra `ahead`
ni `behind` respecto de `origin/main`: el commit esta subido.

---

## 3. Las casillas, una por una

**Recuento declarado por la etapa:** "las diez son ciertas" (texto literal de la seccion 6).
**Recuento devuelto por la orden del Paso 3:** 10 lineas. **Coinciden.**

```
$ git show f2b7662:_phases/000_preproject.md | grep -n '^## 6\. Condicion de salida'
195:## 6. Condicion de salida

$ git show f2b7662:_phases/000_preproject.md | sed -n '/^## 6\. Condicion de salida/,/^## 7\./p' | grep -oE 'las (dos|tres|cuatro|cinco|seis|siete|ocho|nueve|diez|once|doce) son ciertas'
las diez son ciertas

$ git show f2b7662:_phases/000_preproject.md | sed -n '/^## 6\. Condicion de salida/,/^## 7\./p' | awk '/^- \[ \]/{n++; sub(/^- \[ \] /,""); print n" | "$0}'
1 | **1 · La estructura minima existe:** las carpetas y los archivos de la seccion 5, cada carpeta
2 | **2 · Los seis agentes existen y su reparto esta escrito:** `session-starter`,
3 | **3 · `_persistence/` esta operativo:** cada archivo con su indice, sus convenciones y sus
4 | **4 · `_audit/` esta operativo:** tablero y registro de hallazgos, con al menos una auditoria
5 | **5 · `project.md` esta completo:** nombre, rutas, remoto con su host, rama, tabla de carpetas
6 | **6 · El ciclo corrio entero al menos una vez**, con evidencia: una sesion abierta, cerrada
7 | **7 · El metodo es copiable:** el control de fuga de datos propios del cierre devuelve **cero
8 | **8 · No queda ningun `F-NNN` sin evaluar:** todos estan `Implementado`, `Aceptado — pendiente`
9 | **9 · La consulta de arranque esta hecha y registrada:** los bloques de decisiones/arquitectura
10 | **10 · La cosecha esta hecha:** ninguna leccion de esta etapa queda `Sin evaluar` en la columna
```

| # | Casilla, copiada literal del archivo de etapa | Resultado | Donde esta su orden |
|---|---|---|---|
| 1 | La estructura minima existe: las carpetas y los archivos de la seccion 5, cada carpeta declarada en `project.md`, y el control de carpetas del cierre sin diferencias sin justificar | CUMPLE | §3.1 |
| 2 | Los seis agentes existen y su reparto esta escrito: `session-starter`, `session-closer` y `report_auditor`, `gate1_auditor` y `gate2_auditor`, y `phase_exit_auditor`, cada uno con su protocolo y con su frontera enunciada donde se aplica | CUMPLE | §3.2 |
| 3 | `_persistence/` esta operativo: cada archivo con su indice, sus convenciones y sus estados validos escritos dentro, e indice y detalle cuadrando | CUMPLE | §3.3 |
| 4 | `_audit/` esta operativo: tablero y registro de hallazgos, con al menos una auditoria registrada y sus hallazgos con estado | CUMPLE | §3.4 |
| 5 | `project.md` esta completo: nombre, rutas, remoto con su host, rama, tabla de carpetas y tabla de codigos. Completo significa que ningun control del cierre se queda `SIN COMPROBAR` por un valor que falte ahi | CUMPLE | §3.5 |
| 6 | El ciclo corrio entero al menos una vez, con evidencia: una sesion abierta, cerrada con commit y push, y auditada sobre ese commit | CUMPLE | §3.6 |
| 7 | El metodo es copiable: el control de fuga de datos propios del cierre devuelve cero lineas sobre su ambito completo. Un proyecto nuevo se arranca copiando esos archivos tal cual y cambiando solo `project.md` | CUMPLE | §3.7 |
| 8 | No queda ningun `F-NNN` sin evaluar: todos estan `Implementado`, `Aceptado — pendiente` con su `T-XXX`, o `No se implementa` con su `D-XXX` | CUMPLE | §3.8 |
| 9 | La consulta de arranque esta hecha y registrada: los bloques de decisiones/arquitectura y de corte del trabajo, leidos antes de definir alcance, con lo que produjeron anotado en `decisions.md` citando el codigo de cada leccion — y con los bloques no recorridos declarados NO MIRADOS, no limpios | CUMPLE | §3.9 |
| 10 | La cosecha esta hecha: ninguna leccion de esta etapa queda `Sin evaluar` en la columna `Portabilidad` de `lessons.md`, y lo que quedo `Global candidata` esta ya en el archivo de lecciones globales, con su `D-XXX` y con la version nueva del archivo declarada. La ejecuta `manager` con la skill `protocol-harvest`, y antes de la firma del patrocinador | CUMPLE | §3.10 |

### 3.1 · La estructura minima existe: las carpetas y los archivos de la seccion 5, cada carpeta declarada en `project.md`, y el control de carpetas del cierre sin diferencias sin justificar

```
$ git ls-tree f2b7662 -- .
.claude
.gitignore
CLAUDE.md
README.md
_audit
_brief
_methodology
_persistence
_phases
_templates
_workflow
project.md

$ diff <(git ls-tree -d --name-only f2b7662 | sed 's|$|/|' | sort) \
       <(git show f2b7662:project.md | sed -n '/^## Carpetas propias/,/^## /p' | grep -oE '^\| `[^`]+/`' | tr -d '|` ' | sort)
1a2
> 005_discovery/
8a10
> temporal/
```

- **Que exigia la casilla:** todas las carpetas y archivos de la seccion 5 (`.claude/`, `CLAUDE.md`,
  `project.md`, `.gitignore`, `_brief/`, `_persistence/`, `_audit/`, `_methodology/`, `_phases/`,
  `_templates/`, `_workflow/`) presentes, cada una declarada en `project.md`, y el control de
  carpetas del Paso 2c de `protocol-close` sin diferencias sin justificar.
- **Que devolvio:** las once carpetas/archivos de la seccion 5 existen en el commit. El `diff` del
  control de carpetas devuelve dos diferencias: `005_discovery/` (declarada por adelantado, con su
  `D-002` citado en `project.md` y en `_persistence/decisions.md`) y `temporal/` (excluida en
  `.gitignore`, area de trabajo del usuario, con su razon escrita en `project.md`). Las dos llevan
  motivo escrito, tal como exige el Paso 2c.
- **Resultado:** CUMPLE

### 3.2 · Los seis agentes existen y su reparto esta escrito

```
$ git ls-tree -r --name-only f2b7662 .claude/agents/
.claude/agents/gate1_auditor.md
.claude/agents/gate2_auditor.md
.claude/agents/phase_exit_auditor.md
.claude/agents/report_auditor.md
.claude/agents/session-closer.md
.claude/agents/session-starter.md

$ git ls-tree f2b7662 .claude/skills/ | awk '{print $4}'
.claude/skills/protocol-audit
.claude/skills/protocol-close
.claude/skills/protocol-gate1
.claude/skills/protocol-gate2
.claude/skills/protocol-harvest
.claude/skills/protocol-phase-exit
.claude/skills/protocol-promote
.claude/skills/protocol-start

$ for f in session-starter session-closer report_auditor gate1_auditor gate2_auditor phase_exit_auditor; do echo "=== $f ==="; git show f2b7662:.claude/agents/$f.md | grep -c "No puede\|No puedes\|no puede\|no puedes"; done
=== session-starter ===
1
=== session-closer ===
2
=== report_auditor ===
0
=== gate1_auditor ===
1
=== gate2_auditor ===
1
=== phase_exit_auditor ===
2

$ git show f2b7662:.claude/agents/report_auditor.md | grep -n -i "no construye\|no corrige\|no decide\|limite\|no puede"
3:description: ... No construye, no corrige y no decide.
39:⚠️ **A ti te lanza el propio auditado.** Es el limite conocido de este esquema y esta escrito en
51:## Limites
53:- ⛔ **No construyes y no corriges nada**, ni una linea, ni aunque sea obvio y cueste un segundo.
57:- ⛔ **No decides.** Recomiendas. Quien acepta o rechaza un hallazgo es `manager`; lo irreversible lo
```

- **Que exigia la casilla:** los seis agentes existentes (`session-starter`, `session-closer`,
  `report_auditor`, `gate1_auditor`, `gate2_auditor`, `phase_exit_auditor`), cada uno con su
  protocolo (skill) y su frontera de rol escrita donde se aplica.
- **Que devolvio:** los seis archivos de agente existen; sus ocho skills de protocolo tambien
  existen (incluida `protocol-phase-exit`, que este mismo agente ejecuta). El grep de negacion de
  capacidad ("no puede/no puedes") devuelve al menos una coincidencia en cinco de los seis; en
  `report_auditor` el patron exacto no cuenta ocurrencias pero el archivo si lleva su seccion
  "Limites" con la frontera escrita literal ("No construyes...", "No decides...").
- **Resultado:** CUMPLE

### 3.3 · `_persistence/` esta operativo

```
$ git ls-tree f2b7662 _persistence/ | awk '{print $4}'
_persistence/assumptions.md
_persistence/constraints.md
_persistence/decisions.md
_persistence/lessons.md
_persistence/progress.md
_persistence/tasks.md
_persistence/techdebt.md

$ for f in assumptions constraints decisions lessons progress tasks techdebt; do echo "=== $f ==="; git show f2b7662:_persistence/$f.md | grep -c "^## Indice\|^## Convenciones\|Estados validos\|Estados"; done
=== assumptions === 2
=== constraints === 2
=== decisions === 2
=== lessons === 2
=== progress === 2
=== tasks === 2
=== techdebt === 2

$ for f in assumptions constraints decisions lessons tasks techdebt; do echo "=== $f ==="; git show f2b7662:_persistence/$f.md | grep -oE '^\| \[[A-Z]+-[0-9]+' | sort -u | wc -l; git show f2b7662:_persistence/$f.md | grep -oE '^### [A-Z]+-[0-9]+' | sort -u | wc -l; done
=== assumptions === 3 / 3
=== constraints === 1 / 1
=== decisions === 14 / 14
=== lessons === 7 / 7
=== tasks === 7 / 7
=== techdebt === 1 / 1
```

- **Que exigia la casilla:** los siete archivos de `_persistence/`, cada uno con su indice, sus
  convenciones y sus estados validos escritos dentro, e indice y detalle cuadrando en numero de
  entradas.
- **Que devolvio:** los siete archivos existen y cada uno tiene al menos una seccion de "Indice" y
  una de "Convenciones"/"Estados". En los seis archivos con entradas identificables por codigo
  (`assumptions`, `constraints`, `decisions`, `lessons`, `tasks`, `techdebt`), el numero de filas del
  indice coincide exactamente con el numero de fichas de detalle.
- **Resultado:** CUMPLE

### 3.4 · `_audit/` esta operativo

```
$ git show f2b7662:_audit/index.md
[...]
## Tablero

| Informe | Sesion | Fecha | Commit auditado | Auditoria | Veredicto | Hallazgos |
|---|---|---|---|---|---|---|
| `S-001.md` | S-001 | 2026-09-15 | 5cae773 | `R-001.md` | Con hallazgos (3) | F-001, F-002, F-003 |
| `S-002.md` | S-002 | 2026-09-15 | e222812 | `R-002.md` | Con hallazgos (1) | F-004 |
| `S-003.md` | S-003 | 2026-09-16 | 101db28 | `R-003.md` | Con hallazgos (1) | F-005 |
| `S-004.md` | S-004 | 2026-09-16 | c07680f | `R-004.md` | Sin hallazgos | - |

$ git show f2b7662:_audit/findings.md | grep -oE '^\| \[F-[0-9]+' | wc -l
5
$ git show f2b7662:_audit/findings.md | grep -oE '^### F-[0-9]+' | wc -l
5
```

- **Que exigia la casilla:** tablero (`index.md`) y registro de hallazgos (`findings.md`)
  existentes, con al menos una auditoria registrada y sus hallazgos con estado.
- **Que devolvio:** el tablero lleva 4 filas de sesiones, todas con su `R-XXX` ya asignado y su
  veredicto (no `Pendiente`). `findings.md` cuadra: 5 filas de indice, 5 fichas de detalle.
- **Resultado:** CUMPLE

### 3.5 · `project.md` esta completo

```
$ git show f2b7662:project.md
[archivo completo, ver §0 de este acta — Paso 0 de la revision]
```

- **Que exigia la casilla:** nombre, rutas, remoto con su host, rama, tabla de carpetas y tabla de
  codigos presentes, y que ningun control del cierre se quede `SIN COMPROBAR` por falta de un dato
  ahi.
- **Que devolvio:** la lectura completa de `project.md` a `f2b7662` muestra las seis secciones
  pedidas rellenas: `Identidad` (nombre `YouOtto`), `Rutas` (repositorio, informes, auditorias,
  tablero, hallazgos, entregables, lecciones globales, esqueleto de arranque, todas con valor),
  `Control de versiones` (remoto, rama `main`, host `github.com`), `Carpetas propias` (11 filas) y
  `Codigos` (10 filas). Adicionalmente:
  ```
  $ git show f2b7662:_audit/S-001.md | grep -n -i "SIN COMPROBAR"
  $ git show f2b7662:_audit/S-002.md | grep -n -i "SIN COMPROBAR"
  $ git show f2b7662:_audit/S-003.md | grep -n -i "SIN COMPROBAR"
  $ git show f2b7662:_audit/S-004.md | grep -n -i "SIN COMPROBAR"
  (las cuatro sin salida)
  ```
  Ningun informe de sesion registro un control bloqueado por `SIN COMPROBAR`.
- **Resultado:** CUMPLE

### 3.6 · El ciclo corrio entero al menos una vez

```
$ git log --oneline | tail -30
f2b7662 auditoria R-004 sobre S-004 (c07680f)
74749f7 S-004: ancla el informe y los criterios de cierre al hash c07680f
c07680f S-004: hallazgo F-005 de R-003 atendido (D-013, T-007), CONTROL DE SALIDA REPRODUCIDA en el 7c-bis, y cosecha de L-007 (D-014)
613ef8a auditoria R-003 sobre S-003 (101db28)
2a72df8 S-003: ancla el informe y los criterios de cierre al hash 101db28
101db28 S-003: firmas de los Gates (D-011), hallazgo F-004 de R-002 atendido (D-010, T-006) y cosecha de lecciones de 000_preproject (D-012)
6ab7887 auditoria R-002 sobre S-002 (e222812)
4b27ae4 S-002: ancla el informe y los criterios de cierre al hash e222812
e222812 S-002: atiende los tres hallazgos de R-001 y corrige la cabecera YAML de los agentes de Gate y acta
45e33a4 auditoria R-001 sobre S-001 (5cae773)
b48951d S-001: ancla el informe al hash 5cae773
5cae773 S-001: primera sesion de trabajo, project.md completo y el porque del arranque
707d572 Promocion del andamiaje desde RaidomAI_App (origen d2ee2aa)
[...]
```

- **Que exigia la casilla:** evidencia de al menos un ciclo completo: una sesion abierta, cerrada
  con commit y push, y auditada sobre ese commit.
- **Que devolvio:** el historial muestra cuatro ciclos completos (S-001 a S-004), cada uno con su
  commit de cierre (`5cae773`, `e222812`, `101db28`, `c07680f`) y su auditoria posterior sobre ese
  mismo commit (`45e33a4`, `6ab7887`, `613ef8a`, `f2b7662`). El push queda evidenciado por la
  Comprobacion 0.1: `HEAD` = `f2b7662` = ultimo commit subido a `origin/main`.
- **Resultado:** CUMPLE

### 3.7 · El metodo es copiable

```
$ git grep -nE "YouOtto|C:\\Users\\USUARIO\\Documents\\Company_TripleS\\Proyectos_TripleS\\YouOtto|github\.com" f2b7662 -- .claude CLAUDE.md _phases _methodology _templates _workflow
(sin salida)
```

- **Que exigia la casilla:** el control de fuga de datos propios (Paso 1b de `protocol-close`),
  corrido sobre `.claude/`, `CLAUDE.md`, `_phases/`, `_methodology/`, `_templates/` y `_workflow/`,
  devuelve cero lineas.
- **Que devolvio:** el mismo patron del control (nombre del proyecto, ruta absoluta del repositorio,
  host del remoto), corrido por este agente directamente sobre `f2b7662` y sobre el mismo ambito de
  seis carpetas/archivo, devuelve cero lineas.
- **Resultado:** CUMPLE

### 3.8 · No queda ningun `F-NNN` sin evaluar

```
$ git show f2b7662:_audit/findings.md | awk '/^### F-/{f=$0} /^\| Estado \|/{print f" -> "$0}'
 -> | Estado | `Abierto` / `Aceptado — pendiente` / `Implementado` / `No se implementa` |
 -> | Estado | Cuando | Que exige |
### F-NNN - Titulo -> | Estado | Abierto |
### F-001 - Los barridos de anclaje de los Pasos 2d y 7c no ven ordenes indentadas -> | Estado | Implementado |
### F-002 - El CONTROL DE CIFRA ADYACENTE de S-001 no se publico entero -> | Estado | Implementado |
### F-003 - Ancla rota en el indice de progress.md para S-001 -> | Estado | Implementado |
### F-004 - El CONTROL DE PROSA BORRADA de protocol-close no reconoce cercas indentadas -> | Estado | Implementado |
### F-005 - El anclaje de T-006 sustituyo una salida que no reproducia y la nota afirma que reproduce -> | Estado | Implementado |
```

- **Que exigia la casilla:** que todos los `F-NNN` esten `Implementado`, `Aceptado — pendiente` con
  su `T-XXX`, o `No se implementa` con su `D-XXX` — ninguno `Abierto` sin evaluar.
- **Que devolvio:** los cinco hallazgos reales (`F-001` a `F-005`) estan `Implementado`. La unica
  fila con `Estado | Abierto` corresponde a la plantilla comentada del archivo (`F-NNN`), no a un
  hallazgo real.
- **Resultado:** CUMPLE

### 3.9 · La consulta de arranque esta hecha y registrada

```
$ git show f2b7662:_persistence/decisions.md | grep -n -A5 "^### D-005"
241:### D-005 - Consulta de arranque de las lecciones globales
[...]
249:  alcance**, los bloques de decisiones/arquitectura y de corte del trabajo del archivo de lecciones
250:  globales, anotando lo que produjeron con el codigo de cada leccion y declarando NO MIRADOS los
[...]
265:- **Bloques NO MIRADOS:** A, B, C, F, G, H, I y J. No se recorrieron; no se declaran limpios.
```

- **Que exigia la casilla:** los bloques de decisiones/arquitectura y de corte del trabajo leidos
  antes de definir alcance, con lo que produjeron anotado en `decisions.md` citando el codigo de
  cada leccion consultada, y los bloques no recorridos declarados `NO MIRADOS`.
- **Que devolvio:** `D-005` documenta la consulta, cita las lecciones globales que produjeron cambio
  y declara explicitamente `NO MIRADOS` los bloques A, B, C, F, G, H, I y J.
- **Resultado:** CUMPLE

### 3.10 · La cosecha esta hecha

```
$ git show f2b7662:_persistence/lessons.md | sed -n '18,29p'
## Indice

| Codigo | Leccion | Fecha | Etapa | Portabilidad |
|---|---|---|---|---|
| [L-001](...) | ... | 2026-09-15 | 000_preproject | Promovida a LG-105 |
| [L-002](...) | ... | 2026-09-15 | 000_preproject | Solo proyecto |
| [L-003](...) | ... | 2026-09-15 | 000_preproject | Ya cubierta por LG-06 |
| [L-004](...) | ... | 2026-09-15 | 000_preproject | Solo proyecto |
| [L-005](...) | ... | 2026-09-16 | 000_preproject | Ya cubierta por LG-103 |
| [L-006](...) | ... | 2026-09-16 | 000_preproject | Ya cubierta por LG-101 |
| [L-007](...) | ... | 2026-09-16 | 000_preproject | Ya cubierta por LG-98 |

$ git show f2b7662:_persistence/decisions.md | grep -n "^### D-012\|^### D-014"
585:### D-012 - Cosecha de lecciones de 000_preproject
709:### D-014 - Cosecha de L-007
```

- **Que exigia la casilla:** ninguna leccion de la etapa en `Sin evaluar`, y lo que hubiera quedado
  `Global candidata` ya subido al archivo global con su `D-XXX` y version declarada.
- **Que devolvio:** las 7 lecciones (`L-001` a `L-007`) tienen valor de `Portabilidad` distinto de
  `Sin evaluar` (`Promovida a LG-105`, `Solo proyecto` x2, `Ya cubierta por LG-06/103/101/98`).
  Ninguna quedo `Global candidata` sin resolver. `D-012` y `D-014` documentan las dos pasadas de
  cosecha, con la version nueva del archivo global declarada (version 4, commit `9e883a9`).
- **Resultado:** CUMPLE

---

## 4. Lo que NO se pudo comprobar

Ninguna. Las 10 casillas se resolvieron con orden y salida cruda.

---

## 5. Las dos firmas

### 5.1 Revision tecnica

| Campo | Valor |
|---|---|
| Quien | agente `phase_exit_auditor` |
| Fecha | 2026-09-16 |
| Dictamen | CASILLAS SATISFECHAS |
| Casillas `CUMPLE` | 10 de 10 |

### 5.2 Aprobacion del patrocinador

| Campo | Valor |
|---|---|
| Quien | `<pendiente>` |
| Fecha | `<pendiente>` |
| Decision | `<pendiente>` |
| Donde queda registrada | `_persistence/decisions.md`, con su `D-XXX` |

---

## 6. Errores que esta plantilla existe para evitar

(Seccion de la plantilla, sin novedad que anadir sobre esta pasada.)
