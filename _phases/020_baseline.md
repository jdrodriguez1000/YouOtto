# Etapa `020_baseline`

> **La etapa en la que se define lo suficiente para empezar a construir, y ni una linea mas.** Lo
> que el Gate autorizo es una inversion, no un producto: aqui se decide que entra al MVP, que se
> queda fuera y con que se va a sostener — antes de la primera linea de codigo de producto.
>
> **La lee:** `manager`, y cualquier agente que necesite saber que esta autorizado en esta etapa.
> **Definiciones:** `project.md` (que es cada cosa y donde esta), `CLAUDE.md` (el metodo de trabajo)
> y la guia de metodo del proyecto —baseline, documentacion incremental, identificadores,
> trazabilidad, operacion hibrida—. Este archivo **no define conceptos ni repite datos** — dice
> **que se hace y que no** dentro de la etapa.

🔑 **Este archivo es agnostico y sirve para cualquier proyecto.** No lleva dentro ni un nombre, ni
una ruta, ni un codigo concreto: donde hace falta un dato del proyecto, se referencia `project.md`.
Los codigos aparecen siempre en su forma generica —`N-XXX`, `T-XXX`, `D-XXX`, `A-XXX`, `C-XXX`,
`F-NNN`—, nunca instanciados.

📌 **«Etapa» y «fase» son la misma cosa en esta metodologia**, y se usan indistintamente. La carpeta
se llama `_phases/` en ingles porque los nombres de archivos y carpetas van en ingles; el contenido
va en espanol.

⚠️ **Esta etapa hereda el ciclo de la jornada, no lo redefine.** Arranque con `session-starter`,
hallazgos abiertos primero, registro del porque en el momento, cierre con `session-closer`, auditoria
con `report_auditor`. Todo eso esta escrito en el archivo de `000_preproject` y **sigue vigente aqui
sin cambios**: lo que cambia al entrar en esta etapa es **que se puede producir**, no como se
trabaja.

🚨 **Que este archivo exista no significa que la etapa este adoptada.** Adoptar una etapa exige su
`D-XXX` y su fila en `project.md`, y declarar las etapas posteriores es trabajo de la etapa de
descubrimiento, no de esta. Mientras un proyecto no lo haya hecho, la respuesta correcta a «¿que
viene despues?» sigue siendo *«sin decidir»*, y este archivo es para el **preparacion, no
calendario**.

🔑 **Un archivo de etapa puede existir antes que su etapa, y eso no es un desfase.** Describe **que
se hace si se entra**, no que se vaya a entrar. Lo que si tiene que existir es el registro que diga
en que situacion esta: **si la etapa esta adoptada, su `D-XXX` de adopcion; si el archivo se
escribio por adelantado, el `D-XXX` que lo explica.** Un archivo de etapa sin ninguno de los dos se
lee, a los pocos meses, como una etapa adoptada que nadie decidio.

---

## 1. Que autoriza esta etapa

- **Definir el alcance del MVP** — y, sobre todo, **lo que queda fuera**, con su razon y su destino.
- **Escribir la primera version** de los cuatro documentos que la guia de metodo llama la baseline:
  el de producto, el de comportamiento, el de especificacion y el de arquitectura.
- **Elegir la tecnologia.** Es el primer momento del metodo en que se puede.
- **Disenar la Arquitectura Base** — no la incremental, que se amplia cuando una slice lo obligue.
- **Registrar como decision arquitectonica** lo que hoy sea caro de revertir.
- **Declarar en la tabla «Codigos» de `project.md`** los codigos de producto que esta etapa estrena,
  con su `D-XXX`, **antes de escribir el primero**.
- **Montar la trazabilidad** desde la necesidad hasta el escenario, y comprobarla en los dos
  sentidos.
- **Declarar las tres preguntas** —evaluacion, observabilidad, seguridad—, cada una con un artefacto
  que existe (§4, Paso 9).
- **Crear el esqueleto del repositorio**: carpetas, exclusiones del control de versiones, entorno
  reproducible.

🔑 **La segunda y la tercera son las que cambian respecto a las etapas anteriores, y conviene
decirlo.** Hasta aqui, escribir especificacion o elegir tecnologia estaba prohibido en todas ellas:
habria sido especificar sobre supuestos. Lo que lo desbloquea no es que haya pasado el tiempo, es
que **existe un dictamen y una decision de inversion detras** — y por eso la primera entrada de §3
es el dictamen, no un documento.

## 2. Que prohibe esta etapa

Es la seccion util del archivo. Aqui se descarrila siempre hacia el mismo lado: **especificar mas de
lo que hace falta**, porque especificar se siente productivo y no compromete a nada todavia.

| ❌ Prohibido | Por que |
|---|---|
| **Escribir codigo de producto** | eso es la etapa siguiente. Aqui se decide **que** se va a construir, no se construye |
| **Reutilizar el codigo del prototipo** | se archivo o se borro al cerrar el Gate; promoverlo convierte todas sus ausencias en deuda el dia uno |
| **Especificar lo que no entra al MVP** | es especular sobre el futuro lejano, y es la mitad cara de los dos extremos que el metodo evita |
| **Terminar los documentos antes de programar** | son artefactos **vivos**; darlos por cerrados aqui es el otro extremo |
| **Meter en el alcance todo lo que pidieron los usuarios** | solo pesan las tres primeras categorias de observaciones del prototipo; el resto es material de etapas posteriores |
| **Disenar para actores que no estan en el MVP** | el MVP es del actor originador; los demas entran cuando se justifiquen |
| **Arquitectura para una escala que no existe** | el MVP tiene que validar adopcion, no aguantar un volumen que nadie ha visto |
| **Una feature sin necesidad detras** | es alcance que entro sin que nadie lo decidiera — y es la condicion de salida que mas se incumple |
| **Escribir un codigo de producto antes de declararlo** en `project.md` | un prefijo que aparece en un archivo antes que en la tabla es un desfase, no una novedad |
| **Dar por hecho que el Gate autorizo mas de lo que autorizo** | aprobar autoriza **el MVP**, y nada mas alla de el |
| **Dar por cerrado un hallazgo propio** | `Implementado` lo escribe la auditoria siguiente, nunca `manager` |
| **Evaluar el propio trabajo** | quien construye no es su propio testigo |

### 🚨 La pregunta que corta esta etapa

> **¿Cuanto es «suficiente»?**

La respuesta es operativa, no filosofica:

> **Suficiente es lo que hace falta para construir el esqueleto que camina y la PRIMERA unidad
> incremental. Ni una linea mas.**

Todo lo que se especifique mas alla se escribira **antes de saber**, y habra que reescribirlo cuando
la primera unidad ensene algo. La baseline se amplia en cada iteracion de crecimiento: para eso es
incremental.

⚠️ **Y el sintoma de que la etapa se desbordo es concreto, no una sensacion:** si la etapa siguiente
esta esperando a que se termine de especificar, ya se paso. Lo que necesita para empezar son dos
cosas, y estan enumeradas en §8.

### 🚨 Esta etapa NO declara ninguna excepcion a `PI-5`

La etapa del prototipo si la declaraba, porque producia codigo deliberadamente descartable. **Aqui
no hay nada de eso**: lo que esta etapa produce es documentacion y registro, y su Definicion de
Terminado es la de siempre —**su bloque de verificacion**, con la orden ejecutada literal y su
salida cruda—. Si algun dia esta etapa produjera codigo que se conserva, ese codigo lleva su test en
verde como cualquier otro.

⛔ **Y la excepcion de la etapa anterior no se hereda.** Vale para el artefacto que nombro y para la
etapa que la declaro. Aqui no existe.

## 3. Entradas — que debe existir antes de empezar

Todas vienen del Gate y de las dos etapas anteriores, y **las seis son obligatorias**:

1. 🚨 **El dictamen tecnico del Gate**, con sus criterios resueltos uno por uno.
2. 🚨 **La decision del patrocinador sobre ese dictamen**, registrada con su `D-XXX`.
3. **Los hallazgos no bloqueantes del Gate** — entran como material de trabajo, no como ruido.
4. **Las observaciones del prototipo, clasificadas** — no en bruto.
5. **La validacion de negocio** del prototipo.
6. **Del descubrimiento:** las necesidades `N-XXX`, los actores con su actor concreto, y los `C-XXX`
   y `A-XXX` que sigan vivos.

🚨 **Las dos primeras son dos cosas distintas y hacen falta las dos.** El dictamen dice si los
criterios se satisfacen; **no dice si se construye**. Empezar esta etapa con un dictamen favorable y
sin la firma de quien responde por la inversion es empezar sin que nadie haya decidido gastar —
y la decision aparecera despues, cuando ya se haya gastado.

⚠️ **Las entradas se comprueban, no se suponen.** Que el Gate este cerrado no garantiza que las seis
esten escritas; lo que lo garantiza es abrirlas y verlas. Si falta una, se registra como `A-XXX` o
`C-XXX` y se escala al usuario antes de construir nada encima.

## 4. Procedimiento

🚨 **Antes del Paso 1 se reparte el trabajo.** Los diez pasos que siguen dicen **que** hay que
hacer; quien hace cada uno —humano, software, IA, o una combinacion— lo dice
**`_workflow/020_baseline.md`**, que se lee ahora y no despues. Ese reparto se adopta con su `D-XXX`
en el registro: leer la tabla no reparte nada.

⚠️ **Y se escribe al decidirlo, no al cerrar la etapa.** Reconstruido despues, lo que queda
registrado es el reparto que salio, no el que se eligio.

### Paso 1 — Leer el dictamen y lo que dejo abierto

Los hallazgos del Gate que **no** bloqueaban siguen vivos. Cada uno se resuelve aqui o se registra
como deuda con su motivo. **Ninguno se cierra por silencio.**

📌 **La casilla que se pierde siempre es «importante y no bloqueante»:** no tiene fecha, no grita, y
espera turnos enteros hasta que ya no se puede arreglar barato.

### Paso 2 — Definir el alcance del MVP, empezando por el «no»

Se escriben **dos listas**, y la segunda es la que trabaja:

| Lista | Que contiene |
|---|---|
| **Entra al MVP** | lo minimo para que el actor originador obtenga valor real |
| **NO entra al MVP** | todo lo demas, **con la razon y a donde va** |

La forma de una linea de la segunda:

```text
NO ENTRA — <capacidad>
  Razon:  <por que no, dicho contra la evidencia del prototipo o del descubrimiento>
  Va a:   <etapa posterior, y bajo que condicion>
```

🔑 **La lista del «no» es el artefacto que trabaja de verdad.** Es a lo que se apunta cuando alguien
pide algo a mitad de construccion, y el motivo escrito evita rediscutirlo desde cero cada vez. La
lista del «si» se cumple sola; la del «no» es la que hay que poder defender.

🚨 **Y al escribirla se comprueba la viabilidad de la operacion hibrida, actor por actor.** El MVP
puede funcionar con solo el actor originador mientras los demas siguen con sus procesos actuales
—**no hace falta digitalizar el ecosistema entero para lanzar**—, pero eso solo vale si esos
procesos **aguantan el volumen que el MVP va a generar**.

> **No basta decir «ese actor sigue con su hoja de calculo».** Hay que preguntar si sigue siendo
> operativamente viable con el volumen nuevo.

⚠️ **Si la respuesta es «no aguanta», ese actor entra al MVP** — y el alcance cambia hoy, que es
cuando cuesta una linea, y no dentro de tres meses.

### Paso 3 — Declarar los codigos de producto antes de escribir el primero

Esta etapa estrena identificadores que el proyecto todavia no tiene: los de feature, escenario,
unidad incremental, caso de prueba y decision arquitectonica. **Se declaran en la tabla «Codigos» de
`project.md`, con su `D-XXX`, antes de que aparezca el primero en ningun archivo.**

🚨 **Y se contrastan contra los codigos que el registro ya usa, uno por uno.** Un prefijo que
significa dos cosas segun el archivo en el que aparece hace ilegible justo lo que la trazabilidad
existe para poder leer. Si uno choca, **se cambia el del metodo, nunca el del registro**: el
registro ya tiene historia escrita y renombrarlo reescribiria trabajo ya auditado.

📌 **La guia de metodo propone un juego de prefijos.** Propone, no declara: lo que este proyecto usa
es lo que diga la tabla de `project.md`, y adoptar cada uno exige su `D-XXX`. Escribir el primer
identificador sin ese paso es un desfase.

### Paso 4 — El documento de producto

Proposito · problema · objetivos · alcance (las dos listas del Paso 2) · propuesta de valor ·
actores **solo los del MVP** · necesidades · restricciones · criterios generales de exito.

📌 **Los criterios de exito de aqui son los que el Gate siguiente va a comprobar**, y por eso se
escriben **ahora**, no cuando haya resultados que mirar. Elegir la metrica despues de ver el
resultado no es medir: es elegir la respuesta.

### Paso 5 — El comportamiento esperado: features y escenarios

Cada feature recibe su codigo y **nombra la `N-XXX` de la que sale**. Cada escenario recibe el suyo
y se escribe en la notacion de comportamiento que la guia de metodo fija —contexto, accion,
resultado esperado—, no en prosa.

🔑 **Los escenarios del camino feliz salen del prototipo ya validado, no se inventan.** El recorrido
que los usuarios completaron en las sesiones **es** el primer escenario. Es la unica parte de esta
etapa que no se decide: se copia de lo que ya se observo.

⚠️ **Feature y unidad incremental no son sinonimos**, y confundirlos aqui deforma el plan entero de
construccion: una unidad puede contener una feature, varias, o parte de una grande; y una feature
puede necesitar varias unidades. Las unidades no se escriben en esta etapa.

### Paso 6 — La especificacion

Funcionalidades · reglas · datos · interfaces · validaciones · requisitos funcionales y no
funcionales · restricciones · integraciones.

**Solo de lo que entra al MVP.** Si una regla pertenece a algo de la lista del «no», no se escribe —
y no se escribe «por si acaso», que es como vuelve siempre.

### Paso 7 — La arquitectura: solo la Base

Principios · componentes principales · limites · tecnologias · integraciones conocidas · seguridad ·
despliegue · atributos de calidad relevantes.

**La Arquitectura Incremental no se escribe aqui.** Se amplia cuando una unidad de construccion lo
obligue, y ese es su valor: la arquitectura tambien aprende.

⚠️ **La tecnologia se elige contra lo que el MVP tiene que sostener**, que es adopcion de un solo
actor. Elegirla contra una escala que nadie ha visto es la forma mas cara de esta etapa de
equivocarse, porque el error no se nota hasta mucho despues y para entonces ya lo sostiene todo.

### Paso 8 — Registrar como decision arquitectonica lo que sea caro de revertir

Contexto · problema · **alternativas** · decision · consecuencias.

Las que casi siempre lo son: lenguaje y marco de trabajo · almacenamiento · autenticacion · donde se
despliega · que se integra y que se construye.

📌 **El campo que mas vale es «alternativas».** Dentro de seis meses la pregunta no sera *«¿por que
esto?»* sino *«¿ya habiamos mirado aquello?»* — y esa es exactamente la que no se puede responder
reconstruyendo.

⚠️ **Un motivo que no puede decir que observacion lo respalda y cual lo tumbaria es una suposicion
con ropa de conclusion.** Escribir «se eligio asi a proposito» sin eso blinda la decision contra el
siguiente lector, incluido quien la escribio.

### Paso 9 — ⭐ Declarar las tres preguntas

Antes de la primera linea de producto. Las tres se cobran solas cuando ya hay algo que perder, y
entonces se construyen a la carrera.

| Pregunta | Que declara | Artefacto que la marca |
|---|---|---|
| **Evaluacion** — ¿funciona? | donde viven las pruebas | la carpeta existe y corre, aunque este casi vacia |
| **Observabilidad** — ¿que esta haciendo ahora? | donde se escribe el registro de ejecucion | la ruta decidida y el formato elegido |
| **Seguridad** — ¿que puede hacer y que le pueden hacer? | permisos, secretos y superficie expuesta | la lista escrita, y los secretos **fuera del historial** |

🚨 **Ninguna se marca prometiendo tenerla en cuenta: se marca con un artefacto que existe.** «Lo
tendremos en cuenta» no es una declaracion; es el recuerdo de que existia la pregunta.

📌 **Aqui se declaran, con dueno y sitio. Se construyen en las etapas de construccion.**

### Paso 10 — Montar la trazabilidad, y comprobarla en los dos sentidos

Se cierran los **tres primeros eslabones** de la cadena que va de la necesidad a la prueba: la
necesidad, su feature y su escenario. Las unidades de construccion y sus tareas todavia no existen.

- **Hacia adelante:** cada `N-XXX` que entra al MVP tiene al menos una feature.
- **Hacia atras:** cada feature sale de una `N-XXX`. **Sin excepcion.**

🔑 **La segunda direccion es la que sirve de control**, y es la unica de toda la etapa que se puede
comprobar mecanicamente: se recorre el artefacto de features y se busca una necesidad en cada linea.
Una feature sin necesidad detras es alcance que entro sin que nadie lo decidiera.

## 5. Artefactos que produce

Nueve artefactos de registro, mas el esqueleto del repositorio. **Ninguno es codigo de producto.**

| Artefacto | Que contiene | Donde se escribe |
|---|---|---|
| **Documento de producto** | proposito, problema, objetivos, alcance, actores del MVP, criterios de exito | carpeta de artefactos de la etapa, con plantilla |
| **Alcance** | las dos listas; la del «no» con razon y destino en cada linea | carpeta de artefactos de la etapa, con plantilla |
| **Features** | cada una nombrando la `N-XXX` de la que sale | carpeta de artefactos de la etapa, con plantilla |
| **Escenarios** | en la notacion de comportamiento, no en prosa | carpeta de artefactos de la etapa, con plantilla |
| **Especificacion** | solo de lo que entra al MVP | carpeta de artefactos de la etapa, con plantilla |
| **Arquitectura** | **solo la Base** | carpeta de artefactos de la etapa, con plantilla |
| **Las tres preguntas** | evaluacion, observabilidad y seguridad, cada una con su artefacto | carpeta de artefactos de la etapa, con plantilla |
| **Trazabilidad** | necesidad → feature → escenario, comprobada en los dos sentidos | carpeta de artefactos de la etapa, con plantilla |
| **Decisiones arquitectonicas** | una por decision cara de revertir | subcarpeta propia dentro de la carpeta de la etapa |

Y **el esqueleto del repositorio**: carpetas, exclusiones del control de versiones, entorno
reproducible.

⚠️ **Cual es la carpeta de artefactos y cual es el archivo de cada registro lo dice `project.md`, no
este archivo** — aqui no se escribe ninguna ruta propia del proyecto.

⚠️ **Toda carpeta de primer nivel se declara en `project.md`.** El cierre contrasta el arbol contra
esa tabla **en las dos direcciones**: una carpeta sin fila y una fila sin carpeta son el mismo
defecto por sus dos caras. Las carpetas que nazcan con el esqueleto del repositorio no son una
excepcion — que las cree una herramienta no las exime de estar declaradas.

**Las plantillas viven en la subcarpeta de esta etapa dentro de `_templates/`, una por artefacto.**
Un artefacto se escribe copiando su plantilla, y la regla de «adherencia a plantillas» tiene entonces
contra que comprobarse.

🚨 **Las plantillas y el reparto de `_workflow/020_baseline.md` son condicion de entrada, no trabajo
de dentro de la etapa.** Mientras falte cualquiera de los dos, **la etapa no puede abrirse aunque sus seis entradas
esten completas** — se especificaria sin forma acordada para escribirlo, y sin saber quien hace cada
paso.

⚠️ **Es la condicion que mas facil se salta, porque no la señala nadie.** Las seis entradas de §3
las traen el Gate y las etapas anteriores, y se echan en falta al buscarlas; estas dos no las trae
nadie, y su ausencia solo se nota **despues**, cuando ya hay medio documento escrito con una forma
que habra que rehacer.

## 6. Condicion de salida

La etapa termina cuando **las nueve son ciertas**:

- [ ] **Los cuatro documentos de la baseline existen** en su primera version, mas al menos una
      decision arquitectonica registrada.
- [ ] **El alcance tiene su lista del «no»**, con razon y destino en cada linea.
- [ ] **La viabilidad de la operacion hibrida se comprobo** para cada actor dejado fuera, y lo que
      salio esta escrito.
- [ ] 🚨 **Cada feature sale de una `N-XXX`.** Cero features huerfanas.
- [ ] **Cada `N-XXX` del alcance tiene al menos una feature.**
- [ ] **Los codigos de producto que la etapa estreno estan declarados** en `project.md` con su
      `D-XXX`, y ninguno colisiona con los del registro.
- [ ] **Las tres preguntas estan declaradas con artefacto**, no con intencion — y los secretos estan
      fuera del historial, comprobado con su orden y su salida cruda.
- [ ] **Los hallazgos no bloqueantes del Gate estan resueltos o registrados como deuda con su
      motivo.** Ninguno cerrado por silencio.
- [ ] **La cosecha esta hecha:** ninguna leccion de esta etapa queda `Sin evaluar` en la columna
      `Portabilidad` de `lessons.md`, y lo que quedo `Global candidata` esta ya en el archivo de
      lecciones globales, con su `D-XXX` y con la version nueva del archivo declarada.

Si alguna falla, la etapa sigue abierta.

🚨 **No hay Gate al final de esta etapa, y eso no es un descuido del metodo.** Un Gate es una
barrera de **inversion**, y aqui no se decide ninguna: la inversion del MVP ya la autorizo el Gate
anterior. Lo que hay es una condicion de salida, que se comprueba y no se vota.

⚠️ **Por lo mismo, esta etapa no puede ampliar lo que el Gate autorizo.** Si al especificar aparece
que el MVP tendria que ser bastante mas de lo que se aprobo, eso **no se resuelve escribiendo mas
alcance**: se escala al usuario, porque cambia la inversion que alguien firmo.

## 7. Que registra `manager` en `_persistence/`

| Archivo | Que se escribe aqui en esta etapa | Quien lo escribe |
|---|---|---|
| `progress.md` | el estado, la bitacora de sesiones, el siguiente paso | **`session-closer`** |
| `tasks.md` | las tareas y su estado | **`session-closer`**, con las excepciones escritas en el propio archivo |
| `decisions.md` | el alcance del MVP, la eleccion de tecnologia, los codigos de producto que se estrenan, y toda eleccion con sus **alternativas descartadas** | **`manager`** |
| `constraints.md` | los `C-XXX` nuevos que aparecieron al elegir tecnologia y al mirar las integraciones | **`manager`** |
| `assumptions.md` | los `A-XXX` que la arquitectura da por ciertos sin haberlos probado | **`manager`** |
| `lessons.md` | lo aprendido al especificar que no estaba en el descubrimiento ni en el prototipo | **`manager`** |
| `techdebt.md` | **las primeras entradas reales del proyecto**: lo decidido sabiendo que es provisional, y lo aplazado a proposito con su razon | `session-closer` **propone**; confirma el **usuario** |

📌 **La deuda tecnica empieza aqui aunque todavia no haya codigo.** La mas cara de un proyecto no es
la que se escribe mal: es la que se decide bien **sabiendo que es provisional**, y que a los seis
meses nadie recuerda que lo era.

🔑 **La decision arquitectonica y la entrada de `decisions.md` no son la misma anotacion, y las dos
hacen falta.** La primera es un artefacto del producto, vive con la baseline y la lee quien vaya a
tocar la arquitectura; la segunda es el registro de la jornada, vive en `_persistence/` y la lee
quien reconstruya como se llego hasta aqui. Escribir solo una deja cojo al otro lector.

🚨 **Los cuatro del porque no son del `session-closer`, y por eso son los que se pierden.** El agente
arranca en frio y solo ve archivos. En esta etapa lo mas valioso es **lo que se descarto**: las
tecnologias que no se eligieron, las capacidades que no entraron, las alternativas que se miraron y
se dejaron. Nada de eso aparece en ningun `git diff` — al diff solo llega el ganador.

⚠️ **Un codigo de producto no aparece antes que en la tabla «Codigos» de `project.md`.** Es el Paso
3, y es la etapa que mas codigos estrena de todo el metodo: se declaran todos en la misma pasada, con
su `D-XXX`, antes de escribir el primero.

## 8. Lo que esta etapa le entrega a la siguiente

La etapa siguiente tiene un solo trabajo: demostrar que la arquitectura **puede sostener el
desarrollo del producto**, con un camino tecnico de extremo a extremo. Para eso necesita de aqui
**dos cosas, y solo dos**:

### 1. La Arquitectura Base

Que piezas hay y como se conectan. No la especificacion completa: las piezas.

### 2. Un camino fino elegido

El recorrido de extremo a extremo que se va a probar. **Sale del escenario del camino feliz**, el
mismo que el prototipo ya valido con usuarios reales.

📌 **Todo lo demas de la baseline —la especificacion completa, el resto de features— la etapa
siguiente no lo necesita.** Y esa es la comprobacion barata de si esta etapa se desbordo: si la
siguiente esta esperando a que se termine de especificar, ya se paso, y hay que volver a la pregunta
de §2.

⚠️ **Lo que esta etapa entrega no es un plan cerrado, y decirlo importa.** Los cuatro documentos
son **artefactos vivos**: se amplian en cada iteracion de crecimiento, con lo que la construccion
vaya ensenando. Tratarlos como terminados obliga a defenderlos en vez de corregirlos — y entonces
lo que aprende el producto no llega nunca al documento que dice como es.
