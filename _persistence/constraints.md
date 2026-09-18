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
| [C-002](#c-002---el-producto-no-llama-a-ninguna-api-de-modelos-de-lenguaje) | El producto no llama a ninguna API de modelos de lenguaje | Tecnica | Vigente |
| [C-003](#c-003---el-producto-se-despliega-en-vercel) | El producto se despliega en Vercel | Tecnica | Vigente |
| [C-004](#c-004---la-aplicacion-se-mantiene-lo-mas-sencilla-posible) | La aplicacion se mantiene lo mas sencilla posible | Tecnica | Vigente |
| [C-005](#c-005---la-aplicacion-no-recoge-ningun-dato-personal) | La aplicacion no recoge ningun dato personal | Negocio | Vigente |
| [C-006](#c-006---la-lectura-del-sitio-oficial-de-baloto-se-limita-a-lo-que-su-robotstxt-autoriza) | La lectura del sitio oficial de Baloto se limita a lo que su robots.txt autoriza | Tecnica | Vigente |

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

### C-002 - El producto no llama a ninguna API de modelos de lenguaje
| Campo | Valor |
|---|---|
| Fecha | 2026-09-17 |
| Tipo | Tecnica |
| Estado | Vigente |
| Origen | usuario |

- **Restriccion:** el producto final no llama a ninguna API de modelos de lenguaje generativo. Toda su
  logica —generacion, estadistica, comparacion— corre con codigo convencional.
- **De donde viene:** el patrocinador la confirma como firme en la conversacion de `T-029`; el encargo
  ya la enunciaba (`_brief/client_brief.md` §21).
- **Que implica:** construir con asistencia de IA sigue permitido; lo que no cabe es que el producto
  dependa de una IA para funcionar.

### C-003 - El producto se despliega en Vercel
| Campo | Valor |
|---|---|
| Fecha | 2026-09-17 |
| Tipo | Tecnica |
| Estado | Vigente |
| Origen | usuario |

- **Restriccion:** la aplicacion se despliega en Vercel, y el diseno tecnico tiene que caber en lo que
  esa plataforma permite.
- **De donde viene:** el patrocinador la confirma como firme en la conversacion de `T-029`; el encargo
  ya la enunciaba (`_brief/client_brief.md` §24).
- **Que implica:** el almacenamiento del historico, la actualizacion de resultados y cualquier tarea
  programada tienen que ser posibles alli. La eleccion concreta es del diseno tecnico, no de esta etapa.

### C-004 - La aplicacion se mantiene lo mas sencilla posible
| Campo | Valor |
|---|---|
| Fecha | 2026-09-17 |
| Tipo | Tecnica |
| Estado | Vigente |
| Origen | usuario |

- **Restriccion:** no se agrega funcionalidad ni infraestructura que no sea necesaria para el flujo
  definido, sin definirla antes.
- **De donde viene:** el patrocinador la confirma como firme en la conversacion de `T-029`; el encargo
  ya la enunciaba (`_brief/client_brief.md` §20 y §24).
- **Que implica:** cada pieza nueva tiene que justificarse contra el flujo; lo que no lo sostenga queda
  fuera de la primera version.

### C-005 - La aplicacion no recoge ningun dato personal
| Campo | Valor |
|---|---|
| Fecha | 2026-09-17 |
| Tipo | Negocio |
| Estado | Vigente |
| Origen | usuario |

- **Restriccion:** la aplicacion no guarda dato personal alguno: ni identidad, ni usuario, ni contrasena,
  ni correo, ni nada que permita identificar a una persona.
- **De donde viene:** el patrocinador, al cerrar `A-001` en la conversacion de `T-029` (`D-056`).
- **Que implica:** el historial de juegos se guarda sin dueno; no hay cuentas ni registro de usuarios, y
  ninguna decision posterior puede introducirlos sin levantar esta restriccion. Como consecuencia, el
  despliegue no puede apoyarse en una identidad para restringir el acceso.

### C-006 - La lectura del sitio oficial de Baloto se limita a lo que su robots.txt autoriza

| Campo | Valor |
|---|---|
| Fecha | 2026-09-18 |
| Tipo | Tecnica |
| Estado | Vigente |
| Origen | manager |

- **Restriccion:** el producto lee el historico de sorteos y los acumulados **desde la pagina publica
  de resultados, en HTML**. No usa la ruta `/api/` ni la ruta `/admin-baloto/`, que el `robots.txt`
  del sitio prohibe a todo agente. Tampoco redistribuye el contenido leido: lo consume para calcular.
- **De donde viene:** el `robots.txt` publicado por el sitio oficial, leido al cerrar `A-008`
  (`D-083`), que es donde estan la orden y su salida cruda.
- **Que implica:** si algun dia la pagina dejara de servir los datos en el HTML y solo los expusiera
  por `/api/`, **esta restriccion no se sortea llamando a esa ruta**: habria que levantarla con su
  decision, o replantear la fuente. Que la ruta prohibida sea la comoda no la vuelve disponible.
