# Alcance del MVP — <NOMBRE DEL PROYECTO>

| Campo | Valor |
|---|---|
| Artefacto | `020_baseline/005_scope.md` |
| Etapa que lo produce | `020_baseline`, Paso 2 |
| Estado | `BORRADOR` |
| Abierto | `<AAAA-MM-DD>` |
| Cerrado | `<AAAA-MM-DD, o «—» mientras siga en BORRADOR>` |
| Escrito por | `manager` |

> **Estado:** `BORRADOR` mientras la etapa siga abierta · `CERRADO` cuando se cumpla la condicion de
> salida de `_phases/020_baseline.md` §6.
>
> ⚠️ **Las dos fechas las lee `report_auditor` y las cruza contra el historial de `git`.** No se
> rellenan a posteriori: una fecha declarada que no cuadra con la del commit es un hallazgo, y de
> los caros — deja de poder saberse cuando se supo cada cosa.

> 🚨 **Este es el primer artefacto de la etapa y se escribe antes que el documento de producto**,
> aunque la tabla de artefactos de `_phases/020_baseline.md` §5 lo liste segundo. El documento de
> producto **copia** las dos listas de aqui; escribirlas alli primero obliga a rehacerlas.

---

## 1. De donde sale este alcance

No se inventa. Sale de tres sitios, y cada linea de §2 y §3 tiene que poder señalar el suyo.

| Fuente | Que aporta | Donde vive |
|---|---|---|
| El dictamen del Gate y la decision del patrocinador | que se autorizo construir, y con que limite | `<artefacto del dictamen>` · `_persistence/decisions.md` |
| Las observaciones del prototipo, **clasificadas** | que pidieron los usuarios y en que categoria cayo cada cosa | `<artefacto de observaciones del prototipo>` |
| El descubrimiento | las `N-XXX`, los actores y los `C-XXX` y `A-XXX` que sigan vivos | `<artefactos del descubrimiento>` · `_persistence/` |

🚨 **De las nueve categorias de observaciones, solo pesan las tres primeras** —problema funcional,
problema de comprension, problema de usabilidad—. Las otras seis son material de etapas posteriores,
y meterlas aqui es el camino corto a un MVP que no cabe en la inversion que alguien firmo.

⚠️ **Si alguna de las tres fuentes no existe todavia, la etapa no esta abierta.** Se registra como
`A-XXX` o `C-XXX` y se escala al usuario antes de escribir una linea de alcance — no se rellena con
lo que parezca razonable.

---

## 2. ENTRA al MVP

Lo minimo para que el **actor originador** obtenga valor real. Ni una capacidad mas.

⚠️ **Cada linea nombra la `N-XXX` de la que sale.** Una capacidad sin necesidad detras es alcance
que entro sin que nadie lo decidiera, y es la condicion de salida que mas se incumple.

| # | Capacidad | Sale de | Por que es minima | Sin ella, ¿hay valor? |
|---|---|---|---|---|
| 1 | `<capacidad, enunciada sin nombrar pantallas>` | `N-XXX` | `<que se rompe si no esta>` | `<NO — y por que>` |
| 2 | `<…>` | `N-XXX` | `<…>` | `<NO — …>` |

🚨 **La ultima columna es la que trabaja en esta tabla.** Si la respuesta honesta es «si, seguiria
habiendo valor», la capacidad **no entra**: baja a §3 con su razon. Una lista del «si» donde todo
resulta imprescindible casi siempre es una lista que no se filtro.

---

## 3. NO entra al MVP

🔑 **Esta es la lista que trabaja de verdad.** Es a lo que se apunta cuando alguien pide algo a
mitad de construccion, y el motivo escrito evita rediscutirlo desde cero cada vez. La lista del «si»
se cumple sola; la del «no» es la que hay que poder defender dentro de tres meses.

Una entrada por capacidad, en esta forma exacta:

```text
NO ENTRA — <capacidad>
  Razon:  <por que no, dicho contra la evidencia del prototipo o del descubrimiento>
  Va a:   <etapa posterior, y bajo que condicion>
```

### Las entradas

```text
NO ENTRA — <capacidad>
  Razon:  <…>
  Va a:   <…>

NO ENTRA — <capacidad>
  Razon:  <…>
  Va a:   <…>
```

⚠️ **«Va a: mas adelante» no es un destino.** Un destino dice **que etapa** y **bajo que condicion**
—«cuando exista un segundo actor», «cuando el volumen pase de tanto»—. Sin condicion, la linea no se
puede cerrar nunca y vuelve a discutirse en cada reunion.

⚠️ **Y una razon no es una preferencia.** «No nos parece prioritario» no se puede contrastar;
«ninguna de las sesiones del prototipo la necesito para completar la tarea» si.

---

## 4. Viabilidad de la operacion hibrida — actor por actor

El MVP puede funcionar con solo el actor originador mientras los demas siguen con sus procesos
actuales. **No hace falta digitalizar el ecosistema entero para lanzar.** Pero eso solo vale si esos
procesos **aguantan el volumen que el MVP va a generar**.

> 🚨 **No basta decir «ese actor sigue con su hoja de calculo».** Hay que preguntar si sigue siendo
> operativamente viable **con el volumen nuevo**.

Una fila por cada actor identificado en el descubrimiento que **no** entra al MVP:

| Actor dejado fuera | Que hace hoy, sin la aplicacion | Volumen que le llega hoy | Volumen que le llegara con el MVP | ¿Aguanta? | Que se decide |
|---|---|---|---|---|---|
| `<tipo de actor · actor concreto>` | `<el proceso real, no el ideal>` | `<numero, o «no se sabe → A-XXX»>` | `<numero estimado, y de donde sale la estimacion>` | `<SI · NO · NO SE SABE → A-XXX>` | `<sigue fuera · ENTRA al MVP · se acota el alcance>` |
| `<…>` | `<…>` | `<…>` | `<…>` | `<…>` | `<…>` |

🚨 **Si la respuesta es «no aguanta», ese actor entra al MVP** — y el alcance cambia **hoy**, que es
cuando cuesta una linea de esta tabla, y no dentro de tres meses, cuando cuesta rehacer lo
construido.

⚠️ **Un «no se sabe» aqui no cierra la fila: la abre.** Va a `_persistence/assumptions.md` como
`A-XXX`, con su forma de validarlo y su disparador, y **antes** de que el alcance se apoye en el.

---

## 5. Lo que este alcance NO puede hacer

🚨 **Esta etapa no puede ampliar lo que el Gate autorizo.** Si al escribir §2 aparece que el MVP
tendria que ser bastante mas de lo que se aprobo, eso **no se resuelve escribiendo mas alcance**: se
escala al usuario, porque cambia la inversion que alguien firmo.

| Si aparece… | No se hace | Se hace |
|---|---|---|
| una capacidad imprescindible que el Gate no contemplaba | añadirla a §2 y seguir | escalar al usuario, con el coste estimado y la alternativa de acotar |
| una necesidad que nadie habia registrado | inventarle una ficha aqui | volver al artefacto de necesidades del descubrimiento y registrarla alli primero |
| una peticion de usuario de las seis categorias no prioritarias | discutirla | §3, con su razon y su destino |

**Escalados abiertos:**

| # | Que aparecio | Cuando | A quien se escalo | Estado |
|---|---|---|---|---|
| 1 | `<…>` | `<AAAA-MM-DD>` | `<…>` | `<ABIERTO · RESUELTO → D-XXX>` |

---

## 6. Comprobacion antes de cerrar este archivo

Esto **no** es la condicion de salida de la etapa —esa esta en `_phases/020_baseline.md` §6 y abarca
los nueve artefactos—. Esto es solo lo que le toca a este archivo.

- [ ] §2 tiene **al menos una** capacidad, y **cada una** nombra su `N-XXX`.
- [ ] Ninguna capacidad de §2 responde «SI» a «sin ella, ¿hay valor?».
- [ ] §3 tiene **al menos una** entrada — un alcance sin «no» es un alcance sin filtrar.
- [ ] **Cada** entrada de §3 tiene `Razon:` y `Va a:`, y el destino lleva **condicion**.
- [ ] §4 tiene una fila por **cada** actor del descubrimiento que no entra al MVP.
- [ ] Todo `NO SE SABE` de §4 tiene su `A-XXX` escrito en `_persistence/assumptions.md`.
- [ ] Ningun `NO` de §4 quedo sin decision en la ultima columna.
- [ ] Los escalados de §5 estan **cerrados o declarados abiertos**, ninguno en blanco.
- [ ] **No queda ni un solo `<` en el archivo** — ningun hueco sin rellenar.
- [ ] La seccion «Guia de llenado» de abajo **esta borrada**.
- [ ] La cabecera dice `CERRADO` y tiene fecha de cierre.

Cuatro se comprueban desde fuera, sin leer el archivo entero:

```bash
grep -n "<" 020_baseline/005_scope.md                    # debe no devolver nada
grep -n "Guia de llenado" 020_baseline/005_scope.md      # debe no devolver nada
grep -n "^| Estado |" 020_baseline/005_scope.md          # debe decir CERRADO
grep -c "^NO ENTRA — " 020_baseline/005_scope.md         # numero de entradas de §3
```

📌 **La cuarta cuenta las entradas de §3 y solo eso.** Se publica el numero tal cual sale y se dice
al lado cuantas se esperaban: un recuento que se ajusta a mano deja de ser reproducible.

🚨 **La salida cruda de las cuatro ordenes va al registro**, no la conclusion. «Se comprobo» es un
veredicto; lo que alimenta una auditoria es «corri esto, salio esto».

---
---

## Guia de llenado — ⚠️ BORRAR esta seccion al cerrar el artefacto

> Existe para escribir el archivo. **No sobrevive al cierre de la etapa.** Si se queda, quien lea
> mañana no puede distinguir lo que decidio el proyecto de lo que traia la plantilla — y lo tratara
> como decision.

### La pregunta que hace todo el trabajo

> **¿Que se rompe si esto no esta?**

Se repite en cada linea de §2. Es la unica forma barata de distinguir lo minimo de lo deseable: casi
todo parece necesario mientras nadie pregunta que pasa sin ello.

### Por que se empieza por el «no», y no por el «si»

Empezar por la lista del «si» produce siempre la misma lista: todo lo que se hablo en las ultimas
semanas. Empezar por el «no» obliga a decir en voz alta lo que se esta dejando fuera, y eso es lo
que despues hay que defender.

### Ejemplo de una entrada completa de §3

*(el ejemplo es de una app de recogida de reciclaje: otro dominio, a proposito, para que no se
confunda con el proyecto que se este escribiendo)*

```text
NO ENTRA — Reprogramar una recogida ya confirmada
  Razon:  ninguno de los cinco participantes del prototipo intento reprogramar; las dos
          menciones fueron sugerencias posteriores (categoria «sugerencia», no «problema
          funcional»). El proceso de hoy lo resuelve con una llamada.
  Va a:   primera iteracion de crecimiento posterior al MVP, cuando el registro muestre
          mas de una cancelacion por semana.
```

Lo que hace util a esa entrada no es que diga «no»: es que dentro de tres meses, cuando alguien
vuelva a pedirlo, la conversacion empieza en «¿ya pasamos de una cancelacion por semana?» y no en
cero.

### Ejemplo de una fila de §4

| Actor dejado fuera | Que hace hoy | Volumen hoy | Volumen con el MVP | ¿Aguanta? | Que se decide |
|---|---|---|---|---|---|
| Coordinador · analista de logistica | anota cada solicitud en una hoja de calculo | ~40 solicitudes/mes | ~120/mes estimadas (3×, por la tabla de adopcion del dictamen) | NO | **ENTRA al MVP** una vista de solicitudes en cola; el resto de su proceso sigue fuera |

📌 **Fijate en que la decision no fue «entra el Coordinador entero».** Entro lo minimo que hace
viable la operacion hibrida. Ese matiz es lo que evita que esta tabla duplique el MVP.

### Errores que esta plantilla existe para evitar

| Error | Como se ve | Que hacer |
|---|---|---|
| Lista del «si» sin filtrar | todas las filas responden «NO» a «sin ella, ¿hay valor?» pero suenan a deseo | preguntar *«¿que se rompe si no esta?»* hasta que alguna baje a §3 |
| Destino sin condicion | «Va a: mas adelante» | escribir la etapa **y** el disparador que la abre |
| Razon que es preferencia | «no nos parece prioritario» | citar la observacion o la sesion que lo respalda |
| §4 rellenada con optimismo | todos los actores «aguantan» sin un solo numero | un numero, o «no se sabe → `A-XXX`» |
| Especificar lo que no entra | §3 con detalle de como funcionaria | la etapa lo prohibe: es especular sobre el futuro lejano |
| Ampliar el Gate en silencio | §2 crece y §5 esta vacia | escalar; cambia la inversion que alguien firmo |

### Lo que esta etapa tiene PROHIBIDO, y aqui se cuela solo

Escribir codigo de producto · reutilizar el codigo del prototipo · especificar lo que no entra al
MVP · dar los documentos por terminados · meter en el alcance todo lo que pidieron los usuarios ·
diseñar para actores que no estan en el MVP · dar por hecho que el Gate autorizo mas de lo que
autorizo.

📌 Definiciones: `_methodology/000_method.md` §48-§50 y §61.
📌 Procedimiento: `_phases/020_baseline.md` §4 Paso 2, y §2.
📌 Donde van los supuestos y las restricciones: `_persistence/assumptions.md` y
`_persistence/constraints.md`.
📌 La decision de alcance, con **sus alternativas descartadas**, va ademas a
`_persistence/decisions.md` con su `D-XXX`: al `git diff` solo llega el ganador.
