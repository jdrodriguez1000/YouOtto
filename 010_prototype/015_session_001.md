# Sesion 001 — YouOtto

> 📄 **Se copia una vez por sesion.** El nombre del archivo lleva el numero con tres cifras:
> `015_session_001.md`, `015_session_002.md`, … El numero **no se reutiliza**, ni siquiera si la
> sesion se cae.

| Campo | Valor |
|---|---|
| Artefacto | `010_prototype/015_session_001.md` |
| Etapa que lo produce | `010_prototype`, Paso 7 |
| Fecha de la sesion | `2026-09-18` |
| Hora de inicio / fin | `16:43 — 16:44` |
| Escrito por | `Juana Ramirez (facilitadora), transcrito al dictado por manager` |
| Escrito | `inmediatamente despues` |

> 🚨 **SE ESCRIBE DURANTE LA SESION O INMEDIATAMENTE DESPUES, Y SE COMMITEA EL MISMO DIA.**
>
> La revision independiente del Gate cruza **la fecha declarada aqui arriba contra la fecha del
> commit**:
>
> ```bash
> git log --diff-filter=A --format=%ad -- 010_prototype/015_session_001.md
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
| **Identificador** | `JD Rodriguez — el Actor Generador, unico participante de la ronda` |
| **Perfil previsto** | `Unico — el jugador que aplica el metodo a mano (010_participants.md §2)` |
| **¿Encajo en el perfil?** | `si` |
| **Descalificadores comprobados** | `ninguno aplicaba — a la pregunta de seguimiento sobre su respuesta 5 de §7 contesto: «Sigo jugando con el metodo a mano»` |
| **Como se hace hoy su trabajo** | `«Realmente hoy no lo hago» (§7, pregunta 5); aclarado en la pregunta de seguimiento: «Sigo jugando con el metodo a mano»` |

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
> Hoy hay sorteo por la noche y todavia no tienes tu apuesta. Quieres llevar los seis numeros que
> saldrian de tu metodo, y quieres quedarte tranquilo con ellos: saber por que va cada uno antes de
> darlos por buenos. Usa esta aplicacion para conseguirlo.

| Comprobacion | Respuesta |
|---|---|
| **¿Es identica a la de las sesiones anteriores?** | `si — es la primera sesion; se pega literal de 005_happy_path.md §2` |
| **¿Se añadio alguna explicacion antes de empezar?** | `no — «Nada, solo se leyo la tarea» (Juana Ramirez)` |
| **¿El prototipo cambio desde la sesion anterior?** | `no — es la primera sesion; el codigo es el del commit e45185d, el unico que toca 010_prototype/app/` |

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

**Estado asignado:** `Exito autonomo` — lo asigno Juana Ramirez

**Por que ese y no el de al lado:**

> Llego a la confirmacion sin hacer ninguna pregunta (§5: cero intervenciones) y sin decir nada
> distinto de la lectura en voz alta de la pantalla (§6); ninguna fila de §4 registra bloqueo, duda
> ni error. No es «exito con dudas» porque no expreso ninguna duda durante la tarea.

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
| 1 | Razon de los tres primeros numeros | Los leyo con calma, en voz alta | ninguno | mas de 40 s entre los tres |
| 2 | Razon de los numeros cuarto y quinto | Los leyo «muy rapido», «casi que no los leyo» (Juana Ramirez) | ninguno | no cronometrado |
| 3 | Razon de la superbalota | La leyo rapidamente | ninguno | no cronometrado |

📌 **Se registra comportamiento, no interpretacion.** *«Se quedo mirando la pantalla 40 segundos y
volvio atras»* es un hecho. *«No entendio la pantalla»* ya es una conclusion, y puede ser la
equivocada.

---

## 5. Intervenciones del facilitador

**Todas. Aunque parecieran inofensivas.**

| # | Momento | Que pregunto el usuario | Que respondio el facilitador |
|---|---|---|---|
| — | — | Ninguna: «NO hubo preguntas» (Juana Ramirez) | — |

**Total de intervenciones que dieron informacion:** `0`

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

- > Ninguno. Durante toda la tarea leyo en voz alta y «no emitio palabras diferentes a la lectura» (Juana Ramirez).

📌 Un comentario parafraseado ya paso por la cabeza de quien lo anoto. Las palabras exactas son el
unico dato que la revision del Gate puede leer sin intermediario.

---

## 7. Preguntas posteriores

**Solo despues de la tarea, nunca durante.**

| Dimension | Pregunta | Respuesta |
|---|---|---|
| **Comprension** | ¿Que creias que iba a pasar cuando hiciste esto? | «Que iba a obtener 6 numeros, 5 de balota y 1 de superbalota, siguiendo mis metodos de seleccion de numeros.» |
| **Dificultad** | ¿Hubo algun momento en que no supieras que hacer? | «En todo momento supe que hacer.» |
| **Expectativa** | ¿Esperabas encontrar alguna otra opcion? | «Si, tal vez que me diera la oportunidad de seleccionar otra combinacion si no estaba de acuerdo con la que me mostraba.» |
| **Necesidad** | ¿Que informacion necesitarias realmente para completar esto? | «Un boton que dijera algo como nueva combinacion o Crea una nueva combinacion o algo asi.» |
| **Proceso actual** | **¿Como haces esto hoy?** | «Realmente hoy no lo hago.» — A la pregunta de seguimiento de la facilitadora, sobre si queria decir que no lo hace a mano o que ya no juega con su metodo: «Sigo jugando con el metodo a mano» |

📌 La ultima es la mas valiosa de las cinco: es la unica que permite **comparar la solucion
propuesta contra el comportamiento real**, y suele desmentir lo que el propio usuario acaba de decir
que le parecio facil.

---

## 8. Observaciones en bruto

Sin clasificar todavia. La clasificacion en las nueve categorias se hace en `020_observations.md`,
**cuando la ronda entera termine** — no aqui, y no hoy.

- Cronometro, desde que empezo hasta que dio la combinacion por buena y vio la confirmacion: 57.61 s.
- «el usuario se tomó mucho tiempo leyendo la justificacion de cada numero» (Juana Ramirez). Al detallarlo: mas de 40 s en los tres primeros numeros, los dos siguientes «casi que no los leyo», la superbalota leida rapidamente.
- Leyo toda la pantalla en voz alta.

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
grep -n "<" 010_prototype/015_session_001.md                 # debe no devolver nada
grep -n "Guia de llenado" 010_prototype/015_session_001.md   # debe no devolver nada
git log --diff-filter=A --format=%ad -- 010_prototype/015_session_001.md   # = la fecha de la cabecera
git log --oneline --name-only -- 010_prototype/             # ningun commit al codigo entre sesiones
```

📌 **El cuarto se lee mirando los nombres de archivo, no solo los commits.** Entre dos sesiones puede
haber commits legitimos —el archivo de la sesion anterior, el de participantes—; lo que no puede
haber es un commit **que toque el codigo del prototipo**. Uno de esos, con sesiones a los dos lados,
parte la ronda en dos.

🚨 **La salida cruda de las cuatro ordenes va al registro**, no la conclusion.
