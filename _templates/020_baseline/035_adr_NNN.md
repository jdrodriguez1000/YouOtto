# Decision arquitectonica <NNN> — `<titulo corto de la decision>`

> 📄 **Se copia una vez por decision.** El nombre del archivo lleva el numero con tres cifras:
> `035_adr_001.md`, `035_adr_002.md`, … El numero **no se reutiliza**, ni siquiera si la decision se
> revierte despues: una decision revertida sigue siendo parte de como se llego hasta aqui.
>
> 🚨 **Estos archivos viven en una subcarpeta propia dentro de la carpeta de artefactos de la
> etapa**, no sueltos junto a los demas. Cual es esa carpeta lo dice `project.md`.

| Campo | Valor |
|---|---|
| Artefacto | `020_baseline/<subcarpeta de decisiones>/035_adr_<NNN>.md` |
| Etapa que lo produce | `020_baseline`, Paso 8 |
| Estado | `<PROPUESTA · ACEPTADA · SUPERADA POR ADR-NNN · REVERTIDA>` |
| Fecha | `<AAAA-MM-DD>` |
| Escrito por | `manager` |
| Decision de registro asociada | `D-XXX` |

> 🚨 **La decision arquitectonica y la entrada de `_persistence/decisions.md` no son la misma
> anotacion, y las dos hacen falta.** Esta es un **artefacto del producto**: vive con la baseline y
> la lee quien vaya a tocar la arquitectura. Aquella es el **registro de la jornada**: vive en
> `_persistence/` y la lee quien reconstruya como se llego hasta aqui. Escribir solo una deja cojo
> al otro lector.

> ⚠️ **La fecha la lee `report_auditor` y la cruza contra el historial de `git`.** Una decision
> fechada antes del commit que la introduce no es un detalle de formato: es la diferencia entre una
> decision tomada y una reconstruida.

---

## 0. ¿Merece esta decision un archivo propio?

Se escribe una **por decision cara de revertir**, no por decision tomada. El criterio:

> **¿Cuanto costaria cambiar esto dentro de seis meses?**

Las que casi siempre lo son: **lenguaje y marco de trabajo · almacenamiento · autenticacion · donde
se despliega · que se integra y que se construye.**

⚠️ **Si la respuesta es «poco», no se escribe un archivo:** basta la fila de la tabla de tecnologias
en `020_baseline/030_architecture.md` §4. Un registro de decisiones lleno de decisiones baratas deja
de leerse, y entonces tampoco se leen las caras.

---

## 1. Contexto

`<que estaba pasando cuando hubo que decidir: que se sabia, que restricciones habia, en que punto del
producto estabamos. Sin justificar todavia nada>`

📌 **El contexto se escribe en pasado y con lo que se sabia ENTONCES.** Escribirlo con lo que se sabe
hoy hace que la decision parezca obvia, y una decision obvia no enseña nada al que la lee despues.

---

## 2. Problema

`<que habia que decidir, enunciado como pregunta>`

⚠️ **Si el problema no se puede enunciar como pregunta, probablemente no habia decision:** habia una
preferencia buscando justificacion.

---

## 3. Alternativas

🚨 **Este es el campo que mas vale de todo el archivo.** Dentro de seis meses la pregunta no sera
*«¿por que esto?»* sino *«¿ya habiamos mirado aquello?»* — y esa es exactamente la que no se puede
responder reconstruyendo.

| # | Alternativa | A favor | En contra | Por que no se eligio |
|---|---|---|---|---|
| 1 | `<la elegida — se marca abajo>` | `<…>` | `<…>` | — **ELEGIDA** |
| 2 | `<…>` | `<…>` | `<…>` | `<…>` |
| 3 | `<…>` | `<…>` | `<…>` | `<…>` |

⚠️ **Una sola alternativa no es una tabla de alternativas.** Si de verdad no habia otra opcion, eso
se escribe como tal —«unica opcion disponible por `C-XXX`»— y entonces lo que hay es una
**restriccion**, no una decision. Confundirlas hace que dentro de un año se debata como si hubiera
habido eleccion.

⛔ **Y «no se considero» no es lo mismo que «se descarto».** Si una opcion evidente no se miro, se
dice; el que lea despues necesita saber la diferencia entre una puerta cerrada y una que nadie abrio.

---

## 4. Decision

> `<que se decidio, en una frase, en presente y sin condicionales>`

**Quien la tomo:** `<…>`
**Sobre que evidencia:** `<la observacion, el dato o la restriccion concreta>`

🚨 **Que observacion la respalda y cual la tumbaria:**

| | Contenido |
|---|---|
| **La respalda** | `<la evidencia concreta — sesion, dato, restriccion, medicion>` |
| **La tumbaria** | `<la observacion concreta que, si apareciera, obligaria a revisarla>` |

⚠️ **Un motivo que no puede decir las dos cosas es una suposicion con ropa de conclusion.** Escribir
«se eligio asi a proposito» sin eso blinda la decision contra el siguiente lector, incluido quien la
escribio.

---

## 5. Consecuencias

| | Que trae |
|---|---|
| **A favor** | `<lo que gana el producto>` |
| **En contra** | `<lo que cuesta, y quien lo paga>` |
| **Lo que queda atado** | `<que otras decisiones dependen ahora de esta>` |
| **Coste de revertir** | `<que habria que rehacer, estimado>` |
| **Deuda que genera** | `<NO · SI → DT-XXX en _persistence/techdebt.md>` |

🚨 **La ultima fila es la que evita la deuda mas cara.** No es la que se escribe mal: es la que se
decide bien **sabiendo que es provisional**, y que a los seis meses nadie recuerda que lo era.

---

## 6. Que se comprueba, y cuando

Una decision arquitectonica no se cierra: se vigila. Aqui queda el disparador que obliga a releerla.

| Que se vigila | Umbral o señal | Cuando se mira | Que se hace si aparece |
|---|---|---|---|
| `<…>` | `<…>` | `<…>` | `<se revisa esta decision · se abre ADR-NNN>` |

---

## 7. Comprobacion antes de commitear este archivo

- [ ] La decision es **cara de revertir**; si no lo es, no lleva archivo propio.
- [ ] §1 esta escrito con lo que se sabia **entonces**.
- [ ] §2 esta enunciado como pregunta.
- [ ] §3 tiene **mas de una** alternativa, o declara que era la unica y por que `C-XXX`.
- [ ] Ninguna alternativa se descarto sin razon escrita.
- [ ] §4 dice **que la respalda y que la tumbaria**, las dos.
- [ ] §5 dice el **coste de revertir** y si genera deuda.
- [ ] Si genera deuda, existe su `DT-XXX` en `_persistence/techdebt.md`.
- [ ] Existe su `D-XXX` en `_persistence/decisions.md`, **con las alternativas descartadas**.
- [ ] **No queda ni un solo `<` en el archivo** — ningun hueco sin rellenar.
- [ ] La seccion «Guia de llenado» de abajo **esta borrada**.

Las mecanicas se comprueban desde fuera:

```bash
grep -n "<" 020_baseline/<subcarpeta>/035_adr_<NNN>.md               # debe no devolver nada
grep -n "Guia de llenado" 020_baseline/<subcarpeta>/035_adr_<NNN>.md # debe no devolver nada
grep -n "^| Estado |" 020_baseline/<subcarpeta>/035_adr_<NNN>.md     # debe decir ACEPTADA
sed -n '/^## 3\./,/^## 4\./p' 020_baseline/<subcarpeta>/035_adr_<NNN>.md | grep -c '^| '
git log --diff-filter=A --format=%ad -- 020_baseline/<subcarpeta>/035_adr_<NNN>.md
```

📌 **La cuarta cuenta las filas de §3 incluyendo la cabecera y el separador**, asi que devuelve dos
mas que el numero de alternativas. Se publica tal cual y se dice cuantas son.

📌 **La quinta cruza la fecha declarada contra la del commit que introdujo el archivo.** Se publica
tambien cuando cuadra: un control cuyo resultado no se publica no se distingue de uno que no se
corrio.

🚨 **La salida cruda de las cinco ordenes va al registro**, no la conclusion.

---
---

## Guia de llenado — ⚠️ BORRAR esta seccion antes de commitear

> Existe para escribir el archivo. **No sobrevive al commit.**

### La pregunta que hace todo el trabajo

> **¿Ya habiamos mirado aquello?**

Es la pregunta que alguien hara dentro de seis meses, y la unica que este archivo existe para poder
responder. Todo lo demas —contexto, consecuencias— se puede reconstruir a medias; las alternativas
descartadas, no: **al `git diff` solo llega el ganador.**

### Ejemplo de una tabla de §3

*(el ejemplo es de una app de recogida de reciclaje: otro dominio, a proposito)*

| # | Alternativa | A favor | En contra | Por que no se eligio |
|---|---|---|---|---|
| 1 | Base de datos relacional gestionada | modelo estable y con relaciones; copias de seguridad incluidas; el equipo la conoce | coste fijo mensual desde el dia uno | — **ELEGIDA** |
| 2 | Almacen documental gestionado | sin esquema fijo, mas rapido de arrancar | las cinco entidades tienen relaciones claras; las consultas de la analista serian por union | el modelo no es documental: se estaria pagando flexibilidad que no hace falta |
| 3 | Archivo local versionado | coste cero | un solo escritor, sin concurrencia, sin copias | el MVP tiene un actor pero varias sesiones simultaneas previstas |
| 4 | Almacen en memoria con volcado periodico | — | — | **no se considero**: nadie lo propuso hasta despues de decidir |

📌 **Fijate en la fila 4.** Deja escrito que esa puerta nadie la abrio. Es informacion distinta de
«se descarto», y es la que evita que dentro de un año alguien crea que ya se evaluo.

### Errores que esta plantilla existe para evitar

| Error | Como se ve | Que hacer |
|---|---|---|
| Una sola alternativa | §3 con una fila | o hay mas, o es una restriccion y se dice asi |
| Alternativa descartada sin razon | la ultima columna vacia | escribir por que no, aunque sea «coste» |
| Contexto escrito desde hoy | la decision parece obvia al leerla | reescribirlo con lo que se sabia entonces |
| Decision sin refutador | §4 dice que la respalda y nada mas | escribir que observacion la tumbaria |
| Consecuencias solo a favor | la fila «en contra» vacia | toda decision cara cuesta algo; decir que y a quien |
| Provisional sin `DT-XXX` | «por ahora usamos esto» y nada mas | si se sabe provisional, es deuda tecnica hoy |
| Archivo para una decision barata | decenas de archivos triviales | la fila de la tabla de tecnologias basta |
| Solo el archivo, sin `D-XXX` | la baseline lo tiene, el registro no | las dos anotaciones, siempre |

### Lo que esta etapa tiene PROHIBIDO, y aqui se cuela solo

Escribir codigo de producto · arquitectura para una escala que no existe · dar por cerrado un
hallazgo propio · evaluar el propio trabajo.

📌 Definiciones: `_methodology/000_method.md` §38 y §39.
📌 Procedimiento: `_phases/020_baseline.md` §4 Paso 8, y §7.
📌 La vista de conjunto: `020_baseline/030_architecture.md`.
📌 El registro de la jornada: `_persistence/decisions.md` y `_persistence/techdebt.md`.
