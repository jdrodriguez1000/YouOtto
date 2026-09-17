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

| Codigo | Hallazgo | Auditoria | Gravedad | Urgencia | Estado |
|---|---|---|---|---|---|
| [F-001](#f-001---los-barridos-de-anclaje-de-los-pasos-2d-y-7c-no-ven-ordenes-indentadas) | Los barridos de anclaje de los Pasos 2d y 7c no ven ordenes indentadas | R-001 | Media | — | Implementado |
| [F-002](#f-002---el-control-de-cifra-adyacente-de-s-001-no-se-publico-entero) | El CONTROL DE CIFRA ADYACENTE de S-001 no se publico entero | R-001 | Media | — | Implementado |
| [F-003](#f-003---ancla-rota-en-el-indice-de-progressmd-para-s-001) | Ancla rota en el indice de `progress.md` para S-001 | R-001 | Baja | — | Implementado |
| [F-004](#f-004---el-control-de-prosa-borrada-de-protocol-close-no-reconoce-cercas-indentadas) | El CONTROL DE PROSA BORRADA de protocol-close no reconoce cercas indentadas | R-002 | Media | — | Implementado |
| [F-005](#f-005---el-anclaje-de-t-006-sustituyo-una-salida-que-no-reproducia-y-la-nota-afirma-que-reproduce) | El anclaje de T-006 sustituyo una salida que no reproducia y la nota afirma que reproduce | R-003 | Media | — | Implementado |
| [F-006](#f-006---el-acta-de-cierre-de-000_preproject-sigue-con-la-firma-del-patrocinador-en-blanco-mientras-el-registro-da-la-etapa-por-cerrada) | El acta de cierre de 000_preproject sigue con la firma del patrocinador en blanco mientras el registro da la etapa por cerrada | R-005 | Media | — | Implementado |
| [F-007](#f-007---la-seccion-7-de-s-005-promete-la-forma-anclada-de-la-orden-del-paso-2d-en-la-nota-de-cierre-y-no-esta) | La seccion 7 de S-005 promete la forma anclada de la orden del Paso 2d en la NOTA DE CIERRE, y no esta | R-005 | Baja | — | Implementado |
| [F-008](#f-008---el-control-sin-anclar-del-7c-quater-salta-con-prosa-y-el-anclaje-de-s-006-se-commiteo-igual) | El control SIN ANCLAR del 7c-quater salta con prosa y el anclaje de S-006 se commiteo igual | R-006 | Media | — | Implementado |
| [F-009](#f-009---la-seccion-9-de-s-007-atribuye-el-desfase-con-el-esqueleto-a-dt-001-que-esta-implementada) | La seccion 9 de S-007 atribuye el desfase con el esqueleto a DT-001, que esta Implementada | R-007 | Baja | — | Implementado |
| [F-010](#f-010---t-014-y-t-015-quedan-no-implementada-con-el-trabajo-en-el-diff-y-el-informe-dice-que-es-la-practica-de-sesiones-anteriores) | T-014 y T-015 quedan No implementada con el trabajo en el diff, y el informe dice que es la practica de sesiones anteriores | R-008 | Media | — | Implementado |
| [F-011](#f-011---t-019-queda-implementada-con-un-alcance-que-su-propio-commit-declara-no-cumplido) | T-019 queda Implementada con un alcance que su propio commit declara no cumplido | R-010 | Media | — | Implementado |
| [F-013](#f-013---el-anclaje-de-s-011-se-commiteo-con-la-nota-de-cierre-vacia-y-el-7c-ter-fallando-y-se-completo-en-un-tercer-commit-que-la-nota-no-declara) | El anclaje de S-011 se commiteo con la NOTA DE CIERRE vacia y el 7c-ter fallando, y se completo en un tercer commit que la nota no declara | R-012 | Media | — | Implementado |
| [F-014](#f-014---la-nota-fechada-de-s-011-y-las-entradas-d-036d-039-y-l-013-llevan-2026-09-16-en-un-commit-de-2026-09-17) | La nota fechada de S-011 y las entradas D-036..D-039 y L-013 llevan 2026-09-16 en un commit de 2026-09-17 | R-013 | Media | — | Implementado |
| [F-016](#f-016---d-041-afirma-el-resultado-de-una-prueba-sobre-commits-historicos-sin-publicar-la-orden) | D-041 afirma el resultado de una prueba sobre commits historicos sin publicar la orden | R-015 | Baja | No bloqueante | Aceptado — pendiente |
| [F-017](#f-017---la-nota-de-cierre-de-s-013-dice-dieciseis-lineas-debajo-de-un-control-de-cifra-adyacente-que-publica-diecisiete) | La NOTA DE CIERRE de S-013 dice «dieciseis lineas» debajo de un CONTROL DE CIFRA ADYACENTE que publica diecisiete | R-015 | Baja | No bloqueante | Aceptado — pendiente |

---

## Convenciones

| Campo | Valores posibles |
|---|---|
| Codigo | `F-NNN`, correlativo, no se reutiliza |
| Auditoria | el `R-XXX` que lo abrio |
| Gravedad | `Alta` / `Media` / `Baja` |
| Urgencia | `Bloqueante` / `No bloqueante` |
| Estado | `Abierto` / `Aceptado — pendiente` / `Implementado` / `No se implementa` |
| Cerrado en | el commit sobre el que la auditoria verifico la correccion |

### Que significa cada estado

| Estado | Cuando | Que exige |
|---|---|---|
| `Abierto` | la auditoria lo abrio y `manager` aun no lo ha evaluado | — |
| `Aceptado — pendiente` | de acuerdo, pero todavia no hecho | **su `T-XXX`**, abierta |
| `Implementado` | corregido, y **una auditoria posterior lo verifico** | el commit donde se verifico |
| `No se implementa` | rechazado | **su `D-XXX`**. Si el rechazo es por coste o prioridad y no por ser incorrecto, ademas **su `DT-XXX`** |

### Que significa cada urgencia

La gravedad dice **cuanto dano hace** el defecto; la urgencia dice **si se puede esperar**. Son dos
preguntas distintas y cada hallazgo lleva las dos.

| Urgencia | Cuando | Que se hace |
|---|---|---|
| `Bloqueante` | mientras siga sin corregir, lo que se haga despues hereda el defecto: el registro afirma un estado falso que otros van a leer, un control obligatorio no corre o miente, o se puede perder trabajo | se corrige en la sesion siguiente, **antes** del trabajo de la etapa |
| `No bloqueante` | el defecto no contamina lo que venga despues | se evalua igual en la sesion siguiente, pero su correccion **se puede aplazar** con su `T-XXX` abierta |

⚠️ **Aplazar no es olvidar.** Un `No bloqueante` aceptado sigue en `Aceptado — pendiente` con su
tarea, y aparece en cada arranque hasta que una auditoria lo cierre.

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
| Urgencia | |
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
| Estado | Implementado |
| Registrado en | T-003 / D-008 |
| Cerrado en | e222812 (R-002) |

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
- **Que se hizo:** aceptado. Verificado vigente contra `HEAD` (`45e33a4`), con orden y salida en
  `D-008`. El usuario eligio ampliar los patrones de `protocol-close` (`D-008`), y la orden de `T-001`
  queda anclada por nota fechada. Registrado en `T-003`.

### F-002 - El CONTROL DE CIFRA ADYACENTE de S-001 no se publico entero
| Campo | Valor |
|---|---|
| Auditoria | R-001 |
| Fecha | 2026-09-15 |
| Gravedad | Media |
| Estado | Implementado |
| Registrado en | T-004 |
| Cerrado en | e222812 (R-002) |

- **Que se observo:** la NOTA DE CIERRE de la seccion 7 de `_audit/S-001.md` pega la orden pero no
  su salida («Devolvio 7 lineas (ver el detalle ... en la seccion 6)»); la seccion 6 no contiene
  ese detalle (`grep -c "CIFRA"` sobre ella: `0`). Reejecutada la orden literal del Paso 6b sobre
  `git show 5cae773:_audit/S-001.md`, devuelve 8 lineas (36, 81, 82, 130, 131, 173, 210, 211), no 7.
  Salida completa en `_audit/R-001.md`, seccion 2.
- **Por que importa:** `protocol-close` exige esa salida entera y con su orden; publicada como
  veredicto y con una cifra que no reproduce, no se distingue de un control no corrido.
- **Que se hizo:** aceptado. Verificado vigente contra `HEAD` (`45e33a4`): el rotulo esta en la linea
  279 de `_audit/S-001.md` y la 288 dice «Devolvio 7 lineas» sin salida. Registrado en `T-004`: nota
  fechada con la salida de 8 lineas. El cambio al Paso 7c-ter no se hace mientras no se repita.

### F-003 - Ancla rota en el indice de progress.md para S-001
| Campo | Valor |
|---|---|
| Auditoria | R-001 |
| Fecha | 2026-09-15 |
| Gravedad | Baja |
| Estado | Implementado |
| Registrado en | T-005 |
| Cerrado en | e222812 (R-002) |

- **Que se observo:** `git show 5cae773:_persistence/progress.md | grep -oE '\]\(#s-001[^)]*\)'`
  devuelve `](#s-001---primera-sesion-de-trabajo-project.md-completo-y-el-porque-del-arranque)`; el
  encabezado genera `...-projectmd-...`. Las otras catorce anclas de `_persistence/` resuelven
  (`_audit/R-001.md`, seccion 1.7).
- **Por que importa:** la fila del indice no lleva a su entrada.
- **Que se hizo:** aceptado. Verificado vigente contra `HEAD` (`45e33a4`): el ancla sigue siendo
  `#...project.md...` y el encabezado esta en la linea 120 de `progress.md`. Registrado en `T-005`.

### F-004 - El CONTROL DE PROSA BORRADA de protocol-close no reconoce cercas indentadas
| Campo | Valor |
|---|---|
| Auditoria | R-002 |
| Fecha | 2026-09-15 |
| Gravedad | Media |
| Estado | Implementado |
| Registrado en | T-006 |
| Cerrado en | 101db28 (R-003) |

- **Que se observo:** `outside()` (`.claude/skills/protocol-close/SKILL.md:1826`, Paso 7c-bis) solo
  reconoce cercas en la primera columna (`/^```/`), y a `e222812` `decisions.md` y `tasks.md` tienen
  0 cercas en columna cero y 18 y 14 indentadas. Sobre el anclaje de `S-002` (`e222812` frente a
  `4b27ae4`) la orden literal marca 6 + 3 lineas como «prosa borrada» que son ordenes sustituidas
  dentro de bloques; con `/^[[:space:]]*```/` salen 0. La tabla del paso manda detenerse ante
  cualquier linea, y el cierre publico en su lugar una variante corregida a mano. Mismo patron en las
  lineas 218, 219, 256, 257 y 1462 de la skill, y en `protocol-audit` (4a y 7d). Comandos y salidas
  completos en `_audit/R-002.md`, secciones 1.3 y 2.
- **Por que importa:** un control obligatorio que con el formato real del registro siempre devuelve
  lineas tras un anclaje obliga a detenerse cada vez o a correr una orden distinta de la escrita, y
  entonces el resultado publicado no es el del control. Falsos positivos, no falsos negativos: por eso
  no es `Alta`.
- **Que se hizo:** aceptado. Verificado vigente contra `HEAD` (`6ab7887`), con orden y salida en
  `D-010`. El usuario eligio corregir las doce apariciones del patron en `protocol-close`,
  `protocol-audit` y `protocol-start` (esta ultima no la citaba el hallazgo). Registrado en `T-006`.

### F-005 - El anclaje de T-006 sustituyo una salida que no reproducia y la nota afirma que reproduce
| Campo | Valor |
|---|---|
| Auditoria | R-003 |
| Fecha | 2026-09-16 |
| Gravedad | Media |
| Estado | Implementado |
| Registrado en | T-007 |
| Cerrado en | c07680f (R-004) |

- **Que se observo:** en `101db28`, el criterio de cierre de `T-006` publica para
  `git grep -cF '/^[[:space:]]*```/' <hash> -- .claude` tres lineas sin prefijo
  (`.claude/skills/protocol-audit/SKILL.md:4`, ...). En el anclaje (`2a72df8`) la salida se sustituyo
  por la real, con prefijo `101db28:`, y se anadio «Las dos reproducen lo publicado arriba». La regla
  del Paso 7c-bis de `protocol-close` manda detenerse y pegar las dos salidas; el informe `S-003` no
  menciona la discrepancia (`git show 2a72df8:_audit/S-003.md | grep -nE "no coincid|discrepan|Sin resolver|prefijo"`
  devuelve `rc=1`). Comandos y salidas completos en `_audit/R-003.md`, seccion 2.
- **Por que importa:** el registro afirma algo falso y la salida publicada original desaparecio del
  bloque sin rastro. Los recuentos (4, 6, 2) si se sostienen: por eso no es `Alta`.
- **Que se hizo:** aceptado. Verificado vigente contra `HEAD` (`613ef8a`), con orden y salida en
  `D-013`. El usuario eligio las dos partes de la recomendacion: nota fechada bajo el criterio de
  cierre de `T-006` con las dos salidas, y CONTROL DE SALIDA REPRODUCIDA en el Paso 7c-bis de
  `protocol-close`. Registrado en `T-007`.

### F-006 - El acta de cierre de 000_preproject sigue con la firma del patrocinador en blanco mientras el registro da la etapa por cerrada
| Campo | Valor |
|---|---|
| Auditoria | R-005 |
| Fecha | 2026-09-16 |
| Gravedad | Media |
| Estado | Implementado |
| Registrado en | T-010, D-020 |
| Cerrado en | 081385a (R-006) |

- **Que se observo:** en `5884e98`, `_audit/000_preproject/005_phase_exit_record_001.md` conserva la
  tabla 5.2 con `Quien`, `Fecha` y `Decision` en `<pendiente>` y su cabecera dice «Mientras falte la
  segunda firma, la etapa sigue abierta» (lineas 21 y 430-432). `_templates/phase_exit_record.md` pone
  la aprobacion del patrocinador «en este archivo». `D-015` (linea 770 de `decisions.md`) dice que ella
  es la segunda firma y que «el acta no se edita». `progress.md` declara `005_discovery` como etapa
  actual. Comandos y salidas completos en `_audit/R-005.md`, seccion 2.
- **Por que importa:** el registro afirma dos estados a la vez para el cierre de la etapa: el acta
  dice abierta, `D-015` dice cerrada. No es `Alta` porque la decision existe y esta registrada.
- **Que se hizo:** aceptado, opcion (a). Verificado vigente contra `HEAD` (`673a97a`), con orden y
  salida en `D-020`. El patrocinador dio su firma (JD Rodriguez - Main Sponsor) y `manager` la escribio
  en la tabla 5.2 del acta; `D-020` revoca `D-015` en la clausula «el acta no se edita». Registrado en
  `T-010`.

### F-007 - La seccion 7 de S-005 promete la forma anclada de la orden del Paso 2d en la NOTA DE CIERRE, y no esta
| Campo | Valor |
|---|---|
| Auditoria | R-005 |
| Fecha | 2026-09-16 |
| Gravedad | Baja |
| Estado | Implementado |
| Registrado en | T-011, D-021 |
| Cerrado en | 081385a (R-006) |

- **Que se observo:** `git show 2846f62:_audit/S-005.md` dice en la linea 178 «la NOTA DE CIERRE trae
  la version anclada», y la orden anclada `git diff -U0 5884e98^ 5884e98 -- _persistence _audit ...`
  no aparece en el informe. La plantilla de la seccion 7 exige la forma anclada o su equivalencia al
  lado. La cifra `14` si reproduce en forma anclada. Comandos y salidas en `_audit/R-005.md`, seccion 2.
- **Por que importa:** el informe afirma publicada una evidencia que no esta; reproducirla exige
  reconstruir la orden. `Baja` porque la cifra se sostiene.
- **Que se hizo:** aceptado. Verificado vigente contra `HEAD` (`673a97a`), con orden y salida en
  `D-021`. La instruccion de la NOTA DE CIERRE no pide la forma anclada que la seccion 7 le aplaza;
  se corrige en `protocol-close`, sin reescribir `S-005.md`. Registrado en `T-011`.

### F-008 - El control SIN ANCLAR del 7c-quater salta con prosa y el anclaje de S-006 se commiteo igual
| Campo | Valor |
|---|---|
| Auditoria | R-006 |
| Fecha | 2026-09-16 |
| Gravedad | Media |
| Estado | Implementado |
| Registrado en | T-012, D-023 |
| Cerrado en | 87d10b8 (R-007) |

- **Que se observo:** la segunda orden del Paso 7c-quater de `protocol-close` (T-009, D-022) busca
  `diff --cached` en cualquier linea de la seccion 1. Corrida literal sobre `_audit/S-006.md` en
  `d420647` imprime una linea de prosa y `SIN ANCLAR en la seccion 1: ...`; la tabla del paso manda
  detenerse y no commitear el anclaje, y `d420647` se commiteo sin que el informe mencione la salida.
  La prueba de D-022 sobre S-005 (cifra 3) ya contaba 2 lineas de prosa. Comandos y salidas completos
  en `_audit/R-006.md`, secciones 1.6 y 2.
- **Por que importa:** el control da falso positivo en su primera ejecucion real y el cierre siguio
  sin publicarlo; un control que salta siempre se ignora. `Media`, no `Alta`: la seccion 1 de S-006
  no conserva ordenes de staging reales, asi que ninguna cifra es falsa.
- **Que se hizo:** aceptado. Verificado vigente contra `HEAD` (`efbc8d5`), con orden y salida en
  `D-023`. La segunda orden del 7c-quater solo cuenta lineas de orden (`$ git diff --cached` o una
  orden entre comillas invertidas con tuberia); probada sobre `S-004`, `S-005` y `S-006`. `S-006.md`
  no se reescribe. Registrado en `T-012`.

### F-009 - La seccion 9 de S-007 atribuye el desfase con el esqueleto a DT-001, que esta Implementada
| Campo | Valor |
|---|---|
| Auditoria | R-007 |
| Fecha | 2026-09-16 |
| Gravedad | Baja |
| Estado | Implementado |
| Registrado en | T-014, D-025 |
| Cerrado en | 27c03bb (R-008) |

- **Que se observo:** `git show 87d10b8:_audit/S-007.md` dice en la linea 239 que la promocion
  pendiente de tres archivos se hara «como ya viene arrastrando `DT-001` desde `S-004`/`S-005`/`S-006`».
  En el mismo commit, `_persistence/techdebt.md` tiene `DT-001` en `Implementada`, pagada por `D-016`
  en `S-005`; el desfase actual nacio despues (`D-022` en `S-006`, `D-023`/`D-024` en `S-007`) y no
  tiene ninguna `DT-XXX` abierta. Comandos y salidas en `_audit/R-007.md`, seccion 2.
- **Por que importa:** el informe afirma abierta una deuda que el registro da por pagada, y quien lo
  lea buscara en `DT-001` un seguimiento que alli no existe. `Baja`: la promocion pendiente si esta
  escrita, en las consecuencias de `D-022`/`D-024` y en `progress.md`.
- **Que se hizo:** aceptado. Verificado vigente contra `HEAD` (`3aa301c`), con orden y salida en
  `D-025` (la linea es la 383: el anclaje la desplazo). `S-007.md` no se reescribe; el usuario eligio
  abrir `DT-003` para el desfase con el esqueleto, que se paga con `protocol-promote`. Registrado en
  `T-014`.

### F-010 - T-014 y T-015 quedan No implementada con el trabajo en el diff, y el informe dice que es la practica de sesiones anteriores
| Campo | Valor |
|---|---|
| Auditoria | R-008 |
| Fecha | 2026-09-16 |
| Gravedad | Media |
| Estado | Implementado |
| Registrado en | T-016, D-027 |
| Cerrado en | 8509c18 (R-009) |

- **Que se observo:** el trabajo de `T-014` (`DT-003` abierta) y de `T-015` (punto ciego declarado en
  el 7c-quater) esta en `27c03bb` y sus criterios reproducen, pero las dos siguen `No implementada`
  tambien tras el anclaje `9e169f3`, que no toca `tasks.md`. La seccion 6 de `S-008.md` lo llama
  «consistente con sesiones anteriores», y el historial lo contradice: `87d10b8` marco `T-012`
  `Implementada` con su criterio aun en `<hash>`, igual que `081385a` (`T-008` a `T-011`) y `c07680f`
  (`T-007`). La seccion 2 del informe y `progress.md` sugieren que el 7c-bis resolvera el estado, y el
  7c-bis no puede tocar prosa ni estados. Comandos y salidas en `_audit/R-008.md`, seccion 2.
- **Por que importa:** el registro presenta como pendiente trabajo hecho y verificado, sin paso que lo
  mueva, y dos sesiones seguidas aplican criterios opuestos sin decision registrada. `Media`: no se
  pierde trabajo, pero el estado y su justificacion son falsos contra `git`.
- **Que se hizo:** aceptado. Verificado vigente contra `HEAD` (`f0c1a74`), con orden y salida en
  `D-027`. El usuario eligio el criterio de `S-004`/`S-006`/`S-007` (el estado lo decide el diff, no el
  anclaje) y escribirlo en el Paso 4 de `protocol-close`; `T-014` y `T-015` pasan a `Implementada`.
  `S-008.md` no se reescribe. Registrado en `T-016`.

### F-011 - T-019 queda Implementada con un alcance que su propio commit declara no cumplido
| Campo | Valor |
|---|---|
| Auditoria | R-010 |
| Fecha | 2026-09-16 |
| Gravedad | Media |
| Estado | Implementado |
| Registrado en | T-020, D-034 |
| Cerrado en | 079b0a4 (R-012) |

- **Que se observo:** en `a61e453`, el «Que» de `T-019` incluye la frase de `D-028` en la promocion al
  esqueleto y la tarea esta `Implementada`; `D-032`, en el mismo commit, dice que esa frase se dejo fuera,
  y `447c2a0:.claude/skills/protocol-close/SKILL.md` da `0` en `grep -cF 'no reproduce, la tarea'`.
  `T-019` no lleva nota que ajuste su alcance, y el criterio que cita (el de `D-032`) comprueba la frase
  en la skill de este repositorio, no en el esqueleto. El resto solo se sigue en `DT-004`, que esta
  `Propuesta (pendiente del usuario)`. Comandos y salidas en `_audit/R-010.md`, seccion 2.
- **Por que importa:** lo que queda a medias sigue en `No implementada` (Paso 4 de `protocol-close`);
  leida sola, la tarea afirma un alcance cumplido que no lo esta, y si `DT-004` no se confirma el resto
  desaparece del registro. `Media`: la omision esta declarada en `D-032`, `DT-003` y `DT-004`.
- **Que se hizo:** aceptado. Verificado vigente contra `HEAD` (`1add289`), con orden y salida en
  `D-034`. Se elige la opcion (a): nota fechada en `T-019` que saca la frase de `D-028` de su alcance y
  remite a `D-032`/`DT-004`, con la comparacion de blobs contra el esqueleto. `T-019` sigue
  `Implementada`. Registrado en `T-020`.

### F-013 - El anclaje de S-011 se commiteo con la NOTA DE CIERRE vacia y el 7c-ter fallando, y se completo en un tercer commit que la nota no declara
| Campo | Valor |
|---|---|
| Auditoria | R-012 |
| Fecha | 2026-09-16 |
| Gravedad | Media |
| Estado | Implementado |
| Registrado en | T-021, T-022, D-036 |
| Cerrado en | cf2992f (R-013) |

- **Que se observo:** el commit de anclaje `fdfca7b` dejo la seccion 7 de `S-011.md` con el marcador
  `NOTA DE CIERRE: <se completa en el Paso 7c-bis, despues del commit>`, y el control del Paso 7c-ter
  sobre `fdfca7b` devuelve las seis lineas `FALTA en la NOTA DE CIERRE`. El Paso 7c pide los cuatro
  sitios «en un unico commit de anclaje» y el 7c-ter prohibe commitear el anclaje hasta que salga
  vacio. La nota entro en un tercer commit, `1358c3c`, y dice «commit de anclaje `fdfca7b`» sin nombrar
  `1358c3c` ni el fallo. Comandos y salidas en `_audit/R-012.md`, seccion 2.
- **Por que importa:** se salto la puerta que existe para impedir un anclaje con la nota coja, y el
  informe apunta a un commit donde la nota no esta. Las salidas de la nota reproducen: no hay datos
  falsos, solo una puerta saltada y un puntero equivocado. `Media`.
- **Que se hizo:** aceptado. Verificado vigente contra `HEAD` (`1fc3264`), con orden y salida en
  `D-036`. El usuario eligio las dos partes: nota fechada en la seccion 7 de `S-011.md`, que nombra
  `1358c3c` sin reescribir la linea publicada (`T-021`), y puerta mecanica en el bloque del commit de
  anclaje de `protocol-close`, que solo commitea si el 7c-ter y el 7c-quater salen vacios (`T-022`).

### F-014 - La nota fechada de S-011 y las entradas D-036..D-039 y L-013 llevan 2026-09-16 en un commit de 2026-09-17
| Campo | Valor |
|---|---|
| Auditoria | R-013 |
| Fecha | 2026-09-17 |
| Gravedad | Media |
| Estado | Implementado |
| Registrado en | T-025, T-026, D-041 |
| Cerrado en | d54e314 (R-015) |

- **Que se observo:** `cf2992f` (fecha de commit `2026-09-17`, sesion `S-012` fechada `2026-09-17`)
  anade en `_audit/S-011.md` una «Nota 2026-09-16 (`F-013`, `T-021`), escrita por `manager` en la
  sesion siguiente», y cinco entradas con `| Fecha | 2026-09-16 |` (`D-036`..`D-039`, `L-013`, con sus
  filas de indice). El Paso 7d de `protocol-close` manda corregir toda nota fechada de la jornada en
  el commit de anclaje; `de83026` no la toca y el informe no reporta la discrepancia. Comandos y
  salidas en `_audit/R-013.md`, seccion 2.
- **Por que importa:** la nota fechada existe para decir cuando se supo algo, y esta afirma un dia que
  su commit y su propia sesion contradicen; el criterio de `D-036` fija esa fecha en su `grep`, asi que
  la correccion solo cabe por nota. `Media`: `git log` conserva la cronologia real y no afecta a ningun
  control.
- **Que se hizo:** aceptado. Verificado vigente contra `HEAD` (`4409bb9`), con orden y salida en
  `D-041`. El usuario eligio las dos partes: notas fechadas en las seis entradas, que dan `2026-09-17`
  sin reescribir la fecha publicada (`T-025`), y un control en el Paso 7d de `protocol-close` que lista
  las fechas que anade el commit distintas de la suya (`T-026`).

### F-016 - D-041 afirma el resultado de una prueba sobre commits historicos sin publicar la orden
| Campo | Valor |
|---|---|
| Auditoria | R-015 |
| Fecha | 2026-09-17 |
| Gravedad | Baja |
| Urgencia | No bloqueante |
| Estado | Aceptado — pendiente |
| Registrado en | T-030, D-046 |
| Cerrado en | |

- **Que se observo:** en `d54e314`, `D-041` descarta «mirar todas las filas de indice del diff» diciendo
  «Probado sobre los commits de sesion, salta en `079b0a4`, `a61e453`, `8509c18`, `27c03bb`, `5884e98`
  y `101db28`», sin orden ni salida; el bloque siguiente solo publica la version con filtro. El informe
  `S-013` lo repite en su seccion 3. Reconstruida la orden sin filtro, el resultado se sostiene (orden y
  salida en `R-015`, seccion 2).
- **Por que importa:** `CLAUDE.md` exige patron y ambito para todo resultado que el registro afirme. La
  justificacion del filtro del Paso 7d no es reproducible desde el registro. `Baja`: el resultado es
  cierto y ningun control depende de el. `No bloqueante`: nada posterior hereda el defecto.
- **Que se hizo:** aceptado. Verificado vigente contra `HEAD` (`2063f09`), con orden y salida en `D-046`.
  Por ser `No bloqueante`, su correccion se aplaza con `T-030` abierta.

### F-017 - La NOTA DE CIERRE de S-013 dice «dieciseis lineas» debajo de un CONTROL DE CIFRA ADYACENTE que publica diecisiete
| Campo | Valor |
|---|---|
| Auditoria | R-015 |
| Fecha | 2026-09-17 |
| Gravedad | Baja |
| Urgencia | No bloqueante |
| Estado | Aceptado — pendiente |
| Registrado en | T-031, D-046 |
| Cerrado en | |

- **Que se observo:** en `17d769f`, el bloque «CONTROL DE CIFRA ADYACENTE — salida» de `_audit/S-013.md`
  publica 17 lineas (`grep -c '^_audit/S-013.md:'` = `17`) y la linea 497, justo debajo, dice «Ninguna de
  las dieciseis lineas…».
- **Por que importa:** es el defecto que ese control existe para atrapar, dentro de la lectura del propio
  control. `Baja`: la salida esta entera y nada depende de la cifra. `No bloqueante`.
- **Que se hizo:** aceptado. Verificado vigente contra `HEAD` (`2063f09`), con orden y salida en `D-046`.
  Por ser `No bloqueante`, su correccion se aplaza con `T-031` abierta.
