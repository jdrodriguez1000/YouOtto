# Necesidades — YouOtto

| Campo | Valor |
|---|---|
| Artefacto | `005_discovery/005_needs.md` |
| Etapa que lo produce | `005_discovery` |
| Estado | `BORRADOR` |
| Abierto | `2026-09-17` |
| Cerrado | `—` |
| Escrito por | `manager` |

> **Estado:** `BORRADOR` mientras la etapa siga abierta · `CERRADO` cuando se cumpla la condicion de
> salida de `_phases/005_discovery.md` §6.
>
> ⚠️ **Las dos fechas las lee `report_auditor` y las cruza contra el historial de `git`.** No se
> rellenan a posteriori: una fecha declarada que no cuadra con la del commit es un hallazgo, y de
> los caros — deja de poder saberse cuando se supo cada cosa.

---

## 1. Las nueve preguntas

No se avanza hasta que las nueve tengan respuesta **o un «no se sabe» escrito**.

📌 Un **«no se sabe»** vale mas que una respuesta inventada: se convierte en un `A-XXX` de
`_persistence/assumptions.md` y alguien tendra que ir a verificarlo. Escribelo asi:
`No se sabe → A-XXX`. Una respuesta inventada, en cambio, se comporta como un hecho.

| # | Pregunta | Respuesta |
|---|---|---|
| 1 | ¿Por que existe la necesidad? | Armar la combinacion de cada sorteo con el metodo propio del jugador se hace a mano y tarda entre 40 y 60 minutos. |
| 2 | ¿Para que se necesita la aplicacion? | Para obtener la combinacion de ese mismo metodo en un minuto como maximo, con la razon de cada numero. |
| 3 | ¿Que problema se quiere resolver? | El trabajo manual de copiar resultados de la web a Excel y calcular a mano intervalos, parejas y exclusiones. |
| 4 | ¿Quien tiene el problema? | JD Rodriguez, como jugador de Baloto y Revancha que prepara su propia apuesta. |
| 5 | ¿Quien usara la solucion? | JD Rodriguez, el mismo jugador → el detalle va en 010_actors.md |
| 6 | ¿Que resultado espera obtener la empresa? | No hay empresa: el jugador busca obtener la combinacion de su metodo en un minuto como maximo. Lo crucial es el tiempo. |
| 7 | ¿Que procesos existen actualmente? | Lunes, miercoles y sabado por la manana: revisar en baloto.com si cayo el premio y comparar la apuesta con el ultimo resultado; despues pasar el ultimo sorteo a Excel y armar la combinacion con el metodo (`D-052`, `D-053`). A veces la revision se hace al dia siguiente del sorteo. |
| 8 | ¿Que restricciones existen? | Tres, firmes: sin APIs de modelos de lenguaje en el producto (`C-002`), despliegue en Vercel (`C-003`) y la aplicacion lo mas sencilla posible (`C-004`). |
| 9 | ¿Que sistemas actuales participan? | La web oficial (baloto.com y su pagina de resultados) y una hoja de Excel del jugador. |

---

## 2. Necesidades registradas

Una ficha por necesidad. Se numeran `N-001`, `N-002`, … y **no se reutiliza un numero** aunque la
necesidad se descarte despues.

🚨 **Una necesidad solo se registra si se puede enunciar sin nombrar una pantalla.** Si en el
enunciado aparece «pantalla», «boton», «formulario», «tablero», «app» o «menu», todavia es una
solucion disfrazada. Vuelve a preguntar *«¿como haces esto hoy?»*.

⚠️ **`N-XXX` esta declarado en la tabla «Codigos» de `project.md`.** Si aqui hiciera falta un codigo
que no este en esa tabla, se declara ahi primero, con su `D-XXX`: un codigo que aparece en un
archivo antes que en la tabla es un desfase, no una novedad.

### N-001 · Combinacion en maximo un minuto

| Campo | Contenido |
|---|---|
| Enunciado | Armar la combinacion de 6 numeros con el metodo propio del jugador tarda entre 40 y 60 minutos cada vez, y el jugador necesita tenerla en un minuto como maximo. |
| Quien la tiene | JD Rodriguez, jugador que prepara su propia apuesta. |
| Como se hace hoy | Entra a baloto.com, busca el ultimo sorteo, lo pasa a Excel y calcula a mano, numero por numero, cuando salio, cada cuanto sale y con que otros numeros sale, hasta completar la combinacion con las reglas del metodo (`D-052`, `D-053`). |
| Que cuesta hoy | Entre 40 y 60 minutos por sorteo; con tres sorteos por semana, entre 2 y 3 horas semanales. |
| De donde salio | Conversacion con el patrocinador (`S-015`) + seccion «hoy lo hago de la siguiente forma» de `_brief/client_brief.md`. |
| Fecha | 2026-09-17 |
| Peticion original | «La aplicacion tendra un boton: Generar números» y «esto debe ser rapido, cuestion de un minuto saber cuales son los numero que voy a seleccionar». |
| Estado | `REGISTRADA` |

**Relacionada con:** `D-052` · `D-053` · `C-002` · `C-003` · `C-004`

### N-002 · Saber por que entra cada numero

| Campo | Contenido |
|---|---|
| Enunciado | El jugador no confia en una combinacion si no ve, numero por numero, por que se eligio cada uno de los 6. |
| Quien la tiene | JD Rodriguez, jugador que prepara su propia apuesta. |
| Como se hace hoy | El propio jugador hace el razonamiento en Excel, asi que lo conoce paso a paso. |
| Que cuesta hoy | Nada mientras lo haga a mano; es la condicion para aceptar que lo haga otro. |
| De donde salio | Conversacion con el patrocinador (`S-015`) + ultimo parrafo de `_brief/client_brief.md`. |
| Fecha | 2026-09-17 |
| Peticion original | «el sistema me debe decir paso a paso como obtuvo cada numero hasta completar la combinacion de los 6 numeros y no solo mostrarme 6 numeros». |
| Estado | `REGISTRADA` |

**Relacionada con:** `N-001` · `D-052` · `D-053`

### N-003 · Saber cuantos numeros acerte

| Campo | Contenido |
|---|---|
| Enunciado | Despues de cada sorteo el jugador quiere saber cuantos numeros acerto con la combinacion que jugo, en Baloto y en Revancha, sin compararla a mano contra la pagina de resultados. |
| Quien la tiene | JD Rodriguez, jugador que prepara su propia apuesta. |
| Como se hace hoy | Entra a la pagina de resultados, busca el ultimo sorteo y compara a ojo los numeros de su apuesta con los que salieron, para Baloto y para Revancha. |
| Que cuesta hoy | Poco tiempo, pero depende de recordar que jugo: de lo jugado no queda registro, asi que no hay historia de participaciones. |
| De donde salio | Conversacion con el patrocinador (`S-015`) + `_brief/client_brief.md` §13-§15, §18 y §27. |
| Fecha | 2026-09-17 |
| Peticion original | «comparó el ultimo resultado contra mi apuesta realizada, lo hago mirando los números que acertaron entre el jugado y el resultado obtenido». |
| Estado | `REGISTRADA` |

**Relacionada con:** `N-001` · `D-054`

### N-004 · Saber con que acumulado se juega

| Campo | Contenido |
|---|---|
| Enunciado | Antes de jugar, el jugador quiere saber con que acumulado se juega el proximo sorteo y si el premio mayor cayo en el anterior, en Baloto y en Revancha. |
| Quien la tiene | JD Rodriguez, jugador que prepara su propia apuesta. |
| Como se hace hoy | Entra a baloto.com y lo deduce del monto: si Baloto esta en 4000 MM COP o Revancha en 2000 MM COP, el premio cayo. |
| Que cuesta hoy | Poco tiempo; es la primera parada de la rutina de cada dia de sorteo. |
| De donde salio | Conversacion con el patrocinador (`S-015`) + `_brief/client_brief.md` §5. |
| Fecha | 2026-09-17 |
| Peticion original | «Ingreso a la pagina web baloto.com. En esa pagina observo si el premio mayor cayó tanto para baloto como para revancha». |
| Estado | `REGISTRADA` |

**Relacionada con:** `N-003` · `D-054`

<!-- Copia el bloque completo para N-002, N-003, … -->

---

## 3. Peticiones que NO eran necesidades

Aqui queda el rastro del trabajo de desvestir. **No se borra:** si dentro de tres meses alguien
vuelve a pedir lo mismo, esta tabla dice que se pregunto y que se encontro.

| Lo que se pidio | Que se pregunto | Que resulto ser | Resultado |
|---|---|---|---|
| Generacion aleatoria de combinaciones (brief §6) | ¿Necesitas reproducir tu metodo mas rapido, o una generacion aleatoria con restricciones? | El jugador quiere su metodo, no el azar | → `N-001` |
| Prioridad Baloto o Revancha para excluir los numeros del ultimo sorteo de un solo juego (brief §26) | ¿Se excluye lo del ultimo sorteo de un juego o de los dos? | Se excluye siempre lo de los dos, pero la prioridad si decide sobre que juego se miden las ventanas | la prioridad se conserva con otra funcion (`D-053`) |
| Mostrar paso a paso como se obtuvo cada numero | ¿Por que no basta con los 6 numeros? | Sin ver el porque no confia en la combinacion | → `N-002` |

---

## 4. Comprobacion antes de cerrar este archivo

Esto **no** es la condicion de salida de la etapa —esa esta en `_phases/005_discovery.md` §6 y
abarca los cinco artefactos—. Esto es solo lo que le toca a este archivo.

- [ ] Las nueve preguntas tienen respuesta o un «no se sabe» **con su `A-XXX`**.
- [ ] Hay **al menos una** `N-XXX` registrada.
- [ ] **Ninguna** `N-XXX` nombra una pantalla, un boton ni un formulario.
- [ ] Cada `N-XXX` dice **quien la tiene**, con nombre de rol o de persona.
- [ ] Cada `N-XXX` dice **como se hace hoy**.
- [ ] Las peticiones descartadas estan en §3, no borradas.
- [ ] **No queda ni un solo `<` en el archivo** — ningun hueco sin rellenar.
- [ ] La seccion «Guia de llenado» de abajo **esta borrada**.
- [ ] La cabecera dice `CERRADO` y tiene fecha de cierre.

Las tres ultimas se comprueban desde fuera, sin leer el archivo entero:

```bash
grep -n "<" 005_discovery/005_needs.md                 # debe no devolver nada
grep -n "Guia de llenado" 005_discovery/005_needs.md   # debe no devolver nada
grep -n "^| Estado |" 005_discovery/005_needs.md       # debe decir CERRADO
```

🚨 **La salida cruda de esas tres ordenes va al registro**, no la conclusion. «Se comprobo» es un
veredicto; lo que alimenta una auditoria es «corri esto, salio esto».

---
---

## Guia de llenado — ⚠️ BORRAR esta seccion al cerrar el artefacto

> Existe para escribir el archivo. **No sobrevive al cierre de la etapa.** Si se queda, quien lea
> mañana no puede distinguir lo que decidio el proyecto de lo que traia la plantilla — y lo tratara
> como decision.

### La pregunta que hace todo el trabajo

> **¿Como haces esto hoy?**

Se repite en toda la etapa. Lo primero que dice el cliente es casi siempre una solucion, no una
necesidad.

| Lo que dijo | La necesidad detras | La pregunta que la destapa |
|---|---|---|
| «necesito una aplicacion para pedir recogidas» | los clientes no tienen forma de pedir una recogida sin llamar por telefono | *¿que pasa hoy cuando alguien quiere una recogida?* |
| «necesito un tablero» | nadie sabe cuantas recogidas se cumplieron | *¿que decision tomarias con ese dato?* |

### Ejemplo de una ficha completa

*(el ejemplo es de una app de recogida de reciclaje: otro dominio, a proposito, para que no se
confunda con el proyecto que se este escribiendo)*

### N-001 · Pedir recogida sin llamar

| Campo | Contenido |
|---|---|
| Enunciado | Un cliente no tiene forma de solicitar una recogida sin llamar por telefono en horario de oficina. |
| Quien la tiene | El cliente que genera el residuo — contacto operativo de la empresa recolectada. |
| Como se hace hoy | Llama al fijo. Si no contestan, vuelve a llamar. La analista lo anota en una hoja de calculo. |
| Que cuesta hoy | ~40 llamadas al mes; 6 quedaron sin registrar en julio. |
| De donde salio | Entrevista con la analista de logistica + revision de la hoja de calculo de julio. |
| Fecha | 2026-07-14 |
| Peticion original | «Necesito una app para pedir recogidas.» |
| Estado | `REGISTRADA` |

**Relacionada con:** Actor Generador (`010_actors.md`) · `C-XXX` (solo horario habil)

### Errores que esta plantilla existe para evitar

| Error | Como se ve | Que hacer |
|---|---|---|
| Necesidad que es una solucion | «que haya un boton para agendar» | preguntar *«¿como lo haces hoy?»* hasta que desaparezca el boton |
| Dueño en plural | «lo tienen los usuarios» | un rol o una persona; si son varios, son varias `N-XXX` |
| Supuesto disfrazado de hecho | «los clientes tienen celular» | pasarlo a `A-XXX` en `_persistence/assumptions.md`, con su forma de validarlo y su disparador |
| Rellenar el «que cuesta hoy» con adjetivos | «es muy ineficiente» | un numero, o «no se sabe → `A-XXX`» |
| Descartar una peticion sin dejar rastro | §3 vacia y §2 con menos fichas | toda peticion desvestida deja fila en §3 |

### Lo que esta etapa tiene PROHIBIDO, y aqui se cuela solo

Diseñar pantallas · elegir tecnologia · escribir codigo · escribir especificacion, requisitos o
arquitectura · prometer alcance o fechas. Si al llenar este archivo aparece un nombre de libreria o
un plazo, va fuera: no hay evidencia todavia para prometer nada.

📌 Definiciones: `_methodology/000_method.md` §13-§14 y §46.
📌 Procedimiento: `_phases/005_discovery.md` §4, pasos 1, 2 y 6.
📌 Donde van los supuestos y las restricciones: `_persistence/assumptions.md` y
`_persistence/constraints.md` — el descubrimiento **no tiene registro propio** para ellos.
