---
name: protocol-promote
description: Protocolo de promocion del andamiaje al esqueleto de arranque. Lleva al esqueleto lo que este proyecto haya escrito en las seis areas agnosticas, en un solo sentido y por lotes — escribiendo, commiteando y subiendo en un repositorio DISTINTO de este. La escritura fuera lleva puerta: nada se toca hasta que el usuario aprueba los archivos que suben, uno por uno. Uso exclusivo de manager, que lo ejecuta cuando el usuario lo pide, nunca de oficio en un cierre.
---

# Protocolo de promocion al esqueleto de arranque

Este protocolo lo ejecuta **unicamente `manager`**, y es uno de los dos del andamiaje que **escriben
fuera de este repositorio**. Convierte el desfase que el cierre detecta en archivos promovidos al
esqueleto, o en un desfase que se deja a proposito y queda razonado.

> 🚨 **La regla que gobierna todo el protocolo: escribir fuera tiene una puerta, y la puerta es el
> usuario.** Medir el desfase, leerlo y redactar lo que propones son tuyos. **Tocar el repositorio del
> esqueleto no lo es** hasta que el usuario aprueba, archivo por archivo. Aprobado eso, escribir,
> commitear y subir van seguidos, sin una segunda puerta.

> 🔑 **Por que la puerta va antes de escribir y no antes del push.** Un commit local se revierte; lo
> que no se revierte es que un archivo malo entrara al original **del que partiran todos los proyectos
> siguientes**. Un defecto promovido no se queda quieto: se hereda hacia adelante, y cada proyecto
> nuevo lo recibe sin saberlo. La puerta protege esa herencia, no el push.

> 🔑 **Y la segunda: el andamiaje viaja en UN SOLO SENTIDO.** Este proyecto escribe, el esqueleto
> recibe. No hay conciliacion, no hay fusion y no hay «cual de las dos versiones vale». Si encuentras
> algo que solo existe en el esqueleto, **eso no es una promocion: es un hallazgo**, y se trata como
> tal.

> ⚠️ **Este protocolo NO se ejecuta de oficio en un cierre.** El cierre **detecta** —es gratis y corre
> siempre—; promover cuesta una puerta manual y lo pide el usuario, por lotes. Ver que hay tres
> archivos por promover **no obliga a promoverlos hoy**.

## Lo que puedes y lo que no

| Puedes | No puedes |
|---|---|
| leer todo este repositorio y todo el del esqueleto | **escribir fuera de este repositorio antes de la puerta** |
| medir el desfase y leer cada diferencia en las dos direcciones | **decidir por tu cuenta que sube**: eso lo aprueba el usuario |
| escribir, commitear y subir en el esqueleto **una vez aprobado** | reescribir historia en ninguno de los dos (`--amend`, `reset`, `rebase`, `--force`) |
| dejar el registro de vuelta en este repositorio | **promover algo que no este en una de las seis areas** |
| reportar como hallazgo lo que solo exista en el esqueleto | **corregir** ese hallazgo por tu cuenta, ni aqui ni alli |

⛔ **Solo las seis areas agnosticas.** `.claude/`, `CLAUDE.md`, `_phases/`, `_methodology/`,
`_templates/` y `_workflow/`, y nada mas. El registro, el encargo del cliente y las carpetas de
producto **no se promueven nunca**: llevan datos propios por diseño, y copiarlos haria que el proyecto
siguiente arrancara afirmando una historia que no ocurrio.

⛔ **Nada de lo que promuevas puede nacer aqui.** Un archivo se promueve **tal como este ya escrito y
commiteado** en este repositorio. Si al promover ves que algo habria que mejorar, se mejora **aqui
primero**, con su cierre y su auditoria, y se promueve en la pasada siguiente. El esqueleto no es donde
se escribe el andamiaje; es donde se deposita el que ya se ejercito.

🔑 **Por que ese orden y no el comodo.** El andamiaje no mejora en el vacio: mejora cuando una
auditoria encuentra un fallo sobre un cierre concreto. En el esqueleto no corre ningun cierre y no hay
ningun auditor, asi que una mejora escrita alli seria **una mejora que nadie ha ejercitado ni ha
revisado**.

---

## Paso 0 — Los datos propios, y el disparador

**De `project.md` salen las dos cosas que este protocolo no lleva dentro:** donde esta el repositorio
del esqueleto y cual es su remoto. Se leen alli **cada vez**; no se recuerdan de una ejecucion
anterior.

```bash
grep -n -i 'Esqueleto de arranque' project.md
```

🚨 **Si `project.md` no declara esas filas, el protocolo NO se puede ejecutar.** No lo inventes ni lo
reconstruyas por analogia: **detente y dilo**. Promover a una ruta adivinada escribe en un sitio que
nadie declaro.

### 🚨 Los tres disparadores, y los tres son condiciones de parada

| Comprueba | Si no se cumple |
|---|---|
| **el usuario lo ha pedido** — no es un cierre, ni una iniciativa tuya | 🚨 **no promueves.** Corrido de oficio, el protocolo pierde su puerta: pasa a ser sincronizacion automatica, que es justo lo que se descarto |
| **este repositorio esta limpio y subido** — nada sin commitear en las seis areas | 🚨 **no promueves.** Ver abajo: es la condicion que hace auditable lo que sube |
| **no hay una auditoria en curso sobre lo que se va a promover** | 🚨 **no promueves.** Lo que sube deja de poder contrastarse contra el commit que la auditoria esta juzgando |

🚨 **El segundo disparador es el que mas facil se salta, y el que mas importa.** Lo que se promueve
tiene que existir **en un commit de este repositorio**, no en el arbol de trabajo. Si se promueve algo
sin commitear, el esqueleto pasa a contener una version que aqui no esta en ninguna parte: nadie puede
decir de donde salio, y el registro de vuelta no puede citar ningun hash.

```bash
git status --short -- .claude CLAUDE.md _phases _methodology _templates _workflow
git status -sb
```

⛔ **Las dos ordenes tienen que salir limpias** —sin lineas la primera, sin `ahead` la segunda—. Si no,
se cierra la sesion antes y se promueve despues.

---

## Paso 1 — El desfase, medido, no recordado

El mismo barrido que corre el cierre. **Se corre otra vez aqui**, y no se da por bueno el del cierre
anterior: entre los dos ha podido cambiar cualquiera de los dos arboles.

```bash
ESQ="<ruta absoluta del esqueleto de arranque>"
if [ ! -d "$ESQ" ]; then
  echo "SIN COMPROBAR - la ruta del esqueleto no existe en esta maquina: $ESQ"
else
  for d in .claude _phases _methodology _templates _workflow; do
    diff -rq --strip-trailing-cr "$ESQ/$d" "$d"
  done
  diff -q --strip-trailing-cr "$ESQ/CLAUDE.md" CLAUDE.md
fi
```

**Si sale vacio, no hay nada que promover: dilo y detente.** No inventes trabajo para llenar el
reporte.

🚨 **El `--strip-trailing-cr` no es cosmetica.** Sin esa opcion, un archivo que solo difiere en el
final de linea aparece como enteramente distinto, y se promoveria un archivo que ya estaba al dia.

**De esa salida sale la lista de candidatos, y se clasifica en tres, no en dos:**

| Lo que ves | Que es | Que se hace |
|---|---|---|
| `Files ... differ` | un archivo que existe en los dos y que aqui va por delante | **candidato a promover** |
| `Only in` el arbol de **este** proyecto | algo que nacio aqui y alli no existe | **candidato a promover** (archivo o carpeta entera) |
| `Only in` el arbol del **esqueleto** | algo que existe alli y aqui no | 🚨 **HALLAZGO, no candidato.** Ver Paso 2 |

---

## Paso 2 — Leer las dos direcciones antes de sobreescribir nada

Aqui no se copia todavia. Se **lee** lo que se va a destruir.

**Por cada candidato a promover, las lineas que solo existen en el esqueleto:**

```bash
diff --strip-trailing-cr "$ESQ/<archivo>" "<archivo>" | grep '^<'
```

🚨 **Esas lineas son las que la promocion BORRA, y hay que leerlas una por una.** La premisa del
sentido unico dice que seran versiones anteriores de parrafos ya sustituidos aqui. **Es una premisa,
no un hecho**: mientras no se lean, nadie sabe si alguna es algo que el esqueleto necesita escrito de
otra forma.

| Lo que lees | Que significa |
|---|---|
| versiones anteriores de parrafos que aqui estan reescritos | la premisa se sostiene: se promueve |
| algo que un proyecto generico necesita y este no | 🚨 **la premisa cayo.** Detente, dilo, y que lo decida el usuario |

⚠️ **Este paso es la comprobacion recurrente de un supuesto del registro, no un tramite.** Se anota
cuantas lineas se leyeron y que eran, porque es la unica forma de que el supuesto deje de ser una
deduccion sobre una regla y pase a ser una observacion.

**Y si algo existe SOLO en el esqueleto:**

⛔ **No se borra, no se trae aqui y no se arregla.** Contradice el sentido unico, asi que o se borro
aqui sin registrarlo, o alguien edito el esqueleto por su cuenta. **Se reporta y se para esa
promocion concreta**; las demas pueden seguir.

---

## Paso 3 — Los controles de agnosticismo, ANTES de la puerta

Lo que sube al esqueleto se hereda hacia adelante, asi que se comprueba **antes** de pedir permiso: el
usuario tiene que aprobar algo ya verificado, no una promesa.

```bash
# datos propios del proyecto en las seis areas
git grep -nE "<nombre del proyecto>|<carpeta raiz de las rutas absolutas>|<host del remoto>" -- .claude CLAUDE.md _phases _methodology _templates _workflow

# codigos del registro instanciados donde no pueden estar
git grep -noE '\b[A-Z]{1,2}-[0-9]+\b' -- _phases _workflow | grep -vE ':PI-[0-9]+$'
```

🔑 **La respuesta correcta es CERO lineas en los dos.** Son los mismos dos controles que corre el
cierre, y se repiten aqui por una razon que no es redundancia: **el cierre los corre sobre este
repositorio, donde una fuga es un defecto reparable; aqui se corren sobre lo que esta a punto de salir,
donde una fuga se vuelve herencia.**

🚨 **Si alguno devuelve lineas, la promocion se detiene entera.** No se promueve «lo demas mientras se
arregla eso»: el archivo con la fuga puede ser justo el que el resto referencia.

⚠️ **Y un tercer barrido que no esta en el cierre, porque alli no hace falta.** El cierre busca los
tres valores que `project.md` declara. Al promover conviene mirar mas ancho —una cuenta, una
plataforma, una ruta de maquina—, porque el coste de pasarlo por alto no lo paga este proyecto.
**Declara el patron que usaste y su salida**, aunque salga limpio: un barrido sin su patron no es
reproducible.

---

## Paso 4 — El final de linea, medido por pareja

⚠️ **Los dos arboles pueden no compartir final de linea, y una copia cruda lo convierte entero.** Un
archivo convertido aparece como distinto en cada linea: su `diff` deja de ser legible, y el siguiente
que lo mire no vera el cambio real.

```bash
for p in "<archivo>" "$ESQ/<archivo>"; do
  printf '%s  CR=%s  LF=%s\n' "$p" "$(tr -dc '\r' < "$p" | wc -c)" "$(tr -dc '\n' < "$p" | wc -c)"
done
```

| Lo que mides | Como se copia |
|---|---|
| los dos iguales | copia byte a byte |
| origen CRLF, destino LF | se convierte a **LF** al copiar |
| origen LF, destino CRLF | se convierte a **CRLF** al copiar |
| un archivo nuevo, que alli no existe | con el final que usan sus vecinos en el esqueleto |

🚨 **Se conserva el final que el DESTINO ya tenia.** La regla no es «normalizar»: es no introducir un
cambio que nadie pidio en un archivo cuyo contenido si cambia.

⛔ **No uses `grep -c` con un retorno de carro para medir esto.** En algunos entornos devuelve el
numero de lineas del archivo aunque no tenga ni un retorno, y entonces **miente sin avisar**. La
medicion fiable es la de arriba: `tr -dc` con `wc -c`.

---

## Paso 5 — 🚨 LA PUERTA

Se presenta al usuario, y **aqui se para**:

- **cada archivo candidato, uno por uno**, con lo que cambia: cuantas lineas entran, cuantas se borran,
  y **que eran las que se borran** (Paso 2);
- los archivos o carpetas **nuevos**, dichos como nuevos;
- lo que solo existe en el esqueleto, **como hallazgo**, con su promocion detenida;
- la salida de los **tres barridos** del Paso 3, con sus patrones;
- las parejas donde el **final de linea** difiere, y como se va a copiar cada una;
- el **commit de este repositorio** del que sale lo que se promueve.

⛔ **No se toca el repositorio del esqueleto hasta que el usuario responde.** Ni un `git add`, ni un
archivo temporal dentro de el, ni un `git fetch` que deje rastro. Leerlo ya estaba permitido;
escribirlo no.

**El usuario puede aprobar todo, parte o nada.** Lo que apruebe es lo que sube: **archivo por
archivo**, y una negativa sobre uno no arrastra a los demas salvo que el propio usuario lo diga.

🚨 **Si el usuario no responde, no se promueve nada.** No hay valor por defecto, y «no dijo que no» no
es aprobar. Una puerta que se abre sola no es una puerta.

---

## Paso 6 — Escribir fuera, commitear y subir

Ya con la aprobacion, y **solo con ella**:

1. se copia cada archivo aprobado, **respetando el final de linea del destino** (Paso 4);
2. las carpetas nuevas se crean con su contenido **completo**, no a medias;
3. commit en el esqueleto, con un mensaje que diga **de que proyecto viene** la promocion, **que
   entra**, y **el hash de origen**;
4. push.

```bash
git -C "$ESQ" add -A && git -C "$ESQ" status --short
git -C "$ESQ" log --oneline -1
git -C "$ESQ" status -sb
```

🚨 **El commit del esqueleto cita el hash de ORIGEN, y no es decoracion.** Es lo unico que permite,
meses despues, saber de que estado de que proyecto salio cada linea del esqueleto. Sin el, el esqueleto
es un archivo sin procedencia.

⚠️ **Si el push falla, no se repite la escritura.** El commit existe en local y la promocion esta
hecha; lo que falta es que este a salvo, y eso va en el reporte tal cual. Volver a copiar «por si
acaso» ensucia el arbol sin arreglar nada.

🚨 **Si algo sale mal a mitad —un archivo copiado y otro no—, se dice cual quedo copiado y cual no.**
El esqueleto lo van a clonar otros proyectos: un estado a medias sin declarar es peor que uno
declarado.

⛔ **Y no se aprovecha el viaje.** No se reordena, no se corrige una falta y no se poda nada del
esqueleto de paso. Lo que no aprobo el usuario no se toca, ni aunque sea obvio: el valor de la puerta
esta en que lo que hay dentro es exactamente lo aprobado.

---

## Paso 7 — El registro de vuelta, en este repositorio

La promocion no termina fuera: termina cuando **este** repositorio puede demostrar lo que paso.

1. **Su `D-XXX`** en el registro de decisiones, con:
   - que archivos subieron y cuales se dejaron, con el motivo de cada uno que se dejo;
   - el **hash del commit del esqueleto** y el **hash de origen** de este repositorio;
   - lo que se reporto como **hallazgo**, si hubo;
   - y su bloque de verificacion, con la orden y su salida cruda.
2. **El barrido del Paso 1, corrido otra vez despues**, con su salida: es lo que demuestra que lo
   promovido de verdad cerro el desfase. Si queda algo, se dice que queda y por que.
3. **El indice y la entrada, en la misma pasada.** Una entrada sin fila en el indice es invisible.

🚨 **Lo que este registro afirma del otro repositorio es lo unico que el auditor NO puede ver.** Si es
falso, nada de aqui lo desmiente. Por eso va con los dos hashes delante, y por eso el barrido de
despues se pega entero.

⚠️ **Y la comprobacion del supuesto del Paso 2 se anota**, con cuantas lineas se leyeron y que eran.
Esa es la unica forma de que deje de ser una deduccion y pase a ser una observacion acumulada.

---

## Paso 8 — Reporte en pantalla

En espanol, sin relleno. **Entregalo completo.**

```
## Promocion al esqueleto — <fecha>

### Desfase medido
- <N> diferencias: <N> archivos que difieren, <N> solo aqui, <N> solo en el esqueleto

### Aprobado y subido
- <archivo> — <que entra>

### No subido
- <archivo> — <por que: el usuario no lo aprobo | hallazgo | barrido con lineas>

### Hallazgos
- <lo que solo existe en el esqueleto, o «ninguno»>

### Controles
Datos propios en las seis areas — <cero lineas | 🚨 <las lineas>>
Codigos instanciados — <cero lineas | 🚨 <las lineas>>
Barrido ensanchado — <el patron, y cero lineas | 🚨 <las lineas>>
Finales de linea — <todas las parejas iguales | <las que se convirtieron, y a que>>

### Commits
Origen (este repositorio) — <hash corto>
Esqueleto — <hash corto> — <primera linea del mensaje>
<"subido, `git status -sb` sin ahead" | 🚨 "SIN SUBIR — <que fallo>">

### Barrido despues
<vacio, el desfase cerro | <lo que queda, y por que>>

### Registrado aqui
- `D-XXX` — <una linea>
```

---

## Reglas del protocolo

⛔ **No lo delegas en ningun agente.** Ninguno tiene alcance fuera de este repositorio, y darselo seria
un cambio de alcance, no configuracion. Ademas un agente arranca en frio: no vio la sesion que
escribio lo que se esta promoviendo, que es justo el contexto que hace falta para no promover algo a
medias.

⛔ **No lo ejecuta el cierre.** El cierre detecta; esto promueve. Juntarlos convierte una mejora de dos
lineas en una puerta manual por sesion, y entonces la puerta se empieza a contestar sin leer.

🚨 **Y no se promueve «para dejarlo al dia» sin mirar.** Un desfase abierto y conocido es un estado
sano; una promocion hecha sin leer lo que borra es como el esqueleto pierde una version que alguien
necesitaba. La prisa es el unico motivo por el que este protocolo puede fallar, porque todo lo demas
esta medido.
