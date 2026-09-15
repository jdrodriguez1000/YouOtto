# findings.md

> 📄 **Se copia a `_audit/findings.md`.** Se copia entero, con el indice vacio y la plantilla de
> entrada intacta.
>
> ⚠️ **Sin sus convenciones, la primera pasada de `report_auditor` tiene que inventarse los estados
> de un hallazgo** — y son justamente los estados los que impiden que un hallazgo desaparezca.
>
> ⛔ **Lo que se borra al copiar son los ejemplos, no las convenciones.**

---

> Registro de los **hallazgos de auditoria**: lo que el agente `report_auditor` encontro, y en que
> acabo cada cosa. Cada hallazgo tiene codigo `F-NNN`.
>
> 🔑 **Este archivo existe por una sola razon: que un hallazgo no desaparezca porque no nos gusto.**
> Aceptado, rechazado o aplazado, todos siguen aqui con su estado.

---

## Indice

| Codigo | Hallazgo | Auditoria | Gravedad | Estado |
|---|---|---|---|---|
| [F-001](#f-001---los-barridos-de-anclaje-de-los-pasos-2d-y-7c-no-ven-ordenes-indentadas) | Los barridos de anclaje de los Pasos 2d y 7c no ven ordenes indentadas | R-001 | Media | Abierto |
| [F-002](#f-002---el-control-de-cifra-adyacente-de-s-001-no-se-publico-entero) | El CONTROL DE CIFRA ADYACENTE de S-001 no se publico entero | R-001 | Media | Abierto |
| [F-003](#f-003---ancla-rota-en-el-indice-de-progressmd-para-s-001) | Ancla rota en el indice de `progress.md` para S-001 | R-001 | Baja | Abierto |

---

## Convenciones

| Campo | Valores posibles |
|---|---|
| Codigo | `F-NNN`, correlativo, no se reutiliza |
| Auditoria | el `R-XXX` que lo abrio |
| Gravedad | `Alta` / `Media` / `Baja` |
| Estado | `Abierto` / `Aceptado — pendiente` / `Implementado` / `No se implementa` |
| Cerrado en | el commit sobre el que la auditoria verifico la correccion |

### Que significa cada estado

| Estado | Cuando | Que exige |
|---|---|---|
| `Abierto` | la auditoria lo abrio y `manager` aun no lo ha evaluado | — |
| `Aceptado — pendiente` | de acuerdo, pero todavia no hecho | **su `T-XXX`**, abierta |
| `Implementado` | corregido, y **una auditoria posterior lo verifico** | el commit donde se verifico |
| `No se implementa` | rechazado | **su `D-XXX`**. Si el rechazo es por coste o prioridad y no por ser incorrecto, ademas **su `DT-XXX`** |

🚨 **`Implementado` no lo escribe `manager`, lo escribe la auditoria siguiente.** Un hallazgo se
cierra **verificando la correccion sobre un commit posterior**, no declarandola. Si el auditado
pudiera cerrar sus propios hallazgos, este archivo diria lo que quisieramos que dijera.

🚨 **`Aceptado — pendiente` no es un adorno.** Sin ese estado, un hallazgo con el que estamos de
acuerdo pero que aun no hicimos no esta implementado ni rechazado: no aparece en ningun sitio y
desaparece del radar. Asi es como se pierden los hallazgos buenos.

⚠️ **Un rechazo por coste o prioridad es deuda tecnica por definicion**, y exige su `DT-XXX`. Un
rechazo por coste sin entrada en `techdebt.md` es, por si solo, un hallazgo nuevo — y no requiere
criterio: se comprueba mirando si la entrada existe.

🚨 **Un hallazgo rechazado no se borra: se queda con su razon.** Ese es el motivo entero de que este
archivo exista. Si un `F-NNN` desaparece porque no nos convencio, el registro pasa a decir lo que
quisieramos que dijera.

🚨 **El indice se escribe a mano, sin generador.** Cada fila enlaza por ancla a su hallazgo.

---

## Hallazgos

<!--
Plantilla:

### F-NNN - Titulo
| Campo | Valor |
|---|---|
| Auditoria | R-XXX |
| Fecha | AAAA-MM-DD |
| Gravedad | |
| Estado | Abierto |
| Registrado en | T-XXX / D-XXX / DT-XXX |
| Cerrado en | |

- **Que se observo:** el hecho, con su comando y salida cruda.
- **Por que importa:** que se rompe si se queda asi.
- **Que se hizo:** la evaluacion de `manager` y donde quedo registrada.
-->

### F-001 - Los barridos de anclaje de los Pasos 2d y 7c no ven ordenes indentadas
| Campo | Valor |
|---|---|
| Auditoria | R-001 |
| Fecha | 2026-09-15 |
| Gravedad | Media |
| Estado | Abierto |
| Registrado en | |
| Cerrado en | |

- **Que se observo:** sobre `5cae773`, el censo literal del Paso 7c (`grep -cE '^\$ .*<hash>'` en
  `_persistence` y `_audit`) no devuelve nada; el mismo censo con `'^[[:space:]]*\$ .*<hash>'`
  devuelve `_persistence/tasks.md: 1`, la linea 132
  `  $ git show <hash>:project.md | grep -cE '<[A-Za-z]'` (criterio de cierre de `T-001`, con
  `<hash>` sin resolver). Los bloques de comando del registro van indentados dentro de vinetas y el
  patron del Paso 2d (`^\+\$ `) no los ve. Anclada a `5cae773`, la orden devuelve `0`, igual que lo
  publicado. Comandos y salidas completos en `_audit/R-001.md`, secciones 1.4 y 2.
- **Por que importa:** el criterio de cierre de una tarea `Implementada` no es reproducible tal como
  esta escrito, y un control obligatorio del cierre sale limpio sobre lo que no mira; con este
  formato de registro, el falso negativo se repite en cada sesion.
- **Que se hizo:** pendiente de evaluacion de `manager`.

### F-002 - El CONTROL DE CIFRA ADYACENTE de S-001 no se publico entero
| Campo | Valor |
|---|---|
| Auditoria | R-001 |
| Fecha | 2026-09-15 |
| Gravedad | Media |
| Estado | Abierto |
| Registrado en | |
| Cerrado en | |

- **Que se observo:** la NOTA DE CIERRE de la seccion 7 de `_audit/S-001.md` pega la orden pero no
  su salida («Devolvio 7 lineas (ver el detalle ... en la seccion 6)»); la seccion 6 no contiene
  ese detalle (`grep -c "CIFRA"` sobre ella: `0`). Reejecutada la orden literal del Paso 6b sobre
  `git show 5cae773:_audit/S-001.md`, devuelve 8 lineas (36, 81, 82, 130, 131, 173, 210, 211), no 7.
  Salida completa en `_audit/R-001.md`, seccion 2.
- **Por que importa:** `protocol-close` exige esa salida entera y con su orden; publicada como
  veredicto y con una cifra que no reproduce, no se distingue de un control no corrido.
- **Que se hizo:** pendiente de evaluacion de `manager`.

### F-003 - Ancla rota en el indice de progress.md para S-001
| Campo | Valor |
|---|---|
| Auditoria | R-001 |
| Fecha | 2026-09-15 |
| Gravedad | Baja |
| Estado | Abierto |
| Registrado en | |
| Cerrado en | |

- **Que se observo:** `git show 5cae773:_persistence/progress.md | grep -oE '\]\(#s-001[^)]*\)'`
  devuelve `](#s-001---primera-sesion-de-trabajo-project.md-completo-y-el-porque-del-arranque)`; el
  encabezado genera `...-projectmd-...`. Las otras catorce anclas de `_persistence/` resuelven
  (`_audit/R-001.md`, seccion 1.7).
- **Por que importa:** la fila del indice no lleva a su entrada.
- **Que se hizo:** pendiente de evaluacion de `manager`.
