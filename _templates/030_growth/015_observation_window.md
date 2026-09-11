# Declaracion de la ventana de observacion — <NOMBRE DEL PROYECTO>

> 📄 **Se copia una sola vez por producto minimo.** No lleva numero: no hay una ventana por
> iteracion, hay **una ventana**, la del producto minimo entero.
>
> 🚨 **Es el unico artefacto de todo el metodo cuyo valor esta en CUANDO se escribio, no en lo que
> dice.** Los otros se pueden reunir despues; este no. Escrito antes del primer dato es un criterio;
> escrito despues, es una conclusion con formato de criterio — y entonces el Gate que cierra la etapa
> **no se puede correr**.

| Campo | Valor |
|---|---|
| Artefacto | `030_growth/015_observation_window.md` |
| Etapa que lo produce | `030_growth`, §6 |
| Estado | `<DECLARADA · EN OBSERVACION · CERRADA>` |
| Fecha de la declaracion | `<AAAA-MM-DD — ANTES de que empiece el uso real>` |
| Fecha del primer dato recibido | `<AAAA-MM-DD, o «—» mientras no haya empezado>` |
| Escrito por | `manager` |
| Declaracion firmada por | `<NOMBRE DE QUIEN PATROCINA>` |

> 🚨 **Las dos primeras fechas las lee `report_auditor` y las cruza contra el historial de `git`.** Si
> el commit que introduce este archivo es posterior al primer dato de uso, **la ventana no se
> declaro: se describio**, y eso es en si mismo un hallazgo.
>
> 🚨 **La ultima fila lleva un nombre, y no es una formalidad.** El umbral es la barrera que puede
> dar un «no» a la inversion siguiente. Quien la fija tiene que ser quien responde por esa inversion
> — no quien construyo lo que se va a medir.

---

## 0. 🚨 La regla que gobierna este archivo entero

> **Medir hasta que el numero guste no es medir: es elegir el resultado.**

Y alargar la ventana «un par de semanas mas, que va mejorando» es exactamente eso con otra ropa.

🔑 **Un Gate existe para poder dar un «no».** Si la metrica, la ventana o el umbral se eligen despues
de ver los datos, lo que queda al final no es una barrera de inversion: es una justificacion. Y una
justificacion no puede dar «no» — con lo cual el Gate deja de existir aunque se celebre la reunion.

⛔ **Lo que no se pudo medir se declara NO MEDIDO, nunca en blanco ni como cero.** Un hueco vacio se
lee como «nadie lo uso»; «no medido» se lee como lo que es — que el mecanismo de observacion no lo
capturo.

---

## 1. Las tres cosas, fijadas con los datos aun sin llegar

**Se escribe ANTES de que empiece el uso real.** Las tres, en la misma pasada.

| | Que se fija | Valor |
|---|---|---|
| **Metrica** | la que la baseline declaro, **sin cambiarla** | `<la metrica, enunciada de forma que solo admita un valor>` |
| **Ventana** | desde cuando hasta cuando se observa, en **fechas absolutas** | `<AAAA-MM-DD a AAAA-MM-DD>` |
| **Umbral** | que valor cuenta como adopcion | `<el numero y su unidad>` |

**Y las tres preguntas que evitan que sean tres frases bonitas:**

| Pregunta | Respuesta |
|---|---|
| ¿De donde sale el dato? | `<el registro de ejecucion que la etapa del esqueleto monto y las slices usaron>` |
| ¿Con que orden se extrae? | `<la orden literal, escrita ahora y no cuando toque medir>` |
| ¿Que valor tiene hoy, antes de empezar? | `<el punto de partida — normalmente cero, y se publica igual>` |

```
<PEGA AQUI la orden de extraccion y su salida cruda de HOY, con la ventana aun sin abrir.>
```

🚨 **La orden de extraccion se escribe ahora, no cuando toque medir.** Una metrica cuya forma de
obtenerse se decide al final se puede obtener de varias formas, y se elegira la que salga mejor.
Escrita antes, solo hay una.

⚠️ **La metrica sale de la baseline y no se cambia aqui.** Si al llegar a este punto resulta que la
baseline no declaro ninguna, eso **no se resuelve inventandola**: es un hallazgo, se registra como
`A-XXX` o `C-XXX` y se escala, porque significa que el Gate anterior autorizo una inversion sin decir
como se iba a saber si funciono.

📌 **La metrica exacta depende del producto** — usuarios activos, frecuencia, transacciones,
porcentaje de adopcion, recurrencia, retencion, reduccion de trabajo, cumplimiento de objetivos. Lo
que no depende del producto es que **se define antes de medir, no despues**.

---

## 2. Que hace que este enunciado no admita dos lecturas

Un umbral discutible el ultimo dia no es un umbral. Se cierran ahora las cuatro rendijas por las que
se cuela la discusion:

| Rendija | Como se cierra aqui |
|---|---|
| **Quien cuenta** | `<que usuarios entran en la cuenta y cuales no: pruebas internas, cuentas del equipo, usuarios de demostracion>` |
| **Que cuenta como uso** | `<abrir la aplicacion no es usarla; se dice que accion concreta cuenta>` |
| **Como se agrega** | `<total, media, mediana, por semana, por usuario — una sola forma>` |
| **Que se hace con los dias sin datos** | `<cuentan como cero, o se excluyen, y por que>` |

🚨 **Estas cuatro filas son las que deciden el resultado en la practica, mucho mas que el numero del
umbral.** Un mismo dato bruto da «adopcion del 70%» o «del 30%» segun quien entre en el denominador
— y esa eleccion, hecha el ultimo dia, la hace quien ya sabe cual de las dos le conviene.

---

## 3. El uso real: donde, con quien, y desde cuando

| Campo | Contenido |
|---|---|
| ¿Esta desplegado donde va a vivir el producto? | `SI` / `NO` |
| ¿Hay usuarios reales, no del equipo? | `SI` / `NO` — `<cuantos>` |
| Fecha del primer uso real | `<AAAA-MM-DD>` |
| Operacion hibrida: que actores siguen fuera de la aplicacion | `<...>` |
| ¿Los procesos existentes absorben el trabajo que genera el producto? | `SI` / `NO` — `<con que evidencia>` |

🚨 **Una demostracion no responde la pregunta de este Gate.** La pregunta no es si alguien **podria**
usarlo —eso lo contesto el Gate anterior—: es si alguien **lo usa cuando nadie esta mirando**. Un
`NO` en cualquiera de las dos primeras filas deja la ventana sin poder abrirse.

⚠️ **La ultima fila no es un tramite.** No basta con decir que los demas actores siguen con su
proceso de siempre: hay que saber si ese proceso **aguanta el volumen** que el producto minimo
genera. Si no aguanta, puede hacer falta incorporar antes a otro actor — y eso cambia el alcance, con
lo que se escala.

---

## 4. Si alguna de las tres cambia despues de empezar

**Se rellena solo si ocurre. Si no ocurre, se escribe «no cambio ninguna».**

| Que cambio | Valor anterior | Valor nuevo | Por que | Registrado en |
|---|---|---|---|---|
| `<Metrica / Ventana / Umbral>` | `<...>` | `<...>` | `<...>` | `D-XXX` |

🚨 **Cambiar cualquiera de las tres despues de empezar a observar es una decision, y se registra como
tal**, diciendo que valor tenia antes y por que cambia. Sin ese registro, nadie sabra despues si el
umbral era el original o el que hacia falta para aprobar.

⚠️ **Alargar la ventana es el cambio que mas se disfraza de no serlo.** «Le damos dos semanas mas,
que va mejorando» es una modificacion del criterio tomada con los datos delante, y va en esta tabla
igual que las otras dos.

---

## 5. El resultado — se rellena al cerrar la ventana

| Campo | Contenido |
|---|---|
| Ventana efectivamente observada | `<AAAA-MM-DD a AAAA-MM-DD>` |
| ¿Coincide con la declarada en §1? | `SI` / `NO` — `<si no, ver §4>` |
| Valor medido | `<el numero, o NO MEDIDO>` |
| Umbral declarado | `<el mismo de §1, copiado sin cambiar>` |
| ¿Alcanza el umbral? | `SI` / `NO` |

```
<PEGA AQUI la MISMA orden de extraccion de §1 y su salida cruda al cerrar la ventana.>
```

🚨 **La orden tiene que ser la misma, literalmente.** Si al medir hizo falta otra, eso es informacion
y va aqui: significa que la de §1 no servia, y quien la escribio no lo sabia. Se pegan las dos.

⛔ **Este archivo NO declara el veredicto del Gate.** Dice que salio el numero y si alcanza el
umbral; nada mas. **El veredicto tecnico lo pone una revision independiente y la decision la firma
quien patrocina**, y ninguna de las dos se escribe aqui.

🔑 **Un `NO` en la ultima fila es un resultado valido y se publica igual que un `SI`.** «Es preferible
descubrir tras invertir en un producto minimo que la solucion no sera usada, que descubrirlo despues
de haber construido todo el producto.» El que no queda escrito se repite.

---

## 6. Comprobacion antes de cerrar este archivo

- [ ] §1 tiene las **tres** cosas con valor, y la fecha de declaracion es **anterior** a la del primer
      dato.
- [ ] §1 publica la orden de extraccion y su salida de partida, con la ventana aun sin abrir.
- [ ] §2 tiene las cuatro rendijas cerradas, ninguna con «se vera».
- [ ] §3 no tiene ningun `NO` en sus dos primeras filas.
- [ ] §4 esta rellena, o dice «no cambio ninguna» con esas palabras.
- [ ] §5 usa la **misma** orden de §1, y si hizo falta otra, estan las dos.
- [ ] La cabecera lleva el nombre de quien patrocina.
- [ ] **No queda ni un solo `<` en el archivo** — ningun hueco sin rellenar.
- [ ] La seccion «Guia de llenado» de abajo **esta borrada**.
- [ ] La cabecera dice `CERRADA` y §5 esta completa.

Las mecanicas se comprueban desde fuera:

```bash
grep -n "<" 030_growth/015_observation_window.md                  # debe no devolver nada
grep -n "Guia de llenado" 030_growth/015_observation_window.md    # debe no devolver nada
grep -n "^| Estado |" 030_growth/015_observation_window.md        # debe decir CERRADA
grep -c "se vera" 030_growth/015_observation_window.md
grep -c "NO MEDIDO" 030_growth/015_observation_window.md
git log --diff-filter=A --format=%ad -- 030_growth/015_observation_window.md
```

📌 **La cuarta debe devolver `0`.** Y **la ultima es la que de verdad audita este archivo**: da la
fecha en que el archivo entro al historial, y esa fecha tiene que ser anterior al primer dato de uso.
Es el unico control que una declaracion escrita a posteriori no puede pasar.

🚨 **La salida cruda de las seis ordenes va al registro**, no la conclusion.

---
---

## Guia de llenado — ⚠️ BORRAR esta seccion al cerrar el artefacto

> Existe para escribir el archivo. **No sobrevive al cierre de la etapa.**

### La pregunta que hace todo el trabajo

> **¿Podria este documento haberse escrito despues de ver los datos?**

Si la respuesta es que si, no sirve. Todo lo que este archivo pide —la orden de extraccion, el valor
de partida, las cuatro rendijas de §2— existe para que la respuesta sea que no, y para que un tercero
pueda comprobarlo sin creerse a nadie: **el historial de `git` sabe cuando entro el archivo.**

### Por que este artefacto no se parece a los otros dos de la etapa

| | Acta de iteracion / de slice | Esta declaracion |
|---|---|---|
| **Cuantas veces se escribe** | una por vuelta del bucle | **una sola vez** |
| **Que pasa si se escribe tarde** | pierde el porque | **invalida el Gate entero** |
| **Quien la firma** | `manager` | `manager` **y quien patrocina** |

🚨 **La segunda fila es la razon de las demas.** Un acta de slice reconstruida es una perdida; una
ventana declarada a posteriori es una barrera de inversion convertida en tramite, y el metodo entero
se apoya en que esa barrera pueda decir «no».

### Cuando se escribe cada seccion

| Seccion | Cuando |
|---|---|
| §1, §2 y §3 | **antes** del primer uso real — las tres en la misma pasada |
| §4 | solo si algo cambia, **el dia que cambia** |
| §5 | al agotarse la ventana, ni un dia antes |

⏱️ **§2 es la que parece prescindible y decide el resultado.** Las cuatro rendijas son las que
convierten un umbral en algo que solo admite una lectura; sin ellas, el ultimo dia hay una discusion
sobre el denominador y la gana quien mas interes tenga en el resultado.

### Errores que esta plantilla existe para evitar

| Error | Como suena | Que hacer |
|---|---|---|
| Elegir la metrica al final | «vamos a ver que datos tenemos» | eso no es medir, es elegir el resultado |
| Alargar la ventana | «dos semanas mas, que va mejorando» | es un cambio de criterio y va a §4 con su `D-XXX` |
| Dejar el denominador abierto | «los usuarios» | §2 dice quien cuenta y quien no |
| Contar aperturas como uso | «entraron 200 veces» | §2 dice que accion concreta cuenta |
| Medir con otra orden al final | «esta consulta sale mejor» | se pegan las dos y se dice por que |
| Escribir cero donde no hubo dato | — | `NO MEDIDO`, con esas palabras |
| Poner aqui el veredicto | «adopcion conseguida, seguimos» | este archivo da el numero; el veredicto y la decision son de otros |
| Firmarla quien construyo | — | el umbral lo fija quien responde por la inversion |

### Lo que aqui se cuela solo

Al rellenar §5 con un valor por debajo del umbral aparece la tentacion de reinterpretar §2 —«en
realidad esos usuarios no deberian contar»—. Eso es cambiar el criterio con los datos delante: si de
verdad §2 estaba mal, **va a §4 como un cambio, con su razon y su `D-XXX`**, y quien lea sabra que se
cambio despues de ver el numero.

📌 **Un producto minimo que no alcanza el umbral y lo publica con su evidencia vale mas que uno que lo
alcanza tras mover la definicion.** El primero permite aprender, replantear o detener; el segundo
autoriza una inversion sobre un dato que nadie puede reproducir.
