# Especificacion — <NOMBRE DEL PROYECTO>

| Campo | Valor |
|---|---|
| Artefacto | `020_baseline/025_specification.md` |
| Etapa que lo produce | `020_baseline`, Paso 6 |
| Estado | `BORRADOR` |
| Abierto | `<AAAA-MM-DD>` |
| Cerrado | `<AAAA-MM-DD, o «—» mientras siga en BORRADOR>` |
| Escrito por | `manager` |

> **Estado:** `BORRADOR` mientras la etapa siga abierta · `CERRADO` cuando se cumpla la condicion de
> salida de `_phases/020_baseline.md` §6.
>
> ⚠️ **Las dos fechas las lee `report_auditor` y las cruza contra el historial de `git`.**

> 🚨 **Este es el archivo donde la etapa se descarrila.** Especificar se siente productivo y no
> compromete a nada todavia, asi que crece solo. La pregunta que lo corta esta en §0 y se relee cada
> vez que se abre una seccion nueva.

---

## 0. 🚨 ¿Cuanto es «suficiente»?

> **Suficiente es lo que hace falta para construir el esqueleto que camina y la PRIMERA unidad
> incremental. Ni una linea mas.**

Todo lo que se especifique mas alla se escribira **antes de saber**, y habra que reescribirlo cuando
la primera unidad enseñe algo. La especificacion se amplia en cada iteracion: para eso es incremental.

⚠️ **El sintoma de que este archivo se desbordo es concreto, no una sensacion:** si la etapa
siguiente esta esperando a que se termine de especificar, ya se paso. Lo que necesita para empezar
son **dos cosas**, y estan en §8 de `_phases/020_baseline.md`: la Arquitectura Base y un camino fino
elegido. Nada de este archivo.

⛔ **Solo de lo que entra al MVP.** Si una regla pertenece a algo de la lista del «no», **no se
escribe** — y no se escribe «por si acaso», que es como vuelve siempre.

---

## 1. Funcionalidades

Que sabe hacer el producto, al detalle que hace falta para construirlo. Una entrada por feature.

### FT-XXX · `<titulo de la feature>`

| Campo | Contenido |
|---|---|
| Que hace | `<…>` |
| Actor | `<…>` |
| Entradas | `<que datos recibe>` |
| Salidas | `<que produce, y donde queda>` |
| Escenarios que la cubren | `SC-XXX`, `SC-XXX` |
| Fuera de esta version | `<lo que esta feature NO hace en el MVP, y a donde va>` |

⚠️ **La ultima fila es la que evita que la feature crezca durante la construccion.** Sin ella, cada
duda de implementacion se resuelve hacia arriba: se añade.

<!-- Copia el bloque para cada feature del MVP -->

---

## 2. Reglas de negocio

Una fila por regla. **Cada una nombra la feature o el escenario donde se ejerce**: una regla que no
se ejerce en ningun sitio es una regla que nadie va a implementar ni comprobar.

| # | Regla | Donde se ejerce | De donde sale | Que pasa si se incumple |
|---|---|---|---|---|
| 1 | `<enunciado, en condicional: si … entonces …>` | `FT-XXX` · `SC-XXX` | `<validacion de negocio del prototipo · C-XXX · descubrimiento>` | `<el comportamiento esperado ante el incumplimiento>` |

🚨 **La ultima columna no es opcional.** Una regla sin comportamiento de incumplimiento se implementa
como un `if` sin `else`, y lo que pasa entonces lo decide quien programe, en silencio.

---

## 3. Datos

Las entidades que el MVP necesita, y **solo esas**.

### `<Entidad>`

| Campo | Tipo | Obligatorio | Regla | Notas |
|---|---|---|---|---|
| `<nombre>` | `<tipo>` | `<SI · NO>` | `<validacion que aplica>` | `<…>` |

**Relaciones:** `<con que otras entidades, y con que cardinalidad>`
**Ciclo de vida:** `<que estados tiene, y que transiciones son validas>`

⚠️ **Un estado sin transiciones declaradas es un estado del que se puede salir a cualquier sitio.**
Escribir las transiciones cuesta una linea ahora y evita el estado inconsistente que aparece en
produccion.

<!-- Copia el bloque para cada entidad del MVP -->

---

## 4. Interfaces

Los puntos por los que el producto se toca. **No es diseño de pantallas**: es que interaccion existe
y que informacion pasa.

| Interfaz | Quien la usa | Que permite hacer | Que informacion necesita | Que devuelve |
|---|---|---|---|---|
| `<…>` | `<actor del MVP · sistema integrador>` | `<…>` | `<…>` | `<…>` |

---

## 5. Validaciones

| # | Que se valida | Donde | Cuando | Que pasa si falla |
|---|---|---|---|---|
| 1 | `<…>` | `<interfaz · dato · regla>` | `<al escribir · al enviar · al procesar>` | `<mensaje o comportamiento esperado>` |

⚠️ **«Se muestra un error» no es un comportamiento esperado.** Dice que pasa algo, no que pasa. Lo
que se escribe es que ve el actor y en que estado queda lo que estaba haciendo.

---

## 6. Requisitos

### 6.1 Funcionales

| # | Requisito | De que feature sale |
|---|---|---|
| 1 | `<…>` | `FT-XXX` |

### 6.2 No funcionales

| # | Requisito | Magnitud y umbral | Como se comprobara | De donde sale el umbral |
|---|---|---|---|---|
| 1 | `<rendimiento · disponibilidad · usabilidad · mantenibilidad>` | `<el numero>` | `<…>` | `<dato observado · criterio, y de quien>` |

🚨 **Un requisito no funcional sin numero no es un requisito: es un deseo.** «Rapido», «seguro» y
«escalable» no se pueden incumplir, y por eso tampoco se pueden cumplir.

⚠️ **Y el umbral se pone contra lo que el MVP tiene que sostener**, que es adopcion de un solo actor.
Poner umbrales contra una escala que nadie ha visto es la forma mas cara de equivocarse en esta
etapa, porque el error no se nota hasta mucho despues y para entonces ya lo sostiene todo.

---

## 7. Restricciones

| `C-XXX` | Restriccion | Que limita en la especificacion |
|---|---|---|
| `C-XXX` | `<copiado de _persistence/constraints.md>` | `<…>` |

📌 **El original vive en `_persistence/constraints.md`.** Aqui se copian las que aplican, no se
inventan nuevas: una restriccion que nace en este archivo tiene que entrar primero en el registro.

---

## 8. Integraciones

| Sistema | Que aporta | Que se le envia | Que devuelve | ¿Existe hoy? | Que pasa si no responde |
|---|---|---|---|---|---|
| `<…>` | `<…>` | `<…>` | `<…>` | `<SI · NO → A-XXX>` | `<comportamiento degradado esperado>` |

🚨 **La ultima columna se escribe ahora o no se escribe nunca.** Durante la construccion, el
integrador siempre responde —porque se prueba cuando esta arriba—, y el comportamiento ante el fallo
se decide el dia del incidente.

---

## 9. Lo que NO se especifica en esta version

**No se borra:** sin esta tabla, un hueco en la especificacion parece un olvido en vez de una
decision, y alguien lo rellena.

| Que no se especifico | Por que | Cuando se especifica |
|---|---|---|
| `<…>` | `<pertenece a la lista del «no» · no hace falta para la primera unidad>` | `<…>` |

---

## 10. Comprobacion antes de cerrar este archivo

- [ ] **Cada** funcionalidad de §1 corresponde a una feature de `015_features.md`.
- [ ] **Ninguna** funcionalidad de §1 pertenece a la lista del «no» del alcance.
- [ ] Cada feature de §1 dice **que queda fuera de esta version**.
- [ ] **Cada** regla de §2 dice donde se ejerce y que pasa si se incumple.
- [ ] Cada entidad de §3 tiene **ciclo de vida** con transiciones.
- [ ] Cada validacion de §5 dice **que pasa si falla**, no solo que se valida.
- [ ] **Cada** requisito no funcional tiene **numero** y procedencia del umbral.
- [ ] Las restricciones de §7 estan **copiadas** de `_persistence/constraints.md`, no inventadas.
- [ ] Cada integracion de §8 dice **que pasa si no responde**.
- [ ] Lo aplazado esta en §9, no borrado.
- [ ] **No queda ni un solo `<` en el archivo** — ningun hueco sin rellenar.
- [ ] La seccion «Guia de llenado» de abajo **esta borrada**.
- [ ] La cabecera dice `CERRADO` y tiene fecha de cierre.

Las mecanicas se comprueban desde fuera:

```bash
grep -n "<" 020_baseline/025_specification.md                # debe no devolver nada
grep -n "Guia de llenado" 020_baseline/025_specification.md  # debe no devolver nada
grep -n "^| Estado |" 020_baseline/025_specification.md      # debe decir CERRADO
grep -c "^### FT-" 020_baseline/025_specification.md         # features especificadas
grep -c "^### FT-" 020_baseline/015_features.md              # features declaradas
```

🚨 **Las dos ultimas se publican juntas y se dice si coinciden.** Si la especificacion tiene **mas**
que el artefacto de features, alguien especifico algo que no es feature de este MVP — que es
exactamente el defecto que este archivo tiende a producir. Si tiene **menos**, hay features sin
especificar, y eso se declara aqui o en §9.

🚨 **La salida cruda de las cinco ordenes va al registro**, no la conclusion.

---
---

## Guia de llenado — ⚠️ BORRAR esta seccion al cerrar el artefacto

> Existe para escribir el archivo. **No sobrevive al cierre de la etapa.**

### La pregunta que hace todo el trabajo

> **¿Hace falta esto para el esqueleto que camina o para la PRIMERA unidad?**

Si la respuesta es «no, pero lo vamos a necesitar», va a §9 con su condicion. Si es «no, pero es
rapido escribirlo», tambien: lo barato de escribir es igual de caro de mantener desactualizado.

### El otro extremo, que tambien existe

Este archivo tiende a crecer, pero la respuesta no es dejarlo vacio. Sin especificacion, las
decisiones se toman igual — solo que las toma quien programa, sin dejar rastro, y el documento que
dice como es el producto ya no lo dice. **El metodo evita los dos extremos, no uno.**

### Ejemplo de una regla de §2

*(el ejemplo es de una app de recogida de reciclaje: otro dominio, a proposito)*

| # | Regla | Donde se ejerce | De donde sale | Que pasa si se incumple |
|---|---|---|---|---|
| 1 | Si la fecha solicitada no es dia habil, la solicitud no se registra | `FT-001` · `SC-003` | validacion de negocio del prototipo: la operacion no tiene rutas en fin de semana | se muestra la siguiente fecha habil disponible y la solicitud queda sin enviar, con lo escrito conservado |

📌 **Fijate en la ultima celda:** dice que ve el usuario **y** en que estado queda su trabajo. Sin la
segunda mitad, lo normal es que se pierda lo escrito, y nadie lo decidio.

### Errores que esta plantilla existe para evitar

| Error | Como se ve | Que hacer |
|---|---|---|
| Especificar lo que no entra | §1 con features que no estan en `015_features.md` | fuera; a §9 si hace falta dejar constancia |
| Regla sin incumplimiento | la ultima columna vacia | escribir el comportamiento esperado |
| Entidad sin ciclo de vida | campos y nada mas | estados y transiciones validas |
| Requisito no funcional sin numero | «tiene que ser rapido» | magnitud, umbral y procedencia |
| Umbral contra una escala inventada | «10 000 usuarios concurrentes» en un MVP de un actor | ponerlo contra lo que el MVP tiene que sostener |
| Validacion sin consecuencia | «se valida el correo» | que pasa si falla, y en que estado queda lo escrito |
| Integracion sin plan de fallo | la ultima columna de §8 vacia | escribir el comportamiento degradado |
| Diseñar pantallas | §4 con maquetas | §4 dice que interaccion existe, no como se ve |

### Lo que esta etapa tiene PROHIBIDO, y aqui se cuela solo

Escribir codigo de producto · especificar lo que no entra al MVP · terminar los documentos antes de
programar · arquitectura o requisitos para una escala que no existe · una feature sin necesidad
detras.

📌 Definiciones: `_methodology/000_method.md` §36 y §39.
📌 Procedimiento: `_phases/020_baseline.md` §4 Paso 6, y §2 («¿cuanto es suficiente?»).
📌 Que entra y que no: `020_baseline/005_scope.md`.
📌 Las restricciones y los supuestos: `_persistence/constraints.md` y `_persistence/assumptions.md`.
