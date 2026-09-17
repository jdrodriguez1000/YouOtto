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
| [T-017](#t-017---declarar-en-el-paso-4-el-caso-del-criterio-que-no-reproduce) | Declarar en el Paso 4 el caso del criterio que no reproduce | Implementada | Baja | No bloqueante | 005_discovery |
| [T-018](#t-018---completar-d-027-con-los-criterios-sin-anclar-de-sus-precedentes) | Completar D-027 con los criterios sin anclar de sus precedentes | Implementada | Baja | No bloqueante | 005_discovery |
| [T-019](#t-019---promover-al-esqueleto-de-arranque-lo-que-difiere-en-dt-003) | Promover al esqueleto de arranque lo que difiere en DT-003 | Implementada | Alta | No bloqueante | 005_discovery |
| [T-020](#t-020---ajustar-por-nota-el-alcance-de-t-019) | Ajustar por nota el alcance de T-019 | Implementada | Media | No bloqueante | 005_discovery |
| [T-021](#t-021---declarar-por-nota-el-tercer-commit-del-anclaje-de-s-011) | Declarar por nota el tercer commit del anclaje de S-011 | Implementada | Media | No bloqueante | 005_discovery |
| [T-022](#t-022---poner-el-commit-de-anclaje-detras-de-una-puerta-mecanica) | Poner el commit de anclaje detras de una puerta mecanica | Implementada | Media | No bloqueante | 005_discovery |
| [T-023](#t-023---hacer-que-el-desfase-4-del-arranque-ignore-los-commits-de-solo-anclaje) | Hacer que el desfase 4 del arranque ignore los commits de solo anclaje | Implementada | Media | No bloqueante | 005_discovery |
| [T-024](#t-024---hacer-que-el-trailer-del-cierre-nombre-el-modelo-que-lo-ejecuta) | Hacer que el trailer del cierre nombre el modelo que lo ejecuta | Implementada | Baja | No bloqueante | 005_discovery |
| [T-025](#t-025---declarar-por-nota-la-fecha-del-commit-en-las-entradas-de-s-012) | Declarar por nota la fecha del commit en las entradas de S-012 | Implementada | Media | No bloqueante | 005_discovery |
| [T-026](#t-026---hacer-que-el-paso-7d-compare-las-fechas-que-anade-el-commit) | Hacer que el Paso 7d compare las fechas que anade el commit | Implementada | Media | No bloqueante | 005_discovery |
| [T-027](#t-027---anadir-el-trailer-de-coautoria-al-commit-de-anclaje) | Anadir el trailer de coautoria al commit de anclaje | Implementada | Baja | No bloqueante | 005_discovery |
| [T-028](#t-028---anadir-la-urgencia-a-los-hallazgos-de-auditoria) | Anadir la urgencia a los hallazgos de auditoria | Implementada | Media | No bloqueante | 005_discovery |
| [T-029](#t-029---pasos-1-y-2-de-005_discovery-con-el-patrocinador) | Pasos 1 y 2 de 005_discovery con el patrocinador | Implementada | Alta | Bloqueante | 005_discovery |
| [T-030](#t-030---publicar-por-nota-la-orden-sin-filtro-que-d-041-cita) | Publicar por nota la orden sin filtro que D-041 cita | No implementada | Baja | No bloqueante | 005_discovery |
| [T-031](#t-031---corregir-por-nota-la-cifra-de-la-nota-de-cierre-de-s-013) | Corregir por nota la cifra de la NOTA DE CIERRE de S-013 | No implementada | Baja | No bloqueante | 005_discovery |
| [T-032](#t-032---limitar-las-skills-que-puede-invocar-el-agente-de-cierre) | Limitar las skills que puede invocar el agente de cierre | No implementada | Alta | No bloqueante | 005_discovery |
| [T-033](#t-033---publicar-por-nota-las-ordenes-del-paso-1b-y-del-barrido-que-d-045-resume) | Publicar por nota las ordenes del Paso 1b y del barrido que D-045 resume | No implementada | Baja | No bloqueante | 005_discovery |
| [T-034](#t-034---corregir-por-nota-la-cifra-del-criterio-de-cierre-de-t-029) | Corregir por nota la cifra del criterio de cierre de T-029 | Implementada | Baja | No bloqueante | 005_discovery |
| [T-035](#t-035---anclar-por-nota-la-cifra-del-barrido-del-paso-1-de-protocol-harvest-en-d-062) | Anclar por nota la cifra del barrido del Paso 1 de protocol-harvest en D-062 | No implementada | Baja | No bloqueante | 005_discovery |
| [T-036](#t-036---corregir-la-cifra-de-condiciones-de-salida-de-005_discovery-en-la-plantilla-el-reparto-y-el-artefacto) | Corregir la cifra de condiciones de salida de 005_discovery en la plantilla, el reparto y el artefacto | Implementada | Baja | No bloqueante | 005_discovery |
| [T-037](#t-037---anclar-o-fechar-dos-ordenes-del-contexto-de-d-064-que-ya-no-reproducen) | Anclar o fechar dos ordenes del Contexto de D-064 que ya no reproducen | No implementada | Baja | No bloqueante | 005_discovery |
| [T-038](#t-038---reparar-las-seis-anclas-rotas-del-indice-de-progressmd-y-poner-el-control-que-las-detecta) | Reparar las seis anclas rotas del indice de progress.md y poner el control que las detecta | Implementada | Baja | No bloqueante | 005_discovery |
| [T-039](#t-039---dar-al-indice-de-findingsmd-una-columna-propia-para-la-cita-de-la-t-xxx-o-la-d-xxx) | Dar al indice de findings.md una columna propia para la cita de la T-XXX o la D-XXX | Implementada | Baja | No bloqueante | 005_discovery |
| [T-040](#t-040---poner-dueno-a-la-confirmacion-de-dt-005) | Poner dueno a la confirmacion de DT-005 | Implementada | Baja | No bloqueante | 005_discovery |
| [T-041](#t-041---corregir-por-nota-las-dos-remisiones-a-sin-resolver-y-prohibirlas-hacia-adelante) | Corregir por nota las dos remisiones a «Sin resolver» y prohibirlas hacia adelante | Implementada | Baja | No bloqueante | 005_discovery |
| [T-042](#t-042---anclar-o-fechar-seis-ordenes-de-contexto-en-d-068d-069d-070d-071d-072-que-ya-no-reproducen) | Anclar o fechar seis ordenes de Contexto en D-068/D-069/D-070/D-071/D-072 que ya no reproducen | No implementada | Baja | No bloqueante | 005_discovery |

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

### T-017 - Declarar en el Paso 4 el caso del criterio que no reproduce
| Campo | Valor |
|---|---|
| Estado | Implementada |
| Importancia | Baja |
| Urgencia | No bloqueante |
| Etapa | 005_discovery |
| Origen | report_auditor |
| Sesion | S-010 |

- **Que:** anadir al bullet del Paso 4 de `protocol-close` que una tarea con su trabajo en el diff y
  un criterio que no reproduce sigue en `No implementada`, segun `D-028`.
- **Por que:** primera recomendacion sin hallazgo de `R-009`, evaluada y aceptada en `D-028`.
- **Criterio de cierre:** el de `D-028`, con sus ordenes ancladas y sus salidas.

### T-018 - Completar D-027 con los criterios sin anclar de sus precedentes
| Campo | Valor |
|---|---|
| Estado | Implementada |
| Importancia | Baja |
| Urgencia | No bloqueante |
| Etapa | 005_discovery |
| Origen | report_auditor |
| Sesion | S-010 |

- **Que:** anadir debajo de `D-027` una nota fechada con la orden que muestra que los criterios de
  `S-004`, `S-006` y `S-007` seguian con `<hash>` en su commit de sesion, segun `D-029`.
- **Por que:** segunda recomendacion sin hallazgo de `R-009`, evaluada y aceptada en `D-029`.
- **Criterio de cierre:** el de `D-029`, con sus ordenes ancladas y sus salidas.

### T-019 - Promover al esqueleto de arranque lo que difiere en DT-003
| Campo | Valor |
|---|---|
| Estado | Implementada |
| Importancia | Alta |
| Urgencia | No bloqueante |
| Etapa | 005_discovery |
| Origen | report_auditor |
| Sesion | S-010 |

- **Que:** correr `protocol-promote`, con la aprobacion del usuario punto por punto, para llevar al
  esqueleto de arranque los archivos del andamiaje que difieren, incluida la frase de `D-028`. Paga
  `DT-003`.
- **Por que:** tercera recomendacion sin hallazgo de `R-009`, aceptada en `D-030`: va antes de la
  clasificacion de actores.
- **Criterio de cierre:** el de `D-032`, con sus ordenes ancladas y sus salidas. El commit del
  esqueleto es `447c2a0`.
- 🕐 **Nota 2026-09-16 (`F-011`, `D-034`):** la frase de `D-028` **sale del alcance** de esta tarea.
  `D-032`, aprobada por el usuario, promovio desde `95c5cfd`, donde la frase no estaba; se sigue en
  `DT-004`. Lo que la tarea si hizo, contra el esqueleto:

  ```
  $ for f in .claude/skills/protocol-close/SKILL.md .claude/skills/protocol-start/SKILL.md _templates/000_preproject/020_decisions.md; do [ "$(git rev-parse 95c5cfd:$f)" = "$(git -C "$ESQ" rev-parse 447c2a0:$f)" ] && echo "igual $f" || echo "DISTINTO $f"; done
  igual .claude/skills/protocol-close/SKILL.md
  igual .claude/skills/protocol-start/SKILL.md
  igual _templates/000_preproject/020_decisions.md
  ```

  (`ESQ="C:/Users/USUARIO/Documents/Company_TripleS/SDAI_TripleS"`.)

### T-020 - Ajustar por nota el alcance de T-019
| Campo | Valor |
|---|---|
| Estado | Implementada |
| Importancia | Media |
| Urgencia | No bloqueante |
| Etapa | 005_discovery |
| Origen | report_auditor |
| Sesion | S-011 |

- **Que:** atender `F-011`: anadir a `T-019` una nota fechada que saque la frase de `D-028` de su
  alcance y remita a `D-032`/`DT-004`, con la comparacion de blobs contra el esqueleto, segun `D-034`.
- **Por que:** `T-019` leida sola afirma un alcance cumplido que no lo esta. Verificacion contra `HEAD`
  (`1add289`) en `D-034`.
- 🕐 **Nota 2026-09-16 (session-closer):** el trabajo ya esta en el diff de esta sesion — la nota en
  `T-019` citando `F-011`/`D-034` esta escrita, verificada mas arriba en el Paso 2d de este cierre.
  Por el criterio de `D-027`/`D-028` (Paso 4 de `protocol-close`), pasa a `Implementada` en el commit
  de esta sesion sin esperar al anclaje del Paso 7c-bis, que solo publicara la evidencia de
  `D-034` con `<hash>` resuelto.
- **Criterio de cierre:** el de `D-034`, con sus ordenes ancladas y sus salidas.

### T-021 - Declarar por nota el tercer commit del anclaje de S-011
| Campo | Valor |
|---|---|
| Estado | Implementada |
| Importancia | Media |
| Urgencia | No bloqueante |
| Etapa | 005_discovery |
| Origen | report_auditor |
| Sesion | S-012 |

- **Que:** atender la primera parte de `F-013`. Una nota fechada en la seccion 7 de `_audit/S-011.md`
  dice que la NOTA DE CIERRE se commiteo en `1358c3c`, no en `fdfca7b`, y que el 7c-ter fallaba en
  `fdfca7b`. La linea publicada no se reescribe. Segun `D-036`.
- **Por que:** el informe apunta a un commit donde la nota no esta. Verificacion contra `HEAD`
  (`1fc3264`) en `D-036`.
- **Criterio de cierre:** el de `D-036`, con sus ordenes ancladas y sus salidas.

### T-022 - Poner el commit de anclaje detras de una puerta mecanica
| Campo | Valor |
|---|---|
| Estado | Implementada |
| Importancia | Media |
| Urgencia | No bloqueante |
| Etapa | 005_discovery |
| Origen | report_auditor |
| Sesion | S-012 |

- **Que:** atender la segunda parte de `F-013`. El bloque del commit de anclaje de `protocol-close`
  corre los controles del 7c-ter y del 7c-quater y solo commitea si los dos salen vacios. Segun `D-036`.
- **Por que:** los dos pasos ya prohibian commitear el anclaje con la nota coja, y un cierre lo hizo
  igual.
- **Criterio de cierre:** el de `D-036`, con sus ordenes ancladas y sus salidas.

### T-023 - Hacer que el desfase 4 del arranque ignore los commits de solo anclaje
| Campo | Valor |
|---|---|
| Estado | Implementada |
| Importancia | Media |
| Urgencia | No bloqueante |
| Etapa | 005_discovery |
| Origen | report_auditor |
| Sesion | S-012 |

- **Que:** primera recomendacion sin hallazgo de `R-012`. `protocol-start` anade al desfase 4 una
  orden que descarta los commits cuyo cambio en `_persistence/` solo ancla `<hash>` y anade lineas `📌`.
  Segun `D-037`.
- **Por que:** el aviso salta tras casi cada cierre, y en el arranque de `S-012` ni siquiera se reporto.
- **Criterio de cierre:** el de `D-037`, con sus ordenes ancladas y sus salidas.

### T-024 - Hacer que el trailer del cierre nombre el modelo que lo ejecuta
| Campo | Valor |
|---|---|
| Estado | Implementada |
| Importancia | Baja |
| Urgencia | No bloqueante |
| Etapa | 005_discovery |
| Origen | report_auditor |
| Sesion | S-012 |

- **Que:** tercera recomendacion sin hallazgo de `R-012`. El Paso 7 de `protocol-close` cambia el
  literal `Claude Opus 5` del trailer por `<modelo>`, el modelo que ejecuta el cierre. Segun `D-039`.
- **Por que:** el agente del cierre corre en otro modelo, y la skill le pedia firmar con uno que no
  escribio el commit.
- **Criterio de cierre:** el de `D-039`, con sus ordenes ancladas y sus salidas.

### T-025 - Declarar por nota la fecha del commit en las entradas de S-012
| Campo | Valor |
|---|---|
| Estado | Implementada |
| Importancia | Media |
| Urgencia | No bloqueante |
| Etapa | 005_discovery |
| Origen | report_auditor |
| Sesion | S-013 |

- **Que:** atender la primera parte de `F-014`. Una nota fechada en `D-036`, `D-037`, `D-038`, `D-039`,
  `L-013` y en la nota de `F-013` de `_audit/S-011.md` dice que su fecha es `2026-09-17`, la del commit
  `cf2992f`, sin reescribir la publicada. Segun `D-041`.
- **Por que:** esas entradas afirman un dia que su commit contradice. Verificacion contra `HEAD`
  (`4409bb9`) en `D-041`.
- **Criterio de cierre:** el de `D-041`, con sus ordenes ancladas y sus salidas.

### T-026 - Hacer que el Paso 7d compare las fechas que anade el commit
| Campo | Valor |
|---|---|
| Estado | Implementada |
| Importancia | Media |
| Urgencia | No bloqueante |
| Etapa | 005_discovery |
| Origen | report_auditor |
| Sesion | S-013 |

- **Que:** atender la segunda parte de `F-014`. El Paso 7d de `protocol-close` lista las fechas que el
  commit anade (campo `| Fecha |`, fila de indice de una entrada nueva, nota fechada) distintas de la
  suya. Lo que es del cierre lo corrige en el anclaje; lo que es de `manager` va a Sin resolver. Segun
  `D-041`.
- **Por que:** el 7d solo comparaba la cabecera del informe, y el error de `F-014` solo lo vio la
  auditoria.
- **Criterio de cierre:** el de `D-041`, con sus ordenes ancladas y sus salidas.

### T-027 - Anadir el trailer de coautoria al commit de anclaje
| Campo | Valor |
|---|---|
| Estado | Implementada |
| Importancia | Baja |
| Urgencia | No bloqueante |
| Etapa | 005_discovery |
| Origen | report_auditor |
| Sesion | S-013 |

- **Que:** recomendacion sin hallazgo de `R-013`. La linea del commit de anclaje de `protocol-close`
  anade `-m "Co-Authored-By: Claude <modelo> <noreply@anthropic.com>"`. Segun `D-042`.
- **Por que:** el anclaje de `S-012` salio sin trailer.
- **Criterio de cierre:** el de `D-042`, con sus ordenes ancladas y sus salidas.

### T-028 - Anadir la urgencia a los hallazgos de auditoria
| Campo | Valor |
|---|---|
| Estado | Implementada |
| Importancia | Media |
| Urgencia | No bloqueante |
| Etapa | 005_discovery |
| Origen | usuario |
| Sesion | S-013 |

- **Que:** `_audit/findings.md`, su plantilla, `protocol-audit` y `protocol-start` pasan a llevar y
  reportar la urgencia (`Bloqueante` / `No bloqueante`) de cada hallazgo, ademas de su gravedad. Segun
  `D-043`.
- **Por que:** el usuario necesita saber si un hallazgo se puede aplazar o hay que trabajarlo ya.
- **Criterio de cierre:** el de `D-043`, con sus ordenes ancladas y sus salidas.

### T-029 - Pasos 1 y 2 de 005_discovery con el patrocinador
| Campo | Valor |
|---|---|
| Estado | Implementada |
| Importancia | Alta |
| Urgencia | Bloqueante |
| Etapa | 005_discovery |
| Origen | usuario |
| Sesion | S-013 |

- **Que:** trabajar con el patrocinador, en conversacion y sin guion previo, el Paso 1 (separar la
  necesidad de la solucion que describe `_brief/`) y el Paso 2 (las nueve preguntas) de
  `_phases/005_discovery.md` §4, con el reparto de `D-044`. Se escribe `005_discovery/` copiando
  `_templates/005_discovery/005_needs.md`, y `N-XXX` se declara en la tabla «Codigos» de `project.md`
  con su `D-XXX` en la misma pasada. Los «no se sabe» van a `assumptions.md`.
- **Por que:** el usuario pide que la sesion siguiente trabaje ya en la etapa. Es el primer paso de su
  procedimiento, y el disparador de `A-001` y de `A-005`.
- **Criterio de cierre:** existe `005_discovery/` con el artefacto de necesidades, con al menos una
  `N-XXX` enunciada sin nombrar una pantalla, y `N-XXX` esta en la tabla «Codigos» de `project.md`. Las
  ordenes se escriben cuando exista el artefacto, con las de comprobacion que trae su plantilla.

  ```
  $ test -d 005_discovery && echo "existe 005_discovery"
  existe 005_discovery
  $ grep -c "^### N-0" 005_discovery/005_needs.md
  4
  $ grep -n '^| `N-XXX`' project.md
  259:| `N-XXX` | `005_discovery/005_needs.md` | necesidad del producto |
  ```

- 🕐 **Nota 2026-09-17 (session-closer):** el trabajo de la sesion fue mas alla del alcance literal
  del titulo — ademas de los Pasos 1 y 2 (necesidades, `D-051`), se trabajaron los Pasos 3 a 7 de
  `005_discovery` en la misma conversacion (actores en `010_actors.md`, `D-055`; interesados en
  `015_stakeholders.md`, `D-057`; hipotesis sellada en `020_hypothesis.md`, `D-058`), todo citando
  `Tarea: T-029`. El criterio literal de esta tarea (el artefacto de necesidades con su `N-XXX`) esta
  cumplido y reproduce; `010_actors.md` y `015_stakeholders.md` siguen `BORRADOR`, y la condicion de
  salida de la etapa (`_phases/005_discovery.md` §6) no se comprobo en esta sesion. Ver «Sin resolver»
  del informe de `S-015`.
- 🕐 **Nota 2026-09-17 (`F-019`, `D-059`):** la cifra `4` que publica el bloque de arriba **no es la que
  devuelve su orden**: son `5`. La quinta coincidencia es el ejemplo de ficha que trae la seccion «Guia
  de llenado» de la plantilla, que sigue en el archivo porque el artefacto esta `BORRADOR` y esa seccion
  se borra al cerrarlo. El enunciado del criterio se cumple igual: las necesidades reales son cuatro
  (`N-001` a `N-004`, lineas 56 a 101). Lo publicado arriba no se reescribe; la salida correcta es esta,
  anclada a `e18bf5b`:

  ```
  $ git show e18bf5b:005_discovery/005_needs.md | grep -c "^### N-0"
  5
  $ git show e18bf5b:005_discovery/005_needs.md | grep -n "^### N-0"
  56:### N-001 · Combinacion en maximo un minuto
  71:### N-002 · Saber por que entra cada numero
  86:### N-003 · Saber cuantos numeros acerte
  101:### N-004 · Saber con que acumulado se juega
  185:### N-001 · Pedir recogida sin llamar
  $ git show e18bf5b:005_discovery/005_needs.md | grep -n "Guia de llenado"
  145:- [ ] La seccion «Guia de llenado» de abajo **esta borrada**.
  152:grep -n "Guia de llenado" 005_discovery/005_needs.md   # debe no devolver nada
  162:## Guia de llenado — ⚠️ BORRAR esta seccion al cerrar el artefacto
  ```

### T-030 - Publicar por nota la orden sin filtro que D-041 cita
| Campo | Valor |
|---|---|
| Estado | No implementada |
| Importancia | Baja |
| Urgencia | No bloqueante |
| Etapa | 005_discovery |
| Origen | report_auditor |
| Sesion | S-014 |

- **Que:** `F-016`. Nota fechada en `D-041` que publica, anclada, la orden del Paso 7d **sin** el filtro
  de entradas nuevas sobre los commits de sesion, con su salida, que respalda «salta en `079b0a4`…». La
  frase publicada no se reescribe. Segun `D-046`.
- **Por que:** un resultado sin su orden no es reproducible.
- **Criterio de cierre:** la nota existe en `D-041` con la orden y su salida; se escribe al hacerla.

### T-031 - Corregir por nota la cifra de la NOTA DE CIERRE de S-013
| Campo | Valor |
|---|---|
| Estado | No implementada |
| Importancia | Baja |
| Urgencia | No bloqueante |
| Etapa | 005_discovery |
| Origen | report_auditor |
| Sesion | S-014 |

- **Que:** `F-017`. Nota fechada en `_audit/S-013.md`, debajo de la linea que dice «dieciseis lineas»,
  con la cifra que publica el bloque (17) y la orden que la cuenta. Segun `D-046`.
- **Por que:** la cifra contradice el bloque que tiene encima.
- **Criterio de cierre:** la nota existe con la orden y su salida; se escribe al hacerla.

### T-032 - Limitar las skills que puede invocar el agente de cierre
| Campo | Valor |
|---|---|
| Estado | No implementada |
| Importancia | Alta |
| Urgencia | No bloqueante |
| Etapa | 005_discovery |
| Origen | usuario |
| Sesion | S-014 |

- **Que:** hook `PreToolUse` en la cabecera de `session-closer` que solo deja invocar `protocol-close`,
  con su script y su test en `.claude/hooks/`. Segun `D-048`.
- **Por que:** el cierre ejecuto dos veces `protocol-audit` sobre su propia sesion (`D-038`, `D-047`).
- **Criterio de cierre:** el de `D-048`; y `A-006` confirmado tras reiniciar Claude Code.
- 🕐 **Nota 2026-09-17 (session-closer):** `D-050` cambia el como se verifica esta tarea: en vez de
  esperar un reinicio real, `A-007` prueba con la sonda `hook-probe` los dos casos (skill ajena
  bloqueada, `protocol-close` cargando) dentro de un agente con la cabecera literal de
  `session-closer`, y queda `Confirmado`. El criterio **literal** de arriba («tras reiniciar Claude
  Code») sigue sin cumplirse — no hubo reinicio — asi que esta tarea sigue `No implementada`. Si
  `D-050` se toma como reemplazo valido del criterio, hace falta que `manager` lo escriba asi en el
  criterio de cierre; no lo hace este cierre por si solo. Ver «Sin resolver» del informe de `S-015`.

### T-033 - Publicar por nota las ordenes del Paso 1b y del barrido que D-045 resume
| Campo | Valor |
|---|---|
| Estado | No implementada |
| Importancia | Baja |
| Urgencia | No bloqueante |
| Etapa | 005_discovery |
| Origen | report_auditor |
| Sesion | S-015 |

- **Que:** `F-018`. Nota fechada en `D-045` que publica, ancladas a `2063f09` y `1bec59a`, la orden del
  Paso 1b sobre el commit del esqueleto y la del barrido del Paso 1 despues de promover, con sus
  salidas. Lo publicado no se reescribe. Segun `D-049`.
- **Por que:** un resultado sin su orden no es reproducible.
- **Criterio de cierre:** el de `D-049`.

### T-034 - Corregir por nota la cifra del criterio de cierre de T-029
| Campo | Valor |
|---|---|
| Estado | Implementada |
| Importancia | Baja |
| Urgencia | No bloqueante |
| Etapa | 005_discovery |
| Origen | report_auditor |
| Sesion | S-016 |

- **Que:** `F-019`. Nota fechada en `T-029` que publica, anclada a `e18bf5b`, la salida real de
  `grep -c "^### N-0" 005_discovery/005_needs.md` (`5`) y de donde sale la quinta coincidencia. La cifra
  publicada no se reescribe. Segun `D-059`.
- **Por que:** el registro publica una salida que su propia orden no devuelve, y es la evidencia que
  cierra una tarea `Alta`/`Bloqueante`.
- **Criterio de cierre:** el de `D-059`.

### T-035 - Anclar por nota la cifra del barrido del Paso 1 de protocol-harvest en D-062
| Campo | Valor |
|---|---|
| Estado | No implementada |
| Importancia | Baja |
| Urgencia | No bloqueante |
| Etapa | 005_discovery |
| Origen | session-closer |
| Sesion | S-016 |

- **Que:** el Paso 2d de `protocol-close`, al correr sobre esta sesion, encontro que el bloque de
  `D-062` con la orden `grep -E '^\| \[L-' _persistence/lessons.md | grep '005_discovery' | grep -c
  'Sin evaluar'` publica `8`, y esa orden reejecutada sobre el commit de esta sesion (que ya trae
  `lessons.md` con las ocho lecciones evaluadas) devuelve `1` — el `L-016` que nace en esta misma
  sesion y queda `Sin evaluar`. El bloque documenta el barrido inicial del Paso 1 de
  `protocol-harvest`, antes de que este cierre anadiera `L-016`; no esta anclado a un commit ni
  fechado como «al momento de escribir esta entrada». `decisions.md` no es un archivo que este
  protocolo pueda editar.
- **Por que:** un resultado sin ancla ni fecha explicita dentro de una entrada que si mide algo
  reproducible deja de poder contrastarse en cuanto el arbol cambia, que es exactamente lo que
  paso en esta misma sesion.
- **Criterio de cierre:** `manager` ancla la orden al commit anterior a esta sesion, o la marca
  explicitamente como «al momento de escribir esta entrada», por nota fechada en `D-062`.

### T-036 - Corregir la cifra de condiciones de salida de 005_discovery en la plantilla, el reparto y el artefacto
| Campo | Valor |
|---|---|
| Estado | Implementada |
| Importancia | Baja |
| Urgencia | No bloqueante |
| Etapa | 005_discovery |
| Origen | report_auditor |
| Sesion | la de esta jornada |

- **Que:** `F-020` (`Baja`/`No bloqueante`). La frase «es una de las **seis** condiciones de salida de
  la etapa» donde `_phases/005_discovery.md` §6 enumera **siete**. Aceptado y hecho: la plantilla y la
  cifra del reparto corregidas a `siete`, la septima fila anadida a la tabla del reparto, y el artefacto
  `CERRADO` con nota fechada en vez de reescritura. El reparto de la decision esta en `D-064`.
- **Por que:** dos de los tres sitios viven en `_templates/` y `_workflow/`, que existen para copiarse
  a otro proyecto: una instruccion falsa ahi no se queda quieta, arrastra. Y a la tabla del reparto le
  faltaba **la fila de la casilla de la cosecha**, que es la que `CLAUDE.md` declara no delegable.
- **Criterio de cierre:** el de `D-064`.

### T-037 - Anclar o fechar dos ordenes del Contexto de D-064 que ya no reproducen
| Campo | Valor |
|---|---|
| Estado | No implementada |
| Importancia | Baja |
| Urgencia | No bloqueante |
| Etapa | 005_discovery |
| Origen | session-closer |
| Sesion | la de esta jornada |

- **Que:** el Paso 2d de `protocol-close` detecto dos ordenes en el bloque «Contexto» de `D-064` —no
  en su «Criterio de cierre», que si esta anclado— que no llevan ancla y hoy ya no reproducen, porque
  documentan el estado **anterior** a la correccion que la propia decision aplico en el mismo commit:

  - Archivo: `_persistence/decisions.md`.
  - Orden literal: `grep -rn "seis condiciones de salida\|seis casillas\|Cuatro de las seis"
    005_discovery/ _templates/005_discovery/ _workflow/005_discovery.md`.
    Publica 3 lineas (incluye `_templates/005_discovery/015_stakeholders.md:101`); reejecutada hoy
    sobre el arbol de trabajo devuelve 2 lineas, porque `D-064` ya corrigio esa plantilla en el mismo
    commit.
  - Orden literal: `sed -n '/^## 5\./,/^## 6\./p' _workflow/005_discovery.md | grep -c '^| '`.
    Publica `7` («1 cabecera + 6 filas de datos»); reejecutada hoy devuelve `8`, porque `D-064` anadio
    la septima fila en el mismo commit.
- **Por que:** `_persistence/decisions.md` no es un archivo que `session-closer` pueda editar fuera del
  anclaje mecanico del Paso 7c-bis, y ese paso solo toca bloques «Criterio de cierre»: este defecto
  vive en «Contexto», asi que no lo puede corregir este cierre.
- **Criterio de cierre:** `manager` ancla las dos ordenes al commit anterior a esta sesion (`205b1f2`,
  el estado que realmente describen) o las marca explicitamente como «antes de la correccion de esta
  misma decision», por nota fechada en `D-064`.

### T-042 - Anclar o fechar seis ordenes de Contexto en D-068/D-069/D-070/D-071/D-072 que ya no reproducen
| Campo | Valor |
|---|---|
| Estado | No implementada |
| Importancia | Baja |
| Urgencia | No bloqueante |
| Etapa | 005_discovery |
| Origen | session-closer |
| Sesion | la de esta jornada |

- **Que:** el Paso 2d de `protocol-close` detecto seis ordenes en bloques «Contexto» de las decisiones
  nacidas hoy —ninguna en un «Criterio de cierre»— que no llevan ancla y hoy ya no reproducen, porque
  documentan el estado **anterior** a la correccion que la propia decision aplico en el mismo commit.
  Archivo en todos los casos: `_persistence/decisions.md`.

  - **D-068:** `grep -n '(#s-017' _persistence/progress.md | grep -oE 'l-018-+d-063'`. Publica
    `l-018-d-063`; reejecutada hoy da `l-018--d-063`, porque `D-068` ya corrigio el ancla en el mismo
    commit (dos guiones, no uno).
  - **D-068:** `node .claude/checks/anchors.js _persistence/*.md _audit/*.md`. Publica la lista de seis
    anclas rotas y `total anclas rotas: 6`; reejecutada hoy da `total anclas rotas: 0`, porque `D-068`
    ya corrigio las seis en el mismo commit.
  - **D-068:** `node slug.mjs '...'` y `node validate2.mjs ...`. Los dos scripts eran deliberadamente
    temporales (asi lo dice la propia decision, para no anadir una dependencia al repositorio) y no
    quedaron en el arbol: no reproducibles por construccion, no por un desfase.
  - **D-069:** `grep -E '^\| \[F-020\]' _audit/findings.md | awk -F'|' '{print $(NF-1)}'`. Publica
    ` Implementado`; reejecutada hoy da ` \`T-036\` y \`D-064\` `, porque `D-069` anadio la columna
    `Registrado en` en el mismo commit y desplazo la penultima columna.
  - **D-069:** `grep -A7 '^### F-003' _audit/findings.md | grep -E '^\| (Estado|Cerrado en) \|'`.
    Publica dos lineas (`Estado` y `Cerrado en`); reejecutada hoy da solo `Estado`, porque la columna
    `Registrado en` que `D-069` anadio a la ficha de `F-003` empujo la linea `Cerrado en` fuera de la
    ventana de 7 lineas.
  - **D-070:** `grep -cE '^\|.*\| Sin confirmar \|' _persistence/techdebt.md`. Publica `1`; reejecutada
    hoy da `0`, porque `D-070` ya corrigio `DT-005` en el mismo commit.
  - **D-071:** `grep -c "Sin resolver" .claude/skills/protocol-close/SKILL.md`. Publica `16`;
    reejecutada hoy da `17`, porque la propia `D-071` anadio la prohibicion nueva al 7c-bis (que
    menciona «Sin resolver» una vez) en el mismo commit.
  - **D-072:** `grep -E '^\| \[L-' _persistence/lessons.md | grep '005_discovery' | grep -c 'Sin evaluar'`.
    Publica `2`; reejecutada hoy da `0`, porque `D-072` ya clasifico `L-019` y `L-020` en el mismo
    commit.
- **Por que:** `_persistence/decisions.md` no es un archivo que `session-closer` pueda editar fuera del
  anclaje mecanico del Paso 7c-bis, y ese paso solo toca bloques «Criterio de cierre»: los ocho casos
  de arriba viven en «Contexto», asi que no los puede corregir este cierre.
- **Criterio de cierre:** `manager` ancla cada orden reproducible al commit anterior a esta sesion
  (`31ece08`, el estado que realmente describen) o las marca explicitamente como «antes de la
  correccion de esta misma decision», por nota fechada en la entrada correspondiente. Las dos ordenes
  de scripts temporales de `D-068` se dejan como estan, declaradas no reproducibles por naturaleza.

### T-038 - Reparar las seis anclas rotas del indice de progress.md y poner el control que las detecta
| Campo | Valor |
|---|---|
| Estado | Implementada |
| Importancia | Baja |
| Urgencia | No bloqueante |
| Etapa | 005_discovery |
| Origen | report_auditor |
| Sesion | la de esta jornada |

- **Que:** `F-021` (`Baja`/`No bloqueante`). El hallazgo cita **un** ancla rota; el barrido del archivo
  entero devolvio **seis**. Aceptado y hecho: las seis corregidas derivando cada ancla de su titulo, y
  anadido el **Paso 2b-bis** a `protocol-close`, que corre `.claude/checks/anchors.js` sobre
  `_persistence/` y `_audit/`. El control lleva su test (`node --test`, 10 casos). El reparto de la
  decision, las dos lecturas posibles del slug y como se resolvieron estan en `D-068`.
- **Por que:** el mismo defecto ya se cerro una vez como `Implementado` corrigiendo solo el caso citado,
  y reaparecio seis veces sin que nadie lo viera. El indice de `progress.md` es por donde entra el
  arranque de cada jornada, y un ancla rota no avisa: lleva a la cabecera del archivo y quien lo usa
  supone que la entrada no existe.

### T-039 - Dar al indice de findings.md una columna propia para la cita de la T-XXX o la D-XXX
| Campo | Valor |
|---|---|
| Estado | Implementada |
| Importancia | Baja |
| Urgencia | No bloqueante |
| Etapa | 005_discovery |
| Origen | report_auditor |
| Sesion | la de esta jornada |

- **Que:** `F-022` (`Baja`/`No bloqueante`). El sintoma que el hallazgo cita **ya no reproduce** contra
  `HEAD` —la auditoria que lo abrio cerro esa fila al pasarla a `Implementado`—, pero la causa seguia
  entera. Aceptado y hecho: el indice gana la columna `Registrado en`, rellenada derivandola del campo
  homonimo de cada ficha (22 filas); la convencion la declara y zanja que `Estado` lleva solo un valor
  de la lista; y el control del Paso 2b se corrigio para leer la columna correcta. El reparto esta en
  `D-069`, y la eleccion entre las dos formas posibles la hizo el usuario.
- **Por que:** dos reglas del proyecto se contradecian —una pedia citar en la fila, la otra cerraba los
  valores de `Estado`—, asi que el control de cierre avisaba en **cada** hallazgo aceptado. Un control
  que siempre avisa deja de leerse, y entonces es peor que no tenerlo: sigue pareciendo un detector.

### T-040 - Poner dueno a la confirmacion de DT-005
| Campo | Valor |
|---|---|
| Estado | Implementada |
| Importancia | Baja |
| Urgencia | No bloqueante |
| Etapa | 005_discovery |
| Origen | report_auditor |
| Sesion | la de esta jornada |

- **Que:** `F-023` (`Baja`/`No bloqueante`). `DT-005` llevaba `Confirmacion: Sin confirmar`, valor que
  la convencion de `techdebt.md` no declara. Aceptado y hecho: pasa a
  `Propuesta (pendiente del usuario)` en la fila del indice y en la ficha, en la misma pasada. El
  reparto esta en `D-070`; el usuario confirmo ser el dueno de esa decision.
- **Por que:** la convencion no solo cierra la lista, prohibe la salida sin dueno — una propuesta sin
  dueno no espera, se queda propuesta para siempre. Y `DT-005` afecta a una cifra que vive en dos archivos
  de reparto, asi que quedarse ahi tiene coste.

### T-041 - Corregir por nota las dos remisiones a «Sin resolver» y prohibirlas hacia adelante
| Campo | Valor |
|---|---|
| Estado | Implementada |
| Importancia | Baja |
| Urgencia | No bloqueante |
| Etapa | 005_discovery |
| Origen | report_auditor |
| Sesion | la de esta jornada |

- **Que:** `F-024` (`Baja`/`No bloqueante`). Dos entradas de `decisions.md` remiten a una seccion «Sin
  resolver» que solo existe en el reporte de pantalla del cierre y no persiste en el commit. Aceptado en
  su parte comprobable y hecho: nota fechada en las dos, sin reescribir ninguna linea, y prohibicion
  explicita en el 7c-bis de `protocol-close`. **Rechazada** la parte del hallazgo que atribuia el
  defecto a una orden de la skill: la skill no lo mandaba, y la evidencia esta en `D-071`.
- **Por que:** `decisions.md` se lee dentro de meses, y una de las dos entradas es justo la que declara
  una orden que no reproduce: el puntero al detalle no llevaba a ninguna parte. El contenido nunca se
  perdio —las dos salidas estan en la propia entrada—, asi que lo que fallaba era solo el puntero.
