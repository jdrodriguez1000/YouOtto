# Reparto del trabajo — etapa `030_growth`

> **Quien hace cada actividad de esta etapa.** Deriva de `_workflow/team.md`: no repite su doctrina
> y no legisla sobre la etapa.
>
> **Lo lee:** quien abre la etapa, antes del primer paso de su procedimiento — es el momento de
> entrada que fija `_workflow/team.md` §8.

🔑 **Este archivo es agnostico y sirve para cualquier proyecto.** Las actividades que reparte son
los ocho pasos del procedimiento de `_phases/030_growth.md` §4, que son los mismos en cualquier
proyecto que use este metodo. No lleva dentro ni un nombre, ni una ruta, ni un dato de ningun
producto; los codigos van en su forma generica —`N-XXX`, `T-XXX`, `D-XXX`, `A-XXX`, `C-XXX`,
`DT-XXX`, `F-NNN`—.

⛔ **Tres cosas que este archivo no hace:**

| No hace | Quien si |
|---|---|
| decir que se autoriza y que se prohibe en la etapa | `_phases/030_growth.md` §1 y §2 |
| fijar la condicion de salida | `_phases/030_growth.md` §6 |
| declarar que reparto adopta un proyecto concreto | el `D-XXX` que se escribe al abrir la etapa |

🔑 **Lo de aqui es lo que *puede* hacer cada participante. Lo que se *adopta* es una decision, y va
al registro.** Leer esta tabla no reparte nada: repartir es escribir el `D-XXX`.

🚨 **Como en las tres etapas anteriores, este archivo es condicion de entrada, no material de
consulta.** `_phases/030_growth.md` §5 dice que sin el —y sin las plantillas de la etapa— la etapa
**no puede abrirse**, aunque sus seis entradas esten completas.

🚨 **Y hay dos diferencias con todas las etapas anteriores que cambian el reparto entero.** La
primera: **esta etapa es un bucle**, y un reparto que aguanta una vez puede no aguantar cuarenta. La
segunda, y es la que manda sobre todo lo demas: **lo que aqui se construye acaba en manos de
usuarios reales, con sus datos dentro**. En el esqueleto el entorno de destino estaba vacio y eso
sostenia media puntuacion de su §6; aqui deja de estarlo por definicion, porque «desplegado y en uso
real» es una casilla de la condicion de salida.

---

## 1. De donde sale este reparto

Una fila por paso del procedimiento, ni una mas. Si `_phases/030_growth.md` §4 gana o pierde un
paso, este archivo cambia con el.

🚨 **Y si no cambia, quedan dos archivos diciendo cosas distintas** — que es exactamente lo que
`_workflow/team.md` avisa de no hacer: el que envejece miente sin que nadie lo note.

⚠️ **Los ocho pasos no se recorren al mismo ritmo, y el reparto lo hereda.** Los pasos **2 a 7** se
recorren **por cada slice**; los pasos **1 y 8** abren y cierran **cada iteracion**. Una asignacion
del Paso 5 se ejecuta decenas de veces; una del Paso 1, unas pocas. **La que se repite es la que se
erosiona**, y por eso §2.1 mira sobre todo a esas.

---

## 2. El reparto, paso a paso

| Paso | Humano — obligatorio | Software — puede | IA — puede |
|---|---|---|---|
| **1 · Abrir la iteracion** | decidir que slices entran, **en que orden y por que** — y firmar que el orden ataca primero lo que mas incertidumbre quita | comprobar que cada slice elegida cuelga de una feature de la lista «entra al producto minimo», y devolver las que no | proponer un orden por incertidumbre · señalar la slice que toca una integracion externa que nadie ha probado |
| **2 · Cortar la slice y comprobar que es vertical** | 🚨 **contestar la prueba del recuadro** —¿se puede ensenar funcionando al terminar?— y firmar la respuesta | comprobar que el enunciado de la slice cita su feature y sus escenarios, y que ningun escenario aparece en dos slices | proponer el enunciado como **algo que alguien puede hacer** · señalar el enunciado que nombra una capa en vez de una accion |
| **3 · Descomponer en tareas** | decidir el tamano de cada tarea y **firmar que cada una cuelga de la slice** | **el barrido de tareas huerfanas**: toda tarea cita su slice, y se devuelve la lista de las que no | proponer la descomposicion · señalar la tarea de la que no se puede decir sin dudar si esta hecha |
| **4 · ¿Necesita prototipo de evolucion?** | **decidir**, con incertidumbre x impacto, y asumir la consecuencia de decidir que no | comprobar que la decision quedo **escrita** para cada slice, tambien cuando fue que no | proponer la puntuacion de los dos ejes con lo que la baseline ya dice · señalar la slice con varias alternativas funcionales sobre la mesa |
| **5 · Construir, tarea a tarea** | **revisar cada tarea antes de darla por buena** · decidir que cuenta como terminado · diagnosticar lo que rompa | ejecutar el codigo y devolver lo que devuelve · comprobar que la slice avanza de punta a punta y no por capas | **escribir el codigo del producto**, tarea a tarea, con revision humana de cada una |
| **6 · Tests: uno por escenario, como minimo** | 🚨 **ver el test en rojo con sus propios ojos** y firmarlo, en cada slice | ejecutar el test y devolver rojo o verde · comprobar que cada escenario de la slice tiene al menos un test que lo cita | escribir el test · señalar el escenario que se quedo sin test y el caso de borde que la slice trajo |
| **7 · Cerrar la slice: actualizar la baseline** | decidir **que enseno la slice** y que documento lo recoge · decidir que una decision es cara de revertir | comprobar que los documentos de la baseline se tocaron en la misma ventana que la slice, o que se declaro que no hacia falta | redactar la actualizacion · señalar la diferencia entre lo escrito en la baseline y lo que se construyo |
| **8 · Cerrar la iteracion** | decidir si queda alcance y si se abre otra vuelta · 🚨 **escalar cuando el alcance no cabe** | contrastar la lista del alcance contra lo implementado y devolver **lo que falta y lo que sobra** | proponer el resumen de la iteracion · señalar lo que se construyo y no estaba en la lista |

📌 **La columna «Software» del Paso 3 y la del Paso 8 son las dos unicas defensas mecanicas que
tiene el metodo contra el desbordamiento del alcance.** Todo lo demas de esa defensa es criterio: la
regla de trazabilidad la aplica quien mira, y quien mira lleva tres semanas queriendo cerrar la
slice. Un barrido de tareas huerfanas no se cansa.

🚨 **Y la del Paso 8 mira en dos direcciones a proposito.** Lo que falta se echa en falta solo; **lo
que sobra no lo echa en falta nadie**, porque se construyo, funciona y ademas gusto. Es la mitad que
un Gate de inversion pregunta y la que nunca esta preparada.

### 2.1. Las cinco asignaciones que no son obvias, y por que

**Paso 5 · la IA escribe el codigo del producto, y esta vez no es una ventana que dure una etapa.**
En el esqueleto la IA escribia codigo durante unas pocas sesiones y sobre un entorno vacio. Aqui
escribe durante la etapa mas larga del metodo, y lo que escribe **se despliega**. Lo que mantiene la
autonomia en la fila **reversible y de impacto relevante** de `_workflow/team.md` §5.1 —revision
humana de **cada** tarea, no por muestreo— es lo primero que se erosiona cuando hay prisa, porque es
lo unico del reparto que cuesta mas cuanto mejor va la etapa.

⚠️ **Y aqui la clasificacion tiene dos relojes, cosa que no pasaba en ninguna etapa anterior.** Lo
clasifico asi, como criterio y no leido de una tabla (`_workflow/team.md` §5.1):

| Momento | Clasificacion | Por que |
|---|---|---|
| el codigo escrito y **aun no desplegado** | **reversible** | vive en control de versiones, no hay datos de nadie dentro: deshacerlo es un commit |
| el mismo codigo **una vez desplegado** | **irreversible** | ya corrio sobre datos reales; lo que toco, lo toco. Se puede corregir hacia adelante, no se puede no haber pasado |

🔑 **La linea que separa los dos relojes es el despliegue, y por eso el despliegue sigue siendo del
humano** — la misma fila irreversible que en el esqueleto, con mas motivo: alli el entorno estaba
vacio.

**Paso 6 · el rojo lo ve un humano, y aqui se cobra decenas de veces.** En el esqueleto era una vez.
Aqui es una vez por escenario, en cada slice, durante meses. La regla no cambia —un test que nunca
se vio fallar no ha demostrado que detecte nada—, pero el **coste unitario baja y la frecuencia
sube**, y esa combinacion produce la unica erosion que no avisa: nadie decide saltarselo, se deja de
hacer.

⛔ **Lo que no se puede delegar es la mitad que parece delegable.** Que un test **falle** lo devuelve
el software y es un hecho. Que falle **por la razon que se rompio** es leer la salida, y eso es
juicio: un test que falla porque el entorno de pruebas no arranca da el mismo rojo que uno que falla
porque la regla de negocio no esta.

**Paso 3 · el barrido de tareas huerfanas es del software, y es lo unico que ve el desbordamiento
mientras esta pasando.** El alcance no se desborda de golpe: se desborda en tareas sueltas que cada
una parecia razonable. Un humano que acaba de escribir la tarea es el peor juez de si cuelga de
algo; una orden que le pide a cada tarea el codigo de su slice no tiene esa dificultad.

**Paso 4 · decidir que NO hace falta prototipar es una decision, y es la que se toma en silencio.**
La columna «Software» de ese paso no comprueba la decision —no puede—: comprueba que **existe**. Es
deliberado. Sin ese registro, dentro de dos meses no hay forma de distinguir una slice donde se
penso y se descarto de una donde nadie se lo pregunto, y las dos se leen igual: sin prototipo.

**La ventana de observacion no esta en ningun paso, y su comprobacion es la mas mecanica de la
etapa.** Fijar metrica, ventana y umbral es juicio y lo firma un humano (§6 del archivo de etapa).
Pero **comprobar que se fijaron antes del primer dato es una pregunta de fechas**, y el historial la
contesta sin opinar: la declaracion tiene su commit, y el primer dato tiene el suyo.

🔑 **Es la unica casilla de todo el metodo que se puede probar con el orden del historial**, y por
eso conviene decirlo aqui: lo que hace valida esa casilla no es lo que dice, es **cuando se
escribio**.

---

## 3. Lo que no se delega nunca en esta etapa

| ⛔ Nunca | Por que |
|---|---|
| 🚨 que la IA o el software **ejecuten el despliegue** | `_workflow/team.md` §5.1, fila irreversible — y aqui el destino ya tiene usuarios |
| 🚨 que la IA o el software declaren que **una slice es vertical** | la prueba del recuadro es una demostracion, no una comprobacion: se contesta ensenandolo |
| que la IA declare que **el test se vio en rojo** | verlo es la evidencia; afirmarlo es la clase de salida plausible que `_workflow/team.md` §5.1 avisa de no aceptar |
| que la IA o el software **toquen un test para que pase** | un test en rojo es informacion; cambiarlo destruye el dato y deja el verde |
| que la IA o el software decidan que **una tarea huerfana se hace igual** | o se ata a una slice, o se registra como deuda, o no se hace: lo decide quien responde del alcance |
| 🚨 que la IA o el software **amplien el alcance del producto minimo** | cambia lo que el Gate anterior autorizo: se escala al usuario, y la decision no es de quien construye |
| que la IA **fije o cambie** metrica, ventana o umbral | fijarlos es lo que hace que el Gate pueda dar un «no»; cambiarlos despues del primer dato es elegir el resultado |
| que la IA o el software decidan que **la baseline no hacia falta tocarla** | es el juicio del Paso 7, y saltarselo no deja rastro: un documento sin actualizar se ve igual que uno que no necesitaba actualizacion |
| que la IA decida que un supuesto quedo **confirmado o tumbado** | lo contesta la slice al tocar la realidad; leer lo que contesto es juicio |
| que la IA o el software declaren **el veredicto del Gate** | no lo declara quien construyo, y tampoco quien audita: lo decide quien patrocina |
| que `manager` de por cerrado un hallazgo propio | `Implementado` lo escribe la auditoria siguiente |

🚨 **La segunda fila es la que puede vaciar la etapa entera sin dejar rastro.** Una slice horizontal
y una vertical **producen el mismo verde**: los mismos tests pasan, las mismas tareas se cierran, el
mismo commit entra. La diferencia solo aparece cuando alguien pide ver algo funcionando — y para
entonces ya hay tres slices encima.

⚠️ **La sexta llega siempre con la misma forma, y no suena a ampliar el alcance:** *«esto lo pidio
un usuario y son dos horas»*. Puede ser cierto y sigue siendo una ampliacion: lo construido de mas
tambien costo, y el Gate lo va a preguntar.

---

## 4. Que cuenta como «software» en la etapa que mas codigo produce

⚠️ **La aclaracion es la mas dificil de las cinco etapas, y por dos razones nuevas.** La primera ya
estaba en el esqueleto: lo que la etapa produce **es** ejecutable y se parece a lo que la reparte. La
segunda es de aqui: si el producto lleva un sistema de IA dentro, **ese sistema tampoco es un
participante del reparto** — es el producto.

| ✅ Es software de esta etapa | ❌ No lo es |
|---|---|
| el ejecutor de pruebas que devuelve rojo o verde | **el codigo del producto** — es el **producto** de la etapa, no un participante |
| el barrido de tareas huerfanas | **los tests** — son un artefacto que la etapa produce; quien participa es lo que los **corre** |
| el contraste del alcance contra lo implementado, en el Paso 8 | **lo desplegado** — responde, y ademas sirve a gente, pero no reparte trabajo |
| las ordenes de comprobacion que las plantillas de la etapa ya traen | ⭐ **el sistema de IA del producto, si lo lleva** — su nivel se declaro en la baseline; aqui se implementa |
| el registro de ejecucion que la etapa anterior monto | cualquier herramienta nueva que haya que instalar y mantener solo para esta etapa |

🔑 **La linea que separa las dos columnas sigue siendo una sola pregunta:** ¿esto **comprueba** el
trabajo, o **es** el trabajo?

🚨 **Y la fila marcada es la confusion cara de esta etapa.** Un producto con IA dentro tiene, al
terminar, dos sistemas de IA que se parecen: **el que ayudo a construirlo** y **el que lleva
dentro**. Se puntuan por separado, se registran por separado y fallan por separado. Mezclarlos
produce la frase que deja las dos preguntas sin contestar: *«ya medimos como se porta la IA»*.

---

## 5. Artefactos y condicion de salida: que es mecanico y que es juicio

Las ocho casillas de `_phases/030_growth.md` §6, separadas por quien las puede comprobar:

| Casilla | Mecanico | Juicio |
|---|---|---|
| todas las features del alcance estan implementadas | que cada feature de la lista tenga slice, tareas y tests | **que «implementada» signifique lo que la feature decia**, y no una version mas barata |
| 🚨 cero tareas huerfanas | **entero**: cada tarea cita su slice, o sale en la lista | — |
| cada escenario tiene test, y a cada uno se le vio rojo | que el test exista, lo cite y este verde | **el rojo**: que fallara por la razon que se rompio — decenas de veces, no una |
| la trazabilidad cierra en los dos sentidos | recorrer los eslabones y devolver los rotos | que el eslabon signifique algo: que el test compruebe **ese** escenario |
| la baseline esta al dia | que los documentos se tocaran en la ventana de cada slice | **entero**: que lo escrito recoja lo que la slice enseno |
| el producto minimo esta desplegado y en uso real | que responda, y que haya datos de uso | 🚨 **que sea uso real y no demostracion** — la casilla que mas facil se aprueba de mentira |
| 🚨 la ventana de observacion se declaro antes del primer dato | **entero, y por fechas**: el commit de la declaracion es anterior al del primer dato | — |
| la cosecha hecha, ninguna leccion sin evaluar | el recuento de la columna de portabilidad | que leccion es global y cual es solo de este proyecto |

📌 **Dos de las ocho son enteramente mecanicas, y eso es menos que en el esqueleto** —cuatro de
ocho—. **La caida no es un descuido: es lo que distingue a esta etapa.** Alli lo que se comprobaba
era que un sistema corriera, y a un sistema que corre se le pregunta ejecutandolo. Aqui lo que se
comprueba es **que lo que corre sea lo que se prometio y que alguien lo use**, y ninguna de las dos
cosas se contesta con un comando.

🚨 **La casilla del uso real es la que hay que mirar dos veces.** Un despliegue con tres personas
avisadas de que entren produce exactamente los mismos datos que uno con tres personas que entraron
porque lo necesitaban. El Gate de esta etapa pregunta si alguien lo usa **cuando nadie esta
mirando**, y esa diferencia no esta en ninguna salida.

---

## 6. Que nivel de sistema de IA pide el trabajo de esta etapa

⛔ **Aqui solo se responde una de las dos preguntas.** El nivel que adopta **el producto**, si el
producto lleva IA, se declaro en la baseline con su `D-XXX` (`_workflow/ai_levels.md` §8). Esta
etapa **lo implementa**, no lo elige — y si al construir aparece que el nivel declarado no se
sostiene, eso es un `A-XXX` tumbado que vuelve a la baseline, no una nueva eleccion hecha aqui.

Rubrica de `_workflow/ai_levels.md` §6, aplicada al **trabajo de la etapa**:

| Eje | Puntuacion | Por que |
|---|---|---|
| Impacto de un error | **3** | daño a terceros: lo que se escribe aqui **se despliega y corre sobre datos de gente real**. Ver la nota de abajo |
| Autonomia necesaria | 1 | escribe codigo dentro de una descomposicion que firmo un humano; **no ejecuta nada con efecto** y no firma nada |
| Variabilidad de la entrada | 2 | lenguaje natural acotado: features y escenarios ya escritos en la baseline |
| Necesidad de trazabilidad | 2 | exigida por el trabajo: cada eslabon se registra, y el Gate audita la cadena entera |
| Volumen y frecuencia | 2 | continuo: es la etapa mas larga del metodo y la unica que se repite |

**Lectura: nivel 5.** Y no por acumulacion, sino por la regla 2 de `_workflow/ai_levels.md` §6:
**«impacto de un error en 3 no se compensa con nada»**. Cualquier eje en 3 pide nivel 5, y **el
harness deja de ser opcional**.

🚨 **Este 3 no es una sorpresa: lo anuncio el archivo de la etapa anterior.** El reparto del
esqueleto puntuo ese eje en **2** y escribio al lado el disparador exacto que lo subiria: *«el
entorno de destino tiene datos reales o usuarios cuando se despliega»*. Esta etapa **termina** con
el producto desplegado y en uso real: el disparador no es un riesgo futuro, es la condicion de
salida.

⚠️ **Y el 3 no viene de que la IA despliegue** —§3 se lo prohibe, igual que en el esqueleto—. Viene
de que **lo que la IA escribe llega hasta ahi**. La barrera que sostenia el 2 era la revision humana
de cada tramo; lo que cambia aqui no es la barrera, es **cuantas veces hay que levantarla**: de un
camino a decenas de slices durante meses. Una barrera que depende de la constancia no puntua como
una barrera mecanica.

### 6.1. Que harness pide esto, y cual no

⛔ **No es el harness del producto.** Si el producto lleva IA, su observabilidad, sus evaluaciones y
sus metricas salen del nivel que declaro la baseline, y son otra cosa (§4, fila marcada).

Lo que pide esta lectura es un harness sobre **el trabajo**, y es modesto porque el bucle ya trae
donde ponerlo — el Paso 8 cierra cada iteracion, y ahi es donde se lee:

| Pieza | Que responde | Donde ya cabe |
|---|---|---|
| **traza** de lo que la IA produjo en cada slice | ¿que escribio, y sobre que se le pidio? | el registro de slice que la etapa ya escribe |
| **casos con salidas inaceptables** | ¿empezo a hacer algo que no debia? | la mitad que se olvida, `_workflow/ai_levels.md` §5.2 |
| **tasa de correccion humana** por iteracion | ¿cuanto de lo delegado hubo que rehacer? | el registro de iteracion, al cerrar cada vuelta |

📌 **La tercera es la que decide si el reparto de §2 sigue siendo cierto.** `_workflow/ai_levels.md`
§5.4 lo dice sin rodeos: si esa tasa es alta, el nivel elegido no era el problema — **el reparto lo
era**. Es el unico numero de esta etapa que juzga a este archivo.

🚨 **Y la trampa aqui es la contraria a la de las etapas anteriores.** Alli el riesgo era el harness
prematuro; aqui es el **eternamente aplazado** —*«cuando tengamos tiempo lo medimos»*—, y llega con
una excusa buena: la etapa esta produciendo, se ve avanzar, y medir no entrega ninguna slice. Cuando
se echa en falta es en el Gate, y para entonces la ventana ya paso.

⛔ **Este nivel no baja durante la etapa.** No hay ninguna asignacion que se pueda quitar para
devolver el eje al 2, porque lo que lo pone en 3 es el destino del trabajo y ese destino **es la
definicion de la etapa**. Decirlo evita la conversacion de dentro de tres meses: no se trata de
apretar el reparto hasta que la puntuacion baje.

⚠️ **Lo que si puede moverse es a peor**, y conviene escribirlo:

| Si… | El eje que se mueve | A donde |
|---|---|---|
| se le da a la IA el despliegue o el empuje de historial | Autonomia necesaria | **3** — y entonces son dos ejes en 3, no uno |
| la revision humana de cada tarea deja de hacerse caso a caso | la lectura de §6, directamente | *«el sistema decide sin revision humana caso a caso»* — mismo destino, sin mover ningun eje |
| se despliega de forma continua en vez de al cerrar la iteracion | Volumen y frecuencia | **3**, y la revision caso a caso deja de ser sostenible por aritmetica |

---

## 7. Que se registra al aplicar este archivo

| Va a… | Que |
|---|---|
| `decisions.md`, con su `D-XXX` | que se adopta de estas tablas y **que se descarta**; **el orden de las slices de cada iteracion con su razon**; el corte de las slices que costo decidir; y lo que se dejo fuera del alcance con su destino |
| `constraints.md`, con su `C-XXX` | los limites que aparecen al integrar con sistemas ajenos: cuotas, formatos, ventanas de servicio, permisos. Es la segunda etapa en que **la realidad contesta**, y ahora contesta sobre sistemas de otros |
| `assumptions.md`, con su `A-XXX` | los que cada slice **confirmo o tumbo** —los tumbados se marcan, no se borran— y lo que este reparto da por cierto: **que habra quien revise cada tarea a este volumen**, y que habra un humano para firmar cada despliegue |
| `techdebt.md`, con su `DT-XXX` | lo que cada slice dejo a medias a proposito, **con la slice que lo genero al lado** |
| `lessons.md`, con su `L-XXX` | al cerrar cada iteracion, no al cerrar la etapa: que asignacion fallo, cual demostro funcionar, y que enseno lo que rompio |

🚨 **El primer supuesto de la fila de `assumptions.md` es el que sostiene la puntuacion de §6, y es
el que mas facil se vuelve falso.** «Habra quien revise cada tarea» es cierto en la primera
iteracion y se vuelve caro en la cuarta. Si deja de cumplirse, **la lectura de §6 ya no es la que
esta escrita** — y nadie habra cambiado nada, que es como pasan estas cosas.

⚠️ **Y la fila de `lessons.md` dice «al cerrar cada iteracion» a proposito.** Esta es la unica etapa
larga del metodo: acumular las lecciones hasta el final no las pierde a medias, las pierde enteras.

🚨 **Aplicar este archivo no abre ningun codigo nuevo.** El reparto vive en las decisiones, que es
donde ya vive todo lo que se elige — `_workflow/team.md` §9.

---

## 8. Verificacion

```bash
# ocho filas, una por paso del procedimiento de la etapa
grep -cE "^\| \*\*[1-8] · " _workflow/030_growth.md

# la etapa lo cita: sin esto, el archivo no tiene lector — y aqui ademas es condicion de entrada
grep -n "_workflow/030_growth" _phases/030_growth.md
```

🔑 **La segunda orden pesa lo mismo que en las tres etapas anteriores, y por la misma razon.** No
comprueba solo que el reparto tenga lector: comprueba que **la condicion de entrada sigue
enganchada**. Es `_phases/030_growth.md` §4 y §5 quien dice que sin este archivo la etapa no se
abre, y si esas citas desaparecen, **la condicion desaparece con ellas y nadie lo nota** — un
archivo que nadie manda leer no lo echa en falta ningun control, porque sigue existiendo.

---

## 9. Errores frecuentes

| Error | Como suena | Que hacer |
|---|---|---|
| Repartir una vez y no volver a mirar | «el reparto ya lo hicimos en la primera iteracion» | es un bucle: lo que aguanta una vuelta puede no aguantar la cuarta |
| Dejar de ver el rojo | «esto ya lo hemos hecho veinte veces» | el coste bajo con la practica; la evidencia que aporta, no |
| Aceptar el rojo equivocado | «fallo, luego el test sirve» | tiene que fallar **por lo que se rompio** |
| Delegar el despliegue | «lo lanza el agente, que es un comando» | fila irreversible de `team.md` §5.1 — y ahora el destino tiene usuarios |
| Cortar por capas dentro de una slice bien cortada | «hago primero las cuatro de datos y no voy saltando» | el corte era vertical; la ejecucion, no |
| Ampliar el alcance en tareas sueltas | «lo pidio un usuario y son dos horas» | lo construido de mas tambien costo, y el Gate lo pregunta |
| Decidir no prototipar sin dejar rastro | «esta estaba clara» | sin registro no se distingue de no habersela preguntado |
| Acumular el Paso 7 | «actualizo la baseline al cerrar la iteracion» | lo reconstruido documenta el resultado, no lo aprendido |
| Confundir producto con participante | «la IA del producto ya nos avisa de eso» | ¿comprueba el trabajo, o **es** el trabajo? |
| Puntuar el nivel dos veces | «ya puntuamos en la baseline» | §6 puntua **el trabajo de esta etapa**; el del producto ya se declaro |
| Aplazar el harness | «cuando tengamos tiempo lo medimos» | si un eje esta en 3 ya no es opcional, y aqui lo esta desde el primer dia |
| Confundir uso real con demostracion | «ya hay gente entrando» | el Gate pregunta si entran **cuando nadie esta mirando** |
| Ajustar la ventana sobre la marcha | «un par de semanas mas, que va mejorando» | medir hasta que el numero guste es elegir el resultado |
| Reparto no registrado | «ya sabemos quien hace que» | sin `D-XXX` no existe |
| Reparto escrito al final | «lo documento cuando cierre la etapa» | se escribe al decidirlo; despues se reconstruye lo que salio, no lo que se eligio |
