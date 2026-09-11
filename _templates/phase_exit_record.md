# Acta de cierre de etapa — `<NNN_etapa>` — <NOMBRE DEL PROYECTO>

> 📄 **Se copia una vez por pasada del acta.** El nombre del archivo lleva el numero con tres cifras:
> `005_phase_exit_record_001.md`, `005_phase_exit_record_002.md`, … El numero **no se reutiliza**, y
> ningun acta anterior se borra ni se sobrescribe.
>
> 🔑 **Se conservan todas por una razon concreta:** es lo unico que permite ver que una casilla se
> esta cayendo pasada tras pasada por la misma causa. Cuando eso pasa, el problema ya no es la
> casilla — es que la etapa se esta dando por terminada antes de estarlo.
>
> ⛔ **Esta plantilla no vive en la carpeta de ninguna etapa, y es deliberado.** El acta es la misma
> para todas: lo que cambia de una a otra son las casillas, y esas las declara el archivo de la
> etapa, no este archivo.

| Campo | Valor |
|---|---|
| Artefacto | `_audit/<NNN_etapa>/005_phase_exit_record_<NNN>.md` |
| Quien lo escribe | agente `phase_exit_auditor`, via `protocol-phase-exit` |
| Fecha | `<AAAA-MM-DD>` |
| Etapa que cierra | `<NNN_etapa>` |
| Archivo de etapa | `_phases/<NNN_etapa>.md`, seccion «Condicion de salida» |
| Commit sobre el que se dictamina | `<hash>` |
| Numero de casillas declaradas | `<N>` |
| Pasada numero | `<NNN>` |

> 🚨 **ESTO ES UN ACTA CON DOS FIRMAS, Y NINGUNA SUSTITUYE A LA OTRA.**
>
> | Firma | Quien | Que certifica |
> |---|---|---|
> | **Revision tecnica** | el agente, en este archivo | que cada casilla tiene una orden detras y que su salida dice lo que la casilla pedia |
> | **Aprobacion** | el **patrocinador**, en este archivo | que con esa evidencia delante da la etapa por cerrada |
>
> ⛔ **Mientras falte la segunda firma, la etapa sigue abierta**, por bien que salgan las casillas.
> Y quien construyo la etapa **no firma ninguna de las dos**: la primera la emite un agente que
> arranca en frio, la segunda el patrocinador. Un acta autofirmada se lee exactamente igual que una
> buena, y ese es todo el problema.

---

## 1. Dictamen tecnico

```
DICTAMEN: <CASILLAS SATISFECHAS | CASILLAS NO SATISFECHAS | NO AUDITABLE>
```

| Valor | Cuando se emite |
|---|---|
| `CASILLAS SATISFECHAS` | **todas** las casillas declaradas por el archivo de etapa son `CUMPLE` |
| `CASILLAS NO SATISFECHAS` | al menos una es `NO CUMPLE` o `NO COMPROBABLE` |
| `NO AUDITABLE` | fallo la Comprobacion 0 — **no se puede saber** lo que dice la evidencia |

### La frase que lo sostiene

> `<una sola frase, falsable>`

⚠️ **Falsable quiere decir que se puede escribir que observacion la tumbaria.** Si no se puede, el
dictamen no esta sostenido: esta opinado.

| | Ejemplo |
|---|---|
| ✅ | *«las `<N>` casillas de la seccion «Condicion de salida» devuelven sobre `<hash>` la salida que cada una exige, y ninguna quedo sin orden.»* |
| ❌ | *«la etapa esta razonablemente completa.»* |

⛔ **La palabra `CERRADA` no aparece en esta seccion.** Nombra el efecto de las **dos** firmas, y
aqui solo se pone la primera.

---

## 2. Comprobacion 0 — ¿es auditable la evidencia?

```
RESULTADO: <PASA | FALLA>
```

**Va primero, antes de mirar una sola casilla.** No comprueba lo que dicen los archivos: comprueba
que exista un estado fijo contra el que comprobarlos.

| # | Que se comprueba | Resultado | Evidencia cruda |
|---|---|---|---|
| 1 | El commit sobre el que se dictamina existe y esta subido | `<PASA / FALLA>` | `<hash y exit code>` |
| 2 | El arbol de trabajo esta limpio a ese commit | `<PASA / FALLA>` | `<…>` |
| 3 | La lista de casillas sale del archivo de etapa a ese commit, no de la memoria de nadie | `<PASA / FALLA>` | `<…>` |
| 4 | El archivo de etapa no cambio despues del commit que se dictamina | `<PASA / FALLA>` | `<…>` |

**Ordenes ejecutadas y su salida, tal cual salio:**

```
$ <orden literal, anclada al commit>
<salida cruda>
```

🚨 **Si esta comprobacion FALLA, el dictamen es `NO AUDITABLE` y este archivo termina en la
seccion 5.** No se rellenan las casillas y no se lleva al patrocinador: no hay nada que aprobar
sobre una evidencia que no se puede leer.

🔑 **La cuarta es la que de verdad muerde.** Si las casillas se pueden reescribir despues de
dictaminar, el acta certifica una lista que ya no es la que se comprobo — y nadie lo nota, porque el
archivo firmado se sigue leyendo igual.

---

## 3. Las casillas, una por una

⚠️ **Una fila por casilla declarada, ni una mas ni una menos, y en el orden del archivo de etapa.**
El numero **no lo fija esta plantilla**: lo fija la etapa que cierra. Si el recuento de filas no
coincide con el de la fila `Numero de casillas declaradas` de la cabecera, el acta no esta completa.

| # | Casilla, copiada literal del archivo de etapa | Resultado | Donde esta su orden |
|---|---|---|---|
| 1 | `<enunciado literal>` | `<CUMPLE / NO CUMPLE / NO COMPROBABLE>` | §3.1 |
| 2 | `<enunciado literal>` | `<…>` | §3.2 |
| … | `<…>` | `<…>` | `<…>` |

⛔ **«Copiada literal» no admite resumen.** Una casilla reescrita mas corta se vuelve mas facil de
cumplir, y el acta pasa a certificar un enunciado que la etapa no puso.

### 3.1 · `<enunciado literal de la casilla 1>`

```
$ <orden literal, anclada al commit>
<salida cruda>
```

- **Que exigia la casilla:** `<…>`
- **Que devolvio:** `<…>`
- **Resultado:** `<CUMPLE / NO CUMPLE / NO COMPROBABLE>`

### 3.2 · `<enunciado literal de la casilla 2>`

```
$ <orden literal, anclada al commit>
<salida cruda>
```

- **Que exigia la casilla:** `<…>`
- **Que devolvio:** `<…>`
- **Resultado:** `<CUMPLE / NO CUMPLE / NO COMPROBABLE>`

<!-- Copia el bloque completo para la casilla 3, la 4, … hasta agotar las declaradas. -->

🚨 **Una casilla sin orden es `NO COMPROBABLE`, nunca `CUMPLE`.** Hay casillas que ninguna orden
puede resolver —las que preguntan por un juicio y no por un hecho—, y para esas el resultado
correcto es `NO COMPROBABLE` con la razon escrita. Lo que no vale es darlas por buenas leyendolas:
una condicion de salida que se firma a ojo es una etapa que se cierra sola.

---

## 4. Lo que NO se pudo comprobar

| Casilla | Por que no | Que haria falta |
|---|---|---|
| `<#>` | `<falta un dato, la orden no existe, el ambito no esta definido…>` | `<…>` |

⚠️ **Esta seccion se escribe aunque quede vacia**, y entonces dice «ninguna». Una seccion ausente no
se distingue de una seccion que nadie miro.

---

## 5. Las dos firmas

### 5.1 Revision tecnica

| Campo | Valor |
|---|---|
| Quien | agente `phase_exit_auditor` |
| Fecha | `<AAAA-MM-DD>` |
| Dictamen | `<CASILLAS SATISFECHAS / CASILLAS NO SATISFECHAS / NO AUDITABLE>` |
| Casillas `CUMPLE` | `<n>` de `<N>` |

### 5.2 Aprobacion del patrocinador

| Campo | Valor |
|---|---|
| Quien | `<nombre o rol del patrocinador>` |
| Fecha | `<AAAA-MM-DD — se rellena el dia que firma, no antes>` |
| Decision | `<ETAPA CERRADA / ETAPA NO CERRADA>` |
| Donde queda registrada | `_persistence/decisions.md`, con su `D-XXX` |

⛔ **La segunda tabla se deja en blanco al escribir el acta.** El agente no la rellena, no la
anticipa y no la deja «pendiente de confirmar»: la escribe el patrocinador, o no esta escrita.

🚨 **Y un dictamen `CASILLAS NO SATISFECHAS` tambien se lleva a firmar.** El patrocinador puede
cerrar una etapa con casillas caidas si asume el coste — lo que no puede es hacerlo sin que conste.
Esa firma va con su `D-XXX` y, si la casilla caida deja coste futuro, con su `DT-XXX`.

---

## 6. Errores que esta plantilla existe para evitar

| Error | Como se ve | Que hacer |
|---|---|---|
| Firmarla quien construyo la etapa | una sola firma, o las dos con el mismo autor | la tecnica es de un agente en frio; la aprobacion, del patrocinador |
| Casilla dada por buena leyendola | resultado `CUMPLE` con su bloque de orden vacio | o lleva orden y salida, o es `NO COMPROBABLE` |
| Casilla resumida | el enunciado del acta es mas corto que el del archivo de etapa | copiar, no reescribir |
| Menos filas que casillas | el recuento de §3 no cuadra con la cabecera | una fila por casilla declarada |
| Orden sin ancla | un barrido sobre el arbol de trabajo en vez de sobre el commit | anclarla: la salida tiene que reproducir sobre el commit dictaminado |
| Rellenar la firma del patrocinador | fecha de aprobacion escrita el mismo dia que el dictamen | dejarla en blanco |
| Reescribir un acta anterior | el numero de pasada se reutiliza | numero nuevo; lo anterior no se toca |
| Tocar el archivo de etapa despues de dictaminar | la Comprobacion 0.4 falla en la pasada siguiente | corregir la etapa **antes** de convocar el acta |
