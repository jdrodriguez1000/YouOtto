# Camino feliz y tarea — YouOtto

| Campo | Valor |
|---|---|
| Artefacto | `010_prototype/005_happy_path.md` |
| Etapa que lo produce | `010_prototype`, Paso 2 |
| Estado | `SELLADO` |
| Sellado el | `2026-09-18` |
| Escrito por | `manager` |

> 🚨 **ESTE ARCHIVO SE SELLA ANTES DE CONSTRUIR EL PROTOTIPO. No despues.**
>
> La revision independiente del Gate lo comprueba en el historial, no lo pregunta:
>
> ```bash
> git log --diff-filter=A -- 010_prototype/005_happy_path.md   # cuando nacio este archivo
> git log --diff-filter=A --name-only -- 010_prototype/        # cuando nacio el codigo del prototipo
> ```
>
> **La primera fecha tiene que ser anterior a la segunda.**
>
> 🔑 **Por que este orden, y no es una preferencia:** si la tarea se escribe despues del prototipo,
> se escribe **a la medida de lo que el prototipo hace bien**. Entonces la sesion ya no mide si el
> usuario puede — mide si la tarea encajaba.
>
> ⚠️ Y **no se toca durante el resto de la etapa.** Ni entre sesiones, ni cuando el primer usuario
> tropiece.

---

## 1. El camino feliz que se valida

**Uno solo.** El recorrido del Actor Generador desde que aparece la necesidad hasta que la
aplicacion confirma que quedo resuelta.

| Campo | Contenido |
|---|---|
| **Actor Generador** | JD Rodriguez, jugador que prepara su apuesta (`005_discovery/010_actors.md` §2) |
| **Arranca cuando** | Es dia de sorteo por la manana y tiene que decidir que 6 numeros va a jugar esa noche |
| **Termina cuando** | Ha dado la combinacion por buena y la aplicacion le confirma que esa es la combinacion elegida para el proximo sorteo |
| **Necesidad que recorre** | `N-001` y `N-002` de `005_discovery/005_needs.md` |
| **Hipotesis que pone a prueba** | JD Rodriguez obtiene, sin ayuda y en menos de un minuto, la combinacion de 6 numeros que hoy arma a mano, y puede decir de donde salio cada uno de los 6 con lo que la aplicacion le muestra |

**El recorrido, en pasos del usuario:**

1. Abre la aplicacion el dia del sorteo.
2. Obtiene la combinacion de 6 numeros para el proximo sorteo: las 5 balotas y la superbalota.
3. Mira, numero por numero, la razon por la que cada uno entro en la combinacion.
4. Da la combinacion por buena.
5. Ve la confirmacion de que esa es la combinacion elegida para el proximo sorteo.

📌 Esto es la **descripcion interna** del flujo: sirve para construir. **No es lo que se le lee al
usuario** — eso es §2, y ahi no puede aparecer ninguno de estos pasos.

📌 Si el camino feliz no cabe en una sesion de usuario, es demasiado grande. Recortalo ahora, no en
la tercera sesion.

---

## 2. LA TAREA — texto literal que se le entrega al usuario

Esto se lee o se entrega **tal cual**, palabra por palabra, en todas las sesiones.

> ### 📋
> Hoy hay sorteo por la noche y todavia no tienes tu apuesta. Quieres llevar los seis numeros que
> saldrian de tu metodo, y quieres quedarte tranquilo con ellos: saber por que va cada uno antes de
> darlos por buenos. Usa esta aplicacion para conseguirlo.

**Se da contexto, nunca instrucciones.**

| ❌ No se dice | ✅ Se dice |
|---|---|
| «Haz clic en *tal opcion* y luego selecciona la fecha.» | «Imagina que estas en *tal situacion* y necesitas *tal cosa*. Usa esta aplicacion para conseguirlo.» |

🚨 **La revision independiente del Gate lee exactamente este recuadro.** Si la tarea nombra un boton,
un menu o un orden de pasos, las sesiones midieron **si el usuario sabe seguir indicaciones** — que
no es lo que se estaba apostando. El resultado no se puede interpretar aunque todas las sesiones
salgan verdes.

---

## 3. Lo que queda FUERA del camino feliz

Se escribe para que nadie lo eche de menos en la sesion y lo trate como un fallo del prototipo.

| Queda fuera | Por que |
|---|---|
| Saber cuantos numeros acerto tras el sorteo (`N-003`) | es otra necesidad, con su propio recorrido. La hipotesis sellada no la pone a prueba |
| El acumulado del proximo sorteo y si el premio mayor cayo (`N-004`) | igual que la anterior: no la recorre el Generador para decidir que numeros juega |
| Elegir la prioridad entre Baloto y Revancha (`D-053`) | es configuracion. El prototipo trabaja con el valor por defecto, que es `Baloto` |
| El historial de combinaciones jugadas antes | no lo recorre el Generador para resolver esta necesidad |
| Cargar o actualizar el historico desde la fuente oficial | el prototipo no lee nada: sus datos estan quemados (§4). Que el historico se pueda cargar es condicion previa de la observacion, no parte de la apuesta (`005_discovery/020_hypothesis.md` §5) |
| Cualquier rama, excepcion o caso de error | se valida el camino feliz; un error tratado es tiempo gastado en lo que nadie mide |
| Todo lo de los demas actores | solo el Generador. El unico otro actor es el Integrador, que es la fuente de datos y no se sienta en una sesion |

---

## 4. Lo que el prototipo SIMULA

El prototipo no calcula: **aparenta**. Aqui queda escrito que es falso, para que la revision del
Gate no lo confunda con una funcionalidad y el facilitador sepa que no defender.

| Lo que parece que hace | Lo que hace de verdad |
|---|---|
| Aplica el metodo del jugador (`D-052`, `D-053`) sobre el historico | no ejecuta el metodo: la combinacion esta quemada en el codigo |
| Tiene cargado el historico de sorteos de Baloto y Revancha | no lee ninguna fuente; no hay historico dentro |
| Explica por que entro cada numero, con sus ventanas y sus parejas | los textos de la razon de cada numero estan quemados, uno por numero |
| Guarda la combinacion cuando el usuario la da por buena | no guarda nada; enseña una confirmacion |

🚨 **Los seis numeros son arbitrarios, y el participante se compromete a no juzgarlos** (`D-086`).
El unico participante conoce el metodo de memoria, asi que va a ver una combinacion que su metodo no
habria producido. Se acepta a sabiendas: lo que esta etapa mide es **el tiempo y la trazabilidad**,
no si el calculo es correcto — y `005_discovery/020_hypothesis.md` §5 ya declaro que la hipotesis no
afirma nada sobre el calculo.

⚠️ **Lo que eso obliga a hacer en sesion, y por eso se escribe aqui:** si el participante comenta que
los numeros no son los que su metodo daria, **el facilitador no lo corrige ni lo defiende** —devuelve
la pelota, como con cualquier otra duda— y la frase se registra como **comentario espontaneo**. No
cuenta como bloqueo ni como problema funcional: esta fuera de lo que se apuesta. Lo que si cuenta es
que no sepa decir **de donde salio** un numero con lo que la aplicacion le muestra, que es `N-002` y
es parte de la hipotesis.

⚠️ **Si algo de esta tabla se vuelve real durante la etapa, la etapa se rompio.** Nada de
persistencia, autenticacion, validaciones, capas ni tests: el prototipo se tira, y todo lo que se le
añada encarece tirarlo.

🔑 **Esa es tambien la forma en que esta etapa cumple `PI-5`.** El archivo de etapa declara la unica
excepcion posible: lo que respalda al prototipo **no es un test, son las sesiones registradas**. Si
el prototipo empieza a merecer tests, es que ya no es descartable — y la excepcion deja de cubrirlo.

---

## 5. Comprobacion antes del sello

Todo esto se revisa **antes** de `git add`, y **antes** de escribir la primera linea del prototipo.

- [x] Hay **un solo** camino feliz, y cabe en una sesion.
- [x] Arranca en la necesidad real y termina en una **confirmacion que el usuario ve**.
- [x] Esta amarrado a una `N-XXX` y a la hipotesis sellada en el descubrimiento.
- [x] La tarea de §2 **da contexto, no instrucciones**.
- [x] La tarea **no nombra** ningun boton, menu, pestaña ni orden de pasos.
- [x] Lo que queda fuera esta escrito en §3.
- [x] Lo que se simula esta escrito en §4.
- [x] **No queda ni un solo `<` en el archivo.**
- [x] La seccion «Guia de llenado» **esta borrada**.
- [x] La cabecera dice `SELLADO` y tiene fecha.

```bash
grep -n "<" 010_prototype/005_happy_path.md                 # debe no devolver nada
grep -n "Guia de llenado" 010_prototype/005_happy_path.md   # debe no devolver nada
grep -niE "clic|boton|menu|pestaña|luego|despues|primero|selecciona" \
     010_prototype/005_happy_path.md                        # SOLO la fila ❌ de §2, ni una linea mas
```

📌 El tercero **no** devuelve vacio a proposito: la fila del ejemplo malo de §2 contiene esas
palabras. Lo que se comprueba es que **no aparezcan dentro del recuadro 📋**. Si salen ahi, la tarea
da instrucciones y la revision del Gate lo vera.

🚨 **La salida cruda de las tres ordenes va al registro**, no la conclusion.
