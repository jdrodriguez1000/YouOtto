# Etapa `005_discovery`

> **La etapa en la que todavia no se construye producto: se entiende la necesidad.** Quien tiene el
> problema, quien usara la solucion, que pasa hoy sin ella, y que hipotesis merece ponerse a prueba.
>
> **La lee:** `manager`, y cualquier agente que necesite saber que esta autorizado en esta etapa.
> **Definiciones:** `project.md` (que es cada cosa y donde esta), `CLAUDE.md` (el metodo de trabajo) y
> la guia de metodo del proyecto —actores, taxonomia, interesados, gates—. Este archivo **no define
> conceptos ni repite datos** — dice **que se hace y que no** dentro de la etapa.

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

---

## 1. Que autoriza esta etapa

- **Entrevistar** al patrocinador, a los interesados y a usuarios potenciales.
- **Observar como se hace hoy el trabajo**, sin la aplicacion.
- **Leer** los sistemas, formatos, hojas de calculo y procesos que ya existen.
- **Registrar necesidades** e identificarlas (`N-XXX`), enunciadas sin nombrar una pantalla.
- **Identificar y clasificar actores** segun la taxonomia de la guia de metodo: tipo de actor y actor
  concreto, siempre por la funcion dentro de la aplicacion.
- **Identificar interesados**, con lo que aporta y lo que puede bloquear cada uno.
- **Registrar restricciones** —legales, tecnicas, presupuestales, de plazo— como `C-XXX`, y lo no
  confirmado como `A-XXX` con su forma de validarlo y su disparador.
- **Formular la hipotesis** que la etapa siguiente pondra a prueba, con su condicion de falsacion.
- **Definir el alcance y el objetivo del proyecto**, que es exactamente lo que `000_preproject` tenia
  prohibido y lo que abre esta etapa.
- **Declarar las etapas posteriores** en `project.md`, con su `D-XXX` y su archivo en `_phases/`.

🔑 **Las dos ultimas viven aqui por la misma razon, y conviene decirla.** No se puede decidir que
etapas hacen falta sin saber que se va a construir; y no se puede saber que se va a construir sin
haber entendido la necesidad. Por eso el alcance no es de la etapa anterior y la secuencia de etapas
no es de la guia de metodo: **una guia dice que etapas existen en el metodo, no cuales ha adoptado
este proyecto.** Adoptar una exige su `D-XXX` y su archivo de etapa.

## 2. Que prohibe esta etapa

Es la seccion util del archivo: lo que se descarrila solo, y aqui se descarrila siempre hacia el
mismo lado — **empezar a construir la solucion antes de haber entendido el problema.**

| ❌ Prohibido | Por que |
|---|---|
| **Disenar pantallas o flujos** | todavia no se sabe que problema resuelven |
| **Elegir tecnologia** | no hay nada que sostener aun; eso llega cuando haya que construir |
| **Escribir codigo** —de producto o de prototipo— | el prototipo es de la etapa siguiente, y llega despues de la hipotesis |
| **Escribir especificacion, requisitos o arquitectura** | son artefactos posteriores al Gate, y escribirlos ahora es especificar sobre supuestos |
| **Prometer alcance o fechas** | no hay evidencia todavia para prometer nada |
| **Convertir el encargo del cliente en requisito** | `_brief/` es **entrada**, no registro. Lo que el equipo adopte va como `D-XXX` |
| **Convertir una peticion en necesidad** | lo primero que dice el cliente suele ser una solucion; desvestirla es el trabajo de la etapa |
| **Asumir que existen todos los tipos de actor** | los actores son **potenciales, no obligatorios**; se registra solo el que tiene un actor concreto detras |
| **Anotar un tipo de actor sin actor concreto** | un tipo sin nadie que lo desempene es una casilla de la taxonomia, no un hallazgo del proyecto |
| **Clasificar por el cargo en la empresa** | se clasifica por **la funcion dentro de la aplicacion**; un cargo no es una categoria |
| **Anadir un tipo de actor nuevo a la taxonomia** | la taxonomia la fija la guia de metodo; lo temporal, lo externo y lo restringido son **permisos**, no tipos |
| **Escribir la hipotesis despues del prototipo** | escribirla despues es describir lo que salio, y entonces el Gate no tiene contra que medir |
| **Dar por cerrado un hallazgo propio** | `Implementado` lo escribe la auditoria siguiente, nunca `manager` |
| **Evaluar el propio trabajo** | quien construye no es su propio testigo |

> **Si en `005_discovery` aparece un archivo de codigo o una pantalla, la etapa se rompio.** Lo que
> se produce aqui es entendimiento registrado: necesidades, actores, interesados, limites e hipotesis.

## 3. Entradas — que debe existir antes de empezar

### 3.1. De donde llega el encargo

La etapa puede arrancar desde tres sitios distintos, y **ninguno de los tres es todavia el problema
real**:

| Punto de partida | Como llega | Que hay que hacer con el |
|---|---|---|
| **Un problema percibido** | «esto es demasiado lento», «hay demasiados errores», «este trabajo consume demasiado» | tratarlo como **problema percibido, pendiente de entender y validar** |
| **Una idea** | «queremos una aplicacion», «queremos un canal digital», «queremos usar IA» | no convertirla en solucion: preguntar antes que necesidad existe, de quien, en que contexto y que valor daria |
| **Una oportunidad** | un segmento nuevo, un cambio de mercado, una tecnologia nueva | investigar que necesidad hay detras, para quien, que evidencia existe y que incertidumbres hay que resolver |

⚠️ **Que el encargo mencione una tecnologia no significa que la solucion deba usarla.** Ni siquiera
significa que haga falta una solucion tecnologica.

### 3.2. Informacion complementaria

Puede llegar tambien —y suele llegar incompleta, subjetiva o contradictoria— informacion de
interesados, entrevistas previas, datos, metricas, reportes, documentacion, feedback, procesos y
sistemas existentes, y restricciones ya conocidas. **No necesita estar completa ni estructurada**, y
provendra de personas distintas con perspectivas distintas.

🔑 **El principio que ordena todo lo anterior:** *las entradas son puntos de partida, no
conclusiones.* Un problema puede no ser un problema. Una idea puede no ser necesaria. Una
oportunidad puede no tener valor. Una percepcion puede no coincidir con la realidad. La etapa existe
para **investigar, contrastar, observar y entender** hasta convertir esa entrada en conocimiento
validado.

### 3.3. Lo que tiene que existir si o si

1. **Una necesidad expresada por alguien**, aunque venga disfrazada de solucion.
2. **Acceso al patrocinador y a personas que puedan hablar del proceso real.**

🚨 **Si falta el acceso, la etapa no puede empezar.** No se sustituye con suposiciones: sin nadie a
quien preguntar, lo que se produce no es descubrimiento sino invencion documentada. Lo que si se
puede hacer es registrar la falta de acceso como `A-XXX` o `C-XXX` y escalarla al usuario.

## 4. Procedimiento

🚨 **Antes del Paso 1 se reparte el trabajo.** Los siete pasos que siguen dicen **que** hay
que hacer; quien hace cada uno —humano, software, IA, o una combinacion— lo dice
**`_workflow/005_discovery.md`**, que se lee ahora y no despues. Ese reparto se adopta con su
`D-XXX` en el registro: leer la tabla no reparte nada.

⚠️ **Y se escribe al decidirlo, no al cerrar la etapa.** Reconstruido despues, lo que queda
registrado es el reparto que salio, no el que se eligio.

### Paso 1 — Separar la necesidad de la solucion

Lo primero que dice el cliente es casi siempre una solucion, no una necesidad.

| Lo que dijo | La necesidad detras | La pregunta que la destapa |
|---|---|---|
| «necesito una aplicacion para pedir *X*» | quien lo necesita no tiene hoy forma de pedirlo sin llamar por telefono | *¿que pasa hoy cuando alguien quiere *X*?* |
| «necesito un tablero» | nadie sabe cuantos *X* se cumplieron | *¿que decision tomarias con ese dato?* |

**La pregunta que mas sirve, y se repite en toda la etapa:**

> **¿Como haces esto hoy?**

Una necesidad se registra como `N-XXX` **solo cuando se puede enunciar sin nombrar una pantalla**.

### Paso 2 — Responder las nueve preguntas

No se avanza hasta tener respuesta —o un «no se sabe» explicito— a las nueve:

1. ¿Por que existe la necesidad?
2. ¿Para que se necesita la aplicacion?
3. ¿Que problema se quiere resolver?
4. ¿Quien tiene el problema?
5. ¿Quien usara la solucion?
6. ¿Que resultado espera obtener la empresa?
7. ¿Que procesos existen actualmente?
8. ¿Que restricciones existen?
9. ¿Que sistemas actuales participan?

📌 **Un «no se sabe» escrito vale mas que una respuesta inventada:** se convierte en `A-XXX`, con su
forma de validarlo y su disparador, y alguien tendra que ir a verificarlo. Una respuesta inventada,
en cambio, se comporta como un hecho.

### Paso 3 — Identificar y clasificar los actores

Para cada actor real de la aplicacion se anota **el tipo** —de la taxonomia de la guia de metodo— y
**el actor concreto** que lo desempena.

```text
Tipo: <tipo de la taxonomia>      Concreto: <quien lo desempena en este producto>
```

**Las tres reglas al clasificar, y las tres se rompen solas:**

- Se clasifica por **la funcion dentro de la aplicacion**, nunca por el cargo en la empresa.
- **Lo temporal, lo externo y lo restringido son permisos, no tipos de actor.** No se anade una
  categoria para ellos.
- **Solo se registran los actores que existen en este producto.** Un tipo sin actor concreto detras
  no se anota — la taxonomia enumera lo posible, no lo obligatorio.

### Paso 4 — Encontrar al actor que origina el proceso, y comprobarlo

Es el paso que decide si hay proyecto.

> **Si el actor que da origen al proceso no existe o no usara la aplicacion, no hay razon
> fundamental para que la aplicacion exista.**

La comprobacion es concreta: **un perfil real y alcanzable**, no una categoria. «Los clientes» no lo
es. «Las empresas que hoy llaman por telefono para pedir *X*, unas cuarenta al mes» si lo es —tiene
volumen, tiene comportamiento actual, y se puede ir a hablar con ellas.

🚨 **Si no se puede identificar un actor originador real y alcanzable, la etapa termina aqui con un
`NO CONTINUA`.** No es un fracaso: es el resultado mas barato que puede dar el metodo, y llega antes
de haber gastado nada. Se registra con su `D-XXX`, igual que cualquier otro resultado.

⚠️ **Ese cierre no lo declara `manager` en solitario.** Detener un proyecto es irreversible en la
practica —libera al equipo, cancela el encargo, se comunica al cliente—, asi que **se escala al
usuario antes de actuar**, nunca despues.

### Paso 5 — Identificar interesados

Distintos de los actores: pueden decidir, financiar, definir politicas, aportar conocimiento,
aprobar resultados, verse afectados, representar usuarios o imponer restricciones legales o
tecnicas — **todo eso sin usar la aplicacion**. Se anota que aporta cada uno y que puede bloquear.

⚠️ **No confundir interesado con actor.** Un actor usa la aplicacion; un interesado puede no tocarla
nunca y aun asi decidir si existe.

### Paso 6 — Registrar restricciones y supuestos

Se separan, porque se comportan distinto:

| | Que es | Donde va | Que se hace con ello |
|---|---|---|---|
| **Restriccion** | un limite **conocido y firme** — presupuesto, plazo, ley, sistema obligatorio | `C-XXX` en `_persistence/constraints.md` | se respeta; condiciona el diseno |
| **Supuesto** | algo que **se cree pero no se ha verificado** | `A-XXX` en `_persistence/assumptions.md` | se verifica, o queda como riesgo abierto con su disparador |

> **Un supuesto que nadie escribio se comporta como un hecho.** Escribirlo es lo unico que lo
> mantiene sujeto a revision.

🚨 **Y se registran en el momento, no al final.** Un supuesto se escribe **antes** de construir
encima de el; si se escribe despues, lo que se registra ya no es el supuesto sino la justificacion
de lo que se hizo.

### Paso 7 — Formular la hipotesis

Es la salida principal de la etapa, y la que la etapa siguiente pondra a prueba.

**Una hipotesis vale si se puede escribir que observacion la tumbaria.** Si no se puede, es un deseo.

| ❌ No sirve | ✅ Sirve |
|---|---|
| «la aplicacion va a mejorar el proceso» | «quien hoy llama por telefono puede hacerlo por si solo, sin ayuda, en menos de tres minutos» |
| «a los usuarios les va a gustar» | «el usuario entiende que puede pedir sin preguntarle a nadie» |

La segunda columna **se puede observar en una sesion con un usuario**. La primera, no — y por eso
un Gate posterior no tendria contra que compararla.

📌 **La hipotesis se escribe en esta etapa, no despues del prototipo.** Escribirla despues es
describir lo que salio.

## 5. Artefactos que produce

Cinco artefactos. **Ninguno es codigo, y ninguno describe una pantalla.**

| Artefacto | Que contiene | Donde se escribe |
|---|---|---|
| **Necesidades** | los `N-XXX`, cada uno enunciado sin nombrar una pantalla | carpeta de artefactos de la etapa, con plantilla |
| **Actores** | tipo + actor concreto, **solo los que existen** en este producto | carpeta de artefactos de la etapa, con plantilla |
| **Interesados** | que aporta y que puede bloquear cada uno | carpeta de artefactos de la etapa, con plantilla |
| **Hipotesis** | la hipotesis, **con su condicion de falsacion** | carpeta de artefactos de la etapa, con plantilla |
| **Restricciones y supuestos** | los limites firmes y lo no confirmado | **directamente en el registro del proyecto**, como `C-XXX` y `A-XXX` |

🔑 **Cuatro llevan plantilla y el quinto no, y la razon es que el quinto ya tenia sitio.** Los
supuestos y las restricciones no son propios del descubrimiento: son las mismas dos cosas que el
proyecto registra en cualquier etapa, y darles un archivo aparte crearia **dos sitios donde mirar
lo que hay sin confirmar**. Nacen ya en su registro, y no hay que trasladarlos despues.

**Las cuatro plantillas viven en `_templates/005_discovery/`**, una por artefacto. Un artefacto de
esta etapa se escribe copiando su plantilla, y la regla de «adherencia a plantillas» tiene entonces
contra que comprobarse.

⚠️ **Cual es la carpeta de artefactos y cual es el archivo de cada registro lo dice `project.md`,
no este archivo** — aqui no se escribe ninguna ruta propia del proyecto.

⚠️ **Toda carpeta de primer nivel se declara en `project.md`.** El cierre contrasta el arbol contra
esa tabla **en las dos direcciones**: una carpeta sin fila y una fila sin carpeta son el mismo
defecto por sus dos caras.

## 6. Condicion de salida

La etapa termina cuando **las siete son ciertas**:

- [ ] **Hay al menos una necesidad `N-XXX` enunciada sin nombrar una pantalla.**
- [ ] **Hay un actor originador identificado y alcanzable**, con actor concreto —no una categoria.
- [ ] **Los actores estan clasificados por funcion**, y solo los que existen en este producto.
- [ ] **Los interesados estan identificados**, con lo que aporta y lo que puede bloquear cada uno.
- [ ] **Hay una hipotesis con su condicion de falsacion escrita.**
- [ ] **El alcance y el objetivo del proyecto estan definidos y registrados** con su `D-XXX`.
- [ ] **La cosecha esta hecha:** ninguna leccion de esta etapa queda `Sin evaluar` en la columna
      `Portabilidad` de `lessons.md`, y lo que quedo `Global candidata` esta ya en el archivo de
      lecciones globales, con su `D-XXX` y con la version nueva del archivo declarada.

Si alguna falla, la etapa sigue abierta.

🚨 **No se pasa a la etapa siguiente con una hipotesis que no se puede tumbar.** Lo que se
construyera saldria sin nada que validar, y el Gate posterior no tendria criterio: aprobaria o
rechazaria por impresion.

**Resultado alternativo valido: `NO CONTINUA`**, si no hay actor originador real. Se registra por
que, con su `D-XXX`, y se cierra. Un proyecto detenido con su razon escrita vale mas que uno que
siguio sin ella.

⚠️ **Ninguna de las siete exige que exista la etapa siguiente.** Cual sea se declara dentro de esta
etapa (§1), y mientras no tenga su `D-XXX` y su archivo en `_phases/`, la respuesta correcta a «¿que
viene despues?» es *«sin decidir»*.

## 7. Que registra `manager` en `_persistence/`

| Archivo | Que se escribe aqui en esta etapa | Quien lo escribe |
|---|---|---|
| `progress.md` | el estado, la bitacora de sesiones, el siguiente paso | **`session-closer`** |
| `tasks.md` | las tareas y su estado | **`session-closer`**, con las excepciones escritas en el propio archivo |
| `decisions.md` | el alcance, el objetivo, las etapas posteriores y toda eleccion con sus **alternativas descartadas** | **`manager`** |
| `constraints.md` | los `C-XXX` encontrados — legales, tecnicos, presupuestales, de plazo | **`manager`** |
| `assumptions.md` | los `A-XXX`. **Esta es la etapa que mas produce**, y cada uno va con su forma de validarlo y su disparador | **`manager`** |
| `lessons.md` | lo que se aprendio del negocio y no estaba en ningun documento | **`manager`** |
| `techdebt.md` | nada todavia: aun no hay codigo que pueda tener deuda | `session-closer` **propone**; confirma el **usuario** |

🚨 **Los cuatro del porque no son del `session-closer`, y por eso son los que se pierden.** El agente
arranca en frio y solo ve archivos; en esta etapa **casi todo lo valioso nace en una conversacion**
—una entrevista, una observacion, una frase del patrocinador— y no deja rastro en ningun `git diff`.
Si `manager` llega al cierre sin haberlo escrito, esa informacion ya se perdio.

⚠️ **Un codigo de producto no aparece antes que en la tabla «Codigos» de `project.md`.** `N-XXX` se
declara ahi con su `D-XXX`; escribir el primero sin declararlo es un desfase, no una novedad.

## 8. Lo que esta etapa le entrega a la siguiente

Cuatro cosas. Ninguna es producto, y todas son condicion para poder construirlo.

### 1. La necesidad entendida, separada de la solucion que la disfrazaba

Los `N-XXX`, enunciados sin nombrar una pantalla. **Ese enunciado es el que sobrevive a los cambios
de idea:** una necesidad bien escrita sigue siendo cierta aunque la solucion cambie tres veces.

### 2. Quien esta en escena, y con que papel

Actores clasificados por funcion —con su actor concreto— e interesados con lo que aportan y lo que
pueden bloquear. 🔑 **El que decide si hay proyecto es el actor que origina el proceso:** todo lo
que se construya despues se construye para el, y si no existe, no hay nada que construir.

### 3. La hipotesis, con su condicion de falsacion

Sin ella no hay contra que medir lo que se construya, y el Gate posterior no tiene criterio. Se
escribe **aqui**, y no se toca durante la etapa siguiente: cambiarla a mitad convierte cualquier
resultado en un exito.

### 4. El perfil del usuario representativo

Quien cuenta como usuario valido en una sesion de evaluacion. 🚨 **Se define aqui, y por una razon
concreta:** si se define despues de las sesiones, se define a la medida de quien vino — y entonces
la evaluacion confirma en vez de comprobar.

📌 **Las cuatro se escriben en esta etapa.** Las dos ultimas son las que mas se olvidan, y las dos
son exactamente las que un Gate posterior necesita para poder emitir un veredicto en vez de una
impresion.

⚠️ **Esta etapa no declara ningun Gate ni lo cierra.** Prepara lo que un Gate necesitara; cuando
llegue, quien lo declara y con que firmas lo dice la guia de metodo y el registro de decisiones del
proyecto — no este archivo.
