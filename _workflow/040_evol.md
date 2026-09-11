# Reparto del trabajo — etapa `040_evol`

> **Quien hace cada actividad de esta etapa.** Deriva de `_workflow/team.md`: no repite su doctrina
> y no legisla sobre la etapa.
>
> **Lo lee:** quien abre la etapa, antes del primer paso de su procedimiento — es el momento de
> entrada que fija `_workflow/team.md` §8.

🔑 **Este archivo es agnostico y sirve para cualquier proyecto.** Las actividades que reparte son
los ocho pasos del procedimiento de `_phases/040_evol.md` §4, que son los mismos en cualquier
proyecto que use este metodo. No lleva dentro ni un nombre, ni una ruta, ni un dato de ningun
producto; los codigos van en su forma generica —`N-XXX`, `T-XXX`, `D-XXX`, `A-XXX`, `C-XXX`,
`L-XXX`, `DT-XXX`, `F-NNN`—.

⛔ **Tres cosas que este archivo no hace:**

| No hace | Quien si |
|---|---|
| decir que se autoriza y que se prohibe en la etapa | `_phases/040_evol.md` §1 y §2 |
| fijar la condicion de cierre de cada iteracion | `_phases/040_evol.md` §6 |
| declarar que reparto adopta un proyecto concreto | el `D-XXX` que se escribe al abrir la etapa |

🔑 **Lo de aqui es lo que *puede* hacer cada participante. Lo que se *adopta* es una decision, y va
al registro.** Leer esta tabla no reparte nada: repartir es escribir el `D-XXX`.

🚨 **Como en las cuatro etapas anteriores, este archivo es condicion de entrada, no material de
consulta.** `_phases/040_evol.md` §5 dice que sin el —y sin las plantillas de `_templates/040_evol/`—
la etapa **no puede abrirse**, aunque sus cinco entradas de §3 esten completas. Y la condicion es
**conjunta**: falta uno, luego no se cumple.

🚨 **Y hay tres diferencias con la etapa anterior que cambian el reparto entero.** La primera:
**esta etapa no tiene condicion de salida**, asi que un reparto que aguanta un trimestre tiene que
aguantar anos. La segunda: **lo que se construye ya no sale de un alcance escrito, sale de evidencia
de uso** — la entrada del trabajo deja de ser un documento cerrado y pasa a ser lo que la gente hace.
La tercera, y es la que manda sobre las otras dos: **aqui hay usuarios que ya dependen de lo que
funciona**, asi que cada cambio puede quitar algo que hoy existe. En la etapa anterior el riesgo era
no llegar; aqui el riesgo es **retroceder**.

---

## 1. De donde sale este reparto

Una fila por paso del procedimiento, ni una mas. Si `_phases/040_evol.md` §4 gana o pierde un
paso, este archivo cambia con el.

🚨 **Y si no cambia, quedan dos archivos diciendo cosas distintas** — que es exactamente lo que
`_workflow/team.md` avisa de no hacer: el que envejece miente sin que nadie lo note.

⚠️ **Los ocho pasos no se recorren al mismo ritmo, y el reparto lo hereda.** Los pasos **2 a 7** se
recorren **por cada iteracion**; el **1** ordena lo que ya se sabe antes de la primera; el **8**
cierra la iteracion y decide si hay otra.

🔑 **Y esa cadencia no es la de la etapa anterior, aunque se le parezca.** Alli el bucle interior era
la unidad incremental y una iteracion agrupaba varias; aqui **la vuelta del bucle es la iteracion
entera**, y su unidad de decision no es un corte tecnico sino una inversion. Confundir las dos hace
que el Paso 7 —la metrica— se escriba por unidad, que es donde deja de significar nada.

⚠️ **El Paso 1 se recorre antes de la primera iteracion, y eso no significa «una sola vez para
siempre».** Sus tres fuentes —hallazgos del Gate, datos de uso, deuda— **siguen produciendo** mientras
la etapa dure. Lo que no se repite es su lectura fundacional; lo que si se repite es mirarlas antes de
decidir el contenido de cada vuelta.

---

## 2. El reparto, paso a paso

| Paso | Humano — obligatorio | Software — puede | IA — puede |
|---|---|---|---|
| **1 · Ordenar lo que ya se sabe** | decidir que dice el dato de uso, y **firmar la pregunta que abre lo que no usa nadie** — quitarlo, moverlo o entenderlo | 🚨 **derivar el recuento de uso por capacidad**, incluidas las que estan a cero, y devolverlo tal cual | proponer la lectura de los tres origenes · señalar la capacidad con cero uso en toda la ventana |
| **2 · Decidir que entra en la iteracion** | decidir el contenido y **el orden, con su razon** · decidir que NO entra, con su destino · 🚨 **firmar que cada entrada trae evidencia y no antiguedad** | comprobar que cada fila de lo que entra tiene su casilla de evidencia rellena, y devolver las que no | proponer un orden por el criterio de prioridad de la etapa · señalar lo que se recupera de la lista del «no» sin evidencia **nueva** |
| **3 · Actor nuevo, si lo hay** | 🚨 **hablar con una persona alcanzable de ese rol** · decidir su camino feliz · decidir que proceso manual sustituye | comprobar que la seccion del actor esta rellena o dice `NO` explicitamente | proponer el camino feliz a partir de lo que la baseline ya dice · señalar el supuesto sobre como trabaja hoy que nadie ha confirmado |
| **4 · ¿Necesita prototipo de evolucion?** | **decidir**, con incertidumbre x impacto, y asumir la consecuencia de decidir que no · enseñarlo y leer el comportamiento | comprobar que la decision quedo **escrita y fechada antes** del primer commit de la capacidad | proponer la puntuacion de los dos ejes · construir el boceto o la pantalla estatica · señalar la capacidad con varias alternativas funcionales encima de la mesa |
| **5 · Construir** | **revisar cada tarea antes de darla por buena** · decidir que cuenta como terminado · diagnosticar lo que rompa · 🚨 **firmar el despliegue** | ejecutar el codigo y devolver lo que devuelve · comprobar que la unidad avanza de punta a punta y no por capas | **escribir el codigo del producto**, tarea a tarea, con revision humana de cada una |
| **6 · La deuda tecnica** | **decidir cual de las tres** por cada entrada tocada · decidir **quien mira** una condicion aplazada | 🚨 **devolver las entradas tocadas por la iteracion que siguen sin una de las tres**, y las que dicen «ya veremos» | proponer la clasificacion de cada entrada · señalar el aplazamiento cuya condicion no tiene quien la observe |
| **7 · Declarar la metrica, y medirla** | 🚨 **fijar que se espera, la metrica y la ventana** — antes de construir — y firmarlo · leer el resultado y decidir que significa | **comprobar por fechas que la declaracion es anterior al primer commit de la capacidad** · avisar cuando la ventana se agota | proponer metricas candidatas con lo que la observabilidad ya recoge · señalar la metrica que no se puede obtener con lo que hay instrumentado |
| **8 · Cerrar la iteracion y decidir si hay otra** | decidir si hay valor, necesidad, oportunidad e inversion · 🚨 **escalar cuando alguna deja de cumplirse** · decidir que leccion es global | contrastar las **seis** casillas de la condicion de cierre y devolver las que fallan · devolver el recuento de la columna de portabilidad | proponer el resumen de la iteracion · reescribir la leccion como **detector** y no como recuerdo · señalar lo que se construyo y no estaba en la iteracion |

📌 **La columna «Software» del Paso 1 y la del Paso 7 son las dos que sostienen la etapa entera, y
las dos hacen lo mismo: quitarle a alguien la ocasion de recordar mal.** Un recuento de uso derivado
de una orden no tiene opinion sobre que funcionalidad merecio la pena; una comparacion de fechas no
tiene opinion sobre cuando se escribio la metrica.

🚨 **Y la del Paso 7 es la unica casilla mecanica que le queda al metodo despues del ultimo Gate.**
Hasta aqui, que una medicion se declarara antes del dato lo comprobaba un Gate que podia decir que
no. A partir de aqui no hay nadie esperando un dictamen: lo unico que impide elegir la metrica
despues de ver los datos es **el orden del historial**, y eso lo contesta una orden.

### 2.1. Las cinco asignaciones que no son obvias, y por que

**Paso 1 · el recuento de uso es del software, y es la unica fuente de la etapa que nadie defiende.**
Los hallazgos del Gate llegan solos y la deuda tiene quien la recuerde. El dato de uso no: hay que ir
a buscarlo, y **lo que no usa nadie no lo echa en falta nadie** — por definicion. Un humano mirando
la lista ve las capacidades que recuerda; una orden que cuenta por capacidad devuelve tambien las que
nadie menciona nunca, que son justo las candidatas del recuadro «Lo que no abre nadie».

⚠️ **Y ahi acaba lo que el software puede decir.** Cero uso es **una pregunta, no un veredicto**: puede
significar que sobra, que no se encuentra, que llega tarde en el flujo, o que quien la necesitaba no
llego a entrar. Contestarla es juicio y lleva humano; el software solo garantiza que la pregunta se
llegue a formular.

**Paso 2 · la evidencia la firma un humano, porque el fallo tipico de esta etapa no se ve en ninguna
salida.** La prohibicion principal de `_phases/040_evol.md` §2 es construir de la lista del «no» sin
evidencia nueva, y lo que hace cara esa trampa es que **la lista del «no» es un documento del
proyecto, escrito y aprobado**: pasa cualquier comprobacion de forma. El software puede exigir que la
casilla de evidencia este **rellena**; no puede decir si lo escrito ahi es evidencia de uso o el
recuerdo de una conversacion de hace seis meses.

🔑 **La asimetria que hay que tener delante:** una funcionalidad aplazada hace medio ano porque nadie
la pedia **sigue sin haber sido pedida**, y ademas ahora existe informacion nueva —el uso real— que
no existia cuando se aplazo. Construirla sin volver a mirarla contra el uso es preferir el dato viejo
teniendo delante el nuevo.

**Paso 3 · hablar con una persona del rol nuevo no se delega, y es la fila que mas veces se sustituye
por una lectura.** Incorporar un actor es, en pequeno, la etapa de descubrimiento: pide un rol **y
una persona alcanzable**, no una categoria. La IA puede proponer el camino feliz con lo que la
baseline dice, y sale plausible — que es exactamente la trampa que `_workflow/team.md` §5.1 nombra.

> **La adopcion del actor generador no dice nada sobre si el actor nuevo sabra usar lo suyo.** Son
> personas distintas, con otro trabajo y otro momento del dia.

**Paso 5 · la IA escribe el codigo del producto, y aqui la revision humana no tiene fecha de
caducidad.** En la etapa anterior esta misma asignacion duraba lo que durase el alcance; aqui la
etapa no termina. Lo que mantiene la autonomia en la fila **reversible y de impacto relevante** de
`_workflow/team.md` §5.1 —revision humana de **cada** tarea, no por muestreo— es lo primero que se
erosiona cuando la etapa va bien, porque es lo unico del reparto que cuesta mas cuanto mas tiempo
lleva funcionando.

⚠️ **La clasificacion de reversibilidad tiene dos relojes, igual que en la etapa anterior, y el
segundo pesa mas.** Lo clasifico asi, como criterio y no leido de una tabla (`_workflow/team.md`
§5.1):

| Momento | Clasificacion | Por que |
|---|---|---|
| el codigo escrito y **aun no desplegado** | **reversible** | vive en control de versiones y no ha tocado datos de nadie: deshacerlo es un commit |
| el mismo codigo **una vez desplegado** | **irreversible** | corrio sobre datos reales de gente que ya dependia del producto. Se corrige hacia adelante; no se puede no haber pasado |

🚨 **Y hay una diferencia con la etapa anterior que conviene decir en voz alta:** alli lo desplegado
era nuevo, y romperlo dejaba a la gente como estaba. **Aqui romperlo les quita algo que ya tenian**,
y eso no se compensa con la capacidad que se anadio al lado.

**Paso 6 · la lista de deuda la barre el software, y la barre por lo que NO tiene.** Es el unico paso
del procedimiento cuyo defecto es una **ausencia**: una entrada tocada y sin decision se lee
exactamente igual que una entrada que nadie toco. Un humano que acaba de cerrar la iteracion no la
echa en falta; una orden que pide una de las tres a cada entrada tocada, si.

⛔ **Lo que el software no puede hacer es la tercera decision, que es la que mantiene sana la lista.**
«Se acepta como permanente» cierra la entrada y la convierte en decision con su `D-XXX`: es una
renuncia, y una renuncia es responsabilidad. Sin ella la lista crece hasta que nadie la lee — y una
lista que nadie lee protege igual que no tenerla, con el coste anadido de que parece que protege.

**Paso 7 · fijar la metrica es juicio; comprobar que se fijo a tiempo es una pregunta de fechas.** Es
la misma reparticion que la ventana de observacion de la etapa anterior, y por la misma razon: lo que
hace valida la declaracion no es lo que dice, es **cuando se escribio**. La declaracion tiene su
commit y el primer dato tiene el suyo, y el orden entre los dos no admite interpretacion.

🔑 **Aqui esa casilla vale mas que alli, no menos.** En la etapa anterior la respaldaba ademas un
Gate. Aqui es lo unico que queda: si la comprobacion de fechas no se hace, no hay nada que impida
elegir la metrica despues de ver los datos, y eso no es medir — es elegir el resultado.

---

## 3. Lo que no se delega nunca en esta etapa

| ⛔ Nunca | Por que |
|---|---|
| 🚨 que la IA o el software **ejecuten el despliegue** | `_workflow/team.md` §5.1, fila irreversible — y aqui el destino tiene usuarios que ya dependen de lo que hay |
| 🚨 que la IA o el software decidan **que se construye** | es la decision entera de la etapa: lo que entra sale de evidencia de uso, y leer evidencia es juicio |
| 🚨 que la IA o el software decidan **quitar** una funcionalidad | cero uso es una pregunta; contestarla borrando es la respuesta mas barata y casi nunca la correcta |
| que la IA **fije o cambie** que se espera, la metrica o la ventana | fijarlos antes del dato es lo unico que hace que la medicion signifique algo; cambiarlos despues es elegir el resultado |
| que la IA declare que **el test se vio en rojo** | verlo es la evidencia; afirmarlo es la clase de salida plausible que `_workflow/team.md` §5.1 avisa de no aceptar |
| que la IA o el software **toquen un test para que pase** | un test en rojo es informacion; cambiarlo destruye el dato y deja el verde. Y aqui un rojo puede ser una regresion |
| que la IA o el software cierren una entrada de deuda como **permanente** | es una renuncia, y una renuncia es responsabilidad |
| que la IA o el software declaren que **la baseline no hacia falta tocarla** | un documento sin actualizar se ve igual que uno que no necesitaba actualizacion |
| que la IA decida que un supuesto quedo **confirmado o tumbado** | lo contesta el uso real; leer lo que contesto es juicio |
| 🚨 que la IA o el software decidan **abrir otra iteracion** | son cuatro condiciones de negocio a la vez, y la de no abrirla es de quien patrocina |
| que la IA decida que **una leccion sube al archivo global** | la promocion es una decision consciente; automatizarla llena el archivo global de trivia de un cliente |
| que `manager` de por cerrado un hallazgo propio | `Implementado` lo escribe la auditoria siguiente |

🚨 **La segunda y la tercera fila son las que definen esta etapa, y son la misma fila mirada por sus
dos caras.** Anadir sin evidencia y quitar sin entender se parecen poco al leerlos y cuestan lo
mismo: los dos cambian el producto por algo que no es un dato.

⚠️ **La decima llega siempre igual, y no suena a decision:** *«pues seguimos con la siguiente»*. Abrir
una iteracion porque el equipo existe y siempre hay algo que mejorar es la forma tipica de fracasar
de esta etapa (`_phases/040_evol.md` §2, prohibicion 2), y no deja rastro **porque produce trabajo**
— que es lo que hace que nadie la mire.

📌 **Dejar de evolucionar no es cerrar el producto**, y por eso la fila dice «abrir otra iteracion» y
no «cerrar el producto». Un producto que deja de crecer sigue funcionando, sigue en uso y sigue
manteniendose.

---

## 4. Que cuenta como «software» en esta etapa

⚠️ **La aclaracion arrastra las dos dificultades de la etapa anterior y anade una tercera.** Las dos
de antes: lo que la etapa produce **es** ejecutable y se parece a lo que la reparte, y si el producto
lleva un sistema de IA dentro, ese sistema es el producto y no un participante. La nueva es que aqui
**el producto lleva meses corriendo**, y lo que corre empieza a parecer parte del instrumental.

| ✅ Es software de esta etapa | ❌ No lo es |
|---|---|
| el ejecutor de pruebas que devuelve rojo o verde | **el codigo del producto** — es el **producto** de la etapa, no un participante |
| el recuento de uso por capacidad del Paso 1 | **los datos de uso** — son la entrada del trabajo; quien participa es lo que los **cuenta** |
| la comparacion de fechas del Paso 7 | **los tests** — son un artefacto que la etapa produce; quien participa es lo que los **corre** |
| el barrido de entradas de deuda sin decision | **lo desplegado** — responde, sirve a gente y genera los datos, pero no reparte trabajo |
| el contraste de las seis casillas de cierre | ⭐ **el sistema de IA del producto, si lo lleva** — su nivel se declaro en la baseline; aqui se evoluciona |
| las ordenes de comprobacion que las plantillas de la etapa ya traen | cualquier herramienta nueva que haya que instalar y mantener solo para esta etapa |

🔑 **La linea que separa las dos columnas sigue siendo una sola pregunta:** ¿esto **comprueba** el
trabajo, o **es** el trabajo?

🚨 **Y la confusion cara de esta etapa esta en la segunda fila de la derecha.** La observabilidad del
producto **produce** el dato de uso que abre el Paso 1; el recuento que lo agrega **comprueba**. Son
dos cosas, y mezclarlas produce la frase que deja el Paso 1 sin hacer: *«ya tenemos telemetria»*.
Tener el dato no es haberlo mirado, y menos aun haberlo mirado por capacidad, incluidas las que estan
a cero.

⭐ **La fila marcada es la de siempre y no se aligera con el tiempo.** Un producto con IA dentro tiene
dos sistemas de IA que se parecen: el que ayudo a construirlo y el que lleva dentro. Se puntuan por
separado, se registran por separado y fallan por separado.

---

## 5. Artefactos y condicion de cierre: que es mecanico y que es juicio

Las seis casillas de `_phases/040_evol.md` §6 —que cierran **la iteracion**, no la etapa—, separadas
por quien las puede comprobar:

| Casilla | Mecanico | Juicio |
|---|---|---|
| lo que entro esta construido, con tests y trazabilidad en los dos sentidos | recorrer los eslabones y devolver los rotos; que cada escenario tenga test | **el rojo**: que fallara por la razon que se rompio · que el eslabon signifique algo |
| la baseline esta al dia | que los documentos se tocaran en la ventana de cada unidad, o que se declarara que no hacia falta | **entero**: que lo escrito recoja lo que la unidad enseno |
| 🚨 la ventana de la metrica se agoto y se comparo | **casi entero, y por fechas**: que la declaracion sea anterior al primer commit, y que la ventana este vencida | que el resultado **significa** — y escribirlo diga lo que diga |
| cada entrada de deuda tocada tiene una de las tres | **entero**: la entrada tocada, o tiene decision, o sale en la lista; y cero «ya veremos» | cual de las tres, y quien mira la condicion si se aplaza |
| la lista del «no» esta actualizada | que cada cosa apartada tenga razon y destino rellenos | que la razon sea una razon y no una postergacion con mejor redaccion |
| 🚨 la cosecha esta hecha | **entero**: cero `Sin evaluar` en la columna de portabilidad, y lo `Global candidata` ya promovido con su `D-XXX` | que leccion es global y cual es solo de este proyecto |

📌 **Dos de las seis son enteramente mecanicas, y una tercera lo es casi entera.** Es mas que en la
etapa anterior —dos de ocho—, y no porque aqui se compruebe mejor: es que **las casillas que
quedaron son otras**. Las de alli preguntaban si lo prometido estaba y si alguien lo usaba, y ninguna
de las dos se contesta con una orden. Las de aqui preguntan sobre todo por **higiene del registro**, y
esa si.

🚨 **La tercera es la que hay que mirar dos veces, y su parte mecanica es la mitad barata.** Que la
ventana venciera y que la declaracion fuera anterior al primer dato lo contesta el historial. Que el
resultado **se escriba diga lo que diga** no lo contesta nadie: una ventana que pasa en silencio es
indistinguible de una que fallo, y en esta etapa ya no hay ningun Gate esperando para preguntarlo.

⚠️ **Y la sexta es mecanica solo si alguien la corre.** La cosecha se hace **por iteracion** y no al
cerrar la etapa, porque esta etapa no cierra: dejarla «para el final» significa no hacerla nunca — y
es, con diferencia, la que mas lecciones produce.

### 5.1. Los dos artefactos de registro, y quien los escribe

`_phases/040_evol.md` §5 nombra cinco artefactos; dos de ellos se escriben **una vez por vuelta del
bucle** y tienen plantilla en `_templates/040_evol/`:

| Artefacto | Cadencia | Quien lo escribe |
|---|---|---|
| el **acta de iteracion** — que entra, que no, la metrica y la ventana, y el resultado | una por iteracion | **humano**, con la IA redactando y el software rellenando los recuentos |
| el **acta de unidad incremental** — enunciado, tareas, tests, que enseno y que dejo a medias | una por unidad | **humano**, con la IA redactando y el software rellenando los recuentos |

🚨 **La declaracion del Paso 7 vive DENTRO del acta de iteracion, y no se separa.** Es la unica
seccion de las dos plantillas cuyo valor depende de una fecha, y sacarla a un artefacto propio
crearia un documento suelto por vuelta del bucle sin nada que lo ate al trabajo que describe.

⛔ **Las ordenes de comprobacion que las dos plantillas ya traen se corren y se publican tal cual
salen, tambien cuando el resultado es cero.** Un control cuyo resultado no se publica no se distingue
de un control que no se corrio — y las dos plantillas lo dicen en su propia seccion de comprobacion.

---

## 6. Que nivel de sistema de IA pide el trabajo de esta etapa

⛔ **Aqui solo se responde una de las dos preguntas.** El nivel que adopta **el producto**, si el
producto lleva IA, se declaro en la baseline con su `D-XXX` (`_workflow/ai_levels.md` §8). Esta etapa
**lo evoluciona**, y si al hacerlo se mueve un eje del producto, eso es una revision de aquella
decision — no una eleccion nueva hecha aqui.

Rubrica de `_workflow/ai_levels.md` §6, aplicada al **trabajo de la etapa**:

| Eje | Puntuacion | Por que |
|---|---|---|
| Impacto de un error | **3** | daño a terceros: lo que se escribe se despliega sobre datos de gente que **ya depende** del producto, y una regresion quita algo que hoy funciona |
| Autonomia necesaria | 1 | escribe codigo dentro de una descomposicion que firmo un humano; **no ejecuta nada con efecto** y no firma nada |
| Variabilidad de la entrada | **3** | abierta e imprevisible: la entrada del trabajo deja de ser un alcance escrito y pasa a ser **evidencia de uso**, peticiones de usuarios y necesidades de negocio |
| Necesidad de trazabilidad | 2 | exigida por el trabajo: cada eslabon se registra y la auditoria lee la cadena — pero ya **no hay Gate** que la juzgue |
| Volumen y frecuencia | **3** | continuo y creciente: es la unica etapa sin condicion de salida, y cada vuelta anade a lo que tiene que seguir funcionando |

**Lectura: nivel 6.** Y conviene desglosarla, porque es la unica etapa del metodo que la alcanza:

1. **Tres ejes en 3.** La regla 2 de `_workflow/ai_levels.md` §6 —«impacto de un error en 3 no se
   compensa con nada»— ya pedia **5** en la etapa anterior con un solo eje en 3. Aqui son tres.
2. **Y opera de forma sostenida.** Esa es la linea que separa el 5 del 6 en la tabla de lectura, y
   esta etapa la cumple por definicion: **no tiene condicion de salida**. El sistema de IA que ayuda a
   construir no trabaja durante un alcance y para; trabaja mientras el producto viva.

🚨 **Lo que el 6 anade sobre el 5 no es mas ceremonia: es un ciclo.** El nivel 5 pide harness —
observabilidad, evaluaciones, metricas—. El 6 pide que **eso se lea y se actue en consecuencia, de
forma continua**. Y esta etapa ya tiene donde: el Paso 8 cierra cada vuelta, y ahi es donde se mira si
el reparto de §2 sigue siendo cierto.

⚠️ **Declaro la lectura como criterio, no como si la leyera de una tabla.** «Opera de forma sostenida
con usuarios reales» admite dos lecturas: los usuarios del **producto**, o los del **sistema de
trabajo** —el equipo—. Aqui aplico la segunda, porque el eje se puntua sobre el trabajo de la etapa y
no sobre el producto (§4, fila marcada); y lo que la sostiene es la ausencia de condicion de salida,
no que el producto tenga usuarios. Un criterio declarado como criterio se puede discutir.

🚨 **Este nivel no baja durante la etapa, y ninguna asignacion de §2 lo bajaria.** Lo que pone los
tres ejes en 3 es la naturaleza de la etapa —a donde va lo que se escribe, de donde sale el trabajo, y
que no termina—, no como esta repartido. Decirlo evita la conversacion de dentro de seis meses: no se
trata de apretar el reparto hasta que la puntuacion baje.

### 6.1. Que harness pide esto, y cual no

⛔ **No es el harness del producto.** Si el producto lleva IA, su observabilidad, sus evaluaciones y
sus metricas salen del nivel que declaro la baseline, y son otra cosa (§4, fila marcada).

Lo que pide esta lectura es un harness sobre **el trabajo**, leido en cada vuelta:

| Pieza | Que responde | Donde ya cabe |
|---|---|---|
| **traza** de lo que la IA produjo en cada unidad | ¿que escribio, y sobre que se le pidio? | el acta de unidad que la etapa ya escribe |
| **casos con salidas inaceptables** | ¿empezo a hacer algo que no debia? | la mitad que se olvida, `_workflow/ai_levels.md` §5.2 |
| **tasa de correccion humana** por iteracion | ¿cuanto de lo delegado hubo que rehacer? | el acta de iteracion, al cerrar cada vuelta |
| 🚨 **la serie de las tres anteriores** — no el valor de esta vuelta, sino como se mueve | ¿esto va a mejor o a peor? | el acta de iteracion, comparando con la anterior |

📌 **La cuarta pieza es lo que distingue al 6 del 5, y es la unica que no se puede improvisar al
final.** Una serie se construye midiendo desde la primera vuelta; empezada en la quinta, la primera
comparacion util llega en la septima. Es exactamente el mismo argumento que hace que la ventana de
observacion se declare antes del primer dato.

🚨 **La tercera es la que juzga a este archivo.** `_workflow/ai_levels.md` §5.4 lo dice sin rodeos: si
la tasa de correccion humana es alta, el nivel elegido no era el problema — **el reparto lo era**.

⚠️ **Y la trampa aqui no es la de la etapa anterior.** Alli el harness se aplazaba —*«cuando tengamos
tiempo»*— y se echaba en falta en el Gate. Aqui **no hay Gate que lo eche en falta**, asi que el
aplazamiento no tiene fecha de vencimiento: puede durar todo lo que dure la etapa, que es
indefinidamente. Lo unico que lo pone en evidencia es el Paso 8, y solo si alguien lo mira.

⚠️ **Lo que si puede moverse es a peor**, y conviene escribirlo:

| Si… | El eje que se mueve | A donde |
|---|---|---|
| se le da a la IA el despliegue | Autonomia necesaria | **3** — y entonces son cuatro ejes en 3 |
| la revision humana de cada tarea deja de hacerse caso a caso | la lectura, directamente | *«el sistema decide sin revision humana caso a caso»* — mismo destino, sin mover ningun eje |
| se le da a la IA decidir que entra en la iteracion | Autonomia necesaria, **y** §3 se incumple | **3**, y el reparto deja de ser el que este archivo describe |

---

## 7. Que se registra al aplicar este archivo

| Va a… | Que |
|---|---|
| `decisions.md`, con su `D-XXX` | que se adopta de estas tablas y **que se descarta**; que entra en cada iteracion **y que no, con su razon y su destino**; el orden elegido; la decision de cada entrada de deuda; la de abrir **o no abrir** otra iteracion; y cada leccion promovida al archivo global |
| `constraints.md`, con su `C-XXX` | los limites que solo aparecen con uso real y volumen: cuotas, concurrencia, ventanas de servicio, limites de terceros, coste al mes |
| `assumptions.md`, con su `A-XXX` | los que el uso real **confirmo o tumbo** —los tumbados se marcan, no se borran—; los que trae cada actor incorporado; y lo que este reparto da por cierto: **que habra quien revise cada tarea durante anos**, y que habra un humano para firmar cada despliegue |
| `techdebt.md`, con su `DT-XXX` | lo nuevo, **con la unidad incremental que lo genero al lado**, y las entradas **cerradas** con su decision |
| `lessons.md`, con su `L-XXX` | al cerrar **cada iteracion**: que asignacion fallo, cual demostro funcionar, y que enseno lo que rompio |

🚨 **El primer supuesto de la fila de `assumptions.md` es el que sostiene la lectura de §6, y aqui no
tiene fecha de caducidad.** «Habra quien revise cada tarea» es cierto en la primera iteracion, caro en
la cuarta y dudoso en la vigesima. Si deja de cumplirse, la lectura de §6 ya no es la que esta
escrita — y nadie habra cambiado nada, que es como pasan estas cosas.

🚨 **Es la etapa que mas `C-XXX` produce de todo el metodo, y conviene esperarlo.** Los limites que
importan de verdad —cuanto aguanta, cuantos a la vez, cuanto cuesta al mes— no aparecen al disenar ni
al construir: aparecen cuando hay gente usandolo todos los dias.

⚠️ **Y la fila de `lessons.md` dice «al cerrar cada iteracion» a proposito.** Es la unica etapa sin
final: acumular las lecciones para el cierre no las pierde a medias, las pierde enteras.

🚨 **Aplicar este archivo no abre ningun codigo nuevo.** El reparto vive en las decisiones, que es
donde ya vive todo lo que se elige — `_workflow/team.md` §9.

---

## 8. Verificacion

```bash
# ocho filas, una por paso del procedimiento de la etapa
grep -cE "^\| \*\*[1-8] · " _workflow/040_evol.md

# la etapa lo cita: sin esto, el archivo no tiene lector — y aqui ademas es condicion de entrada
grep -n "_workflow/040_evol" _phases/040_evol.md

# las dos plantillas que comparten con este archivo la condicion de entrada
ls -1 _templates/040_evol/
```

🔑 **La segunda orden pesa lo mismo que en las cuatro etapas anteriores, y por la misma razon.** No
comprueba solo que el reparto tenga lector: comprueba que **la condicion de entrada sigue
enganchada**. Es `_phases/040_evol.md` §4 y §5 quien dice que sin este archivo la etapa no se abre, y
si esas citas desaparecen, **la condicion desaparece con ellas y nadie lo nota** — un archivo que
nadie manda leer no lo echa en falta ningun control, porque sigue existiendo.

🚨 **Y la tercera esta aqui porque la condicion es CONJUNTA.** Las plantillas y este archivo se exigen
juntos: comprobar uno solo y darla por cumplida es el fallo que `_phases/040_evol.md` §5 avisa —
«falta uno, luego la condicion sigue sin cumplirse».

---

## 9. Errores frecuentes

| Error | Como suena | Que hacer |
|---|---|---|
| Confundir lo que el Gate aprobo | «ya podemos construir todo lo que apartamos» | aprobo **seguir invirtiendo**, no un plan de producto |
| Construir de la lista del «no» | «esto lleva un ano pedido» | lleva un ano **escrito**; el tiempo no lo convierte en demanda |
| No mirar lo que no usa nadie | «la telemetria ya la tenemos» | tener el dato no es haberlo mirado por capacidad, incluidas las de cero |
| Contestar el cero uso borrando | «si no la abre nadie, fuera» | es una pregunta: ¿sobra, no se encuentra, o llega tarde? |
| Incorporar un actor por completitud | «nos falta el supervisor» | entra cuando su ausencia se demuestra cara, no cuando falta |
| Dar por validado al actor nuevo | «el producto ya tiene adopcion» | es otra persona, con otro trabajo y otro camino feliz |
| Saltarse el prototipo cuando toca | «esto se ve claro» | el criterio decide, no las ganas — y sin registro no se distingue de no habersela preguntado |
| Convertir el prototipo en tramite | «prototipamos todo, por rigor» | la forma mas rapida de que se deje de prototipar tambien lo que hacia falta |
| Dejar de ver el rojo | «esto ya lo hemos hecho cien veces» | el coste bajo con la practica; la evidencia que aporta, no |
| Tratar una regresion como un defecto mas | «lo arreglamos en la siguiente» | es un retroceso con una funcionalidad al lado, no un avance con un fallo |
| Delegar el despliegue | «lo lanza el agente, que es un comando» | fila irreversible de `team.md` §5.1 — y quitar algo que ya funcionaba no se deshace |
| Dejar la deuda sin decision | «ya veremos» | no es una de las tres, y una lista donde nada se cierra deja de leerse |
| Aplazar con una condicion que nadie mira | «hasta que crezca el volumen» | si no hay quien la observe, es «ya veremos» con mejor redaccion |
| Elegir la metrica al ver los datos | «este numero se mueve mejor» | es elegir el resultado, y aqui no hay Gate que lo pare |
| Dejar pasar la ventana en silencio | «no salio, mejor no lo escribimos» | una ventana que nadie miro es indistinguible de una que fallo |
| Escribir la metrica por unidad | «cada slice con su medida» | la vuelta del bucle es la **iteracion**; por unidad la metrica no significa nada |
| Abrir otra iteracion por inercia | «quedan cosas por hacer» | se abre porque **esto** vale mas de lo que cuesta, no porque la lista no se vacie |
| Confundir dejar de evolucionar con cerrar | «entonces matamos el producto» | deja de crecer; no deja de funcionar, ni de usarse, ni de mantenerse |
| Aplazar la cosecha | «cosechamos al cerrar la etapa» | esta etapa no cierra: aplazarla es no hacerla |
| Promover lecciones en bloque | «subimos todas, por si acaso» | el archivo global se llena de trivia de un cliente y deja de servir |
| Confundir producto con participante | «la IA del producto ya nos avisa» | ¿comprueba el trabajo, o **es** el trabajo? |
| Puntuar el nivel dos veces | «ya puntuamos en la baseline» | §6 puntua **el trabajo de esta etapa**; el del producto ya se declaro |
| Aplazar el harness | «cuando tengamos tiempo lo medimos» | aqui no hay Gate que lo eche en falta: el aplazamiento no vence solo |
| Repartir una vez y no volver a mirar | «el reparto ya lo hicimos» | la etapa no termina: lo que aguanta una vuelta puede no aguantar la vigesima |
| Reparto no registrado | «ya sabemos quien hace que» | sin `D-XXX` no existe |
| Reparto escrito al final | «lo documento cuando cierre la etapa» | esta etapa no cierra; se escribe al decidirlo |
