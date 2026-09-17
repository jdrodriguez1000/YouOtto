# Hipotesis — YouOtto

| Campo | Valor |
|---|---|
| Artefacto | `005_discovery/020_hypothesis.md` |
| Etapa que lo produce | `005_discovery` |
| Estado | `SELLADA` |
| Sellada el | `2026-09-17` |
| Escrito por | `manager` |

> 🚨 **ESTE ARCHIVO NO LLEVA `BORRADOR`. NACE SELLADO, Y ES EL UNICO DE LOS CUATRO.**
>
> Un Gate posterior comprobara dos cosas en el historial de `git`, y las dos son sobre este archivo:
>
> 1. Que existia **antes** de la primera sesion del prototipo.
> 2. Que **no cambio durante la etapa** → `git log --oneline -- 005_discovery/020_hypothesis.md` debe
>    devolver **un solo commit**.
>
> **Por eso este archivo se escribe entero antes del primer `git add`.** Se piensa, se discute y se
> corrige **sin commitear**. El commit es el sello.
>
> ⚠️ **Un segundo commit aqui deja al Gate sin nada contra que medir** — y no por sospecha: una
> hipotesis que cambia mientras se corre el prototipo describe lo que salio, no lo que se apostaba.
> No hay forma de saber cual era la apuesta original.

---

## 1. La hipotesis

> **JD Rodriguez obtiene, sin ayuda y en menos de un minuto, la combinacion de 6 numeros que hoy arma
> a mano, y puede decir de donde salio cada uno de los 6 con lo que la aplicacion le muestra.**

---

## 2. La condicion de falsacion

**Una hipotesis vale si se puede escribir que observacion la tumbaria.** Si no se puede, es un
deseo, y el Gate posterior no tendra contra que medir.

> **Esta hipotesis queda TUMBADA si:** en dos o mas de las cinco sesiones tarda mas de un minuto en
> tener la combinacion, necesita ayuda para obtenerla, o no puede decir de donde salio alguno de los
> 6 numeros con lo que la aplicacion le muestra.

| Campo | Contenido |
|---|---|
| Que se observa | El tiempo desde que abre la aplicacion hasta tener la combinacion, y si dice de donde salio cada uno de los 6 numeros sin que nadie le ayude |
| Con cuantos participantes | 1 — es el unico Generador que existe (`010_actors.md` §2) |
| Umbral | 4 de las 5 sesiones |
| Estado que cuenta como logro | Solo `Exito autonomo`. `Exito con ayuda` no cuenta |
| Ventana | 5 sesiones, una por dia de sorteo, en dias de sorteo consecutivos (lunes, miercoles y sabado): unas dos semanas |

🚨 **La metrica, la ventana y el umbral se declaran AQUI, antes del primer dato.** Medir hasta que
el numero guste no es medir: es elegir el resultado.

📌 **«Exito con ayuda» no es exito autonomo.** Si la hipotesis dice «sin ayuda», tres de cinco con
ayuda la tumban, por bien que se vea el prototipo.

---

## 3. De donde sale

| Campo | Contenido |
|---|---|
| Necesidad que valida | `N-001` y `N-002` de `005_needs.md` |
| Actor Generador | JD Rodriguez, jugador que prepara su apuesta (`010_actors.md` §2) |
| Dimension principal | A · Ejecucion, con parte de B · Comprension por el «de donde salio cada numero» |
| Como se hace hoy | Pasa el ultimo sorteo a Excel y aplica a mano su metodo (`D-052`, `D-053`): entre 40 y 60 minutos |

📌 Si la hipotesis no se puede amarrar a una `N-XXX` y a un Generador con nombre, no esta lista para
sellarse.

---

## 4. El perfil del usuario representativo

Quien cuenta como Generador valido en una sesion de evaluacion.

> 🚨 **Se define AQUI, en el descubrimiento.** Si se define despues de las sesiones, se define **a
> la medida de quien vino** — y entonces la evaluacion confirma en vez de comprobar.

| Campo | Contenido |
|---|---|
| Perfil que califica | Quien juega Baloto y Revancha con el metodo de `D-052` y `D-053` y hoy lo aplica a mano. Hay una sola persona asi: JD Rodriguez |
| Que lo descalifica | Nada lo descalifica, y esa es la anomalia de este proyecto: el unico Generador que existe es tambien el patrocinador y quien construye. Se acepta a sabiendas y se declara en §5 |
| Cuantos participantes | 1, fijado hoy |
| De donde saldran | No hay reclutamiento: es el propio Generador |

📌 Este perfil es una de las cuatro cosas que la etapa le entrega a la siguiente
(`_phases/005_discovery.md` §8). **Aqui es donde se decide; en la etapa siguiente es donde se
registra quien vino de verdad.**

---

## 5. Lo que esta hipotesis NO afirma

Se escribe para que el Gate posterior no se convierta en un examen de cosas que nunca se apostaron.

- No afirma que el producto sea rentable.
- No afirma que el prototipo este bien hecho — es descartable, su calidad no es criterio.
- No afirma que al patrocinador le vaya a gustar — el gusto no es evidencia.
- **No afirma que otra persona pueda usar la aplicacion.** El unico participante conoce el metodo de
  memoria y construyo el producto, asi que la parte de comprension queda debilitada a proposito: lo que
  se observa es si la explicacion le basta a el, no si le bastaria a un tercero.
- **No afirma que la combinacion acierte mas.** Los sorteos son eventos independientes; lo que se
  apuesta es tiempo y trazabilidad, nunca resultado.
- **No afirma que el calculo del metodo sea el mejor posible.** Se apuesta que reproduce el que el
  jugador aplica hoy.
- **No afirma nada sobre el acceso a la fuente de datos.** Que el historico se pueda cargar es
  condicion previa de la observacion, no parte de la apuesta (`A-008`).

---

## 6. Comprobacion antes del UNICO commit

Todo esto se revisa **antes** de `git add`, porque despues ya no se puede tocar.

- [x] La hipotesis es **una sola frase** y se puede observar en una sesion.
- [x] **No nombra ninguna pantalla, boton ni menu.**
- [x] Esta escrita la **condicion de falsacion**, y es una observacion, no un adjetivo.
- [x] Hay **numero de participantes** y **umbral**, fijados antes del primer dato.
- [x] Dice que estado cuenta como logro, y si «con ayuda» cuenta o no.
- [x] Esta amarrada a una `N-XXX` y a un Generador con actor concreto.
- [x] El **perfil del usuario representativo** esta escrito, con lo que descalifica.
- [x] **No queda ni un solo `<` en el archivo.**
- [x] La seccion «Guia de llenado» **esta borrada**.
- [x] La cabecera dice `SELLADA` y tiene fecha.

```bash
grep -n "<" 005_discovery/020_hypothesis.md                 # debe no devolver nada
grep -n "Guia de llenado" 005_discovery/020_hypothesis.md   # debe no devolver nada
git log --oneline -- 005_discovery/020_hypothesis.md        # debe devolver UNA sola linea
```

📌 El tercero es el que mira `report_auditor`. Correlo tu antes que el.

⚠️ **Los dos primeros no pueden devolver vacio en este archivo, y no es un hueco sin rellenar:** las
unicas lineas que quedan con `<` y con «Guia de llenado» son **las de esta misma seccion**, que los
nombra para enunciar la comprobacion. La guia se borro; el cuerpo del artefacto no tiene ni un hueco.
Su salida, con el alcance que lo demuestra, va en `D-058`.

🚨 **La salida cruda de las tres ordenes va al registro**, no la conclusion. Y la del tercero, la
mas importante: es la unica prueba de que la hipotesis no se retoco.
