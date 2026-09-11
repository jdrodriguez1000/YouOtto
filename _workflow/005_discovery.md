# Reparto del trabajo — etapa `005_discovery`

> **Quien hace cada actividad de esta etapa.** Deriva de `_workflow/team.md`: no repite su doctrina
> y no legisla sobre la etapa.
>
> **Lo lee:** quien abre la etapa, antes del primer paso de su procedimiento — es el momento de
> entrada que fija `_workflow/team.md` §8.

🔑 **Este archivo es agnostico y sirve para cualquier proyecto.** Las actividades que reparte son
los siete pasos del procedimiento de `_phases/005_discovery.md` §4, que son los mismos en cualquier
proyecto que use este metodo. No lleva dentro ni un nombre, ni una ruta, ni un dato de ningun
producto; los codigos van en su forma generica —`N-XXX`, `I-XXX`, `D-XXX`, `A-XXX`, `C-XXX`—.

⛔ **Tres cosas que este archivo no hace:**

| No hace | Quien si |
|---|---|
| decir que se autoriza y que se prohibe en la etapa | `_phases/005_discovery.md` §1 y §2 |
| fijar la condicion de salida | `_phases/005_discovery.md` §6 |
| declarar que reparto adopta un proyecto concreto | el `D-XXX` que se escribe al abrir la etapa |

🔑 **Lo de aqui es lo que *puede* hacer cada participante. Lo que se *adopta* es una decision, y va
al registro.** Leer esta tabla no reparte nada: repartir es escribir el `D-XXX`.

---

## 1. De donde sale este reparto

Una fila por paso del procedimiento, ni una mas. Si `_phases/005_discovery.md` §4 gana o pierde un
paso, este archivo cambia con el.

🚨 **Y si no cambia, quedan dos archivos diciendo cosas distintas** — que es exactamente lo que
`_workflow/team.md` avisa de no hacer: el que envejece miente sin que nadie lo note.

---

## 2. El reparto, paso a paso

| Paso | Humano — obligatorio | Software — puede | IA — puede |
|---|---|---|---|
| **1 · Separar la necesidad de la solucion** | preguntar «¿como haces esto hoy?», interpretar, decidir que es necesidad | barrer palabras que nombran pantalla en el artefacto | proponer las preguntas que destapan · señalar la `N-XXX` que sigue siendo una solucion |
| **2 · Responder las nueve preguntas** | entrevistar · decidir cuando un «no se sabe» es honesto | comprobar que las nueve tienen respuesta o un «no se sabe» explicito | preparar el guion · resumir la conversacion · señalar respuestas evasivas que parecen respuesta |
| **3 · Identificar y clasificar los actores** | identificar y clasificar | comprobar que ningun tipo queda sin actor concreto | contrastar contra la taxonomia · detectar los tres errores de clasificacion del Paso 3 |
| **4 · Encontrar al actor que origina el proceso** | todo, y en solitario | comprobar que la ficha trae identificacion con numero, alcanzabilidad y comportamiento actual | solo señalar que el perfil escrito no es alcanzable |
| **5 · Identificar interesados** | identificar, y decidir que puede bloquear cada uno | comprobar `I-XXX` unicos y campos completos | proponer quien mas podria bloquear y no esta en la lista |
| **6 · Registrar restricciones y supuestos** | decidir si algo es firme o solo creido | comprobar que cada `A-XXX` trae forma de validarlo y disparador | releer las notas y proponer los supuestos que nadie escribio |
| **7 · Formular la hipotesis** | formularla, sellarla, firmar | comprobar que el artefacto tiene un solo commit | intentar tumbarla: proponer que observacion la falsaria |

📌 **`_phases/005_discovery.md` §8 añade una cuarta entrega que ningun paso de §4 nombra: el perfil
del usuario representativo.** Se reparte como el Paso 7 —lo define un humano, la IA solo puede
señalar que el perfil escrito no distingue a nadie— y se escribe en el mismo artefacto que la
hipotesis.

### 2.1. Las tres asignaciones que no son obvias, y por que

**Paso 4 · el humano en solitario.** No es celo. El resultado posible de ese paso es `NO CONTINUA`,
y detener un proyecto es irreversible en la practica —libera al equipo, cancela el encargo, se
comunica al cliente—. `_workflow/team.md` §5.1 es terminante: en lo irreversible **la IA solo
propone**. El propio §4 Paso 4 ya manda escalarlo al usuario antes de actuar.

**Paso 6 · la IA busca lo que no se escribio.** Un supuesto que nadie anoto se comporta como un
hecho, y quien no lo ve es exactamente quien lo tiene dentro. Releer notas buscando lo dado por
cierto es reconocimiento de patrones sobre lenguaje: la capacidad que `_workflow/team.md` §1 asigna
a la IA, literal. Es probablemente su uso mas valioso en toda la etapa.

**Paso 7 · a la IA se le pide que tumbe, no que valide.** Preguntarle si la hipotesis es buena
produce una respuesta amable e inutil. Pedirle **que observacion la falsaria** produce una prueba:
si no encuentra ninguna, la hipotesis no es falsable — y eso es justo lo que §6 exige y lo que un
Gate posterior necesita para no aprobar por impresion.

---

## 3. Lo que no se delega nunca en esta etapa

| ⛔ Nunca | Por que |
|---|---|
| que la IA responda por el patrocinador, o rellene lo que «diria» | es invencion documentada: sale con forma de artefacto validado y es peor que no tenerlo |
| que la IA o el software declaren el `NO CONTINUA` | es irreversible; se escala al usuario antes de actuar |
| que la IA selle la hipotesis | el sello es la firma, y la firma es responsabilidad |
| que la IA de por buena una necesidad, un actor o un interesado | propone; valida un humano contra evidencia, no contra plausibilidad |

🚨 **La primera fila es la que hunde la etapa entera si se rompe, y no deja rastro:** un artefacto
inventado se lee igual que uno entrevistado. `_phases/005_discovery.md` §3.3 lo dice de la etapa
completa —sin nadie a quien preguntar, lo que se produce no es descubrimiento sino invencion
documentada—; aqui se dice de cada hueco de cada plantilla.

---

## 4. Que cuenta como «software» en una etapa que prohibe escribir codigo

⚠️ La etapa prohibe escribir codigo, y eso podria leerse como que aqui no hay software. Se aclara
para que nadie lo use en ninguna de las dos direcciones.

| ✅ Es software de esta etapa | ❌ No lo es |
|---|---|
| las ordenes que las plantillas ya traen en su seccion de comprobacion (`grep`, `git log`) | un programa nuevo, aunque sea pequeño |
| un barrido de una linea sobre un artefacto | cualquier cosa con estado, configuracion o dependencias |
| los controles mecanicos del cierre y de la auditoria, que ya existen | una herramienta que haya que instalar o mantener |

🔑 **Si para repartir el trabajo hiciera falta escribir un programa, el reparto se paso de la raya**
— y esa es la señal, no la excusa.

---

## 5. Artefactos y condicion de salida: que es mecanico y que es juicio

Las seis casillas de `_phases/005_discovery.md` §6, separadas por quien las puede comprobar:

| Casilla | Mecanico | Juicio |
|---|---|---|
| `N-XXX` enunciada sin nombrar pantalla | el barrido de palabras-pantalla | que sea de verdad una necesidad, y no una peticion disfrazada |
| actor originador identificado y alcanzable | que la ficha traiga numero, alcanzabilidad y comportamiento actual | entero |
| actores clasificados, solo los existentes | que ningun tipo quede sin actor concreto | la clasificacion por funcion |
| interesados con lo que aportan y lo que bloquean | campos completos, `I-XXX` unicos | entero |
| hipotesis con su condicion de falsacion | que la seccion exista y no quede ningun hueco sin rellenar | que la falsacion sirva |
| alcance y objetivo con su `D-XXX` | que el `D-XXX` exista y este en el indice | entero |

📌 **Cuatro de las seis llevan juicio en la columna derecha.** Lo mecanico dice que el artefacto
esta **completo**; nunca dice que sea **cierto**. Las plantillas de la etapa ya traen sus barridos
escritos: se corren, y despues alguien lee.

---

## 6. Que nivel de sistema de IA pide el trabajo de esta etapa

⚠️ **Cuidado con lo que esta seccion NO dice.** `_workflow/ai_levels.md` §8 es explicito: en el
descubrimiento **no se elige el nivel del producto**, y una intuicion de nivel va a `assumptions.md`
como `A-XXX`. Esto de aqui es otra cosa: **cuanto sistema de IA pide el trabajo de la propia etapa**
—asistir entrevistas, releer notas, buscar contraejemplos—, que es una pregunta de herramienta de
trabajo, no de arquitectura de la solucion. Confundirlas es el error mas caro de aquel archivo.

Rubrica de `_workflow/ai_levels.md` §6, aplicada al trabajo de la etapa:

| Eje | Puntuacion | Por que |
|---|---|---|
| Impacto de un error | 2 | retrabajo: todo lo revisa una persona antes de entrar al registro |
| Autonomia necesaria | 1 | propone; no ejecuta nada con efecto |
| Variabilidad de la entrada | 3 | notas de entrevista, lenguaje abierto e imprevisible |
| Necesidad de trazabilidad | 2 | el registro exige comando y salida cruda |
| Volumen y frecuencia | 1 | una etapa, unas pocas sesiones |

**Lectura: nivel 0–1.** Ni herramientas hacen falta: la IA lee lo que se le pega y devuelve texto
que un humano contrasta contra lo que dijo alguien.

🚨 **Y aqui hay una discrepancia con la tabla de lectura de `_workflow/ai_levels.md` §6, que hay que
declarar en vez de disimular.** Esa tabla manda al nivel 5 en cuanto **cualquier** eje esta en 3, y
aqui «variabilidad de la entrada» lo esta. El propio archivo deja la salida: *«es una guia, no una
formula; un resultado que no convence se discute contra los ejes y se registra la discrepancia»*.
La discusion, contra los ejes:

- **Impacto en 1–2 y autonomia en 1** son los dos ejes que la regla 2 protege, y ninguno esta en 3.
- **La variabilidad alta no se traduce en riesgo** porque **cada salida la revisa una persona caso a
  caso** antes de entrar al registro; un harness mediria un comportamiento que ya se esta mirando de
  uno en uno.
- **El volumen en 1** hace que instrumentar cueste mas que el trabajo instrumentado.

⚠️ **Esa discrepancia no queda saldada por leerla aqui: se registra con su `D-XXX` en el proyecto
que la adopte**, junto al resto del reparto. Si un dia el volumen crece o la revision caso a caso
deja de hacerse, el eje que se movio es otro y la lectura cambia.

---

## 7. Que se registra al aplicar este archivo

| Va a… | Que |
|---|---|
| `decisions.md`, con su `D-XXX` | que se adopta de estas tablas en este proyecto y **que se descarta**; y la discrepancia de §6 con su lectura |
| `assumptions.md`, con su `A-XXX` | lo que el reparto da por cierto sin confirmar: que habra quien revise cada salida, que el volumen no crecera, que el acceso a las personas se mantiene |
| `constraints.md`, con su `C-XXX` | lo que viene impuesto y ya no se negocia: una politica de datos, una herramienta obligada, una prohibicion de grabar entrevistas |
| `lessons.md`, con su `L-XXX` | al cerrar la etapa: que asignacion fallo, o cual demostro funcionar |

🚨 **Aplicar este archivo no abre ningun codigo nuevo.** El reparto vive en las decisiones, que es
donde ya vive todo lo que se elige — `_workflow/team.md` §9.

---

## 8. Verificacion

```bash
# siete filas, una por paso del procedimiento de la etapa
grep -c "^| \*\*[1-7] · " _workflow/005_discovery.md

# la etapa lo cita: sin esto, el archivo no tiene lector
grep -n "_workflow/005_discovery" _phases/005_discovery.md
```

🔑 **La segunda orden es el criterio de cierre de este archivo, no un adorno.** Un reparto que nadie
manda leer es material muerto que ningun control detecta — es el enganche de uso, y sin el este
archivo nace sin lector.

---

## 9. Errores frecuentes

| Error | Como suena | Que hacer |
|---|---|---|
| Repartir para repartir | «pongamos IA en algun paso» | si el paso no lo pide, la columna se queda vacia |
| Delegar la entrevista | «que la IA prepare y resuma, total…» | preparar y resumir si; preguntar y escuchar, no |
| Confundir completo con cierto | «pasa todos los barridos» | lo mecanico mide forma; el fondo lo valida una persona |
| Validar por plausibilidad | «lo que propuso tiene sentido» | contrastar contra lo que dijo alguien, no contra lo que suena bien |
| Elegir el nivel del producto aqui | «esto va a necesitar multi-agente» | §6 puntua el trabajo **de la etapa**, no la solucion; el nivel del producto no se elige en descubrimiento |
| Reparto no registrado | «ya sabemos como trabajamos» | sin `D-XXX` no existe |
| Reparto escrito al final | «lo documento cuando cierre la etapa» | se escribe al decidirlo; despues se reconstruye lo que salio, no lo que se eligio |
