# Etapa `010_prototype`

> **La etapa en la que se construye algo por primera vez, y se construye para tirarlo.** Un
> artefacto interactivo del camino feliz del actor originador, hecho para poner a prueba la
> hipotesis que dejo el descubrimiento — antes de invertir en el producto.
>
> **La lee:** `manager`, y cualquier agente que necesite saber que esta autorizado en esta etapa.
> **Definiciones:** `project.md` (que es cada cosa y donde esta), `CLAUDE.md` (el metodo de trabajo)
> y la guia de metodo del proyecto —prototipo, evaluacion por comportamiento, dimensiones de
> validacion, gates—. Este archivo **no define conceptos ni repite datos** — dice **que se hace y
> que no** dentro de la etapa.

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

- **Construir un artefacto interactivo** del camino feliz del actor originador: HTML cliqueable,
  mockup, simulacion o prototipo interactivo.
- **Usar datos falsos, quemados en el codigo.** El prototipo no calcula: aparenta.
- **Reclutar usuarios** que encajen en el perfil representativo que definio el descubrimiento.
- **Correr sesiones de evaluacion** con esos usuarios, y registrar **comportamiento observado**, no
  opiniones.
- **Correr, aparte, la validacion de negocio** con el patrocinador.
- **Registrar como `C-XXX` y `A-XXX`** los limites y lo no confirmado que aparezcan al hablar con
  usuarios reales.

🔑 **La primera es la que cambia todo respecto a las etapas anteriores, y conviene decirlo:** hasta
aqui escribir codigo estaba prohibido. Aqui se autoriza **una sola clase de codigo** —descartable,
del camino feliz, con datos quemados— y **solo mientras siga siendo descartable**. En cuanto alguien
lo trata como producto, la autorizacion de esta etapa ya no lo cubre.

## 2. Que prohibe esta etapa

Es la seccion util del archivo. Un prototipo deja de ser barato en cuanto alguien lo trata como
software, y a partir de ahi ya no se puede tirar.

| ❌ Prohibido | Por que |
|---|---|
| **Persistencia real** — base de datos, ficheros | el prototipo **simula** que guardo; no guarda |
| **Autenticacion real** | un login falso que siempre entra basta |
| **Arquitectura, capas, patrones** | no hay nada que sostener todavia; eso llega despues del Gate |
| **Casos de error y validaciones** | se valida el camino **feliz**. Un error tratado es tiempo gastado en lo que nadie esta midiendo |
| **Actores que no sean el originador** | el originador es la condicion de existencia; los demas entran cuando se justifiquen |
| **Cambiar la hipotesis** | viene sellada del descubrimiento. Cambiarla aqui es escribirla despues de ver el resultado |
| **Cambiar el perfil de usuario representativo** | se define antes de las sesiones, o se define **a la medida de quien vino** |
| **Modificar el prototipo entre sesiones** | ver §4 Paso 6 — rompe la comparabilidad de la ronda |
| **Escribir especificacion, requisitos o arquitectura** | son artefactos posteriores al Gate; escribirlos ahora es especificar sobre supuestos |
| **Pasar del limite de duracion que fija la guia de metodo** | el limite **es** el metodo: mantiene el prototipo como inversion pequena |
| **Declarar que el prototipo tuvo exito** | ese veredicto es del Gate, y no lo emite quien construyo lo que se evalua |
| **Dar por cerrado un hallazgo propio** | `Implementado` lo escribe la auditoria siguiente, nunca `manager` |

### La prohibicion que mas dinero cuesta romper

> **El codigo del prototipo no se reutiliza. Se tira.**

Es la presion mas previsible de toda la etapa, y llega del patrocinador con una frase razonable:
*«ya esta hecho, ¿por que empezar de cero?»*.

Lo que esta hecho es un artefacto **sin arquitectura, sin persistencia, sin manejo de errores y sin
pruebas**, construido a proposito asi para que fuera barato. Promoverlo no ahorra las semanas que
costo: **convierte todas sus ausencias en deuda tecnica el dia uno**, y encima invisible, porque por
fuera funciona.

📌 **Se dice antes de ensenar el prototipo, no cuando ya gusto.**

⚠️ **Y si aun asi se decide promoverlo, eso no lo decide `manager`.** Es irreversible en la practica
—compromete la arquitectura del producto entero—, asi que **se escala al usuario antes de actuar**.
Si se aprueba, **todo el prototipo pasa a `techdebt.md` ese mismo dia, entero**, y no en trozos
segun vayan doliendo.

### 🚨 La excepcion a `PI-5`, escrita aqui porque si no seria un silencio

`CLAUDE.md` fija que una tarea que produce **codigo ejecutable** esta Terminada cuando **un test
automatizado pasa en verde**, y que no hay una tercera casilla. Esta etapa produce codigo ejecutable
**y prohibe los tests** — un test protege lo que se va a conservar, y este artefacto se tira.

**Los dos se contradicen, y la contradiccion se resuelve declarandola, no ignorandola:**

| Que se produce | Que lo respalda |
|---|---|
| El **prototipo** —el artefacto descartable— | **la evidencia registrada de las sesiones**: un archivo por sesion, con su estado, sus bloqueos y sus comentarios. Esa es su Definicion de Terminado |
| **Todo lo demas** que produzca esta etapa | lo de siempre: si es documentacion o registro, su **bloque de verificacion**; si algun dia hubiera codigo que se conserva, su test en verde |

🔑 **Por que la excepcion no vacia `PI-5`.** El principio existe para que nada se de por hecho sin
algo que lo compruebe, y aqui hay algo que lo comprueba: **el comportamiento de usuarios reales
frente a una tarea**, registrado mientras ocurre. Lo que cambia es el instrumento, no la exigencia.
Un prototipo sin sesiones registradas no esta Terminado — esta afirmado, que es exactamente lo que
`PI-5` prohibe.

⛔ **La excepcion cubre el prototipo y nada mas.** No se extiende «al codigo de esta etapa» ni «a lo
que sea rapido»: alcanza al artefacto descartable del camino feliz, y deja de aplicar en el instante
en que ese artefacto deja de ser descartable.

## 3. Entradas — que debe existir antes de empezar

Todas vienen de la etapa de descubrimiento, y **las cinco son obligatorias**:

1. **La hipotesis con su condicion de falsacion.**
2. **El perfil del usuario representativo** — quien cuenta como usuario valido en una sesion.
3. **El actor originador identificado y alcanzable**, con actor concreto detras, no una categoria.
4. **Las necesidades `N-XXX`**, enunciadas sin nombrar una pantalla.
5. **Las restricciones `C-XXX`** conocidas.

🚨 **Si la hipotesis no tiene escrito que observacion la tumbaria, esta etapa no empieza.** Se
vuelve al paso de la etapa anterior que la formula. Un prototipo sin hipotesis falsable produce
sesiones que no se pueden interpretar, y el Gate se queda sin criterio: aprobaria o rechazaria por
impresion.

⚠️ **Las entradas se comprueban, no se suponen.** Que la etapa anterior este cerrada no garantiza
que las cinco esten escritas; lo que lo garantiza es abrirlas y verlas. Si falta una, se registra
como `A-XXX` o `C-XXX` y se escala al usuario antes de construir nada encima.

## 4. Procedimiento

🚨 **Antes del Paso 1 se reparte el trabajo.** Los nueve pasos que siguen dicen **que** hay que
hacer; quien hace cada uno —humano, software, IA, o una combinacion— lo dice
**`_workflow/010_prototype.md`**, que se lee ahora y no despues. Ese reparto se adopta con su `D-XXX` en el
registro: leer la tabla no reparte nada.

⚠️ **Y se escribe al decidirlo, no al cerrar la etapa.** Reconstruido despues, lo que queda
registrado es el reparto que salio, no el que se eligio.

🚨 **El orden de los pasos 2 y 3 respecto al 4 no es una preferencia: es lo que hace auditable la
etapa.** La tarea, el perfil y el numero de sesiones se escriben **antes** de construir. Escritos
despues, describen lo que salio.

### Paso 1 — Elegir el camino feliz que se valida

**Uno solo.** El recorrido del actor originador desde que aparece la necesidad hasta que la
aplicacion confirma que quedo resuelta.

Todo lo demas —ramas, excepciones, configuracion, historial— queda fuera. **Si el camino feliz no
cabe en una sesion de usuario, es demasiado grande** y hay que recortarlo antes de seguir.

### Paso 2 — Escribir la tarea ANTES de construir el prototipo

Es la decision de metodo mas importante de la etapa.

> Si la tarea se escribe **despues** del prototipo, se escribe a la medida de lo que el prototipo
> hace bien. Entonces la sesion ya no mide si el usuario puede: mide si la tarea encajaba.

Se entrega **contexto y tarea**, nunca instrucciones:

| ❌ No se dice | ✅ Se dice |
|---|---|
| «Haz clic en *tal opcion* y luego selecciona la fecha.» | «Imagina que estas en *tal situacion* y necesitas *tal cosa*. Usa esta aplicacion para conseguirlo.» |

La tarea queda escrita en su artefacto **y no se toca durante el resto de la etapa.**

### Paso 3 — Fijar cuantos usuarios y de que perfiles

Se decide **ahora**, antes de la primera sesion, y se registra con su `D-XXX`.

- **Un numero concreto, nunca «los que salgan».** Con muy pocos, un usuario raro decide el
  resultado.
- **Repartidos entre los perfiles que definio el descubrimiento** — no todos del perfil facil de
  conseguir.

> El numero se fija antes de empezar. **Parar cuando los resultados gustan no es muestrear: es
> elegir la respuesta.**

🚨 **La guia de metodo no fija cuantos, y eso hay que decirlo en vez de dar por hecho que lo dice.**
Exige «usuarios representativos» y no una cantidad. Por eso el numero **lo fija el proyecto, con su
`D-XXX`, antes de la primera sesion** — y quien lo fije tiene que escribir **por que ese y no otro**,
porque no lo respalda ninguna fuente.

⚠️ **Un numero sin su `D-XXX` es peor que no tenerlo:** parece una regla del metodo, nadie lo
discute, y cuando la ronda se hace larga se recorta sin que conste que se recorto.

### Paso 4 — Construir el prototipo

Camino feliz, datos quemados, **nada de la casilla §2**, y dentro del limite de duracion que fija la
guia de metodo.

El prototipo se construye **para servir a la tarea del Paso 2**, no al reves. Si al construirlo
aparece la tentacion de retocar la tarea para que encaje, esa es la senal de que el prototipo se
esta convirtiendo en el sujeto del experimento en vez de su instrumento.

### Paso 5 — Correr la sesion

**Los roles, y lo que cada uno no hace:**

| Rol | Hace | **No** hace |
|---|---|---|
| **Facilitador** | explica el ejercicio, entrega la tarea, pregunta neutral, observa, registra | ensenar la solucion; intervenir mas de lo minimo |
| **Usuario** | realiza la tarea | — |
| **Observadores** | observan, toman notas, registran comportamientos | **intervenir durante la interaccion** |
| **Patrocinador** | observa | responder las preguntas del usuario durante la prueba |

Si el usuario pregunta *«¿aqui debo poner tal dato?»*, **nadie responde «si»**. El facilitador
devuelve la pelota: *«¿tu que harias?»*.

**Los principios de no sesgo de la guia de metodo aplican enteros.** Los tres que mas se rompen en
la practica:

- **No explicar como se usa** antes de empezar.
- **No corregir el error** en el momento en que ocurre.
- **No dejar que el patrocinador conteste.**

### Paso 6 — No tocar el prototipo entre sesiones

Aunque el primer usuario tropiece con algo obvio y arreglarlo cueste diez minutos.

> Si el prototipo cambia entre el primer usuario y el cuarto, **las cuatro sesiones ya no midieron
> lo mismo**, y no se pueden sumar. Lo que sale es una anecdota por usuario.

Los tropiezos se **anotan**; se arreglan cuando la ronda entera termino. Si un fallo es tan grave
que impide continuar, **se detiene la ronda, se arregla, y se vuelve a empezar contando desde
cero** — no se mezclan las sesiones de antes con las de despues.

### Paso 7 — Registrar cada sesion, mientras ocurre

**Un archivo por sesion**, con su plantilla. Lo minimo que debe llevar:

- **Perfil del participante** y con cual de los definidos encaja.
- **Estado del resultado**, uno de los cuatro que fija la guia de metodo —exito autonomo, exito con
  dudas, exito con ayuda, fracaso—, sin inventar un quinto.
- **Donde se bloqueo, donde dudo, donde se equivoco**, con el punto del flujo.
- **Comentarios espontaneos**, en sus palabras, entrecomillados.
- **Respuestas a las preguntas posteriores**, que se hacen **despues** de la interaccion y nunca
  durante.

📌 **Se escribe durante la sesion o inmediatamente despues.** Un registro reconstruido al dia
siguiente es un recuerdo, y un recuerdo ya viene filtrado por lo que uno esperaba encontrar. Es la
misma regla que rige el registro del porque en `CLAUDE.md`, aplicada a lo que ocurre delante.

📌 **El valor numerico del estado es un apoyo, no el resultado.** Lo que decide es el patron: tres
usuarios bloqueados en el mismo campo dice mas que un promedio.

### Paso 8 — Clasificar las observaciones

Ninguna observacion se convierte en requisito por haberse dicho. Cada una se clasifica en una de las
categorias que fija la guia de metodo —problema funcional, problema de comprension, problema de
usabilidad, necesidad no contemplada, sugerencia, nueva funcionalidad potencial, caso excepcional,
requisito de negocio, idea para una etapa posterior—.

> **Una observacion del usuario no se convierte automaticamente en un requisito.**

🔑 **Solo las tres primeras pesan en el Gate.** Las demas son material para las etapas siguientes, y
mezclarlas convierte una sugerencia en un motivo de rechazo — o al reves, tapa un problema funcional
bajo una lista larga de ideas.

### Paso 9 — Validacion de negocio, en sesion aparte

Se corre **con el patrocinador, sin usuarios delante**.

| Dimension | Quien valida | Que valida |
|---|---|---|
| **Necesidad** | el usuario | «esto representa como yo haria esta tarea» |
| **Negocio** | la empresa | «este flujo es compatible con nuestro proceso» |

**No se mezclan, y las dos deben salir bien.** Puede pasar que los usuarios lo usen sin problema y
el patrocinador descubra que el flujo choca con una regla interna — o al reves, que el proceso sea
correcto y nadie sepa usarlo. **Son dos fallos distintos con dos arreglos distintos**, y una sesion
mixta produce un unico veredicto confuso en vez de dos claros.

## 5. Artefactos que produce

Cinco artefactos de registro, mas el artefacto ejecutable. **Solo el ultimo es codigo.**

| Artefacto | Que contiene | Donde se escribe |
|---|---|---|
| **Camino feliz y tarea** | el recorrido elegido y la tarea literal, sellados en el Paso 2 | carpeta de artefactos de la etapa, con plantilla |
| **Participantes** | los perfiles definidos, cuantos se fijaron, y quien vino | carpeta de artefactos de la etapa, con plantilla |
| **Sesiones** | una por sesion, escrita en el momento, con estado y bloqueos | carpeta de artefactos de la etapa, con plantilla |
| **Observaciones** | todas, **clasificadas**, no en bruto | carpeta de artefactos de la etapa, con plantilla |
| **Validacion de negocio** | la dimension de negocio, con el patrocinador | carpeta de artefactos de la etapa, con plantilla |
| **El prototipo** | el artefacto interactivo. **Codigo descartable** | carpeta propia, separada de cualquier codigo de producto |

⚠️ **Cual es la carpeta de artefactos, cual es la del prototipo y cual es el archivo de cada
registro lo dice `project.md`, no este archivo** — aqui no se escribe ninguna ruta propia del
proyecto.

📌 **El prototipo vive en una carpeta propia, y separada a proposito.** No comparte carpeta con
codigo de producto, para que nadie lo confunda con producto. Cuando el Gate cierre, **se archiva o
se borra; no se muda.**

⚠️ **Toda carpeta de primer nivel se declara en `project.md`.** El cierre contrasta el arbol contra
esa tabla **en las dos direcciones**: una carpeta sin fila y una fila sin carpeta son el mismo
defecto por sus dos caras. La carpeta del prototipo no es una excepcion — que sea temporal no la
exime de estar declarada, y su fila tendra que decir que se archiva o se borra al cerrar el Gate.

**Las plantillas viven en `_templates/010_prototype/`, una por artefacto.** Un artefacto se escribe
copiando su plantilla, y la regla de «adherencia a plantillas» tiene entonces contra que
comprobarse.

🚨 **Las plantillas y el reparto de `_workflow/010_prototype.md` son condicion de entrada, no
trabajo de dentro de la etapa.** Mientras falte cualquiera de los dos, **la etapa no puede abrirse
aunque sus cinco entradas esten completas** — se construiria sin forma acordada para registrar lo
que se observe, y sin saber quien hace cada paso.

⚠️ **Es la condicion que mas facil se salta, porque no la señala nadie.** Las cinco entradas de §3
las trae la etapa anterior y se echan en falta al buscarlas; estas dos no las trae nadie, y su
ausencia solo se nota **despues** de la primera sesion, cuando hay que escribirla y no hay donde.
Se comprueban al abrir la etapa, con la misma seriedad que las entradas.

## 6. Condicion de salida

La etapa termina cuando **las siete son ciertas**:

- [ ] **El camino feliz y la tarea estan escritos y no se tocaron** desde el Paso 2.
- [ ] **Se corrieron todas las sesiones fijadas en el Paso 3**, con los perfiles previstos.
- [ ] **Cada sesion tiene su archivo**, con estado, bloqueos y comentarios.
- [ ] **Las observaciones estan clasificadas**, no en bruto.
- [ ] **La validacion de negocio se hizo**, en sesion aparte.
- [ ] **Los supuestos del descubrimiento que las sesiones tocaron estan actualizados** en el
      registro: los que se confirmaron y los que se tumbaron, **sin borrar ninguno**.
- [ ] **La cosecha esta hecha:** ninguna leccion de esta etapa queda `Sin evaluar` en la columna
      `Portabilidad` de `lessons.md`, y lo que quedo `Global candidata` esta ya en el archivo de
      lecciones globales, con su `D-XXX` y con la version nueva del archivo declarada.

Si alguna falla, la etapa sigue abierta.

### 🚨 Esta etapa NO declara si el prototipo tuvo exito

Cerrarla significa **«la evidencia esta completa y registrada»**, nada mas.

El veredicto es del **Gate**, y hacen falta **dos firmas que no se sustituyen**: la de una revision
independiente, que contrasta la evidencia contra los criterios y **no decide**; y la de quien
patrocina, que decide y **no sustituye la verificacion con su criterio**. Quien construyo el
prototipo y condujo las sesiones no puede ademas declarar que salieron bien: un sistema que se
revisa a si mismo comprueba que es **coherente**, no que sea **cierto**.

⚠️ **Quien ejerce cada firma en este proyecto lo dicen la guia de metodo y el registro de
decisiones, no este archivo.** Y mientras esa asignacion no este registrada con su `D-XXX`, el Gate
no se puede declarar — ni siquiera para aprobarlo.

### 🚨 Lanzar el Gate es el ultimo paso de esta etapa, y no es opcional

En cuanto las siete condiciones de salida son ciertas y **la evidencia esta commiteada y subida**,
`manager` lanza la revision independiente del Gate. **Ese es el cierre real de la etapa**, no la
septima casilla.

⚠️ **Va escrito aqui porque si no, no lo señala nadie.** Un Gate lo convoca el propio evaluado — el
mismo limite que tiene la auditoria de cada sesion, y con la misma consecuencia: si no se lanza, no
hay revision y **nadie lo nota**. Lo que se nota es lo contrario, y tarde: alguien empieza a
construir el MVP porque el prototipo «salio bien», sin que exista un solo documento que lo diga.

📌 **Se lanza sobre evidencia subida, y por el mismo motivo que la auditoria corre despues del
commit:** la revision arranca en frio y **solo ve lo commiteado**. Lo que siga sin subir le es
invisible, y su dictamen describiria una etapa incompleta sin saberlo.

🔑 **Y no se le cuenta como fue.** Quien conduzco las sesiones no le explica el contexto, no le
adelanta el resultado y no le señala donde mirar. Un revisor al que se le explica el contexto deja
de revisar y pasa a confirmar — y entonces produce un visto bueno que no vale nada, justo antes de
la inversion mas cara del proyecto.

🚨 **La etapa no termina con el dictamen: termina con la decision.** El dictamen dice si los
criterios se satisfacen; **quien patrocina decide** si se construye, se replantea o se detiene, y esa
decision se registra con su `D-XXX`. Mientras falte la segunda firma, el Gate sigue abierto por bien
que salgan los criterios.

🔑 **Un resultado `NO APROBADO` es un resultado valido, y barato.** Se registra igual que uno
aprobado, con su `D-XXX`: detener o replantear aqui cuesta lo que costo el prototipo, y es
exactamente para eso que la etapa existe. Lo que no se registra se repite.

## 7. Que registra `manager` en `_persistence/`

| Archivo | Que se escribe aqui en esta etapa | Quien lo escribe |
|---|---|---|
| `progress.md` | el estado, la bitacora de sesiones, el siguiente paso | **`session-closer`** |
| `tasks.md` | las tareas y su estado | **`session-closer`**, con las excepciones escritas en el propio archivo |
| `decisions.md` | el camino feliz elegido, el numero y los perfiles de participantes, y toda eleccion con sus **alternativas descartadas** | **`manager`** |
| `constraints.md` | los `C-XXX` nuevos que aparecieron al hablar con usuarios reales | **`manager`** |
| `assumptions.md` | que `A-XXX` del descubrimiento **confirmaron** las sesiones y cuales **tumbaron**. Los tumbados **no se borran: se marcan** | **`manager`** |
| `lessons.md` | lo aprendido del negocio y del usuario que no estaba en ningun documento | **`manager`** |
| `techdebt.md` | **nada.** El prototipo se tira, y lo que se tira no acumula deuda | `session-closer` **propone**; confirma el **usuario** |

⚠️ **La excepcion de `techdebt.md` esta en §2:** si se aprueba promover el prototipo, deja de ser
cierto que no acumula deuda — y entonces **todo el prototipo es deuda**, anotada ese mismo dia y
entera.

🚨 **Los cuatro del porque no son del `session-closer`, y por eso son los que se pierden.** El agente
arranca en frio y solo ve archivos. En esta etapa lo mas valioso ocurre **delante de una persona**
—un bloqueo, una frase, un gesto de duda— y no deja rastro en ningun `git diff`. Si `manager` llega
al cierre sin haberlo escrito, esa informacion ya se perdio, y **las sesiones no se pueden repetir**:
el usuario que ya vio el prototipo dejo de ser un usuario que lo ve por primera vez.

⚠️ **Un codigo de producto no aparece antes que en la tabla «Codigos» de `project.md`.** Si esta
etapa necesita uno propio —para identificar sesiones u observaciones—, se declara ahi con su `D-XXX`
antes de escribir el primero; escribirlo sin declararlo es un desfase, no una novedad.

## 8. Lo que esta etapa le entrega al Gate

Quien audite el Gate **no estuvo en las sesiones**. Solo puede leer lo que quedo escrito. Necesita
seis cosas:

1. **La hipotesis con su condicion de falsacion** — del descubrimiento, sin tocar.
2. **La tarea entregada al usuario** — para comprobar que no describe la solucion.
3. **El perfil representativo y el numero fijado**, definidos **antes** de las sesiones.
4. **Un archivo por sesion**, con su estado y sus bloqueos.
5. **Las observaciones clasificadas.**
6. **La validacion de negocio.**

🔑 **Lo que una revision independiente comprueba primero no es el resultado: son las fechas.** Que
la hipotesis, la tarea, el perfil y el numero existieran **antes** de la primera sesion. Si se
escribieron despues, la evidencia describe lo que salio — y no hay nada que auditar.

📌 **Por eso los pasos 2 y 3 van antes del 4**, y no es una preferencia de orden: **es lo unico que
hace auditable la etapa entera.** Todo lo demas se puede reconstruir; el orden en que se escribieron
esas cuatro cosas, no.
