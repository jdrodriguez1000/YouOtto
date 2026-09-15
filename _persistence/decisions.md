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

---

## Convenciones

| Campo | Valores posibles |
|---|---|
| Codigo | `D-XXX`, correlativo, no se reutiliza |
| Estado | `Vigente` / `Revocada por D-XXX` |
| Origen | `usuario` / `manager` / `report_auditor` |

🚨 **Una decision no se borra ni se reescribe: se revoca.** La entrada antigua se queda con
`Revocada por D-XXX` en su estado, y la nueva explica que cambio y por que. El historial de por que
se penso distinto en su momento es parte del registro.

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
