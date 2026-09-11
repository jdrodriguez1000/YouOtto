# Reparto del trabajo — etapa `010_prototype`

> **Quien hace cada actividad de esta etapa.** Deriva de `_workflow/team.md`: no repite su doctrina
> y no legisla sobre la etapa.
>
> **Lo lee:** quien abre la etapa, antes del primer paso de su procedimiento — es el momento de
> entrada que fija `_workflow/team.md` §8.

🔑 **Este archivo es agnostico y sirve para cualquier proyecto.** Las actividades que reparte son
los nueve pasos del procedimiento de `_phases/010_prototype.md` §4, que son los mismos en cualquier
proyecto que use este metodo. No lleva dentro ni un nombre, ni una ruta, ni un dato de ningun
producto; los codigos van en su forma generica —`N-XXX`, `T-XXX`, `D-XXX`, `A-XXX`, `C-XXX`—.

⛔ **Tres cosas que este archivo no hace:**

| No hace | Quien si |
|---|---|
| decir que se autoriza y que se prohibe en la etapa | `_phases/010_prototype.md` §1 y §2 |
| fijar la condicion de salida | `_phases/010_prototype.md` §6 |
| declarar que reparto adopta un proyecto concreto | el `D-XXX` que se escribe al abrir la etapa |

🔑 **Lo de aqui es lo que *puede* hacer cada participante. Lo que se *adopta* es una decision, y va
al registro.** Leer esta tabla no reparte nada: repartir es escribir el `D-XXX`.

🚨 **Y una diferencia con la etapa anterior que conviene decir antes que nada:** este archivo **es
condicion de entrada**, no material de consulta. `_phases/010_prototype.md` §5 dice que sin el —y sin
las plantillas— la etapa **no puede abrirse**, aunque sus cinco entradas esten completas. La razon es
que aqui, por primera vez, hay algo que construir: empezar sin saber quien construye, quien facilita
y quien no puede tocar nada es como se llega a una ronda de sesiones que despues no se puede
interpretar.

---

## 1. De donde sale este reparto

Una fila por paso del procedimiento, ni una mas. Si `_phases/010_prototype.md` §4 gana o pierde un
paso, este archivo cambia con el.

🚨 **Y si no cambia, quedan dos archivos diciendo cosas distintas** — que es exactamente lo que
`_workflow/team.md` avisa de no hacer: el que envejece miente sin que nadie lo note.

---

## 2. El reparto, paso a paso

| Paso | Humano — obligatorio | Software — puede | IA — puede |
|---|---|---|---|
| **1 · Elegir el camino feliz que se valida** | elegir el recorrido y decidir que queda fuera | comprobar que el artefacto no deja huecos sin rellenar y que amarra a una `N-XXX` y a la hipotesis | proponer por donde recortar si no cabe en una sesion · señalar los pasos que son rama y no camino feliz |
| **2 · Escribir la tarea ANTES de construir** | redactarla, sellarla, firmar | **comprobar que quedo commiteada antes que el prototipo** · barrer las palabras que nombran pantalla | señalar que la tarea describe la solucion en vez de la situacion |
| **3 · Fijar cuantos usuarios y de que perfiles** | fijar el numero, escribir **por que ese**, y repartirlo entre perfiles | comprobar que el `D-XXX` existe, esta en el indice, y que el reparto suma el total fijado | señalar que perfiles del descubrimiento se quedan sin cubrir |
| **4 · Construir el prototipo** | decidir que entra, y **revisarlo entero contra la tarea sellada** antes de la primera sesion | servir el artefacto · comprobar que no hay persistencia, login real ni casos de error | **construirlo**: el artefacto interactivo del camino feliz, con datos quemados |
| **5 · Correr la sesion** | todo, y en solitario | cronometrar · grabar, si esta autorizado | preparar antes el guion de las preguntas posteriores. **Nada durante la sesion** |
| **6 · No tocar el prototipo entre sesiones** | decidir si un fallo obliga a detener la ronda y volver a empezar | **vigilarlo**: el historial dice si el codigo cambio entre dos sesiones | — |
| **7 · Registrar cada sesion, mientras ocurre** | observar, decidir el estado, escribir o dictar | comprobar que hay un archivo por sesion, que el estado es uno de los cuatro y que la fecha es la del dia | pasar las notas crudas a la plantilla **sin interpretarlas** · señalar el comentario parafraseado que deberia ir entrecomillado |
| **8 · Clasificar las observaciones** | decidir la categoria de cada una | comprobar que ninguna queda sin categoria y que no aparece una decima | **proponer la clasificacion** de cada observacion, con su razon |
| **9 · Validacion de negocio, en sesion aparte** | todo, y en solitario con el patrocinador | comprobar que el artefacto existe, esta completo y no comparte fecha con una sesion de usuario | preparar antes el guion. **Nada durante la sesion** |

📌 **La columna «Software» de los pasos 2, 6 y 7 no es adorno: es lo unico que el Gate puede
comprobar sin haber estado delante.** `_phases/010_prototype.md` §8 lo dice con todas las letras —lo
primero que mira una revision independiente no es el resultado, son las fechas—, y una fecha es
justo la clase de cosa que un humano no puede certificar sobre su propio trabajo y un historial si.

### 2.1. Las cuatro asignaciones que no son obvias, y por que

**Paso 4 · la IA construye, y es la primera vez en todo el metodo.** Hasta aqui escribir codigo
estaba prohibido; aqui se autoriza una sola clase, descartable y con datos quemados. Es generacion
sobre lenguaje con un artefacto barato al otro lado — la capacidad que `_workflow/team.md` §1 asigna
a la IA. Pero la autonomia **no** es la de bajo impacto: `_workflow/team.md` §5.1 la coloca en
**reversible y de impacto relevante**, asi que el humano **revisa el prototipo entero antes de la
primera sesion**, no por muestreo.

🚨 **Y la razon de que sea «relevante» y no «bajo» es propia de esta etapa:** el prototipo se puede
rehacer, pero **la ronda no se puede repetir**. Un usuario que ya vio el artefacto dejo de ser un
usuario que lo ve por primera vez, y esa es exactamente la condicion que la etapa mide.

**Paso 5 · la IA no entra, y no es cautela.** Los principios de no sesgo describen a una persona
leyendo a otra: un titubeo, una mano que vuelve atras, una pregunta que no se llega a formular. Nada
de eso es texto. Y hay algo peor que no aportar: **un usuario simulado produce evidencia inventada
con forma de evidencia validada**, y sobre ella el Gate decidiria una inversion.

**Paso 6 · el vigilante natural es el software.** Un humano promete no tocar el prototipo; el
historial **muestra** si se toco. Es el reparto que `_workflow/team.md` §12 pide cuando avisa de
poner a un humano a hacer trabajo determinista: la promesa no deja traza, el historial si — y ademas
sobrevive a que quien prometio se olvide.

**Paso 8 · a la IA se le pide clasificar, no pesar.** Clasificar es reconocimiento de patrones sobre
lenguaje, y es su mejor uso aqui. Decidir **cuanto pesa** una observacion en el Gate no lo es: solo
las tres primeras categorias cuentan, y preguntarle cuales le parecen «importantes» devuelve la
opinion que `_phases/010_prototype.md` §8 existe para sacar de en medio.

---

## 3. Lo que no se delega nunca en esta etapa

| ⛔ Nunca | Por que |
|---|---|
| que la IA haga de usuario, o que se «simulen» sesiones para completar el numero | es evidencia inventada, y sale con forma de evidencia validada |
| que la IA responda por el patrocinador en la validacion de negocio | el mismo defecto en la otra dimension: la empresa valida su proceso, no un texto plausible |
| que la IA o el software declaren que el prototipo tuvo exito | ese veredicto es del Gate, y son dos firmas |
| que la IA reescriba la tarea, la hipotesis o el perfil | vienen selladas; cambiarlas aqui es escribirlas despues de ver el resultado |
| que la IA o el software decidan promover el prototipo a producto | es irreversible en la practica; se escala al usuario antes de actuar |
| que la IA convierta una observacion en requisito | propone la categoria; el peso lo decide un humano contra los criterios del Gate |

🚨 **Las dos primeras filas son la misma prohibicion vista por sus dos caras, y es la que hunde la
etapa entera sin dejar rastro:** una sesion inventada y una sesion corrida se leen exactamente igual
en el archivo. `_phases/010_prototype.md` §7 ya avisa de que lo mas valioso de esta etapa ocurre
delante de una persona y no aparece en ningun `git diff`; eso vale tambien al reves — **su ausencia
tampoco aparece.**

⚠️ **La quinta fila tiene un disparador concreto y previsible:** la frase *«ya esta hecho, ¿por que
empezar de cero?»*, que llega del patrocinador cuando el prototipo gusto. La respuesta no la da este
archivo —la da `_phases/010_prototype.md` §2—, pero **quien la recibe si esta aqui**: no es la IA, y
no es quien construyo el prototipo.

---

## 4. Que cuenta como «software» en una etapa que SI autoriza codigo

⚠️ Aqui la aclaracion va al reves que en la etapa anterior. Alli habia que decir que si hay software
en una etapa que prohibe codigo; aqui hay que decir que **el codigo que la etapa produce no es el
software que reparte trabajo.**

| ✅ Es software de esta etapa | ❌ No lo es |
|---|---|
| las ordenes que las plantillas ya traen en su seccion de comprobacion | **el prototipo** — es el **producto** de la etapa, no un participante |
| el historial: el orden entre la tarea y el prototipo, y la inmovilidad del codigo entre sesiones | cualquier pieza del prototipo que alguien quiera conservar |
| los controles mecanicos del cierre y de la auditoria, que ya existen | una herramienta nueva que haya que instalar o mantener |

🔑 **Confundir las dos columnas tiene un coste concreto, y es el primer paso del camino que la etapa
prohibe.** El software de `_workflow/team.md` §4 existe para **ejecutar reglas y dejar traza**, y por
eso se conserva y se mantiene. El prototipo no ejecuta reglas: **aparenta**. Tratarlo como software
del proyecto es empezar a cuidarlo — y lo que se cuida no se tira.

---

## 5. Artefactos y condicion de salida: que es mecanico y que es juicio

Las siete casillas de `_phases/010_prototype.md` §6, separadas por quien las puede comprobar:

| Casilla | Mecanico | Juicio |
|---|---|---|
| camino feliz y tarea escritos y sin tocar desde el Paso 2 | el historial del artefacto: creado antes que el prototipo, y sin lineas borradas despues | que la tarea entregue contexto y no instrucciones |
| todas las sesiones fijadas, con los perfiles previstos | contar los archivos de sesion contra el numero del `D-XXX` | que el participante encajara **de verdad** en su perfil |
| cada sesion con su archivo, estado, bloqueos y comentarios | que el estado sea uno de los cuatro, sin huecos y con la fecha del dia | que lo escrito describa lo que paso |
| observaciones clasificadas, no en bruto | que ninguna quede sin categoria, y que las categorias sean las nueve | la categoria de cada una |
| validacion de negocio hecha, en sesion aparte | que el artefacto exista, este completo y no comparta fecha con una sesion de usuario | entero |
| supuestos del descubrimiento actualizados, sin borrar ninguno | que ningun `A-XXX` desaparezca entre commits | cual confirmo y cual tumbo cada sesion |
| cosecha hecha, ninguna leccion sin evaluar | el recuento de la columna de portabilidad | que leccion es global y cual es solo de este proyecto |

📌 **Seis de las siete llevan juicio en la columna derecha**, una mas que en el descubrimiento. Lo
mecanico dice que el artefacto esta **completo**; nunca dice que sea **cierto**.

🚨 **La primera fila es la excepcion, y por eso es la mas valiosa: ahi lo mecanico es casi todo el
control.** El orden entre la tarea y el prototipo no se reconstruye despues ni se jura de memoria —
o esta en el historial o no esta. Todo lo demas de esta etapa se puede escribir tarde y parecer
igual de bueno; eso no.

---

## 6. Que nivel de sistema de IA pide el trabajo de esta etapa

🚨 **Aqui se cruzan tres preguntas distintas, y hay que separarlas antes de puntuar nada.**

| Pregunta | Donde se responde |
|---|---|
| **cuanto sistema de IA pide el trabajo de la etapa** —generar el prototipo, clasificar observaciones, preparar guiones— | aqui abajo, con la rubrica |
| **que nivel lleva el prototipo, si lo que se prototipa incluye IA** | `_workflow/ai_levels.md` §8: *el nivel mas bajo que permita observar el comportamiento que se quiere validar* |
| **que nivel adopta el producto** | ⛔ **aqui no.** Se declara en la linea base, despues del Gate |

⛔ **Que el prototipo corriera con un nivel no lo convierte en el nivel elegido.** Un prototipo es
descartable, y su nivel se eligio precisamente para poder tirarlo; heredarlo al producto es tomar una
decision de arquitectura por inercia y presentarla como consecuencia del analisis, que es lo que
`_workflow/ai_levels.md` avisa de no hacer.

Rubrica de `_workflow/ai_levels.md` §6, aplicada al trabajo de la etapa:

| Eje | Puntuacion | Por que |
|---|---|---|
| Impacto de un error | 2 | daño real reparable: un prototipo mal construido quema la ronda, y esos participantes ya no sirven |
| Autonomia necesaria | 1 | genera y propone; no ejecuta nada con efecto sobre nadie |
| Variabilidad de la entrada | 3 | notas de sesion y comentarios espontaneos: lenguaje abierto e imprevisible |
| Necesidad de trazabilidad | 2 | el registro exige comando y salida cruda, y el Gate audita la evidencia |
| Volumen y frecuencia | 1 | una etapa, unas pocas sesiones, con limite de duracion escrito |

**Lectura: nivel 2.** Y es el 2 y no el 0–1 por una razon concreta: **la IA escribe archivos** —los
del prototipo—, y eso es una herramienta que escribe. `_workflow/ai_levels.md` §2 avisa de que ahi
aparece el primer riesgo real; lo que lo mantiene manejable es que escribe **dentro de una carpeta
que se va a tirar**, y nunca sobre el registro ni sobre los artefactos sellados.

🚨 **Y aparece la misma discrepancia con la tabla de lectura de `_workflow/ai_levels.md` §6 que en la
etapa anterior, que se declara en vez de disimularse.** Esa tabla manda al nivel 5 en cuanto
cualquier eje esta en 3, y «variabilidad de la entrada» lo esta. El propio archivo deja la salida:
*«es una guia, no una formula»*. La discusion, contra los ejes:

- **Impacto en 2 y autonomia en 1** son los dos ejes que protege la regla 2 de §6, y ninguno esta
  en 3.
- **La variabilidad alta cae del lado que no se instrumenta.** Lo abierto e imprevisible son las
  **notas de sesion**, y esas las escribe un humano que estuvo delante. Lo que la IA produce a partir
  de ellas —una clasificacion propuesta— lo revisa una persona observacion a observacion.
- **El volumen en 1, y ademas acotado por el limite de duracion de la etapa:** instrumentar costaria
  mas que el trabajo instrumentado, y el sistema instrumentado se tira al terminar.

⚠️ **Esa discrepancia no queda saldada por leerla aqui: se registra con su `D-XXX` en el proyecto que
la adopte.** Y hay un eje que en esta etapa se puede mover de verdad: si un dia la IA pasara a
**producir** el registro de las sesiones en vez de transcribir notas humanas, el que cambia es
«impacto de un error», y entonces la lectura ya no es esta.

---

## 7. Que se registra al aplicar este archivo

| Va a… | Que |
|---|---|
| `decisions.md`, con su `D-XXX` | que se adopta de estas tablas y **que se descarta**; la discrepancia de §6; y **quien facilita las sesiones**, con nombre — es la asignacion que mas pesa, y la que no se puede improvisar el mismo dia |
| `assumptions.md`, con su `A-XXX` | lo que el reparto da por cierto sin confirmar: que habra facilitador humano para **todas** las sesiones, que los participantes de cada perfil se pueden reclutar, que alguien revisara el prototipo entero antes de la primera sesion |
| `constraints.md`, con su `C-XXX` | lo que viene impuesto y ya no se negocia: una prohibicion de grabar, una politica sobre los datos de los participantes, una herramienta obligada, una ventana de disponibilidad |
| `lessons.md`, con su `L-XXX` | al cerrar la etapa: que asignacion fallo, o cual demostro funcionar |

🚨 **La fila de `assumptions.md` no es rutina: los tres supuestos que nombra son los que dejan la
etapa a medias si fallan.** Sin facilitador para todas las sesiones, la ronda se parte; sin
participantes de un perfil, el reparto del Paso 3 se recorta sin que conste; sin quien revise el
prototipo, el Paso 4 se queda con la autonomia que §2.1 dice que no puede tener.

🚨 **Aplicar este archivo no abre ningun codigo nuevo.** El reparto vive en las decisiones, que es
donde ya vive todo lo que se elige — `_workflow/team.md` §9.

---

## 8. Verificacion

```bash
# nueve filas, una por paso del procedimiento de la etapa
grep -c "^| \*\*[1-9] · " _workflow/010_prototype.md

# la etapa lo cita: sin esto, el archivo no tiene lector
grep -n "_workflow/010_prototype" _phases/010_prototype.md
```

🔑 **La segunda orden pesa aqui mas que en la etapa anterior.** Alli comprobaba que el reparto tenia
lector; aqui comprueba ademas que **la condicion de entrada sigue enganchada**: es
`_phases/010_prototype.md` §5 quien dice que sin este archivo la etapa no se abre, y si esa cita
desaparece, **la condicion desaparece con ella y nadie lo nota**: un archivo que nadie manda leer no
lo echa en falta ningun control, porque sigue existiendo.

---

## 9. Errores frecuentes

| Error | Como suena | Que hacer |
|---|---|---|
| Repartir para repartir | «pongamos IA en algun paso» | si el paso no lo pide, la columna se queda vacia |
| Delegar la sesion | «que la IA facilite, total es leer un guion» | preparar el guion si; facilitar, observar y decidir el estado, no |
| Simular un participante | «nos falta uno, hagamos una sesion de prueba» | una sesion inventada se lee igual que una corrida, y el Gate decide sobre ella |
| Construir antes de sellar la tarea | «asi vemos que sale y luego escribimos la tarea» | la tarea va primero; escrita despues mide si encajaba, no si el usuario puede |
| Arreglar entre sesiones | «son diez minutos y el fallo es obvio» | se anota; si impide continuar, se detiene la ronda y se empieza de cero |
| Cuidar el prototipo | «ya que esta, dejemoslo limpio» | lo que se cuida no se tira; es codigo descartable y se trata como tal |
| Confundir completo con cierto | «pasa todos los barridos» | lo mecanico mide forma; el fondo lo valida una persona |
| Que la IA decida que importa | «dice que estas tres observaciones son las criticas» | propone la categoria; el peso contra el Gate lo decide un humano |
| Elegir el nivel del producto aqui | «el prototipo funciono con esto, pues eso llevamos» | §6 puntua el trabajo **de la etapa**; el nivel del producto se declara en la linea base |
| Reparto no registrado | «ya sabemos quien hace que» | sin `D-XXX` no existe |
| Reparto escrito al final | «lo documento cuando cierre la etapa» | se escribe al decidirlo; despues se reconstruye lo que salio, no lo que se eligio |
