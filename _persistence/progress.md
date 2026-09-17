# progress.md

> 📄 **Se copia a `_persistence/progress.md`.** Se copia entero, con sus seis secciones vacias: el
> `session-closer` sobrescribe las secciones 1, 2 y 3 en cada cierre y anade una fila a la 5, y no
> puede escribir donde no hay sitio. Una seccion que falte no da error — hace que el cierre escriba
> en otro lado, o no escriba.
>
> ⛔ **Lo que se borra al copiar son los ejemplos, no las convenciones.** Las convenciones son las
> reglas del archivo, y `CLAUDE.md` manda leerlas antes de escribir en el.

---

> **Archivo principal del proyecto.** Da la vision general: como va el proyecto, cual es el
> avance, que es lo ultimo realizado y cual es el siguiente paso.
> **No detalla tareas** — el detalle de tareas vive en `tasks.md`.

---

## Indice

| Seccion | Contenido |
|---|---|
| [1. Estado general](#1-estado-general) | Etapa actual, salud del proyecto, avance |
| [2. Ultimo realizado](#2-ultimo-realizado) | Lo mas reciente que quedo terminado |
| [3. Siguiente paso](#3-siguiente-paso) | Que sigue ahora |
| [4. Hitos](#4-hitos) | Hitos del proyecto y su estado |
| [5. Bitacora](#5-bitacora) | Sesiones `S-XXX` (una jornada cada una, no un dia) |
| [6. Mapa de persistencia](#6-mapa-de-persistencia) | Que se registra en cada archivo |

### Sesiones

> Una sesion es una **jornada** de trabajo (manana, tarde, noche o dia completo). Puede haber
> varias en la misma fecha; cada una lleva su propio `S-XXX`.

| Codigo | Sesion | Fecha | Etapa |
|---|---|---|---|
| [S-001](#s-001---primera-sesion-de-trabajo-projectmd-completo-y-el-porque-del-arranque) | Primera sesion de trabajo: `project.md` completo y el porque del arranque | 2026-09-15 | 000_preproject |
| [S-002](#s-002---atendidos-los-tres-hallazgos-de-r-001-y-corregida-la-cabecera-yaml-de-los-agentes-de-gate-y-acta) | Atendidos los tres hallazgos de `R-001` y corregida la cabecera YAML de los agentes de Gate y acta | 2026-09-15 | 000_preproject |
| [S-003](#s-003---firmas-de-los-gates-hallazgo-f-004-de-r-002-atendido-y-cosecha-de-lecciones-de-000_preproject) | Firmas de los Gates, hallazgo `F-004` de `R-002` atendido, y cosecha de lecciones de `000_preproject` | 2026-09-16 | 000_preproject |
| [S-004](#s-004---hallazgo-f-005-de-r-003-atendido-control-de-salida-reproducida-en-el-7c-bis-y-cosecha-de-l-007) | Hallazgo `F-005` de `R-003` atendido, CONTROL DE SALIDA REPRODUCIDA en el 7c-bis, y cosecha de `L-007` | 2026-09-16 | 000_preproject |
| [S-005](#s-005---etapa-000_preproject-cerrada-promocion-de-dt-001-y-las-tres-recomendaciones-de-r-004-evaluadas) | Etapa `000_preproject` cerrada, promocion de `DT-001`, y las tres recomendaciones de `R-004` evaluadas | 2026-09-16 | 005_discovery |
| [S-006](#s-006---f-006-y-f-007-de-r-005-atendidos-firma-del-acta-de-000_preproject-y-t-008t-009t-011-implementadas) | `F-006` y `F-007` de `R-005` atendidos, firma del acta de `000_preproject`, y `T-008`/`T-009`/`T-011` implementadas | 2026-09-16 | 005_discovery |
| [S-007](#s-007---f-008-de-r-006-atendido-y-nuevo-estado-revocada-en-parte-para-decisions) | `F-008` de `R-006` atendido (control del 7c-quater acotado a lineas de orden), y nuevo estado `Revocada en parte por D-XXX` para `decisions.md` | 2026-09-16 | 005_discovery |
| [S-008](#s-008---f-009-de-r-007-atendido-dt-003-abierta-y-el-7c-quater-declara-el-punto-ciego-de-la-orden-partida) | `F-009` de `R-007` atendido (abre `DT-003`), y el 7c-quater declara el punto ciego de la orden partida en dos lineas | 2026-09-16 | 005_discovery |
| [S-009](#s-009---f-010-de-r-008-atendido-d-027-el-estado-de-una-tarea-lo-decide-el-diff-no-el-anclaje) | `F-010` de `R-008` atendido (`D-027`: el estado de una tarea lo decide el diff, no el anclaje), `T-014`/`T-015` pasan a `Implementada` | 2026-09-16 | 005_discovery |
| [S-010](#s-010---las-tres-recomendaciones-sin-hallazgo-de-r-009-evaluadas-y-dt-003-pagada-con-la-promocion-al-esqueleto) | Las tres recomendaciones sin hallazgo de `R-009` evaluadas, y `DT-003` pagada con la promocion al esqueleto (`D-032`) | 2026-09-16 | 005_discovery |
| [S-011](#s-011---f-011-de-r-010-aceptado-con-nota-en-t-019-y-dt-004-confirmada-y-pagada-d-035) | `F-011` de `R-010` aceptado con nota en `T-019`, y `DT-004` confirmada y pagada (`D-035`) | 2026-09-16 | 005_discovery |
| [S-012](#s-012---f-013-de-r-012-aceptado-nota-en-s-011-y-puerta-mecanica-en-el-anclaje-y-tres-recomendaciones-sin-hallazgo-evaluadas) | `F-013` de `R-012` aceptado (nota en `S-011` y puerta mecanica en el anclaje), y tres recomendaciones sin hallazgo evaluadas | 2026-09-17 | 005_discovery |

---

## Convenciones

| Campo | Valores posibles |
|---|---|
| Codigo de sesion | `S-XXX`, correlativo, no se reutiliza |
| Codigo de hito | `H-nn`, correlativo, no se reutiliza |
| Salud | `En marcha` / `Bloqueado` / `En riesgo` / `Detenido` |
| Estado de hito | `Pendiente` / `En curso` / `Alcanzado` / `Cancelado` |

🚨 **Este archivo no se escribe a mano durante la jornada.** Lo produce el cierre de sesion, junto
con `tasks.md`. Escribirlo sobre la marcha hace que diga lo que se penso hacer y no lo que se hizo.

🚨 **La fecha de una sesion es la del reloj, no la siguiente a la de la sesion anterior.** Se deriva
con `date +%F` al cerrar, y el cierre la contrasta contra la del commit antes de dar la sesion por
cerrada. Incrementarla por sesion —«es otra jornada, luego es otro dia»— hace que el registro
**afirme algo comprobablemente falso**, y arrastra con el cada nota fechada de la jornada. **Esta
regla nacio de un defecto real.**

🚨 **El indice de sesiones se escribe a mano, sin generador.** Cada fila enlaza por ancla a su
entrada en la [Bitacora](#5-bitacora).

---

## 1. Estado general

| Campo | Valor |
|---|---|
| Etapa actual | `005_discovery` |
| Ultima actualizacion | `2026-09-17 (S-012)` |
| Salud | `En marcha` |
| Avance de la etapa | `report_auditor` audito los tres commits de `S-011` (`079b0a4`, `fdfca7b`, `1358c3c`) en `R-012` y entrego `F-013`: el commit de anclaje `fdfca7b` se subio con la NOTA DE CIERRE en su marcador de pendiente y el Paso 7c-ter fallando, y la nota se completo despues en un tercer commit (`1358c3c`) que el informe no declaraba. `D-036` (aceptada, `report_auditor`; usuario elige la puerta mecanica): nota fechada en la seccion 7 de `_audit/S-011.md` que nombra `1358c3c` sin reescribir la linea publicada (`T-021`), y el bloque del commit de anclaje de `protocol-close` pasa a correr los controles del 7c-ter y del 7c-quater y solo commitear si los dos salen vacios, imprimiendo `PUERTA CERRADA` si no (`T-022`). Ademas, tres recomendaciones sin hallazgo de `R-012`: `D-037` (aceptada) anade al desfase 4 de `protocol-start` una tercera orden que ignora los commits cuyo cambio en `_persistence/` solo ancla `<hash>` y anade lineas `📌` (`T-023`); `D-038` (aceptada) deja `R-011`/`F-012` retirados y no reutilizables, porque esa auditoria la ejecuto el propio `session-closer` sobre su cierre, no `report_auditor` (revertida en `9eb9d49`), y registra `L-013`; `D-039` (aceptada) cambia el trailer literal `Claude Opus 5` del Paso 7 de `protocol-close` por `<modelo>`, el que ejecuta el cierre (`T-024`). `T-021`, `T-022`, `T-023` y `T-024` quedan `Implementada`: su trabajo esta en el diff de esta sesion y sus criterios de cierre (los de `D-036`/`D-037`/`D-039`) reproducen |
| Bloqueos activos | Ninguno bloqueante. `A-001` (abierto, no bloqueante): si el historial de juegos registrados es dato de persona; su disparador —la clasificacion de actores de `005_discovery`— ya esta activo al entrar en esta etapa. `DT-002` sigue `No implementada`, confirmada y sin pagar |

---

## 2. Ultimo realizado

Doceava sesion de trabajo. Segun el diff: se acepto `F-013` de `R-012` con `D-036` — nota fechada en
la seccion 7 de `_audit/S-011.md` que declara que la NOTA DE CIERRE se commiteo en `1358c3c`, no en
`fdfca7b`, sin reescribir la linea publicada (`T-021`); y el bloque del commit de anclaje de
`protocol-close` pasa a estar detras de una puerta mecanica que repite los controles del 7c-ter y del
7c-quater y solo commitea si los dos salen vacios (`T-022`). Se evaluaron las tres recomendaciones sin
hallazgo de `R-012`: `D-037` anade al desfase 4 de `protocol-start` una tercera orden que descarta los
commits de solo anclaje (`T-023`); `D-038` deja retirados `R-011`/`F-012` porque esa auditoria la
ejecuto el propio `session-closer` sobre su propio cierre y se revirtio (`9eb9d49`), y escribe `L-013`;
`D-039` cambia el trailer literal `Claude Opus 5` del Paso 7 de `protocol-close` por `<modelo>` (el que
ejecuta el cierre) (`T-024`). `T-021`, `T-022`, `T-023` y `T-024` quedan `Implementada` en este mismo
commit: su trabajo esta en el diff y sus criterios de cierre reproducen contra el arbol de trabajo,
por el criterio de `D-027`/`D-028`.

---

## 3. Siguiente paso

Evaluar el informe de auditoria que `report_auditor` entregue sobre el commit de esta sesion
(`S-012`). Con la etapa `005_discovery` en marcha, el primer trabajo de producto sigue siendo la
clasificacion de actores (`_templates/005_discovery/010_actors.md`), que es ademas el disparador de
`A-001` (si el historial de juegos registrados es dato de persona). El esqueleto de arranque vuelve a
diferir en dos archivos (`.claude/skills/protocol-close/SKILL.md` y `.claude/skills/protocol-start/SKILL.md`,
verificado en el Paso 2f de este cierre): las promociones de `D-036`, `D-037` y `D-039` quedan
pendientes de aprobacion del usuario. Sigue abierta `DT-002` (el CONTROL DE SALIDA REPRODUCIDA no
reejecuta las ordenes), confirmada y sin pagar.

---

## 4. Hitos

| Codigo | Hito | Estado | Fecha |
|---|---|---|---|
| — | — | — | — |

---

## 5. Bitacora

<!--
Plantilla:

### S-XXX - Titulo de la sesion
| Campo | Valor |
|---|---|
| Fecha | AAAA-MM-DD |
| Etapa | |
| Tareas | T-XXX, T-XXX |

- **Que se hizo:** resumen de la jornada.
- **Que quedo abierto:** lo que sigue pendiente al cerrar.
-->

### S-001 - Primera sesion de trabajo: `project.md` completo y el porque del arranque
| Campo | Valor |
|---|---|
| Fecha | 2026-09-15 |
| Etapa | 000_preproject |
| Tareas | T-001 |

- **Que se hizo:** se completo `project.md` a partir de la plantilla del esqueleto (identidad,
  rutas, remoto, etapas declaradas, carpetas propias); se recibio `_brief/client_brief.md`; se
  declararon las siete etapas del metodo y los Gates 1 y 2 (`D-001`, `D-003`); se escribio el
  inventario de acciones irreversibles (`D-006`, `C-001`) que `CLAUDE.md` exigia y no existia; se
  fijaron dueno y sitio de evaluacion/observabilidad/seguridad (`D-007`); se hizo la primera
  consulta de arranque a las lecciones globales, bloques D y E (`D-005`); se decidio conservar el
  historial heredado del esqueleto en vez de rehacerlo con push forzado (`D-004`); y se registraron
  dos supuestos (`A-001`, `A-002`) y dos lecciones (`L-001`, `L-002`).
- **Que quedo abierto:** `A-001` (si el historial de juegos es dato de persona, disparador en
  `005_discovery`) y `A-002` (si los agentes de Gate/acta aparecen tras reiniciar Claude Code).
  `_persistence/` y `_audit/` quedan operativos por primera vez con esta sesion.

### S-002 - Atendidos los tres hallazgos de `R-001` y corregida la cabecera YAML de los agentes de Gate y acta
| Campo | Valor |
|---|---|
| Fecha | 2026-09-15 |
| Etapa | 000_preproject |
| Tareas | T-003, T-004, T-005 |

- **Que se hizo:** se aceptaron los tres hallazgos de `R-001` (`F-001`, `F-002`, `F-003`) y se
  registraron `Aceptado — pendiente` en `_audit/findings.md`; se escribieron `D-008` (los patrones de
  anclaje de `protocol-close` admiten ordenes indentadas) y `D-009` (se corrige el `: ` sin comillas
  de la `description` de `gate1_auditor`, `gate2_auditor` y `phase_exit_auditor`, que invalidaba su
  YAML); se anclo por nota fechada el criterio de `T-001`; se anadio a `_audit/S-001.md` la nota con
  la salida completa del CONTROL DE CIFRA ADYACENTE; se corrigio el ancla de la fila `S-001` en este
  indice; y se refuto `A-002` / confirmo `A-003` con la causa real (YAML invalido, no falta de
  reinicio). Se escribieron `L-003` y `L-004`. `T-003`, `T-004` y `T-005` quedan `Implementada`.
- **Que quedo abierto:** `T-002` (asignar las firmas de los Gates), ahora desbloqueada porque los tres
  agentes cargan; y `A-001`, sin cambios, con disparador en `005_discovery`.

### S-003 - Firmas de los Gates, hallazgo `F-004` de `R-002` atendido, y cosecha de lecciones de `000_preproject`
| Campo | Valor |
|---|---|
| Fecha | 2026-09-16 |
| Etapa | 000_preproject |
| Tareas | T-002, T-006 |

- **Que se hizo:** se registro `D-011` (firma tecnica de cada Gate para su agente, firma del
  patrocinador para el usuario), que cierra `T-002`. Se acepto `F-004` de `R-002` con `D-010`: se
  amplio el patron de cerca de bloque en las doce apariciones de `protocol-close`, `protocol-audit`
  y `protocol-start`; `F-004` queda `Aceptado — pendiente` con `T-006`, que esta sesion cierra
  `Implementada`. Se hizo la cosecha de lecciones de `000_preproject` (`D-012`): `L-001` promovida a
  `LG-105` (version 4 de `global_lessons.md`, commit `9e883a9`); `L-002` y `L-004` quedan `Solo
  proyecto`; `L-003`, `L-005` y `L-006` quedan `Ya cubierta` por lecciones globales existentes. `T-002`
  y `T-006` quedan `Implementada`.
- **Que quedo abierto:** falta lanzar `report_auditor` sobre el commit de esta sesion; con eso hecho,
  repasar la condicion de salida de `000_preproject` casilla por casilla. `A-001` sigue sin cambios.

### S-004 - Hallazgo `F-005` de `R-003` atendido, CONTROL DE SALIDA REPRODUCIDA en el 7c-bis, y cosecha de `L-007`
| Campo | Valor |
|---|---|
| Fecha | 2026-09-16 |
| Etapa | 000_preproject |
| Tareas | T-007 |

- **Que se hizo:** se acepto `F-005` de `R-003` con `D-013`: nota fechada bajo el criterio de cierre
  de `T-006` con las dos salidas (publicada y anclada), y un CONTROL DE SALIDA REPRODUCIDA nuevo en
  el Paso 7c-bis de `protocol-close` que compara, entrada por entrada, la salida de los bloques de
  «Criterio de cierre» del commit de la sesion contra el arbol ya anclado; su rotulo se anadio al
  Paso 7c-ter (cinco rotulos en vez de cuatro) y a la plantilla de la NOTA DE CIERRE del informe.
  `F-005` queda `Aceptado — pendiente` con `T-007`, que esta sesion cierra `Implementada`. Se escribio
  `L-007` y se cosecho (`D-014`): `Ya cubierta por LG-98`, sin subir nada al archivo global (sigue en
  version 4, commit `9e883a9`).
- **Que quedo abierto:** falta lanzar `report_auditor` sobre el commit de esta sesion. `DT-001` sigue
  `No implementada`, ahora tambien por el cambio de esta sesion en `protocol-close/SKILL.md`. `A-001`
  sigue sin cambios.

### S-005 - Etapa `000_preproject` cerrada, promocion de `DT-001`, y las tres recomendaciones de `R-004` evaluadas
| Campo | Valor |
|---|---|
| Fecha | 2026-09-16 |
| Etapa | 005_discovery |
| Tareas | T-008, T-009 |

- **Que se hizo:** el usuario firmo `D-015`, **ETAPA CERRADA** para `000_preproject` (acta de
  `phase_exit_auditor` sobre `f2b7662`, commit `4fad4dd`, diez casillas `CUMPLE`; `R-004` sin
  hallazgos). La etapa declarada pasa a `005_discovery`. El usuario confirmo `DT-001` y pidio pagarla
  en el acto con `protocol-promote`: `D-016` promovio los seis archivos adelantados al esqueleto de
  arranque (commit `4d20ce2` en `SDAI_TripleS`, subido); `DT-001` queda `Implementada` (evidencia:
  `D-016`). Se evaluaron las tres recomendaciones sin hallazgo de `R-004`: `D-017` acepta declarar el
  limite del CONTROL DE SALIDA REPRODUCIDA (`T-008`, abre `DT-002`); `D-018` rechaza corregir el
  recuento de la NOTA DE CIERRE de `S-004.md`, ya auditado y sin efecto; `D-019` acepta anclar las
  ordenes `git diff --cached` de la seccion 1 del informe (`T-009`).
- **Que quedo abierto:** falta lanzar `report_auditor` sobre el commit de esta sesion. `T-008` y
  `T-009` quedan `No implementada`, etapa `005_discovery`. `DT-002` confirmada y sin pagar. `A-001`
  sigue `Abierto`, con su disparador ya activo al entrar en `005_discovery`.

### S-006 - `F-006` y `F-007` de `R-005` atendidos, firma del acta de `000_preproject`, y `T-008`/`T-009`/`T-011` implementadas
| Campo | Valor |
|---|---|
| Fecha | 2026-09-16 |
| Etapa | 005_discovery |
| Tareas | T-008, T-009, T-010, T-011 |

- **Que se hizo:** se evaluaron los dos hallazgos de `R-005` sobre `S-005`. `D-020` acepta `F-006`:
  la tabla 5.2 del acta de `000_preproject` queda con la firma del patrocinador (JD Rodriguez - Main
  Sponsor, 2026-09-16, ETAPA CERRADA), `T-010` `Implementada`; `D-015` queda `Revocada por D-020` solo
  en la clausula «el acta no se edita». `D-021` acepta `F-007`: la NOTA DE CIERRE de `protocol-close`
  pasa a exigir la forma anclada de la orden del Paso 2d con su recuento, bajo un sexto rotulo
  `**ORDEN DEL PASO 2d ANCLADA — salida:**`, `T-011` `Implementada`. `D-022` fijo el como de `T-008`
  (declarar que el CONTROL DE SALIDA REPRODUCIDA no reejecuta), `T-009` (traducir en el Paso 7c las
  ordenes `git diff --cached` de la seccion 1) y `T-011`, las tres sobre
  `.claude/skills/protocol-close/SKILL.md`; las tres quedan `Implementada`. `F-006` y `F-007` quedan
  `Aceptado — pendiente` en `_audit/findings.md`. Se escribio `L-008`.
- **Que quedo abierto:** falta lanzar `report_auditor` sobre el commit de esta sesion. El esqueleto de
  arranque vuelve a diferir en `protocol-close/SKILL.md`, pendiente de promocion con aprobacion del
  usuario. `DT-002` sigue `No implementada`, confirmada y sin pagar. `A-001` sigue `Abierto`.

### S-007 - `F-008` de `R-006` atendido, y nuevo estado `Revocada en parte por D-XXX` para `decisions.md`
| Campo | Valor |
|---|---|
| Fecha | 2026-09-16 |
| Etapa | 005_discovery |
| Tareas | T-012, T-013 |

- **Que se hizo:** se acepto `F-008` de `R-006` con `D-023`: la segunda orden del Paso 7c-quater de
  `protocol-close` pasa a contar solo **lineas de orden** en forma de staging, no cualquier mencion
  de `diff --cached`; probada contra `S-004`, `S-005` y `S-006`. Revoca en parte `D-022` (solo su
  punto 2). `F-008` queda `Aceptado — pendiente`, citando `T-012`/`D-023`. Ademas, por una
  recomendacion sin hallazgo de `R-006`, el usuario eligio anadir el estado
  `Revocada en parte por D-XXX` a `decisions.md` (`D-024`): convenciones, plantilla,
  `protocol-start` (declara que no es estado cerrado), y aplicado a `D-015` y `D-022`. Se escribio
  `L-009`.
- **Que quedo abierto:** falta lanzar `report_auditor` sobre el commit de esta sesion. El esqueleto
  de arranque sigue por detras en tres archivos, pendiente de promocion con aprobacion del usuario.
  `DT-002` sigue `No implementada`, confirmada y sin pagar. `A-001` sigue `Abierto`.

### S-008 - `F-009` de `R-007` atendido (abre `DT-003`), y el 7c-quater declara el punto ciego de la orden partida
| Campo | Valor |
|---|---|
| Fecha | 2026-09-16 |
| Etapa | 005_discovery |
| Tareas | T-014, T-015 |

- **Que se hizo:** se acepto `F-009` de `R-007` con `D-025`: `S-007.md` no se reescribe, y se abre
  `DT-003` (`No implementada`, `Confirmada`, `Media`) para el desfase actual con el esqueleto de
  arranque, verificado vigente contra `HEAD` (`3aa301c`). `F-009` queda `Aceptado — pendiente`,
  citando `T-014`/`D-025`. Sobre una recomendacion sin hallazgo de `R-007` (seccion 5), el usuario
  eligio declarar en el parrafo de limite del Paso 7c-quater de `protocol-close` que una orden entre
  comillas invertidas partida en dos lineas, con la tuberia en la segunda, no se detecta (`D-026`,
  `T-015`); el patron no se amplio. Se escribio `L-010` sobre un defecto en la propia prueba del
  punto ciego (la primera prueba no reproducia el caso que decia probar).
- **Que quedo abierto:** falta lanzar `report_auditor` sobre el commit de esta sesion. `T-014` y
  `T-015` quedan `No implementada` (su criterio de cierre se ancla en el Paso 7c-bis de este mismo
  cierre). `DT-002` y `DT-003` confirmadas y sin pagar. `A-001` sigue `Abierto`.

### S-009 - `F-010` de `R-008` atendido (`D-027`: el estado de una tarea lo decide el diff, no el anclaje)
| Campo | Valor |
|---|---|
| Fecha | 2026-09-16 |
| Etapa | 005_discovery |
| Tareas | T-016 |

- **Que se hizo:** se acepto `F-010` de `R-008` (`T-014` y `T-015` quedaban `No implementada` con su
  trabajo ya en el diff de `27c03bb`, contra la practica de `S-004`/`S-006`/`S-007`, verificado
  vigente contra `HEAD` en `D-027`). El usuario elige el criterio de esas tres sesiones: una tarea
  cuyo trabajo esta en el commit de su sesion y cuyo criterio de cierre reproduce pasa a
  `Implementada` en ese mismo commit, sin esperar al anclaje del Paso 7c-bis; y escribirlo en el
  Paso 4 de `protocol-close/SKILL.md`. `T-014` y `T-015` pasan a `Implementada` con nota fechada;
  nace `T-016`. `F-010` queda `Aceptado — pendiente`, citando `T-016`/`D-027`, en fila y en ficha de
  `_audit/findings.md`. `S-008.md` no se reescribe. Se escribio `L-011`.
- **Que quedo abierto:** falta lanzar `report_auditor` sobre el commit de esta sesion. Las ordenes
  del criterio de cierre de `D-027` se anclan en el Paso 7c-bis de este mismo cierre. `DT-002` y
  `DT-003` siguen `No implementada`, confirmadas y sin pagar (`DT-003` crece con la edicion de esta
  sesion a `protocol-close/SKILL.md`, mismos tres archivos). `A-001` sigue `Abierto`.

### S-010 - Las tres recomendaciones sin hallazgo de `R-009` evaluadas, y `DT-003` pagada con la promocion al esqueleto (`D-032`)
| Campo | Valor |
|---|---|
| Fecha | 2026-09-16 |
| Etapa | 005_discovery |
| Tareas | T-017, T-018, T-019 |

- **Que se hizo:** `R-009` sobre `S-009` no entrego hallazgos. Se evaluaron sus tres recomendaciones
  sin hallazgo y una cuarta sobre una errata de `S-009.md`. `D-028` (aceptada): el Paso 4 de
  `protocol-close` declara tambien el caso contrario al de `D-027` — un criterio que no reproduce deja
  la tarea en `No implementada` aunque el trabajo este en el diff; `T-017` `Implementada`. `D-029`
  (aceptada): nota fechada bajo `D-027` que ancla, con orden y salida cruda contra los commits de
  sesion y de anclaje de `S-004`/`S-006`/`S-007`, la prueba de que sus criterios seguian con `<hash>`
  en el commit de sesion; `T-018` `Implementada`. `D-030` (aceptada): `DT-003` sube a Importancia
  `Alta` y su promocion se ordena antes que la clasificacion de actores. `D-031` (rechazada): no se
  corrige el orden invertido de los hashes en la seccion 3 de `S-009.md`, ya auditado, mismo criterio
  que `D-018`. `D-032` (usuario) ejecuta la promocion que pedia `D-030`: el primer intento choco con el
  Paso 0 de `protocol-promote` porque la frase de `D-028` estaba sin commitear en
  `protocol-close/SKILL.md`; el usuario aprobo retirarla del arbol, promover los tres archivos del
  andamiaje y la copia de la raiz `_persistence/decisions.md` desde el ultimo commit auditado
  (`95c5cfd`) al esqueleto de arranque (commit `447c2a0` en `SDAI_TripleS`, subido), y reponerla
  despues. `DT-003` queda `Implementada`, con la frase de `D-028` fuera a proposito de esa promocion
  (viaja en la siguiente). Se escribio `L-012`: la promocion va al principio de una sesion, antes de
  tocar el andamiaje, para no bloquearla con una correccion sin commitear.
- **Que quedo abierto:** falta lanzar `report_auditor` sobre el commit de esta sesion. El esqueleto de
  arranque vuelve a diferir en `protocol-close/SKILL.md` por la frase de `D-028`, dejada fuera a
  proposito de `D-032`: no es `DT-003` nueva, viaja en el lote siguiente. `DT-002` sigue
  `No implementada`, confirmada y sin pagar. `A-001` sigue `Abierto`.

### S-011 - `F-011` de `R-010` aceptado con nota en `T-019`, y `DT-004` confirmada y pagada (`D-035`)
| Campo | Valor |
|---|---|
| Fecha | 2026-09-16 |
| Etapa | 005_discovery |
| Tareas | T-020 |

- **Que se hizo:** se acepto `F-011` de `R-010` (`T-019` quedaba `Implementada` con un alcance que su
  propio commit declaraba no cumplido: la frase de `D-028` fuera de la promocion de `D-032`). `D-034`
  (aceptada, opcion (a) del auditor): nota fechada en `T-019` que saca esa frase de su alcance y remite
  a `D-032`/`DT-004`, con la comparacion de blobs contra el esqueleto; `T-019` sigue `Implementada`.
  Nace `T-020`, y esta misma sesion la cierra `Implementada`: su trabajo (la nota en `T-019`) ya esta
  en el diff, y por el criterio de `D-027`/`D-028` no hace falta esperar al anclaje del Paso 7c-bis.
  `D-033` (rechaza corregir): el desfase 4 que reporto el arranque de esta sesion no es real —
  `progress.md` describe bien el estado, y lo unico posterior a `a61e453` son las lineas `📌` del Paso
  7c-bis, que tiene prohibido tocar `progress.md`. `D-035` (usuario): con las seis areas del esqueleto
  limpias y subidas, se confirma `DT-004` y se promueve `.claude/skills/protocol-close/SKILL.md` (la
  frase de `D-028`) desde `1add289` al commit `7f4381e` del esqueleto de arranque, subido; `DT-004`
  queda `Implementada` y `Confirmada`. Se anadio una nota de reincidencia a `L-012`: el orden de
  promover antes de tocar el andamiaje volvio a funcionar.
- **Que quedo abierto:** falta lanzar `report_auditor` sobre el commit de esta sesion. `DT-002` sigue
  `No implementada`, confirmada y sin pagar. `A-001` sigue `Abierto`.

### S-012 - `F-013` de `R-012` aceptado (nota en `S-011` y puerta mecanica en el anclaje), y tres recomendaciones sin hallazgo evaluadas
| Campo | Valor |
|---|---|
| Fecha | 2026-09-17 |
| Etapa | 005_discovery |
| Tareas | T-021, T-022, T-023, T-024 |

- **Que se hizo:** se acepto `F-013` de `R-012` (el commit de anclaje `fdfca7b` de `S-011` se subio con
  la NOTA DE CIERRE en su marcador de pendiente y el Paso 7c-ter fallando; la nota se completo despues
  en `1358c3c`, sin que el informe lo declarara) con `D-036`: nota fechada en la seccion 7 de
  `_audit/S-011.md` que nombra `1358c3c` sin reescribir la linea publicada (`T-021`); y el bloque del
  commit de anclaje del Paso 7c-bis de `protocol-close` pasa a correr los controles del 7c-ter y del
  7c-quater y solo commitear si los dos salen vacios, imprimiendo `PUERTA CERRADA` en caso contrario
  (`T-022`). Se evaluaron las tres recomendaciones sin hallazgo de `R-012`: `D-037` anade al desfase 4
  del arranque una tercera orden que ignora los commits cuyo cambio en `_persistence/` solo ancla
  `<hash>` y anade lineas `📌`, probada sobre cuatro anclajes reales y dos rangos con trabajo real
  (`T-023`); `D-038` deja `R-011` y `F-012` retirados y no reutilizables porque esa auditoria la
  ejecuto el propio `session-closer` sobre su propio cierre y no `report_auditor` (revertida en
  `9eb9d49`), y escribe `L-013`; `D-039` cambia el trailer literal `Claude Opus 5` del Paso 7 de
  `protocol-close` por `<modelo>`, el que ejecuta el cierre, porque el agente del cierre corre en
  `Sonnet` y no en `Opus` (`T-024`). `T-021`, `T-022`, `T-023` y `T-024` quedan `Implementada` en este
  mismo commit, por el criterio de `D-027`/`D-028`: su trabajo esta en el diff y sus criterios de
  cierre reproducen contra el arbol de trabajo, aunque las ordenes que citan `<hash>` en `D-036`,
  `D-037` y `D-039` se anclen todavia en el Paso 7c-bis de este mismo cierre.
- **Que quedo abierto:** falta lanzar `report_auditor` sobre el commit de esta sesion. El esqueleto de
  arranque vuelve a diferir en `protocol-close/SKILL.md` y `protocol-start/SKILL.md`, pendiente de
  promocion con aprobacion del usuario. `DT-002` sigue `No implementada`, confirmada y sin pagar.
  `A-001` sigue `Abierto`.

---

## 6. Mapa de persistencia

| Archivo | Registra | Codigo |
|---|---|---|
| `progress.md` | Vision general, avance, ultimo hecho, siguiente paso | `S-XXX` sesiones, `H-nn` hitos |
| `tasks.md` | Tareas realizadas y por realizar | `T-XXX` |
| `decisions.md` | Decisiones tomadas en el proyecto | `D-XXX` |
| `constraints.md` | Limitaciones y restricciones del proyecto | `C-XXX` |
| `assumptions.md` | Supuestos vigentes por validar | `A-XXX` |
| `lessons.md` | Lecciones aprendidas durante la ejecucion | `L-XXX` |
| `techdebt.md` | Deuda tecnica del proyecto | `DT-XXX` |
