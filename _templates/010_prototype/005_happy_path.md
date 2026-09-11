# Camino feliz y tarea — <NOMBRE DEL PROYECTO>

| Campo | Valor |
|---|---|
| Artefacto | `010_prototype/005_happy_path.md` |
| Etapa que lo produce | `010_prototype`, Paso 2 |
| Estado | `SELLADO` |
| Sellado el | `<AAAA-MM-DD>` |
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
| **Actor Generador** | `<el actor concreto de 005_discovery/010_actors.md>` |
| **Arranca cuando** | `<el momento real en que aparece la necesidad>` |
| **Termina cuando** | `<la confirmacion de que quedo resuelta — el usuario sabe que termino>` |
| **Necesidad que recorre** | `<N-XXX de 005_discovery/005_needs.md>` |
| **Hipotesis que pone a prueba** | `<la frase sellada en 005_discovery/020_hypothesis.md §1>` |

**El recorrido, en pasos del usuario:**

1. `<…>`
2. `<…>`
3. `<…>`

📌 Esto es la **descripcion interna** del flujo: sirve para construir. **No es lo que se le lee al
usuario** — eso es §2, y ahi no puede aparecer ninguno de estos pasos.

📌 Si el camino feliz no cabe en una sesion de usuario, es demasiado grande. Recortalo ahora, no en
la tercera sesion.

---

## 2. LA TAREA — texto literal que se le entrega al usuario

Esto se lee o se entrega **tal cual**, palabra por palabra, en todas las sesiones.

> ### 📋
> `<Imagina que… y quieres…. Usa esta aplicacion para conseguirlo.>`

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
| `<ramas y excepciones>` | `<se valida el camino feliz; un error tratado es tiempo gastado en lo que nadie mide>` |
| `<configuracion, historial, informes>` | `<no lo recorre el Generador para resolver su necesidad>` |
| `<todo lo de los demas actores>` | `<solo el Generador; los demas entran cuando se justifiquen>` |
| `<…>` | `<…>` |

---

## 4. Lo que el prototipo SIMULA

El prototipo no calcula: **aparenta**. Aqui queda escrito que es falso, para que la revision del
Gate no lo confunda con una funcionalidad y el facilitador sepa que no defender.

| Lo que parece que hace | Lo que hace de verdad |
|---|---|
| `<guarda la solicitud>` | `<no guarda nada; enseña una pantalla de confirmacion>` |
| `<calcula la fecha disponible>` | `<datos quemados en el codigo>` |
| `<inicia sesion>` | `<login falso que siempre entra>` |
| `<…>` | `<…>` |

⚠️ **Si algo de esta tabla se vuelve real durante la etapa, la etapa se rompio.** Nada de
persistencia, autenticacion, validaciones, capas ni tests: el prototipo se tira, y todo lo que se le
añada encarece tirarlo.

🔑 **Esa es tambien la forma en que esta etapa cumple `PI-5`.** El archivo de etapa declara la unica
excepcion posible: lo que respalda al prototipo **no es un test, son las sesiones registradas**. Si
el prototipo empieza a merecer tests, es que ya no es descartable — y la excepcion deja de cubrirlo.

---

## 5. Comprobacion antes del sello

Todo esto se revisa **antes** de `git add`, y **antes** de escribir la primera linea del prototipo.

- [ ] Hay **un solo** camino feliz, y cabe en una sesion.
- [ ] Arranca en la necesidad real y termina en una **confirmacion que el usuario ve**.
- [ ] Esta amarrado a una `N-XXX` y a la hipotesis sellada en el descubrimiento.
- [ ] La tarea de §2 **da contexto, no instrucciones**.
- [ ] La tarea **no nombra** ningun boton, menu, pestaña ni orden de pasos.
- [ ] Lo que queda fuera esta escrito en §3.
- [ ] Lo que se simula esta escrito en §4.
- [ ] **No queda ni un solo `<` en el archivo.**
- [ ] La seccion «Guia de llenado» **esta borrada**.
- [ ] La cabecera dice `SELLADO` y tiene fecha.

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

---
---

## Guia de llenado — ⚠️ BORRAR esta seccion antes del sello

> Existe para escribir el archivo. **No sobrevive al sello.**

### El orden de la etapa, y por que es asi

```text
1. camino feliz  →  2. LA TAREA  →  3. cuantos usuarios  →  4. construir el prototipo
```

Los pasos 2 y 3 van **antes** del 4, y no es una preferencia de orden: **es lo unico que hace
auditable la etapa entera.** Quien revise el Gate no comprueba primero el resultado — comprueba las
fechas. Todo lo demas se puede reconstruir; el orden en que se escribieron estas cosas, no.

### Como se escribe una tarea que no revela la solucion

La prueba: **leela en voz alta imaginando que la aplicacion no existe.** Si sigue teniendo sentido,
es contexto. Si solo tiene sentido con la pantalla delante, son instrucciones.

| Frase | Veredicto |
|---|---|
| «Imagina que necesitas *tal cosa*. Usa esta aplicacion.» | ✅ contexto |
| «Consigue *tal cosa* para el jueves.» | ⚠️ limite: da el dato, no el camino. Aceptable si el jueves es parte del escenario |
| «Entra al menu de *tal cosa* y crea una nueva.» | ❌ instrucciones |
| «Haz lo que harias normalmente.» | ❌ demasiado vago: cada usuario hara algo distinto y no se pueden comparar |

### Errores que esta plantilla existe para evitar

| Error | Como se ve | Que hacer |
|---|---|---|
| Tarea escrita despues del prototipo | el commit del archivo es posterior al del codigo | ya no hay arreglo: la etapa deja de ser auditable. Solo se evita antes |
| Tarea con instrucciones | nombra un boton o un orden | reescribirla como contexto, **antes** de la primera sesion |
| Dos caminos felices | «que consiga esto y ademas consulte aquello» | uno. El otro es de una etapa posterior |
| Camino que no termina | no hay confirmacion visible | sin final, el usuario no sabe si logro la tarea, y el estado no se puede clasificar |
| Retocar la tarea entre sesiones | «con el segundo usuario la explique mejor» | las sesiones dejan de ser comparables. Lo que sale es una anecdota por usuario |
| Simular de mas | el prototipo empieza a guardar de verdad | cada cosa real encarece tirarlo, y hay que tirarlo |
| Confundir §1 con §2 | los pasos del recorrido acaban leidos al usuario | §1 es para construir; §2 es lo unico que el usuario oye |

### Lo que esta etapa tiene PROHIBIDO, y aqui se cuela solo

**Cambiar la hipotesis.** Viene sellada del descubrimiento. Si al escribir el camino feliz se ve que
la hipotesis estaba mal planteada, **no se edita**: se anota, y el Gate juzga la que se sello.
Corregirla aqui es escribirla despues de ver el resultado.

📌 Definiciones: `_methodology/000_method.md` §15–§21.
📌 Procedimiento: `_phases/010_prototype.md` §4, Pasos 1 y 2.
📌 Donde va este archivo relleno lo dice `project.md`, no esta plantilla.
⚠️ **Quien declara el Gate y con que firmas no lo dice este archivo:** lo dicen la guia de metodo y
el registro de decisiones del proyecto. Mientras la etapa del Gate no tenga su `D-XXX` y su archivo
en `_phases/`, la respuesta correcta a «¿que viene despues?» es *«sin decidir»*.
