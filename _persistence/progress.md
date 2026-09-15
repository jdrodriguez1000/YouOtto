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
| Etapa actual | `000_preproject` |
| Ultima actualizacion | `2026-09-15 (S-002)` |
| Salud | `En marcha` |
| Avance de la etapa | `project.md` completo desde `S-001`; los tres hallazgos de la auditoria `R-001` sobre `S-001` quedaron `Aceptado — pendiente` en `_audit/findings.md` y atendidos en `tasks.md` (`T-003`, `T-004`, `T-005`, las tres `Implementada`): los patrones de anclaje de `protocol-close` ahora admiten ordenes indentadas (`D-008`), el criterio de `T-001` quedo anclado por nota fechada, `_audit/S-001.md` lleva la nota con la salida real del CONTROL DE CIFRA ADYACENTE, y el ancla del indice de `progress.md` para `S-001` esta corregida. Ademas se refuto `A-002` y se confirmo `A-003`: la causa de que `gate1_auditor`, `gate2_auditor` y `phase_exit_auditor` no aparecieran no era el reinicio de Claude Code, sino un `: ` sin comillas en su `description` que invalidaba el YAML de la cabecera; corregido en `D-009`, los tres agentes ya cargan |
| Bloqueos activos | Ninguno bloqueante. `A-001` (abierto, no bloqueante): si el historial de juegos registrados es dato de persona, con disparador al entrar en `005_discovery` |

---

## 2. Ultimo realizado

Segunda sesion de trabajo. Segun el diff: se evaluo la auditoria `R-001` sobre `S-001` y se aceptaron
sus tres hallazgos (`F-001`, `F-002`, `F-003`), registrados en `_audit/findings.md` como
`Aceptado — pendiente`, con dos decisiones nuevas (`D-008`, `D-009`) y un supuesto refutado y uno
confirmado (`A-002` → Refutado, `A-003` → Confirmado). Se ampliaron once patrones de
`.claude/skills/protocol-close/SKILL.md` para que admitan ordenes indentadas dentro de vinetas
(`D-008`); se anclo por nota fechada el criterio de `T-001`, que habia quedado con `<hash>` sin
resolver; se anadio a `_audit/S-001.md` la nota con la salida real (ocho lineas) del CONTROL DE
CIFRA ADYACENTE que el informe original publico sin ella; y se corrigio el ancla rota de la fila
`S-001` en el indice de `progress.md` (`project.md` → `projectmd`). Por separado, se corrigio en los
tres agentes `gate1_auditor`, `gate2_auditor` y `phase_exit_auditor` el `: ` sin comillas de su
`description` que invalidaba el YAML de la cabecera y los dejaba fuera de los agentes lanzables
(`D-009`); se comprobo con un parser YAML que los seis agentes del proyecto cargan validos. Se
escribieron dos lecciones nuevas (`L-003`, `L-004`). Las tareas `T-003`, `T-004` y `T-005` quedan
`Implementada`.

---

## 3. Siguiente paso

Evaluar el informe de auditoria que `report_auditor` entregue sobre el commit de esta sesion
(`S-002`). Con los tres agentes de Gate y de acta ya cargando (`D-009`, `A-003`), atender `T-002`:
registrar con su propia `D-XXX` quien firma el dictamen de `gate1_auditor` y el de `gate2_auditor`
antes de lanzar cada Gate. Sigue pendiente decidir sobre `A-001` (si el historial de juegos
registrados es dato de persona) al entrar en `005_discovery`, con la clasificacion de actores
(`_templates/005_discovery/010_actors.md`).

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
