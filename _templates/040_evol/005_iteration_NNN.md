# Acta de iteracion de evolucion <NNN> — <NOMBRE DEL PROYECTO>

> 📄 **Se copia una vez por iteracion de evolucion.** El nombre del archivo lleva el numero con tres
> cifras: `005_iteration_001.md`, `005_iteration_002.md`, … El numero **no se reutiliza**, ni siquiera
> si una iteracion se abandona a medias: una iteracion abandonada sigue siendo parte de como se llego
> hasta aqui, y su acta es donde consta por que se abandono.
>
> 🚨 **Esta es la segunda etapa que se repite, y se repite de otra manera que la anterior.** La del
> crecimiento sabia cuando terminaba porque tenia un alcance delante; esta **no termina** mientras
> haya valor que anadir. Lo que terminan son sus iteraciones — y este archivo es lo unico que las
> hace visibles una por una. Sin un acta por vuelta, dos anos de evolucion se leen despues como un
> solo tramo continuo de trabajo, y se pierde justo lo que la etapa produce: **que evidencia hizo que
> se construyera esto y no aquello.**

| Campo | Valor |
|---|---|
| Artefacto | `<carpeta de artefactos de la etapa, segun `project.md`>/005_iteration_<NNN>.md` |
| Etapa que lo produce | la etapa de la evolucion, Pasos 1, 2, 6, 7 y 8 |
| Iteracion numero | `<NNN>` |
| Estado | `<ABIERTA · CERRADA · ABANDONADA>` |
| Abierta | `<AAAA-MM-DD>` |
| Cerrada | `<AAAA-MM-DD, o «—» mientras siga ABIERTA>` |
| Escrito por | `manager` |

> ⚠️ **Las dos fechas las lee `report_auditor` y las cruza contra el historial de `git`.** Un acta
> cuya fecha de apertura es posterior al primer commit de sus unidades incrementales no se abrio: se
> reconstruyo.
>
> 🚨 **`ABANDONADA` es un estado valido y se usa.** Una iteracion que se corto a mitad porque la
> evidencia cambio (`_phases/040_evol.md` §6) se cierra con ese estado y con su §7 escrita, no se
> borra ni se funde con la siguiente.

---

## 0. 🚨 La regla que gobierna este archivo entero

> **Este archivo existe porque al `git diff` solo llega lo que se construyo, nunca lo que se miro
> para decidirlo.**

Es la primera etapa de todo el metodo en la que el producto se decide **mirando lo que la gente hace**
en vez de lo que dijo que haria. Esa mirada no deja ni una linea en el repositorio: los datos de uso
se consultan, se discuten y se olvidan, y al cabo de un ano lo unico que queda es la funcionalidad —
indistinguible de una que se construyo porque a alguien le parecio buena idea.

📌 **Por eso la seccion 2 pide la evidencia de cada cosa que entra, no la lista de lo que entra.**
«Estas tres» no dice nada dentro de seis meses. «Estas tres, y la primera porque el Gate encontro al
coordinador saturado» explica la iteracion entera y, mas importante, permite comprobar despues si la
apuesta salio.

⛔ **Y lo que no se pudo comprobar se declara NO COMPROBADO, nunca en blanco.** Un hueco vacio se lee
como que no habia nada que decir.

---

## 1. De donde sale el trabajo de esta iteracion — las tres fuentes con evidencia

**Se escribe en el Paso 1, ANTES de recoger ninguna peticion nueva.** Es lo unico que distingue esta
etapa de una lista de deseos ordenada por quien grita mas fuerte.

| Fuente | Que dice hoy | De donde sale |
|---|---|---|
| **Hallazgos del Gate anterior** | `<lo que la revision independiente midio, incluida la operacion hibrida>` | `<el dictamen, en el sitio que `project.md` declare>` |
| **Datos de uso real** | `<que se usa mucho, que se usa poco, y que no abre nadie>` | `<la orden o el panel del que se derivan; no la memoria>` |
| **Registro de deuda tecnica** | `<lo que se aplazo a proposito y sigue vivo>` | `<`techdebt.md`, entradas abiertas>` |

```
<PEGA AQUI la orden que produce el recuento de uso y su salida cruda.>
```

🚨 **La cuarta entrada de la etapa es la que mas veces falta, y su ausencia se descubre tarde.** Si
el mecanismo de observabilidad se quedo en la version minima del esqueleto y nunca crecio, **la
ventana ya paso** y no hay dato que mirar. Si es el caso, se escribe aqui con esas palabras y se
abre su `A-XXX` o su `C-XXX` — no se rellena con una impresion. Una iteracion que arranca decidiendo
por opinion es exactamente lo que esta etapa existe para evitar (`_phases/040_evol.md` §3).

### Lo que no abre nadie

| Funcionalidad con cero uso en la ventana | ¿Se quita, se investiga o se deja? | Por que |
|---|---|---|
| `<...>` | `<QUITAR · INVESTIGAR · DEJAR>` | `<...>` |

⚠️ **Cero uso no significa siempre «sobra».** Puede significar que no se encuentra, que llega tarde
en el flujo, o que quien la necesitaba no llego a entrar. **Es una pregunta, no un veredicto**, y se
contesta mirando por que, no borrando.

📌 **Esta tabla existe porque cuesta proponerlo.** Alguien la construyo y funciona; si no estuviera
escrita en el procedimiento, no se plantearia nunca.

---

## 2. Que entra en esta iteracion, con su evidencia — y que NO entra

**Se escribe en el Paso 2.** Una fila por capacidad, en el orden en que se van a construir.

| # | Enunciado (algo que alguien puede hacer) | Prioridad | La evidencia concreta que lo pide | Codigo de la unidad incremental |
|---|---|---|---|---|
| 1 | `<...>` | `<1 roto · 2 pedido · 3 negocio · 4 deuda>` | `<el hallazgo, el dato de uso o la peticion repetida — no «nos parece»>` | `<codigo>` |
| 2 | `<...>` | `<...>` | `<...>` | `<codigo>` |

**El criterio de prioridad, y es el de la etapa** (`_phases/040_evol.md`, Paso 2)**:**

| Puesto | Que va ahi |
|---|---|
| **1** | lo que la evidencia demostro **roto** — el actor saturado que el Gate encontro va primero |
| **2** | lo que los usuarios reales pidieron **y se repite** — por varios, no por uno, y menos por el que mas cerca esta |
| **3** | lo que el negocio necesita para el resultado que espera |
| **4** | la deuda tecnica que toque pagar (§4) |

> 🚨 **El codigo de la unidad incremental sale de la tabla «Codigos» de `project.md`, y esta
> plantilla no lo escribe.** No es un descuido: **un codigo que aparece en un archivo antes que en esa
> tabla es un desfase**. Si al copiar esta plantilla el codigo no existe todavia, se declara ahi
> primero, con su `D-XXX`.

⚠️ **El orden importa mas aqui que en la etapa anterior.** Alli el alcance estaba cerrado y el orden
solo cambiaba cuando se aprendia cada cosa. Aqui el orden **es** la decision: lo que se queda en el
puesto cuatro durante tres iteraciones seguidas, en la practica, se ha descartado sin que nadie lo
haya decidido.

### La lista del «no» — permanente, y esta iteracion la alimenta

| Que se aparto esta vez | Por que | Destino |
|---|---|---|
| `<...>` | `<...>` | `<vuelve a evaluarse cuando… · descartado · a la siguiente>` |

🔑 **La lista del «no» no fue un artefacto de la baseline que caduco al terminar el producto
minimo.** Es permanente, y al diff solo llega el ganador.

### 🚨 Lo que se construye de la lista del «no», si algo se construye

| Capacidad recuperada de la lista | Cuando se aparto | **Que evidencia NUEVA la pide ahora** |
|---|---|---|
| `<...>` | `<AAAA-MM-DD>` | `<el dato de uso o la peticion; «lleva mucho esperando» NO es evidencia>` |

⚠️ **Una funcionalidad aplazada hace seis meses porque nadie la pedia sigue sin haber sido pedida.**
El tiempo no la convierte en demanda; solo hace que se lea como si lo fuera, porque lleva mas tiempo
escrita. **La ultima columna es la unica razon por la que esta tabla existe:** si esta vacia, la
capacidad no entra.

🔑 **Y hay una asimetria que conviene ver:** la lista del «no» se escribio **antes** de que existiera
uso real, con la misma informacion que tenia el resto de la baseline. El uso real es informacion
**nueva**, y llega despues. Construir de la lista sin volver a mirarla contra el uso es preferir el
dato viejo teniendo delante el nuevo.

---

## 3. ¿Entra un actor nuevo en esta iteracion?

**Paso 3.** Si la respuesta es `NO`, se escribe `NO` y se pasa a §4. Si es `SI`, se rellena entera:
incorporar un actor es el cambio estructural mas grande que hace esta etapa, y **no se trata como una
capacidad mas**.

| Campo | Contenido |
|---|---|
| ¿Entra un actor nuevo? | `SI` / `NO` |
| Tipo de actor | `<el de la taxonomia de la guia de metodo>` |
| Actor concreto | `<el rol y una persona alcanzable, no una categoria>` |
| Por que entra **ahora** | `<que ausencia se demostro cara — no «faltaba»>` |
| Su camino feliz | `<que NO es el del actor generador>` |
| Que proceso manual sustituye | `<...>` |
| Que hacia ese proceso **ademas** | `<casi siempre es mas de lo que su nombre dice>` |
| Prototipo de evolucion | `SI` / `NO` — `<si es NO, por que, contra el criterio de §4>` |
| Supuestos nuevos que trae | `A-XXX`, `A-XXX` — registrados **antes** de construir |

> **Un actor nuevo trae un camino feliz que nadie ha validado nunca.** La adopcion del actor
> generador no dice absolutamente nada sobre si el nuevo sabra usar lo suyo — son personas distintas,
> con otro trabajo y otro momento del dia.

🚨 **Un actor entra cuando su ausencia se demuestra cara, no por completitud.** «Faltaba el
supervisor» no es una razon; «el supervisor pide cuatro informes al mes por correo y alguien los
arma a mano» si lo es.

⚠️ **Todo lo que se de por hecho sobre como trabaja hoy** —cuantas veces al dia, con que herramienta,
con cuanta prisa— **va a `assumptions.md` antes de construir encima**, con su forma de validarlo y su
disparador. No despues.

---

## 4. Prototipo de evolucion — la decision se toma ANTES de construir

**Paso 4.** Una fila por capacidad de §2.

> **El criterio: nivel de incertidumbre × impacto de equivocarse.**

| # | Capacidad | ¿Prototipo? | Por que | Donde quedo |
|---|---|---|---|---|
| 1 | `<...>` | `SI` / `NO` | `<...>` | `<el archivo del prototipo y su resultado, o «—»>` |

| Si, prototipar | No hace falta |
|---|---|
| entra un actor nuevo | una mejora sobre algo ya validado |
| comportamiento que nadie ha visto todavia | un cambio visual menor |
| varias alternativas funcionales sobre la mesa | una correccion ya definida |
| alto riesgo de que se rechace | un cambio que se puede deshacer en una tarde |

🚨 **El orden respecto al Paso 5 no es una preferencia: es lo que hace barata la etapa.** Decidido
despues de construir, la respuesta siempre es que no hacia falta — porque ya esta construido. Por eso
esta tabla se rellena con fecha, y `report_auditor` la cruza contra el primer commit de la capacidad.

⚠️ **El fallo contrario existe y cuesta igual:** convertirlo en tramite. La mayoria de las mejoras no
lo necesitan, y obligar a prototiparlas todas es la forma mas rapida de que se deje de prototipar
tambien lo que si hacia falta.

📌 **Un prototipo de evolucion no abre una etapa ni un Gate.** Su resultado autoriza construir **esa**
capacidad, y nada mas.

---

## 5. La deuda tecnica que esta iteracion toca — una de tres, y ninguna es «ya veremos»

**Paso 6.** Una fila por entrada de deuda que la iteracion toque.

| `DT-XXX` | Decision | Si se aplaza: la condicion observable | Quien la va a mirar |
|---|---|---|---|
| `DT-XXX` | `<SE PAGA · SE APLAZA · SE ACEPTA COMO PERMANENTE>` | `<«hasta que pasemos de N al dia» — comprobable, no una fecha vaga>` | `<...>` |

| Decision | Que significa |
|---|---|
| **Se paga en esta iteracion** | entra como una unidad incremental mas, con su test |
| **Se aplaza con condicion observable** | una condicion que alguien pueda comprobar, no una fecha vaga |
| **Se acepta como permanente** | se cierra la entrada y se dice por que. Deja de ser deuda y **pasa a ser una decision**, con su `D-XXX` |

🔑 **La tercera es la que falta en casi todas las listas de deuda, y es la que las mantiene sanas.**
Una lista donde nada se cierra crece hasta que nadie la lee — y una lista que nadie lee protege
exactamente igual que no tenerla, con el coste anadido de que parece que protege.

⚠️ **«Se aplaza con condicion» solo vale si alguien va a ver la condicion.** Por eso la ultima columna
lleva un nombre y no un rol vacante. Una condicion observable que nadie observa es «ya veremos» con
mejor redaccion: si no hay quien la mire, la entrada tiene que ir a una de las otras dos.

---

## 6. 🚨 La metrica de esta iteracion — se declara ANTES de construir

**Paso 7, y esta seccion es la razon por la que la disciplina no se evapora al pasar el Gate.**

```text
QUE SE ANADE:  <la capacidad>
QUE SE ESPERA: <que comportamiento deberia cambiar>
METRICA:       <como se vera, y con que orden o panel se lee>
VENTANA:       <AAAA-MM-DD> → <AAAA-MM-DD>
```

| Campo | Contenido |
|---|---|
| Fecha en que se declaro | `<AAAA-MM-DD — antes del primer commit de la capacidad>` |
| Valor de partida, medido antes | `<numero, con la orden que lo produjo>` |
| Umbral que se considera confirmacion | `<numero, fijado ahora>` |

```
<PEGA AQUI la orden que lee la metrica y su salida cruda AL DECLARARLA. Es el valor de partida.>
```

🚨 **Elegir la metrica despues de ver los datos no es medir: es elegir el resultado.** En las etapas
anteriores habia un Gate que lo paraba; aqui no hay nadie esperando un dictamen, y por eso el control
es la **fecha**. `report_auditor` cruza la fecha de esta declaracion contra el primer commit de la
capacidad, y contra la primera lectura del dato.

### El resultado, al agotarse la ventana

**Se rellena al cerrar, y se escribe diga lo que diga.**

| Campo | Contenido |
|---|---|
| Fecha en que se cerro la ventana | `<AAAA-MM-DD>` |
| Valor medido | `<numero>` |
| ¿Se confirmo lo que se esperaba? | `SI` / `NO` / `PARCIALMENTE` |
| Que se hace con eso | `<nada · se ajusta · se revierte · entra en la siguiente iteracion>` |

```
<PEGA AQUI la misma orden de arriba y su salida cruda al cerrar la ventana.>
```

> **Esta etapa no tiene Gate, pero la revision independiente no se va.** Cada iteracion declara su
> metrica antes de construir, y la auditoria la lee despues. Es mas ligero que un Gate —no autoriza
> ni detiene— pero mantiene en pie lo unico que hace que una medicion valga: **que la regla existiera
> antes del dato.**

🚨 **Y esto no inventa un tercer Gate.** El metodo define dos y ninguno mas. La diferencia es la que
importa: un Gate **decide una inversion** y puede decir que no; esto solo **deja constancia** de si lo
que se esperaba ocurrio.

⚠️ **Una metrica que no se cumple no obliga a deshacer lo construido, pero si a escribirlo.** Lo que
no se puede es dejar la ventana pasar en silencio: **una iteracion cuya metrica nadie miro es
indistinguible de una que fallo.**

---

## 7. Que enseno esta iteracion

**Paso 8, y es la seccion por la que existe el archivo.**

| Que aprendio la iteracion | Donde quedo registrado |
|---|---|
| `<un limite que solo aparece con uso real y volumen: cuota, concurrencia, ventana de servicio>` | `C-XXX` |
| `<un supuesto que sobrevivio al crecimiento y solo fallo a escala>` | `A-XXX`, marcado como refutado |
| `<algo que fallo y se corrigio, o una practica que demostro funcionar>` | `L-XXX` |
| `<lo que se dejo a medias a proposito, con su unidad incremental al lado>` | `DT-XXX` |
| `<una decision cara de revertir que la construccion obligo a tomar>` | `<la decision arquitectonica, mas su `D-XXX` en el registro>` |

🚨 **Cada fila de la segunda columna tiene que existir en el registro.** Un limite del entorno que
solo esta escrito aqui no lo va a encontrar nadie: quien vaya a elegir la siguiente capacidad busca
en `constraints.md`, no en el acta de una iteracion cerrada.

🚨 **Es la etapa que mas `C-XXX` produce de todo el metodo, y conviene esperarlo.** Los limites que
importan de verdad —cuanto aguanta, cuantos a la vez, cuanto cuesta al mes— no aparecen al disenar ni
al construir: aparecen cuando hay gente usandolo todos los dias.

⚠️ **Un supuesto tumbado se marca, no se borra.** Lo que hay que poder leer despues no es solo cual
era el limite, sino **que se creia antes de tropezarse con el**.

### La cosecha — se hace AQUI, no al cerrar la etapa

| `L-XXX` de esta iteracion | `Portabilidad` | Si sube: su `D-XXX` y el codigo global |
|---|---|---|
| `L-XXX` | `<Global candidata · Solo proyecto · Ya cubierta por LG-NN · Promovida a LG-NN>` | `<...>` |

⚠️ **Esta es la unica etapa donde la cosecha va por iteracion, y no es un capricho: aqui no hay
salida.** En las demas se cosecha al salir; dejarla «para el final» en esta significa no hacerla
nunca — y es, con diferencia, la etapa que mas lecciones produce.

🔑 **Al subir una leccion se reescribe como detector, no como recuerdo.** «Se cayo el jueves porque
el proceso nocturno no habia terminado» es una anecdota; «un proceso que asume que el anterior
termino, sin comprobarlo, falla el dia que el anterior tarda mas» es un detector.

⛔ **Los filtros que deciden si una leccion sube no estan aqui: viven en el archivo de lecciones
globales**, y se leen alli en el momento de cosechar. Y **no se escribe en ese archivo desde dentro
de una auditoria**: una vara que cambia mientras mide deja de comparar.

---

## 8. Cerrar la iteracion, y decidir si hay otra

**Paso 8.** Primero las seis condiciones de cierre de `_phases/040_evol.md` §6, y **todas tienen que ser
ciertas**:

- [ ] **Lo que entro esta construido**, con sus tests y su trazabilidad cerrada en los dos sentidos.
- [ ] **La baseline esta al dia** — se actualizo al cerrar cada unidad incremental, no al final.
- [ ] 🚨 **La ventana de §6 se agoto y se comparo**, con su resultado escrito diga lo que diga.
- [ ] **Cada entrada de deuda que se toco tiene una de las tres decisiones de §5**, y ninguna dice
      «ya veremos».
- [ ] **La lista del «no» de §2 esta actualizada** con lo que se aparto esta vez, con su razon y su
      destino.
- [ ] **La cosecha de §7 esta hecha:** ninguna leccion de esta iteracion queda `Sin evaluar`, y lo
      que quedo `Global candidata` esta ya en el archivo global, con su `D-XXX` y con la version
      nueva del archivo declarada.

Si alguna falla, **la iteracion sigue abierta**.

### Y despues, la decision que casi nadie escribe

> **Se abre otra iteracion mientras exista valor, necesidad, oportunidad e inversion justificada.**

| Condicion | ¿Se cumple? | Con que se sostiene |
|---|---|---|
| **Valor** — lo que queda por anadir vale mas de lo que cuesta | `SI` / `NO` | `<...>` |
| **Necesidad** — alguien concreto lo necesita | `SI` / `NO` | `<...>` |
| **Oportunidad** — es el momento | `SI` / `NO` | `<...>` |
| **Inversion justificada** — quien paga lo sostiene | `SI` / `NO` | `<...>` |

| Campo | Contenido |
|---|---|
| ¿Se abre otra iteracion? | `SI` / `NO` |
| Su `D-XXX` en el registro | `D-XXX` |

🚨 **La decision de NO abrir otra se registra igual que la de abrirla.** Es la que nadie escribe
—porque no produce trabajo, y lo que no produce trabajo no deja rastro— y es justo la que alguien
querra entender dentro de un ano.

| ❌ Inercia | ✅ Decision |
|---|---|
| «abrimos la siguiente porque quedan cosas» | «abrimos la siguiente porque **esto** vale mas de lo que cuesta» |
| la lista de ideas no se vacia nunca | la lista de ideas **no es** el criterio |
| se mide la actividad | se mide el efecto (§6) |

### ⚠️ Si la respuesta es NO: dejar de evolucionar

**No es un fracaso del producto ni del equipo: es la etapa haciendo su trabajo.**

| Campo | Contenido |
|---|---|
| Que condicion dejo de cumplirse | `<...>` |
| A quien se escalo, y cuando | `<nombre — AAAA-MM-DD>` |
| Que se decidio, con sus alternativas descartadas **incluida la de seguir** | `D-XXX` |

1. **No se resuelve buscando algo que construir.** Abrir una iteracion para que el equipo tenga
   trabajo es la forma mas cara de posponer una conversacion.
2. Se **escala**, porque dejar de invertir es una decision de quien patrocina, no de quien construye.

🚨 **Y el producto sigue vivo.** Deja de crecer; no deja de funcionar, ni de mantenerse, ni de usarse.
**Dejar de evolucionar no es cerrar el producto**, y un registro que no distinga las dos cosas hara
que dentro de un ano nadie sepa si aquello se abandono o simplemente estaba terminado.

### El release objetivo, si el negocio lo pide

**Solo si esta iteracion lo alcanza.** Si no, se borra este bloque.

```text
RELEASE OBJETIVO: <nombre para el negocio>
  Definido por:   <que lo define: contrato, estrategia, compromiso>
  Alcanzado en:   <esta iteracion>
  Alcance:        <que actores y que capacidades operan en la aplicacion>
```

📌 **Un release objetivo no cierra el producto.** Despues pueden seguir mas iteraciones. **Es una
etiqueta para el negocio, no un final del ciclo** — y escribirlo asi en el momento de declararlo
evita la conversacion, un ano despues, sobre por que «la version final» sigue cambiando.

---

## 9. Comprobacion antes de cerrar este archivo

- [ ] §1 se escribio **al abrir**, con el recuento de uso derivado de una orden y no de la memoria.
- [ ] §2 tiene una fila por capacidad **con su evidencia concreta**, y la lista del «no» actualizada.
- [ ] Si §2 recupero algo de la lista del «no», su ultima columna dice que evidencia **nueva** lo
      pide.
- [ ] §3 esta rellena o dice `NO` explicitamente.
- [ ] §4 se decidio **antes** de construir, y la fecha lo demuestra.
- [ ] §5 no tiene ni un «ya veremos», y cada aplazamiento lleva quien mira la condicion.
- [ ] 🚨 §6 tiene la declaracion **fechada antes** del primer commit de la capacidad, y su resultado
      escrito al agotarse la ventana.
- [ ] §7 tiene cada fila con su codigo en el registro, y la cosecha hecha.
- [ ] §8 tiene las seis condiciones marcadas y la decision de abrir o no abrir, con su `D-XXX`.
- [ ] **No queda ni un solo `<` en el archivo** — ningun hueco sin rellenar.
- [ ] La seccion «Guia de llenado» de abajo **esta borrada**.
- [ ] La cabecera dice `CERRADA` (o `ABANDONADA`, con §7 explicando por que) y tiene fecha de cierre.

Las mecanicas se comprueban desde fuera:

```bash
grep -n "<" 005_iteration_NNN.md                       # debe no devolver nada
grep -n "Guia de llenado" 005_iteration_NNN.md         # debe no devolver nada
grep -n "^| Estado |" 005_iteration_NNN.md             # debe decir CERRADA o ABANDONADA
grep -c "ya veremos" 005_iteration_NNN.md              # debe ser 0
grep -cE "^(QUE SE ANADE|QUE SE ESPERA|METRICA|VENTANA):" 005_iteration_NNN.md   # debe ser 4
grep -c "NO COMPROBADO" 005_iteration_NNN.md
```

📌 **La cuarta, la quinta y la sexta se publican tal cual salen, tambien cuando son cero:** un
control cuyo resultado no se publica no se distingue de un control que no se corrio.

🚨 **La salida cruda de las seis ordenes va al registro**, no la conclusion.

---
---

## Guia de llenado — ⚠️ BORRAR esta seccion al cerrar el artefacto

> Existe para escribir el archivo. **No sobrevive al cierre de la iteracion.**

### La pregunta que hace todo el trabajo

> **¿Que de esta iteracion sabria alguien que solo tuviera el repositorio?**

Que capacidades se anadieron y en que orden se commitearon. **Nada de por que.** Y en esta etapa el
porque no es un adorno: es **la unica cosa que distingue evolucionar de acumular**. Una funcionalidad
construida porque el uso la pedia y otra construida porque llevaba seis meses en una lista producen
el mismo repositorio — y solo una aumento el valor del producto.

### Cuando se escribe cada seccion

| Seccion | Cuando |
|---|---|
| §1 | en el Paso 1, **antes** de recoger ninguna peticion nueva |
| §2 | en el Paso 2, al decidir el contenido de la iteracion |
| §3 | en el Paso 3, si entra un actor |
| §4 | en el Paso 4, **antes** de construir nada |
| §6, primera mitad | en el Paso 7, **antes** del primer commit de la capacidad |
| §5, §6 segunda mitad, §7 y §8 | en el Paso 8, al cerrar la iteracion |

⏱️ **§6 es la que lo pierde todo si se retrasa.** Una metrica escrita despues de ver los datos no es
una metrica: es una conclusion con formato de metrica, y no hay forma de distinguirlas leyendo el
archivo. Lo unico que las separa es la fecha, y por eso la fecha es un campo.

### Los tres malentendidos que definen esta etapa

| Malentendido | Como suena | Que lo corrige |
|---|---|---|
| **Aprobar el Gate aprobo un plan de producto** | «ahora si, a construirlo todo» | aprobo **seguir invirtiendo**. Cada iteracion es una inversion nueva: §2 pide evidencia por fila |
| **Lo aplazado esta implicitamente aprobado** | «esto ya estaba pedido desde hace meses» | sigue sin haber sido pedido. La tabla de recuperacion de §2 pide evidencia **nueva** |
| **Sin condicion de salida, se sigue siempre** | «siempre hay algo que mejorar» | §8 pide las cuatro condiciones. Dejar de evolucionar es un resultado valido |

### Errores que esta plantilla existe para evitar

| Error | Como suena | Que hacer |
|---|---|---|
| Decidir por opinion porque no hay datos | «se nota que lo usan poco» | §1 pide la orden; si no hay dato, se escribe que no lo hay y se abre su `A-XXX` |
| Incorporar un actor por completitud | «nos falta el supervisor» | §3 pide que ausencia se demostro cara |
| Saltarse el prototipo con la incertidumbre alta | «se ve claro» | §4 pide la razon contra el criterio, y la fecha lo delata |
| Declarar la metrica al final | «midamos como fue» | §6 pide la fecha de declaracion, y se cruza con el primer commit |
| Dejar la ventana pasar en silencio | «ya no viene a cuento» | una iteracion cuya metrica nadie miro es indistinguible de una que fallo |
| Dejar una deuda en «ya veremos» | «lo vemos mas adelante» | §5 tiene tres opciones y ninguna es esa |
| Aplazar con una condicion que nadie mira | «cuando crezca el volumen» | §5 pide **quien** la mira |
| Dejar la cosecha para el final de la etapa | «ya cosecharemos» | esta etapa no tiene final. §7 la hace por iteracion |
| Abrir la siguiente por inercia | «quedan cosas» | §8 pide las cuatro condiciones, una por una |
| No escribir la decision de parar | «simplemente dejamos de sacar versiones» | es la que alguien querra entender dentro de un ano |
| Confundir dejar de evolucionar con cerrar el producto | «se abandono» | son dos cosas distintas, y §8 las separa |

### Lo que esta iteracion tiene PROHIBIDO, y aqui se cuela solo

Al rellenar §2 aparece la tentacion de contar como «pedido por los usuarios» lo que pidio **una**
persona — normalmente la mas cercana, la que mas habla o la que mas manda. El criterio dice
**repetido**, y por varios. Una peticion de uno es informacion util; convertirla en el puesto dos de
la prioridad es como el producto empieza a parecerse a su interlocutor mas ruidoso en vez de a sus
usuarios.

📌 **Y al rellenar §6 aparece la contraria: elegir una metrica que ya se sabe que va a salir bien.**
Una metrica que no puede fallar mide lo mismo que no medir, con el coste anadido de que parece que
se midio.
