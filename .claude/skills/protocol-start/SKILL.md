---
name: protocol-start
description: Protocolo de inicio de sesion del proyecto. Lee de forma obligatoria el estado de git, project.md, CLAUDE.md, _persistence/progress.md, _persistence/tasks.md y _persistence/assumptions.md (los `Abierto`, con su disparador); a demanda decisions.md, constraints.md, lessons.md y techdebt.md. Con eso presenta en pantalla donde esta el proyecto, las ultimas tareas realizadas y las siguientes, ordenadas por urgencia e importancia. Es de solo lectura. Uso exclusivo del agente session-starter.
---

# Protocolo de inicio de sesion

Este protocolo lo ejecuta **unicamente** el agente `session-starter`. Su objetivo es reconstruir el
estado del proyecto al comenzar una sesion y presentar un resumen accionable.

**Es de solo lectura. No modifica ningun archivo.** Ni para arreglar algo que veas mal: eso se
reporta y lo decide `manager`.

## 🚨 Que es una sesion

Una sesion **no es un dia de trabajo**: es una jornada. Puede haber una sesion por la manana, otra
por la tarde y otra por la noche **de la misma fecha**.

> 🔑 **Consecuencia directa: las fechas no identifican sesiones. Los ids `S-XXX` si.**

Nunca digas «la sesion de ayer» ni «la ultima sesion, del 27». Di **su `S-XXX`**. Y para saber cual fue
la ultima, mira el **id mas alto**, nunca la fecha mas reciente: varias filas pueden compartir fecha
siendo sesiones distintas, y ordenar por fecha las mezcla.

## Los tres actores del proyecto

| Actor | Que deja escrito |
|---|---|
| **manager** (sesion de trabajo) | construye, y registra el porque en el momento |
| **`session-closer`** | `progress.md`, `tasks.md`, propuestas de deuda, el informe `_audit/S-XXX.md`, el commit y su push |
| **`report_auditor`** (agente) | `_audit/R-XXX.md`, `_audit/findings.md` y el veredicto en `_audit/index.md` |

El auditor corre **al final de la sesion anterior, sobre su commit**. Sus hallazgos llevan ahi desde
entonces esperando a alguien que los mire, y ese alguien eres tu: **por eso el Paso 1c es
obligatorio**.

🚨 **`_audit/R-XXX.md` y `_audit/findings.md` no son tuyos ni de `manager` para escribir.** Se
leen y se reportan. Quien cambia el estado de un hallazgo es la auditoria siguiente.

---

## Paso 1 — Evidencia obligatoria

Lee siempre, sin excepcion, y **en este orden**.

### 1a. Primero el repositorio — es el hecho, no el relato

```
git log --oneline -5
git status -sb
```

🚨 **`-sb`, no `--short`.** Los dos listan los archivos sueltos, pero solo `-sb` imprime **la linea
de la rama**, que es donde se ve si la sesion anterior subio su trabajo:

```
## main...origin/main [ahead 1]      <-- hay un commit que no esta en origin
```

Con `--short` esa linea no sale. Un commit sin subir es **invisible**: el repositorio se ve limpio,
el arranque no dice nada, y el trabajo de la jornada anterior existe solo en este disco.

⚠️ **Si `git log` falla porque no hay commits todavia**, no es un error: el repositorio esta recien
creado. Dilo y sigue.

### 1b. Despues, los archivos que siempre se leen

1. **`project.md`** (en la raiz, en minusculas) — los datos propios de este proyecto: nombre,
   rutas, remoto, carpetas declaradas. **Todo lo que en este protocolo aparece entre `<angulos>` se
   resuelve ahi.** Leelo primero: sin el no tienes las rutas de los pasos siguientes.
2. **`CLAUDE.md`** — como se trabaja. Es corto a proposito y es el **ancla contra inventar**.
3. **`_persistence/progress.md`** — secciones 1 (Estado general), 2 (Ultimo realizado),
   3 (Siguiente paso), y la tabla de sesiones del indice.
4. **`_persistence/tasks.md`** — el indice, que ya trae estado, importancia y urgencia de cada tarea.
5. **`_persistence/assumptions.md`** — el indice, y **el cuerpo de los que estan `Abierto`**: ahi
   vive el disparador, que el indice no lleva.

De `progress.md` y `tasks.md` lee **el indice**, no el archivo entero. Ver *«Como se leen estos
archivos»* mas abajo.

### 🚨 Por que los supuestos se leen SIEMPRE, y no cuando una tarea los invoque

Una tarea es algo que hay que **construir**; un supuesto es algo que hay que **averiguar**. Son dos
listas distintas, y un arranque que lee solo la primera reporta media jornada.

⚠️ **El camino que hay que evitar es entrar a los supuestos desde las tareas.** Preguntarse *«¿hay
alguna tarea apoyada en un supuesto?»* parece la puerta natural y es justo la que no sirve: **un
supuesto que ninguna tarea apoya no aparece nunca por ahi**, y esos son precisamente los que llevan
mas tiempo sin que nadie los mire. Este protocolo entro por esa puerta durante mucho tiempo, y el
resultado fue reportar bloqueos con supuestos abiertos al lado que nadie vio.

🔑 **Que se busca en el cuerpo:** el **disparador** de cada supuesto `Abierto` —el momento concreto
en que alguien iba a mirarlo— y si ese momento **ya ocurrio**. Los que si, van al reporte.

⛔ **Y ahi se para.** Reportar un supuesto cuyo disparador se cumplio es **reporte**; decidir que se
hace con el, no — este protocolo es de solo lectura, y esa linea no se cruza ni cuando la respuesta
parezca obvia.

⚠️ **Si un supuesto `Abierto` no dice cual es su disparador, eso se reporta tal cual**, y no se le
inventa uno. Un supuesto sin disparador es el caso que las convenciones del archivo describen como
el que se queda abierto para siempre: nombrarlo es lo unico util que puede hacer el arranque.

Si alguno no existe o esta vacio, **dilo en el reporte** en lugar de inventar contenido.

🚨 **En un proyecto recien arrancado estos archivos pueden estar vacios o sin entradas. Eso no es
un error del protocolo: es su estado, y se reporta tal cual.** Un arranque que rellena ese vacio con
lo que suena razonable es peor que uno que dice «no hay nada registrado», porque el segundo se puede
corregir y el primero no se nota.

### 1c. Y la auditoria de la sesion anterior

Todo esta en `_audit/`, en este mismo repositorio. Dos preguntas, dos ordenes:

```bash
sed -n '/^## Tablero/,/^---/p' _audit/index.md
sed -n '/^## Indice/,/^---/p' _audit/findings.md
```

**Lo que buscas, y las tres cosas van al reporte:**

| Lo que ves | Que significa | Que haces |
|---|---|---|
| hallazgos en `Abierto` | la auditoria los encontro y **nadie los ha evaluado todavia** | reportalos arriba: son lo primero de la jornada |
| hallazgos en `Aceptado — pendiente` | aceptados y aun sin hacer | reportalos con su `T-XXX`, junto a las demas tareas abiertas |
| una fila con `Auditoria: Pendiente` | **esa sesion se cerro y nunca se audito** | 🚨 desfase: reportalo arriba del todo |

🚨 **La tercera es la que de verdad importa, y es facil que pase inadvertida.** El auditor lo lanza
`manager` despues del cierre; si aquel dia no se lanzo, no hubo error, no hubo aviso, y el commit se
quedo sin revisar. **Este es el unico sitio del sistema donde esa omision se descubre.** Si la ves,
propon correr la auditoria pendiente como primera accion.

Si hay hallazgos nuevos, **di su codigo, su gravedad y de que auditoria vienen**. No los resumas ni
los interpretes: quien los va a evaluar es `manager`, y necesita el enunciado tal cual.

⚠️ **No abras los `R-XXX.md` salvo que haya algo nuevo que mirar.** El tablero y el indice de
hallazgos son la respuesta por defecto, igual que en `_persistence/`.

🚨 **No espejes ni reinterpretes los estados.** `Implementado` lo escribe una auditoria posterior
verificando la correccion; que una tarea este cerrada **no cierra su hallazgo**. Si ves esa
combinacion —`T-XXX` implementada y su `F-NNN` todavia en `Aceptado — pendiente`— no es un error:
es un hallazgo esperando a que la proxima auditoria lo verifique. Dilo asi.

⚠️ Si `_audit/` no existe o esta vacia, **dilo en el reporte** y sigue. En un proyecto recien
arrancado es lo normal; en uno con sesiones cerradas es un desfase.

### Por que el `git` va primero

> 🔑 **`progress.md` es lo que alguien escribio que paso. `git log` es lo que paso.**

Un archivo de estado puede quedar desactualizado —una sesion que se cayo, un cierre a medias— y no
tiene forma de avisarlo. El repositorio si. Al leerlo primero, entras a los archivos ya sabiendo si
se les puede creer.

### Seis desfases que hay que reportar

| # | Lo que ves | Que significa | Dilo asi |
|---|---|---|---|
| 1 | el ultimo commit **no** aparece reflejado en `progress.md` | la sesion anterior no cerro bien | *«⚠️ `progress.md` va por detras del ultimo commit»* |
| 2 | `git status` tiene cambios sin commitear | quedo trabajo suelto | *«⚠️ hay N archivos sin commitear»* |
| 3 | la primera linea de `git status -sb` dice `ahead` | la sesion anterior **no subio** | *«🚨 N commits sin subir a `origin` — el trabajo existe solo en este disco»* |
| 4 | hay commits que tocan `_persistence/` **posteriores** al ultimo que toco `progress.md` | el archivo de estado se sello antes que la ultima entrada | *«⚠️ `progress.md` se sello en `<hash>` y hay N commits posteriores de `_persistence/`»* |
| 5 | el indice de un archivo y sus entradas no coinciden | un cierre quedo a medias | *«⚠️ `<archivo>`: `<codigo>` esta en el indice y no en el detalle (o al reves)»* |
| 6 | una fila de `_audit/index.md` con `Auditoria: Pendiente` de una sesion ya cerrada | **esa sesion nunca se audito** | *«🚨 `S-XXX` cerrada en `<hash>` y sin auditar»* |

El **4** se comprueba con **dos** ordenes, no con una:

```bash
git log --oneline -3
git log --oneline -2 -- _persistence/progress.md
```

Si el hash de arriba **no** es el mismo que el de abajo, mira que tocaron los commits de en medio.
Si tocaron `_persistence/` y `progress.md` no esta entre ellos, **el estado quedo congelado antes
que la ultima entrada**.

El **5** se comprueba con una sola orden, y no gasta contexto:

```bash
for f in tasks decisions constraints assumptions lessons techdebt progress; do
  echo "== $f"
  diff <(awk '/^```/{c=!c; next} !c' "_persistence/$f.md" | grep -oE '^\| \[?[A-Z]+-[0-9]+' | grep -oE '[A-Z]+-[0-9]+' | sort -u) \
       <(awk '/^```/{c=!c; next} !c' "_persistence/$f.md" | grep -oE '^#{3} [A-Z]+-[0-9]+'   | grep -oE '[A-Z]+-[0-9]+' | sort -u)
done
```

🚨 **El `awk` descarta los bloques de codigo cercados, y no es opcional.** El registro guarda salida
cruda de comandos como evidencia, y esos bloques contienen encabezados y codigos identicos a los
reales —`### C-XXX`, `| [T-XXX]…`— que son citas de como estaba el archivo, no entradas. Sin el
filtro, el control senala como huerfano lo que en realidad es una prueba bien puesta. **Es el mismo
comando que corre `protocol-close` en su Paso 2b**, y tiene que seguir siendolo: si los dos
protocolos comprueban lo mismo de forma distinta, uno de los dos empieza a mentir.

Sin salida bajo un archivo = coherente. Una linea `<` es una fila de indice sin entrada; una `>` es
una entrada que no esta en el indice — y una entrada fuera del indice **es invisible para este mismo
arranque**, que lee indices.

> 🔑 **Y el error va en la direccion cara.** Un estado que dice *«ya esta hecho»* cuando falta se
> descubre solo: alguien va a hacerlo y no lo encuentra. Uno que dice **«falta»** sobre algo
> terminado **no se descubre — se paga repitiendolo**, y se paga con la sesion que este protocolo
> existe para ahorrar.

🚨 **El 3 es el unico que se pierde para siempre.** El 1 y el 2 son desorden: el trabajo esta
guardado, solo mal contado. En el 3 **no esta guardado en ningun otro sitio** — un disco que falle
esa noche se lleva la jornada entera.

Es tambien el unico que **no puede haberse anotado en `tasks.md`**: cuando el cierre supo que el
push habia fallado, su commit ya estaba hecho. Por eso el arranque tiene que mirarlo con sus propios
ojos en vez de fiarse de los archivos. El razonamiento completo esta en `protocol-close`, Paso 4.
**Este protocolo es el unico sitio del sistema donde un push fallido se descubre.**

Si lo ves, **dilo arriba del todo y propon subirlo como primera accion.**

Si detectas cualquier desfase, **el reporte lo dice arriba del todo**, antes del estado.

### 🚨 La regla que manda sobre todas

**Todo lo que digas sobre QUE ES el proyecto tiene que salir de un archivo que abriste en esta
corrida.** Si no lo abriste, no lo digas.

Vale para el alcance, la tecnologia, el metodo y que significa cada etapa. **No completes con lo que
suele llevar un proyecto de este tipo.**

🚨 **Comprueba si el alcance del proyecto esta registrado antes de decir una palabra sobre el.** Si
`project.md`, `CLAUDE.md` y `_persistence/` no dicen que es, para que sirve ni con que se construye,
entonces **cualquier cosa que suene razonable sobre eso esta inventada, sin excepcion**. Dilo como
lo que es: «el alcance no esta registrado».

⚠️ **Y hay un archivo que NO cuenta como fuente para eso: `_brief/`.** Puede contener el encargo del
cliente, que es una entrada al proyecto, no su registro. Si el brief dice una cosa y `_persistence/`
no dice ninguna, lo registrado sigue siendo **nada** — y eso es lo que reportas, citando que existe
el brief sin volcarlo. Lo que el equipo decidio hacer con un encargo vive en `decisions.md`, no en
el encargo.

Si algo no esta escrito en ningun sitio, di **«no esta registrado»**. Es una respuesta valida y
util. Rellenarlo no lo es.

---

## Paso 2 — Lectura a demanda

Estos archivos **no** se leen por defecto. Leelos solo cuando algo del Paso 1 lo justifique, y
teniendo clara **que pregunta concreta** quieres responder con cada uno:

| Archivo | Leelo cuando… |
|---|---|
| `_persistence/decisions.md` | progress/tasks mencionen una decision, un cambio de rumbo, o una tarea dependa de una previa |
| `_persistence/constraints.md` | las siguientes tareas toquen areas con limites conocidos |
| `_persistence/lessons.md` | se vaya a repetir un tipo de trabajo que ya fallo antes |
| `_persistence/techdebt.md` | haya deuda que bloquee lo siguiente, o propuestas del cierre sin confirmar |
| `_audit/S-XXX.md` | quieras ver que se dijo de una sesion concreta, o que puntos debiles declaro |
| el `R-XXX.md` de una auditoria | el Paso 1c muestre hallazgos nuevos **y** el usuario pida el detalle. Por defecto basta con anunciarlos por codigo y gravedad |
| `_brief/` | el usuario lo pida explicitamente. **No es fuente de estado** — ver la regla del Paso 1 |

⚠️ **`assumptions.md` ya no esta en esta tabla, y estuvo.** Paso a lectura **obligatoria** del
Paso 1b. Su fila decia *«leelo cuando haya tareas apoyadas en supuestos sin confirmar»* — es decir,
entrando desde las tareas, que es exactamente el camino por el que un supuesto sin tarea detras no
se ve nunca. No se movio por importancia: se movio porque **la condicion de lectura era el defecto**.

⚠️ **`temporal/` no se lee.** Es el area de trabajo del usuario, no parte del registro, y su
contenido cambia o desaparece sin aviso.

---

## Como se leen estos archivos

Los siete archivos de `_persistence/` tienen la misma forma: **indice arriba, convenciones despues,
detalle debajo**. El indice de `tasks.md` y `techdebt.md` ya trae **estado, importancia y urgencia**
en la propia fila.

> 🔑 **El indice es la respuesta por defecto; el detalle es la excepcion.**

1. **Lee el indice**, que enlaza cada entrada por ancla.
2. **Decide desde el indice.** La mayoria de las veces el titulo y el estado bastan.
3. **Baja al detalle solo si el indice no responde**, saltando a esa seccion — no leyendo el archivo
   de arriba abajo.

Un archivo de `_persistence/` puede crecer mucho. Leerlo entero para sacar una linea del reporte
gasta contexto que hara falta despues, cuando toque trabajar.

⚠️ **Un indice cuya unica fila es `—` esta vacio, no roto.** Significa que ese archivo todavia no
tiene entradas. Reportalo como «sin entradas», nunca como un desfase.

### 🚨 El campo de estado manda sobre la prosa

En los indices, cada fila trae su **estado**. **Para decir que falta, lee el CAMPO — no resumas el
parrafo del detalle.**

> 🔑 **El parrafo cuenta la historia de la entrada; el campo dice como acabo.** Cuando alguien
> corrige una entrada suele reescribir el parrafo y **olvidarse del campo**, o al reves. Si los dos
> se contradicen, **no elijas: reportalo como desfase** y sigue el campo mientras tanto.

Extraer los campos cuesta una orden y no gasta contexto:

```bash
# tareas pendientes
grep -E '^\| \[T-' _persistence/tasks.md | grep -E '\| No implementada \|'

# pendientes y bloqueantes — lo que abre el dia
grep -hE '^\| \[(T|DT)-' _persistence/tasks.md _persistence/techdebt.md \
  | grep -E '\| No implementada \|' | grep 'Bloqueante' | grep -v 'No bloqueante'

# ultima sesion registrada (id mas alto, no fecha)
grep -E '^\| \[S-' _persistence/progress.md | tail -1
```

### 🚨 Lo cerrado no se reporta como abierto

Aqui nada se tacha: **el estado va en su columna**, y hay que leerlo.

| Archivo | No reportes como abierto |
|---|---|
| `tasks.md` | `Implementada` · `Cancelada` · `Suspendida` |
| `techdebt.md` | `Implementada` · `Cancelada` · `Suspendida` |
| `decisions.md` | `Revocada por D-XXX` |
| `assumptions.md` | `Confirmado` · `Refutado` |
| `constraints.md` | `Levantada` |

```bash
grep -nE '\| (Cancelada|Suspendida|Refutado|Levantada|Revocada por D-[0-9]+) \|' _persistence/*.md
```

⚠️ Las barras del patron importan: sin ellas el grep tambien devuelve las tablas de
`## Convenciones`, que solo enumeran los estados posibles. Un grep que devuelve mas ruido que senal
se aprende a ignorar.

Una entrada cerrada **conserva su texto a proposito**, para que se entienda que se creia y por que
dejo de valer. **Ese texto esta ahi para explicar, no para reportarlo como vigente.** Si hace falta
mencionarla, se dice *«`DT-NNN`, cancelada»* — nunca lo que decia cuando estaba abierta.

### 🚨 Y el caso mas traicionero: la decision revocada

Una decision revocada **conserva su parrafo entero**, redactado en presente y sonando vigente. Lo
unico que la desmiente es su campo `Estado`.

> 🔑 **Quien lee el parrafo y no el campo se lleva exactamente lo contrario de lo que rige hoy.**
> Una `D-XXX` puede decir «no se crea tal cosa» y estar `Revocada por D-YYY`, que decidio justo lo
> contrario — y las dos frases conviven en el archivo, una debajo de la otra.

Antes de citar el porque de una decision: **mira su estado**, y si esta revocada, **cita la que la
revoco**, no la revocada.

---

## Paso 3 — Reporte en pantalla

En espanol, sin relleno:

```
## ⚠️ Desfase detectado        <-- omitir si no hay ninguno
- <que no cuadra entre el repositorio y los archivos>

## Donde estamos
<etapa, salud y bloqueo activo, segun progress.md seccion 1>
<ultimo realizado y siguiente paso, secciones 2 y 3>
<ultima sesion: S-XXX>

## Ultimas tareas realizadas
- <codigo> <tarea>
- ...

## Siguientes tareas
🔻 <bloqueo o condicion vigente, si lo hay>   <-- obligatorio si existe, y va PRIMERO
1. <codigo> <tarea> — <importancia/urgencia> — <por que es la siguiente>
2. ...

## Tareas de etapas no iniciadas        <-- omitir solo si no hay ninguna
- <`T-XXX` <tarea> — etapa `<cual>` — se retoma cuando <disparador>>

## Supuestos que tocan mirar        <-- OBLIGATORIO, nunca se omite
- <`A-XXX` <supuesto> — disparador: <cual> — <cumplido | sin disparador escrito> | «ninguno»>

## Contexto relevante        <-- omitir si no leiste archivos del Paso 2
- **Decisiones:** ...
- **Restricciones:** ...
- **Supuestos:** ...
- **Lecciones:** ...
- **Deuda:** ...

## Auditoria        <-- OBLIGATORIO, nunca se omite
- Hallazgos sin evaluar: <`F-NNN` (gravedad), de `R-XXX` | «ninguno»>
- Hallazgos aceptados y pendientes: <`F-NNN` → `T-XXX` | «ninguno»>
- Sesiones cerradas sin auditar: <`S-XXX` en `<hash>` | «ninguna»>
```

Reglas del reporte:

- 🚨 **El bloque «Auditoria» es obligatorio y no se omite nunca**, ni cuando las tres lineas
  digan «ninguno». Es la unica salida visible del Paso 1c, y sin ella **saltarse ese paso no se
  distingue de haberlo hecho** — las dos cosas producen exactamente el mismo reporte. Un paso
  obligatorio cuyo olvido no deja huella se olvida.
- 🚨 **Las tres lineas salen siempre, cada una con su valor o con «ninguno».** Un bloque del que
  desaparece la linea incomoda se lee como un bloque limpio.
- 🔑 **Las siguientes tareas se ordenan por urgencia y despues por importancia**, no por orden de
  aparicion en el archivo: primero las `Bloqueante`, y dentro de ellas `Alta` antes que `Media` y
  `Baja`. Esos campos existen para decidir el orden del dia; usalos.
- 🚨 **Una tarea de una etapa que no ha empezado NO es una siguiente tarea, y va en su propio
  bloque.** Se reconoce por su campo `Etapa`: si no es la etapa activa que declara `progress.md`, va
  a «Tareas de etapas no iniciadas» con su etapa y su disparador, **nunca numerada entre las
  siguientes**.

  ```bash
  # etapa activa
  grep -iE '^\| Etapa ' _persistence/progress.md | tail -1
  # pendientes, con su etapa, para separarlas
  grep -E '^\| \[T-' _persistence/tasks.md | grep -E '\| No implementada \|' \
    | awk -F'|' '{gsub(/^ +| +$/,"",$2); gsub(/^ +| +$/,"",$7); print $7"  "$2}' | sort
  ```

- 🔑 **Por que separarlas y no solo mencionarlo:** mezcladas con las de la etapa activa, compiten por
  el dia y se proponen como trabajo que todavia no toca — y quien lea el reporte no tiene forma de
  saberlo sin abrir cada ficha. Separadas, el aplazamiento **se ve** sin que nadie tenga que
  recordarlo.
- ⚠️ **Que esten aparte no las esconde: el bloque se publica.** Una tarea de otra etapa sigue siendo
  trabajo real del proyecto, y desaparecerla del reporte seria el defecto contrario. Se omite el
  bloque entero **solo** si no hay ninguna.
- 🔻 **Un bloqueo vigente es OBLIGATORIO si existe, y va el primero de «Siguientes tareas».**
  Buscalo en `progress.md`, en `tasks.md`, en `techdebt.md` **y en `assumptions.md`**: un supuesto
  abierto cuyo disparador ya se cumplio bloquea igual que una tarea, y no esta en las otras tres
  listas.
- 🚨 **El bloque «Supuestos que tocan mirar» es obligatorio y no se omite nunca**, ni cuando
  diga «ninguno». Es la unica salida visible de la lectura de `assumptions.md`, y sin ella
  **saltarse esa lectura no se distingue de haberla hecho** — exactamente por lo mismo que el bloque
  «Auditoria». Un paso obligatorio cuyo olvido no deja huella se olvida.
- 🔑 **Entran los `Abierto` cuyo disparador YA se cumplio**, no todos los abiertos. Un supuesto
  cuyo momento aun no llego esta bien donde esta, y listarlo entero cada jornada convierte el bloque
  en ruido que nadie lee. **Los que no tienen disparador escrito entran igual**, dichos como tales:
  esos no van a llegar nunca por si solos.
- ⚠️ **El limite de 5 elementos aplica tambien aqui**, y si hay mas se dice cuantos quedan fuera.
- ⚠️ **Un bloqueo se cita por su ACCION, no por la fecha en que se espera.** Escribirlo como *«lo
  primero de la proxima etapa»* lo deja gastado en cuanto esa etapa empieza.
- 🚨 **Un bloqueo no se cuelga de una tarea que no lo tiene.** Si no sabes de cual es, **dilo suelto:
  el bloqueo importa mas que su dueno.**
- 🚨 **No inventes relaciones entre tareas.** Cada una se describe con lo que dice **su** fila. Si
  dos se parecen, no se mezclan: se citan las dos por su codigo.
- 🚨 **Cita siempre archivo y codigo.** Quien recibe este reporte **no leyo los archivos**: solo
  tiene tu texto. Un dato sin su codigo lo deja sin forma de ir a comprobarlo, y lo que no pueda
  comprobar tendra que creertelo o volver a leerlo todo.
- Maximo 5 elementos por lista; si hay mas, quedate con los mas recientes o prioritarios y dilo.
- **Contexto relevante** solo con lo que cambie la decision de que hacer ahora, no como resumen de
  los archivos.
- Termina senalando bloqueos o informacion faltante, si los hay.
- **No modifiques ningun archivo.** Este protocolo es de solo lectura.
