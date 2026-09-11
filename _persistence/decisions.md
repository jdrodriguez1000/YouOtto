# decisions.md

> 📄 **Se copia a `_persistence/decisions.md`.** Se copia entero, con el indice vacio y la plantilla
> de entrada intacta.
>
> ⛔ **Lo que se borra al copiar son los ejemplos, no las convenciones.** Las convenciones son las
> reglas del archivo, y `CLAUDE.md` manda leerlas antes de escribir en el.
>
> 🚨 **Este archivo lo escribe `manager`, nunca el cierre.** El `session-closer` arranca en frio y
> solo ve el `git diff`; un porque nace en la conversacion y no aparece en ningun diff. Si se llega
> al cierre sin haberlo escrito, esa informacion **ya se perdio**.

---

> Registro de las **decisiones tomadas** en el proyecto.
> Cada decision tiene codigo `D-XXX` y se considera vigente hasta que otra la revoque.

---

## Indice

| Codigo | Decision | Fecha | Estado |
|---|---|---|---|
| — | — | — | — |

---

## Convenciones

| Campo | Valores posibles |
|---|---|
| Codigo | `D-XXX`, correlativo, no se reutiliza |
| Estado | `Vigente` / `Revocada por D-XXX` |
| Origen | `usuario` / `manager` / `report_auditor` |

🚨 **Una decision no se borra ni se reescribe: se revoca.** La entrada antigua se queda con
`Revocada por D-XXX` en su estado, y la nueva explica que cambio y por que. El historial de por que
se penso distinto en su momento es parte del registro.

🚨 **Toda decision que verifica algo antes de aceptarlo lleva comando y salida cruda.** No se
escribe «se comprobo que…» de memoria: va el comando ejecutado y su salida literal.

🚨 **Y eso incluye el bloque «Criterio de cierre», que conviene que tenga forma fijada.** El
criterio se escribe en tres partes, siempre las tres:

1. **el enunciado** — que tiene que ser cierto para dar la decision por cerrada;
2. **la orden que lo comprueba, anclada al commit** (`git show <hash>:<archivo> | …`), no al arbol
   de trabajo, que cambia debajo;
3. **la salida que devolvio**, literal.

⛔ **Un criterio de cierre con la orden y sin la salida no es evidencia**: obliga a rehacer el
barrido a quien lo lea, que es exactamente el coste que la regla existe para evitar. Y un criterio
sin anclar reproduce el dia que se escribe y deja de reproducir en cuanto el archivo crece.

🚨 **El ancla no es del bloque «Criterio de cierre»: es de toda orden que se escriba en este
archivo.** Esta regla nacio de un defecto real: una decision publico su bloque de verificacion
previa —la que `CLAUDE.md` exige antes de aceptar un hallazgo— con dos ordenes sobre `HEAD`, y hoy
devuelven cifras distintas de las que publican. La conclusion sigue siendo cierta; lo que se perdio
es la prueba, que es lo unico que hacia auditable la aceptacion.

🔑 **Y aqui no hay huevo-y-gallina que resolver, a diferencia del criterio de cierre.** Una
verificacion previa se corre sobre un commit que **ya existe** —el `HEAD` de ese momento—, asi que
el hash literal se puede escribir en el acto. **Es el unico bloque que el Paso 7c-bis del cierre no
necesita arreglar despues, porque nace bien.**

⛔ **`HEAD` no se escribe nunca dentro de una orden publicada.** `HEAD` es un puntero que se mueve
con cada commit: la orden que lo usa contesta una pregunta distinta cada dia, y la salida pegada
debajo deja de ser su salida. Se resuelve con `git rev-parse --short HEAD` **antes** de escribirla,
y lo que va al archivo es el hash.

⚠️ **Lo que si se escribe es que ese hash era `HEAD`**, con las dos cosas nombradas por lo que son:
«verificado contra `HEAD` (`<hash>`)». Un commit no es `HEAD` porque lo diga una frase — lo es
porque lo era en ese momento, y confundirlo con el commit que una auditoria juzgaba ya abrio un
hallazgo una vez.

⚠️ **Rige hacia adelante.** Las ordenes ya publicadas con `HEAD` **no se reescriben**: se corrigen
por nota fechada, republicando la misma orden anclada con la salida que devuelve.

⚠️ **Y no aplica a ordenes que preguntan por lo que el commit no contiene** —`git status`, `date`,
el arbol de trabajo—. Esas se dejan como estan; el criterio de que es anclable y que no lo detalla
el Paso 7c-bis de `protocol-close`, y es el mismo.

⚠️ **El titulo nombra la decision, no su consecuencia**, y no cambia despues.

🚨 **El indice se escribe a mano, sin generador.** Cada fila enlaza por ancla a su decision.

---

## Decisiones

<!--
Plantilla:

### D-XXX - Titulo
| Campo | Valor |
|---|---|
| Fecha | AAAA-MM-DD |
| Estado | Vigente |
| Origen | |

- **Contexto:** que situacion obligo a decidir.
- **Decision:** que se decidio, en una frase.
- **Por que:** que problema resuelve, y que se protege con ello.
- **Alternativas descartadas:** que otros caminos habia y por que no. Al `git diff` solo llega el
  ganador; si las alternativas no se escriben aqui, no se escriben en ningun sitio.
-->
