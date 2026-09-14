# project.md — <NOMBRE DEL PROYECTO>

> 📄 **Se copia a `project.md`, en la raiz del repositorio y en minusculas.** Es el unico archivo del
> proyecto que guarda datos propios: todo lo que en los protocolos, los agentes y `CLAUDE.md`
> aparece como «el proyecto», «el remoto» o «las carpetas declaradas» se resuelve aqui.
>
> 🔑 **Es lo unico que cambia al llevar este metodo a otro proyecto.** Si un archivo necesita saber
> un nombre o una ruta, lo lee de aqui en vez de llevarlo escrito dentro.
>
> 🚨 **Rellenarlo no es opcional ni se puede posponer.** Los Pasos 1b y 2c del cierre, el control de
> etapas del Paso 3 y el Gate 2 leen sus valores de aqui: un valor que este archivo no declare deja
> **sin poder ejecutarse** al control que lo usaba, que va al reporte como `SIN COMPROBAR`. Un
> repositorio con este archivo a medias no arranca mal — arranca **sin controles**.

---

## Identidad

| Campo | Valor |
|---|---|
| Nombre del proyecto | `<NOMBRE>` |
| Rol de esta sesion | `manager` |
| Auditoria | agente `report_auditor`, dentro de este mismo repositorio |
| Idioma de trabajo | `<idioma del contenido>` para la comunicacion y la documentacion; `<idioma de los nombres>` para los nombres de archivos y de carpetas |
| Etapa actual | vive en `_persistence/progress.md`, no aqui |

📌 **Si la grafia del nombre, la del remoto y la de la carpeta en disco no coinciden, se anota aqui
cual es la correcta y por que la diferencia no rompe ningun control.** Una diferencia con motivo
escrito no es un fallo; una sin el, si — y sin la nota, alguien la leera como un error cada vez.

## Rutas

| Campo | Valor |
|---|---|
| Repositorio del proyecto | `<ruta absoluta en esta maquina>` |
| Informes de sesion | `_audit/S-XXX.md` |
| Auditorias | `_audit/R-XXX.md` |
| Tablero de auditorias | `_audit/index.md` |
| Estado de los hallazgos | `_audit/findings.md` |
| Entregables de `<etapa>` | `<carpeta>/` |
| Lecciones globales — repositorio | `<ruta absoluta del repositorio de lecciones>` |
| Lecciones globales — archivo | `<nombre del archivo>`, en la raiz de ese repositorio |
| Lecciones globales — remoto | `<url>` |
| Esqueleto de arranque — repositorio | `<ruta absoluta del esqueleto en esta maquina; un guion si no esta clonado aqui>` |
| Esqueleto de arranque — remoto | `<url del remoto del esqueleto>` |
| Esqueleto de arranque — version de partida | `<hash completo del commit del que salio este proyecto>` |

🔑 **Forma canonica: relativa y con `/`.** Las rutas relativas de esta tabla se escriben **tal
como se pegan en un comando**, con separador `/` y desde la raiz de este repositorio. Es la unica
forma valida, y por una razon concreta: funciona igual en Bash y en PowerShell. Quien copie un valor
de aqui a un bloque `bash` obtiene una orden que corre; no una que hay que traducir antes.

⚠️ **Las rutas absolutas de arriba son excepciones declaradas**, no una segunda forma a elegir:
existen porque nombran **una ubicacion en esta maquina** —la de este repositorio, la del
repositorio de lecciones y la del esqueleto de arranque—, no porque sirvan para navegar dentro de
ellos. **Para citar un archivo del proyecto se usa la relativa.**

📌 **Las tres filas de «Lecciones globales» son la ubicacion que `CLAUDE.md` no puede llevar
dentro.** La regla —que existen, para que sirven y cuando se consultan— vive en `CLAUDE.md`, que es
copiable y por eso no nombra ni una ruta. **El donde vive aqui**, que es el unico archivo del
proyecto que guarda datos propios. Si el repositorio de lecciones se mueve, se cambia en un sitio.

⚠️ **Ese repositorio no es una carpeta de este proyecto**, y por eso **no** le toca fila en
«Carpetas propias» ni la mira el control de carpetas del cierre. Es un recurso externo que se
consulta, como lo seria una documentacion en linea.

📌 **Las tres filas de «Esqueleto de arranque» dicen de donde salio este repositorio, y las lee
quien no puede llevar el dato dentro.** El barrido de desfase del cierre y el protocolo de promocion
viven en archivos que tienen que poder copiarse a otro proyecto tal cual, asi que la ruta la buscan
aqui. **Si el esqueleto se mueve, se cambia en un sitio.**

🔑 **La fila de «version de partida» es la unica que no se vuelve a tocar nunca.** Es el hash que
devolvio `git log -1 --format=%H` sobre el clone, **antes** de borrar su `.git`, y es lo unico que
queda de aquel historial: dice de que version del andamiaje partio este proyecto. Las otras dos
cambian si el esqueleto se mueve; esta, no.

⚠️ **La fila del repositorio local admite `—` y eso no es dejarla a medias.** El esqueleto puede no
estar clonado en esta maquina: entonces el barrido de desfase del cierre reporta `SIN COMPROBAR` con
su motivo, que es un resultado legitimo. Lo que no vale es inventar una ruta para que el control
parezca correr.

## Reparto de autoridad

| Actor | Que hace | Que NO hace |
|---|---|---|
| **usuario** | decide alcance, prioridades y lo irreversible | — |
| **`manager`** (esta sesion) | dirige, coordina, construye, y registra el porque en el momento | **no audita su propio trabajo** |
| **`report_auditor`** (agente) | audita un commit ya cerrado, verifica y recomienda | **no construye, no corrige, no decide** |
| **`gate1_auditor`** (agente) | emite el **dictamen tecnico** del Gate 1 sobre la evidencia del prototipo | **no construye, no corrige, y no decide si se construye el MVP** |
| **`gate2_auditor`** (agente) | emite el **dictamen tecnico** del Gate 2 sobre la evidencia del crecimiento | **no construye, no corrige, y no decide si se sigue invirtiendo** |
| **`phase_exit_auditor`** (agente) | emite la **revision tecnica** del acta de cierre de una etapa: verifica sus casillas de salida una por una | **no construye, no corrige, y no decide si la etapa esta cerrada** |

🚨 **Un Gate necesita dos firmas, y ninguna sustituye a la otra.** `gate1_auditor` dice si la
evidencia satisface los criterios, uno por uno, y ahi termina su papel; **quien decide si se
construye el MVP, se replantea o se detiene es el usuario, como patrocinador**, y esa decision queda
en `_persistence/decisions.md` con su `D-XXX`. Auditar y decidir son papeles incompatibles: quien
decide asume la consecuencia de la inversion, y quien la asume ya no puede senalar el error de esa
decision en la pasada siguiente.

⚠️ **El patrocinador puede decidir contra el dictamen; lo que no puede es cambiarlo.** Un criterio
`NO CUMPLE` es un hecho verificable contra los archivos. Si se decide construir igual, la `D-XXX`
dice por que — y eso vale mucho mas que un dictamen ablandado.

🚨 **Quien construye no puede ser su propio testigo, y por eso el auditor es un agente aparte.**
Arranca en frio: no vio la conversacion de la jornada, y solo puede leer archivos y `git`. Esa
distancia es toda su utilidad — un auditor al que se le cuenta lo que paso deja de auditar y pasa
a confirmar.

⚠️ **Y aqui esta el limite honesto de este esquema, escrito para que no se olvide:** a diferencia
de un auditor externo, **a este lo lanza el propio auditado**. Si `manager` no lo lanza, no hay
auditoria y nadie lo nota. Por eso lanzarlo **no es opcional ni queda a criterio**: es el ultimo
paso del cierre de sesion, igual que el arranque se dispara con la primera peticion y no con un
momento de arranque que nunca llega.

🚨 **Una recomendacion del auditor no se ejecuta por venir de el.** Entra como tarea con
`Origen: report_auditor` en `_persistence/tasks.md`, y solo despues de que `manager` la evalue y la
considere correcta. El rechazo tambien se registra, con su `D-XXX`.

🚨 **El estado de un hallazgo solo lo cambia una auditoria, nunca `manager`.** Un hallazgo se
cierra **verificando la correccion sobre un commit posterior**, y eso lo hace el auditor en su
siguiente pasada. Que nos parezca resuelto no lo resuelve: si el auditado pudiera cerrar sus propios
hallazgos, el registro diria lo que quisieramos que dijera.

## Etapas

| Campo | Valor |
|---|---|
| Etapas declaradas | `<etapa>`, `<etapa>` |
| Etapas posteriores a `<la ultima declarada>` | **no registradas** |

`000_preproject` es la etapa en la que no se construye producto: se monta la forma de trabajar
—protocolos, persistencia, canal con la auditoria—. Es deliberado que tenga nombre propio y no un
numero del flujo del producto: meterla en la nomenclatura de las demas seria fingir que el producto
avanza cuando lo que avanza es el andamio.

🚨 **Una etapa esta declarada cuando aparece en esa fila, y no antes.** Que exista su archivo en
`_phases/`, su subcarpeta en `_templates/` o su reparto en `_workflow/` **no la adopta**: esos tres
describen el metodo, y el metodo trae mas etapas de las que un proyecto concreto usa. Adoptar una
exige su `D-XXX`.

🚨 **Lo que el brief del cliente proponga como secuencia de etapas no las declara.** Un encargo es
una entrada, no una decision: lo que el equipo adopte tiene que quedar como `D-XXX` en
`decisions.md`. Hasta entonces, la respuesta correcta a «que etapas tiene el proyecto» son *«las
declaradas en la tabla, y nada mas»*.

🚨 **Que `_methodology/000_method.md` describa un ciclo completo no declara ninguna de sus
etapas.** Ese archivo es la **guia de metodo**: dice que etapas existen en el metodo y que pregunta
responde cada una. Lo que este proyecto ha adoptado es lo que diga la tabla de arriba. **Una guia no
es un acta.**

### Un Gate no es una etapa

🚨 **Los Gates del metodo no se declaran en la tabla de arriba, y no tienen archivo en `_phases/`.**
Una etapa es un **tramo de trabajo**: dura sesiones, autoriza producir unas cosas y prohibe otras, y
acumula artefactos. Un Gate es un **acto de juicio**: lee evidencia ya escrita, la contrasta contra
unos criterios y devuelve un dictamen. No produce producto y no dura.

Por eso un Gate se monta con la misma forma que los demas actos del repositorio —**un agente y su
skill**—, y no con un archivo de etapa. Adoptarlo exige su `D-XXX`.

| Gate | Agente | Skill | Donde deja su dictamen |
|---|---|---|---|
| **Gate 1** — ¿vale la pena construir el MVP? | `gate1_auditor` | `protocol-gate1` | `_audit/015_gate1/` |
| **Gate 2** — ¿vale la pena seguir invirtiendo? | `gate2_auditor` | `protocol-gate2` | `_audit/035_gate2/` |

⚠️ **El prefijo numerico marca donde cae en el ciclo, no que sea una etapa.** En cada caso se elige
para que se lea junto a la etapa cuya evidencia juzga.

⚠️ **Adoptar un Gate no adopta su etapa.** Las etapas declaradas siguen siendo las de la tabla de
arriba; la etapa cuya evidencia el Gate juzgara puede no estar entre ellas todavia.

🔑 **Lo que los dos Gates comparten:** la forma —agente y skill—, el vocabulario del dictamen
—`CRITERIOS SATISFECHOS`, `CRITERIOS NO SATISFECHOS`, `NO AUDITABLE`—, la regla de las dos firmas, y
que su ultimo criterio es del patrocinador y no se evalua.

⚠️ **Y lo que NO comparten, que es lo que obliga a escribir el segundo entero en vez de copiarlo:**
el primero comprueba que la **evidencia** naciera antes de las sesiones; el segundo comprueba que la
**medicion** —metrica, ventana y umbral— naciera antes del primer dato, y ademas **quien genero el
uso**. Son dos comprobaciones que el primero no tiene y que alli deciden el dictamen.

⚠️ **Aqui va el vocabulario, no el avance: que etapas existen, no en cual estamos.** En cual
estamos vive en `_persistence/progress.md`, que es lo que cambia. Declararlo tambien aqui crearia
dos sitios que hay que acordarse de actualizar a la vez, y el dia que uno se olvide habria que
decidir cual miente.

## Control de versiones

| Campo | Valor |
|---|---|
| Remoto | `<url del remoto>` |
| Rama principal | `<rama>` |
| Host del remoto | `<host>` |

📌 **La fila «Host del remoto» existe para el Paso 1b de `protocol-close`**, que la usa literal
dentro de su patron de busqueda. Va separada del remoto completo a proposito: buscar la URL entera
no encontraria una fuga escrita con otra ruta bajo el mismo host, y buscar el nombre del servicio a
secas devolveria cada mencion legitima de la palabra. **Un control que devuelve ruido acaba
apagado.**

## Carpetas propias

| Carpeta | Que es |
|---|---|
| `.claude/` | **Con que** se construye: los agentes y las skills que ejecutan los protocolos. Agnostica — no lleva dentro ningun dato de este proyecto, y el Paso 1b lo comprueba |
| `_brief/` | El encargo del cliente, tal como llego. **Entrada al proyecto, no registro de el** |
| `_persistence/` | **Como va** el trabajo: siete archivos, indice arriba y detalle debajo |
| `_audit/` | **Como se comprueba** el trabajo: el informe de cada sesion, la auditoria de cada una, el tablero y el registro de hallazgos. En las subcarpetas de cada Gate, ademas, sus dictamenes; y en una subcarpeta con el nombre de cada etapa, las **actas de cierre de esa etapa**. Ni unos ni otras son auditorias de sesion: **no** entran en el tablero ni en `findings.md` |
| `_methodology/` | **Con que criterio** se construye: el metodo de desarrollo y, en `sources/`, las fuentes de las que se consolido, que no se editan. Agnostica — el Paso 1b lo comprueba |
| `_phases/` | **Que se hace en cada etapa**: un archivo por etapa, con lo que autoriza, lo que prohibe, su procedimiento y su condicion de salida. Agnostica — el Paso 1b lo comprueba |
| `_templates/` | **Con que forma** se escribe cada artefacto: una subcarpeta por etapa o gate con artefactos con plantilla, y dentro una plantilla por artefacto. Guarda solo plantillas en blanco. Agnostica — el Paso 1b lo comprueba |
| `_workflow/` | **Quien hace cada cosa y con cuanto sistema**: `team.md`, el reparto entre Humano, Software e IA; `ai_levels.md`, los niveles y la rubrica para elegir uno; y un archivo por etapa que aplica los dos a sus actividades. Agnostica — el Paso 1b lo comprueba |
| `<carpeta de entregables>/` | **Los entregables de la etapa del mismo nombre** |
| `temporal/` | Area de trabajo del usuario. **Fuera del repositorio**, excluida en `.gitignore` |

🚨 **Esta tabla se contrasta contra el arbol en cada cierre de sesion** (Paso 2c de `protocol-close`):
las carpetas de primer nivel que existen, frente a las filas de aqui, **en las dos direcciones**. Una
carpeta sin declarar y una fila sin carpeta son el mismo defecto por sus dos caras.

🔑 **La convencion de las carpetas de entregables: se llaman como su etapa.** Una etapa que produzca
artefactos tiene **una carpeta de primer nivel con el mismo nombre que la etapa** —el mismo que
lleva su archivo en `_phases/` y su subcarpeta en `_templates/`—, y dentro van sus entregables. No
hay un prefijo distinto ni una carpeta contenedora: **el nombre de la etapa es la unica coordenada
que hay que recordar**, y sirve para los cuatro sitios. Cada carpeta nace cuando su etapa arranca,
no todas de golpe.

⚠️ **Dos clases de fila van a salir senaladas por ese control, y aqui se escribe su razon:**

- **Una carpeta excluida en `.gitignore`** existe en disco pero **nunca aparecera en el arbol
  versionado**. Si la exclusion es deliberada, se dice aqui por que — y sin ella, el `git add -A`
  del Paso 7 de `protocol-close` commitearia esa carpeta entera.
- **Una carpeta declarada por adelantado** todavia no existe en el arbol, porque su etapa no ha
  arrancado y `git` no versiona carpetas vacias. La fila fija **donde iran** los entregables antes
  de que haya el primero, que es cuando esa decision cuesta cero — y **toda declaracion anticipada
  exige su `D-XXX`**. La diferencia desaparece sola el dia que se escriba el primer artefacto; si
  ese dia no desaparece, **el control estara senalando algo real**.

⛔ **Lo que esa segunda razon no autoriza es declarar carpetas «por si acaso».** Vale para una
carpeta cuya etapa esta escrita y cuyo contenido esta enumerado; una fila para algo que aun no se
sabe que sera convierte este control en ruido, y un control con ruido deja de mirarse.

🔑 **Una diferencia con motivo escrito no es un fallo; una sin el, si.** Por eso las razones viven
aqui y no en una lista de excepciones dentro del control: una lista de excepciones envejece sin que
nadie la revise y acaba tapando justo lo que el control existe para ver.

## Codigos

| Codigo | Archivo | Que es |
|---|---|---|
| `S-XXX` | `_persistence/progress.md` | sesion de trabajo |
| `H-nn` | `_persistence/progress.md` | hito |
| `T-XXX` | `_persistence/tasks.md` | tarea |
| `D-XXX` | `_persistence/decisions.md` | decision |
| `C-XXX` | `_persistence/constraints.md` | restriccion |
| `A-XXX` | `_persistence/assumptions.md` | supuesto |
| `L-XXX` | `_persistence/lessons.md` | leccion aprendida |
| `DT-XXX` | `_persistence/techdebt.md` | deuda tecnica |
| `F-NNN` | `_audit/findings.md` | hallazgo de auditoria |
| `R-XXX` | `_audit/R-XXX.md` | auditoria de una sesion |

🚨 **Ningun codigo se reutiliza, en ningun archivo.** Un id retirado queda retirado; la entrada que
lo llevaba conserva su texto para que se entienda que se creia y por que dejo de valer.

🚨 **Los codigos del producto se anaden a esta tabla en la misma pasada en que se escribe el primer
artefacto que los usa**, cada uno con su `D-XXX`. Un codigo que aparece en un archivo antes que en
esta tabla es un desfase, no una novedad — y eso incluye los que solo aparecen en el **ejemplo** de
una plantilla: una plantilla que cita un codigo no declarado lo esta usando.

⚠️ **Un prefijo del metodo que choque con uno ya tomado aqui se cambia en el metodo, no en el
registro.** El registro tiene historia escrita en `_audit/`, y renombrarlo reescribiria trabajo ya
auditado. La excepcion es un prefijo que nombre **el mismo concepto** en los dos sitios: ahi la
coincidencia es deliberada, y darle dos nombres segun el archivo seria peor que compartirlo.

🚨 **Dos prefijos para el mismo concepto obligan a buscar en dos sitios lo mismo.** Si la guia de
metodo propone un codigo para algo que el registro ya cubre —supuestos, restricciones—, se usa el
del registro y se anota aqui la equivalencia, con su `D-XXX`.

---

## Que NO va en este archivo

⚠️ **Solo lo estable.** Si algo cambia de una sesion a otra —el avance, las tareas abiertas, los
bloqueos, que se hizo ayer— **no va aqui: va en `_persistence/progress.md`**.

Un archivo de identidad que hay que actualizar cada jornada deja de ser fiable, porque nadie
recuerda mantenerlo y todos lo siguen citando.

⚠️ **Y tampoco va aqui el porque de nada.** Este archivo dice **que es cada cosa y donde esta**; por
que se decidio asi vive en `_persistence/decisions.md`. Las notas de este archivo explican como usar
un dato, no justifican una decision.
