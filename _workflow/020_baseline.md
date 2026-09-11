# Reparto del trabajo — etapa `020_baseline`

> **Quien hace cada actividad de esta etapa.** Deriva de `_workflow/team.md`: no repite su doctrina
> y no legisla sobre la etapa.
>
> **Lo lee:** quien abre la etapa, antes del primer paso de su procedimiento — es el momento de
> entrada que fija `_workflow/team.md` §8.

🔑 **Este archivo es agnostico y sirve para cualquier proyecto.** Las actividades que reparte son
los diez pasos del procedimiento de `_phases/020_baseline.md` §4, que son los mismos en cualquier
proyecto que use este metodo. No lleva dentro ni un nombre, ni una ruta, ni un dato de ningun
producto; los codigos van en su forma generica —`N-XXX`, `T-XXX`, `D-XXX`, `A-XXX`, `C-XXX`,
`DT-XXX`, `F-NNN`—.

⛔ **Tres cosas que este archivo no hace:**

| No hace | Quien si |
|---|---|
| decir que se autoriza y que se prohibe en la etapa | `_phases/020_baseline.md` §1 y §2 |
| fijar la condicion de salida | `_phases/020_baseline.md` §6 |
| declarar que reparto adopta un proyecto concreto | el `D-XXX` que se escribe al abrir la etapa |

🔑 **Lo de aqui es lo que *puede* hacer cada participante. Lo que se *adopta* es una decision, y va
al registro.** Leer esta tabla no reparte nada: repartir es escribir el `D-XXX`.

🚨 **Como en la etapa del prototipo, este archivo es condicion de entrada, no material de
consulta.** `_phases/020_baseline.md` §5 dice que sin el —y sin las plantillas— la etapa **no puede
abrirse**, aunque sus seis entradas esten completas. Y avisa de que es la condicion que mas facil se
salta, **porque no la señala nadie**: las seis entradas las trae el Gate y se echan en falta al
buscarlas; estas dos no las trae nadie, y su ausencia solo se nota despues, con medio documento ya
escrito con una forma que habra que rehacer.

⚠️ **Y hay una diferencia con las dos etapas anteriores que cambia el reparto entero:** aqui, por
primera vez, **lo que se escribe se conserva**. El descubrimiento producia entendimiento y el
prototipo producia algo deliberadamente descartable; la baseline produce los documentos que el
producto va a heredar. Eso no cambia quien hace que —sigue mandando la naturaleza del trabajo—, pero
si cambia **cuanto se revisa lo que la IA escribe**, y por eso §2.1 lo dice con todas las letras.

---

## 1. De donde sale este reparto

Una fila por paso del procedimiento, ni una mas. Si `_phases/020_baseline.md` §4 gana o pierde un
paso, este archivo cambia con el.

🚨 **Y si no cambia, quedan dos archivos diciendo cosas distintas** — que es exactamente lo que
`_workflow/team.md` avisa de no hacer: el que envejece miente sin que nadie lo note.

---

## 2. El reparto, paso a paso

| Paso | Humano — obligatorio | Software — puede | IA — puede |
|---|---|---|---|
| **1 · Leer el dictamen y lo que dejo abierto** | decidir, hallazgo a hallazgo, si se resuelve aqui o se registra como deuda con su motivo | comprobar que el dictamen existe, que la decision del patrocinador esta registrada con su `D-XXX`, y que **ningun hallazgo no bloqueante queda sin fila** | listar los hallazgos del dictamen y cruzarlos contra el registro · señalar el que quedo sin destino |
| **2 · Definir el alcance del MVP, empezando por el «no»** | decidir que entra y que no · escribir la razon de cada «no» · decidir, **actor por actor**, si el proceso actual aguanta el volumen nuevo | comprobar que **cada linea del «no» trae razon y destino**, y que en el «entra» no aparece ningun actor que no sea del MVP | proponer que capacidades caben en la lista del «no» y con que razon · señalar la capacidad que entro sin una `N-XXX` detras |
| **3 · Declarar los codigos de producto antes de escribir el primero** | decidir que prefijo se adopta, cual se cambia si choca, y firmar el `D-XXX` | **contrastar cada prefijo propuesto contra la tabla de codigos del registro**, y barrer el arbol buscando codigos ya escritos sin declarar | proponer el juego de codigos leyendo la guia de metodo · señalar la colision antes de que se escriba el primero |
| **4 · El documento de producto** | fijar proposito, problema y objetivos · **fijar los criterios de exito** que el Gate siguiente va a comprobar | comprobar que el alcance copiado aqui coincide con el del Paso 2, y que no queda ningun hueco de la plantilla sin rellenar | redactar el borrador a partir del descubrimiento y del alcance · señalar el criterio de exito que no se puede medir |
| **5 · El comportamiento esperado: features y escenarios** | decidir que feature existe · **validar que cada escenario del camino feliz coincide con lo que se observo** en las sesiones | comprobar que cada feature nombra su `N-XXX`, que ningun escenario queda sin feature, y que los codigos son unicos | **redactar** los escenarios en la notacion de comportamiento a partir del recorrido ya validado · señalar la feature sin necesidad detras |
| **6 · La especificacion** | decidir **donde se corta** | comprobar que ninguna regla escrita pertenece a algo de la lista del «no» | redactar · **señalar lo que se esta especificando de mas**, contra la lista del «no» y contra la pregunta de §2 |
| **7 · La arquitectura: solo la Base** | **elegir la tecnologia**, y en solitario · decidir componentes y limites | comprobar que no aparece Arquitectura Incremental, y que toda tecnologia nombrada aqui tiene su decision arquitectonica | proponer alternativas y sus consecuencias · señalar que se esta diseñando para una escala que nadie ha visto |
| **8 · Registrar como decision arquitectonica lo que sea caro de revertir** | decidir y firmar | comprobar que cada una trae los cinco campos y que **«alternativas» no esta vacio** | **proponer las alternativas que no se miraron** · señalar el motivo que no dice que lo tumbaria |
| **9 · Declarar las tres preguntas** | decidir dueño y sitio de cada una, y asumir la responsabilidad sobre la de seguridad | **barrer el historial buscando secretos** · comprobar que la carpeta de pruebas existe y corre, y que la ruta del registro de ejecucion esta escrita | proponer que va en cada una · señalar la que se declaro con una intencion en vez de con un artefacto |
| **10 · Montar la trazabilidad, y comprobarla en los dos sentidos** | decidir que se hace con la feature huerfana: quitarla, o abrir la `N-XXX` que faltaba | **el control entero**: recorrer el artefacto en los dos sentidos y publicar los dos recuentos | proponer a que `N-XXX` pertenece una feature huerfana, para que un humano lo confirme o lo tumbe |

📌 **Las columnas «Software» de los pasos 3, 9 y 10 son lo unico de esta etapa que se puede
comprobar sin haber estado delante.** Todo lo demas —el alcance, la especificacion, la
arquitectura— se puede escribir tarde, escribir de mas, o escribir bien, y desde fuera las tres se
parecen. Un prefijo colisionado, un secreto en el historial y una feature huerfana, no.

### 2.1. Las cinco asignaciones que no son obvias, y por que

**La IA escribe, y esta vez lo que escribe se queda.** En la etapa del prototipo la IA tambien
escribia archivos, y lo que mantenia el riesgo manejable era que escribia **dentro de una carpeta
que se iba a tirar**. Aqui no: los borradores del documento de producto, de los escenarios y de la
especificacion son la primera version de artefactos vivos que el producto entero va a heredar. La
autonomia sigue siendo la de `_workflow/team.md` §5.1 para lo **reversible y de impacto relevante**
—el humano **revisa cada resultado antes de darlo por bueno**, no por muestreo—, y lo que cambia es
que aqui esa revision no tiene red debajo: no hay una fecha de tirar el artefacto que perdone lo que
se coló.

⚠️ **La clasifico como reversible a criterio, porque** todo lo que esta etapa produce son documentos
en control de versiones, sin nada desplegado, sin datos de nadie y sin ningun tercero enterado:
deshacer es un commit. Mientras el proyecto no tenga un inventario de acciones irreversibles
registrado, esta clasificacion se declara asi, como criterio, y no como si se leyera de una tabla
(`_workflow/team.md` §5.1).

**Paso 3 · el contraste de codigos es del software, y es el control mas barato de toda la etapa.**
Es la etapa que mas codigos estrena del metodo entero, y comparar dos tablas de prefijos a ojo falla
justo en el par que importa. Un barrido no se cansa, y ademas deja traza — el reparto que
`_workflow/team.md` §12 pide cuando avisa de poner a un humano a hacer trabajo determinista.

**Paso 6 · a la IA se le pide que señale el exceso, no que escriba menos.** Pedirle «una
especificacion minima» devuelve un texto plausible de la longitud que uno sugiera. Pedirle **que de
lo escrito pertenece a la lista del «no»** es reconocimiento de patrones contra una lista que ya
existe — la capacidad que §1 de `team.md` le asigna, y su mejor uso en esta etapa. La especificacion
es el archivo donde la etapa se descarrila, y descarrila creciendo.

**Paso 7 · la tecnologia la elige un humano, y en solitario.** No es celo, y no es porque la IA sepa
menos de tecnologias. Es que `_phases/020_baseline.md` §7 nombra esta como **la forma mas cara de
equivocarse de toda la etapa**, y por una razon que ninguna capacidad de la IA cubre: el error **no
se nota hasta mucho despues**, y para entonces ya lo sostiene todo. Elegir contra una escala que
nadie ha visto es exactamente el fallo que una salida plausible produce sin esfuerzo.

🚨 **Y hay un matiz de reversibilidad que hay que decir en voz alta:** hoy, en esta etapa, la
eleccion de tecnologia **es reversible** —es un parrafo en un documento y no hay una linea escrita
contra ella—. Deja de serlo el dia que empieza la construccion. Por eso se decide **aqui**, donde
cuesta una linea, y por eso lleva firma humana aunque hoy parezca barata: se esta firmando lo que
mañana no se podra deshacer.

**Paso 9 · el barrido de secretos no lo hace una persona.** Un humano promete que no hay secretos en
el historial; un barrido **muestra** si los hay. Es la misma forma que la vigilancia del prototipo
entre sesiones: la promesa no deja traza, la orden si, y ademas sobrevive a que quien prometio se
olvide. La declaracion de las tres preguntas es de un humano; **la comprobacion de la tercera, no**.

---

## 3. Lo que no se delega nunca en esta etapa

| ⛔ Nunca | Por que |
|---|---|
| que la IA o el software decidan que una capacidad **entra** al MVP | es la decision de alcance, y el alcance es lo que el Gate autorizo: cambiarlo es cambiar una inversion firmada |
| que la IA declare que el proceso actual de un actor **aguanta** el volumen nuevo | exige contexto que no esta en ningun documento: cuanta gente, cuantas horas, que pasa el dia de mas trabajo del mes |
| que la IA elija la tecnologia o **firme** una decision arquitectonica | la firma es responsabilidad, y esta es la que se paga durante toda la vida del producto |
| que la IA escriba una feature sin su `N-XXX` | «nada se construye sin razon trazable»; una feature huerfana es alcance que entro sin que nadie lo decidiera |
| que la IA **invente** el escenario del camino feliz | ese recorrido lo completaron usuarios reales: es la unica parte de la etapa que no se decide, se copia |
| que la IA o el software den por **cerrado** un hallazgo del Gate | ninguno se cierra por silencio; se resuelve o se registra como deuda con su motivo |
| que la IA o el software **amplien** lo que el Gate autorizo | si al especificar aparece que el MVP tendria que ser mas, se escala al usuario: cambia la inversion que alguien firmo |
| que la IA marque una de las tres preguntas como declarada | se marcan con un artefacto que existe, no con una intencion — y quien juzga si el artefacto existe de verdad es un humano |
| que `manager` de por cerrado un hallazgo propio | `Implementado` lo escribe la auditoria siguiente |

🚨 **La quinta fila es la que hunde el valor de las dos etapas anteriores sin dejar rastro.** Un
escenario inventado y un escenario copiado de lo observado se leen **exactamente igual** en el
archivo, con la misma notacion y la misma pinta de validado. La diferencia es que uno lo completaron
personas delante de un facilitador y el otro no lo ha completado nadie — y sobre el segundo se va a
construir el producto entero, creyendo que estaba validado.

⚠️ **La segunda fila tiene un disparador previsible, y llega en forma de alivio:** *«ese actor sigue
con su hoja de calculo, no hay nada que decidir»*. Es justo donde `_phases/020_baseline.md` §4 Paso
2 manda preguntar si sigue siendo operativamente viable **con el volumen nuevo**. Si la respuesta es
que no, ese actor entra al MVP, y el alcance cambia hoy, que es cuando cuesta una linea.

---

## 4. Que cuenta como «software» en una etapa que prohibe el codigo de producto

⚠️ La aclaracion hace falta en las dos direcciones a la vez, y por eso es distinta de las dos
anteriores. La etapa **prohibe escribir codigo de producto** —como el descubrimiento— pero **si
produce algo ejecutable**: el esqueleto del repositorio. Y ese esqueleto **no es** el software que
reparte trabajo.

| ✅ Es software de esta etapa | ❌ No lo es |
|---|---|
| las ordenes que las nueve plantillas ya traen en su seccion de comprobacion | **el esqueleto del repositorio** — es un **producto** de la etapa, no un participante |
| el barrido de secretos sobre el historial | **la carpeta de pruebas que se declara en el Paso 9** — se declara aqui y se construye en las etapas de construccion |
| los dos recuentos de la trazabilidad, y el contraste de prefijos del Paso 3 | cualquier herramienta nueva que haya que instalar o mantener |
| los controles mecanicos del cierre y de la auditoria, que ya existen | codigo de producto, de cualquier tamaño y con cualquier excusa |

🔑 **Confundir las dos columnas tiene aqui un coste concreto y previsible:** el esqueleto del
repositorio es lo primero que se puede ejecutar en todo el proyecto, y eso invita a empezar a
construir dentro. La etapa lo prohibe; este archivo solo dice que **tratarlo como participante del
reparto es el primer paso de ese camino**, porque a un participante se le pide que haga cosas.

---

## 5. Artefactos y condicion de salida: que es mecanico y que es juicio

Las nueve casillas de `_phases/020_baseline.md` §6, separadas por quien las puede comprobar:

| Casilla | Mecanico | Juicio |
|---|---|---|
| los cuatro documentos existen, mas una decision arquitectonica | que los archivos existan y no quede ningun hueco de plantilla sin rellenar | que digan **lo suficiente y ni una linea mas** |
| el alcance tiene su lista del «no», con razon y destino | que cada linea traiga los dos campos | que la razon se sostenga contra la evidencia del prototipo o del descubrimiento |
| la viabilidad hibrida se comprobo por actor | que haya una fila por cada actor dejado fuera | entero |
| 🚨 cada feature sale de una `N-XXX` | **entero** | — |
| cada `N-XXX` del alcance tiene al menos una feature | **entero** | que la feature cubra de verdad la necesidad, y no solo la nombre |
| los codigos estrenados estan declarados y ninguno colisiona | **entero** | — |
| las tres preguntas con artefacto, y los secretos fuera del historial | el barrido de secretos; que la carpeta de pruebas corra; que la ruta del registro este escrita | que el artefacto declarado **sirva** para la pregunta que dice responder |
| los hallazgos no bloqueantes resueltos o registrados como deuda | que ninguno quede sin fila | si la deuda estaba bien tomada, o es un aplazamiento disfrazado |
| la cosecha hecha, ninguna leccion sin evaluar | el recuento de la columna de portabilidad | que leccion es global y cual es solo de este proyecto |

📌 **Tres de las nueve son enteramente mecanicas, y es la primera vez que pasa en todo el metodo.**
En el descubrimiento cuatro de seis llevaban juicio; en el prototipo, seis de siete. La razon no es
que esta etapa sea mas facil: es que **produce estructura** —codigos, enlaces, recuentos— en vez de
observaciones sobre personas, y la estructura si se puede contar.

🚨 **Y por eso mismo aqui hay una tentacion que las etapas anteriores no tenian: confundir la etapa
entera con sus tres controles.** Pasar los tres significa que el andamio esta bien montado; no dice
nada de si el alcance es el correcto, de si la tecnologia aguanta, ni de si la especificacion se
paso de la raya. Lo mecanico mide forma; **el fondo lo valida una persona**, y en esta etapa el
fondo es casi todo.

---

## 6. Que nivel de sistema de IA pide el trabajo de esta etapa

🚨 **Aqui se cruzan dos preguntas, y esta vez las dos se responden en esta etapa** — a diferencia de
las anteriores, donde una de ellas estaba expresamente prohibida:

| Pregunta | Donde se responde |
|---|---|
| **cuanto sistema de IA pide el trabajo de la etapa** —redactar borradores, clasificar, señalar excesos— | aqui abajo, con la rubrica |
| **que nivel adopta el producto**, si el producto lleva IA | ⭐ **aqui**, y en ningun otro sitio: `_workflow/ai_levels.md` §8 dice que la linea base es donde se declara, con su `D-XXX`, su puntuacion de los cinco ejes y el nivel inmediatamente superior descartado con su razon |

⛔ **No se confunden, y confundirlas es gratis si nadie avisa.** La rubrica de abajo puntua **el
trabajo de escribir la baseline**; el nivel del producto puntua **lo que el producto tendra que
hacer en manos de sus usuarios**. Son dos puntuaciones distintas, con dos `D-XXX` distintas, y la de
abajo no sustituye a la otra.

⛔ **Y el nivel con el que corrio el prototipo no se hereda.** Se eligio precisamente para poder
tirarlo. Heredarlo aqui es tomar una decision de arquitectura por inercia y presentarla como
consecuencia del analisis.

Rubrica de `_workflow/ai_levels.md` §6, aplicada al **trabajo de la etapa**:

| Eje | Puntuacion | Por que |
|---|---|---|
| Impacto de un error | 2 | daño real reparable: un borrador con una feature de mas o una regla de menos se corrige leyendolo, pero si pasa la revision lo hereda todo lo que se construya |
| Autonomia necesaria | 1 | redacta y propone; no ejecuta nada con efecto, y no firma nada |
| Variabilidad de la entrada | 2 | **lenguaje natural acotado**: las seis entradas de la etapa son artefactos ya escritos —dictamen, observaciones clasificadas, `N-XXX`, `C-XXX`, `A-XXX`—, no notas de entrevista en crudo |
| Necesidad de trazabilidad | 2 | el registro exige comando y salida cruda, y la etapa produce la trazabilidad como artefacto propio |
| Volumen y frecuencia | 1 | una etapa, nueve artefactos, unas pocas sesiones |

**Lectura: nivel 2.** Es el 2 y no el 0–1 por la misma razon que en el prototipo —**la IA escribe
archivos**, y eso es una herramienta que escribe (`_workflow/ai_levels.md` §2)—, pero con una
diferencia que ya se dijo en §2.1: lo que escribe **no esta en una carpeta que se va a tirar**. Lo
que mantiene el riesgo manejable no es el destino del archivo, es que **cada borrador lo revisa una
persona antes de entrar al registro**.

✅ **Y aqui, por primera vez, no hay discrepancia que declarar con la tabla de lectura de
`_workflow/ai_levels.md` §6.** Las dos etapas anteriores tuvieron que declarar una, porque
«variabilidad de la entrada» estaba en 3 y esa tabla manda al nivel 5 en cuanto cualquier eje lo
esta. Aqui **ningun eje esta en 3**, y no por suerte: es la primera etapa cuyas entradas son
**artefactos escritos** en vez de personas hablando. Se dice expresamente para que la ausencia de
discrepancia se lea como un resultado y no como un olvido.

⚠️ **Y se dice tambien que eje la traeria de vuelta.** Si en algun momento la IA pasara a **producir
el registro** en vez de redactar borradores que un humano contrasta, el que se mueve es «impacto de
un error»; y si la especificacion se escribiera a partir de conversaciones sin artefacto previo, el
que vuelve al 3 es la variabilidad. En cualquiera de los dos casos la lectura ya no es esta, y el
`D-XXX` que la adopto hay que rehacerlo diciendo **que eje se movio**.

---

## 7. Que se registra al aplicar este archivo

| Va a… | Que |
|---|---|
| `decisions.md`, con su `D-XXX` | que se adopta de estas tablas y **que se descarta**; el nivel de sistema de IA del **producto**, con su puntuacion y el nivel superior descartado; y **quien firma la eleccion de tecnologia**, con nombre |
| `assumptions.md`, con su `A-XXX` | lo que el reparto da por cierto sin confirmar: que habra quien revise **cada** borrador antes del registro, que el volumen estimado del MVP es el real, que las integraciones se comportan como dice su documentacion |
| `constraints.md`, con su `C-XXX` | lo que viene impuesto y ya no se negocia: una politica de datos, una tecnologia obligada, un entorno de despliegue, un limite de coste, una obligacion de trazabilidad |
| `techdebt.md`, con su `DT-XXX` | lo decidido **sabiendo que es provisional**, y todo hallazgo no bloqueante del Gate que se aplace con su motivo |
| `lessons.md`, con su `L-XXX` | al cerrar la etapa: que asignacion fallo, o cual demostro funcionar |

🚨 **La fila de `techdebt.md` no esta en los archivos hermanos, y esta aqui a proposito:** es la
etapa en la que el proyecto contrae su primera deuda tecnica real, y la contrae **antes de que haya
codigo**. La mas cara de un proyecto no es la que se escribe mal — es la que se decide bien
**sabiendo que es provisional**, y que a los seis meses nadie recuerda que lo era.

🚨 **La fila de `assumptions.md` nombra tres supuestos que dejan la etapa inservible si fallan.** Sin
quien revise cada borrador, el Paso 6 se queda con una autonomia que §2.1 dice que no puede tener;
sin el volumen real, la comprobacion de viabilidad hibrida del Paso 2 mide contra un numero
inventado; y sin integraciones que se comporten como su documentacion, la Arquitectura Base esta
dibujada sobre piezas que nadie ha tocado.

🚨 **Aplicar este archivo no abre ningun codigo nuevo.** El reparto vive en las decisiones, que es
donde ya vive todo lo que se elige — `_workflow/team.md` §9.

⚠️ **Los codigos que la etapa estrena son otra cosa, y esos si se abren** — en la tabla de codigos
del registro, con su `D-XXX`, y **antes de escribir el primero** (Paso 3). No se confunden con este
aviso: uno habla del reparto, el otro de los identificadores del producto.

---

## 8. Verificacion

```bash
# diez filas, una por paso del procedimiento de la etapa
grep -cE "^\| \*\*([1-9]|10) · " _workflow/020_baseline.md

# la etapa lo cita: sin esto, el archivo no tiene lector — y aqui ademas es condicion de entrada
grep -n "_workflow/020_baseline" _phases/020_baseline.md
```

🔑 **La segunda orden pesa lo mismo que en la etapa del prototipo, y por la misma razon.** No
comprueba solo que el reparto tenga lector: comprueba que **la condicion de entrada sigue
enganchada**. Es `_phases/020_baseline.md` §4 y §5 quien dice que sin este archivo la etapa no se
abre, y si esas citas desaparecen, **la condicion desaparece con ellas y nadie lo nota** — un
archivo que nadie manda leer no lo echa en falta ningun control, porque sigue existiendo.

---

## 9. Errores frecuentes

| Error | Como suena | Que hacer |
|---|---|---|
| Repartir para repartir | «pongamos IA en algun paso» | si el paso no lo pide, la columna se queda vacia |
| Especificar de mas porque se puede | «ya que estamos, dejemos esto escrito» | solo lo que hace falta para el esqueleto y la primera unidad incremental; lo demas se escribe **antes de saber** |
| Delegar la eleccion de tecnologia | «que proponga y elegimos la que diga» | proponer alternativas si; elegir y firmar, no |
| Heredar el nivel del prototipo | «funciono con esto, pues eso llevamos» | el prototipo eligio su nivel para poder tirarlo; el del producto se declara aqui, con su puntuacion |
| Confundir los dos niveles | «ya puntuamos, esta el nivel» | §6 puntua **el trabajo de la etapa**; el nivel del producto es otra `D-XXX`, con otros cinco ejes |
| Inventar el camino feliz | «el escenario se escribe solo, ya sabemos como va» | ese recorrido lo completaron usuarios reales: se copia, no se redacta de memoria |
| Feature sin necesidad | «esto hace falta, es obvio» | si no sale de una `N-XXX`, es alcance que entro sin que nadie lo decidiera |
| Dar el actor por viable | «ese sigue con su hoja de calculo» | preguntar si aguanta **el volumen nuevo**; si no, entra al MVP |
| Confundir completo con cierto | «pasa los tres controles mecanicos» | lo mecanico mide forma; en esta etapa el fondo es casi todo |
| Escribir un codigo antes de declararlo | «total, si es el que dice el metodo» | un prefijo que aparece antes que en la tabla es un desfase, no una novedad |
| Cuidar el esqueleto | «ya que corre, avancemos un poco» | el esqueleto se declara aqui y se construye en la etapa siguiente |
| Cerrar un hallazgo del Gate por silencio | «ese era menor, ya se vera» | se resuelve o se registra como deuda con su motivo; ninguno se cierra callando |
| Reparto no registrado | «ya sabemos quien hace que» | sin `D-XXX` no existe |
| Reparto escrito al final | «lo documento cuando cierre la etapa» | se escribe al decidirlo; despues se reconstruye lo que salio, no lo que se eligio |
