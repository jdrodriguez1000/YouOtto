# Niveles de sistema de IA

> **Cuanto sistema pide el trabajo.** Este archivo no dice si hay que usar IA —eso lo decide
> `_workflow/team.md`—: dice, una vez decidido que si, **cuanta ingenieria hace falta y como se
> elige.**

---

## Alcance de este archivo

🔑 **Es agnostico y sirve para cualquier proyecto.** No lleva dentro ni un nombre, ni una ruta, ni
un dato de ningun producto. Donde hace falta uno, se referencia `project.md`. Los identificadores se
escriben en su forma generica (`D-XXX`, `A-XXX`, `C-XXX`).

⚠️ **Aplica a todas las etapas declaradas en `project.md` salvo la preparatoria** —`000_preproject`,
que monta la forma de trabajar y no construye producto—. Es el mismo alcance de `_workflow/team.md`
y por la misma razon.

🚨 **Este archivo describe los niveles disponibles; NO declara el nivel de ningun proyecto.** El
nivel que un proyecto adopta se declara con su `D-XXX` en el registro, y en ningun otro sitio. Leer
aqui la descripcion del nivel 5 no significa que el proyecto vaya a tener un nivel 5.

⛔ **Y tres cosas mas que este archivo no es:**

| No es | Por que importa decirlo |
|---|---|
| una **secuencia** de etapas | los niveles no se recorren; se elige uno. Subir de nivel es un cambio de diseño, no un avance natural |
| un **plan de madurez** | un proyecto que se queda en el nivel 1 para siempre puede estar perfectamente bien diseñado |
| una **arquitectura tecnica** | describe como se organiza el trabajo, no que herramienta se usa para implementarlo |

🚨 **La distincion de la ultima fila es la que mas cuesta, y hay que sostenerla:** el diseño del
trabajo dice **como podria organizarse**; la arquitectura tecnica dice **como se implementara**.
Convertir lo primero en lo segundo antes de tiempo es tomar una decision tecnica prematura y
presentarla como si fuera una consecuencia del analisis.

---

## 1. La unidad de diseño es el trabajo

No se empieza preguntando «que agente podemos construir». Se empieza preguntando **que necesita
hacer el sistema y que capacidades requiere para hacerlo bien**.

```text
   EL TRABAJO
       |
   CAPACIDADES QUE EXIGE
       |
   RIESGO / AUTONOMIA / COMPLEJIDAD
       |
   NIVEL DE INGENIERIA APROPIADO
```

> 🚨 **Se construye el nivel de sistema que el trabajo realmente necesita, no el que sabemos
> construir.**

---

## 2. Los siete niveles

### Nivel 0 — Modelo a secas

```text
ENTRADA  ->  MODELO  ->  SALIDA
```

**Basta cuando:** el trabajo es sencillo, el riesgo bajo, la autonomia requerida baja, la salida
facil de revisar y las consecuencias de un error pequeñas.

**Lo que no da:** ninguna garantia sobre la forma de la salida, ni acceso a datos, ni trazabilidad.

---

### Nivel 1 — Modelo + salida estructurada

```text
ENTRADA  ->  MODELO  ->  ESQUEMA VALIDADO  ->  SALIDA
```

**Se elige cuando** hace falta controlar la **forma** de la salida para que otra pieza la consuma.
Combina comportamiento probabilistico con validacion determinista.

🔑 **Es el salto mas barato de todos y el que mas se salta.** Validar la forma no cuesta casi nada y
convierte un fallo silencioso en un error visible.

---

### Nivel 2 — Modelo + herramientas

```text
ENTRADA -> MODELO -> HERRAMIENTA -> RESULTADO -> MODELO -> SALIDA
```

**Se elige cuando** el trabajo necesita consultar datos, calcular, buscar informacion o ejecutar
acciones que el modelo no puede hacer por si mismo.

⚠️ **Aqui aparece el primer riesgo real:** una herramienta **ejecuta**. En cuanto una herramienta
puede escribir, borrar, enviar o gastar, aplica la tabla de autonomia de `_workflow/team.md` §5.1 y
la accion irreversible deja de ser automatizable sin firma humana.

---

### Nivel 3 — Agente unico

```text
OBJETIVO
   |
AGENTE:  razonar -> usar herramienta -> observar -> razonar -> actuar -> repetir
   |
RESULTADO
```

**Se elige cuando** el trabajo requiere **autonomia**: el agente decide que herramienta usar, cuando,
en que orden, con que argumentos, cuando continuar y cuando detenerse.

🚨 **Lo que cambia respecto al nivel 2 no es la potencia: es quien decide la secuencia.** En el nivel
2 la secuencia la fija quien programa; en el 3 la fija el agente en tiempo de ejecucion. Por eso el
nivel 3 exige, como minimo, **limites escritos**: que puede tocar, que no, y cuando se detiene.

---

### Nivel 4 — Sistema multi-agente

```text
                 ORQUESTADOR
                      |
      +---------------+---------------+
      |               |               |
 ESPECIALISTA A  ESPECIALISTA B  ESPECIALISTA C
```

**Se elige cuando** un solo agente no basta y el trabajo se puede partir en **roles
especializados**.

> 🚨 **El objetivo no es tener muchos agentes. Es tener roles especializados dentro de un sistema de
> trabajo.**

**El orquestador** interpreta el objetivo, descompone el trabajo, selecciona especialistas, asigna
tareas, establece dependencias, pasa contexto, recibe resultados, maneja errores, integra y
sintetiza.

**Cada especialista** necesita, sin excepcion:

| Necesita | Si le falta… |
|---|---|
| responsabilidad clara | invade el trabajo de otro y duplica |
| herramientas especificas | improvisa con lo que tenga a mano |
| el contexto necesario | pregunta o inventa |
| **limites escritos** | toca lo que no debia y nadie lo ve hasta despues |
| criterios de exito | entrega algo y nadie sabe si sirve |
| salida estructurada | el orquestador tiene que interpretar prosa, y ahi se pierde |

⚠️ **Un especialista sin limites escritos no es un especialista: es un agente generico con nombre
propio.** Y dos agentes genericos con nombres distintos cuestan mas que uno solo.

---

### Nivel 5 — Agente o multi-agente **+ harness**

El harness es la capa que permite **observar, evaluar, experimentar y controlar** el comportamiento
del sistema. Ver §5.

**Se elige cuando** el sistema ya importa lo bastante como para que «funciono» deje de ser una
respuesta suficiente y haya que responder tambien **«¿como se comporta, y por que?»**.

---

### Nivel 6 — Sistema de trabajo con IA en produccion

Nivel 5 **+ evaluacion continua + observabilidad permanente + ciclo de realimentacion**.

**Se elige cuando** el sistema opera de forma sostenida, con usuarios reales, y su comportamiento
puede degradarse sin que nadie lo note — porque cambia el modelo, cambian los datos o cambia el uso.

---

## 3. Comportamiento probabilistico: por que hace falta el harness

En software determinista se espera lo mismo cada vez:

```text
X -> Y
X -> Y
X -> Y
```

En un sistema basado en modelos de lenguaje se observa otra cosa:

```text
X -> Y1
X -> Y2
X -> Y3
```

🚨 **Por eso una sola ejecucion no prueba nada.** Ni un exito ni un fallo: los dos son una muestra de
tamaño uno sobre una distribucion. La pregunta util no es «¿funciono?» sino **«¿con que frecuencia
funciona, y que pasa cuando no?»**.

El mismo escenario, repetido, da una distribucion que si se puede leer:

```text
1000 ejecuciones     Resultado A -> 720      P(A) ~ 72%
                     Resultado B -> 230      P(B) ~ 23%
                     Resultado C ->  50      P(C) ~  5%
```

🔑 **Esto conecta directamente con `PI-5`.** «Un test escrito para pasar no cuenta» tiene aqui una
version propia: **una demostracion elegida entre varias ejecuciones tampoco cuenta.** Si se enseña la
buena y se descartan las malas, lo que se registro es una anecdota disfrazada de evidencia — y
ademas da confianza, que es lo que la hace cara.

---

## 4. Lo que se puede variar

Cuando el comportamiento no es el esperado, estas son las palancas — y **se mueve una cada vez**, o
no se sabe cual fue:

```text
modelo · prompt · contexto · herramientas · datos · memoria
instrucciones del sistema · estrategia del agente
numero de especialistas · configuracion de cada uno · estrategia de orquestacion
```

---

## 5. El harness

```text
                SISTEMA DE IA
                      |
                  EJECUCION
                      |
                   HARNESS
        +-------------+-------------+
        |             |             |
  OBSERVABILIDAD  EVALUACIONES   METRICAS
        |             |             |
     trazas       rubricas      resultados
        +-------------+-------------+
                      |
             DATOS DE COMPORTAMIENTO
```

### 5.1. Observabilidad — «¿que hizo realmente?»

Debe permitir **reconstruir la trayectoria completa**: peticion, prompt, orquestacion, tarea,
especialista, llamada a herramienta, resultado de la herramienta, resultado del especialista,
sintesis, salida final.

🔑 **Es el mismo principio que el registro de este metodo:** una afirmacion sin la orden que la
produjo hay que rehacerla entera para contrastarla. Una salida de IA sin su trayectoria, igual.

### 5.2. Evaluaciones — «¿lo hizo bien?»

Un conjunto de casos, cada uno con: entrada, comportamiento esperado, salidas aceptables, salidas
inaceptables y contexto.

⚠️ **«Salidas inaceptables» es la mitad que se olvida**, y es la que detecta las regresiones que
importan: no que deje de acertar, sino que empiece a hacer algo que no debia.

### 5.3. Rubricas — cuando no hay una unica respuesta correcta

Criterios con escala, aplicados a la salida para producir una puntuacion. Se usan donde «correcto /
incorrecto» no aplica: redaccion, sintesis, recomendacion.

🚨 **Una rubrica se escribe antes de ver las salidas.** Escrita despues, describe lo que salio.

### 5.4. Metricas

| De sistema | De sistema multi-agente |
|---|---|
| exactitud · cumplimiento de politicas · tasa de alucinacion | exactitud del orquestador · exactitud por especialista |
| tasa de correccion humana · latencia · coste | exito de llamadas a herramienta · exactitud de la delegacion |
| tasa de fallo · tareas completadas · consistencia | retrabajo · turnos · camino de ejecucion · propagacion de fallos |

📌 **La tasa de correccion humana es la mas informativa de todas**, y la mas incomoda: mide cuanto
del trabajo que se delego hubo que rehacer. Si es alta, el nivel elegido no era el problema — el
reparto lo era.

### 5.5. Experimentos

```text
VERSION A -> ejecutar -> evaluar -> metricas
VERSION B -> ejecutar -> evaluar -> metricas
                    |
               COMPARACION
```

---

## 6. La rubrica de seleccion

🔑 **Esta seccion es la que convierte el resto del archivo en algo utilizable.** Enumerar niveles y
factores no elige por nadie: aqui se dice **como se combinan**.

Se puntua cada eje de 0 a 3, **con la evidencia delante y no de memoria**:

| Eje | 0 | 1 | 2 | 3 |
|---|---|---|---|---|
| **Impacto de un error** | molesto | retrabajo | daño real reparable | daño irreversible o a terceros |
| **Autonomia necesaria** | una pasada, sin decisiones | elige entre opciones fijas | decide la secuencia | decide y ejecuta acciones con efecto |
| **Variabilidad de la entrada** | formato fijo | variantes conocidas | lenguaje natural acotado | abierta e imprevisible |
| **Necesidad de trazabilidad** | ninguna | util | exigida por el negocio | exigida por norma o auditoria |
| **Volumen y frecuencia** | puntual | ocasional | continuo | continuo y creciente |

Y se lee asi:

| Lectura | Nivel minimo que pide |
|---|---|
| todo en 0–1, y la salida la revisa una persona cada vez | **0** o **1** |
| necesita datos o acciones externas | **2** |
| la secuencia no se puede fijar de antemano | **3** |
| el trabajo se parte en roles con responsabilidades distintas | **4** |
| **cualquier eje en 3**, o el sistema decide sin revision humana caso a caso | **5** — el harness deja de ser opcional |
| lo anterior **y** opera de forma sostenida con usuarios reales | **6** |

🚨 **Dos reglas que mandan sobre la tabla:**

1. **Se elige el nivel mas bajo que satisfaga la lectura**, nunca el mas alto que se pueda pagar.
2. **«Impacto de un error» en 3 no se compensa con nada.** Si la accion es irreversible, no hay
   puntuacion baja en los otros ejes que la vuelva automatizable sin firma humana
   (`_workflow/team.md` §5.1).

⚠️ **Es una guia, no una formula.** La puntuacion ordena la conversacion; no la sustituye. Un
resultado que no convence se discute y se registra la discrepancia — pero se discute contra los
ejes, no contra la impresion.

---

## 7. Como se declara el nivel en un proyecto

Cuatro cosas, y las cuatro en la misma pasada:

1. **Una `D-XXX`** con el nivel elegido, la puntuacion de los cinco ejes que lo sostiene, y **el
   nivel inmediatamente superior descartado con su razon**. Al resultado solo llega el ganador: si no
   se escribe lo descartado, dentro de tres meses nadie sabra si se penso.
2. **Los `A-XXX`** de todo lo que la eleccion da por cierto sin confirmar —que la entrada tendra ese
   formato, que ese volumen no crecera, que habra alguien revisando—, con su forma de validarlo y su
   disparador.
3. **Los `C-XXX`** de lo que viene impuesto: una politica de datos, una obligacion de trazabilidad,
   un limite de coste.
4. **El bloque de verificacion** que exige `PI-5`, porque esto es documentacion: la orden ejecutada y
   su salida cruda.

🚨 **Subir de nivel despues es una decision nueva, no una continuacion.** Se registra con su `D-XXX`,
citando la anterior y diciendo **que cambio** —que eje se movio y por que—. Un sistema que sube de
nivel «porque se quedaba corto» sin decir en que eje, sube por ambicion.

---

## 8. Cuando se elige el nivel, dentro del metodo

El momento importa tanto como la eleccion.

| Momento del metodo | Que se hace con el nivel |
|---|---|
| **Descubrimiento** | **no se elige.** Ahi se entiende la necesidad, no se diseña la solucion. Si aparece una intuicion de nivel, va a `assumptions.md` como `A-XXX`, no a una decision |
| **Prototipo inicial** | se usa **el nivel mas bajo que permita observar el comportamiento que se quiere validar**. Un prototipo es descartable: instrumentarlo es pagar por algo que se va a tirar |
| **El Gate que autoriza construir** | es donde la intuicion se convierte en eleccion: hay hipotesis validada y ya se sabe que trabajo hay |
| **Linea base del producto** | **aqui se declara**, con su `D-XXX` y su puntuacion. Es la decision de arquitectura que el resto del diseño hereda |
| **Construccion y evolucion** | se revisa cuando **se mueve un eje**: crece el volumen, aparece una accion irreversible, cambia la variabilidad de la entrada |

📌 **Los nombres de las etapas de este metodo estan en `_methodology/`; cuales estan declaradas en
este proyecto, en `project.md`.** Este archivo no declara ninguna.

🚨 **Elegir el nivel en descubrimiento es el error mas caro de todo el archivo.** Ata el diseño a una
solucion antes de saber cual es el problema, y despues cada hallazgo del descubrimiento se
interpreta para que quepa en el nivel ya elegido.

---

## 9. Lo que compone un sistema de trabajo con IA

Por encima del modelo y del agente hay una pieza mayor:

```text
SISTEMA DE TRABAJO CON IA
  |
  +-- modelo o modelos
  +-- orquestador
  +-- agentes y especialistas
  +-- herramientas
  +-- memoria y contexto
  +-- barreras y limites
  +-- humano en el bucle
  +-- observabilidad
  +-- evaluaciones
  +-- rubricas
  +-- metricas
  +-- experimentos
  +-- ciclo de realimentacion
```

⚠️ **Ningun sistema necesita las trece.** El modelo y los agentes **hacen** el trabajo; el resto
existe para que ese trabajo se pueda controlar, observar, evaluar, medir, auditar y mejorar. Cuantas
piezas entran lo deciden el riesgo, la autonomia y la complejidad — la rubrica de §6.

> 🚨 **No se construye IA por construir IA. Se construye el sistema de trabajo que sea efectivo,
> fiable, observable y medible para el trabajo que hay.**

---

## 10. Errores frecuentes

| Error | Como suena | Que hacer |
|---|---|---|
| **Elegir nivel antes de entender el trabajo** | «esto va a necesitar multi-agente» | primero el trabajo y sus capacidades; el nivel es consecuencia |
| **Confundir nivel con madurez** | «vamos por el nivel 2, hay que llegar al 5» | el nivel correcto puede ser el 1 para siempre |
| **Saltarse el nivel 1** | «ya se entiende lo que devuelve» | validar la forma es barato y convierte un fallo silencioso en un error visible |
| **Agentes sin limites escritos** | «el agente ya sabe lo que tiene que hacer» | responsabilidad, herramientas, limites y criterio de exito, por escrito |
| **Especialistas por decorado** | «pongamos uno por cada paso» | un rol se justifica por responsabilidad distinta, no por partir el flujo |
| **Una sola ejecucion como prueba** | «lo probe y funciono» | una ejecucion es una muestra de tamaño uno |
| **Demo elegida** | «mira que bien lo hace» | enseñar tambien las que fallaron, o no enseñar ninguna |
| **Rubrica escrita despues** | «pongamos los criterios que explican esto» | la rubrica se escribe antes de ver las salidas |
| **Harness prematuro** | «instrumentemos desde el principio» | el harness cuesta; entra cuando la rubrica lo pide, no antes |
| **Harness eternamente aplazado** | «cuando tengamos tiempo lo medimos» | si un eje esta en 3, ya no es opcional |
| **Subir de nivel sin decir que cambio** | «se nos quedaba corto» | nombrar el eje que se movio, en la `D-XXX` |
