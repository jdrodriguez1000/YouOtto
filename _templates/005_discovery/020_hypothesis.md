# Hipotesis — <NOMBRE DEL PROYECTO>

| Campo | Valor |
|---|---|
| Artefacto | `005_discovery/020_hypothesis.md` |
| Etapa que lo produce | `005_discovery` |
| Estado | `SELLADA` |
| Sellada el | `<AAAA-MM-DD>` |
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

> **<Una sola frase. Observable en una sesion con un usuario.>**

Ejemplo de la forma que debe tener:

> *«El cliente que hoy llama por telefono puede solicitar una recogida por si solo, sin ayuda, en
> menos de tres minutos.»*

---

## 2. La condicion de falsacion

**Una hipotesis vale si se puede escribir que observacion la tumbaria.** Si no se puede, es un
deseo, y el Gate posterior no tendra contra que medir.

> **Esta hipotesis queda TUMBADA si:** `<la observacion concreta que la rompe>`

| Campo | Contenido |
|---|---|
| Que se observa | `<el comportamiento, no la opinion>` |
| Con cuantos participantes | `<numero fijado ahora, antes de la primera sesion>` |
| Umbral | `<cuantos de esos N tienen que lograrlo para que la hipotesis siga en pie>` |
| Estado que cuenta como logro | `<Exito autonomo · Exito autonomo o con dudas>` |
| Ventana | `<en cuantas sesiones y en que plazo>` |

🚨 **La metrica, la ventana y el umbral se declaran AQUI, antes del primer dato.** Medir hasta que
el numero guste no es medir: es elegir el resultado.

📌 **«Exito con ayuda» no es exito autonomo.** Si la hipotesis dice «sin ayuda», tres de cinco con
ayuda la tumban, por bien que se vea el prototipo.

---

## 3. De donde sale

| Campo | Contenido |
|---|---|
| Necesidad que valida | `<N-001 de 005_needs.md>` |
| Actor Generador | `<el actor concreto de 010_actors.md §2>` |
| Dimension principal | `<A · Ejecucion — B · Comprension — C · Necesidad — D · Negocio>` |
| Como se hace hoy | `<el proceso real sin la aplicacion — es la vara de comparacion>` |

📌 Si la hipotesis no se puede amarrar a una `N-XXX` y a un Generador con nombre, no esta lista para
sellarse.

---

## 4. El perfil del usuario representativo

Quien cuenta como Generador valido en una sesion de evaluacion.

> 🚨 **Se define AQUI, en el descubrimiento.** Si se define despues de las sesiones, se define **a
> la medida de quien vino** — y entonces la evaluacion confirma en vez de comprobar.

| Campo | Contenido |
|---|---|
| Perfil que califica | `<…>` |
| Que lo descalifica | `<conoce el proyecto · trabaja en el equipo · ya uso el prototipo>` |
| Cuantos participantes | `<numero, fijado ahora>` |
| De donde saldran | `<canal real de reclutamiento>` |

📌 Este perfil es una de las cuatro cosas que la etapa le entrega a la siguiente
(`_phases/005_discovery.md` §8). **Aqui es donde se decide; en la etapa siguiente es donde se
registra quien vino de verdad.**

---

## 5. Lo que esta hipotesis NO afirma

Se escribe para que el Gate posterior no se convierta en un examen de cosas que nunca se apostaron.

- No afirma que el producto sea rentable.
- No afirma que el prototipo este bien hecho — es descartable, su calidad no es criterio.
- No afirma que al patrocinador le vaya a gustar — el gusto no es evidencia.
- `<…lo demas que quede fuera a proposito>`

---

## 6. Comprobacion antes del UNICO commit

Todo esto se revisa **antes** de `git add`, porque despues ya no se puede tocar.

- [ ] La hipotesis es **una sola frase** y se puede observar en una sesion.
- [ ] **No nombra ninguna pantalla, boton ni menu.**
- [ ] Esta escrita la **condicion de falsacion**, y es una observacion, no un adjetivo.
- [ ] Hay **numero de participantes** y **umbral**, fijados antes del primer dato.
- [ ] Dice que estado cuenta como logro, y si «con ayuda» cuenta o no.
- [ ] Esta amarrada a una `N-XXX` y a un Generador con actor concreto.
- [ ] El **perfil del usuario representativo** esta escrito, con lo que descalifica.
- [ ] **No queda ni un solo `<` en el archivo.**
- [ ] La seccion «Guia de llenado» **esta borrada**.
- [ ] La cabecera dice `SELLADA` y tiene fecha.

```bash
grep -n "<" 005_discovery/020_hypothesis.md                 # debe no devolver nada
grep -n "Guia de llenado" 005_discovery/020_hypothesis.md   # debe no devolver nada
git log --oneline -- 005_discovery/020_hypothesis.md        # debe devolver UNA sola linea
```

📌 El tercero es el que mira `report_auditor`. Correlo tu antes que el.

🚨 **La salida cruda de las tres ordenes va al registro**, no la conclusion. Y la del tercero, la
mas importante: es la unica prueba de que la hipotesis no se retoco.

---
---

## Guia de llenado — ⚠️ BORRAR esta seccion antes del commit

> Existe para escribir el archivo. **No sobrevive al sello.**

### La prueba que separa una hipotesis de un deseo

> **¿Que tendria que ver para saber que estoy equivocado?**

Si no hay respuesta, no es hipotesis.

| ❌ No sirve | ✅ Sirve |
|---|---|
| «la aplicacion va a mejorar el proceso» | «el cliente que hoy llama por telefono puede solicitar una recogida por si solo, sin ayuda, en menos de tres minutos» |
| «a los usuarios les va a gustar» | «el cliente entiende que materiales puede entregar sin preguntarle a nadie» |
| «el flujo sera intuitivo» | «4 de 5 clientes completan la solicitud en Exito autonomo» |

La columna derecha se **observa**. La izquierda solo se opina — y el gusto no es evidencia.

### Los cuatro estados de resultado

| Estado | Significado | Valor |
|---|---|---:|
| **Exito autonomo** | completa sin ayuda | 3 |
| **Exito con dudas** | completa sin ayuda, pero con dudas importantes | 2 |
| **Exito con ayuda** | el facilitador intervino → **no es exito completo** | 1 |
| **Fracaso** | no completa | 0 |

Al fijar el umbral hay que decir **cuales de estos cuatro cuentan**. Es la decision que mas Gates
decide, y la que mas se deja para despues.

### Las cuatro dimensiones de validacion

| | Pregunta |
|---|---|
| **A · Ejecucion** | ¿Puede el usuario completar la tarea? |
| **B · Comprension** | ¿Comprende lo que hace y que significan las opciones? |
| **C · Necesidad** | ¿El flujo es una forma valida de resolver su necesidad real? |
| **D · Negocio** | ¿El flujo representa el proceso que la empresa quiere implementar? |

**C y D no se funden.** El usuario puede usarlo bien y el patrocinador descubrir que choca con una
regla interna. Si la hipotesis solo cubre A, declaralo en §5.

### Errores que esta plantilla existe para evitar

| Error | Como se ve | Que hacer |
|---|---|---|
| Hipotesis escrita despues | el commit es posterior a la primera sesion | ya no hay arreglo; solo se evita antes |
| Hipotesis retocada a mitad | dos commits sobre este archivo | no tocarlo. Lo que se aprenda va al registro de la etapa siguiente |
| Umbral sin numero | «que la mayoria lo logre» | «4 de 5», decidido hoy |
| Umbral decidido al final | el numero aparece en el informe del Gate | declararlo aqui es lo unico que lo hace medida |
| Hipotesis con pantalla dentro | «el usuario encuentra el boton de agendar» | eso mide si sabe leer un boton, no si resuelve su necesidad |
| Varias hipotesis en una | «entiende, completa y ademas vuelve» | una sola. Las demas son de mas adelante |
| Falsacion imposible de romper | «el usuario podra solicitar la recogida» | ¿con ayuda cuenta? ¿en cuanto tiempo? sin eso, nada la tumba |

### Si la hipotesis cambia de verdad

Puede pasar: en el descubrimiento se entendio mal el negocio y el prototipo lo destapa. **No se
edita este archivo.** Lo aprendido se registra en el artefacto de observaciones de la etapa
siguiente, el Gate juzga la hipotesis **que se sello**, y la nueva se escribe en el ciclo siguiente.

> Una hipotesis tumbada es un resultado, no un error. Una hipotesis corregida a mitad de camino no
> es ninguna de las dos cosas: es un archivo sin valor probatorio.

### Lo que esta etapa tiene PROHIBIDO, y aqui se cuela solo

**Escribir la hipotesis despues del prototipo.** Escribirla despues es describir lo que salio, y
entonces el Gate no tiene contra que medir.

📌 Definiciones: `_methodology/000_method.md` §18, §24, §26, §29.
📌 Procedimiento: `_phases/005_discovery.md` §4 paso 7, y §8.
⚠️ **Quien declara el Gate y con que firmas no lo dice este archivo:** lo dicen la guia de metodo y
el registro de decisiones del proyecto. Mientras la etapa del Gate no tenga su `D-XXX` y su archivo
en `_phases/`, la respuesta correcta a «¿que viene despues?» es *«sin decidir»*.
