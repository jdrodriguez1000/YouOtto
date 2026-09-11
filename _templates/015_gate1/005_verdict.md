# Dictamen Gate 1 — <NNN> — <NOMBRE DEL PROYECTO>

> 📄 **Se copia una vez por pasada del Gate.** El nombre del archivo lleva el numero con tres cifras:
> `005_verdict_001.md`, `005_verdict_002.md`, … El numero **no se reutiliza**, y ningun dictamen
> anterior se borra ni se sobrescribe.
>
> 🔑 **Se conservan todos por una razon concreta:** es lo unico que permite ver que un
> `NO AUDITABLE` se esta repitiendo por la misma causa. Cuando eso pasa, el problema ya no es la
> evidencia — es que la etapa se esta corriendo al reves.

| Campo | Valor |
|---|---|
| Artefacto | `_audit/015_gate1/005_verdict_<NNN>.md` |
| Quien lo escribe | agente `gate1_auditor`, via `protocol-gate1` |
| Fecha | `<AAAA-MM-DD>` |
| Commit auditado | `<hash>` |
| Guia de metodo | `_methodology/000_method.md` §28–§32 |
| Pasada numero | `<NNN>` |

> 🚨 **ESTO ES UN DICTAMEN TECNICO, NO UNA DECISION.**
>
> Dice si la evidencia satisface los criterios. **No dice si se construye el MVP.**
>
> | Firma | Quien | Donde queda |
> |---|---|---|
> | **Dictamen tecnico** | `gate1_auditor` | este archivo |
> | **Decision de inversion** | el patrocinador | `_persistence/decisions.md`, con su `D-XXX` |
>
> ⛔ **Las palabras `APROBADO` y `NO APROBADO` no aparecen en este archivo.** Nombran la decision, y
> la decision no se firma aqui. **Mientras falte la segunda firma, el Gate sigue abierto**, por bien
> que salgan los criterios.

---

## 1. Dictamen

```
DICTAMEN: <CRITERIOS SATISFECHOS | CRITERIOS NO SATISFECHOS | NO AUDITABLE>
```

| Valor | Cuando se emite |
|---|---|
| `CRITERIOS SATISFECHOS` | los seis auditables `CUMPLEN` **y** la hipotesis se sostiene |
| `CRITERIOS NO SATISFECHOS` | al menos uno es `NO CUMPLE` o `NO COMPROBABLE`, **o** la hipotesis se rompio |
| `NO AUDITABLE` | fallo la Comprobacion 0 — **no se puede saber** lo que dice la evidencia |

### La frase que lo sostiene

> `<una sola frase, falsable>`

⚠️ **Falsable quiere decir que se puede escribir que observacion la tumbaria.** Si no se puede, el
dictamen no esta sostenido: esta opinado.

| | Ejemplo |
|---|---|
| ✅ | *«4 de 5 participantes completaron la tarea con estado exito autonomo, cumpliendo el umbral de `020_hypothesis.md` §3.»* |
| ❌ | *«el prototipo demostro buena aceptacion.»* |

---

## 2. Comprobacion 0 — ¿es auditable la evidencia?

```
RESULTADO: <PASA | FALLA>
```

**Va primero, antes de mirar un solo resultado.** Lo que se comprueba no es lo que dicen los
archivos: es **cuando nacieron**, en el historial.

| # | Que se comprueba | Resultado | Evidencia cruda |
|---|---|---|---|
| 1 | La hipotesis existia antes de la sesion 1 | `<PASA / FALLA>` | `<hashes y exit codes>` |
| 2 | La tarea existia antes de construir el prototipo | `<PASA / FALLA>` | `<…>` |
| 3 | El perfil y el numero se fijaron antes de la sesion 1 | `<PASA / FALLA>` | `<…>` |
| 4 | La hipotesis no cambio durante la etapa | `<PASA / FALLA>` | `<…>` |
| 5 | Las secciones selladas de participantes no cambiaron | `<PASA / FALLA>` | `<…>` |
| 6 | El prototipo no cambio entre sesiones | `<PASA / FALLA>` | `<…>` |
| 7 | Cada sesion se escribio el dia que ocurrio | `<PASA / FALLA>` | `<…>` |

**Ordenes ejecutadas y su salida, tal cual salio:**

```
$ <orden literal>
<salida cruda>
```

🚨 **Si esta comprobacion FALLA, el dictamen es `NO AUDITABLE` y este archivo termina en la
seccion 6.** No se rellenan los criterios, no se lleva al patrocinador y no se pide ninguna decision:
no hay decision de inversion que tomar sobre una evidencia que no se puede leer.

🔑 **Es la unica comprobacion del metodo que no se aprueba redactando mejor.** Las tres lecturas
de «antes» se resuelven por el **orden del grafo** —`git merge-base --is-ancestor`—, no por la
fecha del commit: `%ad` se sobrescribe con una variable de entorno y el orden de los padres no.

⚠️ **Y hasta ahi llega la garantia.** Demuestra que en el historial publicado esas cuatro cosas
entraron antes; no que nadie pudiera haber montado ese historial a posteriori.

---

## 3. Comprobaciones 1 y 2 — la tarea y los participantes

### 3.1. ¿La tarea revelaba la solucion?

```
RESULTADO: <DA CONTEXTO | DESCRIBE LA SOLUCION>
```

- **Tarea literal, copiada de `005_happy_path.md`:** `<…>`
- **Que se encontro:** `<nombra un boton / un menu / un orden de pasos — o nada de eso>`

⚠️ **Si describe la solucion, las sesiones midieron si el usuario sabe seguir indicaciones.** No es
`NO AUDITABLE` —la evidencia es legitima—, pero **derriba el criterio 3** y se dice asi en su fila.

### 3.2. ¿Los participantes eran los definidos?

| | Fijado antes | Vino de verdad | ¿Coincide? |
|---|---|---|---|
| Numero total | `<N>` | `<N>` | `<si / no>` |
| `<perfil 1>` | `<n>` | `<n>` | `<si / no>` |
| `<perfil 2>` | `<n>` | `<n>` | `<si / no>` |
| Descalificados que entraron | `0` | `<n>` | `<si / no>` |

⚠️ **Un numero incumplido no se compensa con calidad.** «Fueron tres en vez de cinco pero muy
representativos» es la frase que el numero fijado de antemano existe para impedir.

---

## 4. Comprobacion 3 — los criterios, uno por uno

Los criterios son los de `_methodology/000_method.md` §29. **Son siete; la revision independiente
audita seis.**

| # | Criterio | Resultado | Evidencia |
|---|---|---|---|
| 1 | El problema identificado es relevante | `<CUMPLE / NO CUMPLE / NO COMPROBABLE>` | `<archivo:linea>` |
| 2 | La solucion propuesta es comprensible | `<…>` | `<…>` |
| 3 | El Generador ejecuta el flujo principal de forma autonoma | `<…>` | `<…>` |
| 4 | La solucion satisface razonablemente la necesidad | `<…>` | `<…>` |
| 5 | No hay problemas funcionales fundamentales que impidan continuar | `<…>` | `<…>` |
| 6 | Hay confianza suficiente para la inversion del MVP | **—** | **corresponde al patrocinador** |
| 7 | La empresa considera valido el proceso de negocio *(dimension D)* | `<…>` | `<…>` |

```
RECUENTO: <N> cumplen · <N> no cumplen · <N> no comprobables
```

🚨 **El criterio 6 no se evalua aqui, y no es un olvido.** No tiene ningun artefacto contra el que
verificarse: es literalmente la firma del patrocinador. Se deja marcado para que se vea que no se
paso por alto.

🔑 **`NO COMPROBABLE` no se redondea a `CUMPLE`.** Un revisor que calla lo que no supo mirar miente
por omision, y da exactamente el mismo verde que uno que comprobo.

📌 **El criterio 3 se lee directo de los cuatro estados de las sesiones.** «Exito con ayuda» no es
exito autonomo: el facilitador intervino.

📌 **En el criterio 5 solo pesan las tres primeras categorias** de `020_observations.md` —problema
funcional, de comprension y de usabilidad—. Las demas son material para etapas posteriores.

---

## 5. Comprobacion 4 — la hipotesis

```
RESULTADO: <SE SOSTIENE | SE ROMPE | NO COMPROBABLE>
```

| Campo | Contenido |
|---|---|
| **Hipotesis, literal** | `<copiada de 020_hypothesis.md>` |
| **Condicion de falsacion, literal** | `<que observacion la tumbaria>` |
| **Lo observado** | `<contra el umbral literal, no por impresion>` |

🚨 **Una hipotesis rota no se ablanda porque el prototipo se vea bien.** Si decia «sin ayuda» y tres
de cinco necesitaron ayuda, esta tumbada.

⚠️ **Si no tenia condicion de falsacion escrita, el resultado es `NO COMPROBABLE`** —no `SE
SOSTIENE`—, y ademas es un hallazgo sobre la etapa anterior.

---

## 6. Hallazgos

Cada uno con sus **dos marcas arriba**, antes del parrafo que lo explica.

### `<H-1 — titulo de una linea>`

```
Importancia: <baja | media | alta>   ·   Urgencia: <bloqueante | no bloqueante>
```

`<el parrafo que lo explica, con su comando y su salida cruda>`

⚠️ **`Bloqueante` solo vale con la frase que dice que bloquea y que se rompe si se sigue.**
**Importancia baja = una linea**, o no se entrega.

⛔ **Un defecto y una mejora no van en el mismo sitio.** Lo que esta mal es un hallazgo; lo que
podria estar mejor va a la seccion 7.

### Si el dictamen es `NO AUDITABLE` — que se rehace

**No se rehace el prototipo. Se rehace la evidencia, y solo la que fallo.**

| Que fallo | Que se rehace |
|---|---|
| `<…>` | `<…>` |

Referencia de los casos frecuentes:

| Que fallo | Que se rehace |
|---|---|
| La hipotesis se escribio despues de las sesiones | se sella una hipotesis nueva y **se repiten las sesiones** |
| Las sesiones se escribieron dias despues | no tiene arreglo hacia atras → **se repiten** |
| El prototipo cambio a mitad de ronda | se repite la ronda **desde cero**, sin mezclar |
| Faltan participantes de un perfil | se corren **solo** las sesiones que faltan |

**¿Este mismo fallo ya salio en un dictamen anterior?** `<NO / SI — 005_verdict_<NNN>.md>`

🚨 **Si la respuesta es `SI`, eso es un hallazgo de importancia alta por si mismo.** Un
`NO AUDITABLE` que se repite por la misma causa no es un problema de evidencia: es que la etapa se
esta corriendo al reves.

---

## 7. Recomendaciones sin hallazgo

Lo que podria estar mejor pero no esta mal. **Una linea cada una.**

- `<…>`

⛔ **Aqui no se proponen funcionalidades, pantallas ni alcance.** No es papel de la revision
independiente, y contamina el criterio del Gate siguiente. Lo que si cabe es que evidencia conviene
registrar mejor la proxima vez.

---

## 8. Lo que falta para cerrar el Gate

**Este dictamen no cierra nada por si solo.** Hacen falta las dos firmas.

| Firma | Estado |
|---|---|
| **Dictamen tecnico** — `gate1_auditor` | ✅ este archivo, `<hash del commit>` |
| **Decision de inversion** — el patrocinador | ⬜ pendiente · `_persistence/decisions.md`, `D-XXX` |

**La decision del patrocinador toma uno de tres valores:**

| Decision | Que abre |
|---|---|
| **Construir el MVP** | la Product Baseline: PRD, BDD, SPEC, ARCHIT y los primeros ADR |
| **Replantear** | se vuelve al descubrimiento con **que parte de la hipotesis se rompio** |
| **Detener** | se cierra la iniciativa |

🔑 **Detener es un resultado valido, y barato.** Es el proposito entero del Gate: cuesta lo que costo
el prototipo, no lo que costaria el MVP. **Se registra igual que cualquier otro** — lo que no queda
escrito se repite.

⚠️ **El patrocinador puede decidir contra el dictamen, y eso es legitimo.** Lo que no puede es
cambiarlo: un `NO CUMPLE` es un hecho verificable contra los archivos. Si se decide construir de
todas formas, **la `D-XXX` dice por que**, y eso es mucho mas util que un dictamen ablandado.

🚨 **Si el dictamen fue `NO AUDITABLE`, esta seccion no aplica.** No hay decision que tomar: se
rehace la evidencia de la seccion 6 y se vuelve a correr el Gate con un dictamen nuevo.
