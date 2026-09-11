# Participantes — <NOMBRE DEL PROYECTO>

| Campo | Valor |
|---|---|
| Artefacto | `010_prototype/010_participants.md` |
| Etapa que lo produce | `010_prototype`, Paso 3 |
| Estado | `SELLADO §1–§3` · `ABIERTO §4–§5` |
| Sellado el | `<AAAA-MM-DD — antes de la primera sesion>` |
| Cerrado el | `<AAAA-MM-DD, o — mientras queden sesiones>` |
| Escrito por | `manager` |

> 🚨 **ESTE ARCHIVO TIENE DOS MITADES Y DOS RELOJES. Es el unico asi.**
>
> | Mitad | Cuando se escribe | ¿Se puede editar despues? |
> |---|---|---|
> | **§1–§3** · perfiles, numero y reparto | **antes de la primera sesion** | ❌ **nunca** |
> | **§4–§5** · quien vino y que se desvio | segun ocurren las sesiones | ✅ crece, no se corrige |
>
> La revision independiente del Gate comprueba **el nacimiento del archivo**, no su ultimo commit:
>
> ```bash
> git log --diff-filter=A -- 010_prototype/010_participants.md   # tiene que ser anterior
> git log --diff-filter=A -- 010_prototype/015_session_001.md    # a esta
> ```
>
> Y despues comprueba, con `git log -p`, que **§1–§3 no cambiaron nunca**.
>
> 🔑 **Si el perfil o el numero se tocan despues de las sesiones, se definen a la medida de quien
> vino** — y entonces cualquier resultado encaja con lo que se buscaba.

---

## 1. De donde vienen estos perfiles

**No se definen aqui. Se heredan.** El perfil del usuario representativo se sello en el
descubrimiento, antes de que existiera el prototipo.

| Campo | Contenido |
|---|---|
| **Origen** | `005_discovery/020_hypothesis.md` §4, sellado el `<AAAA-MM-DD>` |
| **Copiado aqui el** | `<AAAA-MM-DD>` |
| **¿Se cambio algo al copiar?** | `NO` |

⚠️ **La respuesta correcta a la ultima fila es `NO`.** Si hubo que cambiar algo, no es una copia: es
un perfil nuevo escrito con el prototipo ya delante, y la etapa lo prohibe.

---

## 2. Los perfiles que califican

| Perfil | Que lo define | Cuantos de este perfil | Por que importa este perfil |
|---|---|---|---|
| `<perfil 1 — el caso tipico>` | `<…>` | `<…>` | `<es el Generador tipico>` |
| `<perfil 2 — el caso sin costumbre previa>` | `<…>` | `<…>` | `<mide si se entiende sin experiencia acumulada>` |

### Que DESCALIFICA a un participante

Se escribe ahora, no cuando alguien dudoso se ofrezca.

- [ ] `<conoce el proyecto o ha oido hablar de el>`
- [ ] `<trabaja en el equipo, o con alguien del equipo>`
- [ ] `<ya vio el prototipo, aunque fuera de pasada>`
- [ ] `<participo en las entrevistas del descubrimiento>`
- [ ] `<…>`

🚨 **Un participante que conoce el proyecto no esta midiendo el prototipo: esta ayudandote.** Y ayuda
sin darse cuenta, asi que no se puede corregir en la sesion.

---

## 3. El numero, fijado antes de empezar

| Campo | Contenido |
|---|---|
| **Total de sesiones** | `<numero concreto, nunca «los que salgan»>` |
| **Por que ese numero y no otro** | `<el razonamiento — ver el aviso de abajo>` |
| **Decision que lo fija** | `<D-XXX de _persistence/decisions.md>` |
| **Reparto por perfil** | `<perfil 1: N · perfil 2: M>` |
| **De donde salen** | `<canal real de reclutamiento>` |
| **Quien los recluta** | `<…>` |

> **Parar cuando los resultados gustan no es muestrear: es elegir la respuesta.**

🚨 **La guia de metodo NO fija cuantos, y hay que decirlo en vez de dar por hecho que lo dice.**
Exige «usuarios representativos» y ninguna cantidad. Por eso el numero **lo fija el proyecto, con su
`D-XXX`, antes de la primera sesion**, y quien lo fije tiene que escribir **por que ese y no otro**:
no lo respalda ninguna fuente.

⚠️ **Un numero sin su `D-XXX` es peor que no tenerlo:** parece una regla del metodo, nadie lo
discute, y cuando la ronda se hace larga se recorta sin que conste que se recorto.

📌 Lo que hace auditable el numero no es cual sea, sino que **estuviera escrito antes de la primera
sesion**.

---

## 4. Quien vino de verdad

Se llena **segun ocurren las sesiones**, no al final. Una fila por sesion, exista o no su archivo
todavia.

| Sesion | Fecha | Perfil previsto | ¿Encajo? | Archivo | Notas de reclutamiento |
|---|---|---|---|---|---|
| `001` | `<AAAA-MM-DD>` | `<perfil 1>` | `<si>` | `015_session_001.md` | `<…>` |
| `002` | `<AAAA-MM-DD>` | `<perfil 1>` | `<si>` | `015_session_002.md` | `<…>` |
| `<003>` | `<…>` | `<…>` | `<…>` | `<…>` | `<…>` |

📌 **La columna «¿Encajo?» se responde contra §2, no contra la impresion del dia.** Si un
participante no encajaba y aun asi se corrio la sesion, se escribe `no` y se explica en §5. La
sesion sigue siendo valida como registro; lo que cambia es como la pesa el Gate.

---

## 5. Desviaciones entre lo fijado y lo que paso

Se escribe aunque sea incomodo. **La revision del Gate lo va a ver de todas formas** — cuenta los
archivos de sesion y los cruza con §3. Lo unico que decides es si se entera por ti o por la
ausencia.

| Que se fijo | Que paso | Por que | Que se hizo |
|---|---|---|---|
| `<las sesiones fijadas en §3>` | `<una menos>` | `<un participante cancelo y no hubo reemplazo>` | `<se corrio con una menos y se declara aqui>` |
| `<perfil 2: M participantes>` | `<…>` | `<…>` | `<…>` |

🚨 **Declarar una desviacion no la arregla.** Cuatro sesiones donde se fijaron cinco siguen siendo
cuatro, y el Gate lo pesa igual. Lo que cambia es que el resultado se puede **interpretar**: una
muestra corta y declarada es evidencia con un limite conocido; una muestra corta y callada es una
cifra que no se sabe que mide.

📌 **Los dos fallos que el Gate busca aqui, y los dos son visibles desde fuera:** que vinieran
**menos de los fijados**, o que **todos fueran del perfil facil**.

---

## 6. Comprobacion

### Antes del sello — se revisa §1 a §3, antes de la primera sesion

- [ ] Los perfiles estan **copiados** del descubrimiento, sin cambios.
- [ ] Esta escrito **que descalifica** a un participante.
- [ ] El **numero total** esta fijado, con **su `D-XXX`** y con el porque de ese numero.
- [ ] El **reparto por perfil** esta escrito, y no es todo del perfil facil.
- [ ] Esta escrito **quien los recluta y de donde salen**.
- [ ] `<` y «Guia de llenado» fuera de §1–§3.

### Al cerrar la etapa — se revisa §4 y §5

- [ ] Hay **una fila por sesion corrida**, con su archivo.
- [ ] Cada fila dice si el participante **encajaba** en su perfil.
- [ ] Las desviaciones estan en §5, **ninguna callada**.
- [ ] **§1–§3 no se tocaron.**
- [ ] **No queda ni un solo `<` en el archivo.**
- [ ] La cabecera tiene fecha de sellado y fecha de cierre.

```bash
grep -n "<" 010_prototype/010_participants.md               # debe no devolver nada
grep -n "Guia de llenado" 010_prototype/010_participants.md # debe no devolver nada
ls 010_prototype/015_session_*.md | wc -l                   # debe cuadrar con el total de §3, o estar en §5
git log -p -- 010_prototype/010_participants.md | grep "^-" # ninguna linea borrada de §1–§3
```

📌 El cuarto es el que mira la revision del Gate, y es el que no se puede falsear despues: **una
linea de §1–§3 que aparece borrada en el historial es un perfil reescrito.**

🚨 **La salida cruda de las cuatro ordenes va al registro**, no la conclusion.

---
---

## Guia de llenado — ⚠️ BORRAR esta seccion antes del sello

> Existe para escribir el archivo. **No sobrevive al sello.**

### Por que el numero se fija antes

Con muy pocos participantes, **un usuario raro decide el resultado**: uno que no entendio nada
convierte la hipotesis en tumbada, y uno especialmente habil la salva.

Y el numero tiene que estar escrito antes por una razon distinta de la estadistica: si no lo esta,
se para cuando los resultados gustan. Eso no es muestrear — **es elegir la respuesta**, y desde
fuera se ve exactamente igual que muestrear bien.

⚠️ **Cual es el numero adecuado no lo dice esta plantilla ni la guia de metodo.** Lo decide el
proyecto sabiendo cuantos usuarios del Actor Generador son alcanzables de verdad, y lo registra con
su `D-XXX` **antes** de la primera sesion.

### Por que no todos del perfil facil

El perfil facil es el que ya conoce el proceso, tiene interes en que salga bien y rellena los huecos
con su experiencia. Cinco sesiones con ese perfil dan cinco exitos autonomos **y no dicen nada**: la
hipotesis se puso a prueba contra el caso que menos la pone a prueba.

Por eso el reparto se escribe por adelantado. Es el segundo de los dos fallos que el Gate busca en
este archivo, y el mas facil de cometer sin mala intencion: el perfil facil es tambien el mas facil
de reclutar.

### Errores que esta plantilla existe para evitar

| Error | Como se ve | Que hacer |
|---|---|---|
| Perfil redefinido al copiar | §1 dice que si se cambio algo | es un perfil nuevo con el prototipo delante. Volver al del descubrimiento |
| Numero decidido sobre la marcha | §3 vacia hasta el final | ya no es auditable: solo se evita antes |
| Numero sin su `D-XXX` | una cifra escrita y nada mas | parece regla del metodo y no lo es. Registrarla como decision |
| Todos del perfil facil | todas las filas del mismo perfil | esta declarado en §5, pero el Gate lo pesa igual |
| Desviacion callada | §5 vacia y menos archivos de sesion que los fijados | escribirla: una muestra corta y declarada todavia sirve |
| Participante del equipo | «vino un compañero, encajaba bien» | descalificado por §2. Ayuda sin darse cuenta |
| Rellenar §4 al final | todas las fechas iguales, el dia del cierre | se llena segun ocurren; si no, es un recuerdo |
| Cambiar el reparto a mitad | «como el perfil dificil costaba, se hicieron todas del facil» | eso va a §5 como desviacion, no a §3 como correccion |

### Lo que esta etapa tiene PROHIBIDO, y aqui se cuela solo

**Cambiar el perfil de usuario representativo.** Es una de las prohibiciones de la etapa, y la que
mas razonable parece al romperla: el perfil dificil no aparece, el plazo aprieta, y ajustar el
perfil «para que refleje la realidad del reclutamiento» suena a sensatez. Lo que hace es borrar la
unica vara que habia.

📌 Definiciones: `_methodology/000_method.md` §23.
📌 Procedimiento: `_phases/010_prototype.md` §4, Paso 3.
📌 Donde va este archivo relleno lo dice `project.md`, no esta plantilla.
⚠️ **Quien declara el Gate y con que firmas no lo dice este archivo:** lo dicen la guia de metodo y
el registro de decisiones del proyecto. Mientras la etapa del Gate no tenga su `D-XXX` y su archivo
en `_phases/`, la respuesta correcta a «¿que viene despues?» es *«sin decidir»*.
