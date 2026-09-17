# tasks.md

> 📄 **Se copia a `_persistence/tasks.md`.** Se copia entero, con el indice vacio y la plantilla de
> entrada intacta.
>
> ⛔ **Lo que se borra al copiar son los ejemplos, no las convenciones.** Las convenciones son las
> reglas del archivo, y `CLAUDE.md` manda leerlas antes de escribir en el.

---

> Registro de las tareas **realizadas** y de las tareas **por realizar**.
> Cada tarea tiene codigo `T-XXX`, estado, importancia y urgencia.

---

## Indice

| Codigo | Tarea | Estado | Importancia | Urgencia | Etapa |
|---|---|---|---|---|---|
| [T-001](#t-001---completar-projectmd-y-montar-el-andamiaje-minimo-de-000_preproject) | Completar `project.md` y montar el andamiaje minimo de `000_preproject` | Implementada | Alta | Bloqueante | 000_preproject |
| [T-002](#t-002---asignar-las-firmas-del-gate-1-y-del-gate-2-antes-de-cerrar-sus-etapas) | Asignar las firmas del Gate 1 y del Gate 2 antes de cerrar sus etapas | Implementada | Media | No bloqueante | 010_prototype |
| [T-003](#t-003---hacer-que-los-barridos-de-anclaje-del-cierre-vean-ordenes-indentadas) | Hacer que los barridos de anclaje del cierre vean ordenes indentadas | Implementada | Alta | No bloqueante | 000_preproject |
| [T-004](#t-004---publicar-la-salida-real-del-control-de-cifra-adyacente-de-s-001) | Publicar la salida real del CONTROL DE CIFRA ADYACENTE de S-001 | Implementada | Media | No bloqueante | 000_preproject |
| [T-005](#t-005---corregir-el-ancla-de-la-fila-s-001-en-el-indice-de-progressmd) | Corregir el ancla de la fila S-001 en el indice de progress.md | Implementada | Baja | No bloqueante | 000_preproject |
| [T-006](#t-006---hacer-que-las-cercas-de-bloque-de-los-controles-admitan-sangria) | Hacer que las cercas de bloque de los controles admitan sangria | Implementada | Media | No bloqueante | 000_preproject |
| [T-007](#t-007---anclar-criterios-de-cierre-comparando-la-salida-anclada-con-la-publicada) | Anclar criterios de cierre comparando la salida anclada con la publicada | Implementada | Media | No bloqueante | 000_preproject |
| [T-008](#t-008---declarar-en-el-paso-7c-bis-que-el-control-de-salida-reproducida-no-reejecuta) | Declarar en el Paso 7c-bis que el CONTROL DE SALIDA REPRODUCIDA no reejecuta | Implementada | Baja | No bloqueante | 005_discovery |
| [T-009](#t-009---anclar-las-ordenes-git-diff---cached-de-la-seccion-1-del-informe) | Anclar las ordenes git diff --cached de la seccion 1 del informe | Implementada | Media | No bloqueante | 005_discovery |
| [T-010](#t-010---firmar-la-tabla-52-del-acta-de-cierre-de-000_preproject) | Firmar la tabla 5.2 del acta de cierre de 000_preproject | Implementada | Media | No bloqueante | 005_discovery |
| [T-011](#t-011---pedir-en-la-nota-de-cierre-la-forma-anclada-de-la-orden-del-paso-2d) | Pedir en la NOTA DE CIERRE la forma anclada de la orden del Paso 2d | Implementada | Baja | No bloqueante | 005_discovery |
| [T-012](#t-012---acotar-el-control-sin-anclar-del-7c-quater-a-lineas-de-orden) | Acotar el control SIN ANCLAR del 7c-quater a lineas de orden | Implementada | Media | No bloqueante | 005_discovery |
| [T-013](#t-013---anadir-el-estado-de-decision-revocada-en-parte) | Anadir el estado de decision revocada en parte | Implementada | Baja | No bloqueante | 005_discovery |
| [T-014](#t-014---abrir-la-deuda-del-desfase-con-el-esqueleto-de-arranque) | Abrir la deuda del desfase con el esqueleto de arranque | Implementada | Baja | No bloqueante | 005_discovery |
| [T-015](#t-015---declarar-en-el-7c-quater-el-punto-ciego-de-la-orden-partida) | Declarar en el 7c-quater el punto ciego de la orden partida | Implementada | Baja | No bloqueante | 005_discovery |
| [T-016](#t-016---fijar-que-el-estado-de-una-tarea-lo-decide-el-diff-y-no-el-anclaje) | Fijar que el estado de una tarea lo decide el diff y no el anclaje | Implementada | Media | No bloqueante | 005_discovery |

---

## Convenciones

| Campo | Valores posibles |
|---|---|
| Codigo | `T-XXX`, correlativo, no se reutiliza |
| Estado | `Implementada` / `No implementada` / `Cancelada` / `Suspendida` |
| Importancia | `Alta` / `Media` / `Baja` |
| Urgencia | `Bloqueante` / `No bloqueante` |
| Origen | `usuario` / `manager` / `report_auditor` / `session-closer` |
| Etapa | una de las etapas declaradas en la tabla «Etapas» de `project.md` |

**`Origen` es obligatorio y su valor sale de esta lista.** Que significa cada uno:

| Valor | La tarea nace de… |
|---|---|
| `usuario` | una peticion o una decision del usuario |
| `manager` | iniciativa propia al ejecutar |
| `report_auditor` | un hallazgo `F-NNN` de una auditoria |
| `session-closer` | un control del cierre de sesion que detecta un pendiente en un archivo que el cierre no puede editar |

🚨 **Anadir un valor nuevo es una decision, no una improvisacion.** El criterio es uno solo:
**nombra un origen de demanda que ninguno de los ya existentes cubre**. Un matiz de un origen
existente —«usuario, pero por escrito», «report_auditor, pero de otra pasada»— no es un
valor nuevo: va en el cuerpo de la tarea. Si el criterio se cumple, el valor entra **en esta
tabla en la misma pasada** en que se escribe la primera tarea que lo usa, con su `D-XXX`.

Regla: una tarea con origen `report_auditor` solo pasa a ejecutarse despues de que `manager` evalue
la recomendacion y la considere correcta.

🚨 **Este archivo no se escribe a mano durante la jornada.** Lo produce el cierre de sesion, junto
con `progress.md`. **Tiene dos excepciones, y las dos estan escritas.** La primera: cuando `manager`
evalua un hallazgo `F-NNN` de una auditoria y lo acepta, escribe **en ese momento** la `T-XXX` con
`Origen: report_auditor`, sin esperar al cierre.

🔑 **Por que esa primera excepcion existe.** La fila del hallazgo en `_audit/findings.md` tiene que
citar el codigo de su tarea para ser auditable, y una fila que cita una `T-XXX` inexistente no lo es.
Esperar al cierre dejaria el hallazgo evaluado y sin registro durante toda la jornada — el agujero
que el estado `Aceptado — pendiente` existe justamente para tapar.

**La segunda:** `manager` tambien escribe aqui cuando el cambio **nace de una decision ya registrada
que el `session-closer` no puede deducir del `git diff`** — reasignar la etapa de una tarea, o
cambiar la estructura del archivo porque lo pidio el usuario. El agente arranca en frio y solo ve
archivos: una orden del usuario no deja rastro en el diff, y esperar al cierre significa perderla.

⚠️ **Son dos excepciones, no una puerta.** Las dos exigen lo mismo: **un `D-XXX` o un `F-NNN` que
las respalde, citado en la propia tarea**. Sin esa cita, cualquier edicion a mano se vuelve
indistinguible de saltarse la regla — y entonces la regla deja de existir. Lo demas sigue siendo del
`session-closer`.

🚨 **El indice se escribe a mano, sin generador.** Cada fila enlaza por ancla a su tarea.

🚨 **El bloque «Criterio de cierre» de una tarea lleva su orden anclada al commit, igual que en
`decisions.md`.** Las tareas nacidas en una sesion publican su criterio con `<hash>` literal —el
commit todavia no existe cuando se escriben—, y una version anterior de esta regla no las anclaba
nunca. `<hash>` no es un commit: quien quiera contrastar la Definicion de Terminado tiene que
adivinar cual.

🔑 **Quien lo ancla es el Paso 7c-bis de `protocol-close`, despues del commit**, en la misma pasada
en que ancla `decisions.md`. Aqui no hay excepcion que justificar: este archivo ya es del
`session-closer`, asi que anclar lo que el mismo escribio es terminar su trabajo, no invadir el de
`manager`.

⚠️ **Rige hacia adelante.** Las ordenes con `<hash>` ya publicadas en tareas de sesiones anteriores
**no se reescriben**: se corrigen por nota fechada, republicando la misma orden anclada con la
salida que devuelve.

---

## Tareas

<!--
Plantilla:

### T-XXX - Titulo
| Campo | Valor |
|---|---|
| Estado | No implementada |
| Importancia | |
| Urgencia | |
| Etapa | |
| Origen | |
| Sesion | S-XXX |

- **Que:** que hay que hacer.
- **Por que:** que problema resuelve.
- **Criterio de cierre:** como se sabe que quedo hecha.
-->

### T-001 - Completar `project.md` y montar el andamiaje minimo de `000_preproject`
| Campo | Valor |
|---|---|
| Estado | Implementada |
| Importancia | Alta |
| Urgencia | Bloqueante |
| Etapa | 000_preproject |
| Origen | usuario |
| Sesion | S-001 |

- **Que:** rellenar `project.md` (identidad, rutas, remoto, etapas, carpetas) a partir de la
  plantilla del esqueleto, y dejar el primer ciclo de la jornada corrido entero (arranque, trabajo,
  cierre).
- **Por que:** un `project.md` a medias deja `SIN COMPROBAR` los controles del cierre que leen sus
  valores (Pasos 1b y 2c de `protocol-close`), segun advierte el propio archivo.
- **Criterio de cierre:** que `project.md`, anclado al commit de esta sesion, no conserve ningun
  marcador de plantilla sin rellenar.

  ```
  $ git show <hash>:project.md | grep -cE '<[A-Za-z]'
  0
  ```

- 🕐 **Nota 2026-09-15 (`F-001`, `T-003`):** la orden de arriba se publico con `<hash>` sin resolver,
  porque el barrido del cierre no veia ordenes indentadas. Anclada al commit de la sesion, `5cae773`,
  reproduce lo publicado:

  ```
  $ git show 5cae773:project.md | grep -cE '<[A-Za-z]'
  0
  ```

### T-002 - Asignar las firmas del Gate 1 y del Gate 2 antes de cerrar sus etapas
| Campo | Valor |
|---|---|
| Estado | Implementada |
| Importancia | Media |
| Urgencia | No bloqueante |
| Etapa | 010_prototype |
| Origen | manager |
| Sesion | S-001 |

- **Que:** registrar, con su propia `D-XXX`, quien firma el dictamen de `gate1_auditor` y el de
  `gate2_auditor` antes de lanzar cada Gate.
- **Por que:** `D-003` adopto los dos Gates pero dejo explicitamente sin fijar esa asignacion, y
  `_phases/010_prototype.md` la exige registrada antes de lanzar el Gate 1.
- **Criterio de cierre:** existe una `D-XXX` que nombra quien firma cada Gate, citada desde
  `_persistence/decisions.md` (`D-003`). Cumplido por `D-011`: firma tecnica de `gate1_auditor` /
  `gate2_auditor`, firma del patrocinador del usuario.

### T-003 - Hacer que los barridos de anclaje del cierre vean ordenes indentadas
| Campo | Valor |
|---|---|
| Estado | Implementada |
| Importancia | Alta |
| Urgencia | No bloqueante |
| Etapa | 000_preproject |
| Origen | report_auditor |
| Sesion | S-002 |

- **Que:** atender `F-001`. Hay que ampliar los patrones de `protocol-close` segun `D-008` y anclar,
  con nota fechada, la orden de `T-001`.
- **Por que:** con los patrones antiguos, un control obligatorio del cierre sale limpio sobre ordenes
  que no ve, y una tarea `Implementada` publica un criterio que no se puede reproducir.
- **Criterio de cierre:** el de `D-008`, y que ninguna orden de `T-001` quede con `<hash>` sin una
  forma anclada debajo.

  ```
  $ git show e222812:_persistence/tasks.md | grep -cE '^[[:space:]]*\$ git show 5cae773:project.md'
  1
  ```

📌 **Anclada por el Paso 7c-bis al commit `e222812`.** Reproduce lo publicado arriba.

### T-004 - Publicar la salida real del CONTROL DE CIFRA ADYACENTE de S-001
| Campo | Valor |
|---|---|
| Estado | Implementada |
| Importancia | Media |
| Urgencia | No bloqueante |
| Etapa | 000_preproject |
| Origen | report_auditor |
| Sesion | S-002 |

- **Que:** atender `F-002` con una nota fechada en `_audit/S-001.md`, seccion 7, que pegue la salida
  entera de la orden del Paso 6b sobre el informe tal como entro en `5cae773` y la lea linea por linea.
  El texto original no se toca.
- **Por que:** el informe publico «7 lineas» sin la salida, y la orden devuelve 8. Asi no se distingue
  de un control que no se corrio. Verificado vigente contra `HEAD` (`45e33a4`):

  ```
  $ git show 45e33a4:_audit/S-001.md | grep -n -A12 "CONTROL DE CIFRA ADYACENTE — salida" | grep -E "Devolvio|CIFRA"
  279:> **CONTROL DE CIFRA ADYACENTE — salida:**
  288-> Devolvio 7 lineas (ver el detalle corrido antes de commitear, en la seccion 6 de este cierre). Las
  ```

- ⚠️ **Lo que no incluye:** cambiar el Paso 7c-ter. El auditor lo propone solo «si se repite»; hoy
  hay un caso, y se revisa si aparece otro.
- **Criterio de cierre:** la nota existe en el informe a ese commit y lleva las ocho lineas.

  ```
  $ git show e222812:_audit/S-001.md | grep -cE '^> S-001\.md:(36|81|82|130|131|173|210|211): '
  8
  ```

📌 **Anclada por el Paso 7c-bis al commit `e222812`.** Reproduce lo publicado arriba.

### T-005 - Corregir el ancla de la fila S-001 en el indice de progress.md
| Campo | Valor |
|---|---|
| Estado | Implementada |
| Importancia | Baja |
| Urgencia | No bloqueante |
| Etapa | 000_preproject |
| Origen | report_auditor |
| Sesion | S-002 |

- **Que:** atender `F-003` cambiando `project.md` por `projectmd` en el ancla de la fila `S-001` del
  indice de `_persistence/progress.md`.
- **Por que:** la fila del indice no lleva a su entrada. Verificado vigente contra `HEAD`
  (`45e33a4`):

  ```
  $ git show 45e33a4:_persistence/progress.md | grep -oE '\]\(#s-001[^)]*\)'
  ](#s-001---primera-sesion-de-trabajo-project.md-completo-y-el-porque-del-arranque)
  $ git show 45e33a4:_persistence/progress.md | grep -nE '^### S-001'
  120:### S-001 - Primera sesion de trabajo: `project.md` completo y el porque del arranque
  ```

- **Criterio de cierre:** el ancla coincide con la que genera el encabezado.

  ```
  $ git show e222812:_persistence/progress.md | grep -oE '\]\(#s-001[^)]*\)'
  ](#s-001---primera-sesion-de-trabajo-projectmd-completo-y-el-porque-del-arranque)
  ```

📌 **Anclada por el Paso 7c-bis al commit `e222812`.** Reproduce lo publicado arriba.

### T-006 - Hacer que las cercas de bloque de los controles admitan sangria
| Campo | Valor |
|---|---|
| Estado | Implementada |
| Importancia | Media |
| Urgencia | No bloqueante |
| Etapa | 000_preproject |
| Origen | report_auditor |
| Sesion | S-003 |

- **Que:** atender `F-004` sustituyendo el patron de cerca en las doce apariciones de `protocol-close`,
  `protocol-audit` y `protocol-start`, segun `D-010`.
- **Por que:** con la cerca en columna cero, el CONTROL DE PROSA BORRADA devuelve siempre falsos
  positivos tras un anclaje, y el cierre tiene que detenerse o correr una orden distinta de la escrita.
  Verificacion contra `HEAD` (`6ab7887`) en `D-010`.
- **Criterio de cierre:** el de `D-010`.

  ```
  $ git grep -nF '/^```/' 101db28 -- .claude | wc -l
  0
  $ git grep -cF '/^[[:space:]]*```/' 101db28 -- .claude
  101db28:.claude/skills/protocol-audit/SKILL.md:4
  101db28:.claude/skills/protocol-close/SKILL.md:6
  101db28:.claude/skills/protocol-start/SKILL.md:2
  ```

📌 **Anclada por el Paso 7c-bis al commit `101db28`.** Las dos reproducen lo publicado arriba.

- 🕐 **Nota 2026-09-16 (`F-005`, `T-007`):** la linea `📌` de arriba **no es exacta**: la segunda
  orden no reproduce lo que se publico en `101db28`. Aquella salida no llevaba prefijo, y `git grep`
  sobre un commit siempre lo antepone; a la orden le falta el `| cut -d: -f2-` que si lleva la misma
  orden en `D-010`. El anclaje sustituyo la salida en lugar de pegar las dos. Los recuentos (4, 6, 2)
  si se sostienen. La salida publicada, tal como estaba, y la que devuelve la orden anclada:

  ```
  $ git show 101db28:_persistence/tasks.md | awk '/^### T-006/,0' | grep -F '.claude/skills/'
    .claude/skills/protocol-audit/SKILL.md:4
    .claude/skills/protocol-close/SKILL.md:6
    .claude/skills/protocol-start/SKILL.md:2
  $ git grep -cF '/^[[:space:]]*```/' 101db28 -- .claude
  101db28:.claude/skills/protocol-audit/SKILL.md:4
  101db28:.claude/skills/protocol-close/SKILL.md:6
  101db28:.claude/skills/protocol-start/SKILL.md:2
  ```

### T-007 - Anclar criterios de cierre comparando la salida anclada con la publicada
| Campo | Valor |
|---|---|
| Estado | Implementada |
| Importancia | Media |
| Urgencia | No bloqueante |
| Etapa | 000_preproject |
| Origen | report_auditor |
| Sesion | S-004 |

- **Que:** atender `F-005`: nota fechada bajo el criterio de cierre de `T-006` con las dos salidas, y
  CONTROL DE SALIDA REPRODUCIDA en el Paso 7c-bis de `protocol-close`, con su rotulo en el 7c-ter y en
  la plantilla de la NOTA DE CIERRE, segun `D-013`.
- **Por que:** el anclaje de `S-003` sustituyo una salida que no reproducia y afirmo que reproducia; la
  regla de detenerse existia y se juzgaba a ojo. Verificacion contra `HEAD` (`613ef8a`) en `D-013`.
- **Criterio de cierre:** el de `D-013`, copiado de alli por orden y no a mano.

  ```
  $ eval "$(git show c07680f:.claude/skills/protocol-close/SKILL.md | grep -F 'salidas() {')"; for p in "101db28 2a72df8" "e222812 4b27ae4"; do set -- $p; for f in _persistence/decisions.md _persistence/tasks.md; do echo "== $1..$2 $f"; diff <(git show $1:"$f" | salidas) <(git show $2:"$f" | salidas) | grep -cE '^[<>]'; done; done
  == 101db28..2a72df8 _persistence/decisions.md
  0
  == 101db28..2a72df8 _persistence/tasks.md
  6
  == e222812..4b27ae4 _persistence/decisions.md
  0
  == e222812..4b27ae4 _persistence/tasks.md
  0
  $ git show c07680f:.claude/skills/protocol-close/SKILL.md | grep -cF '**CONTROL DE SALIDA REPRODUCIDA — salida:**'
  2
  ```

📌 **Anclada por el Paso 7c-bis al commit `c07680f`.** Las dos reproducen lo publicado arriba.

### T-008 - Declarar en el Paso 7c-bis que el CONTROL DE SALIDA REPRODUCIDA no reejecuta
| Campo | Valor |
|---|---|
| Estado | Implementada |
| Importancia | Baja |
| Urgencia | No bloqueante |
| Etapa | 005_discovery |
| Origen | report_auditor |
| Sesion | S-005 |

- **Que:** escribir en el Paso 7c-bis de `protocol-close` que el control compara texto y no reejecuta
  las ordenes, y remitir a `DT-002`, segun `D-017`.
- **Por que:** primera recomendacion sin hallazgo de `R-004`, evaluada y aceptada en `D-017`.
- **Nota (2026-09-16, S-007):** se implemento **sin** remitir a `DT-002`, por decision de `D-022`
  (punto 1): la skill es copiable y no admite codigos instanciados; el puntero va de `DT-002` al
  control. El «Que» no se reescribe; la tarea no esta incumplida en ese punto.
- **Criterio de cierre:** el de `D-022`, con sus ordenes ancladas y sus salidas; alli consta
  tambien como se implemento.

### T-009 - Anclar las ordenes git diff --cached de la seccion 1 del informe
| Campo | Valor |
|---|---|
| Estado | Implementada |
| Importancia | Media |
| Urgencia | No bloqueante |
| Etapa | 005_discovery |
| Origen | report_auditor |
| Sesion | S-005 |

- **Que:** que el Paso 7c de `protocol-close`, al anclar el informe, traduzca las ordenes
  `git diff --cached` de la seccion 1 a `git diff <hash>^ <hash>`, segun `D-019`.
- **Por que:** tercera recomendacion sin hallazgo de `R-004`, evaluada y aceptada en `D-019`.
- **Criterio de cierre:** el de `D-022`, con sus ordenes ancladas y sus salidas; alli consta
  tambien como se implemento.

### T-010 - Firmar la tabla 5.2 del acta de cierre de 000_preproject
| Campo | Valor |
|---|---|
| Estado | Implementada |
| Importancia | Media |
| Urgencia | No bloqueante |
| Etapa | 005_discovery |
| Origen | report_auditor |
| Sesion | S-006 |

- **Que:** atender `F-006`: escribir en la tabla 5.2 de
  `_audit/000_preproject/005_phase_exit_record_001.md` la firma que dio el patrocinador (JD Rodriguez -
  Main Sponsor, 2026-09-16, ETAPA CERRADA), segun `D-020`.
- **Por que:** el acta decia que la etapa seguia abierta y `D-015` que estaba cerrada. Verificacion
  contra `HEAD` (`673a97a`) en `D-020`.
- **Criterio de cierre:** el de `D-020`, copiado de alli.

  ```
  $ git show 081385a:_audit/000_preproject/005_phase_exit_record_001.md | grep -cF '<pendiente>'
  0
  $ git show 081385a:_audit/000_preproject/005_phase_exit_record_001.md | grep -nE '^\| (Quien|Fecha|Decision) \| ' | tail -3
  430:| Quien | JD Rodriguez - Main Sponsor |
  431:| Fecha | 2026-09-16 |
  432:| Decision | ETAPA CERRADA |
  ```

📌 **Ancladas por el Paso 7c-bis al commit `081385a`.** Las dos reproducen lo publicado arriba.

### T-011 - Pedir en la NOTA DE CIERRE la forma anclada de la orden del Paso 2d
| Campo | Valor |
|---|---|
| Estado | Implementada |
| Importancia | Baja |
| Urgencia | No bloqueante |
| Etapa | 005_discovery |
| Origen | report_auditor |
| Sesion | S-006 |

- **Que:** atender `F-007`: que la instruccion de la NOTA DE CIERRE en la plantilla del informe de
  `protocol-close` pida al Paso 7c la primera orden del Paso 2d en su forma anclada, con su recuento,
  segun `D-021`.
- **Por que:** la seccion 7 deja la forma anclada para la nota y la nota no la pide; `S-005` la
  prometio y no la publico. Verificacion contra `HEAD` (`673a97a`) en `D-021`.
- **Criterio de cierre:** el de `D-022`, con sus ordenes ancladas y sus salidas; alli consta
  tambien como se implemento.

### T-012 - Acotar el control SIN ANCLAR del 7c-quater a lineas de orden
| Campo | Valor |
|---|---|
| Estado | Implementada |
| Importancia | Media |
| Urgencia | No bloqueante |
| Etapa | 005_discovery |
| Origen | report_auditor |
| Sesion | S-007 |

- **Que:** atender `F-008`: que la segunda orden del Paso 7c-quater de `protocol-close` solo cuente
  lineas de orden en forma de staging, no la cadena en la prosa, segun `D-023`.
- **Por que:** el control dio falso positivo en su primera ejecucion real y el cierre siguio sin
  publicarlo. Verificacion contra `HEAD` (`efbc8d5`) en `D-023`.
- **Criterio de cierre:** el de `D-023`, con sus ordenes ancladas y sus salidas.

### T-013 - Anadir el estado de decision revocada en parte
| Campo | Valor |
|---|---|
| Estado | Implementada |
| Importancia | Baja |
| Urgencia | No bloqueante |
| Etapa | 005_discovery |
| Origen | usuario |
| Sesion | S-007 |

- **Que:** anadir `Revocada en parte por D-XXX` a las convenciones de `decisions.md` y de su
  plantilla, declararlo no cerrado en `protocol-start` y aplicarlo a `D-015` y `D-022`, segun `D-024`.
- **Por que:** recomendacion sin hallazgo de `R-006`; el usuario eligio el estado nuevo.
- **Criterio de cierre:** el de `D-024`, con sus ordenes ancladas y sus salidas.

### T-014 - Abrir la deuda del desfase con el esqueleto de arranque
| Campo | Valor |
|---|---|
| Estado | Implementada |
| Importancia | Baja |
| Urgencia | No bloqueante |
| Etapa | 005_discovery |
| Origen | report_auditor |
| Sesion | S-008 |

- **Que:** atender `F-009`: abrir `DT-003` para el desfase actual con el esqueleto de arranque, sin
  reescribir `S-007.md`, segun `D-025`.
- **Por que:** el informe atribuia el desfase a `DT-001`, que esta pagada, y el desfase no tenia
  ninguna deuda abierta. Verificacion contra `HEAD` (`3aa301c`) en `D-025`.
- **Criterio de cierre:** el de `D-025`, con sus ordenes ancladas y sus salidas.
- 🕐 **Nota 2026-09-16 (`F-010`, `T-016`):** pasa a `Implementada`. Su trabajo esta en `27c03bb` y
  el criterio de `D-025` reproduce; quedo en `No implementada` por un criterio que `D-027` descarta.

### T-015 - Declarar en el 7c-quater el punto ciego de la orden partida
| Campo | Valor |
|---|---|
| Estado | Implementada |
| Importancia | Baja |
| Urgencia | No bloqueante |
| Etapa | 005_discovery |
| Origen | report_auditor |
| Sesion | S-008 |

- **Que:** anadir al parrafo de limite del Paso 7c-quater de `protocol-close` que una orden entre
  comillas invertidas partida en dos lineas no se detecta, segun `D-026`.
- **Por que:** recomendacion sin hallazgo de `R-007` (seccion 5); el usuario eligio declararlo.
- **Criterio de cierre:** el de `D-026`, con sus ordenes ancladas y sus salidas.
- 🕐 **Nota 2026-09-16 (`F-010`, `T-016`):** pasa a `Implementada`. Su trabajo esta en `27c03bb` y
  el criterio de `D-026` reproduce; quedo en `No implementada` por un criterio que `D-027` descarta.

### T-016 - Fijar que el estado de una tarea lo decide el diff y no el anclaje
| Campo | Valor |
|---|---|
| Estado | Implementada |
| Importancia | Media |
| Urgencia | No bloqueante |
| Etapa | 005_discovery |
| Origen | report_auditor |
| Sesion | S-009 |

- **Que:** atender `F-010`: escribir en el Paso 4 de `protocol-close` que una tarea con su trabajo en
  el commit de la sesion pasa a `Implementada` sin esperar al anclaje, y mover `T-014` y `T-015`,
  segun `D-027`.
- **Por que:** `S-008` dejo dos tareas hechas en `No implementada` con un criterio que contradice a
  `S-004`, `S-006` y `S-007`, y ningun paso las movia. Verificacion contra `HEAD` (`f0c1a74`) en `D-027`.
- **Criterio de cierre:** el de `D-027`, con sus ordenes ancladas y sus salidas.
