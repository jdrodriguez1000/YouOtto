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

| Codigo | Hallazgo | Auditoria | Gravedad | Urgencia | Estado | Registrado en |
|---|---|---|---|---|---|---|
| [F-001](#f-001---los-barridos-de-anclaje-de-los-pasos-2d-y-7c-no-ven-ordenes-indentadas) | Los barridos de anclaje de los Pasos 2d y 7c no ven ordenes indentadas | R-001 | Media | — | Implementado | T-003 / D-008 |
| [F-002](#f-002---el-control-de-cifra-adyacente-de-s-001-no-se-publico-entero) | El CONTROL DE CIFRA ADYACENTE de S-001 no se publico entero | R-001 | Media | — | Implementado | T-004 |
| [F-003](#f-003---ancla-rota-en-el-indice-de-progressmd-para-s-001) | Ancla rota en el indice de `progress.md` para S-001 | R-001 | Baja | — | Implementado | T-005 |
| [F-004](#f-004---el-control-de-prosa-borrada-de-protocol-close-no-reconoce-cercas-indentadas) | El CONTROL DE PROSA BORRADA de protocol-close no reconoce cercas indentadas | R-002 | Media | — | Implementado | T-006 |
| [F-005](#f-005---el-anclaje-de-t-006-sustituyo-una-salida-que-no-reproducia-y-la-nota-afirma-que-reproduce) | El anclaje de T-006 sustituyo una salida que no reproducia y la nota afirma que reproduce | R-003 | Media | — | Implementado | T-007 |
| [F-006](#f-006---el-acta-de-cierre-de-000_preproject-sigue-con-la-firma-del-patrocinador-en-blanco-mientras-el-registro-da-la-etapa-por-cerrada) | El acta de cierre de 000_preproject sigue con la firma del patrocinador en blanco mientras el registro da la etapa por cerrada | R-005 | Media | — | Implementado | T-010, D-020 |
| [F-007](#f-007---la-seccion-7-de-s-005-promete-la-forma-anclada-de-la-orden-del-paso-2d-en-la-nota-de-cierre-y-no-esta) | La seccion 7 de S-005 promete la forma anclada de la orden del Paso 2d en la NOTA DE CIERRE, y no esta | R-005 | Baja | — | Implementado | T-011, D-021 |
| [F-008](#f-008---el-control-sin-anclar-del-7c-quater-salta-con-prosa-y-el-anclaje-de-s-006-se-commiteo-igual) | El control SIN ANCLAR del 7c-quater salta con prosa y el anclaje de S-006 se commiteo igual | R-006 | Media | — | Implementado | T-012, D-023 |
| [F-009](#f-009---la-seccion-9-de-s-007-atribuye-el-desfase-con-el-esqueleto-a-dt-001-que-esta-implementada) | La seccion 9 de S-007 atribuye el desfase con el esqueleto a DT-001, que esta Implementada | R-007 | Baja | — | Implementado | T-014, D-025 |
| [F-010](#f-010---t-014-y-t-015-quedan-no-implementada-con-el-trabajo-en-el-diff-y-el-informe-dice-que-es-la-practica-de-sesiones-anteriores) | T-014 y T-015 quedan No implementada con el trabajo en el diff, y el informe dice que es la practica de sesiones anteriores | R-008 | Media | — | Implementado | T-016, D-027 |
| [F-011](#f-011---t-019-queda-implementada-con-un-alcance-que-su-propio-commit-declara-no-cumplido) | T-019 queda Implementada con un alcance que su propio commit declara no cumplido | R-010 | Media | — | Implementado | T-020, D-034 |
| [F-013](#f-013---el-anclaje-de-s-011-se-commiteo-con-la-nota-de-cierre-vacia-y-el-7c-ter-fallando-y-se-completo-en-un-tercer-commit-que-la-nota-no-declara) | El anclaje de S-011 se commiteo con la NOTA DE CIERRE vacia y el 7c-ter fallando, y se completo en un tercer commit que la nota no declara | R-012 | Media | — | Implementado | T-021, T-022, D-036 |
| [F-014](#f-014---la-nota-fechada-de-s-011-y-las-entradas-d-036d-039-y-l-013-llevan-2026-09-16-en-un-commit-de-2026-09-17) | La nota fechada de S-011 y las entradas D-036..D-039 y L-013 llevan 2026-09-16 en un commit de 2026-09-17 | R-013 | Media | — | Implementado | T-025, T-026, D-041 |
| [F-016](#f-016---d-041-afirma-el-resultado-de-una-prueba-sobre-commits-historicos-sin-publicar-la-orden) | D-041 afirma el resultado de una prueba sobre commits historicos sin publicar la orden | R-015 | Baja | No bloqueante | Aceptado — pendiente | T-030, D-046 |
| [F-017](#f-017---la-nota-de-cierre-de-s-013-dice-dieciseis-lineas-debajo-de-un-control-de-cifra-adyacente-que-publica-diecisiete) | La NOTA DE CIERRE de S-013 dice «dieciseis lineas» debajo de un CONTROL DE CIFRA ADYACENTE que publica diecisiete | R-015 | Baja | No bloqueante | Aceptado — pendiente | T-031, D-046 |
| [F-018](#f-018---d-045-publica-en-resumen-sin-orden-ni-salida-los-resultados-del-paso-1b-de-la-promocion) | D-045 publica en resumen, sin orden ni salida, los resultados del Paso 1b de la promocion | R-016 | Baja | No bloqueante | Implementado | T-033, D-049 |
| [F-019](#f-019---el-criterio-de-cierre-de-t-029-publica-4-donde-su-orden-devuelve-5-y-el-informe-lo-da-por-reproducido) | El criterio de cierre de T-029 publica `4` donde su orden devuelve `5`, y el informe lo da por reproducido | R-017 | Media | No bloqueante | Implementado | T-034, D-059 |
| [F-020](#f-020---015_stakeholdersmd-queda-cerrado-afirmando-seis-condiciones-de-salida-donde-su-etapa-enumera-siete) | `015_stakeholders.md` queda `CERRADO` afirmando «seis condiciones de salida» donde su etapa enumera siete | R-018 | Baja | No bloqueante | Implementado | `T-036` y `D-064` |
| [F-021](#f-021---ancla-rota-en-el-indice-de-progressmd-para-s-017-la-flecha-del-titulo) | Ancla rota en el indice de `progress.md` para `S-017`: la flecha del titulo | R-019 | Baja | No bloqueante | Implementado | `T-038` y `D-068` |
| [F-022](#f-022---la-fila-de-f-020-publica-un-valor-de-estado-que-la-convencion-de-findingsmd-no-declara) | La fila de `F-020` publica un valor de `Estado` que la convencion de `findings.md` no declara | R-019 | Baja | No bloqueante | Implementado | `T-039` y `D-069` |
| [F-023](#f-023---dt-005-lleva-confirmacion-sin-confirmar-un-valor-que-la-convencion-de-techdebtmd-no-declara) | `DT-005` lleva `Confirmacion: Sin confirmar`, un valor que la convencion de `techdebt.md` no declara | R-019 | Baja | No bloqueante | Implementado | `T-040` y `D-070` |
| [F-024](#f-024---la-nota-de-anclaje-de-d-064-remite-a-una-seccion-sin-resolver-que-no-existe) | La nota de anclaje de `D-064` remite a una seccion «Sin resolver» que no existe | R-019 | Baja | No bloqueante | Implementado | `T-041` y `D-071` |
| [F-025](#f-025---t-042-publica-seis-ordenes-donde-su-propia-ficha-enumera-ocho-casos-y-el-informe-repite-la-cifra) | `T-042` publica «seis» ordenes donde su propia ficha enumera ocho casos, y el informe repite la cifra | R-020 | Media | No bloqueante | Implementado | `T-043` y `D-075` |
| [F-026](#f-026---la-nota-de-cierre-de-s-018-declara-ed64348-como-commit-de-anclaje-y-el-anclaje-esta-en-a22ef55) | La NOTA DE CIERRE de `S-018` declara `ed64348` como commit de anclaje, y el anclaje esta en `a22ef55` | R-020 | Media | No bloqueante | Implementado | `T-044` y `D-076` |
| [F-027](#f-027---el-control-de-salida-reproducida-es-ciego-al-formato-ordenessalidas-y-su-limite-no-quedo-registrado) | El CONTROL DE SALIDA REPRODUCIDA es ciego al formato «Ordenes:»/«Salidas:» y su limite no quedo registrado | R-020 | Media | No bloqueante | Implementado | `T-045` y `D-077` |
| [F-028](#f-028---la-nota-de-anclaje-de-s-019-dice-que-la-escribio-70fe40c-y-esta-en-e610906) | La nota de anclaje de `S-019` dice que la escribio `70fe40c`, y esta en `e610906` | R-021 | Media | No bloqueante | Aceptado — pendiente | `T-047`, `D-080` |
| [F-029](#f-029---el-acta-de-cierre-de-005_discovery-conserva-el-d-xxx-de-la-plantilla-donde-debe-citar-d-074) | El acta de cierre de `005_discovery` conserva el `D-XXX` de la plantilla donde debe citar `D-074` | R-021 | Baja | No bloqueante | Aceptado — pendiente | `T-048`, `D-081` |
| [F-030](#f-030---la-nota-de-cierre-de-s-020-deja-el-commit-de-anclaje-como-hueco-de-plantilla-sin-instanciar-y-sin-derivar) | La NOTA DE CIERRE de `S-020` deja el commit de anclaje como hueco de plantilla, sin instanciar y sin derivar | R-022 | Media | No bloqueante | Aceptado — pendiente | `T-049`, `D-091` |
| [F-031](#f-031---la-nota-de-cierre-de-s-021-repite-el-hueco-de-plantilla-en-el-commit-de-anclaje-dentro-de-la-misma-sesion-que-acepto-f-030) | La NOTA DE CIERRE de `S-021` repite el hueco de plantilla en el commit de anclaje, dentro de la misma sesion que acepto `F-030` | R-023 | Media | No bloqueante | Implementado | D-092 / T-051 |
| [F-032](#f-032---la-nota-de-cierre-de-s-022-repite-por-tercera-sesion-consecutiva-el-hueco-de-plantilla-en-el-commit-de-anclaje) | La NOTA DE CIERRE de `S-022` repite por tercera sesion consecutiva el hueco de plantilla en el commit de anclaje | R-024 | Media | No bloqueante | Implementado | D-095 / T-052 |
| [F-033](#f-033---la-verificacion-de-orden-de-d-093-publica-sin-salida-para-una-orden-que-a-partir-del-commit-devuelve-una-linea) | La verificacion de orden de `D-093` publica «(sin salida)» para una orden que a partir del commit devuelve una linea | R-024 | Baja | No bloqueante | Implementado | D-096 / T-053 |
| [F-034](#f-034---el-registro-de-s-023-afirma-una-ronda-de-cuatro-sesiones-donde-la-sellada-es-de-cinco) | El registro de `S-023` afirma una ronda de cuatro sesiones donde la sellada es de cinco | R-025 | Media | Bloqueante | Aceptado — pendiente | D-100 / T-056 |
| [F-035](#f-035---la-seccion-0-de-s-023-situa-en-el-commit-anterior-las-correcciones-de-f-032-y-f-033-que-estan-en-66e6413) | La seccion 0 de `S-023` situa en el commit anterior las correcciones de `F-032` y `F-033`, que estan en `66e6413` | R-025 | Baja | No bloqueante | Implementado | D-101 / T-057 |

---

## Convenciones

| Campo | Valores posibles |
|---|---|
| Codigo | `F-NNN`, correlativo, no se reutiliza |
| Auditoria | el `R-XXX` que lo abrio |
| Gravedad | `Alta` / `Media` / `Baja` |
| Urgencia | `Bloqueante` / `No bloqueante` |
| Estado | `Abierto` / `Aceptado — pendiente` / `Implementado` / `No se implementa` |
| Registrado en | la `T-XXX` o la `D-XXX` donde quedo el hallazgo, o `—` mientras esta `Abierto` |
| Cerrado en | el commit sobre el que la auditoria verifico la correccion |

🚨 **`Estado` lleva un valor de la lista y nada mas; la cita va en `Registrado en`.** Los dos campos
estan **en el indice y en la ficha**, porque quien trata un hallazgo tiene que actualizar la fila
citando donde lo dejo, y un valor de `Estado` con la cita pegada dentro deja de ser un valor de la
lista — que es lo que hace comparable la fila con la ficha.

📌 **Por que el indice tiene esta columna:** sin ella, las dos reglas del proyecto se contradecian.
Una pedia actualizar la fila «citando la `T-XXX` o la `D-XXX` donde quedo» y la fila no tenia donde;
la otra cerraba la lista de valores de `Estado`. Cumplir una rompia la otra, y el control de cierre
que compara fila y ficha **avisaba en cada hallazgo aceptado** — un control que siempre avisa deja
de leerse, que es peor que no tenerlo.

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

### F-018 - D-045 publica en resumen, sin orden ni salida, los resultados del Paso 1b de la promocion
| Campo | Valor |
|---|---|
| Auditoria | R-016 |
| Fecha | 2026-09-17 |
| Gravedad | Baja |
| Urgencia | No bloqueante |
| Estado | Implementado |
| Registrado en | T-033, D-049 |
| Cerrado en | eda6314 (R-017) |

- **Que se observo:** en `91562b7`, `D-045` afirma «Paso 1b: nueve copias de la raiz dan `0` y
  `_audit/findings.md` da `21`», «Barrido del Paso 1 despues de promover: salida vacia» y «Paso 1b sobre
  `1bec59a` (…`git -C "$ESQ" show 1bec59a:`): las diez parejas dan `0`» sin la orden literal usada ni su
  salida de diez lineas (orden y salida en `R-016`, seccion 2).
- **Por que importa:** `CLAUDE.md` exige orden y ambito para todo resultado que el registro afirme; misma
  clase que `F-016`. La medicion posterior a `1bec59a` no es reproducible desde el registro. `Baja`: el
  resto de la promocion lleva orden y salida, y ningun control depende de estas cifras. `No bloqueante`.
- **Que se hizo:** aceptado. Verificado vigente contra `HEAD` (`ca12450`), con orden y salida en `D-049`.
  El usuario eligio corregirlo en la misma sesion: nota fechada en `D-045` con las dos ordenes ancladas a
  `2063f09` y `1bec59a` y sus salidas (`T-033`). Lo cierra la auditoria siguiente.

### F-019 - El criterio de cierre de T-029 publica `4` donde su orden devuelve `5`, y el informe lo da por reproducido
| Campo | Valor |
|---|---|
| Auditoria | R-017 |
| Fecha | 2026-09-17 |
| Gravedad | Media |
| Urgencia | No bloqueante |
| Estado | Implementado |
| Registrado en | T-034, D-059 |
| Cerrado en | 205b1f2 (R-018) |

- **Que se observo:** en `eda6314`, el bloque de verificacion de `T-029` publica `grep -c "^### N-0"
  005_discovery/005_needs.md` con salida `4`, y la orden devuelve `5` tanto sobre el commit
  (`git show eda6314:005_discovery/005_needs.md | grep -c "^### N-0"` → `5`) como sobre el arbol de
  trabajo. La quinta linea es `185:### N-001 · Pedir recogida sin llamar`, el ejemplo de ficha de la
  seccion «Guia de llenado» que sigue en el archivo porque el artefacto esta `BORRADOR`. La seccion 7
  de `_audit/S-015.md` lista esa misma orden como la numero 12 con `Reproduce: Si` y nota `4`, asi que
  el control del Paso 2d la dio por buena. Ordenes y salidas en `R-017`, secciones 1.8 y 2.
- **Por que importa:** es la evidencia que cierra `T-029`, una tarea `Alta`/`Bloqueante`, y el registro
  publica una salida que su propia orden no devuelve — la misma clase que `F-005`. `Media`: el enunciado
  del criterio si se cumple (hay cuatro necesidades reales) y ningun control depende de la cifra.
  `No bloqueante`: nada hereda el defecto, pero la cifra volvera a valer `4` sola al borrar la guia
  cuando se cierre el artefacto, y entonces el defecto dejaria de poder detectarse.
- **Que se hizo:** verificado contra `HEAD` (`e18bf5b`): sigue vivo, la orden devuelve `5`. Aceptado con
  `D-059` y corregido en la misma sesion con `T-034` — nota fechada en `T-029` con la orden anclada a
  `e18bf5b` y su salida real; la cifra publicada no se reescribe.

### F-020 - `015_stakeholders.md` queda `CERRADO` afirmando «seis condiciones de salida» donde su etapa enumera siete
| Campo | Valor |
|---|---|
| Auditoria | R-018 |
| Fecha | 2026-09-17 |
| Gravedad | Baja |
| Urgencia | No bloqueante |
| Estado | Implementado |
| Registrado en | `T-036` y `D-064` |
| Cerrado en | `a0949c5` (verificado en `R-019`) |

- **Que se observo:** el commit `205b1f2` cierra `005_discovery/015_stakeholders.md` y marca `[x]` una
  casilla cuyo texto afirma un numero que el archivo de etapa contradice.

  ```
  $ git show 205b1f2:005_discovery/015_stakeholders.md | grep -n 'condiciones de salida'
  115:- [x] **Los interesados estan identificados** — es una de las seis condiciones de salida de la etapa.

  $ grep -rn "seis condiciones\|siete condiciones\|las siete\|las seis" _phases/005_discovery.md _templates/005_discovery/
  _phases/005_discovery.md:282:La etapa termina cuando **las siete son ciertas**:
  _phases/005_discovery.md:304:⚠️ **Ninguna de las siete exige que exista la etapa siguiente.** Cual sea se declara dentro de esta
  _templates/005_discovery/015_stakeholders.md:101:- [ ] **Los interesados estan identificados** — es una de las seis condiciones de salida de la etapa.
  ```

  El defecto es heredado del esqueleto, no nace en esta sesion:

  ```
  $ git log --oneline -S"siete son ciertas" -- _phases/005_discovery.md
  fa7da56 Estado de partida del esqueleto, tal como estaba antes de sincronizar
  ```

  No hay `D-XXX` que declare la diferencia.
- **Por que importa:** un artefacto `CERRADO` es evidencia, y esta afirmando un recuento que el archivo
  de etapa desmiente. Ademas el error vive en `_templates/`, que existe para copiarse: cada proyecto que
  arranque con esa plantilla heredara la misma frase falsa. `Baja` porque ningun control lee ese numero y
  las siete casillas se evaluaron una por una de todos modos; `No bloqueante` porque nada de lo que se
  haga despues depende de la cifra — pero tampoco desaparece sola.
- **Que se hizo:** **aceptado y corregido** (`D-064`, `T-036` → `Implementada`). Verificado contra
  `HEAD` antes de tratarlo: la etapa enumera siete casillas. **El hallazgo se sostiene y se quedo
  corto:** citaba dos sitios y el barrido propio devolvio tres — se le escapo `_workflow/005_discovery.md`,
  que ademas de publicar la cifra mal **le faltaba la septima fila entera** de su tabla de reparto, la de
  la casilla de la cosecha. Corregidos hacia adelante la plantilla y el reparto (cifra + fila que
  faltaba); el artefacto `CERRADO` se corrigio **por nota fechada, sin reescribir**. Queda sin tocar y con
  su deuda (`DT-005`) la cifra «Cuatro de las seis llevan juicio» de la linea 119 del mismo archivo de
  reparto, cuya lectura no esta clara y afecta tambien a otra etapa. Leccion registrada: `L-017`.
  **`Estado` lo cierra una auditoria posterior, no esta entrada.**
- **Cierre (`R-019`, sobre `a0949c5`):** la correccion esta en el diff y es la que `R-018` recomendaba,
  ampliada al tercer archivo.

  ```
  $ git diff a0949c5^ a0949c5 -- _templates/005_discovery/015_stakeholders.md | grep -E '^[-+].*condiciones de salida'
  -- [ ] **Los interesados estan identificados** — es una de las seis condiciones de salida de la etapa.
  +- [ ] **Los interesados estan identificados** — es una de las siete condiciones de salida de la etapa.
  $ git diff a0949c5^ a0949c5 -- _workflow/005_discovery.md | grep -E '^[-+][^-+]'
  -Las seis casillas de `_phases/005_discovery.md` §6, separadas por quien las puede comprobar:
  +Las siete casillas de `_phases/005_discovery.md` §6, separadas por quien las puede comprobar:
  +| cosecha hecha, ninguna leccion sin evaluar | el recuento de la columna de portabilidad | que leccion sube, cual ya esta cubierta y cual es solo de este proyecto |
  $ git show a0949c5:_templates/005_discovery/015_stakeholders.md | grep -c 'siete condiciones de salida'
  1
  $ git show a0949c5:_workflow/005_discovery.md | sed -n '/^## 5\./,/^## 6\./p' | grep -c '^| '
  8
  ```

  El artefacto `CERRADO` conserva su linea y gana la nota fechada, como se pedia. **`Implementado`.**

### F-021 - Ancla rota en el indice de `progress.md` para `S-017`: la flecha del titulo
| Campo | Valor |
|---|---|
| Auditoria | R-019 |
| Fecha | 2026-09-17 |
| Gravedad | Baja |
| Urgencia | No bloqueante |
| Estado | Implementado |
| Registrado en | `T-038` y `D-068` |
| Cerrado en | `ed64348` (verificado en `R-020`) |

- **Que se observo:** el titulo de `S-017` lleva un `→` entre espacios y el ancla del indice lo omite
  junto con uno de sus dos espacios.

  ```
  $ git grep -n '^### .*→' a0949c5 -- _persistence _audit
  a0949c5:_persistence/progress.md:526:### S-017 - `F-020` de `R-018` aceptado y corregido (`D-064`), tres pasadas mas de la cosecha (`L-016`/`L-017`/`L-018` → `D-063`/`D-065`/`D-067`), y se cierra `005_needs.md` (`D-066`)
  $ git show a0949c5:_persistence/progress.md | sed -n '53p' | grep -oE '\(#[a-z0-9_-]+\)'
  (#s-017---f-020-de-r-018-aceptado-y-corregido-d-064-tres-pasadas-mas-de-la-cosecha-l-016l-017l-018-d-063d-065d-067-y-se-cierra-005_needsmd-d-066)
  ```

  El ancla escrita pone **un** guion entre `l-018` y `d-063`. Las dos lecturas posibles del slug de
  GitHub dan dos caracteres ahi, porque el `→` esta rodeado de espacios y los espacios siempre se
  vuelven guiones: `...l-016l-017l-018-→-d-063...` si el simbolo se conserva,
  `...l-016l-017l-018--d-063...` si se elimina. Que el slug no colapsa guiones consecutivos lo prueba
  el propio registro: `_persistence/assumptions.md:24` usa `#a-001---los-juegos...`, tres guiones para
  «A-001 - Los». Es el primer titulo del registro con un `→`. La comprobacion completa, con el calculo
  de los dos slugs candidatos, esta en `_audit/R-019.md` §2.
- **Por que importa:** el indice de `progress.md` es la puerta de entrada a la bitacora y
  `session-starter` lo lee en cada arranque; un ancla rota lleva a la cabecera del archivo en vez de a
  la sesion. `Baja` porque la entrada existe y se encuentra buscando el codigo. `No bloqueante` porque
  nada de lo que venga despues hereda el defecto.
- **Que lo corregiria:** reponer el tramo que falta en el ancla, o —mas robusto— no usar `→` en
  titulos que necesitan ancla. ⚠️ Es una recomendacion, no una orden.

### F-022 - La fila de `F-020` publica un valor de `Estado` que la convencion de `findings.md` no declara
| Campo | Valor |
|---|---|
| Auditoria | R-019 |
| Fecha | 2026-09-17 |
| Gravedad | Baja |
| Urgencia | No bloqueante |
| Estado | Implementado |
| Registrado en | `T-039` y `D-069` |
| Cerrado en | `ed64348` (verificado en `R-020`) |

- **Que se observo:** la fila del indice pega la cita dentro de la celda de `Estado`; la ficha usa el
  valor limpio y su campo `Registrado en`.

  ```
  $ git show a0949c5:_audit/findings.md | sed -n '42p' | awk -F'|' '{print $(NF-1)}'
   Aceptado — pendiente (`T-036`, `D-064`)
  $ git show a0949c5:_audit/findings.md | sed -n '/^### F-020/,/^- \*\*Que se observo/p' | grep -E '^\| (Estado|Registrado en) \|'
  | Estado | Aceptado — pendiente |
  | Registrado en | `T-036` y `D-064` |
  $ git show a0949c5:_audit/findings.md | grep -E '^\| Estado \| `Abierto`'
  | Estado | `Abierto` / `Aceptado — pendiente` / `Implementado` / `No se implementa` |
  ```

  Las otras dos filas vivas del mismo indice escriben el valor limpio, asi que el mismo estado aparece
  en dos formas dentro del mismo archivo:

  ```
  $ git show a0949c5:_audit/findings.md | grep -E '^\| \[F-01[67]\]' | awk -F'|' '{print $2, "->", $(NF-1)}' | sed 's/(#[^)]*)//'
   [F-016]  ->  Aceptado — pendiente
   [F-017]  ->  Aceptado — pendiente
  ```
- **Por que importa:** el Paso 2b de `protocol-close` compara fila y ficha en cada cierre, y por esto
  reporto una discrepancia que el informe de `S-017` tuvo que escalar a mano (su seccion 6). El origen
  es un choque real de reglas: `CLAUDE.md` pide actualizar la fila «citando la `T-XXX` o la `D-XXX`
  donde quedo» —y la fila no tiene columna para eso—, mientras la convencion de este archivo cierra la
  lista de valores de `Estado`. Mientras no se zanje cual manda, **cada hallazgo aceptado volvera a
  disparar el mismo aviso**, y un control que siempre avisa deja de leerse. `Baja` porque nada de lo
  escrito es falso: la cita es correcta y la ficha lleva sus dos campos al dia. `No bloqueante` porque
  el registro no afirma un estado equivocado.
- **Que lo corregiria:** decidir una de las dos formas y escribirla en la convencion de este archivo
  —columna `Registrado en` propia en el indice, o valor limpio en la fila y cita solo en la ficha—,
  con su `D-XXX`. ⚠️ Es una recomendacion, no una orden.

### F-023 - `DT-005` lleva `Confirmacion: Sin confirmar`, un valor que la convencion de `techdebt.md` no declara
| Campo | Valor |
|---|---|
| Auditoria | R-019 |
| Fecha | 2026-09-17 |
| Gravedad | Baja |
| Urgencia | No bloqueante |
| Estado | Implementado |
| Registrado en | `T-040` y `D-070` |
| Cerrado en | `ed64348` (verificado en `R-020`) |

- **Que se observo:** el valor no esta en la lista declarada, y es el unico caso del archivo.

  ```
  $ git show a0949c5:_persistence/techdebt.md | grep -nE '^\| Confirmacion \|'
  41:| Confirmacion | `Confirmada` / `Propuesta (pendiente de <quien>)` |
  80:| Confirmacion | |
  96:| Confirmacion | Confirmada |
  158:| Confirmacion | Confirmada |
  177:| Confirmacion | Confirmada |
  217:| Confirmacion | Confirmada |
  247:| Confirmacion | Sin confirmar |
  $ git show a0949c5:_persistence/techdebt.md | grep -cE '^\|.*\| Sin confirmar \|'
  1
  ```

  La convencion no solo lista los valores: prohibe explicitamente la salida sin dueno.

  ```
  $ git show a0949c5:_persistence/techdebt.md | sed -n '50,53p'
  🚨 **`Propuesta` lleva dueno dentro del valor, siempre.** No existe `Propuesta` a secas: quien
  confirma va escrito (`Propuesta (pendiente del usuario)`), porque una propuesta sin dueno no espera
  —se queda propuesta para siempre—. Si no sabes quien confirma, entonces lo que falta no es la
  confirmacion: es saber de quien es la decision, y eso es una `T-XXX`.
  ```

  La linea `80` es el hueco de la plantilla de entrada del propio archivo, no una entrada. El informe
  de `S-017` declara este defecto en su seccion 6.
- **Por que importa:** `DT-005` es deuda declarada y sin pagar sobre una cifra que afecta a dos etapas;
  sin dueno de la confirmacion no hay nada que la haga avanzar, y se queda propuesta para siempre — que
  es justo lo que esa convencion existe para impedir. `Baja` porque la deuda esta escrita con su
  evidencia y `progress.md` la cita. `No bloqueante` porque nada de lo que se haga despues la hereda.
- **Que lo corregiria:** poner `Propuesta (pendiente del usuario)` —o el dueno que corresponda— en la
  fila y en la ficha, en la misma pasada; o, si no se sabe de quien es la decision, abrir la `T-XXX`
  que la convencion pide. ⚠️ Es una recomendacion, no una orden.

### F-024 - La nota de anclaje de `D-064` remite a una seccion «Sin resolver» que no existe
| Campo | Valor |
|---|---|
| Auditoria | R-019 |
| Fecha | 2026-09-17 |
| Gravedad | Baja |
| Urgencia | No bloqueante |
| Estado | Implementado |
| Registrado en | `T-041` y `D-071` |
| Cerrado en | `ed64348` (verificado en `R-020`) |

- **Que se observo:** la nota que el Paso 7c-bis anadio en el commit de anclaje `0854fd3` cierra con un
  puntero que no resuelve.

  ```
  $ git show 0854fd3:_persistence/decisions.md | sed -n '3746,3747p'
    No se sustituye la salida publicada ni se corrige: queda declarado aqui. Ver «Sin resolver» del
    informe de esta sesion.
  $ git show 0854fd3:_audit/S-017.md | grep -c "Sin resolver"
  0
  $ git show 0854fd3:_audit/S-017.md | grep -n '^## '
  11:## 0. Respuesta a la auditoria anterior
  30:## 1. Que se hizo
  82:## 2. Que NO se hizo, y por que
  101:## 3. Decisiones tomadas
  129:## 4. Supuestos vigentes y riesgos
  146:## 5. Siguiente tarea propuesta
  155:## 6. Que pedimos auditar
  174:## 7. Evidencia del Paso 2d
  413:## 8. Evidencia del Paso 2e
  434:## 9. Evidencia del Paso 2f
  ```

  «Sin resolver» es una seccion del **reporte en pantalla** del Paso 8 de `protocol-close`
  (`.claude/skills/protocol-close/SKILL.md:1943`), no del informe que queda en el commit: el registro
  permanente apunta a algo que no persiste.

  ⚠️ **No es nuevo de esta sesion**, y hay que decirlo: `D-062` (de `S-016`) hace la misma remision y
  `R-018` no lo abrio.

  ```
  $ git show 0854fd3:_persistence/decisions.md | grep -n "Sin resolver"
  1217:  - **Que la tabla mande publicar la salida en «Sin resolver» y seguir:** trata el sintoma; con el
  2336:  suya. Lo que es del cierre lo corrige en el anclaje; lo que es de `manager` va a **Sin resolver**
  3544:  hasta que `L-016` se evalue. Ver `T-035` en `tasks.md` y «Sin resolver» del informe de `S-016`.
  3746:  No se sustituye la salida publicada ni se corrige: queda declarado aqui. Ver «Sin resolver» del
  ```

  Las lineas `1217` y `2336` son decisiones que **describen** el protocolo, y ahi la mencion es
  legitima; las `3544` y `3746` son remisiones a un documento que no existe.
- **Por que importa:** `decisions.md` es el registro que se lee dentro de meses, y `D-064` es
  precisamente la entrada cuya cuarta orden **no reproduce**: el puntero que deberia llevar al detalle
  del fallo no lleva a ninguna parte. El contenido no se perdio —`D-064` publica las dos salidas, una
  debajo de la otra—, asi que el defecto es solo el puntero. `Baja` por eso. `No bloqueante` porque
  nada lo hereda.
- **Que lo corregiria:** una nota fechada en `D-064` —y en `D-062`, que tiene el mismo puntero— que
  sustituya la remision por lo que si persiste: «ver las dos salidas publicadas arriba en esta misma
  entrada», sin reescribir la linea original. Y, de fondo, que `protocol-close` no mande citar desde el
  registro una seccion que solo existe en pantalla. ⚠️ Es una recomendacion, no una orden.

### F-025 - `T-042` publica «seis» ordenes donde su propia ficha enumera ocho casos, y el informe repite la cifra
| Campo | Valor |
|---|---|
| Auditoria | R-020 |
| Fecha | 2026-09-17 |
| Gravedad | Media |
| Urgencia | No bloqueante |
| Estado | Implementado |
| Registrado en | `T-043` y `D-075` |
| Cerrado en | d80a965 (verificado en `R-021`) |

- **Que se observo:** el titulo de `T-042`, su fila del indice y la seccion 5 de `_audit/S-018.md`
  dicen «seis ordenes»; la ficha enumera ocho vinetas y nueve ordenes, y su propia prosa dice «los
  ocho casos de arriba».

  ```
  $ git show ed64348:_persistence/tasks.md | sed -n '/^### T-042 /,/^### T-038 /p' | grep -cE '^  - \*\*D-0'
  8
  $ git show ed64348:_persistence/tasks.md | grep -n 'T-042' | grep -coE 'seis'
  3
  ```

  Las vinetas, una por una:

  ```
  $ git show ed64348:_persistence/tasks.md | sed -n '/^### T-042 /,/^### T-038 /p' | grep -E '^  - \*\*D-0'
    - **D-068:** `grep -n '(#s-017' _persistence/progress.md | grep -oE 'l-018-+d-063'`. Publica
    - **D-068:** `node .claude/checks/anchors.js _persistence/*.md _audit/*.md`. Publica la lista de seis
    - **D-068:** `node slug.mjs '...'` y `node validate2.mjs ...`. Los dos scripts eran deliberadamente
    - **D-069:** `grep -E '^\| \[F-020\]' _audit/findings.md | awk -F'|' '{print $(NF-1)}'`. Publica
    - **D-069:** `grep -A7 '^### F-003' _audit/findings.md | grep -E '^\| (Estado|Cerrado en) \|'`.
    - **D-070:** `grep -cE '^\|.*\| Sin confirmar \|' _persistence/techdebt.md`. Publica `1`; reejecutada
    - **D-071:** `grep -c "Sin resolver" .claude/skills/protocol-close/SKILL.md`. Publica `16`;
    - **D-072:** `grep -E '^\| \[L-' _persistence/lessons.md | grep '005_discovery' | grep -c 'Sin evaluar'`.
  ```

  Ninguna lectura da seis: **siete** ordenes que ya no reproducen (las siete `No` de la tabla de la
  seccion 7 del informe), **ocho** vinetas, **nueve** ordenes contando los dos scripts temporales de
  la tercera vineta.
- **Por que importa:** es una cifra tecleada que su propia enumeracion contradice, y es el tercer caso
  del mismo patron en este registro (`F-017`, `F-019`). Quien retome la tarea comparara «seis» con lo
  que encuentre y tendra que decidir cual cifra vale, sin nada que lo zanje. `Media` porque el registro
  afirma un numero falso en tres sitios y ademas se contradice dentro de la misma ficha; no `Alta`
  porque el contenido esta completo y no se pierde informacion. `No bloqueante` porque ningun control
  lee esa cifra.
- **Que lo corregiria:** derivar la cifra de la enumeracion y publicarla con la orden que la cuenta,
  declarando cual de las tres se cuenta; y, como ya esta commiteada, hacerlo por nota fechada en vez
  de reescribir. ⚠️ Es una recomendacion, no una orden.

### F-026 - La NOTA DE CIERRE de `S-018` declara `ed64348` como commit de anclaje, y el anclaje esta en `a22ef55`
| Campo | Valor |
|---|---|
| Auditoria | R-020 |
| Fecha | 2026-09-17 |
| Gravedad | Media |
| Urgencia | No bloqueante |
| Estado | Implementado |
| Registrado en | `T-044` y `D-076` |
| Cerrado en | d80a965 (verificado en `R-021`) |

- **Que se observo:** la nota nombra el mismo hash para el commit de sesion y para el de anclaje.

  ```
  $ git show a22ef55:_audit/S-018.md | grep -n 'NOTA DE CIERRE'
  249:**NOTA DE CIERRE — commit de anclaje `ed64348`, informe sobre el commit de sesion `ed64348`.**
  $ git show ed64348:_audit/S-018.md | grep -n 'NOTA DE CIERRE' | sed -n '2p'
  247:**NOTA DE CIERRE:** <se completa en el Paso 7c/7c-bis, despues del commit>
  $ git show --stat --name-only --format= a22ef55
  _audit/S-018.md
  _persistence/decisions.md
  $ git diff a22ef55^ a22ef55 -- _audit/S-018.md | grep -c '^+.*ed64348'
  25
  ```

  En `ed64348` la NOTA DE CIERRE seguia en su marcador de pendiente: la nota, la cabecera anclada y
  los cinco criterios de cierre nacen en `a22ef55`.
- **Por que importa:** el protocolo de auditoria distingue commit de sesion y commit de anclaje porque
  los dos mandan a estados distintos, y la nota es donde esa distincion queda para quien lea despues.
  Publicar `ed64348` como commit de anclaje manda a buscar el anclaje a un commit que no lo contiene —
  el mismo defecto que `F-013` abrio en su version anterior. `Media` porque el registro afirma algo
  comprobablemente falso sobre su propia trazabilidad; no `Alta` porque el contenido anclado reproduce
  y el hash del estado auditado es correcto. `No bloqueante` porque nada posterior lo hereda.
- **Que lo corregiria:** una nota fechada bajo la NOTA DE CIERRE que declare `a22ef55` como commit de
  anclaje y `ed64348` como commit de sesion, sin reescribir la linea original; y que `protocol-close`
  derive los dos hashes con una orden en vez de teclearlos. ⚠️ Es una recomendacion, no una orden.

### F-027 - El CONTROL DE SALIDA REPRODUCIDA es ciego al formato «Ordenes:»/«Salidas:» y su limite no quedo registrado
| Campo | Valor |
|---|---|
| Auditoria | R-020 |
| Fecha | 2026-09-17 |
| Gravedad | Media |
| Urgencia | No bloqueante |
| Estado | Implementado |
| Registrado en | `T-045` y `D-077` |
| Cerrado en | d80a965 (verificado en `R-021`) |

- **Que se observo:** la funcion `salidas()` del Paso 7c-bis excluye del computo las lineas que
  empiezan por `$ `, y las decisiones de este proyecto ya no escriben sus ordenes con ese prefijo:
  usan dos cercas separadas, «Ordenes:» y «Salidas:». El control clasifica entonces lineas de **orden**
  como si fueran salidas.

  ```
  $ salidas() { awk '/^### /{c=0} /^### [DT]-/{d=$2} /Criterio de cierre/{c=1} /^---$/{c=0} /^[[:space:]]*```/{f=!f; next} c&&f&&!/^[[:space:]]*\$ /{sub(/^[[:space:]]+/,""); print d" | "$0}'; }; salidas < _persistence/decisions.md | grep -E '^D-(068|069|070|071|072) ' | grep -c 'git show'
  10
  $ salidas < _persistence/decisions.md | grep -E '^D-(068|069|070|071|072) ' | grep 'git show' | head -4
  D-068 | git show ed64348:.claude/skills/protocol-close/SKILL.md | grep -c '^## Paso 2b-bis'
  D-068 | git show ed64348:_persistence/progress.md | grep -cE '\(#s-0(07|08|10|15|16|17)---'
  D-069 | git show ed64348:_audit/findings.md | grep -c '^| Codigo | Hallazgo | Auditoria | Gravedad | Urgencia | Estado | Registrado en |'
  D-069 | git show ed64348:_audit/findings.md | grep -c '^| Registrado en | la `T-XXX` o la `D-XXX`'
  ```

  El informe de `S-018` declara el limite y lo suple con una verificacion aparte —extrae solo los
  bloques «Salidas:» y los compara byte a byte antes y despues—, asi que esta sesion **no sustituyo
  ninguna evidencia**: se verifico y es cierto. Lo que falta es el registro del defecto.

  ```
  $ git show ed64348:_persistence/techdebt.md | sed -n '/^## Indice/,/^---/p' | grep -c 'salidas()\|formato'
  0
  ```

  `DT-002` cubre otra limitacion del mismo control («no reejecuta las ordenes»), no esta.
- **Por que importa:** el 7c-bis es obligatorio y su salida ruidosa se repetira en cada cierre, porque
  todas las decisiones nuevas usan el formato que el control no entiende. Un control que siempre avisa
  deja de leerse —lo dice la convencion de este mismo archivo—, y el cierre siguiente puede dar por
  declarado lo que no reviso. `Media` porque produce ruido, no una afirmacion falsa; no `Alta` porque
  el cierre publico la verificacion sustitutiva entera. `No bloqueante` porque nada de lo commiteado
  hereda un dato falso.
- **Que lo corregiria:** adaptar `salidas()` para que reconozca la cerca «Salidas:» como la de salidas
  y la cerca «Ordenes:» como ordenes; o, si se decide no tocarlo ahora, registrarlo como `DT-XXX` con
  su coste, porque hoy es un limite conocido sin dueno. ⚠️ Es una recomendacion, no una orden.

### F-028 - La nota de anclaje de `S-019` dice que la escribio `70fe40c`, y esta en `e610906`
| Campo | Valor |
|---|---|
| Auditoria | R-021 |
| Fecha | 2026-09-18 |
| Gravedad | Media |
| Urgencia | No bloqueante |
| Estado | Aceptado — pendiente |
| Registrado en | `T-047`, `D-080` |
| Cerrado en | |

- **Que se observo:** la nota fechada que completa el commit de anclaje de `S-019` afirma, literal:
  «El primero es el commit de anclaje (**este mismo, el que anadio esta nota**)». La nota no esta en
  `70fe40c`: entro en un tercer commit, `e610906`.

  ```
  $ git show 70fe40c:_audit/S-019.md | grep -c 'NOTA 2026-09-18 — el commit de anclaje es'
  0
  $ git show e610906:_audit/S-019.md | grep -c 'NOTA 2026-09-18 — el commit de anclaje es'
  1
  $ git log --format='%h %s' -1 e610906
  e610906 S-019: completa por nota fechada el commit de anclaje derivado (70fe40c)
  ```

  Los dos hashes que la nota publica —`70fe40c` como anclaje y `d80a965` como sesion— **son
  correctos**; lo que no se sostiene es el parentesis que atribuye la nota a `70fe40c`. Es la misma
  prueba que la nota de `S-018` usa para `F-026`: una nota que solo puede existir despues del commit
  no puede declarar ese commit como el suyo.
- **Por que importa:** es la primera aplicacion de la regla que `D-076` acaba de escribir para impedir
  esta clase de afirmacion, y la reintroduce por otra via: ya no confunde los dos hashes, pero si
  confunde que commit contiene la nota. Quien siga el puntero para reproducirla correra
  `git show 70fe40c:_audit/S-019.md` y no la encontrara. `Media` porque el registro afirma algo
  comprobablemente falso, no porque pierda contenido. `No bloqueante` porque nada de lo que venga
  despues hereda el error.
- **Que lo corregiria:** una nota fechada mas que declare que la nota de anclaje vive en `e610906`,
  derivando el hash con `git log -1 --format=%h -- _audit/S-019.md`; y, hacia adelante, que la
  plantilla de la NOTA DE CIERRE prohiba el autorreferente «este mismo commit» dentro de una nota que
  se redacta antes del commit que la contiene. ⚠️ Es una recomendacion, no una orden.

### F-029 - El acta de cierre de `005_discovery` conserva el `D-XXX` de la plantilla donde debe citar `D-074`
| Campo | Valor |
|---|---|
| Auditoria | R-021 |
| Fecha | 2026-09-18 |
| Gravedad | Baja |
| Urgencia | No bloqueante |
| Estado | Aceptado — pendiente |
| Registrado en | `T-048`, `D-081` |
| Cerrado en | |

- **Que se observo:** la firma del patrocinador se relleno en tres filas (`Quien`, `Fecha`,
  `Decision`) y la cuarta quedo con el texto generico de la plantilla, sin instanciar a `D-074`.

  ```
  $ git show d80a965:_audit/005_discovery/005_phase_exit_record_001.md | sed -n '/^| Donde queda/p'
  | Donde queda registrada | `_persistence/decisions.md`, con su `D-XXX` |
  $ git show d80a965:_templates/phase_exit_record.md | sed -n '/^| Donde queda/p'
  | Donde queda registrada | `_persistence/decisions.md`, con su `D-XXX` |
  $ git show d80a965:_audit/000_preproject/005_phase_exit_record_001.md | sed -n '/^| Donde queda/p'
  | Donde queda registrada | `_persistence/decisions.md`, con `D-015` (decision) y `D-020` (firma escrita en esta tabla) |
  ```

  La fila de la instancia es identica, byte a byte, a la de la plantilla agnostica; el acta anterior
  del mismo proyecto si la instancio, asi que la forma correcta esta establecida.
- **Por que importa:** el acta es el artefacto que cierra una etapa y es lo que se lee para saber
  quien la cerro y con que autoridad; sin el puntero a `D-074`, llegar a la decision que la sostiene
  exige buscarla. Ademas el control de huecos del propio cierre no lo ve —`grep -c '<en blanco>'`
  devuelve `0` porque esta fila nunca llevo ese marcador—, asi que una fila sin instanciar pasa el
  control. `Baja` porque no hay afirmacion falsa y `D-074` existe y es localizable; `No bloqueante`
  porque nada hereda el defecto.
- **Que lo corregiria:** instanciar la fila a `D-074`, y anadir al control de huecos del acta un
  barrido de codigos genericos sin instanciar (`D-XXX`, `T-XXX`, `F-NNN`) sobre las secciones de
  firma, que es donde una plantilla agnostica los deja por construccion. ⚠️ Es una recomendacion, no
  una orden.

### F-030 - La NOTA DE CIERRE de `S-020` deja el commit de anclaje como hueco de plantilla, sin instanciar y sin derivar
| Campo | Valor |
|---|---|
| Auditoria | R-022 |
| Fecha | 2026-09-18 |
| Gravedad | Media |
| Urgencia | No bloqueante |
| Estado | Aceptado — pendiente |
| Registrado en | `T-049`, `D-091` |
| Cerrado en | |

- **Que se observo:** el rotulo de la NOTA DE CIERRE de `_audit/S-020.md` (linea 261) publica el
  commit de sesion y deja el de anclaje con el texto literal de la plantilla.

  ```
  $ git show 30276a9:_audit/S-020.md | grep -nE '<se completa|<pendiente|<en blanco|<rellenar'
  123:  sobre las secciones de firma, porque el control existente busca `<en blanco>` y esta fila nunca
  261:**NOTA DE CIERRE — commit de sesion `7b0c48f`, commit de anclaje `<se completa tras commitear el anclaje>`.**
  ```

  La linea 123 es una cita legitima del marcador dentro de la prosa de `D-081`; el hueco real es la
  261. No hay commit posterior que lo complete, y no se publico la orden que lo derivaria:

  ```
  $ git log --format='%h %ad %s' --date=short -- _audit/S-020.md
  30276a9 2026-09-18 S-020: ancla el informe y los criterios de cierre al hash 7b0c48f
  7b0c48f 2026-09-18 S-020: F-028/F-029 de R-021 evaluados (D-080/D-081), promocion al esqueleto (D-082), y leccion L-022
  $ grep -c 'rev-parse' _audit/S-020.md
  0
  $ git rev-parse --short 30276a9
  30276a9
  $ git rev-parse --short 30276a9^
  7b0c48f
  ```

  `protocol-close` lo exige literal (`.claude/skills/protocol-close/SKILL.md`, lineas 1316-1322):
  «los DOS hashes que la nota nombra —el commit de sesion y el commit de anclaje— se DERIVAN con una
  orden y se pega su salida, nunca se teclean». Y ningun control del cierre lo ve: el de huecos de
  plantilla ancla en `^<` y este hueco esta inline; el `7c-ter` solo comprueba que los seis rotulos
  existan, no que su contenido este instanciado.

  ```
  $ git show 30276a9:_audit/S-020.md | grep -nE '^<'
  (sin salida; exit=1)
  ```

- **Por que importa:** la NOTA DE CIERRE existe precisamente para distinguir el commit de sesion del
  de anclaje. Sin el segundo, el registro no dice donde quedaron escritas las salidas ancladas ni los
  criterios del Paso 7c-bis, y quien lo busque tiene que reconstruirlo con `git log`. Es la misma
  familia que `F-013`, `F-026` y `F-028`, que ya costaron tres correcciones por nota: alli el hash
  estaba mal atribuido o llegaba en un tercer commit no declarado; aqui directamente no esta. `Media`
  porque el registro queda incompleto en el punto que el mecanismo existe para cubrir, aunque no
  afirma nada falso; `No bloqueante` porque la informacion es recuperable con una orden y nada de lo
  que venga despues hereda un dato erroneo.
- **Que lo corregiria:** una nota fechada en `_audit/S-020.md` que declare `30276a9` como commit de
  anclaje, con la salida de `git rev-parse --short HEAD`/`HEAD^` corrida tras el anclaje, sin
  reescribir la linea 261; y un control en `protocol-close` que, antes de commitear el anclaje, busque
  marcadores entre angulos en cualquier posicion de la NOTA DE CIERRE, no solo a principio de linea.
  ⚠️ Es una recomendacion, no una orden.

### F-031 - La NOTA DE CIERRE de `S-021` repite el hueco de plantilla en el commit de anclaje, dentro de la misma sesion que acepto `F-030`
| Campo | Valor |
|---|---|
| Auditoria | R-023 |
| Fecha | 2026-09-18 |
| Gravedad | Media |
| Urgencia | No bloqueante |
| Estado | Implementado |
| Registrado en | D-092 / T-051 |
| Cerrado en | `e45185d` (verificado en `R-024`) |

- **Que se observo:** el commit de anclaje `6a7d7f7` escribio la NOTA DE CIERRE entera de `S-021` y
  dejo el commit de anclaje con el texto literal de la plantilla, sin instanciar y sin derivar.

  ```
  $ git show 6a7d7f7:_audit/S-021.md | grep -nE '<se completa|<pendiente|<en blanco|<rellenar'
  228:15	+  $ grep -nE '<se completa|<pendiente|<en blanco|<rellenar' _audit/S-020.md
  272:| 15 | `grep -nE '<se completa\|<pendiente\|<en blanco\|<rellenar' _audit/S-020.md` | Si | mismas dos lineas (123 y 261) que publica `D-091` |
  287:**NOTA DE CIERRE — commit de sesion `22747a9`, commit de anclaje `<se completa tras commitear el
  ```

  Las lineas 228 y 272 son citas legitimas del patron dentro de la evidencia del Paso 2d. El hueco
  real es la 287, y es el unico. No hay commit posterior que lo complete:

  ```
  $ git log --format='%h %ad %s' --date=short -- _audit/S-021.md
  6a7d7f7 2026-09-18 S-021: ancla el informe al hash 22747a9
  22747a9 2026-09-18 S-021: A-008 confirmado (D-083/C-006), Pasos 1-4 de 010_prototype sellados y decididos (D-084-D-090), F-030 evaluado (D-091)
  ```

  El control que debia verlo sigue sin ampliarse, porque la segunda mitad de `F-030` (`T-049`) esta
  `No implementada` y `.claude/` no se toco en el commit de sesion:

  ```
  $ git diff --name-only 22747a9^ 22747a9 -- .claude | wc -l
  0
  $ grep -n "^grep -nE '\^<' _audit/S-XXX.md" .claude/skills/protocol-close/SKILL.md
  1498:grep -nE '^<' _audit/S-XXX.md
  ```

- **Por que importa:** es la quinta instancia de la misma familia (`F-013`, `F-026`, `F-028`,
  `F-030`), y la primera que ocurre **despues** de que el mecanismo fallido quedara diagnosticado por
  escrito en `D-091` y `L-024`, en la misma jornada. El registro de `S-021` no dice donde quedo su
  anclaje, igual que no lo decia el de `S-020`. `Media` porque el registro queda incompleto justo en
  el punto que la nota existe para cubrir, sin afirmar nada falso; `No bloqueante` porque el dato es
  recuperable con una orden y nada posterior hereda un valor erroneo.
- **Que lo corregiria:** `T-049` arregla el control hacia adelante, pero **no corrige este archivo**:
  su criterio de cierre habla del control, no del rotulo de `S-021.md`. Hace falta ademas una nota
  fechada en `_audit/S-021.md` que declare `6a7d7f7` como commit de anclaje, con la salida de
  `git rev-parse --short` corrida, sin reescribir la linea 287. ⚠️ Es una recomendacion, no una
  orden.

  🕐 **NOTA 2026-09-18 (`R-024`) — cerrado en `e45185d`.** La correccion esta en el diff:
  `_audit/S-021.md` recibe al final una nota fechada que declara `6a7d7f7` como commit de anclaje,
  con la orden de derivacion corrida y pegada, y la linea 287 sigue literal.

  ```
  $ git show e45185d --stat -- _audit/S-021.md
   _audit/S-021.md | 25 +++++++++++++++++++++++++
  $ git show e45185d:_audit/S-021.md | sed -n '287p'
  **NOTA DE CIERRE — commit de sesion `22747a9`, commit de anclaje `<se completa tras commitear el
  $ git show e45185d:_audit/S-021.md | tail -22 | grep -c '6a7d7f7'
  6
  ```

  ⚠️ **Se cierra el archivo, no el mecanismo.** El control que dejo pasar el hueco es `T-049`, que
  sigue abierta bajo `F-030` — y `F-032` documenta que el defecto volvio a ocurrir en la misma sesion
  que corrigio este.

### F-032 - La NOTA DE CIERRE de `S-022` repite por tercera sesion consecutiva el hueco de plantilla en el commit de anclaje
| Campo | Valor |
|---|---|
| Auditoria | R-024 |
| Fecha | 2026-09-18 |
| Gravedad | Media |
| Urgencia | No bloqueante |
| Estado | Implementado |
| Registrado en | D-095 / T-052 |
| Cerrado en | `66e6413` (verificado en `R-025`) |

- **Que se observo:** el commit de anclaje `07ca614` escribio la NOTA DE CIERRE entera de `S-022` y
  dejo el commit de anclaje con el texto literal de la plantilla, sin instanciar y sin derivar.

  ```
  $ git show 07ca614:_audit/S-022.md | grep -nE '<se completa|<pendiente|<en blanco|<rellenar'
  207: 5	+  $ grep -nE '<se completa|<pendiente|<en blanco|<rellenar' _audit/S-021.md
  239:| 5 | `grep -nE '<se completa\|<pendiente\|<en blanco\|<rellenar' _audit/S-021.md` | Si | lineas 228, 272 y 287, coinciden con lo publicado en `D-092` |
  258:**NOTA DE CIERRE — commit de sesion `e45185d`, commit de anclaje `<se completa tras commitear el
  ```

  Las lineas 207 y 239 son citas legitimas del patron dentro de la evidencia del Paso 2d. El hueco
  real es la 258, y es el unico. No hay commit posterior que lo complete:

  ```
  $ git log --format='%h %ad %s' --date=short -- _audit/S-022.md
  07ca614 2026-09-18 S-022: ancla el informe al hash e45185d
  e45185d 2026-09-18 S-022: F-031 evaluado (D-092/T-051), el prototipo se construye (D-093) y el patrocinador lo aprueba (D-094)
  ```

  El control que debia verlo sigue sin ampliarse, y `.claude/` no se toco en el commit de sesion:

  ```
  $ git diff --name-only e45185d^ e45185d -- .claude | wc -l
  0
  $ git show e45185d:_persistence/tasks.md | grep -E '^\| \[T-049\]'
  | [T-049](#t-049---ampliar-el-control-de-huecos-del-cierre-a-los-marcadores-inline-de-la-nota-de-cierre) | Ampliar el control de huecos del cierre a los marcadores inline de la NOTA DE CIERRE | No implementada | Media | No bloqueante | 010_prototype |
  ```

- **Por que importa:** es la sexta instancia de la familia (`F-013`, `F-026`, `F-028`, `F-030`,
  `F-031`) y la **tercera sesion consecutiva** con el mismo hueco en el mismo rotulo. El registro de
  `S-022` no dice donde quedo su anclaje, igual que no lo decian `S-020` ni `S-021`. `Media` porque
  el registro queda incompleto justo en el punto que la nota existe para cubrir, sin afirmar nada
  falso; `No bloqueante` porque el dato es recuperable con una orden y nada posterior hereda un valor
  erroneo.
  ⚠️ La seccion 6 de `S-022` anticipa este hallazgo y lo declara «con conocimiento de causa».
  Anticiparlo no lo corrige: el archivo sigue sin decir su commit de anclaje, y esa es la unica razon
  por la que se abre — no la reincidencia.
- **Que lo corregiria:** una nota fechada al final de `_audit/S-022.md` que declare `07ca614` como
  commit de anclaje, con la salida de `git rev-parse --short` corrida y pegada, sin reescribir la
  linea 258. El **mecanismo** sigue siendo `T-049`, que este hallazgo no duplica.
  ⚠️ Es una recomendacion, no una orden.

### F-033 - La verificacion de orden de `D-093` publica «(sin salida)» para una orden que a partir del commit devuelve una linea
| Campo | Valor |
|---|---|
| Auditoria | R-024 |
| Fecha | 2026-09-18 |
| Gravedad | Baja |
| Urgencia | No bloqueante |
| Estado | Implementado |
| Registrado en | D-096 / T-053 |
| Cerrado en | `66e6413` (verificado en `R-025`) |

- **Que se observo:** el bloque «Verificacion del orden que exige el Gate» de `D-093` publica dos
  ordenes; la segunda, la que demuestra que el codigo nacio despues del artefacto sellado, se publica
  como `(sin salida)`, y la propia decision avisa de que hay que releerla tras el commit.

  ```
  $ git show e45185d:_persistence/decisions.md | sed -n '/Verificacion del orden que exige el Gate/,/releerla/p'
  - **Verificacion del orden que exige el Gate — la tarea se sello ANTES que el codigo:**

    ```
    $ git log --diff-filter=A --format='%h %ad %s' --date=short -- 010_prototype/005_happy_path.md
    22747a9 2026-09-18 S-021: A-008 confirmado (D-083/C-006), Pasos 1-4 de 010_prototype sellados y decididos (D-084-D-090), F-030 evaluado (D-091)
    $ git log --diff-filter=A --format='%h %ad' --date=short -- 010_prototype/app/
    (sin salida)
    ```
  ```

  Reejecutada hoy, esa segunda orden ya no devuelve vacio:

  ```
  $ git log --diff-filter=A --format='%h %ad' --date=short -- 010_prototype/app/
  e45185d 2026-09-18
  ```

  El Paso 2d de `S-022` la reejecuto **antes** del commit y la dio por reproducida (fila 14 de su
  tabla), y el commit de anclaje no toco `_persistence/decisions.md`:

  ```
  $ git show --stat --name-only --format= 07ca614
  _audit/S-022.md
  ```

  La tarea que cubre esta familia de desfases no alcanza a `D-093`:

  ```
  $ git show e45185d:_persistence/tasks.md | grep -E '^### T-050'
  ### T-050 - Anclar o corregir los numeros de linea de las verificaciones de D-086/D-087 que ya no reproducen
  ```

- **Por que importa:** ese bloque es la evidencia del orden que el **Gate 1** exige comprobar —que el
  artefacto se sellara antes que el codigo—, y es justo la mitad que lo demuestra la que quedo
  publicada como `(sin salida)`. Quien reejecute la orden obtiene `e45185d` y no lo publicado; y
  `(sin salida)` es ambiguo: se puede leer como «la carpeta no existe» en vez de «el codigo aun no
  estaba commiteado». `Baja` porque la conclusion que el bloque sostiene es cierta y hoy es mas facil
  de probar que entonces; `No bloqueante` porque nada construido encima hereda un valor erroneo.
- **Que lo corregiria:** una nota fechada en `D-093` que publique la salida anclada posterior al
  commit —`e45185d 2026-09-18` para `010_prototype/app/`— sin reescribir el bloque original; o
  ampliar a `D-093` el tratamiento que `manager` decida para `T-050`.
  ⚠️ Es una recomendacion, no una orden.

### F-034 - El registro de `S-023` afirma una ronda de cuatro sesiones donde la sellada es de cinco
| Campo | Valor |
|---|---|
| Auditoria | R-025 |
| Fecha | 2026-09-18 |
| Gravedad | Media |
| Urgencia | Bloqueante |
| Estado | Aceptado — pendiente |
| Registrado en | D-100 / T-056 |
| Cerrado en | |

- **Que se observo:** `_persistence/progress.md` y `_audit/S-023.md`, en el commit `66e6413`, dan la
  ronda del Paso 5 por **cuatro** sesiones y enumeran como pendientes solo `002`, `003` y `004`:

  ```
  $ git show 66e6413:_persistence/progress.md | grep -n "cuatro sesiones\|sesiones restantes\|002\`, \`003\`"
  107:`T-053`). Se corre la primera de las cuatro sesiones del Paso 5 de `010_prototype`:
  128:alguna de las tres sesiones restantes el participante vuelve sobre la discrepancia, se anota en su
  791:  primera de las cuatro sesiones del Paso 5: `010_prototype/015_session_001.md`, con JD Rodriguez
  803:- **Que quedo abierto:** faltan las sesiones `002`, `003` y `004` del Paso 5; el prototipo sigue sin
  ```

  El informe repite la cifra en su seccion 2 («Faltan las sesiones `002`, `003` y `004`»), su
  seccion 4 («una sola de las cuatro sesiones previstas») y su seccion 5. Lo sellado es cinco:

  ```
  $ git show 66e6413:_persistence/decisions.md | sed -n '5308,5309p'
  - **Decision:** **1 participante** y **5 sesiones**, en **cinco dias de sorteo distintos**. Umbral
    `4 de 5`, y solo cuenta `Exito autonomo`. Queda escrito en
  $ git show 66e6413:010_prototype/010_participants.md | grep -n '^| `00[1-5]`'
  121:| `001` | 2026-09-18 | Unico | si | `015_session_001.md` | Sin reclutamiento: es el Actor Generador |
  122:| `002` | pendiente | Unico | pendiente | `015_session_002.md` | Sin reclutamiento: es el Actor Generador |
  123:| `003` | pendiente | Unico | pendiente | `015_session_003.md` | Sin reclutamiento: es el Actor Generador |
  124:| `004` | pendiente | Unico | pendiente | `015_session_004.md` | Sin reclutamiento: es el Actor Generador |
  125:| `005` | pendiente | Unico | pendiente | `015_session_005.md` | Sin reclutamiento: es el Actor Generador |
  ```

  `A-009` («la ronda de cinco sesiones») y `D-098` («no las cuatro siguientes»), del mismo commit,
  tambien dicen cinco.
- **Por que importa:** `progress.md` es lo primero que se lee al abrir sesion, y la tarea siguiente
  es justamente correr la ronda. Leido tal cual, la ronda terminaria en `004`, y el umbral sellado
  `4 de 5` no se podria evaluar. El mismo commit se contradice a si mismo (`D-098`/`A-009` frente a
  `progress.md`/`S-023`). `Media` porque la cifra correcta sigue escrita en `D-087`, `D-088` y
  `010_participants.md`; `Bloqueante` porque el registro que guia la sesion siguiente afirma un
  estado falso sobre el trabajo que esa sesion va a hacer.
- **Que lo corregiria:** una nota fechada en `progress.md` (y en `_audit/S-023.md`, sin reescribir
  lo sellado) que declare que la ronda es de cinco sesiones y que faltan `002` a `005`; y que el
  siguiente cierre sobrescriba las secciones 2 y 3 de `progress.md` con la cifra correcta.
  ⚠️ Es una recomendacion, no una orden.

### F-035 - La seccion 0 de `S-023` situa en el commit anterior las correcciones de `F-032` y `F-033`, que estan en `66e6413`
| Campo | Valor |
|---|---|
| Auditoria | R-025 |
| Fecha | 2026-09-18 |
| Gravedad | Baja |
| Urgencia | No bloqueante |
| Estado | Implementado |
| Registrado en | D-101 / T-057 |
| Cerrado en | `d802324` (verificado en `R-026`) |

- **Que se observo:** la seccion 0 de `_audit/S-023.md` afirma que las dos correcciones ya estaban
  en el commit anterior a la sesion, y que «ninguno de los siete se toca en este cierre»:

  ```
  $ git show 66e6413:_audit/S-023.md | grep -n "ya en el commit anterior\|que precede a esta sesion"
  24:| F-032 — La NOTA DE CIERRE de S-022 repite por tercera sesion consecutiva el hueco de plantilla en el commit de anclaje | Aceptado — pendiente | `D-095`, `T-052` (`Implementada`): se completo por nota fechada en `_audit/S-022.md`, ya en el commit anterior a este cierre |
  25:| F-033 — La verificacion de orden de D-093 publica «(sin salida)» para una orden que a partir del commit devuelve una linea | Aceptado — pendiente | `D-096`, `T-053` (`Implementada`): se completo por nota fechada en `D-093`, ya en el commit anterior a este cierre |
  28:commit `e45185d`/`07ca614` que precede a esta sesion (evaluados por `manager` como `D-095`/`D-096`,
  ```

  Las dos notas nacen en `66e6413`, no antes:

  ```
  $ for h in e45185d 07ca614 cc16375 66e6413; do printf "%s S-022-nota=%s D-093-nota=%s\n" $h "$(git show $h:_audit/S-022.md | grep -c 'NOTA 2026-09-18 (`F-032`')" "$(git show $h:_persistence/decisions.md | grep -c 'NOTA 2026-09-18 (`F-033`')"; done
  e45185d S-022-nota=0 D-093-nota=0
  07ca614 S-022-nota=0 D-093-nota=0
  cc16375 S-022-nota=0 D-093-nota=0
  66e6413 S-022-nota=1 D-093-nota=1
  ```

  `F-032` y `F-033` los abrio `R-024` en `cc16375`, auditando `e45185d`: la correccion no podia estar
  en ninguno de esos dos commits. La seccion 1 del mismo informe lo dice bien («ya venia editado por
  manager al llegar a este cierre»), y el `--stat` de `66e6413` lista `_audit/S-022.md` (+24) y
  `_audit/findings.md`.
- **Por que importa:** la seccion 0 es la que lee la auditoria para saber donde verificar una
  correccion; quien la siga buscara las notas en `e45185d`/`07ca614` y no las encontrara. `Baja`
  porque la seccion 1 y el diff la contradicen y el dato es recuperable; `No bloqueante` porque esta
  auditoria ya cierra los dos hallazgos contra el commit correcto y nada posterior hereda el error.
- **Que lo corregiria:** una nota fechada al final de `_audit/S-023.md` que declare que las dos
  correcciones van en el commit de sesion `66e6413`, sin reescribir la seccion 0.
  ⚠️ Es una recomendacion, no una orden.
