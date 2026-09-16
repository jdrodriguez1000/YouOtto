# decisions.md

> 📄 **Se copia a `_persistence/decisions.md`.** Se copia entero, con el indice vacio y la plantilla
> de entrada intacta.
>
> ⛔ **Lo que se borra al copiar son los ejemplos, no las convenciones.** Las convenciones son las
> reglas del archivo, y `CLAUDE.md` manda leerlas antes de escribir en el.
>
> 🚨 **Este archivo lo escribe `manager`, nunca el cierre.** El `session-closer` arranca en frio y
> solo ve el `git diff`; un porque nace en la conversacion y no aparece en ningun diff. Si se llega
> al cierre sin haberlo escrito, esa informacion **ya se perdio**.

---

> Registro de las **decisiones tomadas** en el proyecto.
> Cada decision tiene codigo `D-XXX` y se considera vigente hasta que otra la revoque.

---

## Indice

| Codigo | Decision | Fecha | Estado |
|---|---|---|---|
| [D-001](#d-001---etapas-declaradas-del-proyecto) | Etapas declaradas del proyecto | 2026-09-15 | Vigente |
| [D-002](#d-002---carpetas-de-entregables-declaradas-al-arrancar-cada-etapa) | Carpetas de entregables declaradas al arrancar cada etapa | 2026-09-15 | Vigente |
| [D-003](#d-003---adopcion-del-gate-1-y-del-gate-2) | Adopcion del Gate 1 y del Gate 2 | 2026-09-15 | Vigente |
| [D-004](#d-004---se-conserva-el-historial-heredado-del-esqueleto) | Se conserva el historial heredado del esqueleto | 2026-09-15 | Vigente |
| [D-005](#d-005---consulta-de-arranque-de-las-lecciones-globales) | Consulta de arranque de las lecciones globales | 2026-09-15 | Vigente |
| [D-006](#d-006---se-escribe-el-inventario-de-acciones-irreversibles) | Se escribe el inventario de acciones irreversibles | 2026-09-15 | Vigente |
| [D-007](#d-007---dueno-y-sitio-de-evaluacion-observabilidad-y-seguridad) | Dueno y sitio de evaluacion, observabilidad y seguridad | 2026-09-15 | Vigente |
| [D-008](#d-008---los-barridos-de-anclaje-de-protocol-close-admiten-ordenes-indentadas) | Los barridos de anclaje de protocol-close admiten ordenes indentadas | 2026-09-15 | Vigente |
| [D-009](#d-009---se-corrige-la-cabecera-yaml-de-los-agentes-de-gate-y-de-acta) | Se corrige la cabecera YAML de los agentes de Gate y de acta | 2026-09-15 | Vigente |
| [D-010](#d-010---las-cercas-de-bloque-de-los-controles-de-las-skills-admiten-sangria) | Las cercas de bloque de los controles de las skills admiten sangria | 2026-09-16 | Vigente |
| [D-011](#d-011---firmas-del-gate-1-y-del-gate-2) | Firmas del Gate 1 y del Gate 2 | 2026-09-16 | Vigente |
| [D-012](#d-012---cosecha-de-lecciones-de-000_preproject) | Cosecha de lecciones de 000_preproject | 2026-09-16 | Vigente |
| [D-013](#d-013---el-anclaje-de-criterios-de-cierre-compara-la-salida-anclada-con-la-publicada) | El anclaje de criterios de cierre compara la salida anclada con la publicada | 2026-09-16 | Vigente |
| [D-014](#d-014---cosecha-de-l-007) | Cosecha de L-007 | 2026-09-16 | Vigente |
| [D-015](#d-015---etapa-000_preproject-cerrada) | Etapa 000_preproject cerrada | 2026-09-16 | Revocada en parte por D-020 |
| [D-016](#d-016---promocion-al-esqueleto-de-los-seis-archivos-de-dt-001) | Promocion al esqueleto de los seis archivos de DT-001 | 2026-09-16 | Vigente |
| [D-017](#d-017---el-control-de-salida-reproducida-declara-que-no-reejecuta) | El CONTROL DE SALIDA REPRODUCIDA declara que no reejecuta | 2026-09-16 | Vigente |
| [D-018](#d-018---no-se-corrige-el-recuento-de-la-nota-de-cierre-de-s-004) | No se corrige el recuento de la NOTA DE CIERRE de S-004 | 2026-09-16 | Vigente |
| [D-019](#d-019---el-anclaje-traduce-las-ordenes-git-diff---cached-del-informe) | El anclaje traduce las ordenes git diff --cached del informe | 2026-09-16 | Vigente |
| [D-020](#d-020---la-firma-del-patrocinador-se-escribe-en-el-acta-de-cierre) | La firma del patrocinador se escribe en el acta de cierre | 2026-09-16 | Vigente |
| [D-021](#d-021---la-nota-de-cierre-publica-la-forma-anclada-de-la-orden-del-paso-2d) | La NOTA DE CIERRE publica la forma anclada de la orden del Paso 2d | 2026-09-16 | Vigente |
| [D-022](#d-022---como-se-implementan-t-008-t-009-y-t-011-en-protocol-close) | Como se implementan T-008, T-009 y T-011 en protocol-close | 2026-09-16 | Revocada en parte por D-023 |
| [D-023](#d-023---el-control-sin-anclar-del-7c-quater-solo-mira-lineas-de-orden) | El control SIN ANCLAR del 7c-quater solo mira lineas de orden | 2026-09-16 | Vigente |
| [D-024](#d-024---estado-propio-para-la-decision-revocada-en-parte) | Estado propio para la decision revocada en parte | 2026-09-16 | Vigente |

---

## Convenciones

| Campo | Valores posibles |
|---|---|
| Codigo | `D-XXX`, correlativo, no se reutiliza |
| Estado | `Vigente` / `Revocada en parte por D-XXX` / `Revocada por D-XXX` |
| Origen | `usuario` / `manager` / `report_auditor` |

🚨 **Una decision no se borra ni se reescribe: se revoca.** La entrada antigua se queda con
`Revocada por D-XXX` en su estado, y la nueva explica que cambio y por que. El historial de por que
se penso distinto en su momento es parte del registro.

🚨 **Si la nueva solo revoca una parte, el estado lo dice: `Revocada en parte por D-XXX`.** La
antigua sigue rigiendo en lo demas, y la nueva nombra **que punto** revoca. Escribir `Revocada por`
a secas hace que quien lee solo el indice entienda revocado lo que sigue en pie — y el indice es lo
que lee el arranque. Si mas tarde otra la revoca entera, el estado pasa a `Revocada por D-XXX`.

🚨 **Toda decision que verifica algo antes de aceptarlo lleva comando y salida cruda.** No se
escribe «se comprobo que…» de memoria: va el comando ejecutado y su salida literal.

🚨 **Y eso incluye el bloque «Criterio de cierre», que conviene que tenga forma fijada.** El
criterio se escribe en tres partes, siempre las tres:

1. **el enunciado** — que tiene que ser cierto para dar la decision por cerrada;
2. **la orden que lo comprueba, anclada al commit** (`git show <hash>:<archivo> | …`), no al arbol
   de trabajo, que cambia debajo;
3. **la salida que devolvio**, literal.

⛔ **Un criterio de cierre con la orden y sin la salida no es evidencia**: obliga a rehacer el
barrido a quien lo lea, que es exactamente el coste que la regla existe para evitar. Y un criterio
sin anclar reproduce el dia que se escribe y deja de reproducir en cuanto el archivo crece.

🚨 **El ancla no es del bloque «Criterio de cierre»: es de toda orden que se escriba en este
archivo.** Esta regla nacio de un defecto real: una decision publico su bloque de verificacion
previa —la que `CLAUDE.md` exige antes de aceptar un hallazgo— con dos ordenes sobre `HEAD`, y hoy
devuelven cifras distintas de las que publican. La conclusion sigue siendo cierta; lo que se perdio
es la prueba, que es lo unico que hacia auditable la aceptacion.

🔑 **Y aqui no hay huevo-y-gallina que resolver, a diferencia del criterio de cierre.** Una
verificacion previa se corre sobre un commit que **ya existe** —el `HEAD` de ese momento—, asi que
el hash literal se puede escribir en el acto. **Es el unico bloque que el Paso 7c-bis del cierre no
necesita arreglar despues, porque nace bien.**

⛔ **`HEAD` no se escribe nunca dentro de una orden publicada.** `HEAD` es un puntero que se mueve
con cada commit: la orden que lo usa contesta una pregunta distinta cada dia, y la salida pegada
debajo deja de ser su salida. Se resuelve con `git rev-parse --short HEAD` **antes** de escribirla,
y lo que va al archivo es el hash.

⚠️ **Lo que si se escribe es que ese hash era `HEAD`**, con las dos cosas nombradas por lo que son:
«verificado contra `HEAD` (`<hash>`)». Un commit no es `HEAD` porque lo diga una frase — lo es
porque lo era en ese momento, y confundirlo con el commit que una auditoria juzgaba ya abrio un
hallazgo una vez.

⚠️ **Rige hacia adelante.** Las ordenes ya publicadas con `HEAD` **no se reescriben**: se corrigen
por nota fechada, republicando la misma orden anclada con la salida que devuelve.

⚠️ **Y no aplica a ordenes que preguntan por lo que el commit no contiene** —`git status`, `date`,
el arbol de trabajo—. Esas se dejan como estan; el criterio de que es anclable y que no lo detalla
el Paso 7c-bis de `protocol-close`, y es el mismo.

⚠️ **El titulo nombra la decision, no su consecuencia**, y no cambia despues.

🚨 **El indice se escribe a mano, sin generador.** Cada fila enlaza por ancla a su decision.

---

## Decisiones

<!--
Plantilla:

### D-XXX - Titulo
| Campo | Valor |
|---|---|
| Fecha | AAAA-MM-DD |
| Estado | Vigente |
| Origen | |

- **Contexto:** que situacion obligo a decidir.
- **Decision:** que se decidio, en una frase.
- **Por que:** que problema resuelve, y que se protege con ello.
- **Alternativas descartadas:** que otros caminos habia y por que no. Al `git diff` solo llega el
  ganador; si las alternativas no se escriben aqui, no se escriben en ningun sitio.
-->

### D-001 - Etapas declaradas del proyecto
| Campo | Valor |
|---|---|
| Fecha | 2026-09-15 |
| Estado | Vigente |
| Origen | usuario |

- **Contexto:** `project.md` llego del esqueleto con la fila «Etapas declaradas» en blanco
  (`<etapa>`, `<etapa>`). Sin etapas declaradas, el control de etapas del cierre no puede
  ejecutarse. El metodo trae siete archivos de etapa en `_phases/`, verificado contra `HEAD`
  (`707d572`):

  ```
  $ git ls-tree --name-only 707d572 _phases/
  _phases/000_preproject.md
  _phases/005_discovery.md
  _phases/010_prototype.md
  _phases/020_baseline.md
  _phases/025_wslt.md
  _phases/030_growth.md
  _phases/040_evol.md
  ```

- **Decision:** el proyecto adopta las siete etapas del metodo: `000_preproject`, `005_discovery`,
  `010_prototype`, `020_baseline`, `025_wslt`, `030_growth` y `040_evol`.
- **Por que:** el usuario zanjo que el proyecto recorre el ciclo completo. Declararlas en
  `project.md` deja al control de etapas del cierre con valores contra los que comprobar.
- **Alternativas descartadas:** declarar solo las primeras (`000_preproject` y `005_discovery`) e
  ir anadiendo las siguientes al llegar a ellas, cada una con su `D-XXX`. Lo propuso `manager` como
  opcion habitual; el usuario eligio declarar el ciclo entero desde el inicio.
- ⚠️ **Lo que esta decision NO adopta:** ni los Gates 1 y 2 (cada uno exige su propia `D-XXX`) ni
  las carpetas de entregables de cada etapa en «Carpetas propias», que siguen pendientes.

### D-002 - Carpetas de entregables declaradas al arrancar cada etapa
| Campo | Valor |
|---|---|
| Fecha | 2026-09-15 |
| Estado | Vigente |
| Origen | usuario |

- **Contexto:** con las siete etapas declaradas (`D-001`), `project.md` pedia una fila de
  entregables en «Rutas» y otra en «Carpetas propias» por cada etapa que produce artefactos.
  `000_preproject` no tiene carpeta propia: sus plantillas se copian a `_persistence/` y `_audit/`.
  Las otras seis si la tienen, y ninguna existe todavia en el arbol.
- **Decision:** la carpeta de entregables de cada etapa se declara en `project.md` cuando esa etapa
  arranca, no todas de golpe. Hoy se declara solo `005_discovery/`, la siguiente etapa, por
  adelantado.
- **Por que:** el Paso 2c del cierre contrasta «Carpetas propias» contra el arbol en las dos
  direcciones. Cada fila declarada por adelantado sale senalada hasta que su carpeta exista; una sola
  fila pendiente se lee, seis se acaban ignorando. `005_discovery/` se declara ya porque su etapa
  esta escrita en `_phases/` y su contenido esta enumerado en `_templates/005_discovery/`, que es la
  condicion que `project.md` pide a una declaracion anticipada.
- **Alternativas descartadas:** declarar las seis carpetas desde ya (`005_discovery/` a
  `040_evol/`). Descartada porque dejaba seis diferencias abiertas en el control del cierre durante
  etapas enteras.
- ⚠️ **Diferencia esperada en el cierre:** hasta que se escriba el primer artefacto de
  `005_discovery`, el Paso 2c senalara la fila `005_discovery/` sin carpeta. Su razon es esta
  decision; si la diferencia no desaparece al arrancar la etapa, el control esta senalando algo real.

### D-003 - Adopcion del Gate 1 y del Gate 2
| Campo | Valor |
|---|---|
| Fecha | 2026-09-15 |
| Estado | Vigente |
| Origen | usuario |

- **Contexto:** declarar las etapas (`D-001`) no adopta los Gates; cada uno exige su `D-XXX`. Sus
  agentes (`gate1_auditor`, `gate2_auditor`) y skills (`protocol-gate1`, `protocol-gate2`) ya
  existen en `.claude/`, montados por el esqueleto.
- **Decision:** el proyecto adopta el Gate 1 (¿vale la pena construir el MVP?), que juzga la
  evidencia de `010_prototype`, y el Gate 2 (¿vale la pena seguir invirtiendo?), que juzga la de
  `030_growth`.
- **Por que:** el ciclo completo adoptado en `D-001` incluye los dos puntos donde se decide seguir o
  detener la inversion. Adoptarlos desde el inicio fija que esas etapas no se cierran sin dictamen
  tecnico y decision del patrocinador.
- **Alternativas descartadas:** dejar los dos sin adoptar hasta acercarse al cierre de
  `010_prototype`, o adoptar solo el Gate 1. El usuario eligio adoptar los dos.
- ⚠️ **Lo que esta decision NO fija:** la asignacion de las firmas de cada Gate, que
  `_phases/010_prototype.md` exige registrar con su propia `D-XXX` antes de lanzarlo.

### D-004 - Se conserva el historial heredado del esqueleto
| Campo | Valor |
|---|---|
| Fecha | 2026-09-15 |
| Estado | Vigente |
| Origen | usuario |

- **Contexto:** el repositorio se creo clonando el esqueleto y cambiando el remoto, sin borrar su
  `.git`, en contra de lo que pide `README.md` (linea 47). Por eso el historial de este repositorio
  son los siete commits del esqueleto, ya subidos al remoto del proyecto. Verificado contra `HEAD`
  (`707d572`); `git log` y `git ls-remote` preguntan por el repositorio, no por un commit, y se dejan
  sin anclar:

  ```
  $ git log --format='%h %ad %an | %s' --date=short
  707d572 2026-09-14 Triple S | Promocion del andamiaje desde RaidomAI_App (origen d2ee2aa)
  bf8c56e 2026-09-14 Triple S | Publica la guia de arranque como README.md (origen a3bb32e)
  afeedf4 2026-09-14 Triple S | Promocion del andamiaje desde RaidomAI_App (origen a3bb32e)
  c7d0a87 2026-09-14 Triple S | Regenera las copias de la raiz desde sus plantillas (origen 841dc53)
  841dc53 2026-09-14 Triple S | Promocion del andamiaje desde RaidomAI_App (origen db0e613)
  1748f0a 2026-09-11 Triple S | Sincroniza las seis areas agnosticas con el proyecto de origen
  fa7da56 2026-09-11 Triple S | Estado de partida del esqueleto, tal como estaba antes de sincronizar

  $ git ls-remote origin
  707d572bb037d9c2c164da7cb356d2848b7b2180	HEAD
  707d572bb037d9c2c164da7cb356d2848b7b2180	refs/heads/main
  ```

- **Decision:** se conserva el historial heredado tal como esta; no se rehace ni se fuerza el push.
- **Por que:** rehacerlo exigia reemplazar `main` en el remoto con un push forzado, que no se puede
  deshacer, y no recuperaba ningun archivo: el arbol de `HEAD` es identico al del commit de partida.
  Lo que aporta ese historial —de que version se partio— ya esta en `project.md`, y los commits
  siguen integros en el repositorio del esqueleto.
- **Alternativas descartadas:** borrar `.git`, reiniciar el repositorio con un commit inicial y
  subirlo con push forzado. Lo pidio el usuario en principio y lo desestimo tras ver lo que se perdia.
- ⚠️ **Consecuencia que queda:** `git log` de este repositorio muestra commits que no ocurrieron en
  el proyecto. Los commits anteriores a la primera sesion propia son del esqueleto, no trabajo de
  este proyecto. Como consecuencia buena, `707d572` sigue resolviendo aqui, y la orden de `D-001`
  sigue siendo reproducible.

### D-005 - Consulta de arranque de las lecciones globales
| Campo | Valor |
|---|---|
| Fecha | 2026-09-15 |
| Estado | Vigente |
| Origen | manager |

- **Contexto:** la casilla 9 de salida de `000_preproject` exige consultar, **antes de definir
  alcance**, los bloques de decisiones/arquitectura y de corte del trabajo del archivo de lecciones
  globales, anotando lo que produjeron con el codigo de cada leccion y declarando NO MIRADOS los
  bloques no recorridos. El archivo y su repositorio los declara `project.md`.
- **Decision:** se consultan los bloques **D** (`LG-38`–`LG-45`) y **E** (`LG-46`–`LG-54`) sobre la
  version `5a32165` del archivo, entrando por su indice y sin leerlo entero. Lo que producen:

  | Leccion | Que produce en este proyecto |
  |---|---|
  | `LG-38` | **Cambio.** `CLAUDE.md` remite a un inventario de acciones irreversibles en `constraints.md` que **no existe**. Se propone escribirlo antes de salir de la etapa; pendiente de aprobacion del usuario |
  | `LG-54` | **Cambio.** Evaluacion, observabilidad y seguridad necesitan **dueño y sitio** declarados desde ya, sin construirlas. Pendiente de decision del usuario |
  | `LG-39` | Sin cambio ahora. Las decisiones de una sola via (modelo de datos, identidad, runtime…) se toman al abrir `020_baseline`, no en esta etapa, que no construye producto |
  | `LG-40`, `LG-41` | Sin cambio ahora. Aplican al contrastar la arquitectura contra el esqueleto de `025_wslt` |
  | `LG-42` | Sin cambio: `decisions.md` ya registra el porque, fechado, y revoca en vez de reescribir |
  | `LG-43`, `LG-44`, `LG-45` | Sin cambio ahora. Aplican al escribir codigo y fijar limites del producto |
  | `LG-46`–`LG-53` | Sin cambio: el propio bloque declara que manda el metodo del proyecto, y `_phases/` ya separa prototipo, esqueleto y slices, exige criterio de cierre y distingue tareas de supuestos con disparador |

- **Bloques NO MIRADOS:** A, B, C, F, G, H, I y J. No se recorrieron; no se declaran limpios.
- **Evidencia.** La estructura de bloques, anclada a la version consultada (el repositorio de
  lecciones estaba sin cambios locales: `git status --short` no devolvio nada):

  ```
  $ git -C "C:/Users/USUARIO/Documents/Company_TripleS/TripleS_Lessons" show 5a32165:global_lessons.md | grep -nE "^## Bloque|^\| \*\*LG-(38|54)\*\*" | cut -c1-90
  151:## Bloque A — Evidencia y verificación
  173:## Bloque B — Pruebas
  190:## Bloque C — Documentos, memoria y traspaso
  209:## Bloque D — Decisiones y arquitectura
  213:| **LG-38** | **Lo barato es lo reversible; lo caro es lo que no se deshace** | El có
  224:## Bloque E — Cómo se corta el trabajo
  239:| **LG-54** | **Evaluación, observabilidad y seguridad se declaran el día 1, cuando 
  243:## Bloque F — Medir y experimentar
  260:## Bloque G — Errores, operación y seguridad
  280:## Bloque H — Trabajar con agentes y con dos terminales
  295:## Bloque I — Solo si el proyecto usa modelos de lenguaje
  315:## Bloque J — El método y sus documentos como objeto auditable
  ```

  La ausencia del inventario de `LG-38`, verificada contra `HEAD` (`707d572`):

  ```
  $ git grep -ni "irreversible" 707d572 -- _persistence
  exit=1
  ```

- **Por que:** hacer la consulta antes de `005_discovery` deja que las lecciones cambien el rumbo
  cuando cambiarlo cuesta cero; registrarla con sus codigos es lo que permite saber despues si el
  archivo sirvio.
- **Alternativas descartadas:** leer tambien los bloques A y C, que se activan «siempre». Se dejan
  para cuando haya trabajo que verificar o documentar, porque la casilla pide D y E y el archivo
  prohibe leer de mas. Quedan declarados NO MIRADOS.

### D-006 - Se escribe el inventario de acciones irreversibles
| Campo | Valor |
|---|---|
| Fecha | 2026-09-15 |
| Estado | Vigente |
| Origen | usuario |

- **Contexto:** la consulta de `D-005` encontro que `CLAUDE.md` remite a un inventario de acciones
  irreversibles que no existia en `_persistence/`. En esta misma sesion, el push forzado para
  rehacer el historial (`D-004`) tuvo que clasificarse a criterio por esa falta.
- **Decision:** se escribe el inventario como `C-001` en `constraints.md`, con sus dos tablas, a
  partir del borrador que propuso `manager` y aprobo el usuario. Aplica `LG-38`.
- **Por que:** `LG-38` pide la lista de lo irreversible escrita antes de necesitarla. Sin ella,
  cada clasificacion es criterio y el auditor no puede contrastarla contra nada.
- **Alternativas descartadas:** seguir clasificando a criterio hasta que se repitiera alguna accion.
  Descartada porque ya se habia necesitado una vez en la primera sesion.
- ⚠️ **Una fila no estaba en el borrador aprobado:** «escribir fuera de este repositorio». La anadio
  `manager` porque `CLAUDE.md` ya pone esa accion detras de la aprobacion del usuario; no amplia lo
  que exige permiso, solo lo lista.

### D-007 - Dueno y sitio de evaluacion, observabilidad y seguridad
| Campo | Valor |
|---|---|
| Fecha | 2026-09-15 |
| Estado | Vigente |
| Origen | usuario |

- **Contexto:** `LG-54` (consultada en `D-005`) pide dar dueño y sitio a evaluacion, observabilidad
  y seguridad desde el primer dia, sin construirlas todavia.
- **Decision:**
  - **Dueño de las tres:** `manager`, con aprobacion del usuario sobre lo que declare.
  - **Sitio:** el artefacto «tres preguntas» de `020_baseline` (plantilla
    `_templates/020_baseline/040_three_questions.md`, Paso 9 de `_phases/020_baseline.md`), donde
    cada una se declara con su artefacto, y su version minima construida en `025_wslt`.
- **Por que:** el metodo ya fija ese sitio. Crear otro ahora duplicaria la declaracion en dos
  lugares. Lo que faltaba era el dueño, y que quedara escrito antes de definir alcance.
- **Alternativas descartadas:** que el dueño fuera el usuario, y declarar un sitio propio desde esta
  etapa. El usuario eligio `manager` con su aprobacion; el sitio propio se descarta por duplicar el
  artefacto del metodo.
- ⚠️ **Disparador:** el Paso 9 de `020_baseline`. Hasta entonces esta decision es solo el dueño y
  el sitio; ninguna de las tres tiene todavia su artefacto.
- ⚠️ **Seguridad pesa mas en este proyecto:** el encargo guarda «el historial de juegos registrados
  del usuario» (`_brief/client_brief.md`, linea 294), que puede ser un dato de personas (`A-001`).
  Si lo es, recogerlo exige permiso previo segun `C-001`.

### D-008 - Los barridos de anclaje de protocol-close admiten ordenes indentadas
| Campo | Valor |
|---|---|
| Fecha | 2026-09-15 |
| Estado | Vigente |
| Origen | report_auditor |

- **Contexto:** `F-001` (`_audit/R-001.md`): los patrones que localizan ordenes publicadas en el
  Paso 2d, el CENSO y el CONTROL del Paso 7c y la localizacion del 7c-bis exigen `$ ` en la primera
  columna, y este registro escribe los bloques de comando dentro de vinetas, con dos espacios. El
  cierre de `S-001` salio limpio y dejo el criterio de `T-001` con `<hash>` sin resolver.
- **Decision:** ampliar esos once patrones de `.claude/skills/protocol-close/SKILL.md` para que
  admitan sangria (`[[:space:]]*` delante de `\$ `). La eligio el usuario entre tres opciones.
- **Por que:** el control tiene que ver las ordenes como el registro las escribe de verdad. Una
  convencion de formato dejaria el control dependiendo de que nadie se equivoque, que es justo el
  fallo que abrio el hallazgo.
- **Alternativas descartadas:**
  - **Fijar por convencion que los bloques se escriben sin indentar**, sin tocar el protocolo:
    descartada porque el control seguiria ciego a la primera orden que se escriba en una vineta.
  - **Anclar solo la orden de `T-001` y dejar la causa como `DT-XXX`:** descartada porque el falso
    negativo se repetiria en cada sesion.
  - **Admitir tambien el prefijo de cita `> `:** descartada por `PI-2`. A `45e33a4` no hay ninguna
    orden citada asi en `_persistence/` ni en `_audit/` fuera del informe de sesion, que ya tiene su
    propio patron en el Paso 7c-ter. Orden y salida debajo.
- ⚠️ **Consecuencia:** `.claude/` deja de coincidir con el esqueleto de arranque hasta que se
  promueva (`protocol-promote`, con su puerta). El Paso 2f lo mostrara en cada cierre, pero no bloquea.
- **Verificacion previa**, contra `HEAD` (`45e33a4`):

  ```
  $ git show 45e33a4:_persistence/tasks.md | grep -nE '^[[:space:]]*\$ .*<hash>'
  132:  $ git show <hash>:project.md | grep -cE '<[A-Za-z]'
  $ for f in $(git ls-tree -r --name-only 45e33a4 _persistence _audit | grep -v '_audit/S-001.md'); do n=$(git show 45e33a4:"$f" | grep -cE '^[[:space:]]*> *\$ '); [ "$n" != "0" ] && echo "$f: $n"; done; echo "(fin)"
  (fin)
  ```

- **Prueba del cambio.** Se usa el commit del hallazgo: el patron antiguo no ve nada y el nuevo
  encuentra las seis ordenes indentadas, entre ellas la de `T-001`:

  ```
  $ git diff -U0 5cae773^ 5cae773 -- _persistence _audit ":(exclude)_audit/S-001.md" | grep -E '^\+\$ ' | grep -vE 'git (show|grep|log|diff) [0-9a-f]{7,40}' | wc -l
  0
  $ git diff -U0 5cae773^ 5cae773 -- _persistence _audit ":(exclude)_audit/S-001.md" | grep -E '^\+[[:space:]]*\$ ' | grep -vE 'git (show|grep|log|diff) [0-9a-f]{7,40}' | cat -n
       1	+  $ git ls-tree --name-only 707d572 _phases/
       2	+  $ git log --format='%h %ad %an | %s' --date=short
       3	+  $ git ls-remote origin
       4	+  $ git -C "C:/Users/USUARIO/Documents/Company_TripleS/TripleS_Lessons" show 5a32165:global_lessons.md | grep -nE "^## Bloque|^\| \*\*LG-(38|54)\*\*" | cut -c1-90
       5	+  $ git grep -ni "irreversible" 707d572 -- _persistence
       6	+  $ git show <hash>:project.md | grep -cE '<[A-Za-z]'
  $ git show 5cae773:_persistence/tasks.md | awk '/^### T-/{d=$2} /Criterio de cierre/{f=1} /^---$/{f=0} f&&/^\$ /{print d" | "$0}' | wc -l
  0
  $ git show 5cae773:_persistence/tasks.md | awk '/^### T-/{d=$2} /Criterio de cierre/{f=1} /^---$/{f=0} f&&/^[[:space:]]*\$ /{print d" | "$0}'
  T-001 |   $ git show <hash>:project.md | grep -cE '<[A-Za-z]'
  ```

- **Criterio de cierre:** a ese commit, la skill no conserva ninguna de las formas antiguas del
  patron (en `45e33a4` eran 9, 1 y 2) y lleva la sangria en doce lineas: los once patrones y el
  parrafo que los explica.

  ```
  $ git show e222812:.claude/skills/protocol-close/SKILL.md | grep -cF '^\+\$ '
  0
  $ git show e222812:.claude/skills/protocol-close/SKILL.md | grep -cF '^\$ .*<hash>'
  0
  $ git show e222812:.claude/skills/protocol-close/SKILL.md | grep -cF 'f&&/^\$ /'
  0
  $ git show e222812:.claude/skills/protocol-close/SKILL.md | grep -cF '[[:space:]]*\$ '
  12
  ```

📌 **Ancladas por el Paso 7c-bis al commit `e222812`.** Las cuatro reproducen lo publicado arriba.

### D-009 - Se corrige la cabecera YAML de los agentes de Gate y de acta
| Campo | Valor |
|---|---|
| Fecha | 2026-09-15 |
| Estado | Vigente |
| Origen | usuario |

- **Contexto:** `A-002` quedo refutado. `gate1_auditor`, `gate2_auditor` y `phase_exit_auditor` no
  cargan porque su `description`, sin comillas, contiene `NO decision: …`, y ese `: ` hace invalido el
  YAML de la cabecera. Orden y salida en la nota de `A-002`. El defecto viene del esqueleto de arranque.
- **Decision:** sustituir `NO decision: ` por `NO decision — ` en la `description` de los tres agentes,
  sin tocar nada mas. El usuario pidio hacerlo en esta sesion.
- **Por que:** sin esos tres agentes no se puede emitir el acta de cierre de `000_preproject` ni los
  dictamenes de los Gates adoptados en `D-003`. El cambio es de un caracter y no altera lo que dice
  la descripcion.
- **Alternativas descartadas:**
  - **Entrecomillar la `description` entera:** tambien valida el YAML, pero obliga a escapar las
    comillas dobles que ya lleva dentro («"corre el Gate 1"») y toca mas texto del necesario (`PI-3`).
  - **Dejarlo para otra sesion:** el usuario pidio corregirlo ahora.
- ⚠️ **Consecuencia:** como `D-008`, `.claude/` se aleja un poco mas del esqueleto hasta que se
  promueva. Que los agentes cargan de verdad no lo prueba el parser, sino la sesion (`A-003`).
- **Prueba del cambio.** La misma validacion, que en `45e33a4` fallaba en los tres (nota de `A-002`),
  corrida sobre el arbol de trabajo tras el cambio:

  ```
  $ for a in gate1_auditor gate2_auditor phase_exit_auditor report_auditor session-closer session-starter; do printf '%s ' $a; cat .claude/agents/$a.md | python -c "import sys,re,yaml; s=sys.stdin.read(); fm=re.match(r'^---\r?\n(.*?)\r?\n---',s,re.S).group(1); yaml.safe_load(fm); print('OK')" 2>&1 | grep -E '^(OK|yaml\.)' ; done
  gate1_auditor OK
  gate2_auditor OK
  phase_exit_auditor OK
  report_auditor OK
  session-closer OK
  session-starter OK
  ```

- **Criterio de cierre:** a ese commit, ninguna `description` de agente lleva `: ` y las seis
  cabeceras son YAML valido.

  ```
  $ git grep -nE "^description:.*: " e222812 -- .claude/agents | wc -l
  0
  $ for a in gate1_auditor gate2_auditor phase_exit_auditor report_auditor session-closer session-starter; do printf '%s ' $a; git show e222812:.claude/agents/$a.md | python -c "import sys,re,yaml; s=sys.stdin.read(); fm=re.match(r'^---\r?\n(.*?)\r?\n---',s,re.S).group(1); yaml.safe_load(fm); print('OK')" 2>&1 | grep -E '^(OK|yaml\.)' ; done
  gate1_auditor OK
  gate2_auditor OK
  phase_exit_auditor OK
  report_auditor OK
  session-closer OK
  session-starter OK
  ```

📌 **Ancladas por el Paso 7c-bis al commit `e222812`.** Las dos reproducen lo publicado arriba.

### D-010 - Las cercas de bloque de los controles de las skills admiten sangria
| Campo | Valor |
|---|---|
| Fecha | 2026-09-16 |
| Estado | Vigente |
| Origen | report_auditor |

- **Contexto:** `F-004` (`_audit/R-002.md`): `outside()`, del CONTROL DE PROSA BORRADA de
  `protocol-close`, solo reconoce cercas en la primera columna (`/^```/`), y `decisions.md` y
  `tasks.md` escriben todas las suyas indentadas dentro de vinetas. Sobre el anclaje de `S-002` la
  orden literal marca como prosa borrada nueve lineas que son ordenes sustituidas dentro de bloques.
  El mismo patron esta en otros controles de `protocol-close`, de `protocol-audit` y de
  `protocol-start`; este ultimo no lo cito el auditor.
- **Decision:** sustituir `/^```/` por `/^[[:space:]]*```/` en las doce apariciones de las tres skills
  (seis en `protocol-close`, cuatro en `protocol-audit`, dos en `protocol-start`), sin tocar nada mas.
  La eligio el usuario entre tres opciones.
- **Por que:** es el mismo defecto que `D-008` corrigio en otro control: el control tiene que ver el
  registro tal como se escribe. Corregir solo `outside()` dejaria once controles con la misma ceguera,
  que hoy no da error visible y lo dara en cuanto un bloque indentado contenga una fila o un
  encabezado.
- **Alternativas descartadas:**
  - **Corregir solo `outside()` y registrar el resto como `DT-XXX`:** descartada porque deja el defecto
    latente en once lineas para ahorrar un cambio mecanico identico.
  - **Fijar por convencion cercas en columna cero:** descartada por el mismo motivo que en `D-008`, y
    obligaria a reescribir las 32 cercas indentadas de `decisions.md` y `tasks.md`.
- ⚠️ **Consecuencia:** `.claude/` se aleja un poco mas del esqueleto de arranque hasta que se promueva
  (`DT-001`).
- **Verificacion previa**, contra `HEAD` (`6ab7887`):

  ```
  $ for f in decisions tasks; do printf "$f col0=%s indent=%s\n" $(git show 6ab7887:_persistence/$f.md | grep -cE '^```') $(git show 6ab7887:_persistence/$f.md | grep -cE '^[[:space:]]+```'); done
  decisions col0=0 indent=18
  tasks col0=0 indent=14
  $ git grep -nF '/^```/' 6ab7887 -- .claude | cut -d: -f2,3
  .claude/skills/protocol-audit/SKILL.md:153
  .claude/skills/protocol-audit/SKILL.md:154
  .claude/skills/protocol-audit/SKILL.md:315
  .claude/skills/protocol-audit/SKILL.md:316
  .claude/skills/protocol-close/SKILL.md:218
  .claude/skills/protocol-close/SKILL.md:219
  .claude/skills/protocol-close/SKILL.md:256
  .claude/skills/protocol-close/SKILL.md:257
  .claude/skills/protocol-close/SKILL.md:1462
  .claude/skills/protocol-close/SKILL.md:1826
  .claude/skills/protocol-start/SKILL.md:181
  .claude/skills/protocol-start/SKILL.md:182
  $ outside() { awk '/^```/{f=!f; next} !f'; }; for f in _persistence/decisions.md _persistence/tasks.md; do git show e222812:"$f" | outside > a; git show 4b27ae4:"$f" | outside > b; echo "== $f =="; diff a b | grep -c '^<'; done
  == _persistence/decisions.md ==
  6
  == _persistence/tasks.md ==
  3
  ```

- **Prueba del cambio.** La `outside()` tal como queda escrita en la skill, sobre el mismo anclaje:

  ```
  $ outside() { awk '/^[[:space:]]*```/{f=!f; next} !f'; }; for f in _persistence/decisions.md _persistence/tasks.md; do git show e222812:"$f" | outside > a; git show 4b27ae4:"$f" | outside > b; echo "== $f =="; diff a b | grep '^<'; done; echo fin
  == _persistence/decisions.md ==
  == _persistence/tasks.md ==
  fin
  ```

- **Criterio de cierre:** a ese commit, ninguna de las tres skills conserva la forma antigua y llevan
  la nueva en seis, cuatro y dos lineas.

  ```
  $ git grep -nF '/^```/' 101db28 -- .claude | wc -l
  0
  $ git grep -cF '/^[[:space:]]*```/' 101db28 -- .claude | cut -d: -f2-
  .claude/skills/protocol-audit/SKILL.md:4
  .claude/skills/protocol-close/SKILL.md:6
  .claude/skills/protocol-start/SKILL.md:2
  ```

📌 **Ancladas por el Paso 7c-bis al commit `101db28`.** Las dos reproducen lo publicado arriba.

### D-011 - Firmas del Gate 1 y del Gate 2
| Campo | Valor |
|---|---|
| Fecha | 2026-09-16 |
| Estado | Vigente |
| Origen | usuario |

- **Contexto:** `D-003` adopto los dos Gates y dejo sin fijar quien ejerce sus dos firmas, que
  `_phases/010_prototype.md` exige registradas con su `D-XXX` antes de lanzar el Gate. `project.md`
  nombra al usuario como patrocinador solo para el Gate 1, y sin decision que lo respalde; para el
  Gate 2 no nombra a nadie. Verificado contra `HEAD` (`6ab7887`):

  ```
  $ git show 6ab7887:project.md | grep -nE "quien decide si se construye|quien decide si se sigue invirtiendo|como patrocinador"
  95:construye el MVP, se replantea o se detiene es el usuario, como patrocinador**, y esa decision queda
  $ git show 6ab7887:_persistence/decisions.md | grep -n "firma"
  193:- ⚠️ **Lo que esta decision NO fija:** la asignacion de las firmas de cada Gate, que
  ```

- **Decision:** en los dos Gates, la **firma tecnica** (el dictamen) es del agente de Gate
  —`gate1_auditor` en el Gate 1, `gate2_auditor` en el Gate 2— y la **firma del patrocinador** (se
  construye o se sigue invirtiendo, se replantea o se detiene) es del **usuario**. `manager` lanza
  cada Gate y registra la decision con su `D-XXX`, pero no firma. La eligio el usuario.
- **Por que:** cumple la regla de las dos firmas de `_methodology/000_method.md`: la revision no vio
  construir lo que juzga, y quien decide responde por la inversion. `manager` dirige y construye
  el prototipo y el producto minimo, y por eso no puede ser el testigo.
- **Alternativas descartadas:**
  - **Firma tecnica de `manager`:** el usuario lo planteo al principio («una firma tuya») y despues
    eligio el agente de Gate. Descartada porque quien construye no puede ser su propio testigo.
  - **Patrocinador = el cliente del encargo, en los dos Gates o solo en uno:** el usuario eligio
    firmar el mismo.
- ⚠️ **Lo que esta decision NO fija:** quien firma la aprobacion del acta de cierre de cada etapa
  (`phase_exit_auditor` emite solo la revision tecnica). Esta decision cubre los Gates y nada mas.
- **Criterio de cierre:** a ese commit, la decision nombra a los dos agentes de Gate y al usuario como
  patrocinador.

  ```
  $ git show 101db28:_persistence/decisions.md | awk '/^### D-011/{f=1} /^### D-012/{f=0} f' | grep -v '\$ ' | grep -cE 'gate1_auditor. en el Gate 1, .gate2_auditor. en el Gate 2|es del \*\*usuario\*\*'
  2
  ```

📌 **Anclada por el Paso 7c-bis al commit `101db28`.** Reproduce lo publicado arriba.

### D-012 - Cosecha de lecciones de 000_preproject
| Campo | Valor |
|---|---|
| Fecha | 2026-09-16 |
| Estado | Vigente |
| Origen | usuario |

- **Contexto:** la casilla 10 de la condicion de salida de `_phases/000_preproject.md` exige que
  ninguna leccion de la etapa quede `Sin evaluar`. Habia cuatro, `L-001` a `L-004`. Se clasificaron
  con los cuatro filtros de la seccion de promocion de `global_lessons.md` (version 3), y el usuario
  aprobo la propuesta entera en la puerta de `protocol-harvest`. No hay auditoria que use el archivo
  global como vara, porque el proyecto no adopto ese uso.
- **Decision:**
  - `L-001` → **promovida a `LG-105`**, en el Bloque J, con referencia en §1 («abrir un proyecto
    nuevo»). Pasa los cuatro filtros: un solo caso, pero con coste concreto e irreversible (`D-004`).
  - `L-003` → **ya cubierta por `LG-06`** (filtro 4). `LG-04` y `LG-22` completan el caso.
  - `L-002` → **solo proyecto** (filtro 2): un solo caso y sin coste demostrado.
  - `L-004` → **solo proyecto** (filtro 2): un solo caso con coste menor, y su forma de aplicarla
    depende de YAML y de Claude Code.
  - `L-005` → **ya cubierta por `LG-103`** y `L-006` → **ya cubierta por `LG-101`** (filtro 4).
    Nacieron en esta misma sesion, despues de la puerta: son dos fallos corregidos al registrar
    `D-010` y `D-011`. Se clasifican al escribirlas porque no suben nada fuera, y asi la etapa no
    vuelve a tener lecciones `Sin evaluar`. No forman parte de lo que el usuario aprobo en la puerta.
  - El archivo global pasa a la **version 4** (2026-09-16, 105 lecciones), con commit **`9e883a9`**
    en `TripleS_Lessons`, subido a `origin/main`.
- **Por que:** cierra la casilla 10 sin subir anecdotas. La seccion de promocion pide que una leccion
  se repita, o que tenga un coste concreto, antes de subir.
- **Alternativas descartadas:**
  - **Dejar `L-002` y `L-004` en `Sin evaluar` hasta que se repitan:** su forma podria ser global,
    pero `protocol-harvest` no tiene un destino «en espera» y la casilla 10 no se podria marcar.
  - **Promover `L-003` como enmienda de `LG-06`:** `F-004` la repitio con la misma forma, sin una
    cara nueva, asi que no anade nada.
- **Verificacion**, sobre el commit del repositorio de lecciones:

  ```
  $ git -C "C:/Users/USUARIO/Documents/Company_TripleS/TripleS_Lessons" show 9e883a9:global_lessons.md | grep -nE '^\| \*\*LG-105\*\*|Versión: 4' | cut -c1-80
  26:> **Versión: 4 · 2026-09-16** · 105 lecciones · 10 bloques
  336:| **LG-105** | **Un paso de arranque que no deja rastro se salta sin que nad
  $ git -C "C:/Users/USUARIO/Documents/Company_TripleS/TripleS_Lessons" ls-remote origin refs/heads/main | cut -c1-7
  9e883a9
  ```

- **Criterio de cierre:** a ese commit, ninguna leccion de `000_preproject` queda `Sin evaluar`.

  ```
  $ git show 101db28:_persistence/lessons.md | grep -E '^\| \[L-' | grep '000_preproject' | grep -c 'Sin evaluar'
  0
  ```

📌 **Anclada por el Paso 7c-bis al commit `101db28`.** Reproduce lo publicado arriba.

### D-013 - El anclaje de criterios de cierre compara la salida anclada con la publicada
| Campo | Valor |
|---|---|
| Fecha | 2026-09-16 |
| Estado | Vigente |
| Origen | report_auditor |

- **Contexto:** `F-005` (`_audit/R-003.md`): en el anclaje de `S-003` (`2a72df8`), el criterio de
  cierre de `T-006` publicaba para su segunda orden (`git grep -cF` sobre `<hash>`) tres lineas sin
  prefijo, que esa orden no puede devolver sobre un commit. La misma orden en `D-010` termina en
  `| cut -d: -f2-`, y ese filtro ya estaba en `101db28`: se perdio al copiar el criterio a `T-006`. El
  anclaje sustituyo la salida por la real y la linea `📌` afirmo que reproducia, contra la regla del
  Paso 7c-bis de `protocol-close`, que manda detenerse y pegar las dos. El informe no lo menciona.
- **Decision:** aceptar el hallazgo entero, y hacer las dos cosas que recomienda: (1) una nota fechada
  bajo el bloque de `T-006` que vuelve a publicar las dos salidas y dice que la linea `📌` no era
  exacta, sin reescribir lo commiteado; (2) un CONTROL DE SALIDA REPRODUCIDA en el Paso 7c-bis que
  compara, entrada por entrada, las lineas de salida de los bloques de criterio de cierre del commit
  de la sesion con las del arbol ya anclado, con su rotulo en la NOTA DE CIERRE y en la lista del
  Paso 7c-ter. La eligio el usuario entre tres opciones.
- **Por que:** la regla de detenerse ya estaba escrita y no se cumplio: «coincide» se juzgaba a ojo.
  Es el mismo patron que abrio el CONTROL DE PROSA BORRADA — una regla de redaccion que falla se
  convierte en una comparacion que devuelve lineas o no las devuelve.
- **Alternativas descartadas:**
  - **Solo la nota:** descartada porque corrige el registro pero deja intacto el mecanismo que
    permitio el defecto; el siguiente anclaje depende otra vez de mirar bien.
  - **La nota ahora y el control como `DT-XXX`:** descartada porque el control es corto, se pudo
    probar en esta misma sesion sobre dos anclajes reales, y aplazarlo no ahorra nada.
  - **Anadir `| cut -d: -f2-` a la orden de `T-006`:** descartada; cambia lo que se publico como
    evidencia, que es justo lo que el 7c-bis prohibe.
- ⚠️ **Consecuencia:** `.claude/` se aleja un poco mas del esqueleto de arranque hasta que se promueva
  (`DT-001`).
- **Verificacion previa**, contra `HEAD` (`613ef8a`). La salida vigente de `T-006`, el cambio que hizo
  el anclaje, el origen del filtro de `D-010` y la regla incumplida:

  ```
  $ git show 613ef8a:_persistence/tasks.md | awk '/^### T-006/,0' | grep -E '101db28:|📌'
    101db28:.claude/skills/protocol-audit/SKILL.md:4
    101db28:.claude/skills/protocol-close/SKILL.md:6
    101db28:.claude/skills/protocol-start/SKILL.md:2
  📌 **Anclada por el Paso 7c-bis al commit `101db28`.** Las dos reproducen lo publicado arriba.
  $ git diff 101db28 2a72df8 -- _persistence/tasks.md | grep -E '^[-+] ' | grep -v '\$ '
  -  .claude/skills/protocol-audit/SKILL.md:4
  -  .claude/skills/protocol-close/SKILL.md:6
  -  .claude/skills/protocol-start/SKILL.md:2
  +  101db28:.claude/skills/protocol-audit/SKILL.md:4
  +  101db28:.claude/skills/protocol-close/SKILL.md:6
  +  101db28:.claude/skills/protocol-start/SKILL.md:2
  $ git log --format="%h %s" -S"| cut -d: -f2-" -- _persistence/decisions.md
  101db28 S-003: firmas de los Gates (D-011), hallazgo F-004 de R-002 atendido (D-010, T-006) y cosecha de lecciones de 000_preproject (D-012)
  $ git show 613ef8a:.claude/skills/protocol-close/SKILL.md | grep -n "Si la salida anclada NO coincide"
  1787:🚨 **Si la salida anclada NO coincide con la publicada, te detienes.** No la sustituyes y no
  ```

- **Criterio de cierre:** a ese commit, la funcion `salidas()` escrita en la skill señala las seis
  lineas de `T-006` en el anclaje de `S-003` y ninguna en el de `S-002`, y su rotulo aparece dos veces: en la lista del 7c-ter y en la plantilla de la NOTA DE
  CIERRE.

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

### D-014 - Cosecha de L-007
| Campo | Valor |
|---|---|
| Fecha | 2026-09-16 |
| Estado | Vigente |
| Origen | manager |

- **Contexto:** al repasar la condicion de salida de `000_preproject`, la casilla 10 fallaba: `L-007`,
  escrita en esta sesion al atender `F-005` (`D-013`), quedaba `Sin evaluar`. El usuario pidio
  cosecharla con `protocol-harvest`. Se contrasto con los cuatro filtros de la seccion de promocion
  de `global_lessons.md` (version 4) y con las entradas que su indice por sintoma da para «dos copias
  del mismo documento discrepan» (`LG-08`, `LG-98`) y con `LG-103`.
- **Decision:** `L-007` → **ya cubierta por `LG-98`** (filtro 4). Su forma general —una copia del
  mismo bloque diverge porque nadie comprueba que siga coincidiendo con el original— es la de
  `LG-98`, y su «como se comprueba» es la accion de `L-007`. `LG-103` (reejecutar la orden copiada
  del archivo) habria detectado la divergencia. No sube nada al archivo global, que sigue en la
  **version 4** (`9e883a9`); por eso no hay puerta que abrir.
- **Por que:** la seccion de promocion pide ademas que una leccion se repita o tenga un coste
  concreto; `L-007` es un solo caso y su coste fue reversible (una nota fechada).
- **Alternativas descartadas:**
  - **Enmendar `LG-98` para nombrar las copias dentro de un mismo registro:** su enunciado ya habla
    de copias en general; no es una cara nueva, es el mismo caso en otro sitio.
  - **`Solo proyecto`:** falso; la forma sobrevive al cambio de lenguaje y dominio (filtro 1). Lo que
    la descarta es el filtro 4, y anotarlo con otro filtro borraria la referencia a `LG-98`.
- **Verificacion**, sobre el repositorio de lecciones:

  ```
  $ git -C "C:/Users/USUARIO/Documents/Company_TripleS/TripleS_Lessons" show 9e883a9:global_lessons.md | grep -nE '^\| \*\*LG-98\*\*|Versión: 4' | cut -c1-90
  26:> **Versión: 4 · 2026-09-16** · 105 lecciones · 10 bloques
  329:| **LG-98** | **Un contrato que solo conoce una parte no es un contrato: es una suposi
  $ git -C "C:/Users/USUARIO/Documents/Company_TripleS/TripleS_Lessons" ls-remote origin refs/heads/main | cut -c1-7
  9e883a9
  ```

- **Criterio de cierre:** a ese commit, ninguna leccion de `000_preproject` queda `Sin evaluar`.

  ```
  $ git show c07680f:_persistence/lessons.md | grep -E '^\| \[L-' | grep '000_preproject' | grep -c 'Sin evaluar'
  0
  ```

📌 **Anclada por el Paso 7c-bis al commit `c07680f`.** Reproduce lo publicado arriba.

### D-015 - Etapa 000_preproject cerrada
| Campo | Valor |
|---|---|
| Fecha | 2026-09-16 |
| Estado | Revocada en parte por D-020 |
| Origen | usuario |

- **Contexto:** con los hallazgos `F-001` a `F-005` en `Implementado` y `R-004` sin hallazgos,
  `manager` repaso una por una las diez casillas de la condicion de salida de
  `_phases/000_preproject.md` sobre `f2b7662` (arbol limpio). Despues lanzo `phase_exit_auditor`, que
  dejo el acta `_audit/000_preproject/005_phase_exit_record_001.md` (commit `4fad4dd`) con dictamen
  **CASILLAS SATISFECHAS**: 10 CUMPLE, 0 NO CUMPLE, 0 NO COMPROBABLE.
- **Decision:** el usuario, como patrocinador, firma **ETAPA CERRADA** para `000_preproject`. Esta
  entrada es la segunda firma que pide la seccion 5.2 del acta; el acta no se edita, porque la
  escribio el agente y su dictamen es sobre `f2b7662`.
- **Por que:** las dos firmas coinciden: la revision tecnica independiente dio las diez casillas
  satisfechas, y el patrocinador acepta el andamio como suficiente para empezar el producto.
- **Alternativas descartadas:** **ETAPA NO CERRADA**. No habia casilla sin cumplir ni hallazgo abierto
  que la sostuviera.
- **Consecuencia:** la etapa siguiente declarada es `005_discovery`. Al arrancarla se activa el
  disparador de `A-001`, y la diferencia `005_discovery/` del Paso 2c (`D-002`) tiene que
  desaparecer con su primer artefacto.
- **Verificacion previa de `manager`**, contra `HEAD` (`f2b7662`) con el arbol limpio. Las ordenes
  van por casilla en este orden: 1, 2, 3, 8, 7 (fuga), 7 (codigos), 5 y 10. Las casillas 4, 6 y 9 se
  comprobaron leyendo el tablero, `git log` y `D-005`, y constan con su orden en el acta:

  ```
  $ diff <(git ls-tree -d --name-only f2b7662 | sed 's|$|/|' | sort) <(git show f2b7662:project.md | sed -n '/^## Carpetas propias/,/^## /p' | grep -oE '^\| `[^`]+/`' | tr -d '|` ' | sort)
  1a2
  > 005_discovery/
  8a10
  > temporal/
  $ git ls-tree --name-only f2b7662 -- .claude/agents/ | wc -l
  6
  $ for f in tasks decisions constraints assumptions lessons techdebt progress; do diff <(git show f2b7662:_persistence/$f.md | awk '/^[[:space:]]*```/{c=!c; next} !c' | grep -oE '^\| \[?[A-Z]+-[0-9]+' | grep -oE '[A-Z]+-[0-9]+' | sort -u) <(git show f2b7662:_persistence/$f.md | awk '/^[[:space:]]*```/{c=!c; next} !c' | grep -oE '^#{3} [A-Z]+-[0-9]+' | grep -oE '[A-Z]+-[0-9]+' | sort -u); done | wc -l
  0
  $ git show f2b7662:_audit/findings.md | grep -E '^\| \[F-[0-9]+\]' | grep -vc '| Implementado |'
  0
  $ git grep -nE "YouOtto|Company_TripleS|github.com" f2b7662 -- .claude CLAUDE.md _phases _methodology _templates _workflow | wc -l
  0
  $ git grep -noE '\b[A-Z]{1,2}-[0-9]+\b' f2b7662 -- _phases _workflow | grep -vE ':PI-[0-9]+$' | wc -l
  0
  $ git grep -c 'SIN COMPROBAR' f2b7662 -- '_audit/S-*.md' | wc -l
  0
  $ git show f2b7662:_persistence/lessons.md | grep -E '^\| \[L-' | grep '000_preproject' | grep -c 'Sin evaluar'
  0
  ```

  Las dos diferencias del primer control tienen su razon escrita: `005_discovery/` en `D-002` y
  `temporal/` en la tabla «Carpetas propias» de `project.md` (excluida en `.gitignore`).

### D-016 - Promocion al esqueleto de los seis archivos de DT-001
| Campo | Valor |
|---|---|
| Fecha | 2026-09-16 |
| Estado | Vigente |
| Origen | usuario |

- **Contexto:** el usuario evaluo `DT-001`, la confirmo y pidio pagarla en el acto con
  `protocol-promote`, con una condicion expresa: todo lo que suba al esqueleto tiene que ser
  agnostico. Los tres disparadores se cumplian: lo pidio el usuario, las seis areas estaban limpias y
  subidas en `4fad4dd` (sin `ahead`), y no habia auditoria en curso.
- **Decision:** se promueven los seis archivos, aprobados uno por uno por el usuario:
  `.claude/agents/gate1_auditor.md`, `gate2_auditor.md`, `phase_exit_auditor.md` (`D-009`), y
  `.claude/skills/protocol-audit/SKILL.md`, `protocol-start/SKILL.md` y `protocol-close/SKILL.md`
  (`D-008`, `D-010`, `D-013`). No se dejo ninguno fuera. Hash de origen `4fad4dd`; commit del
  esqueleto `4d20ce2`, subido.
- **Por que:** los seis corrigen defectos del propio esqueleto: tres agentes que no cargaban por la
  cabecera YAML y controles que no veian ordenes ni cercas con sangria. Un proyecto que clonara
  `707d572` los heredaba.
- **Alternativas descartadas:** **confirmar la deuda y promover mas adelante.** Con la etapa recien
  cerrada el metodo estaba auditado sin hallazgos abiertos; esperar a `005_discovery` acumulaba mas
  desfase en la misma puerta.
- **Hallazgos:** ninguno. Nada existia solo en el esqueleto.
- **Comprobacion del supuesto del Paso 2:** se leyeron las 40 lineas que la promocion borra (1, 1, 1,
  4, 2 y 31). Todas eran versiones anteriores de patrones y parrafos ya reescritos aqui; ninguna era
  algo que un proyecto generico necesitara.
- **Final de linea:** los tres agentes eran CRLF aqui y LF en el esqueleto, y se copiaron como LF; las
  tres skills eran LF en los dos y se copiaron byte a byte.
- **Verificacion.** Controles de agnosticismo sobre el origen, antes de la puerta. El tercero es el
  barrido ensanchado; su unica linea es la palabra comun «USUARIOS», no un dato propio, en un archivo
  que no se promovio:

  ```
  $ git grep -nE "YouOtto|Company_TripleS|github.com" 4fad4dd -- .claude CLAUDE.md _phases _methodology _templates _workflow | wc -l
  0
  $ git grep -noE '\b[A-Z]{1,2}-[0-9]+\b' 4fad4dd -- _phases _workflow | grep -vE ':PI-[0-9]+$' | wc -l
  0
  $ git grep -nE 'USUARIO|jdrodriguez|gmail|TripleS|Triple S|RaidomAI|[A-Z]:[\/]|/Users/|/home/|Documents[\/]|[Gg]it[Hh]ub|gitlab|bitbucket|https?://' 4fad4dd -- .claude CLAUDE.md _phases _methodology _templates _workflow
  4fad4dd:_templates/010_prototype/025_business_validation.md:14:> 🚨 **SESION APARTE, CON EL PATROCINADOR, SIN USUARIOS DELANTE.**
  ```

  El commit del esqueleto y su remoto:

  ```
  $ git -C "C:/Users/USUARIO/Documents/Company_TripleS/SDAI_TripleS" show --stat --format='%h %s' 4d20ce2 | tail -7
   .claude/agents/gate1_auditor.md        |   2 +-
   .claude/agents/gate2_auditor.md        |   2 +-
   .claude/agents/phase_exit_auditor.md   |   2 +-
   .claude/skills/protocol-audit/SKILL.md |   8 +--
   .claude/skills/protocol-close/SKILL.md | 115 ++++++++++++++++++++++++---------
   .claude/skills/protocol-start/SKILL.md |   4 +-
   6 files changed, 93 insertions(+), 40 deletions(-)
  $ git -C "C:/Users/USUARIO/Documents/Company_TripleS/SDAI_TripleS" ls-remote origin refs/heads/main | cut -c1-7
  4d20ce2
  ```

  Barrido del Paso 1 despues de promover (sin salida: el desfase cerro) y Paso 1b sobre el commit del
  esqueleto:

  ```
  $ ESQ="C:/Users/USUARIO/Documents/Company_TripleS/SDAI_TripleS"; for d in .claude _phases _methodology _templates _workflow; do diff -rq --strip-trailing-cr "$ESQ/$d" "$d"; done; diff -q --strip-trailing-cr "$ESQ/CLAUDE.md" CLAUDE.md; echo "exit=$?"
  exit=0
  $ ESQ="C:/Users/USUARIO/Documents/Company_TripleS/SDAI_TripleS"; for p in 005_project.md:project.md 010_progress.md:_persistence/progress.md 015_tasks.md:_persistence/tasks.md 020_decisions.md:_persistence/decisions.md 025_constraints.md:_persistence/constraints.md 030_assumptions.md:_persistence/assumptions.md 035_lessons.md:_persistence/lessons.md 040_techdebt.md:_persistence/techdebt.md 045_audit_index.md:_audit/index.md 050_audit_findings.md:_audit/findings.md; do t=${p%%:*}; c=${p#*:}; printf '%3d  %s\n' "$(diff --strip-trailing-cr <(git -C "$ESQ" show 4d20ce2:_templates/000_preproject/$t) <(git -C "$ESQ" show 4d20ce2:$c) | grep -c '^[<>]')" "$c"; done
    0  project.md
    0  _persistence/progress.md
    0  _persistence/tasks.md
    0  _persistence/decisions.md
    0  _persistence/constraints.md
    0  _persistence/assumptions.md
    0  _persistence/lessons.md
    0  _persistence/techdebt.md
    0  _audit/index.md
    0  _audit/findings.md
  ```

- ⚠️ **El barrido de despues compara con el arbol de trabajo**, que en las seis areas es identico a
  `4fad4dd` (sin cambios sin commitear alli). El cambio de `DT-001` a `Implementada` lo registra el
  cierre, con este `D-016` como evidencia.

### D-017 - El CONTROL DE SALIDA REPRODUCIDA declara que no reejecuta
| Campo | Valor |
|---|---|
| Fecha | 2026-09-16 |
| Estado | Vigente |
| Origen | report_auditor |

- **Contexto:** primera recomendacion sin hallazgo de `R-004` (seccion 5): el CONTROL DE SALIDA
  REPRODUCIDA del Paso 7c-bis compara el **texto** de la salida antes y despues del anclaje y no
  reejecuta la orden. Detecta que se sustituya una salida, pero no que se pegue una salida que la
  orden no devuelve. Verificado contra `HEAD` (`4fad4dd`): la funcion solo extrae texto con `awk`.

  ```
  $ git show 4fad4dd:.claude/skills/protocol-close/SKILL.md | grep -nE 'salidas\(\)' | cut -c1-60
  1884:salidas() { awk '/^### /{c=0} /^### [DT]-/{d=$2} /Crite
  ```

- **Decision:** la recomendacion **es correcta**. Se acepta en dos partes: el Paso 7c-bis declara por
  escrito lo que el control detecta y lo que no (`T-008`), y reejecutar las ordenes ancladas se deja
  como deuda (`DT-002`). Lo decidio el usuario al evaluar las tres recomendaciones.
- **Por que:** un control que no declara su limite se lee como si cubriera mas de lo que cubre.
  Reejecutar de forma automatica ordenes del registro no es gratis: algunas apuntan a otros
  repositorios, usan `eval` o dependen del estado de la maquina.
- **Alternativas descartadas:**
  - **Implementar ya la reejecucion:** caro y con riesgo de ejecutar ordenes con efectos fuera del
    repositorio; se deja para cuando haya un criterio de que ordenes son reejecutables.
  - **No hacer nada:** el limite quedaria solo en una auditoria, sin rastro en el protocolo.
- ⚠️ **Consecuencia:** cambiar `protocol-close` vuelve a separar `.claude/` del esqueleto, recien
  alineado en `D-016`. Conviene hacer `T-008` y `T-009` en la misma sesion y promoverlas juntas.

### D-018 - No se corrige el recuento de la NOTA DE CIERRE de S-004
| Campo | Valor |
|---|---|
| Fecha | 2026-09-16 |
| Estado | Vigente |
| Origen | report_auditor |

- **Contexto:** segunda recomendacion sin hallazgo de `R-004`: la NOTA DE CIERRE de `S-004` habla de
  «cuatro» ordenes no anclables (2, 3, 8, 9) cuando la tabla del Paso 2d marca tambien la 6. Verificado
  contra `HEAD` (`4fad4dd`):

  ```
  $ git show 4fad4dd:_audit/S-004.md | grep -nF '(2, 3, 8, 9)' | cut -c1-60
  249:Las cuatro marcadas «no anclable todavia» (2, 3, 8, 9)
  258:todavia» arriba (2, 3, 8, 9) son, en realidad, dos orde
  ```

- **Decision:** **no se implementa.** La recomendacion es cierta, pero no tiene efecto: el propio
  auditor dice que el desglose posterior cuenta 5 y que el registro no cambia. Lo decidio el usuario.
- **Por que:** `_audit/S-004.md` es un informe ya entregado y auditado; los informes no se reescriben,
  y una nota fechada para una inexactitud de redaccion sin efecto aporta ruido, no evidencia.
- **Alternativas descartadas:** **nota fechada en `S-004.md`.** El archivo es del cierre, no de
  `manager`, y la inexactitud ya queda registrada en `R-004` y en esta entrada.

### D-019 - El anclaje traduce las ordenes git diff --cached del informe
| Campo | Valor |
|---|---|
| Fecha | 2026-09-16 |
| Estado | Vigente |
| Origen | report_auditor |

- **Contexto:** tercera recomendacion sin hallazgo de `R-004`: la seccion 1 del informe anclado de
  `S-004` conserva `git diff --cached -U0 …` como orden de los recuentos de hunks, que solo tiene
  sentido antes del commit; anclada seria `git diff -U0 c07680f^ c07680f`. Verificado contra `HEAD`
  (`4fad4dd`): la plantilla del informe ya pide anclar la **lista** de archivos, pero no dice nada de
  las ordenes `--cached` escritas en linea en la prosa de la seccion 1.

  ```
  $ git show 4fad4dd:_audit/S-004.md | grep -c -- 'diff --cached'
  9
  ```

- **Decision:** **se acepta** como `T-009`: el Paso 7c del cierre, al anclar el informe, traduce toda
  orden `git diff --cached` de la seccion 1 a su forma anclada `git diff <hash>^ <hash>`. Lo decidio el
  usuario.
- **Por que:** no es un descuido de `S-004`, es un hueco del metodo: se repetira en cada cierre. Una
  orden que ya no reproduce deja de ser evidencia aunque su cifra sea correcta.
- **Alternativas descartadas:** **no implementarla por ser inocua en `S-004`.** La cifra de hoy es
  cierta, pero la orden no la reproduce, que es exactamente lo que el anclaje existe para evitar.

### D-020 - La firma del patrocinador se escribe en el acta de cierre
| Campo | Valor |
|---|---|
| Fecha | 2026-09-16 |
| Estado | Vigente |
| Origen | report_auditor |

- **Contexto:** `F-006` de `R-005`: el acta `_audit/000_preproject/005_phase_exit_record_001.md`
  conserva la tabla 5.2 en `<pendiente>` y su cabecera dice que, mientras falte la segunda firma, la
  etapa sigue abierta; `D-015` da la etapa por cerrada y dice que el acta no se edita. El registro
  afirma dos estados a la vez. Verificado vigente contra `HEAD` (`673a97a`):

  ```
  $ git show 673a97a:_audit/000_preproject/005_phase_exit_record_001.md | grep -nE "Mientras falte|^\| (Quien|Fecha|Decision) \| .<pendiente>"
  21:> ⛔ **Mientras falte la segunda firma, la etapa sigue abierta**, por bien que salgan las casillas.
  430:| Quien | `<pendiente>` |
  431:| Fecha | `<pendiente>` |
  432:| Decision | `<pendiente>` |
  $ git show 673a97a:_persistence/decisions.md | grep -n "el acta no se edita"
  770:  entrada es la segunda firma que pide la seccion 5.2 del acta; el acta no se edita, porque la
  $ git log --oneline 5884e98..673a97a -- _audit/000_preproject/
  (sin salida)
  ```

- **Decision:** se acepta la opcion (a) de la recomendacion: el patrocinador firma en la tabla 5.2
  del acta como **JD Rodriguez - Main Sponsor**, fecha 2026-09-16, **ETAPA CERRADA**. `manager`
  transcribe la firma que el usuario dio literal en la conversacion; no la redacta. Revoca `D-015`
  **solo** en la clausula «el acta no se edita»: el cierre de `000_preproject` que `D-015` firmo se
  mantiene, con la misma fecha y el mismo contenido. Registrado en `T-010`.
- **Por que:** la plantilla del acta y `protocol-phase-exit` situan la aprobacion en el propio acta,
  y lo que prohiben es que la rellene el agente, no el patrocinador. Escribirla ahi cierra la
  contradiccion en el artefacto formal sin tocar metodo ni plantilla. La seccion 5.1 y el dictamen
  sobre `f2b7662` no se tocan.
- **Alternativas descartadas:**
  - **(b) Escribir el criterio de `D-015` en la plantilla y en `protocol-phase-exit`** (firma solo en
    `decisions.md`): cambia el metodo copiable para acomodar una excepcion de este proyecto, y
    separa otra vez `.claude/` y `_templates/` del esqueleto recien alineado en `D-016`.
  - **Rechazar `F-006`:** la contradiccion se sostiene contra el repositorio (bloque de arriba).
- **Clasificacion de la accion:** editar la tabla 5.2 del acta no esta en ninguna de las dos tablas
  de `constraints.md`; `manager` la clasifica **reversible a criterio**, porque solo rellena campos
  en blanco, no borra evidencia y queda en `git`.
- **Criterio de cierre:** a ese commit, el acta no conserva ningun `<pendiente>` y la tabla 5.2 lleva
  la firma, la fecha y la decision.

  ```
  $ git show 081385a:_audit/000_preproject/005_phase_exit_record_001.md | grep -cF '<pendiente>'
  0
  $ git show 081385a:_audit/000_preproject/005_phase_exit_record_001.md | grep -nE '^\| (Quien|Fecha|Decision) \| ' | tail -3
  430:| Quien | JD Rodriguez - Main Sponsor |
  431:| Fecha | 2026-09-16 |
  432:| Decision | ETAPA CERRADA |
  ```

📌 **Ancladas por el Paso 7c-bis al commit `081385a`.** Las dos reproducen lo publicado arriba.

### D-021 - La NOTA DE CIERRE publica la forma anclada de la orden del Paso 2d
| Campo | Valor |
|---|---|
| Fecha | 2026-09-16 |
| Estado | Vigente |
| Origen | report_auditor |

- **Contexto:** `F-007` de `R-005`: la seccion 7 de `S-005` publica la primera orden del Paso 2d en
  su forma de staging y dice que la NOTA DE CIERRE trae la version anclada, pero esa version no esta
  en el informe. Verificado vigente contra `HEAD` (`673a97a`): la promesa esta y la orden anclada de la
  seccion 7 no (la unica `git diff -U0 5884e98` del informe es otra orden, la de la linea 293). La
  plantilla de la seccion 7 exige la forma anclada o su equivalencia al lado, pero la instruccion de la
  NOTA DE CIERRE, que es donde el Paso 7c escribe despues del commit, no la pide:

  ```
  $ git show 673a97a:_audit/S-005.md | grep -nE "NOTA DE CIERRE trae la version anclada|git diff -U0 5884e98\^ 5884e98 -- _persistence _audit"
  178:en su forma de staging, y la NOTA DE CIERRE trae la version anclada):
  $ git show 673a97a:_audit/S-005.md | grep -n "git diff -U0 5884e98"
  293:$ for f in $(git diff --name-only 5884e98^ 5884e98 -- _persistence _audit ":(exclude)_audit/S-005.md"); do n=$(git diff -U0 5884e98^ 5884e98 -- "$f" | grep -cE '^\+[[:space:]]*\$ git show <hash>:'); [ "$n" != "0" ] && echo "$f: $n"; done
  $ git show 673a97a:.claude/skills/protocol-close/SKILL.md | grep -nF '<la orden se escribe en su forma anclada al commit y con el propio informe excluido'
  1249:<la orden se escribe en su forma anclada al commit y con el propio informe excluido
  $ git show 673a97a:.claude/skills/protocol-close/SKILL.md | sed -n '1258,1290p' | grep -c "Paso 2d"
  0
  ```

- **Decision:** **se acepta** como `T-011`: la instruccion de la NOTA DE CIERRE de la plantilla del
  informe en `protocol-close` pide que el Paso 7c pegue la primera orden del Paso 2d en su forma
  anclada (`git diff -U0 <hash>^ <hash> -- _persistence _audit ":(exclude)_audit/S-XXX.md"`) con su
  recuento. `_audit/S-005.md` **no se reescribe**. Lo decidio `manager`.
- **Por que:** no es solo un descuido de `S-005`: la seccion 7 permite aplazar la forma anclada a la
  nota, y la nota no la pide, asi que se repetira en cada cierre. Es la misma clase de hueco que
  `D-019` (ordenes de staging sin su forma anclada), y va al mismo archivo.
- **Alternativas descartadas:**
  - **Ampliar `T-009`:** mezclaria dos hallazgos en una tarea ya definida por `D-019`; con tareas
    separadas cada `F-NNN` se cierra contra su propio criterio.
  - **Nota fechada en `S-005.md`:** el informe es del cierre y ya esta auditado (mismo criterio que
    `D-018`); la cifra `14` ya reproduce en forma anclada segun `R-005`.
- ⚠️ **Consecuencia:** `T-008`, `T-009` y `T-011` tocan `protocol-close`; conviene hacerlas en la misma
  sesion y promoverlas juntas al esqueleto (ver `D-017`).

### D-022 - Como se implementan T-008, T-009 y T-011 en protocol-close
| Campo | Valor |
|---|---|
| Fecha | 2026-09-16 |
| Estado | Revocada en parte por D-023 |
| Origen | usuario |

- **Contexto:** el usuario pidio hacer juntas `T-008` (`D-017`), `T-009` (`D-019`) y `T-011`
  (`D-021`), las tres sobre `.claude/skills/protocol-close/SKILL.md`. Las tres decisiones fijaban el
  que; al implementarlas hubo que elegir el como en tres puntos.
- **Decision:**
  1. **`T-008`:** el CONTROL DE SALIDA REPRODUCIDA declara en un parrafo `⚠️` que compara texto y no
     reejecuta, y que esa comprobacion es de la auditoria. **No cita `DT-002`**, aunque `T-008` lo
     pedia: la skill es copiable y el Paso 1c de `protocol-close` prohibe codigos instanciados en
     `.claude/`. El puntero va en la direccion contraria: `DT-002` ya nombra el control.
  2. **`T-009`:** el Paso 7c traduce **en su sitio** las ordenes `git diff --cached` de la prosa de la
     seccion 1 a `git diff <hash>^ <hash>`, salvo la de la lista de archivos, que conserva su forma
     de staging porque su version anclada ya va en la nota. El 7c-quater gana una segunda orden que
     lo comprueba (`SIN ANCLAR en la seccion 1`).
  3. **`T-011`:** la nota de la seccion 7 lleva una cuarta cosa, la primera orden del Paso 2d anclada
     con su recuento, bajo un **sexto rotulo** `**ORDEN DEL PASO 2d ANCLADA — salida:**` que el
     7c-ter exige, como el propio 7c-ter pide para todo paso nuevo que publique en la nota.
- **Por que:** cada una convierte una regla de redaccion en algo que se comprueba con igualdad de
  cadenas, que es el patron que el protocolo ya usa donde una regla escrita fallo.
- **Alternativas descartadas:**
  - **`T-009` en la nota, sin tocar la prosa:** republicaria cada recuento dos veces, y la copia de
    staging seguiria sin reproducir.
  - **`T-011` sin rotulo nuevo:** seria otra regla de redaccion sola, que es exactamente como nacio
    `F-007`.
  - **Citar `DT-002` en la skill:** rompe el control de codigos instanciados del Paso 1c.
- **Prueba de los controles nuevos sobre informes ya commiteados.** La orden de `T-011` reproduce el
  `14` que `R-005` obtuvo sobre `5884e98`; el control de `T-009` habria detenido los anclajes de
  `S-004` y `S-005`; y el 7c-ter con seis rotulos marca la ausencia en `S-005`, que es `F-007`:

  ```
  $ git diff -U0 5884e98^ 5884e98 -- _persistence _audit ":(exclude)_audit/S-005.md" | grep -E '^\+[[:space:]]*\$ ' | grep -vE 'git (show|grep|log|diff) [0-9a-f]{7,40}' | wc -l
  14
  $ for c in 74749f7:_audit/S-004.md 2846f62:_audit/S-005.md; do echo "== $c"; git show $c | sed -n '/^## 1\./,/^## 2\./p' | grep -F 'diff --cached' | grep -vF -- '--stat --name-only' | wc -l; done
  == 74749f7:_audit/S-004.md
  2
  == 2846f62:_audit/S-005.md
  3
  $ for m in "**BARRIDO DE ANCLAJE — salida:**" "**CONTROL DE PROSA BORRADA — salida:**" "**CONTROL DE SALIDA REPRODUCIDA — salida:**" "**SEGUNDA PASADA anclada del Paso 2e — salida:**" "**CONTROL DE CIFRA ADYACENTE — salida:**" "**ORDEN DEL PASO 2d ANCLADA — salida:**"; do git show 2846f62:_audit/S-005.md | grep -qF "$m" || echo "FALTA en la NOTA DE CIERRE: $m"; done
  FALTA en la NOTA DE CIERRE: **ORDEN DEL PASO 2d ANCLADA — salida:**
  ```

- ⚠️ **Consecuencia:** `.claude/` vuelve a separarse del esqueleto de arranque. La promocion la hace
  `manager` con `protocol-promote` y escribe fuera del repositorio, asi que espera la aprobacion del
  usuario.
- **Criterio de cierre:** a ese commit, la skill declara el limite del control (`T-008`), traduce y
  comprueba las ordenes de la seccion 1 (`T-009`), exige el sexto rotulo en la plantilla, en la nota y
  en el 7c-ter (`T-011`), no le queda ninguna mencion a cinco rotulos, salidas o bloques, y los
  controles de fuga y de codigos siguen en cero.

  ```
  $ git show 081385a:.claude/skills/protocol-close/SKILL.md | grep -cF 'Y compara texto: no reejecuta ninguna orden'
  1
  $ git show 081385a:.claude/skills/protocol-close/SKILL.md | grep -cF 'las ordenes `git diff --cached` de la prosa se traducen aqui'
  1
  $ git show 081385a:.claude/skills/protocol-close/SKILL.md | grep -cF 'SIN ANCLAR en la seccion 1'
  1
  $ git show 081385a:.claude/skills/protocol-close/SKILL.md | grep -cF '**ORDEN DEL PASO 2d ANCLADA — salida:**'
  3
  $ git show 081385a:.claude/skills/protocol-close/SKILL.md | grep -cE 'cinco (rotulos|salidas|bloques)'
  0
  $ git grep -nE "YouOtto|Company_TripleS|github.com" 081385a -- .claude CLAUDE.md _phases _methodology _templates _workflow | wc -l
  0
  $ git show 081385a:.claude/skills/protocol-close/SKILL.md | grep -noE '\b[A-Z]{1,2}-[0-9]+\b' | grep -vE ':PI-[0-9]+$' | wc -l
  0
  ```

📌 **Ancladas por el Paso 7c-bis al commit `081385a`.** Las siete reproducen lo publicado arriba.

### D-023 - El control SIN ANCLAR del 7c-quater solo mira lineas de orden
| Campo | Valor |
|---|---|
| Fecha | 2026-09-16 |
| Estado | Vigente |
| Origen | report_auditor |

- **Contexto:** `F-008` de `R-006`: la segunda orden del Paso 7c-quater de `protocol-close`, que nacio
  en `D-022` (punto 2), busca `diff --cached` en cualquier linea de la seccion 1, y salta con la prosa
  que describe el propio control. Verificado vigente contra `HEAD` (`efbc8d5`), corriendo la orden
  literal sobre una copia del informe en el scratchpad:

  ```
  $ git show efbc8d5:_audit/S-006.md > S-006.md
  $ sed -n '/^## 1\./,/^## 2\./p' S-006.md | grep -F 'diff --cached' | grep -vF -- '--stat --name-only' && echo "SIN ANCLAR en la seccion 1: ordenes git diff --cached que el Paso 7c tenia que traducir"
    por el Paso 1c); el Paso 7c traduce **en su sitio** las ordenes `git diff --cached` de la prosa de
  SIN ANCLAR en la seccion 1: ordenes git diff --cached que el Paso 7c tenia que traducir
  ```

- **Decision:** **se acepta** como `T-012`, a peticion del usuario. La segunda orden del 7c-quater
  solo cuenta **lineas de orden**: una linea que empieza por `$ git diff --cached` (con sangria o cita
  opcionales) o una orden entre comillas invertidas que empieza por `git diff --cached` y lleva una
  tuberia dentro. La skill declara la regla, su origen y su limite. **Revoca en parte `D-022`**: solo
  el patron de su punto 2; la traduccion del Paso 7c y la existencia del control siguen en pie.
- **Por que:** un control que salta con prosa se ignora, y eso es lo que paso en su primera ejecucion
  real. La tuberia es lo que distingue un recuento (lo que deja de reproducir) de una mencion.
- **Alternativas descartadas:**
  - **Exigir solo lineas `$ `:** no veria el recuento en prosa de `S-004`, que es justo el caso que
    `D-019` queria cubrir.
  - **Que la tabla mande publicar la salida en «Sin resolver» y seguir:** trata el sintoma; con el
    falso positivo quitado, la parada de la tabla vuelve a ser creible y se conserva.
  - **Nota fechada en `S-006.md`:** el informe es del cierre y esta auditado (mismo criterio que
    `D-018`); `R-006` ya dejo escrito que ninguna cifra de su seccion 1 es falsa.
- **Prueba sobre los tres informes ya commiteados.** El patron nuevo encuentra las dos ordenes reales
  de `S-004` (un recuento en prosa y una linea `$ `) y nada en `S-005` ni en `S-006`. ⚠️ **Corrige la
  prueba de `D-022`:** alli `S-005` daba `3`, y las tres eran menciones sin recuento, no ordenes; la
  cifra de `D-022` no se reescribe.

  ```
  $ for c in 74749f7:_audit/S-004.md 2846f62:_audit/S-005.md efbc8d5:_audit/S-006.md; do echo "== $c"; git show $c | sed -n '/^## 1\./,/^## 2\./p' | grep -E '^[[:space:]]*(> )?\$ git diff --cached|`git diff --cached[^`]*\|' | grep -vF -- '--stat --name-only' | wc -l; done
  == 74749f7:_audit/S-004.md
  2
  == 2846f62:_audit/S-005.md
  0
  == efbc8d5:_audit/S-006.md
  0
  ```

- ⚠️ **Consecuencia:** `.claude/` se separa un poco mas del esqueleto; la promocion sigue pendiente de
  aprobacion del usuario, como en `D-022`.
- **Criterio de cierre:** a ese commit, el 7c-quater declara la regla de linea de orden, no le queda
  el patron suelto, y los controles de fuga y de codigos siguen en cero.

  ```
  $ git show <hash>:.claude/skills/protocol-close/SKILL.md | grep -cF 'Linea de orden significa una de dos formas'
  1
  $ git show <hash>:.claude/skills/protocol-close/SKILL.md | grep -cF "grep -F 'diff --cached'"
  0
  $ git grep -nE "YouOtto|Company_TripleS|github.com" <hash> -- .claude CLAUDE.md _phases _methodology _templates _workflow | wc -l
  0
  $ git show <hash>:.claude/skills/protocol-close/SKILL.md | grep -noE '\b[A-Z]{1,2}-[0-9]+\b' | grep -vE ':PI-[0-9]+$' | wc -l
  0
  ```

### D-024 - Estado propio para la decision revocada en parte
| Campo | Valor |
|---|---|
| Fecha | 2026-09-16 |
| Estado | Vigente |
| Origen | usuario |

- **Contexto:** recomendacion sin hallazgo de `R-006` (seccion 5): el vocabulario de `Estado` solo
  tenia `Vigente` / `Revocada por D-XXX`, y el indice leia «Etapa 000_preproject cerrada | Revocada
  por D-020» aunque `D-020` solo revoco «el acta no se edita» y la etapa sigue cerrada. `D-023` vuelve a
  necesitarlo sobre `D-022`. Verificado contra `HEAD` (`efbc8d5`):

  ```
  $ git show efbc8d5:_persistence/decisions.md | grep -oE "^\| Estado \| .*" | sort | uniq -c
        1 | Estado | Revocada por D-020 |
       22 | Estado | Vigente |
        1 | Estado | `Vigente` / `Revocada por D-XXX` |
  ```

- **Decision:** el usuario elige un estado nuevo, `Revocada en parte por D-XXX`, en las convenciones
  de `decisions.md` y en su plantilla `_templates/000_preproject/020_decisions.md`, con una regla que
  pide a la nueva nombrar que punto revoca. `protocol-start` declara que ese estado **no es cerrado** y
  que se citan las dos. Se aplica a `D-015` (por `D-020`) y a `D-022` (por `D-023`), indice y ficha.
- **Por que:** el indice es lo que lee el arranque; una revocacion parcial escrita como total le hace
  reportar como revocado lo que rige.
- **Alternativas descartadas:**
  - **Nota en la ficha, sin estado nuevo:** cambio minimo, pero quien lee solo el indice sigue sin
    verlo, que es el problema de partida.
  - **Dejar `Vigente` y explicarlo en la nueva:** esconde la revocacion al indice por el lado contrario.
- ⚠️ **Consecuencia:** toca dos archivos copiables (`_templates/`, `.claude/`); se suman a la promocion
  pendiente de `D-022`.
- **Criterio de cierre:** a ese commit, la plantilla y el registro ofrecen el estado nuevo con su regla,
  `protocol-start` lo declara no cerrado, y `D-015` y `D-022` lo llevan en indice y ficha, sin que quede
  ninguna revocacion total en el registro.

  ```
  $ git show <hash>:_templates/000_preproject/020_decisions.md | grep -cF 'Revocada en parte por D-XXX'
  2
  $ git show <hash>:.claude/skills/protocol-start/SKILL.md | grep -cF 'Revocada en parte por D-XXX` no es cerrada'
  1
  $ git show <hash>:_persistence/decisions.md | grep -E '^\| .*\| Revocada (en parte )?por D-[0-9]+ \|$'
  | [D-015](#d-015---etapa-000_preproject-cerrada) | Etapa 000_preproject cerrada | 2026-09-16 | Revocada en parte por D-020 |
  | [D-022](#d-022---como-se-implementan-t-008-t-009-y-t-011-en-protocol-close) | Como se implementan T-008, T-009 y T-011 en protocol-close | 2026-09-16 | Revocada en parte por D-023 |
  | Estado | Revocada en parte por D-020 |
  | Estado | Revocada en parte por D-023 |
  ```
