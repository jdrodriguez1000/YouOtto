# Etapa `000_preproject`

> **La etapa en la que no se construye producto: se monta la forma de trabajar.** Protocolos,
> persistencia y canal con la auditoria.
>
> **La lee:** `manager`, y cualquier agente que necesite saber que esta autorizado en esta etapa.
> **Definiciones:** `project.md` (que es cada cosa y donde esta) y `CLAUDE.md` (el metodo). Este
> archivo **no define conceptos ni repite datos** — dice **que se hace y que no** dentro de la etapa.

🔑 **Este archivo es agnostico y sirve para cualquier proyecto.** No lleva dentro ni un nombre, ni
una ruta, ni un codigo concreto: donde hace falta un dato del proyecto, se referencia `project.md`.
Los codigos aparecen siempre en su forma generica —`T-XXX`, `D-XXX`, `A-XXX`, `F-NNN`—, nunca
instanciados.

📌 **«Etapa» y «fase» son la misma cosa en esta metodologia**, y se usan indistintamente. La carpeta
se llama `_phases/` en ingles porque los nombres de archivos y carpetas van en ingles; el contenido
va en espanol.

---

## 1. Que autoriza esta etapa

- **Montar y modificar el metodo:** las skills y los agentes de `.claude/`, `CLAUDE.md` y
  `project.md`, y la guia de metodo si el proyecto la tiene.
- **Escribir el archivo de etapa de cualquier etapa**, en `_phases/`, y las plantillas de sus
  artefactos, en `_templates/`. **Escribirlos no las adopta:** una etapa esta declarada cuando
  aparece en la tabla de etapas de `project.md`, con su `D-XXX`, y no antes.
- **Escribir el reparto del trabajo** de cualquier etapa, en `_workflow/`. Igual que el anterior:
  escribirlo no lo adopta.
- **Montar y mantener los registros:** los archivos de `_persistence/` y los de `_audit/`.
- **Registrar el porque en el momento** — decisiones, restricciones, supuestos y lecciones **sobre la
  forma de trabajar**.
- **Leer el encargo del cliente** en `_brief/` para extraer supuestos, restricciones y preguntas para
  el usuario.
- **Evaluar los hallazgos `F-NNN` de la auditoria**, aceptarlos con su `T-XXX` o rechazarlos con su
  `D-XXX`.
- **Declarar los datos propios del proyecto** en `project.md`: nombre, rutas, remoto, carpetas y
  tabla de codigos.
- **Montar los agentes de Gate y sus protocolos**, aunque las etapas cuya evidencia juzgan no esten
  adoptadas. Un Gate es parte del andamio, no del producto: se monta aqui y se **ejecuta** cuando su
  etapa cierre.
- **Cerrar el ciclo completo al menos una vez** —arranque, trabajo, cierre, auditoria— y corregir lo
  que ese primer recorrido rompa. Es la unica forma de saber si el andamio se sostiene.

## 2. Que prohibe esta etapa

Es la seccion util del archivo: lo que se descarrila solo.

| ❌ Prohibido | Por que |
|---|---|
| **Definir el alcance y el objetivo del proyecto** | esta etapa monta el andamio, no decide el producto. El alcance es de la etapa siguiente |
| **Escribir codigo de producto** | no hay alcance definido todavia; no hay nada que rebanar en slices |
| **Disenar pantallas o flujos de producto** | todavia no se sabe que problema resuelven |
| **Declarar etapas posteriores como decididas** | mientras no exista su `D-XXX`, la respuesta correcta es «solo esta declarada la actual» |
| **Dar por adoptado el ciclo de una guia de metodo** | una guia describe que etapas existen **en el metodo**; cuales ha adoptado el proyecto lo dice su tabla de etapas, y adoptar una exige su `D-XXX` y su archivo de etapa |
| **Dar por adoptado un Gate porque su agente exista** | montar el juez no convoca el juicio. Un Gate se adopta con su `D-XXX`, y se ejecuta cuando la etapa cuya evidencia juzga haya cerrado |
| **Rellenar una plantilla dentro de `_templates/`** | una plantilla existe para copiarse antes de rellenarse. La que alguien completa en su sitio deja de ser plantilla, y solo el control de fuga del cierre lo ve |
| **Convertir el encargo del cliente en requisito** | `_brief/` es **entrada**, no registro. Lo que el equipo adopte va como `D-XXX` |
| **Anadir codigos de producto** —necesidades, features, slices, casos de prueba— | la tabla «Codigos» de `project.md` no los define todavia; un codigo que aparece antes que en esa tabla es un desfase |
| **Dar por cerrado un hallazgo propio** | `Implementado` lo escribe la auditoria siguiente, nunca `manager` |
| **Evaluar el propio trabajo** | quien construye no es su propio testigo |
| **Prometer alcance o fechas** | no hay evidencia todavia para prometer nada |
| **Anadir restricciones tecnicas por iniciativa propia** | una restriccion tecnica condiciona el producto, y el producto todavia no esta decidido: se escala al usuario |
| **Leer o tocar el area de trabajo del usuario** desde un protocolo | esta fuera del repositorio y su contenido cambia sin aviso |

> **Si en `000_preproject` aparece un archivo de producto, la etapa se rompio.** Lo que se produce
> aqui es andamio: metodo, registro y evidencia.

## 3. Entradas — que debe existir antes de empezar

1. **El encargo del cliente**, en `_brief/`. Que este completo es un supuesto, no un hecho: se
   registra como `A-XXX` con su forma de validarlo.
2. **Un repositorio con `git` y remoto declarado**, que es lo que hace auditable el trabajo — sin
   commit no hay nada que auditar.
3. **Acceso al usuario.** Es el stakeholder, y sin el no existe la «Doble validacion»: la revision
   tecnica del auditor **no la sustituye**.

Si falta el acceso al usuario, la etapa puede avanzar en lo mecanico pero **no puede cerrar nada que
requiera su firma**. No se sustituye con suposiciones: se registra como `A-XXX`.

## 4. Procedimiento

El procedimiento de esta etapa **es el ciclo de la jornada**. No hay otro, y no es casualidad: lo que
se construye aqui es precisamente ese ciclo.

### Paso 1 — Abrir con `session-starter`

La primera peticion de la conversacion dispara el arranque, sea cual sea. El reporte se retransmite
entero. **El arranque es de solo lectura:** si detecta un desfase —trabajo sin commitear, commits sin
subir, un indice que no cuadra— **no lo corrige**; lo corrige `manager` despues de que el usuario
decida.

### Paso 2 — Los hallazgos abiertos van primero

Un `F-NNN` sin evaluar es el primer asunto de la jornada, antes de cualquier tarea. Se **verifica
contra `HEAD`** —se abrio contra un commit anterior y puede estar ya corregido— y despues se
registra:

| El hallazgo… | va a… |
|---|---|
| se acepta | **`T-XXX`** con `Origen: report_auditor` |
| se rechaza **porque es incorrecto** | **`D-XXX`** con la evidencia que lo contradice |
| se rechaza **aunque tenga razon**, por coste o prioridad | **`D-XXX`** + **`DT-XXX`** |

Y su fila en el registro de hallazgos pasa a `Aceptado — pendiente` o a `No se implementa`. **Nunca a
`Implementado`.**

### Paso 3 — Trabajar, registrando el porque en el momento

`decisions.md`, `constraints.md`, `assumptions.md` y `lessons.md` los escribe `manager` **y solo el**,
al cerrar cada tema y antes de pasar al siguiente. Un porque no aparece en el `git diff`: nace en la
conversacion, y la conversacion no queda en ningun archivo.

🚨 **Comando y salida cruda, siempre.** Un resultado afirmado sin la orden que lo produjo no es
reproducible, y lo que no se puede reproducir hay que rehacerlo entero. «Se comprobo» es un veredicto,
no evidencia.

⚠️ **Y un recuento se fecha si su ambito incluye lo que la sesion todavia va a escribir.** Un barrido
sobre el repositorio entero se toma antes de que el cierre escriba su informe: vale «al momento de
escribir esta entrada», nunca «sobre el commit que la contiene».

### Paso 4 — Cerrar con `session-closer`

El agente recoge la evidencia con `git`, actualiza `progress.md` y `tasks.md`, propone entradas de
`techdebt.md`, escribe el informe de la sesion **dentro del mismo commit que describe**, y sube.
Arranca en frio a proposito: solo puede escribir desde el `git diff`.

### Paso 5 — Auditar con `report_auditor`

**El cierre no termina en el push: termina en la auditoria.** Se lanza sobre el commit ya subido, y si
el push fallo se lanza igual —el commit existe en local y es auditable—. No se le cuenta el contexto:
un auditor al que se le explica lo que paso deja de auditar y pasa a confirmar.

⚠️ **Sus hallazgos no se arreglan en el momento**, por pequenos que parezcan. Corregir despues del
commit auditado deja la auditoria describiendo un estado que ya cambio.

### Paso 6 — Y mientras tanto, construir lo que la etapa entrega

Los cinco pasos anteriores son el **ciclo**; no son el objetivo. Lo que la etapa tiene que dejar
montado son los cinco entregables de la seccion 8, y se construyen dentro de ese ciclo, jornada a
jornada, no en una pasada aparte.

## 5. Artefactos que produce

Todo vive en el repositorio del proyecto. Esta etapa **no produce artefactos de producto**.

```
.claude/          <- el metodo: agentes y skills. Agnostico, sin datos del proyecto
CLAUDE.md         <- las reglas: identidad, principios, ciclo de sesion
project.md        <- los datos propios: nombre, rutas, remoto, carpetas, codigos
.gitignore        <- que NO entra al repositorio: el area de trabajo del usuario y los secretos
_brief/           <- el encargo del cliente. Entrada, no registro
_persistence/     <- como va el trabajo: indice arriba y detalle debajo, un archivo por tipo
_audit/           <- como se comprueba: informe de sesion, auditoria, tablero y hallazgos
_methodology/     <- con que criterio se construye: el metodo de desarrollo. Agnostico
_phases/          <- que se hace en cada etapa. Un archivo por etapa. Agnostico
_templates/       <- con que forma se escribe cada artefacto. Una subcarpeta por etapa. Agnostico
_workflow/        <- quien hace cada cosa y con cuanto sistema. Agnostico
```

🚨 **`.gitignore` es andamiaje, no configuracion de conveniencia.** El cierre commitea con
`git add -A`: sin las exclusiones escritas, esa orden se lleva el area de trabajo del usuario entera
y cualquier archivo de secretos que haya en el arbol. **Git no olvida** — una credencial que entra
al historial no se borra quitando el archivo despues. Es el unico artefacto de esta lista cuyo
olvido no se nota hasta que ya es irreversible.

📌 **Esta etapa tiene plantillas propias, y estan en la subcarpeta de `_templates/` que lleva su
nombre.** Son las de los archivos que el andamiaje necesita en blanco —`project.md`, los de
`_persistence/`, y el tablero y el registro de hallazgos de `_audit/`—, cada una con su cabecera, su
indice vacio y sus convenciones integras. **Se copian a su destino y se rellenan alli**, nunca en su
sitio.

🔑 **Por que esas plantillas existen, aunque parezcan innecesarias mientras el proyecto ya corre.**
Un repositorio nuevo que arranque copiando el andamiaje se lleva los seis archivos agnosticos sin
problema; lo que no puede llevarse es el registro, que esta lleno de historia. Sin plantillas, quien
arranque **copia los archivos del proyecto anterior y les borra el contenido** — y en ese borrado se
van las convenciones, que es justo lo que hacia que el registro funcionara. Nadie lo nota, porque un
archivo sin convenciones se lee perfectamente bien.

⚠️ **`_workflow/` es la unica carpeta de esta lista que esta etapa escribe pero no usa**, y no es un
descuido. `_workflow/` reparte el trabajo de construir un producto entre humano, software e IA; esta
etapa no construye producto, construye el sistema de trabajo que hace ese reparto posible. Las demas
etapas lo leen al abrirse; esta lo escribe y no lo abre.

⚠️ **Toda carpeta de primer nivel se declara en la tabla «Carpetas propias» de `project.md`.** El
cierre contrasta el arbol contra esa tabla **en las dos direcciones**: una carpeta sin fila y una fila
sin carpeta son el mismo defecto por sus dos caras. Si una diferencia es deliberada, tiene que llevar
su razon escrita.

⚠️ **La tabla de `project.md` puede tener mas filas que este arbol, y es correcto.** Ahi van tambien
el area de trabajo del usuario y las carpetas de entregables de otras etapas; aqui solo va **lo que
esta etapa produce**. Una etapa que se atribuya artefactos de otra deja de poder decir cuando
termino.

## 6. Condicion de salida

La etapa termina cuando **las diez son ciertas**, y vienen de cuatro sitios distintos:

| # | De donde sale |
|---|---|
| 1 a 5 | el **espejo de los cinco entregables** de la seccion 8, uno por uno |
| 6 y 7 | lo que la etapa **se exige a si misma**: que el ciclo haya corrido, y que el metodo sea copiable |
| 8 | la unica exigencia que la etapa puede hacerle a la **auditoria** |
| 9 y 10 | las dos direcciones de las **lecciones globales**: la novena las trae al abrir el proyecto, la decima devuelve al archivo lo que este proyecto aprendio |

**Las cinco del espejo:**

- [ ] **1 · La estructura minima existe:** las carpetas y los archivos de la seccion 5, cada carpeta
      declarada en `project.md`, y el control de carpetas del cierre sin diferencias sin justificar.
- [ ] **2 · Los seis agentes existen y su reparto esta escrito:** `session-starter`,
      `session-closer` y `report_auditor` —los del ciclo de la jornada—, `gate1_auditor` y
      `gate2_auditor` —los del juicio de un Gate— y `phase_exit_auditor` —el que verifica la
      condicion de salida de una etapa—, cada uno con su protocolo y con su frontera —quien
      construye, quien registra, quien audita, quien dictamina, quien certifica una casilla sin
      firmarla— enunciada donde se aplica.
- [ ] **3 · `_persistence/` esta operativo:** cada archivo con su indice, sus convenciones y sus
      estados validos escritos dentro, e indice y detalle cuadrando.
- [ ] **4 · `_audit/` esta operativo:** tablero y registro de hallazgos, con al menos una auditoria
      registrada y sus hallazgos con estado.
- [ ] **5 · `project.md` esta completo:** nombre, rutas, remoto con su host, rama, tabla de carpetas
      y tabla de codigos. **Completo significa que ningun control del cierre se queda
      `SIN COMPROBAR` por un valor que falte ahi.**

**Las dos que la etapa se exige a si misma:**

- [ ] **6 · El ciclo corrio entero al menos una vez**, con evidencia: una sesion abierta, cerrada
      con commit y push, y auditada sobre ese commit.
- [ ] **7 · El metodo es copiable:** el control de fuga de datos propios del cierre devuelve **cero
      lineas** sobre su ambito completo. Un proyecto nuevo se arranca copiando esos archivos tal
      cual y cambiando solo `project.md`.

**La que se le exige a la auditoria:**

- [ ] **8 · No queda ningun `F-NNN` sin evaluar:** todos estan `Implementado`, `Aceptado — pendiente`
      con su `T-XXX`, o `No se implementa` con su `D-XXX`.

**Las dos de las lecciones globales:**

- [ ] **9 · La consulta de arranque esta hecha y registrada:** los bloques de decisiones/arquitectura
      y de corte del trabajo, leidos **antes** de definir alcance, con lo que produjeron anotado en
      `decisions.md` citando el codigo de cada leccion — y con los bloques no recorridos declarados
      **NO MIRADOS**, no limpios.
- [ ] **10 · La cosecha esta hecha:** ninguna leccion de esta etapa queda `Sin evaluar` en la columna
      `Portabilidad` de `lessons.md`, y lo que quedo `Global candidata` esta ya en el archivo de
      lecciones globales, con su `D-XXX` y con la version nueva del archivo declarada. La ejecuta
      `manager` con la skill `protocol-harvest`, y **antes** de la firma del patrocinador: hecha
      despues, esta casilla no se podria marcar nunca.

⚠️ **La octava no exige que los hallazgos esten cerrados**, y no es un descuido: cerrar un hallazgo
es de la auditoria siguiente. Lo que la etapa si puede exigir es que ninguno se quede sin evaluar.

🚨 **La quinta y la septima parecen la misma y son opuestas.** La quinta exige que `project.md`
tenga **todos** los datos propios; la septima, que **ningun otro archivo del metodo** los tenga. Una
sin la otra no sirve de nada: con los datos repartidos, el metodo no se puede copiar; sin datos en
ninguna parte, no se puede ejecutar ningun control.

🚨 **La segunda exige que los agentes de Gate EXISTAN, no que hayan dictaminado.** Un Gate juzga la
evidencia de una etapa, y en `000_preproject` ninguna de esas etapas ha corrido. Montar el juez es
andamio; convocar el juicio es de la etapa que cierre.

🔑 **Ninguna de las diez habla del producto**, y ahi esta el criterio entero de la etapa: se sale de
`000_preproject` cuando el andamio se sostiene, no cuando se sabe que se va a construir. Eso es lo
primero que hace la etapa siguiente.

⛔ **Y ninguna se da por cierta leyendola.** Cada casilla que se pueda comprobar con una orden se
comprueba con esa orden, y lo que va al registro es **la orden y su salida cruda** — no «se
comprobo». Una condicion de salida que se firma a ojo es una etapa que se cierra sola.

## 7. Que registra `manager` en `_persistence/`

| Archivo | Que se escribe aqui en esta etapa | Quien lo escribe |
|---|---|---|
| `progress.md` | el estado, la bitacora de sesiones, el siguiente paso | **`session-closer`** |
| `tasks.md` | las tareas y su estado | **`session-closer`**, con **dos excepciones** —ver debajo |
| `decisions.md` | toda eleccion sobre el metodo, con sus **alternativas descartadas** | **`manager`** |
| `constraints.md` | los limites ya no negociables | **`manager`** |
| `assumptions.md` | lo no confirmado, **con su forma de validarlo y su disparador** | **`manager`** |
| `lessons.md` | lo que fallo y se corrigio, o la practica que demostro funcionar | **`manager`** |
| `techdebt.md` | los atajos aceptados a conciencia | `session-closer` **propone**; confirma el **usuario** |

🚨 **Las dos excepciones de `tasks.md`, porque son las que se confunden con saltarse la regla.**
`manager` escribe ahi, sin esperar al cierre, en dos casos:

| Caso | Por que no puede esperar al cierre |
|---|---|
| La `T-XXX` que nace de un **hallazgo aceptado** | la fila del hallazgo tiene que citar su codigo para ser auditable, y una fila que cita una tarea inexistente no lo es |
| El cambio que nace de una **decision ya registrada que el cierre no puede deducir del `git diff`** —reasignar la etapa de una tarea, cambiar la estructura del archivo porque lo pidio el usuario— | el agente arranca en frio y solo ve archivos: una orden del usuario no deja rastro en el diff |

⚠️ **Son dos excepciones, no una puerta.** Las dos exigen lo mismo: **un `D-XXX` o un `F-NNN` que las
respalde, citado en la propia tarea**. Sin esa cita, una edicion a mano es indistinguible de saltarse
la regla — y entonces la regla deja de existir.

🚨 **Los cuatro del porque no son del `session-closer`, y por eso son los que se pierden.** El agente
arranca en frio y solo ve archivos; si `manager` llega al cierre sin haberlos escrito, esa informacion
**ya se perdio** — no hay diff del que reconstruirla.

## 8. Lo que esta etapa le entrega a la siguiente

Cinco cosas. Ninguna es producto, y todas son condicion para poder construirlo.

### 1. La estructura de carpetas y archivos minima para iniciar

El arbol de la seccion 5, creado y declarado. No es una convencion de orden: **cada carpeta es la
respuesta a una pregunta distinta**, y por eso son ocho y no una.

| Carpeta | Responde a |
|---|---|
| `.claude/` | **con que** se construye |
| `_brief/` | **que** se pidio |
| `_persistence/` | **como va** el trabajo |
| `_audit/` | **como se comprueba** |
| `_methodology/` | **con que criterio** se construye |
| `_phases/` | **que se hace** en cada etapa |
| `_templates/` | **con que forma** se escribe cada artefacto |
| `_workflow/` | **quien hace** cada cosa, y con cuanto sistema |

Un proyecto que empieza sin ellas las improvisa a mitad de camino, y entonces ya hay trabajo hecho
que no encaja en ninguna.

🔑 **Las cuatro ultimas son las que se olvidan, porque ninguna hace falta el primer dia.** Un
proyecto arranca perfectamente sin saber con que criterio construye, que se hace en cada etapa, con
que forma se escribe un artefacto ni quien hace cada cosa — y descubre que las necesitaba cuando ya
hay decisiones tomadas que contradicen las respuestas.

### 2. La forma de trabajo entre los seis agentes

Tres llevan el **ciclo de la jornada**: `session-starter` abre y **solo lee**; `session-closer`
cierra, commitea y sube; `report_auditor` audita el commit cerrado y **no corrige ni decide**.

Dos llevan el **juicio de un Gate**: `gate1_auditor` y `gate2_auditor` contrastan la evidencia de una
etapa contra los criterios del metodo y emiten un **dictamen tecnico**, no una decision.

Uno verifica **la condicion de salida de una etapa**: `phase_exit_auditor` lee las casillas del
archivo de la etapa que se cierra, las comprueba una por una con su orden y su salida cruda, y firma
la **revision tecnica** del acta — nunca la aprobacion, que es del patrocinador.

Los seis arrancan en frio, y esa es toda su utilidad: ninguno vio la conversacion, asi que ninguno
puede confirmar la version de `manager` en vez de la evidencia.

🚨 **Lo que la etapa entrega no son seis archivos de agente: es la frontera entre ellos, escrita
donde se aplica.** Quien construye no evalua, quien revisa no reescribe, quien audita no cierra su
propio trabajo, quien dictamina no decide la inversion, y quien certifica una casilla no firma el
cierre. Sin esa frontera, los seis agentes son seis formas de decir lo mismo.

⚠️ **Los dos de Gate se montan aqui y se ejecutan en otra parte**, cuando cierre la etapa cuya
evidencia juzgan. Que existan no adopta ni esa etapa ni ese Gate: las dos cosas exigen su `D-XXX`.

🔑 **El sexto es el unico de los tres jueces que se ejecuta aqui, y esa asimetria es deliberada.**
Los dos de Gate juzgan la evidencia de un producto, y en esta etapa no hay producto que juzgar; la
condicion de salida, en cambio, la tiene esta etapa como todas las demas. Montar un juez que nunca
se convoca es andamio sin probar — y este se prueba en la etapa que lo construye, que es la unica
forma barata de descubrir que no servia.

⚠️ **Y hay que decir lo incomodo:** este agente **certifica la etapa que lo creo**. La independencia
que da arrancar en frio sigue en pie —no vio ninguna sesion y solo lee archivos—, pero el criterio
con el que se le mide lo escribio quien va a ser medido. Por eso la segunda firma no es una
formalidad: es la unica parte del acta que no sale de este repositorio.

### 3. La memoria del proyecto, en los archivos de `_persistence/`

Lo decidido, lo asumido, lo limitado y lo aprendido, cada cosa en su archivo, con indice arriba y
detalle debajo. **Es lo que sobrevive al cierre de la conversacion**, que es lo unico que no
sobrevive por si solo: el codigo queda en `git`, pero el porque de cada eleccion solo queda si
alguien lo escribio en el momento.

La etapa entrega los archivos **y sus convenciones**: que estados son validos, que campos son
obligatorios y quien escribe cada uno. Un registro sin convenciones escritas dura hasta el primer
desacuerdo sobre como llenarlo.

Y entrega una tercera cosa, que solo se echa de menos al abrir el proyecto siguiente: **la version
en blanco de cada uno**, en la subcarpeta de `_templates/` que lleva el nombre de esta etapa. El
registro de un proyecto no se puede copiar —esta lleno de su historia—, asi que sin plantillas la
unica forma de arrancar otro es vaciar estos archivos a mano. **Y lo que se vacia a mano se lleva
por delante las convenciones**, que es justo lo que hacia falta conservar.

### 4. La gestion de las auditorias

El circuito completo: informe de sesion dentro del commit que describe, auditoria sobre ese commit,
tablero de que sesion fue auditada y con que veredicto, y registro de hallazgos donde **cada `F-NNN`
queda con su estado, incluidos los rechazados y su razon**.

⚠️ **Ese ultimo detalle es el que hace que el circuito valga algo.** Un hallazgo que desaparece
porque no convencio convierte el registro en la version que preferiamos. Y el estado `Implementado`
lo escribe **la auditoria siguiente**, nunca el auditado: si el auditado pudiera cerrar sus propios
hallazgos, el registro diria lo que quisieramos que dijera.

### 5. Los datos propios del proyecto, en `project.md`

Nombre, rutas, remoto, carpetas declaradas y tabla de codigos, **en un solo sitio**. Es lo unico que
cambia al llevar este metodo a otro proyecto: los protocolos, los agentes y `CLAUDE.md` no llevan
dentro ni un nombre ni una ruta, los leen de aqui.

🔑 **Por eso `project.md` es un entregable y no un archivo de servicio.** Mientras un dato del
proyecto viva escrito dentro del metodo, el metodo no es reutilizable — y nadie lo descubre hasta que
intenta copiarlo.
