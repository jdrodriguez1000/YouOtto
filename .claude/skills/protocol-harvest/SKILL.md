---
name: protocol-harvest
description: Protocolo de la cosecha de lecciones. Recorre las lecciones de la etapa que cierra, las pasa por los cuatro filtros que viven en el archivo de lecciones globales, y promueve las que pasan — escribiendo, commiteando y subiendo en un repositorio DISTINTO de este. La escritura fuera lleva puerta: nada se toca hasta que el usuario aprueba las candidatas. Uso exclusivo de manager, que lo ejecuta al cerrar una etapa, antes de la firma del patrocinador y nunca durante una auditoria.
---

# Protocolo de la cosecha de lecciones

Este protocolo lo ejecuta **unicamente `manager`**, y es el unico del andamiaje que **escribe fuera de
este repositorio**. Convierte las lecciones de la etapa que cierra en entradas del archivo de
lecciones globales, o en un descarte razonado.

> 🚨 **La regla que gobierna todo el protocolo: escribir fuera tiene una puerta, y la puerta es el
> usuario.** Clasificar y redactar son tuyos. **Tocar el otro repositorio no lo es** hasta que el
> usuario aprueba, entrada por entrada. Aprobado eso, escribir, commitear y subir van seguidos, sin
> una segunda puerta.

> 🔑 **Por que la puerta va antes de escribir y no antes del push.** Un commit local se revierte; lo
> que no se revierte es que una entrada entrara al archivo sin que nadie la filtrara. El valor entero
> del archivo global esta en que cada linea paso por un juicio humano — la puerta protege ese filtro,
> no el push.

> 🔑 **Y la segunda: los cuatro filtros NO estan en este archivo.** Viven en el archivo de lecciones
> globales, en su seccion de promocion, y de ahi se leen **en el momento de cosechar**. Copiarlos aqui
> crearia una segunda copia que envejeceria por su cuenta, y ante la discrepancia mandaria la vieja.

## Lo que puedes y lo que no

| Puedes | No puedes |
|---|---|
| leer todo este repositorio y el de lecciones globales | **escribir fuera de este repositorio antes de la puerta** |
| clasificar cada leccion y redactar la entrada que propones | **decidir por tu cuenta que sube**: eso lo aprueba el usuario |
| escribir, commitear y subir en el repositorio de lecciones **una vez aprobado** | reescribir historia en ninguno de los dos (`--amend`, `reset`, `rebase`, `--force`) |
| enmendar una entrada global existente, si el filtro 4 lo pide | **borrar** una entrada global, ni renumerarla, ni reutilizar un codigo |
| dejar el registro de vuelta en este repositorio | dar la etapa por cerrada — eso es la firma del patrocinador |

⛔ **Nada de lo que promuevas puede nacer aqui.** Una entrada del archivo global sale **siempre** de
una leccion ya escrita en el registro de este proyecto. Si al cosechar se te ocurre una leccion nueva,
va antes al registro del proyecto, y se cosecha en la pasada siguiente.

⛔ **Y no se poda el archivo global de paso.** Si al escribir ves que ha crecido mas de lo que se lee
de una sentada, se dice en el reporte y se decide aparte. Podar mientras se promueve mezcla dos
trabajos, y el que se pierde es el que nadie estaba mirando.

---

## Paso 0 — Los datos propios, y el disparador

**De `project.md` salen las tres cosas que este protocolo no lleva dentro:** donde esta el repositorio
de lecciones, como se llama su archivo y cual es su remoto. Se leen alli **cada vez**; no se recuerdan
de una ejecucion anterior.

```bash
# las filas de lecciones globales del registro del proyecto
grep -n -i 'Lecciones globales' project.md
```

**Y la etapa que cierra** te la da quien te invoca, o el archivo de etapa que se esta cerrando. Si no
esta clara, **detente y preguntala**: cosechar la etapa equivocada mezcla lecciones de dos contextos y
no hay forma de deshacerlo despues.

### 🚨 Los dos disparadores, y los dos son condiciones de parada

| Comprueba | Si no se cumple |
|---|---|
| **la etapa se va a cerrar de verdad** — hay un cierre en curso, no un antojo | 🚨 **no cosechas.** Corrida cuando apetece, la casilla deja de ser disparador y vuelve a ser una nota |
| **no hay una auditoria en curso ni pendiente sobre lo que se va a cosechar** | 🚨 **no cosechas.** Una vara que cambia mientras mide deja de comparar |

⚠️ **El segundo se salta con facilidad porque no duele.** El archivo global es la vara con la que se
audita; si cambia entre una auditoria y la siguiente, la segunda no es mas estricta, es **otra** — y
las dos dejan de ser comparables. El propio archivo global lo dice en su seccion de promocion, y
manda lo que diga alli.

---

## Paso 1 — El barrido, no la memoria

La cosecha empieza por **una columna, no por quince fichas**. Del indice del registro de lecciones se
sacan las de **la etapa que cierra** que esten `Sin evaluar`:

```bash
# las candidatas a evaluar: etapa que cierra + Sin evaluar
grep -E '^\| \[L-' <registro de lecciones> | grep '<etapa que cierra>' | grep 'Sin evaluar'

# y su recuento, que es el numero que tiene que cuadrar al final
grep -E '^\| \[L-' <registro de lecciones> | grep '<etapa que cierra>' | grep -c 'Sin evaluar'
```

**Las dos salidas se pegan en el reporte**, tambien cuando la lista sale corta. El recuento de aqui es
el que tiene que cuadrar con la suma de los tres destinos del Paso 3: si no cuadra, alguna se quedo
sin clasificar.

⚠️ **`Sin evaluar` no significa «no sube»: significa que nadie lo ha mirado.** Los dos se parecen al
leerlos deprisa, y confundirlos deja la cosecha hecha sobre lecciones que nunca se evaluaron.

⛔ **No amplies el barrido a otras etapas.** Una leccion de una etapa anterior que siga `Sin evaluar`
es un defecto de aquella cosecha, y se reporta como tal — no se arregla aqui de tapadillo.

---

## Paso 2 — Leer los cuatro filtros donde viven

```bash
# la seccion de promocion del archivo global, entera
sed -n '/^## Promoci/,/^## /p' <archivo de lecciones globales>
```

Se lee **entera y ahora**, no de memoria: incluye los cuatro filtros, el «cuando se promueve» y las
reglas de la promocion —codigo correlativo nunca reutilizado, la cita del origen, y que una enmienda
**toca el enunciado** en vez de anadirse debajo—.

🚨 **Si esa seccion dice algo distinto de lo que dice este protocolo, manda ella.** Este archivo
describe el procedimiento; el otro define el criterio. Y si la discrepancia es de fondo, **se detiene
la cosecha y se reporta** — no se elige la version que resulte mas comoda.

⚠️ **Esta es la unica lectura del archivo global que hace este paso.** No lo vuelques entero al
contexto para «tenerlo a mano»: leido de corrido no queda ninguna leccion, y ademas no es lo que hace
falta aqui. Lo que hace falta es la seccion de promocion y, en el Paso 3, las entradas concretas
contra las que se contrasta cada candidata.

---

## Paso 3 — Clasificar: un destino por leccion, y solo tres

Cada leccion del Paso 1 sale con **exactamente uno** de estos tres:

| Destino | Cuando | Que pasa despues |
|---|---|---|
| `Global candidata` | pasa **los cuatro** filtros | va a la puerta del Paso 5 |
| `Ya cubierta por LG-NN` | el archivo global ya lo dice | **no sube**, y se anota cual la cubre |
| `Solo proyecto` | no sobrevive al cambio de lenguaje, libreria o dominio | no sube |

🚨 **«Los cuatro» es literal: son cuatro puertas en serie, no un promedio.** Una leccion que pasa tres
y falla una **no sube**. La tentacion es real cuando la leccion es buena y falla justo el filtro 4
—«¿anade algo que aqui no este ya?»—: eso no es un aprobado raspado, es una **enmienda**, y va como
enmienda.

⚠️ **El filtro 4 tiene una salida que no es ni si ni no, y es la que mas se pierde.** Si la leccion es
una **cara nueva** de una que ya existe, el archivo global pide **enmendar el enunciado de la
existente**, no crear otra. Eso sigue siendo trabajo de promocion y va a la puerta como tal, marcado
`enmienda a LG-NN` para que el usuario vea que lo que se propone es tocar una linea que ya estaba.

⛔ **Un destino sin razon escrita no es una clasificacion.** De cada leccion se anota **cual** de los
cuatro filtros la descarto, o que los paso los cuatro. «No aplica» y «no parece global» no son
razones: son la ausencia de una.

### El contraste que cierra el paso

La tabla de clasificacion se transcribe a mano —es un juicio, no una salida—, y por eso lleva su
contraste: **el numero de filas tiene que ser el recuento del Paso 1**, que si sale de una orden.

```bash
# el mismo recuento del Paso 1, otra vez, para pegarlo al lado de la tabla
grep -E '^\| \[L-' <registro de lecciones> | grep '<etapa que cierra>' | grep -c 'Sin evaluar'
```

Los dos numeros se publican juntos en el reporte. Si no cuadran, alguna leccion se quedo sin
clasificar — y esa es exactamente la que la memoria deja fuera.

⚠️ **El contraste no dice que la clasificacion sea correcta, solo que esta completa.** Que un destino
sea el acertado no lo prueba ninguna orden: lo prueba la razon escrita al lado, y despues la puerta.

---

## Paso 4 — Redactar lo que se propone, antes de pedir permiso

Para cada `Global candidata`, se redacta **ya** la entrada tal y como quedaria en el archivo global:
su codigo `LG-NN` correlativo, su enunciado, y la cita del origen con la forma que el propio archivo
global use para citar proyecto y leccion.

**El codigo sale del archivo, no de la cuenta.** Se deriva del ultimo en uso:

```bash
# el ultimo LG-NN que existe hoy; el siguiente es el que se asigna
grep -oE 'LG-[0-9]+' <archivo de lecciones globales> | sort -t- -k2 -n | tail -1
```

🚨 **Nunca se reutiliza un codigo, ni siquiera uno que quedara libre por una poda.** Un codigo
reutilizado convierte cada cita antigua que lo nombra en una cita a otra cosa, en todos los proyectos
a la vez, y sin que nada falle.

⚠️ **Se redacta antes de la puerta a proposito.** Pedir permiso «para promover tres lecciones» sin
enseñar el texto obliga al usuario a aprobar una intencion. Lo que se aprueba es **lo que se va a
escribir**, palabra por palabra.

---

## Paso 5 — 🚨 LA PUERTA

Se presenta al usuario, y **aqui se para**:

- las `Global candidata`, cada una con **su texto `LG-NN` propuesto entero**;
- las `enmienda a LG-NN`, con el enunciado **de antes y el de despues**, para que se vea que se toca;
- las descartadas, con el filtro concreto que las descarto;
- el recuento del Paso 1 y el contraste del Paso 3.

⛔ **No se toca el otro repositorio hasta que el usuario responde.** Ni un `git add`, ni un archivo
temporal dentro de el, ni un `git fetch` que deje rastro. Leerlo ya estaba permitido; escribirlo no.

**El usuario puede aprobar todo, parte o nada, y puede reescribir un texto propuesto.** Lo que
apruebe es lo que se escribe: si cambia una redaccion, se escribe **la suya**, no la tuya con su
correccion aplicada por encima.

🚨 **Si el usuario no responde, la cosecha queda abierta y la etapa no cierra.** No hay valor por
defecto, y «no dijo que no» no es aprobar. Una puerta que se abre sola no es una puerta.

---

## Paso 6 — Escribir fuera, commitear y subir

Ya con la aprobacion, y **solo con ella**:

1. se escriben las entradas aprobadas en el archivo de lecciones globales, con su codigo y su cita de
   origen;
2. las enmiendas **tocan el enunciado** de la entrada existente — no se anaden debajo;
3. se anade la fila que corresponda en el **registro de revisiones** del archivo global, y se declara
   la **version nueva** donde ese archivo la declare;
4. commit y push en ese repositorio, con un mensaje que diga de que proyecto y de que etapa viene la
   cosecha.

**El commit deja su hash a la vista**, porque el registro de vuelta lo va a citar:

```bash
git -C <repositorio de lecciones globales> rev-parse --short HEAD
```

⚠️ **Si el push falla, no se repite la escritura.** El commit existe en local y la cosecha esta hecha;
lo que falta es que este a salvo, y eso va en el reporte tal cual. Volver a escribir «por si acaso»
duplica entradas en un archivo donde los codigos no se reutilizan.

🚨 **Si algo sale mal a mitad —una entrada escrita y otra no—, se dice cual quedo escrita y cual no.**
El archivo global lo leen otros proyectos: un estado a medias sin declarar es peor que uno declarado.

---

## Paso 7 — El registro de vuelta, en este repositorio

La cosecha no termina fuera: termina cuando **este** repositorio puede demostrar lo que paso.

1. **La columna `Portabilidad` de cada leccion cosechada** pasa a su valor final: `Promovida a LG-NN`,
   `Ya cubierta por LG-NN` o `Solo proyecto`. Ninguna se queda en `Sin evaluar` — ese era el punto.
2. **Su `D-XXX`** en el registro de decisiones, con:
   - que se promovio y que se descarto, con el filtro que descarto cada una;
   - el **hash del commit** del repositorio de lecciones;
   - la **version nueva del archivo global declarada**;
   - y su bloque de verificacion, con la orden y su salida cruda.
3. **El indice y la entrada, en la misma pasada.** Una entrada sin fila en el indice es invisible.

🚨 **El valor `Promovida a LG-NN` se escribe solo si la entrada esta de verdad en el otro
repositorio.** Es la unica afirmacion de este registro que habla de un archivo que el auditor **no
puede ver**: si es falsa, nada de aqui la desmiente. Por eso va con el hash delante.

⚠️ **Y esa columna vive en el indice y en ningun sitio mas.** No se repite dentro de la ficha: un
estado escrito en dos sitios acaba diciendo dos cosas, y entonces no se sabe cual manda.

---

## Paso 8 — Reporte en pantalla

```markdown
## Cosecha de <etapa> — <N> lecciones evaluadas

### Barrido
<la orden del Paso 1 y su salida cruda, con el recuento>

### Clasificacion
| Leccion | Destino | Razon |
|---|---|---|
| L-XXX | Global candidata | pasa los cuatro |
| L-XXX | Ya cubierta por LG-NN | filtro 4 |
| L-XXX | Solo proyecto | filtro 1 |

<el contraste: la suma cuadra con el recuento del Paso 1, o no cuadra y se dice>

### Promovido
<cada LG-NN nueva, con su enunciado; cada enmienda, con el antes y el despues>
<el hash del commit en el repositorio de lecciones, y si el push salio>
<la version nueva del archivo global>

### Registrado aqui
<la D-XXX, y las filas de Portabilidad que cambiaron>

### Lo que queda
<lo que el usuario no aprobo y por que, si es el caso>
<lo que falta para que la casilla de la condicion de salida se pueda marcar>
```

---

## Reglas del protocolo

🚨 **Escribir fuera de este repositorio es lo unico irreversible que hace el andamiaje.** Commiteada y
subida, una entrada la leen todos los proyectos que usen el archivo. No hay «lo quito luego» que
deshaga que otro proyecto ya la leyo.

🚨 **La puerta no se optimiza.** Ni agrupando aprobaciones «para no molestar», ni asumiendo que lo de
la vez pasada vale para esta. Una aprobacion cubre las entradas que enseño, y ninguna mas.

🚨 **Nada entra al archivo global sin pasar antes por el registro de lecciones de un proyecto.** Esa
es la unica puerta de entrada, y este protocolo no la abre por otro lado.

⛔ **No se lee el archivo global entero.** Se entra por su indice y por su seccion de promocion, se
leen las entradas contra las que hay que contrastar, y se sale. Quien lo vuelca al contexto lo esta
desactivando.

⚠️ **Va en un solo sentido.** De este repositorio al global, al cerrar una etapa. Nada del archivo
global se copia aqui por esta via — para eso estan sus tres usos, y solo el tercero trae algo dentro.

⚠️ **La cosecha va antes de la firma del patrocinador, no despues.** La casilla de la condicion de
salida exige que ya este hecha; hecha despues de firmar, esa casilla no se podria marcar nunca.

⛔ **No decides si la etapa cierra.** Dejas la casilla en condiciones de ser verificada por quien
levanta el acta, y firmada por quien firma. Son tres papeles distintos y ninguno absorbe a otro.
