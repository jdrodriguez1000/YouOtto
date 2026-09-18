# Participantes — YouOtto

| Campo | Valor |
|---|---|
| Artefacto | `010_prototype/010_participants.md` |
| Etapa que lo produce | `010_prototype`, Paso 3 |
| Estado | `SELLADO §1–§3` · `ABIERTO §4–§5` |
| Sellado el | `2026-09-18 — antes de la primera sesion` |
| Cerrado el | `—` |
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
| **Origen** | `005_discovery/020_hypothesis.md` §4, sellado el `2026-09-17` |
| **Copiado aqui el** | `2026-09-18` |
| **¿Se cambio algo al copiar?** | `NO` |

⚠️ **La respuesta correcta a la ultima fila es `NO`.** Si hubo que cambiar algo, no es una copia: es
un perfil nuevo escrito con el prototipo ya delante, y la etapa lo prohibe.

---

## 2. Los perfiles que califican

| Perfil | Que lo define | Cuantos de este perfil | Por que importa este perfil |
|---|---|---|---|
| Unico — el jugador que aplica el metodo a mano | Juega Baloto y Revancha con el metodo de `D-052` y `D-053`, y hoy lo aplica a mano en Excel, entre 40 y 60 minutos cada vez | 1 participante, en 5 sesiones | Es el Actor Generador, y el unico que existe: el metodo es suyo y nadie mas lo aplica |

### Que DESCALIFICA a un participante

Se escribe ahora, no cuando alguien dudoso se ofrezca.

- [ ] No juega Baloto ni Revancha con el metodo de `D-052` y `D-053`
- [ ] Aplica el metodo con una herramienta que ya se lo resuelve, en vez de a mano
- [ ] No es quien decide que combinacion se juega

🚨 **Un participante que conoce el proyecto no esta midiendo el prototipo: esta ayudandote.** Y ayuda
sin darse cuenta, asi que no se puede corregir en la sesion.

🚨 **En este proyecto ese aviso describe al unico participante que hay, y la lista de arriba NO lo
descalifica a proposito.** JD Rodriguez conoce el proyecto, lo patrocina, lo dirige y vera construir
el prototipo: contra la lista habitual —conocer el proyecto, ser del equipo, haber participado en el
descubrimiento, haber visto ya el prototipo— quedaria fuera por las cuatro. **Se acepta a sabiendas**,
porque el Generador es uno solo y excluirlo dejaria la etapa sin nadie a quien observar.
`005_discovery/020_hypothesis.md` §4 lo declaro como la anomalia de este proyecto y su §5 escribio el
limite que impone: la hipotesis **no afirma que otra persona pueda usar la aplicacion**, y la
dimension de comprension queda debilitada a proposito. Lo que se observa es si la explicacion le
basta **a el**, no si le bastaria a un tercero.

⚠️ **Eso es un limite del alcance, no un permiso para sesgar la sesion.** Los principios de no sesgo
del Paso 5 siguen enteros: no se explica como se usa, no se corrige el error en el momento, y quien
facilita no resuelve las dudas del participante.

---

## 3. El numero, fijado antes de empezar

| Campo | Contenido |
|---|---|
| **Total de sesiones** | 5 |
| **Por que ese numero y no otro** | No sale de un criterio de muestreo, y decirlo importa: el numero de **participantes** es 1 porque solo existe un Generador, y el de **sesiones** es 5 porque es la ventana que `005_discovery/020_hypothesis.md` §2 sello antes del primer dato, junto con su umbral de 4 de 5. Con una sola persona, lo que se repite no es la muestra sino la ocasion: cinco dias de sorteo distintos, con la necesidad real delante cada vez |
| **Decision que lo fija** | `D-087` de `_persistence/decisions.md` |
| **Reparto por perfil** | Perfil unico: 5 sesiones, todas con el mismo participante |
| **De donde salen** | No hay reclutamiento: el participante es el propio Actor Generador |
| **Quien los recluta** | Nadie. No aplica |

> **Parar cuando los resultados gustan no es muestrear: es elegir la respuesta.**

🚨 **La guia de metodo NO fija cuantos, y hay que decirlo en vez de dar por hecho que lo dice.**
Exige «usuarios representativos» y ninguna cantidad. Por eso el numero **lo fija el proyecto, con su
`D-XXX`, antes de la primera sesion**, y quien lo fije tiene que escribir **por que ese y no otro**:
no lo respalda ninguna fuente.

⚠️ **Un numero sin su `D-XXX` es peor que no tenerlo:** parece una regla del metodo, nadie lo
discute, y cuando la ronda se hace larga se recorta sin que conste que se recorto.

📌 Lo que hace auditable el numero no es cual sea, sino que **estuviera escrito antes de la primera
sesion**.

🚨 **Las cinco sesiones van en cinco dias de sorteo distintos, y el espaciado es parte de lo
sellado.** Correrlas seguidas el mismo dia no produce cinco sesiones: con un solo participante, a
partir de la segunda el tiempo se gana por memoria y no porque la aplicacion sirva — se estaria
midiendo su curva de aprendizaje. Si el calendario obligara a recortar, lo que se recorta es el
**numero**, con su decision escrita antes de empezar; nunca el espaciado.

---

## 4. Quien vino de verdad

Se llena **segun ocurren las sesiones**, no al final. Una fila por sesion, exista o no su archivo
todavia.

| Sesion | Fecha | Perfil previsto | ¿Encajo? | Archivo | Notas de reclutamiento |
|---|---|---|---|---|---|
| `001` | pendiente | Unico | pendiente | `015_session_001.md` | Sin reclutamiento: es el Actor Generador |
| `002` | pendiente | Unico | pendiente | `015_session_002.md` | Sin reclutamiento: es el Actor Generador |
| `003` | pendiente | Unico | pendiente | `015_session_003.md` | Sin reclutamiento: es el Actor Generador |
| `004` | pendiente | Unico | pendiente | `015_session_004.md` | Sin reclutamiento: es el Actor Generador |
| `005` | pendiente | Unico | pendiente | `015_session_005.md` | Sin reclutamiento: es el Actor Generador |

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
| Las 5 sesiones en 5 **dias de sorteo** distintos, segun la ventana sellada en `005_discovery/020_hypothesis.md` §2 | Las 5 sesiones se corren **una por jornada de trabajo**, seguidas, sin esperar al calendario de sorteos | El patrocinador decide no esperar unas dos semanas. Es el unico participante y el prototipo estara listo antes | Se corre asi y **se declara aqui, antes de la primera sesion**. La hipotesis **no se toca**: sigue diciendo lo que sello, y el Gate juzga contra ella. Registrado en `D-088` |

🚨 **Esta desviacion se declara ANTES de la ronda, no despues, y esa es toda la diferencia.** Una
muestra que se desvia y lo dice es evidencia con un limite conocido. La misma muestra callada es una
cifra que no se sabe que mide.

⚠️ **Lo que el Gate va a pesar, escrito aqui para que no lo descubra solo:** la ventana sellada
buscaba cinco **ocasiones reales** —dia de sorteo, necesidad delante, memoria fria—. Al juntarlas, la
ocasion pasa a ser **simulada por la tarea** en vez de real, y el participante llega a la sesion `002`
recordando la `001`. El tiempo de `N-001` se abarata sesion a sesion por esa via, y no por la
aplicacion. **Es un limite del alcance, no una invalidacion:** `N-002` —saber de donde salio cada
numero— no se abarata con la repeticion de la misma forma, porque lo que se observa ahi es si la
explicacion basta, no cuanto se tarda.

🚨 **Declarar una desviacion no la arregla.** Cuatro sesiones donde se fijaron cinco siguen siendo
cuatro, y el Gate lo pesa igual. Lo que cambia es que el resultado se puede **interpretar**: una
muestra corta y declarada es evidencia con un limite conocido; una muestra corta y callada es una
cifra que no se sabe que mide.

📌 **Los dos fallos que el Gate busca aqui, y los dos son visibles desde fuera:** que vinieran
**menos de los fijados**, o que **todos fueran del perfil facil**.

---

## 6. Comprobacion

### Antes del sello — se revisa §1 a §3, antes de la primera sesion

- [x] Los perfiles estan **copiados** del descubrimiento, sin cambios.
- [x] Esta escrito **que descalifica** a un participante.
- [x] El **numero total** esta fijado, con **su `D-XXX`** y con el porque de ese numero.
- [x] El **reparto por perfil** esta escrito, y no es todo del perfil facil.
- [x] Esta escrito **quien los recluta y de donde salen**.
- [x] `<` y «Guia de llenado» fuera de §1–§3.

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
