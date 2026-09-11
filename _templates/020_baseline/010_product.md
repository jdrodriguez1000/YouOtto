# Documento de producto — <NOMBRE DEL PROYECTO>

| Campo | Valor |
|---|---|
| Artefacto | `020_baseline/010_product.md` |
| Etapa que lo produce | `020_baseline`, Paso 4 |
| Estado | `BORRADOR` |
| Abierto | `<AAAA-MM-DD>` |
| Cerrado | `<AAAA-MM-DD, o «—» mientras siga en BORRADOR>` |
| Escrito por | `manager` |

> **Estado:** `BORRADOR` mientras la etapa siga abierta · `CERRADO` cuando se cumpla la condicion de
> salida de `_phases/020_baseline.md` §6.
>
> ⚠️ **Las dos fechas las lee `report_auditor` y las cruza contra el historial de `git`.** No se
> rellenan a posteriori: una fecha declarada que no cuadra con la del commit es un hallazgo, y de
> los caros — deja de poder saberse cuando se supo cada cosa.

> 🚨 **`CERRADO` aqui significa «cerrada su primera version», no «terminado».** Este es un
> **artefacto vivo**: se amplia en cada iteracion de crecimiento, con lo que la construccion vaya
> enseñando. Tratarlo como terminado obliga a defenderlo en vez de corregirlo — y entonces lo que
> aprende el producto no llega nunca al documento que dice como es.

---

## 1. Proposito

`<para que existe este producto, en tres o cuatro lineas — sin nombrar ninguna pantalla, ninguna
tecnologia y ningun plazo>`

---

## 2. El problema

| Campo | Contenido |
|---|---|
| Que problema se resuelve | `<enunciado del problema, no de la solucion>` |
| Quien lo tiene | `<rol o persona concreta — no «la empresa», no «los usuarios»>` |
| Como se resuelve hoy | `<el proceso real de hoy, sin la aplicacion>` |
| Que cuesta hoy | `<tiempo, dinero, errores o trabajo perdido — con numero si lo hay>` |
| Que evidencia lo respalda | `<sesiones del prototipo, entrevistas del descubrimiento, datos del proceso>` |

⚠️ **La ultima fila es la que sostiene a las cuatro de arriba.** Un problema enunciado sin evidencia
detras es una hipotesis que ya paso un Gate sin que nadie lo notara.

---

## 3. Objetivos

Que tiene que conseguir el producto. **No son metricas todavia** —esas estan en §8—: son el
resultado que se busca.

| # | Objetivo | De que `N-XXX` sale |
|---|---|---|
| 1 | `<…>` | `N-XXX` |
| 2 | `<…>` | `N-XXX` |

⚠️ **Un objetivo que no sale de ninguna necesidad no es un objetivo del producto:** es una intencion
de alguien, y conviene saber de quien antes de construir contra ella.

---

## 4. Alcance

🚨 **Las dos listas NO se reescriben aqui.** Viven en `020_baseline/005_scope.md`, que es su unico
original. Aqui va el **resumen** y el puntero; duplicarlas garantiza que dentro de dos meses las dos
copias digan cosas distintas y nadie sepa cual manda.

| | Resumen |
|---|---|
| **Entra al MVP** | `<las capacidades de §2 de 005_scope.md, en una linea cada una>` |
| **NO entra al MVP** | `<las capacidades de §3 de 005_scope.md, en una linea cada una>` |
| **Operacion hibrida** | `<que actores siguen fuera y con que proceso, segun §4 de 005_scope.md>` |

📌 **Original:** `020_baseline/005_scope.md`. Si algo de aqui y algo de alli se contradicen, **manda
el original**, y la contradiccion es un hallazgo.

---

## 5. Propuesta de valor

`<que gana el actor originador que hoy no tiene, dicho desde su lado y no desde el del producto>`

⚠️ **Si la propuesta de valor se puede leer entera sin que aparezca el actor originador, esta escrita
desde el lado equivocado.** «Digitaliza el proceso» describe al producto; «deja de tener que llamar
en horario de oficina» describe lo que gana alguien.

---

## 6. Actores — **solo los del MVP**

🚨 **Aqui no se listan los seis tipos de la taxonomia.** Se listan **los que estan dentro del MVP**,
y ninguno mas. Diseñar para actores que no entran es una de las prohibiciones explicitas de la etapa.

| Tipo de actor | Actor concreto | Que hace en el MVP | De donde sale |
|---|---|---|---|
| `<Generador · Coordinador · Ejecutor · Supervisor · Administrador de Plataforma · Integrador>` | `<el rol o sistema concreto de este producto>` | `<que hace, en una linea>` | `<artefacto de actores del descubrimiento>` |

**Actores que existen y NO estan en el MVP:** `<lista corta>` → su tratamiento esta en
`020_baseline/005_scope.md` §4, y su entrada se justifica en etapas posteriores, no aqui.

---

## 7. Necesidades y restricciones

### 7.1 Necesidades que el MVP atiende

| `N-XXX` | Enunciado | Que capacidad del alcance la atiende |
|---|---|---|
| `N-XXX` | `<copiado del artefacto de necesidades, no reescrito>` | `<capacidad de §2 de 005_scope.md>` |

⚠️ **Los enunciados se copian, no se reescriben.** Reescribir una necesidad al traerla aqui es la
forma silenciosa de ampliar el alcance: cambia una palabra y con ella lo que hay que construir.

### 7.2 Restricciones vigentes

| `C-XXX` | Restriccion | Que limita en el MVP |
|---|---|---|
| `C-XXX` | `<enunciado, copiado de _persistence/constraints.md>` | `<…>` |

### 7.3 Supuestos sobre los que se apoya

| `A-XXX` | Supuesto | Como se validaria | Que pasa si cae |
|---|---|---|---|
| `A-XXX` | `<…>` | `<…>` | `<…>` |

🚨 **La ultima columna es la unica que importa cuando el supuesto se cae**, y es la que nadie escribe
si no esta la casilla. Un supuesto sin consecuencia escrita se descubre roto el dia que ya cuesta.

---

## 8. Criterios generales de exito

🚨 **Estos son los que el Gate siguiente va a comprobar, y por eso se escriben AHORA**, cuando
todavia no hay resultados que mirar. Elegir la metrica despues de ver el resultado no es medir: es
elegir la respuesta.

| # | Criterio | Como se mide | Umbral | Cuando se mide | De donde sale el umbral |
|---|---|---|---|---|---|
| 1 | `<adopcion real del actor originador>` | `<la magnitud concreta>` | `<el numero>` | `<cuanto tiempo despues del lanzamiento>` | `<el dato de hoy, el del prototipo, o «elegido a criterio → y por quien»>` |
| 2 | `<utilizacion recurrente>` | `<…>` | `<…>` | `<…>` | `<…>` |

⚠️ **La ultima columna es la que hace auditable a la tabla.** Un umbral sin procedencia se vuelve
indiscutible: nadie puede decir que es demasiado alto ni demasiado bajo, porque nadie sabe contra
que se puso. Si se eligio a criterio, **eso mismo se escribe** — un criterio declarado como criterio
se puede discutir; uno disfrazado de dato, no.

⛔ **Y ningun umbral se ajusta despues de medir.** Si al medir resulta mal elegido, se registra la
correccion con su fecha y su motivo, y **el numero original se queda escrito**. Un umbral que cambia
para encajar con el resultado convierte al Gate en un tramite.

---

## 9. Comprobacion antes de cerrar este archivo

Esto **no** es la condicion de salida de la etapa —esa esta en `_phases/020_baseline.md` §6 y abarca
los nueve artefactos—. Esto es solo lo que le toca a este archivo.

- [ ] §2 tiene evidencia escrita, no solo enunciado.
- [ ] **Cada** objetivo de §3 nombra su `N-XXX`.
- [ ] §4 **no duplica** las listas del alcance: resume y apunta al original.
- [ ] §6 lista **solo** actores del MVP, y dice cuales quedaron fuera.
- [ ] Los enunciados de §7.1 estan **copiados** del artefacto de necesidades, palabra por palabra.
- [ ] Cada `A-XXX` de §7.3 dice **que pasa si cae**.
- [ ] **Cada** criterio de §8 tiene umbral, momento de medicion y **procedencia del umbral**.
- [ ] **No queda ni un solo `<` en el archivo** — ningun hueco sin rellenar.
- [ ] La seccion «Guia de llenado» de abajo **esta borrada**.
- [ ] La cabecera dice `CERRADO` y tiene fecha de cierre.

Cuatro se comprueban desde fuera, sin leer el archivo entero:

```bash
grep -n "<" 020_baseline/010_product.md                  # debe no devolver nada
grep -n "Guia de llenado" 020_baseline/010_product.md    # debe no devolver nada
grep -n "^| Estado |" 020_baseline/010_product.md        # debe decir CERRADO
sed -n '/^## 8\./,/^## 9\./p' 020_baseline/010_product.md | grep -c '^| '
```

📌 **La cuarta cuenta las filas de §8 incluyendo la cabecera y el separador**, asi que devuelve dos
mas que el numero de criterios. Se publica tal cual y se dice cuantos son: un recuento maquillado
deja de ser reproducible.

🚨 **La salida cruda de las cuatro ordenes va al registro**, no la conclusion.

---
---

## Guia de llenado — ⚠️ BORRAR esta seccion al cerrar el artefacto

> Existe para escribir el archivo. **No sobrevive al cierre de la etapa.** Si se queda, quien lea
> mañana no puede distinguir lo que decidio el proyecto de lo que traia la plantilla — y lo tratara
> como decision.

### La pregunta que hace todo el trabajo

> **¿Contra que se puso este numero?**

Vale para el umbral de §8, para el coste de §2 y para el volumen que sostiene el alcance. Un numero
sin procedencia se comporta como un hecho y no lo es.

### Por que este documento se escribe DESPUES del alcance

Porque su §4 es un resumen del alcance, no su origen. Escribirlo antes obliga a inventar las dos
listas aqui y despues a rehacerlas — y, peor, deja dos versiones circulando.

### Ejemplo de una fila de §8

*(el ejemplo es de una app de recogida de reciclaje: otro dominio, a proposito, para que no se
confunda con el proyecto que se este escribiendo)*

| # | Criterio | Como se mide | Umbral | Cuando se mide | De donde sale el umbral |
|---|---|---|---|---|---|
| 1 | Los clientes solicitan recogidas por la aplicacion en vez de por telefono | solicitudes creadas en la aplicacion / solicitudes totales del mes | ≥ 60 % | al cerrar el segundo mes de uso real | hoy el 100 % entra por telefono; 60 % es el punto en que la analista deja de necesitar la hoja de calculo como registro principal — elegido a criterio con la analista, no medido |

📌 **Fijate en que la ultima celda dice que parte es dato y que parte es criterio.** Esa mezcla es lo
normal; lo que no es normal es esconderla.

### Errores que esta plantilla existe para evitar

| Error | Como se ve | Que hacer |
|---|---|---|
| Duplicar el alcance | §4 con las dos listas escritas enteras | resumir y apuntar al original |
| Propuesta de valor desde el producto | «digitaliza el proceso» | reescribirla desde lo que gana el actor |
| Listar los seis actores | §6 con actores que no estan en el MVP | dejar solo los del MVP; los demas, en el alcance |
| Reescribir una necesidad al copiarla | el enunciado de §7.1 no coincide con el original | copiar palabra por palabra |
| Criterio sin umbral | «buena adopcion» | un numero, un momento y una procedencia |
| Umbral sin procedencia | «≥ 60 %» y nada mas | decir contra que se puso, aunque sea criterio |
| Dar el documento por terminado | se defiende en vez de corregirse | es un artefacto vivo: se amplia en cada iteracion |

### Lo que esta etapa tiene PROHIBIDO, y aqui se cuela solo

Escribir codigo de producto · especificar lo que no entra al MVP · diseñar para actores que no estan
en el MVP · dar los documentos por terminados · dar por hecho que el Gate autorizo mas de lo que
autorizo.

📌 Definiciones: `_methodology/000_method.md` §34, §39, §48 y §51.
📌 Procedimiento: `_phases/020_baseline.md` §4 Paso 4.
📌 El original del alcance: `020_baseline/005_scope.md`.
📌 Los `N-XXX`, `C-XXX` y `A-XXX` se copian de sus originales; los dos ultimos viven en
`_persistence/constraints.md` y `_persistence/assumptions.md`.
