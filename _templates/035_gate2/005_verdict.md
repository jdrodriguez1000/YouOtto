# Dictamen Gate 2 — <NNN> — <NOMBRE DEL PROYECTO>

> 📄 **Se copia una vez por pasada del Gate.** El nombre del archivo lleva el numero con tres cifras:
> `005_verdict_001.md`, `005_verdict_002.md`, … El numero **no se reutiliza**, y ningun dictamen
> anterior se borra ni se sobrescribe.
>
> 🔑 **Se conservan todos por la misma razon que en el Gate anterior, y aqui pesa mas:** es lo unico
> que permite ver que un `NO AUDITABLE` se esta repitiendo por la misma causa. Cuando eso pasa, el
> problema ya no es la evidencia — es que la medicion se esta rehaciendo hasta que salga.

| Campo | Valor |
|---|---|
| Artefacto | `_audit/035_gate2/005_verdict_<NNN>.md` |
| Quien lo escribe | agente `gate2_auditor`, via `protocol-gate2` |
| Fecha | `<AAAA-MM-DD>` |
| Commit auditado | `<hash>` |
| Guia de metodo | `_methodology/000_method.md` §48–§52 |
| Ventana observada | `<AAAA-MM-DD a AAAA-MM-DD>` — declarada el `<AAAA-MM-DD>` |
| Pasada numero | `<NNN>` |

> 🚨 **ESTO ES UN DICTAMEN TECNICO, NO UNA DECISION.**
>
> Dice si la evidencia satisface los criterios. **No dice si se sigue invirtiendo.**
>
> | Firma | Quien | Donde queda |
> |---|---|---|
> | **Dictamen tecnico** | `gate2_auditor` | este archivo |
> | **Decision de inversion** | el patrocinador | `_persistence/decisions.md`, con su `D-XXX` |
>
> ⛔ **Las palabras `APROBADO` y `NO APROBADO` no aparecen en este archivo.** Nombran la decision, y
> la decision no se firma aqui. **Mientras falte la segunda firma, el Gate sigue abierto**, por bien
> que salgan los criterios.

---

## 0. 🚨 La pregunta cambio, y ese cambio es todo

| | Pregunta |
|---|---|
| **Gate anterior · prototipo** | ¿El usuario **podria** usar esta solucion? |
| **Este Gate · producto minimo** | ¿El usuario **realmente adopta y usa** esta solucion? |

En el Gate anterior se observaba a alguien haciendo una tarea que se le pidio, con un facilitador
delante. Aqui no hay tarea ni facilitador: **hay gente que decide sola si abre la aplicacion o sigue
haciendo lo de siempre.**

Y las tres que **no** se preguntan:

| ❌ No se pregunta | Por que |
|---|---|
| ¿El producto minimo esta bien construido? | la calidad no es adopcion. Un buen producto que nadie usa no satisface los criterios |
| ¿Al patrocinador le parece que va bien? | la impresion no es medicion |
| ¿Cuanto se ha invertido ya? | **la inversion hecha no es criterio** — ver §8 |

---

## 1. Dictamen

```
DICTAMEN: <CRITERIOS SATISFECHOS | CRITERIOS NO SATISFECHOS | NO AUDITABLE>
```

| Valor | Cuando se emite |
|---|---|
| `CRITERIOS SATISFECHOS` | los cinco auditables `CUMPLEN` |
| `CRITERIOS NO SATISFECHOS` | al menos uno es `NO CUMPLE` o `NO COMPROBABLE` |
| `NO AUDITABLE` | fallo la Comprobacion 0, o la Comprobacion 1 no pudo separar quien genero el uso |

### La frase que lo sostiene

> `<una sola frase, falsable, CON EL NUMERO DENTRO>`

⚠️ **En este Gate la frase lleva el numero, y no es una preferencia de estilo.** Todo el dictamen
descansa sobre una medicion; una frase sin cifra no se puede contrastar contra la ventana ni contra
el umbral.

| | Ejemplo |
|---|---|
| ✅ | *«De 40 actores generadores reales, 31 usaron la aplicacion y 24 volvieron al menos una vez en la ventana del 1 al 28 de marzo, sobre un umbral declarado de 20.»* |
| ❌ | *«la adopcion fue buena.»* |

---

## 2. Comprobacion 0 — ¿es auditable la medicion?

```
RESULTADO: <PASA | FALLA>
```

**Va primero, antes de mirar un solo numero.** Lo que se comprueba no es lo que dice la declaracion
de la ventana: es **cuando nacio y si cambio**, en el historial.

| # | Que se comprueba | Resultado | Evidencia cruda |
|---|---|---|---|
| 1 | La declaracion de la ventana existe y esta versionada | `<PASA / FALLA>` | `<hash de alta>` |
| 2 | Nacio **antes** del primer dato de uso, por orden del grafo | `<PASA / FALLA>` | `<hashes y exit codes>` |
| 3 | La metrica, la ventana y el umbral no cambiaron sin registro | `<PASA / FALLA>` | `<…>` |
| 4 | Si alguno cambio, §4 de la declaracion lo dice, con su `D-XXX` | `<PASA / FALLA / no aplica>` | `<…>` |
| 5 | La ventana observada de §5 coincide con la declarada en §1 | `<PASA / FALLA>` | `<…>` |
| 6 | La orden de extraccion de §5 es la **misma** que la de §1 | `<PASA / FALLA>` | `<…>` |
| 7 | Las cuatro rendijas de §2 estan cerradas, ninguna con «se vera» | `<PASA / FALLA>` | `<…>` |

**Ordenes ejecutadas y su salida, tal cual salio:**

```
$ <orden literal>
<salida cruda>
```

🚨 **Si esta comprobacion FALLA, el dictamen es `NO AUDITABLE` y este archivo termina en la
seccion 7.** No se rellenan los criterios, no se lleva al patrocinador y no se pide ninguna decision.

🔑 **La lectura 2 se resuelve por el ORDEN del grafo, no por la fecha.** `%ad` y `%cd` se
sobrescriben con una variable de entorno; el enlace de cada commit con su padre no se cambia sin
reescribir todo lo que viene detras, y sobre un historial ya publicado eso se ve.

> ⚠️ **Una ventana que se alarga «un par de semanas mas, que va mejorando» no es paciencia: es
> esperar a que el dato diga lo que se queria oir.** Y se ve en una linea de `git log`.

---

## 3. Comprobacion 1 — ¿los datos son de uso REAL?

```
RESULTADO: <PASA | FALLA | NO SE PUEDE SEPARAR>
```

**Es la comprobacion que mas dictamenes deberia cambiar, y la que casi nadie hace.** El uso se
separa por **quien lo genero**:

| Categoria | ¿Cuenta como adopcion? | Cifra |
|---|---|---|
| Actores generadores reales, por decision propia | ✅ **si** | `<n>` |
| El equipo que construyo | ❌ no | `<n>` |
| Quien patrocina y su gente ensenando el producto | ❌ no | `<n>` |
| Usuarios a los que se les pidio que entraran | ⚠️ **no como adopcion**; si como uso asistido | `<n>` |
| Pruebas, demostraciones, entornos que no son el de destino | ❌ no | `<n>` |

```
CIFRA BRUTA: <n>   →   CIFRA DE GENERADORES REALES: <n>
```

🔑 **Si al filtrar por generadores reales la cifra se cae, la cifra nunca existio.** Un numero de uso
sin identidad detras no mide adopcion: es un contador.

🚨 **Si el registro NO permite separar quien es quien, el resultado es `NO SE PUEDE SEPARAR` y el
dictamen es `NO AUDITABLE`.** Y el hallazgo no va contra el producto minimo: va contra la
instrumentacion que la etapa del esqueleto tenia que dejar montada.

---

## 4. Comprobacion 2 — los criterios, uno por uno

Los criterios son los de `_methodology/000_method.md` §51. **Son seis; la revision independiente
audita cinco.**

| # | Criterio | Resultado | Evidencia |
|---|---|---|---|
| 1 | El actor generador puede usar la aplicacion | `<CUMPLE / NO CUMPLE / NO COMPROBABLE>` | `<archivo:linea>` |
| 2 | Logra realizar la actividad principal | `<…>` | `<…>` |
| 3 | Obtiene el valor esperado | `<…>` | `<…>` |
| 4 | Existe **adopcion real** | `<…>` | `<…>` |
| 5 | Existe **utilizacion real o recurrente** | `<…>` | `<…>` |
| 6 | Vale la pena seguir invirtiendo | **—** | **corresponde al patrocinador** |

```
RECUENTO: <N> cumplen · <N> no cumplen · <N> no comprobables
```

🚨 **El criterio 6 no se evalua aqui, y no es un olvido.** No tiene ningun artefacto contra el que
verificarse: es literalmente la firma del patrocinador. Se deja marcado para que se vea que no se
paso por alto.

🔑 **`NO COMPROBABLE` no se redondea a `CUMPLE`.** Un revisor que calla lo que no supo mirar miente
por omision, y da exactamente el mismo verde que uno que comprobo.

📌 **Los criterios 4 y 5 son distintos y se confunden.** **Adopcion** es que empezaron a usarlo;
**utilizacion recurrente** es que volvieron. Un producto con cuarenta altas y ningun segundo uso
cumple el 4 y falla el 5 — y ese patron dice mucho mas que cualquiera de los dos por separado.

⚠️ **Los criterios 1, 2 y 3 no se leen de la impresion de nadie**, sino de las actas de iteracion y
de slice y del registro de ejecucion. Si solo hay una impresion, el valor es `NO COMPROBABLE`.

---

## 5. Comprobacion 3 — ¿lo construido es lo prometido?

```
RESULTADO: <COINCIDE | NO COINCIDE>
```

Se cruza el alcance cerrado de la baseline contra lo que existe, **en las dos direcciones**:

| Que se cruza | Resultado | Evidencia |
|---|---|---|
| Lo de la lista «entra», ¿esta? | `<…>` | `<…>` |
| Lo de la lista del «no», ¿se colo? | `<…>` | `<…>` |
| La trazabilidad, ¿cierra en los dos sentidos? | `<…>` | `<…>` |

🚨 **Alcance que entro sin decision es tan hallazgo como alcance que falto.** La segunda mitad es la
que importa en un Gate de inversion: lo construido de mas tambien costo.

### 5.1. Antes de cruzar nada: ¿se ha tocado la lista del «no»?

**Se comprueba en el historial, no en el archivo.** Si se pudieran borrar lineas, esta comprobacion
se aprobaria **quitando de la lista lo que se colo**, y el control se desactivaria desde dentro sin
dejar rastro.

| Que se comprueba | Resultado | Evidencia cruda |
|---|---|---|
| Ninguna entrada `NO ENTRA` desaparecio del archivo | `<PASA / FALLA>` | `<…>` |
| Ninguna razon ya escrita se reescribio en silencio | `<PASA / FALLA>` | `<…>` |
| Ninguna entrada nacio **despues** de empezar a medir | `<PASA / FALLA>` | `<…>` |
| El archivo estaba `CERRADO` antes del primer dato | `<PASA / FALLA>` | `<…>` |

🔑 **La tercera lectura es la que casi nadie hace, y la que mas cambia.** Una linea metida en la
ultima semana convierte en «decidido desde el principio» algo que simplemente no se construyo, y las
otras tres pasarian igual.

🚨 **Si alguna de las cuatro falla, el dictamen es `NO AUDITABLE`**, no `NO COINCIDE`: el alcance
contra el que se iba a cruzar ya no es el que se cerro.

---

## 6. Comprobaciones 4 y 5 — la operacion hibrida y la deuda

### 6.1. La operacion hibrida, ¿aguanto?

```
RESULTADO: <AGUANTO | NO AGUANTO | NO COMPROBABLE>
```

En la baseline se dejaron actores fuera, apostando a que sus procesos existentes absorberian el
volumen. **Aqui se comprueba si la apuesta salio.**

| Actor dejado fuera | Volumen que se estimo | Volumen que le llego | ¿Aguanto? | Evidencia |
|---|---|---|---|---|
| `<tipo de actor · actor concreto>` | `<n>` | `<n, o NO MEDIDO>` | `<SI / NO / NO SE SABE>` | `<…>` |

> ⚠️ **Un producto minimo que triunfa con el generador y ahoga al coordinador en su hoja de calculo
> ha desplazado el problema, no lo ha resuelto.**

⛔ **La revision independiente describe la saturacion; no propone la funcionalidad que la
arreglaria.** Eso es trabajo de la etapa siguiente, y proponerlo aqui contamina su criterio.

### 6.2. La deuda declarada frente a la encontrada

```
RESULTADO: <COINCIDE | HAY DEUDA NO DECLARADA>
```

| Deuda encontrada | ¿Estaba declarada? | Donde |
|---|---|---|
| `<…>` | `<SI — DT-XXX / NO>` | `<archivo:linea>` |

> 🔑 **Una deuda que la revision encuentra y no estaba escrita pesa mas que la deuda misma.** La
> deuda cuesta trabajo; la deuda oculta cuesta la confianza en la lista entera — y entonces lo que
> queda en duda no es esa entrada, son todas.

---

## 7. Hallazgos

Cada uno con sus **dos marcas arriba**, antes del parrafo que lo explica.

### `<H-1 — titulo de una linea>`

```
Importancia: <baja | media | alta>   ·   Urgencia: <bloqueante | no bloqueante>
```

`<el parrafo que lo explica, con su comando y su salida cruda>`

⚠️ **`Bloqueante` solo vale con la frase que dice que bloquea y que se rompe si se sigue.**
**Importancia baja = una linea**, o no se entrega.

⛔ **Un defecto y una mejora no van en el mismo sitio.** Lo que esta mal es un hallazgo; lo que
podria estar mejor va a la seccion 9.

### Si el dictamen es `NO AUDITABLE` — que se rehace

🚨 **No se rehace el producto minimo. Se rehace la MEDICION.**

| Que fallo | Que se rehace |
|---|---|
| `<…>` | `<…>` |

Referencia de los casos frecuentes:

| Que fallo | Que se rehace |
|---|---|
| La metrica se definio despues de ver datos | se declara de nuevo y **se observa una ventana nueva completa** |
| La ventana se alargo | se toma la ventana **originalmente declarada** y se juzga con ella |
| El registro no distingue quien uso | se instrumenta y se abre ventana nueva |
| La lista del «no» se toco despues de cerrarse | se reconstruye desde el historial y se declara que se encontro |

🚨 **Un `NO AUDITABLE` por ventana alargada se juzga con la ventana ORIGINAL**, no esperando otra.
Si no, alargar sale gratis y la Comprobacion 0 no vale nada.

**¿Este mismo fallo ya salio en un dictamen anterior?** `<NO / SI — 005_verdict_<NNN>.md>`

🚨 **Si la respuesta es `SI`, eso es un hallazgo de importancia alta por si mismo.** Un
`NO AUDITABLE` que se repite por la misma causa no es un problema de evidencia: es que la medicion se
esta rehaciendo hasta que salga.

---

## 8. 🚨 El sesgo propio de este Gate

En el Gate anterior habia unas semanas invertidas. Aqui hay **el producto minimo entero, un equipo, y
un patrocinador que ya lo enseno.**

La presion para dar el verde es maxima, y llega con la frase mas razonable del metodo:

> *«Despues de todo lo que llevamos invertido, ¿vamos a parar ahora?»*

**Es exactamente al reves, y es la razon de que este Gate exista:**

> Lo ya invertido esta gastado, salga lo que salga. Lo unico que se decide hoy es **lo que falta por
> gastar.**

Y por eso, escrito como regla:

| ⛔ La revision independiente no… | |
|---|---|
| ablanda el dictamen por la inversion hecha | **la inversion ya hecha no es criterio** |
| cambia un `NO CUMPLE` por «casi» | «casi» no es un valor de la tabla |
| acepta una metrica sustituida a posteriori | eso es `NO AUDITABLE`, no un matiz |
| arregla, propone funcionalidades ni escribe fuera de su carpeta | en el momento en que edita, deja de poder revisar |

📌 **Por que este Gate es el que mas se salta.** El anterior es facil de respetar: no hay casi nada
invertido y decir que no es barato. Este llega cuando el producto existe, funciona, esta desplegado y
alguien ya lo enseno con orgullo. **Saltarselo no se siente como saltarse un control: se siente como
seguir trabajando.** Por eso su defensa no es la voluntad de nadie, son dos cosas mecanicas: la
Comprobacion 0, que lee el historial y no se puede convencer, y la Comprobacion 1, que filtra por
identidad y obliga al numero bonito a sobrevivir a la pregunta *«¿quien lo genero?»*.

---

## 9. Recomendaciones sin hallazgo

Lo que podria estar mejor pero no esta mal. **Una linea cada una.**

- `<…>`

⛔ **Aqui no se proponen funcionalidades, pantallas ni alcance.** Lo que si cabe es que evidencia
conviene registrar mejor, o que instrumentacion falto.

---

## 10. Lo que falta para cerrar el Gate

**Este dictamen no cierra nada por si solo.** Hacen falta las dos firmas.

| Firma | Estado |
|---|---|
| **Dictamen tecnico** — `gate2_auditor` | ✅ este archivo, `<hash del commit>` |
| **Decision de inversion** — el patrocinador | ⬜ pendiente · `_persistence/decisions.md`, `D-XXX` |

**La decision del patrocinador toma uno de tres valores:**

| Decision | Que abre |
|---|---|
| **Seguir invirtiendo** | la etapa de evolucion, con su primera iteracion |
| **Replantear o modificar** | se vuelve atras con **que criterio fallo y con que numero** |
| **Detener** | se cierra la iniciativa |

🔑 **Detener aqui no es perder lo invertido en el producto minimo: es no perder los anos
siguientes.** «Es preferible descubrir tras invertir en un producto minimo que la solucion no sera
usada, que descubrirlo despues de haber construido todo el producto.» **Se registra igual que
cualquier otro resultado** — lo que no queda escrito se repite.

📌 **Y seguir invirtiendo no autoriza mas que eso.** No aprueba un plan de producto ni un
presupuesto: aprueba **seguir invirtiendo** en algo que demostro adopcion. Los hallazgos no
bloqueantes —la deuda, la operacion hibrida— entran como material de entrada de la etapa siguiente.

⚠️ **El patrocinador puede decidir contra el dictamen, y eso es legitimo.** Lo que no puede es
cambiarlo: un `NO CUMPLE` es un hecho verificable contra los archivos. Si se decide seguir de todas
formas, **la `D-XXX` dice por que**, y eso es mucho mas util que un dictamen ablandado.

🚨 **Si el dictamen fue `NO AUDITABLE`, esta seccion no aplica.** No hay decision que tomar: se
rehace la medicion de la seccion 7 y se vuelve a correr el Gate con un dictamen nuevo.
