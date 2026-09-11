# Las tres preguntas — <NOMBRE DEL PROYECTO>

| Campo | Valor |
|---|---|
| Artefacto | `020_baseline/040_three_questions.md` |
| Etapa que lo produce | `020_baseline`, Paso 9 |
| Estado | `BORRADOR` |
| Abierto | `<AAAA-MM-DD>` |
| Cerrado | `<AAAA-MM-DD, o «—» mientras siga en BORRADOR>` |
| Escrito por | `manager` |

> **Estado:** `BORRADOR` mientras la etapa siga abierta · `CERRADO` cuando se cumpla la condicion de
> salida de `_phases/020_baseline.md` §6.
>
> ⚠️ **Las dos fechas las lee `report_auditor` y las cruza contra el historial de `git`.**

---

## 0. 🚨 La regla que gobierna este archivo entero

> **Ninguna de las tres se marca prometiendo tenerla en cuenta: se marca con un artefacto que
> existe.**

«Lo tendremos en cuenta» no es una declaracion; es el recuerdo de que existia la pregunta.

📌 **Aqui se DECLARAN, con dueño y sitio. Se CONSTRUYEN en las etapas de construccion.** Declarar no
es construir, y confundirlos hace este archivo inutil por el otro lado: una carpeta vacia que existe
y corre es una declaracion valida; una promesa de escribir pruebas no lo es.

⚠️ **Se declaran ANTES de la primera linea de producto.** Las tres se cobran solas cuando ya hay algo
que perder, y entonces se construyen a la carrera — que es cuando salen mal y caras.

---

## 1. Evaluacion — ¿funciona?

**Que declara:** donde viven las pruebas.
**Artefacto que la marca:** la carpeta existe y **corre**, aunque este casi vacia.

| Campo | Contenido |
|---|---|
| Donde viven las pruebas | `<ruta dentro del repositorio>` |
| Con que se ejecutan | `<el comando literal>` |
| Que hay hoy dentro | `<«una prueba de humo que pasa» · «una prueba que falla a proposito» · …>` |
| Dueño | `<quien responde de que siga corriendo>` |
| Que NO cubre todavia | `<…>` |

**Verificacion — la carpeta existe y el comando corre:**

```text
$ <el comando literal, tal como se ejecuta>
<la salida cruda, tal como salio>
```

🚨 **Una carpeta que existe pero cuyo comando no corre no marca nada.** El artefacto no es la
carpeta: es que **haya salido algo** al ejecutarla. Si hoy dentro solo hay una prueba trivial, se
dice — «casi vacia» es un estado valido; «no se probo el comando» no.

⛔ **Y una prueba escrita para pasar no cuenta.** Un test que no puede fallar es documentacion
disfrazada de evidencia — mas cara que no tenerlo, porque ademas da confianza.

---

## 2. Observabilidad — ¿que esta haciendo ahora?

**Que declara:** donde se escribe el registro de ejecucion.
**Artefacto que la marca:** la ruta decidida y el formato elegido.

| Campo | Contenido |
|---|---|
| Donde se escribe | `<ruta, servicio o destino>` |
| Formato | `<estructurado · linea de texto · …, y con que campos minimos>` |
| Que se registra siempre | `<los eventos que no pueden faltar>` |
| Que NO se registra nunca | 🚨 `<datos sensibles, credenciales, informacion personal>` |
| Retencion | `<cuanto tiempo, y quien lo purga>` |
| Dueño | `<…>` |

**Verificacion — la ruta y el formato estan decididos y escritos:**

```text
$ <la orden que muestra la decision escrita — configuracion, archivo o similar>
<la salida cruda>
```

⚠️ **La fila «que NO se registra nunca» es la que se escribe tarde.** El registro de ejecucion es el
sitio por donde se escapan los datos sensibles sin que nadie lo decida: se escapan por comodidad de
depuracion, y quedan.

---

## 3. Seguridad — ¿que puede hacer y que le pueden hacer?

**Que declara:** permisos, secretos y superficie expuesta.
**Artefacto que la marca:** la lista escrita, y los secretos **fuera del historial**.

### 3.1 Permisos

| Actor o componente | Que puede hacer | Que NO puede hacer | Como se comprueba |
|---|---|---|---|
| `<…>` | `<…>` | `<…>` | `<…>` |

### 3.2 Secretos

| Secreto | Donde vive | Como llega al proceso | Quien lo rota |
|---|---|---|---|
| `<…>` | 🚨 `<fuera del control de versiones — donde exactamente>` | `<…>` | `<…>` |

### 3.3 Superficie expuesta

| Que queda accesible desde fuera | Desde donde | Que lo protege |
|---|---|---|
| `<…>` | `<…>` | `<…>` |

### 3.4 🚨 Los secretos, fuera del historial — con su orden y su salida cruda

Esto **no** se declara: se comprueba, y se comprueba con el patron y el ambito escritos.

```text
$ <el barrido literal: patron y ambito, tal como se ejecuto>
<la salida cruda, tal como salio — incluido el codigo de salida>
```

🚨 **Un resultado sin su orden no es reproducible, y el que no se puede reproducir hay que rehacerlo
entero para contrastarlo.** «No hay secretos» es un veredicto; lo que alimenta una auditoria es
«corri esto, salio esto».

⚠️ **Y el barrido dice lo que su patron dice, ni una palabra mas.** Si cubre tres rutas, el enunciado
que lo acompaña habla de esas tres rutas — no del repositorio. Un enunciado que afirma mas que su
orden es exactamente el hueco por el que se cuela lo que se buscaba.

⛔ **Si el barrido encuentra algo, la etapa no cierra por esta casilla.** Sacar un secreto de un
archivo no lo saca del historial: eso es una accion **irreversible sobre la historia del
repositorio** y se escala al usuario antes de tocar nada.

---

## 4. Resumen — las tres, con su artefacto

| Pregunta | Artefacto que la marca | ¿Existe hoy? | Dueño | Se construye en |
|---|---|---|---|---|
| **Evaluacion** — ¿funciona? | `<la carpeta y su comando>` | `<SI · NO>` | `<…>` | `<etapa de construccion>` |
| **Observabilidad** — ¿que esta haciendo ahora? | `<la ruta y el formato>` | `<SI · NO>` | `<…>` | `<…>` |
| **Seguridad** — ¿que puede y que le pueden hacer? | `<la lista, y el barrido en verde>` | `<SI · NO>` | `<…>` | `<…>` |

🚨 **Un «NO» en la tercera columna deja la etapa abierta.** No hay version parcial de esta condicion
de salida: las tres se declaran con artefacto, o la etapa sigue.

---

## 5. Comprobacion antes de cerrar este archivo

- [ ] §1 tiene el comando **ejecutado**, con su salida cruda — no solo la ruta.
- [ ] La carpeta de pruebas **existe** y su comando **devuelve algo**.
- [ ] §2 dice donde se escribe, con que formato y **que no se registra nunca**.
- [ ] §3.2 dice, para cada secreto, **donde vive fuera del control de versiones**.
- [ ] §3.4 tiene el barrido con **su patron, su ambito y su salida cruda**, incluido el codigo de
      salida.
- [ ] El enunciado que acompaña al barrido **no afirma mas de lo que su patron cubre**.
- [ ] §4 no tiene ningun `NO`.
- [ ] **No queda ni un solo `<` en el archivo** — ningun hueco sin rellenar.
- [ ] La seccion «Guia de llenado» de abajo **esta borrada**.
- [ ] La cabecera dice `CERRADO` y tiene fecha de cierre.

Las mecanicas se comprueban desde fuera:

```bash
grep -n "<" 020_baseline/040_three_questions.md                # debe no devolver nada
grep -n "Guia de llenado" 020_baseline/040_three_questions.md  # debe no devolver nada
grep -n "^| Estado |" 020_baseline/040_three_questions.md      # debe decir CERRADO
sed -n '/^## 4\./,/^## 5\./p' 020_baseline/040_three_questions.md | grep -c '| NO |'
```

📌 **La cuarta debe devolver `0`.** Se publica el numero tal cual sale, tambien cuando es cero: un
control cuyo resultado no se publica no se distingue de un control que no se corrio.

🚨 **La salida cruda de las cuatro ordenes va al registro**, no la conclusion.

---
---

## Guia de llenado — ⚠️ BORRAR esta seccion al cerrar el artefacto

> Existe para escribir el archivo. **No sobrevive al cierre de la etapa.**

### La pregunta que hace todo el trabajo

> **¿Que puedo ejecutar hoy para enseñar que esto existe?**

Si la respuesta es «nada todavia», la pregunta no esta declarada: esta recordada. Y una pregunta
recordada se cobra sola mas adelante, cuando ya hay algo que perder.

### Por que las tres van juntas y antes de programar

Las tres tienen la misma forma de fallar: **nadie las echa de menos hasta que hacen falta**, y para
entonces construirlas cuesta diez veces mas y sale peor. Declararlas ahora cuesta una carpeta, una
ruta y una lista.

| Pregunta | Cuando se cobra sola | Que cuesta entonces |
|---|---|---|
| Evaluacion | el primer cambio que rompe algo que funcionaba | reconstruir la confianza a mano, cada vez |
| Observabilidad | el primer fallo que no se reproduce | adivinar, o instrumentar en caliente |
| Seguridad | el primer incidente, o la primera revision externa | reescribir permisos sobre codigo ya escrito |

### Ejemplo de la casilla de evaluacion

*(el ejemplo es de una app de recogida de reciclaje: otro dominio, a proposito)*

| Campo | Contenido |
|---|---|
| Donde viven las pruebas | `tests/` |
| Con que se ejecutan | `<el comando del proyecto>` |
| Que hay hoy dentro | una prueba de humo que comprueba que la aplicacion arranca, y una prueba deliberadamente fallida que se borrara al escribir la primera real |
| Dueño | quien coordina el proyecto |
| Que NO cubre todavia | nada de negocio; ninguna regla; ninguna integracion |

📌 **La prueba deliberadamente fallida es el truco util de esta casilla:** demuestra que el comando
**puede** fallar. Un comando que siempre sale en verde no prueba que las pruebas corran; prueba que
no hay ninguna.

### Errores que esta plantilla existe para evitar

| Error | Como se ve | Que hacer |
|---|---|---|
| Declarar con una promesa | «tendremos pruebas desde el principio» | una carpeta, un comando y su salida cruda |
| Carpeta sin comando probado | la ruta escrita y nada ejecutado | correrlo y pegar lo que salio |
| Suite que no puede fallar | todo en verde desde el primer dia, sin nada dentro | una prueba que falle a proposito, y borrarla al llegar la real |
| Registro sin exclusiones | falta «que NO se registra nunca» | escribirlo antes de que alguien depure con datos reales |
| Secretos «en un archivo aparte» | el archivo esta versionado | fuera del control de versiones, y decir donde |
| Barrido sin patron | «se comprobo que no hay secretos» | el patron, el ambito y la salida cruda |
| Enunciado que afirma mas que su orden | «cero secretos en el repositorio» y un barrido de tres rutas | acotar el enunciado a lo que el patron cubre |
| Arreglar un secreto ya commiteado en silencio | se borra del archivo y se sigue | es irreversible sobre el historial: se escala antes de tocar |

### Lo que esta etapa tiene PROHIBIDO, y aqui se cuela solo

Construir lo que aqui solo se declara · escribir codigo de producto · dar por cerrado un hallazgo
propio · evaluar el propio trabajo.

📌 Definiciones: `_methodology/000_method.md` §37 y §45.
📌 Procedimiento: `_phases/020_baseline.md` §4 Paso 9, y §6.
📌 La vista arquitectonica de la seguridad: `020_baseline/030_architecture.md` §6 — los dos tienen
que decir lo mismo.
