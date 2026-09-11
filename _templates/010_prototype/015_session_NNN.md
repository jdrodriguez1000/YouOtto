# Sesion <NNN> — <NOMBRE DEL PROYECTO>

> 📄 **Se copia una vez por sesion.** El nombre del archivo lleva el numero con tres cifras:
> `015_session_001.md`, `015_session_002.md`, … El numero **no se reutiliza**, ni siquiera si la
> sesion se cae.

| Campo | Valor |
|---|---|
| Artefacto | `010_prototype/015_session_<NNN>.md` |
| Etapa que lo produce | `010_prototype`, Paso 7 |
| Fecha de la sesion | `<AAAA-MM-DD>` |
| Hora de inicio / fin | `<HH:MM — HH:MM>` |
| Escrito por | `<facilitador u observador que registro>` |
| Escrito | `<durante la sesion · inmediatamente despues>` |

> 🚨 **SE ESCRIBE DURANTE LA SESION O INMEDIATAMENTE DESPUES, Y SE COMMITEA EL MISMO DIA.**
>
> La revision independiente del Gate cruza **la fecha declarada aqui arriba contra la fecha del
> commit**:
>
> ```bash
> git log --diff-filter=A --format=%ad -- 010_prototype/015_session_<NNN>.md
> ```
>
> 🔑 **Un registro reconstruido al dia siguiente es un recuerdo, y un recuerdo ya viene filtrado por
> lo que uno esperaba encontrar.** No se nota al leerlo: se lee igual de convincente. Por eso la
> comprobacion es la fecha y no la calidad del texto.
>
> 🚨 **Estos archivos son la Definicion de Terminado del prototipo.** La etapa prohibe los tests
> —el artefacto se tira— y a cambio declara que lo que respalda al prototipo es **la evidencia
> registrada de las sesiones**. Un prototipo sin sus archivos de sesion no esta Terminado: esta
> afirmado.

---

## 1. El participante

| Campo | Contenido |
|---|---|
| **Identificador** | `<el codigo de participante — sin nombre completo si hay datos personales de por medio>` |
| **Perfil previsto** | `<el perfil de 010_participants.md §2>` |
| **¿Encajo en el perfil?** | `<si · no — y en que no>` |
| **Descalificadores comprobados** | `<ninguno aplicaba · cual aplicaba y por que se corrio igual>` |
| **Como se hace hoy su trabajo** | `<lo que conto del proceso real, si lo conto>` |

🚨 **Si esta etapa necesita un codigo propio para identificar participantes o sesiones, se declara
antes en la tabla «Codigos» de `project.md`, con su `D-XXX`.** Escribir el primero sin declararlo es
un desfase, no una novedad.

⚠️ Si el participante **no** encajaba y la sesion se corrio igual, aqui queda dicho, y ademas va a
`010_participants.md` §5 como desviacion. **En los dos sitios**: este archivo lo cuenta, aquel lo
suma.

---

## 2. La tarea que se le entrego

Se pega **literal** desde `005_happy_path.md` §2, sin una palabra distinta.

> ### 📋
> `<el texto exacto de la tarea>`

| Comprobacion | Respuesta |
|---|---|
| **¿Es identica a la de las sesiones anteriores?** | `<si>` |
| **¿Se añadio alguna explicacion antes de empezar?** | `<no>` |
| **¿El prototipo cambio desde la sesion anterior?** | `<no>` |

🚨 **Las tres respuestas correctas son `si`, `no`, `no`.** Cualquier otra cosa rompe la
comparabilidad: si el prototipo o la tarea cambian entre el primer usuario y el cuarto, **las
sesiones ya no midieron lo mismo y no se pueden sumar.** Lo que sale es una anecdota por usuario.

---

## 3. Resultado

| Estado | Significado | Valor |
|---|---|---:|
| ⬜ **Exito autonomo** | completa sin ayuda | 3 |
| ⬜ **Exito con dudas** | completa sin ayuda, pero con dudas importantes | 2 |
| ⬜ **Exito con ayuda** | el facilitador intervino → **no es exito completo** | 1 |
| ⬜ **Fracaso** | no completa | 0 |

**Estado asignado:** `<uno de los cuatro, sin inventar un quinto>`

**Por que ese y no el de al lado:**

> `<la frase que lo justifica, apoyada en §4 y §5>`

🚨 **Esta ultima casilla no es retorica: es la que decide el Gate.** El criterio de que *«el
Generador ejecuta el flujo principal de forma autonoma»* se lee directo de estos estados, y **«exito
con ayuda» no es exito autonomo**. La frontera entre 3, 2 y 1 es donde se gana o se pierde el Gate,
asi que se argumenta aqui, con el hecho delante, y no al final cuando ya se sabe cuantos hacen
falta.

---

## 4. El recorrido — donde se bloqueo, dudo o se equivoco

Cada fila con **el punto del flujo**, no una impresion general.

| # | Punto del flujo | Que paso | Bloqueo · duda · error | Cuanto duro |
|---|---|---|---|---|
| 1 | `<la pantalla o el momento concreto>` | `<busco una opcion que no existe>` | `<duda>` | `<~40 s>` |
| 2 | `<…>` | `<…>` | `<…>` | `<…>` |

📌 **Se registra comportamiento, no interpretacion.** *«Se quedo mirando la pantalla 40 segundos y
volvio atras»* es un hecho. *«No entendio la pantalla»* ya es una conclusion, y puede ser la
equivocada.

---

## 5. Intervenciones del facilitador

**Todas. Aunque parecieran inofensivas.**

| # | Momento | Que pregunto el usuario | Que respondio el facilitador |
|---|---|---|---|
| 1 | `<…>` | `<«¿aqui va tal dato?»>` | `<«¿tu que harias?»>` |
| 2 | `<…>` | `<…>` | `<…>` |

**Total de intervenciones que dieron informacion:** `<0>`

🚨 **Si ese total es mayor que cero, el estado NO puede ser «exito autonomo».** Esa es toda la
regla, y es la que mas se dobla sin querer: la intervencion se recuerda como *«solo le di un
empujoncito»* y el estado se anota como autonomo.

📌 Devolver la pelota —*«¿tu que harias?»*— **no** es dar informacion. Contestar «si», señalar la
pantalla o repetir la tarea con otras palabras, **si lo es**.

📌 **Y el patrocinador no contesta.** Si contesto, va en esta tabla como intervencion, con su nombre
o su rol — es el principio de no sesgo que mas se rompe, porque se rompe con buena intencion y
rapidez.

---

## 6. Comentarios espontaneos

En **sus palabras**, entrecomillados, sin arreglar la gramatica ni resumir.

- > `<«…»>`
- > `<«…»>`

📌 Un comentario parafraseado ya paso por la cabeza de quien lo anoto. Las palabras exactas son el
unico dato que la revision del Gate puede leer sin intermediario.

---

## 7. Preguntas posteriores

**Solo despues de la tarea, nunca durante.**

| Dimension | Pregunta | Respuesta |
|---|---|---|
| **Comprension** | ¿Que creias que iba a pasar cuando hiciste esto? | `<…>` |
| **Dificultad** | ¿Hubo algun momento en que no supieras que hacer? | `<…>` |
| **Expectativa** | ¿Esperabas encontrar alguna otra opcion? | `<…>` |
| **Necesidad** | ¿Que informacion necesitarias realmente para completar esto? | `<…>` |
| **Proceso actual** | **¿Como haces esto hoy?** | `<…>` |

📌 La ultima es la mas valiosa de las cinco: es la unica que permite **comparar la solucion
propuesta contra el comportamiento real**, y suele desmentir lo que el propio usuario acaba de decir
que le parecio facil.

---

## 8. Observaciones en bruto

Sin clasificar todavia. La clasificacion en las nueve categorias se hace en `020_observations.md`,
**cuando la ronda entera termine** — no aqui, y no hoy.

- `<…>`
- `<…>`

⚠️ **Lo que se anota aqui NO se arregla en el prototipo.** Aunque cueste diez minutos y el tropiezo
sea obvio. El prototipo **no se toca entre sesiones**: si cambia entre el primer usuario y el
cuarto, las cuatro sesiones dejan de ser sumables.

🚨 **La unica excepcion:** un fallo tan grave que **impide continuar**. Entonces se detiene la ronda,
se arregla, y **se vuelve a empezar contando desde cero** — no se mezclan las sesiones de antes con
las de despues.

---

## 9. Comprobacion antes de commitear — hoy mismo

- [ ] La fecha de la cabecera es **la de hoy**, y el commit tambien.
- [ ] La tarea de §2 es **identica** a la sellada; las tres respuestas son `si, no, no`.
- [ ] Hay **un estado asignado** de los cuatro, con su frase de justificacion.
- [ ] Si hubo intervenciones que dieron informacion, el estado **no** es autonomo.
- [ ] Los comentarios estan **entrecomillados**, no parafraseados.
- [ ] Las cinco preguntas posteriores tienen respuesta o un «no contesto».
- [ ] Los tropiezos estan anotados y **el prototipo sigue sin tocarse**.
- [ ] **No queda ni un solo `<` en el archivo.**
- [ ] La seccion «Guia de llenado» **esta borrada**.

```bash
grep -n "<" 010_prototype/015_session_NNN.md                 # debe no devolver nada
grep -n "Guia de llenado" 010_prototype/015_session_NNN.md   # debe no devolver nada
git log --diff-filter=A --format=%ad -- 010_prototype/015_session_NNN.md   # = la fecha de la cabecera
git log --oneline --name-only -- 010_prototype/             # ningun commit al codigo entre sesiones
```

📌 **El cuarto se lee mirando los nombres de archivo, no solo los commits.** Entre dos sesiones puede
haber commits legitimos —el archivo de la sesion anterior, el de participantes—; lo que no puede
haber es un commit **que toque el codigo del prototipo**. Uno de esos, con sesiones a los dos lados,
parte la ronda en dos.

🚨 **La salida cruda de las cuatro ordenes va al registro**, no la conclusion.

---
---

## Guia de llenado — ⚠️ BORRAR esta seccion antes de commitear

> Existe para escribir el archivo. **No sobrevive a la sesion.**

### Los roles, y lo que cada uno NO hace

| Rol | Hace | **No** hace |
|---|---|---|
| **Facilitador** | explica el ejercicio, entrega la tarea, pregunta neutral, observa, registra | enseñar la solucion; intervenir mas de lo minimo |
| **Usuario** | realiza la tarea | — |
| **Observadores** | observan, toman notas, registran comportamientos | **intervenir durante la interaccion** |
| **Patrocinador** | observa | **responder las preguntas del usuario** |

Los tres principios de no sesgo que mas se rompen en la practica:

1. **No explicar como se usa** antes de empezar.
2. **No corregir el error** en el momento en que ocurre.
3. **No dejar que el patrocinador conteste.**

📌 El tercero es el mas dificil, porque el patrocinador contesta **con buena intencion y rapidez**, y
para cuando el facilitador reacciona la informacion ya esta dada.

### La frontera entre los cuatro estados

| Situacion | Estado |
|---|---|
| Llego al final sin preguntar nada y sin dudar visiblemente | **Exito autonomo** (3) |
| Llego al final solo, pero dijo «no se si esto esta bien» dos veces | **Exito con dudas** (2) |
| Llego al final despues de que alguien le confirmara algo | **Exito con ayuda** (1) |
| Se rindio, o termino creyendo que hizo algo que no hizo | **Fracaso** (0) |

📌 La ultima fila engaña: **completar la tarea equivocada convencido de que la completo bien es un
fracaso**, no un exito. Y en pantalla se ve identico a un exito.

### El numero es apoyo, no resultado

Lo que decide es **el patron**: tres usuarios bloqueados en el mismo campo dice mucho mas que un
promedio de 2,3. El promedio junta cosas distintas y las convierte en una cifra que no señala a
ninguna pantalla.

### Errores que esta plantilla existe para evitar

| Error | Como se ve | Que hacer |
|---|---|---|
| Escribir el archivo al dia siguiente | fecha del commit posterior a la de la sesion | ya no hay arreglo. Se escribe hoy |
| Todos los archivos commiteados el ultimo dia | cinco sesiones, un solo commit | se ve en un `git log`. Un commit por sesion |
| Intervencion no anotada | §5 vacia y estado «autonomo» en todas | anotarla, aunque baje el estado. Es el dato, no el enemigo |
| Comentario parafraseado | «dijo que le parecio confuso» | las palabras exactas, entrecomilladas |
| Interpretacion en §4 | «no entendio la pantalla» | que **hizo**: cuanto miro, donde hizo clic, si volvio atras |
| Arreglar el prototipo entre sesiones | commit al codigo con fecha intermedia | anotar y esperar. La ronda entera primero |
| Clasificar aqui las observaciones | §8 con etiquetas de las nueve categorias | eso es `020_observations.md`, y con la ronda terminada |
| Sesion que se cae y se reusa el numero | dos archivos con el mismo numero | el numero no se reutiliza: la sesion caida tambien deja rastro |

### Lo que esta etapa tiene PROHIBIDO, y aqui se cuela solo

**Declarar si la sesion «salio bien».** Este archivo registra **que paso**, no que significa. El
veredicto es del Gate: quien condujo la sesion no puede ademas declarar que salio bien. Un sistema
que se revisa a si mismo comprueba que es **coherente**, no que sea **cierto**.

📌 Definiciones: `_methodology/000_method.md` §19–§25.
📌 Procedimiento: `_phases/010_prototype.md` §4, Pasos 5, 6 y 7.
📌 Donde va este archivo relleno lo dice `project.md`, no esta plantilla.
⚠️ **Quien declara el Gate y con que firmas no lo dice este archivo:** lo dicen la guia de metodo y
el registro de decisiones del proyecto. Mientras la etapa del Gate no tenga su `D-XXX` y su archivo
en `_phases/`, la respuesta correcta a «¿que viene despues?» es *«sin decidir»*.
