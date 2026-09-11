# Reparto del trabajo — Humano, Software e IA

> **Quien hace cada actividad.** Este archivo no dice que trabajo hay que hacer: dice como se
> reparte el que ya esta definido.

---

## Alcance de este archivo

🔑 **Es agnostico y sirve para cualquier proyecto.** No lleva dentro ni un nombre, ni una ruta, ni
un dato de ningun producto. Donde hace falta uno, se referencia `project.md`, que es el unico sitio
donde viven los datos propios. Los identificadores se escriben en su forma generica (`D-XXX`,
`A-XXX`, `C-XXX`).

⚠️ **Aplica a todas las etapas declaradas en `project.md`, con una excepcion: la etapa
preparatoria** —`000_preproject`—, la que monta la forma de trabajar antes de que exista producto.
Y la excepcion tiene una razon, no es un descuido:

| Etapa | Por que |
|---|---|
| **la preparatoria** | no reparte trabajo sobre un producto: **construye el sistema de trabajo que hace el reparto posible**. Aplicarse a si misma no aporta nada y confunde el andamio con la obra |
| **todas las demas** | producen trabajo sobre el producto, y ese trabajo hay que repartirlo antes de empezarlo |

🔑 **Y hay una segunda razon, mas util:** la etapa preparatoria es el **ejemplo trabajado** de este
archivo. Lo que monta —un humano que dirige, unos protocolos deterministas y unos agentes
especializados— ya es un reparto Humano/Software/IA en funcionamiento. Esta descrito en §11.

⛔ **Lo que este archivo NO hace, y conviene decirlo antes que nada:**

| No hace | Quien lo hace |
|---|---|
| decir que se autoriza y que se prohibe en una etapa | el archivo de esa etapa en `_phases/` |
| fijar la condicion de salida de una etapa | el archivo de esa etapa en `_phases/` |
| decidir el alcance o el objetivo del proyecto | el registro, con su `D-XXX` |
| declarar que etapas tiene el proyecto | `project.md` |
| desarrollar los niveles de sistema de IA | `_workflow/ai_levels.md` |

🚨 **Si este archivo empieza a legislar sobre etapas, sobran uno de los dos.** Dos archivos que
dicen lo mismo se desincronizan, y el que envejece miente sin que nadie lo note.

---

## 1. Los tres participantes

En cualquier etapa que produzca trabajo sobre el producto hay tres posibles participantes.

```text
                    EL TRABAJO
                        |
        +---------------+---------------+
        |               |               |
     HUMANO          SOFTWARE           IA
```

Cada uno tiene capacidades distintas, y son distintas de verdad — no es una gradacion de lo mismo.

| Participante | Aporta |
|---|---|
| **Humano** | juicio · contexto · responsabilidad · decision · interaccion |
| **Software** | reglas · datos · calculo · repeticion · ejecucion · trazabilidad |
| **IA** | interpretacion · lenguaje · patrones · sintesis · exploracion |

---

## 2. La regla de asignacion

> 🚨 **Cada actividad la realiza el participante mas adecuado: Humano, Software, IA o una
> combinacion. La distribucion la determina la naturaleza del trabajo y las capacidades que ese
> trabajo necesita.**

Y no la determina, en ningun caso:

- la tecnologia disponible;
- la intencion de usar IA;
- la complejidad percibida;
- la moda tecnologica.

> 🚨 **No se introduce IA porque se pueda usar IA. Se introduce cuando la naturaleza del trabajo
> requiere capacidades que la IA aporta.**

⚠️ **La regla simetrica tambien vale, y se olvida mas:** tampoco se pone a un humano a hacer trabajo
determinista y repetitivo porque «asi lo controlamos». Un humano haciendo de software falla mas que
el software, y ademas no deja traza.

🔑 **No todas las actividades necesitan los tres.** Un reparto valido puede ser `HUMANO` a secas,
`HUMANO + SOFTWARE`, `HUMANO + IA`, `HUMANO + SOFTWARE + IA`, o `SOFTWARE` solo cuando la actividad
no requiere intervencion humana directa. La combinacion sale del analisis del trabajo, no de la
plantilla mental de que «lo moderno lleva IA».

---

## 3. El humano: lo que no se delega

El humano se ocupa de lo que requiere capacidades que ni el software ni la IA sostienen.

| Capacidad | Que significa |
|---|---|
| **Juicio** | decidir cuando hay incertidumbre, ambiguedad o consecuencias relevantes |
| **Contexto** | comprender factores que no estan representados en los datos ni en las reglas |
| **Interaccion** | relacionarse con personas: patrocinador, interesados, usuarios |
| **Interpretacion** | entender intenciones y situaciones que solo se leen con contexto |
| **Responsabilidad** | asumir las consecuencias de la decision |
| **Direccion** | fijar objetivos, prioridades y que se investiga |
| **Validacion** | confirmar que el resultado representa la realidad o cumple el objetivo |

🚨 **Estas siete no se delegan, y hay dos reglas del proyecto que dependen de ello.** La «Doble
validacion» necesita una firma humana que ninguna herramienta puede dar, y `PI-1` —razona antes de
actuar, ante ambiguedad detente y consulta— es exactamente la capacidad de juicio: **una ambiguedad
resuelta en silencio por una herramienta es una decision sin dueño.**

---

## 4. El software: lo determinista y lo trazable

El software se ocupa de lo que puede definirse con reglas, datos y procesos deterministas:
ejecucion, almacenamiento, calculo, repeticion, consistencia, trazabilidad y control de estados.

> **El software ejecuta y controla aquello que puede definirse mediante reglas y datos.**

⛔ **El software no asume decisiones que requieran juicio, contexto, interpretacion,
responsabilidad o intencion.** Cuando lo hace, la decision desaparece del registro: no la tomo
nadie, la produjo una condicion.

🔑 **Este metodo ya usa software para lo suyo, y ese es el modelo a imitar:** el control de
versiones, los controles mecanicos del cierre, los bloques de verificacion, el contraste del arbol
contra las carpetas declaradas. Ninguno opina; todos son reproducibles. Es lo que `PI-5` exige
cuando dice que la evidencia es «corri esto, salio esto» y no un veredicto.

---

## 5. La IA: amplifica, y hasta donde

La IA es util donde el trabajo **no puede expresarse por completo con reglas deterministas**:
interpretacion, lenguaje, analisis, patrones, sintesis, exploracion, generacion de hipotesis e
informacion no estructurada.

> 🚨 **La IA asiste en el trabajo cognitivo; no asume automaticamente la responsabilidad sobre sus
> conclusiones ni sobre sus decisiones.**

El flujo por defecto es este, y se invierte solo con una decision registrada:

```text
        IA
         |
   ANALISIS / PROPUESTA / RECOMENDACION
         |
      HUMANO
         |
   VALIDACION / DECISION
```

### 5.1. Cuanta autonomia se le permite

El grado de autonomia no es una preferencia: sale del riesgo y de si la accion se puede deshacer.

| Si la actividad es... | La IA puede... | El humano... |
|---|---|---|
| **reversible y de bajo impacto** | ejecutar y reportar | revisa despues, por muestreo |
| **reversible y de impacto relevante** | ejecutar y reportar | revisa **cada** resultado antes de darlo por bueno |
| **irreversible** | **solo proponer** | **decide y firma antes de actuar** |

🚨 **Irreversible significa que no hay vuelta atras sin coste real: borrar datos, publicar, migrar,
gastar, comunicar a un tercero.** Esa lista es de ejemplos, no un inventario. Mientras el proyecto
no tenga registrado un inventario de acciones irreversibles, **la clasificacion se declara en la
propia respuesta** —«lo clasifico como reversible a criterio, porque…»—, nunca como si se leyera de
una tabla. Un criterio declarado como criterio se puede discutir; uno disfrazado de tabla, no.

⚠️ **Y una trampa concreta de la IA que no tienen los otros dos:** produce salidas plausibles con
la misma soltura cuando acierta y cuando no. Por eso «me convence» no es validacion. **Validar es
contrastar contra evidencia**, con la orden y su salida cruda, igual que exige el resto del metodo.

---

## 6. Complementariedad

Humano, Software e IA **no compiten por el mismo trabajo**. Se reparten segun capacidad.

```text
                       HUMANO
                 juicio · contexto · decision
                            |
              +-------------+-------------+
              |                           |
             IA                        SOFTWARE
      patrones · analisis         datos · reglas
      sintesis                    ejecucion
              |                           |
              +-------------+-------------+
                            |
                        RESULTADO
                            |
                  VALIDACION / CONTROL
                            |
                        DECISION
```

> **El humano dirige y decide. La IA amplifica la capacidad cognitiva. El software estructura,
> ejecuta y garantiza consistencia.**

> 🚨 **No se usa IA ni software para reemplazar trabajo humano porque sea tecnicamente posible. Se
> usan cuando aportan una ventaja real sobre como el trabajo deberia hacerse.**

---

## 7. Los niveles de sistema de IA — aqui solo se nombran

Cuando el reparto asigna trabajo a la IA aparece la segunda pregunta: **que nivel de sistema pide
ese trabajo.** No toda actividad necesita un agente; no todo agente necesita varios; no todo sistema
necesita observabilidad instrumentada.

| Nivel | Que es |
|---|---|
| **0** | modelo de lenguaje a secas |
| **1** | modelo + salida estructurada y validada |
| **2** | modelo + herramientas |
| **3** | agente unico con autonomia |
| **4** | sistema multi-agente: orquestador y especialistas |
| **5** | agente o multi-agente **+ harness**: observabilidad, evaluaciones y metricas |
| **6** | sistema de trabajo con IA en produccion, con evaluacion continua y ciclo de mejora |

> 🚨 **Se usa el nivel mas bajo que permita hacer el trabajo correctamente.** El nivel de
> ingenieria, observabilidad y evaluacion debe ser **proporcional** al riesgo, al impacto, a la
> autonomia, a la variabilidad y a la complejidad del trabajo.

⚠️ **Estos niveles no son etapas del metodo, ni un plan de madurez, ni una escalera que haya que
subir.** Son niveles de capacidad y complejidad de ingenieria: se elige uno, no se recorren.

📌 **Nombrarlos aqui no declara ninguno.** El desarrollo de cada nivel, el harness y la rubrica para
elegir estan en **`_workflow/ai_levels.md`**; el nivel que un proyecto adopta se declara con su
`D-XXX` en el registro, y en ningun otro sitio.

---

## 8. Como se aplica en una etapa

**Momento de entrada: al abrir la etapa, despues de leer su archivo en `_phases/` y antes del primer
paso de su procedimiento.**

```text
   etapa declarada en project.md
              |
   el archivo de la etapa en _phases/, §4  ---->  QUE trabajo hay que hacer
              |
   _workflow/team.md        ------->  QUIEN hace cada actividad
              |
   D-XXX en el registro     ------->  el reparto, con lo que se descarto
              |
        se ejecuta la etapa
              |
   al cerrar: ¿aguanto el reparto?  ->  leccion registrada
```

Seis pasos, y ninguno es opcional:

1. **Lista las actividades** del procedimiento de la etapa. Una fila por actividad, no por artefacto.
2. **Para cada una, escribe que capacidades exige** — de las de §1, con sus palabras.
3. **Asigna el participante** que tiene esas capacidades. Si la actividad exige juicio, contexto,
   responsabilidad o direccion, **lleva humano si o si**; lo demas puede acompañar.
4. **Si aparece IA, fija su autonomia** con la tabla de §5.1 y **declara la clasificacion de
   reversibilidad como criterio**.
5. **Contrasta el reparto contra §12** antes de darlo por bueno. Los antipatrones de ahi son los que
   se cuelan sin que nadie los note.
6. **Registralo** segun §9, en el momento — no al cerrar la jornada.

⏱️ **El reparto se escribe cuando se decide, no cuando termina la etapa.** Mientras se toma no se
siente como una decision: se siente como seguir trabajando. Reconstruirlo despues produce el reparto
que salio, no el que se eligio.

---

## 9. Que se registra, y donde

| Va a… | Cuando |
|---|---|
| `decisions.md`, con su `D-XXX` | **siempre**: la tabla de reparto de la etapa, y toda asignacion que eligio entre alternativas. **Con las descartadas escritas** — al resultado solo llega la ganadora |
| `assumptions.md`, con su `A-XXX` | cuando el reparto se apoya en algo **no confirmado**: que una fuente es fiable, que alguien estara disponible, que una salida sera revisable. Con su forma de validarlo y su disparador |
| `constraints.md`, con su `C-XXX` | cuando el reparto viene impuesto y ya no se negocia: una politica, un limite legal, una herramienta obligada |
| `lessons.md`, con su `L-XXX` | cuando un reparto fallo y se corrigio, o cuando demostro funcionar |

🚨 **Aplicar este archivo NO abre ningun codigo nuevo.** El reparto vive en las decisiones, que es
donde ya vive todo lo que se elige. Un prefijo mas es coste permanente, y `PI-2` pide lo minimo que
funcione: si algun dia el reparto se repite lo suficiente como para merecer ficha propia, eso sera
una decision con sus alternativas, no una costumbre.

---

## 10. Como se comprueba que el reparto se hizo

`PI-5` no admite una tercera casilla: lo que produce documentacion esta Terminado cuando existe su
**bloque de verificacion** — la orden ejecutada literal y su salida cruda.

Para un reparto, eso es:

```bash
# la decision de reparto de la etapa existe y esta en el indice
grep -n "D-XXX" decisions.md

# toda actividad asignada a IA declara su autonomia y su reversibilidad
grep -n "reversible" decisions.md
```

📌 Los nombres de archivo concretos salen de `project.md`; aqui van genericos a proposito.

⛔ **«Se reparto el trabajo» o «quedo claro quien hace que» son veredictos, no evidencia.** Un
reparto que no se puede señalar en el registro no se hizo: se penso.

---

## 11. Ejemplo trabajado: el propio sistema de trabajo del metodo

La forma de trabajar que monta la etapa preparatoria **ya es un reparto Humano/Software/IA**, y por
eso sirve de ejemplo sin inventar nada:

| Este archivo dice | En el sistema de trabajo del metodo es |
|---|---|
| **Humano** — juicio, direccion, responsabilidad, validacion | el **usuario**, que es el stakeholder y zanja; y `manager`, que dirige y coordina |
| **Software** — reglas, repeticion, trazabilidad | el control de versiones, los controles mecanicos del cierre, los bloques de verificacion |
| **IA** — interpretacion, sintesis, patrones | los agentes: el de inicio, el de cierre y el de auditoria |
| **Orquestador** | `manager`, que reparte y no delega la coordinacion ni el registro |
| **Especialistas con limites** | cada agente, con su protocolo, su ambito y su prohibicion explicita |
| **Humano en el bucle** | la «Doble validacion»: firma del usuario **y** revision tecnica independiente |
| **Evaluacion** | el agente de auditoria, que audita un commit cerrado y **no corrige ni decide** |
| **Nivel de sistema** | **4** — multi-agente con orquestador, **sin harness** |

🔑 **Y explica una regla que de otro modo parece burocracia:** «quien implementa no evalua» es
exactamente la linea de §5 —la IA propone, el humano valida— aplicada a un sistema donde parte del
trabajo lo hacen agentes. Un agente que evalua su propio trabajo produce un visto bueno que no vale
nada, porque juzga su version en vez de la evidencia.

⚠️ **Nivel 4 sin harness es una eleccion, no una carencia.** El trabajo es reversible —todo vive en
control de versiones—, el volumen es bajo y cada salida la revisa una persona. Instrumentar
observabilidad y evaluaciones automaticas aqui seria pagar el nivel 5 para un trabajo que no lo
pide, que es justo lo que §7 prohibe.

---

## 12. Errores frecuentes

| Error | Como suena | Que hacer |
|---|---|---|
| **Empezar por la tecnologia** | «¿que agente podemos construir aqui?» | empezar por el trabajo: que hay que hacer y que capacidades pide |
| **IA por disponibilidad** | «ya que la tenemos, que lo haga ella» | la naturaleza del trabajo decide, no la disponibilidad |
| **Humano de software** | «lo revisamos a mano cada vez para estar seguros» | si es determinista y repetitivo, es del software, y ademas deja traza |
| **Software con juicio** | «si se cumple la condicion, se aprueba solo» | una aprobacion es responsabilidad: lleva humano |
| **Validacion por impresion** | «lo lei y tiene buena pinta» | validar es contrastar contra evidencia, con su orden y su salida |
| **Autonomia sin clasificar** | «que lo haga y ya vemos» | fijar la autonomia con §5.1 y declarar la reversibilidad como criterio |
| **Nivel por ambicion** | «hagamoslo multi-agente, es mas robusto» | el nivel mas bajo que haga el trabajo; lo demas es coste sin ventaja |
| **Reparto sin registrar** | «esto ya sabemos como se hace» | lo que no esta en el registro se pierde al cerrar la conversacion |
| **Reparto escrito al final** | «lo documento cuando termine la etapa» | se escribe al decidirlo; despues se reconstruye lo que salio, no lo que se eligio |
