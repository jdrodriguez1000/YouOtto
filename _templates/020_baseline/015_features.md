# Features — <NOMBRE DEL PROYECTO>

| Campo | Valor |
|---|---|
| Artefacto | `020_baseline/015_features.md` |
| Etapa que lo produce | `020_baseline`, Paso 5 |
| Estado | `BORRADOR` |
| Abierto | `<AAAA-MM-DD>` |
| Cerrado | `<AAAA-MM-DD, o «—» mientras siga en BORRADOR>` |
| Escrito por | `manager` |

> **Estado:** `BORRADOR` mientras la etapa siga abierta · `CERRADO` cuando se cumpla la condicion de
> salida de `_phases/020_baseline.md` §6.
>
> ⚠️ **Las dos fechas las lee `report_auditor` y las cruza contra el historial de `git`.** No se
> rellenan a posteriori: una fecha declarada que no cuadra con la del commit es un hallazgo.

---

## 0. 🚨 Antes de escribir la primera feature

**El codigo de feature tiene que estar declarado en la tabla «Codigos» de `project.md`, con su
`D-XXX`.** No lo declara esta plantilla ni la guia de metodo: la guia **propone** un juego de
prefijos, y lo que este proyecto usa es lo que diga esa tabla.

⚠️ **Y se contrasta contra los codigos que el registro ya usa, uno por uno.** Un prefijo que
significa dos cosas segun el archivo en el que aparece hace ilegible justo lo que la trazabilidad
existe para poder leer. Si uno choca, **se cambia el del metodo, nunca el del registro**: el registro
ya tiene historia escrita y renombrarlo reescribiria trabajo ya auditado.

📌 En esta plantilla el codigo de feature se escribe `FT-XXX`, que es lo que propone
`_methodology/000_method.md` §46. **Si el proyecto adopto otro prefijo, se sustituye en todo el
archivo antes de escribir la primera ficha.**

> Un codigo de producto que aparece en un archivo antes que en la tabla de `project.md` es un
> **desfase**, no una novedad.

---

## 1. La regla que gobierna este archivo

> 🚨 **Cada feature sale de una `N-XXX`. Sin excepcion.**

Es la unica comprobacion de toda la etapa que se puede hacer mecanicamente: se recorre este archivo
y se busca una necesidad en cada ficha. **Una feature sin necesidad detras es alcance que entro sin
que nadie lo decidiera.**

⚠️ **Feature y unidad incremental de construccion no son sinonimos**, y confundirlos aqui deforma el
plan entero: una unidad puede contener una feature, varias, o parte de una grande; y una feature
puede necesitar varias unidades. **Las unidades no se escriben en esta etapa** ni en este archivo.

---

## 2. Las features

Una ficha por feature. Se numeran `FT-001`, `FT-002`, … y **no se reutiliza un numero** aunque la
feature se descarte despues.

### FT-001 · `<titulo corto, cinco palabras como maximo>`

| Campo | Contenido |
|---|---|
| Que hace | `<la capacidad, en una frase, desde el lado del actor>` |
| Sale de | `N-XXX` — `<enunciado de la necesidad, copiado>` |
| Actor | `<el actor del MVP que la usa — tiene que estar en §6 del documento de producto>` |
| Capacidad del alcance | `<la linea de §2 de 005_scope.md a la que pertenece>` |
| Escenarios | `SC-XXX`, `SC-XXX` — `<se rellenan al escribir 020_scenarios.md>` |
| Estado | `REGISTRADA` |

**Reglas de negocio que la gobiernan:** `<las que ya se conocen; el detalle va a la especificacion>`

<!-- Copia el bloque completo para FT-002, FT-003, … -->

---

## 3. Trazabilidad hacia atras — el control

Una fila por feature. **Esta tabla es la que se audita**, y se deriva de §2: no se escribe a mano
por separado.

| Feature | Sale de | ¿Esa `N-XXX` esta en el alcance? |
|---|---|---|
| `FT-001` | `N-XXX` | `<SI · NO → la feature no entra>` |

🚨 **Un «NO» en la tercera columna no se resuelve añadiendo la necesidad al alcance.** Se resuelve
quitando la feature, o escalando el cambio de alcance segun §5 de `020_baseline/005_scope.md`. La
direccion importa: el alcance manda sobre las features, nunca al reves.

---

## 4. Trazabilidad hacia adelante — la otra mitad

Una fila por **cada** `N-XXX` que entra al MVP. Esta es la comprobacion inversa: la de arriba
encuentra features huerfanas, esta encuentra **necesidades desatendidas**.

| `N-XXX` | Features que la atienden | ¿Al menos una? |
|---|---|---|
| `N-XXX` | `FT-XXX`, `FT-XXX` | `<SI · NO>` |

⚠️ **Un «NO» aqui es una necesidad que entro al alcance y que nadie va a construir.** O se le escribe
su feature, o sale del alcance con su razon — pero no se queda en la lista pareciendo atendida.

---

## 5. Lo que quedo fuera de las features

Capacidades del alcance que **no** llegaron a feature, y por que. **No se borra:** sin esta tabla,
la diferencia entre §2 de `005_scope.md` y §2 de aqui parece un descuido en vez de una decision.

| Capacidad del alcance | Por que no tiene feature | Que se hizo |
|---|---|---|
| `<…>` | `<…>` | `<volvio a la lista del «no» · se fusiono con FT-XXX · escalado>` |

---

## 6. Comprobacion antes de cerrar este archivo

Esto **no** es la condicion de salida de la etapa —esa esta en `_phases/020_baseline.md` §6—. Esto
es solo lo que le toca a este archivo.

- [ ] El codigo de feature **esta declarado** en la tabla «Codigos» de `project.md`, con su `D-XXX`.
- [ ] Ese codigo **no colisiona** con ningun prefijo que el registro ya use.
- [ ] Hay **al menos una** feature registrada.
- [ ] **Cada** ficha de §2 nombra una `N-XXX`. Cero features huerfanas.
- [ ] **Cada** `N-XXX` del alcance aparece en §4 con al menos una feature.
- [ ] §3 y §4 se derivaron de §2, no se escribieron por separado.
- [ ] Ninguna ficha describe una unidad de construccion en vez de una feature.
- [ ] Las capacidades del alcance sin feature estan en §5, no borradas.
- [ ] **No queda ni un solo `<` en el archivo** — ningun hueco sin rellenar.
- [ ] La seccion «Guia de llenado» de abajo **esta borrada**.
- [ ] La cabecera dice `CERRADO` y tiene fecha de cierre.

Las mecanicas se comprueban desde fuera, sin leer el archivo entero:

```bash
grep -n "<" 020_baseline/015_features.md                 # debe no devolver nada
grep -n "Guia de llenado" 020_baseline/015_features.md   # debe no devolver nada
grep -n "^| Estado |" 020_baseline/015_features.md       # debe decir CERRADO
grep -c "^### FT-" 020_baseline/015_features.md          # numero de features
grep -c "^| Sale de |" 020_baseline/015_features.md      # debe coincidir con el anterior
```

🚨 **Las dos ultimas ordenes son EL control de la etapa, y por eso se publican juntas.** Si el
segundo numero es menor que el primero, hay una ficha sin `Sale de` — es decir, una feature huerfana.
Los dos numeros van al registro **tal como salen**, aunque coincidan: un control cuyo resultado no se
publica no se distingue de un control que no se corrio.

⚠️ **Y esas dos ordenes prueban que el campo existe, no que su contenido sea cierto.** Que una `N-XXX`
este bien escrita se comprueba a mano contra el artefacto de necesidades, una por una — y eso se
declara como comprobacion manual, no se cuela dentro del recuento.

---
---

## Guia de llenado — ⚠️ BORRAR esta seccion al cerrar el artefacto

> Existe para escribir el archivo. **No sobrevive al cierre de la etapa.** Si se queda, quien lea
> mañana no puede distinguir lo que decidio el proyecto de lo que traia la plantilla.

### La pregunta que hace todo el trabajo

> **¿De que necesidad sale esto?**

Si la respuesta tarda en llegar, o llega como «es obvio que hace falta», la feature todavia no tiene
razon trazable. **Nada se construye sin una razon trazable.**

### Como distinguir una feature de una unidad de construccion

| | Feature | Unidad incremental |
|---|---|---|
| Responde a | ¿que sabe hacer el producto? | ¿que se construye en este incremento? |
| Vive en | este archivo | las etapas de construccion, **no aqui** |
| Se mide por | capacidad entregada al actor | trabajo atravesando todas las capas |

Ejemplo: la feature *«Programar recogida recurrente»* puede necesitar cuatro unidades —crear,
modificar, cancelar, gestionar excepciones—; y una unidad *«Solicitar recogida»* puede atravesar tres
features —material, ubicacion, fecha—. **La relacion es de muchos a muchos, y por eso no se pueden
escribir en el mismo archivo sin confundirlas.**

### Ejemplo de una ficha completa

*(el ejemplo es de una app de recogida de reciclaje: otro dominio, a proposito)*

### FT-001 · Solicitar recogida

| Campo | Contenido |
|---|---|
| Que hace | El cliente pide que pasen a recoger material reciclable, indicando que tiene, donde y cuando. |
| Sale de | `N-001` — Un cliente no tiene forma de solicitar una recogida sin llamar por telefono en horario de oficina. |
| Actor | Generador · cliente (contacto operativo de la empresa recolectada) |
| Capacidad del alcance | «Registrar una solicitud de recogida sin intervencion telefonica» |
| Escenarios | `SC-001` (camino feliz), `SC-002` (sin material seleccionado) |
| Estado | `REGISTRADA` |

**Reglas de negocio que la gobiernan:** solo dias habiles; una solicitud abierta por direccion a la vez.

### Errores que esta plantilla existe para evitar

| Error | Como se ve | Que hacer |
|---|---|---|
| Feature huerfana | `Sale de` vacio o «varias» | una `N-XXX` concreta, o la feature no entra |
| Feature que es una unidad | «Crear la tabla de solicitudes» | eso es trabajo, no capacidad; fuera de este archivo |
| Feature que es una pantalla | «Pantalla de solicitud» | enunciar la capacidad, no el sitio donde se ejerce |
| Necesidad desatendida | §4 con un «NO» sin resolver | escribirle su feature, o sacarla del alcance con razon |
| Añadir la necesidad para justificar la feature | §3 se arregla tocando el alcance | va al reves: el alcance manda |
| Escribir el codigo antes de declararlo | `FT-001` existe y `project.md` no lo lista | declararlo primero, con su `D-XXX` |

### Lo que esta etapa tiene PROHIBIDO, y aqui se cuela solo

Escribir unidades de construccion o tareas · especificar lo que no entra al MVP · una feature sin
necesidad detras · escribir un codigo de producto antes de declararlo en `project.md`.

📌 Definiciones: `_methodology/000_method.md` §35, §42, §43, §45, §46 y §47.
📌 Procedimiento: `_phases/020_baseline.md` §4 Pasos 3, 5 y 10.
📌 Los escenarios de cada feature: `020_baseline/020_scenarios.md`.
📌 La cadena completa, comprobada en los dos sentidos: `020_baseline/045_traceability.md`.
