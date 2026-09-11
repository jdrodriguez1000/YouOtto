# Etapa `025_wslt`

> **La iteracion 0: la etapa en la que se escribe el primer codigo de producto, y se escribe para
> demostrar una sola cosa.** No que el producto sirva —eso lo decidio el Gate— sino que **existe un
> camino tecnico de extremo a extremo** y que la Arquitectura Base **puede sostener el desarrollo
> del producto**. Un esqueleto que camina, y nada mas.
>
> **La lee:** `manager`, y cualquier agente que necesite saber que esta autorizado en esta etapa.
> **Definiciones:** `project.md` (que es cada cosa y donde esta), `CLAUDE.md` (el metodo de trabajo)
> y la guia de metodo del proyecto —esqueleto que camina, arquitectura incremental, unidades
> incrementales de construccion—. Este archivo **no define conceptos ni repite datos** — dice **que
> se hace y que no** dentro de la etapa.

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

- 🚨 **Escribir codigo de producto.** Es la primera vez en todo el metodo, y por eso encabeza la
  lista.
- **Recorrer un camino fino** que atraviese **todas** las capas de la Arquitectura Base.
- **Levantar el entorno reproducible**: dependencias fijadas, configuracion por variables, un solo
  comando de arranque.
- **Desplegar el esqueleto donde va a vivir el producto**, no solo donde se escribio.
- **Construir las tres preguntas en su version minima** —evaluacion, observabilidad y seguridad—,
  que la etapa anterior dejo declaradas con dueño y sitio.
- **Corregir la Arquitectura Base** si el esqueleto demuestra que no se sostiene, con su decision
  arquitectonica (§6).
- **Registrar las primeras entradas de deuda tecnica de codigo**: lo dejado a medias a proposito
  para que el esqueleto caminara.

🔑 **La primera es la que cambia respecto a todas las etapas anteriores, y conviene decir por que se
desbloquea justo aqui.** El prototipo produjo codigo descartable; la baseline no produjo codigo en
absoluto. Lo que autoriza escribir codigo **que se conserva** no es que haya llegado el momento: es
que existe una Arquitectura Base escrita contra la que comprobarlo, y un camino elegido que
recorrer. Sin esas dos cosas, escribir codigo de producto es empezar a construir sin saber sobre
que.

⚠️ **Y lo autoriza para una sola cosa.** El codigo de esta etapa existe para demostrar que las capas
se hablan. En cuanto empieza a existir para **entregar valor**, la etapa ya no es esta.

## 2. Que prohibe esta etapa

Es la seccion util del archivo. Aqui se descarrila siempre hacia el mismo lado: **aprovechar que por
fin se puede programar**. El esqueleto camina, se ve funcionando, y entonces añadir «una cosita mas»
cuesta cinco minutos y no parece nada.

| ❌ Prohibido | Por que |
|---|---|
| **Reglas de negocio** | el esqueleto **no entrega valor**. Demuestra conexion, no comportamiento |
| **Implementar features** | son de la etapa siguiente. Aqui no se implementa ninguna |
| **Validaciones y casos de error** | el camino es fino y feliz; los bordes son carne, no hueso |
| **Interfaz mas alla de lo minimo** | un formulario feo que atraviesa las capas vale mas que uno bonito que no llega |
| **Un segundo camino «ya que estamos»** | uno solo. Dos caminos es la etapa siguiente empezada antes de tiempo |
| **Optimizar nada** | no hay medicion todavia; optimizar aqui es adivinar, y ademas endurece lo que aun puede cambiar |
| **Ampliar el alcance del producto minimo** | se decidio en la etapa anterior y no se toca aqui |
| **Reutilizar el codigo del prototipo** | se archivo o se borro al cerrar el Gate; promoverlo mete todas sus ausencias como deuda el dia uno |
| **Dar por cerrado un hallazgo propio** | `Implementado` lo escribe la auditoria siguiente, nunca `manager` |
| **Evaluar el propio trabajo** | quien construye no es su propio testigo |

### 🚨 La prohibicion que define esta etapa

> **No se simula ninguna capa.**

Es exactamente lo contrario de la etapa del prototipo, y con las mismas palabras al reves. El
prototipo **aparentaba** que guardaba; el esqueleto **guarda de verdad**, en el almacenamiento de
verdad, desplegado donde va a vivir.

Si el almacenamiento se sustituye por una estructura en memoria, o el servicio por una respuesta
fija, **no se probo el camino: se probo el trozo que ya funcionaba.** Y lo que esta etapa existe
para descubrir vive justo en las junturas — la conexion, el despliegue, los permisos, la
configuracion, las versiones que no coinciden.

🚨 **Un esqueleto con una capa simulada da exactamente el mismo verde que uno completo.** Por eso la
prohibicion es dura y no una recomendacion: no hay ninguna señal que distinga las dos cosas, y la
que da el verde primero es la incompleta.

⚠️ **La tentacion tiene una forma concreta y conviene nombrarla:** la capa que se simula es siempre
la que cuesta levantar —el almacenamiento real, el entorno de destino, el servicio de terceros—, que
es **exactamente la que hay que probar**. Simular lo caro y probar lo barato deja la etapa entera
sin objeto.

### 🚨 Esta etapa NO declara ninguna excepcion a `PI-5`

La etapa del prototipo si la declaraba, porque producia codigo deliberadamente descartable. **Aqui
es al reves y con mas motivo:** esta etapa produce el **primer codigo que se conserva** de todo el
proyecto, y todo lo que se construya despues se apoya en el. Su Definicion de Terminado es la de
siempre: **un test automatizado en verde** para el codigo, y **su bloque de verificacion** —orden
literal y salida cruda— para el registro.

⛔ **Y la excepcion de la etapa del prototipo no se hereda.** Vale para el artefacto que nombro y
para la etapa que la declaro. Aqui no existe, e invocarla sobre el esqueleto seria justo del reves
de lo que decia: aquella protegia algo que se iba a tirar; esto es lo que se queda.

🚨 **Al test hay que verlo en ROJO antes de verlo en verde.** Se rompe el camino a proposito —se
apaga el almacenamiento, se cambia una ruta— y se comprueba que el test **falla**. Despues se
arregla. Un test que nunca se ha visto fallar no dice que el codigo funcione: dice que el test se
ejecuta. **Es `CLAUDE.md` literal —«un test escrito para pasar no cuenta»— y aqui es donde se cobra
por primera vez**, porque es el primer test del proyecto.

## 3. Entradas — que debe existir antes de empezar

De la etapa anterior, y **las cuatro son obligatorias**:

1. 🚨 **La Arquitectura Base** — que piezas hay y como se conectan.
2. 🚨 **El camino fino elegido** — el recorrido de extremo a extremo que se va a probar, sacado del
   escenario del camino feliz que el prototipo ya valido con usuarios reales.
3. **Las tres preguntas declaradas**, cada una con dueño y sitio: donde viven las pruebas, donde se
   escribe el registro de ejecucion, y donde estan los secretos y la superficie expuesta.
4. **El esqueleto del repositorio**: carpetas, exclusiones del control de versiones, entorno.

🚨 **Solo las dos primeras son lo que la etapa anterior se compromete a entregar, y esa asimetria
hay que decirla en vez de disimularla.** Su §8 enumera **dos cosas, y solo dos**; aqui hacen falta
cuatro. No es una contradiccion: las dos que faltan —las tres preguntas y el esqueleto del
repositorio— son **artefactos que esa etapa produce** y estan en su §5, pero no en su §8, porque §8
enumera lo que hace falta para **construir el camino** y no todo lo que se hereda.

⚠️ **La consecuencia practica es que las entradas 3 y 4 no las trae nadie: se van a buscar.** Las
dos primeras se echan en falta al empezar, porque sin ellas no hay por donde arrancar; las otras dos
se echan en falta en el Paso 5, cuando ya hay codigo escrito y resulta que no hay donde poner el
test ni donde escribir el registro.

📌 **Y lo que no hace falta es todo lo demas de la etapa anterior.** Si esta etapa esta esperando a
que se termine de especificar algo, la que se desbordo es la anterior — no esta.

⚠️ **Las entradas se comprueban, no se suponen.** Que la etapa anterior este cerrada no garantiza
que las cuatro esten escritas; lo que lo garantiza es abrirlas y verlas. Si falta una, se registra
como `A-XXX` o `C-XXX` y se escala al usuario antes de construir nada encima.

## 4. Procedimiento

🚨 **Antes del Paso 1 se reparte el trabajo.** Los seis pasos que siguen dicen **que** hay que
hacer; quien hace cada uno —humano, software, IA, o una combinacion— lo dice
**`_workflow/025_wslt.md`**, que se lee ahora y no despues. Ese reparto se adopta con su `D-XXX` en
el registro: leer la tabla no reparte nada.

⚠️ **Y se escribe al decidirlo, no al cerrar la etapa.** Reconstruido despues, lo que queda
registrado es el reparto que salio, no el que se eligio.

🚨 **El orden de los pasos 4 y 5 respecto al 6 no es una preferencia: es lo que hace auditable la
etapa.** El despliegue y el rojo del test ocurren **antes** de la comprobacion final. Hechos
despues, describen lo que salio.

### Paso 1 — Adelgazar el camino

El escenario del camino feliz es un recorrido completo. Esta etapa recorre **menos que eso**: la
traza mas fina que aun asi toca **todas** las capas.

| | Recorre |
|---|---|
| El escenario completo | el camino feliz entero, con todos sus datos y sus confirmaciones |
| **El camino de esta etapa** | enviar **un solo dato** → guardarlo → leerlo → mostrarlo |

> **La prueba no es que tan util es el camino. Es cuantas capas atraviesa.**

Un camino inutil que toca todas las capas es un esqueleto correcto. Un camino util que se queda en
la primera, no.

⚠️ **El camino elegido se escribe antes de construirlo**, en el acta de §5. Escrito despues, el
camino que queda registrado es el que se pudo, no el que se eligio — y entonces no hay forma de
saber si se adelgazo a proposito o si se encogio al chocar con algo.

### Paso 2 — Levantar el entorno reproducible

Dependencias fijadas, configuracion por variables, un solo comando para arrancar.

🔑 **La prueba de que esta bien no es que arranque: es que arranque para otro.** Alguien que no lo
construyo lo levanta desde cero siguiendo lo escrito, sin preguntar nada. Ese «alguien» es tambien
quien lo escribio, tres meses despues.

### Paso 3 — Atravesar las capas, sin simular ninguna

Se avanza **de una capa en una**, y no se pasa a la siguiente hasta que la anterior habla con ella
de verdad.

📌 **El orden importa, y va desde el extremo mas lejano hacia dentro.** La capa que mas sorpresas da
es la que esta mas lejos de donde se escribe el codigo; dejarla para el final concentra todo lo
desconocido en el ultimo tramo, que es cuando ya hay codigo encima que rehacer.

### Paso 4 — Llevarlo hasta donde va a vivir

El esqueleto se despliega en el entorno de destino, no solo en la maquina de quien lo escribio.

🔑 **Esta es la parte que mas descubre y la que mas se aplaza.** Lo que rompe casi nunca es el
codigo: son los permisos, los certificados, las variables que en local estaban y alli no, el puerto
cerrado, la version distinta. **Y todo eso se paga igual — la unica pregunta es si se paga hoy con
un esqueleto encima o dentro de meses con el producto entero encima.**

⚠️ **Cada cosa que rompa aqui se registra donde le toque, en el momento:** un limite del entorno es
`C-XXX`, algo que la arquitectura daba por cierto y no lo era es `A-XXX` refutado, y lo que enseño
la juntura es `L-XXX`. Reconstruido al cerrar la etapa, de todo esto queda «hubo problemas de
despliegue».

### Paso 5 — Construir las tres preguntas, en su version minima

La etapa anterior las declaro con dueño y sitio; aqui **nacen**.

| Pregunta | Version minima que cuenta |
|---|---|
| **Evaluacion** — ¿funciona? | **un** test que recorre el camino y corre en un solo comando |
| **Observabilidad** — ¿que esta haciendo ahora? | **una** linea de registro escrita en la ruta decidida, y legible |
| **Seguridad** — ¿que puede hacer y que le pueden hacer? | secretos fuera del historial **comprobado**, y la superficie expuesta listada |

🚨 **Las tres se comprueban provocandolas, no mirandolas.** Al test se le ve en rojo rompiendo el
camino a proposito. A la linea de registro se le ve aparecer provocando el error que la escribe. A
los secretos se les busca en el historial con una orden, cuya salida cruda va al registro — **«no
hay secretos» es un veredicto; el patron y su ambito son la evidencia.**

🔑 **Una sola de cada, y eso es deliberado.** No es que tres sean pocas: es que la pregunta que esta
etapa responde es **si el mecanismo existe y funciona**, no si cubre el producto. Cubrirlo es de las
etapas de crecimiento, y sale barato justo porque el mecanismo ya esta montado.

### Paso 6 — Verlo caminar, y verlo desde fuera

Dos comprobaciones distintas, y hacen falta las dos:

| | Que comprueba | Como |
|---|---|---|
| **Desde dentro** | que el codigo hace lo que cree | el test del Paso 5 |
| **Desde fuera** | que el sistema **desplegado** responde | una peticion real contra el entorno real |

🔑 **La de fuera es la que no se puede falsear.** Un test puede pasar contra un montaje que en el
entorno de destino no existe; una peticion real contra la maquina real, no. **Si las dos no
coinciden, la que manda es la de fuera** — y la discrepancia es un hallazgo, no un incidente: algo
que el test da por cierto no lo es.

## 5. Artefactos que produce

**Cinco artefactos, y por primera vez en el metodo la mayoria son codigo.**

| Artefacto | Que contiene | Donde se escribe |
|---|---|---|
| **Codigo del esqueleto** | el camino fino, capa por capa. **Primer codigo de producto del proyecto** | la carpeta de codigo declarada en `project.md` |
| **Test del camino** | un test que lo recorre entero y al que se le vio **rojo** | la carpeta de pruebas que declaro la etapa anterior |
| **Despliegue** | lo necesario para levantarlo donde va a vivir | la carpeta de despliegue declarada en `project.md` |
| **Acta del esqueleto** | que camino se recorrio, que capas atraveso, la evidencia de rojo→verde, la comprobacion desde fuera, y que rompio el despliegue | carpeta de artefactos de la etapa, con plantilla |
| **Arquitectura Base actualizada** y su **decision arquitectonica** | solo si el esqueleto obligo a corregirla (§6) | donde vivan los artefactos de la etapa anterior |

Y en el repositorio: **entorno reproducible**, secretos fuera del control de versiones, y el comando
unico de arranque documentado.

🚨 **El acta no es un resumen de la etapa: es la unica forma que tiene `PI-5` de cerrarse aqui.** El
test en verde demuestra que el camino funciona **hoy**; no demuestra que se le viera rojo, ni contra
que entorno se comprobo desde fuera, ni que capa rompio al desplegar. **Nada de eso aparece en
ningun `git diff`** — un test verde y un test que siempre estuvo verde son el mismo archivo. Sin el
acta, la parte mas cara de la etapa no deja rastro.

⚠️ **Cual es la carpeta de artefactos y cual es el archivo de cada registro lo dice `project.md`, no
este archivo** — aqui no se escribe ninguna ruta propia del proyecto.

⚠️ **Toda carpeta de primer nivel se declara en `project.md`.** El cierre contrasta el arbol contra
esa tabla **en las dos direcciones**: una carpeta sin fila y una fila sin carpeta son el mismo
defecto por sus dos caras. Las carpetas de codigo, pruebas y despliegue que nazcan en esta etapa no
son una excepcion — que las cree una herramienta no las exime de estar declaradas.

**La plantilla del acta es `_templates/025_wslt/005_skeleton_record.md`.** El acta se escribe
copiandola, y la regla de «adherencia a plantillas» tiene entonces contra que comprobarse.

📌 **Se nombra entera y no como «la subcarpeta de esta etapa».** Una referencia generica cumple para
quien lee y **desaparece para el control**: si la condicion de entrada de §5 se comprueba con una
orden, esa orden necesita un nombre que buscar. El nombre no es un dato propio de ningun proyecto —
es el de la plantilla, igual en todos.

🚨 **La plantilla y el reparto de `_workflow/025_wslt.md` son condicion de entrada, no trabajo de
dentro de la etapa.** Mientras falte cualquiera de los dos, **la etapa no puede abrirse aunque sus
cuatro entradas esten completas** — se construiria sin forma acordada para registrar lo que el
esqueleto enseñe, y sin saber quien hace cada paso.

⚠️ **Es la condicion que mas facil se salta, porque no la señala nadie.** Las cuatro entradas de §3
las trae la etapa anterior y se echan en falta al buscarlas; estas dos no las trae nadie, y su
ausencia solo se nota **despues**, cuando el esqueleto ya camina y lo que enseño por el camino ya se
olvido.

## 6. Condicion de salida

La etapa termina cuando **las ocho son ciertas**:

- [ ] 🚨 **Un camino recorre todas las capas**, y **ninguna esta simulada**.
- [ ] El esqueleto esta **desplegado donde va a vivir el producto**.
- [ ] Se comprobo **desde fuera**, contra el entorno real, y coincide con el test.
- [ ] Existe **un test del camino**, se le vio **rojo** —con su evidencia en el acta— y ahora esta
      verde.
- [ ] Se escribe **una linea de registro** y se puede leer.
- [ ] **Secretos fuera del historial, comprobado** con su orden y su salida cruda — no supuesto.
- [ ] Alguien que no lo construyo **lo levanta desde cero** con lo escrito.
- [ ] **La cosecha esta hecha:** ninguna leccion de esta etapa queda `Sin evaluar` en la columna
      `Portabilidad` de `lessons.md`, y lo que quedo `Global candidata` esta ya en el archivo de
      lecciones globales, con su `D-XXX` y con la version nueva del archivo declarada.

Si alguna falla, la etapa sigue abierta.

🚨 **No hay Gate al final de esta etapa, y eso no es un descuido del metodo.** Un Gate es una
barrera de **inversion**, y aqui no se decide ninguna: la del producto minimo ya la autorizo el Gate
anterior, y la siguiente se decide cuando ese producto exista y se pueda medir su adopcion. Lo que
hay es una condicion de salida, que se comprueba y no se vota.

### ⚠️ El resultado alternativo valido: la arquitectura no se sostiene

Esta etapa existe para poder descubrirlo, asi que descubrirlo **no es un fracaso: es la etapa
pagando lo que costo.**

Cuando pasa:

1. Se vuelve al paso de arquitectura de la etapa anterior y se **corrige la Arquitectura Base**.
2. Se escribe una **decision arquitectonica** con lo que el esqueleto demostro — es la mas valiosa
   del proyecto, porque su campo de consecuencias esta **medido**, no previsto.
3. Se repite el camino con la arquitectura corregida.

> **Cambiar la arquitectura con un esqueleto encima cuesta dias. Cambiarla con el producto encima
> cuesta el producto.**

🚨 **Y esto no es volver atras en el metodo: es el metodo funcionando.** «La inversion crece por
evidencia» significa que la etapa siguiente se paga cuando la anterior dio evidencia — y aqui la
evidencia dijo que no. Seguir adelante con una arquitectura que el esqueleto ya tumbo es gastar
sabiendo, que es la unica forma de gasto que este metodo existe para evitar.

⚠️ **Lo que no vale es corregir la arquitectura sin registrarlo.** Si se cambia una pieza para que
el esqueleto camine y el documento de arquitectura sigue diciendo lo anterior, lo que queda no es
una arquitectura corregida: son dos, y la que la etapa siguiente va a leer es la falsa.

## 7. Que registra `manager` en `_persistence/`

| Archivo | Que se escribe aqui en esta etapa | Quien lo escribe |
|---|---|---|
| `progress.md` | el estado, la bitacora de sesiones, el siguiente paso | **`session-closer`** |
| `tasks.md` | las tareas y su estado | **`session-closer`**, con las excepciones escritas en el propio archivo |
| `decisions.md` | cada eleccion tecnica que el esqueleto obligo a tomar, con sus **alternativas descartadas**, y la correccion de arquitectura si la hubo | **`manager`** |
| `constraints.md` | los `C-XXX` **reales** del entorno, descubiertos al desplegar: versiones, cuotas, puertos, permisos | **`manager`** |
| `assumptions.md` | los `A-XXX` de arquitectura que el despliegue **confirmo o tumbo**. Los tumbados se marcan, no se borran | **`manager`** |
| `lessons.md` | lo que enseño el despliegue y no estaba en ningun documento — casi siempre lo de las junturas | **`manager`** |
| `techdebt.md` | **las primeras entradas de codigo del proyecto**: lo dejado a medias a proposito para que el esqueleto caminara | `session-closer` **propone**; confirma el **usuario** |

🚨 **`constraints.md` y `assumptions.md` son los dos archivos que mas cambian en esta etapa, y es el
unico momento del metodo en que eso pasa.** Hasta aqui, las restricciones se recogian de lo que
alguien contaba y los supuestos se escribian sin forma de comprobarlos. El despliegue es la primera
vez que la realidad contesta: un `A-XXX` de arquitectura deja de ser un supuesto en el momento en
que el esqueleto lo prueba o lo tumba.

⚠️ **Un supuesto tumbado se marca, no se borra.** Lo que hay que poder leer despues no es solo que
el limite existe, sino **que creiamos antes de tropezarnos con el** — que es lo que explica por que
la arquitectura se diseño como se diseño.

🚨 **Los cuatro del porque no son del `session-closer`, y por eso son los que se pierden.** El agente
arranca en frio y solo ve archivos. En esta etapa lo mas valioso es **lo que rompio y como se
arreglo**: la version que no era, el permiso que faltaba, la pieza que se cambio a mitad. En el
`git diff` eso llega ya arreglado — al diff solo llega el estado final, nunca el camino.

📌 **Y la deuda tecnica de codigo empieza aqui.** No la que se escribe mal: la que se decide bien
**sabiendo que es provisional** para que el esqueleto camine hoy, y que a los seis meses nadie
recuerda que lo era.

## 8. Lo que esta etapa le entrega a la siguiente

La etapa siguiente hace crecer el producto colgando unidades incrementales de construccion. Para eso
necesita de aqui **tres cosas**:

### 1. Un esqueleto que camina, desplegado

Del que colgar cada unidad incremental. No una demostracion en la maquina de quien lo escribio: algo
que vive donde va a vivir el producto.

### 2. Una arquitectura probada — o ya corregida, con su registro

La diferencia entre «la arquitectura que diseñamos» y «la arquitectura que aguanto un camino
completo» es la unica que le importa a la etapa siguiente.

### 3. Las tres preguntas vivas, no declaradas

Un test que corre, un registro que escribe, secretos fuera. La etapa anterior las declaro; esta las
puso en marcha.

🔑 **A partir de aqui, cada unidad incremental añade carne a un esqueleto que ya camina.** Y por eso
la primera de ellas cuesta poco: lo caro —conectar, desplegar, configurar, montar el primer test—
ya esta pagado.

📌 **Ese es el argumento entero de esta etapa.** Si el esqueleto no se despliega, la etapa siguiente
no empieza barata: empieza con toda la deuda del Paso 4 esperando, y ademas repartida entre varias
unidades incrementales, donde ya no se ve como un solo problema.
