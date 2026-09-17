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
| [DT-001](#dt-001---claude-se-aleja-del-esqueleto-de-arranque) | `.claude/` se aleja del esqueleto de arranque | Implementada | Confirmada | Media | No bloqueante |
| [DT-002](#dt-002---el-control-de-salida-reproducida-no-reejecuta-las-ordenes) | El CONTROL DE SALIDA REPRODUCIDA no reejecuta las ordenes | No implementada | Confirmada | Baja | No bloqueante |
| [DT-003](#dt-003---el-andamiaje-vuelve-a-alejarse-del-esqueleto-de-arranque) | El andamiaje vuelve a alejarse del esqueleto de arranque | Implementada | Confirmada | Alta | No bloqueante |
| [DT-004](#dt-004---la-frase-de-d-028-quedo-fuera-de-la-promocion-de-d-032) | La frase de `D-028` quedo fuera de la promocion de `D-032` | Implementada | Confirmada | Baja | No bloqueante |

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
| Estado | Implementada |
| Confirmacion | Confirmada |
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

🕐 **Nota 2026-09-16 — confirmada por el usuario, y su alcance crecio.** El usuario la confirmo al
evaluarla y pidio pagarla en el acto con `protocol-promote`, con la condicion expresa de que todo lo
que suba al esqueleto sea agnostico. La descripcion de arriba se quedo corta: `D-013` (`S-004`)
tambien cambio `protocol-close/SKILL.md` sin promoverse. Siguen siendo los mismos seis archivos,
medido contra el esqueleto en `707d572`:

  ```
  $ ESQ="C:/Users/USUARIO/Documents/Company_TripleS/SDAI_TripleS"; diff --strip-trailing-cr "$ESQ/.claude/skills/protocol-close/SKILL.md" .claude/skills/protocol-close/SKILL.md | grep '^>' | grep -c 'SALIDA REPRODUCIDA'
  5
  ```

🕐 **Nota 2026-09-16 (cierre de S-005) — pagada: `D-016` promovio los seis archivos, y la orden de
arriba ya no reproduce.** El comando de la nota anterior se corrio antes de que `D-016` ejecutara
`protocol-promote`; el esqueleto local ya esta en el commit `4d20ce2` (que incluye la promocion), asi
que reejecutarlo hoy da `0`, no `5`. No se corrige el numero de la nota anterior porque describe un
estado real de ese momento de la sesion; queda con esta nota fechada al lado, como pide el Paso 2d de
`protocol-close`. Estado de la deuda: **Implementada**, con `D-016` como evidencia.

  ```
  $ ESQ="C:/Users/USUARIO/Documents/Company_TripleS/SDAI_TripleS"; diff --strip-trailing-cr "$ESQ/.claude/skills/protocol-close/SKILL.md" .claude/skills/protocol-close/SKILL.md | grep '^>' | grep -c 'SALIDA REPRODUCIDA'
  0
  $ ESQ="C:/Users/USUARIO/Documents/Company_TripleS/SDAI_TripleS"; for d in .claude _phases _methodology _templates _workflow; do diff -rq --strip-trailing-cr "$ESQ/$d" "$d"; done; diff -q --strip-trailing-cr "$ESQ/CLAUDE.md" CLAUDE.md; echo "exit=$?"
  exit=0
  ```

### DT-002 - El CONTROL DE SALIDA REPRODUCIDA no reejecuta las ordenes
| Campo | Valor |
|---|---|
| Estado | No implementada |
| Confirmacion | Confirmada |
| Importancia | Baja |
| Urgencia | No bloqueante |
| Origen | report_auditor |
| Fecha | 2026-09-16 |

- **Deuda:** el control del Paso 7c-bis compara el texto de la salida publicada con el de la anclada,
  sin reejecutar la orden; una salida pegada que la orden no devuelve pasa limpia (`R-004`, `D-017`).
- **Por que se tomo:** reejecutar ordenes del registro de forma automatica es caro y puede tocar otros
  repositorios o depender del estado de la maquina; declarar el limite (`T-008`) cuesta poco.
- **Costo de no pagarla:** la reproduccion de una salida anclada sigue dependiendo de que quien ancla
  la pegue de una ejecucion real; solo la auditoria lo detecta despues.
- **Como se paga:** definir que ordenes son reejecutables sin efectos fuera del repositorio y hacer
  que el control las reejecute y compare la salida.

### DT-003 - El andamiaje vuelve a alejarse del esqueleto de arranque
| Campo | Valor |
|---|---|
| Estado | Implementada |
| Confirmacion | Confirmada |
| Importancia | Alta |
| Urgencia | No bloqueante |
| Origen | report_auditor |
| Fecha | 2026-09-16 |

- **Deuda:** despues del pago de `DT-001` (`D-016`), `D-022`, `D-023` y `D-024` cambiaron tres
  archivos copiables sin promoverlos al esqueleto de arranque
  (`C:/Users/USUARIO/Documents/Company_TripleS/SDAI_TripleS`, en `4d20ce2`), y `D-026` vuelve a tocar
  `protocol-close/SKILL.md`. Nace de `F-009` (`D-025`). Medido antes de `D-026`:

  ```
  $ ESQ="C:/Users/USUARIO/Documents/Company_TripleS/SDAI_TripleS"; git -C "$ESQ" log --oneline -1; for d in .claude _phases _methodology _templates _workflow; do diff -rq --strip-trailing-cr "$ESQ/$d" "$d"; done; diff -q --strip-trailing-cr "$ESQ/CLAUDE.md" CLAUDE.md; echo "exit=$?"
  4d20ce2 Promocion del andamiaje desde YouOtto (origen 4fad4dd)
  Files C:/Users/USUARIO/Documents/Company_TripleS/SDAI_TripleS/.claude/skills/protocol-close/SKILL.md and .claude/skills/protocol-close/SKILL.md differ
  Files C:/Users/USUARIO/Documents/Company_TripleS/SDAI_TripleS/.claude/skills/protocol-start/SKILL.md and .claude/skills/protocol-start/SKILL.md differ
  Files C:/Users/USUARIO/Documents/Company_TripleS/SDAI_TripleS/_templates/000_preproject/020_decisions.md and _templates/000_preproject/020_decisions.md differ
  exit=0
  ```

  ⚠️ `exit=0` es el del ultimo `diff` (`CLAUDE.md`), no el del bucle.
- **Por que se tomo:** cada cambio atendia un hallazgo o una recomendacion de auditoria de la propia
  sesion; promover exige la puerta de `protocol-promote`, que no es parte del cierre.
- **Costo de no pagarla:** un proyecto que parta hoy del esqueleto hereda el control SIN ANCLAR que
  salta con prosa, un estado de decision de menos y un limite del 7c-quater sin declarar.
- **Como se paga:** correr `protocol-promote` con la puerta del usuario para llevar los archivos que
  difieran al esqueleto de arranque.
- 🕐 **Nota 2026-09-16 (`R-009`, `D-030`):** la Importancia pasa de `Media` a `Alta`. Lleva tres
  sesiones creciendo, y `D-028` vuelve a tocar `protocol-close/SKILL.md`. La promocion va antes de la
  clasificacion de actores (`T-019`).
- 🕐 **Nota 2026-09-16 (`D-032`): pagada, estado al 2026-09-16.** Los tres archivos se promovieron
  desde `95c5cfd` al commit `447c2a0` del esqueleto, y la copia de la raiz `_persistence/decisions.md`
  se regenero. El barrido del Paso 1 salio vacio despues de promover. Queda fuera a proposito la frase
  de `D-028`, sin commitear al promover: el cierre la vera como desfase nuevo, y no es esta deuda.
  La evidencia esta en `D-032`. **Ver `DT-004`.**

### DT-004 - La frase de `D-028` quedo fuera de la promocion de `D-032`
| Campo | Valor |
|---|---|
| Estado | Implementada |
| Confirmacion | Confirmada |
| Importancia | Baja |
| Urgencia | No bloqueante |
| Origen | session-closer |
| Fecha | 2026-09-16 |

- **Deuda:** `D-032` promovio `.claude/skills/protocol-close/SKILL.md` desde el commit `95c5cfd`, antes
  de que la frase de `D-028` (Paso 4: el caso del criterio que no reproduce) se commiteara. El Paso 2f
  de este cierre lo confirma sobre el arbol de trabajo, con la frase ya repuesta:

  ```
  $ ESQ="C:/Users/USUARIO/Documents/Company_TripleS/SDAI_TripleS"; diff -rq --strip-trailing-cr "$ESQ/.claude" .claude
  Files C:/Users/USUARIO/Documents/Company_TripleS/SDAI_TripleS/.claude/skills/protocol-close/SKILL.md and .claude/skills/protocol-close/SKILL.md differ
  ```

- **Por que se tomo:** `D-032` (con su `L-012`) elige promover desde el ultimo commit auditado para no
  bloquear `protocol-promote` con trabajo en curso; eso deja fuera, a proposito, lo que se escribio
  despues de ese commit.
- **Costo de no pagarla:** un proyecto que parta hoy del esqueleto no tiene declarado en el Paso 4 de
  `protocol-close` el caso del criterio que no reproduce.
- **Como se paga:** correr `protocol-promote` de nuevo, ya con la frase de `D-028` commiteada, para
  llevarla al esqueleto de arranque.
- 🕐 **Nota 2026-09-16 (`D-035`): confirmada y pagada, estado al 2026-09-16.** El usuario la confirmo, y
  `.claude/skills/protocol-close/SKILL.md` se promovio desde `1add289` al commit `7f4381e` del
  esqueleto, subido. El barrido del Paso 1 salio vacio despues de promover. La evidencia esta en `D-035`.
