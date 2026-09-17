# Interesados — YouOtto

| Campo | Valor |
|---|---|
| Artefacto | `005_discovery/015_stakeholders.md` |
| Etapa que lo produce | `005_discovery` |
| Estado | `CERRADO` |
| Abierto | `2026-09-17` |
| Cerrado | `2026-09-17` |
| Escrito por | `manager` |

> ⚠️ **Las dos fechas las lee `report_auditor` y las cruza contra el historial de `git`.** Una fecha
> declarada que no cuadra con la del commit es un hallazgo.

---

## 1. Quien es un interesado, y quien no

Un **interesado** puede decidir, financiar, definir politicas, aportar conocimiento, aprobar
resultados, verse afectado, representar usuarios o imponer restricciones legales o tecnicas.

> **Los interesados no necesariamente usan la aplicacion.** Esa es toda la diferencia con un actor:
> el actor **usa**, el interesado **influye**.

📌 Una misma persona puede ser las dos cosas. Cuando lo sea, aparece en los dos archivos, y aqui se
dice.

---

## 2. Los interesados de este proyecto

Cada interesado lleva codigo `I-XXX`, declarado en la tabla «Codigos» de `project.md`. Correlativo,
y no se reutiliza.

| # | Persona o rol | Organizacion | Rol frente al proyecto | Que aporta | Que puede bloquear | ¿Es tambien actor? |
|---|---|---|---|---|---|---|
| `I-001` | JD Rodriguez | — (proyecto personal) | decide, financia, aprueba y aporta conocimiento | el metodo de seleccion, las decisiones del proyecto y el tiempo de construirlo | cualquier decision del proyecto, en cualquier momento | si → Generador (`010_actors.md`) |
| `I-002` | Baloto, operadora oficial del juego | Baloto (Colombia) | impone restricciones tecnicas y de uso sobre su informacion | la unica fuente del historico de sorteos y de los acumulados | el acceso a los datos, si cambia su sitio o sus condiciones de uso | si → Integrador (`010_actors.md`) |

**Las dos columnas que hacen el trabajo son «que aporta» y «que puede bloquear».** Un interesado que
no aporta nada y no puede bloquear nada no es un interesado: es un espectador, y no va en esta tabla.

---

## 3. Ficha de cada interesado

Solo llevan ficha los que pueden **bloquear** algo. Los demas se quedan en la tabla.

### I-001 · JD Rodriguez, patrocinador

| Campo | Contenido |
|---|---|
| Rol frente al proyecto | Decide, financia, aprueba y aporta el conocimiento del metodo |
| Que aporta | El metodo de seleccion (`D-052`, `D-053`), las decisiones de alcance y el tiempo de construir |
| Que puede bloquear, y en que momento | Cualquier decision, en cualquier momento: es la unica aprobacion que existe en este proyecto (§4) |
| Que necesita para no bloquear | Nada externo: es quien dirige el proyecto |
| Restricciones que impone | `C-002`, `C-003`, `C-004`, `C-005` |
| Como se llega a el | Directo: participa en cada sesion de trabajo |
| Consultado el | 2026-09-17 |

### I-002 · Baloto, operadora oficial del juego

| Campo | Contenido |
|---|---|
| Rol frente al proyecto | Impone restricciones tecnicas y de uso sobre la informacion que publica |
| Que aporta | El historico de sorteos de Baloto y Revancha y los valores del acumulado, en su sitio oficial |
| Que puede bloquear, y en que momento | El acceso a los datos, en cuanto cambie la estructura de su sitio o sus condiciones de uso; sin esa fuente, `N-001`, `N-003` y `N-004` se quedan sin datos |
| Que necesita para no bloquear | Nada que este proyecto pueda pedirle: no hay relacion ni contrato. Lo unico posible es leer su informacion publica respetando sus condiciones de uso |
| Restricciones que impone | Las de su sitio; pendientes de contrastar (`A-008`) |
| Como se llega a el | No hay canal. Es una organizacion con la que este proyecto no tiene relacion |
| Consultado el | TODAVIA NO → `A-008` |

🚨 **Un interesado que puede bloquear y con el que nadie ha hablado todavia no es un riesgo
abstracto: es una fecha que aun no ha llegado.** Si «Consultado el» dice `TODAVIA NO`, eso es un
`A-XXX` en `_persistence/assumptions.md` —con su forma de validarlo y su disparador—, no una casilla
vacia.

---

## 4. Quien tiene que aprobar que

El mapa de las aprobaciones que hacen falta antes de que el proyecto pueda avanzar. Se llena con lo
que se sepa hoy; lo que no se sepa se escribe como «no se sabe».

| Decision | Quien la aprueba | Cuando se necesita |
|---|---|---|
| Alcance, prioridades y todo lo irreversible | `I-001` | En cada sesion de trabajo |
| Continuar o detener el proyecto en cada Gate | `I-001` | En el Gate 1 y en el Gate 2 |
| Dar una etapa por cerrada | `I-001` | Al levantar el acta de cierre de cada etapa |

📌 **Una sola fila por cada cosa, y todas con el mismo nombre.** No hay ninguna aprobacion que
dependa de alguien distinto del patrocinador: lo confirma el propio `I-001` en la conversacion de
`T-029`.

📌 Esta tabla **no promete fechas ni alcance** — eso lo prohibe la etapa. Dice quien decide, no
cuando estara hecho.

---

## 5. La frontera: quien quedo donde

El rastro de las personas que se consideraron y donde aterrizaron. Existe porque la pregunta
*«¿este es actor o interesado?»* se vuelve a hacer sola dentro de tres meses.

| Persona o rol | Actor | Interesado | Por que |
|---|---|---|---|
| JD Rodriguez | si — Generador | si — `I-001` | usa la aplicacion **y** decide sobre el proyecto: aqui patrocinador y Generador son la misma persona, que es lo poco habitual |
| Baloto, operadora oficial | si — Integrador | si — `I-002` | su sitio entrega los datos a la aplicacion **y** sus condiciones de uso pueden impedirlo |
| Vercel, plataforma de despliegue | no | no | ni decide ni aporta conocimiento: sus limites ya estan recogidos como restriccion (`C-003`), y una tabla con espectadores deja de servir |

---

## 6. Comprobacion antes de cerrar este archivo

- [x] **Los interesados estan identificados** — es una de las seis condiciones de salida de la etapa.
- [x] Cada uno dice **que aporta** y **que puede bloquear**; ninguna de las dos vacia.
- [x] Los que pueden bloquear tienen **ficha**, con el momento en que bloquean.
- [x] Ningun interesado esta aqui solo porque «hay que tenerlo contento».
- [x] Nadie aparece como interesado **solo** por usar la aplicacion → ese es un actor.
- [x] Los que son las dos cosas estan en §5 y en `010_actors.md`.
- [x] Los `TODAVIA NO` consultados tienen su `A-XXX` en `_persistence/assumptions.md`.
- [x] **No queda ni un solo `<` en el archivo.**
- [x] La seccion «Guia de llenado» **esta borrada**.
- [x] La cabecera dice `CERRADO` y tiene fecha de cierre.

```bash
grep -n "<" 005_discovery/015_stakeholders.md                 # debe no devolver nada
grep -n "Guia de llenado" 005_discovery/015_stakeholders.md   # debe no devolver nada
grep -n "TODAVIA NO" 005_discovery/015_stakeholders.md        # cada linea necesita su A-XXX
```

🚨 **La salida cruda de las tres ordenes va al registro**, no la conclusion.

⚠️ **Los dos primeros no pueden devolver vacio en este archivo, y no es un hueco sin rellenar:** las
unicas lineas que quedan con `<` y con «Guia de llenado» son **las de esta misma seccion**, que los
nombra para enunciar la comprobacion. La guia se borro; el cuerpo del artefacto no tiene ni un hueco.
El tercero si devuelve lineas, y debe: `I-002` sigue sin consultar, y esa es exactamente la fecha que
`A-008` esta esperando. Su salida, con el alcance que lo demuestra, va en `D-060`.
