# _audit/index.md

> 📄 **Se copia a `_audit/index.md`.** Se copia entero, con el tablero vacio.
>
> ⚠️ **Sin este archivo, `_audit/` no existe en el arbol:** `git` no versiona carpetas vacias. Y sin
> sus convenciones, la primera pasada de `report_auditor` tiene que inventarse la forma del tablero.
>
> ⛔ **Lo que se borra al copiar son las filas, no las convenciones.**

---

> **Tablero de auditorias.** Una fila por sesion cerrada: su informe, la auditoria que lo juzgo y
> en que quedo. Es la vista rapida — el detalle de cada hallazgo vive en `findings.md`.

---

## Tablero

| Informe | Sesion | Fecha | Commit auditado | Auditoria | Veredicto | Hallazgos |
|---|---|---|---|---|---|---|
| `S-001.md` | S-001 | 2026-09-15 | 5cae773 | `R-001.md` | Con hallazgos (3) | F-001, F-002, F-003 |
| `S-002.md` | S-002 | 2026-09-15 | e222812 | `R-002.md` | Con hallazgos (1) | F-004 |
| `S-003.md` | S-003 | 2026-09-16 | 101db28 | `R-003.md` | Con hallazgos (1) | F-005 |
| `S-004.md` | S-004 | 2026-09-16 | c07680f | `R-004.md` | Sin hallazgos | - |
| `S-005.md` | S-005 | 2026-09-16 | 5884e98 | `R-005.md` | Con hallazgos (2) | F-006, F-007 |
| `S-006.md` | S-006 | 2026-09-16 | 081385a | `R-006.md` | Con hallazgos (1) | F-008 |
| `S-007.md` | S-007 | 2026-09-16 | 87d10b8 | `R-007.md` | Con hallazgos (1) | F-009 |
| `S-008.md` | S-008 | 2026-09-16 | 27c03bb | `R-008.md` | Con hallazgos (1) | F-010 |
| `S-009.md` | S-009 | 2026-09-16 | 8509c18 | `R-009.md` | Sin hallazgos | - |
| `S-010.md` | S-010 | 2026-09-16 | a61e453 | `R-010.md` | Con hallazgos (1) | F-011 |
| `S-011.md` | S-011 | 2026-09-16 | 079b0a4 | `R-012.md` | Con hallazgos (1) | F-013 |

---

## Convenciones

| Campo | Valores posibles |
|---|---|
| Informe | `S-XXX.md`, lo escribe el cierre de sesion |
| Commit auditado | el hash corto del commit que contiene ese informe |
| Auditoria | `R-XXX.md`, o `Pendiente` si todavia no se ha auditado |
| Veredicto | `Pendiente` / `Sin hallazgos` / `Con hallazgos (N)` |
| Hallazgos | los codigos `F-NNN` que abrio esa auditoria, o `-` |

🔑 **El emparejamiento es 1:1.** Cada `R-XXX.md` audita exactamente un `S-XXX.md`, sobre el commit
que lo contiene. Sin ese anclaje la auditoria juzga un relato: con el, cada afirmacion del informe
se puede contrastar contra el `git show` de ese commit.

🚨 **`Pendiente` es lo que escribe el cierre; el veredicto lo escribe la auditoria.** El cierre no
puede saber que va a encontrar alguien que todavia no ha mirado.

⚠️ **El commit auditado no lo escribe el cierre**, y no es un olvido: la fila se escribe **antes**
del commit que la contiene. Lo rellena la auditoria, que ya lo tiene delante — y lo que escribe es
**el hash literal de la cabecera del informe**, el mismo que acaba de auditar.

🚨 **No se deriva con `git log -1 --format=%h -- _audit/S-XXX.md`.** Cuando el cierre ancla el
informe con un segundo commit, esa orden devuelve **el commit de anclaje** —que lleva un solo
archivo— y no el commit de la sesion, que es el que la auditoria juzgo. Una fila que publique el de
anclaje manda a quien la lea a un estado que no es el que se juzgo. El procedimiento vive en
`protocol-audit`.

📌 **Esa orden sigue sirviendo para una cosa, y conviene saber cual:** dice **si hubo commit de
anclaje** y cual es. Como dato de historial vale; como fuente de la columna, no.

🚨 **La columna `Fecha` es la del commit, no la que le toque a la sesion por orden.** El cierre la
deriva con `date +%F` y la contrasta contra la del commit antes de dar la sesion por cerrada.
**Esta regla nacio de un defecto real:** un tablero cuyas fechas no coinciden con `git log` deja de
ordenar nada, que es lo contrario de para lo que existe.

⚠️ **Una fila ya auditada no se reescribe para corregirle la fecha.** Cambiarla convertiria «falta
exactitud» en «hay exactitud falsa», esta vez sin nadie que lo note. Lo que se corrige es la regla,
hacia adelante, con su nota fechada.

🚨 **Una fila con `Auditoria: Pendiente` y mas de una sesion de antiguedad es una auditoria que no
se corrio.** El arranque la reporta arriba del todo. Un paso obligatorio cuyo olvido no deja huella
se olvida.
