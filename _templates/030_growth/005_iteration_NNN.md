# Acta de iteracion <NNN> — <NOMBRE DEL PROYECTO>

> 📄 **Se copia una vez por iteracion.** El nombre del archivo lleva el numero con tres cifras:
> `005_iteration_001.md`, `005_iteration_002.md`, … El numero **no se reutiliza**, ni siquiera si una
> iteracion se abandona a medias: una iteracion abandonada sigue siendo parte de como se llego hasta
> aqui, y su acta es donde consta por que se abandono.
>
> 🚨 **Esta etapa es la unica del metodo que se repite, y este archivo es lo que hace visible el
> bucle.** Sin un acta por vuelta, tres iteraciones seguidas se leen despues como un solo tramo largo
> de trabajo, y se pierde exactamente lo que la etapa produce: **que se aprendio en cada vuelta y que
> cambio en la siguiente por haberlo aprendido.**

| Campo | Valor |
|---|---|
| Artefacto | `030_growth/005_iteration_<NNN>.md` |
| Etapa que lo produce | `030_growth`, Pasos 1 y 8 |
| Iteracion numero | `<NNN>` |
| Estado | `<ABIERTA · CERRADA · ABANDONADA>` |
| Abierta | `<AAAA-MM-DD>` |
| Cerrada | `<AAAA-MM-DD, o «—» mientras siga ABIERTA>` |
| Escrito por | `manager` |

> ⚠️ **Las dos fechas las lee `report_auditor` y las cruza contra el historial de `git`.** Un acta
> cuya fecha de apertura es posterior al primer commit de sus slices no se abrio: se reconstruyo.
>
> 🚨 **`ABANDONADA` es un estado valido y se usa.** Una iteracion que se corto a mitad porque el
> alcance no cabia (`_phases/030_growth.md` §6) se cierra con ese estado y con su §5 escrita, no se
> borra ni se funde con la siguiente.

---

## 0. 🚨 La regla que gobierna este archivo entero

> **Este archivo existe porque el `git diff` muestra que slices se construyeron, y nunca por que se
> eligieron esas y en ese orden.**

El orden de las slices es la decision mas importante de la etapa y la que menos rastro deja. Una
iteracion que empezo por la integracion desconocida y otra que empezo por tres formularios seguros
producen el mismo repositorio al terminar — y solo una redujo riesgo.

📌 **Por eso la seccion 2 pide la razon del orden, no la lista.** «Estas cinco» no dice nada dentro de
tres meses. «Estas cinco, y esta primero porque era la unica que podia tumbar el diseno» explica la
iteracion entera.

⛔ **Y lo que no se pudo comprobar se declara NO COMPROBADO, nunca en blanco.** Un hueco vacio se lee
como que no habia nada que decir.

---

## 1. Que alcance queda al abrir esta iteracion

**Se escribe en el Paso 1, ANTES de elegir las slices.** Es la unica forma de saber despues si la
iteracion mordio el alcance que decia morder.

| Campo | Contenido |
|---|---|
| Features del producto minimo, en total | `<numero>` |
| Implementadas al abrir esta iteracion | `<numero>` |
| Pendientes al abrir esta iteracion | `<numero>` |
| De donde sale el recuento | `<la orden o el artefacto de la baseline del que se derivan; no la memoria>` |

```
<PEGA AQUI la orden que produce el recuento y su salida cruda.>
```

🚨 **La lista decide, no la sensacion** (`_phases/030_growth.md` §8). Si estos numeros se escriben a
ojo, la condicion de salida de la etapa deja de ser comprobable: nadie sabra si el producto minimo
esta cubierto o si se dejo de contar.

⚠️ **Si el recuento no se puede derivar porque la baseline no dejo la lista del «no», eso es un
hallazgo y va aqui con esas palabras** — no se rellena con una estimacion. La lista del «no» es una
de las seis entradas obligatorias de la etapa (§3 del archivo de etapa), y descubrir que falta es
justo lo que este campo existe para provocar.

---

## 2. Las slices que entran, y por que en este orden

**Se escribe en el Paso 1.** Una fila por slice, en el orden en que se van a construir.

| # | Codigo de slice | Enunciado (algo que alguien puede hacer) | Feature(s) de las que sale | Por que va en esta posicion |
|---|---|---|---|---|
| 1 | `<codigo>` | `<«pedir una recogida»>` | `FT-XXX` | `<que incertidumbre quita, o que puede tumbar>` |
| 2 | `<codigo>` | `<...>` | `FT-XXX`, `FT-XXX` | `<...>` |
| 3 | `<codigo>` | `<...>` | `FT-XXX` | `<...>` |

> 🚨 **El codigo de slice sale de la tabla «Codigos» de `project.md`, y esta plantilla no lo escribe.**
> No es un descuido: un proyecto que aun no ha declarado ese codigo no puede recibirlo de una
> plantilla, porque **un codigo que aparece en un archivo antes que en esa tabla es un desfase**. Si
> al copiar esta plantilla el codigo no existe todavia, se declara ahi primero, con su `D-XXX`.

**El criterio de orden, y es el unico que importa:** primero las que **mas incertidumbre quitan**, no
las mas faciles.

| Se pone antes | Se deja para despues |
|---|---|
| lo que toca una integracion externa desconocida | lo que repite un patron ya resuelto |
| lo que puede tumbar la arquitectura | lo que solo anade otra pantalla parecida |
| lo que nadie sabe todavia como se comporta | lo que ya se valido en el prototipo |

🔑 **Porque si algo va a romper el plan, conviene que lo rompa temprano.** Tres formularios seguros al
principio producen la sensacion de ir bien y no reducen ni un gramo de riesgo; la integracion rara al
final lo concentra todo en el tramo en que ya no queda margen.

⚠️ **La ultima columna es la que se deja en blanco y la unica que no se puede reconstruir.** Al cerrar
la iteracion, el orden parecera obvio — porque ya se sabe como salio.

---

## 3. La prueba vertical, slice a slice

**Se escribe en el Paso 2, antes de construir cada una.** Una fila por slice de §2.

> **Al terminar la slice, ¿se puede ensenar funcionando en la aplicacion desplegada?**

| # | Codigo de slice | ¿Pasa la prueba? | Si la respuesta llevo un «pero», cual fue |
|---|---|---|---|
| 1 | `<codigo>` | `SI` / `NO` | `<«si, pero falta la pantalla» → no era vertical, y se recorto asi:>` |
| 2 | `<codigo>` | `SI` / `NO` | `<...>` |

🚨 **Una sola `NO` sin recortar la slice deja la iteracion mal abierta.** Una slice horizontal
**parece** avance y no lo es: no se puede demostrar, no se puede validar, y su valor solo aparece
cuando llega la ultima pieza — que es exactamente el riesgo que este metodo existe para evitar
(`_phases/030_growth.md` §2).

⚠️ **Y si una slice no cabe en la iteracion, el problema es el corte, no la iteracion.** Alargar la
iteracion para que quepa es la forma educada de volver al corte horizontal.

---

## 4. Que paso de verdad — se rellena al cerrar

**Paso 8.** Una fila por slice de §2, **incluidas las que no se hicieron**.

| # | Codigo de slice | Estado | Su acta | Que la desvio de lo previsto |
|---|---|---|---|---|
| 1 | `<codigo>` | `<CERRADA · ARRASTRADA · CANCELADA>` | `010_slice_<NNN>.md` | `<o «nada»>` |
| 2 | `<codigo>` | `<...>` | `<...>` | `<...>` |

| Campo | Contenido |
|---|---|
| Slices previstas | `<numero>` |
| Slices cerradas | `<numero>` |
| Slices arrastradas a la siguiente iteracion | `<numero>` |
| Slices que aparecieron a mitad y no estaban en §2 | `<numero — y su razon, una por una>` |

🚨 **Una slice que aparece a mitad de la iteracion y no estaba en §2 se cuestiona antes de aceptarla**
(regla de trazabilidad). O cuelga de una feature del alcance, o es alcance nuevo — y el alcance del
producto minimo **no se amplia aqui**: se decidio en la baseline y ampliarlo cambia la inversion que
el Gate autorizo.

⚠️ **Si esta tabla dice que todo salio como se previo, mirala otra vez.** Es posible y ocurre; tambien
es el aspecto que tiene un acta rellenada al final desde el resultado.

---

## 5. Que enseno esta iteracion

**Paso 8, y es la seccion por la que existe el archivo.**

| Que aprendio la iteracion | Donde quedo registrado |
|---|---|
| `<un limite del entorno que nadie habia contado>` | `C-XXX` |
| `<un supuesto que una slice tumbo al tocar la realidad>` | `A-XXX`, marcado como refutado |
| `<algo que fallo y se corrigio, o una practica que funciono>` | `L-XXX` |
| `<lo que se dejo a medias a proposito, con su slice al lado>` | `DT-XXX` |
| `<una decision cara de revertir que la construccion obligo a tomar>` | `<la decision arquitectonica, mas su `D-XXX` en el registro>` |

🚨 **Cada fila de la segunda columna tiene que existir en el registro.** Un limite del entorno que
solo esta escrito aqui no lo va a encontrar nadie: quien vaya a elegir la siguiente pieza busca en
`_persistence/constraints.md`, no en el acta de una iteracion cerrada.

🚨 **Esta es la etapa que mas supuestos tumba de todo el metodo, y conviene esperarlo.** La baseline
escribio supuestos sobre comportamiento, volumen, integraciones y datos que nadie podia comprobar
todavia. Cada slice que toca uno de esos temas contesta — y la mitad de las veces contesta que no.

⚠️ **Un supuesto tumbado se marca, no se borra.** Lo que hay que poder leer despues no es solo cual
era el limite, sino **que se creia antes de tropezarse con el** — que es lo que explica por que el
producto se diseno como se diseno.

---

## 6. Que queda al cerrar, y que decide la siguiente

| Campo | Contenido |
|---|---|
| Pendientes del producto minimo al cerrar | `<numero>` |
| De donde sale el recuento | `<la misma orden de §1>` |
| ¿Queda alcance? | `SI` / `NO` |

```
<PEGA AQUI la misma orden de §1 y su salida cruda al cerrar.>
```

| Si queda alcance | Si no queda |
|---|---|
| se abre la siguiente iteracion volviendo al Paso 1, y se copia una nueva acta | se va a §6 del archivo de etapa: ventana de observacion y condicion de salida |

🚨 **No hay Gate al final de esta iteracion, ni de ninguna.** El Gate llega **una sola vez**, al
cerrar el producto minimo entero y agotarse la ventana de observacion. Meter un Gate por iteracion
convierte una barrera de inversion en una reunion de seguimiento, y entonces deja de parar nada.

### ⚠️ Si lo que se descubrio es que el alcance no cabe

No se resuelve construyendo mas rapido, ni bajando la barra de los tests, ni cerrando slices sin
actualizar la baseline. **Se escala**, porque recortar el alcance del producto minimo cambia lo que
el Gate anterior autorizo, y esa decision no es de quien construye.

| Campo | Contenido |
|---|---|
| Que evidencia lo mostro | `<el dato concreto, no la sensacion>` |
| A quien se escalo, y cuando | `<nombre — AAAA-MM-DD>` |
| Que se decidio, con sus alternativas descartadas | `D-XXX` |

🚨 **Descubrirlo aqui no es un fracaso: es la etapa haciendo su trabajo.** «La inversion crece por
evidencia» tambien significa poder decir a mitad de camino que la evidencia cambio. **Detener sigue
siendo un resultado valido**, y va en la lista de alternativas.

---

## 7. Comprobacion antes de cerrar este archivo

- [ ] §1 se escribio **al abrir**, con su recuento derivado de una orden y no de la memoria.
- [ ] §2 tiene una fila por slice, con su enunciado en forma de «algo que alguien puede hacer» y con
      **la razon de su posicion**, no solo el orden.
- [ ] §3 tiene una fila por slice de §2, y ninguna dice `NO` sin decir como se recorto.
- [ ] §4 incluye tambien las slices que **no** se hicieron, y las que aparecieron a mitad con su
      razon.
- [ ] §5 tiene cada fila con su codigo en el registro, y ese codigo existe.
- [ ] §6 repite la orden de §1 y publica su salida al cerrar.
- [ ] **No queda ni un solo `<` en el archivo** — ningun hueco sin rellenar.
- [ ] La seccion «Guia de llenado» de abajo **esta borrada**.
- [ ] La cabecera dice `CERRADA` (o `ABANDONADA`, con §6 explicando por que) y tiene fecha de cierre.

Las mecanicas se comprueban desde fuera:

```bash
grep -n "<" 030_growth/005_iteration_NNN.md                 # debe no devolver nada
grep -n "Guia de llenado" 030_growth/005_iteration_NNN.md   # debe no devolver nada
grep -n "^| Estado |" 030_growth/005_iteration_NNN.md       # debe decir CERRADA o ABANDONADA
sed -n '/^## 3\./,/^## 4\./p' 030_growth/005_iteration_NNN.md | grep -c '| `NO` |'
grep -c "NO COMPROBADO" 030_growth/005_iteration_NNN.md
```

📌 **La cuarta y la quinta se publican tal cual salen, tambien cuando son cero:** un control cuyo
resultado no se publica no se distingue de un control que no se corrio.

🚨 **La salida cruda de las cinco ordenes va al registro**, no la conclusion.

---
---

## Guia de llenado — ⚠️ BORRAR esta seccion al cerrar el artefacto

> Existe para escribir el archivo. **No sobrevive al cierre de la iteracion.**

### La pregunta que hace todo el trabajo

> **¿Que de esta iteracion sabria alguien que solo tuviera el repositorio?**

Que slices se construyeron y en que orden se commitearon. **Nada de por que.** Y el porque es lo
unico que sirve para elegir mejor la iteracion siguiente: si el orden fue bueno, si la incertidumbre
estaba donde se creia, si el alcance se estaba mordiendo al ritmo previsto.

### Cuando se escribe cada seccion

| Seccion | Cuando |
|---|---|
| §1 y §2 | en el Paso 1, **antes** de cortar la primera slice |
| §3 | en el Paso 2 de cada slice, **antes** de construirla |
| §4, §5 y §6 | en el Paso 8, al cerrar la iteracion |

⏱️ **§2 es la que se pierde entera si se deja para el final.** La razon por la que una slice fue
primera se olvida en cuanto se sabe como salio, y lo que queda escrito es una justificacion del
resultado disfrazada de criterio.

### Errores que esta plantilla existe para evitar

| Error | Como suena | Que hacer |
|---|---|---|
| Ordenar por facilidad | «empecemos por lo sencillo para coger ritmo» | el criterio es incertidumbre, no comodidad; §2 lo obliga a escribirse |
| Escribir el orden sin su razon | «estas cinco» | la ultima columna de §2 no es opcional |
| Contar el alcance a ojo | «nos queda poco» | §1 y §6 piden la orden que lo deriva |
| Absorber una slice que aparecio a mitad | «total, es pequena» | §4 la cuenta aparte y pide su razon |
| Fundir una iteracion abandonada con la siguiente | «no llego a ser una iteracion» | se cierra `ABANDONADA` con su §5 |
| Alargar la iteracion para que quepa una slice | «casi esta» | el problema es el corte; se recorta la slice |
| Dejar §5 vacia | «no aprendimos nada raro» | si de verdad no hubo nada, se escribe con esas palabras |
| Meter un Gate al cerrar | «revisemos si seguimos» | el Gate es uno, al final; esto es una revision de seguimiento y no para nada |

### Lo que esta iteracion tiene PROHIBIDO, y aqui se cuela solo

Al rellenar §4 aparece la tentacion de contar como avance las slices **arrastradas**. No lo son: una
slice arrastrada es alcance que sigue pendiente, y ponerla en la columna de cerradas hace que §6
devuelva un numero que no es. El recuento de §6 sale de la misma orden que el de §1 — no de sumar lo
que esta tabla dice.

📌 **Y si la iteracion acabo construyendo mas de lo que §2 preveia, esa es la informacion mas util
que puede dar esta acta** — porque significa que el alcance se esta ampliando sin decidirlo, y eso se
paga en el Gate.
