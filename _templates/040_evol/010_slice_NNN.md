# Acta de unidad incremental <NNN> — <NOMBRE DEL PROYECTO>

> 📄 **Se copia una vez por unidad incremental de construccion.** El nombre del archivo lleva el
> numero con tres cifras: `010_slice_001.md`, `010_slice_002.md`, … El numero **no se reutiliza**, ni
> siquiera si la unidad se cancela: una unidad cancelada sigue siendo parte de como se llego hasta
> aqui, y su acta es donde consta por que se cancelo.
>
> 🚨 **Es el artefacto que mas veces se escribe en toda la etapa larga, y por eso es el que primero se
> degrada.** A partir de la tercera o la cuarta, la tentacion no es saltarselo: es rellenarlo al
> final, de una sentada, desde el resultado. **Un acta reconstruida se distingue de una escrita al
> paso en una sola cosa** — la reconstruida nunca tiene §5, porque lo que rompio ya se arreglo y se
> olvido.

| Campo | Valor |
|---|---|
| Artefacto | `<carpeta de artefactos de la etapa, segun `project.md`>/010_slice_<NNN>.md` |
| Etapa que lo produce | la etapa de la evolucion, Paso 5 |
| Iteracion a la que pertenece | `005_iteration_<NNN>.md` |
| Codigo de la unidad incremental | `<el que declare la tabla «Codigos» de `project.md`>` |
| Estado | `<ABIERTA · CERRADA · ARRASTRADA · CANCELADA>` |
| Abierta | `<AAAA-MM-DD>` |
| Cerrada | `<AAAA-MM-DD, o «—» mientras siga ABIERTA>` |
| Escrito por | `manager` |

> 🚨 **El codigo sale de `project.md`, y esta plantilla no lo escribe.** No es un descuido: **un
> codigo que aparece en un archivo antes que en esa tabla es un desfase**, y una plantilla que lo
> estrenara estaria decidiendo por un proyecto que aun no lo ha declarado. Si al copiar esta plantilla
> el codigo no existe, se declara ahi primero, con su `D-XXX`.
>
> ⚠️ **Las dos fechas las lee `report_auditor` y las cruza contra el historial de `git`.**

---

## 0. 🚨 La regla que gobierna este archivo entero

> **Este archivo existe porque hay gente que depende de lo que ya funciona, y el `git diff` no
> distingue una capacidad nueva de una capacidad nueva que rompio una vieja.**

Esta etapa no cambia **como** se construye: la mecanica de la etapa del crecimiento se aplica entera
(`_phases/040_evol.md`, Paso 5) —unidades verticales, tareas trazables, un test por escenario,
baseline al cerrar cada unidad—.
Cambia **por que** se construye, y cambia **sobre que**: aqui se toca codigo que ya esta en manos de
usuarios reales.

📌 **De ahi la seccion 4 y su columna de regresion, que la etapa anterior no necesitaba.** Una
capacidad nueva que rompe una vieja no es un avance con un defecto: **es un retroceso con una
funcionalidad al lado.** Y lo peor de una regresion es que casi nunca la encuentra quien la
introdujo.

⛔ **Y lo que no se pudo comprobar se declara NO COMPROBADO, nunca en blanco.** Un hueco vacio se lee
como que no habia nada que decir.

---

## 1. El enunciado, y su trazabilidad hacia atras

| Campo | Contenido |
|---|---|
| Enunciado | `<algo que alguien puede hacer, en una frase>` |
| Actor que lo hace | `<el tipo de actor y el actor concreto>` |
| Necesidad de la que cuelga | `N-XXX` |
| Feature(s) | `FT-XXX` |
| Scenario(s) | `SC-XXX` |
| **La evidencia de uso que la pide** | `<el hallazgo, el dato o la peticion repetida — la misma que §2 de la iteracion>` |

> **Nada se construye sin una razon trazable.** Si esta unidad no puede relacionarse con un scenario,
> una feature o una necesidad, **se cuestiona su inclusion** antes de empezar.

🚨 **La ultima fila es la que esta etapa anade, y no es redundante con las de arriba.** En el
crecimiento, la razon de una unidad era «esta en el alcance del producto minimo» y la trazabilidad
bastaba. Aqui el alcance no viene decidido de antes: la trazabilidad dice **de que cuelga**, y la
evidencia dice **por que ahora**. Sin ella, una unidad perfectamente trazable puede ser igualmente
una idea de alguien.

### La prueba vertical

> **Al terminar, ¿se puede ensenar funcionando en la aplicacion desplegada?**

| Campo | Contenido |
|---|---|
| ¿Pasa la prueba? | `SI` / `NO` |
| Si llevo un «pero», cual fue | `<«si, pero falta la pantalla» → no era vertical, y se recorto asi:>` |

🚨 **Cortar por capas sigue prohibido, y la prohibicion no caduco al pasar el Gate**
(`_phases/040_evol.md` §2)**.** Una unidad horizontal **parece** avance y no lo es: no se puede
demostrar, no se puede validar, y su valor solo aparece cuando llega la ultima pieza.

---

## 2. Las tareas

**Pequenas, especificas, verificables, delimitadas y trazables a esta unidad.**

| Codigo | Tarea | Estado | Test que la respalda |
|---|---|---|---|
| `T-XXX` | `<...>` | `<...>` | `TC-XXX` |
| `T-XXX` | `<...>` | `<...>` | `TC-XXX` |

> La tarea debe ser **lo bastante pequena para que su estado pueda determinarse claramente.**

⚠️ **Una tarea que no cuelga de esta unidad no va aqui.** Si aparece algo necesario que no cuelga de
ninguna, es alcance nuevo: vuelve a §2 del acta de la iteracion, con su evidencia, o se aparta a la
lista del «no».

---

## 3. ¿Hubo prototipo de evolucion?

| Campo | Contenido |
|---|---|
| ¿Se prototipo? | `SI` / `NO` |
| Fecha de la decision | `<AAAA-MM-DD — antes del primer commit de esta unidad>` |
| Por que, contra el criterio | `<incertidumbre × impacto>` |
| Que se pregunto | `<...>` |
| Que se enseno, y a quien | `<...>` |
| Que se decidio | `<y su `D-XXX` si cambio algo del enunciado>` |

📌 **Un boceto, un wireframe o una pantalla estatica bastan.** No tiene la profundidad del prototipo
inicial, y no lo pretende.

⛔ **Un prototipo de evolucion es descartable, pero eso NO exime del test a lo que venga despues.**
Es una herramienta de decision, no un producto. La excepcion a `PI-5` que declaro la etapa del
prototipo **vale para aquella etapa y para el artefacto que nombro**, y no se hereda aqui.

---

## 4. Los tests: uno por escenario, a cada uno se le vio ROJO — y la regresion

**Una fila por escenario de §1.**

| `TC-XXX` | Escenario | ¿Se le vio ROJO antes de verde? | ¿Que fallo cuando estaba en rojo? |
|---|---|---|---|
| `TC-XXX` | `SC-XXX` | `SI` / `NO` | `<el mensaje o el sintoma; si no se recuerda, NO COMPROBADO>` |

🚨 **Un test escrito para pasar no cuenta.** Un test que no puede fallar es documentacion disfrazada
de evidencia — mas cara que no tenerlo, porque ademas da confianza. La ultima columna es lo unico que
distingue las dos cosas, y no se puede reconstruir despues.

### 🚨 La regresion — lo que esta etapa anade y la anterior no tenia

| Campo | Contenido |
|---|---|
| La bateria completa se corrio **antes** de tocar nada | `SI` / `NO` — `<numero de tests, y cuantos en verde>` |
| La bateria completa se corrio **al cerrar** | `SI` / `NO` — `<numero de tests, y cuantos en verde>` |
| ¿Algun test que pasaba dejo de pasar? | `SI` / `NO` |
| Si `SI`: cual, por que, y que se hizo | `<...>` |

```
<PEGA AQUI la orden que corre la bateria y su salida cruda, las DOS veces: antes y al cerrar.>
```

> **Una regresion es un test que existia y dejo de pasar** — y eso solo funciona si el test detectaba
> algo de verdad. Los dos recuentos van pegados porque su diferencia es la informacion: una bateria
> que crecio en tres y perdio uno no se ve en el numero final.

⛔ **Si un test que pasaba dejo de pasar y se toco el TEST en vez del codigo, se escribe aqui con
esas palabras**, con la razon. Ajustar el test para que vuelva a pasar es la forma mas silenciosa de
convertir un retroceso en un avance sobre el papel.

---

## 5. Que rompio, y que enseno

**Se escribe al paso, no al final. Es la seccion que una acta reconstruida nunca tiene.**

| Que ocurrio | Donde quedo registrado |
|---|---|
| `<un limite que solo aparece con este volumen>` | `C-XXX` |
| `<un supuesto que esta unidad tumbo, ya con usuarios encima>` | `A-XXX`, marcado como refutado |
| `<algo que fallo y se corrigio, o una practica que funciono>` | `L-XXX` |
| `<una decision cara de revertir que la construccion obligo a tomar>` | `<la decision arquitectonica, mas su `D-XXX`>` |

⚠️ **Si esta seccion esta vacia, mirala otra vez.** Es posible y ocurre; tambien es el aspecto que
tiene un acta rellenada al final desde el resultado.

### La ampliacion de arquitectura, si la hubo

| Campo | Contenido |
|---|---|
| ¿Esta unidad **obligo** a ampliar la arquitectura? | `SI` / `NO` |
| Que se anadio, y por que no cabia en lo que habia | `<...>` |
| Su decision registrada | `<la decision arquitectonica, mas su `D-XXX`>` |

🚨 **«Obligo» es la palabra, y se toma en serio.** La arquitectura se amplia cuando una capacidad no
cabe, no cuando cabria mejor de otra forma. Refactorizar lo que funciona esta prohibido por `PI-3`, y
en esta etapa lo que funciona lo esta usando alguien.

### La deuda que esta unidad dejo a proposito

| `DT-XXX` | Que se dejo a medias | Por que se acepto ahora | Que se rompe al pagarla |
|---|---|---|---|
| `DT-XXX` | `<...>` | `<...>` | `<...>` |

📌 **La deuda se anota con la unidad incremental que la genero.** Sin eso, dentro de unos meses hay
una lista de deudas sin dueno, y nadie sabe que se rompe al pagarlas ni por que se contrajeron.

---

## 6. Cerrar la unidad: la baseline, documento a documento

**Se actualiza AL CERRAR ESTA UNIDAD, no al final de la iteracion.**

| Documento de la baseline | ¿Lo toco esta unidad? | Que cambio |
|---|---|---|
| Documento de producto | `SI` / `NO` | `<...>` |
| Comportamiento (features y scenarios) | `SI` / `NO` | `<...>` |
| Especificacion | `SI` / `NO` | `<...>` |
| Arquitectura | `SI` / `NO` | `<...>` |
| Decisiones arquitectonicas | `SI` / `NO` | `<...>` |
| Trazabilidad | `SI` / `NO` | `<...>` |

🚨 **La trazabilidad cierra en los dos sentidos, y se comprueba en los dos.** Hacia adelante:
«¿como se implemento esta necesidad?». Hacia atras: «¿por que estamos construyendo esto?». **Esta
etapa no es zona franca**: la trazabilidad no se relaja porque el producto ya este en produccion.

```
<PEGA AQUI la orden que comprueba que esta unidad aparece en la trazabilidad, y su salida cruda.>
```

⚠️ **Actualizar la baseline «cuando acabe la iteracion» es como se pierde.** Al cerrar la tercera
unidad ya nadie recuerda que cambio en la primera, y lo que se escribe entonces es un resumen del
codigo, no de las decisiones.

---

## 7. Comprobacion antes de cerrar este archivo

- [ ] §1 tiene la trazabilidad hacia atras completa **y** la evidencia de uso que la pide.
- [ ] §1 pasa la prueba vertical, o dice como se recorto.
- [ ] §2 no tiene ni una tarea que no cuelgue de esta unidad.
- [ ] §3 esta rellena o dice `NO`, y su fecha es **anterior** al primer commit de la unidad.
- [ ] §4 tiene una fila por escenario, y la columna del ROJO esta contestada en todas.
- [ ] 🚨 §4 publica los **dos** recuentos de la bateria —antes y al cerrar— con su salida cruda.
- [ ] §5 tiene cada fila con su codigo en el registro, y ese codigo existe.
- [ ] §6 esta rellena documento a documento, y se hizo **al cerrar esta unidad**.
- [ ] **No queda ni un solo `<` en el archivo** — ningun hueco sin rellenar.
- [ ] La seccion «Guia de llenado» de abajo **esta borrada**.
- [ ] La cabecera dice `CERRADA` (o `ARRASTRADA` / `CANCELADA`, con §5 explicando por que) y tiene
      fecha de cierre.

Las mecanicas se comprueban desde fuera:

```bash
grep -n "<" 010_slice_NNN.md                        # debe no devolver nada
grep -n "Guia de llenado" 010_slice_NNN.md          # debe no devolver nada
grep -n "^| Estado |" 010_slice_NNN.md              # debe decir CERRADA, ARRASTRADA o CANCELADA
sed -n '/^## 4\./,/^## 5\./p' 010_slice_NNN.md | grep -c '| `NO` |'
grep -c "NO COMPROBADO" 010_slice_NNN.md
```

📌 **La cuarta y la quinta se publican tal cual salen, tambien cuando son cero:** un control cuyo
resultado no se publica no se distingue de un control que no se corrio.

🚨 **La salida cruda de las cinco ordenes va al registro**, no la conclusion.

---
---

## Guia de llenado — ⚠️ BORRAR esta seccion al cerrar el artefacto

> Existe para escribir el archivo. **No sobrevive al cierre de la unidad.**

### La pregunta que hace todo el trabajo

> **¿Que de esta unidad sabria alguien que solo tuviera el repositorio?**

Que codigo se escribio, y que hay unos tests que pasan. **Nada de si esos tests llegaron a fallar
alguna vez, ni de que dejo de funcionar por el camino, ni de por que esta capacidad y no otra.**

### Las cuatro parejas indistinguibles en el diff

| Parece lo mismo | Y no lo es |
|---|---|
| un test que se vio en rojo y uno que siempre estuvo verde | el segundo no prueba nada |
| una unidad vertical y una vertical sobre el papel construida por capas | la segunda no se puede ensenar |
| una baseline actualizada al cerrar la unidad y una actualizada al final | la segunda es un resumen del codigo |
| una bateria que sigue verde y una a la que se le ajusto un test | la segunda oculta una regresion |

### Cuando se escribe cada seccion

| Seccion | Cuando |
|---|---|
| §1 y §2 | **antes** de escribir la primera linea de codigo |
| §3 | **antes** de construir, si hubo prototipo |
| §4, primera mitad | al escribir cada test, con el rojo delante |
| §4, la regresion | la bateria «antes» al abrir; la «al cerrar», al cerrar |
| §5 | **al paso**, cada vez que algo rompe o ensena |
| §6 | al cerrar la unidad, no al cerrar la iteracion |

⏱️ **§5 es la que se pierde entera si se deja para el final.** Lo que rompio se arregla en veinte
minutos y se olvida en dos dias, y es exactamente la informacion que la etapa larga necesita
conservar.

### Errores que esta plantilla existe para evitar

| Error | Como suena | Que hacer |
|---|---|---|
| Escribir el test despues del codigo, en verde | «ya funciona, le pongo el test» | §4 pide que fallo cuando estaba en rojo |
| Correr la bateria solo al final | «esta todo verde» | sin el recuento «antes», una regresion se esconde en el numero |
| Ajustar el test que dejo de pasar | «el test estaba mal» | puede ser cierto; se escribe con esas palabras y su razon |
| Cortar por capas | «primero el backend de todo» | la prohibicion no caduco al pasar el Gate |
| Ampliar la arquitectura porque queda mejor | «ya que estamos» | «obligo» es la palabra; `PI-3` prohibe refactorizar lo que funciona |
| Actualizar la baseline al final | «lo dejo para el cierre» | §6 va al cerrar **esta** unidad |
| Construir sin la evidencia que lo pide | «estaba en la lista» | §1 pide la evidencia, no solo la trazabilidad |
| Dejar §5 vacia | «no rompio nada» | si de verdad no hubo nada, se escribe con esas palabras |
| Amparar el codigo en la excepcion del prototipo | «esto es un prototipo» | esa excepcion no se hereda, y esta etapa no declara ninguna |

### Lo que esta unidad tiene PROHIBIDO, y aqui se cuela solo

Al rellenar §6 aparece la tentacion de marcar `NO` en todas las filas «porque el cambio era pequeno».
Un cambio que no toca ni un documento de la baseline es casi siempre uno de dos: o no anadio nada que
alguien pueda usar —y entonces no era una unidad incremental—, o si lo anadio y la baseline acaba de
quedarse por detras del producto. **La segunda es como una baseline deja de servir: no de golpe, sino
una unidad pequena cada vez.**

📌 **Y al rellenar §4 aparece la contraria: dar por buena la bateria porque el numero final es
verde.** Lo que importa no es el numero final, es la **diferencia** entre los dos — y por eso los dos
van pegados, con su orden y su salida cruda.
