# Etapa `040_evol`

> **La etapa en la que un producto que ya demostro adopcion aumenta su valor.** Se repite —una
> iteracion de evolucion, otra, otra— y **no termina** mientras haya valor que anadir. Es la unica
> etapa del metodo sin condicion de salida, y eso es deliberado: lo que terminan son sus
> iteraciones, no ella.
>
> **La lee:** `manager`, y cualquier agente que necesite saber que esta autorizado en esta etapa.
> **Definiciones:** `project.md` (que es cada cosa y donde esta), `CLAUDE.md` (el metodo de trabajo)
> y la guia de metodo del proyecto —evolucion, actores y su taxonomia, prototipo de evolucion,
> release objetivo, operacion hibrida—. Este archivo **no define conceptos ni repite datos** — dice
> **que se hace y que no** dentro de la etapa.

🔑 **Este archivo es agnostico y sirve para cualquier proyecto.** No lleva dentro ni un nombre, ni
una ruta, ni un codigo concreto: donde hace falta un dato del proyecto, se referencia `project.md`.
Los codigos aparecen siempre en su forma generica —`N-XXX`, `T-XXX`, `D-XXX`, `A-XXX`, `C-XXX`,
`L-XXX`, `DT-XXX`, `F-NNN`—, nunca instanciados.

⚠️ **Y los codigos del producto no se escriben aqui, ni siquiera genericos.** Cuales existen
—unidad incremental, caso de prueba, decision arquitectonica— lo declara la tabla «Codigos» de
`project.md`, y quien los estrena es la etapa de la baseline, no esta. Este archivo habla de
«slices», «tareas» y «tests» en prosa a proposito: **un archivo de etapa que instancia un codigo de
producto esta decidiendo por un proyecto que aun no lo ha declarado.**

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

🚨 **Es la segunda etapa del metodo que se repite, y se repite de otra manera que la anterior.** La
del crecimiento se repite **hasta agotar un alcance ya decidido**: sabe cuando ha terminado porque
tiene una lista delante. Esta se repite **mientras haya valor**, y no hay ninguna lista que consultar
—por eso su §6 no es una condicion de salida, sino la de cada iteracion—. Confundir las dos es lo
que produce la etapa infinita sin criterio, que es su forma tipica de fracasar.

---

## 1. Que autoriza esta etapa

- 🚨 **Anadir capacidades nuevas al producto, salidas del uso real.** No de la lista de lo que se
  aparto, sino de lo que la gente hizo con lo que hay.
- **Incorporar actores que quedaron fuera del producto minimo**, con la taxonomia de la guia de
  metodo, cuando su ausencia se demuestre cara (Paso 3).
- **Correr prototipos de evolucion** cuando la incertidumbre por el impacto lo justifique (Paso 4).
- **Pagar deuda tecnica** —la que dejo la etapa del crecimiento y la que dejen las iteraciones de
  esta—, o cerrarla como decision (Paso 6).
- **Quitar** funcionalidad que el uso real demostro que no usa nadie.
- **Mejorar, automatizar e integrar** lo que ya existe.
- **Declarar un release objetivo**, si el negocio lo necesita (§5).
- **Ampliar la arquitectura** cuando una capacidad nueva lo **obligue**, con su decision registrada.

🔑 **La primera es la que cambia respecto a la etapa anterior, y el cambio no es de permiso: es de
fuente.** En el crecimiento, que se construia salia de un alcance decidido de antemano a partir de
una hipotesis. Aqui sale de **evidencia de uso**. Es la primera vez en todo el metodo que el
producto se decide mirando lo que la gente hace en vez de lo que dijo que haria — y por eso es la
etapa donde el proyecto aprende de verdad.

⚠️ **Y lo autoriza de una en una, no de golpe.** Cada iteracion de evolucion es una inversion nueva
con su propia justificacion. Autorizar la etapa no autoriza su contenido.

## 2. Que prohibe esta etapa

Es la seccion util del archivo. Aqui se descarrila hacia un lado sobre todo, y llega disfrazado de
buena noticia: **con la adopcion demostrada, abrir el catalogo entero de lo que se habia apartado y
construirlo de corrido.**

| ❌ Prohibido | Por que |
|---|---|
| **Tratar la etapa como «ahora si, a construirlo todo»** | ver el recuadro de abajo — es el malentendido que define la etapa |
| **Construir de la lista del «no» sin evidencia nueva** | que algo este escrito no es evidencia de que se pida; ver el recuadro |
| **Incorporar un actor porque falta, no porque haga falta** | un actor entra cuando su ausencia se demuestra cara, no por completitud |
| **Saltarse el prototipo de evolucion** cuando incertidumbre × impacto es alto | el criterio decide, no las ganas |
| **Cortar por capas** | la prohibicion de la etapa anterior no caduca al pasar el Gate |
| **Perder la trazabilidad** | de la necesidad al test sigue cerrando en los dos sentidos. Esta etapa no es zona franca |
| **Construir hacia una «version final»** | no existe una etapa final; un release objetivo no cierra el producto (§5) |
| **Dejar la deuda sin decision** | «ya veremos» no es una de las tres opciones del Paso 6 |
| **Elegir la metrica de una iteracion despues de ver sus datos** | eso no es medir: es elegir el resultado, y aqui no hay Gate que lo pare |
| **Dar por cerrado un hallazgo propio** | `Implementado` lo escribe la auditoria siguiente, nunca `manager` |
| **Evaluar el propio trabajo** | quien construye no es su propio testigo |

### 🚨 Prohibicion 1 — Confundir lo que el Gate aprobo

> **Aprobar el Gate anterior no aprobo un plan de producto. Aprobo seguir invirtiendo.**

Es el malentendido mas caro del metodo, y llega justo despues de la buena noticia. Con la adopcion
demostrada, la tentacion es sacar la lista del «no» —esa que la baseline escribio y el crecimiento
respeto durante meses— y empezar por arriba.

**Pero cada iteracion es una inversion nueva, y responde a la misma logica que todas las
anteriores:** se anade lo que la evidencia pide, no lo que estaba esperando turno.

⚠️ **Una funcionalidad aplazada hace seis meses porque nadie la pedia sigue sin haber sido
pedida.** El tiempo no la convierte en demanda; solo hace que se lea como si lo fuera, porque lleva
mas tiempo escrita.

🔑 **Y hay una asimetria que conviene ver:** la lista del «no» se escribio **antes** de que existiera
uso real, con la misma informacion que tenia el resto de la baseline. El uso real es informacion
**nueva**, y llega despues. Construir de la lista sin volver a mirarla contra el uso es preferir el
dato viejo teniendo delante el nuevo.

### 🚨 Prohibicion 2 — La etapa que no termina nunca porque nadie decide que pare

Esta etapa no tiene condicion de salida (§6), y esa libertad tiene un fallo asociado que hay que
nombrar: **seguir abriendo iteraciones por inercia**, porque el equipo existe, porque el producto
esta vivo, porque siempre hay algo que mejorar.

| ❌ Inercia | ✅ Decision |
|---|---|
| «abrimos la siguiente porque quedan cosas» | «abrimos la siguiente porque **esto** vale mas de lo que cuesta» |
| la lista de ideas no se vacia nunca | la lista de ideas **no es** el criterio |
| se mide la actividad | se mide el efecto (Paso 7) |

📌 **Dejar de evolucionar no es cerrar el producto.** Son dos cosas distintas, y confundirlas hace
que nadie se atreva a proponer la primera. Un producto que deja de evolucionar sigue funcionando,
sigue en uso y sigue manteniendose.

### 🚨 Esta etapa NO declara ninguna excepcion a `PI-5`

La etapa del prototipo si la declaraba, porque producia codigo deliberadamente descartable. **Aqui
es al reves y con mas motivo que en ninguna otra:** esta etapa toca codigo que ya esta en manos de
usuarios reales, y cada cambio puede romper algo que hoy funciona. Su Definicion de Terminado es la
de siempre: **un test automatizado en verde** para el codigo, y **su bloque de verificacion** —orden
literal y salida cruda— para el registro.

⛔ **Y la excepcion de la etapa del prototipo no se hereda.** Vale para el artefacto que nombro y
para la etapa que la declaro. Los prototipos de evolucion del Paso 4 **si** son descartables, pero
eso no los ampara: son una herramienta de decision, no un producto, y lo que se construya despues de
ellos lleva su test como todo lo demas.

🚨 **Al test hay que verlo en ROJO antes de verlo en verde**, igual que en las dos etapas de codigo
anteriores. Aqui se cobra ademas por otro lado: **una regresion es un test que existia y dejo de
pasar**, y eso solo funciona si el test detectaba algo de verdad.

## 3. Entradas — que debe existir antes de empezar

**Cinco, y las cinco son obligatorias.**

1. 🚨 **El veredicto aprobatorio del Gate que cierra la etapa anterior**, en el sitio donde
   `project.md` declare que viven los dictamenes. **Sin el, esta etapa no empieza** — y no empieza
   tampoco con un veredicto que exista pero no sea aprobatorio.
2. **Los hallazgos de ese Gate**, y en particular el de la operacion hibrida: **que actor quedo
   saturado** por trabajar mitad en el producto y mitad fuera de el.
3. **El registro de deuda tecnica** al dia, con lo que cada entrada dejo a medias y por que.
4. **Los datos de uso real** de la ventana de observacion: que se usa mucho, que se usa poco, **y que
   no lo abre nadie**.
5. **La baseline al dia y la trazabilidad cerrada**, tal como el Gate las juzgo.

🚨 **Las dos primeras vienen del Gate y llegan solas; las tres ultimas no, y esa asimetria hay que
decirla en vez de disimularla.** El dictamen se pone delante porque alguien lo emite. La deuda, los
datos de uso y la baseline **existen desde antes y nadie vuelve a ponerlos delante**: se van a
buscar, y es en esta etapa donde se nota si se cuidaron.

⚠️ **La cuarta es la que mas veces falta, y su ausencia se descubre tarde.** Si el mecanismo de
observabilidad se quedo en la version minima del esqueleto y nunca crecio, **la ventana ya paso** y
no hay dato que mirar. Entonces esta etapa arranca decidiendo por opinion, que es exactamente lo que
existe para evitar.

⚠️ **Las entradas se comprueban, no se suponen.** Que la etapa anterior este cerrada no garantiza que
las cinco esten. Si falta una, se registra como `A-XXX` o `C-XXX` y se escala al usuario antes de
construir nada encima.

## 4. Procedimiento

🚨 **Antes del Paso 1 se reparte el trabajo.** Los ocho pasos que siguen dicen **que** hay que hacer;
quien hace cada uno —humano, software, IA, o una combinacion— lo dice el archivo de reparto de esta
etapa en `_workflow/`, que se lee ahora y no despues. Ese reparto se adopta con su `D-XXX` en el
registro: leer la tabla no reparte nada.

⚠️ **Y se escribe al decidirlo, no al cerrar la etapa.** Reconstruido despues, lo que queda
registrado es el reparto que salio, no el que se eligio.

🚨 **Esta etapa es un bucle, y los pasos no valen lo mismo.** Los pasos **2 a 7** se recorren **por
cada iteracion de evolucion**; el **1** ordena lo que ya se sabe antes de la primera, y el **8**
decide si hay otra.

🚨 **El orden del Paso 4 respecto al 5 no es una preferencia: es lo que hace barata la etapa.** Se
decide si hace falta prototipar **antes** de construir. Decidido despues, la respuesta siempre es que
no hacia falta — porque ya esta construido.

### Paso 1 — Ordenar lo que ya se sabe, antes de escuchar nada nuevo

Antes de recoger peticiones hay **tres fuentes de trabajo con evidencia detras**, y esa es toda su
ventaja sobre cualquier idea nueva:

| Fuente | Que aporta |
|---|---|
| **Los hallazgos del Gate** | lo que la revision independiente midio, incluida la operacion hibrida |
| **Los datos de uso real** | que funcionalidad se usa, y **cual no la abre nadie** |
| **El registro de deuda tecnica** | lo que se aplazo a proposito y sigue vivo |

📌 **Lo que no usa nadie tambien es informacion, y casi nunca se mira.** Una funcionalidad del
producto minimo con cero uso en toda la ventana es candidata a **quitarse**, no a mejorarse. Cuesta
proponerlo —alguien la construyo, y funciona— y por eso hay que escribirlo aqui: si no esta en el
procedimiento, no se plantea.

⚠️ **Cero uso no significa siempre «sobra».** Puede significar que no se encuentra, que llega tarde
en el flujo, o que quien la necesitaba no llego a entrar. **Es una pregunta, no un veredicto**, y se
contesta mirando por que, no borrando.

### Paso 2 — Decidir que entra en esta iteracion

**El criterio de prioridad, en este orden:**

1. **Lo que la evidencia demostro roto.** El actor saturado que el Gate encontro va primero: si el
   producto minimo desplazo el problema a una persona en vez de resolverlo, eso se paga antes que
   cualquier mejora.
2. **Lo que los usuarios reales pidieron y se repite.** Pedido por varios, no por uno — y menos por
   el que mas cerca esta.
3. **Lo que el negocio necesita** para el resultado que espera.
4. **La deuda tecnica** que toque pagar (Paso 6).

🔑 **Se escribe tambien lo que NO entra, con su razon y su destino.** La lista del «no» no fue un
artefacto de la baseline que caduco al terminar el producto minimo: **es permanente**, y esta etapa
la sigue alimentando.

⚠️ **Y el orden importa mas aqui que en la etapa anterior.** Alli el alcance estaba cerrado y el
orden solo cambiaba cuando se aprendia cada cosa. Aqui el orden **es** la decision: lo que se queda
en el puesto cuatro durante tres iteraciones seguidas, en la practica, se ha descartado sin que nadie
lo haya decidido.

### Paso 3 — Si entra un actor nuevo, es casi un descubrimiento pequeno

Incorporar un actor es el cambio estructural mas grande que hace esta etapa, y **no se trata como
una capacidad mas**. Se recorre, en pequeno, lo que hizo la etapa de descubrimiento:

1. **Quien es, en concreto** — el rol y una persona alcanzable, no una categoria.
2. **Cual es su camino feliz**, que **no** es el del actor generador.
3. **Que proceso manual sustituye**, y que pasaba con lo que ese proceso hacia ademas — que casi
   siempre es mas de lo que su nombre dice.
4. 🚨 **Prototipo de evolucion, casi siempre.** Un actor nuevo es uno de los disparadores explicitos
   del criterio de la guia de metodo.

> **Un actor nuevo trae un camino feliz que nadie ha validado nunca.** La adopcion del actor
> generador no dice absolutamente nada sobre si el nuevo sabra usar lo suyo — son personas
> distintas, con otro trabajo y otro momento del dia.

⚠️ **Y trae supuestos nuevos, que se registran como tales.** Todo lo que se de por hecho sobre como
trabaja hoy —cuantas veces al dia, con que herramienta, con cuanta prisa— va a `assumptions.md`
**antes** de construir encima, con su forma de validarlo y su disparador.

### Paso 4 — Prototipo de evolucion, en proporcion

El criterio es el de siempre, y lo fija la guia de metodo:

> **Nivel de incertidumbre × impacto de equivocarse.**

| Si, prototipar | No hace falta |
|---|---|
| entra un actor nuevo | una mejora sobre algo ya validado |
| comportamiento que nadie ha visto todavia | un cambio visual menor |
| varias alternativas funcionales sobre la mesa | una correccion ya definida |
| alto riesgo de que se rechace | un cambio que se puede deshacer en una tarde |

Y la proporcionalidad tambien: **un boceto, un wireframe o una pantalla estatica bastan.** No tiene
la profundidad del prototipo inicial, y no lo pretende.

📌 **No abre una etapa ni un Gate.** Su resultado autoriza construir **esa** capacidad, y nada mas.
Es una herramienta que se usa **dentro** de la iteracion.

⚠️ **El fallo contrario existe y cuesta igual:** convertirlo en tramite. La mayoria de las mejoras no
lo necesitan, y obligar a prototiparlas todas es la forma mas rapida de que se deje de prototipar
tambien lo que si hacia falta.

### Paso 5 — Construir con la mecanica de la etapa anterior

Unidades incrementales verticales, tareas trazables a su unidad, tests por escenario, y actualizacion
de la baseline **al cerrar cada unidad**. **El procedimiento de la etapa del crecimiento se aplica
entero**, y este archivo no lo repite.

🔑 **Esta etapa no cambia como se construye. Cambia por que se construye.** En el crecimiento el
alcance venia de una hipotesis escrita antes de tener usuarios; aqui viene de uso real. La mecanica
que protege la construccion es la misma porque el riesgo tecnico es el mismo.

⚠️ **Y hay un riesgo que alli no existia: la regresion.** Ahora hay gente que depende de lo que ya
funciona. Una capacidad nueva que rompe una vieja no es un avance con un defecto: es un retroceso
con una funcionalidad al lado.

### Paso 6 — La deuda tecnica, con plazo o con entierro

Cada entrada del registro de deuda que la iteracion toque recibe **una de tres**, y **ninguna es «ya
veremos»**:

| Decision | Que significa |
|---|---|
| **Se paga en esta iteracion** | entra como una unidad incremental mas, con su test |
| **Se aplaza con condicion observable** | «hasta que pasemos de tal volumen» — una condicion que alguien pueda comprobar, no una fecha vaga |
| **Se acepta como permanente** | se cierra la entrada y se dice por que. Deja de ser deuda y **pasa a ser una decision**, con su `D-XXX` |

🔑 **La tercera es la que falta en casi todas las listas de deuda, y es la que las mantiene sanas.**
Una lista donde nada se cierra crece hasta que nadie la lee — y una lista que nadie lee protege
exactamente igual que no tenerla, con el coste anadido de que parece que protege.

⚠️ **«Se aplaza con condicion» solo vale si alguien va a ver la condicion.** Una condicion observable
que nadie observa es «ya veremos» con mejor redaccion. Si no hay quien la mire, la entrada tiene que
ir a una de las otras dos.

### Paso 7 — Declarar la metrica de la iteracion, y medirla

**Antes de construir** se escriben cuatro cosas, y las cuatro con los datos aun sin llegar:

```text
QUE SE ANADE:  <la capacidad>
QUE SE ESPERA: <que comportamiento deberia cambiar>
METRICA:       <como se vera>
VENTANA:       <desde> → <hasta>, en fechas absolutas
```

Al agotarse la ventana se compara, y **el resultado se escribe tanto si confirma como si no**.

> **Esta etapa no tiene Gate, pero la revision independiente no se va.** Cada iteracion declara su
> metrica antes de construir, y la auditoria la lee despues. Es mas ligero que un Gate —no autoriza
> ni detiene— pero mantiene en pie lo unico que hace que una medicion valga: **que la regla existiera
> antes del dato.**

🚨 **Y esto no inventa un tercer Gate.** El metodo define dos y ninguno mas. La diferencia es la que
importa: un Gate **decide una inversion** y puede decir que no; esto solo **deja constancia** de si lo
que se esperaba ocurrio.

📌 **Sin este paso, la disciplina se evapora justo despues del Gate**, y el producto crece por
opinion durante anos. Es el momento exacto en que se pierde, porque es el primero en que ya no hay
nadie esperando un dictamen.

⚠️ **Una metrica que no se cumple no obliga a deshacer lo construido, pero si a escribirlo.** Lo que
no se puede es dejar la ventana pasar en silencio: una iteracion cuya metrica nadie miro es
indistinguible de una que fallo.

### Paso 8 — Cerrar la iteracion y decidir si hay otra

Se comprueba la lista de §6, y despues se decide, **con las cuatro condiciones a la vez**:

> **Se abre otra iteracion mientras exista valor, necesidad, oportunidad e inversion justificada.**

Cuando alguna deja de cumplirse, **no se cierra el producto: se deja de evolucionar**, que es otra
cosa (§2, prohibicion 2).

🚨 **La decision de no abrir otra se registra igual que la de abrirla.** Es la que nadie escribe
—porque no produce trabajo, y lo que no produce trabajo no deja rastro— y es justo la que alguien
querra entender dentro de un ano.

## 5. Artefactos que produce

**Cinco artefactos, y dos de ellos —el registro de la iteracion y el de cada unidad incremental— se
escriben una vez por cada vuelta del bucle.**

| Artefacto | Que contiene | Donde se escribe |
|---|---|---|
| **Codigo del producto** | creciendo por capacidades, no por capas | la carpeta de codigo declarada en `project.md` |
| **Registro de cada iteracion** | que entra, **que no entra y por que**, la metrica y la ventana del Paso 7, y el resultado al agotarse | carpeta de artefactos de la etapa, con plantilla |
| **Registro de cada unidad incremental** | su enunciado, sus tareas, sus tests, que enseno y que dejo a medias | carpeta de artefactos de la etapa, con plantilla |
| **Los prototipos de evolucion y su resultado** | que se pregunto, que se enseno, y que se decidio | carpeta de artefactos de la etapa |
| **Baseline actualizada** | los documentos que cada unidad incremental toco, incluida la trazabilidad | donde vivan los artefactos de la etapa de la baseline |

⚠️ **Cual es la carpeta de artefactos y cual es el archivo de cada registro lo dice `project.md`, no
este archivo** — aqui no se escribe ninguna ruta propia del proyecto.

⚠️ **Toda carpeta de primer nivel se declara en `project.md`.** El cierre contrasta el arbol contra
esa tabla **en las dos direcciones**: una carpeta sin fila y una fila sin carpeta son el mismo
defecto por sus dos caras. Las carpetas que nazcan en esta etapa no son una excepcion.

🚨 **Las plantillas de esta etapa y el reparto de `_workflow/040_evol.md` son condicion de entrada,
no trabajo de dentro de la etapa.** Mientras falte cualquiera de los dos, **la etapa no puede abrirse
aunque sus cinco entradas esten completas** — se evolucionaria sin forma acordada para registrar lo
que cada iteracion ensene, y sin saber quien hace cada paso.

📌 **Las plantillas van en la subcarpeta `_templates/040_evol/`, una por artefacto de registro:** la
del registro de iteracion —que lleva dentro la declaracion del Paso 7— y la del registro de unidad
incremental. Se nombra la carpeta entera y no «la subcarpeta de esta etapa» porque una referencia
generica cumple para quien lee y **desaparece para el control**: si esta condicion se comprueba con
una orden, esa orden necesita un nombre que buscar.

🔑 **Son dos y no tres, a diferencia de la etapa anterior.** Alli la declaracion de la ventana de
observacion tenia plantilla propia porque se escribia **una vez** para toda la etapa y la juzgaba un
Gate. Aqui la declaracion del Paso 7 se escribe **en cada iteracion** y no la juzga nadie mas que la
auditoria: separarla de su iteracion crearia un artefacto suelto por vuelta del bucle sin nada que lo
ate al trabajo que describe.

🚨 **Estado de los dos: los dos artefactos ya estan escritos; lo que falta es adoptar el
reparto.** Decirlo aqui es parte de la condicion: un archivo de etapa que exige dos artefactos sin
decir en que estado esta cada uno deja al lector suponiendo lo que le convenga.

| Artefacto | Estado | Que falta para poder abrir la etapa |
|---|---|---|
| `_templates/040_evol/` — las dos plantillas de registro | **escritas** | nada por este lado |
| `_workflow/040_evol.md` — el reparto del trabajo | **escrito, sin adoptar** | adoptarlo con su `D-XXX`, al abrir la etapa |

⚠️ **Escrito no es adoptado, y la condicion pide las dos cosas.** Leer la tabla de un reparto no
reparte nada: mientras no exista el `D-XXX` que dice **que se adopta y que se descarta** de ella, la
etapa no puede abrirse aunque sus cinco entradas de §3 esten completas.

🔑 **Y esa segunda mitad no se puede adelantar, a diferencia de la primera.** El archivo se escribe
antes porque describe el metodo y no cambia al cambiar de producto; la adopcion es una decision
**sobre un proyecto concreto en un momento concreto**, y tomarla hoy —con la etapa a dos Gates de
distancia y sin declarar— seria elegir un reparto para un equipo que todavia no se sabe cual es.

🔑 **Esta linea se actualiza cuando el estado cambie, y por eso no lleva fecha.** Es un campo de
estado dentro de un procedimiento vivo, no una nota fechada del registro: lo que no se puede es que
diga que un artefacto no existe cuando existe.

⚠️ **Es la condicion que mas facil se salta, porque no la senala nadie.** Las cinco entradas de §3 se
echan en falta al buscarlas; estas dos no las trae nadie, y su ausencia solo se nota **despues**,
cuando ya hay tres iteraciones cerradas y lo que ensenaron se registro cada vez de una forma
distinta.

### El release objetivo, si el negocio lo pide

Se declara nombrando **que alcance lo define** —un proyecto, un contrato, una estrategia, un
cliente— y en que iteracion cae:

```text
RELEASE OBJETIVO: <nombre para el negocio>
  Definido por:   <que lo define: contrato, estrategia, compromiso>
  Alcanzado en:   <la iteracion>
  Alcance:        <que actores y que capacidades operan en la aplicacion>
```

📌 **Un release objetivo no cierra el producto.** Despues pueden seguir mas iteraciones. **Es una
etiqueta para el negocio, no un final del ciclo** — y escribirlo asi en el momento de declararlo
evita la conversacion, un ano despues, sobre por que «la version final» sigue cambiando.

## 6. Condicion de salida

🔑 **Esta etapa no tiene condicion de salida, y es a proposito.** No existe una etapa final en este
metodo: el producto no se trata como algo que llega a una version definitiva.

**Las que si terminan son las iteraciones.** Cada una cierra cuando **las seis son ciertas**:

- [ ] **Lo que entro esta construido**, con sus tests y su trazabilidad cerrada en los dos sentidos.
- [ ] **La baseline esta al dia** — se actualizo al cerrar cada unidad incremental, no al final.
- [ ] 🚨 **La ventana de la metrica del Paso 7 se agoto y se comparo**, con su resultado escrito
      diga lo que diga.
- [ ] **Cada entrada de deuda que se toco tiene una de las tres decisiones del Paso 6**, y ninguna
      dice «ya veremos».
- [ ] **La lista del «no» esta actualizada** con lo que se aparto esta vez, con su razon y su
      destino.
- [ ] **La cosecha esta hecha:** ninguna leccion de esta iteracion queda `Sin evaluar` en la columna
      `Portabilidad` de `lessons.md`, y lo que quedo `Global candidata` esta ya en el archivo de
      lecciones globales, con su `D-XXX` y con la version nueva del archivo declarada.

Si alguna falla, la iteracion sigue abierta.

⚠️ **La cosecha se hace por iteracion y no al cerrar la etapa, y es la unica etapa donde eso pasa.**
En las demas se cosecha al salir; aqui no hay salida. Dejarla «para el final» significa no hacerla
nunca — y esta es, con diferencia, la etapa que mas lecciones produce (§8).

### ⚠️ El resultado alternativo valido: dejar de evolucionar

Puede pasar que al cerrar una iteracion no se cumpla alguna de las cuatro condiciones del Paso 8.
**Eso no es un fracaso del producto ni del equipo:** es la etapa haciendo su trabajo.

Cuando pasa:

1. **No se resuelve buscando algo que construir.** Abrir una iteracion para que el equipo tenga
   trabajo es la forma mas cara de posponer una conversacion.
2. Se **escala al usuario**, porque dejar de invertir es una decision de quien patrocina, no de quien
   construye.
3. Lo que salga se registra con su `D-XXX` y las alternativas descartadas, **incluida la de seguir**.

🚨 **Y el producto sigue vivo.** Deja de crecer; no deja de funcionar, ni de mantenerse, ni de
usarse. Un registro que no distinga las dos cosas hara que dentro de un ano nadie sepa si aquello se
abandono o simplemente estaba terminado.

## 7. Que registra `manager` en `_persistence/`

| Archivo | Que se escribe aqui en esta etapa | Quien lo escribe |
|---|---|---|
| `progress.md` | el estado, la bitacora de sesiones, el siguiente paso | **`session-closer`** |
| `tasks.md` | las tareas y su estado | **`session-closer`**, con las excepciones escritas en el propio archivo |
| `decisions.md` | que entra en cada iteracion **y que no, con su razon**; el orden elegido; la decision de cada entrada de deuda del Paso 6; la de abrir o no abrir otra iteracion | **`manager`** |
| `constraints.md` | los `C-XXX` que solo aparecen con uso real y volumen: cuotas, concurrencia, ventanas de servicio, limites de terceros | **`manager`** |
| `assumptions.md` | los `A-XXX` que el uso real, ya con volumen, **confirmo o tumbo**; y los nuevos que trae cada actor incorporado | **`manager`** |
| `lessons.md` | lo aprendido del producto vivo — **la fuente mas rica de todo el proyecto** | **`manager`** |
| `techdebt.md` | lo nuevo, y **las entradas cerradas** con su decision del Paso 6 | `session-closer` **propone**; confirma el **usuario** |

📌 **La deuda se anota con la unidad incremental que la genero.** Sin eso, dentro de unos meses hay
una lista de deudas sin dueno, y nadie sabe que se rompe al pagarlas ni por que se contrajeron.

🚨 **Es la etapa que mas `C-XXX` produce de todo el metodo, y conviene esperarlo.** Los limites que
importan de verdad —cuanto aguanta, cuantos a la vez, cuanto cuesta al mes— no aparecen al disenar ni
al construir: aparecen cuando hay gente usandolo todos los dias.

⚠️ **Y sigue tumbando supuestos, ahora con volumen detras.** El crecimiento tumbaba supuestos al
tocar la realidad por primera vez; aqui se tumban los que **sobrevivieron** a esa primera vez y solo
fallan a escala. Un supuesto tumbado se marca, no se borra: lo que hay que poder leer despues no es
solo cual era el limite, sino que se creia antes de tropezarse con el.

🚨 **Los cuatro del porque no son del `session-closer`, y por eso son los que se pierden.** El agente
arranca en frio y solo ve archivos. En esta etapa lo mas valioso es **que evidencia hizo que se
construyera esto y no aquello**, y eso no aparece en ningun `git diff`: al diff solo llega lo que se
construyo, nunca lo que se miro para decidirlo.

## 8. Lo que esta etapa le devuelve al archivo de lecciones globales

Es la etapa larga: donde el proyecto aprende de verdad, con usuarios encima y durante meses. Y por
eso es la que **alimenta hacia atras** el archivo de lecciones globales que `project.md` localiza.

🔑 **Es el unico punto del metodo donde el trabajo va del proyecto al metodo.** En todo lo demas, el
metodo alimenta al proyecto.

Al cerrar cada iteracion se revisa `lessons.md` con **una sola pregunta**:

> **¿Esto seguiria siendo cierto en un proyecto de otro cliente y otro dominio?**

| Respuesta | Donde vive |
|---|---|
| **No** — es de este negocio, este cliente, este sistema | se queda en `lessons.md`. Ahi es donde vale, y no vale menos por quedarse |
| **Si** — es una **forma** de fallar, no una anecdota | sube al archivo de lecciones globales, con su `D-XXX` |

Y al subirla **se reescribe como detector, no como recuerdo**:

| ❌ Anecdota | ✅ Detector |
|---|---|
| «el sistema del cliente devolvia las fechas en otra zona horaria y rompio el listado» | «una integracion que no declara su zona horaria produce fechas correctas en el servidor y equivocadas en pantalla» |
| «se cayo el jueves porque el proceso nocturno no habia terminado» | «un proceso que asume que el anterior termino, sin comprobarlo, falla el dia que el anterior tarda mas» |

🚨 **La promocion es una decision consciente, nunca automatica.** Sin ese filtro el archivo global se
llena de trivia de un cliente y deja de servir para el siguiente — y entonces la pieza que existia
para ahorrar errores empieza a costar atencion.

⛔ **Y no se escribe en el archivo global desde dentro de una auditoria.** Una vara que cambia
mientras mide deja de comparar. La cosecha va en un solo sentido y en su momento: al cerrar la
iteracion, no durante.

⚠️ **Los filtros que decide si una leccion sube no estan aqui: viven en el archivo global**, y se
leen alli en el momento de cosechar. Copiarlos a este archivo crearia una segunda copia que
envejeceria por su cuenta — que es exactamente el problema que el archivo global existe para evitar.
