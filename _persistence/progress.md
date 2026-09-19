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
| [S-019](#s-019---005_discovery-cerrada-y-firmada-por-el-patrocinador-d-074-y-f-025f-026f-027-de-r-020-evaluados-d-075-d-077) | `005_discovery` cerrada y firmada por el patrocinador (`D-074`), y `F-025`/`F-026`/`F-027` de `R-020` evaluados (`D-075`-`D-077`) | 2026-09-18 | 010_prototype |
| [S-020](#s-020---f-028f-029-de-r-021-evaluados-d-080d-081-promocion-al-esqueleto-de-los-seis-candidatos-d-082-y-leccion-l-022-sobre-el-error-de-la-puerta) | `F-028`/`F-029` de `R-021` evaluados (`D-080`/`D-081`), promocion al esqueleto de los seis candidatos (`D-082`), y leccion `L-022` sobre el error de la puerta | 2026-09-18 | 010_prototype |
| [S-021](#s-021---a-008-confirmado-d-083c-006-y-pasos-1-a-4-de-010_prototype-sellados-y-decididos-d-084-d-090-el-prototipo-aun-no-se-construyo) | `A-008` confirmado (`D-083`/`C-006`) y Pasos 1 a 4 de `010_prototype` sellados y decididos (`D-084`-`D-090`); el prototipo aun no se construyo | 2026-09-18 | 010_prototype |
| [S-022](#s-022---f-031-evaluado-d-092t-051-el-prototipo-se-construye-d-093-y-el-patrocinador-lo-aprueba-d-094-cierra-el-paso-4-de-010_prototype) | `F-031` evaluado (`D-092`/`T-051`), el prototipo se construye (`D-093`) y el patrocinador lo aprueba (`D-094`), cierra el Paso 4 de `010_prototype` | 2026-09-18 | 010_prototype |
| [S-023](#s-023---f-032f-033-de-r-024-evaluados-d-095d-096-primera-sesion-del-paso-5-corrida-d-097-y-a-009-confirmado-d-098) | `F-032`/`F-033` de `R-024` evaluados (`D-095`/`D-096`), primera sesion del Paso 5 corrida (`D-097`), y `A-009` confirmado (`D-098`) | 2026-09-18 | 010_prototype |
| [S-024](#s-024---segunda-sesion-del-paso-5-corrida-d-099-y-f-034f-035-de-r-025-evaluados-d-100d-101) | Segunda sesion del Paso 5 corrida (`D-099`), y `F-034`/`F-035` de `R-025` evaluados (`D-100`/`D-101`) | 2026-09-18 | 010_prototype |
| [S-025](#s-025---tercera-sesion-del-paso-5-corrida-d-102) | Tercera sesion del Paso 5 corrida (`D-102`) | 2026-09-19 | 010_prototype |
| [S-026](#s-026---cuarta-sesion-del-paso-5-corrida-d-104l-027-y-f-036-de-r-027-evaluado-d-103t-059t-060) | Cuarta sesion del Paso 5 corrida (`D-104`/`L-027`), y `F-036` de `R-027` evaluado (`D-103`/`T-059`/`T-060`) | 2026-09-19 | 010_prototype |
| [S-027](#s-027---quinta-y-ultima-sesion-del-paso-5-corrida-d-106-observaciones-clasificadas-y-cerradas-d-107d-108-y-f-037-de-r-028-evaluado-d-105t-061t-062) | Quinta y ultima sesion del Paso 5 corrida (`D-106`), observaciones clasificadas y cerradas (`D-107`/`D-108`), y `F-037` de `R-028` evaluado (`D-105`/`T-061`/`T-062`) | 2026-09-19 | 010_prototype |

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
| Etapa actual | `010_prototype` |
| Ultima actualizacion | `2026-09-19 (S-027)` |
| Salud | `En marcha` |
| Avance de la etapa | Se corre la quinta y ultima sesion del Paso 5: `010_prototype/015_session_005.md`, con JD Rodriguez como Actor Generador y Juana Ramirez como facilitadora, transcrita al dictado por `manager` (`D-106`); estado asignado `Exito autonomo`, de 10:38 a 10:39 (53.56 s). `010_prototype/010_participants.md` se actualiza con la fecha y el encaje de la sesion `005`. Con la ronda de cinco sesiones completa, se escribe y se cierra `010_prototype/020_observations.md`: el codigo `O-XXX` se declara en `project.md`, y el patrocinador decide la clasificacion de las seis observaciones sobre la propuesta de `manager` (`D-107`, `D-108`). El prototipo sigue sin tocarse desde `e45185d`. Ademas, `report_auditor` audito el commit de `S-026` (`c8b2581`) en `R-028` y entrego `F-037` (`Media`/`Bloqueante`): en `assumptions.md` el indice daba `A-004`/`A-005` por `Confirmado` y sus fichas seguian en `Abierto` desde `D-079`. Se acepta con `D-105`: las dos fichas pasan a `Confirmado` con sus notas fechadas, y una nota fechada en `D-079` y en `_audit/S-026.md` (`T-061`, `Implementada`); la tercera recomendacion (comparar indice y ficha por estado en el cierre) se acepta y se aplaza (`T-062`). Se escribe `L-028` sobre la leccion. Falta el Paso 9 de la etapa (validacion de negocio con el patrocinador) y comprobar su condicion de salida |
| Bloqueos activos | Paso 5 de `010_prototype` **completo** (5/5 sesiones); el prototipo no se toca hasta el Gate. Falta el Paso 9 — validacion de negocio, en sesion aparte con el patrocinador — y comprobar las siete casillas de la condicion de salida de la etapa (`_phases/010_prototype.md` §6). `T-032` (Alta, No bloqueante) sigue abierta: decidir si `D-050`/`A-007` sustituye el criterio literal de «tras reiniciar Claude Code». `T-049` (Media, No bloqueante) sigue abierta y sigue necesitando una decision del usuario antes de implementarse (`D-095`). `T-062` (Media, No bloqueante, nueva): falta anadir a `protocol-close` la comparacion indice↔ficha por estado en `assumptions.md`. `T-063` (Baja, No bloqueante, nueva): corregir el recuento que la plantilla de `020_observations.md` atribuye a su tercera orden. `DT-002` sigue `No implementada`, confirmada y sin pagar; `DT-005` y `DT-006` siguen `No implementada`, `Propuesta (pendiente del usuario)`. `T-030`, `T-031`, `T-033`, `T-035`, `T-037`, `T-042`, `T-046`, `T-047`, `T-048`, `T-050`, `T-054`, `T-055`, `T-058` y `T-060` siguen abiertas, sin cambios. Falta lanzar `report_auditor` sobre el commit de esta sesion |

---

## 2. Ultimo realizado

Veintisiete sesiones de trabajo. Segun el diff: se corre la quinta y ultima sesion del Paso 5 de
`010_prototype`: `010_prototype/015_session_005.md`, con JD Rodriguez (el Actor Generador) como
unico participante y Juana Ramirez como facilitadora externa; el registro se transcribe al dictado
por `manager` (`D-106`). Estado asignado: `Exito autonomo`, de 10:38 a 10:39 (53.56 s), sin
intervenciones ni comentarios espontaneos. `010_prototype/010_participants.md` §4 se actualiza:
sesion `005`, fecha `2026-09-19`, `¿Encajo? = si`. Con la ronda de cinco sesiones completa, se
escribe `010_prototype/020_observations.md`: el codigo `O-XXX` se declara en la tabla «Codigos» de
`project.md` (`D-107`), y el patrocinador decide la clasificacion de las seis observaciones sobre la
propuesta de `manager`, con una de ellas (`O-006`) preguntada aparte por no encajar con claridad. El
artefacto pasa a `CERRADO` (`D-108`); su plantilla queda con un recuento por corregir (`T-063`).
Ademas, `report_auditor` audito el commit de `S-026` (`c8b2581`) en `R-028` y entrego `F-037`
(`Media`/`Bloqueante`): en `_persistence/assumptions.md` el indice daba `A-004` y `A-005` por
`Confirmado` desde `D-079`, y sus fichas seguian en `Abierto` porque `D-079` solo cambio el indice.
Se acepta con `D-105`: las dos fichas pasan a `Confirmado`, cada una con su nota fechada, y se anade
otra nota fechada en `D-079` y al final de `_audit/S-026.md`, sin reescribir ninguna prosa existente
(`T-061`, `Implementada`); la tercera recomendacion (que el cierre compare indice y ficha por estado
en `assumptions.md`, como ya hace con `findings.md`) se acepta y se aplaza (`T-062`). `_audit/findings.md`
actualiza la fila y la ficha de `F-037` a `Aceptado — pendiente`, citando `D-105` / `T-061`, `T-062`.
Se escribe `L-028` sobre la leccion: un criterio de cierre tiene que leer cada sitio que la decision
dice cambiar, no solo el primero.

---

## 3. Siguiente paso

🎯 **Correr el Paso 9 de `010_prototype` — validacion de negocio, en sesion aparte con el
patrocinador** (`_phases/010_prototype.md` §4 Paso 9). Se corre sin usuarios delante y valida dos
dimensiones que no se mezclan: que el flujo represente como el usuario haria la tarea, y que sea
compatible con el proceso de la empresa. Con eso, comprobar las siete casillas de la condicion de
salida de la etapa (`_phases/010_prototype.md` §6): el camino feliz sin tocar, las cinco sesiones
corridas con sus archivos, las observaciones clasificadas, la validacion de negocio hecha, los
supuestos del descubrimiento actualizados, y la cosecha de lecciones de la etapa sin ninguna
`Sin evaluar`.

Secundario, si queda tiempo: lanzar `report_auditor` sobre el commit de esta sesion (`S-027`).
`T-062` (Media, No bloqueante, `Origen: report_auditor`, nueva): anadir a `protocol-close` la
comparacion indice↔ficha por estado en `assumptions.md`, y mirar si `decisions.md`/`tasks.md`
tienen el mismo punto ciego. `T-063` (Baja, No bloqueante, `Origen: manager`, nueva): corregir el
recuento que `_templates/010_prototype/020_observations.md` §9 atribuye a su tercera orden, y
promover el cambio al esqueleto. `T-058` (Baja, No bloqueante, `Origen: session-closer`): anclar o
fechar la cuarta orden de evidencia de `D-102` que el commit de `S-025` dejo de reproducir. `T-060`
(Baja, No bloqueante, `Origen: report_auditor`): que `protocol-close` derive con orden publicada las
listas y cifras de hallazgos y sesiones que hoy se escriben a mano. `T-049` (Media, No bloqueante,
`Origen: report_auditor`) necesita que el usuario decida, antes de implementarla, que dato publica el
rotulo del commit de anclaje en vez del hash que no puede contener (`D-095`). `T-050`, `T-054` y
`T-055` (Baja, No bloqueante, `Origen: session-closer`): anclar o corregir citas que ya no reproducen
sobre el archivo final. `T-047` y `T-048` (`010_prototype`, `Origen: report_auditor`) siguen con sus
correcciones pendientes. `T-046`, `T-042`, `T-037` y `T-035` siguen con el mismo pendiente (anclar o
fechar ordenes que ya no reproducen). `T-032` (Alta, No bloqueante) sigue abierta: decidir si
`D-050`/`A-007` sustituye el criterio literal de «tras reiniciar Claude Code». `T-030`, `T-031` y
`T-033` (Baja, No bloqueante) siguen pendientes. `DT-002` sigue `No implementada`, sin pagar; `DT-005`
y `DT-006` siguen `No implementada`, `Propuesta (pendiente del usuario)`.

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

### S-019 - `005_discovery` cerrada y firmada por el patrocinador (`D-074`), y `F-025`/`F-026`/`F-027` de `R-020` evaluados (`D-075`-`D-077`)
| Campo | Valor |
|---|---|
| Fecha | 2026-09-18 |
| Etapa | 010_prototype |
| Tareas | T-043, T-044, T-045, T-046 |

- **Que se hizo:** el usuario fijo el orden de la jornada (`D-073`): el acta de cierre de
  `005_discovery` primero, los tres hallazgos `Abierto` de `R-020` despues, dentro de la misma sesion.
  El agente `phase_exit_auditor` ya habia levantado el acta sobre `d09abc6` (commit `e9846f6`,
  dictamen `CASILLAS SATISFECHAS`, `7`/`7` `CUMPLE`, cero hallazgos); el patrocinador (JD Rodriguez,
  Main Sponsor) firmo la seccion 5.2 con fecha `2026-09-18` y decision `ETAPA CERRADA` (`D-074`):
  **`005_discovery` queda cerrada** y la etapa declarada pasa a `010_prototype`. Se evaluaron los tres
  hallazgos de `R-020`, verificados vigentes contra `HEAD` antes de tratarlos: `D-075` acepta `F-025`
  (la cifra de `T-042` es **ocho**, no seis; corregido por nota fechada dentro de la ficha, sin
  reescribir el titulo ancla — `T-043` `Implementada`); `D-076` acepta `F-026` (la NOTA DE CIERRE de
  `S-018` nombraba `ed64348` para las dos cosas cuando el commit de anclaje es `a22ef55`; corregido
  por nota y nueva regla en `protocol-close` para derivar los dos hashes con `git rev-parse --short
  HEAD`/`HEAD^` despues del commit de anclaje — `T-044` `Implementada`); `D-077` acepta y **corrige de
  inmediato** `F-027` (el CONTROL DE SALIDA REPRODUCIDA del Paso 7c-bis era ciego al formato
  `**Ordenes:**`/`**Salidas:**` de las decisiones recientes y clasificaba cada orden como si fuera una
  salida —dieciseis colaciones al empezar la sesion—; la funcion `salidas()` aprende las dos etiquetas
  — `T-045` `Implementada`). Sexta pasada de `protocol-harvest` sobre `005_discovery` (`D-078`,
  manager): `L-021` nace y **no sube** (`Ya cubierta por LG-32`); no hay `Global candidata`, el Paso 6
  no se ejecuta y el repositorio de lecciones globales no se toca (sigue en `e915383`). Dos supuestos
  se confirman (`D-079`, manager): `A-004` (el segundo disparador, el acta de cierre, corrio hoy) y
  `A-005` (`T-029` `Implementada` devolvio la segunda rama del enunciado).
- **Que quedo abierto:** falta lanzar `report_auditor` sobre el commit de esta sesion. Nace `T-046`
  (`Origen: session-closer`): el Paso 2d detecto que la orden de «Verificacion» de `D-073` sobre
  `F-025`/`F-026`/`F-027` publica `3` y hoy devuelve `0`, porque esos tres hallazgos cambiaron de
  `Abierto` a `Aceptado — pendiente` mas tarde en la misma sesion. `T-042` sigue con el mismo pendiente
  (seis ordenes de `D-068`-`D-072`). `T-037`, `T-035`, `T-032`, `T-030`, `T-031` y `T-033` siguen
  abiertas, sin cambios. `A-008` sigue `Abierto`, en el camino critico. `DT-002` y `DT-005` sin cambios.
  El siguiente paso de fondo es leer `_phases/010_prototype.md` y `_workflow/010_prototype.md` para
  fijar el primer paso del procedimiento de la nueva etapa.

### S-020 - `F-028`/`F-029` de `R-021` evaluados (`D-080`/`D-081`), promocion al esqueleto de los seis candidatos (`D-082`), y leccion `L-022` sobre el error de la puerta
| Campo | Valor |
|---|---|
| Fecha | 2026-09-18 |
| Etapa | 010_prototype |
| Tareas | T-047, T-048 (nuevas) |

- **Que se hizo:** se evaluaron los dos hallazgos `Abierto` de `R-021`, verificados vigentes contra
  `HEAD` antes de tratarlos. `D-080` acepta `F-028`: la nota fechada que completa el commit de
  anclaje de `S-019` afirmaba que `70fe40c` era «este mismo, el que anadio esta nota», y la nota esta
  en realidad en `e610906`; se acepta en dos mitades — nota correctiva (pendiente, `T-047`) y
  prohibicion del autorreferente en la plantilla de la NOTA DE CIERRE de `protocol-close`. `D-081`
  acepta `F-029`: la fila «Donde queda registrada» (seccion 5.2) del acta de cierre de
  `005_discovery` quedo con el `D-XXX` generico de la plantilla en vez de `D-074`; se acepta en dos
  mitades — instanciar la fila (pendiente, `T-048`) y ampliar el control de huecos del acta en
  `protocol-phase-exit` a los codigos genericos sin instanciar en las secciones de firma. El usuario
  pidio promover al esqueleto de arranque: se promovieron los seis candidatos que el barrido del
  Paso 1 de `protocol-promote` media —`.claude/agents/session-closer.md`,
  `.claude/skills/protocol-close/SKILL.md`, `_templates/005_discovery/015_stakeholders.md`,
  `_workflow/005_discovery.md`, `.claude/checks/` y `.claude/hooks/`— con cero diferencias en la
  direccion contraria (`D-082`, commit del esqueleto `5b3fb6e`, desde el origen `00f09e1`). `D-082`
  deja registrado que `manager` habia recomendado, en la puerta del Paso 5 de esa promocion, dejar
  fuera `session-closer.md` y `.claude/hooks/` alegando que su mecanismo «no estaba ejercitado» — un
  argumento falso: `A-006` y `A-007` ya estaban `Confirmado`, con la sonda `hook-probe` probando los
  dos casos dentro de un agente con la cabecera literal de `session-closer`; lo unico pendiente en
  `T-032` es una casilla formal (su criterio literal exige un reinicio de Claude Code que no hizo
  falta). El usuario aprobo promover los seis de todas formas, y esa aprobacion resulto correcta. Nace
  `L-022`: el estado de una tarea no dice si su mecanismo funciona, eso lo dicen los supuestos que la
  respaldan.
- **Que quedo abierto:** falta lanzar `report_auditor` sobre el commit de esta sesion. `T-047` y
  `T-048` quedan `No implementada`: sus criterios de cierre son prosa hasta que se implementen, y sus
  ordenes se publicaran ancladas en la sesion que lo haga. `T-046`, `T-042`, `T-037`, `T-035`,
  `T-032`, `T-030`, `T-031` y `T-033` siguen abiertas, sin cambios. `A-008` sigue `Abierto`, en el
  camino critico. `DT-002` y `DT-005` sin cambios. El siguiente paso de fondo sigue siendo leer
  `_phases/010_prototype.md` y `_workflow/010_prototype.md` para fijar el primer paso del
  procedimiento de `010_prototype`, que esta sesion no abordo.

### S-021 - `A-008` confirmado (`D-083`/`C-006`) y Pasos 1 a 4 de `010_prototype` sellados y decididos (`D-084`-`D-090`); el prototipo aun no se construyo
| Campo | Valor |
|---|---|
| Fecha | 2026-09-18 |
| Etapa | 010_prototype |
| Tareas | T-049 (nueva, `report_auditor`), T-050 (nueva, `session-closer`) |

- **Que se hizo:** `A-008` pasa a `Confirmado` (`D-083`): el `robots.txt` de baloto.com no prohibe la
  ruta de resultados que el producto necesita, y el unico documento legal enlazado desde el sitio
  declara un alcance que no cubre el sitio informativo ni contiene ninguna clausula sobre uso
  automatizado — su unica prohibicion es de propiedad intelectual sobre el software, no sobre los
  resultados publicados. Nace `C-006` con el limite que si rige: solo la pagina publica de
  resultados, nunca `/api/` ni `/admin-baloto/`. Se declaran por adelantado `010_prototype/` como
  carpeta de entregables y `010_prototype/app/` como destino del prototipo (`D-084`), y se adopta tal
  cual el reparto de `_workflow/010_prototype.md` para los nueve pasos del procedimiento (`D-085`).
  Se sellan, en orden y antes de construir: el Paso 1 y 2 —camino feliz unico y su tarea, con seis
  numeros arbitrarios que el participante se compromete a no juzgar— en
  `010_prototype/005_happy_path.md` (`D-086`); el Paso 3 —1 participante, 5 sesiones, umbral 4 de
  5— en `010_prototype/010_participants.md` (`D-087`), con su espaciado desviado de inmediato por
  decision del patrocinador —una sesion por jornada de trabajo, sin esperar a los dias de sorteo— y
  declarado como desviacion en §5 **sin tocar la hipotesis sellada** (`D-088`); y se suma una
  facilitadora externa, ajena a la construccion del prototipo, con su guion en
  `010_prototype/012_facilitator_guide.md` (`D-089`). El Paso 4 queda **decidido y sin construir**:
  el prototipo sera un unico archivo HTML sin build ni dependencias, que al abrirse muestra de golpe
  los seis numeros y la razon de cada uno, sin cronometro en pantalla (`D-090`). Se evalua `F-030` de
  `R-022`, verificado vigente contra `HEAD`: la nota fechada que declara `30276a9` como commit de
  anclaje de `S-020` ya esta escrita en `_audit/S-020.md`, sin reescribir la linea sellada; se abre
  `T-049` para la segunda mitad, ampliar el control de huecos de `protocol-close` a los marcadores
  entre angulos que van inline (`D-091`). Nacen `L-023` (un documento legal enlazado no siempre
  regula el sitio que lo enlaza) y `L-024` (un defecto que reaparece una cuarta vez es un control mal
  colocado, no una serie de descuidos).
- **Que quedo abierto:** el Paso 4 —construir el prototipo— **no se ejecuto en esta sesion**; es el
  siguiente paso concreto. El Paso 2d de este cierre detecto que tres ordenes de `D-086` y dos de
  `D-087` (todas `grep -n` sobre los artefactos sellados) publican numeros de linea que ya no
  reproducen sobre el archivo final commiteado, aunque el contenido de cada linea coincide letra por
  letra; se abre `T-050` (`Origen: session-closer`) para que `manager` decida si se anclan al commit
  o se fechan. Falta lanzar `report_auditor` sobre el commit de esta sesion. `T-047` y `T-048`
  (`010_prototype`, `Origen: report_auditor`) siguen `No implementada`. `T-046`, `T-042`, `T-037`,
  `T-035`, `T-032`, `T-030`, `T-031` y `T-033` siguen abiertas, sin cambios. `DT-002` y `DT-005` sin
  cambios.

### S-022 - `F-031` evaluado (`D-092`/`T-051`), el prototipo se construye (`D-093`) y el patrocinador lo aprueba (`D-094`), cierra el Paso 4 de `010_prototype`
| Campo | Valor |
|---|---|
| Fecha | 2026-09-18 |
| Etapa | 010_prototype |
| Tareas | T-051 (nueva, `report_auditor`, `Implementada`) |

- **Que se hizo:** se evalua `F-031` de `R-023`, verificado vigente contra `HEAD` (`386159b`): la
  NOTA DE CIERRE de `_audit/S-021.md` repetia, dentro de la misma sesion que acepto `F-030`, el hueco
  de plantilla en el rotulo del commit de anclaje. Se acepta y se corrige solo el archivo con una nota
  fechada que declara `6a7d7f7`, sin reescribir la linea 287 sellada; no se abre tarea nueva para el
  control, que sigue siendo `T-049` (`D-092`, `T-051` hecha en esta misma jornada). Se construye el
  Paso 4 de `010_prototype/`: `010_prototype/app/index.html`, un unico archivo HTML sin build ni
  dependencias externas, sin `localStorage`/`fetch`/cronometro/formularios, con la fila de seis
  numeros en orden ascendente arriba (lo que se copia al tiquete) y la lista de razones encadenada
  debajo (lo que se comprueba), y numeros que respetan a simple vista las restricciones visibles del
  metodo (`D-093`). Se abre `A-009` (abierto): que esos numeros arbitrarios no desvien la atencion del
  participante durante la sesion, con disparador al cerrar la primera. El patrocinador abre el
  prototipo, lo revisa entero contra la tarea sellada —no por muestreo, `D-085`— y responde que lo da
  por bueno: el Paso 4 queda cerrado y la etapa pasa al Paso 5 (`D-094`). Nace `L-025`: un bloque de
  verificacion se escribe despues de correr la orden, nunca antes — dos cifras que `T-051` estimo de
  memoria resultaron falsas al correrlas, y se corrigieron con la salida real antes de commitear.
- **Que quedo abierto:** el Paso 5 —correr la primera sesion con el participante— no se ejecuto en
  esta sesion; es el siguiente paso concreto. Falta lanzar `report_auditor` sobre el commit de esta
  sesion. `T-047`, `T-048`, `T-049` y `T-050` (`010_prototype`) siguen `No implementada`. `T-046`,
  `T-042`, `T-037`, `T-035`, `T-032`, `T-030`, `T-031` y `T-033` siguen abiertas, sin cambios. `DT-002`
  y `DT-005` sin cambios.

---

### S-023 - `F-032`/`F-033` de `R-024` evaluados (`D-095`/`D-096`), primera sesion del Paso 5 corrida (`D-097`), y `A-009` confirmado (`D-098`)
| Campo | Valor |
|---|---|
| Fecha | 2026-09-18 |
| Etapa | 010_prototype |
| Tareas | T-052 (nueva, `report_auditor`, `Implementada`), T-053 (nueva, `report_auditor`, `Implementada`) |

- **Que se hizo:** se evaluan `F-032` y `F-033` de `R-024`, verificados vigentes contra `HEAD`
  (`cc16375`). `F-032` — la NOTA DE CIERRE de `_audit/S-022.md` repitio por tercera sesion
  consecutiva el hueco de plantilla del commit de anclaje — se acepta y se completa por nota fechada
  que declara `07ca614`, sin reescribir la linea 258 sellada; se deja escrito que `T-049`, tal como
  esta escrita, no basta: veria el hueco pero no lo rellenaria, porque la plantilla pide publicar
  dentro del commit de anclaje el hash de ese mismo commit, y eso no se puede cumplir. Se consulta al
  usuario antes de reformular el rotulo (`D-095`, `T-052`). `F-033` — el bloque «Verificacion del
  orden que exige el Gate» de `D-093` publicaba `(sin salida)` para la orden que demuestra cuando
  nacio el codigo del prototipo — se acepta y se completa con una nota que publica las dos ordenes
  ancladas a `HEAD`, mas la orden que prueba el orden del historial (`D-096`, `T-053`). Se corre la
  primera de las cuatro sesiones del Paso 5: `010_prototype/015_session_001.md`, con JD Rodriguez
  como unico participante (el Actor Generador) y Juana Ramirez como facilitadora externa; el registro
  se transcribe al dictado por `manager`, y la respuesta 5 de §7 se aclara con una pregunta de
  seguimiento sin borrar la original (`D-097`). Estado asignado: `Exito autonomo` — cero
  intervenciones que dieran informacion (§5), ninguna fila de bloqueo/duda/error (§4), 57.61 s de
  duracion (§8), sin comentarios espontaneos sobre la discrepancia entre los numeros mostrados y su
  metodo habitual. `010_prototype/010_participants.md` §4 se actualiza: sesion `001`, fecha
  `2026-09-18`, `¿Encajo? = si`. `A-009` pasa a `Confirmado` con esa evidencia, limitado a esta
  sesion (`D-098`). Se propone `DT-006` (`Propuesta (pendiente del usuario)`): la comprobacion §9 de
  `_templates/010_prototype/015_session_NNN.md` nunca puede salir vacia, porque su propia casilla y
  su propia orden contienen el caracter `<` que buscan — observado en `D-097`, sin corregir en esta
  jornada porque `_templates/` es agnostica y viaja al esqueleto de arranque.
- **Que quedo abierto:** faltan las sesiones `002`, `003` y `004` del Paso 5; el prototipo sigue sin
  tocarse entre ellas. Falta lanzar `report_auditor` sobre el commit de esta sesion. `T-049` sigue
  `No implementada` y ahora depende de una decision del usuario sobre que dato publica su rotulo.
  `T-047`, `T-048` y `T-050` (`010_prototype`) siguen `No implementada`, sin cambios. `T-046`,
  `T-042`, `T-037`, `T-035`, `T-032`, `T-030`, `T-031` y `T-033` siguen abiertas, sin cambios.
  `DT-002` y `DT-005` sin cambios; nace `DT-006` sin confirmar.

  🕐 **NOTA 2026-09-18 (`F-034`, `D-100`):** esta entrada da la ronda del Paso 5 por «cuatro
  sesiones» y pone como pendientes solo la `002`, la `003` y la `004`. **La ronda sellada es de 5**
  (`D-087`, `D-088`, `010_prototype/010_participants.md` §3): al cerrar `S-023` faltaban de la `002`
  a la `005`. La entrada no se reescribe; esta nota la corrige.

### S-024 - Segunda sesion del Paso 5 corrida (`D-099`), y `F-034`/`F-035` de `R-025` evaluados (`D-100`/`D-101`)
| Campo | Valor |
|---|---|
| Fecha | 2026-09-18 |
| Etapa | 010_prototype |
| Tareas | T-056 (nueva, `report_auditor`, `Implementada`), T-057 (nueva, `report_auditor`, `Implementada`) |

- **Que se hizo:** se corre la segunda de las cinco sesiones del Paso 5:
  `010_prototype/015_session_002.md`, con JD Rodriguez como unico participante (el Actor Generador) y
  Juana Ramirez como facilitadora externa; el registro se transcribe al dictado por `manager`
  (`D-099`). Estado asignado: `Exito autonomo` — cero intervenciones que dieran informacion (§5), la
  unica fila de §4 es la doble lectura del boton de confirmacion antes del clic, sin duda expresada
  en voz alta, 58.10 s de duracion (§8). La respuesta 5 de §7 llego dictada («No hubo»), y su
  aclaracion («no hace nada diferente al metodo que realiza hoy en dia») llego aparte, durante la
  transcripcion y sin pregunta de seguimiento de la facilitadora: el registro conserva las dos con su
  procedencia declarada (`D-099`), y se escribe `L-026` sobre tratar una respuesta dictada que admite
  mas de una lectura. `010_prototype/010_participants.md` §4 se actualiza: sesion `002`, fecha
  `2026-09-18`, `¿Encajo? = si`. Se evaluan `F-034` y `F-035` de `R-025`, verificados vigentes contra
  `HEAD` (`6f175d1`). `F-034` (`Media`/`Bloqueante`) — el registro de `S-023` daba la ronda del Paso 5
  por cuatro sesiones donde la sellada es de cinco — se acepta y se corrige por nota fechada en
  `_audit/S-023.md` y en la entrada `S-023` de esta bitacora, sin reescribir las lineas selladas
  (`D-100`, `T-056`). `F-035` (`Baja`/`No bloqueante`) — la seccion 0 de `_audit/S-023.md` situaba las
  correcciones de `F-032`/`F-033` en el commit anterior a esa sesion, cuando estan en `66e6413`, el
  commit de esa misma sesion — se acepta y se corrige por nota fechada en el mismo informe (`D-101`,
  `T-057`). Las dos evaluaciones pasan a `Aceptado — pendiente` en `_audit/findings.md`, no a
  `Implementado`: eso lo cierra la proxima auditoria.
- **Que quedo abierto:** faltan las sesiones `003`, `004` y `005` del Paso 5; el prototipo sigue sin
  tocarse entre ellas. Falta lanzar `report_auditor` sobre el commit de esta sesion. `T-047`, `T-048`,
  `T-050`, `T-054` y `T-055` (`010_prototype`) siguen `No implementada`, sin cambios. `T-049` sigue
  `No implementada`, pendiente de la decision del usuario sobre que dato publica su rotulo. `T-046`,
  `T-042`, `T-037`, `T-035`, `T-032`, `T-030`, `T-031` y `T-033` siguen abiertas, sin cambios.
  `DT-002`, `DT-005` y `DT-006` sin cambios.

### S-025 - Tercera sesion del Paso 5 corrida (`D-102`)
| Campo | Valor |
|---|---|
| Fecha | 2026-09-19 |
| Etapa | 010_prototype |
| Tareas | T-058 |

- **Que se hizo:** se corre la tercera de las cinco sesiones del Paso 5:
  `010_prototype/015_session_003.md`, con JD Rodriguez como unico participante (el Actor Generador) y
  Juana Ramirez como facilitadora externa; el registro se transcribe al dictado por `manager`
  (`D-102`). Estado asignado: `Exito autonomo` — cero intervenciones que dieran informacion (§5),
  ningun bloqueo, duda o error registrado en §4, sin comentarios espontaneos (§6), 52.31 s de
  duracion (§8). Esta vez el participante conto su proceso actual completo: el relato queda en §1,
  declarado como relatado por el y transmitido por la facilitadora — no entrecomillado, porque no son
  sus palabras literales —, y la respuesta 5 de §7 se registra literal («TAl como se describio
  anteriormente y se lo entregue a Juana»), remitiendo a §1 en vez de duplicar el relato (`D-102`).
  `010_prototype/010_participants.md` §4 se actualiza: sesion `003`, fecha `2026-09-19`, `¿Encajo? =
  si`. Sobre `A-009`: el participante no hizo comentarios durante la sesion, asi que no hay nada que
  anotar segun el limite de `D-098`.
- **Que quedo abierto:** faltan las sesiones `004` y `005` del Paso 5; el prototipo sigue sin tocarse
  entre ellas. Falta lanzar `report_auditor` sobre el commit de esta sesion. Nace `T-058` (Baja, No
  bloqueante, `Origen: session-closer`): la cuarta orden de evidencia de `D-102`
  (`git log --oneline --name-only -- 010_prototype/`) deja de reproducir en cuanto el commit de esta
  sesion exista, porque tambien toca `010_prototype/`. `T-047`, `T-048`, `T-050`, `T-054` y `T-055`
  (`010_prototype`) siguen `No implementada`, sin cambios. `T-049` sigue `No implementada`, pendiente
  de la decision del usuario. `T-046`, `T-042`, `T-037`, `T-035`, `T-032`, `T-030`, `T-031` y `T-033`
  siguen abiertas, sin cambios. `DT-002`, `DT-005` y `DT-006` sin cambios.

### S-026 - Cuarta sesion del Paso 5 corrida (`D-104`/`L-027`), y `F-036` de `R-027` evaluado (`D-103`/`T-059`/`T-060`)
| Campo | Valor |
|---|---|
| Fecha | 2026-09-19 |
| Etapa | 010_prototype |
| Tareas | T-059, T-060 |

- **Que se hizo:** se corre la cuarta de las cinco sesiones del Paso 5:
  `010_prototype/015_session_004.md`, con JD Rodriguez como unico participante (el Actor Generador) y
  Juana Ramirez como facilitadora externa; el registro se transcribe al dictado por `manager`
  (`D-104`). Estado asignado: `Exito autonomo`, de 09:44 a 09:45 (50.45 s). El unico comentario
  espontaneo (§6) llego dictado en estilo indirecto; se registra declarado **transmitido, no
  literal** en vez de entrecomillarse, y se escribe `L-027` sobre esa distincion. Las respuestas de
  §7 si llegaron en primera persona y van entrecomilladas. `010_prototype/010_participants.md` §4 se
  actualiza: sesion `004`, fecha `2026-09-19`, `¿Encajo? = si`. Sobre `A-009`: el unico comentario
  espontaneo trata de la organizacion de la pagina, no de la discrepancia del limite de `D-098`; no
  hay nada que anotar. Ademas, `report_auditor` audito el commit de `S-025` (`0c07cc8`) en `R-027` y
  entrego `F-036` (`Baja`/`No bloqueante`): la seccion 0 de `_audit/S-025.md` enumeraba cuatro
  hallazgos `Aceptado — pendiente` donde el registro del mismo commit tenia seis (faltaban `F-016` y
  `F-017`). Verificado vigente contra `HEAD` (`b374d01`) y aceptado con `D-103`: nota fechada al
  final de `_audit/S-025.md` que completa la lista sin reescribir la seccion 0 (`T-059`,
  `Implementada`); la segunda recomendacion del hallazgo (que el cierre derive esa lista de
  `findings.md` con una orden publicada, en vez de escribirla a mano) se acepta y se aplaza a `T-060`,
  porque toca `protocol-close` y el usuario pidio esta jornada para el Paso 5. `_audit/findings.md`
  actualiza fila y ficha de `F-036` a `Aceptado — pendiente`, citando `D-103` / `T-059`, `T-060`.
- **Que quedo abierto:** falta la sesion `005` del Paso 5, la ultima; el prototipo sigue sin tocarse.
  Falta lanzar `report_auditor` sobre el commit de esta sesion. `T-060` (Baja, No bloqueante,
  `Origen: report_auditor`) queda `No implementada`: `protocol-close` aun no deriva esas listas y
  cifras con orden publicada. `T-058` sigue `No implementada`, sin cambios. `T-047`, `T-048`, `T-050`,
  `T-054` y `T-055` (`010_prototype`) siguen `No implementada`, sin cambios. `T-049` sigue
  `No implementada`, pendiente de la decision del usuario. `T-046`, `T-042`, `T-037`, `T-035`,
  `T-032`, `T-030`, `T-031` y `T-033` siguen abiertas, sin cambios. `DT-002`, `DT-005` y `DT-006` sin
  cambios.

### S-027 - Quinta y ultima sesion del Paso 5 corrida (`D-106`), observaciones clasificadas y cerradas (`D-107`/`D-108`), y `F-037` de `R-028` evaluado (`D-105`/`T-061`/`T-062`)
| Campo | Valor |
|---|---|
| Fecha | 2026-09-19 |
| Etapa | 010_prototype |
| Tareas | T-061, T-062, T-063 |

- **Que se hizo:** se corre la quinta y ultima de las cinco sesiones del Paso 5:
  `010_prototype/015_session_005.md`, con JD Rodriguez como unico participante (el Actor Generador) y
  Juana Ramirez como facilitadora externa; el registro se transcribe al dictado por `manager`, con la
  hora de fin corregida solo cuando el usuario la aclaro (`D-106`). Estado asignado: `Exito autonomo`,
  de 10:38 a 10:39 (53.56 s), sin intervenciones ni comentarios espontaneos; las cinco respuestas de
  §7 llegaron en primera persona y van entrecomilladas. `010_prototype/010_participants.md` §4 se
  actualiza: sesion `005`, fecha `2026-09-19`, `¿Encajo? = si`. Con la ronda completa, se escribe
  `010_prototype/020_observations.md`: el codigo `O-XXX` se declara en `project.md` con `D-107`, y el
  patrocinador decide la clasificacion de las seis observaciones sobre la propuesta de `manager`
  (`D-107`); el artefacto pasa a `CERRADO` (`D-108`), con un recuento de su plantilla que queda para
  corregir aparte (`T-063`). Ademas, `report_auditor` audito el commit de `S-026` (`c8b2581`) en
  `R-028` y entrego `F-037` (`Media`/`Bloqueante`): el indice de `_persistence/assumptions.md` daba
  `A-004` y `A-005` por `Confirmado` desde `D-079`, y sus fichas seguian en `Abierto` porque esa
  decision solo cambio el indice. Verificado vigente contra `HEAD` (`c8b2581`) y aceptado con
  `D-105`: las dos fichas pasan a `Confirmado`, cada una con su nota fechada, y se anade otra nota
  fechada en `D-079` y al final de `_audit/S-026.md`, sin reescribir ninguna prosa existente (`T-061`,
  `Implementada`); la tercera recomendacion (comparar indice y ficha por estado en el cierre, como ya
  hace con `findings.md`) se acepta y se aplaza (`T-062`). `_audit/findings.md` actualiza fila y
  ficha de `F-037` a `Aceptado — pendiente`, citando `D-105` / `T-061`, `T-062`. Se escribe `L-028`
  sobre la leccion que deja el desfase: un criterio de cierre tiene que leer cada sitio que la
  decision dice cambiar, no solo el primero.
- **Que quedo abierto:** falta el Paso 9 de `010_prototype` (validacion de negocio con el
  patrocinador, en sesion aparte) y comprobar la condicion de salida de la etapa. Falta lanzar
  `report_auditor` sobre el commit de esta sesion. `T-062` (Media, No bloqueante,
  `Origen: report_auditor`, nueva) y `T-063` (Baja, No bloqueante, `Origen: manager`, nueva) quedan
  `No implementada`. `T-058` y `T-060` siguen `No implementada`, sin cambios. `T-047`, `T-048`,
  `T-050`, `T-054` y `T-055` (`010_prototype`) siguen `No implementada`, sin cambios. `T-049` sigue
  `No implementada`, pendiente de la decision del usuario. `T-046`, `T-042`, `T-037`, `T-035`,
  `T-032`, `T-030`, `T-031` y `T-033` siguen abiertas, sin cambios. `DT-002`, `DT-005` y `DT-006` sin
  cambios.

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
