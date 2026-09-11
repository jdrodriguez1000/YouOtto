# Etapa `030_growth`

> **La etapa en la que el producto crece hasta ser util, colgando carne de un esqueleto que ya
> camina.** Es la mas larga del metodo y **la unica que se repite**: se abre una iteracion, se
> construyen unas cuantas unidades incrementales, se cierra, y se vuelve a abrir mientras quede
> alcance. Termina cuando el producto minimo esta cubierto, desplegado y en uso real — no cuando
> parece suficiente.
>
> **La lee:** `manager`, y cualquier agente que necesite saber que esta autorizado en esta etapa.
> **Definiciones:** `project.md` (que es cada cosa y donde esta), `CLAUDE.md` (el metodo de trabajo)
> y la guia de metodo del proyecto —unidad incremental de construccion, trazabilidad, documentacion
> incremental, prototipo de evolucion, operacion hibrida—. Este archivo **no define conceptos ni
> repite datos** — dice **que se hace y que no** dentro de la etapa.

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

🚨 **Y esta es la primera etapa del metodo que se repite, lo cual cambia como se lee este archivo.**
Las anteriores se abren, se recorren y se cierran una vez. Aqui los pasos 2 a 7 se recorren **por
cada unidad incremental**, y los pasos 1 y 8 abren y cierran **cada iteracion**. La condicion de
salida de §6 no es la de una iteracion: es la de la etapa entera.

---

## 1. Que autoriza esta etapa

- 🚨 **Escribir codigo de producto que entrega valor.** Es la primera vez en todo el metodo, y por
  eso encabeza la lista.
- **Implementar las features del alcance del producto minimo**, mediante unidades incrementales de
  construccion —las *slices* de la guia de metodo—, una a una.
- **Descomponer cada slice en tareas** pequenas, especificas, verificables y trazables a su slice.
- **Escribir tests**: al menos uno por cada escenario que la slice implementa.
- **Ampliar la Arquitectura Incremental** cuando una slice lo **obligue**.
- **Actualizar los cuatro documentos de la baseline** con lo que la construccion vaya ensenando —son
  artefactos vivos, no un plan cerrado.
- **Registrar decisiones arquitectonicas nuevas** cuando aparezca algo caro de revertir.
- **Correr un prototipo de evolucion** cuando una slice traiga incertidumbre alta (Paso 4).
- **Declarar la metrica, la ventana y el umbral de adopcion** antes de que empiece el uso real (§6).
- **Registrar deuda tecnica de codigo**: lo dejado a medias a proposito para cerrar una slice.

🔑 **La primera es la que cambia respecto a la etapa anterior, y conviene decir por que.** El
esqueleto tambien era codigo de producto y tambien se conserva — pero existia para demostrar **que
las capas se hablan**. Aqui el codigo existe para **que alguien pueda hacer algo que antes no
podia**. Es un cambio de proposito, no de permiso: y por eso cambia tambien como se comprueba que
esta bien —el esqueleto se comprobaba contra la arquitectura; una slice se comprueba contra el
escenario que dice que tenia que pasar.

⚠️ **Y lo autoriza dentro de un alcance que ya esta decidido.** Lo que entra al producto minimo se
decidio en la baseline y **no se amplia aqui**. Si al construir aparece que hace falta bastante mas,
eso no se resuelve construyendolo: se escala al usuario, porque cambia la inversion que el Gate
autorizo.

## 2. Que prohibe esta etapa

Es la seccion util del archivo. Aqui se descarrila hacia dos lados, y los dos parecen productividad:
**cortar por capas porque avanza mas rapido**, y **poner en verde un test que estaba en rojo**.

| ❌ Prohibido | Por que |
|---|---|
| **Tareas huerfanas** | nada se construye sin razon trazable; una tarea que no cuelga de ninguna slice se cuestiona |
| **Cortar por capas** | ver el recuadro de abajo — es el fallo que da nombre al metodo |
| **Ampliar el alcance del producto minimo** | se decidio en la baseline; lo que aparece nuevo va a la lista del «no», con su razon y su destino |
| **Implementar features de actores que quedaron fuera** | el producto minimo es del actor generador; los demas entran cuando se justifiquen, y eso es despues |
| **Cerrar una slice sin su test** | un criterio sin test que le corresponda no esta cumplido: esta afirmado |
| **Tocar un test para que pase** | ver el recuadro de abajo |
| **Optimizar sin haber medido** | sin un numero previo, optimizar es adivinar — y ademas endurece codigo que aun puede cambiar |
| **Ampliar la arquitectura por anticipado** | crece cuando una slice **obliga**, no cuando parece que hara falta |
| **Elegir la metrica de adopcion despues de ver los datos** | eso no es medir: es elegir el resultado, y deja al Gate sin barrera |
| **Dejar la baseline sin actualizar al cerrar una slice** | envejece en silencio, que es la peor forma de no tener documentacion: parece que la tienes |
| **Dar por cerrado un hallazgo propio** | `Implementado` lo escribe la auditoria siguiente, nunca `manager` |
| **Evaluar el propio trabajo** | quien construye no es su propio testigo |
| **Declarar el veredicto del Gate que cierra la etapa** | no lo declara quien construyo, y tampoco quien audita: lo decide quien patrocina |

### 🚨 Prohibicion 1 — El corte horizontal

Es el fallo que da nombre al metodo entero, y no se comete por ignorancia: se comete porque cortar
por capas **avanza mas rapido al principio**.

| ❌ Horizontal | ✅ Vertical |
|---|---|
| «crear todas las tablas» | «pedir una cosa»: formulario → servicio → almacenamiento → confirmacion |
| «montar la capa de servicios» | «ver lo que pedi»: pantalla → consulta → listado |
| «hacer las pantallas» | |

**La prueba, y es una sola pregunta:**

> **Al terminar la slice, ¿se puede ensenar funcionando en la aplicacion desplegada?**

Si la respuesta es *«si, pero falta la pantalla»* o *«si, pero todavia no guarda»*, **no era
vertical**. Una slice horizontal **parece** avance y no lo es: no se puede demostrar, no se puede
validar, y su valor solo aparece cuando llega la ultima pieza — que es exactamente el riesgo que
este metodo existe para evitar.

⚠️ **Y el cobro llega tarde, que es lo que la hace peligrosa.** Tres slices horizontales seguidas
producen tres semanas de trabajo, cero demostraciones y cero aprendizaje — y la sensacion de ir bien
se mantiene intacta hasta que alguien pide ver algo.

### 🚨 Prohibicion 2 — Tocar el test para que pase

Un test en rojo es **informacion**. Cambiarlo para que pase no arregla nada: **destruye el dato y
deja el verde**.

Un test solo cambia cuando **el criterio cambio**, y entonces:

1. Se dice **que criterio** cambio y **quien lo autorizo**.
2. Se anota donde quede registro, no en la cabeza.
3. Si el criterio no cambio, **el que esta mal es el codigo**.

📌 **Un test modificado en la misma pasada que el codigo que debia vigilar deja de ser un testigo:
es la misma mano firmando las dos declaraciones.** Y no hay ninguna senal que lo distinga de un
arreglo legitimo — las dos cosas dejan el mismo verde.

### 🚨 Esta etapa NO declara ninguna excepcion a `PI-5`

La etapa del prototipo si la declaraba, porque producia codigo deliberadamente descartable. **Aqui
es al reves y con mas motivo que en ninguna otra:** esta etapa produce el codigo que va a estar en
manos de usuarios reales, y la evidencia que produce es la que el Gate va a juzgar. Su Definicion de
Terminado es la de siempre: **un test automatizado en verde** para el codigo, y **su bloque de
verificacion** —orden literal y salida cruda— para el registro.

⛔ **Y la excepcion de la etapa del prototipo no se hereda.** Vale para el artefacto que nombro y
para la etapa que la declaro. Aqui no existe, e invocarla sobre una slice seria justo del reves de
lo que decia: aquella protegia algo que se iba a tirar; esto es lo que se queda y encima crece.

🚨 **Al test hay que verlo en ROJO antes de verlo en verde, en cada slice.** No es una ceremonia de
la primera vez: es lo unico que distingue un test que vigila de un test que acompana. Se rompe a
proposito lo que el test dice comprobar, se ve fallar, y despues se arregla. **Es `CLAUDE.md`
literal —«un test escrito para pasar no cuenta»— y aqui se cobra decenas de veces**, no una.

## 3. Entradas — que debe existir antes de empezar

**Seis, y las seis son obligatorias.**

De la etapa del esqueleto:

1. 🚨 **Un esqueleto que camina, desplegado** donde va a vivir el producto — no en la maquina de
   quien lo escribio.
2. 🚨 **Una arquitectura probada, o ya corregida con su registro.** La diferencia entre «la que
   disenamos» y «la que aguanto un camino completo» es la unica que le importa a esta etapa.
3. **Las tres preguntas vivas, no declaradas**: un test que corre, un registro de ejecucion que
   escribe, y los secretos fuera del historial.

De la baseline:

4. **El alcance del producto minimo**, con su lista del «no» — es lo que decide cuando esta etapa
   termina.
5. **Las features y los escenarios**, cada feature nombrando la `N-XXX` de la que sale.
6. **La trazabilidad cerrada** desde la necesidad hasta el escenario, comprobada en los dos sentidos.

🚨 **Las tres primeras son lo que la etapa anterior se compromete a entregar; las tres ultimas no, y
esa asimetria hay que decirla en vez de disimularla.** El §8 de la etapa del esqueleto enumera
**tres cosas, y solo tres**. Las otras tres son artefactos de la baseline, que existen desde antes y
que **nadie vuelve a poner delante**: se van a buscar.

⚠️ **Y se echan en falta en momentos distintos.** Las tres primeras se notan el primer dia, porque
sin ellas no hay de donde colgar nada. Las tres ultimas se notan en el Paso 8, cuando toca comprobar
contra el alcance que queda y resulta que la lista del «no» nunca se escribio — y entonces no hay
forma de saber si la etapa termino o si se olvido algo.

⚠️ **Las entradas se comprueban, no se suponen.** Que la etapa anterior este cerrada no garantiza
que las seis esten escritas; lo que lo garantiza es abrirlas y verlas. Si falta una, se registra
como `A-XXX` o `C-XXX` y se escala al usuario antes de construir nada encima.

📌 **Lo que NO hace falta es la especificacion completa.** La baseline se escribio para empezar a
construir de forma controlada, no para agotar el producto: si esta etapa esta esperando a que se
termine de especificar algo, la que se desbordo es la anterior — no esta.

## 4. Procedimiento

🚨 **Antes del Paso 1 se reparte el trabajo.** Los ocho pasos que siguen dicen **que** hay que hacer;
quien hace cada uno —humano, software, IA, o una combinacion— lo dice **`_workflow/030_growth.md`**,
que se lee ahora y no despues. Ese reparto se adopta con su `D-XXX` en el registro: leer la tabla no
reparte nada.

⚠️ **Y se escribe al decidirlo, no al cerrar la etapa.** Reconstruido despues, lo que queda
registrado es el reparto que salio, no el que se eligio.

🚨 **Esta etapa es un bucle, y los pasos no valen lo mismo.** Los pasos **2 a 7** se recorren **por
cada slice**; los pasos **1 y 8** abren y cierran **cada iteracion**. Un proyecto tendra unas pocas
iteraciones y bastantes slices dentro de cada una.

🚨 **El orden del Paso 4 respecto al 5 no es una preferencia: es lo que hace barata la etapa.** Se
decide si hace falta prototipar **antes** de construir. Decidido despues, la respuesta siempre es que
no hacia falta — porque ya esta construido.

### Paso 1 — Abrir la iteracion: que slices entran, y en que orden

Se eligen las unidades incrementales de esta iteracion y se escriben con su codigo, el que
`project.md` declare.

**El criterio de orden, y es el unico que importa:** primero las que **mas incertidumbre quitan**,
no las mas faciles.

| Se pone antes | Se deja para despues |
|---|---|
| lo que toca una integracion externa desconocida | lo que repite un patron ya resuelto |
| lo que puede tumbar la arquitectura | lo que solo anade otra pantalla parecida |
| lo que nadie sabe todavia como se comporta | lo que ya se valido en el prototipo |

🔑 **Porque si algo va a romper el plan, conviene que lo rompa temprano.** Tres formularios seguros
al principio producen la sensacion de ir bien y no reducen ni un gramo de riesgo; la integracion
rara al final lo concentra todo en el tramo en que ya no queda margen.

⚠️ **El orden elegido se escribe con su razon**, no solo la lista. Al leerla dentro de tres meses,
«estas cinco» no dice nada; «estas cinco, y esta primero porque era la unica que podia tumbar el
diseno» explica la iteracion entera.

### Paso 2 — Cortar la slice, y comprobar que es vertical

Se enuncia la slice como **algo que alguien puede hacer**, no como algo que existe:

| ❌ | ✅ |
|---|---|
| «entidad y almacenamiento de la solicitud» | «pedir una recogida» |
| «capa de consulta» | «ver lo que pedi» |

Y se le pasa la prueba del recuadro de §2: **¿se puede ensenar funcionando al terminar?**

📌 **Una slice puede contener una feature, varias, o parte de una grande — feature y slice no son
sinonimos.** Lo que manda para cortar no es la feature: es que el resultado sea **demostrable**. Una
feature grande se parte en varias slices; varias features pequenas y relacionadas caben en una.

⚠️ **Si una slice no cabe en una iteracion, el problema es el corte, no la iteracion.** Alargar la
iteracion para que quepa es la forma educada de volver al corte horizontal: lo que se entrega al
final sigue sin poder ensenarse por partes.

### Paso 3 — Descomponer en tareas

```text
slice: pedir una recogida            ← su feature ← su necesidad
  crear la entidad
  crear el almacenamiento
  crear el servicio de creacion
  crear el formulario
  implementar la validacion
  implementar la confirmacion
  escribir los tests de sus escenarios
```

**Cada tarea:** pequena, especifica, verificable, delimitada, **y trazable a su slice**.

> **La prueba del tamano:** si no se puede decir sin dudar si una tarea esta hecha o no, es
> demasiado grande. Se divide.

🚨 **Si aparece una tarea que no cuelga de ninguna slice, se cuestiona su inclusion.** No se hace
«porque hace falta»: o se ata a una slice, o se registra como deuda con su razon, o no se hace. Es
la regla de trazabilidad, y es lo unico que controla el desbordamiento del alcance — que no llega de
golpe, llega en tareas sueltas que cada una parecia razonable.

⚠️ **Donde se registran esas tareas lo dice `project.md`, no este archivo.** Si el proyecto las
lleva en su registro de jornada o en un registro de producto aparte es una decision suya, y tiene
que estar tomada **antes** de escribir la primera: un proyecto que descubre a mitad de la tercera
slice que tiene dos registros de tareas ya no puede unificarlos sin reescribir historia.

### Paso 4 — ¿Esta slice necesita un prototipo de evolucion?

Se decide **antes** de construir, con el criterio de la guia de metodo:

> **Nivel de incertidumbre × impacto de equivocarse.**

| Si, prototipar | No hace falta |
|---|---|
| comportamiento que nadie ha visto todavia | un cambio simple |
| varias alternativas funcionales sobre la mesa | un cambio visual menor |
| alto riesgo de que se rechace | una funcionalidad ya validada |
| entra un actor nuevo | una correccion ya definida |
| interaccion entre varios actores | |

Si toca prototipar, se usa la mecanica de la etapa del prototipo **en proporcion**: un boceto o un
wireframe basta. **No tiene la profundidad del prototipo inicial**, y no lo pretende.

📌 **El metodo no busca convertir el prototipado en burocracia.** La mayoria de las slices no lo
necesitan, y obligar a prototipar todas es la forma mas rapida de que se deje de prototipar tambien
lo que si hacia falta.

🚨 **Un prototipo de evolucion NO abre una etapa nueva.** No reemplaza ni modifica esta: es una
herramienta que se usa **dentro** de ella. La slice sigue siendo la unidad, y el prototipo es un
paso suyo.

### Paso 5 — Construir, tarea a tarea

De punta a punta, a traves de las capas. **La slice no se da por avanzada porque una capa este
lista**: se avanza cuando el camino llega un poco mas lejos.

🔑 **Aqui es donde el corte horizontal vuelve a entrar por la puerta de atras.** Nadie escribe
«slice: crear todas las tablas» — lo que pasa es que dentro de una slice bien cortada se hacen
primero las cuatro tareas de datos «para no ir saltando», y al tercer dia la slice sigue sin poder
ensenarse. El corte era vertical; la ejecucion, no.

### Paso 6 — Tests: uno por escenario, como minimo

Cada escenario que la slice implementa tiene su test. **Como minimo uno**: los casos de error y los
bordes que la slice traiga pueden pedir mas.

**Y a cada test se le ve rojo antes que verde**, igual que en el esqueleto. Un test escrito despues
del codigo que ya funcionaba no ha demostrado que detecte nada — solo que se ejecuta.

⚠️ **El coste de esta regla baja con cada slice, y por eso se cumple al principio o no se cumple
nunca.** El primer test costo montar el mecanismo entero, y eso ya se pago en la etapa anterior. A
partir de la segunda slice, ver un test en rojo cuesta un minuto; saltarselo no ahorra tiempo,
ahorra incomodidad.

### Paso 7 — Cerrar la slice: actualizar la baseline

**Toda slice ensena algo.** Antes de abrir la siguiente:

| Documento de la baseline | Se toca si… |
|---|---|
| el de arquitectura | la slice **obligo** a ampliar la Arquitectura Incremental |
| el de especificacion | aparecio una regla, un dato o una validacion que no estaba |
| el de escenarios | el comportamiento real difiere de lo escrito |
| las decisiones arquitectonicas | se tomo una decision cara de revertir |
| el de trazabilidad | se anaden los eslabones que la slice cierra: slice → tareas → tests |

🔑 **Este paso es el que hace que la documentacion sea incremental en vez de obsoleta.** Si se salta,
la baseline envejece en silencio y dentro de dos iteraciones nadie se fia de ella — que es peor que
no tenerla, porque parece que la tienes.

⚠️ **Y no se acumula «para actualizarlo todo al cerrar la iteracion».** Lo acumulado se reconstruye,
y lo reconstruido documenta el resultado en vez de lo aprendido: al diff solo llega el estado final,
nunca el camino.

### Paso 8 — Cerrar la iteracion

Se comprueba **contra el alcance del producto minimo** que queda por cubrir. Si queda alcance, se
abre la siguiente iteracion volviendo al Paso 1.

**La lista decide, no la sensacion.** Cuando el alcance esta cubierto, se va a §6.

🚨 **No hay Gate al final de cada iteracion.** El Gate llega **una sola vez**, al cerrar el producto
minimo entero y agotarse la ventana de observacion. Meter un Gate por iteracion convierte una
barrera de inversion en una reunion de seguimiento, y entonces deja de parar nada.

## 5. Artefactos que produce

**Siete artefactos, y es la etapa que mas produce del metodo: la mayor parte es codigo, y dos de
los siete —el registro de iteracion y el de slice— se escriben una vez por cada vuelta del bucle.**

| Artefacto | Que contiene | Donde se escribe |
|---|---|---|
| **Codigo del producto** | creciendo por slices, no por capas | la carpeta de codigo declarada en `project.md` |
| **Tests** | al menos uno por escenario, y a cada uno se le vio **rojo** | la carpeta de pruebas declarada en `project.md` |
| **Registro de cada iteracion** | que slices entran, en que orden **y por que**, y que quedo al cerrarla | carpeta de artefactos de la etapa, con plantilla |
| **Registro de cada slice** | su enunciado, sus tareas, sus tests, que enseno, y que dejo a medias | carpeta de artefactos de la etapa, con plantilla |
| **Baseline actualizada** | los documentos que el Paso 7 toco, en cada slice | donde vivan los artefactos de la etapa de la baseline |
| **Decisiones arquitectonicas nuevas** | una por decision cara de revertir que la construccion obligo a tomar | donde vivan las de la etapa de la baseline |
| **Declaracion de la ventana de observacion** | metrica, ventana y umbral, fijados **antes** del primer dato (§6) | carpeta de artefactos de la etapa, con plantilla |

⚠️ **Cual es la carpeta de artefactos y cual es el archivo de cada registro lo dice `project.md`, no
este archivo** — aqui no se escribe ninguna ruta propia del proyecto.

⚠️ **Toda carpeta de primer nivel se declara en `project.md`.** El cierre contrasta el arbol contra
esa tabla **en las dos direcciones**: una carpeta sin fila y una fila sin carpeta son el mismo
defecto por sus dos caras. Las carpetas que nazcan en esta etapa no son una excepcion — que las cree
una herramienta no las exime de estar declaradas.

🚨 **Las plantillas de esta etapa y el reparto de `_workflow/030_growth.md` son condicion de entrada,
no trabajo de dentro de la etapa.** Mientras falte cualquiera de los dos, **la etapa no puede abrirse
aunque sus seis entradas esten completas** — se construiria sin forma acordada para registrar lo que
cada slice ensene, y sin saber quien hace cada paso.

📌 **Las plantillas van en la subcarpeta `_templates/030_growth/`, una por artefacto de registro:**
la del registro de iteracion, la del registro de slice y la de la declaracion de la ventana. Se
nombra la carpeta entera y no «la subcarpeta de esta etapa» porque una referencia generica cumple
para quien lee y **desaparece para el control**: si esta condicion se comprueba con una orden, esa
orden necesita un nombre que buscar.

🚨 **A la fecha de escribir este archivo, ni esas plantillas ni ese reparto existen.** Decirlo aqui
es parte de la condicion: un archivo de etapa que exige dos artefactos sin decir que faltan deja al
lector suponiendo que estan.

> 📌 **Nota del 2026-09-05.** La frase de arriba se deja tal cual y
> **queda a medias por esta nota: las plantillas ya existen; el reparto sigue sin existir.** Se
> escribieron las tres que este §5 nombra, y ninguna mas:
>
> ```
> $ ls -1 _templates/030_growth/
> 005_iteration_NNN.md
> 010_slice_NNN.md
> 015_observation_window.md
>
> $ ls _workflow/030_growth.md 2>&1
> ls: cannot access '"_workflow/030_growth.md"': No such file or directory
> ```
>
> ⚠️ **Y la condicion de entrada NO esta cumplida.** Este §5 exige **los dos**; con uno solo,
> la etapa sigue sin poder abrirse. Lo que cambia es cual de los dos falta, no que falte.

> 📌 **Nota del 2026-09-06 — dos correcciones sobre la nota de arriba, que se deja intacta.**
>
> **1. La salida pegada arriba no era la de la orden que la encabeza.** La linea publicada lleva
> comillas dobles dentro de las simples —`'"_workflow/030_growth.md"'`— y la orden escrita
> (`ls _workflow/030_growth.md 2>&1`) no las produce: delata que lo que se corrio fue
> `ls "_workflow/030_growth.md"`. El hecho de fondo era cierto; lo pegado no era reproducible. El
> bloque original no se toca, por la regla de correccion por nota fechada que fija
> `_persistence/decisions.md`.
>
> **2. El reparto ya existe, asi que la nota de arriba tambien queda superada en su segunda mitad.**
> Con la orden escrita tal como se corrio, y su salida tal como salio:
>
> ```
> $ ls -1 _workflow/
> 005_discovery.md
> 010_prototype.md
> 020_baseline.md
> 025_wslt.md
> 030_growth.md
> ai_levels.md
> team.md
>
> $ ls _workflow/030_growth.md 2>&1
> _workflow/030_growth.md
> ```
>
> ✅ **Las dos condiciones de entrada de este §5 estan cumplidas:** las tres plantillas y el archivo
> de reparto existen. Lo que sigue sin existir es la **adopcion** de la etapa —su decision y su fila
> en `project.md`—, que es otra cosa y no la declara este archivo.

⚠️ **Es la condicion que mas facil se salta, porque no la senala nadie.** Las seis entradas de §3 se
echan en falta al buscarlas; estas dos no las trae nadie, y su ausencia solo se nota **despues**,
cuando ya hay tres slices cerradas y lo que ensenaron se registro cada vez de una forma distinta.

## 6. Condicion de salida

La etapa termina cuando **las ocho son ciertas**:

- [ ] **Todas las features de la lista «entra al producto minimo» estan implementadas.** La lista
      decide, no la sensacion.
- [ ] 🚨 **Cero tareas huerfanas.** Cada tarea cuelga de una slice.
- [ ] **Cada escenario tiene su test, y a cada uno se le vio rojo** — con su evidencia registrada.
- [ ] **La trazabilidad cierra en los dos sentidos**, de la necesidad al test y del test a la
      necesidad.
- [ ] **La baseline esta al dia** — el Paso 7 se hizo en cada slice, no al final.
- [ ] **El producto minimo esta desplegado y en uso real**, no en demostracion.
- [ ] 🚨 **La ventana de observacion esta declarada** — metrica, ventana y umbral, escritos antes de
      que llegara el primer dato (ver abajo).
- [ ] **La cosecha esta hecha:** ninguna leccion de esta etapa queda `Sin evaluar` en la columna
      `Portabilidad` de `lessons.md`, y lo que quedo `Global candidata` esta ya en el archivo de
      lecciones globales, con su `D-XXX` y con la version nueva del archivo declarada.

Si alguna falla, la etapa sigue abierta.

### ⭐ Declarar la ventana de observacion

Antes de que empiece el uso real se escriben tres cosas, y las tres **con los datos aun sin llegar**:

| | Que se fija |
|---|---|
| **Metrica** | la que la baseline declaro, sin cambiarla |
| **Ventana** | desde cuando hasta cuando se observa, en fechas absolutas |
| **Umbral** | que valor cuenta como adopcion |

> **Medir hasta que el numero guste no es medir: es elegir el resultado.** Y alargar la ventana «un
> par de semanas mas, que va mejorando» es exactamente eso con otra ropa.

🚨 **Es la condicion que decide si el Gate se puede correr siquiera.** Si la metrica se elige despues
de ver los datos, lo que hay al final no es una barrera de inversion: es una justificacion. Y una
justificacion no puede dar «no» — que es el unico resultado por el que un Gate existe.

⚠️ **Cambiar cualquiera de las tres despues de empezar a observar es una decision, y se registra como
tal** con su `D-XXX`, diciendo que valor tenia antes y por que cambia. Sin ese registro, nadie sabra
despues si el umbral era el original o el que hacia falta para aprobar.

### ⚠️ El resultado alternativo valido: el alcance no cabe

Puede pasar que, a mitad de las iteraciones, quede claro que el alcance aprobado no cabe en la
inversion que se autorizo. **Descubrirlo aqui no es un fracaso: es la etapa haciendo su trabajo.**

Cuando pasa:

1. **No se resuelve construyendo mas rapido**, ni bajando la barra de los tests, ni cerrando slices
   sin su Paso 7. Las tres formas cuestan mas de lo que ahorran y ademas dejan de avisar.
2. Se **escala al usuario**, porque recortar el alcance del producto minimo cambia lo que el Gate
   anterior autorizo, y esa decision no es de quien construye.
3. Lo que salga se registra con su `D-XXX` y las alternativas descartadas — incluida la de detener.

🚨 **Y esto no es volver atras en el metodo: es el metodo funcionando.** «La inversion crece por
evidencia» tambien significa poder decir a mitad de camino que la evidencia cambio. Seguir
construyendo un alcance que ya no cabe es gastar sabiendo, que es la unica forma de gasto que este
metodo existe para evitar.

## 7. Que registra `manager` en `_persistence/`

| Archivo | Que se escribe aqui en esta etapa | Quien lo escribe |
|---|---|---|
| `progress.md` | el estado, la bitacora de sesiones, el siguiente paso | **`session-closer`** |
| `tasks.md` | las tareas y su estado | **`session-closer`**, con las excepciones escritas en el propio archivo |
| `decisions.md` | cada eleccion que una slice obligo a tomar, con sus **alternativas descartadas**; el orden de las slices y su razon; lo que se dejo fuera del alcance | **`manager`** |
| `constraints.md` | los `C-XXX` que aparecen al integrar con sistemas ajenos: cuotas, formatos, ventanas de servicio, limites que nadie habia contado | **`manager`** |
| `assumptions.md` | los `A-XXX` que una slice **confirmo o tumbo** al tocar la realidad. Los tumbados se marcan, no se borran | **`manager`** |
| `lessons.md` | lo que enseno cada slice y no estaba en la baseline | **`manager`** |
| `techdebt.md` | lo que cada slice dejo a medias a proposito, **con la slice que lo genero al lado** | `session-closer` **propone**; confirma el **usuario** |

📌 **La deuda se anota con la slice que la genero.** Sin eso, dentro de dos meses hay una lista de
deudas sin dueno, y nadie sabe que se rompe al pagarlas ni por que se contrajeron.

🚨 **Es la etapa que mas `A-XXX` tumba de todo el metodo, y conviene esperarlo.** La baseline
escribio supuestos sobre comportamiento, volumen, integraciones y datos que nadie podia comprobar
todavia. Cada slice que toca uno de esos temas contesta — y la mitad de las veces contesta que no.

⚠️ **Un supuesto tumbado se marca, no se borra.** Lo que hay que poder leer despues no es solo cual
era el limite, sino **que creiamos antes de tropezarnos con el** — que es lo que explica por que el
producto se diseno como se diseno.

🚨 **Los cuatro del porque no son del `session-closer`, y por eso son los que se pierden.** El agente
arranca en frio y solo ve archivos. En esta etapa lo mas valioso es **por que una slice se corto
asi**, **que alternativa se miro y se dejo**, y **que enseno lo que rompio**. Al `git diff` solo
llega el estado final: el codigo que quedo, nunca el que se descarto.

## 8. Lo que esta etapa le entrega al Gate

El Gate que cierra esta etapa pregunta si el actor generador **realmente adopta y usa** la solucion
—no si podria, que es lo que pregunto el Gate anterior—. Para contestarlo necesita **cinco cosas**:

### 1. El producto minimo desplegado y en uso real

En condiciones reales, con usuarios reales. Una demostracion no responde la pregunta de este Gate:
la de si alguien lo usa cuando nadie esta mirando.

### 2. La metrica, la ventana y el umbral, fijados antes del primer dato

🔑 **Es el punto que decide si el Gate se puede correr.** Los otros cuatro se pueden reunir despues;
este no, porque su valor entero esta en **cuando** se escribio. Elegido despues de ver los datos,
deja de ser un criterio y pasa a ser una conclusion con formato de criterio.

### 3. Los datos de uso

Del registro de ejecucion que la etapa anterior monto y esta uso en cada slice. Si el mecanismo de
observabilidad se dejo en la version minima del esqueleto y nunca crecio, **este es el punto en que
se paga**: no habra datos que ensenar, y la ventana habra pasado.

### 4. La trazabilidad cerrada

Para poder comprobar que lo construido es lo que se prometio — **y nada mas**. La segunda mitad es
la que importa en un Gate de inversion: lo construido de mas tambien costo.

### 5. La deuda tecnica declarada, no escondida

🚨 **Una deuda que la auditoria encuentra y no estaba escrita pesa mas que la deuda misma.** La
primera es un atajo con su razon; la segunda es un registro que no se puede creer — y entonces lo
que queda en duda no es esa entrada, son todas.

🔑 **Y una honestidad final sobre quien declara el veredicto.** No lo declara quien construyo la
etapa —un sistema que se revisa a si mismo comprueba que es coherente, no que sea cierto—, y tampoco
quien audita: auditar y decidir son papeles incompatibles. Hacen falta **dos firmas**: la revision
independiente pone el veredicto tecnico contra los criterios, y quien patrocina decide si se sigue,
se replantea o se detiene. **Detener aqui sigue siendo un resultado valido**, y se registra igual
que uno aprobado — el que no queda escrito se repite.
