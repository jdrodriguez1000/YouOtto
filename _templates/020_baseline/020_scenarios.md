# Escenarios — <NOMBRE DEL PROYECTO>

| Campo | Valor |
|---|---|
| Artefacto | `020_baseline/020_scenarios.md` |
| Etapa que lo produce | `020_baseline`, Paso 5 |
| Estado | `BORRADOR` |
| Abierto | `<AAAA-MM-DD>` |
| Cerrado | `<AAAA-MM-DD, o «—» mientras siga en BORRADOR>` |
| Escrito por | `manager` |

> **Estado:** `BORRADOR` mientras la etapa siga abierta · `CERRADO` cuando se cumpla la condicion de
> salida de `_phases/020_baseline.md` §6.
>
> ⚠️ **Las dos fechas las lee `report_auditor` y las cruza contra el historial de `git`.**

---

## 0. 🚨 Antes de escribir el primer escenario

**El codigo de escenario tiene que estar declarado en la tabla «Codigos» de `project.md`, con su
`D-XXX`**, y contrastado contra los prefijos que el registro ya usa. Si choca, **se cambia el del
metodo, nunca el del registro**.

📌 En esta plantilla se escribe `SC-XXX`, que es lo que propone `_methodology/000_method.md` §46. Si
el proyecto adopto otro prefijo, se sustituye en todo el archivo antes de la primera ficha.

---

## 1. La regla que gobierna este archivo

> 🚨 **Un escenario se escribe en la notacion de comportamiento —contexto, accion, resultado
> esperado—, nunca en prosa.**

La notacion no es una formalidad: es lo que permite que el escenario se convierta despues en una
prueba sin reinterpretarlo. Un escenario en prosa hay que traducirlo, y en la traduccion se decide
—sin que nadie lo note— lo que el escenario no decia.

🔑 **Y los escenarios del camino feliz NO se inventan: se copian.** El recorrido que los usuarios
completaron en las sesiones del prototipo **es** el primer escenario. Es la unica parte de esta etapa
que no se decide.

⚠️ **Un escenario no es un caso de prueba.** El caso de prueba llega en las etapas de construccion,
con su propio codigo. Aqui se escribe **que comportamiento se espera**, no como se comprobara.

---

## 2. Los escenarios

Una ficha por escenario, agrupados por feature. Se numeran `SC-001`, `SC-002`, … de forma **continua
en todo el archivo** —no se reinicia por feature—, y **no se reutiliza un numero**.

### FT-XXX · `<titulo de la feature>`

#### SC-001 · `<titulo corto del escenario>`

| Campo | Contenido |
|---|---|
| Feature | `FT-XXX` |
| Tipo | `<camino feliz · alternativo · de error>` |
| Origen | `<sesion NNN del prototipo · derivado de la regla … · nuevo, y por que>` |

```gherkin
Escenario: <titulo corto del escenario>
  Dado <el contexto de partida — estado del sistema y del actor>
  Cuando <la accion que ejecuta el actor, una sola>
  Entonces <el resultado observable esperado>
```

**Reglas que ejercita:** `<las reglas de negocio que este escenario pone a prueba>`

<!-- Copia el bloque completo para SC-002, SC-003, … -->

---

## 3. El camino feliz, y de donde sale cada paso

🚨 **Esta tabla es la que hace comprobable que el camino feliz se copio y no se invento.** Una fila
por paso del escenario del camino feliz.

| Paso del escenario | Que hizo el usuario en la sesion | En que sesion | ¿Coincide? |
|---|---|---|---|
| `<Dado …>` | `<lo observado, copiado del registro de la sesion>` | `<sesion NNN>` | `<SI · NO — y que se cambio>` |
| `<Cuando …>` | `<…>` | `<…>` | `<…>` |
| `<Entonces …>` | `<…>` | `<…>` | `<…>` |

⚠️ **Un «NO» no invalida el escenario, pero tiene que estar escrito.** Puede haber una razon buena
para apartarse de lo observado; lo que no puede es que el apartamiento pase inadvertido y que dentro
de tres meses el escenario se lea como si lo hubieran validado usuarios reales.

⚠️ **Si el prototipo no dejo registro por paso, esta tabla no se rellena de memoria.** Se declara
`SIN REGISTRO POR PASO` con el motivo, y el escenario del camino feliz pasa a ser **derivado**, no
copiado — que es una cosa distinta y mas debil.

---

## 4. Cobertura por feature

Una fila por feature. Se deriva de §2, no se escribe por separado.

| Feature | Escenarios | ¿Tiene camino feliz? |
|---|---|---|
| `FT-XXX` | `SC-XXX`, `SC-XXX` | `<SI · NO>` |

🚨 **Una feature sin escenario no es una feature especificada: es un titulo.** Un «NO» en la ultima
columna se resuelve escribiendo el escenario, no dandolo por evidente.

⚠️ **Cuantos escenarios alternativos y de error se escriben aqui es una decision de alcance, no de
completitud.** «Suficiente es lo que hace falta para construir el esqueleto que camina y la PRIMERA
unidad incremental.» Todo lo que se escriba mas alla se escribira **antes de saber**, y habra que
rehacerlo cuando la primera unidad enseñe algo.

---

## 5. Escenarios que NO se escriben todavia

Lo que se dejo deliberadamente fuera, y cuando entra. **No se borra:** sin esta tabla, la ausencia
de un escenario obvio parece un olvido en vez de una decision.

| Escenario que falta | Por que no ahora | Cuando se escribe |
|---|---|---|
| `<…>` | `<pertenece a una capacidad de la lista del «no» · no hace falta para la primera unidad>` | `<…>` |

---

## 6. Comprobacion antes de cerrar este archivo

- [ ] El codigo de escenario **esta declarado** en la tabla «Codigos» de `project.md`, con su `D-XXX`.
- [ ] **Cada** ficha de §2 nombra su `FT-XXX`.
- [ ] **Cada** escenario esta en la notacion de comportamiento, ninguno en prosa.
- [ ] Ningun escenario tiene mas de un `Cuando`.
- [ ] §3 esta rellena contra el registro de las sesiones, o declara `SIN REGISTRO POR PASO`.
- [ ] **Cada** feature de `015_features.md` aparece en §4 con al menos un escenario.
- [ ] **Cada** feature tiene su escenario de camino feliz.
- [ ] Los escenarios aplazados estan en §5, no borrados.
- [ ] La lista de `Escenarios` de cada ficha de `015_features.md` **quedo rellenada** con los codigos
      de aqui.
- [ ] **No queda ni un solo `<` en el archivo** — ningun hueco sin rellenar.
- [ ] La seccion «Guia de llenado» de abajo **esta borrada**.
- [ ] La cabecera dice `CERRADO` y tiene fecha de cierre.

Las mecanicas se comprueban desde fuera:

```bash
grep -n "<" 020_baseline/020_scenarios.md                # debe no devolver nada
grep -n "Guia de llenado" 020_baseline/020_scenarios.md  # debe no devolver nada
grep -n "^| Estado |" 020_baseline/020_scenarios.md      # debe decir CERRADO
grep -c "^#### SC-" 020_baseline/020_scenarios.md        # numero de escenarios
grep -c "^  Cuando " 020_baseline/020_scenarios.md       # debe coincidir con el anterior
grep -c "^| Feature |" 020_baseline/020_scenarios.md     # debe coincidir con el primero
```

📌 **La quinta orden vale por partida doble:** si devuelve **menos** que el numero de escenarios, hay
alguno sin accion; si devuelve **mas**, hay alguno con dos acciones — y un escenario con dos `Cuando`
es dos escenarios que nadie separo.

🚨 **Los tres numeros se publican tal como salen, coincidan o no.** Un control cuyo resultado no se
publica no se distingue de un control que no se corrio.

---
---

## Guia de llenado — ⚠️ BORRAR esta seccion al cerrar el artefacto

> Existe para escribir el archivo. **No sobrevive al cierre de la etapa.**

### La pregunta que hace todo el trabajo

> **¿Esto se observo, o lo estamos suponiendo?**

Vale para cada paso del camino feliz. Lo observado es la parte mas barata y mas solida de esta etapa;
confundirla con lo supuesto la desperdicia entera.

### La notacion, y por que tres partes y no dos

| Parte | Que fija | Si falta |
|---|---|---|
| **Dado** | el estado de partida | el escenario pasa o falla segun con que se ejecute, y nadie sabe por que |
| **Cuando** | la accion, **una sola** | dos acciones en una ficha son dos escenarios sin separar |
| **Entonces** | el resultado **observable** | no se puede comprobar; queda una intencion |

⚠️ **«Entonces el sistema procesa correctamente la solicitud» no es observable.** «Entonces la
solicitud queda registrada con estado *pendiente* y el cliente recibe su numero» si.

### Ejemplo de una ficha completa

*(el ejemplo es de una app de recogida de reciclaje: otro dominio, a proposito)*

#### SC-001 · Solicitud de recogida completada sin ayuda

| Campo | Contenido |
|---|---|
| Feature | `FT-001` |
| Tipo | camino feliz |
| Origen | sesiones 001, 002, 004 y 005 del prototipo — recorrido completado con exito autonomo |

```gherkin
Escenario: Solicitud de recogida completada sin ayuda
  Dado un cliente identificado con al menos una direccion registrada
  Cuando solicita una recogida indicando material, direccion y fecha habil
  Entonces la solicitud queda registrada con estado «pendiente» y el cliente ve su numero de solicitud
```

**Reglas que ejercita:** solo dias habiles; una solicitud abierta por direccion a la vez.

### Errores que esta plantilla existe para evitar

| Error | Como se ve | Que hacer |
|---|---|---|
| Escenario en prosa | un parrafo describiendo lo que pasa | reescribir en las tres partes |
| Dos acciones en un escenario | dos `Cuando`, o un `Cuando … y luego …` | partirlo en dos escenarios |
| Resultado no observable | «procesa correctamente» | decir que se puede ver o consultar despues |
| Camino feliz inventado | §3 rellena de memoria, sin sesion citada | declarar `SIN REGISTRO POR PASO` y marcarlo como derivado |
| Escribir casos de prueba | pasos de verificacion tecnica dentro de la ficha | eso llega en construccion, con su propio codigo |
| Especificar de mas | decenas de escenarios de error antes de la primera unidad | §5, con su condicion de entrada |

### Lo que esta etapa tiene PROHIBIDO, y aqui se cuela solo

Escribir casos de prueba o unidades de construccion · especificar lo que no entra al MVP · escribir
un codigo de producto antes de declararlo en `project.md` · dar los documentos por terminados.

📌 Definiciones: `_methodology/000_method.md` §35, §45 y §46.
📌 Procedimiento: `_phases/020_baseline.md` §4 Paso 5, y §2 («¿cuanto es suficiente?»).
📌 Las features de las que cuelgan: `020_baseline/015_features.md`.
📌 El registro de las sesiones del prototipo es el original del camino feliz; aqui **se copia**.
