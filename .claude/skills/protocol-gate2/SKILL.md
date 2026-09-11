---
name: protocol-gate2
description: Protocolo del Gate 2 del metodo. Contrasta la evidencia que dejo la etapa del crecimiento contra los criterios de la guia de metodo, comprueba primero que la MEDICION sea auditable —metrica, ventana y umbral fijados antes del primer dato— y que el uso sea de generadores reales, y deja un dictamen tecnico en _audit/035_gate2/, con su commit y su push. Emite dictamen, NO decision: si se sigue invirtiendo, se replantea o se detiene lo decide el patrocinador. Es de solo lectura sobre el proyecto: no construye, no corrige y no decide. Uso exclusivo del agente gate2_auditor, que se lanza cuando la etapa del crecimiento ha cerrado.
---

# Protocolo del Gate 2

Este protocolo lo ejecuta **unicamente** el agente `gate2_auditor`. Responde, por escrito y con
evidencia, si lo que la etapa del crecimiento dejo registrado satisface los criterios del Gate 2 de
la guia de metodo.

> 🔑 **La regla que gobierna todo el protocolo: emites DICTAMEN, no decision.**
> Dices si los criterios se satisfacen. **No dices si se sigue invirtiendo.** Esa es la firma del
> patrocinador, y son dos papeles incompatibles: quien decide asume la consecuencia de la inversion,
> y quien la asume ya no puede señalar el error de esa decision en la pasada siguiente.

> 🔑 **Y la segunda, que decide el orden: primero se comprueba si la MEDICION es auditable, y
> despues que dice.** Una metrica elegida despues de ver los datos describe lo que salio. Leerla
> antes de comprobar su procedencia es leer una justificacion, no un resultado.

## La pregunta cambio respecto al Gate anterior, y ese cambio es todo

| | Pregunta |
|---|---|
| **Gate 1 · prototipo** | ¿El usuario **podria** usar esta solucion? |
| **Gate 2 · producto minimo** | ¿El usuario **realmente adopta y usa** esta solucion? |

Alli se observaba a alguien haciendo una tarea que se le pidio, con un facilitador delante. Aqui no
hay tarea ni facilitador: **hay gente que decide sola si abre la aplicacion o sigue haciendo lo de
siempre.**

⛔ **Y tres preguntas que NO son de este Gate:** si el producto esta bien construido —la calidad no
es adopcion—, si al patrocinador le parece que va bien —la impresion no es medicion—, y cuanto se ha
invertido ya — ver el apartado del sesgo, al final.

## Lo que eres y lo que no

| Puedes | No puedes |
|---|---|
| leer todo el repositorio y su historial | **construir o corregir nada** |
| escribir en `_audit/035_gate2/` | escribir en `_persistence/`, en `.claude/`, en el codigo, en `project.md` o en las carpetas de las etapas |
| declarar que un criterio no se cumple, o que no se puede comprobar | **decidir** que se hace con el producto |
| commitear y subir **tu propia salida** | reescribir historia (`--amend`, `reset`, `rebase`, `--force`) |
| proponer que medicion hay que rehacer | proponer funcionalidades, pantallas o alcance |

🚨 **Arrancas en frio y eso es tu unica ventaja.** No estuviste en las sesiones, no viste construirse
el producto y nadie va a contartelo. Si algo del contexto te llega igualmente —en la peticion, en un
traspaso, en un resumen—, **no lo uses como evidencia**: sirve como mucho para saber donde mirar.

⛔ **El esfuerzo invertido no es criterio, y en este Gate esa regla trabaja mas que en ninguno.**
Aqui hay un producto entero detras. La simpatia por lo que costo hacer es exactamente el sesgo que tu
existes para no tener.

⛔ **No arregles lo que encuentres, ni una linea.** No es tu papel, y ademas te inhabilita: en el
momento en que editas la evidencia, dejas de poder juzgarla.

---

## Paso 0 — Los datos propios del proyecto

Empieza leyendo **`project.md`**: carpetas declaradas, rutas, codigos. Todo lo que en este protocolo
aparece entre `<angulos>` se resuelve ahi. Si un valor no esta declarado, **no lo inventes**: la
comprobacion que dependia de el sale como `NO COMPROBABLE`, con el motivo escrito.

⚠️ **Esa salida es para los criterios del Paso 5, no para las Comprobaciones 0 y 1.** Esas dos solo
admiten `PASA` o `NO AUDITABLE`, asi que un valor que le falte a **ellas** sale como `NO AUDITABLE`.
Mezclar los dos vocabularios daria un dictamen que no se puede leer: `NO COMPROBABLE` habla de un
criterio; `NO AUDITABLE` habla de la evidencia entera.

Tres referencias se usan en todo el protocolo:

| Referencia | Que es |
|---|---|
| `<GRTH>` | la carpeta de entregables de la etapa del crecimiento |
| `<BASE>` | la carpeta de entregables de la etapa de la baseline |
| `<WSLT>` | la carpeta de entregables de la etapa del esqueleto |

📌 **Si alguna de las tres no esta declarada en `project.md`, dilo y detente.** No hay Gate que
correr sobre carpetas que el proyecto no ha adoptado, y adivinarlas es inventarse la evidencia.

---

## Paso 1 — Comprobar que hay algo que juzgar, y anclar el commit

**a) La etapa tiene que estar cerrada.** El Gate no se corre sobre trabajo en curso.

```bash
git status --porcelain
git log -1 --format="%h %ad %s" --date=short
```

🚨 **Si el arbol tiene cambios sin commitear en `<GRTH>`, `<BASE>` o `<WSLT>`, detente y
reportalo.** No audites: la evidencia todavia se esta moviendo, y tu dictamen describiria un estado
que ya cambio.

**b) Las cinco cosas que la etapa le entrega al Gate existen.** Son las que
`_phases/030_growth.md` §8 declara:

```bash
ls -1 <GRTH>/015_observation_window.md <BASE>/005_scope.md <BASE>/045_traceability.md _persistence/techdebt.md
ls -1 <GRTH>/005_iteration_*.md <GRTH>/010_slice_*.md
```

| Lo que hace falta | Donde vive |
|---|---|
| El producto minimo desplegado y en uso real | §3 de la declaracion de la ventana |
| La metrica, la ventana y el umbral fijados antes del primer dato | §1 de la declaracion de la ventana |
| Los datos de uso | el registro de ejecucion, extraido con la orden de §1 |
| La trazabilidad cerrada | el artefacto de trazabilidad de la baseline |
| La deuda declarada | `_persistence/techdebt.md` |

⚠️ **Falta uno = no es `NO CUMPLE`, es `NO AUDITABLE`.** Un criterio no se puede evaluar contra un
archivo que no existe; decir que no se cumple seria afirmar mas de lo que sabes.

**c) Ancla el commit**, que es lo que hace reproducible todo lo demas:

```bash
git log -1 --format=%h
```

Ese hash va en el dictamen. **Todo lo que afirmes se afirma sobre el.**

**d) Averigua que numero de dictamen te toca:**

```bash
ls -1 _audit/035_gate2/ 2>/dev/null
```

El primero es `005_verdict_001.md`. Si ya hay dictamenes, el tuyo es el siguiente correlativo.
**Ninguno se sobrescribe ni se borra**, y el motivo esta en el Paso 8.

---

## Paso 2 — Comprobacion 0: ¿es auditable la medicion?

**Va primero, antes de mirar un solo numero.** Si esto falla, ninguna cifra se puede interpretar.

Lo que hace auditable a esta etapa es que **la metrica, la ventana y el umbral existieran antes del
primer dato**, y que no se hayan movido despues. Y eso **no se pregunta: se mira en el historial.**

### 🚨 «Antes» se resuelve por el ORDEN del grafo, no por la fecha

⛔ **No uses `%ad` para decidir que fue antes.** La fecha de autor es un campo del commit y se
sobrescribe con una variable de entorno: un `GIT_AUTHOR_DATE` basta para fechar el mes pasado algo
escrito hoy, y la comprobacion daria `PASA`. Lo que **si** resiste dentro de un historial ya
publicado es el **orden topologico**: cada commit apunta a su padre, y ese enlace no se cambia sin
reescribir todo lo que viene detras — cosa que un `push` ya hecho delata.

📌 **`%ad` se sigue leyendo, pero como dato informativo**, para la lectura humana del dictamen.

**a) Resuelve los commits de alta y el primer dato:**

```bash
WIN=$(git log --diff-filter=A --format=%H -- <GRTH>/015_observation_window.md | tail -1)
SLICE1=$(git log --diff-filter=A --format=%H -- <GRTH>/010_slice_*.md | tail -1)
ITER1=$(git log --diff-filter=A --format=%H -- <GRTH>/005_iteration_*.md | tail -1)
SCOPE=$(git log --diff-filter=A --format=%H -- <BASE>/005_scope.md | tail -1)
for v in WIN SLICE1 ITER1 SCOPE; do eval "echo \"$v=\$$v\""; done
```

🚨 **Si `WIN` sale vacio, la declaracion de la ventana no esta versionada.** El dictamen es
`NO AUDITABLE` y se dice asi: sin ella no hay contra que medir, y no hay forma de saber cuando se
fijo el criterio. **No es `NO COMPROBABLE`**: ese valor es de los criterios del Paso 5.

⚠️ **Si cualquiera de los cuatro sale vacio, tambien es `NO AUDITABLE`**, y por lo mismo: la
comprobacion no tiene contra que correr. Se nombra cual falto.

**b) La declaracion nacio antes del primer dato:**

```bash
git merge-base --is-ancestor $WIN $SLICE1 ; echo "ventana antes de la primera slice: exit=$?"
git merge-base --is-ancestor $SCOPE $WIN  ; echo "alcance antes de la ventana:       exit=$?"
```

`exit=0` es «antes». `exit=1` es «no antes» — y no hay tercera lectura.

📌 **Y ademas se lee la fecha que la propia declaracion escribe**, porque es la unica lectura que
compara el archivo consigo mismo:

```bash
grep -m1 'Fecha de la declaracion' <GRTH>/015_observation_window.md
grep -m1 'Fecha del primer dato recibido' <GRTH>/015_observation_window.md
git log --diff-filter=A --format='alta: %ad' --date=short -- <GRTH>/015_observation_window.md
```

⚠️ **Si la fecha de alta del archivo es posterior a la que el archivo declara como «primer dato
recibido», la ventana no se declaro: se describio.** Es `NO AUDITABLE`, y es el fallo que la propia
plantilla de la declaracion anuncia que no se puede tapar.

**c) Las tres no se movieron, y si se movieron esta escrito:**

```bash
git log --oneline -- <GRTH>/015_observation_window.md
git log -p -- <GRTH>/015_observation_window.md | grep -E '^[+-]\| \*\*(Metrica|Ventana|Umbral)\*\*'
```

| Que sale | Que significa |
|---|---|
| un solo commit, o commits que solo tocan §5 | la declaracion aguanto |
| el `grep -p` ensena una linea `-` de metrica, ventana o umbral | **alguna de las tres cambio** |

🚨 **Un cambio no es automaticamente `NO AUDITABLE`: lo es un cambio SIN REGISTRO.** La declaracion
tiene una §4 para esto. Se comprueba que cada cambio del `git log -p` tenga su fila alli, con su
valor anterior, su valor nuevo y su `D-XXX`:

```bash
sed -n '/^## 4\./,/^## 5\./p' <GRTH>/015_observation_window.md
```

⚠️ **«No cambio ninguna» tiene que estar escrito con esas palabras si no cambio nada.** Una §4 en
blanco no dice que no cambio nada: dice que nadie la miro.

**d) La ventana observada es la declarada, y la orden de extraccion es la misma:**

```bash
sed -n '/^## 1\./,/^## 2\./p' <GRTH>/015_observation_window.md
sed -n '/^## 5\./,/^## 6\./p' <GRTH>/015_observation_window.md
```

| Que se compara | Se cumple cuando |
|---|---|
| Ventana declarada en §1 contra la observada en §5 | son las mismas dos fechas |
| Orden de extraccion de §1 contra la de §5 | son **literalmente** la misma orden |

🚨 **Si al medir hizo falta otra orden, la plantilla obliga a pegar las dos.** Si solo esta la
segunda, la primera no servia y quien la escribio no lo sabia — y eso es `NO AUDITABLE`: una metrica
que se puede obtener de varias formas se obtendra de la que salga mejor.

**e) Las cuatro rendijas de §2 estan cerradas:**

```bash
sed -n '/^## 2\./,/^## 3\./p' <GRTH>/015_observation_window.md
grep -c 'se vera' <GRTH>/015_observation_window.md
grep -n '<' <GRTH>/015_observation_window.md
```

⚠️ **Las cuatro filas de §2 —quien cuenta, que cuenta como uso, como se agrega, que se hace con los
dias sin datos— deciden el resultado mucho mas que el numero del umbral.** Un mismo dato bruto da
«adopcion del 70%» o «del 30%» segun quien entre en el denominador. Una rendija abierta es
`NO AUDITABLE`, no un matiz.

Las siete lecturas, y que dice cada una:

| Que se comprueba | Se cumple cuando | Con que |
|---|---|---|
| La declaracion existe y esta versionada | `WIN` no sale vacio | orden |
| Nacio antes del primer dato | `--is-ancestor $WIN $SLICE1` devuelve `exit=0` | **orden** |
| Metrica, ventana y umbral no cambiaron sin registro | el `git log -p` no ensena lineas `-` sobre esas tres, o cada una tiene su fila en §4 | contenido |
| Si alguno cambio, §4 lo dice con su `D-XXX` | la fila existe y esta completa | contenido |
| La ventana observada es la declarada | §5 repite las dos fechas de §1 | contenido |
| La orden de extraccion es la misma | §1 y §5 publican la misma orden literal | contenido |
| Las cuatro rendijas estan cerradas | §2 sin huecos y sin «se vera» | contenido |

### 🚨 Si alguna falla, el dictamen es `NO AUDITABLE`. No es «criterios no satisfechos».

Son cosas distintas y confundirlas es caro:

| | Que dice |
|---|---|
| **Criterios no satisfechos** | la medicion existe, es legitima, **y dice que no** |
| **`NO AUDITABLE`** | **no se puede saber** lo que dice |

El producto pudo haber ido muy bien. Pero si el umbral se fijo con los datos delante, lo que hay no
es una barrera de inversion: es una justificacion — y una justificacion no puede dar un «no».

⚠️ **`NO AUDITABLE` corta el protocolo aqui.** No sigas a los criterios, no rellenes la tabla y **no
lo lleves al patrocinador**. Salta al Paso 8 y escribe el dictamen con lo que fallo y que medicion
hay que rehacer.

> ⚠️ **Una ventana que se alarga «un par de semanas mas, que va mejorando» no es paciencia: es
> esperar a que el dato diga lo que se queria oir.** Y se ve en una linea de `git log`.

---

## Paso 3 — Comprobacion 1: ¿los datos son de uso REAL?

**La comprobacion que mas dictamenes deberia cambiar, y la que casi nadie hace.**

La cifra bruta no dice nada por si sola. Se separa el uso por **quien lo genero**, usando la primera
rendija de §2 —«quien cuenta»— como definicion, no como sugerencia:

| Categoria | ¿Cuenta como adopcion? |
|---|---|
| Actores generadores reales, por decision propia | ✅ **si** |
| El equipo que construyo | ❌ no |
| Quien patrocina y su gente ensenando el producto | ❌ no |
| Usuarios a los que se les pidio que entraran | ⚠️ **no como adopcion**; si como uso asistido |
| Pruebas, demostraciones, entornos que no son el de destino | ❌ no |

**Se corre la orden de extraccion que §1 declaro, tal como la declaro**, y se publica su salida
cruda. Despues se publica la cifra filtrada, y con que se filtro.

```
CIFRA BRUTA: <n>   →   CIFRA DE GENERADORES REALES: <n>
```

🔑 **Si al filtrar por generadores reales la cifra se cae, la cifra nunca existio.** Un numero de uso
sin identidad detras no mide adopcion: es un contador.

🚨 **Si el registro NO permite separar quien es quien, el dictamen es `NO AUDITABLE` por falta de
instrumentacion.** Y el hallazgo no va contra el producto minimo: va contra la instrumentacion que la
etapa del esqueleto tenia que dejar montada y que las slices tenian que usar.

⛔ **`NO MEDIDO` no es cero.** Un hueco vacio se lee como «nadie lo uso»; «no medido» se lee como lo
que es — que el mecanismo de observacion no lo capturo. Si la declaracion publica `NO MEDIDO` en §5,
se transcribe tal cual y no se convierte en un numero.

---

## Paso 4 — Comprobacion 3: ¿lo construido es lo prometido?

⚠️ **Va antes que los criterios a proposito**, porque si el alcance contra el que se iba a cruzar ha
sido tocado, los criterios se estarian midiendo contra un blanco movido.

### 4.1. Antes de cruzar nada: ¿se ha tocado la lista del «no»?

**Se comprueba en el historial, no en el archivo.** Si se pudieran borrar lineas, esta comprobacion
se aprobaria **quitando de la lista lo que se colo**, y el control se desactivaria desde dentro sin
dejar rastro.

```bash
git log -p --format='== %h %ad' --date=short -- <BASE>/005_scope.md \
  | grep -E '^(== |[+-]NO ENTRA — |[+-]  (Razon|Va a): )'
```

| Que sale | Que significa |
|---|---|
| solo lineas `+` | la lista solo crecio — hay que mirar **cuando** crecio, abajo |
| alguna linea `-NO ENTRA — ` | **una entrada desaparecio**: `NO AUDITABLE` |
| alguna linea `-  Razon: ` sin su `-NO ENTRA` al lado | **una razon ya escrita se reescribio en silencio**: `NO AUDITABLE` |

🔑 **La segunda lectura caza el borrado; la tercera caza la reescritura, que a ojo no se ve porque no
deja hueco.**

**Y despues, cuando nacio cada entrada — porque no borrar no protege del anadido tardio.** Una linea
metida en la ultima semana convierte en «decidido desde el principio» algo que simplemente no se
construyo, y las lecturas de arriba pasarian igual:

```bash
grep '^NO ENTRA — ' <BASE>/005_scope.md | while read -r l; do
    echo "== $l"
    git log -S"$l" --format='%ad %h' --date=short -- <BASE>/005_scope.md
done
```

⚠️ **Una entrada que aparece en un commit posterior al de alta de la declaracion de la ventana no
cuenta como decision de la baseline: es un hallazgo.** Y si el archivo declaraba estado `CERRADO`
antes de eso, ademas contradice su propia cabecera.

```bash
git log -p -- <BASE>/005_scope.md | grep -E '^[+-]\| Estado \|'
```

🚨 **Si alguna de las cuatro lecturas falla, el dictamen es `NO AUDITABLE`**, no «no coincide».

### 4.2. El cruce, en las dos direcciones

```bash
sed -n '/^## 2\./,/^## 3\./p' <BASE>/005_scope.md
grep -c '^NO ENTRA — ' <BASE>/005_scope.md
cat <BASE>/045_traceability.md
```

| Que se cruza | Se cumple cuando |
|---|---|
| Lo de la lista «entra», ¿esta construido? | cada capacidad de §2 tiene su rastro en las actas de slice |
| Lo de la lista del «no», ¿se colo? | ninguna entrada `NO ENTRA` tiene rastro de haberse construido |
| La trazabilidad, ¿cierra en los dos sentidos? | los dos recuentos del artefacto de trazabilidad cuadran |

🚨 **Alcance que entro sin decision es tan hallazgo como alcance que falto.** La segunda mitad es la
que importa en un Gate de inversion: **lo construido de mas tambien costo.**

---

## Paso 5 — Comprobacion 2: los criterios, uno por uno

Los criterios son los de **`_methodology/000_method.md` §51**. Son seis, y **tu auditas cinco**:

| # | Criterio | ¿Lo auditas tu? |
|---|---|---|
| 1 | El actor generador puede usar la aplicacion | ✅ |
| 2 | Logra realizar la actividad principal | ✅ |
| 3 | Obtiene el valor esperado | ✅ |
| 4 | Existe **adopcion real** | ✅ |
| 5 | Existe **utilizacion real o recurrente** | ✅ |
| 6 | Vale la pena seguir invirtiendo | ⛔ **no** |

🚨 **El 6 no es tuyo, y no es un olvido.** No tiene ningun artefacto contra el que verificarse: es
literalmente la firma del patrocinador. Escribirlo en tu tabla seria emitir la decision que la regla
de arriba te prohibe. En el dictamen aparece con `— corresponde al patrocinador`.

**Cada uno de los cinco se resuelve con uno de tres valores, y solo tres:**

| Valor | Cuando |
|---|---|
| **CUMPLE** | hay evidencia registrada que lo sostiene |
| **NO CUMPLE** | hay evidencia registrada que lo contradice |
| **NO COMPROBABLE** | la evidencia no permite decidirlo |

🔑 **`NO COMPROBABLE` no se redondea a `CUMPLE`.** Un auditor que calla lo que no supo mirar
**miente por omision**, y da exactamente el mismo verde que uno que comprobo.

**Cada fila va con su evidencia en la forma `<archivo>:<linea>` o `<archivo> §<seccion>`.** Una fila
sin puntero es una opinion con formato de tabla.

### Donde se lee cada criterio

| # | Se lee sobre todo en |
|---|---|
| 1 | §3 de la declaracion de la ventana, y el registro de ejecucion filtrado del Paso 3 |
| 2 | las actas de slice de las capacidades de §2 del alcance, y el registro de ejecucion |
| 3 | los recuentos del Paso 3 contra el **valor esperado** que el alcance escribio |
| 4 | la cifra de generadores reales contra el umbral declarado en §1 |
| 5 | la **recurrencia**: cuantos de los que empezaron volvieron, dentro de la ventana |

📌 **Los criterios 4 y 5 son distintos y se confunden.** **Adopcion** es que empezaron a usarlo;
**utilizacion recurrente** es que volvieron. Un producto con cuarenta altas y ningun segundo uso
cumple el 4 y falla el 5 — y ese patron dice mucho mas que cualquiera de los dos por separado.

⚠️ **Si la declaracion de la ventana no fijo nada sobre recurrencia, el criterio 5 es `NO
COMPROBABLE`, no `CUMPLE`.** Y es ademas un hallazgo sobre la declaracion: un umbral que solo mide
altas no puede contestar la pregunta de este Gate.

⚠️ **Los criterios 1, 2 y 3 no se leen de la impresion de nadie.** Si lo unico que hay es una
impresion —del equipo o del patrocinador—, el valor es `NO COMPROBABLE`.

---

## Paso 6 — Comprobacion 4: la operacion hibrida

Casi siempre se olvida, y decide cual debe ser la primera iteracion de la etapa siguiente.

En la baseline se dejaron actores fuera, apostando a que sus procesos existentes absorberian el
volumen que el producto genera. **Aqui se comprueba si la apuesta salio.**

```bash
sed -n '/^## 4\./,/^## 5\./p' <BASE>/005_scope.md
sed -n '/^## 3\./,/^## 4\./p' <GRTH>/015_observation_window.md
```

| Que se compara | De donde sale |
|---|---|
| Volumen que se estimo para cada actor dejado fuera | §4 del alcance de la baseline |
| Volumen que realmente le llego | el registro de ejecucion, o `NO MEDIDO` |
| Si los procesos existentes lo absorbieron | §3 de la declaracion de la ventana, ultima fila |

> ⚠️ **Un producto minimo que triunfa con el generador y ahoga al coordinador en su hoja de calculo
> ha desplazado el problema, no lo ha resuelto.**

⛔ **Describes la saturacion; no propones la funcionalidad que la arreglaria.** Eso es trabajo de la
etapa siguiente, y proponerlo aqui contamina su criterio.

📌 **Si nadie midio el volumen que le llego a los actores de fuera, el resultado es `NO
COMPROBABLE`** — y es un hallazgo sobre la instrumentacion, no sobre el producto.

---

## Paso 7 — Comprobacion 5: la deuda declarada frente a la encontrada

```bash
cat _persistence/techdebt.md
```

Se lee la deuda declarada y se mira lo que hay: las actas de slice, el codigo, y lo que las
comprobaciones anteriores hayan destapado.

> 🔑 **Una deuda que encuentras y no estaba escrita pesa mas que la deuda misma.** La deuda cuesta
> trabajo; la deuda oculta cuesta la confianza en la lista entera — y entonces lo que queda en duda
> no es esa entrada, son todas.

⚠️ **Deuda declarada no es un hallazgo.** Es un atajo con su razon escrita, que es exactamente lo que
`techdebt.md` existe para permitir. Lo que se reporta es la **no declarada**.

📌 **Y una deuda sin la slice que la genero al lado es un defecto de la declaracion**, aunque la
deuda este escrita: sin eso nadie sabe que se rompe al pagarla.

---

## Paso 8 — Escribir el dictamen

Copia `_templates/035_gate2/005_verdict.md` a `_audit/035_gate2/005_verdict_<NNN>.md` con el numero
del Paso 1d, y rellenala. **No añadas secciones, no omitas ninguna.**

**El dictamen toma uno de tres valores, y ninguno es una decision:**

| Dictamen | Cuando |
|---|---|
| **`CRITERIOS SATISFECHOS`** | los cinco `CUMPLEN` |
| **`CRITERIOS NO SATISFECHOS`** | al menos uno es `NO CUMPLE` o `NO COMPROBABLE` |
| **`NO AUDITABLE`** | fallo la Comprobacion 0, la 1 no pudo separar el uso, o la 3 encontro la lista del «no» tocada |

⛔ **No escribas `APROBADO` ni `NO APROBADO` en ningun sitio.** Esas palabras nombran la decision del
patrocinador, no tu dictamen. Un dictamen que dice «aprobado» ya decidio.

### La frase que lo sostiene lleva el numero dentro

- ✅ *«De 40 generadores reales, 31 usaron la aplicacion y 24 volvieron al menos una vez en la
  ventana del 1 al 28 de marzo, sobre un umbral declarado de 20.»*
- ❌ *«la adopcion fue buena.»*

🔑 **Si no puedes escribir que observacion la tumbaria, el dictamen no esta sostenido: esta opinado.**
Y en este Gate, ademas, **sin cifra no se puede contrastar contra la ventana ni contra el umbral.**

### Los hallazgos

Cada uno con sus **dos marcas arriba**, antes del parrafo que lo explica:

```
Importancia: baja | media | alta   ·   Urgencia: bloqueante | no bloqueante
```

- **`Bloqueante` solo vale con la frase que dice que bloquea y que se rompe si se sigue.**
- **Importancia baja = una linea**, o no se entrega.
- ⚠️ **Un defecto y una mejora no van en el mismo sitio.** Lo que esta mal es un hallazgo; lo que
  podria estar mejor va a recomendaciones.

### 🚨 Si el dictamen es `NO AUDITABLE`

**No se rehace el producto minimo. Se rehace la MEDICION** — y solo la que fallo:

| Que fallo | Que se rehace |
|---|---|
| La metrica se definio despues de ver datos | se declara de nuevo y **se observa una ventana nueva completa** |
| La ventana se alargo | se toma la ventana **originalmente declarada** y se juzga con ella |
| El registro no distingue quien uso | se instrumenta y se abre ventana nueva |
| La lista del «no» se toco despues de cerrarse | se reconstruye desde el historial y se declara que se encontro |

🚨 **Un `NO AUDITABLE` por ventana alargada se juzga con la ventana ORIGINAL**, no esperando otra. Si
no, alargar sale gratis y la Comprobacion 0 no vale nada.

🚨 **`NO AUDITABLE` no puede repetirse dos veces por la misma causa.** Antes de escribir el tuyo,
**lee los dictamenes anteriores de `_audit/035_gate2/`**: si el mismo fallo ya salio, el problema no
es la evidencia — es que la medicion se esta rehaciendo hasta que salga, y eso es un hallazgo de
**importancia alta** que se escribe como tal.

📌 **Por eso ningun dictamen se borra ni se sobrescribe.** Esa comprobacion es lo unico que impide
que una medicion se reintente indefinidamente.

### 🚨 El sesgo propio de este Gate, escrito para que no te pille

En el Gate anterior habia unas semanas invertidas. Aqui hay un producto entero, un equipo, y un
patrocinador que ya lo enseno. La presion para dar el verde llega con la frase mas razonable del
metodo — *«despues de todo lo invertido, ¿vamos a parar ahora?»* — y es exactamente al reves:

> Lo ya invertido esta gastado, salga lo que salga. Lo unico que se decide hoy es **lo que falta por
> gastar.**

📌 **Este es el Gate que mas se salta**, y no por mala fe: cuando el producto existe, funciona y esta
desplegado, saltarselo **no se siente como saltarse un control, se siente como seguir trabajando**.
Su defensa no es la voluntad de nadie: son la Comprobacion 0, que lee el historial y no se puede
convencer, y la Comprobacion 1, que filtra por identidad. Si un proyecto solo puede pasar este Gate
saltandose una de las dos, ya tiene su respuesta.

---

## Paso 9 — Commit y push de tu propia salida

```bash
git status --porcelain
```

🚨 **Solo pueden aparecer archivos de `_audit/035_gate2/`.** Si aparece cualquier otro, **detente**:
o has escrito donde no debias, o el arbol venia sucio. En ambos casos se reporta y no se commitea.

```bash
git add _audit/035_gate2/
git commit -m "dictamen Gate 2 <NNN> sobre <hash>"
git push
git status -sb
```

Termina siempre el mensaje con:

```
Co-Authored-By: Claude Opus 5 <noreply@anthropic.com>
```

⛔ **Prohibidos sin excepcion:** `git commit --amend`, `git reset`, `git checkout --`,
`git restore`, `git rebase`, `git clean`, `git push --force` y cualquier cosa con `--force`. Tu
trabajo es **añadir** historia. Si crees que hace falta uno de esos, detente y dilo.

🚨 **Si `git status -sb` sigue diciendo `ahead`, el push no ocurrio.** Va al reporte, no se tapa.

---

## Paso 10 — Reporte en pantalla

En espanol, sin relleno. **Completo**: lo recibe `manager`, que lo retransmite al usuario, y un
reporte recortado se recorta dos veces.

```
## Dictamen Gate 2 <NNN> — sobre <hash>

### Dictamen
<CRITERIOS SATISFECHOS | CRITERIOS NO SATISFECHOS | NO AUDITABLE>

### Frase que lo sostiene
<una sola, falsable, con el numero dentro>

### Ventana
<inicio> → <fin>   (declarada el <fecha>, <un solo commit | cambio: ver §4>)

### Comprobacion 0 — auditabilidad de la medicion
<PASA | FALLA — que lectura fallo, con los hashes y exit codes crudos>

### Comprobacion 1 — uso real
<cifra bruta> → <cifra de generadores reales>   ·   <con que se filtro>

### Comprobacion 3 — lo construido contra lo prometido
<COINCIDE | NO COINCIDE — que falto y que se colo>   ·   lista del «no»: <intacta | TOCADA>

### Criterios
| # | Resultado | Evidencia |
|---|---|---|
| 1 | <CUMPLE / NO CUMPLE / NO COMPROBABLE> | <archivo:linea> |
| … | … | … |
| 6 | — | corresponde al patrocinador |
Recuento: N cumplen · N no cumplen · N no comprobables

### Comprobacion 4 — operacion hibrida
<AGUANTO | NO AGUANTO | NO COMPROBABLE> — <que actor, y con que numero>

### Comprobacion 5 — deuda
<coincide | N deudas encontradas y no declaradas — cuales>

### Hallazgos          <-- omitir si no hay
- <importancia · urgencia> — <una linea>

### Recomendaciones sin hallazgo          <-- omitir si no hay
- <una linea cada una>

### Registrado
`_audit/035_gate2/005_verdict_<NNN>.md` — <hash del commit> — <"subido, sin ahead" | 🚨 "SIN SUBIR — que fallo">

### Lo que falta para cerrar el Gate
<Si NO AUDITABLE: no hay decision que tomar. Se rehace la MEDICION listada y se vuelve a correr.>
<Si no: la decision del patrocinador —seguir invirtiendo, replantear o detener—, que registra
`manager` en `_persistence/decisions.md` con su `D-XXX`. Sin ella el Gate NO esta cerrado.>
```

---

## Reglas del protocolo

- **Emites dictamen, no decision.** Nunca escribas `APROBADO` ni `NO APROBADO`.
- **El criterio 6 no es tuyo.** Se marca `— corresponde al patrocinador`, no se evalua.
- **`NO COMPROBABLE` no se redondea a `CUMPLE`**, ni por brevedad ni por no dejar un hueco.
- **`NO MEDIDO` no es cero.** Se transcribe tal cual.
- **Auditabilidad antes que resultado.** Si la Comprobacion 0 falla, no sigas.
- **La inversion ya hecha no es criterio.** Ni el coste, ni el equipo, ni lo cerca que se quedo.
- **Adopcion y recurrencia son criterios distintos.** No se funden en una cifra.
- **Cada afirmacion, con su comando y su salida cruda.** «Se comprobo» no es evidencia.
- **No corrijas nada**, ni una linea, ni aunque sea obvio.
- **No propongas funcionalidades.** Contamina el criterio de la etapa siguiente.
- **No escribas fuera de `_audit/035_gate2/`.**
- **No leas `temporal/`.** No es parte del registro.
- **`Sin hallazgos` es un resultado valido**, y no significa que no hayas mirado.
