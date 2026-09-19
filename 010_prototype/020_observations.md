# Observaciones clasificadas — YouOtto

| Campo | Valor |
|---|---|
| Artefacto | `010_prototype/020_observations.md` |
| Etapa que lo produce | `010_prototype`, Paso 8 |
| Estado | `CERRADO` |
| Abierto el | `2026-09-19 — con la ronda ya terminada (la sesion 005 acabo a las 10:39)` |
| Cerrado el | `2026-09-19` |
| Sesiones que resume | `001 a 005` |
| Escrito por | `manager` |

> 🚨 **ESTE ARCHIVO SE ESCRIBE CUANDO LA RONDA ENTERA TERMINO. No sesion a sesion.**
>
> Clasificar sobre la marcha convierte al primer usuario en la vara con la que se leen los demas: lo
> que el dijo se vuelve categoria, y lo que dicen los otros se acomoda dentro. **El patron solo se
> ve con todas las sesiones delante.**
>
> 📌 Su fecha de apertura debe ser **posterior** a la ultima sesion. La revision del Gate lo mira:
>
> ```bash
> git log --diff-filter=A --format=%ad -- 010_prototype/020_observations.md
> ```

---

## 1. La regla que gobierna este archivo

> **Una observacion del usuario NO se convierte automaticamente en un requisito.**

Los usuarios diran *«seria bueno que tambien pudiera hacer X»*. Eso **no** significa que el
prototipo fracaso por no tener X. Significa que alguien dijo algo, y que hay que decidir que es.

**Clasificar es exactamente esa decision, y se toma una vez, aqui.**

---

## 2. Las nueve categorias

| # | Categoria | Que es | ¿Pesa en el Gate? |
|---|---|---|---|
| 1 | `problema funcional` | algo no funciona o impide avanzar | ✅ **si** |
| 2 | `problema de comprension` | no entiende que significa o que va a pasar | ✅ **si** |
| 3 | `problema de usabilidad` | lo logra, pero con esfuerzo o por ensayo y error | ✅ **si** |
| 4 | `necesidad no contemplada` | una necesidad real que el descubrimiento no vio | ➡️ etapa posterior |
| 5 | `sugerencia` | una preferencia suya | ➡️ etapa posterior |
| 6 | `nueva funcionalidad potencial` | otra cosa que el producto podria hacer | ➡️ etapa posterior |
| 7 | `caso excepcional` | una rama que el camino feliz no cubre | ➡️ etapa posterior |
| 8 | `requisito de negocio` | una regla de la empresa que aparecio aqui | ➡️ `025_business_validation.md` |
| 9 | `idea para una etapa posterior` | buena idea, sin sitio todavia | ➡️ etapa posterior |

🚨 **Solo las tres primeras pesan en el Gate.** Las otras seis **no son ruido**: son el material de
las etapas siguientes, y por eso se guardan enteras. Lo que seria un error es dejarlas pesar en un
veredicto que no las estaba midiendo.

📌 La frontera que mas cuesta es **3 contra 5**: *«tuve que intentarlo dos veces»* es un problema de
usabilidad y pesa; *«me gustaria que fuera de otro color»* es una sugerencia y no. Cuando dudes,
decide por el comportamiento observado, no por lo que dijo.

⚠️ **«Etapa posterior» no nombra ninguna etapa a proposito.** Cuales existen despues del Gate lo
dice `project.md`, y mientras no esten declaradas la respuesta correcta es *«sin decidir»*. Lo que
si esta decidido es donde se guarda mientras tanto: en `_persistence/`, segun la tabla de §7.

---

## 3. Las observaciones

Una fila por observacion. Cada una amarrada a **donde se vio**, no a quien la conto de memoria.

| # | Observacion | Categoria | Sesiones donde aparecio | Punto del flujo | Evidencia |
|---|---|---|---|---|---|
| `O-001` | Al preguntarle despues de la tarea, dice que esperaba o necesitaba un boton para generar otra combinacion si no le convence la propuesta. Durante la tarea no lo busco | `nueva funcionalidad potencial` | 001, 002, 003, 004, 005 | Preguntas posteriores, sobre la pantalla de la combinacion | `015_session_001.md` §7 Expectativa y Necesidad · `015_session_002.md` §7 Expectativa y Necesidad · `015_session_003.md` §7 Expectativa · `015_session_004.md` §7 Expectativa y Necesidad · `015_session_005.md` §7 Comprension, Expectativa y Necesidad |
| `O-002` | Dice que le gustaria ver todo en una sola pagina, con la confirmacion junto a la justificacion de cada numero | `sugerencia` | 003, 004, 005 | Paso de la combinacion a la pantalla de confirmacion | `015_session_003.md` §7 Necesidad · `015_session_004.md` §6 (transmitido, no literal) y §7 Expectativa y Necesidad · `015_session_005.md` §7 Necesidad |
| `O-003` | Dice que le gustaria un boton de regresar desde la confirmacion para volver a ver la explicacion de cada numero | `sugerencia` | 003 | Pantalla de confirmacion | `015_session_003.md` §7 Expectativa |
| `O-004` | Leyo dos veces en voz alta el texto del boton «Dar por buena esta combinación» antes de hacer clic; despues dijo que el boton «no me lleva a la accion de hacer clic sobre el» | `problema de usabilidad` | 002 | Boton «Dar por buena esta combinación» | `015_session_002.md` §4 fila 2 y §7 Dificultad |
| `O-005` | Propone cambiar el texto de ese boton para que lleve a hacer clic | `sugerencia` | 002 | Boton «Dar por buena esta combinación» | `015_session_002.md` §7 Necesidad |
| `O-006` | Tardo mas de 40 s en leer la razon de los tres primeros numeros; el cuarto y el quinto «casi que no los leyo» y la superbalota la leyo rapido | `idea para una etapa posterior` | 001 | Razones de los seis numeros | `015_session_001.md` §4 filas 1 a 3 y §8 |

🚨 **El codigo de observacion se declara antes en la tabla «Codigos» de `project.md`, con su
`D-XXX`.** Escribir el primero sin declararlo es un desfase, no una novedad — y un prefijo que
significa dos cosas segun el archivo hace ilegible justo lo que la trazabilidad existe para poder
leer.

📌 La columna **«sesiones donde aparecio»** es la que convierte varias anecdotas en un dato. Una
observacion de una sola sesion y una que salio en cuatro no valen lo mismo, y sin esa columna se
leen igual.

---

## 4. Los patrones

Lo que decide no es el promedio: es **que le paso a varias personas en el mismo sitio**.

| Patron | Cuantos de `5` | Donde | Que sugiere |
|---|---|---|---|
| Llego a la confirmacion sin preguntas ni intervenciones | 5 de 5 | Todo el flujo | Que el recorrido se completa sin ayuda |
| Pidio un boton para generar otra combinacion, siempre al preguntarsele despues y nunca durante la tarea | 5 de 5 | Pantalla de la combinacion | Una funcion que el participante espera y el camino feliz no cubre (`O-001`) |
| Pidio ver todo en una sola pagina | 3 de 5 (003, 004, 005) | Paso de la combinacion a la confirmacion | Una preferencia que se repite en las tres ultimas sesiones (`O-002`) |
| Vacilo ante el boton de confirmar | 1 de 5 (002) | Boton «Dar por buena esta combinación» | Un tropiezo aislado, que no se repitio en 001, 003, 004 ni 005 (`O-004`) |

📌 **Los cinco son del mismo participante**, que es el unico Generador (`010_participants.md`). «5 de
5» son cinco sesiones de una persona, no cinco personas.

> **Tres usuarios bloqueados en el mismo campo dice mas que un promedio de 2,3.**

📌 Un promedio junta cosas distintas y devuelve una cifra que **no señala a ninguna pantalla**. Un
patron señala.

---

## 5. Resumen de estados

Se copia de los archivos de sesion. **No se recalcula ni se redondea.**

| Estado | Cuantos | Sesiones |
|---|---:|---|
| Exito autonomo (3) | 5 | 001, 002, 003, 004, 005 |
| Exito con dudas (2) | 0 | — |
| Exito con ayuda (1) | 0 | — |
| Fracaso (0) | 0 | — |

⚠️ **Aqui no se suma ni se promedia nada.** El Gate lee los estados, no una nota media: *«tres de
cinco con ayuda»* no es *«2,0 de media»*, y las dos frases llevan a veredictos distintos.

---

## 6. Contra la hipotesis — lo observado, sin veredicto

Se pone al lado lo que se sello y lo que se vio. **Se describe; no se concluye.**

| Campo | Contenido |
|---|---|
| **La hipotesis decia** | «JD Rodriguez obtiene, sin ayuda y en menos de un minuto, la combinacion de 6 numeros que hoy arma a mano, y puede decir de donde salio cada uno de los 6 con lo que la aplicacion le muestra.» (`005_discovery/020_hypothesis.md` §1) |
| **La condicion de falsacion decia** | «Esta hipotesis queda TUMBADA si: en dos o mas de las cinco sesiones tarda mas de un minuto en tener la combinacion, necesita ayuda para obtenerla, o no puede decir de donde salio alguno de los 6 numeros con lo que la aplicacion le muestra.» Umbral: «4 de las 5 sesiones». Ventana: «5 sesiones, una por dia de sorteo, en dias de sorteo consecutivos (lunes, miercoles y sabado): unas dos semanas» (`005_discovery/020_hypothesis.md` §2) |
| **Lo que se observo** | Cronometro hasta dar la combinacion por buena y ver la confirmacion: 57.61 s (001), 58.10 s (002), 52.31 s (003), 50.45 s (004), 53.56 s (005). Intervenciones que dieron informacion: 0 en las cinco. Estado asignado por la facilitadora: `Exito autonomo` en las cinco. **Ningun registro de sesion recoge que se le pidiera decir de donde salio cada numero:** las cinco preguntas posteriores del guion (`012_facilitator_guide.md` §3) no lo preguntan. El guion (§2) pide a la facilitadora anotar si no puede decirlo, y ningun registro anota ese caso. Las cinco sesiones se corrieron el 2026-09-18 (001, 002) y el 2026-09-19 (003, 004, 005), una por jornada y no en dias de sorteo: desviacion declarada antes de la ronda en `010_participants.md` §5 (`D-088`) |

🚨 **Aqui NO se escribe si la hipotesis se cumplio o se rompio.** Esa comparacion es del Gate, y la
hace **una revision independiente**. Quien construyo el prototipo y condujo las sesiones no puede
ademas declarar que salieron bien: un sistema que se revisa a si mismo comprueba que es
**coherente**, no que sea **cierto**.

📌 Poner las tres filas juntas **si** es trabajo de quien escribe este archivo: le ahorra buscar a
quien revise, sin decidir por el.

---

## 7. Que se hace con cada categoria

| Categoria | Destino | Registrado en |
|---|---|---|
| `problema funcional` · `problema de comprension` · `problema de usabilidad` | los lee el **Gate** | este archivo |
| `necesidad no contemplada` | etapa posterior — puede volverse una `N-XXX` nueva | este archivo, y `_persistence/lessons.md` si enseño algo |
| `requisito de negocio` | contrastar con el patrocinador | `025_business_validation.md` y `_persistence/constraints.md` |
| `caso excepcional` · `sugerencia` | etapa posterior, si sobreviven al alcance | este archivo |
| `nueva funcionalidad potencial` · `idea para una etapa posterior` | etapa posterior | este archivo |

📌 **Ninguna se borra.** Una idea descartada hoy que aparece sola dentro de un año es la misma idea,
y saber que ya se habia dicho cambia como se decide.

⚠️ **Lo que aprendio el equipo va aparte, a `_persistence/lessons.md`**, y con su columna
`Portabilidad` rellena: la condicion de salida de la etapa exige que ninguna leccion quede
`Sin evaluar`, y que lo que sea `Global candidata` ya haya subido al archivo de lecciones globales
con su `D-XXX`.

---

## 8. Supuestos del descubrimiento que las sesiones tocaron

| Supuesto | Que decia | Las sesiones lo | Donde se vio |
|---|---|---|---|
| `A-009` | Los seis numeros arbitrarios no desviaran la atencion del participante durante la sesion | CONFIRMARON | Sesion 001 (`D-098`). En 002 a 005 no volvio sobre la discrepancia durante la tarea. En la 005, al preguntarsele despues, hablo de generar otra combinacion «cuando no estuviera de acuerdo con la que me propone la aplicacion» (`D-106`) |

📌 **`A-009` es de esta etapa, no del descubrimiento**, y es el unico supuesto que las sesiones
tocaron. Ninguno de los supuestos del descubrimiento (`A-004`, `A-005`, `A-008`) se toco en la ronda.

⚠️ Los tumbados **se marcan, no se borran**, aqui y en `_persistence/assumptions.md`. Un supuesto que
resulto falso explica decisiones que despues nadie entiende.

📌 Los `C-XXX` nuevos que aparezcan al hablar con usuarios reales van a `_persistence/constraints.md`,
no aqui. Este archivo registra lo observado; el registro del porque es de `manager` y vive en
`_persistence/`.

---

## 9. Comprobacion antes de cerrar este archivo

- [ ] La fecha de apertura es **posterior a la ultima sesion**.
- [ ] **Todas** las observaciones en bruto de los §8 de las sesiones llegaron aqui.
- [ ] Cada observacion tiene **una** categoria de las nueve, no dos.
- [ ] Cada una dice **en que sesiones** aparecio y **donde** en el flujo.
- [ ] Los estados de §5 estan **copiados**, no recalculados ni promediados.
- [ ] §6 describe lo observado y **no declara** si la hipotesis se cumplio.
- [ ] Ninguna observacion se borro por parecer menor.
- [ ] Los supuestos tumbados estan marcados, aqui y en `_persistence/assumptions.md`.
- [ ] **No queda ni un solo `<` en el archivo.**
- [ ] La seccion «Guia de llenado» **esta borrada**.

```bash
grep -n "<" 010_prototype/020_observations.md                # debe no devolver nada
grep -n "Guia de llenado" 010_prototype/020_observations.md  # debe no devolver nada
sed -n '/^## 3. Las observaciones/,/^## 4/p' 010_prototype/020_observations.md | grep -c '^| '
git log --diff-filter=A --format=%ad -- 010_prototype/020_observations.md   # posterior a la ultima sesion
```

📌 **El tercero cuenta las filas de §3 incluyendo la cabecera y el separador**, asi que devuelve dos
mas que el numero de observaciones. Se publica tal cual y se dice cuantas son: un recuento
maquillado deja de ser reproducible.

🚨 **La salida cruda de las cuatro ordenes va al registro**, no la conclusion.
