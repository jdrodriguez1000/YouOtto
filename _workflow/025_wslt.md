# Reparto del trabajo — etapa `025_wslt`

> **Quien hace cada actividad de esta etapa.** Deriva de `_workflow/team.md`: no repite su doctrina
> y no legisla sobre la etapa.
>
> **Lo lee:** quien abre la etapa, antes del primer paso de su procedimiento — es el momento de
> entrada que fija `_workflow/team.md` §8.

🔑 **Este archivo es agnostico y sirve para cualquier proyecto.** Las actividades que reparte son
los seis pasos del procedimiento de `_phases/025_wslt.md` §4, que son los mismos en cualquier
proyecto que use este metodo. No lleva dentro ni un nombre, ni una ruta, ni un dato de ningun
producto; los codigos van en su forma generica —`N-XXX`, `T-XXX`, `D-XXX`, `A-XXX`, `C-XXX`,
`DT-XXX`, `F-NNN`—.

⛔ **Tres cosas que este archivo no hace:**

| No hace | Quien si |
|---|---|
| decir que se autoriza y que se prohibe en la etapa | `_phases/025_wslt.md` §1 y §2 |
| fijar la condicion de salida | `_phases/025_wslt.md` §6 |
| declarar que reparto adopta un proyecto concreto | el `D-XXX` que se escribe al abrir la etapa |

🔑 **Lo de aqui es lo que *puede* hacer cada participante. Lo que se *adopta* es una decision, y va
al registro.** Leer esta tabla no reparte nada: repartir es escribir el `D-XXX`.

🚨 **Como en las dos etapas anteriores, este archivo es condicion de entrada, no material de
consulta.** `_phases/025_wslt.md` §5 dice que sin el —y sin la plantilla del acta— la etapa **no
puede abrirse**, aunque sus cuatro entradas esten completas.

🚨 **Y hay una diferencia con todas las etapas anteriores que cambia el reparto entero: aqui, por
primera vez, se ejecutan acciones con efecto fuera del repositorio.** El descubrimiento producia
entendimiento, el prototipo producia algo descartable y la baseline producia documentos: los tres se
deshacen con un commit. Esta etapa **despliega** y **empuja historial**, y esas dos cosas no se
deshacen igual. Todo el reparto de abajo cuelga de ahi, y §2.1 y §3 lo dicen con todas las letras.

---

## 1. De donde sale este reparto

Una fila por paso del procedimiento, ni una mas. Si `_phases/025_wslt.md` §4 gana o pierde un paso,
este archivo cambia con el.

🚨 **Y si no cambia, quedan dos archivos diciendo cosas distintas** — que es exactamente lo que
`_workflow/team.md` avisa de no hacer: el que envejece miente sin que nadie lo note.

---

## 2. El reparto, paso a paso

| Paso | Humano — obligatorio | Software — puede | IA — puede |
|---|---|---|---|
| **1 · Adelgazar el camino** | decidir cual es el camino, y **firmar que atraviesa todas las capas** de la Arquitectura Base | comprobar que el camino escrito en el acta nombra **cada** capa que la arquitectura declara, y señalar la que falta | proponer el recorrido mas fino posible a partir del escenario ya validado · señalar la capa que el recorrido propuesto no toca |
| **2 · Levantar el entorno reproducible** | decidir versiones y limites que se fijan · **levantarlo en una maquina limpia y decir si funciono** | comprobar que las dependencias estan fijadas, que no queda configuracion en el codigo, y que el arranque es **un solo** comando | redactar el manifiesto de dependencias y el archivo de arranque · señalar la dependencia sin version fijada |
| **3 · Atravesar las capas, sin simular ninguna** | **decidir que cuenta como capa real** en cada juntura, y revisar cada tramo antes de pasar al siguiente | ejecutar el codigo y devolver lo que devuelve · comprobar que no queda ninguna respuesta fija ni ninguna estructura en memoria haciendo de almacenamiento | **escribir el codigo del esqueleto**, capa a capa, con revision humana de cada tramo |
| **4 · Llevarlo hasta donde va a vivir** | 🚨 **ejecutar el despliegue, y firmarlo** · diagnosticar lo que rompa · decidir que se registra como `C-XXX` y que como `A-XXX` refutado | ejecutar la comprobacion de que el despliegue quedo arriba, y devolver su salida cruda | **solo proponer**: preparar los archivos de despliegue, y explicar que hace cada paso · señalar la variable que en local existe y en destino no esta declarada |
| **5 · Construir las tres preguntas, en su version minima** | **ver el test en rojo con sus propios ojos** y firmarlo · asumir la responsabilidad sobre la de seguridad | **el barrido de secretos sobre el historial**, con su patron, su ambito y su salida cruda · ejecutar el test y devolver rojo o verde | escribir el test, la linea de registro y la lista de superficie expuesta · señalar lo que el barrido de secretos **no** cubre |
| **6 · Verlo caminar, y verlo desde fuera** | decidir que hacer cuando las dos comprobaciones **no coinciden** | **las dos comprobaciones**: el test desde dentro y la peticion real contra el entorno real, con las dos salidas crudas | proponer que peticion sirve de comprobacion externa · señalar que la de fuera prueba menos de lo que el enunciado dice |

📌 **Las columnas «Software» de los pasos 5 y 6 son las unicas de todo el metodo que pueden
contradecir a un humano sin discutir.** En las etapas anteriores el software comprobaba **forma**
—que un campo estuviera, que un codigo no colisionara—. Aqui comprueba **hechos**: el test pasa o no
pasa, el entorno responde o no responde, el secreto esta en el historial o no esta. No hay una
lectura amable de ninguno de los tres.

🚨 **Y por eso el Paso 4 es el unico de todo el metodo con una accion humana obligatoria que no es
decidir, sino ejecutar.** Desplegar no se delega, y el motivo esta en §3.

### 2.1. Las cuatro asignaciones que no son obvias, y por que

**Paso 3 · la IA escribe el codigo del esqueleto, y eso es nuevo.** Hasta aqui escribia documentos.
Lo que mantiene la autonomia en la fila **reversible y de impacto relevante** de `_workflow/team.md`
§5.1 —el humano **revisa cada tramo antes de darlo por bueno**, no por muestreo— es que el codigo
vive en control de versiones y todavia no hay nada colgando de el. Es la ventana mas ancha que va a
tener la IA en todo el proyecto, y dura exactamente lo que dura esta etapa.

⚠️ **Lo clasifico como reversible a criterio, porque** el codigo del esqueleto esta en control de
versiones, no hay datos de nadie dentro, no hay usuarios y nada se ha construido encima: deshacerlo
es un commit. Mientras el proyecto no tenga un inventario de acciones irreversibles registrado, esta
clasificacion se declara asi, como criterio, y no como si se leyera de una tabla
(`_workflow/team.md` §5.1).

**Paso 4 · el despliegue lo ejecuta un humano, y esa es la asignacion que define esta etapa.**
`_workflow/team.md` §5.1 pone en la fila **irreversible** —«la IA **solo propone**; el humano decide
y firma antes de actuar»— lo que no tiene vuelta atras sin coste real, y nombra expresamente
*publicar* y *migrar*. Un despliegue es las dos cosas: pone algo en marcha en un sitio que no es la
maquina de quien lo escribio.

⚠️ **Y aqui la clasificacion no es la misma que la del Paso 3, aunque las dos sean de la misma
etapa.** Lo clasifico como **irreversible a criterio**, porque el entorno de destino no es un
archivo: puede tener credenciales, cuotas que se consumen, nombres que se reservan, y un registro de
que alguien accedio. Nada de eso se deshace con un commit. **Un despliegue fallido se puede repetir;
lo que ya toco el entorno, no se puede no haber tocado.**

🔑 **Que la primera vez el entorno este vacio no cambia la clasificacion, y conviene decirlo porque
es el argumento que va a aparecer.** «No hay nada que romper todavia» es cierto **hoy** y deja de
serlo sin aviso, porque el mismo procedimiento se va a repetir cuando ya haya algo. Una asignacion
que solo vale mientras el entorno este vacio es una asignacion que hay que acordarse de cambiar — y
nadie se acuerda.

**Paso 5 · el rojo del test lo ve un humano; el barrido de secretos no lo hace ninguno.** Las dos
mitades van en direcciones opuestas a proposito:

- **El rojo es juicio y va al humano.** Que un test falle no basta: tiene que fallar **por la razon
  que se rompio**. Un test que falla porque el entorno de pruebas no arranca da el mismo rojo que
  uno que falla porque el almacenamiento esta apagado, y solo el segundo prueba algo. Esa distincion
  es leer la salida, no contarla.
- **El barrido de secretos es determinista y va al software.** Un humano promete que no hay secretos
  en el historial; un barrido **muestra** si los hay. Es la misma forma que en la baseline, y aqui
  pesa mas: alli el historial todavia era corto, aqui ya lleva el despliegue dentro.

**Paso 6 · las dos comprobaciones las corre el software, y la discrepancia la decide un humano.**
Correr un test y hacer una peticion son trabajo determinista; lo que no lo es —y lo que esta etapa
existe para descubrir— es **que significa que las dos no coincidan**. `_phases/025_wslt.md` §4 Paso
6 dice que manda la de fuera; decidir si eso es un montaje de pruebas que hay que arreglar o una
arquitectura que no se sostiene es la decision mas cara de la etapa, y no la toma quien corre el
comando.

---

## 3. Lo que no se delega nunca en esta etapa

| ⛔ Nunca | Por que |
|---|---|
| 🚨 que la IA o el software **ejecuten el despliegue** | es una accion con efecto fuera del repositorio: `_workflow/team.md` §5.1, fila irreversible — se propone, se firma, y ejecuta un humano |
| que la IA **empuje historial** sin que un humano haya visto el barrido de secretos | un secreto empujado no se retira: se rota, y eso ya es un incidente |
| que la IA o el software declaren que **una capa es real** | es la prohibicion que define la etapa, y la unica forma de romperla sin que se note es llamando real a algo que no lo es |
| que la IA declare que **el test se vio en rojo** | verlo es la evidencia; afirmarlo es la clase de salida plausible que `_workflow/team.md` §5.1 avisa de no aceptar |
| que la IA o el software decidan que **la arquitectura no se sostiene** | es la decision de §6 del archivo de etapa, y arrastra volver a la etapa anterior: la firma un humano |
| que la IA **elija el camino fino** por su cuenta | sale del escenario que usuarios reales completaron; se copia y se adelgaza, no se inventa |
| que la IA o el software den por buena una **comprobacion externa** que no toco el entorno real | es exactamente el fallo que la comprobacion existe para descartar |
| que la IA decida que un supuesto de arquitectura quedo **confirmado** | confirmarlo o tumbarlo es lo que hace el despliegue, y leer lo que dijo el despliegue es juicio |
| que `manager` de por cerrado un hallazgo propio | `Implementado` lo escribe la auditoria siguiente |

🚨 **La tercera fila es la que puede vaciar la etapa entera sin dejar rastro.** Un esqueleto con una
capa simulada y uno completo **dan exactamente el mismo verde** —lo dice `_phases/025_wslt.md` §2—,
y la diferencia no esta en ninguna salida: esta en si lo que hay detras de la juntura es la pieza de
verdad. Eso no lo puede comprobar quien escribio el codigo, y menos aun quien lo escribio siguiendo
una descripcion.

⚠️ **La cuarta tiene un disparador previsible, y llega en forma de prisa:** *«el test ya esta en
verde, el rojo lo damos por visto»*. El rojo es la mitad barata de la evidencia y la unica que
demuestra que el test **puede** fallar. Sin el, lo que queda en el acta es una afirmacion — y
`CLAUDE.md` ya dice que un test escrito para pasar es documentacion disfrazada de evidencia.

---

## 4. Que cuenta como «software» en la primera etapa que produce codigo

⚠️ La aclaracion es la mas dificil de las cuatro etapas, y por una razon nueva: **hasta ahora las
dos columnas no se podian confundir porque la etapa no producia nada ejecutable.** Aqui lo que la
etapa produce **es** ejecutable, y se parece muchisimo a lo que la reparte.

| ✅ Es software de esta etapa | ❌ No lo es |
|---|---|
| el barrido de secretos sobre el historial | **el codigo del esqueleto** — es el **producto** de la etapa, no un participante |
| el ejecutor de pruebas que devuelve rojo o verde | **el test del camino** — es un artefacto que la etapa produce; quien participa es lo que lo **corre** |
| la peticion real contra el entorno, en el Paso 6 | **lo desplegado** — responde, pero no reparte trabajo |
| las ordenes de comprobacion que la plantilla del acta ya trae | cualquier herramienta nueva que haya que instalar o mantener solo para esta etapa |
| los controles mecanicos del cierre y de la auditoria, que ya existen | — |

🔑 **La linea que separa las dos columnas es una sola pregunta:** ¿esto **comprueba** el trabajo, o
**es** el trabajo? El ejecutor de pruebas comprueba; el test es el trabajo. La peticion comprueba;
lo que responde es el trabajo.

🚨 **Y confundirlas tiene aqui un coste concreto:** tratar el codigo del esqueleto como participante
del reparto es empezar a pedirle cosas — «que valide», «que reintente», «que avise»—, y cada una de
esas es una regla de negocio que `_phases/025_wslt.md` §2 prohibe. La etapa no se desborda de golpe:
se desborda una peticion razonable cada vez.

---

## 5. Artefactos y condicion de salida: que es mecanico y que es juicio

Las ocho casillas de `_phases/025_wslt.md` §6, separadas por quien las puede comprobar:

| Casilla | Mecanico | Juicio |
|---|---|---|
| 🚨 un camino recorre todas las capas, y ninguna esta simulada | que el recorrido nombre cada capa de la arquitectura | **que detras de cada juntura este la pieza de verdad** — y es la mas cara de toda la etapa |
| el esqueleto esta desplegado donde va a vivir | **entero**: responde o no responde | — |
| se comprobo desde fuera y coincide con el test | **entero**: las dos salidas se comparan | que hacer cuando **no** coinciden |
| existe un test del camino, se le vio rojo y ahora esta verde | el verde, entero | **el rojo**: que fallara por la razon que se rompio, no por otra |
| se escribe una linea de registro y se puede leer | **entero** | que lo que registra sirva para saber que estaba haciendo |
| secretos fuera del historial, comprobado | el barrido, entero | que el patron cubra lo que el enunciado afirma |
| alguien que no lo construyo lo levanta desde cero | que el arranque sea un solo comando y las versiones esten fijadas | **entero**: si lo escrito basta sin preguntar nada |
| la cosecha hecha, ninguna leccion sin evaluar | el recuento de la columna de portabilidad | que leccion es global y cual es solo de este proyecto |

📌 **Cuatro de las ocho son enteramente mecanicas o casi, y es el maximo de todo el metodo hasta
aqui** —tres de nueve en la baseline, una de siete en el prototipo—. La razon no es que la etapa sea
facil: es que **por primera vez lo que se comprueba es un sistema que corre**, y a un sistema que
corre se le pregunta ejecutandolo. No hay que interpretar a nadie.

🚨 **Y eso trae la tentacion mas peligrosa del metodo: creer que porque casi todo se puede ejecutar,
casi todo esta comprobado.** Las dos casillas de juicio que quedan —que ninguna capa este simulada, y
que el rojo fuera el rojo correcto— son **precisamente las dos que dan el mismo resultado cuando se
cumplen y cuando no**. Todo lo demas de esta etapa se puede automatizar; esas dos son la etapa.

---

## 6. Que nivel de sistema de IA pide el trabajo de esta etapa

⛔ **Aqui solo se responde una de las dos preguntas.** El nivel que adopta **el producto**, si el
producto lleva IA, se declaro en la baseline con su `D-XXX` (`_workflow/ai_levels.md` §8). Esta
etapa **lo implementa**, no lo elige — y si al construir el esqueleto aparece que el nivel declarado
no se sostiene, eso es un `A-XXX` refutado que vuelve a la baseline, no una nueva eleccion hecha
aqui.

Rubrica de `_workflow/ai_levels.md` §6, aplicada al **trabajo de la etapa**:

| Eje | Puntuacion | Por que |
|---|---|---|
| Impacto de un error | 2 | daño real reparable — **y lo es solo porque §3 le quita a la IA las acciones irreversibles**. Ver la nota de abajo |
| Autonomia necesaria | 1 | escribe codigo y propone despliegue; **no ejecuta nada con efecto** y no firma nada |
| Variabilidad de la entrada | 2 | lenguaje natural acotado: la Arquitectura Base y un camino ya elegido, los dos escritos |
| Necesidad de trazabilidad | 2 | el registro exige comando y salida cruda, y la etapa produce el acta como artefacto propio |
| Volumen y frecuencia | 1 | una etapa, un camino, unas pocas sesiones |

**Lectura: nivel 2.** El mismo que la baseline, y por la misma razon de fondo —la IA usa
herramientas que escriben archivos—, pero la coincidencia esconde un cambio grande: alli lo que
escribia eran documentos, aqui es codigo que se conserva.

🚨 **El 2 del primer eje es condicional, y es lo mas importante de esta seccion.** Las acciones de
esta etapa que serian un **3** —desplegar y empujar historial— existen: lo que las mantiene fuera de
la puntuacion es que §3 se las quita a la IA expresamente. **El dia que se le den, ese eje se va al
3**, y `_workflow/ai_levels.md` §6 es taxativo: cualquier eje en 3 pide **nivel 5**, el harness deja
de ser opcional, y «impacto de un error en 3 no se compensa con nada». No es una advertencia
teorica: es la puerta por la que esta etapa se sale de su nivel.

✅ **No hay discrepancia que declarar con la tabla de lectura de `_workflow/ai_levels.md` §6.**
Ningun eje esta en 3, y se dice expresamente para que la ausencia se lea como un resultado y no como
un olvido — igual que en la baseline, que fue la primera etapa que pudo decirlo.

⚠️ **Y se dice tambien que ejes la traerian de vuelta**, ademas del primero:

| Si… | El eje que se mueve | A donde |
|---|---|---|
| se le da a la IA el despliegue o el empuje de historial | Impacto de un error | **3** → nivel 5 |
| el entorno de destino tiene datos reales o usuarios cuando se despliega | Impacto de un error | **3** → nivel 5 |
| se despliega de forma continua en vez de una vez al cerrar la etapa | Volumen y frecuencia | 2, y la revision caso a caso deja de ser sostenible |

En cualquiera de los tres casos la lectura ya no es esta, y el `D-XXX` que la adopto hay que
rehacerlo diciendo **que eje se movio**.

---

## 7. Que se registra al aplicar este archivo

| Va a… | Que |
|---|---|
| `decisions.md`, con su `D-XXX` | que se adopta de estas tablas y **que se descarta**; **quien firma el despliegue**, con nombre; y la correccion de arquitectura si el esqueleto la obligo |
| `constraints.md`, con su `C-XXX` | los limites **reales** del entorno que aparecieron al desplegar: versiones, cuotas, puertos, permisos. Es la etapa que mas `C-XXX` produce de todo el metodo |
| `assumptions.md`, con su `A-XXX` | los de arquitectura que el despliegue **confirmo o tumbo** — los tumbados se marcan, no se borran — y lo que este reparto da por cierto: que habra quien revise cada tramo de codigo, y que habra un humano disponible para ejecutar el despliegue |
| `techdebt.md`, con su `DT-XXX` | **las primeras entradas de codigo del proyecto**: lo dejado a medias a proposito para que el esqueleto caminara |
| `lessons.md`, con su `L-XXX` | al cerrar la etapa: que asignacion fallo, o cual demostro funcionar — y casi siempre, lo que enseñaron las junturas |

🚨 **La fila de `constraints.md` es la que distingue esta etapa de todas las anteriores.** Hasta aqui
las restricciones se recogian de lo que alguien contaba; esta es la primera vez que **la realidad
contesta**. Un limite descubierto al desplegar no es una opinion de nadie, y por eso es la clase de
`C-XXX` que no hay que volver a discutir.

🚨 **El segundo supuesto de la fila de `assumptions.md` parece administrativo y no lo es.** Todo el
reparto de §2 descansa en que haya **un humano disponible para ejecutar el Paso 4**. Si no lo hay,
lo que pasa no es que la etapa se retrase: lo que pasa es que alguien delega el despliegue «solo esta
vez», y entonces la puntuacion de §6 deja de ser cierta sin que nadie la haya cambiado.

🚨 **Aplicar este archivo no abre ningun codigo nuevo.** El reparto vive en las decisiones, que es
donde ya vive todo lo que se elige — `_workflow/team.md` §9.

---

## 8. Verificacion

```bash
# seis filas, una por paso del procedimiento de la etapa
grep -cE "^\| \*\*[1-6] · " _workflow/025_wslt.md

# la etapa lo cita: sin esto, el archivo no tiene lector — y aqui ademas es condicion de entrada
grep -n "_workflow/025_wslt" _phases/025_wslt.md
```

🔑 **La segunda orden pesa lo mismo que en las dos etapas anteriores, y por la misma razon.** No
comprueba solo que el reparto tenga lector: comprueba que **la condicion de entrada sigue
enganchada**. Es `_phases/025_wslt.md` §4 y §5 quien dice que sin este archivo la etapa no se abre, y
si esas citas desaparecen, **la condicion desaparece con ellas y nadie lo nota** — un archivo que
nadie manda leer no lo echa en falta ningun control, porque sigue existiendo.

---

## 9. Errores frecuentes

| Error | Como suena | Que hacer |
|---|---|---|
| Delegar el despliegue | «lo lanza el agente, que es un comando» | es la fila irreversible de `team.md` §5.1: se propone, se firma, lo ejecuta un humano |
| Dar el rojo por visto | «ya esta verde, para que romperlo» | el rojo es la unica evidencia de que el test **puede** fallar |
| Aceptar el rojo equivocado | «fallo, luego el test sirve» | tiene que fallar **por lo que se rompio**, no porque el entorno de pruebas no arranque |
| Simular la capa cara | «la base de datos la ponemos luego, ahora un diccionario» | es la prohibicion que define la etapa; simulado y completo dan el mismo verde |
| Aprovechar que ya corre | «ya que camina, una validacion pequeña» | cada peticion razonable es una regla de negocio, y son de la etapa siguiente |
| Confundir producto con participante | «el esqueleto ya puede hacer esto» | ¿comprueba el trabajo, o **es** el trabajo? |
| Creer que lo ejecutable esta comprobado | «pasa todos los controles mecanicos» | las dos casillas de juicio dan el mismo resultado se cumplan o no |
| Puntuar el nivel dos veces | «ya puntuamos en la baseline» | §6 puntua **el trabajo de esta etapa**; el del producto ya se declaro y aqui solo se implementa |
| Dar el eje por estable | «el impacto es 2, ya esta» | es 2 **porque §3 le quita a la IA lo irreversible**; devolverselo lo pone en 3 |
| Corregir la arquitectura en silencio | «cambie una pieza para que arrancara» | sin registro quedan dos arquitecturas, y la siguiente etapa lee la falsa |
| Registrar el despliegue al final | «apunto los problemas cuando cierre» | reconstruido, de todo eso queda «hubo problemas de despliegue» |
| Reparto no registrado | «ya sabemos quien hace que» | sin `D-XXX` no existe |
| Reparto escrito al final | «lo documento cuando cierre la etapa» | se escribe al decidirlo; despues se reconstruye lo que salio, no lo que se eligio |
