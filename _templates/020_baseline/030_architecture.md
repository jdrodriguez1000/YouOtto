# Arquitectura Base — <NOMBRE DEL PROYECTO>

| Campo | Valor |
|---|---|
| Artefacto | `020_baseline/030_architecture.md` |
| Etapa que lo produce | `020_baseline`, Paso 7 |
| Estado | `BORRADOR` |
| Abierto | `<AAAA-MM-DD>` |
| Cerrado | `<AAAA-MM-DD, o «—» mientras siga en BORRADOR>` |
| Escrito por | `manager` |

> **Estado:** `BORRADOR` mientras la etapa siga abierta · `CERRADO` cuando se cumpla la condicion de
> salida de `_phases/020_baseline.md` §6.
>
> ⚠️ **Las dos fechas las lee `report_auditor` y las cruza contra el historial de `git`.**

> 🚨 **Aqui va SOLO la Arquitectura Base.** La Arquitectura Incremental **no se escribe en esta
> etapa**: se amplia cuando una unidad de construccion lo obligue, y ese es su valor — la arquitectura
> tambien aprende.

---

## 0. 🚨 Contra que se elige

> **La tecnologia se elige contra lo que el MVP tiene que sostener, que es adopcion de UN solo
> actor.**

Elegirla contra una escala que nadie ha visto es la forma mas cara de equivocarse en esta etapa,
porque el error **no se nota hasta mucho despues** y para entonces ya lo sostiene todo.

📌 **Este es el primer momento del metodo en que elegir tecnologia esta permitido.** Hasta aqui
estaba prohibido en todas las etapas anteriores: habria sido decidir sobre supuestos. Lo que lo
desbloquea no es que haya pasado el tiempo — es que existe un dictamen y una decision de inversion
detras.

---

## 1. Principios

Las reglas que gobiernan las decisiones tecnicas de este producto. Pocas, y cada una con su porque.

| # | Principio | Por que en este producto | Que decision concreta gobierna |
|---|---|---|---|
| 1 | `<…>` | `<contra que restriccion o necesidad se puso>` | `<…>` |

⚠️ **Un principio que no gobierna ninguna decision concreta es una frase.** La tercera columna es la
que distingue un principio de un adorno: si esta vacia, el principio no ha hecho nada todavia.

---

## 2. Componentes principales

| Componente | Responsabilidad | De que se ocupa **NO** | Con quien habla |
|---|---|---|---|
| `<…>` | `<en una linea>` | `<lo que explicitamente no hace>` | `<…>` |

📌 **La tercera columna evita el componente que lo hace todo.** Escribir lo que un componente no hace
cuesta una linea ahora y es lo unico que se puede citar cuando alguien proponga meterle algo mas.

**Como se conectan:**

```text
<el camino de extremo a extremo, en una linea de texto:
 actor → … → … → respuesta>
```

🚨 **Ese camino es lo que la etapa siguiente necesita de aqui**, junto con el camino fino elegido de
§8. No la especificacion completa: las piezas y como se conectan.

---

## 3. Limites del sistema

Que esta dentro del producto y que esta fuera.

| Elemento | Dentro o fuera | Por que |
|---|---|---|
| `<…>` | `<DENTRO · FUERA>` | `<…>` |

⚠️ **Lo que queda fuera y de lo que el producto depende es una integracion** (§5), y lleva su plan
de fallo. Lo que queda fuera y de lo que no depende, no vuelve a aparecer en este archivo.

---

## 4. Tecnologias

| Capa | Tecnologia elegida | Version | Por que esta | Que la haria mala eleccion |
|---|---|---|---|---|
| `<lenguaje · marco de trabajo · almacenamiento · autenticacion · despliegue>` | `<…>` | `<…>` | `<contra lo que el MVP tiene que sostener>` | `<la observacion concreta que la tumbaria>` |

🚨 **La ultima columna es la que hace auditable a la tabla.** Un motivo que no puede decir que
observacion lo respalda y cual lo tumbaria es una suposicion con ropa de conclusion — y blinda la
decision contra el siguiente lector, incluido quien la escribio.

⚠️ **Cada fila de esta tabla que sea cara de revertir necesita ademas su decision arquitectonica**
completa, con sus **alternativas**, en su archivo propio. Esta tabla dice **que** se eligio; la
decision arquitectonica dice **contra que se eligio** — y esa es la que se busca dentro de seis meses.

---

## 5. Integraciones conocidas

| Sistema | Que aporta | Protocolo o mecanismo | ¿Existe y esta accesible hoy? | Que pasa si no responde |
|---|---|---|---|---|
| `<…>` | `<…>` | `<…>` | `<SI · NO → A-XXX>` | `<comportamiento degradado esperado>` |

---

## 6. Seguridad

📌 **Aqui va la vista arquitectonica.** El artefacto de las tres preguntas
(`020_baseline/040_three_questions.md`) es donde la seguridad **se declara con su artefacto**; los dos
tienen que decir lo mismo.

| Aspecto | Decision | Donde vive |
|---|---|---|
| Identidad y autenticacion | `<…>` | `<…>` |
| Permisos y autorizacion | `<…>` | `<…>` |
| Secretos y credenciales | `<…>` | 🚨 **fuera del historial del control de versiones** |
| Datos sensibles | `<que datos, y que tratamiento>` | `<…>` |
| Superficie expuesta | `<que queda accesible desde fuera>` | `<…>` |

---

## 7. Despliegue y atributos de calidad

### 7.1 Despliegue

| Campo | Contenido |
|---|---|
| Donde se despliega | `<…>` |
| Como se despliega | `<…>` |
| Entornos | `<…>` |
| Entorno reproducible | `<como se levanta desde cero — comando o procedimiento>` |

### 7.2 Atributos de calidad relevantes

**Solo los relevantes para este MVP.** Un atributo que no se va a medir no se lista.

| Atributo | Por que importa aqui | Magnitud y umbral | Que decision arquitectonica lo sostiene |
|---|---|---|---|
| `<…>` | `<…>` | `<numero>` | `<…>` |

---

## 8. Lo que se le entrega a la etapa siguiente

La etapa siguiente tiene un solo trabajo: demostrar que la arquitectura **puede sostener el
desarrollo del producto**, con un camino tecnico de extremo a extremo. Necesita de aqui **dos cosas,
y solo dos**:

| # | Que | Donde esta |
|---|---|---|
| 1 | **La Arquitectura Base** — que piezas hay y como se conectan | §2 de este archivo |
| 2 | **Un camino fino elegido** — el recorrido de extremo a extremo que se va a probar | `<abajo>` |

**El camino fino elegido:**

| Campo | Contenido |
|---|---|
| Escenario del que sale | `SC-XXX` — `<el del camino feliz, el mismo que el prototipo valido con usuarios reales>` |
| Recorrido | `<las piezas de §2 que atraviesa, en orden>` |
| Por que este | `<…>` |

🚨 **Sale del escenario del camino feliz, no se elige por comodidad tecnica.** Un camino fino elegido
porque es facil de montar demuestra que se puede montar eso, no que la arquitectura sostenga el
producto.

📌 **Todo lo demas de la baseline la etapa siguiente no lo necesita.** Y esa es la comprobacion barata
de si esta etapa se desbordo: si la siguiente esta esperando a que se termine de especificar, ya se
paso.

---

## 9. Lo que NO se decide todavia

**No se borra.** Lo que se dejo abierto a proposito, para que no se lea como un olvido.

| Que quedo abierto | Por que | Cuando se decide | ¿Es deuda tecnica? |
|---|---|---|---|
| `<…>` | `<…>` | `<que tiene que pasar para decidirlo>` | `<NO · SI → DT-XXX>` |

🚨 **La ultima columna es la que evita la deuda mas cara de un proyecto**, que no es la que se escribe
mal: es la que se decide bien **sabiendo que es provisional**, y que a los seis meses nadie recuerda
que lo era.

---

## 10. Comprobacion antes de cerrar este archivo

- [ ] Cada principio de §1 gobierna **una decision concreta**.
- [ ] Cada componente de §2 dice de que **no** se ocupa.
- [ ] §2 tiene el camino de extremo a extremo escrito.
- [ ] Cada tecnologia de §4 dice **que la haria mala eleccion**.
- [ ] **Cada** eleccion cara de revertir de §4 tiene su decision arquitectonica escrita, con
      alternativas.
- [ ] Cada integracion de §5 dice **que pasa si no responde**.
- [ ] §6 dice donde viven los secretos, y estan **fuera del historial**.
- [ ] §7.1 dice como se levanta el entorno **desde cero**.
- [ ] Ningun atributo de §7.2 esta sin numero.
- [ ] §8 tiene el camino fino elegido, y **sale del escenario del camino feliz**.
- [ ] Lo abierto esta en §9, con su `DT-XXX` cuando es provisional a sabiendas.
- [ ] **No queda ni un solo `<` en el archivo** — ningun hueco sin rellenar.
- [ ] La seccion «Guia de llenado» de abajo **esta borrada**.
- [ ] La cabecera dice `CERRADO` y tiene fecha de cierre.

Las mecanicas se comprueban desde fuera:

```bash
grep -n "<" 020_baseline/030_architecture.md                  # debe no devolver nada
grep -n "Guia de llenado" 020_baseline/030_architecture.md    # debe no devolver nada
grep -n "^| Estado |" 020_baseline/030_architecture.md        # debe decir CERRADO
grep -rn "Arquitectura Incremental" 020_baseline/030_architecture.md
```

📌 **La cuarta no debe devolver contenido de arquitectura**, solo la nota de la cabecera que dice que
no se escribe aqui. Si aparece una seccion incremental, la etapa se desbordo por este archivo.

🚨 **El barrido de secretos se corre aparte, con su patron y su ambito, y su salida cruda va al
registro.** Ese control es del artefacto de las tres preguntas —`020_baseline/040_three_questions.md`
§3—, y aqui solo se cita: dos sitios corriendo el mismo barrido con patrones distintos es peor que
uno.

---
---

## Guia de llenado — ⚠️ BORRAR esta seccion al cerrar el artefacto

> Existe para escribir el archivo. **No sobrevive al cierre de la etapa.**

### La pregunta que hace todo el trabajo

> **¿Que observacion me haria cambiar esto?**

Si no hay ninguna, la eleccion no se hizo contra evidencia: se hizo contra costumbre. Puede seguir
siendo la correcta, pero entonces eso mismo se escribe — «se elige por familiaridad del equipo» es
una razon honesta y auditable; «es la mejor opcion» no lo es.

### Base e Incremental, y por que separarlas

| | Arquitectura Base | Arquitectura Incremental |
|---|---|---|
| Cuando | esta etapa | cuando una unidad de construccion lo obligue |
| Que contiene | las piezas, sus limites y las tecnologias | lo que el crecimiento enseño que hacia falta |
| Si se escribe antes de tiempo | — | se escribe **antes de saber**, y hay que rehacerla |

### Ejemplo de una fila de §4

*(el ejemplo es de una app de recogida de reciclaje: otro dominio, a proposito)*

| Capa | Tecnologia | Version | Por que esta | Que la haria mala eleccion |
|---|---|---|---|---|
| Almacenamiento | base de datos relacional gestionada | `<version>` | el MVP tiene cinco entidades con relaciones claras y un solo actor escribiendo; el volumen estimado es de ~120 solicitudes/mes | si el modelo resultara no tener forma tabular estable, o si el volumen real superara en un orden de magnitud lo estimado en el primer trimestre |

📌 **La ultima celda es la que sirve dentro de seis meses.** Convierte «lo elegimos asi» en una
afirmacion que alguien puede comprobar y, si toca, refutar.

### Errores que esta plantilla existe para evitar

| Error | Como se ve | Que hacer |
|---|---|---|
| Arquitectura para una escala que no existe | umbrales de miles de usuarios en un MVP de un actor | dimensionar contra lo que el MVP tiene que sostener |
| Escribir la Incremental aqui | secciones de crecimiento futuro | fuera; se amplia cuando una unidad lo obligue |
| Principio sin decision | «preferimos la simplicidad» y nada mas | decir que decision concreta gobierna |
| Componente que lo hace todo | la columna «de que **no** se ocupa» vacia | escribirla |
| Eleccion sin alternativas | §4 rellena y ninguna decision arquitectonica | lo caro de revertir lleva su archivo propio |
| Camino fino por comodidad | el recorrido no coincide con ningun escenario | sale del camino feliz validado |
| Provisional sin marcar | §9 con «se decidira despues» y sin `DT-XXX` | si se sabe provisional, es deuda tecnica hoy |
| Secretos en el historial | credenciales en un archivo de configuracion versionado | sacarlos, y correr el barrido con su salida cruda |

### Lo que esta etapa tiene PROHIBIDO, y aqui se cuela solo

Escribir codigo de producto · reutilizar el codigo del prototipo · arquitectura para una escala que
no existe · escribir la Arquitectura Incremental · dar los documentos por terminados.

📌 Definiciones: `_methodology/000_method.md` §37, §38, §39, §40 y §49-§50.
📌 Procedimiento: `_phases/020_baseline.md` §4 Pasos 7 y 8, y §8.
📌 Las decisiones caras de revertir: una por archivo, con la plantilla
`_templates/020_baseline/035_adr_NNN.md`.
📌 La declaracion de seguridad con su artefacto: `020_baseline/040_three_questions.md`.
