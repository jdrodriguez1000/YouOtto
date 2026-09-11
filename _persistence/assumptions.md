# assumptions.md

> 📄 **Se copia a `_persistence/assumptions.md`.** Se copia entero, con el indice vacio y la
> plantilla de entrada intacta.
>
> ⛔ **Lo que se borra al copiar son los ejemplos, no las convenciones.** Las convenciones son las
> reglas del archivo, y `CLAUDE.md` manda leerlas antes de escribir en el.
>
> 🚨 **Este archivo lo escribe `manager`, nunca el cierre.** Y se escribe **antes** de construir
> encima de lo no confirmado, no despues.

---

> Registro de los **supuestos vigentes**: lo que se da por cierto sin confirmacion explicita.
> Cada supuesto tiene codigo `A-XXX`. Al confirmarse pasa a `constraints.md` o `decisions.md`;
> al refutarse se marca como refutado.

---

## Indice

| Codigo | Supuesto | Fecha | Estado |
|---|---|---|---|
| — | — | — | — |

---

## Convenciones

| Campo | Valores posibles |
|---|---|
| Codigo | `A-XXX`, correlativo, no se reutiliza |
| Estado | `Abierto` / `Confirmado` / `Refutado` / `Riesgo abierto` |
| Origen | `usuario` / `manager` / `report_auditor` |
| Dueno | quien tiene que ir a verificarlo — un nombre, no un rol vago |

| Campo | Que resuelve |
|---|---|
| **`Dueno`** | un supuesto sin dueno no se verifica nunca. El disparador dice **cuando** alguien lo mirara; el dueno dice **quien** |
| **`Riesgo abierto`** | un supuesto que **no se puede verificar antes de necesitarlo**, y se acepta a sabiendas. Va con **quien lo acepto** y por que no se pudo verificar |

⚠️ **`Riesgo abierto` es una decision, no un cajon de sastre.** Un supuesto que lleva meses
`Abierto` sin que nadie lo mire **ya es un riesgo abierto**, solo que sin nadie que lo haya
decidido. La diferencia entre los dos estados no es el tiempo que llevan: es si alguien firmo.

🚨 **Un supuesto que no dice como se refuta no es un supuesto: es una creencia.** Cada entrada
lleva **como se refuta** y **su disparador** —el momento concreto en que alguien lo va a mirar—.
Sin disparador, el supuesto se queda abierto para siempre porque nadie tiene la obligacion de
volver a el.

🚨 **Un supuesto se valida donde su fallo se distingue de su funcionamiento.** Si el control elegido
da el mismo resultado tanto si el supuesto es cierto como si es falso, ese control no lo valida.

⚠️ **Un supuesto refutado no se borra.** Se marca `Refutado`, con la fecha y con lo que se supo.
Un supuesto reescrito conserva su enunciado anterior recuperable desde el propio archivo.

⚠️ **Un campo nuevo no es retroactivo.** Los `A-XXX` escritos antes de que el campo existiera no lo
llevan, y no se les anade uno inventado a posteriori — se les pone cuando se toquen por otra razon.

🚨 **El indice se escribe a mano, sin generador.** Cada fila enlaza por ancla a su supuesto.

---

## Supuestos

<!--
Plantilla:

### A-XXX - Titulo
| Campo | Valor |
|---|---|
| Fecha | AAAA-MM-DD |
| Estado | Abierto |
| Origen | |
| Dueno | |

- **Supuesto:** que se da por cierto, en una frase.
- **Sobre que se construye encima:** que trabajo depende de que esto sea verdad.
- **Como se refuta:** el control concreto que daria un resultado distinto si el supuesto fuera falso.
- **Disparador:** el momento concreto en que alguien va a mirarlo.
-->
