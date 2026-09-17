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
| [S-007](#s-007---f-008-de-r-006-atendido-y-nuevo-estado-revocada-en-parte-por-d-xxx-para-decisionsmd) | `F-008` de `R-006` atendido (control del 7c-quater acotado a lineas de orden), y nuevo estado `Revocada en parte por D-XXX` para `decisions.md` | 2026-09-16 | 005_discovery |
| [S-008](#s-008---f-009-de-r-007-atendido-abre-dt-003-y-el-7c-quater-declara-el-punto-ciego-de-la-orden-partida) | `F-009` de `R-007` atendido (abre `DT-003`), y el 7c-quater declara el punto ciego de la orden partida en dos lineas | 2026-09-16 | 005_discovery |
| [S-009](#s-009---f-010-de-r-008-atendido-d-027-el-estado-de-una-tarea-lo-decide-el-diff-no-el-anclaje) | `F-010` de `R-008` atendido (`D-027`: el estado de una tarea lo decide el diff, no el anclaje), `T-014`/`T-015` pasan a `Implementada` | 2026-09-16 | 005_discovery |
| [S-010](#s-010---las-tres-recomendaciones-sin-hallazgo-de-r-009-evaluadas-y-dt-003-pagada-con-la-promocion-al-esqueleto-d-032) | Las tres recomendaciones sin hallazgo de `R-009` evaluadas, y `DT-003` pagada con la promocion al esqueleto (`D-032`) | 2026-09-16 | 005_discovery |
| [S-011](#s-011---f-011-de-r-010-aceptado-con-nota-en-t-019-y-dt-004-confirmada-y-pagada-d-035) | `F-011` de `R-010` aceptado con nota en `T-019`, y `DT-004` confirmada y pagada (`D-035`) | 2026-09-16 | 005_discovery |
| [S-012](#s-012---f-013-de-r-012-aceptado-nota-en-s-011-y-puerta-mecanica-en-el-anclaje-y-tres-recomendaciones-sin-hallazgo-evaluadas) | `F-013` de `R-012` aceptado (nota en `S-011` y puerta mecanica en el anclaje), y tres recomendaciones sin hallazgo evaluadas | 2026-09-17 | 005_discovery |
| [S-013](#s-013---f-014-de-r-013-aceptado-d-041-promocion-de-protocol-close-y-protocol-start-d-040-urgencia-de-hallazgos-d-043-y-reparto-de-005_discovery-d-044) | `F-014` de `R-013` aceptado (`D-041`), promocion de `protocol-close` y `protocol-start` (`D-040`), urgencia de hallazgos (`D-043`) y reparto de `005_discovery` (`D-044`) | 2026-09-17 | 005_discovery |
| [S-014](#s-014---f-016-y-f-017-de-r-015-aceptados-y-aplazados-d-046-r-014f-015-retirados-d-047-y-el-agente-de-cierre-solo-puede-invocar-protocol-close-d-048) | `F-016` y `F-017` de `R-015` aceptados y aplazados (`D-046`), `R-014`/`F-015` retirados (`D-047`), y el agente de cierre solo puede invocar `protocol-close` (`D-048`) | 2026-09-17 | 005_discovery |
| [S-015](#s-015---f-018-de-r-016-aceptado-y-corregido-d-049-t-032-verificada-con-la-sonda-hook-probe-d-050-y-pasos-1-a-7-de-005_discovery-con-el-patrocinador-d-051d-058) | `F-018` de `R-016` aceptado y corregido (`D-049`), `T-032` verificada con la sonda `hook-probe` (`D-050`), y Pasos 1 a 7 de `005_discovery` con el patrocinador (`D-051`..`D-058`) | 2026-09-17 | 005_discovery |
| [S-016](#s-016---f-019-de-r-017-aceptado-y-corregido-d-059-cierre-de-010_actorsmd015_stakeholdersmd-d-060-alcance-y-objetivo-del-proyecto-d-061-y-cosecha-de-005_discovery-d-062) | `F-019` de `R-017` aceptado y corregido (`D-059`), cierre de `010_actors.md`/`015_stakeholders.md` (`D-060`), alcance y objetivo del proyecto (`D-061`), y cosecha de `005_discovery` (`D-062`) | 2026-09-17 | 005_discovery |
| [S-017](#s-017---f-020-de-r-018-aceptado-y-corregido-d-064-tres-pasadas-mas-de-la-cosecha-l-016l-017l-018--d-063d-065d-067-y-se-cierra-005_needsmd-d-066) | `F-020` de `R-018` aceptado y corregido (`D-064`), tres pasadas mas de la cosecha (`L-016`/`L-017`/`L-018` → `D-063`/`D-065`/`D-067`), y se cierra `005_needs.md` (`D-066`) | 2026-09-17 | 005_discovery |
| [S-018](#s-018---f-021f-022f-023f-024-de-r-019-evaluados-d-068-d-071-paso-2b-bis-anadido-a-protocol-close-y-cosecha-de-l-019l-020-d-072) | `F-021`/`F-022`/`F-023`/`F-024` de `R-019` evaluados (`D-068`-`D-071`), Paso 2b-bis anadido a `protocol-close`, y cosecha de `L-019`/`L-020` (`D-072`) | 2026-09-17 | 005_discovery |

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
| Ultima actualizacion | `2026-09-17 (S-018)` |
| Salud | `En marcha` |
| Avance de la etapa | `report_auditor` audito el commit de anclaje de `S-017` (`31ece08`, sobre `a0949c5`) en `R-019` y entrego cuatro hallazgos `Baja`/`No bloqueante`: `F-021` (ancla rota en el indice de `progress.md` para `S-017`), `F-022` (la fila de `F-020` publicaba `Estado` con la cita pegada dentro), `F-023` (`DT-005` llevaba `Confirmacion: Sin confirmar`, valor fuera de la lista declarada) y `F-024` (la nota de anclaje de `D-064` remite a una seccion «Sin resolver» que no persiste en el commit). Los cuatro verificados vigentes contra `HEAD` antes de tratarlos y aceptados, los tres primeros en su totalidad y el cuarto en su parte comprobable: `D-068` corrige `F-021` y encontro que el alcance real eran **seis** anclas rotas, no una — se anadio el **Paso 2b-bis** a `protocol-close`, que corre `.claude/checks/anchors.js` (con su test, 10/10) sobre `_persistence/` y `_audit/`; `D-069` corrige `F-022` anadiendo la columna `Registrado en` al indice de `findings.md` (22 filas derivadas de las fichas) y corrigiendo el Paso 2b para leerla; `D-070` corrige `F-023` pasando `DT-005` a `Propuesta (pendiente del usuario)`; `D-071` acepta la parte comprobable de `F-024` (nota fechada en `D-062` y `D-064`, sin reescribir, y prohibicion nueva en el 7c-bis) y **rechaza** la atribucion del defecto a la skill, con evidencia de que esta nunca lo mandaba. Ademas, quinta pasada de `protocol-harvest` (`D-072`, usuario): `L-019` sube como **enmienda de `LG-100`**, `L-020` **no sube** (`Ya cubierta por LG-06`); version 7 del archivo global, commit `e915383`, subido |
| Bloqueos activos | Ninguno bloquea la condicion de salida de `005_discovery`: sus siete casillas siguen cumplidas, pendiente de correr el acta de cierre de etapa (`protocol-phase-exit`), que este cierre no ejecuta. `T-032` (Alta, No bloqueante) sigue abierta. `A-004`, `A-005` y `A-008` (abiertos), este ultimo en el camino critico del producto. `DT-002` sigue `No implementada`, confirmada y sin pagar; `DT-005` sigue `No implementada`, ahora `Propuesta (pendiente del usuario)`. `T-030`, `T-031`, `T-033`, `T-035` y `T-037` (Baja, No bloqueante, `Origen: session-closer`) siguen abiertas, sin cambios. Nace `T-042` (`Origen: session-closer`, esta sesion): el Paso 2d detecto seis ordenes mas, repartidas en `D-068`/`D-069`/`D-070`/`D-071`/`D-072`, que publican una cifra tomada **antes** de la propia correccion de esa misma decision y hoy ya no reproducen sobre el arbol de trabajo; dos ordenes mas (scripts temporales `slug.mjs`/`validate2.mjs` de `D-068`) no son reproducibles por construccion, no por desfase |

---

## 2. Ultimo realizado

Dieciocho sesiones de trabajo. Segun el diff: se evaluaron los cuatro hallazgos de `R-019`
(`F-021`-`F-024`) y se aceptaron. `D-068` corrige seis anclas rotas del indice de `progress.md` (no
una) y anade el Paso 2b-bis con su control `.claude/checks/anchors.js`. `D-069` anade la columna
`Registrado en` al indice de `findings.md` y corrige el Paso 2b. `D-070` pone dueno a la confirmacion
de `DT-005`. `D-071` corrige por nota dos remisiones a «Sin resolver» que no persisten en el commit, y
rechaza la atribucion del defecto a la skill. Quinta pasada de `protocol-harvest` (`D-072`): `L-019`
sube como enmienda de `LG-100`; `L-020` no sube. `T-038`-`T-041` quedan `Implementada`.

---

## 3. Siguiente paso

Evaluar el informe de auditoria que `report_auditor` entregue sobre el commit de esta sesion
(`S-018`). La etapa `005_discovery` sigue con **sus siete casillas de condicion de salida
cumplidas**: el siguiente paso de fondo es correr el acta de cierre de etapa (`protocol-phase-exit`),
que este cierre no ejecuta. `T-042` (nueva, `Origen: session-closer`): seis ordenes de Contexto en
`D-068`/`D-069`/`D-070`/`D-071`/`D-072` no reproducen hoy porque describen el estado previo a la
correccion de esa misma decision; anclarlas a `31ece08` o fecharlas como snapshot. `T-037` y `T-035`
siguen abiertas con el mismo pendiente. `T-032` (Alta, No bloqueante) sigue abierta: decidir si
`D-050`/`A-007` sustituye el criterio literal de «tras reiniciar Claude Code». `T-030`, `T-031` y
`T-033` (Baja, No bloqueante) siguen pendientes. `A-004`, `A-005` y `A-008` (abiertos) siguen igual.
El esqueleto de arranque vuelve a diferir en `.claude/agents/session-closer.md`, `.claude/hooks/` (mas
`.claude/checks/`, nueva esta sesion), `.claude/skills/protocol-close/SKILL.md`,
`_templates/005_discovery/015_stakeholders.md` y `_workflow/005_discovery.md`: pendiente de promocion
con aprobacion del usuario. `DT-002` sigue `No implementada`, sin pagar; `DT-005` sigue
`No implementada`, ahora `Propuesta (pendiente del usuario)`.

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

### S-013 - `F-014` de `R-013` aceptado (`D-041`), promocion de `protocol-close` y `protocol-start` (`D-040`), urgencia de hallazgos (`D-043`) y reparto de `005_discovery` (`D-044`)
| Campo | Valor |
|---|---|
| Fecha | 2026-09-17 |
| Etapa | 005_discovery |
| Tareas | T-025, T-026, T-027, T-028, T-029 |

- **Que se hizo:** se acepto `F-014` de `R-013` (la nota nueva de `_audit/S-011.md` y las entradas
  `D-036`-`D-039`/`L-013` llevan `2026-09-16` en el commit `cf2992f`, fechado `2026-09-17`) con
  `D-041`: una nota fechada `2026-09-17` en cada una de las seis entradas afectadas, sin reescribir la
  fecha publicada (`T-025`); y el Paso 7d de `protocol-close` anade una orden que lista las fechas que
  un commit anade (campo `| Fecha |`, fila de indice de una entrada nueva, nota fechada) distintas de
  la suya (`T-026`). Al principio de la sesion, `D-040` (usuario) promovio `protocol-close` y
  `protocol-start` de `S-012` al esqueleto de arranque (commit `a75cfb6`, subido), por `L-012`. Se
  evaluaron ademas dos decisiones del usuario y una recomendacion sin hallazgo de `R-013`: `D-042`
  anade el trailer de coautoria al commit de anclaje (`T-027`); `D-043` anade `Urgencia`
  (`Bloqueante`/`No bloqueante`) a cada hallazgo de auditoria, ademas de su `Gravedad`, en
  `findings.md`, su plantilla, `protocol-audit` y `protocol-start` (`T-028`); y `D-044` adopta el
  reparto de `_workflow/005_discovery.md` §2 para el trabajo de `005_discovery` (`A-004`, `A-005`
  como supuestos vigentes; `T-029` nace como primer trabajo bloqueante de la etapa). `T-025`, `T-026`,
  `T-027` y `T-028` quedan `Implementada` en este mismo commit, por el criterio de `D-027`/`D-028`: su
  trabajo esta en el diff y sus criterios de cierre reproducen contra el arbol de trabajo, aunque las
  ordenes que citan `<hash>` en `D-040`-`D-044` se anclen todavia en el Paso 7c-bis de este cierre.
  `F-014` queda `Aceptado — pendiente` en fila y en ficha de `_audit/findings.md`.
- **Que quedo abierto:** falta lanzar `report_auditor` sobre el commit de esta sesion. `T-029`
  (Alta, Bloqueante) es el primer trabajo de producto de `005_discovery`. El esqueleto de arranque
  vuelve a diferir en `protocol-audit`, `protocol-close`, `protocol-start` y la plantilla de
  hallazgos, por los cambios de esta sesion posteriores a `D-040`. `DT-002` sigue `No implementada`,
  confirmada y sin pagar. `A-001`, `A-004` y `A-005` siguen `Abierto`.

### S-014 - `F-016` y `F-017` de `R-015` aceptados y aplazados (`D-046`), `R-014`/`F-015` retirados (`D-047`), y el agente de cierre solo puede invocar `protocol-close` (`D-048`)
| Campo | Valor |
|---|---|
| Fecha | 2026-09-17 |
| Etapa | 005_discovery |
| Tareas | T-030, T-031, T-032 |

- **Que se hizo:** al principio de la sesion, `D-045` (usuario) promovio al esqueleto de arranque los
  cuatro archivos que `S-013` habia dejado por delante (`protocol-audit`, `protocol-close`,
  `protocol-start`, la plantilla de hallazgos) mas la copia de `_audit/findings.md`, commit `1bec59a`
  del esqueleto, subido, por `L-012`. Se acepto `F-016` y `F-017` de `R-015` con `D-046`: los dos
  `Baja`/`No bloqueante`, se aplazan con `T-030` y `T-031` en vez de corregirse en esta sesion. Se
  registro `D-047`: `R-014` y `F-015` quedan retirados y no reutilizables, porque el propio
  `session-closer` volvio a auditar su propia sesion (`798500e`, revertido en `c180fd5`) pese a
  `L-013` — es la segunda vez, tras `D-038`. El usuario decidio la barrera mecanica que pedia `L-014`:
  `D-048` anade a la cabecera de `.claude/agents/session-closer.md` un hook `PreToolUse` sobre `Skill`
  que solo deja invocar `protocol-close` (`.claude/hooks/allow-only-skill.js`), con su test en verde
  (5/5). Se registraron `A-006` (Confirmado en la misma sesion con el agente temporal `hook-probe`,
  borrado despues) y `L-014`.
- **Que quedo abierto:** falta lanzar `report_auditor` sobre el commit de esta sesion. `T-032` queda
  `No implementada`: el hook esta escrito y probado por script, pero no esta comprobado que proteja ya
  al cierre de esta misma sesion, y eso exige un reinicio real de Claude Code. `T-030` y `T-031`
  siguen `No implementada` (notas pendientes de `F-016`/`F-017`). El esqueleto de arranque vuelve a
  diferir en `.claude/agents/session-closer.md` y en `.claude/hooks/`, pendiente de promocion. `DT-002`
  sigue `No implementada`, confirmada y sin pagar. `A-001`, `A-004` y `A-005` siguen `Abierto`.

### S-015 - `F-018` de `R-016` aceptado y corregido (`D-049`), `T-032` verificada con la sonda `hook-probe` (`D-050`), y Pasos 1 a 7 de `005_discovery` con el patrocinador (`D-051`..`D-058`)
| Campo | Valor |
|---|---|
| Fecha | 2026-09-17 |
| Etapa | 005_discovery |
| Tareas | T-029, T-032, T-033 |

- **Que se hizo:** se acepto `F-018` de `R-016` (`D-045` publicaba en resumen, sin orden ni salida, el
  Paso 1b del esqueleto y el barrido del Paso 1) con `D-049`: verificado vigente contra `HEAD`
  (`ca12450`) y corregido en la misma sesion con nota fechada en `D-045`, con las dos ordenes ancladas
  a `2063f09`/`1bec59a` y sus salidas (`T-033`). `D-050` (manager) verifica `T-032` con una sonda nueva
  (`hook-probe`, cabecera literal de `session-closer`) que prueba dentro del agente los dos casos —
  skill ajena bloqueada, `protocol-close` cargando —; `A-007` queda `Confirmado`, agente borrado sin
  commitear. Se escribio `L-015`. El grueso de la sesion fue el trabajo de producto de `T-029`: nace
  `005_discovery/` con sus cuatro artefactos. `005_needs.md` (`D-051`): `N-001`..`N-004` y `C-002`,
  `C-003`, `C-004` (restricciones firmes del encargo). El metodo del jugador se fija en detalle en vez
  de generacion aleatoria (`D-052`, revisado en parte por `D-053`: ventanas de 72/48 sorteos, prioridad
  Baloto/Revancha, desempates); `D-054` suma a lo construido la revision del sorteo anterior
  (`N-003`, `N-004`). `010_actors.md` (`D-055`): Generador (el patrocinador) e Integrador (baloto.com);
  `A-001` queda `Refutado` y nace `C-005` — la aplicacion no guarda ningun dato personal (`D-056`).
  `015_stakeholders.md` (`D-057`): dos interesados (patrocinador, Baloto); nace `A-008` (permiso de
  Baloto para leer su historico). `020_hypothesis.md` se sella en un solo commit (`D-058`): hipotesis,
  falsacion, ventana de 5 sesiones con umbral 4/5, y perfil de usuario. `N-XXX` e `I-XXX` se declaran
  en la tabla «Codigos» de `project.md`. Por evidencia del diff, `T-029` pasa a `Implementada` (su
  criterio literal — el artefacto de necesidades con `N-XXX` — reproduce, aunque la sesion avanzo mas
  alla de los Pasos 1 y 2 que nombraba su titulo); `T-032` sigue `No implementada`, porque su criterio
  literal exige un reinicio real de Claude Code que no ocurrio.
- **Que quedo abierto:** falta lanzar `report_auditor` sobre el commit de esta sesion.
  `010_actors.md` y `015_stakeholders.md` siguen `BORRADOR`, y la condicion de salida de
  `005_discovery` (`_phases/005_discovery.md` §6) no se comprobo. `T-032` (Alta, No bloqueante): decidir
  si `D-050` sustituye el criterio literal. `T-030` y `T-031` (Baja, No bloqueante) siguen pendientes.
  `A-004`, `A-005` y `A-008` siguen `Abierto`. El esqueleto de arranque difiere en
  `.claude/agents/session-closer.md` y `.claude/hooks/`, pendiente de promocion. `DT-002` sigue
  `No implementada`, confirmada y sin pagar.

### S-016 - `F-019` de `R-017` aceptado y corregido (`D-059`), cierre de `010_actors.md`/`015_stakeholders.md` (`D-060`), alcance y objetivo del proyecto (`D-061`), y cosecha de `005_discovery` (`D-062`)
| Campo | Valor |
|---|---|
| Fecha | 2026-09-17 |
| Etapa | 005_discovery |
| Tareas | T-034, T-035 |

- **Que se hizo:** `report_auditor` audito el commit de `S-015` (`eda6314`) en `R-017` y entrego
  `F-019` (`Media`/`No bloqueante`): el criterio de cierre de `T-029` publicaba `4` donde su orden
  devuelve `5`. Verificado vigente contra `HEAD` (`e18bf5b`) y, por decision del usuario, corregido en
  la misma sesion (`D-059`): nota fechada en `T-029` con la orden anclada a `e18bf5b` y su salida real;
  `T-034` pasa a `Implementada`. Por decision del usuario se cerraron `010_actors.md` y
  `015_stakeholders.md` (`D-060`): `BORRADOR` → `CERRADO`, con su «Guia de llenado» borrada y sus
  comprobaciones marcadas — sin reabrir el contenido ya decidido en `D-055`-`D-057`. El patrocinador
  (`I-001`) definio objetivo y alcance del proyecto (`D-061`), la sexta casilla de la condicion de
  salida de la etapa que quedaba sin nada escrito: el alcance del producto son las cuatro necesidades
  `N-001`-`N-004` (la aplicacion guarda las apuestas jugadas y lee el sitio oficial de Baloto), pero el
  alcance del prototipo sigue siendo solo lo que la hipotesis sellada mide (`N-001`, `N-002`); `A-008`
  sube de importancia por nota, sin cambiar de estado ni de disparador. Se hizo la cosecha de
  `005_discovery` con `protocol-harvest` (`D-062`): de ocho lecciones, cuatro suben (`L-008` →
  `LG-106`, `L-011` → `LG-107`, `L-012` → `LG-108`, `L-014` → `LG-109`) y una enmienda (`L-015` →
  `LG-22`); tres ya estaban cubiertas (`L-009`, `L-010`, `L-013`). Commit `a9ed27b` en
  `TripleS_Lessons`, subido a `origin/main`; version 5 del archivo global declarada. Se escribio
  `L-016`, que declara un defecto del propio mensaje del commit `a9ed27b` («no suben cuatro» donde
  lista tres) sin reescribir la historia de ese repositorio.
- **Que quedo abierto:** la etapa `005_discovery` **sigue sin cerrar**: `L-016`, nacida en esta misma
  sesion, deja la septima casilla de la condicion de salida (`_phases/005_discovery.md` §6) sin
  cumplir — es la unica de las siete pendiente. `T-035` (nueva, `Origen: session-closer`): la cifra `8`
  del barrido de `D-062` ya no reproduce sobre el commit de esta sesion (da `1`); no esta anclada ni
  fechada como snapshot. `T-032` (Alta, No bloqueante) sigue igual que en `S-015`. `005_needs.md` sigue
  `BORRADOR`. `A-004`, `A-005` y `A-008` siguen `Abierto` — `A-008` ahora en el camino critico del
  producto. El esqueleto de arranque sigue diferendo en `.claude/agents/session-closer.md` y
  `.claude/hooks/`. `DT-002` sigue `No implementada`, confirmada y sin pagar. Falta lanzar
  `report_auditor` sobre el commit de esta sesion.

### S-017 - `F-020` de `R-018` aceptado y corregido (`D-064`), tres pasadas mas de la cosecha (`L-016`/`L-017`/`L-018` → `D-063`/`D-065`/`D-067`), y se cierra `005_needs.md` (`D-066`)
| Campo | Valor |
|---|---|
| Fecha | 2026-09-17 |
| Etapa | 005_discovery |
| Tareas | T-036, T-037 |

- **Que se hizo:** `report_auditor` audito el commit de `S-016` (`205b1f2`) en `R-018` y entrego
  `F-020` (`Baja`/`No bloqueante`): `015_stakeholders.md`, ya `CERRADO`, afirma «seis condiciones de
  salida» donde la etapa enumera siete. Verificado vigente contra `HEAD` y aceptado con `D-064`; el
  barrido propio, con ambito mas ancho que el del hallazgo, encontro un **tercer** archivo que el
  hallazgo no citaba (`_workflow/005_discovery.md`), al que ademas **le faltaba la septima fila
  entera** de su tabla de reparto — la de la casilla de la cosecha (`L-017`). Corregido distinto segun
  el tipo de archivo: la plantilla y la cifra del reparto, `seis` → `siete`; se anade la fila que
  faltaba; el artefacto `CERRADO` se corrige por nota fechada, sin reescribir (`T-036` →
  `Implementada`). Queda declarada y sin tocar una segunda cifra derivada que tampoco cuadra bajo
  ninguna lectura comprobable («Cuatro de las seis llevan juicio») — `DT-005`, `Sin confirmar`. Ademas
  de `L-017`, se hicieron dos pasadas mas de `protocol-harvest`, cada una en la misma pasada en que
  nacio la leccion: `L-016` sube como **enmienda de `LG-32`** (`D-063`, version 6 del archivo global,
  commit `b1915d3` en `TripleS_Lessons`, subido a `origin/main`); `L-018` no sube, `Ya cubierta por
  LG-101` (`D-067`). Se cierra `005_discovery/005_needs.md` (`D-066`): `BORRADOR` → `CERRADO`, sus
  nueve comprobaciones marcadas, la «Guia de llenado» borrada. Con eso, **las siete casillas de la
  condicion de salida de `005_discovery`** (`_phases/005_discovery.md` §6) quedan cumplidas:
  ninguna leccion de la etapa sigue `Sin evaluar` (verificado, `0`), y los cuatro artefactos estan
  `CERRADO`/`CERRADO`/`CERRADO`/`SELLADA`.
- **Que quedo abierto:** falta lanzar `report_auditor` sobre el commit de esta sesion, y correr el
  acta de cierre de etapa (`protocol-phase-exit`), que este cierre no ejecuta. Nace `T-037`
  (`Origen: session-closer`): dos ordenes del bloque «Contexto» de `D-064` —no de su «Criterio de
  cierre»— publican una cifra tomada **antes** de que la propia decision corrigiera el archivo que
  miden, y hoy ya no reproducen sobre el arbol de trabajo (`3`→`2` lineas en el barrido de los tres
  sitios afectados; `7`→`8` filas en la tabla del reparto). `T-035` sigue abierta con el mismo
  pendiente en `D-062`. `T-032` (Alta, No bloqueante) sigue igual. `T-030`, `T-031` y `T-033` (Baja,
  No bloqueante) siguen pendientes. `A-004`, `A-005` y `A-008` siguen `Abierto`. El esqueleto de
  arranque vuelve a diferir en `.claude/agents/session-closer.md`, `.claude/hooks/`, y ahora tambien
  en `_templates/005_discovery/015_stakeholders.md` y `_workflow/005_discovery.md`. `DT-002` y
  `DT-005` siguen `No implementada`, sin pagar.

### S-018 - `F-021`/`F-022`/`F-023`/`F-024` de `R-019` evaluados (`D-068`-`D-071`), Paso 2b-bis anadido a `protocol-close`, y cosecha de `L-019`/`L-020` (`D-072`)
| Campo | Valor |
|---|---|
| Fecha | 2026-09-17 |
| Etapa | 005_discovery |
| Tareas | T-038, T-039, T-040, T-041, T-042 |

- **Que se hizo:** `report_auditor` audito el commit de anclaje de `S-017` (`31ece08`, sobre `a0949c5`)
  en `R-019` y entrego cuatro hallazgos, todos `Baja`/`No bloqueante`. Los cuatro se verificaron
  vigentes contra `HEAD` antes de tratarlos. `D-068` acepta `F-021` (ancla rota en el indice de
  `progress.md` para `S-017`) y el barrido propio, mas ancho que el del hallazgo, encontro **seis**
  anclas rotas, no una: las seis se corrigieron derivando cada ancla de su titulo con la implementacion
  de referencia de GitHub, y se anadio el **Paso 2b-bis** a `protocol-close` con el control
  `.claude/checks/anchors.js` (validado contra 1532 titulos reales, con su test `anchors.test.js`,
  10/10) — `T-038` `Implementada`. `D-069` acepta `F-022` (la fila de `F-020` publicaba `Estado` con la
  cita pegada dentro, donde `findings.md` cierra la lista de valores): el sintoma ya no reproducia
  contra `HEAD` porque la propia auditoria lo habia cerrado, pero la causa —el choque entre citar en la
  fila y cerrar los valores de `Estado`— seguia entera; se anadio la columna `Registrado en` al indice
  (22 filas derivadas de las fichas) y se corrigio el Paso 2b para leerla — `T-039` `Implementada`.
  `D-070` acepta `F-023` (`DT-005` llevaba `Confirmacion: Sin confirmar`, fuera de la lista declarada):
  pasa a `Propuesta (pendiente del usuario)`, con el usuario como dueno — `T-040` `Implementada`.
  `D-071` acepta la parte comprobable de `F-024` (la nota de anclaje de `D-064` remite a una seccion
  «Sin resolver» que no existe en el informe del commit) con nota fechada en `D-062` y `D-064`, sin
  reescribir, mas una prohibicion nueva en el 7c-bis; y **rechaza** la atribucion del defecto a la
  skill, con evidencia de que sus dieciseis (ahora diecisiete) menciones de «Sin resolver» son todas
  instrucciones para el reporte en pantalla — `T-041` `Implementada`. Ademas, quinta pasada de
  `protocol-harvest` sobre `L-019`/`L-020`, nacidas al tratar los hallazgos (`D-072`, usuario): `L-019`
  sube como **enmienda de `LG-100`** (la reincidencia de corregir solo el caso citado sin poner el
  control), `L-020` **no sube** (`Ya cubierta por LG-06`); version 7 del archivo global, commit
  `e915383` en `TripleS_Lessons`, subido a `origin/main`.
- **Que quedo abierto:** falta lanzar `report_auditor` sobre el commit de esta sesion, y correr el
  acta de cierre de etapa (`protocol-phase-exit`), que este cierre no ejecuta. Nace `T-042`
  (`Origen: session-closer`): el Paso 2d detecto seis ordenes mas de Contexto en
  `D-068`/`D-069`/`D-070`/`D-071`/`D-072` que publican una cifra tomada **antes** de la propia
  correccion de esa misma decision y hoy ya no reproducen; dos ordenes mas de `D-068`
  (`slug.mjs`/`validate2.mjs`) no son reproducibles por construccion, no por desfase. `T-037` y `T-035`
  siguen abiertas con el mismo pendiente sobre `D-064` y `D-062`. `T-032` (Alta, No bloqueante) sigue
  igual. `T-030`, `T-031` y `T-033` (Baja, No bloqueante) siguen pendientes. `A-004`, `A-005` y `A-008`
  siguen `Abierto`. El esqueleto de arranque vuelve a diferir en `.claude/agents/session-closer.md`,
  `.claude/hooks/`, ahora tambien `.claude/checks/` (nuevo) y `.claude/skills/protocol-close/SKILL.md`,
  `_templates/005_discovery/015_stakeholders.md` y `_workflow/005_discovery.md`. `DT-002` sigue
  `No implementada`, confirmada y sin pagar; `DT-005` sigue `No implementada`, ahora
  `Propuesta (pendiente del usuario)`.

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
