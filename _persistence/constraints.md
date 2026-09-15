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
| [C-001](#c-001---inventario-de-acciones-irreversibles) | Inventario de acciones irreversibles | Proceso | Vigente |

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

### C-001 - Inventario de acciones irreversibles
| Campo | Valor |
|---|---|
| Fecha | 2026-09-15 |
| Tipo | Proceso |
| Estado | Vigente |
| Origen | usuario |

- **Restriccion:** las acciones de la primera tabla no se ejecutan sin permiso previo y explicito del
  usuario; las de la segunda se hacen sin pedirlo y se revisan despues.
- **De donde viene:** `CLAUDE.md` remite a este inventario para clasificar lo irreversible, y no
  existia. Lo propuso `manager` a partir de `LG-38` y lo aprobo el usuario (`D-006`).
- **Que implica:**

  **Exige permiso antes:**

  | Accion | Por que no se deshace |
  |---|---|
  | Push forzado o cualquier reescritura del historial de Git | reemplaza en el remoto lo que otros pueden haber clonado; lo sustituido no se recupera desde el proyecto |
  | Borrar datos: del producto, de `_persistence/` o de `_audit/` | el registro y los datos no se reconstruyen desde el codigo |
  | Publicar: desplegar a produccion, hacer publico un repositorio o difundir un artefacto | lo publicado puede quedar copiado o indexado aunque se retire |
  | Gastar dinero: servicios de pago, APIs, hosting | la factura no se revierte |
  | Recoger o guardar datos de personas | el dato de una persona no se deshace una vez recogido |
  | Escribir fuera de este repositorio (cosecha de lecciones, promocion al esqueleto) | `CLAUDE.md` ya lo pone detras de la aprobacion del usuario; se lista aqui para que el inventario este completo |

  **Se hace y se revisa despues:**

  | Accion | Por que se puede deshacer |
  |---|---|
  | Push normal a la rama principal | se corrige con un commit posterior, sin reescribir nada |
  | Crear o editar archivos del repositorio y commitear en local | se revierte con `git` |

  ⚠️ **El inventario no pretende ser completo.** Una accion que no aparezca se clasifica a criterio
  y se dice asi en la respuesta; si se repite, se anade aqui con su `D-XXX`.
