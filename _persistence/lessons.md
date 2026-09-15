# lessons.md

> 📄 **Se copia a `_persistence/lessons.md`.** Se copia entero, con el indice vacio y la plantilla
> de entrada intacta.
>
> ⛔ **Lo que se borra al copiar son los ejemplos, no las convenciones.** Las convenciones son las
> reglas del archivo, y `CLAUDE.md` manda leerlas antes de escribir en el.
>
> 🚨 **Este archivo lo escribe `manager`, nunca el cierre.** Y es el camino de ida de la cosecha:
> al cerrar una etapa, lo que aqui supere el filtro sube al archivo de lecciones globales.

---

> Registro de las **lecciones aprendidas** durante la ejecucion del proyecto.
> Cada leccion tiene codigo `L-XXX`.

---

## Indice

| Codigo | Leccion | Fecha | Etapa | Portabilidad |
|---|---|---|---|---|
| [L-001](#l-001---el-historial-heredado-del-esqueleto-se-comprueba-antes-del-primer-push) | El historial heredado del esqueleto se comprueba antes del primer push | 2026-09-15 | 000_preproject | Sin evaluar |
| [L-002](#l-002---un-registro-que-una-regla-cita-se-comprueba-que-existe-al-arrancar) | Un registro que una regla cita se comprueba que existe al arrancar | 2026-09-15 | 000_preproject | Sin evaluar |

---

## Convenciones

| Campo | Valores posibles |
|---|---|
| Codigo | `L-XXX`, correlativo, no se reutiliza |
| Origen | `usuario` / `manager` / `report_auditor` |

Cada leccion registra: contexto, que ocurrio, leccion y como aplicarla.

🚨 **Una leccion sin «como aplicarla» es una anecdota.** El campo que la convierte en leccion es la
accion concreta a futuro; si no se puede escribir, lo que hay todavia no es una leccion.

⚠️ **El titulo enuncia la leccion, no el incidente.** Se lee como regla, no como cronica.

🚨 **El indice se escribe a mano, sin generador.** Cada fila enlaza por ancla a su leccion.

**Y una columna que solo vive en el indice: `Portabilidad`.** Dice si esa leccion sube al archivo de
lecciones globales, y es lo que hace que la cosecha se pueda comprobar.

| Valor | Significa |
|---|---|
| `Sin evaluar` | todavia no ha pasado por los filtros de promocion. Es el valor de partida de toda leccion nueva |
| `Global candidata` | pasa los filtros y esta pendiente de subir |
| `Promovida a <codigo global>` | ya esta en el archivo global, con su codigo |
| `Ya cubierta por <codigo global>` | el archivo global ya lo dice. **No se sube**, y se anota cual lo cubre |
| `Solo proyecto` | no sobrevive al cambio de lenguaje, libreria o dominio |

🔑 **Vive en el indice y en ningun sitio mas.** No se repite dentro de la ficha: un estado escrito en
dos sitios acaba diciendo dos cosas, y entonces no se sabe cual manda. Ademas la cosecha es un
barrido —se lee una columna, no quince fichas—, y para eso el indice es el sitio.

⚠️ **`Sin evaluar` no significa «no sube»: significa que nadie lo ha mirado.** Los dos se parecen al
leerlos deprisa, y confundirlos deja la cosecha hecha sobre lecciones que nunca se evaluaron.

🚨 **Los filtros de promocion no estan aqui: viven en el archivo global**, en su seccion de
promocion, y se leen alli en el momento de cosechar. Copiarlos a este archivo crearia una segunda
copia que envejeceria por su cuenta.

---

## Lecciones

<!--
Plantilla:

### L-XXX - Titulo (enunciado como regla, no como cronica)
| Campo | Valor |
|---|---|
| Fecha | AAAA-MM-DD |
| Etapa | |
| Origen | |

- **Contexto:** que se estaba haciendo.
- **Que ocurrio:** el hecho, sin interpretarlo todavia.
- **Leccion:** que ensena, en una frase que valga fuera de este caso.
- **Como aplicarla:** la accion concreta a futuro. Sin esto, es una anecdota.
-->

### L-001 - El historial heredado del esqueleto se comprueba antes del primer push
| Campo | Valor |
|---|---|
| Fecha | 2026-09-15 |
| Etapa | 000_preproject |
| Origen | manager |

- **Contexto:** completar `project.md` en la primera sesion del proyecto, arrancado desde el
  esqueleto.
- **Que ocurrio:** el paso de borrar el `.git` del clon (`README.md`, linea 47) no se hizo. El
  proyecto subio a su remoto los siete commits del esqueleto, y nadie lo noto hasta que se comparo
  el hash de partida con el `HEAD` del proyecto. Para entonces deshacerlo exigia un push forzado, y
  se decidio conservarlo (`D-004`).
- **Leccion:** un paso de arranque que no deja rastro visible se salta sin que nadie lo note, y se
  descubre cuando corregirlo ya es irreversible.
- **Como aplicarla:** antes del primer push de un proyecto nuevo, correr
  `git rev-list --count HEAD` y `git log --oneline`: si aparecen commits que no son del proyecto, el
  historial heredado sigue ahi y se decide que hacer mientras aun es local.

### L-002 - Un registro que una regla cita se comprueba que existe al arrancar
| Campo | Valor |
|---|---|
| Fecha | 2026-09-15 |
| Etapa | 000_preproject |
| Origen | manager |

- **Contexto:** consulta de las lecciones globales de arranque (`D-005`), aplicando `LG-38`.
- **Que ocurrio:** `CLAUDE.md` manda leer la clasificacion de lo irreversible de un inventario en
  `constraints.md`, pero ni el archivo ni su plantilla lo traian. La regla se habia estado cumpliendo
  «a criterio» sin que ningun control lo senalara, hasta que la consulta lo busco (`D-006`).
- **Leccion:** una regla que remite a un registro que no existe parece vigente y no obliga a nada.
- **Como aplicarla:** al arrancar un proyecto, buscar en `CLAUDE.md` y los protocolos cada registro
  al que remiten («vive en», «el inventario de») y comprobar con `grep` que existe; el que falte se
  crea o se registra como deuda antes de salir de `000_preproject`.
