# techdebt.md

> 📄 **Se copia a `_persistence/techdebt.md`.** Se copia entero, con el indice vacio y la plantilla
> de entrada intacta.
>
> ⛔ **Lo que se borra al copiar son los ejemplos, no las convenciones.** Las convenciones son las
> reglas del archivo, y `CLAUDE.md` manda leerlas antes de escribir en el.
>
> 🚨 **El cierre PROPONE entradas aqui; quien las confirma es el usuario.** Por eso `Confirmacion`
> es un campo aparte de `Estado`.

---

> Registro de la **deuda tecnica** del proyecto: atajos conscientes, soluciones provisionales
> y pendientes de calidad. Cada item tiene codigo `DT-XXX`, estado, importancia y urgencia.
> La deuda se registra en el momento en que se contrae.

---

## Indice

| Codigo | Deuda tecnica | Estado | Confirmacion | Importancia | Urgencia |
|---|---|---|---|---|---|
| [DT-001](#dt-001---claude-se-aleja-del-esqueleto-de-arranque) | `.claude/` se aleja del esqueleto de arranque | No implementada | Propuesta (pendiente del usuario) | Media | No bloqueante |

---

## Convenciones

| Campo | Valores posibles |
|---|---|
| Codigo | `DT-XXX`, correlativo, no se reutiliza |
| Estado | `Implementada` / `No implementada` / `Cancelada` / `Suspendida` |
| Importancia | `Alta` / `Media` / `Baja` |
| Urgencia | `Bloqueante` / `No bloqueante` |
| Origen | `usuario` / `manager` / `report_auditor` |
| Confirmacion | `Confirmada` / `Propuesta (pendiente de <quien>)` |

`Implementada` = la deuda ya fue pagada (corregida). `No implementada` = sigue pendiente de pago.

🚨 **`Confirmacion` y `Estado` son ejes distintos, y por eso son dos campos.** `Estado` dice si la
deuda **se pago**; `Confirmacion` dice si **es deuda**. Una entrada puede estar confirmada y sin
pagar —lo normal— pero tambien propuesta y sin confirmar: alguien la detecto y nadie ha dicho
todavia que el atajo fuera un atajo.

🚨 **`Propuesta` lleva dueno dentro del valor, siempre.** No existe `Propuesta` a secas: quien
confirma va escrito (`Propuesta (pendiente del usuario)`), porque una propuesta sin dueno no espera
—se queda propuesta para siempre—. Si no sabes quien confirma, entonces lo que falta no es la
confirmacion: es saber de quien es la decision, y eso es una `T-XXX`.

⚠️ **El caracter provisional va en el indice, no solo en el detalle.** El ojo entra por la tabla de
arriba; una entrada `Propuesta` que en el indice se ve igual que una confirmada es, en la practica,
una confirmada.

⚠️ **El titulo de una deuda nombra el defecto, y no cambia al pagarla.** Al pasar a `Implementada`,
lo que se fecha es el cuerpo —«🕐 estado al AAAA-MM-DD, ya corregido»— para que no siga hablando en
presente de algo ya resuelto.

🚨 **Un hallazgo de auditoria rechazado por coste o prioridad —y no por ser incorrecto— exige su
entrada aqui.** Un rechazo por coste sin entrada en este archivo es, por si solo, un hallazgo nuevo:
no requiere criterio, se comprueba mirando si la entrada existe.

🚨 **El indice se escribe a mano, sin generador.** Cada fila enlaza por ancla a su deuda.

---

## Deuda registrada

<!--
Plantilla:

### DT-XXX - Titulo
| Campo | Valor |
|---|---|
| Estado | No implementada |
| Confirmacion | |
| Importancia | |
| Urgencia | |
| Origen | |
| Fecha | AAAA-MM-DD |

- **Deuda:** que atajo se tomo.
- **Por que se tomo:** que se gano a cambio.
- **Costo de no pagarla:** que pasa si se queda.
- **Como se paga:** que habria que hacer.
-->

### DT-001 - `.claude/` se aleja del esqueleto de arranque
| Campo | Valor |
|---|---|
| Estado | No implementada |
| Confirmacion | Propuesta (pendiente del usuario) |
| Importancia | Media |
| Urgencia | No bloqueante |
| Origen | session-closer |
| Fecha | 2026-09-15 |

- **Deuda:** `D-008` amplio once patrones de `.claude/skills/protocol-close/SKILL.md`, `D-009`
  corrigio la `description` de `.claude/agents/gate1_auditor.md`, `gate2_auditor.md` y
  `phase_exit_auditor.md`, y `D-010` (2026-09-16) sustituyo el patron de cerca de bloque en las doce
  apariciones de `protocol-close/SKILL.md`, `protocol-audit/SKILL.md` y `protocol-start/SKILL.md` —
  sin promover ninguno de los tres cambios al esqueleto de arranque
  (`C:/Users/USUARIO/Documents/Company_TripleS/SDAI_TripleS`). El Paso 2f de `protocol-close` lo
  confirma, ahora sobre seis archivos en vez de cuatro:

  ```
  $ diff -rq --strip-trailing-cr "C:/Users/USUARIO/Documents/Company_TripleS/SDAI_TripleS/.claude" .claude
  Files .../SDAI_TripleS/.claude/agents/gate1_auditor.md and .claude/agents/gate1_auditor.md differ
  Files .../SDAI_TripleS/.claude/agents/gate2_auditor.md and .claude/agents/gate2_auditor.md differ
  Files .../SDAI_TripleS/.claude/agents/phase_exit_auditor.md and .claude/agents/phase_exit_auditor.md differ
  Files .../SDAI_TripleS/.claude/skills/protocol-audit/SKILL.md and .claude/skills/protocol-audit/SKILL.md differ
  Files .../SDAI_TripleS/.claude/skills/protocol-close/SKILL.md and .claude/skills/protocol-close/SKILL.md differ
  Files .../SDAI_TripleS/.claude/skills/protocol-start/SKILL.md and .claude/skills/protocol-start/SKILL.md differ
  ```

- **Por que se tomo:** las tres correcciones eran urgentes para este proyecto (un hallazgo de
  auditoria abierto en cada una de dos sesiones, y tres agentes que no cargaban); promover exige la
  puerta manual de `protocol-promote`, que no es parte del cierre.
- **Costo de no pagarla:** cualquier otro proyecto que parta hoy del esqueleto hereda el patron viejo
  de `protocol-close`/`protocol-audit`/`protocol-start` (ciego a ordenes indentadas y a cercas
  indentadas) y la cabecera YAML invalida en sus tres agentes.
- **Como se paga:** correr `protocol-promote` con la puerta del usuario para llevar los seis
  archivos al esqueleto de arranque.
