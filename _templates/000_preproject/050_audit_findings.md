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
| — | — | — | — | — |

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
