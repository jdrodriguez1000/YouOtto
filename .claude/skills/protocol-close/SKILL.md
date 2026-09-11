---
name: protocol-close
description: Protocolo de cierre de sesion del proyecto. Recoge la evidencia real del trabajo (git status, git diff, git log), actualiza de forma obligatoria _persistence/progress.md y _persistence/tasks.md, propone entradas de techdebt.md, y solo revisa —sin escribirlos— decisions.md, assumptions.md, constraints.md y lessons.md; despues escribe el informe para la auditoria y deja la sesion cerrada con un commit y su push. Uso exclusivo del agente session-closer, que se lanza al terminar una jornada de trabajo o cuando el usuario pida "cerremos la sesion", "cierra la sesion", "finalicemos el trabajo", "guarda el avance", "terminamos por hoy" o algo similar.
---

# Protocolo de cierre de sesion

Este protocolo lo ejecuta **unicamente** el agente `session-closer`. Deja el proyecto en un estado
del que la proxima sesion pueda arrancar sola.

## Que es una sesion

🔑 **Una sesion es una jornada de trabajo, no un dia.** Puede ser una manana, una tarde, una
noche, o un dia completo. **Puede haber varias sesiones en la misma fecha**, y cada una tiene su
propio cierre y su propio `S-XXX`. Nunca asumas que una sesion equivale a un dia.

> 🔑 **La regla que gobierna todo el protocolo: se escribe desde la EVIDENCIA, no desde el
> relato.** No anotes «se hizo X» si X no aparece en el `git diff`.

Escribir desde lo que se recuerda de la conversacion es escribir rumores; escribir desde el diff
es escribir hechos. Si las dos cosas se contradicen, **manda el diff**.

## Los tres actores del proyecto

| Actor | Escribe | No escribe |
|---|---|---|
| **manager** (sesion de trabajo) | construye, y registra el porque en el momento | — |
| **El cierre** (este protocolo) | `progress.md`, `tasks.md`, propuestas a `techdebt.md`, el informe `_audit/S-XXX.md` | los cuatro del porque |
| **`report_auditor`** (agente) | `_audit/R-XXX.md`, `_audit/findings.md`, `_audit/index.md` | no construye, no corrige |

🚨 **`report_auditor` corre despues de ti, no a la vez.** Tu cierras y commiteas; el audita ese commit.
Por eso **no escribes nada en `_audit/R-XXX.md` ni en `_audit/findings.md`**: son suyos.

⚠️ Lo que venga de una auditoria se refleja en `_persistence/tasks.md` como tarea con
`Origen: report_auditor`, y solo despues de que `manager` la evalue y la considere correcta. **Tu no haces
esa evaluacion**: si aparece algo de la auditoria sin evaluar, lo dices en el reporte.

🚨 **Esa `T-XXX` puede existir ya cuando tu llegas, y es lo normal.** `manager` la escribe en el
momento de aceptar el hallazgo, porque la fila del hallazgo tiene que citar su codigo para ser
auditable. **No la dupliques ni la reescribas:** comprueba que esta y sigue.

🚨 **Y hay una segunda excepcion, del mismo tipo:** `manager` tambien escribe en `tasks.md` cuando el
cambio **nace de una decision ya registrada que tu no puedes deducir del `git diff`** —reasignar la
etapa de una tarea, cambiar la estructura del archivo porque lo pidio el usuario—. Tu arrancas en
frio: una orden del usuario no deja rastro en el diff.

⚠️ **Son dos excepciones, no una puerta, y las dos se reconocen igual: por la cita.** Toda fila
editada a mano lleva un `D-XXX` o un `F-NNN` que la respalde, escrito en la propia tarea. **Si la
cita esta, no es una infraccion: no la deshagas ni la reportes como desfase.** Si falta, eso si va al
reporte. Las dos estan escritas en la convencion del propio `tasks.md`; lo demas sigue siendo tuyo.

🚨 **No toques `temporal/`.** Es el area de trabajo del usuario, no parte del registro.

---

## Paso 0 — Los datos propios del proyecto

Empieza leyendo **`project.md`** (en la raiz, en minusculas): los datos propios de este proyecto
—nombre, rutas, remoto, carpetas declaradas—. Todo lo que en este protocolo aparece entre
`<angulos>` se resuelve ahi.

🚨 **Este protocolo no lleva dentro ni un dato del proyecto, y esa es su condicion de uso.** Se
copia a otro proyecto tal cual: lo unico que cambia es `project.md`. De ahi se sigue que un valor
que ese archivo **no declare** deja sin poder ejecutarse al control que lo usaba —los Pasos 1b y 2c
son los dos casos—, y entonces:

- **no lo inventes** ni lo reconstruyas por analogia con otro proyecto;
- **no des por correcto** el control que no pudiste correr;
- va al reporte del Paso 8 como `🚨 SIN COMPROBAR — <que falta en project.md>`.

🔑 Esa es la misma regla que rige el resto del protocolo: **«no pude comprobarlo» no es «esta
bien»**, y confundir las dos cosas es como se cuela todo lo que se cuela. Ademas, una linea
`SIN COMPROBAR` repetida sesion tras sesion es la unica forma de que el hueco se note.

---

## Paso 1 — Recoger la evidencia (antes de escribir nada)

En este orden y sin saltarte ninguno:

```
git status
git diff
git diff --staged
git log --oneline -5
```

De ahi sale **que paso de verdad hoy**: que archivos nacieron, cuales cambiaron y desde que punto
se venia.

Si `git status` sale limpio y no hay nada sin commitear, **dilo y detente**: no hay sesion que
cerrar. No inventes avance para llenar el reporte.

⚠️ **Excepcion unica — el primer cierre del repositorio.** Si `git log` falla porque todavia no
existe ningun commit, no es un error: es el commit inicial. Sigue el protocolo normal; la evidencia
es entonces `git status`, que lista todo como sin seguimiento. En ese primer cierre, **el Paso 2c
tampoco puede correr** —`git ls-tree HEAD` no tiene arbol contra el que comparar—, y va al reporte
como `SIN COMPROBAR — sin commits todavia`.

### 1b. El control de fuga de datos del proyecto

Con la evidencia delante, corre este control y **pega su salida cruda en el informe**:

```bash
git grep -nE "<nombre del proyecto>|<carpeta raiz de las rutas absolutas>|<host del remoto>" -- .claude CLAUDE.md _phases _methodology _templates _workflow
```

Los tres valores salen de `project.md`. Si alguno no esta declarado ahi, este control **no se puede
construir**: dilo en el reporte, no lo aproximes.

🔑 **La respuesta correcta es CERO lineas** (`exit 1`). Si devuelve alguna, un dato propio del
proyecto se ha colado en un archivo que deberia ser reutilizable tal cual, y **se reporta como
hallazgo propio en el informe**: no se arregla en silencio ni se omite.

🚨 **El ambito es parte del control, no un detalle de implementacion.** Se acota a `.claude/`,
`CLAUDE.md`, `_phases/`, `_methodology/`, `_templates/` y `_workflow/`, y a nada mas, porque son los
**unicos sitios donde «cero» es la respuesta correcta**: los seis tienen que poder copiarse a otro
proyecto tal cual. El mismo patron sobre el arbol entero da siempre positivos **legitimos**:

| Donde | Por que es correcto que aparezca |
|---|---|
| `project.md` | es su sitio, por diseño: el archivo existe justamente para concentrarlos |
| `_audit/S-XXX.md` | informes ya entregados; no se reescriben |
| `_persistence/` | registro historico: describe lo que paso, y el pasado no se reescribe |

⚠️ **Un control que avisa de todo termina apagado.** Si se ensancha el ambito «por si acaso», el
control pasa a devolver decenas de lineas correctas cada sesion, alguien deja de mirarlas, y
entonces no detecta nada — que es peor que no tenerlo, porque ademas se cree que existe.

📌 **Por que existe este control:** un protocolo con las rutas y los nombres del proyecto escritos
dentro deja de ser reutilizable y, peor, empieza a contradecir al archivo que deberia ser la unica
fuente de esos datos. La regresion es facil de cometer y **detectable sin ejecutar nada**, porque
es una busqueda de texto: cuesta un segundo. Va escrito con su patron literal precisamente para
que nadie tenga que reinventarlo cada sesion.

### 1c. El control de codigos instanciados

El Paso 1b busca **datos** propios del proyecto: nombre, ruta y host. Hay una segunda forma de la
misma fuga que aquel patron no ve, y es la de los **codigos del registro**: un `T-` o un `D-` con su
numero detras citado dentro de un archivo que tiene que poder copiarse tal cual. Copiado a otro
proyecto, cita entradas que alli no existen.

```bash
git grep -noE '\b(T|D|F|L|A|C|DT|S)-[0-9]{2,3}\b' -- _phases _workflow
```

🔑 **La respuesta correcta es CERO lineas** (`exit 1`). Si devuelve alguna, se reporta como hallazgo
propio en el informe con su archivo y su linea, igual que en 1b: no se arregla en silencio.

🚨 **El ambito son dos carpetas, no las seis del Paso 1b, y la diferencia no es un descuido.** En
`.claude/`, `_methodology/`, `_templates/` y `CLAUDE.md` un codigo con numero es **legitimo**: los
protocolos citan las decisiones que los explican, el metodo numera ejemplos, y una plantilla escribe
el primero de su serie porque esa forma es lo que la plantilla existe para dar. Las dos que quedan
son las unicas donde «cero» es la respuesta correcta:

| Carpeta | Por que cero |
|---|---|
| `_phases/` | `CLAUDE.md` lo dice literal: los codigos se escriben genericos —`T-XXX`, `D-XXX`, `F-NNN`—, **nunca instanciados** |
| `_workflow/` | reparte trabajo con codigos genericos; lo que se **adopta** vive en el registro, y ahi es donde lleva numero |

⚠️ **Ensanchar este control a las seis carpetas lo apaga.** Devolveria decenas de lineas correctas
cada sesion, y un control que siempre avisa termina sin lector — lo mismo que advierte el Paso 1b
sobre su propio ambito.

📌 **Por que existe:** la fuga que lo motivo entro por una **nota fechada** dentro de un archivo de
etapa, escrita para explicar de donde salia un cambio. La intencion era buena —dejar trazabilidad— y
por eso no la ve nadie releyendo: parece exactamente lo que el resto del repositorio pide hacer. Lo
que la delata es que las dos carpetas tenian cero ocurrencias y pasaron a tener dos.

---

## Paso 2 — El traspaso, solo para el porque

La sesion puede dejar un traspaso corto: lo que se intento, lo que se descarto, con que se trabo el
usuario. Usalo **solo para explicar el porque** de lo que ya viste en el diff.

⚠️ **El traspaso nunca sustituye la evidencia.** Si el traspaso dice que se hizo algo y el diff no
lo muestra, manda el diff — y anotalo como discrepancia en el reporte.

Si no hay traspaso, el protocolo funciona igual, solo que con menos porque.

---

## Paso 2b — Coherencia indice ↔ detalle (antes del `git add`)

Cada archivo de `_persistence/` abre con un indice. **Los indices de este proyecto son tablas con
enlaces de ancla, no numeros de linea**: no se desfasan al editar el archivo, asi que no hay nada
que regenerar. Lo que si se rompe es otra cosa:

- una **entrada sin fila en el indice** es invisible: nadie la va a encontrar, porque nadie lee el
  archivo entero;
- una **fila de indice sin entrada** apunta al vacio.

Las dos formas de dejarlo a medias mienten igual. Esta comprobacion las detecta:

🚨 **El `awk` del principio de cada rama no es decoracion: descarta los bloques de codigo
cercados.** El registro guarda **salida cruda de comandos** como evidencia, y esos bloques
contienen encabezados y codigos identicos a los reales —`### C-XXX`, `| [T-XXX]…`— que son citas de
como estaba el archivo, no entradas. Sin el filtro, el control senala como huerfano lo que en
realidad es una prueba bien puesta. Y una alarma que siempre resulta falsa se aprende a ignorar:
el dia que sea verdadera tampoco se mirara.

```bash
for f in tasks decisions constraints assumptions lessons techdebt progress; do
  echo "== $f"
  diff <(awk '/^```/{c=!c; next} !c' "_persistence/$f.md" | grep -oE '^\| \[?[A-Z]+-[0-9]+' | grep -oE '[A-Z]+-[0-9]+' | sort -u) \
       <(awk '/^```/{c=!c; next} !c' "_persistence/$f.md" | grep -oE '^#{3} [A-Z]+-[0-9]+'   | grep -oE '[A-Z]+-[0-9]+' | sort -u)
done
```

Sin salida bajo un archivo = indice y detalle coinciden. Una linea `<` es una fila de indice sin
entrada; una linea `>` es una entrada que falta en el indice.

**Por que va aqui y no mas abajo, y son tres razones:**

- **Antes del `git add`**, porque el dano no es tener algo mal en el disco: es meterlo en el commit.
- 🔑 **Antes de escribir `tasks.md` (Paso 4)**, porque esta comprobacion **produce tareas**.
  Corriendola despues de escribir, su resultado llegaria tarde y no habria donde anotarlo.
- **Despues de la puerta del Paso 1**, porque si no hay nada que cerrar tampoco hay nada que comprobar.

**Hay tres resultados, no dos:**

| Que sale | Que significa | Que haces |
|---|---|---|
| sin diferencias en los 7 | los indices estan al dia | sigue al Paso 2c |
| diferencias | falta una fila o sobra una | **arreglalo ahora** y dilo en el reporte |
| el comando falla | **no lo comprobaste** | commit igual, y a **Sin resolver** |

🚨 **La tercera fila es la importante.** «No pude comprobarlo» no es «esta bien».

⚠️ **Entre esta comprobacion y el `git add` no se edita ningun archivo de `_persistence/` ya
comprobado sin volver a correrla.** El control solo vale si en medio nadie toca lo que se comprobo.

🚨 **La linea del reporte sale siempre**, este al dia o no. Sin ella, un cierre que comprobo y uno
que no se leen identicos.

---

## Paso 2c — Las carpetas del arbol contra las declaradas (antes del `git add`)

El Paso 2b compara un archivo consigo mismo. Este compara **el repositorio contra su declaracion**:
los directorios de primer nivel que existen de verdad, frente a las filas de la tabla «Carpetas
propias» de `project.md`.

```bash
diff <(git ls-tree -d --name-only HEAD | sed 's|$|/|' | sort) \
     <(sed -n '/^## Carpetas propias/,/^## /p' project.md | grep -oE '^\| `[^`]+/`' | tr -d '|` ' | sort)
```

Si `project.md` no tiene todavia esa tabla, este control **no se puede correr**: va al reporte como
`SIN COMPROBAR`, con el motivo.

**Las dos direcciones importan, y dicen cosas distintas:**

| Lo que ves | Que significa | Que haces |
|---|---|---|
| `<` una carpeta que existe y **no** esta declarada | el repositorio crecio y el registro no se entero | 🚨 proponlo como `DT-XXX`, o declarala si es obvio |
| `>` una fila declarada cuya carpeta **no** existe | o se borro sin actualizar el registro, o esta declarada por adelantado a proposito | comprueba cual de las dos. Si es deliberado, **tiene que haber un `D-XXX` que lo diga** |

⚠️ **Una diferencia con motivo escrito no es un fallo; una sin el, si.** Este control no lleva lista
de excepciones dentro, y es deliberado: una lista de excepciones envejece sin que nadie la revise y
acaba tapando justo lo que el control existe para ver. Lo que se exige es que **cada diferencia que
sobreviva tenga su razon en `project.md` o en una `D-XXX`** — y si no la tiene, esa es la noticia.

📌 **Por que existe este paso:** una carpeta versionada que nadie declaro no avisa de nada. El
desfase no duele el dia que ocurre; duele meses despues, cuando alguien tiene que averiguar si esa
carpeta debia estar ahi. Un metodo cuyo disparador es «alguien lo nota» no falla ruidosamente:
falla en silencio, y no hay forma de saber cuantas veces no se activo. Esto puede **salir rojo**
sin que nadie sospeche nada, que es la unica diferencia entre un detector y una coartada.

⛔ **No sustituye a releer.** La relectura encuentra cosas que ninguna comparacion mecanica ve; lo
que no puede es ser el unico filtro para lo que si es mecanizable.

---

## Paso 2d — Ningun bloque de verificacion sin ancla (antes del `git add`)

Los Pasos 2b y 2c comprueban estructura. Este comprueba **lo que la jornada afirmo haber
verificado**: todo bloque de verificacion escrito hoy tiene que describir **el commit que lo va a
contener**, no el arbol de trabajo en el instante en que se corrio.

**Cual es el defecto exacto.** Una orden corrida sobre el arbol —`grep -c ... archivo.md`— da un
numero cierto **en ese momento**. Si despues, en la misma jornada, alguien añade una linea mas al
archivo, el numero publicado ya no se reproduce sobre el commit. Quien audite correra la orden y
obtendra otra cosa; y entonces el resultado que vale es el suyo, no el nuestro.

**Que se hace, en dos ordenes.** Primero, localizar los bloques que la jornada añadio y no estan
anclados:

```bash
git diff --cached -U0 -- _persistence _audit \
  | grep -E '^\+\$ ' \
  | grep -vE 'git (show|grep|log|diff) [0-9a-f]{7,40}'
```

Cada linea que salga es una orden publicada hoy **sin ancla a un commit**. Y despues, sobre cada
una: se vuelve a correr, y su salida tiene que ser la que el bloque publica.

**Las tres salidas posibles:**

| Lo que ves | Que significa | Que haces |
|---|---|---|
| ninguna linea | todo lo escrito hoy va anclado | sigue |
| una linea, y al reejecutarla da lo mismo que el bloque publica | la orden es reproducible aunque no lleve ancla | sigue, pero **anclala**: `git show <hash>:` cuesta un `git grep` |
| una linea, y al reejecutarla da **otra cosa** | 🚨 el bloque afirma algo que su commit no sostiene | no se cierra asi. O se corrige el numero, o el bloque va con su **nota fechada** al lado |

🚨 **Y la evidencia de este paso publica la lista COMPLETA de su primera orden, nunca una
seleccion de ella.** Se pega la orden con **su recuento** y **todas** las lineas que devolvio, con el
resultado de reejecutar cada una. Pegar unas cuantas es lo que dejo pasar el octavo caso del defecto:
el paso se corrio, se documentaron cinco lineas de varias decenas, y la que fallaba estaba entre las
que no se pegaron. **Un control que se documenta sobre una parte de su propia salida no es el
control** — es una muestra, y elegida por quien se examina.

🚨 **Este paso publica UNA cifra, y es el recuento de lineas que devolvio la orden.** Una misma
orden citada en dos archivos sale dos veces, y las dos lineas van pegadas: deduplicar es
seleccionar, y seleccionar es justo lo que el parrafo anterior prohibe.

```bash
# la UNICA cifra del paso: LINEAS devueltas
git diff -U0 <hash>^ <hash> -- _persistence _audit ":(exclude)_audit/S-XXX.md" \
  | grep -E '^\+\$ ' | grep -vE 'git (show|grep|log|diff) [0-9a-f]{7,40}' | wc -l
```

⛔ **La cifra de ORDENES DISTINTAS ya no se publica, y no es una simplificacion de estilo: se
suprime porque salio falsa las tres veces que se escribio.** La primera publico «41 — no hubo
repeticion» donde `sort -u` devolvia 31; la segunda publico 27 donde eran 22; la tercera publico 35
donde eran 27, y adjunto ademas un `uniq -d` de tres lineas donde la orden devuelve diez. Las tres
veces la cifra **principal** estaba bien. Es siempre la accesoria la que se estima, porque es la que
nadie usa para nada — y por eso tampoco nadie la recomprueba.

🔑 **Lo que se arregla suprimiendola es que deja de haber donde equivocarse.** Se pidio dos veces
que fuera con su orden y su salida cruda, y las dos veces se volvio a escribir a mano: una cifra que
ningun control consume no se gana la tercera regla que la vigile. Si alguna vez hace falta saber
cuantas ordenes distintas hay, se corre `sort -u | wc -l` en el momento y se pega su salida entera
como cualquier otra evidencia — pero no forma parte de este paso.

🚨 **Y la orden se publica en la forma que reproduce contra el commit, que no es la que se corrio.**
El paso corre sobre el area de staging, cuando el informe todavia no existe; una vez commiteado, esa
misma orden encuentra tambien las ordenes citadas **dentro del propio informe** y devuelve mucho mas.
Por eso lo que se pega lleva el informe excluido y el commit por delante:

```bash
git diff -U0 <hash>^ <hash> -- _persistence _audit ":(exclude)_audit/S-XXX.md" \
  | grep -E '^\+\$ ' \
  | grep -vE 'git (show|grep|log|diff) [0-9a-f]{7,40}'
```

📌 **Y si el hash no se conoce aun al escribir la seccion, se pega la orden corrida y se dice al
lado cual es su equivalencia anclada** — la de arriba, con el hash que el cierre deje. Lo que no
vale es publicar una orden que, tal como esta escrita, devuelve otra cosa que la que hay debajo.

🚨 **Y esa lista tiene un sitio fijo: la seccion 7 del informe de `_audit/S-XXX.md`, y no la
pantalla.** Publicada solo en el reporte de cierre, la evidencia del control desaparece con la
sesion: al dia siguiente el informe afirma haber corrido el paso y no queda nada que mirar. La regla
anterior decia **que** publicar; esto dice **donde**, que es lo que faltaba para que se pudiera
comprobar. Si la lista sale vacia, la seccion 7 lo dice con su orden y su salida — «ninguna linea» es
tambien un resultado, y se publica igual.

🚨 **Y si anotas de que archivo sale cada orden, esa procedencia se deriva del diff — no se
escribe a mano mirando los bloques.** A mano es exactamente donde se equivoca: la orden se busca
en el bloque que uno recuerda haber escrito, y la memoria atribuye antes de comprobar. La orden que
la produce, y que se pega con su salida cruda:

```bash
git diff -U0 -- _persistence _audit | awk '/^\+\+\+ /{f=$2} /^\+\$ /{print f" :: "$0}' | grep -vE 'git (show|grep|log|diff) [0-9a-f]{7,40}'
```

📌 **La procedencia es del archivo, no de la entrada.** El diff sabe en que archivo entro cada
linea; **no** sabe si dentro de ese archivo cayo en una tarea o en una decision. Si el informe nombra la
entrada, esa mitad si se mira a mano — y entonces se comprueba, una por una, contra el bloque que
se cita.

🚨 **La lista se numera con la orden, y las repetidas salen de `uniq -d` — nunca a ojo.**
Marcar «ésta es la misma que la 15» mirando la lista es donde se corrió la numeracion una vez:
una posicion de diferencia basto para que una orden propia quedara **sin salida
publicada** mientras el informe declaraba que todas reprodujeron. Las tres ordenes que evitan eso,
y que se pegan con su salida:

```bash
B='git diff -U0 <hash>^ <hash> -- _persistence _audit ":(exclude)_audit/S-XXX.md"'
# la lista, numerada por la propia orden
eval "$B" | grep -E '^\+\$ ' | grep -vE 'git (show|grep|log|diff) [0-9a-f]{7,40}' | cat -n
# el recuento de LINEAS — la unica cifra del paso
eval "$B" | grep -E '^\+\$ ' | grep -vE 'git (show|grep|log|diff) [0-9a-f]{7,40}' | wc -l
# cuales se repiten
eval "$B" | grep -E '^\+\$ ' | grep -vE 'git (show|grep|log|diff) [0-9a-f]{7,40}' | sort | uniq -d
```

⛔ **La salida de `uniq -d` se pega ENTERA, y sin nombrar a mano cuales son.** Ya paso: un informe
pego tres lineas de las diez que la orden devuelve y escribio al lado que los pares repetidos eran
«3/4, 18/20 y 19/21» — los tres que se veian. Los siete que faltaban llevaban `<hash>`, que es justo
la clase que el Paso 7c-bis va a tocar. Una salida recortada y presentada como cruda es peor que no
publicarla: la primera se contrasta, la segunda se cree.

🔑 **Y el bloque de reejecucion usa esos numeros, no unos propios.** Cada salida se rotula
con la posicion que le dio `cat -n`; una posicion sin salida es un hueco visible, que es
exactamente lo que no fue visible la vez que esto fallo. Si una posicion repite a otra, se dice **de cual** y
la orden repetida tiene que estar en la salida de `uniq -d`.

⚠️ **El recuento no es estable entre entornos, y por eso no basta con la cifra.** La misma orden
sobre el mismo commit puede devolver numeros distintos segun como expanda el patron cada shell; los
falsos positivos conocidos son parte de esa diferencia. Una lista se compara linea a linea; un numero
solo se puede creer.

⛔ **Lo que no vale es reescribir el bloque para que cuadre.** Sustituir la salida vieja por la
nueva convierte «falta evidencia» en «hay evidencia falsa», y esta vez sin nadie que lo note. La
salida correcta es la nota fechada: quedan visibles las dos cosas, lo que se probo entonces y lo que
se probo despues.

📌 **Por que existe este paso.** Es el defecto que mas veces ha reaparecido con este metodo
—**siete hallazgos de auditoria de la misma forma**— y no se repite por
descuido: se repite porque **cuando ocurre nadie lo ve**. La orden se corre pronto, el archivo
crece despues, y entre las dos cosas no hay ningun momento en que algo chille. El registro de
lecciones ya describia el defecto; lo que faltaba era quien lo aplicara — una regla sin
mecanismo no es una regla, es una intencion.

⚠️ **El patron `^\+\$ ` acota a proposito, y por eso no basta con el.** Recoge las lineas de orden
—las que empiezan por `$ ` dentro de un bloque— que el diff añade. No ve una orden escrita en prosa
ni una que la jornada dejo sin el prefijo `$ `, y no distingue un ancla legitima de un hash citado
por casualidad. Es un cedazo, no una prueba: **la relectura de lo escrito sigue siendo obligatoria**.

⚠️ **Un falso positivo conocido, visto la primera vez que se corrio el paso:** `git grep -nE
'<patron>' <hash> -- <ruta>` **si esta anclado**, pero el hash va detras del patron y la segunda
orden no lo reconoce. Sale en la lista, y al reejecutarla da lo mismo — fila segunda de la tabla,
no hay nada que corregir. Se deja asi a proposito: **un cedazo que deja pasar de mas no avisa de
nada, y uno que se afina hasta no dar falsos positivos acaba dejando pasar el caso que importa.**


## Paso 2e — Ningun caracter de control en lo que el commit toca (antes del `git add`)

El Paso 2d comprueba que una orden publicada **reproduzca**. Este comprueba lo anterior: que la orden
y su salida **digan lo que se escribio**. Un caracter de control invisible dentro de un bloque de
verificacion rompe las dos cosas a la vez, y no lo ve nadie leyendo.

**Cual es el defecto exacto.** Al escribir un patron que lleva `\b` —el limite de palabra de una
expresion regular— o al teclear dos acentos graves vacios, el caracter que acaba en el archivo puede
ser `0x08`, el retroceso. En pantalla no se distingue de nada: el bloque **parece** correcto. Copiado
y reejecutado, el interprete recibe un caracter de control donde el texto pretendia poner un limite
de palabra, y la orden devuelve otra cosa —normalmente `0`—. Y si el `0x08` cae en una **salida
cruda** transcrita, lo publicado deja de ser lo que la orden devolvio.

**Que se hace, en una orden.** Sobre los archivos que el commit va a llevar, excluyendo tabulador,
salto de linea y retorno de carro:

```bash
for f in $(git diff --cached --name-only --diff-filter=d); do
  n=$(git show :"$f" | grep -c $'[\x01-\x08\x0b\x0c\x0e-\x1f]')
  [ "$n" -gt 0 ] && echo "$f: $n"
done
```

Y para cada archivo que salga, **donde**, con la linea a la vista:

```bash
git show :"<archivo>" | grep -n $'[\x01-\x08\x0b\x0c\x0e-\x1f]' | cat -A | cut -c1-160
```

`cat -A` es lo que lo hace visible: el `0x08` aparece como `^H`. Sin el, la orden encuentra la linea
y la imprime **igual de invisible**.

**Las tres salidas posibles:**

| Lo que ves | Que significa | Que haces |
|---|---|---|
| ninguna linea | limpio | sigue |
| una linea, y la misma linea ya esta en `HEAD` | es preexistente, no la escribio esta jornada | sigue, y **dilo** en la seccion del informe con su cifra: heredada no es inexistente |
| una linea que la jornada **anadio** | 🚨 el commit introduce un bloque que no reproduce | no se cierra asi. Se corrige la linea antes del `git add`, o va con su **nota fechada** si ya estaba commiteada |

Para separar lo nuevo de lo heredado, el mismo barrido contra `HEAD`:

```bash
for f in $(git diff --cached --name-only --diff-filter=d); do
  echo "$f head=$(git show HEAD:"$f" 2>/dev/null | grep -c $'[\x01-\x08\x0b\x0c\x0e-\x1f]') staged=$(git show :"$f" | grep -c $'[\x01-\x08\x0b\x0c\x0e-\x1f]')"
done
```

### Los dos contrastes de la tabla (obligatorios, y se publican con ella)

🚨 **Este paso volvio a fallar con la orden bien escrita: la tabla se transcribio a mano.** Un
informe publico nueve filas donde el commit llevaba once archivos, y escribio `0` en dos de ellas
donde el barrido devuelve `1` y `5`. La conclusion de fondo era cierta —no se anadio ninguna linea
nueva—, pero la evidencia que la sostenia era falsa en dos filas de once. Y un barrido que devuelve
`0` donde hay seis ocurrencias deja de servir para lo unico que existe: ver la **proxima**.

⛔ **La defensa no es leer con mas cuidado, porque eso ya se pidio.** Son dos cifras que salen de
**dos ordenes independientes de la tabla**, y que la tabla tiene que cuadrar. Se pegan las dos con su
salida, siempre, aunque la tabla salga limpia.

```bash
# contraste 1 — cuantas FILAS tiene que tener la tabla
git diff --cached --name-only --diff-filter=d | wc -l

# contraste 2 — el TOTAL, sin pasar por la tabla
for f in $(git diff --cached --name-only --diff-filter=d); do git show :"$f"; done \
  | grep -c $'[\x01-\x08\x0b\x0c\x0e-\x1f]'
```

| Que se contrasta | Contra que | Si no cuadra |
|---|---|---|
| numero de filas de la tabla | la salida del contraste 1 | 🚨 faltan archivos: la tabla no es el barrido, es un recuerdo de el |
| suma de la columna `staged` | la salida del contraste 2 | 🚨 alguna fila esta mal transcrita: **detente** y vuelve a pegar la salida, no la retoques |

🔑 **Por que estos dos y no una regla mas.** Ninguno mira lo que la tabla dice: los dos preguntan lo
mismo por otro camino y comparan el resultado. Sobre el caso que abrio esto, el primero habria dado
`11` contra las 9 filas publicadas, y el segundo `17` contra la suma `11` de la columna. Los dos
fallan, y fallan solos.

🚨 **El ambito es «los archivos que el commit toca», y esa palabra es el paso entero.** Enumerar a
mano los archivos que uno recuerda haber editado no es un barrido: una vez se contaron siete casos en
dos archivos, mirando los dos que el Paso 6 tenia delante en ese momento, y eran diez en cuatro.
Los tres que faltaban estaban en archivos tocados **al principio** de la sesion — que son
exactamente los que la memoria deja fuera. **El diff sabe que archivos se tocaron; quien escribe, no.**

🚨 **Y este paso va antes del `git add`, no despues del commit.** Una vez commiteado, el defecto ya
no se corrige: se anota. La diferencia entre las dos cosas es la unica razon de que el paso exista
aqui y no en la auditoria.

⚠️ **Su resultado se publica en el informe, tambien cuando sale vacio.** «Ninguna linea» es un
resultado, y va con su orden y su salida cruda como cualquier otro — un control sin evidencia
publicada es indistinguible de un control que no se corrio.

📌 **Por que existe este paso.** El `0x08` llego a aparecer **tres sesiones consecutivas**, y las
tres veces se detecto **a mano y de
casualidad**, mirando un archivo por otro motivo. Una regla sin mecanismo no es una
regla, es una intencion. Lo que faltaba no era saber que el defecto existe; era una orden que lo
buscara sin que nadie se acuerde.

---

## Como se escriben estos archivos

Los siete archivos de `_persistence/` tienen la misma forma: **indice arriba, convenciones despues,
y el detalle debajo** en secciones con su codigo. Las convenciones de cada archivo estan escritas
dentro del propio archivo, en su seccion `## Convenciones`: leelas antes de escribir.

Los codigos de este proyecto:

| Codigo | Archivo | Que es |
|---|---|---|
| `S-XXX` | `progress.md` | sesion de trabajo |
| `H-nn` | `progress.md` | hito |
| `T-XXX` | `tasks.md` | tarea |
| `D-XXX` | `decisions.md` | decision |
| `C-XXX` | `constraints.md` | restriccion |
| `A-XXX` | `assumptions.md` | supuesto sin comprobar |
| `L-XXX` | `lessons.md` | leccion aprendida |
| `DT-XXX` | `techdebt.md` | deuda tecnica |

> 🚨 **El indice y las entradas se actualizan juntos, en la misma pasada.** Ver Paso 2b.

Al anadir una entrada:

1. Dale el **siguiente id libre** (mira el ultimo del indice, no cuentes entradas). Los ids no se reutilizan.
2. Escribe la entrada en la seccion de detalle, con su tabla de campos.
3. Anade su fila al **indice**, con el enlace de ancla.
4. Vuelve a correr la comprobacion del Paso 2b sobre ese archivo.

⚠️ **Los archivos arrancan vacios de entradas, con un `—` de marcador.** La primera entrada real de
cada archivo **sustituye ese marcador**, en el indice y en el detalle. Un `—` que sobrevive junto a
una entrada real deja el indice diciendo dos cosas a la vez.

Fechas absolutas (`2026-08-31`), nunca «ayer» ni «la semana pasada». En el indice, titulos cortos:
tienen que caber en una fila y decidirse sin abrir la entrada.

---

## Paso 3 — `_persistence/progress.md` (obligatorio)

Es el archivo principal: da la vision general, **no detalla tareas**. Actualizalo **siempre**, en
tres sitios:

**a) La seccion `## 1. Estado general`.** Es lo primero que se lee al abrir sesion, asi que se
sobrescribe entera: etapa, fecha, salud, avance y bloqueos activos.

**b) Las secciones `## 2. Ultimo realizado` y `## 3. Siguiente paso`.** Tambien se sobrescriben.
El siguiente paso es concreto: no «seguir con el desarrollo», sino la primera accion de manana.

**c) Una entrada nueva `S-XXX`** en `## 5. Bitacora`, mas su fila en el indice de sesiones, con:

1. **En que etapa va el proyecto.**
2. **Que quedo hecho hoy** — solo lo que esta en el diff.
3. **Cual es el siguiente paso concreto.**

Y si algun hito de `## 4. Hitos` cambio de estado, actualizalo.

### 🚨 Lo que enumeres, derivalo; no lo escribas de memoria

Vale para cualquier lista que una orden pueda producir, y hay una que se equivoca sola en cada
cierre: **las etapas que tienen archivo en `_phases/` y todavia no estan declaradas en el registro
del proyecto.** Se saca restando, nunca contando a ojo:

```bash
comm -23   <(git ls-tree --name-only <commit> _phases/ | sed 's|_phases/||; s|\.md$||' | sort)   <(git show <commit>:project.md | grep 'Etapas declaradas' | grep -oE '`[a-z0-9_]+`' | tr -d '`' | sort)
```

⚠️ **La orden va con su salida al registro**, igual que cualquier otro barrido: una lista
publicada sin la orden que la produce hay que rehacerla entera para contrastarla.

🔑 **Por que precisamente esta.** De esa enumeracion sale la tarea que declara las etapas
pendientes. Una etapa que se cae de la lista no produce ningun error visible: produce que nadie
recuerde declararla, y eso solo se nota etapas despues.

### 🚨 La pregunta NO es «esta el archivo al dia?»

Es: **«tiene ESTA sesion su propia fila, con un id nuevo?»**

```bash
grep -n '^| \[S-' _persistence/progress.md | tail -1
```

🚨 **El criterio es el ID, no la fecha.** Esa fila tiene que llevar un `S-XXX` **mas alto** que el
que habia al arrancar. Si sigue el mismo id con el que empezaste, **falta la entrada** — y hay que
escribirla, diga lo que diga `Estado general`.

⚠️ **Por que el criterio no puede ser la fecha.** Puede haber **varios cierres el mismo dia**.
Comparar fechas no distingue dos tramos de la misma jornada: la ultima fila ya llevaria la fecha de
hoy siendo de otra sesion, y el control daria verde con la sesion entera sin registrar.

🔑 **Dos senales van a enganarte, y las dos se repiten:**

- **`Estado general` puede estar ya escrita**, porque `manager` la actualiza durante el dia.
  **Un archivo medio actualizado es peor que uno sin tocar: el trozo bueno avala al malo.**
- **Un arbol limpio no prueba que la entrada este escrita.** Significa «no queda trabajo», pero
  tambien puede significar «el trabajo se commiteo antes de que llegara el cierre».

---

## Paso 4 — `_persistence/tasks.md` (obligatorio)

Aqui el indice **es** el tablero: el estado de cada tarea vive en su fila, y se repite en la tabla
de campos de su entrada. **Las dos se actualizan juntas.**

**Los estados de este proyecto** (no hay otros, no inventes ninguno):

`Implementada` · `No implementada` · `Cancelada` · `Suspendida`

Y cada tarea lleva ademas **Importancia** (`Alta` / `Media` / `Baja`) y **Urgencia**
(`Bloqueante` / `No bloqueante`), mas **Origen** (`usuario` / `manager` / `report_auditor`).

- Mueve a `Implementada` solo lo que la evidencia respalde.
- Lo que quedo a medias **sigue en `No implementada`**, y su entrada de detalle dice **en que punto
  quedo**. No existe un estado intermedio: media tarea no es una tarea hecha.
- `Cancelada` y `Suspendida` **requieren razon registrada** en la entrada. Si no tienes la razon,
  no cambies el estado: preguntalo en el reporte.
- Anade las tareas nuevas que aparecieron hoy, con su id, su estado y su importancia/urgencia.
  🚨 **Importancia y urgencia no son tuyas para decidir a ojo:** si el diff o el traspaso no las
  dejan claras, ponles `Media` / `No bloqueante` y **marcalo en el reporte como pendiente de
  confirmar**.
- 🚨 **`Origen` es obligatorio y sale de la lista de `tasks.md`.** Si una tarea nace de algo que
  ninguno de los valores cubre, **no inventes un valor nuevo**: eso es una decision del usuario.
  Ponle el mas cercano y dilo en el reporte.
- Si una tarea estaba marcada `Implementada` y el diff la contradice, **desmarcala** y dilo en el
  reporte.

**Aqui entra tambien lo que produjeron los Pasos 2b y 2c**: si salieron al dia, no hay nada que
anotar; si algo fallo, la tarea nueva se anade con su id. Ese es el motivo de que aquellos
controles vayan arriba y no abajo.

Una tarea que se entiende en una linea **se queda en el indice** y su entrada de detalle es minima.
No infles el archivo.

### 🚨 Lo unico que NO puede entrar aqui: el resultado del push

**El push no se anota en `tasks.md`, y no es un olvido: es imposible.** Para saber si el push
funciono, el commit ya tiene que existir — y `tasks.md` va dentro de ese commit. Cualquier cosa que
quisieras escribir aqui sobre el push se escribiria antes de que el push ocurriera.

🔑 **Un segundo commit tampoco lo arregla:** tendria exactamente el mismo problema con su propio
push, y asi hasta el infinito. No hay orden de pasos que lo resuelva.

**Su sitio es el reporte de hoy**, en «Sin resolver» (Paso 8). Y el arranque de manana debe leer
`git status -sb` —no `--short`— porque `--short` no imprime la linea de la rama y un commit sin
subir le resulta **invisible**.

---

## Paso 5 — `_persistence/techdebt.md`: aqui si propones

La deuda tecnica es el unico registro del porque que **si deja rastro en la evidencia**: algo a
medias, un `TODO`, una comprobacion que quedo sin hacer, un archivo que quedo inconsistente.

Por eso, a diferencia de los cuatro de abajo, **puedes proponer entradas** — con dos condiciones:

1. **Solo lo que el diff respalde.** Nada de deuda intuida.
2. **Marcada como propuesta**, tanto en el campo `Confirmacion` de la entrada como en el reporte,
   para que el usuario la confirme o la tumbe.

🚨 **`Confirmacion` lleva dueno dentro del valor:** `Propuesta (pendiente del usuario)`, nunca
`Propuesta` a secas. Una propuesta sin dueno no espera a nadie — se queda propuesta para siempre.

Estados (los mismos cuatro): `Implementada` · `No implementada` · `Cancelada` · `Suspendida`,
donde `Implementada` significa deuda **ya pagada**. Mas Importancia y Urgencia, igual que en tareas.

⚠️ **`Cancelada` y `Suspendida` no las escribes tu:** significan «esto dejo de ser deuda» y
«decidimos convivir con esto por ahora», y las dos son decisiones del usuario, no lecturas del diff.

---

## Paso 6 — Los otros cuatro: **revisalos, no los escribas**

`decisions.md`, `assumptions.md`, `constraints.md` y `lessons.md` **no son del cierre**. Los escribe
`manager` en el momento en que las cosas pasan, porque una decision no aparece en el `git diff`:
nace en la conversacion, y tu no estuviste ahi.

⚠️ **Hay exactamente una excepcion, y esta acotada al Paso 7c-bis:** despues del
commit, sustituyes el ancla de las ordenes del bloque «Criterio de cierre» de las decisiones nacidas
en esta sesion y pegas su salida. **Eso no es escribir el porque** — es correr una orden ya escrita
y publicar lo que devolvio, y no pide ni un dato de la jornada. **Ni una palabra de prosa se toca**,
y los otros tres archivos no se tocan en absoluto. Hasta el Paso 7, este archivo es de solo lectura
para ti.

**Lo que si haces: comprobar que no se quedaron cortos.**

1. Leelos.
2. Comparalos con lo que muestra el diff.
3. Si el diff ensena algo que **claramente fue una decision** y no esta anotado —se eligio una
   alternativa, se cambio una estructura, se descarto un camino— **no lo escribas tu**: senalalo en
   el reporte, para que lo dicte el usuario.

🚨 **Los cuatro se reportan siempre, aunque no falte nada.** El Paso 8 tiene una seccion propia para
ellos: cada uno sale con «al dia» o con lo que falta por anotar. Sin esa linea, un cierre que reviso
y uno que no reviso se ven igual.

### 🚨 Una comprobacion concreta sobre `decisions.md`: las que verifican, con comando y salida

Al leer `decisions.md`, mira **las entradas de esta sesion que afirmen un resultado comprobado**.
Cada una debe llevar un bloque de verificacion con la **orden ejecutada literal** y **su salida
cruda**. Son dos grupos, y el segundo se olvida:

| Grupo | Ejemplos |
|---|---|
| las de `Origen: report_auditor` | «verificado que el hallazgo persiste en `HEAD`» |
| **las de iniciativa propia que afirman un resultado** | «no hay secretos en el archivo», «cero coincidencias», «los dos numeros cuadran» |

⚠️ **El segundo grupo no lo pidio nadie, y por eso se cuela sin evidencia.** Una comprobacion que
hacemos por nuestra cuenta se siente como parte del trabajo, no como una afirmacion auditable —
pero en el registro se lee igual que cualquier otra. Sin patron ni ambito escritos, el auditor tiene
que rehacer el barrido entero para contrastarlo.

| Que dice la entrada | Que es | Que haces |
|---|---|---|
| «corri `git log -1 …`», y debajo lo que salio | evidencia | nada, esta bien |
| «se comprobo», «verificado», «existe y es legible» | **un veredicto sin evidencia** | 🚨 senalalo en el reporte del Paso 8 |

⛔ **No lo arregles tu, y menos aun reconstruyendo el comando ahora.** Vale lo mismo que en el resto
del paso: los cuatro archivos no son tuyos. Y aqui hay una razon extra — un bloque de verificacion
que no se ejecuto cuando dice haberse ejecutado es **peor que su ausencia**: convierte «falta
evidencia» en «hay evidencia falsa». Senalar, no rellenar.

⚠️ **Rige hacia adelante.** Las entradas antiguas que solo dijeron «se comprobo» se quedan como
estan; no las reportes como pendientes.

#### 🚨 Y una segunda pasada sobre los mismos bloques: el **ambito temporal**

El bloque puede llevar su comando y su salida cruda —y aun asi estar mal— si **afirma reproducirse
sobre un commit que todavia no existia cuando se ejecuto**. Es un defecto distinto del anterior y se
cuela justo despues de corregirlo.

**El mecanismo es siempre el mismo, y por eso se puede buscar:** el barrido se corre *mientras* se
escribe la entrada; despues **tu** anades el informe de la sesion, cierras el archivo de estado y
escribes el de tareas — y con eso cambias el resultado del comando que la entrada acaba de
registrar. La cifra no envejece: **nace desfasada.**

Sobre las entradas **de esta sesion**, marca las que cumplan las dos condiciones a la vez:

| Condicion | Como se reconoce |
|---|---|
| **Ambito alcanzable por el cierre** | el comando barre el repositorio entero (`-- .`, o sin `pathspec`), o nombra una ruta que tu vas a escribir en esta misma pasada |
| **Se declara reproducible sobre su propio commit** | dice «se reproduce sobre el commit que la contiene», o usa `HEAD` **sin decir cual era** |

Un bloque que cumple una sola no es hallazgo: el ambito acotado a lo que la sesion no toca **si** se
reproduce, y un recuento global **fechado** —«al momento de escribir esta entrada»— esta bien escrito.

**Como se corrige, y no lo haces tu:** basta **anclarlo a un hash** (`git grep … <hash> -- …`) o
**fecharlo**. Lo señalas en el reporte del Paso 8 con la entrada y el bloque; `manager` decide cual
de las dos aplica antes del commit.

⚠️ **Un caso que no se arregla anclando, y conviene reconocerlo:** si el comando mide algo que **tu
mismo produces en cada cierre** —una fila que escribes siempre antes de commitear—, entonces no
devuelve nunca el valor «limpio» en un commit de cierre: no mide lo que dice medir, mide que el
commit es un cierre. Ahi el arreglo no es el ancla sino **el momento de comprobacion**, y eso lo
replantea `manager`, no tu.

⚠️ **Rige hacia adelante**, igual que la comprobacion anterior: entradas de esta sesion, no las
antiguas.

### 🚨 Un riesgo nombrado en el informe y en ningun otro sitio: senalalo

Al leer el borrador del informe, busca los riesgos que **el propio texto reconoce** —«si algun dia
X, hoy nada lo detectaria», «esto asume que Y», «queda por confirmar Z»— y comprueba si cada uno
tiene **codigo** en `_persistence/`: un `A-XXX`, una `T-XXX` o un `DT-XXX`. Si no lo tiene,
**senalalo en el reporte del Paso 8**.

🔑 **El informe es el canal, no el registro.** Un riesgo escrito solo ahi se lee mientras ese
informe sea el ultimo, y deja de leerse en cuanto llega el siguiente. Peor si el riesgo colgaba de
una deuda que se marca `Implementada` en la misma sesion: **desaparece del radar en el momento
exacto en que se cierra lo que lo contenia**, porque una entrada pagada ya no se relee.

⛔ **No lo registres tu** —los cuatro archivos del porque no son tuyos—: senalalo, con la frase del
informe que lo enuncia, para que `manager` le ponga codigo antes del commit.

**La unica excepcion, y es mecanica:** si un supuesto `A-XXX` quedo comprobado por la evidencia del
diff, puedes moverlo a `decisions.md` o `lessons.md` y marcarlo `Confirmado` en `assumptions.md`.
Eso no es interpretar, es aplicar la regla del ascenso — y **dilo en el reporte**. Al moverlo, toca
**los dos indices**, con id nuevo en el destino.

### 🚨 Una casilla mas, obligatoria: que entra al repositorio remoto

**Este proyecto sube a un remoto —el que declare `project.md`—, y `_persistence/` va a Git a
proposito**: es la historia del proyecto. Asi que pregunta, en voz alta, sobre el diff de hoy:

> **Entro algo que no deberia salir de esta maquina?** Credenciales, tokens, rutas personales,
> datos de terceros, contenido de fuentes externas copiado sin necesidad.

Si entro, **sale** — y se sustituye por un equivalente inventado, dicho como inventado.

⚠️ **Honestidad sobre su fuerza, y va escrito porque importa: esto pregunta, no detecta.** No es un
test y no muerde. `.gitignore` cubre `.env`, pero **no cubre una credencial pegada dentro de una
leccion**. Ese es el camino por el que algo se escapa sin que ninguna herramienta lo note.
**Marcarla sin haber mirado el diff es marcarla con una intencion.**

📌 Se reporta siempre, igual que los cuatro.

---

## Paso 6b — El informe para la auditoria (obligatorio)

Escribe **`_audit/S-XXX.md`**, con el mismo id que la entrada que acabas de crear en `progress.md`.
Un archivo por sesion. Si `_audit/` no existe, creala.

🚨 **Va antes del `git add`, y no es un detalle de orden: es lo que hace auditable la auditoria.**
Al entrar en el mismo commit que el trabajo que describe, el auditor puede averiguar exactamente
que estado esta juzgando:

```bash
git log -1 -- _audit/S-XXX.md
```

Con ese hash el auditor puede ir al `git show` y **verificar cada afirmacion del informe contra el
diff real**, en vez de creersela. Un informe que no se puede anclar a un commit deja al auditor
juzgando un relato.

### Para quien escribes

El auditor **arranca en frio: no vivio la sesion y nadie va a contarsela**. Lo unico que tendra son
este informe, los archivos y `git`. No escribas como si compartiera contexto:

- **Cita siempre codigo y ruta** —tal como aparecen en tu registro, p. ej. `T-NNN`, `D-NNN`,
  `_persistence/tasks.md`—. Son su unica via para ir a comprobar.
- **Explica lo que no se deduce del diff**, pero no repitas los archivos enteros: el informe cuenta
  **esta sesion**, no el proyecto entero.
- 🚨 **Escribe el informe completo, sin resumir.** Lo que se ahorre aqui es exactamente lo que el
  auditor tendra que reconstruir, y lo reconstruira adivinando.

### 🚨 Las dos listas del informe se **generan**; escribirlas de memoria es como se quedan cortas

Las secciones 1 y 2 llevan cada una una enumeracion, y **una enumeracion sin salvedad se lee como
exhaustiva**. Es justo el tipo de frase que el auditor usa como atajo para no recorrer el diff
entero — asi que una lista corta no se queda en un descuido: **ensena a confiar en algo que no se
puede contrastar sin rehacerlo**.

Las dos son generables. Sacalas de aqui, no de lo que recuerdes haber tocado:

```bash
git show --stat --name-only --format= <commit>          # seccion 1: archivos tocados
sed -n '/^## Indice/,/^---/p' _persistence/tasks.md \
  | grep "No implementada"                              # seccion 2: tareas abiertas
```

⚠️ **El cierre anade archivos que no son «de contenido»** —la fila de `_audit/index.md`, el propio
informe— y son justo los que se olvidan al escribir de memoria. Si prefieres listar solo los de
contenido, **dilo**: «los archivos de contenido; el cierre anade ademas…». Una lista declarada
parcial es honesta; una lista corta presentada como completa, no.

🚨 **Y por eso la seccion 1 no lleva una lista redactada: lleva la salida pegada.** La estructura de
abajo lo pide asi, y no es una preferencia de formato. Este mismo aviso ya existia el dia que un cierre
escribio una lista de ocho contra un comando que devolvia diez, y no lo evito: un aviso dentro de un
bloque explicativo se lee una vez, mientras que un hueco en la plantilla se ve cada vez que se
escribe la seccion. Una salida pegada tampoco puede quedarse corta — o esta entera, o se nota.

🚨 **Y no filtres «las relevantes» sin decirlo.** Si la seccion 2 solo cubre algunas tareas
abiertas, la frase lo tiene que decir. El coste de la version correcta es cero; el de la incorrecta
es que la proxima omision, cuando importe, llegue con la misma cara de completa.

### 🚨 En un archivo de registro, lo que **nace** no es todo lo que cambia

La salida pegada dice que **archivos** se tocaron; no dice que **entradas** de dentro. Y un archivo
de registro se edita casi siempre de las dos formas a la vez: nace una entrada nueva **y** se anotan
entradas antiguas. Describir `_persistence/lessons.md` como «`L-XXX` (nace)» es cierto y esta
incompleto.

| Escribe | En vez de |
|---|---|
| `lessons.md`: `L-XXX` (nace), `L-YYY` y `L-ZZZ` (nota de reincidencia) | `lessons.md`: `L-XXX` (nace) |
| `decisions.md`: `D-XXX` (nace), `D-YYY` (nota fechada) | `decisions.md`: `D-XXX` |

⚠️ **Y no es un detalle de completitud: casi siempre es el dato mas util del commit.** Una nota
anadida a una entrada antigua suele ser la evidencia de que algo ya registrado **volvio a fallar** —
una reincidencia, un alcance que no cubria lo que afirmaba, un bloque que no reproducia—. Quien lea
el informe sin abrir el diff no sabra que existe.

🔑 **De donde sale, para no reconstruirla de memoria:** `git diff <commit>^ <commit> -- <archivo>`.
Las cabeceras `@@` marcan cuantos puntos distintos del archivo se tocaron; si son mas que las
entradas que nacen, hay ediciones sobre entradas existentes que nombrar.

🚨 **Y saber cuantos puntos se tocaron no dice cuales son: eso tambien se deriva.** Contar
hunks y despues buscar la entrada a ojo es como un cierre llego a atribuir a una leccion una nota que
el commit habia puesto en la de al lado — en el mismo commit que escribio esta seccion. Las dos ordenes que dan
la respuesta, y que se corren por cada archivo de registro que el commit toque:

```bash
# que entrada contiene cada punto tocado
git diff -U0 <commit>^ <commit> -- <archivo>   | awk '/^@@/{split($3,a,","); print a[1]+0}'   | while read n; do git show <commit>:<archivo>       | awk -v n="$n" 'NR<=n && /^### [A-Z]+-[0-9]+/{e=$2} END{print n": "e}'; done
# que entradas NACEN
git diff -U0 <commit>^ <commit> -- <archivo> | grep -E '^\+### '
```

⚠️ **La primera orden atribuye por posicion, y tiene un borde conocido:** un hunk que
**añade** entradas al final de otra sale rotulado con la entrada anterior, no con las que nacen.
Por eso van las dos: la segunda nombra las que nacen, y lo que la primera liste **y la segunda no**
son las entradas existentes que el commit edita. Ese es el conjunto que la seccion 1 tiene que
nombrar.

### 🚨 Un recuento sin la orden que lo devuelve no entra en la seccion 1

**Cuando la descripcion de un archivo lleva un numero —hunks, lineas, entradas, secciones— ese numero
va con la orden que lo produce, pegada.** No es la regla general de «comando y salida cruda» dicha
otra vez: aqui el numero **no es la evidencia de nada**, es el mapa con el que otro decide si le hace
falta abrir el diff. Un mapa equivocado cuesta mas que no tener mapa.

| Escribe | En vez de |
|---|---|
| `<archivo>` — 6 hunks (`git diff <commit>^ <commit> -- <archivo> \| grep -c '^@@'`) | `<archivo>` — dos hunks de contenido |
| `<archivo>` — secciones 1 y 2 | `<archivo>` — seccion 3 «…» y seccion 4 «…» |

⚠️ **Y el recuento de hunks depende del contexto, asi que la orden tiene que decir cual usa.** El
mismo diff da un numero con el contexto por defecto y otro bastante mayor con `-U0`: son dos
preguntas distintas —«¿en cuantos tramos se agrupa?» y «¿cuantos puntos exactos se tocaron?»—, y
ninguna de las dos es «el» numero de hunks. Publicar el numero sin la orden deja al lector sin saber
cual de las dos leyo.

🚨 **Las secciones se nombran por su numero real en el archivo, contado en el archivo.** Una seccion
citada con un numero que no es el suyo manda a quien lea a un sitio donde no esta lo que se le
anuncia, y ahi ya no puede distinguir «me equivoque de numero» de «el informe describe otra cosa».
Se deriva, no se recuerda:

```bash
git show <commit>:<archivo> | grep -n '^## '
```

### Estructura del informe

🚨 **La fecha sale del reloj del sistema, no de una cuenta.** Se deriva, no se escribe de
memoria:

```bash
date +%F
```

⛔ **No se incrementa por sesion.** Varias sesiones pueden caer el mismo dia — `CLAUDE.md` lo
dice con esas palabras — y cada una lleva su propio `S-XXX`, no su propia fecha. Sumarle un dia a la
sesion anterior «porque es otra jornada» produce un registro que **afirma algo comprobablemente
falso**, y arrastra con el cada nota fechada que se escriba ese dia. Ya paso: tres
sesiones commiteadas el mismo dia, fechadas en tres dias consecutivos.

🔑 **Y esa fecha es la misma que llevaran la fila de `_audit/index.md`, `progress.md` y toda
nota fechada de la jornada.** Una sola fuente, derivada una vez.

```markdown
# Informe de auditoria — S-XXX

| Campo | Valor |
|---|---|
| Sesion | S-XXX |
| Fecha | AAAA-MM-DD — la del RELOJ, no la siguiente a la de la sesion anterior |
| Etapa | |
| Rama | la rama principal, segun `project.md` |
| Commit auditado | <HASH LITERAL del commit sustantivo de la sesion — se rellena en el Paso 7c> |

## 0. Respuesta a la auditoria anterior     <-- omitir solo si no hay ninguna sin responder

| Hallazgo | Veredicto | Evidencia / Razon |
|---|---|---|
| F-NNN — <resumen> | Implementado | `T-NNN`, en este commit |
| F-NNN — <resumen> | Aceptado — pendiente | `T-NNN`, `No implementada` |
| F-NNN — <resumen> | No se implementa | `D-NNN` |

## 1. Que se hizo

<PEGA AQUI, sin editar, la salida cruda de:>
<`git show --stat --name-only --format= <commit>`>
<es la lista completa e incluye los archivos que anade el propio cierre: el informe y la fila de `_audit/index.md`>
<mientras el commit no exista, esta lista sale de `git diff --cached --stat --name-only`: se dice que
sale del area de staging, y la version anclada la pega el Paso 7c en la nota de cierre de ESTA
seccion — la seccion 1 y la 7 prometen lo mismo y se anclan juntas>

<y debajo, lo que muestra el diff: con codigos y rutas, que archivos nacieron, cuales cambiaron y por que>
<en un archivo de registro no basta con nombrar las entradas que NACEN: se nombran tambien las
entradas YA EXISTENTES que el commit edita, con su codigo (`L-XXX (nace)`, `L-XXX (nota anadida)`)>
<esa lista sale del diff, no de la memoria: `git diff <commit>^ <commit> -- <archivo>`>

## 2. Que NO se hizo, y por que
<lo que quedo pendiente o a medias, y en que punto quedo>
<las tareas abiertas salen del indice de `tasks.md` filtrando `No implementada`, no de la memoria>

## 3. Decisiones tomadas
<cada `D-XXX` de esta sesion: que se decidio, por que, y **las alternativas descartadas**>

## 4. Supuestos vigentes y riesgos
<`A-XXX` abiertos, que se apoya en ellos, y que pasa si resultan falsos>

## 5. Siguiente tarea propuesta
<la primera accion concreta de la proxima sesion, con su codigo, importancia y urgencia>

## 6. Que pedimos auditar
<nuestros propios puntos debiles: lo que quedo flojo, la decision de la que menos seguros
estamos, el supuesto en el que nos apoyamos sin confirmar>

## 7. Evidencia del Paso 2d
<la lista COMPLETA que devolvio la primera orden del Paso 2d, con la orden literal, su recuento y
todas sus lineas — nunca una seleccion, y sin deduplicar>
<el recuento es el de LINEAS devueltas, y es el UNICO que esta seccion publica: el de ordenes
distintas ya no forma parte del paso>
<la orden se escribe en su forma anclada al commit y con el propio informe excluido
(`":(exclude)_audit/S-XXX.md"`), o se dice al lado cual es esa equivalencia>
<y debajo, el resultado de reejecutar cada una: la que reproduce y la que no>
<si una orden no es reproducible por naturaleza (describe el area de staging), se dice, y se da su
equivalencia anclada al commit>
<si la lista salio vacia, se publica igual: la orden y su salida vacia>
<y si se anota de que archivo sale cada orden, esa procedencia se DERIVA del diff, nunca se
escribe a mano: se pega la orden que la produce y su salida cruda>
<y la salida de `uniq -d` se pega ENTERA, sin nombrar a mano cuales son los pares repetidos>
<NOTA DE CIERRE, la escribe el Paso 7c despues del commit: el hash, cuantas ordenes iban con
`<hash>` y en que archivos quedaron ancladas por el 7c-bis, con el barrido de todos los archivos y su
salida — que tiene que salir vacia —, y la frase que dice que no queda ninguna sin anclar>
<y dentro de esa misma nota, la salida del CONTROL DE PROSA BORRADA del Paso 7c-bis, entera y con su
orden, tambien cuando sale limpia: sin ella, «no se borro prosa» y «nadie lo comprobo» se leen igual>

## 8. Evidencia del Paso 2e
<la orden del barrido de caracteres de control sobre los archivos que el commit toca, y su salida
cruda — tambien cuando sale vacia>
<si sale alguna linea, se dice de cada archivo si la cifra es NUEVA o HEREDADA, derivandolo del
barrido contra HEAD, y para las nuevas se publica la linea con `cat -A` para que el `^H` se vea>
<una cifra heredada no se omite: heredada no es inexistente>
<y los DOS CONTRASTES de la tabla, con su orden y su salida, aunque la tabla salga limpia: cuantas
filas tiene que tener, y el total sin pasar por la tabla. La tabla tiene que cuadrar con los dos>
```

### Los tres veredictos de la seccion 0, y nada mas

| Veredicto | Cuando |
|---|---|
| `Implementado` | hecho, y esta en este commit |
| `Aceptado — pendiente` | de acuerdo, pero aun no hecho — **con su `T-XXX`** |
| `No se implementa` | rechazado — **con su `D-XXX`** |

### 🚨 Esa tabla se audita fila a fila. Cada veredicto exige algo comprobable

| Veredicto | Lo que el auditor va a comprobar | Si no esta |
|---|---|---|
| `Implementado` | que la correccion **aparezca en el diff de este commit** | es un hallazgo, y el original **sigue abierto** |
| `Aceptado — pendiente` | que cite su `T-XXX`, y que esa tarea **exista y siga abierta** | el hallazgo no se da por recogido |
| `No se implementa` | que cite su `D-XXX` | un rechazo sin decision registrada **no es auditable** |

### 🚨 En esta seccion hay DOS commits, y se nombran distinto

`CLAUDE.md` manda verificar cada hallazgo **contra `HEAD`** antes de tratarlo. Al escribir la
seccion 0 hay dos hashes en juego, y **no son el mismo**:

| Cual | Que es | De donde sale |
|---|---|---|
| **`HEAD` al empezar la sesion** | el estado contra el que se verifico | normalmente el commit de la **auditoria**, que es el ultimo |
| **el commit auditado** | el estado que esa auditoria juzgaba | uno **anterior**: es el que la cabecera del informe de la sesion anterior declara |

⛔ **Llamar `HEAD` al commit auditado es afirmar algo comprobablemente falso**, y ademas dentro de
la frase que da la regla por cumplida — que es lo que la hace peor que un descuido de redaccion. Ya
ocurrio, y costo un hallazgo de auditoria.

✅ **La forma que sirve nombra los dos:** «verificado contra `HEAD` (`<hash de HEAD>`), sobre el
estado que `<hash auditado>` dejo».

**Y el hash no se supone, se deriva:**

```bash
git rev-parse --short HEAD          # el de la izquierda de la tabla
git log -1 --format='%h %s' HEAD    # el asunto dice si es una auditoria, y de que commit
```

⚠️ **No marques `Implementado` lo que el diff no muestre.** Si estas de acuerdo pero no esta hecho,
su veredicto es `Aceptado — pendiente` con su tarea abierta. Marcarlo hecho no lo adelanta: lo
convierte en un hallazgo nuevo y deja el original abierto igual.

### 🚨 La tabla va completa: un hallazgo omitido NO cuenta como contestado

**Todos los hallazgos entregados y no cerrados entran en la tabla**, uno por fila, incluso los que
no tocaste esta sesion. Un `F-NNN` que no aparezca **sigue entregado y el auditor lo reclama**: no
se interpreta como aceptado ni como rechazado por omision.

Si un hallazgo no se atendio y no sabes por que, **ponlo igual** y dilo en «Sin resolver» del
reporte. Una fila incomoda vale mas que una ausencia silenciosa.

🚨 **`Aceptado — pendiente` no es opcional ni un adorno.** Sin el, un hallazgo con el que estamos de
acuerdo pero que aun no hicimos no esta implementado ni rechazado: **no aparece en ningun sitio y
desaparece del radar.** Esa es la forma en que se pierden los hallazgos buenos.

⚠️ Un hallazgo rechazado **por coste o prioridad** —no por ser incorrecto— es deuda tecnica por
definicion y exige su `DT-XXX`. Un rechazo por coste sin entrada en `techdebt.md` es, por si solo, un
hallazgo del auditor, y no requiere criterio: se comprueba mirando si la entrada existe.

### 🚨 Si el rechazo clasifica el asunto como reversible o irreversible, dilo como criterio

Un `No se implementa` que apoye su razon en ese eje **tiene que declarar que la clasificacion se
hizo a criterio**, en la propia fila o en el `D-XXX` que cita: «reversible a criterio, porque…».
Mientras no exista un inventario de acciones irreversibles registrado en `_persistence/`, escribir
«es reversible» a secas **presenta una tabla que no existe**, y el auditor no tiene como distinguir
un criterio de una consulta.

### 🚨 La seccion 6 es obligatoria y no puede quedar vacia

Un informe que solo cuenta lo bien que fue todo produce auditorias flojas: el auditor gasta su turno
redescubriendo lo que nosotros ya sabiamos.

**Senalar nuestros propios puntos debiles lo manda directo a lo que importa.** Escribe al menos un
punto real. «Nada que senalar» **no es una respuesta valida**: si de verdad no encuentras ninguno,
di que no lo encontraste y que eso mismo conviene revisarlo.

⚠️ Sigue rigiendo la regla de siempre: **solo lo que la evidencia respalde**. Un punto debil
inventado desperdicia la auditoria igual que uno omitido.

### Y su fila en `_audit/index.md`

El informe no sirve de nada si la auditoria no sabe que existe. **Anade su fila** al tablero, con
`Pendiente` en las columnas que todavia no puedes rellenar:

```markdown
| `S-XXX.md` | S-XXX | AAAA-MM-DD | Pendiente | Pendiente | Pendiente | - |
```

Las columnas son `Informe | Sesion | Fecha | Commit auditado | Auditoria | Veredicto | Hallazgos`.
Sus convenciones estan escritas dentro del propio `_audit/index.md`: **leelas antes de escribir**.

🚨 **`Pendiente` es lo unico que escribes tu en las tres ultimas columnas.** El veredicto y los
hallazgos los pone el agente `report_auditor` cuando corra — tu no puedes saber que va a encontrar alguien
que todavia no ha mirado.

⚠️ **Y el commit auditado tampoco lo escribes, aunque parezca que si.** No puedes: la fila se
escribe **antes** del commit que la contiene. Lo rellena la auditoria, que ya lo tiene delante, y lo
que escribe ahi es **el hash literal de la cabecera del informe** — el mismo que tu Paso 7c acaba de
anclar. Es la misma imposibilidad que la del push (Paso 4), y la misma solucion: dejarselo
a quien si tiene el dato en vez de intentar escribirlo.

⚠️ **Este informe no reemplaza a `_persistence/`.** Es una vista de **esta sesion** para un lector
que arranca en frio, no una copia del registro.

⛔ **No toques `_audit/findings.md`.** Ese archivo es del auditor: registra lo que encontro y en que
acabo cada hallazgo. Tu no has abierto ninguno.

### 🚨 Ninguna linea de la plantilla sobrevive en el informe

Los huecos de la plantilla de arriba van entre `<` y `>`, uno por linea. **Se sustituyen por
contenido; no se dejan encima de el.** Antes de seguir al Paso 7:

```bash
grep -nE '^<' _audit/S-XXX.md
```

🔑 **La respuesta correcta es CERO lineas** (`exit 1`). Si sale alguna, se borra: es la instruccion
de llenado, no el llenado.

⚠️ **El defecto no hace que falte evidencia, y por eso pasa desapercibido.** El hueco suele estar
relleno debajo; lo que queda es un artefacto que mezcla la orden de rellenar con lo rellenado — que
es exactamente lo que `CLAUDE.md` persigue en `_templates/`, «una plantilla que alguien rellena en
su sitio deja de ser plantilla». Se ve en un segundo con la orden y en ninguno leyendo, porque una
linea de instruccion entre parrafos de instrucciones no desentona.

⛔ **Y despues del commit ya no se borra:** el informe estaria auditado, y quitarle lineas cambia lo
que la auditoria describio. Entonces la salida es la nota fechada, como siempre. Por eso este
control va **aqui**, antes del `git add`, y no en el Paso 7b.

---

## Paso 7 — El commit y el push

**Primero la verificacion, despues el commit.** Nunca al reves.

```
git status
```

🚨 Comprueba que **no aparezca ningun archivo de secretos** (`.env` y variantes). Si aparece,
**detente**, no anadas nada y reportalo: falta una linea en `.gitignore`. Git no olvida — si una
credencial entra al historial, borrar el archivo despues no la borra.

Si esta limpio:

```
git add -A
git commit -m "..."
```

El mensaje dice **que avanzo y por que**, no que archivos cambiaron: eso ya lo sabe Git. Primera
linea corta, y debajo lo que valga la pena. Termina siempre con:

```
Co-Authored-By: Claude Opus 5 <noreply@anthropic.com>
```

### 7b — Que el informe entro en el commit (obligatorio)

**Ya hay un hash. Preguntale a git si el informe esta dentro de el:**

```bash
git show --stat --name-only HEAD -- _audit/S-XXX.md
git show --stat --name-only HEAD -- _audit/index.md
```

Si el archivo aparece en la salida, entro. Si la salida esta vacia, **no entro**.

🚨 **Esta comprobacion es la que sostiene el Paso 6b entero.** El anclaje del informe al commit es
todo su valor: sin el, el auditor recibe un relato que no puede contrastar contra ningun estado. Un
paso obligatorio cuyo cumplimiento nadie mira **no es obligatorio, es una intencion**.

**Hay tres resultados, no dos** —los mismos que el Paso 2b, y por la misma razon:

| Que sale | Que significa | Que haces |
|---|---|---|
| los dos archivos aparecen | el informe quedo anclado | sigue al push |
| alguno falta | **el commit no lo lleva** | 🚨 **detente**: escribelo o anadelo y **haz un commit nuevo** que lo incluya, nunca un `--amend`. Dilo en el reporte |
| el comando falla | **no lo comprobaste** | push igual, y a **Sin resolver** con `🚨 SIN COMPROBAR` |

🚨 **La tercera fila otra vez.** «No pude comprobarlo» no es «esta bien». Y la segunda no se arregla
reescribiendo el commit: los comandos de abajo siguen prohibidos, tambien aqui.

⛔ **Comandos prohibidos, sin excepcion:** `git commit --amend`, `git reset`, `git checkout --`,
`git restore`, `git rebase`, `git clean`, `git push --force` y cualquier otra cosa con `--force`.
El trabajo del cierre es **anadir** historia, nunca reescribir ni borrar la que hay. Si crees que
hace falta uno de esos, **detente y dilo**: esa decision es del usuario.

### El cierre no acaba en el commit

```
git push
```

⚠️ **Si es el primer push del repositorio**, la rama todavia no existe en el remoto:

```
git push -u origin main
```

🔑 **Un `git push` a secas solo anade, y por eso si entra en el protocolo** — encaja con la regla de
arriba, no la rompe. Lo que reescribe historia es `--force`, y ese sigue prohibido.

Despues, siempre:

```
git status -sb
```

🚨 **Si la primera linea todavia dice `ahead`, el push no ocurrio** —remoto sin configurar,
credenciales, red— y el trabajo existe solo en este disco. **No lo tapes:** va en el reporte, en
«Sin resolver», con lo que salio mal. Un disco roto esa noche se lleva la sesion entera.

⚠️ **Y ahi se queda: en el reporte.** No vuelvas atras a anotarlo en `tasks.md` —ya esta
commiteado— ni abras un commit nuevo para arreglarlo. El porque esta en el Paso 4.

> 🔑 La regla no es «si no hay hash, no hubo cierre»: eso se cumple entero y el trabajo se queda sin
> subir igual, porque **un commit es local**. La regla es **«si el hash no esta en `origin`, no hubo
> cierre»**, y se comprueba con `git status -sb`, no con el hash.

### 7c — Anclar el informe al hash (obligatorio)

**Ahora, y solo ahora, existe el dato que el informe no podia tener mientras se escribia: su propio
hash.** Cuatro sitios lo prometian y quedaban a medias hasta este paso. Se rellenan **los cuatro
juntos, en un unico commit de anclaje**:

| Sitio | Que se escribe | Orden anclada |
|---|---|---|
| **Cabecera** del informe, campo `Commit auditado` | el **hash literal** del commit sustantivo | `git log -1 --format=%h` justo despues del commit del Paso 7 |
| **Seccion 1** del informe, nota de cierre | la lista de archivos anclada al commit | `git show --stat --name-only --format= <hash>` |
| **Seccion 7** del informe, nota de cierre | la **nota de anclaje** de la lista del Paso 2d — ver el recuadro de abajo | `git rev-parse --short HEAD` justo despues del commit del Paso 7 |
| **`decisions.md`** y **`tasks.md`**, bloques «Criterio de cierre» de **las entradas nacidas en esta sesion** | las mismas ordenes, reejecutadas ancladas, con su salida | ver **7c-bis**, justo debajo |

🚨 **Los cuatro, o ninguno.** Anclar la seccion 7 y dejar la 1 y la cabecera sin anclar es el
defecto que ya costo dos hallazgos: el informe queda con una parte reproducible y otra que describe
un area de staging que ya no existe, y **ninguna regla escrita dice cual manda**. Dejar la seccion 7
sin anclar y anclar las otras tres es el mismo defecto por su otra cara, y costo un tercero.

### Que dice la nota de la seccion 7, exactamente

🔑 **No republica las ordenes: dice donde quedaron ancladas y cuantas son.** Cada orden que
la seccion 7 lista con `<hash>` sale del diff de `decisions.md` o de `tasks.md`, y el Paso 7c-bis la
ancla **en su archivo de origen**, con su salida cruda pegada debajo. Copiarlas otra vez al informe
crearia una tercera copia de la misma evidencia — la que nadie recomprueba, que es justo la que se
desfasa.

⚠️ **Pero un puntero solo vale si es comprobable**, y por eso la nota lleva las tres cosas:

1. **el hash** del commit sustantivo, derivado con la orden de la tabla, nunca supuesto;
2. **cuantas** de las ordenes listadas iban con `<hash>` y **en que archivos** quedaron ancladas,
   con **los dos barridos** de abajo y sus salidas crudas;
3. **la frase que cierra el pendiente**: que ya no queda ninguna orden de la lista sin forma anclada,
   o cuales quedan y por que — **construida con las salidas de esos dos barridos, no recontando a
   mano lo que la salida ya dice**.

🚨 **Y si la nota publica un TOTAL, ese total es la suma de los numeros por archivo que el
CONTROL devolvio, y nada mas.** Ni una linea se anade ni se resta en prosa. Toda orden que el Paso
7c-bis ancle y que el CONTROL **no** haya contado —porque la escribio una sesion anterior, o porque
su forma no empieza por `git show <hash>:`— se **enumera aparte, una por una, con su archivo y su
orden literal**; nunca se dobla dentro del total. Ya paso: una nota sumo «14 + 14 + 1 = 29»
sobre un CONTROL que habia devuelto `14` y `13`, y el `+ 1` era una orden que ya estaba dentro de esas
14. Las ancladas de verdad eran 28.

🔑 **Por que la suma en prosa falla siempre en la misma direccion.** Quien la escribe conoce la
orden «extra» porque acaba de anclarla a mano, y por eso la suma; lo que no puede ver de memoria es si
el barrido ya la habia contado. Una salida no tiene ese problema. Una version anterior de esta regla ya
lo pedia para la frase de cierre, y su primera aplicacion lo incumplio: la unica forma de que la cifra salga de una salida es
**prohibir la aritmetica de prosa**, no pedir que se evite.

⚠️ **Y la frase «no queda ninguna orden sin anclar» solo se escribe si el CENSO al commit de
anclaje lo sostiene.** Si quedan lineas con `<hash>` a proposito —ordenes ilustrativas, bloques que
la regla de no reescribir congela—, se dicen **cuantas y cuales**. Afirmar de menos deja un pendiente escondido;
afirmar de mas, que es lo que paso, deja el informe diciendo algo comprobablemente falso.

🚨 **Son DOS barridos, y lo que puede detener el paso es el segundo.** Lo abrio un hallazgo, y asi: la
version anterior pedia un solo barrido universal y exigia que saliera **VACIO**, y en su primera
ejecucion no salio vacio — porque el patron acierta tambien en lineas que **no estan pendientes de
anclar**: las que llevan `<hash>` como dato buscado, y los bloques de sesiones anteriores que la regla
de no reescribir congela y que ya tienen su nota fechada debajo. Una regla que su propio autor incumple la primera vez
no es una regla: es una excepcion redactada en prosa cada vez — y esa prosa fue por donde entraron
otros tres hallazgos de la misma auditoria.

**Barrido 1 — el CENSO.** Universal y anclado. Dice cuantas lineas con `<hash>` hay en el registro a
ese commit, heredadas incluidas. **No tiene que salir vacio**, y su salida se publica tal cual:

```bash
for f in $(git ls-tree -r --name-only <hash> _persistence _audit | grep -v '_audit/S-XXX.md'); do
  n=$(git show <hash>:"$f" | grep -cE '^\$ .*<hash>')
  [ "$n" != "0" ] && echo "$f: $n"
done
```

**Barrido 2 — el CONTROL.** Acotado a **lo que este commit anadio** y a la **ranura vacia de un
ancla**, que es la forma literal `git show <hash>:` **al principio de la orden**. Es la lista de
trabajo del Paso 7c-bis: aqui no hay herencia posible, todo lo que salga lo escribio esta sesion.

```bash
for f in $(git diff --name-only <hash>^ <hash> -- _persistence _audit ":(exclude)_audit/S-XXX.md"); do
  n=$(git diff -U0 <hash>^ <hash> -- "$f" | grep -cE '^\+\$ git show <hash>:')
  [ "$n" != "0" ] && echo "$f: $n"
done
```

🔑 **La forma literal es la diferencia entera entre el censo y el control, y no es un detalle de
escritura.** El censo busca el marcador **en cualquier posicion** — tambien dentro de un patron
entrecomillado que lo busca como dato, y tambien en un `<commit>` de una evidencia. El control busca
**una orden anclada a la que le falta el commit**, y esa tiene una sola forma. Cualquier patron mas
ancho acierta en toda linea que *mencione* el marcador, y entonces el control vuelve a ser
incumplible — que es de lo que venimos.

⚠️ **Y hay un caso que ningun patron mas ancho puede resolver, asi que conviene nombrarlo:** este
mismo recuadro, y cualquier decision que lo cite, **contiene el patron escrito**. Un barrido que
busque el marcador suelto se acierta a si mismo cada vez que alguien documenta el barrido. La forma
literal no tiene ese problema porque nadie escribe `$ git show <hash>:` al principio de una linea
salvo para dejar un ancla sin rellenar.

⛔ **La condicion de parada es del CONTROL, y es esta: todo archivo que aparezca en su salida tiene
que ser uno que el Paso 7c-bis tenga autorizado a escribir.** Si aparece cualquier otro, el paso **no
lo ancla**: se detiene y lo reporta a `manager`, que decide — nunca se resuelve escribiendo una
excepcion dentro del informe.

🔑 **Y asi la condicion vuelve a ser mecanica y alcanzable.** El censo informa y no juzga; el
control juzga y se puede cumplir. Las lineas del censo que el control no recoge son **anteriores a
este commit**, y lo anterior no se reescribe: se corrige por nota fechada.

🚨 **El barrido es de TODOS los archivos, no de los dos que el 7c-bis escribe, y esa asimetria
es deliberada.** Detectar es universal — los dos barridos lo son; **escribir sigue acotado a
`decisions.md` y `tasks.md`**. Nombrar esos dos aqui no contradice a la leccion de enunciar por
nombre: la autorizacion para escribir **es** por nombre de archivo, y lo que esa leccion avisa es de
enunciar por nombre lo que se quiere universal — que es justo lo que la deteccion sigue siendo.

⛔ **Los dos barridos se publican SIEMPRE en su forma anclada, y `cat` no aparece en ninguno.** Lo
abrio un hallazgo: un cierre publico el censo tomando la **lista de archivos** de `git ls-tree HEAD` y el
**contenido** de `cat "$f"` — el arbol de trabajo —, lo etiqueto «sobre `<hash>`», y su salida
correspondia a un estado **posterior** al commit citado. Una orden hibrida reproduce el dia que se
corre y ningun otro, y quien la reejecuta no puede saber si se equivoco el informe o cambio el
repositorio.

⚠️ **Y la nota nombra el commit al que corresponde su salida.** No «sobre `HEAD`»: `HEAD` se mueve
con el commit siguiente, y es lo que convierte una evidencia en una afirmacion.

🔑 **La deteccion se enuncia sin nombrar archivos, y es una leccion aprendida:** una regla
enunciada por el nombre del archivo se cumple ahi y se incumple en el de al lado — exactamente como
nacio un hallazgo. Por eso los dos barridos recorren el arbol entero y **es la condicion de parada, no el
barrido, la que mira los nombres**: parar es una cuestion de permiso, y el permiso de escritura esta
escrito con dos nombres propios.

### 7c-bis — Los criterios de cierre de las entradas de esta sesion

🔑 **Es el mismo huevo-y-gallina, en otro archivo.** El registro exige que la orden de un
«Criterio de cierre» vaya **anclada al commit**; pero cuando `manager` escribe la decision, durante
la jornada, ese commit **todavia no existe**. El resultado, la vez que se descubrio: seis decisiones nacidas en un
commit publicando 16 ordenes sin anclar, contra la convencion que ese mismo commit estrenaba. La
solucion es la que ya funciona para el informe — se ancla **aqui**, cuando el hash existe.

🚨 **Y esta es la unica cosa que puedes escribir en los cuatro archivos del porque.**
`CLAUDE.md` te los prohibe, y con razon: un porque nace en la conversacion, que tu no viste. Esta
excepcion no la toca. **Lo que haces aqui es mecanico y no pide ni un dato de la jornada:** coges una
orden **ya escrita**, le pones el ancla, la corres, y pegas lo que devolvio.

🚨 **Son DOS archivos, no uno: `decisions.md` y `tasks.md`.** Lo abrio un hallazgo. Este paso nacio
mirando solo `decisions.md`, y en la sesion en que se estreno dejo doce ordenes con `<hash>` literal
en `tasks.md`, en los bloques «Criterio de cierre» de las tareas que cerraban hallazgos. Es el mismo
hecho de antes, desplazado de archivo: **la evidencia que respalda una Definicion de Terminado no
es ejecutable si `<hash>` no es un commit.**

🔑 **Y `tasks.md` es mas facil de justificar que `decisions.md`, no menos.** El unico motivo por el
que este paso es una excepcion es que `CLAUDE.md` te prohibe escribir en los cuatro archivos del
porque; `tasks.md` **ya es tuyo**, lo escribes entero en el Paso 5. Anclar ahi no es una excepcion:
es terminar tu propio trabajo.

**Como se localiza que hay que anclar, en los dos archivos:**

```bash
git show <hash>:_persistence/decisions.md \
  | awk '/^### D-/{d=$2} /Criterio de cierre/{f=1} /^---$/{f=0} f&&/^\$ /{print d" | "$0}'

git show <hash>:_persistence/tasks.md \
  | awk '/^### T-/{d=$2} /Criterio de cierre/{f=1} /^---$/{f=0} f&&/^\$ /{print d" | "$0}'
```

De esa lista, **solo tocas las entradas nacidas en esta sesion** — las que el Paso 2 te dio como
nuevas en el diff. Una decision o una tarea de una sesion anterior **no se toca**: su bloque ya esta
auditado, y reescribirlo es justo lo que el registro prohibe.

⚠️ **Y `tasks.md` entra en el commit de anclaje**, igual que `decisions.md` y el informe. El barrido
de la nota de la seccion 7 (Paso 7c) recorre **todos** los archivos y tiene que salir vacio; si
senala un tercero, este paso **no lo ancla**: se detiene y lo reporta.

**Que puedes hacer, y que no:**

| ✅ Puedes | ⛔ No puedes |
|---|---|
| sustituir `<orden> <archivo>` por su forma anclada (`git show <hash>:<archivo> \| <orden>`) | cambiar **que** comprueba la orden |
| pegar debajo la salida cruda que devolvio | escribir, alterar o borrar **una sola palabra de prosa** |
| anadir una linea diciendo que el anclaje es de este paso, **con una linea en blanco antes del `---`** | tocar `assumptions.md`, `constraints.md` o `lessons.md`, que no tienen este bloque |
| detenerte y reportarlo si algo no cuadra | «arreglar» un criterio que no reproduce |

🚨 **La frontera es el bloque de codigo, y hay que decirla asi porque «no tocar prosa» no basto.**
Lo que este paso reescribe vive **dentro** del bloque de la orden y su salida: la linea `$ …` y lo
que devolvio. **Todo lo que esta fuera de ese bloque es prosa y no se toca** — ni el enunciado del
criterio, ni un `⚠️`, ni un `📌`, ni una linea escrita en futuro que la nueva nota deje sonando
raro.

⛔ **Una linea que hoy dice «y las anclara el Paso 7c-bis» NO se actualiza a pasado.** Ese texto es
lo que se escribio ese dia, y que conviva con la nota que dice que ya estan ancladas es exactamente
el aspecto que tiene cumplir la regla. Reescribirlo lo haria parecer escrito despues.

🔑 **La linea que si puedes anadir va SIEMPRE debajo del bloque, nunca en lugar de nada.** Se anade;
no sustituye. Si al escribirla estas borrando algo, te has salido del paso.

🚨 **Y deja una linea en blanco entre la nota y el `---` que separa entradas.** Lo abrio un hallazgo.
En Markdown, un `---` pegado a una linea de texto **no es una regla horizontal: es un encabezado
setext de nivel 2**. La nota se renderiza como titulo y el separador entre entradas desaparece. Es
invisible en el archivo plano y salta a la vista en cuanto alguien lo lea renderizado.

```text
📌 **Ancladas por el Paso 7c-bis al commit `<hash>`.** Las tres reproducen lo publicado arriba.
                                     <-- esta linea en blanco es obligatoria
---
```

⚠️ **Y esa linea declara el recuento real del bloque, contandolo.** Si al anclar el numero de
ordenes cambio —porque una orden sobre varios archivos se partio, o dos se unieron—, la linea dice
el numero que hay **ahora**, no el que habia. Un «las cuatro reproducen» sobre cinco ordenes es una
afirmacion falsa introducida por el propio automatismo, y verificable en un segundo por quien las
cuente.

🚨 **Si la salida anclada NO coincide con la publicada, te detienes.** No la sustituyes y no
la corriges: **pegas las dos** — la publicada y la anclada — y lo dices en el reporte, en «Sin
resolver». Una discrepancia ahi significa que la orden se corrio sobre un arbol distinto del que
quedo en el commit, y **eso es informacion**, no un error de formato. Quien decida que hacer con ella
es `manager`, en la sesion siguiente, con el auditor de por medio.

⚠️ **Si una orden no se puede anclar, se deja como esta y se dice.** Hay ordenes que
preguntan por el arbol de trabajo o por el sistema y no por el commit — un `git status`, un `df`, un
`date`. Forzarlas a una forma anclada que no significa lo mismo seria peor que dejarlas: se anotan en
el reporte como «no anclable, y por que».

🔑 **Pero «cambia de forma» y «cambia de pregunta» no son lo mismo, y esa distincion es la que
decide.** La prueba es una sola: **¿la forma anclada contesta lo mismo que contestaba la original?**

| Cambio | ¿Se hace? | Por que |
|---|---|---|
| `grep X <archivo>` → `git show <hash>:<archivo> \| grep X` | **si** | misma pregunta, sobre el commit en vez del arbol |
| `ls <archivos versionados>` → `git ls-tree --name-only <hash> <archivos>` | **si** | «¿existen estos archivos?» es la misma pregunta; el disco no tiene version y el commit si |
| una orden sobre varios archivos → varias ordenes ancladas | **si**, y la linea de abajo dice el recuento nuevo | la pregunta se conserva entera; solo se reparte |
| `git status` → cualquier forma anclada | **no** | pregunta por el arbol de trabajo, que **no** es el commit. Anclarla cambia la pregunta |
| `grep -c X <archivo>` → `grep -n X <archivo>` | **no** | cambia **que** comprueba, y eso lo prohibe la tabla de arriba |

⛔ **Un `ls` sobre archivos versionados NO es un ejemplo de orden no anclable**, y decia lo
contrario hasta que una auditoria lo cobro. Lo que lo hace anclable es que pregunte por algo que el commit
contiene; lo que hace a `git status` inanclable es que pregunte por algo que el commit no puede
contener.

#### CONTROL DE PROSA BORRADA (obligatorio, antes de commitear el anclaje)

🚨 **Este control existe porque la prohibicion de arriba no basto: se escribio, se repitio en tres
sitios, y aun asi el paso volvio a borrar prosa en una sesion posterior.** Una regla que solo vive en
el texto depende de que quien ejecuta la lea y la aplique; este control no depende de eso — devuelve
lineas o no las devuelve.

**Que hace:** compara, para cada archivo que este paso toca, **las lineas que estan fuera de los
bloques de codigo** antes y despues. El anclaje solo puede **anadir** prosa (la linea `📌` del
recuento). Si alguna linea de prosa desaparecio, el control la imprime.

```bash
outside() { awk '/^```/{f=!f; next} !f'; }
for f in _persistence/decisions.md _persistence/tasks.md; do
  git show HEAD:"$f" | outside > /tmp/prosa_antes
  outside < "$f" > /tmp/prosa_despues
  echo "== $f =="
  diff /tmp/prosa_antes /tmp/prosa_despues | grep '^<'
done
```

| Que sale | Que significa | Que haces |
|---|---|---|
| solo las dos lineas `== … ==` | ninguna linea de prosa desaparecio | sigue: commitea el anclaje |
| alguna linea `< …` | 🚨 **el anclaje borro prosa** | **detente**: restaura esas lineas exactamente como estaban y vuelve a correr el control. No sigas hasta que salga limpio |
| el comando falla | **no lo comprobaste** | sigue, y a **Sin resolver** con 🚨 `SIN COMPROBAR` |

⚠️ **`HEAD` aqui es el commit de la sesion, que ya existe** — este paso corre despues del Paso 7b. No
hace falta anclarlo a un hash: la pregunta es «¿que habia antes de que yo tocara?», y eso es
exactamente `HEAD`.

🔑 **Por que compara fuera de los bloques y no el archivo entero.** Dentro del bloque, sustituir es
justo lo que este paso viene a hacer: la orden cambia de forma y la salida antigua se reemplaza por
la anclada. Fuera del bloque no hay ningun caso legitimo de borrado. La frontera del control es
entonces la misma frontera que la regla ya enunciaba — pero medida, no confiada.

⛔ **Y no se salta «porque esta vez solo se movio una linea».** El caso real que abrio este control
fue exactamente ese: al sustituir tres ordenes por sus formas ancladas, la linea de prosa que iba
pegada debajo del bloque se fue con ellas, y era el enunciado del criterio — la mitad que permite
juzgar si la salida cumple.

🚨 **Su orden y su salida se publican en la NOTA DE CIERRE del informe, junto al CENSO y al
CONTROL, tambien cuando sale limpia.** Nacio obligatorio y su primera ejecucion no dejo ni una
linea en el repositorio: las once menciones que quedaron eran **descriptivas** —que el control
existe, que se escribio, que `grep -c` sobre la skill devuelve `1`—, y ninguna publicaba lo que el
control devolvio. Que aquella vez no se borrara prosa lo comprobo la auditoria a mano, no el
control; y un control cuya ejecucion no deja rastro vuelve a depender de que alguien lo corra, que
es exactamente de lo que veniamos. `PI-5` de `CLAUDE.md` lo dice para cualquier producto de
documentacion: la orden ejecutada literal y su salida cruda.

🔑 **Lo que se publica es la salida entera, incluidas las dos lineas `== … ==`.** Son justamente lo
que distingue «el control salio limpio» de «el control no se corrio»: sin ellas, una salida vacia y
una ejecucion que no ocurrio se leen igual.

### 7d — La fecha escrita contra la del commit (obligatorio)

**El commit ya existe, asi que la fecha ya se puede comprobar en vez de suponer.** Es el control que
Ya quedo escrito una vez: tres sesiones commiteadas el mismo dia y fechadas en tres dias consecutivos,
sin que nada lo detectara.

```bash
git log -1 --format=%ad --date=short
grep -m1 '^| Fecha |' _audit/S-XXX.md
```

| Que sale | Que significa | Que haces |
|---|---|---|
| las dos fechas coinciden | el registro dice la verdad | sigue |
| no coinciden | 🚨 **el registro afirma algo falso** | **detente**: la fecha escrita es la del commit. Corrigela en el informe, en la fila de `_audit/index.md`, en `progress.md` y en toda nota fechada de la jornada, y **entra en el commit de anclaje** del Paso 7c |
| el comando falla | **no lo comprobaste** | sigue, y a **Sin resolver** con 🚨 `SIN COMPROBAR` |

⚠️ **La segunda fila corrige lo de ESTA sesion, que aun no esta auditado.** Lo de sesiones
anteriores **no se toca**: ya se auditó, y reescribir su fecha convierte «falta exactitud» en «hay
exactitud falsa». Eso sale por nota fechada, y lo escribe `manager`.

### Cual de los dos commits es «el commit de la sesion»

Un cierre que necesita anclaje deja **dos** commits, y hay que decir cual es cual porque el auditor
arranca en frio y solo ve el historial:

| | Que contiene | Como se le llama |
|---|---|---|
| **El primero** (Paso 7) | todo el trabajo de la jornada, el informe y la fila del indice | **el commit de la sesion**. Es al que apunta toda la evidencia |
| **El segundo** (este paso) | el informe y `decisions.md`, con los cuatro anclajes rellenos | **el commit de anclaje**. No lleva trabajo |

🚨 **El campo `Commit auditado` lleva el hash del PRIMERO**, no el del commit que lo escribe.
Es contraintuitivo y por eso se dice: el segundo commit existe para describir al primero, no para
sustituirlo. Un informe que se anclara a si mismo apuntaria a un `--stat` de un solo archivo frente a
los que la seccion 1 enumera.

⚠️ **Y no se hace con `--amend`.** La prohibicion del Paso 7 sigue entera: el anclaje **anade**
un commit, nunca reescribe el que ya se subio. El mensaje lo dice con esas palabras — «ancla el
informe de S-XXX al hash <hash>» — para que el historial distinga solo, sin leer el diff, un commit
de trabajo de uno de anclaje.

```
git add _audit/S-XXX.md _persistence/decisions.md
git commit -m "S-XXX: ancla el informe y los criterios de cierre al hash <hash>"
git push
git status -sb
```

⚠️ **`_persistence/decisions.md` entra aqui solo si el Paso 7c-bis lo toco** — es decir,
si esta sesion abrio alguna decision con criterio de cierre. Si no la abrio, se anade solo el
informe y el mensaje vuelve a ser «ancla el informe de S-XXX al hash <hash>».

🚨 **Y si el Paso 7d obligo a corregir la fecha**, entran tambien los archivos que la
llevaban — `_audit/index.md`, `_persistence/progress.md` y los que tuvieran nota fechada — y
el mensaje lo dice.

⛔ **Nada mas entra en este commit.** Un commit de anclaje que lleve trabajo deja de distinguirse
del de la sesion, y entonces el auditor no puede saber cual de los dos juzgar.

📌 **Si el push del Paso 7 fallo, este paso se hace igual.** Los dos commits viajan juntos
cuando el push se recupere, y el informe queda coherente en local mientras tanto. Lo que no se puede
es dejar el informe sin anclar porque la red fallo.

---

## Paso 8 — Reporte en pantalla

En espanol, sin relleno. **Entregalo completo**, no un resumen diciendo que «ya actualice los
archivos».

🚨 El mensaje final del agente no llega al usuario por si solo: lo recibe `manager`, que lo
retransmite. Un reporte recortado se recorta dos veces.

```
## Cierre de sesion — <fecha>

### Lo que dice la evidencia
- <N> archivos tocados: <los principales>
- <que quedo hecho, segun el diff>

### _persistence/ actualizado
- progress.md — <S-XXX nueva> · <en una linea, que cambio en «Estado general»>
- tasks.md — <N implementadas, N pendientes, N nuevas>
- techdebt.md — <sin novedad | PROPUESTA: DT-XXX ... (pendiente de confirmar)>

### Los cuatro del porque — revisados, no escritos
- decisions.md — <al dia | falta anotar: ... | 🚨 D-XXX verifica sin comando ni salida>
- assumptions.md — <al dia | falta anotar: ... | ascendido A-XXX → D-XXX>
- constraints.md — <al dia | falta anotar: ...>
- lessons.md — <al dia | falta anotar: ...>
- 🚨 Repositorio remoto — <nada sensible, diff mirado | 🚨 SACAR: ...>

### Controles
Fuga de datos propios (1b) — <cero lineas | 🚨 <las lineas> | 🚨 SIN COMPROBAR — <que falta en project.md>>
Codigos instanciados en `_phases/` y `_workflow/` (1c) — <cero lineas | 🚨 <las lineas, con archivo y numero de linea>>
Indices de `_persistence/` (2b) — <al dia | corregidos | 🚨 SIN COMPROBAR — <que fallo>>
Carpetas declaradas (2c) — <coinciden | <las diferencias y su razon> | 🚨 SIN COMPROBAR — <por que>>
Huecos de plantilla en el informe (6b) — <cero lineas | 🚨 <las lineas, borradas antes del `git add`>>
Criterios de cierre anclados (7c-bis) — <N ordenes de M, en <las D-XXX nuevas> | ninguna decision nueva | 🚨 <las que no coinciden, con las dos salidas> | <las no anclables, y por que>>
Fecha de la sesion contra el commit (7d) — <coinciden: AAAA-MM-DD | 🚨 <la escrita y la del commit, y donde se corrigio> | 🚨 SIN COMPROBAR>

### Commit
Informe de auditoria — <`_audit/S-XXX.md` y su fila en `_audit/index.md`, **comprobados en el commit** (Paso 7b) | 🚨 NO ENTRO — <que falto y en que commit nuevo entro> | 🚨 SIN COMPROBAR — <que fallo>>
<hash corto> — <primera linea del mensaje>
<"subido a origin, `git status -sb` sin ahead" | 🚨 "SIN SUBIR — <que fallo>">

### Informe para la auditoria
`_audit/S-XXX.md` — version corta:
- **Se hizo:** <una linea>
- **Quedo pendiente:** <una linea>
- **Siguiente tarea propuesta:** <codigo y accion>
- **Pedimos auditar:** <los puntos de la seccion 6, en una lista breve>

### Falta la auditoria
El commit existe: **`manager` tiene que lanzar ahora el agente `report_auditor`** sobre <hash corto>.
La sesion no esta cerrada hasta que esa auditoria este registrada en `_audit/`.

### Para manana
<el siguiente paso concreto, tal como quedo en progress.md>

### Sin resolver        <-- omitir si no hay nada
- <discrepancias entre el traspaso y el diff>
- <lo que quedo a medias y en que punto>
- <lo que hay que preguntarle al usuario>
```

---

## Reglas del protocolo

- **No inventes** avances, fechas, decisiones ni tareas. Si un archivo esta vacio o falta
  informacion, **dilo en el reporte** en lugar de rellenarlo.
- **No escribas codigo** ni arregles nada, aunque veas algo roto. Anotalo en `tasks.md` y sigue.
  Cerrar la sesion no es el momento de abrirla otra vez.
- **No toques `temporal/`** ni los archivos del auditor (`_audit/R-XXX.md`, `_audit/findings.md`).
- **No dupliques.** Cada archivo tiene un trabajo: `progress.md` da la vision general y no detalla
  tareas; el detalle de tareas vive solo en `tasks.md`.
- **Escribe corto.** Un `progress.md` que nadie lee no orienta a nadie.
- 🚨 **Tu no lanzas la auditoria, pero la reclamas.** El agente `report_auditor` corre despues de ti,
  sobre el commit que acabas de hacer, y lo lanza `manager`. Tu ultima linea util es recordarselo:
  un cierre sin auditoria deja el trabajo commiteado y sin revisar, que es exactamente el estado que
  este sistema existe para evitar.
