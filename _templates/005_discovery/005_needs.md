# Necesidades — <NOMBRE DEL PROYECTO>

| Campo | Valor |
|---|---|
| Artefacto | `005_discovery/005_needs.md` |
| Etapa que lo produce | `005_discovery` |
| Estado | `BORRADOR` |
| Abierto | `<AAAA-MM-DD>` |
| Cerrado | `<AAAA-MM-DD, o «—» mientras siga en BORRADOR>` |
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
| 1 | ¿Por que existe la necesidad? | `<…>` |
| 2 | ¿Para que se necesita la aplicacion? | `<…>` |
| 3 | ¿Que problema se quiere resolver? | `<…>` |
| 4 | ¿Quien tiene el problema? | `<…>` |
| 5 | ¿Quien usara la solucion? | `<resumen en una linea → el detalle va en 010_actors.md>` |
| 6 | ¿Que resultado espera obtener la empresa? | `<…>` |
| 7 | ¿Que procesos existen actualmente? | `<…>` |
| 8 | ¿Que restricciones existen? | `<resumen en una linea → cada una va como C-XXX en _persistence/constraints.md>` |
| 9 | ¿Que sistemas actuales participan? | `<…>` |

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

### N-001 · `<titulo corto, cinco palabras como maximo>`

| Campo | Contenido |
|---|---|
| Enunciado | `<la necesidad, sin nombrar ninguna pantalla>` |
| Quien la tiene | `<persona o rol concreto — no «la empresa», no «los usuarios»>` |
| Como se hace hoy | `<el proceso real de hoy, sin la aplicacion>` |
| Que cuesta hoy | `<tiempo, dinero, errores o trabajo perdido — con numero si lo hay>` |
| De donde salio | `<entrevista con X · observacion del proceso · documento Y>` |
| Fecha | `<AAAA-MM-DD en que se recogio>` |
| Peticion original | `<lo que el cliente pidio literalmente, antes de desvestirla>` |
| Estado | `REGISTRADA` |

**Relacionada con:** `<actores de 010_actors.md · A-XXX / C-XXX de _persistence/ · —>`

<!-- Copia el bloque completo para N-002, N-003, … -->

---

## 3. Peticiones que NO eran necesidades

Aqui queda el rastro del trabajo de desvestir. **No se borra:** si dentro de tres meses alguien
vuelve a pedir lo mismo, esta tabla dice que se pregunto y que se encontro.

| Lo que se pidio | Que se pregunto | Que resulto ser | Resultado |
|---|---|---|---|
| `<«necesito un tablero»>` | `<¿que decision tomarias con ese dato?>` | `<nadie sabe cuantas recogidas se cumplieron>` | `<→ N-002>` |
| `<…>` | `<…>` | `<…>` | `<descartada: no hay decision detras>` |

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
