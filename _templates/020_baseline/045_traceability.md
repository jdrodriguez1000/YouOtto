# Trazabilidad — <NOMBRE DEL PROYECTO>

| Campo | Valor |
|---|---|
| Artefacto | `020_baseline/045_traceability.md` |
| Etapa que lo produce | `020_baseline`, Paso 10 |
| Estado | `BORRADOR` |
| Abierto | `<AAAA-MM-DD>` |
| Cerrado | `<AAAA-MM-DD, o «—» mientras siga en BORRADOR>` |
| Escrito por | `manager` |

> **Estado:** `BORRADOR` mientras la etapa siga abierta · `CERRADO` cuando se cumpla la condicion de
> salida de `_phases/020_baseline.md` §6.
>
> ⚠️ **Las dos fechas las lee `report_auditor` y las cruza contra el historial de `git`.**

> 🚨 **Este archivo se escribe EL ULTIMO de la etapa**, cuando features y escenarios ya estan
> cerrados. Escribirlo antes obliga a rehacerlo entero, y peor: escrito a la vez que aquellos, deja
> de ser un control y pasa a ser una copia.

---

## 0. La cadena, y hasta donde llega hoy

La cadena completa del metodo:

```text
NECESIDAD → FEATURE → ESCENARIO → UNIDAD INCREMENTAL → TAREA → IMPLEMENTACION → PRUEBA
```

🚨 **Esta etapa cierra los TRES PRIMEROS eslabones, y ninguno mas.** Las unidades de construccion y
sus tareas todavia no existen — escribirlas aqui seria inventar el plan de construccion antes de
tener arquitectura probada.

```text
N-XXX → FT-XXX → SC-XXX     ← hasta aqui llega la baseline
                    ↑
                    └── el resto se cierra en las etapas de construccion
```

⚠️ **Este archivo no crea informacion: la deriva.** Todo lo que hay aqui sale de
`020_baseline/005_scope.md`, `015_features.md` y `020_scenarios.md`. Si una fila de aqui dice algo
que no dice su original, **manda el original**, y la diferencia es un hallazgo.

---

## 1. Hacia adelante — de la necesidad al escenario

Una fila por `N-XXX` del alcance. Responde: **¿como se atiende esta necesidad?**

| `N-XXX` | Enunciado | Features | Escenarios | ¿Completa? |
|---|---|---|---|---|
| `N-XXX` | `<copiado, no reescrito>` | `FT-XXX`, `FT-XXX` | `SC-XXX`, `SC-XXX` | `<SI · NO — que falta>` |

🚨 **Un «NO» aqui es una necesidad que entro al alcance y que nadie va a construir.** O se le escribe
lo que falta, o sale del alcance con su razon — pero no se queda en la lista pareciendo atendida.

---

## 2. Hacia atras — del escenario a la necesidad

Una fila por `SC-XXX`. Responde: **¿por que estamos construyendo esto?**

| `SC-XXX` | Feature | `N-XXX` | ¿La `N-XXX` esta en el alcance? |
|---|---|---|---|
| `SC-XXX` | `FT-XXX` | `N-XXX` | `<SI · NO>` |

🔑 **Esta direccion es la que sirve de control**, y es la unica de toda la etapa que se puede
comprobar mecanicamente: se recorre el artefacto de features y se busca una necesidad en cada linea.

> 🚨 **Cada feature sale de una `N-XXX`. Sin excepcion. Cero features huerfanas.**

⚠️ **Un «NO» en la ultima columna no se resuelve añadiendo la necesidad al alcance.** El alcance manda
sobre las features, nunca al reves: se quita la feature, o se escala el cambio de alcance segun §5 de
`020_baseline/005_scope.md`.

---

## 3. Los dos recuentos

Las dos direcciones tienen que cuadrar. Aqui van los numeros, **derivados** y no contados a mano.

| Magnitud | Numero | Orden que lo produce |
|---|---|---|
| Necesidades en el alcance | `<n>` | `<la orden literal>` |
| Necesidades con al menos una feature | `<n>` | `<la orden literal>` |
| Features declaradas | `<n>` | `<la orden literal>` |
| Features con `N-XXX` escrita | `<n>` | `<la orden literal>` |
| Escenarios declarados | `<n>` | `<la orden literal>` |
| Features con al menos un escenario | `<n>` | `<la orden literal>` |

**Las ordenes y su salida cruda:**

```text
$ <orden literal>
<salida cruda>

$ <orden literal>
<salida cruda>
```

🚨 **Los numeros se publican tal como salen, cuadren o no.** Un recuento ajustado a mano se equivoca
justo donde nadie lo vuelve a mirar, y ademas deja de ser reproducible: quien lo reejecute obtiene
otra cosa y no puede saber si se equivoco el registro o cambio el repositorio.

⚠️ **Y un numero escrito sin la orden que lo produjo no es evidencia.** La tercera columna no es
adorno: sin ella, contrastar este archivo cuesta lo mismo que rehacerlo entero.

**Cuadran si:**

- necesidades en el alcance **=** necesidades con al menos una feature *(nadie desatendido)*
- features declaradas **=** features con `N-XXX` escrita *(cero huerfanas)*
- features declaradas **=** features con al menos un escenario *(cero titulos sin comportamiento)*

**Si alguno no cuadra:**

| Cual no cuadra | Que significa | Que se hace |
|---|---|---|
| `<…>` | `<…>` | `<…>` |

---

## 4. Los eslabones que NO se cierran aqui

**No se borra.** Existe para que dentro de dos meses nadie lea este archivo como una cadena rota.

| Eslabon | Por que no ahora | Quien lo cierra |
|---|---|---|
| Unidad incremental | no existe plan de construccion hasta que la arquitectura se pruebe | la etapa siguiente |
| Tarea | cuelga de la unidad | las etapas de construccion |
| Implementacion y prueba | no hay codigo de producto en esta etapa | las etapas de construccion |

---

## 5. Comprobacion antes de cerrar este archivo

- [ ] Este archivo se escribio **despues** de cerrar features y escenarios.
- [ ] §1 tiene una fila por **cada** `N-XXX` del alcance.
- [ ] §2 tiene una fila por **cada** `SC-XXX` declarado.
- [ ] Ningun «NO» quedo sin resolver en §1 ni en §2.
- [ ] Los seis numeros de §3 estan **derivados**, cada uno con su orden y su salida cruda.
- [ ] Las tres igualdades de §3 se cumplen, o su fila de excepcion esta escrita.
- [ ] Ninguna fila de aqui contradice a su original.
- [ ] **No queda ni un solo `<` en el archivo** — ningun hueco sin rellenar.
- [ ] La seccion «Guia de llenado» de abajo **esta borrada**.
- [ ] La cabecera dice `CERRADO` y tiene fecha de cierre.

Las mecanicas se comprueban desde fuera:

```bash
grep -n "<" 020_baseline/045_traceability.md                # debe no devolver nada
grep -n "Guia de llenado" 020_baseline/045_traceability.md  # debe no devolver nada
grep -n "^| Estado |" 020_baseline/045_traceability.md      # debe decir CERRADO
grep -c "^### FT-" 020_baseline/015_features.md             # features declaradas
grep -c "^| Sale de |" 020_baseline/015_features.md         # features con N-XXX escrita
grep -c "^#### SC-" 020_baseline/020_scenarios.md           # escenarios declarados
```

🚨 **Las tres ultimas son EL control de la etapa.** La cuarta y la quinta tienen que devolver el mismo
numero: si la quinta es menor, hay una feature huerfana. Los tres numeros van al registro **tal como
salen**, aunque coincidan.

⚠️ **Y esas ordenes prueban que el campo existe, no que su contenido sea cierto.** Que cada `N-XXX`
citada exista de verdad en el artefacto de necesidades se comprueba **a mano, una por una**, y eso se
declara como comprobacion manual — no se cuela dentro del recuento.

---
---

## Guia de llenado — ⚠️ BORRAR esta seccion al cerrar el artefacto

> Existe para escribir el archivo. **No sobrevive al cierre de la etapa.**

### La pregunta que hace todo el trabajo

> **¿Por que estamos construyendo esto?**

Es la direccion hacia atras, y es la que este archivo existe para poder responder. La direccion hacia
adelante —«¿como se implemento esta necesidad?»— se responde sola cuando el producto ya existe; la de
atras, no: si no se escribio, se pierde.

### Por que hacen falta las dos direcciones

| Direccion | Que encuentra | Que NO encuentra |
|---|---|---|
| Hacia adelante | necesidades desatendidas | features que nadie pidio |
| Hacia atras | features huerfanas | necesidades olvidadas |

Cada una es ciega justo donde la otra ve. Escribir solo una deja pasar la mitad de los defectos, y la
mitad que deja pasar es siempre la que menos se nota: una feature de mas **funciona**, y por eso nadie
la señala.

### Ejemplo de una fila de §2

*(el ejemplo es de una app de recogida de reciclaje: otro dominio, a proposito)*

| `SC-XXX` | Feature | `N-XXX` | ¿La `N-XXX` esta en el alcance? |
|---|---|---|---|
| `SC-001` | `FT-001` Solicitar recogida | `N-001` Un cliente no tiene forma de solicitar una recogida sin llamar por telefono | SI |
| `SC-004` | `FT-004` Exportar historico mensual | — | **NO — feature huerfana** |

📌 **La segunda fila es lo que este archivo existe para encontrar.** «Exportar historico» funcionaria
perfectamente; nadie se quejaria nunca de ella. Y es alcance que entro sin que nadie lo decidiera.

### Errores que esta plantilla existe para evitar

| Error | Como se ve | Que hacer |
|---|---|---|
| Escribirlo a la vez que las features | las tablas coinciden porque se copiaron juntas | escribirlo al final, derivandolo |
| Solo una direccion | §1 rellena y §2 vacia, o al reves | las dos, o el control es medio control |
| Recuento contado a mano | numeros sin orden en la tercera columna | derivarlos, con orden y salida cruda |
| Numero ajustado para que cuadre | los tres pares coinciden sospechosamente | publicar lo que salga y explicar la diferencia |
| Resolver una huerfana ampliando el alcance | la `N-XXX` aparece en el alcance despues de la feature | va al reves: el alcance manda |
| Cerrar eslabones que no toca | filas de unidades o tareas | §4; esta etapa cierra tres |
| Contradecir al original | el enunciado de aqui no coincide con el de alli | copiar, no reescribir |

### Lo que esta etapa tiene PROHIBIDO, y aqui se cuela solo

Escribir unidades de construccion o tareas · una feature sin necesidad detras · dar los documentos
por terminados · evaluar el propio trabajo.

📌 Definiciones: `_methodology/000_method.md` §45, §46 y §47.
📌 Procedimiento: `_phases/020_baseline.md` §4 Paso 10, y §6.
📌 Los originales: `020_baseline/005_scope.md`, `015_features.md` y `020_scenarios.md`.
