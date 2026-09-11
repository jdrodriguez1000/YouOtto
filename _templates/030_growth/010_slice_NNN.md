# Acta de slice <NNN> — <NOMBRE DEL PROYECTO>

> 📄 **Se copia una vez por unidad incremental de construccion.** El nombre del archivo lleva el
> numero con tres cifras: `010_slice_001.md`, `010_slice_002.md`, … El numero **no se reutiliza**, ni
> siquiera si la slice se cancela: una slice cancelada sigue siendo parte de como se llego hasta
> aqui, y su acta es donde consta por que se canceló.
>
> 🚨 **Es el artefacto que mas veces se escribe en todo el metodo, y por eso es el que primero se
> degrada.** A partir de la tercera o la cuarta, la tentacion no es saltarselo: es rellenarlo al
> final, de una sentada, desde el resultado. **Un acta reconstruida se distingue de una escrita al
> paso en una sola cosa** — la reconstruida nunca tiene §4, porque lo que rompio ya se arreglo y se
> olvido.

| Campo | Valor |
|---|---|
| Artefacto | `030_growth/010_slice_<NNN>.md` |
| Etapa que lo produce | `030_growth`, Pasos 2 a 7 |
| Iteracion a la que pertenece | `005_iteration_<NNN>.md` |
| Codigo de slice | `<el que declare la tabla «Codigos» de `project.md`>` |
| Estado | `<ABIERTA · CERRADA · ARRASTRADA · CANCELADA>` |
| Abierta | `<AAAA-MM-DD>` |
| Cerrada | `<AAAA-MM-DD, o «—» mientras siga ABIERTA>` |
| Escrito por | `manager` |

> 🚨 **El codigo de slice sale de `project.md`, y esta plantilla no lo escribe.** No es un descuido:
> **un codigo que aparece en un archivo antes que en esa tabla es un desfase**, y una plantilla que
> lo estrenara estaria declarando por un proyecto que aun no lo ha decidido. Si al copiar esta
> plantilla el codigo no existe, se declara ahi primero, con su `D-XXX`.
>
> ⚠️ **Las dos fechas las lee `report_auditor` y las cruza contra el historial de `git`.**

---

## 0. 🚨 La regla que gobierna este archivo entero

> **Este archivo existe porque el `git diff` no distingue un test que se vio en rojo de uno que
> siempre estuvo verde.**

Son el mismo archivo. Y lo mismo pasa con una slice cortada en vertical y una cortada en vertical
sobre el papel pero ejecutada por capas, con una baseline actualizada al cerrar la slice y una
actualizada de memoria dos semanas despues, y con una deuda contraida a proposito y una encontrada
por la auditoria. **Todas esas parejas se ven identicas cuando la slice termina** — y en cada una,
una mitad prueba algo y la otra no.

📌 **Por eso aqui no se escriben conclusiones: se pegan salidas.** «Se probo», «funciona», «quedo
cubierto» son veredictos. Lo que alimenta una auditoria es **la orden ejecutada literal y lo que
devolvio**, tal cual salio.

⛔ **Y lo que no se pudo comprobar se declara NO COMPROBADO, nunca en blanco.**

---

## 1. El enunciado, y su trazabilidad hacia atras

**Se escribe en el Paso 2, ANTES de descomponer en tareas.**

| Campo | Contenido |
|---|---|
| Enunciado | `<algo que alguien puede HACER: «pedir una recogida», «ver lo que pedi»>` |
| Feature(s) de las que sale | `FT-XXX` `<, FT-XXX…>` |
| Escenario(s) que implementa | `SC-XXX` `<, SC-XXX…>` |
| Necesidad(es) de las que cuelga | `N-XXX` `<, N-XXX…>` |
| Actor que la usa | `<el tipo de actor, no el cargo>` |

🚨 **El enunciado dice lo que alguien puede hacer, no lo que existe.** «Entidad y almacenamiento de
la solicitud» no es una slice: es una capa con nombre de slice.

| ❌ | ✅ |
|---|---|
| «entidad y almacenamiento de la solicitud» | «pedir una recogida» |
| «capa de consulta» | «ver lo que pedi» |

📌 **Una slice puede contener una feature, varias, o parte de una grande.** Lo que manda para cortar
no es la feature: es que el resultado sea **demostrable**.

⚠️ **Si alguna de las cuatro primeras filas se queda vacia, la slice es huerfana y se cuestiona antes
de construirla** — no despues. Nada se construye sin una razon trazable, y el desbordamiento del
alcance no llega de golpe: llega en trabajo suelto que cada vez parecia razonable.

### La prueba vertical

> **Al terminar la slice, ¿se puede ensenar funcionando en la aplicacion desplegada?**

| Campo | Contenido |
|---|---|
| ¿Pasa la prueba? | `SI` / `NO` |
| Si llevo un «pero», cual | `<«si, pero falta la pantalla» / «si, pero todavia no guarda»>` |
| Como se recorto para que pasara | `<o «no hizo falta»>` |

🚨 **Un «si, pero» es un `NO`.** Una slice horizontal **parece** avance: no se puede demostrar, no se
puede validar, y su valor solo aparece cuando llega la ultima pieza.

---

## 2. Las tareas

**Paso 3.** Pequenas, especificas, verificables, delimitadas, **y todas colgando de esta slice**.

| # | Codigo de tarea | Que hace | Capa que toca | Estado |
|---|---|---|---|---|
| 1 | `<codigo>` | `<crear la entidad>` | `<...>` | `<HECHA · PENDIENTE · DESCARTADA>` |
| 2 | `<codigo>` | `<crear el almacenamiento>` | `<...>` | `<...>` |
| 3 | `<codigo>` | `<crear el servicio>` | `<...>` | `<...>` |
| 4 | `<codigo>` | `<crear el formulario>` | `<...>` | `<...>` |
| 5 | `<codigo>` | `<escribir los tests de sus escenarios>` | `<...>` | `<...>` |

> 🚨 **Donde se registran estas tareas y con que codigo lo dice `project.md`, no esta plantilla.** Es
> la decision que un proyecto tiene que tener tomada **antes** de escribir la primera: quien descubre
> a mitad de la tercera slice que tiene dos registros de tareas ya no puede unificarlos sin
> reescribir historia.
>
> ⚠️ **Y hay un choque de prefijos que conviene mirar antes de copiar esta plantilla.** La guia de
> metodo asigna a la tarea de producto la misma inicial que muchos registros de jornada ya usan para
> su propia tarea. Un prefijo que significa dos cosas segun el archivo en el que aparece hace
> ilegible justo lo que la trazabilidad existe para poder leer. **Se contrasta contra la tabla
> «Codigos» antes de escribir el primero**, y lo que salga se registra con su `D-XXX`.

> **La prueba del tamano:** si no se puede decir sin dudar si una tarea esta hecha o no, es demasiado
> grande. Se divide.

🚨 **Una tarea que no cuelga de esta slice no va en esta tabla.** O se ata a una slice, o se registra
como deuda con su razon, o no se hace.

⚠️ **Y aqui es donde el corte horizontal vuelve a entrar por la puerta de atras.** El corte de §1
puede ser impecable y la ejecucion no: hacer primero las cuatro tareas de datos «para no ir
saltando» deja la slice, al tercer dia, sin poder ensenarse. **La slice no se da por avanzada porque
una capa este lista**: se avanza cuando el camino llega un poco mas lejos.

---

## 3. ¿Hizo falta un prototipo de evolucion?

**Se decide en el Paso 4, ANTES de construir.** Decidido despues, la respuesta siempre es que no
hacia falta — porque ya esta construido.

| Campo | Contenido |
|---|---|
| Nivel de incertidumbre | `<ALTO · MEDIO · BAJO>` |
| Impacto de equivocarse | `<ALTO · MEDIO · BAJO>` |
| ¿Se prototipo? | `SI` / `NO` |
| Fecha de la decision | `<AAAA-MM-DD — antes de la primera linea de codigo>` |

| Si, prototipar | No hace falta |
|---|---|
| comportamiento que nadie ha visto todavia | un cambio simple |
| varias alternativas funcionales sobre la mesa | un cambio visual menor |
| alto riesgo de que se rechace | una funcionalidad ya validada |
| entra un actor nuevo | una correccion ya definida |
| interaccion entre varios actores | |

**Si se prototipo:**

| Campo | Contenido |
|---|---|
| Que forma tuvo | `<boceto · wireframe · pantalla cliqueable · simulacion>` |
| Que se aprendio | `<...>` |
| Que cambio en la slice por haberlo hecho | `<si no cambio nada, dilo: es un dato>` |

🚨 **Un prototipo de evolucion NO abre una etapa nueva.** Es una herramienta que se usa **dentro** de
esta. La slice sigue siendo la unidad, y el prototipo es un paso suyo.

📌 **El metodo no busca convertir el prototipado en burocracia.** La mayoria de las slices no lo
necesitan, y obligar a prototipar todas es la forma mas rapida de que se deje de prototipar tambien
lo que si hacia falta. **Un `NO` razonado en esta seccion es un resultado correcto y frecuente.**

---

## 4. Los tests: uno por escenario, y a cada uno se le vio ROJO

**Paso 6.** Una fila por escenario que la slice implementa. **Como minimo uno por escenario**: los
casos de error y los bordes pueden pedir mas.

| # | Escenario | Codigo del test | Como se rompio para verlo en rojo | Fecha del rojo |
|---|---|---|---|---|
| 1 | `SC-XXX` | `<codigo>` | `<que se apago o que se cambio>` | `<AAAA-MM-DD>` |
| 2 | `SC-XXX` | `<codigo>` | `<...>` | `<...>` |

**Rojo — la salida cruda, con el comportamiento roto a proposito:**

```
<PEGA AQUI el comando y su salida en ROJO, para cada test.>
```

**Verde — la salida cruda, con el comportamiento implementado:**

```
<PEGA AQUI el mismo comando y su salida en VERDE.>
```

🚨 **Los dos bloques van, y en este orden.** Solo el verde es un test que nadie ha visto fallar —
`CLAUDE.md`: «un test escrito para pasar no cuenta». **Y aqui la regla se cobra decenas de veces, no
una**: es lo unico que distingue un test que vigila de un test que acompana.

⚠️ **El rojo tiene que ser el rojo correcto.** Un test que falla porque el entorno de pruebas no
arranca da el mismo rojo que uno que falla porque el comportamiento no esta — y solo el segundo
prueba algo. Si el rojo no se distingue, se rompe otra cosa y se repite.

⚠️ **El coste de esta regla baja con cada slice, y por eso se cumple al principio o no se cumple
nunca.** El mecanismo entero se pago en la etapa del esqueleto. A partir de la segunda slice, ver un
test en rojo cuesta un minuto; saltarselo no ahorra tiempo, ahorra incomodidad.

### 🚨 Si algun test estaba en rojo y se toco el test

| Campo | Contenido |
|---|---|
| ¿Se modifico algun test existente? | `SI` / `NO` |
| Que criterio cambio | `<el criterio, no el sintoma>` |
| Quien lo autorizo | `<nombre>` |
| Donde quedo registrado | `D-XXX` |

⛔ **Un test en rojo es informacion. Cambiarlo para que pase no arregla nada: destruye el dato y deja
el verde.** Un test solo cambia cuando **el criterio cambio**; si el criterio no cambio, el que esta
mal es el codigo.

📌 **Un test modificado en la misma pasada que el codigo que debia vigilar deja de ser un testigo: es
la misma mano firmando las dos declaraciones.** Y no hay ninguna senal que lo distinga de un arreglo
legitimo — las dos cosas dejan el mismo verde. Por eso esta subseccion pide un nombre y un `D-XXX`.

---

## 5. Que rompio, y que enseno

**Se escribe MIENTRAS se construye, no al cerrar.** Es la seccion mas valiosa del archivo y la que
mas se deja para el final; reconstruida, de todo esto queda «hubo algun problema».

| # | Que rompio o que sorprendio | Por que (la causa real, no la primera sospecha) | Donde quedo registrado |
|---|---|---|---|
| 1 | `<sintoma>` | `<...>` | `C-XXX` / `A-XXX` refutado / `L-XXX` / `DT-XXX` |
| 2 | `<...>` | `<...>` | `<...>` |

⚠️ **Si esta tabla esta vacia, dilo con esas palabras: «no rompio nada».** Es un resultado posible y
poco frecuente, y se publica igual — un hueco vacio no se distingue de una slice que nadie registro.

🚨 **Cada fila de la tercera columna tiene que existir en el registro.** Un limite del entorno que
solo esta escrito aqui no lo va a encontrar nadie.

### La deuda que esta slice dejo a proposito

| Codigo | Que se dejo a medias | Por que se dejo | Que se rompe al pagarla |
|---|---|---|---|
| `DT-XXX` | `<...>` | `<la razon, no «no dio tiempo» a secas>` | `<...>` |

🚨 **Una deuda que la auditoria encuentra y no estaba escrita pesa mas que la deuda misma.** La
primera es un atajo con su razon; la segunda es un registro que no se puede creer — y entonces lo que
queda en duda no es esa entrada, son todas.

📌 **La deuda se anota con la slice que la genero.** Sin eso, dentro de dos meses hay una lista de
deudas sin dueno, y nadie sabe que se rompe al pagarlas ni por que se contrajeron.

---

## 6. Cerrar la slice: la baseline, documento a documento

**Paso 7, ANTES de abrir la siguiente slice.** **Toda slice ensena algo.**

| Documento de la baseline | ¿Se toco? | Que cambio, o por que no hizo falta |
|---|---|---|
| el de arquitectura | `SI` / `NO` | `<se toca solo si la slice OBLIGO a ampliar la Arquitectura Incremental>` |
| el de especificacion | `SI` / `NO` | `<aparecio una regla, un dato o una validacion que no estaba>` |
| el de escenarios | `SI` / `NO` | `<el comportamiento real difiere de lo escrito>` |
| las decisiones arquitectonicas | `SI` / `NO` | `<se tomo una decision cara de revertir>` |
| el de trazabilidad | `SI` / `NO` | 🚨 `<se anaden los eslabones que la slice cierra: slice → tareas → tests>` |

🚨 **La ultima fila casi nunca puede decir `NO`.** Si la slice existio, cerro eslabones; si el
documento de trazabilidad no los tiene, la trazabilidad no cierra en los dos sentidos y la condicion
de salida de la etapa falla — pero eso no se descubre hasta el final.

🔑 **Este paso es el que hace que la documentacion sea incremental en vez de obsoleta.** Si se salta,
la baseline envejece en silencio y dentro de dos iteraciones nadie se fia de ella — que es peor que
no tenerla, porque parece que la tienes.

⚠️ **Y no se acumula «para actualizarlo todo al cerrar la iteracion».** Lo acumulado se reconstruye, y
lo reconstruido documenta el resultado en vez de lo aprendido: al diff solo llega el estado final,
nunca el camino.

⚠️ **Ampliar la arquitectura por anticipado esta prohibido.** Crece cuando una slice **obliga**, no
cuando parece que hara falta. Un `NO` en la primera fila es lo normal.

---

## 7. Comprobacion antes de cerrar este archivo

- [ ] §1 tiene sus cuatro filas de trazabilidad rellenas, y ninguna dice «pendiente».
- [ ] §1 pasa la prueba vertical, o dice como se recorto para pasarla.
- [ ] §2 no tiene ninguna tarea que no cuelgue de esta slice.
- [ ] §3 lleva **fecha anterior** al primer commit de codigo de la slice.
- [ ] §4 tiene **una fila por escenario** y **los dos bloques**, rojo y verde, con la salida cruda.
- [ ] §4 dice, para cada test, **como se rompio** para verlo en rojo.
- [ ] Si se modifico un test existente, §4 tiene su criterio, su autorizacion y su `D-XXX`.
- [ ] §5 esta escrita o dice «no rompio nada» con esas palabras, y cada fila tiene su codigo en el
      registro.
- [ ] §6 tiene una marca por documento, y la fila de trazabilidad no dice `NO`.
- [ ] **No queda ni un solo `<` en el archivo** — ningun hueco sin rellenar.
- [ ] La seccion «Guia de llenado» de abajo **esta borrada**.
- [ ] La cabecera dice `CERRADA` y tiene fecha de cierre.

Las mecanicas se comprueban desde fuera:

```bash
grep -n "<" 030_growth/010_slice_NNN.md                   # debe no devolver nada
grep -n "Guia de llenado" 030_growth/010_slice_NNN.md     # debe no devolver nada
grep -n "^| Estado |" 030_growth/010_slice_NNN.md         # debe decir CERRADA
sed -n '/^## 4\./,/^## 5\./p' 030_growth/010_slice_NNN.md | grep -c 'PEGA AQUI'
sed -n '/^## 6\./,/^## 7\./p' 030_growth/010_slice_NNN.md | grep -c 'trazabilidad | `NO`'
grep -c "NO COMPROBADO" 030_growth/010_slice_NNN.md
```

📌 **La cuarta debe devolver `0`** (los dos bloques de rojo y verde estan pegados, no vacios), **y la
quinta y la sexta tambien.** Se publican tal cual salen, tambien cuando son cero.

🚨 **La salida cruda de las seis ordenes va al registro**, no la conclusion.

---
---

## Guia de llenado — ⚠️ BORRAR esta seccion al cerrar el artefacto

> Existe para escribir el archivo. **No sobrevive al cierre de la slice.**

### La pregunta que hace todo el trabajo

> **¿Que de esta slice sabria alguien que solo tuviera el repositorio?**

El codigo que quedo. No el que se descarto, no lo que rompio por el camino, no si al test se le vio
rojo, y no por que la slice se corto asi y no de otra forma. **Eso es lo unico que no se puede
reconstruir despues** — y es lo que esta acta existe para conservar.

### Las cuatro parejas indistinguibles

Cada seccion existe para separar una pareja que, cuando la slice termina, se ve identica:

| Se ven igual | Solo una prueba algo | Que seccion las separa |
|---|---|---|
| un test que se vio rojo y uno que siempre estuvo verde | el que se vio rojo | §4 |
| una slice cortada vertical y una ejecutada por capas | la que se puede ensenar a mitad | §1 y §2 |
| una deuda contraida a proposito y una encontrada por la auditoria | la declarada | §5 |
| una baseline actualizada al cerrar y una actualizada de memoria dos semanas despues | la del momento | §6 |

🚨 **En las cuatro, la mitad que no prueba nada es la que sale mas barata y la que da el mismo
verde.** Ese es el argumento entero de este archivo.

### Cuando se escribe cada seccion

| Seccion | Cuando |
|---|---|
| §1 | en el Paso 2, **antes** de descomponer en tareas |
| §2 | en el Paso 3, y se va marcando al construir |
| §3 | en el Paso 4, **antes** de la primera linea de codigo |
| §4 | en el Paso 6, con el rojo pegado **el dia que se vio** |
| §5 | **mientras se construye**, fila a fila |
| §6 | en el Paso 7, antes de abrir la siguiente slice |

⏱️ **§5 es la que mas se pierde.** Un problema se resuelve y se olvida el mismo dia; al cabo de una
semana nadie recuerda cual era la causa real, solo que «al final funciono».

### Errores que esta plantilla existe para evitar

| Error | Como suena | Que hacer |
|---|---|---|
| Enunciar la slice como una cosa | «entidad de solicitud» | se enuncia como algo que alguien puede hacer |
| Ejecutar por capas una slice vertical | «hago primero todo lo de datos y no salto» | §2 pide la capa de cada tarea; si van todas seguidas, mirar |
| Decidir el prototipo despues | «ya vimos que no hacia falta» | §3 lleva fecha y se cruza con el primer commit |
| Escribir el test despues del codigo que ya funcionaba | «lo cubro ahora» | no ha demostrado que detecte nada, solo que se ejecuta |
| Aceptar el rojo equivocado | «fallo, luego sirve» | tiene que fallar por lo que se rompio |
| Tocar el test para que pase | «es que el test estaba mal» | solo si el criterio cambio, con nombre y `D-XXX` |
| Dejar §5 vacia | — | «no rompio nada», con esas palabras |
| Acumular §6 para el final de la iteracion | «lo actualizo todo junto» | reconstruido documenta el resultado, no lo aprendido |
| Ampliar la arquitectura «ya que estamos» | «lo vamos a necesitar» | crece cuando una slice obliga |

### Lo que esta slice tiene PROHIBIDO, y aqui se cuela solo

Al rellenar §2 aparece la tentacion de meter tareas que **hacen falta** pero no cuelgan de la slice:
una limpieza, un ajuste de otra pantalla, una mejora vista de paso. No van. O se atan a una slice, o
se registran como deuda con su razon, o no se hacen.

📌 **Y si la slice acabo tocando features de actores que quedaron fuera del producto minimo, esa es
la informacion mas util que puede dar esta acta** — porque significa que el alcance se amplio sin
decidirlo, y el alcance del producto minimo se decidio en la baseline y **no se amplia aqui**.
