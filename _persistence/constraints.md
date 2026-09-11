# constraints.md

> 📄 **Se copia a `_persistence/constraints.md`.** Se copia entero, con el indice vacio y la
> plantilla de entrada intacta.
>
> ⛔ **Lo que se borra al copiar son los ejemplos, no las convenciones.** Las convenciones son las
> reglas del archivo, y `CLAUDE.md` manda leerlas antes de escribir en el.
>
> 🚨 **Este archivo lo escribe `manager`, nunca el cierre.** El `session-closer` arranca en frio y
> solo ve el `git diff`; un limite se pacta en la conversacion y no aparece en ningun diff.

---

> Registro de las **limitaciones y restricciones** del proyecto: lo que obliga o impide,
> y no es negociable. Cada restriccion tiene codigo `C-XXX`.
> Lo que aun no esta confirmado no va aqui, va en `assumptions.md`.

---

## Indice

| Codigo | Restriccion | Tipo | Estado |
|---|---|---|---|
| — | — | — | — |

---

## Convenciones

| Campo | Valores posibles |
|---|---|
| Codigo | `C-XXX`, correlativo, no se reutiliza |
| Tipo | `Proceso` / `Tecnica` / `Negocio` / `Entorno` |
| Estado | `Vigente` / `Levantada` |
| Origen | `usuario` / `manager` / `report_auditor` |

🚨 **Aqui entra solo lo confirmado.** Una limitacion que se supone pero nadie ha confirmado es un
`A-XXX` en `assumptions.md`; llega aqui cuando se confirma.

⚠️ **Una restriccion no repite datos que viven en otro archivo.** Lo que obliga es el enunciado; si
para cumplir su funcion necesita una ruta, un nombre o un valor concreto, se referencia donde vive
y no se copia. Un duplicado obliga a acordarse de dos sitios cada vez que uno cambia.

⚠️ **Una restriccion levantada no se borra.** Se marca `Levantada`, con la fecha y con lo que la
levanto. Lo que obligaba ayer explica decisiones que siguen vivas hoy.

🚨 **El indice se escribe a mano, sin generador.** Cada fila enlaza por ancla a su restriccion.

---

## Restricciones

<!--
Plantilla:

### C-XXX - Titulo
| Campo | Valor |
|---|---|
| Fecha | AAAA-MM-DD |
| Tipo | |
| Estado | Vigente |
| Origen | |

- **Restriccion:** que obliga o que impide, en una frase.
- **De donde viene:** quien la impone y sobre que base.
- **Que implica:** que deja de ser posible, y que hay que hacer distinto por su causa.
-->
