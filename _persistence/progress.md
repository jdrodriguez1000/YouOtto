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
| Ultima actualizacion | `2026-09-16 (S-005)` |
| Salud | `En marcha` |
| Avance de la etapa | Con `phase_exit_auditor` dictaminando **CASILLAS SATISFECHAS** (10 CUMPLE) sobre `f2b7662` (acta en `_audit/000_preproject/005_phase_exit_record_001.md`, commit `4fad4dd`), el usuario firmo `D-015`: **ETAPA CERRADA** para `000_preproject`. La etapa declarada pasa a `005_discovery`. El usuario confirmo `DT-001` y pidio pagarla en el acto: `D-016` promovio al esqueleto de arranque los seis archivos que se le habian adelantado (`.claude/agents/gate1_auditor.md`, `gate2_auditor.md`, `phase_exit_auditor.md`, y `.claude/skills/protocol-audit/SKILL.md`, `protocol-start/SKILL.md`, `protocol-close/SKILL.md`), commit `4d20ce2` en `SDAI_TripleS`, subido; `DT-001` queda `Implementada`. Se evaluaron las tres recomendaciones sin hallazgo de `R-004`: `D-017` acepta la primera (declarar el limite del CONTROL DE SALIDA REPRODUCIDA, `T-008`, y abre `DT-002`); `D-018` rechaza la segunda (inexactitud sin efecto en un informe ya auditado, `S-004.md` no se reescribe); `D-019` acepta la tercera (anclar las ordenes `git diff --cached` de la seccion 1 del informe, `T-009`) |
| Bloqueos activos | Ninguno bloqueante. `A-001` (abierto, no bloqueante): si el historial de juegos registrados es dato de persona; su disparador —la clasificacion de actores de `005_discovery`— ya esta activo al entrar en esta etapa |

---

## 2. Ultimo realizado

Quinta sesion de trabajo. Segun el diff: el usuario firmo `D-015`, **ETAPA CERRADA** para
`000_preproject`, con las diez casillas de su condicion de salida `CUMPLE` (acta de
`phase_exit_auditor` sobre `f2b7662`, commit `4fad4dd`) y `R-004` sin hallazgos. La etapa declarada
pasa a `005_discovery`. El usuario confirmo `DT-001` y pidio pagarla en el acto: `D-016` corrio
`protocol-promote` y llevo al esqueleto de arranque los seis archivos que se le habian adelantado en
sesiones previas (tres agentes de Gate/acta y tres skills de protocolo), aprobados uno por uno,
commit `4d20ce2` en `SDAI_TripleS` y subido; el cierre marca `DT-001` `Implementada` citando `D-016`.
Se evaluaron las tres recomendaciones sin hallazgo de `R-004` (auditoria de `S-004`): `D-017` acepta
que el CONTROL DE SALIDA REPRODUCIDA declare que compara texto y no reejecuta ordenes (`T-008`, y
`DT-002` para la reejecucion futura); `D-018` rechaza corregir el recuento de la NOTA DE CIERRE de
`S-004.md` porque el informe ya esta auditado y la inexactitud no tiene efecto; `D-019` acepta que el
Paso 7c del cierre traduzca las ordenes `git diff --cached` de la seccion 1 del informe a su forma
anclada (`T-009`).

---

## 3. Siguiente paso

Evaluar el informe de auditoria que `report_auditor` entregue sobre el commit de esta sesion
(`S-005`). Con la etapa `005_discovery` recien declarada, el primer trabajo de producto es la
clasificacion de actores (`_templates/005_discovery/010_actors.md`), que es ademas el disparador de
`A-001` (si el historial de juegos registrados es dato de persona). Quedan abiertas `T-008` (declarar
en el Paso 7c-bis que el CONTROL DE SALIDA REPRODUCIDA no reejecuta, Baja) y `T-009` (anclar las
ordenes `git diff --cached` de la seccion 1 del informe al Paso 7c, Media), las dos sin bloquear el
trabajo de `005_discovery`. Sigue abierta `DT-002` (el CONTROL DE SALIDA REPRODUCIDA no reejecuta las
ordenes), confirmada y sin pagar.

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
