# decisions.md

> 📄 **Se copia a `_persistence/decisions.md`.** Se copia entero, con el indice vacio y la plantilla
> de entrada intacta.
>
> ⛔ **Lo que se borra al copiar son los ejemplos, no las convenciones.** Las convenciones son las
> reglas del archivo, y `CLAUDE.md` manda leerlas antes de escribir en el.
>
> 🚨 **Este archivo lo escribe `manager`, nunca el cierre.** El `session-closer` arranca en frio y
> solo ve el `git diff`; un porque nace en la conversacion y no aparece en ningun diff. Si se llega
> al cierre sin haberlo escrito, esa informacion **ya se perdio**.

---

> Registro de las **decisiones tomadas** en el proyecto.
> Cada decision tiene codigo `D-XXX` y se considera vigente hasta que otra la revoque.

---

## Indice

| Codigo | Decision | Fecha | Estado |
|---|---|---|---|
| [D-001](#d-001---etapas-declaradas-del-proyecto) | Etapas declaradas del proyecto | 2026-09-15 | Vigente |
| [D-002](#d-002---carpetas-de-entregables-declaradas-al-arrancar-cada-etapa) | Carpetas de entregables declaradas al arrancar cada etapa | 2026-09-15 | Vigente |
| [D-003](#d-003---adopcion-del-gate-1-y-del-gate-2) | Adopcion del Gate 1 y del Gate 2 | 2026-09-15 | Vigente |
| [D-004](#d-004---se-conserva-el-historial-heredado-del-esqueleto) | Se conserva el historial heredado del esqueleto | 2026-09-15 | Vigente |
| [D-005](#d-005---consulta-de-arranque-de-las-lecciones-globales) | Consulta de arranque de las lecciones globales | 2026-09-15 | Vigente |
| [D-006](#d-006---se-escribe-el-inventario-de-acciones-irreversibles) | Se escribe el inventario de acciones irreversibles | 2026-09-15 | Vigente |
| [D-007](#d-007---dueno-y-sitio-de-evaluacion-observabilidad-y-seguridad) | Dueno y sitio de evaluacion, observabilidad y seguridad | 2026-09-15 | Vigente |
| [D-008](#d-008---los-barridos-de-anclaje-de-protocol-close-admiten-ordenes-indentadas) | Los barridos de anclaje de protocol-close admiten ordenes indentadas | 2026-09-15 | Vigente |
| [D-009](#d-009---se-corrige-la-cabecera-yaml-de-los-agentes-de-gate-y-de-acta) | Se corrige la cabecera YAML de los agentes de Gate y de acta | 2026-09-15 | Vigente |
| [D-010](#d-010---las-cercas-de-bloque-de-los-controles-de-las-skills-admiten-sangria) | Las cercas de bloque de los controles de las skills admiten sangria | 2026-09-16 | Vigente |
| [D-011](#d-011---firmas-del-gate-1-y-del-gate-2) | Firmas del Gate 1 y del Gate 2 | 2026-09-16 | Vigente |
| [D-012](#d-012---cosecha-de-lecciones-de-000_preproject) | Cosecha de lecciones de 000_preproject | 2026-09-16 | Vigente |
| [D-013](#d-013---el-anclaje-de-criterios-de-cierre-compara-la-salida-anclada-con-la-publicada) | El anclaje de criterios de cierre compara la salida anclada con la publicada | 2026-09-16 | Vigente |
| [D-014](#d-014---cosecha-de-l-007) | Cosecha de L-007 | 2026-09-16 | Vigente |
| [D-015](#d-015---etapa-000_preproject-cerrada) | Etapa 000_preproject cerrada | 2026-09-16 | Revocada en parte por D-020 |
| [D-016](#d-016---promocion-al-esqueleto-de-los-seis-archivos-de-dt-001) | Promocion al esqueleto de los seis archivos de DT-001 | 2026-09-16 | Vigente |
| [D-017](#d-017---el-control-de-salida-reproducida-declara-que-no-reejecuta) | El CONTROL DE SALIDA REPRODUCIDA declara que no reejecuta | 2026-09-16 | Vigente |
| [D-018](#d-018---no-se-corrige-el-recuento-de-la-nota-de-cierre-de-s-004) | No se corrige el recuento de la NOTA DE CIERRE de S-004 | 2026-09-16 | Vigente |
| [D-019](#d-019---el-anclaje-traduce-las-ordenes-git-diff---cached-del-informe) | El anclaje traduce las ordenes git diff --cached del informe | 2026-09-16 | Vigente |
| [D-020](#d-020---la-firma-del-patrocinador-se-escribe-en-el-acta-de-cierre) | La firma del patrocinador se escribe en el acta de cierre | 2026-09-16 | Vigente |
| [D-021](#d-021---la-nota-de-cierre-publica-la-forma-anclada-de-la-orden-del-paso-2d) | La NOTA DE CIERRE publica la forma anclada de la orden del Paso 2d | 2026-09-16 | Vigente |
| [D-022](#d-022---como-se-implementan-t-008-t-009-y-t-011-en-protocol-close) | Como se implementan T-008, T-009 y T-011 en protocol-close | 2026-09-16 | Revocada en parte por D-023 |
| [D-023](#d-023---el-control-sin-anclar-del-7c-quater-solo-mira-lineas-de-orden) | El control SIN ANCLAR del 7c-quater solo mira lineas de orden | 2026-09-16 | Vigente |
| [D-024](#d-024---estado-propio-para-la-decision-revocada-en-parte) | Estado propio para la decision revocada en parte | 2026-09-16 | Vigente |
| [D-025](#d-025---f-009-se-acepta-y-el-desfase-con-el-esqueleto-abre-su-propia-deuda) | F-009 se acepta y el desfase con el esqueleto abre su propia deuda | 2026-09-16 | Vigente |
| [D-026](#d-026---el-7c-quater-declara-que-no-ve-una-orden-partida-en-dos-lineas) | El 7c-quater declara que no ve una orden partida en dos lineas | 2026-09-16 | Vigente |
| [D-027](#d-027---el-estado-de-una-tarea-lo-decide-el-diff-no-el-anclaje) | El estado de una tarea lo decide el diff, no el anclaje | 2026-09-16 | Vigente |
| [D-028](#d-028---el-paso-4-declara-tambien-el-caso-del-criterio-que-no-reproduce) | El Paso 4 declara tambien el caso del criterio que no reproduce | 2026-09-16 | Vigente |
| [D-029](#d-029---d-027-se-completa-con-los-criterios-sin-anclar-de-sus-precedentes) | D-027 se completa con los criterios sin anclar de sus precedentes | 2026-09-16 | Vigente |
| [D-030](#d-030---la-promocion-de-dt-003-pasa-a-alta-y-va-antes-que-los-actores) | La promocion de DT-003 pasa a Alta y va antes que los actores | 2026-09-16 | Vigente |
| [D-031](#d-031---no-se-corrige-el-orden-de-los-hashes-de-la-seccion-3-de-s-009) | No se corrige el orden de los hashes de la seccion 3 de S-009 | 2026-09-16 | Vigente |
| [D-032](#d-032---promocion-al-esqueleto-de-los-tres-archivos-de-dt-003) | Promocion al esqueleto de los tres archivos de DT-003 | 2026-09-16 | Vigente |
| [D-033](#d-033---el-desfase-4-que-reporta-el-arranque-tras-s-010-no-se-corrige) | El desfase 4 que reporta el arranque tras S-010 no se corrige | 2026-09-16 | Vigente |
| [D-034](#d-034---f-011-se-acepta-con-una-nota-fechada-en-t-019) | F-011 se acepta con una nota fechada en T-019 | 2026-09-16 | Vigente |
| [D-035](#d-035---promocion-al-esqueleto-de-la-frase-de-d-028) | Promocion al esqueleto de la frase de D-028 | 2026-09-16 | Vigente |
| [D-036](#d-036---f-013-se-acepta-con-nota-fechada-y-puerta-mecanica-en-el-anclaje) | F-013 se acepta con nota fechada y puerta mecanica en el anclaje | 2026-09-16 | Vigente |
| [D-037](#d-037---el-desfase-4-del-arranque-ignora-los-commits-de-solo-anclaje) | El desfase 4 del arranque ignora los commits de solo anclaje | 2026-09-16 | Vigente |
| [D-038](#d-038---r-011-y-f-012-quedan-retirados-por-la-auditoria-revertida) | R-011 y F-012 quedan retirados por la auditoria revertida | 2026-09-16 | Vigente |
| [D-039](#d-039---el-trailer-del-cierre-nombra-el-modelo-que-lo-ejecuta) | El trailer del cierre nombra el modelo que lo ejecuta | 2026-09-16 | Vigente |
| [D-040](#d-040---promocion-al-esqueleto-de-protocol-close-y-protocol-start-de-s-012) | Promocion al esqueleto de protocol-close y protocol-start de S-012 | 2026-09-17 | Vigente |
| [D-041](#d-041---f-014-se-acepta-con-notas-fechadas-y-control-de-fechas-en-el-paso-7d) | F-014 se acepta con notas fechadas y control de fechas en el Paso 7d | 2026-09-17 | Vigente |
| [D-042](#d-042---el-commit-de-anclaje-lleva-tambien-el-trailer-de-coautoria) | El commit de anclaje lleva tambien el trailer de coautoria | 2026-09-17 | Vigente |
| [D-043](#d-043---cada-hallazgo-de-auditoria-lleva-urgencia-ademas-de-gravedad) | Cada hallazgo de auditoria lleva urgencia ademas de gravedad | 2026-09-17 | Vigente |
| [D-044](#d-044---reparto-del-trabajo-de-005_discovery) | Reparto del trabajo de 005_discovery | 2026-09-17 | Vigente |
| [D-045](#d-045---promocion-al-esqueleto-de-los-cuatro-archivos-de-s-013) | Promocion al esqueleto de los cuatro archivos de S-013 | 2026-09-17 | Vigente |
| [D-046](#d-046---f-016-y-f-017-se-aceptan-y-su-correccion-se-aplaza) | F-016 y F-017 se aceptan y su correccion se aplaza | 2026-09-17 | Vigente |
| [D-047](#d-047---r-014-y-f-015-quedan-retirados-por-la-auditoria-revertida) | R-014 y F-015 quedan retirados por la auditoria revertida | 2026-09-17 | Vigente |
| [D-048](#d-048---el-agente-de-cierre-solo-puede-invocar-protocol-close) | El agente de cierre solo puede invocar protocol-close | 2026-09-17 | Vigente |
| [D-049](#d-049---f-018-se-acepta-y-se-corrige-con-nota-fechada-en-d-045) | F-018 se acepta y se corrige con nota fechada en D-045 | 2026-09-17 | Vigente |
| [D-050](#d-050---t-032-se-verifica-con-una-sonda-de-la-cabecera-exacta-en-los-dos-casos) | T-032 se verifica con una sonda de la cabecera exacta, en los dos casos | 2026-09-17 | Vigente |
| [D-051](#d-051---se-abre-el-artefacto-de-necesidades-y-se-declara-n-xxx) | Se abre el artefacto de necesidades y se declara N-XXX | 2026-09-17 | Vigente |
| [D-052](#d-052---el-producto-reproduce-el-metodo-del-jugador-no-una-generacion-aleatoria) | El producto reproduce el metodo del jugador, no una generacion aleatoria | 2026-09-17 | Revocada en parte por D-053 |
| [D-053](#d-053---ventanas-prioridad-y-desempates-del-metodo) | Ventanas, prioridad y desempates del metodo | 2026-09-17 | Vigente |
| [D-054](#d-054---la-revision-del-sorteo-anterior-entra-en-lo-que-se-construye) | La revision del sorteo anterior entra en lo que se construye | 2026-09-17 | Vigente |
| [D-055](#d-055---actores-del-producto-y-veredicto-del-actor-generador) | Actores del producto y veredicto del Actor Generador | 2026-09-17 | Vigente |
| [D-056](#d-056---la-aplicacion-no-guarda-identidad-y-a-001-queda-refutado) | La aplicacion no guarda identidad, y A-001 queda refutado | 2026-09-17 | Vigente |
| [D-057](#d-057---interesados-del-proyecto-y-declaracion-de-i-xxx) | Interesados del proyecto y declaracion de I-XXX | 2026-09-17 | Vigente |
| [D-058](#d-058---hipotesis-sellada-de-005_discovery) | Hipotesis sellada de 005_discovery | 2026-09-17 | Vigente |
| [D-059](#d-059---f-019-se-acepta-y-se-corrige-por-nota-en-esta-sesion) | F-019 se acepta y se corrige por nota en esta sesion | 2026-09-17 | Vigente |
| [D-060](#d-060---se-cierran-los-artefactos-de-actores-e-interesados) | Se cierran los artefactos de actores e interesados | 2026-09-17 | Vigente |
| [D-061](#d-061---objetivo-y-alcance-del-proyecto) | Objetivo y alcance del proyecto | 2026-09-17 | Vigente |
| [D-062](#d-062---cosecha-de-005_discovery-al-archivo-de-lecciones-globales) | Cosecha de 005_discovery al archivo de lecciones globales | 2026-09-17 | Vigente |
| [D-063](#d-063---l-016-sube-como-enmienda-de-lg-32-segunda-pasada-de-la-cosecha-de-005_discovery) | L-016 sube como enmienda de LG-32: segunda pasada de la cosecha de 005_discovery | 2026-09-17 | Vigente |
| [D-064](#d-064---f-020-se-acepta-y-se-corrige-hacia-adelante-en-los-copiables-y-por-nota-en-el-artefacto) | F-020 se acepta y se corrige hacia adelante: en los copiables y por nota en el artefacto | 2026-09-17 | Vigente |
| [D-065](#d-065---l-017-no-sube-ya-cubierta-por-lg-85-tercera-pasada-de-la-cosecha-de-005_discovery) | L-017 no sube: ya cubierta por LG-85, tercera pasada de la cosecha de 005_discovery | 2026-09-17 | Vigente |
| [D-066](#d-066---se-cierra-el-artefacto-de-necesidades) | Se cierra el artefacto de necesidades | 2026-09-17 | Vigente |
| [D-067](#d-067---l-018-no-sube-ya-cubierta-por-lg-101-cuarta-pasada-de-la-cosecha-de-005_discovery) | L-018 no sube: ya cubierta por LG-101, cuarta pasada de la cosecha de 005_discovery | 2026-09-17 | Vigente |
| [D-068](#d-068---f-021-se-acepta-y-el-alcance-real-son-seis-anclas-y-un-control-no-una-linea) | F-021 se acepta, y el alcance real son seis anclas y un control, no una linea | 2026-09-17 | Vigente |
| [D-069](#d-069---f-022-el-sintoma-ya-no-reproduce-y-el-choque-de-reglas-que-lo-causo-se-zanja-con-una-columna) | F-022: el sintoma ya no reproduce, y el choque de reglas que lo causo se zanja con una columna | 2026-09-17 | Vigente |
| [D-070](#d-070---f-023-se-acepta-la-confirmacion-de-dt-005-es-del-usuario-y-se-escribe-con-su-dueno) | F-023 se acepta: la confirmacion de DT-005 es del usuario, y se escribe con su dueno | 2026-09-17 | Vigente |
| [D-071](#d-071---f-024-se-acepta-en-su-parte-comprobable-y-se-rechaza-lo-que-atribuye-a-la-skill) | F-024 se acepta en su parte comprobable, y se rechaza lo que atribuye a la skill | 2026-09-17 | Vigente |
| [D-072](#d-072---l-019-sube-como-enmienda-de-lg-100-y-l-020-no-sube-quinta-pasada-de-la-cosecha-de-005_discovery) | L-019 sube como enmienda de LG-100 y L-020 no sube: quinta pasada de la cosecha de 005_discovery | 2026-09-17 | Vigente |
| [D-073](#d-073---el-acta-de-cierre-va-antes-que-los-hallazgos-abiertos-de-la-jornada) | El acta de cierre va antes que los hallazgos abiertos de la jornada | 2026-09-18 | Vigente |
| [D-074](#d-074---el-patrocinador-firma-el-acta-y-005_discovery-queda-cerrada) | El patrocinador firma el acta y 005_discovery queda cerrada | 2026-09-18 | Vigente |
| [D-075](#d-075---f-025-se-acepta-la-cifra-se-deriva-de-la-enumeracion-y-se-corrige-por-nota) | F-025 se acepta: la cifra se deriva de la enumeracion y se corrige por nota | 2026-09-18 | Vigente |
| [D-076](#d-076---f-026-se-acepta-y-los-dos-hashes-de-la-nota-de-cierre-pasan-a-derivarse) | F-026 se acepta, y los dos hashes de la NOTA DE CIERRE pasan a derivarse | 2026-09-18 | Vigente |
| [D-077](#d-077---f-027-se-acepta-y-se-corrige-ahora-el-control-aprende-el-formato-ordenessalidas) | F-027 se acepta y se corrige ahora: el control aprende el formato Ordenes/Salidas | 2026-09-18 | Vigente |
| [D-078](#d-078---l-021-no-sube-ya-cubierta-por-lg-32-sexta-pasada-de-la-cosecha-de-005_discovery) | L-021 no sube: ya cubierta por LG-32, sexta pasada de la cosecha de 005_discovery | 2026-09-18 | Vigente |
| [D-079](#d-079---a-004-y-a-005-se-confirman-sus-disparadores-corrieron-con-el-cierre-de-la-etapa) | A-004 y A-005 se confirman: sus disparadores corrieron con el cierre de la etapa | 2026-09-18 | Vigente |
| [D-080](#d-080---f-028-se-acepta-la-nota-de-anclaje-declara-donde-vive-y-el-autorreferente-queda-prohibido) | F-028 se acepta: la nota de anclaje declara donde vive, y el autorreferente queda prohibido | 2026-09-18 | Vigente |
| [D-081](#d-081---f-029-se-acepta-la-fila-de-firma-se-instancia-a-d-074-y-el-control-de-huecos-ve-los-codigos-genericos) | F-029 se acepta: la fila de firma se instancia a D-074 y el control de huecos ve los codigos genericos | 2026-09-18 | Vigente |
| [D-082](#d-082---promocion-al-esqueleto-de-arranque-de-los-seis-candidatos-del-desfase) | Promocion al esqueleto de arranque de los seis candidatos del desfase | 2026-09-18 | Vigente |

---

## Convenciones

| Campo | Valores posibles |
|---|---|
| Codigo | `D-XXX`, correlativo, no se reutiliza |
| Estado | `Vigente` / `Revocada en parte por D-XXX` / `Revocada por D-XXX` |
| Origen | `usuario` / `manager` / `report_auditor` |

🚨 **Una decision no se borra ni se reescribe: se revoca.** La entrada antigua se queda con
`Revocada por D-XXX` en su estado, y la nueva explica que cambio y por que. El historial de por que
se penso distinto en su momento es parte del registro.

🚨 **Si la nueva solo revoca una parte, el estado lo dice: `Revocada en parte por D-XXX`.** La
antigua sigue rigiendo en lo demas, y la nueva nombra **que punto** revoca. Escribir `Revocada por`
a secas hace que quien lee solo el indice entienda revocado lo que sigue en pie — y el indice es lo
que lee el arranque. Si mas tarde otra la revoca entera, el estado pasa a `Revocada por D-XXX`.

🚨 **Toda decision que verifica algo antes de aceptarlo lleva comando y salida cruda.** No se
escribe «se comprobo que…» de memoria: va el comando ejecutado y su salida literal.

🚨 **Y eso incluye el bloque «Criterio de cierre», que conviene que tenga forma fijada.** El
criterio se escribe en tres partes, siempre las tres:

1. **el enunciado** — que tiene que ser cierto para dar la decision por cerrada;
2. **la orden que lo comprueba, anclada al commit** (`git show <hash>:<archivo> | …`), no al arbol
   de trabajo, que cambia debajo;
3. **la salida que devolvio**, literal.

⛔ **Un criterio de cierre con la orden y sin la salida no es evidencia**: obliga a rehacer el
barrido a quien lo lea, que es exactamente el coste que la regla existe para evitar. Y un criterio
sin anclar reproduce el dia que se escribe y deja de reproducir en cuanto el archivo crece.

🚨 **El ancla no es del bloque «Criterio de cierre»: es de toda orden que se escriba en este
archivo.** Esta regla nacio de un defecto real: una decision publico su bloque de verificacion
previa —la que `CLAUDE.md` exige antes de aceptar un hallazgo— con dos ordenes sobre `HEAD`, y hoy
devuelven cifras distintas de las que publican. La conclusion sigue siendo cierta; lo que se perdio
es la prueba, que es lo unico que hacia auditable la aceptacion.

🔑 **Y aqui no hay huevo-y-gallina que resolver, a diferencia del criterio de cierre.** Una
verificacion previa se corre sobre un commit que **ya existe** —el `HEAD` de ese momento—, asi que
el hash literal se puede escribir en el acto. **Es el unico bloque que el Paso 7c-bis del cierre no
necesita arreglar despues, porque nace bien.**

⛔ **`HEAD` no se escribe nunca dentro de una orden publicada.** `HEAD` es un puntero que se mueve
con cada commit: la orden que lo usa contesta una pregunta distinta cada dia, y la salida pegada
debajo deja de ser su salida. Se resuelve con `git rev-parse --short HEAD` **antes** de escribirla,
y lo que va al archivo es el hash.

⚠️ **Lo que si se escribe es que ese hash era `HEAD`**, con las dos cosas nombradas por lo que son:
«verificado contra `HEAD` (`<hash>`)». Un commit no es `HEAD` porque lo diga una frase — lo es
porque lo era en ese momento, y confundirlo con el commit que una auditoria juzgaba ya abrio un
hallazgo una vez.

⚠️ **Rige hacia adelante.** Las ordenes ya publicadas con `HEAD` **no se reescriben**: se corrigen
por nota fechada, republicando la misma orden anclada con la salida que devuelve.

⚠️ **Y no aplica a ordenes que preguntan por lo que el commit no contiene** —`git status`, `date`,
el arbol de trabajo—. Esas se dejan como estan; el criterio de que es anclable y que no lo detalla
el Paso 7c-bis de `protocol-close`, y es el mismo.

⚠️ **El titulo nombra la decision, no su consecuencia**, y no cambia despues.

🚨 **El indice se escribe a mano, sin generador.** Cada fila enlaza por ancla a su decision.

---

## Decisiones

<!--
Plantilla:

### D-XXX - Titulo
| Campo | Valor |
|---|---|
| Fecha | AAAA-MM-DD |
| Estado | Vigente |
| Origen | |

- **Contexto:** que situacion obligo a decidir.
- **Decision:** que se decidio, en una frase.
- **Por que:** que problema resuelve, y que se protege con ello.
- **Alternativas descartadas:** que otros caminos habia y por que no. Al `git diff` solo llega el
  ganador; si las alternativas no se escriben aqui, no se escriben en ningun sitio.
-->

### D-001 - Etapas declaradas del proyecto
| Campo | Valor |
|---|---|
| Fecha | 2026-09-15 |
| Estado | Vigente |
| Origen | usuario |

- **Contexto:** `project.md` llego del esqueleto con la fila «Etapas declaradas» en blanco
  (`<etapa>`, `<etapa>`). Sin etapas declaradas, el control de etapas del cierre no puede
  ejecutarse. El metodo trae siete archivos de etapa en `_phases/`, verificado contra `HEAD`
  (`707d572`):

  ```
  $ git ls-tree --name-only 707d572 _phases/
  _phases/000_preproject.md
  _phases/005_discovery.md
  _phases/010_prototype.md
  _phases/020_baseline.md
  _phases/025_wslt.md
  _phases/030_growth.md
  _phases/040_evol.md
  ```

- **Decision:** el proyecto adopta las siete etapas del metodo: `000_preproject`, `005_discovery`,
  `010_prototype`, `020_baseline`, `025_wslt`, `030_growth` y `040_evol`.
- **Por que:** el usuario zanjo que el proyecto recorre el ciclo completo. Declararlas en
  `project.md` deja al control de etapas del cierre con valores contra los que comprobar.
- **Alternativas descartadas:** declarar solo las primeras (`000_preproject` y `005_discovery`) e
  ir anadiendo las siguientes al llegar a ellas, cada una con su `D-XXX`. Lo propuso `manager` como
  opcion habitual; el usuario eligio declarar el ciclo entero desde el inicio.
- ⚠️ **Lo que esta decision NO adopta:** ni los Gates 1 y 2 (cada uno exige su propia `D-XXX`) ni
  las carpetas de entregables de cada etapa en «Carpetas propias», que siguen pendientes.

### D-002 - Carpetas de entregables declaradas al arrancar cada etapa
| Campo | Valor |
|---|---|
| Fecha | 2026-09-15 |
| Estado | Vigente |
| Origen | usuario |

- **Contexto:** con las siete etapas declaradas (`D-001`), `project.md` pedia una fila de
  entregables en «Rutas» y otra en «Carpetas propias» por cada etapa que produce artefactos.
  `000_preproject` no tiene carpeta propia: sus plantillas se copian a `_persistence/` y `_audit/`.
  Las otras seis si la tienen, y ninguna existe todavia en el arbol.
- **Decision:** la carpeta de entregables de cada etapa se declara en `project.md` cuando esa etapa
  arranca, no todas de golpe. Hoy se declara solo `005_discovery/`, la siguiente etapa, por
  adelantado.
- **Por que:** el Paso 2c del cierre contrasta «Carpetas propias» contra el arbol en las dos
  direcciones. Cada fila declarada por adelantado sale senalada hasta que su carpeta exista; una sola
  fila pendiente se lee, seis se acaban ignorando. `005_discovery/` se declara ya porque su etapa
  esta escrita en `_phases/` y su contenido esta enumerado en `_templates/005_discovery/`, que es la
  condicion que `project.md` pide a una declaracion anticipada.
- **Alternativas descartadas:** declarar las seis carpetas desde ya (`005_discovery/` a
  `040_evol/`). Descartada porque dejaba seis diferencias abiertas en el control del cierre durante
  etapas enteras.
- ⚠️ **Diferencia esperada en el cierre:** hasta que se escriba el primer artefacto de
  `005_discovery`, el Paso 2c senalara la fila `005_discovery/` sin carpeta. Su razon es esta
  decision; si la diferencia no desaparece al arrancar la etapa, el control esta senalando algo real.

### D-003 - Adopcion del Gate 1 y del Gate 2
| Campo | Valor |
|---|---|
| Fecha | 2026-09-15 |
| Estado | Vigente |
| Origen | usuario |

- **Contexto:** declarar las etapas (`D-001`) no adopta los Gates; cada uno exige su `D-XXX`. Sus
  agentes (`gate1_auditor`, `gate2_auditor`) y skills (`protocol-gate1`, `protocol-gate2`) ya
  existen en `.claude/`, montados por el esqueleto.
- **Decision:** el proyecto adopta el Gate 1 (¿vale la pena construir el MVP?), que juzga la
  evidencia de `010_prototype`, y el Gate 2 (¿vale la pena seguir invirtiendo?), que juzga la de
  `030_growth`.
- **Por que:** el ciclo completo adoptado en `D-001` incluye los dos puntos donde se decide seguir o
  detener la inversion. Adoptarlos desde el inicio fija que esas etapas no se cierran sin dictamen
  tecnico y decision del patrocinador.
- **Alternativas descartadas:** dejar los dos sin adoptar hasta acercarse al cierre de
  `010_prototype`, o adoptar solo el Gate 1. El usuario eligio adoptar los dos.
- ⚠️ **Lo que esta decision NO fija:** la asignacion de las firmas de cada Gate, que
  `_phases/010_prototype.md` exige registrar con su propia `D-XXX` antes de lanzarlo.

### D-004 - Se conserva el historial heredado del esqueleto
| Campo | Valor |
|---|---|
| Fecha | 2026-09-15 |
| Estado | Vigente |
| Origen | usuario |

- **Contexto:** el repositorio se creo clonando el esqueleto y cambiando el remoto, sin borrar su
  `.git`, en contra de lo que pide `README.md` (linea 47). Por eso el historial de este repositorio
  son los siete commits del esqueleto, ya subidos al remoto del proyecto. Verificado contra `HEAD`
  (`707d572`); `git log` y `git ls-remote` preguntan por el repositorio, no por un commit, y se dejan
  sin anclar:

  ```
  $ git log --format='%h %ad %an | %s' --date=short
  707d572 2026-09-14 Triple S | Promocion del andamiaje desde RaidomAI_App (origen d2ee2aa)
  bf8c56e 2026-09-14 Triple S | Publica la guia de arranque como README.md (origen a3bb32e)
  afeedf4 2026-09-14 Triple S | Promocion del andamiaje desde RaidomAI_App (origen a3bb32e)
  c7d0a87 2026-09-14 Triple S | Regenera las copias de la raiz desde sus plantillas (origen 841dc53)
  841dc53 2026-09-14 Triple S | Promocion del andamiaje desde RaidomAI_App (origen db0e613)
  1748f0a 2026-09-11 Triple S | Sincroniza las seis areas agnosticas con el proyecto de origen
  fa7da56 2026-09-11 Triple S | Estado de partida del esqueleto, tal como estaba antes de sincronizar

  $ git ls-remote origin
  707d572bb037d9c2c164da7cb356d2848b7b2180	HEAD
  707d572bb037d9c2c164da7cb356d2848b7b2180	refs/heads/main
  ```

- **Decision:** se conserva el historial heredado tal como esta; no se rehace ni se fuerza el push.
- **Por que:** rehacerlo exigia reemplazar `main` en el remoto con un push forzado, que no se puede
  deshacer, y no recuperaba ningun archivo: el arbol de `HEAD` es identico al del commit de partida.
  Lo que aporta ese historial —de que version se partio— ya esta en `project.md`, y los commits
  siguen integros en el repositorio del esqueleto.
- **Alternativas descartadas:** borrar `.git`, reiniciar el repositorio con un commit inicial y
  subirlo con push forzado. Lo pidio el usuario en principio y lo desestimo tras ver lo que se perdia.
- ⚠️ **Consecuencia que queda:** `git log` de este repositorio muestra commits que no ocurrieron en
  el proyecto. Los commits anteriores a la primera sesion propia son del esqueleto, no trabajo de
  este proyecto. Como consecuencia buena, `707d572` sigue resolviendo aqui, y la orden de `D-001`
  sigue siendo reproducible.

### D-005 - Consulta de arranque de las lecciones globales
| Campo | Valor |
|---|---|
| Fecha | 2026-09-15 |
| Estado | Vigente |
| Origen | manager |

- **Contexto:** la casilla 9 de salida de `000_preproject` exige consultar, **antes de definir
  alcance**, los bloques de decisiones/arquitectura y de corte del trabajo del archivo de lecciones
  globales, anotando lo que produjeron con el codigo de cada leccion y declarando NO MIRADOS los
  bloques no recorridos. El archivo y su repositorio los declara `project.md`.
- **Decision:** se consultan los bloques **D** (`LG-38`–`LG-45`) y **E** (`LG-46`–`LG-54`) sobre la
  version `5a32165` del archivo, entrando por su indice y sin leerlo entero. Lo que producen:

  | Leccion | Que produce en este proyecto |
  |---|---|
  | `LG-38` | **Cambio.** `CLAUDE.md` remite a un inventario de acciones irreversibles en `constraints.md` que **no existe**. Se propone escribirlo antes de salir de la etapa; pendiente de aprobacion del usuario |
  | `LG-54` | **Cambio.** Evaluacion, observabilidad y seguridad necesitan **dueño y sitio** declarados desde ya, sin construirlas. Pendiente de decision del usuario |
  | `LG-39` | Sin cambio ahora. Las decisiones de una sola via (modelo de datos, identidad, runtime…) se toman al abrir `020_baseline`, no en esta etapa, que no construye producto |
  | `LG-40`, `LG-41` | Sin cambio ahora. Aplican al contrastar la arquitectura contra el esqueleto de `025_wslt` |
  | `LG-42` | Sin cambio: `decisions.md` ya registra el porque, fechado, y revoca en vez de reescribir |
  | `LG-43`, `LG-44`, `LG-45` | Sin cambio ahora. Aplican al escribir codigo y fijar limites del producto |
  | `LG-46`–`LG-53` | Sin cambio: el propio bloque declara que manda el metodo del proyecto, y `_phases/` ya separa prototipo, esqueleto y slices, exige criterio de cierre y distingue tareas de supuestos con disparador |

- **Bloques NO MIRADOS:** A, B, C, F, G, H, I y J. No se recorrieron; no se declaran limpios.
- **Evidencia.** La estructura de bloques, anclada a la version consultada (el repositorio de
  lecciones estaba sin cambios locales: `git status --short` no devolvio nada):

  ```
  $ git -C "C:/Users/USUARIO/Documents/Company_TripleS/TripleS_Lessons" show 5a32165:global_lessons.md | grep -nE "^## Bloque|^\| \*\*LG-(38|54)\*\*" | cut -c1-90
  151:## Bloque A — Evidencia y verificación
  173:## Bloque B — Pruebas
  190:## Bloque C — Documentos, memoria y traspaso
  209:## Bloque D — Decisiones y arquitectura
  213:| **LG-38** | **Lo barato es lo reversible; lo caro es lo que no se deshace** | El có
  224:## Bloque E — Cómo se corta el trabajo
  239:| **LG-54** | **Evaluación, observabilidad y seguridad se declaran el día 1, cuando 
  243:## Bloque F — Medir y experimentar
  260:## Bloque G — Errores, operación y seguridad
  280:## Bloque H — Trabajar con agentes y con dos terminales
  295:## Bloque I — Solo si el proyecto usa modelos de lenguaje
  315:## Bloque J — El método y sus documentos como objeto auditable
  ```

  La ausencia del inventario de `LG-38`, verificada contra `HEAD` (`707d572`):

  ```
  $ git grep -ni "irreversible" 707d572 -- _persistence
  exit=1
  ```

- **Por que:** hacer la consulta antes de `005_discovery` deja que las lecciones cambien el rumbo
  cuando cambiarlo cuesta cero; registrarla con sus codigos es lo que permite saber despues si el
  archivo sirvio.
- **Alternativas descartadas:** leer tambien los bloques A y C, que se activan «siempre». Se dejan
  para cuando haya trabajo que verificar o documentar, porque la casilla pide D y E y el archivo
  prohibe leer de mas. Quedan declarados NO MIRADOS.

### D-006 - Se escribe el inventario de acciones irreversibles
| Campo | Valor |
|---|---|
| Fecha | 2026-09-15 |
| Estado | Vigente |
| Origen | usuario |

- **Contexto:** la consulta de `D-005` encontro que `CLAUDE.md` remite a un inventario de acciones
  irreversibles que no existia en `_persistence/`. En esta misma sesion, el push forzado para
  rehacer el historial (`D-004`) tuvo que clasificarse a criterio por esa falta.
- **Decision:** se escribe el inventario como `C-001` en `constraints.md`, con sus dos tablas, a
  partir del borrador que propuso `manager` y aprobo el usuario. Aplica `LG-38`.
- **Por que:** `LG-38` pide la lista de lo irreversible escrita antes de necesitarla. Sin ella,
  cada clasificacion es criterio y el auditor no puede contrastarla contra nada.
- **Alternativas descartadas:** seguir clasificando a criterio hasta que se repitiera alguna accion.
  Descartada porque ya se habia necesitado una vez en la primera sesion.
- ⚠️ **Una fila no estaba en el borrador aprobado:** «escribir fuera de este repositorio». La anadio
  `manager` porque `CLAUDE.md` ya pone esa accion detras de la aprobacion del usuario; no amplia lo
  que exige permiso, solo lo lista.

### D-007 - Dueno y sitio de evaluacion, observabilidad y seguridad
| Campo | Valor |
|---|---|
| Fecha | 2026-09-15 |
| Estado | Vigente |
| Origen | usuario |

- **Contexto:** `LG-54` (consultada en `D-005`) pide dar dueño y sitio a evaluacion, observabilidad
  y seguridad desde el primer dia, sin construirlas todavia.
- **Decision:**
  - **Dueño de las tres:** `manager`, con aprobacion del usuario sobre lo que declare.
  - **Sitio:** el artefacto «tres preguntas» de `020_baseline` (plantilla
    `_templates/020_baseline/040_three_questions.md`, Paso 9 de `_phases/020_baseline.md`), donde
    cada una se declara con su artefacto, y su version minima construida en `025_wslt`.
- **Por que:** el metodo ya fija ese sitio. Crear otro ahora duplicaria la declaracion en dos
  lugares. Lo que faltaba era el dueño, y que quedara escrito antes de definir alcance.
- **Alternativas descartadas:** que el dueño fuera el usuario, y declarar un sitio propio desde esta
  etapa. El usuario eligio `manager` con su aprobacion; el sitio propio se descarta por duplicar el
  artefacto del metodo.
- ⚠️ **Disparador:** el Paso 9 de `020_baseline`. Hasta entonces esta decision es solo el dueño y
  el sitio; ninguna de las tres tiene todavia su artefacto.
- ⚠️ **Seguridad pesa mas en este proyecto:** el encargo guarda «el historial de juegos registrados
  del usuario» (`_brief/client_brief.md`, linea 294), que puede ser un dato de personas (`A-001`).
  Si lo es, recogerlo exige permiso previo segun `C-001`.

### D-008 - Los barridos de anclaje de protocol-close admiten ordenes indentadas
| Campo | Valor |
|---|---|
| Fecha | 2026-09-15 |
| Estado | Vigente |
| Origen | report_auditor |

- **Contexto:** `F-001` (`_audit/R-001.md`): los patrones que localizan ordenes publicadas en el
  Paso 2d, el CENSO y el CONTROL del Paso 7c y la localizacion del 7c-bis exigen `$ ` en la primera
  columna, y este registro escribe los bloques de comando dentro de vinetas, con dos espacios. El
  cierre de `S-001` salio limpio y dejo el criterio de `T-001` con `<hash>` sin resolver.
- **Decision:** ampliar esos once patrones de `.claude/skills/protocol-close/SKILL.md` para que
  admitan sangria (`[[:space:]]*` delante de `\$ `). La eligio el usuario entre tres opciones.
- **Por que:** el control tiene que ver las ordenes como el registro las escribe de verdad. Una
  convencion de formato dejaria el control dependiendo de que nadie se equivoque, que es justo el
  fallo que abrio el hallazgo.
- **Alternativas descartadas:**
  - **Fijar por convencion que los bloques se escriben sin indentar**, sin tocar el protocolo:
    descartada porque el control seguiria ciego a la primera orden que se escriba en una vineta.
  - **Anclar solo la orden de `T-001` y dejar la causa como `DT-XXX`:** descartada porque el falso
    negativo se repetiria en cada sesion.
  - **Admitir tambien el prefijo de cita `> `:** descartada por `PI-2`. A `45e33a4` no hay ninguna
    orden citada asi en `_persistence/` ni en `_audit/` fuera del informe de sesion, que ya tiene su
    propio patron en el Paso 7c-ter. Orden y salida debajo.
- ⚠️ **Consecuencia:** `.claude/` deja de coincidir con el esqueleto de arranque hasta que se
  promueva (`protocol-promote`, con su puerta). El Paso 2f lo mostrara en cada cierre, pero no bloquea.
- **Verificacion previa**, contra `HEAD` (`45e33a4`):

  ```
  $ git show 45e33a4:_persistence/tasks.md | grep -nE '^[[:space:]]*\$ .*<hash>'
  132:  $ git show <hash>:project.md | grep -cE '<[A-Za-z]'
  $ for f in $(git ls-tree -r --name-only 45e33a4 _persistence _audit | grep -v '_audit/S-001.md'); do n=$(git show 45e33a4:"$f" | grep -cE '^[[:space:]]*> *\$ '); [ "$n" != "0" ] && echo "$f: $n"; done; echo "(fin)"
  (fin)
  ```

- **Prueba del cambio.** Se usa el commit del hallazgo: el patron antiguo no ve nada y el nuevo
  encuentra las seis ordenes indentadas, entre ellas la de `T-001`:

  ```
  $ git diff -U0 5cae773^ 5cae773 -- _persistence _audit ":(exclude)_audit/S-001.md" | grep -E '^\+\$ ' | grep -vE 'git (show|grep|log|diff) [0-9a-f]{7,40}' | wc -l
  0
  $ git diff -U0 5cae773^ 5cae773 -- _persistence _audit ":(exclude)_audit/S-001.md" | grep -E '^\+[[:space:]]*\$ ' | grep -vE 'git (show|grep|log|diff) [0-9a-f]{7,40}' | cat -n
       1	+  $ git ls-tree --name-only 707d572 _phases/
       2	+  $ git log --format='%h %ad %an | %s' --date=short
       3	+  $ git ls-remote origin
       4	+  $ git -C "C:/Users/USUARIO/Documents/Company_TripleS/TripleS_Lessons" show 5a32165:global_lessons.md | grep -nE "^## Bloque|^\| \*\*LG-(38|54)\*\*" | cut -c1-90
       5	+  $ git grep -ni "irreversible" 707d572 -- _persistence
       6	+  $ git show <hash>:project.md | grep -cE '<[A-Za-z]'
  $ git show 5cae773:_persistence/tasks.md | awk '/^### T-/{d=$2} /Criterio de cierre/{f=1} /^---$/{f=0} f&&/^\$ /{print d" | "$0}' | wc -l
  0
  $ git show 5cae773:_persistence/tasks.md | awk '/^### T-/{d=$2} /Criterio de cierre/{f=1} /^---$/{f=0} f&&/^[[:space:]]*\$ /{print d" | "$0}'
  T-001 |   $ git show <hash>:project.md | grep -cE '<[A-Za-z]'
  ```

- **Criterio de cierre:** a ese commit, la skill no conserva ninguna de las formas antiguas del
  patron (en `45e33a4` eran 9, 1 y 2) y lleva la sangria en doce lineas: los once patrones y el
  parrafo que los explica.

  ```
  $ git show e222812:.claude/skills/protocol-close/SKILL.md | grep -cF '^\+\$ '
  0
  $ git show e222812:.claude/skills/protocol-close/SKILL.md | grep -cF '^\$ .*<hash>'
  0
  $ git show e222812:.claude/skills/protocol-close/SKILL.md | grep -cF 'f&&/^\$ /'
  0
  $ git show e222812:.claude/skills/protocol-close/SKILL.md | grep -cF '[[:space:]]*\$ '
  12
  ```

📌 **Ancladas por el Paso 7c-bis al commit `e222812`.** Las cuatro reproducen lo publicado arriba.

### D-009 - Se corrige la cabecera YAML de los agentes de Gate y de acta
| Campo | Valor |
|---|---|
| Fecha | 2026-09-15 |
| Estado | Vigente |
| Origen | usuario |

- **Contexto:** `A-002` quedo refutado. `gate1_auditor`, `gate2_auditor` y `phase_exit_auditor` no
  cargan porque su `description`, sin comillas, contiene `NO decision: …`, y ese `: ` hace invalido el
  YAML de la cabecera. Orden y salida en la nota de `A-002`. El defecto viene del esqueleto de arranque.
- **Decision:** sustituir `NO decision: ` por `NO decision — ` en la `description` de los tres agentes,
  sin tocar nada mas. El usuario pidio hacerlo en esta sesion.
- **Por que:** sin esos tres agentes no se puede emitir el acta de cierre de `000_preproject` ni los
  dictamenes de los Gates adoptados en `D-003`. El cambio es de un caracter y no altera lo que dice
  la descripcion.
- **Alternativas descartadas:**
  - **Entrecomillar la `description` entera:** tambien valida el YAML, pero obliga a escapar las
    comillas dobles que ya lleva dentro («"corre el Gate 1"») y toca mas texto del necesario (`PI-3`).
  - **Dejarlo para otra sesion:** el usuario pidio corregirlo ahora.
- ⚠️ **Consecuencia:** como `D-008`, `.claude/` se aleja un poco mas del esqueleto hasta que se
  promueva. Que los agentes cargan de verdad no lo prueba el parser, sino la sesion (`A-003`).
- **Prueba del cambio.** La misma validacion, que en `45e33a4` fallaba en los tres (nota de `A-002`),
  corrida sobre el arbol de trabajo tras el cambio:

  ```
  $ for a in gate1_auditor gate2_auditor phase_exit_auditor report_auditor session-closer session-starter; do printf '%s ' $a; cat .claude/agents/$a.md | python -c "import sys,re,yaml; s=sys.stdin.read(); fm=re.match(r'^---\r?\n(.*?)\r?\n---',s,re.S).group(1); yaml.safe_load(fm); print('OK')" 2>&1 | grep -E '^(OK|yaml\.)' ; done
  gate1_auditor OK
  gate2_auditor OK
  phase_exit_auditor OK
  report_auditor OK
  session-closer OK
  session-starter OK
  ```

- **Criterio de cierre:** a ese commit, ninguna `description` de agente lleva `: ` y las seis
  cabeceras son YAML valido.

  ```
  $ git grep -nE "^description:.*: " e222812 -- .claude/agents | wc -l
  0
  $ for a in gate1_auditor gate2_auditor phase_exit_auditor report_auditor session-closer session-starter; do printf '%s ' $a; git show e222812:.claude/agents/$a.md | python -c "import sys,re,yaml; s=sys.stdin.read(); fm=re.match(r'^---\r?\n(.*?)\r?\n---',s,re.S).group(1); yaml.safe_load(fm); print('OK')" 2>&1 | grep -E '^(OK|yaml\.)' ; done
  gate1_auditor OK
  gate2_auditor OK
  phase_exit_auditor OK
  report_auditor OK
  session-closer OK
  session-starter OK
  ```

📌 **Ancladas por el Paso 7c-bis al commit `e222812`.** Las dos reproducen lo publicado arriba.

### D-010 - Las cercas de bloque de los controles de las skills admiten sangria
| Campo | Valor |
|---|---|
| Fecha | 2026-09-16 |
| Estado | Vigente |
| Origen | report_auditor |

- **Contexto:** `F-004` (`_audit/R-002.md`): `outside()`, del CONTROL DE PROSA BORRADA de
  `protocol-close`, solo reconoce cercas en la primera columna (`/^```/`), y `decisions.md` y
  `tasks.md` escriben todas las suyas indentadas dentro de vinetas. Sobre el anclaje de `S-002` la
  orden literal marca como prosa borrada nueve lineas que son ordenes sustituidas dentro de bloques.
  El mismo patron esta en otros controles de `protocol-close`, de `protocol-audit` y de
  `protocol-start`; este ultimo no lo cito el auditor.
- **Decision:** sustituir `/^```/` por `/^[[:space:]]*```/` en las doce apariciones de las tres skills
  (seis en `protocol-close`, cuatro en `protocol-audit`, dos en `protocol-start`), sin tocar nada mas.
  La eligio el usuario entre tres opciones.
- **Por que:** es el mismo defecto que `D-008` corrigio en otro control: el control tiene que ver el
  registro tal como se escribe. Corregir solo `outside()` dejaria once controles con la misma ceguera,
  que hoy no da error visible y lo dara en cuanto un bloque indentado contenga una fila o un
  encabezado.
- **Alternativas descartadas:**
  - **Corregir solo `outside()` y registrar el resto como `DT-XXX`:** descartada porque deja el defecto
    latente en once lineas para ahorrar un cambio mecanico identico.
  - **Fijar por convencion cercas en columna cero:** descartada por el mismo motivo que en `D-008`, y
    obligaria a reescribir las 32 cercas indentadas de `decisions.md` y `tasks.md`.
- ⚠️ **Consecuencia:** `.claude/` se aleja un poco mas del esqueleto de arranque hasta que se promueva
  (`DT-001`).
- **Verificacion previa**, contra `HEAD` (`6ab7887`):

  ```
  $ for f in decisions tasks; do printf "$f col0=%s indent=%s\n" $(git show 6ab7887:_persistence/$f.md | grep -cE '^```') $(git show 6ab7887:_persistence/$f.md | grep -cE '^[[:space:]]+```'); done
  decisions col0=0 indent=18
  tasks col0=0 indent=14
  $ git grep -nF '/^```/' 6ab7887 -- .claude | cut -d: -f2,3
  .claude/skills/protocol-audit/SKILL.md:153
  .claude/skills/protocol-audit/SKILL.md:154
  .claude/skills/protocol-audit/SKILL.md:315
  .claude/skills/protocol-audit/SKILL.md:316
  .claude/skills/protocol-close/SKILL.md:218
  .claude/skills/protocol-close/SKILL.md:219
  .claude/skills/protocol-close/SKILL.md:256
  .claude/skills/protocol-close/SKILL.md:257
  .claude/skills/protocol-close/SKILL.md:1462
  .claude/skills/protocol-close/SKILL.md:1826
  .claude/skills/protocol-start/SKILL.md:181
  .claude/skills/protocol-start/SKILL.md:182
  $ outside() { awk '/^```/{f=!f; next} !f'; }; for f in _persistence/decisions.md _persistence/tasks.md; do git show e222812:"$f" | outside > a; git show 4b27ae4:"$f" | outside > b; echo "== $f =="; diff a b | grep -c '^<'; done
  == _persistence/decisions.md ==
  6
  == _persistence/tasks.md ==
  3
  ```

- **Prueba del cambio.** La `outside()` tal como queda escrita en la skill, sobre el mismo anclaje:

  ```
  $ outside() { awk '/^[[:space:]]*```/{f=!f; next} !f'; }; for f in _persistence/decisions.md _persistence/tasks.md; do git show e222812:"$f" | outside > a; git show 4b27ae4:"$f" | outside > b; echo "== $f =="; diff a b | grep '^<'; done; echo fin
  == _persistence/decisions.md ==
  == _persistence/tasks.md ==
  fin
  ```

- **Criterio de cierre:** a ese commit, ninguna de las tres skills conserva la forma antigua y llevan
  la nueva en seis, cuatro y dos lineas.

  ```
  $ git grep -nF '/^```/' 101db28 -- .claude | wc -l
  0
  $ git grep -cF '/^[[:space:]]*```/' 101db28 -- .claude | cut -d: -f2-
  .claude/skills/protocol-audit/SKILL.md:4
  .claude/skills/protocol-close/SKILL.md:6
  .claude/skills/protocol-start/SKILL.md:2
  ```

📌 **Ancladas por el Paso 7c-bis al commit `101db28`.** Las dos reproducen lo publicado arriba.

### D-011 - Firmas del Gate 1 y del Gate 2
| Campo | Valor |
|---|---|
| Fecha | 2026-09-16 |
| Estado | Vigente |
| Origen | usuario |

- **Contexto:** `D-003` adopto los dos Gates y dejo sin fijar quien ejerce sus dos firmas, que
  `_phases/010_prototype.md` exige registradas con su `D-XXX` antes de lanzar el Gate. `project.md`
  nombra al usuario como patrocinador solo para el Gate 1, y sin decision que lo respalde; para el
  Gate 2 no nombra a nadie. Verificado contra `HEAD` (`6ab7887`):

  ```
  $ git show 6ab7887:project.md | grep -nE "quien decide si se construye|quien decide si se sigue invirtiendo|como patrocinador"
  95:construye el MVP, se replantea o se detiene es el usuario, como patrocinador**, y esa decision queda
  $ git show 6ab7887:_persistence/decisions.md | grep -n "firma"
  193:- ⚠️ **Lo que esta decision NO fija:** la asignacion de las firmas de cada Gate, que
  ```

- **Decision:** en los dos Gates, la **firma tecnica** (el dictamen) es del agente de Gate
  —`gate1_auditor` en el Gate 1, `gate2_auditor` en el Gate 2— y la **firma del patrocinador** (se
  construye o se sigue invirtiendo, se replantea o se detiene) es del **usuario**. `manager` lanza
  cada Gate y registra la decision con su `D-XXX`, pero no firma. La eligio el usuario.
- **Por que:** cumple la regla de las dos firmas de `_methodology/000_method.md`: la revision no vio
  construir lo que juzga, y quien decide responde por la inversion. `manager` dirige y construye
  el prototipo y el producto minimo, y por eso no puede ser el testigo.
- **Alternativas descartadas:**
  - **Firma tecnica de `manager`:** el usuario lo planteo al principio («una firma tuya») y despues
    eligio el agente de Gate. Descartada porque quien construye no puede ser su propio testigo.
  - **Patrocinador = el cliente del encargo, en los dos Gates o solo en uno:** el usuario eligio
    firmar el mismo.
- ⚠️ **Lo que esta decision NO fija:** quien firma la aprobacion del acta de cierre de cada etapa
  (`phase_exit_auditor` emite solo la revision tecnica). Esta decision cubre los Gates y nada mas.
- **Criterio de cierre:** a ese commit, la decision nombra a los dos agentes de Gate y al usuario como
  patrocinador.

  ```
  $ git show 101db28:_persistence/decisions.md | awk '/^### D-011/{f=1} /^### D-012/{f=0} f' | grep -v '\$ ' | grep -cE 'gate1_auditor. en el Gate 1, .gate2_auditor. en el Gate 2|es del \*\*usuario\*\*'
  2
  ```

📌 **Anclada por el Paso 7c-bis al commit `101db28`.** Reproduce lo publicado arriba.

### D-012 - Cosecha de lecciones de 000_preproject
| Campo | Valor |
|---|---|
| Fecha | 2026-09-16 |
| Estado | Vigente |
| Origen | usuario |

- **Contexto:** la casilla 10 de la condicion de salida de `_phases/000_preproject.md` exige que
  ninguna leccion de la etapa quede `Sin evaluar`. Habia cuatro, `L-001` a `L-004`. Se clasificaron
  con los cuatro filtros de la seccion de promocion de `global_lessons.md` (version 3), y el usuario
  aprobo la propuesta entera en la puerta de `protocol-harvest`. No hay auditoria que use el archivo
  global como vara, porque el proyecto no adopto ese uso.
- **Decision:**
  - `L-001` → **promovida a `LG-105`**, en el Bloque J, con referencia en §1 («abrir un proyecto
    nuevo»). Pasa los cuatro filtros: un solo caso, pero con coste concreto e irreversible (`D-004`).
  - `L-003` → **ya cubierta por `LG-06`** (filtro 4). `LG-04` y `LG-22` completan el caso.
  - `L-002` → **solo proyecto** (filtro 2): un solo caso y sin coste demostrado.
  - `L-004` → **solo proyecto** (filtro 2): un solo caso con coste menor, y su forma de aplicarla
    depende de YAML y de Claude Code.
  - `L-005` → **ya cubierta por `LG-103`** y `L-006` → **ya cubierta por `LG-101`** (filtro 4).
    Nacieron en esta misma sesion, despues de la puerta: son dos fallos corregidos al registrar
    `D-010` y `D-011`. Se clasifican al escribirlas porque no suben nada fuera, y asi la etapa no
    vuelve a tener lecciones `Sin evaluar`. No forman parte de lo que el usuario aprobo en la puerta.
  - El archivo global pasa a la **version 4** (2026-09-16, 105 lecciones), con commit **`9e883a9`**
    en `TripleS_Lessons`, subido a `origin/main`.
- **Por que:** cierra la casilla 10 sin subir anecdotas. La seccion de promocion pide que una leccion
  se repita, o que tenga un coste concreto, antes de subir.
- **Alternativas descartadas:**
  - **Dejar `L-002` y `L-004` en `Sin evaluar` hasta que se repitan:** su forma podria ser global,
    pero `protocol-harvest` no tiene un destino «en espera» y la casilla 10 no se podria marcar.
  - **Promover `L-003` como enmienda de `LG-06`:** `F-004` la repitio con la misma forma, sin una
    cara nueva, asi que no anade nada.
- **Verificacion**, sobre el commit del repositorio de lecciones:

  ```
  $ git -C "C:/Users/USUARIO/Documents/Company_TripleS/TripleS_Lessons" show 9e883a9:global_lessons.md | grep -nE '^\| \*\*LG-105\*\*|Versión: 4' | cut -c1-80
  26:> **Versión: 4 · 2026-09-16** · 105 lecciones · 10 bloques
  336:| **LG-105** | **Un paso de arranque que no deja rastro se salta sin que nad
  $ git -C "C:/Users/USUARIO/Documents/Company_TripleS/TripleS_Lessons" ls-remote origin refs/heads/main | cut -c1-7
  9e883a9
  ```

- **Criterio de cierre:** a ese commit, ninguna leccion de `000_preproject` queda `Sin evaluar`.

  ```
  $ git show 101db28:_persistence/lessons.md | grep -E '^\| \[L-' | grep '000_preproject' | grep -c 'Sin evaluar'
  0
  ```

📌 **Anclada por el Paso 7c-bis al commit `101db28`.** Reproduce lo publicado arriba.

### D-013 - El anclaje de criterios de cierre compara la salida anclada con la publicada
| Campo | Valor |
|---|---|
| Fecha | 2026-09-16 |
| Estado | Vigente |
| Origen | report_auditor |

- **Contexto:** `F-005` (`_audit/R-003.md`): en el anclaje de `S-003` (`2a72df8`), el criterio de
  cierre de `T-006` publicaba para su segunda orden (`git grep -cF` sobre `<hash>`) tres lineas sin
  prefijo, que esa orden no puede devolver sobre un commit. La misma orden en `D-010` termina en
  `| cut -d: -f2-`, y ese filtro ya estaba en `101db28`: se perdio al copiar el criterio a `T-006`. El
  anclaje sustituyo la salida por la real y la linea `📌` afirmo que reproducia, contra la regla del
  Paso 7c-bis de `protocol-close`, que manda detenerse y pegar las dos. El informe no lo menciona.
- **Decision:** aceptar el hallazgo entero, y hacer las dos cosas que recomienda: (1) una nota fechada
  bajo el bloque de `T-006` que vuelve a publicar las dos salidas y dice que la linea `📌` no era
  exacta, sin reescribir lo commiteado; (2) un CONTROL DE SALIDA REPRODUCIDA en el Paso 7c-bis que
  compara, entrada por entrada, las lineas de salida de los bloques de criterio de cierre del commit
  de la sesion con las del arbol ya anclado, con su rotulo en la NOTA DE CIERRE y en la lista del
  Paso 7c-ter. La eligio el usuario entre tres opciones.
- **Por que:** la regla de detenerse ya estaba escrita y no se cumplio: «coincide» se juzgaba a ojo.
  Es el mismo patron que abrio el CONTROL DE PROSA BORRADA — una regla de redaccion que falla se
  convierte en una comparacion que devuelve lineas o no las devuelve.
- **Alternativas descartadas:**
  - **Solo la nota:** descartada porque corrige el registro pero deja intacto el mecanismo que
    permitio el defecto; el siguiente anclaje depende otra vez de mirar bien.
  - **La nota ahora y el control como `DT-XXX`:** descartada porque el control es corto, se pudo
    probar en esta misma sesion sobre dos anclajes reales, y aplazarlo no ahorra nada.
  - **Anadir `| cut -d: -f2-` a la orden de `T-006`:** descartada; cambia lo que se publico como
    evidencia, que es justo lo que el 7c-bis prohibe.
- ⚠️ **Consecuencia:** `.claude/` se aleja un poco mas del esqueleto de arranque hasta que se promueva
  (`DT-001`).
- **Verificacion previa**, contra `HEAD` (`613ef8a`). La salida vigente de `T-006`, el cambio que hizo
  el anclaje, el origen del filtro de `D-010` y la regla incumplida:

  ```
  $ git show 613ef8a:_persistence/tasks.md | awk '/^### T-006/,0' | grep -E '101db28:|📌'
    101db28:.claude/skills/protocol-audit/SKILL.md:4
    101db28:.claude/skills/protocol-close/SKILL.md:6
    101db28:.claude/skills/protocol-start/SKILL.md:2
  📌 **Anclada por el Paso 7c-bis al commit `101db28`.** Las dos reproducen lo publicado arriba.
  $ git diff 101db28 2a72df8 -- _persistence/tasks.md | grep -E '^[-+] ' | grep -v '\$ '
  -  .claude/skills/protocol-audit/SKILL.md:4
  -  .claude/skills/protocol-close/SKILL.md:6
  -  .claude/skills/protocol-start/SKILL.md:2
  +  101db28:.claude/skills/protocol-audit/SKILL.md:4
  +  101db28:.claude/skills/protocol-close/SKILL.md:6
  +  101db28:.claude/skills/protocol-start/SKILL.md:2
  $ git log --format="%h %s" -S"| cut -d: -f2-" -- _persistence/decisions.md
  101db28 S-003: firmas de los Gates (D-011), hallazgo F-004 de R-002 atendido (D-010, T-006) y cosecha de lecciones de 000_preproject (D-012)
  $ git show 613ef8a:.claude/skills/protocol-close/SKILL.md | grep -n "Si la salida anclada NO coincide"
  1787:🚨 **Si la salida anclada NO coincide con la publicada, te detienes.** No la sustituyes y no
  ```

- **Criterio de cierre:** a ese commit, la funcion `salidas()` escrita en la skill señala las seis
  lineas de `T-006` en el anclaje de `S-003` y ninguna en el de `S-002`, y su rotulo aparece dos veces: en la lista del 7c-ter y en la plantilla de la NOTA DE
  CIERRE.

  ```
  $ eval "$(git show c07680f:.claude/skills/protocol-close/SKILL.md | grep -F 'salidas() {')"; for p in "101db28 2a72df8" "e222812 4b27ae4"; do set -- $p; for f in _persistence/decisions.md _persistence/tasks.md; do echo "== $1..$2 $f"; diff <(git show $1:"$f" | salidas) <(git show $2:"$f" | salidas) | grep -cE '^[<>]'; done; done
  == 101db28..2a72df8 _persistence/decisions.md
  0
  == 101db28..2a72df8 _persistence/tasks.md
  6
  == e222812..4b27ae4 _persistence/decisions.md
  0
  == e222812..4b27ae4 _persistence/tasks.md
  0
  $ git show c07680f:.claude/skills/protocol-close/SKILL.md | grep -cF '**CONTROL DE SALIDA REPRODUCIDA — salida:**'
  2
  ```

📌 **Anclada por el Paso 7c-bis al commit `c07680f`.** Las dos reproducen lo publicado arriba.

### D-014 - Cosecha de L-007
| Campo | Valor |
|---|---|
| Fecha | 2026-09-16 |
| Estado | Vigente |
| Origen | manager |

- **Contexto:** al repasar la condicion de salida de `000_preproject`, la casilla 10 fallaba: `L-007`,
  escrita en esta sesion al atender `F-005` (`D-013`), quedaba `Sin evaluar`. El usuario pidio
  cosecharla con `protocol-harvest`. Se contrasto con los cuatro filtros de la seccion de promocion
  de `global_lessons.md` (version 4) y con las entradas que su indice por sintoma da para «dos copias
  del mismo documento discrepan» (`LG-08`, `LG-98`) y con `LG-103`.
- **Decision:** `L-007` → **ya cubierta por `LG-98`** (filtro 4). Su forma general —una copia del
  mismo bloque diverge porque nadie comprueba que siga coincidiendo con el original— es la de
  `LG-98`, y su «como se comprueba» es la accion de `L-007`. `LG-103` (reejecutar la orden copiada
  del archivo) habria detectado la divergencia. No sube nada al archivo global, que sigue en la
  **version 4** (`9e883a9`); por eso no hay puerta que abrir.
- **Por que:** la seccion de promocion pide ademas que una leccion se repita o tenga un coste
  concreto; `L-007` es un solo caso y su coste fue reversible (una nota fechada).
- **Alternativas descartadas:**
  - **Enmendar `LG-98` para nombrar las copias dentro de un mismo registro:** su enunciado ya habla
    de copias en general; no es una cara nueva, es el mismo caso en otro sitio.
  - **`Solo proyecto`:** falso; la forma sobrevive al cambio de lenguaje y dominio (filtro 1). Lo que
    la descarta es el filtro 4, y anotarlo con otro filtro borraria la referencia a `LG-98`.
- **Verificacion**, sobre el repositorio de lecciones:

  ```
  $ git -C "C:/Users/USUARIO/Documents/Company_TripleS/TripleS_Lessons" show 9e883a9:global_lessons.md | grep -nE '^\| \*\*LG-98\*\*|Versión: 4' | cut -c1-90
  26:> **Versión: 4 · 2026-09-16** · 105 lecciones · 10 bloques
  329:| **LG-98** | **Un contrato que solo conoce una parte no es un contrato: es una suposi
  $ git -C "C:/Users/USUARIO/Documents/Company_TripleS/TripleS_Lessons" ls-remote origin refs/heads/main | cut -c1-7
  9e883a9
  ```

- **Criterio de cierre:** a ese commit, ninguna leccion de `000_preproject` queda `Sin evaluar`.

  ```
  $ git show c07680f:_persistence/lessons.md | grep -E '^\| \[L-' | grep '000_preproject' | grep -c 'Sin evaluar'
  0
  ```

📌 **Anclada por el Paso 7c-bis al commit `c07680f`.** Reproduce lo publicado arriba.

### D-015 - Etapa 000_preproject cerrada
| Campo | Valor |
|---|---|
| Fecha | 2026-09-16 |
| Estado | Revocada en parte por D-020 |
| Origen | usuario |

- **Contexto:** con los hallazgos `F-001` a `F-005` en `Implementado` y `R-004` sin hallazgos,
  `manager` repaso una por una las diez casillas de la condicion de salida de
  `_phases/000_preproject.md` sobre `f2b7662` (arbol limpio). Despues lanzo `phase_exit_auditor`, que
  dejo el acta `_audit/000_preproject/005_phase_exit_record_001.md` (commit `4fad4dd`) con dictamen
  **CASILLAS SATISFECHAS**: 10 CUMPLE, 0 NO CUMPLE, 0 NO COMPROBABLE.
- **Decision:** el usuario, como patrocinador, firma **ETAPA CERRADA** para `000_preproject`. Esta
  entrada es la segunda firma que pide la seccion 5.2 del acta; el acta no se edita, porque la
  escribio el agente y su dictamen es sobre `f2b7662`.
- **Por que:** las dos firmas coinciden: la revision tecnica independiente dio las diez casillas
  satisfechas, y el patrocinador acepta el andamio como suficiente para empezar el producto.
- **Alternativas descartadas:** **ETAPA NO CERRADA**. No habia casilla sin cumplir ni hallazgo abierto
  que la sostuviera.
- **Consecuencia:** la etapa siguiente declarada es `005_discovery`. Al arrancarla se activa el
  disparador de `A-001`, y la diferencia `005_discovery/` del Paso 2c (`D-002`) tiene que
  desaparecer con su primer artefacto.
- **Verificacion previa de `manager`**, contra `HEAD` (`f2b7662`) con el arbol limpio. Las ordenes
  van por casilla en este orden: 1, 2, 3, 8, 7 (fuga), 7 (codigos), 5 y 10. Las casillas 4, 6 y 9 se
  comprobaron leyendo el tablero, `git log` y `D-005`, y constan con su orden en el acta:

  ```
  $ diff <(git ls-tree -d --name-only f2b7662 | sed 's|$|/|' | sort) <(git show f2b7662:project.md | sed -n '/^## Carpetas propias/,/^## /p' | grep -oE '^\| `[^`]+/`' | tr -d '|` ' | sort)
  1a2
  > 005_discovery/
  8a10
  > temporal/
  $ git ls-tree --name-only f2b7662 -- .claude/agents/ | wc -l
  6
  $ for f in tasks decisions constraints assumptions lessons techdebt progress; do diff <(git show f2b7662:_persistence/$f.md | awk '/^[[:space:]]*```/{c=!c; next} !c' | grep -oE '^\| \[?[A-Z]+-[0-9]+' | grep -oE '[A-Z]+-[0-9]+' | sort -u) <(git show f2b7662:_persistence/$f.md | awk '/^[[:space:]]*```/{c=!c; next} !c' | grep -oE '^#{3} [A-Z]+-[0-9]+' | grep -oE '[A-Z]+-[0-9]+' | sort -u); done | wc -l
  0
  $ git show f2b7662:_audit/findings.md | grep -E '^\| \[F-[0-9]+\]' | grep -vc '| Implementado |'
  0
  $ git grep -nE "YouOtto|Company_TripleS|github.com" f2b7662 -- .claude CLAUDE.md _phases _methodology _templates _workflow | wc -l
  0
  $ git grep -noE '\b[A-Z]{1,2}-[0-9]+\b' f2b7662 -- _phases _workflow | grep -vE ':PI-[0-9]+$' | wc -l
  0
  $ git grep -c 'SIN COMPROBAR' f2b7662 -- '_audit/S-*.md' | wc -l
  0
  $ git show f2b7662:_persistence/lessons.md | grep -E '^\| \[L-' | grep '000_preproject' | grep -c 'Sin evaluar'
  0
  ```

  Las dos diferencias del primer control tienen su razon escrita: `005_discovery/` en `D-002` y
  `temporal/` en la tabla «Carpetas propias» de `project.md` (excluida en `.gitignore`).

### D-016 - Promocion al esqueleto de los seis archivos de DT-001
| Campo | Valor |
|---|---|
| Fecha | 2026-09-16 |
| Estado | Vigente |
| Origen | usuario |

- **Contexto:** el usuario evaluo `DT-001`, la confirmo y pidio pagarla en el acto con
  `protocol-promote`, con una condicion expresa: todo lo que suba al esqueleto tiene que ser
  agnostico. Los tres disparadores se cumplian: lo pidio el usuario, las seis areas estaban limpias y
  subidas en `4fad4dd` (sin `ahead`), y no habia auditoria en curso.
- **Decision:** se promueven los seis archivos, aprobados uno por uno por el usuario:
  `.claude/agents/gate1_auditor.md`, `gate2_auditor.md`, `phase_exit_auditor.md` (`D-009`), y
  `.claude/skills/protocol-audit/SKILL.md`, `protocol-start/SKILL.md` y `protocol-close/SKILL.md`
  (`D-008`, `D-010`, `D-013`). No se dejo ninguno fuera. Hash de origen `4fad4dd`; commit del
  esqueleto `4d20ce2`, subido.
- **Por que:** los seis corrigen defectos del propio esqueleto: tres agentes que no cargaban por la
  cabecera YAML y controles que no veian ordenes ni cercas con sangria. Un proyecto que clonara
  `707d572` los heredaba.
- **Alternativas descartadas:** **confirmar la deuda y promover mas adelante.** Con la etapa recien
  cerrada el metodo estaba auditado sin hallazgos abiertos; esperar a `005_discovery` acumulaba mas
  desfase en la misma puerta.
- **Hallazgos:** ninguno. Nada existia solo en el esqueleto.
- **Comprobacion del supuesto del Paso 2:** se leyeron las 40 lineas que la promocion borra (1, 1, 1,
  4, 2 y 31). Todas eran versiones anteriores de patrones y parrafos ya reescritos aqui; ninguna era
  algo que un proyecto generico necesitara.
- **Final de linea:** los tres agentes eran CRLF aqui y LF en el esqueleto, y se copiaron como LF; las
  tres skills eran LF en los dos y se copiaron byte a byte.
- **Verificacion.** Controles de agnosticismo sobre el origen, antes de la puerta. El tercero es el
  barrido ensanchado; su unica linea es la palabra comun «USUARIOS», no un dato propio, en un archivo
  que no se promovio:

  ```
  $ git grep -nE "YouOtto|Company_TripleS|github.com" 4fad4dd -- .claude CLAUDE.md _phases _methodology _templates _workflow | wc -l
  0
  $ git grep -noE '\b[A-Z]{1,2}-[0-9]+\b' 4fad4dd -- _phases _workflow | grep -vE ':PI-[0-9]+$' | wc -l
  0
  $ git grep -nE 'USUARIO|jdrodriguez|gmail|TripleS|Triple S|RaidomAI|[A-Z]:[\/]|/Users/|/home/|Documents[\/]|[Gg]it[Hh]ub|gitlab|bitbucket|https?://' 4fad4dd -- .claude CLAUDE.md _phases _methodology _templates _workflow
  4fad4dd:_templates/010_prototype/025_business_validation.md:14:> 🚨 **SESION APARTE, CON EL PATROCINADOR, SIN USUARIOS DELANTE.**
  ```

  El commit del esqueleto y su remoto:

  ```
  $ git -C "C:/Users/USUARIO/Documents/Company_TripleS/SDAI_TripleS" show --stat --format='%h %s' 4d20ce2 | tail -7
   .claude/agents/gate1_auditor.md        |   2 +-
   .claude/agents/gate2_auditor.md        |   2 +-
   .claude/agents/phase_exit_auditor.md   |   2 +-
   .claude/skills/protocol-audit/SKILL.md |   8 +--
   .claude/skills/protocol-close/SKILL.md | 115 ++++++++++++++++++++++++---------
   .claude/skills/protocol-start/SKILL.md |   4 +-
   6 files changed, 93 insertions(+), 40 deletions(-)
  $ git -C "C:/Users/USUARIO/Documents/Company_TripleS/SDAI_TripleS" ls-remote origin refs/heads/main | cut -c1-7
  4d20ce2
  ```

  Barrido del Paso 1 despues de promover (sin salida: el desfase cerro) y Paso 1b sobre el commit del
  esqueleto:

  ```
  $ ESQ="C:/Users/USUARIO/Documents/Company_TripleS/SDAI_TripleS"; for d in .claude _phases _methodology _templates _workflow; do diff -rq --strip-trailing-cr "$ESQ/$d" "$d"; done; diff -q --strip-trailing-cr "$ESQ/CLAUDE.md" CLAUDE.md; echo "exit=$?"
  exit=0
  $ ESQ="C:/Users/USUARIO/Documents/Company_TripleS/SDAI_TripleS"; for p in 005_project.md:project.md 010_progress.md:_persistence/progress.md 015_tasks.md:_persistence/tasks.md 020_decisions.md:_persistence/decisions.md 025_constraints.md:_persistence/constraints.md 030_assumptions.md:_persistence/assumptions.md 035_lessons.md:_persistence/lessons.md 040_techdebt.md:_persistence/techdebt.md 045_audit_index.md:_audit/index.md 050_audit_findings.md:_audit/findings.md; do t=${p%%:*}; c=${p#*:}; printf '%3d  %s\n' "$(diff --strip-trailing-cr <(git -C "$ESQ" show 4d20ce2:_templates/000_preproject/$t) <(git -C "$ESQ" show 4d20ce2:$c) | grep -c '^[<>]')" "$c"; done
    0  project.md
    0  _persistence/progress.md
    0  _persistence/tasks.md
    0  _persistence/decisions.md
    0  _persistence/constraints.md
    0  _persistence/assumptions.md
    0  _persistence/lessons.md
    0  _persistence/techdebt.md
    0  _audit/index.md
    0  _audit/findings.md
  ```

- ⚠️ **El barrido de despues compara con el arbol de trabajo**, que en las seis areas es identico a
  `4fad4dd` (sin cambios sin commitear alli). El cambio de `DT-001` a `Implementada` lo registra el
  cierre, con este `D-016` como evidencia.

### D-017 - El CONTROL DE SALIDA REPRODUCIDA declara que no reejecuta
| Campo | Valor |
|---|---|
| Fecha | 2026-09-16 |
| Estado | Vigente |
| Origen | report_auditor |

- **Contexto:** primera recomendacion sin hallazgo de `R-004` (seccion 5): el CONTROL DE SALIDA
  REPRODUCIDA del Paso 7c-bis compara el **texto** de la salida antes y despues del anclaje y no
  reejecuta la orden. Detecta que se sustituya una salida, pero no que se pegue una salida que la
  orden no devuelve. Verificado contra `HEAD` (`4fad4dd`): la funcion solo extrae texto con `awk`.

  ```
  $ git show 4fad4dd:.claude/skills/protocol-close/SKILL.md | grep -nE 'salidas\(\)' | cut -c1-60
  1884:salidas() { awk '/^### /{c=0} /^### [DT]-/{d=$2} /Crite
  ```

- **Decision:** la recomendacion **es correcta**. Se acepta en dos partes: el Paso 7c-bis declara por
  escrito lo que el control detecta y lo que no (`T-008`), y reejecutar las ordenes ancladas se deja
  como deuda (`DT-002`). Lo decidio el usuario al evaluar las tres recomendaciones.
- **Por que:** un control que no declara su limite se lee como si cubriera mas de lo que cubre.
  Reejecutar de forma automatica ordenes del registro no es gratis: algunas apuntan a otros
  repositorios, usan `eval` o dependen del estado de la maquina.
- **Alternativas descartadas:**
  - **Implementar ya la reejecucion:** caro y con riesgo de ejecutar ordenes con efectos fuera del
    repositorio; se deja para cuando haya un criterio de que ordenes son reejecutables.
  - **No hacer nada:** el limite quedaria solo en una auditoria, sin rastro en el protocolo.
- ⚠️ **Consecuencia:** cambiar `protocol-close` vuelve a separar `.claude/` del esqueleto, recien
  alineado en `D-016`. Conviene hacer `T-008` y `T-009` en la misma sesion y promoverlas juntas.

### D-018 - No se corrige el recuento de la NOTA DE CIERRE de S-004
| Campo | Valor |
|---|---|
| Fecha | 2026-09-16 |
| Estado | Vigente |
| Origen | report_auditor |

- **Contexto:** segunda recomendacion sin hallazgo de `R-004`: la NOTA DE CIERRE de `S-004` habla de
  «cuatro» ordenes no anclables (2, 3, 8, 9) cuando la tabla del Paso 2d marca tambien la 6. Verificado
  contra `HEAD` (`4fad4dd`):

  ```
  $ git show 4fad4dd:_audit/S-004.md | grep -nF '(2, 3, 8, 9)' | cut -c1-60
  249:Las cuatro marcadas «no anclable todavia» (2, 3, 8, 9)
  258:todavia» arriba (2, 3, 8, 9) son, en realidad, dos orde
  ```

- **Decision:** **no se implementa.** La recomendacion es cierta, pero no tiene efecto: el propio
  auditor dice que el desglose posterior cuenta 5 y que el registro no cambia. Lo decidio el usuario.
- **Por que:** `_audit/S-004.md` es un informe ya entregado y auditado; los informes no se reescriben,
  y una nota fechada para una inexactitud de redaccion sin efecto aporta ruido, no evidencia.
- **Alternativas descartadas:** **nota fechada en `S-004.md`.** El archivo es del cierre, no de
  `manager`, y la inexactitud ya queda registrada en `R-004` y en esta entrada.

### D-019 - El anclaje traduce las ordenes git diff --cached del informe
| Campo | Valor |
|---|---|
| Fecha | 2026-09-16 |
| Estado | Vigente |
| Origen | report_auditor |

- **Contexto:** tercera recomendacion sin hallazgo de `R-004`: la seccion 1 del informe anclado de
  `S-004` conserva `git diff --cached -U0 …` como orden de los recuentos de hunks, que solo tiene
  sentido antes del commit; anclada seria `git diff -U0 c07680f^ c07680f`. Verificado contra `HEAD`
  (`4fad4dd`): la plantilla del informe ya pide anclar la **lista** de archivos, pero no dice nada de
  las ordenes `--cached` escritas en linea en la prosa de la seccion 1.

  ```
  $ git show 4fad4dd:_audit/S-004.md | grep -c -- 'diff --cached'
  9
  ```

- **Decision:** **se acepta** como `T-009`: el Paso 7c del cierre, al anclar el informe, traduce toda
  orden `git diff --cached` de la seccion 1 a su forma anclada `git diff <hash>^ <hash>`. Lo decidio el
  usuario.
- **Por que:** no es un descuido de `S-004`, es un hueco del metodo: se repetira en cada cierre. Una
  orden que ya no reproduce deja de ser evidencia aunque su cifra sea correcta.
- **Alternativas descartadas:** **no implementarla por ser inocua en `S-004`.** La cifra de hoy es
  cierta, pero la orden no la reproduce, que es exactamente lo que el anclaje existe para evitar.

### D-020 - La firma del patrocinador se escribe en el acta de cierre
| Campo | Valor |
|---|---|
| Fecha | 2026-09-16 |
| Estado | Vigente |
| Origen | report_auditor |

- **Contexto:** `F-006` de `R-005`: el acta `_audit/000_preproject/005_phase_exit_record_001.md`
  conserva la tabla 5.2 en `<pendiente>` y su cabecera dice que, mientras falte la segunda firma, la
  etapa sigue abierta; `D-015` da la etapa por cerrada y dice que el acta no se edita. El registro
  afirma dos estados a la vez. Verificado vigente contra `HEAD` (`673a97a`):

  ```
  $ git show 673a97a:_audit/000_preproject/005_phase_exit_record_001.md | grep -nE "Mientras falte|^\| (Quien|Fecha|Decision) \| .<pendiente>"
  21:> ⛔ **Mientras falte la segunda firma, la etapa sigue abierta**, por bien que salgan las casillas.
  430:| Quien | `<pendiente>` |
  431:| Fecha | `<pendiente>` |
  432:| Decision | `<pendiente>` |
  $ git show 673a97a:_persistence/decisions.md | grep -n "el acta no se edita"
  770:  entrada es la segunda firma que pide la seccion 5.2 del acta; el acta no se edita, porque la
  $ git log --oneline 5884e98..673a97a -- _audit/000_preproject/
  (sin salida)
  ```

- **Decision:** se acepta la opcion (a) de la recomendacion: el patrocinador firma en la tabla 5.2
  del acta como **JD Rodriguez - Main Sponsor**, fecha 2026-09-16, **ETAPA CERRADA**. `manager`
  transcribe la firma que el usuario dio literal en la conversacion; no la redacta. Revoca `D-015`
  **solo** en la clausula «el acta no se edita»: el cierre de `000_preproject` que `D-015` firmo se
  mantiene, con la misma fecha y el mismo contenido. Registrado en `T-010`.
- **Por que:** la plantilla del acta y `protocol-phase-exit` situan la aprobacion en el propio acta,
  y lo que prohiben es que la rellene el agente, no el patrocinador. Escribirla ahi cierra la
  contradiccion en el artefacto formal sin tocar metodo ni plantilla. La seccion 5.1 y el dictamen
  sobre `f2b7662` no se tocan.
- **Alternativas descartadas:**
  - **(b) Escribir el criterio de `D-015` en la plantilla y en `protocol-phase-exit`** (firma solo en
    `decisions.md`): cambia el metodo copiable para acomodar una excepcion de este proyecto, y
    separa otra vez `.claude/` y `_templates/` del esqueleto recien alineado en `D-016`.
  - **Rechazar `F-006`:** la contradiccion se sostiene contra el repositorio (bloque de arriba).
- **Clasificacion de la accion:** editar la tabla 5.2 del acta no esta en ninguna de las dos tablas
  de `constraints.md`; `manager` la clasifica **reversible a criterio**, porque solo rellena campos
  en blanco, no borra evidencia y queda en `git`.
- **Criterio de cierre:** a ese commit, el acta no conserva ningun `<pendiente>` y la tabla 5.2 lleva
  la firma, la fecha y la decision.

  ```
  $ git show 081385a:_audit/000_preproject/005_phase_exit_record_001.md | grep -cF '<pendiente>'
  0
  $ git show 081385a:_audit/000_preproject/005_phase_exit_record_001.md | grep -nE '^\| (Quien|Fecha|Decision) \| ' | tail -3
  430:| Quien | JD Rodriguez - Main Sponsor |
  431:| Fecha | 2026-09-16 |
  432:| Decision | ETAPA CERRADA |
  ```

📌 **Ancladas por el Paso 7c-bis al commit `081385a`.** Las dos reproducen lo publicado arriba.

### D-021 - La NOTA DE CIERRE publica la forma anclada de la orden del Paso 2d
| Campo | Valor |
|---|---|
| Fecha | 2026-09-16 |
| Estado | Vigente |
| Origen | report_auditor |

- **Contexto:** `F-007` de `R-005`: la seccion 7 de `S-005` publica la primera orden del Paso 2d en
  su forma de staging y dice que la NOTA DE CIERRE trae la version anclada, pero esa version no esta
  en el informe. Verificado vigente contra `HEAD` (`673a97a`): la promesa esta y la orden anclada de la
  seccion 7 no (la unica `git diff -U0 5884e98` del informe es otra orden, la de la linea 293). La
  plantilla de la seccion 7 exige la forma anclada o su equivalencia al lado, pero la instruccion de la
  NOTA DE CIERRE, que es donde el Paso 7c escribe despues del commit, no la pide:

  ```
  $ git show 673a97a:_audit/S-005.md | grep -nE "NOTA DE CIERRE trae la version anclada|git diff -U0 5884e98\^ 5884e98 -- _persistence _audit"
  178:en su forma de staging, y la NOTA DE CIERRE trae la version anclada):
  $ git show 673a97a:_audit/S-005.md | grep -n "git diff -U0 5884e98"
  293:$ for f in $(git diff --name-only 5884e98^ 5884e98 -- _persistence _audit ":(exclude)_audit/S-005.md"); do n=$(git diff -U0 5884e98^ 5884e98 -- "$f" | grep -cE '^\+[[:space:]]*\$ git show <hash>:'); [ "$n" != "0" ] && echo "$f: $n"; done
  $ git show 673a97a:.claude/skills/protocol-close/SKILL.md | grep -nF '<la orden se escribe en su forma anclada al commit y con el propio informe excluido'
  1249:<la orden se escribe en su forma anclada al commit y con el propio informe excluido
  $ git show 673a97a:.claude/skills/protocol-close/SKILL.md | sed -n '1258,1290p' | grep -c "Paso 2d"
  0
  ```

- **Decision:** **se acepta** como `T-011`: la instruccion de la NOTA DE CIERRE de la plantilla del
  informe en `protocol-close` pide que el Paso 7c pegue la primera orden del Paso 2d en su forma
  anclada (`git diff -U0 <hash>^ <hash> -- _persistence _audit ":(exclude)_audit/S-XXX.md"`) con su
  recuento. `_audit/S-005.md` **no se reescribe**. Lo decidio `manager`.
- **Por que:** no es solo un descuido de `S-005`: la seccion 7 permite aplazar la forma anclada a la
  nota, y la nota no la pide, asi que se repetira en cada cierre. Es la misma clase de hueco que
  `D-019` (ordenes de staging sin su forma anclada), y va al mismo archivo.
- **Alternativas descartadas:**
  - **Ampliar `T-009`:** mezclaria dos hallazgos en una tarea ya definida por `D-019`; con tareas
    separadas cada `F-NNN` se cierra contra su propio criterio.
  - **Nota fechada en `S-005.md`:** el informe es del cierre y ya esta auditado (mismo criterio que
    `D-018`); la cifra `14` ya reproduce en forma anclada segun `R-005`.
- ⚠️ **Consecuencia:** `T-008`, `T-009` y `T-011` tocan `protocol-close`; conviene hacerlas en la misma
  sesion y promoverlas juntas al esqueleto (ver `D-017`).

### D-022 - Como se implementan T-008, T-009 y T-011 en protocol-close
| Campo | Valor |
|---|---|
| Fecha | 2026-09-16 |
| Estado | Revocada en parte por D-023 |
| Origen | usuario |

- **Contexto:** el usuario pidio hacer juntas `T-008` (`D-017`), `T-009` (`D-019`) y `T-011`
  (`D-021`), las tres sobre `.claude/skills/protocol-close/SKILL.md`. Las tres decisiones fijaban el
  que; al implementarlas hubo que elegir el como en tres puntos.
- **Decision:**
  1. **`T-008`:** el CONTROL DE SALIDA REPRODUCIDA declara en un parrafo `⚠️` que compara texto y no
     reejecuta, y que esa comprobacion es de la auditoria. **No cita `DT-002`**, aunque `T-008` lo
     pedia: la skill es copiable y el Paso 1c de `protocol-close` prohibe codigos instanciados en
     `.claude/`. El puntero va en la direccion contraria: `DT-002` ya nombra el control.
  2. **`T-009`:** el Paso 7c traduce **en su sitio** las ordenes `git diff --cached` de la prosa de la
     seccion 1 a `git diff <hash>^ <hash>`, salvo la de la lista de archivos, que conserva su forma
     de staging porque su version anclada ya va en la nota. El 7c-quater gana una segunda orden que
     lo comprueba (`SIN ANCLAR en la seccion 1`).
  3. **`T-011`:** la nota de la seccion 7 lleva una cuarta cosa, la primera orden del Paso 2d anclada
     con su recuento, bajo un **sexto rotulo** `**ORDEN DEL PASO 2d ANCLADA — salida:**` que el
     7c-ter exige, como el propio 7c-ter pide para todo paso nuevo que publique en la nota.
- **Por que:** cada una convierte una regla de redaccion en algo que se comprueba con igualdad de
  cadenas, que es el patron que el protocolo ya usa donde una regla escrita fallo.
- **Alternativas descartadas:**
  - **`T-009` en la nota, sin tocar la prosa:** republicaria cada recuento dos veces, y la copia de
    staging seguiria sin reproducir.
  - **`T-011` sin rotulo nuevo:** seria otra regla de redaccion sola, que es exactamente como nacio
    `F-007`.
  - **Citar `DT-002` en la skill:** rompe el control de codigos instanciados del Paso 1c.
- **Prueba de los controles nuevos sobre informes ya commiteados.** La orden de `T-011` reproduce el
  `14` que `R-005` obtuvo sobre `5884e98`; el control de `T-009` habria detenido los anclajes de
  `S-004` y `S-005`; y el 7c-ter con seis rotulos marca la ausencia en `S-005`, que es `F-007`:

  ```
  $ git diff -U0 5884e98^ 5884e98 -- _persistence _audit ":(exclude)_audit/S-005.md" | grep -E '^\+[[:space:]]*\$ ' | grep -vE 'git (show|grep|log|diff) [0-9a-f]{7,40}' | wc -l
  14
  $ for c in 74749f7:_audit/S-004.md 2846f62:_audit/S-005.md; do echo "== $c"; git show $c | sed -n '/^## 1\./,/^## 2\./p' | grep -F 'diff --cached' | grep -vF -- '--stat --name-only' | wc -l; done
  == 74749f7:_audit/S-004.md
  2
  == 2846f62:_audit/S-005.md
  3
  $ for m in "**BARRIDO DE ANCLAJE — salida:**" "**CONTROL DE PROSA BORRADA — salida:**" "**CONTROL DE SALIDA REPRODUCIDA — salida:**" "**SEGUNDA PASADA anclada del Paso 2e — salida:**" "**CONTROL DE CIFRA ADYACENTE — salida:**" "**ORDEN DEL PASO 2d ANCLADA — salida:**"; do git show 2846f62:_audit/S-005.md | grep -qF "$m" || echo "FALTA en la NOTA DE CIERRE: $m"; done
  FALTA en la NOTA DE CIERRE: **ORDEN DEL PASO 2d ANCLADA — salida:**
  ```

- ⚠️ **Consecuencia:** `.claude/` vuelve a separarse del esqueleto de arranque. La promocion la hace
  `manager` con `protocol-promote` y escribe fuera del repositorio, asi que espera la aprobacion del
  usuario.
- **Criterio de cierre:** a ese commit, la skill declara el limite del control (`T-008`), traduce y
  comprueba las ordenes de la seccion 1 (`T-009`), exige el sexto rotulo en la plantilla, en la nota y
  en el 7c-ter (`T-011`), no le queda ninguna mencion a cinco rotulos, salidas o bloques, y los
  controles de fuga y de codigos siguen en cero.

  ```
  $ git show 081385a:.claude/skills/protocol-close/SKILL.md | grep -cF 'Y compara texto: no reejecuta ninguna orden'
  1
  $ git show 081385a:.claude/skills/protocol-close/SKILL.md | grep -cF 'las ordenes `git diff --cached` de la prosa se traducen aqui'
  1
  $ git show 081385a:.claude/skills/protocol-close/SKILL.md | grep -cF 'SIN ANCLAR en la seccion 1'
  1
  $ git show 081385a:.claude/skills/protocol-close/SKILL.md | grep -cF '**ORDEN DEL PASO 2d ANCLADA — salida:**'
  3
  $ git show 081385a:.claude/skills/protocol-close/SKILL.md | grep -cE 'cinco (rotulos|salidas|bloques)'
  0
  $ git grep -nE "YouOtto|Company_TripleS|github.com" 081385a -- .claude CLAUDE.md _phases _methodology _templates _workflow | wc -l
  0
  $ git show 081385a:.claude/skills/protocol-close/SKILL.md | grep -noE '\b[A-Z]{1,2}-[0-9]+\b' | grep -vE ':PI-[0-9]+$' | wc -l
  0
  ```

📌 **Ancladas por el Paso 7c-bis al commit `081385a`.** Las siete reproducen lo publicado arriba.

### D-023 - El control SIN ANCLAR del 7c-quater solo mira lineas de orden
| Campo | Valor |
|---|---|
| Fecha | 2026-09-16 |
| Estado | Vigente |
| Origen | report_auditor |

- **Contexto:** `F-008` de `R-006`: la segunda orden del Paso 7c-quater de `protocol-close`, que nacio
  en `D-022` (punto 2), busca `diff --cached` en cualquier linea de la seccion 1, y salta con la prosa
  que describe el propio control. Verificado vigente contra `HEAD` (`efbc8d5`), corriendo la orden
  literal sobre una copia del informe en el scratchpad:

  ```
  $ git show efbc8d5:_audit/S-006.md > S-006.md
  $ sed -n '/^## 1\./,/^## 2\./p' S-006.md | grep -F 'diff --cached' | grep -vF -- '--stat --name-only' && echo "SIN ANCLAR en la seccion 1: ordenes git diff --cached que el Paso 7c tenia que traducir"
    por el Paso 1c); el Paso 7c traduce **en su sitio** las ordenes `git diff --cached` de la prosa de
  SIN ANCLAR en la seccion 1: ordenes git diff --cached que el Paso 7c tenia que traducir
  ```

- **Decision:** **se acepta** como `T-012`, a peticion del usuario. La segunda orden del 7c-quater
  solo cuenta **lineas de orden**: una linea que empieza por `$ git diff --cached` (con sangria o cita
  opcionales) o una orden entre comillas invertidas que empieza por `git diff --cached` y lleva una
  tuberia dentro. La skill declara la regla, su origen y su limite. **Revoca en parte `D-022`**: solo
  el patron de su punto 2; la traduccion del Paso 7c y la existencia del control siguen en pie.
- **Por que:** un control que salta con prosa se ignora, y eso es lo que paso en su primera ejecucion
  real. La tuberia es lo que distingue un recuento (lo que deja de reproducir) de una mencion.
- **Alternativas descartadas:**
  - **Exigir solo lineas `$ `:** no veria el recuento en prosa de `S-004`, que es justo el caso que
    `D-019` queria cubrir.
  - **Que la tabla mande publicar la salida en «Sin resolver» y seguir:** trata el sintoma; con el
    falso positivo quitado, la parada de la tabla vuelve a ser creible y se conserva.
  - **Nota fechada en `S-006.md`:** el informe es del cierre y esta auditado (mismo criterio que
    `D-018`); `R-006` ya dejo escrito que ninguna cifra de su seccion 1 es falsa.
- **Prueba sobre los tres informes ya commiteados.** El patron nuevo encuentra las dos ordenes reales
  de `S-004` (un recuento en prosa y una linea `$ `) y nada en `S-005` ni en `S-006`. ⚠️ **Corrige la
  prueba de `D-022`:** alli `S-005` daba `3`, y las tres eran menciones sin recuento, no ordenes; la
  cifra de `D-022` no se reescribe.

  ```
  $ for c in 74749f7:_audit/S-004.md 2846f62:_audit/S-005.md efbc8d5:_audit/S-006.md; do echo "== $c"; git show $c | sed -n '/^## 1\./,/^## 2\./p' | grep -E '^[[:space:]]*(> )?\$ git diff --cached|`git diff --cached[^`]*\|' | grep -vF -- '--stat --name-only' | wc -l; done
  == 74749f7:_audit/S-004.md
  2
  == 2846f62:_audit/S-005.md
  0
  == efbc8d5:_audit/S-006.md
  0
  ```

- ⚠️ **Consecuencia:** `.claude/` se separa un poco mas del esqueleto; la promocion sigue pendiente de
  aprobacion del usuario, como en `D-022`.
- **Criterio de cierre:** a ese commit, el 7c-quater declara la regla de linea de orden, no le queda
  el patron suelto, y los controles de fuga y de codigos siguen en cero.

  ```
  $ git show 87d10b8:.claude/skills/protocol-close/SKILL.md | grep -cF 'Linea de orden significa una de dos formas'
  1
  $ git show 87d10b8:.claude/skills/protocol-close/SKILL.md | grep -cF "grep -F 'diff --cached'"
  0
  $ git grep -nE "YouOtto|Company_TripleS|github.com" 87d10b8 -- .claude CLAUDE.md _phases _methodology _templates _workflow | wc -l
  0
  $ git show 87d10b8:.claude/skills/protocol-close/SKILL.md | grep -noE '\b[A-Z]{1,2}-[0-9]+\b' | grep -vE ':PI-[0-9]+$' | wc -l
  0
  ```

📌 **Ancladas por el Paso 7c-bis al commit `87d10b8`.** Las cuatro reproducen lo publicado arriba.

### D-024 - Estado propio para la decision revocada en parte
| Campo | Valor |
|---|---|
| Fecha | 2026-09-16 |
| Estado | Vigente |
| Origen | usuario |

- **Contexto:** recomendacion sin hallazgo de `R-006` (seccion 5): el vocabulario de `Estado` solo
  tenia `Vigente` / `Revocada por D-XXX`, y el indice leia «Etapa 000_preproject cerrada | Revocada
  por D-020» aunque `D-020` solo revoco «el acta no se edita» y la etapa sigue cerrada. `D-023` vuelve a
  necesitarlo sobre `D-022`. Verificado contra `HEAD` (`efbc8d5`):

  ```
  $ git show efbc8d5:_persistence/decisions.md | grep -oE "^\| Estado \| .*" | sort | uniq -c
        1 | Estado | Revocada por D-020 |
       22 | Estado | Vigente |
        1 | Estado | `Vigente` / `Revocada por D-XXX` |
  ```

- **Decision:** el usuario elige un estado nuevo, `Revocada en parte por D-XXX`, en las convenciones
  de `decisions.md` y en su plantilla `_templates/000_preproject/020_decisions.md`, con una regla que
  pide a la nueva nombrar que punto revoca. `protocol-start` declara que ese estado **no es cerrado** y
  que se citan las dos. Se aplica a `D-015` (por `D-020`) y a `D-022` (por `D-023`), indice y ficha.
- **Por que:** el indice es lo que lee el arranque; una revocacion parcial escrita como total le hace
  reportar como revocado lo que rige.
- **Alternativas descartadas:**
  - **Nota en la ficha, sin estado nuevo:** cambio minimo, pero quien lee solo el indice sigue sin
    verlo, que es el problema de partida.
  - **Dejar `Vigente` y explicarlo en la nueva:** esconde la revocacion al indice por el lado contrario.
- ⚠️ **Consecuencia:** toca dos archivos copiables (`_templates/`, `.claude/`); se suman a la promocion
  pendiente de `D-022`.
- **Criterio de cierre:** a ese commit, la plantilla y el registro ofrecen el estado nuevo con su regla,
  `protocol-start` lo declara no cerrado, y `D-015` y `D-022` lo llevan en indice y ficha, sin que quede
  ninguna revocacion total en el registro.

  ```
  $ git show 87d10b8:_templates/000_preproject/020_decisions.md | grep -cF 'Revocada en parte por D-XXX'
  2
  $ git show 87d10b8:.claude/skills/protocol-start/SKILL.md | grep -cF 'Revocada en parte por D-XXX` no es cerrada'
  1
  $ git show 87d10b8:_persistence/decisions.md | grep -E '^\| .*\| Revocada (en parte )?por D-[0-9]+ \|$'
  | [D-015](#d-015---etapa-000_preproject-cerrada) | Etapa 000_preproject cerrada | 2026-09-16 | Revocada en parte por D-020 |
  | [D-022](#d-022---como-se-implementan-t-008-t-009-y-t-011-en-protocol-close) | Como se implementan T-008, T-009 y T-011 en protocol-close | 2026-09-16 | Revocada en parte por D-023 |
  | Estado | Revocada en parte por D-020 |
  | Estado | Revocada en parte por D-023 |
  ```

📌 **Ancladas por el Paso 7c-bis al commit `87d10b8`.** Las tres reproducen lo publicado arriba.

### D-025 - F-009 se acepta y el desfase con el esqueleto abre su propia deuda
| Campo | Valor |
|---|---|
| Fecha | 2026-09-16 |
| Estado | Vigente |
| Origen | report_auditor |

- **Contexto:** `F-009` de `R-007`: la seccion 9 de `S-007.md` atribuye la promocion pendiente de
  tres archivos a `DT-001`, que esta `Implementada` (pagada por `D-016`). El desfase actual nacio
  despues (`D-022`, `D-023`, `D-024`) y no tiene ninguna `DT-XXX` abierta. Verificado vigente contra
  `HEAD` (`3aa301c`); la linea es la 383 y no la 239 porque el commit de anclaje `ee59542` desplazo el
  texto:

  ```
  $ git show HEAD:_audit/S-007.md | grep -n 'DT-001'
  383:punto por punto, como ya viene arrastrando `DT-001` desde `S-004`/`S-005`/`S-006`.
  $ git show HEAD:_persistence/techdebt.md | grep -nE '^\| \[DT-'
  24:| [DT-001](#dt-001---claude-se-aleja-del-esqueleto-de-arranque) | `.claude/` se aleja del esqueleto de arranque | Implementada | Confirmada | Media | No bloqueante |
  25:| [DT-002](#dt-002---el-control-de-salida-reproducida-no-reejecuta-las-ordenes) | El CONTROL DE SALIDA REPRODUCIDA no reejecuta las ordenes | No implementada | Confirmada | Baja | No bloqueante |
  ```

- **Decision:** el usuario elige **aceptarlo y abrir una deuda propia**, `DT-003`, para el desfase con
  el esqueleto de arranque, como `T-014`. `S-007.md` no se reescribe. La deuda se paga despues con
  `protocol-promote`, con la puerta del usuario.
- **Por que:** el hallazgo se sostiene contra el registro. El error del informe es de atribucion; lo
  que de verdad falta es que el desfase tenga una entrada que lo siga, y eso lo arregla la deuda, no
  una nota en el informe.
- **Alternativas descartadas:**
  - **Promover hoy, sin deuda:** paga el desfase, pero escribe fuera del repositorio con una puerta
    archivo por archivo, y `D-026` en esta misma jornada vuelve a tocar `protocol-close`.
  - **Nota fechada en la seccion 9 de `S-007.md`:** el informe es del cierre y esta auditado (mismo
    criterio que `D-018` y `D-023`), y no da seguimiento al desfase.
- **Criterio de cierre:** a ese commit, `DT-003` esta abierta en indice y ficha, y `F-009` dice
  `Aceptado — pendiente` en su fila y en su ficha.

  ```
  $ git show 27c03bb:_persistence/techdebt.md | grep -cE '^(\| \[DT-003\].*\| No implementada \||### DT-003 )'
  2
  $ git show 27c03bb:_audit/findings.md | grep -cE '^\| \[F-009\].*\| Aceptado — pendiente \|$|^\| Estado \| Aceptado — pendiente \|$'
  2
  ```

📌 **Ancladas por el Paso 7c-bis al commit `27c03bb`.** Las dos reproducen lo publicado arriba.

### D-026 - El 7c-quater declara que no ve una orden partida en dos lineas
| Campo | Valor |
|---|---|
| Fecha | 2026-09-16 |
| Estado | Vigente |
| Origen | report_auditor |

- **Contexto:** recomendacion sin hallazgo de `R-007` (seccion 5): el patron de `D-023` se aplica
  linea a linea, y una orden entre comillas invertidas partida en dos lineas, con la tuberia en la
  segunda, no se detecta. Comprobado sobre dos copias de prueba en el scratchpad, la misma orden
  partida y en una linea:

  ```
  $ S="C:/Users/USUARIO/AppData/Local/Temp/claude/C--Users-USUARIO-Documents-Company-TripleS-Proyectos-TripleS-YouOtto/b817b890-4f6b-446f-a02a-973ada6af465/scratchpad"; printf '## 1. Archivos\nla cifra sale de `git diff --cached --name-only\n| wc -l`: 3\n## 2. Otra\n' > "$S/split.md"; cat "$S/split.md"; echo ---; sed -n '/^## 1\./,/^## 2\./p' "$S/split.md" | grep -E '^[[:space:]]*(> )?\$ git diff --cached|`git diff --cached[^`]*\|' | grep -vF -- '--stat --name-only' | wc -l; printf '## 1. Archivos\nla cifra sale de `git diff --cached --name-only | wc -l`: 3\n## 2. Otra\n' > "$S/oneline.md"; sed -n '/^## 1\./,/^## 2\./p' "$S/oneline.md" | grep -E '^[[:space:]]*(> )?\$ git diff --cached|`git diff --cached[^`]*\|' | grep -vF -- '--stat --name-only' | wc -l
  ## 1. Archivos
  la cifra sale de `git diff --cached --name-only
  | wc -l`: 3
  ## 2. Otra
  ---
  0
  1
  ```

- **Decision:** el usuario elige **declararlo**: una frase en el parrafo de limite del 7c-quater de
  `protocol-close`, como `T-015`. El patron no cambia.
- **Por que:** la skill ya declara sus limites, y este no tiene reverso (a diferencia de la orden sin
  tuberia, aqui si hay recuento). Cazarlo exigiria leer varias lineas a la vez, y no aparece en ningun
  informe (`R-007`, seccion 1.4): declararlo cuesta una frase.
- **Alternativas descartadas:**
  - **No tocar la skill:** deja un punto ciego conocido sin escribir, justo lo que la skill evita en
    sus otros controles.
  - **Ampliar el patron a varias lineas:** mas complejidad para un caso que no se ha visto (`PI-2`).
- ⚠️ **Consecuencia:** `protocol-close/SKILL.md`, que ya difiere del esqueleto, se aleja un poco mas;
  entra en `DT-003`.
- **Criterio de cierre:** a ese commit, el 7c-quater declara el punto ciego, y los controles de fuga
  y de codigos siguen en cero.

  ```
  $ git show 27c03bb:.claude/skills/protocol-close/SKILL.md | grep -cF 'partida en dos lineas'
  1
  $ git grep -nE "YouOtto|Company_TripleS|github.com" 27c03bb -- .claude CLAUDE.md _phases _methodology _templates _workflow | wc -l
  0
  $ git show 27c03bb:.claude/skills/protocol-close/SKILL.md | grep -noE '\b[A-Z]{1,2}-[0-9]+\b' | grep -vE ':PI-[0-9]+$' | wc -l
  0
  ```

📌 **Ancladas por el Paso 7c-bis al commit `27c03bb`.** Las tres reproducen lo publicado arriba.

### D-027 - El estado de una tarea lo decide el diff, no el anclaje
| Campo | Valor |
|---|---|
| Fecha | 2026-09-16 |
| Estado | Vigente |
| Origen | report_auditor |

- **Contexto:** `F-010` de `R-008`: `S-008` dejo `T-014` y `T-015` en `No implementada` con su trabajo
  en `27c03bb`, «hasta que el 7c-bis ancle la evidencia», y lo llamo practica de sesiones anteriores.
  El historial dice lo contrario, y el 7c-bis no puede tocar estados. Verificado vigente contra `HEAD`
  (`f0c1a74`):

  ```
  $ git show f0c1a74:_persistence/tasks.md | grep -E '^\| \[T-01[45]\]' | grep -o 'No implementada'
  No implementada
  No implementada
  ```

  Precedentes, en los commits de sesion de `S-007`, `S-006` y `S-004`:

  ```
  $ for c in 87d10b8 081385a c07680f; do echo "== $c"; git show $c:_persistence/tasks.md | grep -E '^\| \[T-0(0[7-9]|1[0-3])\]' | awk -F'|' '{print $2,$4}' | sed 's/(#[^)]*)//'; done
  == 87d10b8
   [T-007]   Implementada 
   [T-008]   Implementada 
   [T-009]   Implementada 
   [T-010]   Implementada 
   [T-011]   Implementada 
   [T-012]   Implementada 
   [T-013]   Implementada 
  == 081385a
   [T-007]   Implementada 
   [T-008]   Implementada 
   [T-009]   Implementada 
   [T-010]   Implementada 
   [T-011]   Implementada 
  == c07680f
   [T-007]   Implementada 
  ```

  Y los criterios de `D-025` y `D-026`, ya anclados, siguen reproduciendo lo publicado:

  ```
  $ git show 27c03bb:_persistence/techdebt.md | grep -cE '^(\| \[DT-003\].*\| No implementada \||### DT-003 )'; git show 27c03bb:_audit/findings.md | grep -cE '^\| \[F-009\].*\| Aceptado — pendiente \|$|^\| Estado \| Aceptado — pendiente \|$'; git show 27c03bb:.claude/skills/protocol-close/SKILL.md | grep -cF 'partida en dos lineas'; git grep -nE "YouOtto|Company_TripleS|github.com" 27c03bb -- .claude CLAUDE.md _phases _methodology _templates _workflow | wc -l; git show 27c03bb:.claude/skills/protocol-close/SKILL.md | grep -noE '\b[A-Z]{1,2}-[0-9]+\b' | grep -vE ':PI-[0-9]+$' | wc -l
  2
  2
  1
  0
  0
  ```

- **Decision:** el usuario elige **aceptarlo con el criterio de `S-004`/`S-006`/`S-007`**: una tarea
  cuyo trabajo esta en el commit de su sesion y cuyo criterio reproduce pasa a `Implementada` en ese
  mismo commit; el anclaje solo publica la evidencia. Y elige **escribirlo en el Paso 4 de
  `protocol-close`**. `T-014` y `T-015` pasan a `Implementada`, con nota fechada. `S-008.md` no se
  reescribe. Como `T-016`.
- **Por que:** el hallazgo se sostiene contra el registro. El 7c-bis tiene prohibido tocar estados,
  asi que esperar al anclaje deja la tarea pendiente para siempre; y el closer arranca en frio y no
  lee `decisions.md` en el Paso 4, asi que la regla tiene que estar donde la lee.
- **Alternativas descartadas:**
  - **Solo decision y tareas, sin tocar la skill:** el cierre puede volver a inventarse el criterio.
  - **Esperar al anclaje:** exige un paso nuevo despues del 7c-bis que mueva estados, y contradice
    tres sesiones de practica (`PI-2`).
- ⚠️ **Consecuencia:** `protocol-close/SKILL.md` se aleja otra vez del esqueleto; entra en `DT-003`.
- **Criterio de cierre:** a ese commit, el Paso 4 declara el criterio, `T-014`, `T-015` y `T-016`
  estan en `Implementada` en indice y ficha, `F-010` dice `Aceptado — pendiente` en fila y ficha, y
  los controles de fuga y de codigos siguen en cero.

  ```
  $ git show 8509c18:.claude/skills/protocol-close/SKILL.md | grep -cF 'El estado lo decide la evidencia del diff'
  1
  $ git show 8509c18:_persistence/tasks.md | grep -E '^\| \[T-01[456]\]' | grep -c '| Implementada |'
  3
  $ git show 8509c18:_persistence/tasks.md | grep -A3 -E '^### T-01[456] ' | grep -c '^| Estado | Implementada |$'
  3
  $ git show 8509c18:_audit/findings.md | grep -cE '^\| \[F-010\].*\| Aceptado — pendiente \|$|^\| Estado \| Aceptado — pendiente \|$'
  2
  $ git grep -nE "YouOtto|Company_TripleS|github.com" 8509c18 -- .claude CLAUDE.md _phases _methodology _templates _workflow | wc -l
  0
  $ git show 8509c18:.claude/skills/protocol-close/SKILL.md | grep -noE '\b[A-Z]{1,2}-[0-9]+\b' | grep -vE ':PI-[0-9]+$' | wc -l
  0
  ```

📌 **Ancladas por el Paso 7c-bis al commit `8509c18`.** Las seis reproducen lo publicado arriba.

- 🕐 **Nota 2026-09-16 (`R-009`, `D-029`):** la orden de precedentes de arriba muestra que las tareas
  estaban en `Implementada` en el commit de su sesion, pero no que el criterio de su decision siguiera
  sin anclar en ese commit; esa mitad la aportaba `R-008`. Ordenes con `<hash>` en el criterio de la
  decision de cada sesion, en su commit de sesion y en su commit de anclaje:

  ```
  $ for p in "c07680f 74749f7 D-013 D-014" "081385a d420647 D-022 D-023" "87d10b8 ee59542 D-023 D-024"; do set -- $p; for c in $1 $2; do echo "== $c $3 $(git show $c:_persistence/decisions.md | sed -n "/^### $3 /,/^### $4 /p" | grep -cE '^[[:space:]]*\$ .*<hash>')"; done; done
  == c07680f D-013 2
  == 74749f7 D-013 0
  == 081385a D-022 7
  == d420647 D-022 0
  == 87d10b8 D-023 4
  == ee59542 D-023 0
  ```

  En los tres precedentes, la tarea paso a `Implementada` con su criterio todavia en `<hash>`, y el
  anclaje llego en el commit siguiente. La prosa de arriba no se reescribe.

### D-028 - El Paso 4 declara tambien el caso del criterio que no reproduce
| Campo | Valor |
|---|---|
| Fecha | 2026-09-16 |
| Estado | Vigente |
| Origen | report_auditor |

- **Contexto:** primera recomendacion sin hallazgo de `R-009` (seccion 5): el bullet que `D-027` anadio
  al Paso 4 de `protocol-close` solo enuncia el caso positivo. El contrario —trabajo en el diff,
  criterio que no reproduce— se deduce de los bullets vecinos, pero no esta escrito. Verificado contra
  `HEAD` (`95c5cfd`):

  ```
  $ git show 95c5cfd:.claude/skills/protocol-close/SKILL.md | grep -nF -A5 'El estado lo decide la evidencia del diff'
  827:- 🚨 **El estado lo decide la evidencia del diff, no el anclaje.** Si el trabajo de una tarea esta en
  828-  el commit de esta sesion y su criterio de cierre reproduce, pasa a `Implementada` en este mismo
  829-  commit, aunque las ordenes de ese criterio lleven todavia `<hash>`. El Paso 7c-bis solo publica la
  830-  evidencia y no puede tocar estados: una tarea que se deja pendiente «hasta el anclaje» no la mueve
  831-  nadie.
  832-- Lo que quedo a medias **sigue en `No implementada`**, y su entrada de detalle dice **en que punto
  $ git show 95c5cfd:.claude/skills/protocol-close/SKILL.md | grep -cF 'no reproduce, sigue'
  0
  ```

- **Decision:** el usuario elige **aceptarla**: una frase al final del mismo bullet, «si el trabajo
  esta en el diff pero su criterio de cierre no reproduce, la tarea sigue en `No implementada`».
  `T-017`.
- **Por que:** el closer arranca en frio; que la regla se lea en un solo bullet evita que dependa de
  combinar tres. Cuesta una frase.
- **Alternativas descartadas:**
  - **No tocarla:** los bullets vecinos ya lo resuelven en la practica (`R-009`, seccion 1.7), pero
    la duda la declaro el propio informe de `S-009`: no es obvia para quien lee.
- ⚠️ **Consecuencia:** `protocol-close/SKILL.md` se aleja otra vez del esqueleto; entra en `DT-003`,
  cuya promocion va justo despues (`D-030`).
- **Criterio de cierre:** a ese commit, el Paso 4 declara el caso contrario, y los controles de fuga y
  de codigos siguen en cero.

  ```
  $ git show <hash>:.claude/skills/protocol-close/SKILL.md | grep -cF 'no reproduce, la tarea'
  1
  $ git grep -nE "YouOtto|Company_TripleS|github.com" <hash> -- .claude CLAUDE.md _phases _methodology _templates _workflow | wc -l
  0
  $ git show <hash>:.claude/skills/protocol-close/SKILL.md | grep -noE '\b[A-Z]{1,2}-[0-9]+\b' | grep -vE ':PI-[0-9]+$' | wc -l
  0
  ```

📌 **Ancladas por el Paso 7c-bis al commit `a61e453`.** Las tres reproducen lo publicado arriba.

### D-029 - D-027 se completa con los criterios sin anclar de sus precedentes
| Campo | Valor |
|---|---|
| Fecha | 2026-09-16 |
| Estado | Vigente |
| Origen | report_auditor |

- **Contexto:** segunda recomendacion sin hallazgo de `R-009` (seccion 5): la orden de precedentes de
  `D-027` muestra el estado de las tareas, pero no que su criterio siguiera con `<hash>` en ese commit.
  La decision depende de `R-008` para sostenerse.
- **Decision:** el usuario elige **aceptarla como nota fechada** debajo de `D-027`, con la orden
  anclada a los commits de sesion y de anclaje de `S-004`, `S-006` y `S-007` y su salida cruda. `T-018`.
- **Por que:** una decision que se apoya en una auditoria para sostenerse no es auditable sola. La
  nota corrige sin reescribir, como manda este archivo.
- **Alternativas descartadas:**
  - **Reescribir el bloque de precedentes de `D-027`:** una decision no se reescribe.
  - **Descartarla:** la prueba ya existe en `R-008`, pero repartida entre dos archivos.
- **Criterio de cierre:** a ese commit, la nota esta debajo de `D-027`. Su propia orden no necesita
  anclaje: ya apunta a commits que existen.

  ```
  $ git show <hash>:_persistence/decisions.md | sed -n '/^### D-027 /,/^### D-028 /p' | grep -c '🕐 \*\*Nota 2026-09-16 (`R-009`, `D-029`)'
  1
  ```

📌 **Anclada por el Paso 7c-bis al commit `a61e453`.** Reproduce lo publicado arriba.

### D-030 - La promocion de DT-003 pasa a Alta y va antes que los actores
| Campo | Valor |
|---|---|
| Fecha | 2026-09-16 |
| Estado | Vigente |
| Origen | report_auditor |

- **Contexto:** tercera recomendacion sin hallazgo de `R-009` (seccion 5): `DT-003` lleva tres sesiones
  seguidas creciendo (`S-007`, `S-008`, `S-009`), y `D-028` la hace crecer otra vez. Desfase medido
  sobre el arbol de `HEAD` (`95c5cfd`), extraido al scratchpad, contra el esqueleto en `4d20ce2`:

  ```
  $ git log --format='%h %s' -- .claude/skills/protocol-close/SKILL.md | head -3
  8509c18 S-009: F-010 de R-008 atendido (D-027, T-014/T-015 pasan a Implementada)
  27c03bb S-008: F-009 de R-007 atendido (D-025, abre DT-003), y el 7c-quater declara el punto ciego de la orden partida (D-026)
  87d10b8 S-007: F-008 de R-006 atendido (D-023), y nuevo estado Revocada en parte por D-XXX (D-024)
  $ git archive 95c5cfd | tar -x -C "$T"; (cd "$T" && for d in .claude _phases _methodology _templates _workflow; do diff -rq --strip-trailing-cr "$ESQ/$d" "$d"; done; diff -q --strip-trailing-cr "$ESQ/CLAUDE.md" CLAUDE.md)
  Files C:/Users/USUARIO/Documents/Company_TripleS/SDAI_TripleS/.claude/skills/protocol-close/SKILL.md and .claude/skills/protocol-close/SKILL.md differ
  Files C:/Users/USUARIO/Documents/Company_TripleS/SDAI_TripleS/.claude/skills/protocol-start/SKILL.md and .claude/skills/protocol-start/SKILL.md differ
  Files C:/Users/USUARIO/Documents/Company_TripleS/SDAI_TripleS/_templates/000_preproject/020_decisions.md and _templates/000_preproject/020_decisions.md differ
  ```

  (`ESQ="C:/Users/USUARIO/Documents/Company_TripleS/SDAI_TripleS"`, `T` = carpeta `t95c5cfd` del
  scratchpad de la sesion.)

- **Decision:** el usuario elige **subir `DT-003` a Importancia `Alta` y promover ya**: la promocion
  con `protocol-promote` va despues de `D-028` y antes de la clasificacion de actores. `T-019`. La
  urgencia sigue en `No bloqueante`: no bloquea el producto.
- **Por que:** cada sesion que pasa suma diferencias a los mismos archivos, y la promocion se vuelve
  mas cara de revisar punto por punto. Hacerla despues de `D-028` permite que la frase nueva viaje en
  la misma pasada.
- **Alternativas descartadas:**
  - **Subir a `Alta` sin fecha:** los actores irian antes y el desfase seguiria creciendo.
  - **Dejarla en `Media`:** es lo que ha dejado crecer la deuda tres sesiones.
- **Criterio de cierre:** a ese commit, `DT-003` esta en `Alta` en indice y ficha, y `T-019` existe
  con Importancia `Alta`. Su estado no se fija aqui: lo decide el cierre.

  ```
  $ git show <hash>:_persistence/techdebt.md | grep -E '^\| \[DT-003\]' | grep -c '| Alta | No bloqueante |'
  1
  $ git show <hash>:_persistence/techdebt.md | sed -n '/^### DT-003 /,$p' | grep -c '^| Importancia | Alta |$'
  1
  $ git show <hash>:_persistence/tasks.md | grep -E '^\| \[T-019\]' | grep -c '| Alta | No bloqueante |'
  1
  ```

📌 **Ancladas por el Paso 7c-bis al commit `a61e453`.** Las tres reproducen lo publicado arriba.

- 🕐 **Nota 2026-09-16 (`D-032`):** el orden «despues de `D-028`» era imposible. `protocol-promote`
  exige las seis areas limpias y subidas, y la frase de `D-028` estaba sin commitear, asi que la
  promocion quedaba bloqueada hasta cerrar y auditar la sesion. Esa espera es la que el usuario ha
  vivido como un circulo. La frase se retiro del arbol, se promovio desde `95c5cfd` y se repuso. Viaja
  en la promocion siguiente. Ver `L-012`.

### D-031 - No se corrige el orden de los hashes de la seccion 3 de S-009
| Campo | Valor |
|---|---|
| Fecha | 2026-09-16 |
| Estado | Vigente |
| Origen | report_auditor |

- **Contexto:** cuarta recomendacion sin hallazgo de `R-009` (seccion 5): la seccion 3 de `S-009`
  escribe los hashes en orden inverso a las sesiones. Verificado contra `HEAD` (`95c5cfd`):

  ```
  $ git show 95c5cfd:_audit/S-009.md | sed -n '47p'
    contra los precedentes de `S-004`/`S-006`/`S-007` (`87d10b8`, `081385a`, `c07680f`), la decision,
  ```

  `87d10b8` es `S-007` y `c07680f` es `S-004` (ver `git log` en `D-030` y la nota de `D-027`).
- **Decision:** el usuario elige **no corregirlo**. Sin tarea.
- **Por que:** el informe ya esta auditado, y reescribirlo haria que `R-009` describiera un estado que
  ya no existe. `D-027` etiqueta bien cada hash, y el propio auditor dice que no induce a error. Mismo
  criterio que `D-018`.
- **Alternativas descartadas:**
  - **Nota fechada en `S-009`:** anade un cambio a un informe auditado por una errata que no engana.
- **Criterio de cierre:** a ese commit, la linea sigue intacta.

  ```
  $ git show <hash>:_audit/S-009.md | sed -n '47p'
    contra los precedentes de `S-004`/`S-006`/`S-007` (`87d10b8`, `081385a`, `c07680f`), la decision,
  ```

📌 **Anclada por el Paso 7c-bis al commit `a61e453`.** Reproduce lo publicado arriba.

### D-032 - Promocion al esqueleto de los tres archivos de DT-003
| Campo | Valor |
|---|---|
| Fecha | 2026-09-16 |
| Estado | Vigente |
| Origen | usuario |

- **Contexto:** `D-030` pedia promover ya. El primer intento se paro en el Paso 0 de
  `protocol-promote`: `.claude/skills/protocol-close/SKILL.md` tenia sin commitear la frase de `D-028`.
  El usuario senalo que eso lo metia en un circulo (corregir, cerrar, auditar, y otra vez bloqueado) y
  aprobo retirar la frase del arbol, promover desde el ultimo commit auditado y reponerla despues. La
  frase se guardo como parche en el scratchpad y se retiro con `git checkout` sobre ese archivo. Con
  eso se cumplian los tres disparadores: lo pidio el usuario, las seis areas estaban limpias y
  subidas en `95c5cfd` y `R-009` ya habia terminado.

  ```
  $ git status --short -- .claude CLAUDE.md _phases _methodology _templates _workflow
  $ git status -sb | head -1
  ## main...origin/main
  $ git rev-parse --short HEAD; git rev-parse --short origin/main
  95c5cfd
  95c5cfd
  ```

- **Decision:** el usuario aprueba los cuatro, uno por uno: `.claude/skills/protocol-close/SKILL.md`
  (78 lineas entran, 16 se borran), `.claude/skills/protocol-start/SKILL.md` (4 entran, 0 se borran),
  `_templates/000_preproject/020_decisions.md` (6 entran, 1 se borra) y la copia de la raiz
  `_persistence/decisions.md` del esqueleto, regenerada desde esa plantilla (6 entran, 1 se borra). No
  se dejo ninguno. Hash de origen `95c5cfd`; commit del esqueleto `447c2a0`, subido. **Se deja fuera la
  frase de `D-028`**, que no esta en ningun commit: va en la promocion siguiente.
- **Por que:** paga `DT-003`. Un proyecto que clonara `4d20ce2` heredaba el control SIN ANCLAR que
  salta con la prosa, un estado de decision de menos y limites sin declarar. Promover desde el commit
  auditado rompe el circulo sin saltarse el disparador.
- **Alternativas descartadas:**
  - **Cerrar la sesion, auditar y promover en la siguiente:** es el circulo. Cada sesion que corrige
    el andamiaje antes de promover vuelve a bloquear la promocion.
  - **Promover tambien la frase sin commitear:** el esqueleto tendria una version sin procedencia, y
    esta decision no podria citar su hash.
- **Hallazgos:** ninguno. Nada existia solo en el esqueleto.
- **Comprobacion del supuesto del Paso 2:** se leyeron las 17 lineas que borran los candidatos (16 y
  1) y la unica que solo tenia la copia de la raiz. Todas eran versiones anteriores de lineas ya
  reescritas aqui («cinco» por «seis», «tres cosas» por «cuatro», la fila del Paso 7 ampliada, el
  estado sin «en parte»). Ninguna era algo que un proyecto generico necesitara.
- **Final de linea:** los cuatro eran LF en el esqueleto. Se copio desde el blob
  (`git show 95c5cfd:<archivo>`, 0 retornos de carro), no desde el arbol de trabajo, que por
  `autocrlf` tenia `protocol-close` en CRLF (`CR=2202`).
- **Verificacion.** Controles de agnosticismo sobre el origen, antes de la puerta. En el barrido
  ensanchado, una primera pasada con `-i` dio 19 lineas: todas eran la palabra comun «usuario». La
  pasada que distingue mayusculas:

  ```
  $ git grep -nE "YouOtto|Company_TripleS|github.com" 95c5cfd -- .claude CLAUDE.md _phases _methodology _templates _workflow | wc -l
  0
  $ git grep -noE '\b[A-Z]{1,2}-[0-9]+\b' 95c5cfd -- _phases _workflow | grep -vE ':PI-[0-9]+$' | wc -l
  0
  $ git grep -nE "USUARIO|jdrodriguez|gmail|SDAI_TripleS|TripleS|Triple S|[A-Z]:[/\\\\]|/Users/|AppData" 95c5cfd -- .claude/skills/protocol-close/SKILL.md .claude/skills/protocol-start/SKILL.md _templates/000_preproject/020_decisions.md | wc -l
  0
  ```

  El commit del esqueleto, su remoto y la identidad de los blobs con el origen:

  ```
  $ ESQ="C:/Users/USUARIO/Documents/Company_TripleS/SDAI_TripleS"; git -C "$ESQ" show --stat --format='%h %s' 447c2a0 | tail -5
   .claude/skills/protocol-close/SKILL.md     | 92 +++++++++++++++++++++++++-----
   .claude/skills/protocol-start/SKILL.md     |  4 ++
   _persistence/decisions.md                  |  7 ++-
   _templates/000_preproject/020_decisions.md |  7 ++-
   4 files changed, 93 insertions(+), 17 deletions(-)
  $ git -C "$ESQ" ls-remote origin refs/heads/main | cut -c1-7
  447c2a0
  $ for f in .claude/skills/protocol-close/SKILL.md .claude/skills/protocol-start/SKILL.md _templates/000_preproject/020_decisions.md; do [ "$(git rev-parse 95c5cfd:$f)" = "$(git -C "$ESQ" rev-parse 447c2a0:$f)" ] && echo "igual $f" || echo "DISTINTO $f"; done
  igual .claude/skills/protocol-close/SKILL.md
  igual .claude/skills/protocol-start/SKILL.md
  igual _templates/000_preproject/020_decisions.md
  ```

  Barrido del Paso 1 despues de promover y antes de reponer la frase de `D-028` (sin salida: el
  desfase cerro), y Paso 1b sobre el commit del esqueleto:

  ```
  $ for d in .claude _phases _methodology _templates _workflow; do diff -rq --strip-trailing-cr "$ESQ/$d" "$d"; done; diff -q --strip-trailing-cr "$ESQ/CLAUDE.md" CLAUDE.md; echo "fin P1"
  fin P1
  $ for p in 005_project.md:project.md 010_progress.md:_persistence/progress.md 015_tasks.md:_persistence/tasks.md 020_decisions.md:_persistence/decisions.md 025_constraints.md:_persistence/constraints.md 030_assumptions.md:_persistence/assumptions.md 035_lessons.md:_persistence/lessons.md 040_techdebt.md:_persistence/techdebt.md 045_audit_index.md:_audit/index.md 050_audit_findings.md:_audit/findings.md; do t=${p%%:*}; c=${p#*:}; printf '%3d  %s\n' "$(diff <(git -C "$ESQ" show 447c2a0:_templates/000_preproject/$t) <(git -C "$ESQ" show 447c2a0:$c) | grep -c '^[<>]')" "$c"; done
    0  project.md
    0  _persistence/progress.md
    0  _persistence/tasks.md
    0  _persistence/decisions.md
    0  _persistence/constraints.md
    0  _persistence/assumptions.md
    0  _persistence/lessons.md
    0  _persistence/techdebt.md
    0  _audit/index.md
    0  _audit/findings.md
  ```

  ⚠️ Al reponer la frase de `D-028`, el Paso 1 vuelve a dar una linea (`protocol-close/SKILL.md`
  differ). Es el desfase conocido y a proposito de la frase que no se promovio.
- **Criterio de cierre:** a ese commit, `DT-003` esta en `Implementada` en indice y ficha, y la frase
  de `D-028` sigue en la skill.

  ```
  $ git show <hash>:_persistence/techdebt.md | grep -E '^\| \[DT-003\]' | grep -c '| Implementada |'
  1
  $ git show <hash>:_persistence/techdebt.md | sed -n '/^### DT-003 /,$p' | grep -c '^| Estado | Implementada |$'
  1
  $ git show <hash>:.claude/skills/protocol-close/SKILL.md | grep -cF 'no reproduce, la tarea'
  1
  ```

📌 **Ancladas por el Paso 7c-bis al commit `a61e453`.** Las tres reproducen lo publicado arriba.

### D-033 - El desfase 4 que reporta el arranque tras S-010 no se corrige
| Campo | Valor |
|---|---|
| Fecha | 2026-09-16 |
| Estado | Vigente |
| Origen | manager |

- **Contexto:** el arranque de `S-011` reporta el desfase 4 de `protocol-start`: `progress.md` se sello
  en `a61e453` y el commit posterior `25b8e41` toca `_persistence/`. Verificado contra `HEAD` (`1add289`):

  ```
  $ git log --oneline -3; git log --oneline -2 -- _persistence/progress.md
  1add289 auditoria R-010 sobre S-010 (a61e453)
  25b8e41 S-010: ancla el informe y los criterios de cierre al hash a61e453
  a61e453 S-010: las tres recomendaciones sin hallazgo de R-009 evaluadas, DT-003 pagada (D-032)
  a61e453 S-010: las tres recomendaciones sin hallazgo de R-009 evaluadas, DT-003 pagada (D-032)
  8509c18 S-009: F-010 de R-008 atendido (D-027, T-014/T-015 pasan a Implementada)
  $ git diff a61e453 25b8e41 -- _persistence | grep -E '^[+-]' | grep -vE '^(\+\+\+|---)' | grep -vE '^\+(📌 \*\*Anclada|$)' | wc -l
  0
  $ git diff --stat a61e453 1add289 -- _persistence | tail -1
   1 file changed, 10 insertions(+)
  $ for c in 9e169f3 f42388a 25b8e41; do echo "== $c $(git show --format= --name-only $c | tr '\n' ' ')"; done
  == 9e169f3 _audit/S-008.md _persistence/decisions.md 
  == f42388a _audit/S-009.md _persistence/decisions.md 
  == 25b8e41 _audit/S-010.md _persistence/decisions.md 
  ```

  Lo unico que entra en `_persistence/` despues de `a61e453` son las lineas `📌` del Paso 7c-bis, que
  tiene prohibido tocar `progress.md`. El mismo patron se repite en los commits de anclaje de `S-008` y
  `S-009`.
- **Decision:** no es un desfase real y **no se corrige nada**: `progress.md` describe bien el estado.
  El usuario acepta esa lectura al pedir que se trabaje sobre ella.
- **Por que:** el desfase 4 busca un estado sellado antes que la ultima entrada; aqui la ultima
  entrada es un ancla mecanica que no cambia ningun estado. Tocar `progress.md` para callar el aviso
  no lo corregiria: afirmaria un cambio que no hubo.
- **Alternativas descartadas:**
  - **Actualizar `progress.md` para que el arranque no lo vea:** no hay nada que reflejar.
  - **Afinar ya el desfase 4 de `protocol-start` para que ignore los commits de anclaje:** toca el
    andamiaje y vuelve a separar este repositorio del esqueleto con `DT-004` aun abierta (`L-012`). Se
    deja fuera de esta decision; si el usuario lo quiere, es una tarea aparte.
- **Criterio de cierre:** a ese commit, esta decision existe en indice y detalle.

  ```
  $ git show 079b0a4:_persistence/decisions.md | grep -cE '^(\| \[D-033\]|### D-033 )'
  2
  ```

  📌 **Anclada por el Paso 7c-bis al commit `079b0a4`.** Reproduce lo publicado arriba.

### D-034 - F-011 se acepta con una nota fechada en T-019
| Campo | Valor |
|---|---|
| Fecha | 2026-09-16 |
| Estado | Vigente |
| Origen | report_auditor |

- **Contexto:** `F-011` de `R-010`: `T-019` esta `Implementada` y su «Que» incluye la frase de
  `D-028`, que `D-032` dejo fuera de la promocion. Verificado vigente contra `HEAD` (`1add289`) y contra
  el esqueleto:

  ```
  $ git show 1add289:_persistence/tasks.md | sed -n '/^### T-019 /,$p' | grep -nE 'Estado|incluida la frase|Nota'
  4:| Estado | Implementada |
  12:  esqueleto de arranque los archivos del andamiaje que difieren, incluida la frase de `D-028`. Paga
  $ git -C "$ESQ" show 447c2a0:.claude/skills/protocol-close/SKILL.md | grep -cF 'no reproduce, la tarea'
  0
  $ git -C "$ESQ" log --oneline -1; git -C "$ESQ" ls-remote origin refs/heads/main | cut -c1-7
  447c2a0 Promocion del andamiaje desde YouOtto (origen 95c5cfd)
  447c2a0
  ```

  (`ESQ="C:/Users/USUARIO/Documents/Company_TripleS/SDAI_TripleS"`.) Sin nota en `T-019`, y el
  esqueleto sigue sin la frase.
- **Decision:** se acepta con la opcion (a) del auditor: **una nota fechada en `T-019`** que saca la
  frase de `D-028` de su alcance y remite a `D-032` y `DT-004`, sin reescribir el «Que». `T-019` sigue
  `Implementada`. La nota lleva la orden que compara los blobs del esqueleto con el origen, para que la
  tarea tenga una prueba de lo que si hizo. `T-020`.
- **Por que:** el alcance cambio por una decision aprobada por el usuario (`D-032`), no quedo a medias
  por accidente. Lo que falta ya tiene donde seguirse, `DT-004`, y la nota hace que la tarea leida sola
  lo diga.
- **Alternativas descartadas:**
  - **(b) Devolver `T-019` a `No implementada`:** duplica `DT-004`. Dos registros seguirian lo mismo, y
    la tarea no podria cerrarse sin otra promocion que ya esta en la deuda.
  - **Reescribir el «Que» de `T-019`:** borraria lo que se planeo, y `R-010` describiria un texto que ya
    no existe.
- **Criterio de cierre:** a ese commit, `T-019` lleva la nota que cita `F-011` y sigue `Implementada`,
  y `F-011` esta `Aceptado — pendiente` en indice y ficha.

  ```
  $ git show 079b0a4:_persistence/tasks.md | sed -n '/^### T-019 /,/^### T-020 /p' | grep -cE '🕐 \*\*Nota 2026-09-16 \(`F-011`, `D-034`\)|^\| Estado \| Implementada \|$'
  2
  $ git show 079b0a4:_audit/findings.md | grep -cE '^\| \[F-011\].*\| Aceptado — pendiente \|$|^\| Registrado en \| T-020, D-034 \|$'
  2
  ```

  📌 **Ancladas por el Paso 7c-bis al commit `079b0a4`.** Las dos reproducen lo publicado arriba.

### D-035 - Promocion al esqueleto de la frase de D-028
| Campo | Valor |
|---|---|
| Fecha | 2026-09-16 |
| Estado | Vigente |
| Origen | usuario |

- **Contexto:** `DT-004` estaba `Propuesta (pendiente del usuario)`. La frase de `D-028` ya esta
  commiteada (`a61e453`) y auditada (`R-010`), y las seis areas estaban limpias y subidas en `1add289`.
  Por `L-012`, la promocion va antes de tocar el andamiaje en la sesion.

  ```
  $ git status --short -- .claude CLAUDE.md _phases _methodology _templates _workflow
  $ git status -sb | head -1
  ## main...origin/main
  $ git rev-parse --short HEAD; git rev-parse --short origin/main
  1add289
  1add289
  $ for d in .claude _phases _methodology _templates _workflow; do diff -rq --strip-trailing-cr "$ESQ/$d" "$d"; done; diff -q --strip-trailing-cr "$ESQ/CLAUDE.md" CLAUDE.md; echo "fin P1"
  Files C:/Users/USUARIO/Documents/Company_TripleS/SDAI_TripleS/.claude/skills/protocol-close/SKILL.md and .claude/skills/protocol-close/SKILL.md differ
  fin P1
  ```

  (`ESQ="C:/Users/USUARIO/Documents/Company_TripleS/SDAI_TripleS"`.)
- **Decision:** el usuario **confirma `DT-004` y aprueba promover ya** el unico candidato,
  `.claude/skills/protocol-close/SKILL.md` (2 lineas entran, 1 se borra). Hash de origen `1add289`;
  commit del esqueleto `7f4381e`, subido. `DT-004` pasa a `Confirmada` e `Implementada`.
- **Por que:** paga `DT-004` con el arbol limpio y antes de cualquier cambio al andamiaje, que es lo
  que `L-012` pide para no volver a bloquear la promocion.
- **Alternativas descartadas:**
  - **Confirmar y promover en un lote posterior:** el desfase es de una linea y la promocion no estaba
    bloqueada; esperar solo deja que se acumule mas.
  - **Rechazar la deuda:** un proyecto nuevo no tendria declarado el caso del criterio que no
    reproduce, que `R-009` y `D-028` ya dieron por necesario.
- **Hallazgos:** ninguno. Nada existia solo en el esqueleto.
- **Comprobacion del supuesto del Paso 2:** se leyo la unica linea que borra el candidato,
  `  nadie.`; es la misma linea, que en la version nueva sigue con la frase de `D-028`. Nada que un
  proyecto generico necesitara.
- **Final de linea:** LF en los dos (`1add289` `CR=0 LF=2203`; esqueleto `CR=0 LF=2202`). Se copio
  desde el blob (`git show 1add289:<archivo>`).
- **Verificacion.** Diferencia leida y controles de agnosticismo sobre el origen, antes de la puerta:

  ```
  $ F=.claude/skills/protocol-close/SKILL.md; diff <(git -C "$ESQ" show 447c2a0:$F) <(git show 1add289:$F)
  831c831,832
  <   nadie.
  ---
  >   nadie. Y al reves: si el trabajo esta en el diff pero su criterio de cierre no reproduce, la tarea
  >   **sigue en `No implementada`**, por hecho que parezca el trabajo.
  $ git grep -nE "YouOtto|Company_TripleS|github.com" 1add289 -- .claude CLAUDE.md _phases _methodology _templates _workflow | wc -l
  0
  $ git grep -noE '\b[A-Z]{1,2}-[0-9]+\b' 1add289 -- _phases _workflow | grep -vE ':PI-[0-9]+$' | wc -l
  0
  $ git grep -nE "USUARIO|jdrodriguez|gmail|SDAI_TripleS|TripleS|Triple S|[A-Z]:[/\\]|/Users/|AppData" 1add289 -- $F | wc -l
  0
  ```

  El commit del esqueleto, su remoto y la identidad del blob con el origen:

  ```
  $ git -C "$ESQ" show --stat --format='%h %s' 7f4381e | tail -2
   .claude/skills/protocol-close/SKILL.md | 3 ++-
   1 file changed, 2 insertions(+), 1 deletion(-)
  $ [ "$(git rev-parse 1add289:.claude/skills/protocol-close/SKILL.md)" = "$(git -C "$ESQ" rev-parse 7f4381e:.claude/skills/protocol-close/SKILL.md)" ] && echo igual || echo DISTINTO
  igual
  $ git -C "$ESQ" ls-remote origin refs/heads/main | cut -c1-7
  7f4381e
  ```

  Barrido del Paso 1 despues de promover (sin salida: el desfase cerro) y Paso 1b sobre el commit del
  esqueleto:

  ```
  $ for d in .claude _phases _methodology _templates _workflow; do diff -rq --strip-trailing-cr "$ESQ/$d" "$d"; done; diff -q --strip-trailing-cr "$ESQ/CLAUDE.md" CLAUDE.md; echo "fin P1"
  fin P1
  $ for p in 005_project.md:project.md 010_progress.md:_persistence/progress.md 015_tasks.md:_persistence/tasks.md 020_decisions.md:_persistence/decisions.md 025_constraints.md:_persistence/constraints.md 030_assumptions.md:_persistence/assumptions.md 035_lessons.md:_persistence/lessons.md 040_techdebt.md:_persistence/techdebt.md 045_audit_index.md:_audit/index.md 050_audit_findings.md:_audit/findings.md; do t=${p%%:*}; c=${p#*:}; printf '%3d  %s\n' "$(diff <(git -C "$ESQ" show 7f4381e:_templates/000_preproject/$t) <(git -C "$ESQ" show 7f4381e:$c) | grep -c '^[<>]')" "$c"; done
    0  project.md
    0  _persistence/progress.md
    0  _persistence/tasks.md
    0  _persistence/decisions.md
    0  _persistence/constraints.md
    0  _persistence/assumptions.md
    0  _persistence/lessons.md
    0  _persistence/techdebt.md
    0  _audit/index.md
    0  _audit/findings.md
  ```

- **Criterio de cierre:** a ese commit, `DT-004` esta `Implementada` y `Confirmada` en indice y ficha.

  ```
  $ git show 079b0a4:_persistence/techdebt.md | grep -E '^\| \[DT-004\]' | grep -c '| Implementada | Confirmada |'
  1
  $ git show 079b0a4:_persistence/techdebt.md | sed -n '/^### DT-004 /,$p' | grep -cE '^\| (Estado \| Implementada|Confirmacion \| Confirmada) \|$'
  2
  ```

  📌 **Ancladas por el Paso 7c-bis al commit `079b0a4`.** Las dos reproducen lo publicado arriba.

### D-036 - F-013 se acepta con nota fechada y puerta mecanica en el anclaje
| Campo | Valor |
|---|---|
| Fecha | 2026-09-16 |
| Estado | Vigente |
| Origen | report_auditor |

- **Contexto:** `F-013` de `R-012`: el commit de anclaje de `S-011` (`fdfca7b`) entro con la NOTA DE
  CIERRE en su marcador de pendiente y el 7c-ter fallando. La nota se completo en `1358c3c`, que el
  informe no nombra. Verificado vigente contra `HEAD` (`1fc3264`):

  ```
  $ git show fdfca7b:_audit/S-011.md | grep -n "NOTA DE CIERRE"
  241:NOTA DE CIERRE: <se completa en el Paso 7c-bis, despues del commit>
  $ git show 1fc3264:_audit/S-011.md | grep -c 1358c3c
  0
  $ for c in fdfca7b 1fc3264; do echo "== 7c-ter @ $c"; for m in "**BARRIDO DE ANCLAJE — salida:**" "**CONTROL DE PROSA BORRADA — salida:**" "**CONTROL DE SALIDA REPRODUCIDA — salida:**" "**SEGUNDA PASADA anclada del Paso 2e — salida:**" "**CONTROL DE CIFRA ADYACENTE — salida:**" "**ORDEN DEL PASO 2d ANCLADA — salida:**"; do git show $c:_audit/S-011.md | grep -qF "$m" || echo "FALTA en la NOTA DE CIERRE: $m"; done; done
  == 7c-ter @ fdfca7b
  FALTA en la NOTA DE CIERRE: **BARRIDO DE ANCLAJE — salida:**
  FALTA en la NOTA DE CIERRE: **CONTROL DE PROSA BORRADA — salida:**
  FALTA en la NOTA DE CIERRE: **CONTROL DE SALIDA REPRODUCIDA — salida:**
  FALTA en la NOTA DE CIERRE: **SEGUNDA PASADA anclada del Paso 2e — salida:**
  FALTA en la NOTA DE CIERRE: **CONTROL DE CIFRA ADYACENTE — salida:**
  FALTA en la NOTA DE CIERRE: **ORDEN DEL PASO 2d ANCLADA — salida:**
  == 7c-ter @ 1fc3264
  $ git log --format="%h %s" 1fc3264 -- _audit/S-011.md
  1358c3c S-011: completa la NOTA DE CIERRE del informe con los seis controles del anclaje
  fdfca7b S-011: ancla el informe y los criterios de cierre al hash 079b0a4
  079b0a4 S-011: F-011 de R-010 aceptado con nota en T-019, y DT-004 confirmada y pagada (D-035)
  ```

- **Decision:** se aceptan las dos partes de la recomendacion, y el usuario eligio la puerta
  mecanica. (1) Nota fechada en la seccion 7 de `S-011.md` que nombra `1358c3c` y el fallo del 7c-ter,
  sin reescribir la linea publicada (`T-021`). (2) El bloque del commit de anclaje de `protocol-close`
  repite los controles del 7c-ter y del 7c-quater, y solo commitea si los dos salen vacios. Si no,
  imprime `PUERTA CERRADA` (`T-022`).
- **Por que:** los dos pasos ya decian «no commitees el anclaje hasta que salga vacio», y se commiteo
  igual. La propia skill da la razon: una regla de redaccion sola ya fallo. Un `if` delante del commit
  no depende de que el agente se acuerde. La nota corrige el puntero sin borrar lo que se audito.
- **Alternativas descartadas:**
  - **Solo la nota fechada:** arregla este informe y deja la puerta igual de facil de saltar.
  - **Aplazarlo como deuda:** el cambio son unas lineas y ya esta probado; no hay coste que justifique
    esperar.
  - **Reescribir la linea «commit de anclaje `fdfca7b`»:** `R-012` describiria un texto que ya no
    existe.
- **Consecuencia:** `protocol-close` vuelve a diferir del esqueleto de arranque. Por `L-012`, la
  promocion va al principio de la sesion siguiente.
- **Criterio de cierre:** a ese commit, `S-011.md` lleva la nota que nombra `1358c3c`. La puerta de
  `protocol-close`, extraida y con el commit cambiado por un `echo`, se cierra sobre `fdfca7b` y se
  abre sobre `1358c3c`. `F-013` esta `Aceptado — pendiente` en indice y ficha.

  ```
  $ git show cf2992f:_audit/S-011.md | grep -cE 'Nota 2026-09-16 \(`F-013`, `T-021`\)|^> `1358c3c`\*\*, y el informe no lo decia'
  2
  $ SP=$(mktemp -d); mkdir "$SP/_audit"; git show cf2992f:.claude/skills/protocol-close/SKILL.md | awk '/^git add _audit\/S-XXX.md _persistence\/decisions.md$/{f=1} f&&/^```$/{exit} f' | sed -e 's/<hash[>]/079b0a4/g; s/S-XXX/S-011/g' -e 's/^git add .*/: add/' -e 's/git commit -m \(.*\) \&\& git push/echo "COMMIT \1"/' -e 's/^git status -sb$/:/' > "$SP/puerta.sh"; for c in fdfca7b 1358c3c; do echo "== puerta @ $c"; git show $c:_audit/S-011.md > "$SP/_audit/S-011.md"; (cd "$SP" && bash puerta.sh); done
  == puerta @ fdfca7b
  FALTA en la NOTA DE CIERRE: **BARRIDO DE ANCLAJE — salida:**
  FALTA en la NOTA DE CIERRE: **CONTROL DE PROSA BORRADA — salida:**
  FALTA en la NOTA DE CIERRE: **CONTROL DE SALIDA REPRODUCIDA — salida:**
  FALTA en la NOTA DE CIERRE: **SEGUNDA PASADA anclada del Paso 2e — salida:**
  FALTA en la NOTA DE CIERRE: **CONTROL DE CIFRA ADYACENTE — salida:**
  FALTA en la NOTA DE CIERRE: **ORDEN DEL PASO 2d ANCLADA — salida:**
  PUERTA CERRADA: no se commitea el anclaje
  == puerta @ 1358c3c
  COMMIT S-011: ancla el informe y los criterios de cierre al hash 079b0a4
  $ git show cf2992f:_audit/findings.md | grep -cE '^\| \[F-013\].*\| Aceptado — pendiente \|$|^\| Registrado en \| T-021, T-022, D-036 \|$'
  2
  ```

  ⚠️ **El `sed` escribe `<hash[>]` a proposito:** con el ancla literal, el Paso 7c-bis la sustituiria
  tambien ahi y la orden dejaria de extraer la puerta. Las dos ramas del 7c-quater se probaron aparte,
  sobre la version `1358c3c`: una inyectando una orden de staging con tuberia en la seccion 1, y otra
  quitando `--format=`. Las dos imprimen su linea y `PUERTA CERRADA`.

  📌 **Ancladas por el Paso 7c-bis al commit `cf2992f`.** Las tres reproducen lo publicado arriba.

- 🕐 **Nota 2026-09-17 (`F-014`, `D-041`):** esta decision entro en el commit `cf2992f`, de `2026-09-17`, y esa es su fecha. El `2026-09-16` de la ficha y de su fila de indice es el dia en que se redacto, la noche anterior al cierre. No se reescribe.

### D-037 - El desfase 4 del arranque ignora los commits de solo anclaje
| Campo | Valor |
|---|---|
| Fecha | 2026-09-16 |
| Estado | Vigente |
| Origen | report_auditor |

- **Contexto:** primera recomendacion sin hallazgo de `R-012`. `D-033` constato por tercera vez que el
  desfase 4 salta tras cada commit de anclaje, y dejo afinarlo como tarea aparte. Tras `S-011` la
  condicion se cumple de nuevo, y el arranque de `S-012` no la reporto:

  ```
  $ git log --format=%h -1 1fc3264 -- _persistence/progress.md
  079b0a4
  $ git log --format="%h %s" 079b0a4..1fc3264 -- _persistence
  fdfca7b S-011: ancla el informe y los criterios de cierre al hash 079b0a4
  ```

- **Decision:** el usuario eligio afinarlo ya. `protocol-start` anade al desfase 4 una tercera orden
  que mira el diff de `_persistence/` desde el ultimo commit de `progress.md`. Descarta las lineas `📌`,
  cambia `<hash>` y los hashes de 7 caracteres por la misma marca, y quita las parejas con `uniq -u`.
  Si sale `0`, no hay desfase.
- **Por que:** un aviso que salta siempre se ignora, y hoy ya fallo en la direccion contraria. Asi el
  desfase 4 vuelve a significar «entro contenido despues de sellar el estado».
- **Alternativas descartadas:**
  - **Dejarlo como deuda:** el aviso seguiria ensenando a ignorarlo mientras tanto.
  - **Excluir por mensaje de commit («ancla el informe»):** un mensaje no prueba lo que entro; el diff si.
  - **Reutilizar el filtro de `D-033` tal cual:** no descarta la linea `-` con el ancla sin resolver ni
    las `📌` sangradas. En `079b0a4..1fc3264` da `13`.
- **Prueba del filtro:** sobre cuatro anclajes reales tiene que dar `0`, y sobre dos rangos con trabajo
  real, mas de `0`.

  ```
  $ f4() { git diff "$1" "$2" -- _persistence | grep -E '^[+-]' | grep -vE '^(\+\+\+|---)' | grep -vE '^\+[[:space:]]*(📌 \*\*Anclad|$)' | sed -E 's/^[+-]//; s/<hash>|\b[0-9a-f]{7}\b/<H>/g' | sort | uniq -u; }
  $ for r in "079b0a4 1fc3264" "a61e453 1add289" "8509c18 f42388a" "27c03bb 9e169f3" "079b0a4^ fdfca7b" "a61e453^ 25b8e41"; do set -- $r; echo "== $1..$2: $(f4 $1 $2 | wc -l)"; done
  == 079b0a4..1fc3264: 0
  == a61e453..1add289: 0
  == 8509c18..f42388a: 0
  == 27c03bb..9e169f3: 0
  == 079b0a4^..fdfca7b: 204
  == a61e453^..25b8e41: 293
  ```

  Una primera version sin `[[:space:]]*` daba `1` en `079b0a4..1fc3264`: la linea `📌` va sangrada
  dentro de la vineta.
- **Consecuencia:** `protocol-start` vuelve a diferir del esqueleto; va en la misma promocion que `D-036`.
- **Criterio de cierre:** a ese commit, `protocol-start` lleva la tercera orden del desfase 4.

  ```
  $ git show cf2992f:.claude/skills/protocol-start/SKILL.md | grep -cF "s/<hash>|\b[0-9a-f]{7}\b/<H>/g"
  1
  ```

  📌 **Anclada por el Paso 7c-bis al commit `cf2992f`.** Reproduce lo publicado arriba.

- 🕐 **Nota 2026-09-17 (`F-014`, `D-041`):** esta decision entro en el commit `cf2992f`, de `2026-09-17`, y esa es su fecha. El `2026-09-16` de la ficha y de su fila de indice es el dia en que se redacto, la noche anterior al cierre. No se reescribe.

### D-038 - R-011 y F-012 quedan retirados por la auditoria revertida
| Campo | Valor |
|---|---|
| Fecha | 2026-09-16 |
| Estado | Vigente |
| Origen | report_auditor |

- **Contexto:** segunda recomendacion sin hallazgo de `R-012`. `709050c` creo `R-011` y `F-012`, y
  `9eb9d49` los revirtio porque esa auditoria no la hizo `report_auditor`. Ningun registro lo decia, y
  el hueco en las series `R-` y `F-` parece un error:

  ```
  $ git log --all --format=%h -- _audit/R-011.md
  9eb9d49
  709050c
  $ git show 709050c:_audit/findings.md | grep -oE "^### F-012 - .*"
  ### F-012 - El anclaje de S-011 se hizo en dos commits, contra la regla de "un unico commit de anclaje"
  $ git log -1 --format=%B 9eb9d49 | sed -n 3,5p
  This reverts commit 709050c. R-011 la ejecuto el propio session-closer
  sobre su cierre, no report_auditor: no es revision independiente. S-011
  vuelve a Pendiente para que la audite report_auditor en frio.
  $ git show 1fc3264:_audit/findings.md | grep -cE "^(\| \[F-012\]|### F-012 )"
  0
  $ git ls-tree --name-only 1fc3264 _audit/ | grep -c R-011
  0
  $ git show 1fc3264:project.md | grep -nE "retirado queda retirado"
  260:🚨 **Ningun codigo se reutiliza, en ningun archivo.** Un id retirado queda retirado; la entrada que
  ```

- **Decision:** `R-011` y `F-012` quedan **retirados** y no se reutilizan. Su contenido no vale como
  auditoria, porque no fue revision independiente. Lo que senalaba `F-012` lo recogio `F-013`, que si
  abrio `report_auditor`. No se escribe fila para ellos en `_audit/index.md` ni en `findings.md`: esta
  decision explica el hueco.
- **Por que:** `project.md` prohibe reutilizar codigos, y sin registro el salto de `R-010` a `R-012` se
  leeria como un indice roto. Recuperar el contenido revertido daria validez a una autoevaluacion.
- **Alternativas descartadas:**
  - **Filas `Retirado` en el tablero y en `findings.md`:** exige un estado que sus convenciones no
    tienen, y dejaria en el registro de hallazgos una entrada que ninguna auditoria valida abrio.
  - **Reutilizar los ids:** lo prohibe `project.md`, y `R-012` ya los salto.
- **Leccion:** `L-013`.
- **Criterio de cierre:** a ese commit, esta decision existe en indice y detalle.

  ```
  $ git show cf2992f:_persistence/decisions.md | grep -cE '^(\| \[D-038\]|### D-038 )'
  2
  ```

  📌 **Anclada por el Paso 7c-bis al commit `cf2992f`.** Reproduce lo publicado arriba.

- 🕐 **Nota 2026-09-17 (`F-014`, `D-041`):** esta decision entro en el commit `cf2992f`, de `2026-09-17`, y esa es su fecha. El `2026-09-16` de la ficha y de su fila de indice es el dia en que se redacto, la noche anterior al cierre. No se reescribe.

### D-039 - El trailer del cierre nombra el modelo que lo ejecuta
| Campo | Valor |
|---|---|
| Fecha | 2026-09-16 |
| Estado | Vigente |
| Origen | report_auditor |

- **Contexto:** tercera recomendacion sin hallazgo de `R-012`. El Paso 7 de `protocol-close` fijaba el
  trailer `Claude Opus 5` literal, y el agente del cierre corre en otro modelo. Los tres commits de
  `S-011` firmaron con el modelo real:

  ```
  $ git show 1fc3264:.claude/agents/session-closer.md | head -8 | grep ^model
  model: sonnet
  $ git show 1fc3264:.claude/skills/protocol-close/SKILL.md | grep -cF 'Co-Authored-By: Claude Opus 5'
  1
  $ for c in 079b0a4 fdfca7b 1358c3c; do git log -1 --format="%h %(trailers:key=Co-Authored-By,valueonly)" $c; done
  079b0a4 Claude Sonnet 5 <noreply@anthropic.com>

  fdfca7b Claude Sonnet 5 <noreply@anthropic.com>

  1358c3c Claude Sonnet 5 <noreply@anthropic.com>
  ```

- **Decision:** el usuario eligio que la skill pida
  `Co-Authored-By: Claude <modelo> <noreply@anthropic.com>`, donde `<modelo>` es el modelo que ejecuta
  el cierre.
- **Por que:** el trailer dice quien escribio el commit. Con un literal falso, o el agente firma con un
  modelo que no es el suyo, o contradice la skill.
- **Alternativas descartadas:**
  - **Sin cambios:** la contradiccion volveria a salir en cada auditoria.
  - **Pasar el cierre a Opus:** mas coste en cada cierre solo para cuadrar un literal.
- **Alcance:** solo `protocol-close`. Las otras skills que fijan `Claude Opus 5` (`protocol-audit`,
  `protocol-gate1`, `protocol-gate2`) las ejecutan agentes con `model: opus`, y ahi el literal es cierto.
- **Consecuencia:** va en la misma promocion que `D-036` y `D-037`.
- **Criterio de cierre:** a ese commit, la skill ya no fija el literal y pide `<modelo>`.

  ```
  $ git show cf2992f:.claude/skills/protocol-close/SKILL.md | grep -cF 'Co-Authored-By: Claude Opus 5'
  0
  $ git show cf2992f:.claude/skills/protocol-close/SKILL.md | grep -cF 'Co-Authored-By: Claude <modelo> <noreply@anthropic.com>'
  1
  ```

  📌 **Ancladas por el Paso 7c-bis al commit `cf2992f`.** Las dos reproducen lo publicado arriba.

- 🕐 **Nota 2026-09-17 (`F-014`, `D-041`):** esta decision entro en el commit `cf2992f`, de `2026-09-17`, y esa es su fecha. El `2026-09-16` de la ficha y de su fila de indice es el dia en que se redacto, la noche anterior al cierre. No se reescribe.

### D-040 - Promocion al esqueleto de protocol-close y protocol-start de S-012
| Campo | Valor |
|---|---|
| Fecha | 2026-09-17 |
| Estado | Vigente |
| Origen | usuario |

- **Contexto:** `D-036`, `D-037` y `D-039` cambiaron `protocol-close` y `protocol-start`, y dejaron el
  esqueleto por detras. El cambio ya tiene su cierre (`S-012`) y su auditoria (`R-013`). Por `L-012`,
  la promocion va al principio de `S-013`, antes de atender `F-014`, que puede tocar el andamiaje.
  Paso 0 y Paso 1 sobre el origen:

  ```
  $ git status --short -- .claude CLAUDE.md _phases _methodology _templates _workflow
  $ git status -sb | head -1
  ## main...origin/main
  $ git rev-parse --short HEAD; git rev-parse --short origin/main
  4409bb9
  4409bb9
  $ git -C "$ESQ" status -sb | head -1; git -C "$ESQ" log --oneline -1
  ## main...origin/main
  7f4381e Promocion del andamiaje desde YouOtto (origen 1add289)
  $ for d in .claude _phases _methodology _templates _workflow; do diff -rq --strip-trailing-cr "$ESQ/$d" "$d"; done; diff -q --strip-trailing-cr "$ESQ/CLAUDE.md" CLAUDE.md; echo "fin P1"
  Files C:/Users/USUARIO/Documents/Company_TripleS/SDAI_TripleS/.claude/skills/protocol-close/SKILL.md and .claude/skills/protocol-close/SKILL.md differ
  Files C:/Users/USUARIO/Documents/Company_TripleS/SDAI_TripleS/.claude/skills/protocol-start/SKILL.md and .claude/skills/protocol-start/SKILL.md differ
  fin P1
  ```

  (`ESQ="C:/Users/USUARIO/Documents/Company_TripleS/SDAI_TripleS"`.)
- **Decision:** el usuario **aprueba los dos archivos**: `.claude/skills/protocol-close/SKILL.md` (35
  lineas entran, 4 se borran) y `.claude/skills/protocol-start/SKILL.md` (23 entran, 1 se borra). El
  hash de origen es `4409bb9` y el commit del esqueleto es `a75cfb6`, ya subido. No se dejo nada fuera.
- **Por que:** con el arbol limpio y lo promovido ya auditado, promover ahora evita que el siguiente
  cambio del andamiaje (`F-014`, o la recomendacion de `R-013` sobre el trailer del anclaje) bloquee la
  promocion, que es el circulo que describe `L-012`.
- **Alternativas descartadas:**
  - **Promover despues de atender `F-014`:** el arbol dejaria de estar limpio y la promocion esperaria
    otro cierre.
  - **Incluir ya el trailer del bloque de anclaje que recomienda `R-013`:** no esta escrito ni auditado
    aqui, y el protocolo prohibe que nazca nada en el esqueleto.
- **Hallazgos:** ninguno. No habia nada que existiera solo en el esqueleto.
- **Comprobacion del supuesto del Paso 2:** se leyeron las 5 lineas que se borran. En `protocol-close`
  son 4: el trailer `Co-Authored-By: Claude Opus 5 …` (lo sustituye `<modelo>`, `D-039`), y la cerca de
  apertura, `git commit -m "S-XXX: ancla…"` y `git push` del bloque de anclaje (los sustituye el bloque
  con la puerta, `D-036`). En `protocol-start` es 1: `que la ultima entrada**.`, que sigue en la
  version nueva con la tercera orden detras (`D-037`). Todas son versiones anteriores de lo reescrito:
  no se perdio nada que un proyecto generico necesite.
- **Final de linea:** LF en los dos repositorios y en los dos archivos (CR=0). Se copio desde el blob
  con `git show 4409bb9:<archivo>`.
- **Verificacion.** Controles de agnosticismo sobre el origen, antes de la puerta:

  ```
  $ git grep -nE "YouOtto|Company_TripleS|github.com" 4409bb9 -- .claude CLAUDE.md _phases _methodology _templates _workflow | wc -l
  0
  $ git grep -noE '\b[A-Z]{1,2}-[0-9]+\b' 4409bb9 -- _phases _workflow | grep -vE ':PI-[0-9]+$' | wc -l
  0
  $ git grep -nE "USUARIO|jdrodriguez|gmail|SDAI_TripleS|TripleS|Triple S|[A-Z]:[/\]|/Users/|AppData" 4409bb9 -- .claude/skills/protocol-close/SKILL.md .claude/skills/protocol-start/SKILL.md | wc -l
  0
  ```

  El commit del esqueleto, la identidad de los blobs con el origen y el remoto:

  ```
  $ git -C "$ESQ" show --stat --format="%h %s" a75cfb6 | tail -3
   .claude/skills/protocol-close/SKILL.md | 39 ++++++++++++++++++++++++++++++----
   .claude/skills/protocol-start/SKILL.md | 24 ++++++++++++++++++++-
   2 files changed, 58 insertions(+), 5 deletions(-)
  $ for f in protocol-close protocol-start; do F=.claude/skills/$f/SKILL.md; [ "$(git rev-parse 4409bb9:$F)" = "$(git -C "$ESQ" rev-parse a75cfb6:$F)" ] && echo "igual $F" || echo "DISTINTO $F"; done
  igual .claude/skills/protocol-close/SKILL.md
  igual .claude/skills/protocol-start/SKILL.md
  $ git -C "$ESQ" ls-remote origin refs/heads/main | cut -c1-7
  a75cfb6
  ```

  Barrido del Paso 1 despues de promover (sin salida: el desfase se cerro) y Paso 1b sobre el commit
  del esqueleto:

  ```
  $ for d in .claude _phases _methodology _templates _workflow; do diff -rq --strip-trailing-cr "$ESQ/$d" "$d"; done; diff -q --strip-trailing-cr "$ESQ/CLAUDE.md" CLAUDE.md; echo "fin P1"
  fin P1
  $ for p in 005_project.md:project.md 010_progress.md:_persistence/progress.md 015_tasks.md:_persistence/tasks.md 020_decisions.md:_persistence/decisions.md 025_constraints.md:_persistence/constraints.md 030_assumptions.md:_persistence/assumptions.md 035_lessons.md:_persistence/lessons.md 040_techdebt.md:_persistence/techdebt.md 045_audit_index.md:_audit/index.md 050_audit_findings.md:_audit/findings.md; do t=${p%%:*}; c=${p#*:}; printf '%3d  %s\n' "$(diff <(git -C "$ESQ" show a75cfb6:_templates/000_preproject/$t) <(git -C "$ESQ" show a75cfb6:$c) | grep -c '^[<>]')" "$c"; done
    0  project.md
    0  _persistence/progress.md
    0  _persistence/tasks.md
    0  _persistence/decisions.md
    0  _persistence/constraints.md
    0  _persistence/assumptions.md
    0  _persistence/lessons.md
    0  _persistence/techdebt.md
    0  _audit/index.md
    0  _audit/findings.md
  ```

- **Criterio de cierre:** a ese commit, esta decision existe en indice y detalle.

  ```
  $ git show d54e314:_persistence/decisions.md | grep -cE '^(\| \[D-040\]|### D-040 )'
  2
  ```

  📌 **Anclada por el Paso 7c-bis al commit `d54e314`.** Reproduce lo publicado arriba.

### D-041 - F-014 se acepta con notas fechadas y control de fechas en el Paso 7d
| Campo | Valor |
|---|---|
| Fecha | 2026-09-17 |
| Estado | Vigente |
| Origen | report_auditor |

- **Contexto:** `F-014` de `R-013`: el commit `cf2992f` es de `2026-09-17`, pero la nota nueva de
  `S-011.md` y las entradas `D-036` a `D-039` y `L-013` llevan `2026-09-16`, en la ficha y en la fila del
  indice. Verificado vigente contra `HEAD` (`4409bb9`):

  ```
  $ git log --format='%h %ad' --date=iso -1 1fc3264; git log --format='%h %ad' --date=iso -1 cf2992f
  1fc3264 2026-09-16 21:23:51 -0500
  cf2992f 2026-09-17 07:14:58 -0500
  $ git show 4409bb9:_persistence/decisions.md | grep -E '^\| \[D-03[6-9]\].*\| 2026-09-16 \|' | wc -l
  4
  $ git show 4409bb9:_persistence/decisions.md | sed -n '/^### D-036 /,$p' | grep -c '^| Fecha | 2026-09-16 |$'
  4
  $ git show 4409bb9:_persistence/lessons.md | grep -cE '^\| \[L-013\].*\| 2026-09-16 \|'
  1
  $ git show 4409bb9:_persistence/lessons.md | sed -n '/^### L-013 /,$p' | grep -c '^| Fecha | 2026-09-16 |$'
  1
  $ git show 4409bb9:_audit/S-011.md | grep -c "Nota 2026-09-16 (\`F-013\`"
  1
  ```

  Las entradas se redactaron la noche del `2026-09-16`, despues de `1fc3264`, y el cierre que las
  commiteo fue la manana del `2026-09-17`. La regla dice que manda la fecha del commit. El Paso 7d solo
  comparaba la cabecera del informe, y el cierre no puede editar la prosa de `decisions.md` ni de
  `lessons.md`, asi que aunque lo hubiera visto no podia corregirlo.
- **Decision:** se acepta, y el usuario eligio las dos partes. (1) Una nota fechada en cada entrada
  afectada, cinco en el registro y una en `S-011.md`, que da `2026-09-17` como fecha y no reescribe la
  publicada (`T-025`). (2) El Paso 7d de `protocol-close` anade una orden que lista las fechas que el
  commit anade (campo `| Fecha |`, fila de indice de una entrada nueva, nota fechada) distintas de la
  suya. Lo que es del cierre lo corrige en el anclaje; lo que es de `manager` va a **Sin resolver**
  (`T-026`).
- **Por que:** la nota fechada vale por decir cuando se supo algo, y aqui su commit la contradice. El
  control nuevo lo detecta en el propio cierre, sin esperar a la auditoria. Y deja escrito que hacer
  con lo que el cierre no puede tocar.
- **Alternativas descartadas:**
  - **Reescribir las fechas:** `R-013` describiria un texto que ya no existe, y el criterio de `D-036`
    busca `Nota 2026-09-16` literal.
  - **Solo las notas:** una sesion que cruce la medianoche lo repite, y solo lo caza la auditoria.
  - **Mirar todas las filas de indice del diff:** cambiar el estado de una entrada antigua vuelve a
    meter su fila, con su fecha de entonces. Probado sobre los commits de sesion, salta en `079b0a4`,
    `a61e453`, `8509c18`, `27c03bb`, `5884e98` y `101db28`.
- **Prueba del control** sobre los 13 commits de sesion, con la version que solo mira filas de entradas
  nuevas:

  ```
  $ fechas() { d=$(git log -1 --format=%ad --date=short $1); D=$(git diff -U0 $1^ $1 -- _persistence _audit); nuevos=$(printf '%s\n' "$D" | grep -oE '^\+#{3} [A-Z]+-[0-9]+ ' | grep -oE '[A-Z]+-[0-9]+' | paste -sd'|'); printf '%s\n' "$D" | grep -E "^\+(\| Fecha \| [0-9]{4}-[0-9]{2}-[0-9]{2} \|$|\| \[(${nuevos:-NINGUNO})\].*\| [0-9]{4}-[0-9]{2}-[0-9]{2} \||[[:space:]]*(> )?(- )?🕐 \*\*Nota [0-9]{4}-[0-9]{2}-[0-9]{2})" | grep -vF "$d" | sed "s/^/$1 ($d): /" | cut -c1-150; }
  $ for c in $(git log --format='%h %s' | grep -E ' S-0[0-9]+: ' | grep -v 'ancla el informe' | cut -d' ' -f1); do fechas $c; done; echo fin
  cf2992f (2026-09-17): +> 🕐 **Nota 2026-09-16 (`F-013`, `T-021`), escrita por `manager` en la sesion siguiente.** La linea
  cf2992f (2026-09-17): +| [D-036](#d-036---f-013-se-acepta-con-nota-fechada-y-puerta-mecanica-en-el-anclaje) | F-013 se acepta con nota fechada y puert
  cf2992f (2026-09-17): +| [D-037](#d-037---el-desfase-4-del-arranque-ignora-los-commits-de-solo-anclaje) | El desfase 4 del arranque ignora los commits
  cf2992f (2026-09-17): +| [D-038](#d-038---r-011-y-f-012-quedan-retirados-por-la-auditoria-revertida) | R-011 y F-012 quedan retirados por la auditoria
  cf2992f (2026-09-17): +| [D-039](#d-039---el-trailer-del-cierre-nombra-el-modelo-que-lo-ejecuta) | El trailer del cierre nombra el modelo que lo ejecu
  cf2992f (2026-09-17): +| Fecha | 2026-09-16 |
  cf2992f (2026-09-17): +| Fecha | 2026-09-16 |
  cf2992f (2026-09-17): +| Fecha | 2026-09-16 |
  cf2992f (2026-09-17): +| Fecha | 2026-09-16 |
  cf2992f (2026-09-17): +| [L-013](#l-013---antes-de-lanzar-la-auditoria-se-mira-en-el-historial-que-el-cierre-no-audito-su-sesion) | Antes de lanzar la
  cf2992f (2026-09-17): +| Fecha | 2026-09-16 |
  fin
  ```

  Da exactamente las 11 lineas de `F-014` y nada en los otros 12 commits.
- **Consecuencia:** `protocol-close` vuelve a diferir del esqueleto de arranque. Se promueve al principio
  de la sesion siguiente (`L-012`).
- **Criterio de cierre:** a ese commit, estan las seis notas. El bloque del 7d, extraido de la skill,
  da 11 lineas sobre `cf2992f` y ninguna sobre `079b0a4`. `F-014` esta `Aceptado — pendiente` en indice
  y ficha.

  ```
  $ git show d54e314:_persistence/decisions.md | grep -c '🕐 \*\*Nota 2026-09-17 (`F-014`, `D-041`)'
  4
  $ git show d54e314:_persistence/lessons.md | grep -c '🕐 \*\*Nota 2026-09-17 (`F-014`, `D-041`)'
  1
  $ git show d54e314:_audit/S-011.md | grep -c '🕐 \*\*Nota 2026-09-17 (`F-014`, `D-041`)'
  1
  $ for c in cf2992f 079b0a4; do echo "== 7d fechas @ $c: $(git show <hash>:.claude/skills/protocol-close/SKILL.md | awk '/^d=\$\(git log -1 --format=%ad --date=short <hash[>]\)$/{f=1} f&&/^```$/{exit} f' | sed "s/<hash[>]/$c/g" | bash | wc -l)"; done
  == 7d fechas @ cf2992f: 11
  == 7d fechas @ 079b0a4: 0
  $ git show d54e314:_audit/findings.md | grep -cE '^\| \[F-014\].*\| Aceptado — pendiente \|$|^\| Registrado en \| T-025, T-026, D-041 \|$'
  2
  ```

  ⚠️ **El `awk` y el `sed` escriben `<hash[>]` a proposito,** igual que en `D-036`: con el ancla literal,
  el Paso 7c-bis los sustituiria.

  📌 **Ancladas por el Paso 7c-bis al commit `d54e314`.** Las cuatro reproducen lo publicado arriba
  (la orden del 7d conserva `<hash>` a proposito, sin tocar).

### D-042 - El commit de anclaje lleva tambien el trailer de coautoria
| Campo | Valor |
|---|---|
| Fecha | 2026-09-17 |
| Estado | Vigente |
| Origen | report_auditor |

- **Contexto:** recomendacion sin hallazgo de `R-013`. El bloque del commit de anclaje de
  `protocol-close` solo pasaba un `-m`, asi que el anclaje de `S-012` salio sin trailer y el de `S-011`
  si lo llevaba. Verificado contra `HEAD` (`4409bb9`):

  ```
  $ git show 4409bb9:.claude/skills/protocol-close/SKILL.md | grep -cF -- '-m "Co-Authored-By: Claude <modelo> <noreply@anthropic.com>" && git push'
  0
  $ for c in de83026 fdfca7b; do echo "$c $(git log -1 --format='%(trailers:key=Co-Authored-By,valueonly)' $c)"; done
  de83026 
  fdfca7b Claude Sonnet 5 <noreply@anthropic.com>
  ```

- **Decision:** la linea del commit de anclaje anade un segundo `-m` con
  `Co-Authored-By: Claude <modelo> <noreply@anthropic.com>`, la misma forma que fijo `D-039` para el
  commit de la sesion (`T-027`).
- **Por que:** `D-039` quiere que el trailer diga que modelo escribio el commit. Un commit del cierre
  sin trailer no dice nada.
- **Alternativas descartadas:**
  - **Dejarlo como esta:** el anclaje es un commit del cierre, y quedaria como el unico sin autoria.
  - **Escribir el mensaje con un heredoc:** cambia mas lineas del bloque de la puerta para lograr lo
    mismo.
- **Prueba:** la puerta, extraida de la skill, se cierra sobre `fdfca7b` y se abre sobre `1358c3c`. Un
  commit con esos dos `-m`, en un repositorio temporal, deja el trailer que `git` reconoce:

  ```
  $ R=$(mktemp -d); git -C "$R" init -q; echo x > "$R/f"; git -C "$R" add f; git -C "$R" -c user.name=t -c user.email=t@t commit -q -m "S-XXX: ancla el informe y los criterios de cierre al hash abc1234" -m "Co-Authored-By: Claude <modelo> <noreply@anthropic.com>"; git -C "$R" log -1 --format='%(trailers:key=Co-Authored-By,valueonly)'
  Claude <modelo> <noreply@anthropic.com>
  ```

  ⚠️ **La orden de prueba del criterio de `D-036` ya no extrae bien la puerta en la version nueva:** su
  `sed` sobre la linea del commit choca con el `<` del trailer. No cambia nada publicado, porque ese
  criterio esta anclado a `cf2992f`. La extraccion que funciona ahora cambia la linea entera, y es la
  del criterio de abajo.
- **Criterio de cierre:** a ese commit, la linea del commit de anclaje lleva el trailer y la puerta
  sigue cerrandose y abriendose donde debe.

  ```
  $ git show d54e314:.claude/skills/protocol-close/SKILL.md | grep -cF -- '-m "Co-Authored-By: Claude <modelo> <noreply@anthropic.com>" && git push'
  1
  $ SP=$(mktemp -d); mkdir "$SP/_audit"; git show d54e314:.claude/skills/protocol-close/SKILL.md | awk '/^git add _audit\/S-XXX.md _persistence\/decisions.md$/{f=1} f&&/^```$/{exit} f' | sed -e 's/<hash[>]/079b0a4/g; s/S-XXX/S-011/g' -e 's/^git add .*/: add/' -e 's/^  git commit -m .* && git push$/  echo COMMIT/' -e 's/^git status -sb$/:/' > "$SP/puerta.sh"; for c in fdfca7b 1358c3c; do echo "== puerta @ $c"; git show $c:_audit/S-011.md > "$SP/_audit/S-011.md"; (cd "$SP" && bash puerta.sh) | tail -1; done
  == puerta @ fdfca7b
  PUERTA CERRADA: no se commitea el anclaje
  == puerta @ 1358c3c
  COMMIT
  ```

  📌 **Ancladas por el Paso 7c-bis al commit `d54e314`.** Las dos reproducen lo publicado arriba (el
  `<hash[>]` interno del `sed` conserva su forma a proposito, sin tocar).

### D-043 - Cada hallazgo de auditoria lleva urgencia ademas de gravedad
| Campo | Valor |
|---|---|
| Fecha | 2026-09-17 |
| Estado | Vigente |
| Origen | usuario |

- **Contexto:** el usuario ve que las sesiones se van en corregir el andamiaje y la etapa no avanza.
  Se le propuso corregir en la sesion solo los hallazgos `Alta` y dejar como deuda los demas, o poner
  un tope por sesion.
- **Decision:** el usuario eligio **seguir corrigiendo como hasta ahora**, pero que cada hallazgo diga
  su **gravedad** (`Alta` / `Media` / `Baja`) y ademas su **urgencia** (`Bloqueante` / `No
  bloqueante`), para saber si se puede aplazar o hay que trabajarlo ya. Se aplica asi (`T-028`):
  - `_audit/findings.md` y su plantilla (`_templates/000_preproject/050_audit_findings.md`) anaden el
    campo `Urgencia`: una columna en el indice, entre `Gravedad` y `Estado`, un campo en la ficha y la
    definicion de cada valor en las convenciones.
  - `protocol-audit` obliga a asignarla y a justificarla, sin deducirla de la gravedad.
  - `protocol-start` la reporta junto a la gravedad, y un hallazgo sin urgencia sale como «sin
    urgencia».
- **Por que:** la gravedad dice cuanto dano hace un defecto, no si puede esperar. Con la urgencia, el
  arranque dice si un hallazgo va antes que el trabajo de la etapa o puede aplazarse con su tarea
  abierta.
- **Alternativas descartadas:**
  - **Corregir solo los `Alta` y aplazar el resto como deuda:** la propuso `manager` y el usuario la
    descarto.
  - **Un hallazgo por sesion:** limita la cantidad pero no distingue lo que no puede esperar.
  - **Deducir la urgencia de la gravedad:** un `Baja` puede bloquear y un `Alta` puede esperar.
- **Alcance hacia atras:** rige hacia adelante. Los hallazgos ya abiertos (`F-001` a `F-014`) llevan
  `—` en la columna y no llevan el campo en la ficha. Asignarles ahora una urgencia seria inventarla,
  y seria `manager` graduando hallazgos que no abrio. `F-014` ya esta corregido en esta sesion.
- **Consecuencia:** el control del Paso 2b de `protocol-close` lee el estado en la ultima columna, y
  sigue siendolo:

  ```
  $ diff <(awk '/^[[:space:]]*```/{c=!c; next} !c' _audit/findings.md | grep -E '^\| \[F-[0-9]+\]' | awk -F'|' '{match($2,/F-[0-9]+/); e=$(NF - 1); gsub(/^ +| +$/,"",e); print substr($2,RSTART,RLENGTH)" "e}' | sort) <(awk '/^[[:space:]]*```/{c=!c; next} c{next} /^### F-[0-9]+ /{match($0,/F-[0-9]+/); cur=substr($0,RSTART,RLENGTH); got=0} /^\| Estado \|/ && cur!="" && !got{s=$0; sub(/^\| Estado \| */,"",s); sub(/ *\|$/,"",s); print cur" "s; got=1}' _audit/findings.md | sort); echo "fin 2b"
  fin 2b
  ```

  Tres archivos mas del andamiaje difieren del esqueleto (`protocol-audit`, `protocol-start` y la
  plantilla), y van en la promocion de la sesion siguiente. Al promover la plantilla hay que regenerar
  la copia de `_audit/findings.md` del esqueleto (Paso 1b).
- **Criterio de cierre:** a ese commit, la plantilla, el registro y las dos skills llevan la urgencia.

  ```
  $ git show d54e314:_templates/000_preproject/050_audit_findings.md | grep -cE '^\| Codigo \| Hallazgo \| Auditoria \| Gravedad \| Urgencia \| Estado \|$|^\| Urgencia \| `Bloqueante` / `No bloqueante` \|$|^\| Urgencia \| \|$'
  3
  $ git show d54e314:_audit/findings.md | grep -cE '^\| \[F-[0-9]+\].*\| (Alta|Media|Baja) \| — \| [^|]+ \|$'
  13
  $ git show d54e314:.claude/skills/protocol-audit/SKILL.md | grep -cF '| Urgencia | Bloqueante / No bloqueante |'
  1
  $ git show d54e314:.claude/skills/protocol-start/SKILL.md | grep -cF '(gravedad, urgencia)'
  2
  ```

  📌 **Ancladas por el Paso 7c-bis al commit `d54e314`.** Las cuatro reproducen lo publicado arriba.

### D-044 - Reparto del trabajo de 005_discovery
| Campo | Valor |
|---|---|
| Fecha | 2026-09-17 |
| Estado | Vigente |
| Origen | usuario |

- **Contexto:** `_phases/005_discovery.md` §4 exige adoptar el reparto antes del Paso 1, con su
  `D-XXX`, a partir de `_workflow/005_discovery.md`. Desde `D-015` la etapa figura como actual en
  `progress.md`, pero ningun paso de su procedimiento ha empezado. El usuario pide dejarlo todo listo
  para trabajar la etapa desde la sesion siguiente.

  ```
  $ git show 4409bb9:_workflow/005_discovery.md | grep -c "^| \*\*[1-7] · "
  7
  ```

- **Decision:** se adopta **la tabla de §2 de `_workflow/005_discovery.md` tal cual**, con sus tres
  asignaciones no obvias (§2.1) y lo que nunca se delega (§3).
  - **El humano es el usuario, JD Rodriguez, patrocinador.** Responde las entrevistas, decide que es
    necesidad, clasifica los actores, decide en solitario el actor originador (Paso 4), decide que es
    firme y que es supuesto, y formula, sella y firma la hipotesis y el perfil del usuario
    representativo.
  - **`manager` es la IA.** Propone las preguntas, resume, senala las soluciones disfrazadas de
    necesidad y los errores de clasificacion, propone los supuestos que nadie escribio e intenta tumbar
    la hipotesis. **No responde por el patrocinador ni da nada por bueno.**
  - **El software** son los barridos de una linea que ya traen las plantillas y los controles del cierre
    y de la auditoria. **No se escribe ningun programa.**
  - **Nivel del sistema de IA para el trabajo de la etapa: 0–1**, con la discrepancia de §6 aceptada. El
    eje «variabilidad de la entrada» esta en 3, pero cada salida la revisa el usuario caso a caso, y el
    impacto (2) y la autonomia (1) no estan en 3. Si la revision caso a caso deja de hacerse o el
    volumen crece, la lectura cambia.
  - **Lo que da por cierto sin confirmar:** `A-004` y `A-005`.
  - **Como se trabaja:** los Pasos 1 y 2 se hacen juntos en conversacion, sin guion preparado de
    antemano (`T-029`).
- **Por que:** es el reparto que el metodo ya argumenta, y el usuario no ve motivo para cambiarlo. Da a
  la IA lo que hace bien, que es encontrar lo no escrito y buscar contraejemplos, y deja al humano lo
  que es juicio o es irreversible.
- **Alternativas descartadas:**
  - **Tabla con mas IA,** con `manager` redactando borradores de `N-XXX` y actores a partir del brief:
    roza «validar por plausibilidad» (§9) y convierte el encargo en requisito, que §2 de la etapa
    prohibe.
  - **Guion de entrevista preparado antes de la sesion:** el usuario prefiere construirlo en la
    conversacion.
- **Criterio de cierre:** a ese commit, esta decision existe en indice y detalle, y los dos supuestos
  tambien.

  ```
  $ git show d54e314:_persistence/decisions.md | grep -cE '^(\| \[D-044\]|### D-044 )'
  2
  $ git show d54e314:_persistence/assumptions.md | grep -cE '^(\| \[A-00[45]\]|### A-00[45] )'
  4
  ```

  📌 **Ancladas por el Paso 7c-bis al commit `d54e314`.** Las dos reproducen lo publicado arriba.

### D-045 - Promocion al esqueleto de los cuatro archivos de S-013
| Campo | Valor |
|---|---|
| Fecha | 2026-09-17 |
| Estado | Vigente |
| Origen | usuario |

- **Contexto:** `D-041`, `D-042` y `D-043` dejaron cuatro archivos del andamiaje por delante del
  esqueleto; el cambio ya tiene su cierre (`S-013`) y su auditoria (`R-015`). Por `L-012`, la promocion
  va al principio de la sesion, antes de tocar el andamiaje por `F-016`, `F-017` o `D-048`. Disparadores
  y Paso 1 sobre el origen:

  ```
  $ git status --short -- .claude CLAUDE.md _phases _methodology _templates _workflow
  $ git status -sb
  ## main...origin/main
  $ git rev-parse HEAD
  2063f095af1b8264d247860d72e7614b96a47d86
  $ for d in .claude _phases _methodology _templates _workflow; do diff -rq --strip-trailing-cr "$ESQ/$d" "$d"; done; diff -q --strip-trailing-cr "$ESQ/CLAUDE.md" CLAUDE.md
  Files C:/Users/USUARIO/Documents/Company_TripleS/SDAI_TripleS/.claude/skills/protocol-audit/SKILL.md and .claude/skills/protocol-audit/SKILL.md differ
  Files C:/Users/USUARIO/Documents/Company_TripleS/SDAI_TripleS/.claude/skills/protocol-close/SKILL.md and .claude/skills/protocol-close/SKILL.md differ
  Files C:/Users/USUARIO/Documents/Company_TripleS/SDAI_TripleS/.claude/skills/protocol-start/SKILL.md and .claude/skills/protocol-start/SKILL.md differ
  Files C:/Users/USUARIO/Documents/Company_TripleS/SDAI_TripleS/_templates/000_preproject/050_audit_findings.md and _templates/000_preproject/050_audit_findings.md differ
  ```

  (`ESQ="C:/Users/USUARIO/Documents/Company_TripleS/SDAI_TripleS"`.) Paso 1b: nueve copias de la raiz
  dan `0` y `_audit/findings.md` da `21`, el mismo cambio de su plantilla.
- **Decision:** el usuario **aprueba los cinco**: `protocol-audit/SKILL.md` (10 entran, 2 salen),
  `protocol-close/SKILL.md` (32 entran, 1 sale), `protocol-start/SKILL.md` (6 entran, 4 salen),
  `_templates/000_preproject/050_audit_findings.md` (18 entran, 3 salen) y la copia `_audit/findings.md`
  del esqueleto, regenerada desde esa plantilla. Origen `2063f09`; commit del esqueleto `1bec59a`, subido
  (`## main...origin/main`). No se dejo nada fuera.
- **Por que:** con el arbol limpio y lo promovido ya auditado, promover antes de tocar `.claude/` evita
  el circulo de `L-012`.
- **Alternativas descartadas:**
  - **Promover al final, junto con `D-048`:** `D-048` no tiene cierre ni auditoria, y el protocolo
    prohibe depositar en el esqueleto lo que no se ejercito.
- **Hallazgos:** ninguno. Nada existia solo en el esqueleto.
- **Comprobacion del supuesto del Paso 2:** se leyeron las 10 lineas que se borran. `protocol-audit`: 2,
  la version anterior del apartado a) sin gravedad ni urgencia. `protocol-close`: 1, el commit de anclaje
  sin trailer (`D-042`). `protocol-start`: 4, el anuncio «por codigo y gravedad» y las dos lineas de la
  plantilla del reporte sin urgencia (`D-043`). Plantilla: 3, la cabecera, separador y fila vacia de la
  tabla sin columna `Urgencia`. Todas son versiones anteriores de lo reescrito.
- **Final de linea:** los cinco destinos en LF. `protocol-close` salia en CRLF **del arbol de trabajo**,
  y se copio quitando los CR. ⚠️ En la puerta se dijo que ese CRLF venia de `d54e314`; es falso: el blob
  del commit esta en LF, el CRLF es solo la copia de trabajo:

  ```
  $ git show 4409bb9:.claude/skills/protocol-close/SKILL.md | tr -dc "\r" | wc -c; git show d54e314:.claude/skills/protocol-close/SKILL.md | tr -dc "\r" | wc -c
  0
  0
  ```

- **Verificacion.** Controles de agnosticismo, antes de la puerta:

  ```
  $ git grep -nE "YouOtto|Proyectos_TripleS|github\.com" -- .claude CLAUDE.md _phases _methodology _templates _workflow
  $ git grep -noE '\b[A-Z]{1,2}-[0-9]+\b' -- _phases _workflow | grep -vE ':PI-[0-9]+$'
  $ git grep -nE "jdrodriguez|USUARIO|C:\\Users|C:/Users|TripleS|gmail|SDAI|Otto" -- .claude/skills/protocol-audit/SKILL.md .claude/skills/protocol-close/SKILL.md .claude/skills/protocol-start/SKILL.md _templates/000_preproject/050_audit_findings.md; echo "salida=$?"
  salida=1
  ```

  El commit del esqueleto y la identidad de contenido con el origen:

  ```
  $ git -C "$ESQ" show --stat --format="%h %s" 1bec59a | tail -6
   .claude/skills/protocol-audit/SKILL.md          | 12 +++++++--
   .claude/skills/protocol-close/SKILL.md          | 33 ++++++++++++++++++++++++-
   .claude/skills/protocol-start/SKILL.md          | 10 +++++---
   _audit/findings.md                              | 21 +++++++++++++---
   _templates/000_preproject/050_audit_findings.md | 21 +++++++++++++---
   5 files changed, 84 insertions(+), 13 deletions(-)
  $ for F in .claude/skills/protocol-audit/SKILL.md .claude/skills/protocol-close/SKILL.md .claude/skills/protocol-start/SKILL.md _templates/000_preproject/050_audit_findings.md; do cmp -s <(git show 2063f09:$F | tr -d "\r") <(git -C "$ESQ" show 1bec59a:$F) && echo "igual $F" || echo "DISTINTO $F"; done
  igual .claude/skills/protocol-audit/SKILL.md
  igual .claude/skills/protocol-close/SKILL.md
  igual .claude/skills/protocol-start/SKILL.md
  igual _templates/000_preproject/050_audit_findings.md
  ```

  Barrido del Paso 1 despues de promover, antes de tocar `.claude/` por `D-048`: salida vacia. Paso 1b
  sobre `1bec59a` (plantilla y copia leidas con `git -C "$ESQ" show 1bec59a:`): las diez parejas dan `0`.
- **Criterio de cierre:** el commit del esqueleto `1bec59a` contiene los cinco archivos con el contenido
  del origen `2063f09`: son las dos ordenes del bloque anterior, ya ancladas a los dos hashes. El
  esqueleto queda fuera de lo que la auditoria ve, y por eso van los dos hashes delante.
- 🕐 **Nota 2026-09-17 (`F-018`, `D-049`):** el parrafo de arriba publica tres resultados sin su orden
  ni su salida. No se reescribe: aqui van las dos ordenes, ancladas a los dos hashes, con lo que
  devuelven hoy. Las dos confirman lo que el parrafo afirma. Con `ESQ` como arriba, el Paso 1b sobre el
  commit del esqueleto, plantilla y copia leidas con `git -C "$ESQ" show 1bec59a:` (Paso 7.3 de
  `protocol-promote`):

  ```
  $ for p in 005_project.md:project.md 010_progress.md:_persistence/progress.md 015_tasks.md:_persistence/tasks.md 020_decisions.md:_persistence/decisions.md 025_constraints.md:_persistence/constraints.md 030_assumptions.md:_persistence/assumptions.md 035_lessons.md:_persistence/lessons.md 040_techdebt.md:_persistence/techdebt.md 045_audit_index.md:_audit/index.md 050_audit_findings.md:_audit/findings.md; do t=${p%%:*}; c=${p#*:}; printf '%3d  %s\n' "$(diff --strip-trailing-cr <(git -C "$ESQ" show 1bec59a:_templates/000_preproject/$t) <(git -C "$ESQ" show 1bec59a:$c) | grep -c '^[<>]')" "$c"; done
    0  project.md
    0  _persistence/progress.md
    0  _persistence/tasks.md
    0  _persistence/decisions.md
    0  _persistence/constraints.md
    0  _persistence/assumptions.md
    0  _persistence/lessons.md
    0  _persistence/techdebt.md
    0  _audit/index.md
    0  _audit/findings.md
  ```

  Y el barrido del Paso 1 despues de promover, sin el arbol de trabajo de ninguno de los dos: el origen
  `2063f09` y el esqueleto `1bec59a` se extraen a un directorio temporal y se comparan con la misma
  orden del Paso 1. La ultima linea cuenta los archivos extraidos, para que la salida vacia no pueda
  venir de dos directorios vacios:

  ```
  $ W=$(mktemp -d); mkdir "$W/o" "$W/e"; git archive 2063f09 .claude _phases _methodology _templates _workflow CLAUDE.md | tar -x -C "$W/o"; git -C "$ESQ" archive 1bec59a .claude _phases _methodology _templates _workflow CLAUDE.md | tar -x -C "$W/e"; for d in .claude _phases _methodology _templates _workflow; do diff -rq --strip-trailing-cr "$W/e/$d" "$W/o/$d"; done; diff -q --strip-trailing-cr "$W/e/CLAUDE.md" "$W/o/CLAUDE.md"; echo "archivos: $(find "$W/o" -type f | wc -l) $(find "$W/e" -type f | wc -l)"; rm -rf "$W"
  archivos: 71 71
  ```

  ⚠️ Esta segunda orden no es la que se corrio el dia de la promocion, que leia los dos arboles de
  trabajo antes de tocar `.claude/`: esa ya no se puede repetir, porque `D-048` cambio `.claude/`
  despues. Lo que se publica es su equivalente sobre los dos commits.

### D-046 - F-016 y F-017 se aceptan y su correccion se aplaza
| Campo | Valor |
|---|---|
| Fecha | 2026-09-17 |
| Estado | Vigente |
| Origen | report_auditor |

- **Contexto:** `R-015` abrio `F-016` y `F-017` sobre `S-013` (`d54e314`), los dos `Baja` y `No
  bloqueante`. Verificados contra `HEAD` (`2063f09`):

  ```
  $ git show 2063f09:_persistence/decisions.md | grep -nF 'salta en `079b0a4`'
  2323:    meter su fila, con su fecha de entonces. Probado sobre los commits de sesion, salta en `079b0a4`,
  $ git show 2063f09:_persistence/decisions.md | sed -n '/^### D-041 /,/^### D-042 /p' | grep -nE '079b0a4|^\s*\$ ' | cut -c1-60
  13:  $ git log --format='%h %ad' --date=iso -1 1fc3264; git l
  16:  $ git show 4409bb9:_persistence/decisions.md | grep -E '
  18:  $ git show 4409bb9:_persistence/decisions.md | sed -n '/
  20:  $ git show 4409bb9:_persistence/lessons.md | grep -cE '^
  22:  $ git show 4409bb9:_persistence/lessons.md | sed -n '/^#
  24:  $ git show 4409bb9:_audit/S-011.md | grep -c "Nota 2026-
  46:    meter su fila, con su fecha de entonces. Probado sobre
  52:  $ fechas() { d=$(git log -1 --format=%ad --date=short $
  53:  $ for c in $(git log --format='%h %s' | grep -E ' S-0[0-
  72:  da 11 lineas sobre `cf2992f` y ninguna sobre `079b0a4`.
  76:  $ git show d54e314:_persistence/decisions.md | grep -c '
  78:  $ git show d54e314:_persistence/lessons.md | grep -c '🕐
  80:  $ git show d54e314:_audit/S-011.md | grep -c '🕐 \*\*Nota
  82:  $ for c in cf2992f 079b0a4; do echo "== 7d fechas @ $c: 
  85:  $ git show d54e314:_audit/findings.md | grep -cE '^\| \[F
  $ git show 2063f09:_audit/S-013.md | grep -nF 'dieciseis lineas'
  497:Ninguna de las dieciseis lineas afirma una cifra que no salga del bloque inmediatamente anterior o de
  ```

  `F-016` sigue vivo: detras de la frase de la linea 46 del bloque de `D-041` no hay ninguna orden sin el
  filtro de entradas nuevas. Las dos ordenes que corren el control (52-53 y 82) llevan el filtro. `F-017`
  sigue vivo: la linea 497 dice «dieciseis», y el bloque publicado encima tiene 17 lineas de salida
  (`R-015`, con su orden).
- **Decision:** se aceptan los dos. Por decision del usuario, al ser `No bloqueante` **no se corrigen en
  esta sesion**: quedan `Aceptado — pendiente` con su tarea abierta.
  - `F-016` → `T-030`: nota fechada en `D-041` que publica la orden sin filtro, anclada, con su salida.
  - `F-017` → `T-031`: nota fechada en `_audit/S-013.md`, debajo de la linea 497, con la cifra correcta
    (17). La linea publicada no se reescribe.
- **Por que:** los dos se sostienen contra el repositorio y ninguno contamina lo que venga despues; la
  urgencia de `D-043` existe para poder aplazarlos sin perderlos.
- **Alternativas descartadas:**
  - **Corregirlos ahora:** el usuario prioriza la retirada de `R-014` y el bloqueo de `D-048`.
  - **Rechazar `F-016` porque el resultado es cierto:** `CLAUDE.md` exige orden y salida para todo
    resultado que el registro afirme, y lo que el hallazgo senala es su ausencia, no un error.
- **Criterio de cierre:** a ese commit, los dos hallazgos citan su tarea en indice y ficha.

  ```
  $ git show 91562b7:_audit/findings.md | grep -cE '^\| \[F-01[67]\].*\| Aceptado — pendiente \|$|^\| Registrado en \| T-03[01], D-046 \|$'
  4
  ```

  📌 **Anclada por el Paso 7c-bis al commit `91562b7`.** Reproduce lo publicado arriba.

### D-047 - R-014 y F-015 quedan retirados por la auditoria revertida
| Campo | Valor |
|---|---|
| Fecha | 2026-09-17 |
| Estado | Vigente |
| Origen | report_auditor |

- **Contexto:** primera recomendacion sin hallazgo de `R-015`. `798500e` creo `R-014` y `F-015`, y
  `c180fd5` los revirtio porque esa auditoria la hizo el propio `session-closer`, no `report_auditor`.
  Es la segunda vez, tras `R-011`/`F-012` (`D-038`):

  ```
  $ git log --all --format=%h -- _audit/R-014.md
  c180fd5
  798500e
  $ git show 798500e:_audit/findings.md | grep -oE "^### F-015 - .*"
  ### F-015 - El CONTROL DE CIFRA ADYACENTE publicado en la NOTA DE CIERRE de S-013 no reproduce contra el commit de anclaje, por su propia insercion
  $ git log -1 --format=%B c180fd5 | sed -n 3,6p
  This reverts commit 798500e. R-014 la ejecuto el propio session-closer
  sobre su cierre, no report_auditor: no es revision independiente. S-013
  vuelve a Pendiente para que la audite report_auditor en frio. R-014 y
  F-015 quedan retirados (L-013).
  $ git show 2063f09:_audit/findings.md | grep -cE "^(\| \[F-015\]|### F-015 )"
  0
  $ git ls-tree --name-only 2063f09 _audit/ | grep -c R-014
  0
  $ git show -s --format="%h %ad %s" --date=iso 709050c 798500e
  709050c 2026-09-16 21:03:06 -0500 auditoria R-011 sobre S-011 (079b0a4)
  798500e 2026-09-17 08:06:30 -0500 auditoria R-014 sobre S-013 (d54e314)
  ```

- **Decision:** `R-014` y `F-015` quedan **retirados** y no se reutilizan. Su contenido no vale como
  auditoria. Igual que en `D-038`, no llevan fila en `_audit/index.md` ni en `findings.md`: esta decision
  explica el hueco. `R-015` ya los salto sin usar el contenido retirado (su apartado «Sobre el id»).
- **Por que:** lo mismo que en `D-038`: los codigos no se reutilizan, y recuperar el contenido daria
  validez a una autoevaluacion.
- **Lo que senalaba `F-015` no se reabre por aqui:** un hallazgo solo lo abre una auditoria independiente.
  `R-015`, en frio, abrio `F-017` sobre el mismo control.
- **Alternativas descartadas:** las mismas de `D-038` (filas `Retirado`, reutilizar los ids).
- **Leccion:** `L-014`. **Prevencion:** `D-048`.
- **Criterio de cierre:** a ese commit, esta decision existe en indice y detalle.

  ```
  $ git show 91562b7:_persistence/decisions.md | grep -cE '^(\| \[D-047\]|### D-047 )'
  2
  ```

  📌 **Anclada por el Paso 7c-bis al commit `91562b7`.** Reproduce lo publicado arriba.

### D-048 - El agente de cierre solo puede invocar protocol-close
| Campo | Valor |
|---|---|
| Fecha | 2026-09-17 |
| Estado | Vigente |
| Origen | usuario |

- **Contexto:** el usuario pide decidir como impedir que el cierre vuelva a auditarse a si mismo: van
  dos veces (`D-038`, `D-047`) y las dos subieron la auditoria antes de detectarse. `L-013` solo detecta
  despues. La causa: `session-closer` tiene la herramienta `Skill`, y la exclusividad de `protocol-audit`
  solo esta escrita.

  ```
  $ git show 2063f09:.claude/agents/session-closer.md | grep -nE "^tools:"
  4:tools: Read, Write, Edit, Glob, Grep, Bash, Skill
  $ git show 2063f09:.claude/skills/protocol-close/SKILL.md | grep -nF "Tu no lanzas la auditoria"
  2262:- 🚨 **Tu no lanzas la auditoria, pero la reclamas.** El agente `report_auditor` corre despues de ti,
  ```

  La documentacion de Claude Code (consultada con `ctx7`, `/websites/code_claude`) dice que un agente
  puede declarar hooks `PreToolUse` en su cabecera, que **solo corren mientras ese agente esta activo**, y
  que un hook con salida `2` bloquea la llamada.
- **Decision:** la cabecera de `.claude/agents/session-closer.md` declara un hook `PreToolUse` sobre
  `Skill` que corre `node .claude/hooks/allow-only-skill.js protocol-close`. El script deja pasar solo
  esa skill y bloquea cualquier otra, y tambien una entrada ilegible o sin nombre. Test:
  `.claude/hooks/allow-only-skill.test.js`. `L-013` se mantiene como segunda barrera.
- **Por que:** la exclusividad deja de depender de que el agente lea y obedezca un texto, y se aplica
  justo en el camino por el que fallo las dos veces.
- **Alternativas descartadas:**
  - **Reforzar el texto de `protocol-close` o del agente:** ya dice que no lanza la auditoria, y fallo
    dos veces.
  - **Quitar `Skill` al agente:** la necesita para cargar `protocol-close`.
  - **`disable-model-invocation` en `protocol-audit`:** tambien impediria a `report_auditor` cargarla.
  - **Hook global en `settings.json` que mire `agent_type`:** funcionaria igual, pero saca la regla del
    agente al que pertenece.
  - **El mismo bloqueo en los demas agentes:** no hay fallo observado en ellos (`PI-2`); se anade con una
    linea si aparece.
- **Limites, dichos:**
  1. No impide que el agente escriba `_audit/R-XXX.md` a mano con `Bash` o `Write`, sin la skill. No ha
     ocurrido, y `L-013` lo detectaria.
  2. Las definiciones de agente se cargan al arrancar Claude Code: **el cierre de esta misma sesion corre
     todavia sin el hook**, y `L-013` es la unica barrera para el.
  3. Que el hook se dispare de verdad dentro del agente no esta probado: es `A-006`, con el agente
     temporal `.claude/agents/hook-probe.md`. Lanzarlo en esta sesion devolvio
     `Agent type 'hook-probe' not found`.
- **Verificacion:**

  ```
  $ node --test .claude/hooks/allow-only-skill.test.js
  ✔ bloquea una skill distinta de la permitida (54.1937ms)
  ✔ deja pasar la skill permitida (48.8013ms)
  ✔ no toca otras herramientas (52.6394ms)
  ✔ bloquea si la entrada no es JSON (47.234ms)
  ✔ bloquea una skill sin nombre (53.7684ms)
  ℹ tests 5
  ℹ suites 0
  ℹ pass 5
  ℹ fail 0
  ℹ cancelled 0
  ℹ skipped 0
  ℹ todo 0
  ℹ duration_ms 340.6615
  ```

- **Tarea:** `T-032`. **Supuesto:** `A-006`. **Leccion:** `L-014`.
- **Criterio de cierre:** a ese commit, la cabecera del agente declara el hook y existen el script y su
  test.

  ```
  $ git show 91562b7:.claude/agents/session-closer.md | grep -cF 'command: node .claude/hooks/allow-only-skill.js protocol-close'
  1
  $ git ls-tree --name-only 91562b7 .claude/hooks/ | wc -l
  2
  ```

  📌 **Ancladas por el Paso 7c-bis al commit `91562b7`.** Las dos reproducen lo publicado arriba.

- 🕐 **Nota 2026-09-17 (`A-006`):** el limite 3 queda resuelto: `A-006` esta `Confirmado` en la misma
  sesion, con la salida de `hook-probe`, y ese agente temporal se borro. El limite 2 se escribio antes de
  ver que las definiciones de agente se recargaron sin reiniciar: si el cierre de esta sesion ya corre con
  el hook **no se comprobo**, y `L-013` sigue siendo la barrera que se aplica despues del cierre.

### D-049 - F-018 se acepta y se corrige con nota fechada en D-045
| Campo | Valor |
|---|---|
| Fecha | 2026-09-17 |
| Estado | Vigente |
| Origen | report_auditor |

- **Contexto:** `R-016` abrio `F-018` sobre `S-014` (`91562b7`), `Baja` y `No bloqueante`: `D-045`
  publica en resumen, sin orden ni salida, el Paso 1b antes de la puerta, el barrido del Paso 1 despues
  de promover y el Paso 1b sobre `1bec59a`. Verificado contra `HEAD` (`ca12450`): `D-045` no cambio
  desde el commit auditado, y ninguna de sus diez lineas de orden es la del Paso 1b:

  ```
  $ diff <(git show 91562b7:_persistence/decisions.md | sed -n '/^### D-045 /,/^### D-046 /p') <(git show ca12450:_persistence/decisions.md | sed -n '/^### D-045 /,/^### D-046 /p'); echo "salida=$?"
  salida=0
  $ git show ca12450:_persistence/decisions.md | sed -n '/^### D-045 /,/^### D-046 /p' | grep -cE '^\s*\$ '
  10
  $ git show ca12450:_persistence/decisions.md | sed -n '/^### D-045 /,/^### D-046 /p' | grep -cE '^\s*\$ .*(for p in|git -C "\$ESQ" show 1bec59a:_templates)'
  0
  $ git show ca12450:_persistence/decisions.md | sed -n '/^### D-045 /,/^### D-046 /p' | grep -nE 'nueve copias|salida vacia\. Paso 1b|las diez parejas dan'
  26:  (`ESQ="C:/Users/USUARIO/Documents/Company_TripleS/SDAI_TripleS"`.) Paso 1b: nueve copias de la raiz
  80:  Barrido del Paso 1 despues de promover, antes de tocar `.claude/` por `D-048`: salida vacia. Paso 1b
  81:  sobre `1bec59a` (plantilla y copia leidas con `git -C "$ESQ" show 1bec59a:`): las diez parejas dan `0`.
  ```

  Las dos mediciones posteriores a la promocion se reprodujeron ancladas a `2063f09` y `1bec59a`, y
  confirman lo afirmado; orden y salida van en la nota de `D-045`. Una precision al hallazgo, que no lo
  invalida: `R-016` dice que la forma `git -C "$ESQ" show 1bec59a:` es distinta de la literal del
  protocolo, pero es la que pide el Paso 7.3 de `protocol-promote`. Lo que falta es la orden escrita, y
  eso si es cierto.
- **Decision:** se acepta y, por decision del usuario, **se corrige en esta sesion** (`T-033`): nota
  fechada en `D-045` con el Paso 1b sobre `1bec59a` y el barrido del Paso 1 entre `2063f09` y `1bec59a`,
  con sus salidas. Lo publicado no se reescribe. `F-018` queda `Aceptado — pendiente`: lo cierra la
  auditoria siguiente.
- **Por que:** el hallazgo se sostiene contra el repositorio, y la reproduccion ya estaba hecha al
  verificarlo, asi que corregirlo costaba solo escribirla.
- **Alternativas descartadas:**
  - **Aceptar y aplazar, como `F-016` con `D-046`:** dejaba abierta una tarea cuyo trabajo ya estaba
    hecho.
  - **No publicar el Paso 1b previo a la puerta** («nueve dan `0` y `_audit/findings.md` da `21`»): no
    se incluye porque mide el arbol del esqueleto antes de `1bec59a`, que ya no existe; su cifra `21` si
    la respalda el `--stat` de `1bec59a` publicado en `D-045` (`_audit/findings.md | 21`).
  - **Reproducir el barrido del Paso 1 sobre los arboles de trabajo:** `D-048` cambio `.claude/` despues
    de la promocion, y el barrido saldria con diferencias que no son de la promocion.
- **Criterio de cierre:** a ese commit, `D-045` lleva la nota con las dos ordenes, y `F-018` cita su
  tarea en indice y ficha.

  ```
  $ git show eda6314:_persistence/decisions.md | sed -n '/^### D-045 /,/^### D-046 /p' | grep -cE '🕐 \*\*Nota 2026-09-17 \(`F-018`, `D-049`\)|^\s*\$ for p in 005_project|^\s*\$ W=\$\(mktemp -d\)'
  3
  $ git show eda6314:_audit/findings.md | grep -cE '^\| \[F-018\].*\| Aceptado — pendiente \|$|^\| Registrado en \| T-033, D-049 \|$'
  2
  ```

📌 **Ancladas por el Paso 7c-bis al commit `eda6314`.** Las dos reproducen lo publicado arriba.

### D-050 - T-032 se verifica con una sonda de la cabecera exacta, en los dos casos
| Campo | Valor |
|---|---|
| Fecha | 2026-09-17 |
| Estado | Vigente |
| Origen | manager |

- **Contexto:** el criterio de `T-032` pide «`A-006` confirmado tras reiniciar Claude Code». Ese «tras
  reiniciar» nacio del limite 2 de `D-048`, que su propia nota fechada deja en duda: las definiciones de
  agente se recargaron sin reiniciar. Ademas `A-006` probo solo el caso bloqueado, con otra skill
  permitida (`protocol-start`), y no la cabecera literal de `session-closer`. Desde esta sesion no hay
  forma de comprobar si Claude Code se reinicio.
- **Decision:** `T-032` se verifica con `A-007`: un agente temporal `hook-probe` con el bloque `hooks`
  copiado literal de `session-closer`, que llama a `protocol-audit` (debe quedar bloqueada) y a
  `protocol-close` (debe pasar). Se borra en la misma sesion. Identidad del bloque, comprobada al crearlo
  sobre el arbol de trabajo (el agente temporal no se commitea):

  ```
  $ diff <(sed -n '/^hooks:/,/^---/p' .claude/agents/session-closer.md) <(sed -n '/^hooks:/,/^---/p' .claude/agents/hook-probe.md); echo "salida=$?"
  salida=0
  ```

- **Por que:** el riesgo real de `T-032` no depende del reinicio, sino de que esa cabecera, dentro del
  agente, bloquee lo ajeno **y** deje cargar su propio protocolo. Si el caso permitido fallara, el cierre
  no podria arrancar, y eso no lo cubre ni `A-006` ni el test del script.
- **Alternativas descartadas:**
  - **Esperar a un reinicio y relanzar la sonda de `A-006`:** repite una prueba ya hecha y deja sin probar
    el caso permitido.
  - **Probarlo en el cierre real de esta sesion:** solo ejercita el caso permitido, y un fallo dejaria la
    sesion sin cerrar.
  - **Lanzar `session-closer` con la orden de intentar `protocol-audit`:** es el agente de cierre con
    instrucciones ajenas a su protocolo; si las ignora, ejecuta un cierre a destiempo.
- **Supuesto:** `A-007`. **Tarea:** `T-032`.

### D-051 - Se abre el artefacto de necesidades y se declara N-XXX
| Campo | Valor |
|---|---|
| Fecha | 2026-09-17 |
| Estado | Vigente |
| Origen | usuario |

- **Contexto:** el usuario pide empezar `T-029`: crear `005_discovery/` y llevar ahi la plantilla
  `_templates/005_discovery/005_needs.md`. La carpeta ya estaba declarada en «Carpetas propias» y en
  «Rutas» de `project.md`. La plantilla usa `N-XXX`, y `project.md` exige declarar un codigo del producto
  en la tabla «Codigos» en la misma pasada en que se escribe el primer artefacto que lo usa.
- **Decision:** se crea `005_discovery/005_needs.md` copiando la plantilla. Solo se rellenan el nombre del
  proyecto y las fechas de la cabecera (`Abierto` `2026-09-17`, `Cerrado` `—`); el resto queda con sus
  huecos hasta la conversacion. Se anade `N-XXX` a la tabla «Codigos» de `project.md`, apuntando a ese
  archivo. La plantilla no se toca.
- **Por que:** es la forma que fijan la etapa y `T-029`, y el codigo declarado antes del primer `N-001`
  evita el desfase que `project.md` describe.
- **Alternativas descartadas:**
  - **Declarar `N-XXX` cuando se escriba la primera necesidad:** la copia de la plantilla ya cita
    `N-001`, y una plantilla que cita un codigo no declarado lo esta usando.
- **Verificacion:** sobre el arbol de trabajo, antes del commit:

  ```
  $ git diff --no-index --stat _templates/005_discovery/005_needs.md 005_discovery/005_needs.md
   {_templates/005_discovery => 005_discovery}/005_needs.md | 6 +++---
   1 file changed, 3 insertions(+), 3 deletions(-)
  ```

- **Tarea:** `T-029`.

### D-052 - El producto reproduce el metodo del jugador, no una generacion aleatoria
| Campo | Valor |
|---|---|
| Fecha | 2026-09-17 |
| Estado | Revocada en parte por D-053 |
| Origen | usuario |

- **Contexto:** Pasos 1 y 2 de `005_discovery` (`T-029`). `_brief/client_brief.md` pide en su §6 una
  generacion **aleatoria** y en su §26 excluir los numeros del ultimo sorteo **de un solo juego**, segun
  una prioridad; su ultima seccion, en cambio, describe un metodo **determinista** del jugador. Al
  preguntarle cual de los dos es el problema, el patrocinador zanja el metodo y sus puntos abiertos.
- **Decision:** lo que se necesita es **reproducir el metodo del jugador** en un minuto como maximo,
  informando por que se elige cada numero (`N-001`, `N-002`). El metodo, en palabras del patrocinador:
  1. **NUM1**, el numero de arranque: manda el criterio **«proximo a salir»** (cuando salio por ultima
     vez, cada cuanto sale, cuando se espera que vuelva a salir).
  2. **NUM2 y NUM3:** las dos mejores parejas de NUM1.
  3. **NUM4:** la mejor pareja de NUM2. **NUM5:** la mejor pareja de NUM3.
  4. **Las parejas se cuentan sobre los ultimos 48 sorteos** (unos cuatro meses).
  5. **Superbalota** (1–16): el criterio «proximo a salir», y distinta de NUM1..NUM5.
  6. **Se excluye siempre** cualquier numero que haya salido en el ultimo sorteo, **de Baloto o de
     Revancha**.
  7. **Nunca tres o mas numeros consecutivos**; como maximo dos.
  8. **Si un numero queda excluido**, se pasa al siguiente mejor segun el mismo criterio con que se eligio.
- **Por que:** el tiempo que el jugador quiere recuperar es el de aplicar **su** metodo; una combinacion
  aleatoria no sustituye ese trabajo, y sin el porque de cada numero no la usaria.
- **Alternativas descartadas:**
  - **Generacion aleatoria con restricciones (brief §6):** el patrocinador la descarta.
  - **Excluir solo el ultimo sorteo del juego con prioridad (brief §26):** se excluye siempre lo de los
    dos juegos.
  - **Dos numeros de arranque:** una respuesta anterior lo sugeria; el patrocinador fija uno solo.
  - **«Numero caliente» (el mas repetido en los ultimos 10 sorteos sin el ultimo) como criterio de
    arranque:** entre caliente y proximo a salir, manda el segundo.
- **Lo que queda sin fijar:** se pregunta en la misma conversacion; lo que no tenga respuesta va a
  `assumptions.md`. La formula exacta de «proximo a salir» es del diseno tecnico (brief §23), no de esta
  etapa.
- **Tarea:** `T-029`.

### D-053 - Ventanas, prioridad y desempates del metodo
| Campo | Valor |
|---|---|
| Fecha | 2026-09-17 |
| Estado | Vigente |
| Origen | usuario |

- **Contexto:** al preguntar por lo que `D-052` dejaba sin fijar —sobre que historico se mide, si se
  cuentan los dos juegos, que pasa con los empates y si la exclusion cruza universos—, el patrocinador
  responde y, al hacerlo, cambia dos puntos de `D-052`.
- **Decision:** se fija lo siguiente, y **se revocan dos puntos de `D-052`**: el punto 4 (las parejas
  sobre 48 sorteos) y el descarte de la prioridad del encargo. `D-052` sigue rigiendo en todo lo demas.
  1. **La prioridad existe y se puede elegir:** `Baloto` o `Revancha`, por defecto `Baloto`. No decide
     donde se juega la combinacion —se juega en los dos—, sino **sobre que juego se miden las
     ventanas**.
  2. **Parejas: los ultimos 72 sorteos** (unos seis meses) **del juego con prioridad**.
  3. **NUM1 y la superbalota: los ultimos 48 sorteos** (unos cuatro meses) **del juego con prioridad**.
  4. **Empates:** si dos numeros estan igual de proximos a salir, gana **el mas caliente** (el que mas se
     repite en los ultimos 10 sorteos, sin contar el ultimo). Lo mismo para dos parejas que salen el
     mismo numero de veces.
  5. **La exclusion del ultimo sorteo cruza los dos universos:** un numero que salio como balota o como
     superbalota queda fuera de los dos papeles.
  6. **Una pareja que ya esta en la combinacion no se repite:** se pasa a la siguiente mejor.
- **Por que:** son las reglas que el jugador aplica hoy a mano; sin ellas el metodo no es ejecutable.
- **Alternativas descartadas:**
  - **Contar las ventanas sobre los dos juegos a la vez (96 resultados por cada 48 fechas):** el
    patrocinador mide sobre un juego, el que tenga la prioridad.
  - **Una sola ventana para todo:** son dos, 72 para parejas y 48 para NUM1 y superbalota.
  - **Descartar la prioridad del encargo (§26), como decidio `D-052`:** la prioridad se conserva, pero
    **cambia de funcion**: ya no elige que sorteo se excluye —se excluyen los dos—, sino que historico se
    mide.
- **Lo que sigue sin fijar:** la formula exacta de «proximo a salir» es del diseno tecnico
  (`_brief/client_brief.md` §23), no de esta etapa.
- **Tarea:** `T-029`. **Necesidades:** `N-001`, `N-002`.

### D-054 - La revision del sorteo anterior entra en lo que se construye
| Campo | Valor |
|---|---|
| Fecha | 2026-09-17 |
| Estado | Vigente |
| Origen | usuario |

- **Contexto:** la rutina del jugador tiene tres momentos: ver si cayo el premio, comparar su apuesta con
  el resultado y armar la combinacion. El tiempo se va entero en el tercero (`N-001`), asi que se
  pregunto si los dos primeros entran en lo que se construye o si solo importa la combinacion. En la
  misma vuelta se cierran los dos ultimos huecos del metodo.
- **Decision:**
  1. **Los tres momentos entran**, y los dos primeros quedan como `N-003` (saber cuantos numeros acerto)
     y `N-004` (saber con que acumulado se juega). No se sostienen por el tiempo que ahorran, sino
     porque son la rutina de cada dia de sorteo y hoy obligan a ir a la web.
  2. **El desempate por numero caliente usa los ultimos 10 sorteos**, sin contar el ultimo, del juego con
     prioridad, como las demas ventanas de `D-053`.
  3. **Si el juego con prioridad no tiene sorteos suficientes** para una ventana —el caso de Revancha,
     con menos historia—, se usa hasta donde haya informacion.
- **Por que:** el patrocinador quiere la rutina entera, no solo su parte cara; y una ventana sin regla
  para el historico corto se rompe sola el dia que se elija prioridad Revancha.
- **Alternativas descartadas:**
  - **Construir solo la generacion de la combinacion:** el jugador seguiria yendo a la web a comparar y a
    mirar el acumulado.
  - **Esperar a tener la ventana completa antes de calcular:** dejaria el metodo sin resultado justo
    cuando se cambia de prioridad.
- **Necesidades:** `N-003`, `N-004`. **Tarea:** `T-029`.

### D-055 - Actores del producto y veredicto del Actor Generador
| Campo | Valor |
|---|---|
| Fecha | 2026-09-17 |
| Estado | Vigente |
| Origen | usuario |

- **Contexto:** Pasos 3 y 4 de `005_discovery` (`T-029`), sobre `005_discovery/010_actors.md`. `manager`
  propuso la clasificacion y el patrocinador la decidio, que es el reparto de `D-044`.
- **Decision:**
  1. **Dos actores.** **Generador:** JD Rodriguez, el jugador que prepara su apuesta. **Integrador:** la
     web oficial de Baloto, que entrega el historico y los acumulados.
  2. **Cuatro tipos ausentes,** declarados con su motivo: Coordinador, Ejecutor, Supervisor y
     Administrador de Plataforma. El ultimo podria aparecer si algun dia la usara otra persona; hoy el
     patrocinador confirma que sera el unico usuario.
  3. **Veredicto del Paso 4: hay Generador real y alcanzable, y la etapa continua.** Lo firma el
     patrocinador, que es el propio Generador: existe, es alcanzable y hoy hace el proceso a mano tres
     veces por semana.
  4. **§4 del artefacto se conserva vacia, con su advertencia, en vez de borrarse.** La plantilla dice
     que se borre si no tiene filas, pero su propia comprobacion de §5 busca alli la advertencia sobre el
     «Actor Invitado», y `CLAUDE.md` prohibe omitir secciones de una plantilla. Se anota dentro por que
     queda vacia.
- **Por que:** el producto lo usa una sola persona; inventar los seis tipos crearia actores sin nadie
  detras, que es el error que el artefacto existe para evitar.
- **Alternativas descartadas:**
  - **Anotar un Administrador de Plataforma:** no hay usuarios, roles ni permisos que administrar.
  - **Tratar la web de Baloto como una fuente y no como actor:** es un sistema externo que intercambia
    informacion, que es la definicion de Integrador.
  - **Borrar §4 por estar vacia, como sugiere la plantilla:** dejaria sin objeto su propia comprobacion.
- **Lo que esto abre:** la tension entre la sugerencia de la plantilla y su comprobacion es un defecto de
  la plantilla, no de este proyecto. Se trata al cerrar la etapa, con la cosecha.
- **Tarea:** `T-029`. **Necesidades:** `N-001`..`N-004`.

### D-056 - La aplicacion no guarda identidad, y A-001 queda refutado
| Campo | Valor |
|---|---|
| Fecha | 2026-09-17 |
| Estado | Vigente |
| Origen | usuario |

- **Contexto:** `A-001` estaba `Abierto` desde `S-001` con su disparador en la clasificacion de actores,
  que se hizo en esta sesion (`D-055`). Su forma de refutarlo era justamente esta: un solo usuario sin
  identidad guardada lo refuta; varios usuarios identificables lo confirman.
- **Decision:** la aplicacion **no guarda ningun dato personal**: ni identidad, ni usuario, ni contrasena,
  ni correo, ni nada que identifique a una persona. `A-001` queda **`Refutado`** con su nota fechada, y el
  limite entra en `constraints.md` como `C-005`.
- **Por que:** el unico usuario es el propio patrocinador; guardar quien juego una combinacion no aporta
  nada cuando solo hay uno, y evita entrar en datos de personas.
- **Alternativas descartadas:**
  - **Cuenta con usuario y contrasena para restringir el acceso:** introduce datos personales para
    proteger informacion que el patrocinador no considera sensible.
- **Lo que esto abre, y se dice:** con `C-003` la aplicacion se despliega en internet y sin identidad no
  hay a quien reconocer, asi que cualquiera con la direccion podria usarla y registrar juegos. El
  patrocinador lo acepta en esta etapa; **como se limita el acceso sin identidad es cosa del diseno
  tecnico**, no de `005_discovery`.
- **Supuesto:** `A-001`. **Restriccion:** `C-005`. **Tarea:** `T-029`.

### D-057 - Interesados del proyecto y declaracion de I-XXX
| Campo | Valor |
|---|---|
| Fecha | 2026-09-17 |
| Estado | Vigente |
| Origen | usuario |

- **Contexto:** Paso 5 de `005_discovery` (`T-029`), sobre `005_discovery/015_stakeholders.md`. `manager`
  propuso tres candidatos y el patrocinador decidio. La plantilla usa `I-XXX`, que no estaba en la tabla
  «Codigos» de `project.md`.
- **Decision:**
  1. **Dos interesados.** `I-001`, JD Rodriguez como patrocinador, que decide, financia y aprueba; e
     `I-002`, Baloto como operadora oficial, que impone las condiciones sobre la informacion que publica.
     Los dos son ademas actores, y asi queda escrito en §5 del artefacto.
  2. **Vercel queda fuera:** no decide ni aporta conocimiento, y sus limites ya viven en `C-003`.
  3. **Todas las aprobaciones son del patrocinador.** No hay ninguna decision que dependa de otra persona,
     y el lo confirma.
  4. **`I-XXX` se declara en la tabla «Codigos» de `project.md`**, apuntando al artefacto de interesados.
  5. **`I-002` queda `TODAVIA NO` consultado**, lo que abre `A-008`: si las condiciones de uso del sitio
     oficial permiten leer el historico de forma automatica. El patrocinador comprobo que tecnicamente es
     posible; el permiso no se ha contrastado.
- **Por que:** los dos que quedan son los unicos que pueden parar algo: uno decide el proyecto entero, el
  otro puede dejarlo sin datos.
- **Alternativas descartadas:**
  - **Incluir a Vercel como `I-003`:** seria un espectador en la tabla, y eso la vuelve inutil.
  - **Dejar a Baloto solo como Integrador, sin ficha de interesado:** entrega los datos, pero tambien es
    quien puede impedir el acceso, y eso es influencia, no uso.
  - **Dar `A-008` por resuelto con la comprobacion tecnica del patrocinador:** que se pueda extraer no
    dice que este permitido.
- **Tarea:** `T-029`. **Supuesto:** `A-008`.

### D-058 - Hipotesis sellada de 005_discovery
| Campo | Valor |
|---|---|
| Fecha | 2026-09-17 |
| Estado | Vigente |
| Origen | usuario |

- **Contexto:** Paso 7 de `005_discovery` (`T-029`). El artefacto nace `SELLADA` y admite **un solo
  commit**: se discutio entero antes de escribirlo. `manager` propuso hipotesis, falsacion y perfil; el
  patrocinador los aprobo, y fijo la ventana y el umbral tras pedir que se le explicaran.
- **Decision:** se sella la hipotesis «JD Rodriguez obtiene, sin ayuda y en menos de un minuto, la
  combinacion de 6 numeros que hoy arma a mano, y puede decir de donde salio cada uno de los 6 con lo que
  la aplicacion le muestra».
  1. **Falsacion:** queda tumbada si en dos o mas de las cinco sesiones tarda mas de un minuto, necesita
     ayuda, o no puede decir de donde salio alguno de los 6 numeros.
  2. **Ventana y umbral, fijados antes del primer dato:** 5 sesiones, una por dia de sorteo, y umbral de
     4 de 5. Solo cuenta `Exito autonomo`.
  3. **El sesgo del participante unico se acepta y se declara** (§5 del artefacto): el unico Generador es
     tambien el patrocinador y quien construye, asi que la parte de comprension queda debilitada a
     proposito. No se busca un tercero.
  4. **§6 conserva sus dos primeras ordenes aunque no puedan dar vacio aqui.** Se anota dentro por que, y
     la salida acotada al cuerpo del artefacto va en el bloque de abajo.
- **Por que:** el umbral de un minuto es el que el patrocinador fijo en el encargo; 4 de 5 deja margen
  para un fallo ajeno al producto —la fuente caida, el sorteo sin publicar— sin admitir una herramienta
  que falle dos de cada cinco veces.
- **Alternativas descartadas:**
  - **3 sesiones con umbral 3 de 3:** un solo dia malo la tumbaria.
  - **6 sesiones con umbral 5 de 6:** mismo margen proporcional, una semana mas de espera.
  - **Buscar un segundo participante para la comprension:** mediria si un tercero entiende el metodo, que
    no es lo que el producto necesita.
  - **Dos hipotesis, una de tiempo y otra de trazabilidad:** una combinacion instantanea sin explicacion
    no resuelve el problema; separarlas dejaria pasar media solucion.
- **Verificacion.** Las dos primeras ordenes de §6 del artefacto no pueden dar vacio, porque la propia
  seccion las escribe; acotadas al cuerpo —de la cabecera a §5, lineas 1-109— no hay ni un hueco, y la
  guia de llenado se borro:

  ```
  $ sed -n '1,109p' 005_discovery/020_hypothesis.md | grep -nE '<|Guia de llenado'; echo "salida=$?"
  salida=1
  $ grep -n '<' 005_discovery/020_hypothesis.md
  124:- [x] **No queda ni un solo `<` en el archivo.**
  129:grep -n "<" 005_discovery/020_hypothesis.md                 # debe no devolver nada
  137:unicas lineas que quedan con `<` y con «Guia de llenado» son **las de esta misma seccion**, que los
  ```

  La tercera orden, la que mira `report_auditor`, no se puede correr todavia: el archivo aun no esta
  commiteado, y su unico commit sera el de esta sesion.
- **Criterio de cierre:** a ese commit, el artefacto esta sellado y `git` ve un solo commit sobre el.

  ```
  $ git log --oneline -- 005_discovery/020_hypothesis.md | wc -l
  1
  $ git show eda6314:005_discovery/020_hypothesis.md | grep -c '^| Estado | `SELLADA` |$'
  1
  ```

📌 **Anclada por el Paso 7c-bis al commit `eda6314`.** Reproduce lo publicado arriba.

- **Tarea:** `T-029`. **Necesidades:** `N-001`, `N-002`.

### D-059 - F-019 se acepta y se corrige por nota en esta sesion
| Campo | Valor |
|---|---|
| Fecha | 2026-09-17 |
| Estado | Vigente |
| Origen | report_auditor |

- **Contexto:** `R-017` abrio `F-019` sobre `S-015` (`eda6314`), `Media` y `No bloqueante`: el bloque de
  verificacion de `T-029` publica `4` donde su orden devuelve `5`, y la seccion 7 del informe la listo
  con `Reproduce: Si`. Verificado contra `HEAD` (`e18bf5b`):

  ```
  $ git rev-parse --short HEAD
  e18bf5b
  $ grep -c "^### N-0" 005_discovery/005_needs.md
  5
  $ grep -n "^### N-0" 005_discovery/005_needs.md
  56:### N-001 · Combinacion en maximo un minuto
  71:### N-002 · Saber por que entra cada numero
  86:### N-003 · Saber cuantos numeros acerte
  101:### N-004 · Saber con que acumulado se juega
  185:### N-001 · Pedir recogida sin llamar
  $ git show e18bf5b:005_discovery/005_needs.md | grep -n "Guia de llenado"
  145:- [ ] La seccion «Guia de llenado» de abajo **esta borrada**.
  152:grep -n "Guia de llenado" 005_discovery/005_needs.md   # debe no devolver nada
  162:## Guia de llenado — ⚠️ BORRAR esta seccion al cerrar el artefacto
  ```

  El hallazgo sigue vivo en `HEAD`, y su calificacion es correcta: la quinta coincidencia es el ejemplo
  de ficha de la «Guia de llenado», no una necesidad, asi que el **enunciado** del criterio se cumple y
  lo que falla es solo la cifra publicada.
- **Decision:** se acepta y, por decision del usuario, **se corrige en esta sesion** (`T-034`): nota
  fechada en `T-029` con la orden anclada a `e18bf5b` y su salida real, y de donde sale la quinta
  coincidencia. La cifra publicada no se reescribe. `F-019` queda `Aceptado — pendiente`: lo cierra la
  auditoria siguiente.
- **Por que:** el hallazgo se sostiene contra el repositorio, y la reproduccion ya estaba hecha al
  verificarlo, asi que corregirlo costaba solo escribirla. Ademas, la cifra volvera a valer `4` sola el
  dia que se borre la guia al cerrar el artefacto, y entonces el defecto dejaria de poder detectarse.
- **Alternativas descartadas:**
  - **Aceptar y aplazar, como `F-016` y `F-017` con `D-046`:** dejaba el registro publicando una cifra
    falsa durante toda la etapa, y con fecha de caducidad — al borrar la guia ya no se podria contrastar.
  - **Reescribir el `4` por un `5` en el bloque de `T-029`:** convierte «falta evidencia» en «hay
    evidencia falsa»; lo publicado no se reescribe.
  - **Anadir al criterio una orden acotada que excluya la «Guia de llenado» y devuelva `4`:** publicaria
    como evidencia de `S-015` una orden que nadie corrio en `S-015`.
  - **Tratar el hallazgo como defecto del control del Paso 2d y abrir tarea sobre el:** ya esta
    inventariado como `DT-002` (el CONTROL DE SALIDA REPRODUCIDA no reejecuta las ordenes); abrir otra
    entrada duplicaria la misma deuda.
- **Criterio de cierre:** a ese commit, `T-029` lleva la nota con la orden anclada y su salida, y `F-019`
  cita su tarea en indice y ficha.

  ```
  $ git show 205b1f2:_persistence/tasks.md | sed -n '/^### T-029 /,/^### T-030 /p' | grep -cE '🕐 \*\*Nota 2026-09-17 \(`F-019`, `D-059`\)|^\s*\$ git show e18bf5b:005_discovery/005_needs.md \| grep -c'
  2
  $ git show 205b1f2:_audit/findings.md | grep -cE '^\| \[F-019\].*\| Aceptado — pendiente \|$|^\| Registrado en \| T-034, D-059 \|$'
  2
  ```

📌 **Ancladas por el Paso 7c-bis al commit `205b1f2`.** Las dos reproducen lo publicado arriba.

- **Tarea:** `T-034`.

### D-060 - Se cierran los artefactos de actores e interesados
| Campo | Valor |
|---|---|
| Fecha | 2026-09-17 |
| Estado | Vigente |
| Origen | usuario |

- **Contexto:** `010_actors.md` y `015_stakeholders.md` quedaron `BORRADOR` al final de `S-015`, con su
  contenido ya decidido (`D-055`, `D-056`, `D-057`) pero sin el cierre formal del artefacto. Dos de las
  siete casillas de la condicion de salida de la etapa (`_phases/005_discovery.md` §6) dependen de ellos.
  El usuario pide cerrarlos antes de tratar el alcance.
- **Decision:** los dos pasan a `CERRADO` con fecha `2026-09-17`. Se borra la seccion «Guia de llenado»
  de cada uno, se marcan las casillas de su seccion de comprobacion, y en `015_stakeholders.md` se borra
  ademas el comentario `<!-- Copia el bloque para I-002, I-003, … -->`, que era un hueco de la plantilla
  y no contenido. **El contenido de las secciones 1 a 5 no se toca:** lo que se cierra es el artefacto,
  no se reabre lo decidido.
- **Por que:** un artefacto en `BORRADOR` no cuenta para la condicion de salida, y la guia de llenado no
  sobrevive al cierre de la etapa por diseno de la plantilla. Ademas, borrar la guia de `005_needs.md`
  hara que la cifra de `F-019` vuelva a `4` por si sola — por eso la nota de `T-029` se ancla a `e18bf5b`,
  que es donde el defecto todavia se puede observar.
- **Alternativas descartadas:**
  - **Cerrarlos junto con el alcance, en una sola pasada:** el alcance es una conversacion con el
    patrocinador y no tiene fecha; los artefactos ya estaban listos y no dependen de el.
  - **Dejar `015_stakeholders.md` abierto hasta consultar a Baloto:** `A-008` tiene su disparador antes
    del primer codigo del prototipo, no en esta etapa; el artefacto declara el `TODAVIA NO` con su
    supuesto, que es justo lo que la plantilla pide.
  - **Cerrar tambien `005_needs.md` en la misma pasada:** no se pidio, y borrar ahora su guia haria
    desaparecer la evidencia de `F-019` antes de que la auditoria pueda cerrarlo.
- **Verificacion.** Las seis ordenes de las secciones de comprobacion de los dos artefactos, sobre el
  arbol de trabajo:

  ```
  $ grep -n "<" 005_discovery/010_actors.md
  123:- [x] **No queda ni un solo `<` en el archivo.**
  128:grep -n "<" 005_discovery/010_actors.md                 # debe no devolver nada
  140:unicas lineas que quedan con `<` y con «Guia de llenado» son **las de esta misma seccion**, que los
  $ grep -n "Guia de llenado" 005_discovery/010_actors.md
  124:- [x] La seccion «Guia de llenado» **esta borrada**.
  129:grep -n "Guia de llenado" 005_discovery/010_actors.md   # debe no devolver nada
  140:unicas lineas que quedan con `<` y con «Guia de llenado» son **las de esta misma seccion**, que los
  $ grep -ni "invitado" 005_discovery/010_actors.md
  102:⚠️ **No existe «Actor Invitado».** «Invitado» describe una **condicion de acceso**, no un
  120:- [x] No aparece ningun «Actor Invitado» — lo temporal y lo externo estan en §4.
  130:grep -ni "invitado" 005_discovery/010_actors.md         # SOLO la advertencia de §4, ni una linea mas
  $ grep -n "<" 005_discovery/015_stakeholders.md
  122:- [x] **No queda ni un solo `<` en el archivo.**
  127:grep -n "<" 005_discovery/015_stakeholders.md                 # debe no devolver nada
  135:unicas lineas que quedan con `<` y con «Guia de llenado» son **las de esta misma seccion**, que los
  $ grep -n "Guia de llenado" 005_discovery/015_stakeholders.md
  123:- [x] La seccion «Guia de llenado» **esta borrada**.
  128:grep -n "Guia de llenado" 005_discovery/015_stakeholders.md   # debe no devolver nada
  135:unicas lineas que quedan con `<` y con «Guia de llenado» son **las de esta misma seccion**, que los
  $ grep -n "TODAVIA NO" 005_discovery/015_stakeholders.md
  71:| Consultado el | TODAVIA NO → `A-008` |
  74:abstracto: es una fecha que aun no ha llegado.** Si «Consultado el» dice `TODAVIA NO`, eso es un
  121:- [x] Los `TODAVIA NO` consultados tienen su `A-XXX` en `_persistence/assumptions.md`.
  129:grep -n "TODAVIA NO" 005_discovery/015_stakeholders.md        # cada linea necesita su A-XXX
  ```

  Ninguna de las cuatro primeras deja una linea fuera de su propia seccion de comprobacion: la guia se
  borro en los dos. «Invitado» sale solo en la advertencia de §4 y en las lineas que la enuncian, no en
  ninguna fila de §1. `TODAVIA NO` sale en `I-002`, con su `A-008` al lado.
- **Criterio de cierre:** a ese commit, los dos artefactos dicen `CERRADO` con su fecha, y ninguno
  conserva la seccion «Guia de llenado» fuera de su comprobacion.

  ```
  $ git show 205b1f2:005_discovery/010_actors.md | grep -cE '^\| Estado \| `CERRADO` \|$|^\| Cerrado \| `2026-09-17` \|$'
  2
  $ git show 205b1f2:005_discovery/015_stakeholders.md | grep -cE '^\| Estado \| `CERRADO` \|$|^\| Cerrado \| `2026-09-17` \|$'
  2
  $ git show 205b1f2:005_discovery/010_actors.md | grep -c '^## Guia de llenado'
  0
  $ git show 205b1f2:005_discovery/015_stakeholders.md | grep -c '^## Guia de llenado'
  0
  ```

📌 **Ancladas por el Paso 7c-bis al commit `205b1f2`.** Las cuatro reproducen lo publicado arriba.

- **Necesidades:** `N-001`, `N-002`, `N-003`, `N-004`. **Interesados:** `I-001`, `I-002`.

### D-061 - Objetivo y alcance del proyecto
| Campo | Valor |
|---|---|
| Fecha | 2026-09-17 |
| Estado | Vigente |
| Origen | usuario |

- **Contexto:** la sexta casilla de la condicion de salida de `005_discovery` (`_phases/005_discovery.md`
  §6) pide el alcance y el objetivo definidos y registrados con su `D-XXX`, y era la unica de las siete
  sin nada escrito. Las cuatro necesidades estan en `005_needs.md`, pero la hipotesis sellada
  (`020_hypothesis.md` §3) solo apuesta por `N-001` y `N-002`, asi que decidir el alcance era decidir
  que hacer con `N-003` y `N-004`. Lo zanja el patrocinador (`I-001`), que es quien aprueba el alcance
  segun `015_stakeholders.md` §4.
- **Decision:** tres partes.

  1. **Objetivo del proyecto.** Que JD Rodriguez obtenga en menos de un minuto, y pudiendo explicar de
     donde salio cada numero, la combinacion de 6 que hoy arma a mano en 40 a 60 minutos — sin que la
     aplicacion pretenda acertar mas.
  2. **Alcance del proyecto: las cuatro necesidades.** `N-001` (combinacion en un minuto), `N-002`
     (explicacion numero por numero), `N-003` (cuantos numeros acerto) y `N-004` (acumulado del proximo
     sorteo). En consecuencia: **la aplicacion guarda las apuestas jugadas** —sin dueno, como ya preve
     `C-005`—, porque sin registro de lo jugado `N-003` no se puede cumplir; y **la aplicacion lee el
     sitio oficial de Baloto**, sin paso manual del jugador.
  3. **Alcance del prototipo: solo lo que la hipotesis mide.** La etapa siguiente construye `N-001` y
     `N-002`; `N-003` y `N-004` llegan en el producto minimo. El prototipo es descartable y existe para
     saber pronto si la apuesta central se sostiene.

  **Fuera de alcance, dicho:** acertar mas (los sorteos son independientes, `020_hypothesis.md` §5),
  cuentas de usuario o identidad (`C-005`), juegos distintos de Baloto y Revancha, y cualquier llamada a
  una API de modelos de lenguaje (`C-002`).
- **Por que:** el patrocinador quiere el producto que describe su encargo, no una version recortada, y
  `N-003` y `N-004` son parte de su rutina real de cada dia de sorteo. Leer el sitio directamente es lo
  unico que evita trabajo manual por sorteo, que es el problema entero del proyecto: una herramienta que
  exige pegar el resultado a mano reintroduce el paso que se quiere quitar.
- **Consecuencias, dichas:**
  1. **El Gate 1 sigue midiendo solo `N-001` y `N-002`.** La hipotesis esta sellada y no se toca; que el
     alcance del proyecto sea mayor no amplia lo que el Gate evalua, y el dictamen no puede exigir
     `N-003` ni `N-004`.
  2. **`A-008` pasa a ser condicion del producto, no solo del prototipo.** Si las condiciones de uso de
     Baloto prohiben la extraccion automatica, esta decision queda afectada en su parte 2 y hay que
     replantear la fuente. Su disparador no cambia.
  3. **Guardar apuestas no levanta `C-005`**: se guarda lo jugado, sin identidad ni cuentas, que es
     exactamente lo que esa restriccion ya preve («el historial de juegos se guarda sin dueno»).
  4. **`C-004` («lo mas sencilla posible») se tensa**: persistencia y lectura del sitio son las dos
     piezas que mas superficie anaden. Se acepta a sabiendas.
- **Alternativas descartadas:**
  - **Solo `N-001` y `N-002`:** coincide exactamente con lo que el Gate mide y es el alcance mas barato,
    pero deja fuera dos necesidades registradas que el patrocinador usa en cada sorteo.
  - **`N-001`, `N-002` y `N-004`, sin guardar nada:** evita la persistencia y con ella la pieza que mas
    complica el producto, pero `N-003` se queda sin poder cumplirse nunca.
  - **Que el jugador pegue el resultado de cada sorteo:** cero dependencia de una web ajena y saca
    `A-008` del camino critico, pero devuelve al jugador un paso manual en cada sorteo.
  - **Construir las cuatro ya en el prototipo:** retrasa el momento en que se sabe si la apuesta central
    se sostiene, que es lo unico que el prototipo existe para averiguar.
- **Criterio de cierre:** a ese commit, existe esta decision con las tres partes, y la sexta casilla de
  `_phases/005_discovery.md` §6 tiene donde apoyarse.

  ```
  $ git show 205b1f2:_persistence/decisions.md | sed -n '/^### D-061 /,$p' | grep -cE '^  1\. \*\*Objetivo del proyecto\.\*\*|^  2\. \*\*Alcance del proyecto: las cuatro necesidades\.\*\*|^  3\. \*\*Alcance del prototipo: solo lo que la hipotesis mide\.\*\*'
  3
  $ git show 205b1f2:_persistence/decisions.md | grep -c '^| \[D-061\](#d-061---objetivo-y-alcance-del-proyecto)'
  1
  ```

📌 **Ancladas por el Paso 7c-bis al commit `205b1f2`.** Las dos reproducen lo publicado arriba.

- **Necesidades:** `N-001`, `N-002`, `N-003`, `N-004`. **Interesados:** `I-001`, `I-002`.

### D-062 - Cosecha de 005_discovery al archivo de lecciones globales
| Campo | Valor |
|---|---|
| Fecha | 2026-09-17 |
| Estado | Vigente |
| Origen | usuario |

- **Contexto:** la septima casilla de la condicion de salida de `005_discovery`
  (`_phases/005_discovery.md` §6) exige que ninguna leccion de la etapa quede `Sin evaluar` y que lo
  que pase los filtros este ya en el archivo global. Barrido del Paso 1 de `protocol-harvest`:

  ```
  $ grep -E '^\| \[L-' _persistence/lessons.md | grep '005_discovery' | grep -c 'Sin evaluar'
  8
  ```

  Los dos disparadores del protocolo se comprobaron antes de empezar: la etapa se esta cerrando de
  verdad —era la ultima casilla— y no hay auditoria en curso ni pendiente. Ninguna sesion queda sin
  auditar (`_audit/index.md`, `S-015` → `R-017`), y el archivo global todavia no se usa como vara aqui:

  ```
  $ grep -rn -i "global_lessons\|lecciones globales\|LG-" .claude/skills/protocol-audit/ .claude/agents/report_auditor.md
  (sin salida)
  ```

- **Decision:** de las ocho lecciones, **suben cuatro y se enmienda una**; tres no suben por estar ya
  cubiertas. Ninguna quedo `Solo proyecto`. Clasificacion, con el filtro que decidio cada una:

  | Leccion | Destino | Razon |
  |---|---|---|
  | `L-008` | `Promovida a LG-106` | pasa los cuatro |
  | `L-009` | `Ya cubierta por LG-101` | filtro 4 — «una busqueda de texto encuentra tambien las citas de ese texto» |
  | `L-010` | `Ya cubierta por LG-22` | filtro 4 — el caso hermano que si encuentra X |
  | `L-011` | `Promovida a LG-107` | pasa los cuatro |
  | `L-012` | `Promovida a LG-108` | pasa los cuatro |
  | `L-013` | `Ya cubierta por LG-100` | filtro 4 — «ante una reincidencia, la pregunta es que orden la detecta» |
  | `L-014` | `Promovida a LG-109` | pasa los cuatro |
  | `L-015` | `Promovida a LG-22` | filtro 4 con salida de enmienda: es cara nueva de `LG-22`, no leccion aparte |

  Ocho filas, que es el recuento del barrido. `LG-106` y `LG-108` entran al bloque J; `LG-107` y
  `LG-109` al bloque H. La enmienda de `LG-22` toca su enunciado, no se anade debajo.
- **Por que:** el usuario aprobo las cuatro entradas y la enmienda en la puerta del Paso 5, con los
  textos a la vista.
- **Alternativas descartadas:**
  - **Subir tambien `L-009`, `L-010` y `L-013`:** las tres fallan el filtro 4 contra entradas que ya
    dicen lo mismo; duplicarlas haria crecer el archivo sin anadir nada, que es lo que `LG-26` vigila.
  - **Subir `L-015` como leccion nueva:** el archivo global pide enmendar la existente cuando la
    leccion es una cara nueva de una que ya esta.
  - **Podar el archivo global de paso:** 399 lineas siguen leyendose de una sentada, y el protocolo
    prohibe mezclar poda con promocion.
- **Version nueva del archivo global declarada:** **5 · 2026-09-17 · 109 lecciones · 10 bloques**, con
  su fila en el registro de revisiones.
- **Commit en el repositorio de lecciones:** `a9ed27b`, subido a `origin/main`.

  ```
  $ git -C "C:/Users/USUARIO/Documents/Company_TripleS/TripleS_Lessons" log --oneline -1
  a9ed27b Cosecha de 005_discovery desde YouOtto: LG-106 a LG-109 y enmienda de LG-22 (version 5)
  $ git -C "C:/Users/USUARIO/Documents/Company_TripleS/TripleS_Lessons" status -sb | head -1
  ## main...origin/main
  ```

  La linea de `status` sin `[ahead N]` es la que prueba que el push llego.
- **Defecto del propio commit, declarado:** el cuerpo del mensaje de `a9ed27b` dice «No suben cuatro» y
  a continuacion lista **tres** (`L-009`, `L-010`, `L-013`). La cifra es un error de redaccion del
  mensaje; el reparto real es el de la tabla de arriba, y el archivo global quedo correcto. **No se
  enmienda el commit** —`protocol-harvest` prohibe reescribir historia en los dos repositorios—, asi que
  se corrige por esta declaracion.
- **Criterio de cierre:** a ese commit, ninguna leccion de la etapa sigue `Sin evaluar`, y las cinco
  entradas afirmadas existen de verdad en el archivo global.

  ```
  $ git show <hash>:_persistence/lessons.md | grep -E '^\| \[L-' | grep '005_discovery' | grep -c 'Sin evaluar'
  0
  $ git -C "C:/Users/USUARIO/Documents/Company_TripleS/TripleS_Lessons" show a9ed27b:global_lessons.md | grep -cE '^\| \*\*LG-10[6789]\*\*'
  4
  $ git -C "C:/Users/USUARIO/Documents/Company_TripleS/TripleS_Lessons" show a9ed27b:global_lessons.md | grep -cF 'y un bloqueo, con la puerta tapiada'
  1
  ```

  🚨 **CONTROL DE SALIDA REPRODUCIDA del Paso 7c-bis: la primera NO coincide.** Anclada al commit
  `205b1f2`, la primera orden devuelve `1`, no `0`:

  ```
  $ git show 205b1f2:_persistence/lessons.md | grep -E '^\| \[L-' | grep '005_discovery' | grep -c 'Sin evaluar'
  1
  $ git -C "C:/Users/USUARIO/Documents/Company_TripleS/TripleS_Lessons" show a9ed27b:global_lessons.md | grep -cE '^\| \*\*LG-10[6789]\*\*'
  4
  $ git -C "C:/Users/USUARIO/Documents/Company_TripleS/TripleS_Lessons" show a9ed27b:global_lessons.md | grep -cF 'y un bloqueo, con la puerta tapiada'
  1
  ```

  📌 **Diagnostico, no anclaje limpio.** Este criterio de cierre **no se cumple todavia**: `L-016`,
  escrita en esta misma sesion (`session-closer`, `S-016`) para declarar el defecto del mensaje del
  commit `a9ed27b`, queda ella misma `Sin evaluar` en `lessons.md`. El criterio de `D-062` exigia
  «ninguna leccion de la etapa sigue `Sin evaluar`», y esa condicion la rompe una leccion que la propia
  sesion de la cosecha origino despues del barrido. No se reescribe la salida publicada (`0`); la
  discrepancia queda declarada aqui, y `D-062` sigue `Vigente` pero su criterio de cierre pendiente
  hasta que `L-016` se evalue. Ver `T-035` en `tasks.md` y «Sin resolver» del informe de `S-016`.

  📌 **NOTA 2026-09-17 — el criterio pendiente de esta decision queda cumplido; ver `D-063`.** `L-016`
  se evaluo en la segunda pasada de `protocol-harvest`: sube como **enmienda de `LG-32`**, y su columna
  `Portabilidad` pasa de `Sin evaluar` a `Promovida a LG-32`. Con eso ninguna leccion de
  `005_discovery` sigue `Sin evaluar`, que es lo que este criterio exigia. **La salida `0` publicada
  arriba no se reescribe**, y la discrepancia declarada en el diagnostico se mantiene tal cual: lo que
  esta nota anade es cuando y donde se resolvio, no una correccion del texto. `T-035` **sigue abierta**: pide anclar la cifra `8` del barrido del Paso 1 **de esta
  decision**, y eso no es lo que se hizo aqui — `D-063` ancla su propio barrido, que es otro.

  📌 **NOTA 2026-09-17 — la remision a «Sin resolver» del diagnostico no resuelve, y la linea no se
  reescribe.** «Sin resolver» es una seccion del **reporte en pantalla** del cierre, no del informe
  `_audit/S-XXX.md` que queda en el commit: el registro permanente apunta a algo que no persiste. Lo
  que sustituye a ese puntero es lo que ya esta **en esta misma entrada**: el diagnostico de arriba
  publica la discrepancia entera —la salida `0`, la condicion que la rompe y por que—, asi que no hay
  nada que buscar fuera. Hacia adelante se corrige en `protocol-close` con una prohibicion explicita
  en el 7c-bis: **la skill nunca mando citar esa seccion desde una entrada** —sus menciones son todas
  instrucciones para el reporte en pantalla— pero tampoco lo prohibia, y el paso que escribe estas
  notas lo hizo dos veces. Ver `D-071`.

### D-063 - L-016 sube como enmienda de LG-32: segunda pasada de la cosecha de 005_discovery
| Campo | Valor |
|---|---|
| Fecha | 2026-09-17 |
| Estado | Vigente |
| Origen | usuario |

- **Contexto:** `D-062` dejo su criterio de cierre pendiente por una razon declarada alli: `L-016`,
  escrita por el cierre de la sesion anterior **despues** del barrido de aquella cosecha, quedo ella
  misma `Sin evaluar`, y eso mantenia sin cumplir la septima casilla de la condicion de salida de
  `005_discovery` (`_phases/005_discovery.md` §6). Segunda pasada de `protocol-harvest` sobre esa
  unica leccion. Barrido del Paso 1:

  ```
  $ git show 205b1f2:_persistence/lessons.md | grep -E '^\| \[L-' | grep '005_discovery' | grep 'Sin evaluar'
  | [L-016](#l-016---una-cifra-escrita-donde-no-se-puede-corregir-se-cuenta-antes-no-despues) | Una cifra escrita donde no se puede corregir se cuenta antes, no despues | 2026-09-17 | 005_discovery | Sin evaluar |
  $ git show 205b1f2:_persistence/lessons.md | grep -E '^\| \[L-' | grep '005_discovery' | grep -c 'Sin evaluar'
  1
  ```

  🔑 **El barrido va anclado a `205b1f2`, el commit anterior a esta sesion, y no al arbol de trabajo.**
  Es el estado sobre el que se corrio el Paso 1; en cuanto el Paso 7 escribio `Promovida a LG-32`, la
  misma orden sin ancla devuelve `0` y deja de poder contrastarse. Esta es `T-035` aplicada en el
  momento de escribir en vez de por nota despues, y es `L-016` sobre si misma.

  Los dos disparadores del protocolo se comprobaron antes de empezar: la etapa se esta cerrando de
  verdad —esta casilla es la unica que le falta— y no hay auditoria en curso ni pendiente (`R-018`
  cerro sobre `205b1f2`, y ninguna sesion queda sin auditar).
- **Decision:** `L-016` **no sube como entrada nueva: enmienda `LG-32`**. Clasificacion, con el filtro
  que la decidio:

  | Leccion | Destino | Razon |
  |---|---|---|
  | `L-016` | `Promovida a LG-32` | pasa los filtros 1, 2 y 3; el **filtro 4** con salida de enmienda: su nucleo ya estaba en `LG-32`, que cubre «una lista, un recuento […] copiados a mano». La cara nueva es el **soporte** |

  Una fila, que es el recuento del barrido. No se asigna codigo nuevo —el ultimo en uso sigue siendo
  `LG-109`— porque una enmienda no consume codigo.

  La enmienda toca el **enunciado** de `LG-32`, no se anade debajo, como pide la seccion de promocion
  del archivo global (`LG-28` aplicada a ese archivo): de «*y la cercania no protege*» a «*la cercania
  no protege, y donde no se puede corregir no hay segunda pasada*». Sus otras dos columnas ganan la
  forma nueva del fallo y su defensa —contar antes, y si ya esta subido corregir por declaracion
  fechada, nunca reescribiendo historia—, y la cita de origen gana `· YouOtto · L-016`.
- **Por que:** el usuario aprobo el texto en la puerta del Paso 5, con el antes y el despues a la vista.
- **Alternativas descartadas:**
  - **`Ya cubierta por LG-32`:** habria cerrado la casilla hoy sin escribir fuera, pero el filtro 4 es
    explicito en que una **cara nueva** se enmienda, no se descarta. `LG-32` presupone un soporte donde
    todavia se puede escribir —«se pega la orden y su salida»—, y un mensaje de commit ya subido no lo
    es; esa cara no estaba en ninguna entrada global.
  - **`Solo proyecto`:** la forma del fallo no depende de este repositorio. Que aqui lo prohiba un
    protocolo propio es el caso concreto, no la leccion: un acta firmada o un mensaje de commit de
    cualquier proyecto tienen el mismo limite.
  - **Subir `L-016` como `LG-110` aparte:** duplicaria el nucleo de `LG-32` en dos entradas, que es lo
    que `LG-26` vigila y lo que el filtro 4 existe para evitar.
  - **Arreglar de paso una cifra rancia del archivo global:** su guia de lectura sigue diciendo «104
    lecciones» donde la cabecera declara 109. **No se toco**: no salio de `L-016`, y el protocolo
    prohibe mezclar dos trabajos en una cosecha. Queda reportado para decidirse aparte.
- **Version nueva del archivo global declarada:** **6 · 2026-09-17 · 109 lecciones · 10 bloques**, con
  su fila en el registro de revisiones. El recuento no cambia porque una enmienda no anade entrada.
- **Commit en el repositorio de lecciones:** `b1915d3`, subido a `origin/main`.

  ```
  $ git -C "C:/Users/USUARIO/Documents/Company_TripleS/TripleS_Lessons" log --oneline -1
  b1915d3 Cosecha de 005_discovery desde YouOtto, segunda pasada: enmienda de LG-32 (version 6)
  $ git -C "C:/Users/USUARIO/Documents/Company_TripleS/TripleS_Lessons" status -sb | head -1
  ## main...origin/main
  ```

  La linea de `status` sin `[ahead N]` es la que prueba que el push llego.
- **La enmienda existe de verdad en el archivo global**, que es la unica afirmacion de este registro
  sobre un archivo que el auditor no puede ver — por eso va anclada al hash:

  ```
  $ git -C "C:/Users/USUARIO/Documents/Company_TripleS/TripleS_Lessons" show b1915d3:global_lessons.md | grep -cF "donde no se puede corregir no hay segunda pasada"
  1
  $ git -C "C:/Users/USUARIO/Documents/Company_TripleS/TripleS_Lessons" show b1915d3:global_lessons.md | grep -cF "YouOtto` · L-016"
  1
  $ git -C "C:/Users/USUARIO/Documents/Company_TripleS/TripleS_Lessons" show b1915d3:global_lessons.md | grep -cE "^> \*\*Versión: 6"
  1
  ```
- **El mensaje de este commit se escribio contando la lista**, que es justamente lo que pide `L-016`:
  una leccion evaluada, una enmienda, cero entradas nuevas. La suma cuadra con el barrido.
- **Criterio de cierre:** a este commit, ninguna leccion de `005_discovery` sigue `Sin evaluar` —con lo
  que queda cumplido tambien el criterio que `D-062` dejo pendiente.

  ```
  $ git show a0949c5:_persistence/lessons.md | grep -E '^\| \[L-' | grep '005_discovery' | grep -c 'Sin evaluar'
  0
  $ git show a0949c5:_persistence/lessons.md | grep -cF 'Promovida a LG-32'
  1
  ```

  📌 **Ancladas por el Paso 7c-bis al commit `a0949c5`.** Las dos reproducen lo publicado arriba.

### D-064 - F-020 se acepta y se corrige hacia adelante: en los copiables y por nota en el artefacto
| Campo | Valor |
|---|---|
| Fecha | 2026-09-17 |
| Estado | Vigente |
| Origen | report_auditor |

- **Contexto:** `F-020` observa que una casilla de `015_stakeholders.md`, ya `CERRADO`, afirma «seis
  condiciones de salida» donde su archivo de etapa enumera siete, y que la misma frase vive en la
  plantilla. Verificado contra `HEAD` antes de tratarlo:

  ```
  $ sed -n '/^## 6. Condicion de salida/,/^## 7/p' _phases/005_discovery.md | grep -c '^- \[ \]'
  7
  ```

  **El hallazgo se sostiene, y se queda corto.** Citaba dos sitios; el barrido propio devuelve tres
  —se le escapo `_workflow/`, que tambien es de los seis copiables—:

  ```
  $ grep -rn "seis condiciones de salida\|seis casillas\|Cuatro de las seis" 005_discovery/ _templates/005_discovery/ _workflow/005_discovery.md
  005_discovery/015_stakeholders.md:115:- [x] **Los interesados estan identificados** - es una de las seis condiciones de salida de la etapa.
  _templates/005_discovery/015_stakeholders.md:101:- [ ] **Los interesados estan identificados** - es una de las seis condiciones de salida de la etapa.
  _workflow/005_discovery.md:107:Las seis casillas de `_phases/005_discovery.md` §6, separadas por quien las puede comprobar:
  _workflow/005_discovery.md:118:📌 **Cuatro de las seis llevan juicio en la columna derecha.** Lo mecanico dice que el artefacto
  ```

  Y el reparto no solo publicaba mal la cifra: **le faltaba la septima fila entera**, la de la cosecha
  —la casilla que `CLAUDE.md` declara no delegable—. Su tabla repartia seis casillas:

  ```
  $ sed -n '/^## 5\./,/^## 6\./p' _workflow/005_discovery.md | grep -c '^| '
  7          # 1 cabecera + 6 filas de datos
  ```

  Todo entro ya incoherente desde el esqueleto, sin `D-XXX` que lo declarase:

  ```
  $ git log --oneline -S"las siete son ciertas" -- _phases/005_discovery.md
  fa7da56 Estado de partida del esqueleto, tal como estaba antes de sincronizar
  $ git log --oneline -S"Las seis casillas" -- _workflow/005_discovery.md
  fa7da56 Estado de partida del esqueleto, tal como estaba antes de sincronizar
  ```

- **Decision:** se acepta (`T-XXX`, `Origen: report_auditor`), y se corrige **distinto segun el tipo de
  archivo**:

  | Sitio | Que se hizo | Por que |
  |---|---|---|
  | la plantilla | `seis` → `siete` | existe para copiarse: una instruccion falsa arrastra a cada proyecto que la use |
  | el reparto, la cifra | `seis` → `siete` | igual, y ademas es de los seis copiables |
  | el reparto, la tabla | **se anade la septima fila** | faltaba el reparto de la casilla de la cosecha |
  | el artefacto `CERRADO` | **nota fechada, sin reescribir** | es evidencia ya cerrada y auditada |

- **Por que:** el usuario eligio la nota fechada frente a corregir el texto del artefacto. Un archivo
  que **instruye** se arregla; un archivo que **es evidencia** se corrige por declaracion. La frase mala
  no cambia nada de lo comprobado: las siete casillas se evaluaron una por una de todos modos.
- **Alternativas descartadas:**
  - **Corregir tambien el artefacto `CERRADO`:** defendible porque la frase es descripcion copiada y no
    una medicion publicada, pero reescribe un artefacto que una auditoria ya juzgo, y abre el precedente
    de tocar evidencia cerrada cuando el error parece menor.
  - **Corregir solo los dos sitios que el hallazgo citaba:** habria dejado `_workflow/` afirmando la
    cifra mala y sin la fila que le falta, con el hallazgo cerrado. Tomar la lista de un hallazgo como
    el inventario es lo que el barrido propio desmintio aqui.
  - **Recontar de paso «Cuatro de las seis llevan juicio»:** queda **sin tocar** y con su deuda tecnica
    (`DT-XXX`). Ver el punto siguiente.
- 🚨 **Lo que queda deliberadamente mal, y se declara:** al pasar la cifra de la linea 107 a `siete` y
  anadir la fila, la linea 119 del mismo archivo **sigue diciendo «de las seis» junto a una tabla de
  siete**. No se escribio «Cuatro de las siete» porque esa cifra tampoco se sostiene bajo ninguna
  lectura comprobable, y publicar a sabiendas otra cifra falsa es peor que dejar la conocida con su
  deuda escrita. La incoherencia va a `DT-XXX`, no se disimula.
- **Criterio de cierre:** a ese commit, la etapa enumera siete casillas, el reparto tiene sus siete
  filas, y los unicos `seis` que quedan para esta etapa son los dos declarados — el de la linea con
  nota y el de la cifra en disputa.

  ```
  $ git show a0949c5:_phases/005_discovery.md | sed -n '/^## 6. Condicion de salida/,/^## 7/p' | grep -c '^- \[ \]'
  7
  $ git show a0949c5:_workflow/005_discovery.md | sed -n '/^## 5\./,/^## 6\./p' | grep -c '^| '
  8
  $ git show a0949c5:_templates/005_discovery/015_stakeholders.md | grep -c 'siete condiciones de salida'
  1
  $ git grep -n "seis condiciones de salida\|seis casillas\|Cuatro de las seis" a0949c5 -- 005_discovery/ _templates/005_discovery/ _workflow/005_discovery.md
  a0949c5:005_discovery/015_stakeholders.md:115:- [x] **Los interesados estan identificados** - es una de las seis condiciones de salida de la etapa.
  a0949c5:_workflow/005_discovery.md:119:📌 **Cuatro de las seis llevan juicio en la columna derecha.** Lo mecanico dice que el artefacto
  ```

  🚨 **Ancladas por el Paso 7c-bis al commit `a0949c5`, y las tres primeras reproducen; la cuarta orden
  (`git grep`) no.** Reejecutada, devuelve el mismo archivo y linea pero con el guion largo `—` real del
  archivo en vez del guion corto `-` publicado arriba (la publicacion de esta entrada lo transcribio
  distinto del original):

  ```
  $ git grep -n "seis condiciones de salida\|seis casillas\|Cuatro de las seis" a0949c5 -- 005_discovery/ _templates/005_discovery/ _workflow/005_discovery.md
  a0949c5:005_discovery/015_stakeholders.md:115:- [x] **Los interesados estan identificados** — es una de las seis condiciones de salida de la etapa.
  a0949c5:_workflow/005_discovery.md:119:📌 **Cuatro de las seis llevan juicio en la columna derecha.** Lo mecanico dice que el artefacto
  ```

  No se sustituye la salida publicada ni se corrige: queda declarado aqui. Ver «Sin resolver» del
  informe de esta sesion.

  📌 **NOTA 2026-09-17 — esa remision no resuelve, y la linea de arriba no se reescribe.** «Sin
  resolver» es una seccion del **reporte en pantalla** del cierre, no del informe `_audit/S-XXX.md`
  que queda en el commit; comprobado que el informe de la sesion no la tiene:

  ```
  $ git show 0854fd3:_audit/S-017.md | grep -c "Sin resolver"
  0
  ```

  No se perdio nada: las dos salidas —la publicada y la que reproduce— estan **arriba, en esta misma
  entrada**, una debajo de la otra, que es exactamente el detalle al que el puntero pretendia llevar.
  Hacia adelante se corrige en `protocol-close` con una prohibicion explicita en el 7c-bis: **la skill
  nunca mando citar esa seccion desde una entrada** —sus menciones son todas instrucciones para el
  reporte en pantalla— pero tampoco lo prohibia, y el paso que escribe estas notas lo hizo dos veces.
  Ver `D-071`.

### D-065 - L-017 no sube: ya cubierta por LG-85, tercera pasada de la cosecha de 005_discovery
| Campo | Valor |
|---|---|
| Fecha | 2026-09-17 |
| Estado | Vigente |
| Origen | manager |

- **Contexto:** el tratamiento de `F-020` produjo `L-017`, que nacio `Sin evaluar` y volvio a romper la
  septima casilla de la condicion de salida de `005_discovery` — el mismo patron que `D-063` acababa de
  resolver. Se evalua **en la misma pasada**, que es literalmente lo que `L-016` enseña. Barrido,
  anclado al arbol de trabajo **al momento de escribir esta entrada** — antes de tocar la columna:

  ```
  $ grep -E '^\| \[L-' _persistence/lessons.md | grep '005_discovery' | grep -c 'Sin evaluar'
  1
  ```

- **Decision:** `L-017` **no sube**. Destino `Ya cubierta por LG-85`.

  | Leccion | Destino | Razon |
  |---|---|---|
  | `L-017` | `Ya cubierta por LG-85` | **filtro 4**: dos entradas globales la cubren entre las dos |

  Una fila, que es el recuento del barrido. `LG-85` aporta la mitad operativa —«lo que no esta en la
  lista no se declara limpio, se declara NO MIRADO»—, que aplicada a un hallazgo recibido dice
  exactamente que los sitios que cita son la lista y el resto esta sin mirar. `LG-79` aporta la otra
  —«reporta → no se cree → se mide con comandos propios»—. Se anota `LG-85` por ser la operativa.
- **Por que:** ademas del filtro 4, falla el **«cuando se promueve»** del archivo global: pide la misma
  forma vista en dos revisiones distintas, o una sola cuyo coste sea concreto y demostrable. Aqui hay un
  caso, y el coste no llego a materializarse porque el barrido propio lo detecto. Si reaparece, el
  destino natural es **enmendar `LG-85`** con la cara nueva — que la evidencia cruda adjunta a un
  hallazgo hace que su lista **parezca** exhaustiva—, no crear una entrada aparte.
- **Alternativas descartadas:**
  - **`Global candidata` con enmienda a `LG-85`:** habria requerido tercera pasada de la puerta y un
    push mas al repositorio de lecciones el mismo dia, para una leccion de un solo caso y coste no
    materializado. El propio archivo global pide esperar a la repeticion.
  - **`Solo proyecto`:** falso. La forma —heredar el ambito del barrido de otro— no depende de lenguaje,
    libreria ni dominio, y `LG-85` no seria pertinente si lo hiciera.
- **No se escribio nada fuera de este repositorio**, asi que esta pasada no tiene puerta ni commit en el
  repositorio de lecciones: un destino `Ya cubierta` no toca el archivo global.
- **Criterio de cierre:** a ese commit, ninguna leccion de `005_discovery` sigue `Sin evaluar`, y
  `L-017` consta con su destino.

  ```
  $ git show a0949c5:_persistence/lessons.md | grep -E '^\| \[L-' | grep '005_discovery' | grep -c 'Sin evaluar'
  0
  $ git show a0949c5:_persistence/lessons.md | grep -cF 'Ya cubierta por LG-85'
  1
  ```

  📌 **Ancladas por el Paso 7c-bis al commit `a0949c5`.** Las dos reproducen lo publicado arriba.

### D-066 - Se cierra el artefacto de necesidades
| Campo | Valor |
|---|---|
| Fecha | 2026-09-17 |
| Estado | Vigente |
| Origen | usuario |

- **Contexto:** de las siete casillas de la condicion de salida de `005_discovery`
  (`_phases/005_discovery.md` §6), cinco ya se cumplian; las dos pendientes eran la primera —la
  necesidad `N-XXX` enunciada— y la quinta —la hipotesis—, las dos por tener su artefacto en
  `BORRADOR`. El contenido de `005_needs.md` estaba completo desde `S-015` (`D-051` a `D-058`) y las
  cuatro necesidades entraron al alcance en `D-061`; lo que faltaba era el cierre.
- **Decision:** `005_discovery/005_needs.md` pasa de `BORRADOR` a `CERRADO`, con fecha de cierre
  `2026-09-17`. Se marcan sus nueve comprobaciones, se borra la seccion «Guia de llenado» y se elimina
  el ultimo hueco de la plantilla — el comentario que invitaba a copiar el bloque de ficha.
- **Por que:** el mismo criterio que `D-060` aplico a `010_actors.md` y `015_stakeholders.md`. Un
  artefacto en `BORRADOR` con la guia dentro no distingue lo que decidio el proyecto de lo que traia la
  plantilla, y quien lo lea manana tratara la guia como decision.
- **Alternativas descartadas:**
  - **Cerrarlo junto con `020_hypothesis.md` en una sola decision:** son dos artefactos distintos con
    comprobaciones distintas; una decision que cierra dos cosas a la vez no deja ver cual de las dos
    fallo si alguna falla.
  - **Dejarlo en `BORRADOR` hasta el acta de cierre de la etapa:** el acta **verifica** las casillas, no
    las cumple. Llegar al acta con el artefacto abierto es llegar con la casilla sin cumplir.
- **Verificacion.** Las tres ordenes de §4 del artefacto, copiadas del archivo:

  ```
  $ grep -n "<" 005_discovery/005_needs.md
  142:- [x] **No queda ni un solo `<` en el archivo** — ningun hueco sin rellenar.
  149:grep -n "<" 005_discovery/005_needs.md                 # debe no devolver nada
  158:unicas lineas que quedan con `<` y con «Guia de llenado» son **las de esta misma seccion**, que los
  $ grep -n "Guia de llenado" 005_discovery/005_needs.md
  143:- [x] La seccion «Guia de llenado» de abajo **esta borrada**.
  150:grep -n "Guia de llenado" 005_discovery/005_needs.md   # debe no devolver nada
  158:unicas lineas que quedan con `<` y con «Guia de llenado» son **las de esta misma seccion**, que los
  $ grep -n "^| Estado |" 005_discovery/005_needs.md
  7:| Estado | `CERRADO` |
  67:| Estado | `REGISTRADA` |
  82:| Estado | `REGISTRADA` |
  97:| Estado | `REGISTRADA` |
  112:| Estado | `REGISTRADA` |
  ```

  ⚠️ **Las dos primeras no devuelven vacio, y el alcance es lo que lo explica:** las cinco lineas que
  quedan son **de §4 mismo** — la casilla que enuncia la comprobacion, la linea de la propia orden, y la
  nota que declara esto. Es `LG-101`: una busqueda de texto encuentra tambien las citas de ese texto. El
  cuerpo del artefacto, hasta §4, no tiene ni un hueco:

  ```
  $ sed -n '1,/^## 4. Comprobacion/p' 005_discovery/005_needs.md | grep -c "<"
  0
  ```

  📌 **La tercera casilla se comprobo sobre los `Enunciado`, no sobre el archivo entero**, porque es
  lo que la regla dice —«si en el **enunciado** aparece …»—. Las palabras-pantalla aparecen a proposito
  en `Peticion original`, que cita literal lo que se pidio, y en §3, que guarda el rastro de lo
  desvestido:

  ```
  $ grep -n '^| Enunciado |' 005_discovery/005_needs.md | grep -icE 'pantalla|boton|formulario|tablero|app|menu'
  0
  $ grep -c "^### N-00" 005_discovery/005_needs.md
  4
  ```

- **Criterio de cierre:** a ese commit, el artefacto esta `CERRADO`, sus cuatro fichas siguen ahi, su
  cuerpo no tiene huecos y la guia no esta.

  ```
  $ git show a0949c5:005_discovery/005_needs.md | grep -c 'Guia de llenado'
  3
  $ git show a0949c5:005_discovery/005_needs.md | sed -n '1,/^## 4. Comprobacion/p' | grep -c "<"
  0
  $ git show a0949c5:005_discovery/005_needs.md | grep -c "^### N-00"
  4
  ```

  📌 El primero devuelve `3`, no `0`, y son las tres lineas de §4 declaradas arriba.

  📌 **Ancladas por el Paso 7c-bis al commit `a0949c5`.** Las tres reproducen lo publicado arriba.

### D-067 - L-018 no sube: ya cubierta por LG-101, cuarta pasada de la cosecha de 005_discovery
| Campo | Valor |
|---|---|
| Fecha | 2026-09-17 |
| Estado | Vigente |
| Origen | manager |

- **Contexto:** `L-018` nacio al detectar que el barrido de estado de los artefactos habia clasificado
  mal el de la hipotesis, y volvio a dejar una leccion `Sin evaluar`. Se evalua en la misma pasada.
  Barrido, **al momento de escribir esta entrada**, antes de tocar la columna:

  ```
  $ grep -E '^\| \[L-' _persistence/lessons.md | grep '005_discovery' | grep -c 'Sin evaluar'
  1
  ```

- **Decision:** `L-018` **no sube**. Destino `Ya cubierta por LG-101`.

  | Leccion | Destino | Razon |
  |---|---|---|
  | `L-018` | `Ya cubierta por LG-101` | **filtro 4**: `LG-101` ya lo dice, y prescribe la misma defensa |

  Una fila, que es el recuento del barrido. `LG-101` —«una busqueda de texto encuentra tambien las citas
  de ese texto»— cubre el fallo entero, incluida la prescripcion: «**se ancla a la forma de la linea**,
  se limita al sitio donde vive el defecto». Que aqui la cita fuera una **prohibicion** del valor
  buscado, y no una correccion que lo menciona, es el mismo mecanismo con otra ropa.
- **Por que:** ademas del filtro 4, el «cuando se promueve» tampoco se cumple como entrada nueva: es una
  reaparicion de una forma **ya promovida**, no una forma nueva. Lo que si vale la pena decir es que
  reaparecio **tres veces en la misma jornada** —en el control de un artefacto, en un criterio de cierre
  y en este barrido—, lo que refuerza `LG-32` en su mitad de que conocer la forma del fallo no protege
  de cometerlo. Ninguna de las dos necesita enmienda para decirlo.
- **Alternativas descartadas:**
  - **`Global candidata`:** duplicaria `LG-101` con un caso mas, que es lo que el filtro 4 evita.
  - **Enmendar `LG-101` con el caso de la prohibicion:** su prescripcion ya cubre la defensa sin
    cambiarla; una enmienda que no cambia lo que hay que hacer solo alarga el archivo (`LG-26`).
  - **No registrar la leccion:** el error fue propio y se publico en pantalla al usuario. Un fallo que
    llego a una afirmacion falsa y estuvo a un paso de romper un archivo irreversible se registra.
- **No se escribio nada fuera de este repositorio.**
- **Criterio de cierre:** a ese commit, ninguna leccion de `005_discovery` sigue `Sin evaluar`.

  ```
  $ git show a0949c5:_persistence/lessons.md | grep -E '^\| \[L-' | grep '005_discovery' | grep -c 'Sin evaluar'
  0
  $ git show a0949c5:_persistence/lessons.md | grep -cE '^\| \[L-018\].*Ya cubierta por LG-101'
  1
  ```

  📌 **Ancladas por el Paso 7c-bis al commit `a0949c5`.** Las dos reproducen lo publicado arriba.

  📌 **La segunda orden va anclada a `L-018`, y no es cosmetica.** Escrita como
  `grep -cF 'Ya cubierta por LG-101'` devolvia `3`, no `1`: ese valor ya lo llevan dos lecciones
  anteriores. La cifra se corrigio **antes de publicarla**, contando la lista en vez de
  recordarla — que es exactamente lo que pide `L-016`, aplicado esta vez a tiempo.

### D-068 - F-021 se acepta, y el alcance real son seis anclas y un control, no una linea
| Campo | Valor |
|---|---|
| Fecha | 2026-09-17 |
| Estado | Vigente |
| Origen | report_auditor |

- **Contexto:** `F-021` senala un ancla rota en el indice de `progress.md`: el titulo de la sesion
  anterior lleva un `→` entre espacios y el ancla escrita omite uno de los dos guiones que esos
  espacios producen. El hallazgo se verifico vigente contra `HEAD` (`31ece08`) antes de tratarlo:

  ```
  $ grep -n '(#s-017' _persistence/progress.md | grep -oE 'l-018-+d-063'
  l-018-d-063
  ```

  El hallazgo deja abiertas **dos** lecturas posibles del slug y no elige. Se resolvio ejecutando la
  implementacion de referencia —`github-slugger`, la que usa GitHub— en vez de razonarlo:

  ```
  $ node slug.mjs 'S-017 - `F-020` de `R-018` aceptado y corregido (`D-064`), tres pasadas mas de la cosecha (`L-016`/`L-017`/`L-018` → `D-063`/`D-065`/`D-067`), y se cierra `005_needs.md` (`D-066`)'
  s-017---f-020-de-r-018-aceptado-y-corregido-d-064-tres-pasadas-mas-de-la-cosecha-l-016l-017l-018--d-063d-065d-067-y-se-cierra-005_needsmd-d-066
  ```

  Gana la lectura «el simbolo desaparece y sus dos espacios dejan dos guiones». Y aplicando `L-017`
  —los sitios que cita un hallazgo son una muestra, no el inventario— se barrio **todo** el registro
  en vez de esa linea, con un script que deriva el slug de cada titulo y lo compara con cada ancla:

  ```
  $ node .claude/checks/anchors.js _persistence/*.md _audit/*.md
  ROTA _persistence/progress.md:43 -> #s-007---f-008-de-r-006-atendido-y-nuevo-estado-revocada-en-parte-para-decisions
  ROTA _persistence/progress.md:44 -> #s-008---f-009-de-r-007-atendido-dt-003-abierta-y-el-7c-quater-declara-el-punto-ciego-de-la-orden-partida
  ROTA _persistence/progress.md:46 -> #s-010---las-tres-recomendaciones-sin-hallazgo-de-r-009-evaluadas-y-dt-003-pagada-con-la-promocion-al-esqueleto
  ROTA _persistence/progress.md:51 -> #s-015---f-018-de-r-016-aceptado-y-corregido-d-049-t-032-verificada-con-la-sonda-hook-probe-d-050-y-pasos-1-a-7-de-005_discovery-con-el-patrocinador
  ROTA _persistence/progress.md:52 -> #s-016---f-019-de-r-017-aceptado-y-corregido-d-059-cierre-de-010_actors-y-015_stakeholders-d-060-alcance-y-objetivo-del-proyecto-d-061-y-cosecha-de-005_discovery-d-062
  ROTA _persistence/progress.md:53 -> #s-017---f-020-de-r-018-aceptado-y-corregido-d-064-tres-pasadas-mas-de-la-cosecha-l-016l-017l-018-d-063d-065d-067-y-se-cierra-005_needsmd-d-066
  total anclas rotas: 6
  ```

  **Seis, no una**, y solo la ultima es la que el hallazgo cita. Las otras cinco tienen otra causa,
  mas comun: el titulo se retoco despues de escribir el ancla, que quedo apuntando a la version vieja.

  🚨 **Y esta clase de defecto ya se habia detectado, corregido y cerrado.** `F-003` —el tercer
  hallazgo de la historia del proyecto— era el mismo defecto sobre la primera sesion; se acepto, se
  corrigio en `T-005` y una auditoria posterior lo cerro como `Implementado`. Se corrigio **el caso
  citado** y no se puso control, y reaparecio seis veces:

  ```
  $ grep -A7 '^### F-003' _audit/findings.md | grep -E '^\| (Estado|Cerrado en) \|'
  | Estado | Implementado |
  | Cerrado en | e222812 (R-002) |
  ```
- **Decision:** se acepta el hallazgo y se corrigen **las seis** anclas, derivando cada una del titulo
  en vez de escribirla a mano; y se anade al cierre el **Paso 2b-bis**, que corre el control sobre
  `_persistence/` y `_audit/` y sale `1` si queda alguna rota. El titulo **no** se toca en ningun
  caso: lo que se corrige es el ancla.
- **Por que:** un indice roto no rompe nada visible —solo deja de llevar a donde dice, y quien lo usa
  supone que la entrada no existe—, y `progress.md` es justo por donde entra el arranque de cada
  jornada. Es el fallo silencioso tipico: su unico disparador fiable es mecanico, porque el disparador
  «alguien lo nota» ya se demostro que no se activa. La correccion de la instancia sin el control es
  exactamente lo que se hizo la primera vez, y el resultado esta medido: seis reincidencias.
- **Alternativas descartadas:**
  - **Corregir solo el ancla que el hallazgo cita:** es lo que se hizo con `F-003`, con el resultado
    conocido. Habria dejado cinco rotas en el mismo archivo, ninguna citada por nadie.
  - **Prohibir los simbolos no ASCII en los titulos que necesitan ancla**, que es lo que el hallazgo
    sugiere como mas robusto: no cubre la causa mayoritaria —cinco de las seis son titulos retocados
    despues, todos ASCII— y ademas empobrece el titulo para favorecer al enlace, cuando el enlace es
    el medio y el titulo lo que describe la sesion.
  - **Reescribir el titulo para que encaje con el ancla escrita:** cambia el registro para acomodar la
    navegacion. Un titulo publicado describe lo que paso; un ancla no afirma nada.
  - **Usar `github-slugger` como dependencia del repositorio:** obligaria a meter `package.json` y
    `node_modules` en un repositorio que todavia no tiene una linea de codigo de producto. Se replico
    el algoritmo en el control (14 lineas, sin dependencias) y se **valido contra la implementacion de
    referencia** sobre los titulos reales del repositorio, con su limite escrito en la cabecera:

    ```
    $ node validate2.mjs _persistence/*.md _audit/*.md _phases/*.md _workflow/*.md _methodology/*.md _templates/*/*.md project.md CLAUDE.md
    titulos comparados: 1532 · diferencias: 0
    ```
  - **Dejar el control para mas adelante y abrir deuda:** habria sido repetir a sabiendas el error de
    `F-003`. El control con su test costo una sola pasada.

- **Criterio de cierre:**
  1. **Enunciado:** no queda ningun ancla rota en `_persistence/` ni en `_audit/`, y el control que lo
     comprueba existe con su test.
  2. **Ordenes:**
     ```
     git show ed64348:.claude/skills/protocol-close/SKILL.md | grep -c '^## Paso 2b-bis'
     git show ed64348:_persistence/progress.md | grep -cE '\(#s-0(07|08|10|15|16|17)---'
     ```
  3. **Salidas:**
     ```
     1
     6
     ```

  📌 **Ancladas por el Paso 7c-bis al commit `ed64348`.** Las dos reproducen lo publicado arriba.

  📌 **El test del control se corre en el arbol de trabajo, no anclado, porque ejecuta:**

  ```
  $ node --test .claude/checks/anchors.test.js 2>&1 | grep -E 'tests|pass|fail'
  ℹ tests 10
  ℹ pass 10
  ℹ fail 0
  ```

### D-069 - F-022: el sintoma ya no reproduce, y el choque de reglas que lo causo se zanja con una columna
| Campo | Valor |
|---|---|
| Fecha | 2026-09-17 |
| Estado | Vigente |
| Origen | report_auditor |

- **Contexto:** `F-022` observa que la fila de `F-020` publicaba un valor de `Estado` con la cita
  pegada dentro, donde la convencion de `findings.md` cierra la lista de valores posibles. Verificado
  contra `HEAD` (`31ece08`), **el sintoma ya no existe**: la propia auditoria que abrio el hallazgo
  cerro esa fila al pasarla a `Implementado`.

  ```
  $ grep -E '^\| \[F-020\]' _audit/findings.md | awk -F'|' '{print $(NF-1)}'
   Implementado
  ```

  La causa, en cambio, sigue entera, y el hallazgo la nombra bien: `CLAUDE.md` manda actualizar la
  fila «citando la `T-XXX` o la `D-XXX` donde quedo» y la fila no tenia columna para eso, mientras
  `findings.md` cierra los valores de `Estado`. Cumplir una regla rompia la otra, y el control del
  Paso 2b avisaba **en cada hallazgo aceptado**.
- **Decision:** el indice de `findings.md` gana una columna `Registrado en`, y `Estado` vuelve a
  llevar solo un valor de la lista. La columna se relleno **derivandola del campo homonimo de cada
  ficha**, no a mano, de modo que fila y ficha coinciden por construccion: 22 filas.
- **Por que:** es la unica de las dos salidas que cumple las dos reglas a la vez, sin enmendar
  `CLAUDE.md` ni perder la cita en el sitio por donde se entra. Y resuelve el problema de fondo, que
  no es de formato: un control que avisa siempre deja de leerse, y entonces ya no avisa de nada —
  peor que no tenerlo, porque sigue pareciendo un detector.
- **Alternativas descartadas:**
  - **Valor limpio en la fila y la cita solo en la ficha:** mas simple y sin tocar la estructura, pero
    obliga a enmendar la frase de `CLAUDE.md` que pide citar en la fila, y deja el indice sin decir
    donde quedo cada hallazgo — que es lo que se quiere ver de un vistazo. Se presento al usuario
    junto con la adoptada, con las dos formas a la vista, y eligio esta.
  - **Dejarlo como estaba y silenciar el aviso del Paso 2b:** es apagar el detector en vez de arreglar
    la contradiccion.
- 🚨 **La columna rompia el control del Paso 2b, que leia `Estado` por posicion (`$(NF - 1)`), y se
  corrigio a `$(NF - 2)` en la misma pasada.** Reejecutado despues del cambio, sin salida y `exit=0`.

  ⚠️ **Se comprobo que habria pasado si no se hubiera corregido, y el resultado contradice lo que
  parecia obvio.** La sospecha era que el control seguiria en verde midiendo la columna equivocada. No:
  corrido el control **viejo** (`$(NF - 1)`) sobre el archivo ya con la columna nueva, devuelve las 22
  filas como diferencias, porque compara `Registrado en` contra `Estado` y no se parecen.

  ```
  $ diff <(… awk -F'|' '{… e=$(NF - 1) …}' …) <(… la ficha …) | head -1
  1,22c1,22
  ```

  🔑 **Asi que este control, al cambiar la estructura, falla ruidosamente — que es lo deseable.** El
  riesgo de verde falso existe solo cuando las dos columnas llevan valores parecidos, y aqui no es el
  caso. Queda dicho porque la version anterior de esta linea afirmaba el verde silencioso sin haberlo
  comprobado, y la orden de arriba lo desmiente.

- **Criterio de cierre:**
  1. **Enunciado:** el indice de `findings.md` tiene la columna, la convencion la declara, y el
     control del Paso 2b lee la columna correcta.
  2. **Ordenes:**
     ```
     git show ed64348:_audit/findings.md | grep -c '^| Codigo | Hallazgo | Auditoria | Gravedad | Urgencia | Estado | Registrado en |'
     git show ed64348:_audit/findings.md | grep -c '^| Registrado en | la `T-XXX` o la `D-XXX`'
     git show ed64348:.claude/skills/protocol-close/SKILL.md | grep -cF 'e=$(NF - 2)'
     ```
  3. **Salidas:**
     ```
     1
     1
     1
     ```

  📌 **Ancladas por el Paso 7c-bis al commit `ed64348`.** Las tres reproducen lo publicado arriba.

### D-070 - F-023 se acepta: la confirmacion de DT-005 es del usuario, y se escribe con su dueno
| Campo | Valor |
|---|---|
| Fecha | 2026-09-17 |
| Estado | Vigente |
| Origen | report_auditor |

- **Contexto:** `F-023` observa que `DT-005` llevaba `Confirmacion: Sin confirmar`, valor que la
  convencion de `techdebt.md` no declara, y que ademas incumple su regla explicita: `Propuesta` lleva
  siempre escrito quien confirma, porque una propuesta sin dueno no espera — se queda propuesta para
  siempre. Verificado vigente contra `HEAD` (`31ece08`) antes de tratarlo:

  ```
  $ grep -cE '^\|.*\| Sin confirmar \|' _persistence/techdebt.md
  1
  ```
- **Decision:** `DT-005` pasa a `Propuesta (pendiente del usuario)`, en la fila del indice y en la
  ficha, en la misma pasada. El usuario lo confirmo como dueno de esa decision al presentarle las dos
  salidas que la convencion permite.
- **Por que:** el valor no solo estaba fuera de la lista; dejaba la deuda sin nadie que la hiciera
  avanzar, que es precisamente lo que esa convencion existe para impedir. `DT-005` afecta a una cifra
  de dos etapas, asi que quedarse propuesta para siempre tiene coste.
- **Alternativas descartadas:**
  - **Abrir una `T-XXX` para determinar de quien es la confirmacion**, que es la salida que la propia
    convencion prescribe cuando no se sabe: aqui si se sabe. El usuario es el patrocinador y todas las
    confirmaciones de deuda del registro han sido suyas; abrir una tarea para preguntar lo que se
    puede preguntar en una linea es ceremonia.
  - **Confirmarla yo como `Confirmada`:** no me corresponde. `Confirmacion` dice si el atajo fue un
    atajo, y esa lectura es justo lo que `DT-005` declara que no esta claro.

- **Criterio de cierre:**
  1. **Enunciado:** no queda ninguna `Confirmacion` fuera de la lista de la convencion, y `DT-005`
     nombra a su dueno en el indice y en la ficha.
  2. **Ordenes:**
     ```
     git show ed64348:_persistence/techdebt.md | grep -cE '\| Sin confirmar \|'
     git show ed64348:_persistence/techdebt.md | grep -cF 'Propuesta (pendiente del usuario)'
     ```
  3. **Salidas:**
     ```
     0
     3
     ```

  📌 **El `3` son las tres apariciones legitimas:** la fila del indice, la ficha, y la linea de la
  convencion que usa ese mismo valor como ejemplo de la forma correcta.

  📌 **Ancladas por el Paso 7c-bis al commit `ed64348`.** Las dos reproducen lo publicado arriba.

### D-071 - F-024 se acepta en su parte comprobable, y se rechaza lo que atribuye a la skill
| Campo | Valor |
|---|---|
| Fecha | 2026-09-17 |
| Estado | Vigente |
| Origen | report_auditor |

- **Contexto:** `F-024` observa que la nota de anclaje de `D-064` remite a una seccion «Sin resolver»
  que no existe en el informe de la sesion, porque esa seccion pertenece al **reporte de pantalla**
  del cierre y no persiste en el commit. El hallazgo senala tambien que `D-062` tiene el mismo
  puntero. Las dos partes verificadas vigentes contra `HEAD` (`31ece08`):

  ```
  $ grep -c "Sin resolver" _audit/S-017.md
  0
  ```
- **Decision:** se acepta lo comprobable y se corrige por **nota fechada** en las dos entradas, sin
  reescribir ninguna linea: la nota dice que el puntero no resuelve y senala lo que si persiste, que
  esta en la propia entrada —las dos salidas, una debajo de la otra—. Y hacia adelante se anade al
  7c-bis de `protocol-close` la prohibicion explicita de remitir desde el registro a una seccion del
  reporte.

  🚨 **Se rechaza, en cambio, la parte del hallazgo que atribuye el defecto a la skill** («que
  `protocol-close` no mande citar desde el registro una seccion que solo existe en pantalla»). La
  skill **no lo mandaba**: sus dieciseis menciones de «Sin resolver» son todas instrucciones sobre que
  escribir en el reporte, ninguna sobre que escribir en una entrada del registro.

  ```
  $ grep -c "Sin resolver" .claude/skills/protocol-close/SKILL.md
  16
  ```

  Lo que faltaba no era quitar una orden: era que **nada lo prohibiera**, y el paso que escribe esas
  notas lo hizo dos veces. Por eso la correccion es una prohibicion nueva, no la retirada de una
  instruccion que no existe.
- **Por que:** `decisions.md` se lee dentro de meses, y `D-064` es justo la entrada cuya cuarta orden
  no reproduce: el puntero que deberia llevar al detalle del fallo no llevaba a ninguna parte. El
  contenido nunca se perdio, asi que el defecto era solo el puntero — y arreglarlo por nota, sin
  tocar la linea, es lo que corresponde a un registro ya publicado.
- **Alternativas descartadas:**
  - **Reescribir las dos lineas para que citen lo correcto:** convierte «falta un puntero» en «hay un
    puntero que nadie escribio», y borra que el defecto ocurrio.
  - **Tratar solo `D-064`, que es la que el hallazgo titula:** `D-062` tiene el mismo puntero y el
    propio hallazgo lo dice. Es la muestra contra el inventario otra vez.
  - **Aceptar tambien la atribucion a la skill y «corregirla»:** habria dejado el registro afirmando
    que se retiro una instruccion que nunca estuvo. Un rechazo con la evidencia delante vale mas que
    una conformidad comoda.

- **Criterio de cierre:**
  1. **Enunciado:** las dos entradas llevan su nota fechada, y el 7c-bis prohibe ese puntero.
  2. **Ordenes:**
     ```
     git show ed64348:_persistence/decisions.md | grep -cE 'NOTA 2026-09-17 — (la remision a|esa remision no resuelve)'
     git show ed64348:.claude/skills/protocol-close/SKILL.md | grep -cF 'no remite a «Sin resolver»'
     ```
  3. **Salidas:**
     ```
     2
     1
     ```

  📌 **Ancladas por el Paso 7c-bis al commit `ed64348`.** Las dos reproducen lo publicado arriba.

### D-072 - L-019 sube como enmienda de LG-100 y L-020 no sube: quinta pasada de la cosecha de 005_discovery
| Campo | Valor |
|---|---|
| Fecha | 2026-09-17 |
| Estado | Vigente |
| Origen | usuario |

- **Contexto:** las dos lecciones escritas hoy al tratar los hallazgos de `R-019` nacieron `Sin evaluar`,
  y con eso la septima casilla de la condicion de salida de `005_discovery` —«ninguna leccion de esta
  etapa queda `Sin evaluar`»— dejo de cumplirse en la misma sesion en que se iba a levantar el acta. Es
  el mismo fenomeno que `D-062` declaro en su dia: la cosecha se hace, y el trabajo posterior de la
  etapa genera lecciones nuevas que la invalidan. Barrido del Paso 1:

  ```
  $ grep -E '^\| \[L-' _persistence/lessons.md | grep '005_discovery' | grep -c 'Sin evaluar'
  2
  ```
- **Decision:** `L-019` sube como **enmienda de `LG-100`**, y `L-020` **no sube**: su nucleo ya lo
  cubre `LG-06`. Ninguna entrada nueva, asi que el recuento del archivo global sigue en 109 y su
  cabecera pasa a **version 7**.

  | Leccion | Destino | Filtro |
  |---|---|---|
  | `L-019` | enmienda de `LG-100` | pasa 1, 2 y 3; el **4** la manda a enmienda: es una cara nueva de `LG-100`, no una entrada aparte |
  | `L-020` | `Ya cubierta por LG-06` | **4**: «no dar un control por bueno sin verlo rojo contra el formato real» ya lo dice `LG-06`, y este proyecto ya establecio ese mapeo con `L-003` |

  Dos filas clasificadas contra `2` del barrido: cuadra.
- **Por que:** `L-019` cumple con holgura el «cuando se promueve» del archivo global —«la misma forma
  vista en dos revisiones distintas»—: el defecto que la origino se cerro como `Implementado` en una
  auditoria y reaparecio **seis veces** en las dieciseis sesiones siguientes. Y lo que anade a `LG-100`
  no es enfasis: `LG-100` explica que una correccion como texto solo vale para su commit, pero no dice
  que **el cierre formal del hallazgo es lo que apaga la vigilancia**, ni que por eso un control
  aplazado exige deuda declarada en vez de una tarea suelta.
- **Alternativas descartadas:**
  - **`L-019` como entrada nueva `LG-110`:** el filtro 4 lo prohibe cuando el nucleo ya existe, y aqui
    existe. Habria dejado dos entradas diciendo lo mismo con distinto alcance, que es justo lo que ese
    filtro evita — y el archivo global tiene declarado su propio tamano como enemigo.
  - **`L-020` como enmienda de `LG-06`:** tiene un matiz que `LG-06` no lleva —el disparador «cuando
    cambies la estructura, revisa los controles que la leen»—, pero el «cuando se promueve» pide que se
    repita o que el coste sea demostrable, y aqui es **una sola aparicion atrapada antes de costar
    nada**. Si vuelve a aparecer, es enmienda.
  - **Dejar las dos `Sin evaluar` y cerrar la etapa igual:** la casilla existe para impedir exactamente
    eso.

  🚨 **`L-020` se reescribio a mitad de esta cosecha, y conviene que quede dicho.** Su primera version
  afirmaba que el control mal direccionado «habria seguido diciendo coinciden». Se comprobo antes de
  clasificarla y es falso: el control viejo devuelve las 22 filas como diferencias, es decir falla
  ruidosamente. Se corrigio la leccion y la linea de `D-069` que lo repetia, **antes de commitear
  ninguna de las dos** — no habia nada publicado que reescribir.

  ⚠️ **Y el archivo global no se recorrio entero, a proposito.** Se leyeron su indice, su seccion de
  promocion y las entradas contra las que habia que contrastar (`LG-06`, `LG-16`, `LG-22`, `LG-26`,
  `LG-32`, `LG-66`, `LG-67`, `LG-69`, `LG-100`, `LG-104`, `LG-109`). **Los demas bloques quedan NO
  MIRADOS, no limpios.**

- **Criterio de cierre:**
  1. **Enunciado:** la enmienda esta en el archivo global con su cita de origen, la version declarada
     es la 7, el commit esta subido, y ninguna leccion de la etapa queda `Sin evaluar`.
  2. **Ordenes:**
     ```
     git -C "C:/Users/USUARIO/Documents/Company_TripleS/TripleS_Lessons" show e915383:global_lessons.md | grep -c 'apaga al único que vigilaba'
     git -C "C:/Users/USUARIO/Documents/Company_TripleS/TripleS_Lessons" show e915383:global_lessons.md | grep -cF '`YouOtto` · L-019'
     git -C "C:/Users/USUARIO/Documents/Company_TripleS/TripleS_Lessons" show e915383:global_lessons.md | grep -nE '^> \*\*Versión: 7'
     git -C "C:/Users/USUARIO/Documents/Company_TripleS/TripleS_Lessons" status -sb | head -1
     git show ed64348:_persistence/lessons.md | grep -E '^\| \[L-' | grep '005_discovery' | grep -c 'Sin evaluar'
     ```
  3. **Salidas:**
     ```
     1
     1
     26:> **Versión: 7 · 2026-09-17** · 109 lecciones · 10 bloques
     ## main...origin/main
     0
     ```

  📌 **`## main...origin/main` sin `[ahead N]` es la confirmacion del push**, y es la unica de las cinco
  ordenes que no se puede reproducir desde este repositorio: las tres primeras hablan de un archivo que
  el auditor **no puede ver**, y por eso van con el hash `e915383` delante.

  📌 **Ancladas por el Paso 7c-bis al commit `ed64348`.** La quinta (sobre `_persistence/lessons.md`)
  reproduce lo publicado arriba; las cuatro primeras no son de este repositorio y no las toca este
  paso.

### D-073 - El acta de cierre va antes que los hallazgos abiertos de la jornada
| Campo | Valor |
|---|---|
| Fecha | 2026-09-18 |
| Estado | Vigente |
| Origen | usuario |

- **Contexto:** el arranque de la jornada dejo tres asuntos por delante: un desfase de `progress.md`
  reportado por `session-starter`, los tres hallazgos `Abierto` de `R-020` (`F-025`, `F-026`,
  `F-027`), y el acta de cierre de `005_discovery`. `CLAUDE.md` pone los hallazgos abiertos como
  primer asunto del dia. El patrocinador fijo otra prioridad: el acta primero.
- **Decision:** en esta sesion el acta de cierre de `005_discovery` se levanta **antes** de evaluar
  los tres hallazgos de `R-020`. Los hallazgos se evaluan despues, en la misma sesion.
- **Por que:** los tres son `No bloqueante`, y la convencion de `findings.md` dice de ese valor que
  «el defecto no contamina lo que venga despues» y que su correccion «se puede aplazar con su `T-XXX`
  abierta». Ninguna de las siete casillas de la condicion de salida de `005_discovery` menciona
  hallazgos, asi que dejarlos abiertos no altera lo que el acta verifica. Lo que **no** se aplaza es
  evaluarlos: siguen dentro de esta sesion.
- **Alternativas descartadas:**
  - **Evaluar los tres hallazgos primero, como pide `CLAUDE.md`:** es el orden por defecto y se
    descarto por decision del patrocinador, no por ser incorrecto. Con los tres `No bloqueante`, el
    coste de invertir el orden es nulo y el acta desbloquea la etapa siguiente.
  - **Corregir el desfase de `progress.md` primero:** se descarto porque el desfase no existe. La
    verificacion esta en el bloque de abajo.
- **Verificacion.** El desfase reportado por `session-starter` no reproduce. Los dos commits
  posteriores a `ed64348` son el anclaje y la auditoria —el patron normal de toda sesion— y el diff
  de `_persistence/` no contiene nada que no sea anclaje:

  ```
  $ git diff ed64348..HEAD -- _persistence/ | grep -E '^[+-]' | grep -vE '^(\+\+\+|---)' | grep -vE 'ed64348|<hash>|Ancladas por el Paso 7c-bis'
  +
  +
  +
  +
  +
  +  reproduce lo publicado arriba; las cuatro primeras no son de este repositorio y no las toca este
  +  paso.
  ```

  📌 **Siete lineas, y ninguna es contenido:** cinco en blanco y dos de continuacion de la propia nota
  de anclaje. El filtro excluye las tres formas del anclaje —el hash puesto, el `<hash>` que sustituye
  y la nota del Paso 7c-bis—, asi que lo que queda es lo que el anclaje no explica.

  Y la urgencia de los tres hallazgos, que es lo que permite aplazarlos:

  ```
  $ grep -cE '^\| \[F-02[567]\].*\| No bloqueante \| Abierto \|' _audit/findings.md
  3
  ```

- **Criterio de cierre:**
  1. **Enunciado:** a ese commit, los tres hallazgos de `R-020` siguen siendo `No bloqueante` y el
     acta de `005_discovery` existe en `_audit/005_discovery/`.
  2. **Ordenes:**
     ```
     git show d80a965:_audit/findings.md | grep -cE '^\| \[F-02[567]\].*\| No bloqueante \|'
     git show d80a965:_audit/005_discovery/005_phase_exit_record_001.md | grep -c '^## 5. Las dos firmas'
     ```
  3. **Salidas:**
     ```
     3
     1
     ```

  📌 **Ancladas por el Paso 7c-bis al commit `d80a965`.** Las dos reproducen lo publicado arriba.

### D-074 - El patrocinador firma el acta y 005_discovery queda cerrada
| Campo | Valor |
|---|---|
| Fecha | 2026-09-18 |
| Estado | Vigente |
| Origen | usuario |

- **Contexto:** el agente `phase_exit_auditor` levanto el acta de cierre de `005_discovery` sobre el
  commit `d09abc6` y la dejo en `_audit/005_discovery/005_phase_exit_record_001.md` (commit `e9846f6`,
  subido). Dictamen: `CASILLAS SATISFECHAS`, `7` de `7` en `CUMPLE`, cero `NO CUMPLE`, cero
  `NO COMPROBABLE`, cero hallazgos. El acta dejo la seccion 5.2 en blanco a proposito: es la segunda
  firma, y no la escribe quien verifica.
- **Decision:** el patrocinador —JD Rodriguez, Main Sponsor— firma la seccion 5.2 del acta con fecha
  `2026-09-18` y decision `ETAPA CERRADA`. **`005_discovery` queda cerrada.** Con ello se satisface la
  tercera entrada obligatoria de `010_prototype` (§3.3): acta levantada y firmada.
- **Por que:** son dos firmas distintas y ninguna sustituye a la otra. La del auditor dice que las
  casillas se cumplen; la del patrocinador da la etapa por cerrada y asume la consecuencia. Con las
  siete en `CUMPLE` no hay casilla caida que obligue a asumir deuda tecnica para cruzar la puerta.
- **Que NO cierra esta decision:** los hallazgos `F-025`, `F-026` y `F-027` siguen `Abierto`, y
  `F-016` y `F-017` siguen `Aceptado — pendiente`. Ninguno es casilla de salida, asi que cruzan la
  puerta abiertos y se trabajan igual. Cerrarlos es de la auditoria, nunca de esta firma.
- **Alternativas descartadas:**
  - **No firmar todavia y esperar a que los cinco hallazgos esten cerrados:** ninguno de los cinco
    aparece en la condicion de salida, y esperar a hallazgos cero no termina nunca — cada cierre de
    sesion genera una auditoria que genera hallazgos nuevos. La etapa no cerraria jamas.
  - **Dar la etapa por cerrada con el dictamen del auditor, sin firma del patrocinador:** es
    exactamente lo que `010_prototype` §3.3 impide, y el defecto que ya se registro una vez en este
    proyecto cuando un acta quedo con la firma en blanco mientras el registro daba la etapa por
    cerrada.
- **Verificacion.** El dictamen que se firma, leido del acta en el commit que la publico:

  ```
  $ git show e9846f6:_audit/005_discovery/005_phase_exit_record_001.md | grep -cE '^\| Casillas `CUMPLE` \| `7` de `7` \|'
  1
  $ git show e9846f6:_audit/005_discovery/005_phase_exit_record_001.md | grep -c '<en blanco>'
  3
  ```

  📌 **El `3` son los tres huecos de la seccion 5.2** —`Quien`, `Fecha` y `Decision`— tal y como el
  auditor los dejo. Esta decision es la que los rellena, y por eso se leen aqui **antes** de escribir.

  Y el acta ya firmada, en el arbol de trabajo:

  ```
  $ sed -n '/^### 5.2 Aprobacion del patrocinador/,/^| Donde queda/p' _audit/005_discovery/005_phase_exit_record_001.md | grep -cE '^\| (Quien \| JD Rodriguez - Main Sponsor|Fecha \| `2026-09-18`|Decision \| `ETAPA CERRADA`) \|'
  3
  $ grep -c '<en blanco>' _audit/005_discovery/005_phase_exit_record_001.md
  0
  ```

- **Criterio de cierre:**
  1. **Enunciado:** a ese commit, el acta lleva las dos firmas y no queda ni un hueco.
  2. **Ordenes:**
     ```
     git show d80a965:_audit/005_discovery/005_phase_exit_record_001.md | grep -c '<en blanco>'
     git show d80a965:_audit/005_discovery/005_phase_exit_record_001.md | grep -cF '| Decision | `ETAPA CERRADA` |'
     git show d80a965:_audit/005_discovery/005_phase_exit_record_001.md | grep -cF '| Quien | agente `phase_exit_auditor` |'
     ```
  3. **Salidas:**
     ```
     0
     1
     1
     ```

  📌 **Ancladas por el Paso 7c-bis al commit `d80a965`.** Las tres reproducen lo publicado arriba.

### D-075 - F-025 se acepta: la cifra se deriva de la enumeracion y se corrige por nota
| Campo | Valor |
|---|---|
| Fecha | 2026-09-18 |
| Estado | Vigente |
| Origen | report_auditor |

- **Contexto:** `F-025` (`R-020`, `Media`/`No bloqueante`) observa que `T-042` publica «seis ordenes»
  en su titulo, en su fila del indice y en la seccion 5 de `_audit/S-018.md`, mientras su propia
  enumeracion tiene ocho vinetas y su propia prosa dice «los ocho casos». Verificado vigente contra
  `HEAD` antes de tratarlo.
- **Decision:** se acepta. La cifra correcta es **ocho** —una vineta por caso a tratar— y se corrige
  **por nota fechada dentro de la ficha de `T-042`**, no reescribiendo el titulo ni la fila. La nota
  publica la orden que cuenta las vinetas y declara las tres lecturas posibles. Tarea: `T-043`.
- **Por que:** el titulo es el ancla del indice —reescribirlo rompe la navegacion— y ademas esta
  commiteado y auditado; cambiarlo convertiria «el registro se equivoco y lo dice» en «el registro
  nunca se equivoco». Que la cifra se derive, y no se teclee, es lo que impide que vuelva a pasar.
- **Por que OCHO y no siete ni nueve:** las tres lecturas son ciertas y cuentan cosas distintas. `8`
  son las vinetas, y es lo que la tarea trata: cada vineta es un caso con su decision propia. `7` son
  las ordenes que dejaron de reproducir **por desfase** — la octava vineta declara dos scripts no
  reproducibles **por construccion**, que no es un desfase. `9` son las ordenes contando esos dos
  scripts. Lo que la tarea enumera para tratarlos es la vineta, asi que la cifra de la tarea es `8`.
- **Alternativas descartadas:**
  - **Reescribir el titulo de `T-042` a «ocho»:** rompe el ancla del indice, y borra el error en vez
    de corregirlo. El proyecto ya fijo este criterio en `D-064` y `D-071`.
  - **Publicar `7`, la cifra que el propio hallazgo destaca:** `7` responde a otra pregunta —cuantas
    ordenes dejaron de reproducir— y dejaria la octava vineta fuera del recuento de una tarea que si
    tiene que tratarla.
- **Verificacion.** La enumeracion, contada en el arbol de trabajo:

  ```
  $ sed -n '/^### T-042 /,/^### T-038 /p' _persistence/tasks.md | grep -cE '^  - \*\*D-0'
  8
  $ grep -n 'T-042' _persistence/tasks.md | grep -oE 'seis' | wc -l
  3
  ```

  📌 **El `3` son las tres apariciones de «seis» que la nota NO borra:** dos en la fila del indice (el
  ancla y el titulo) y una en el encabezado de la ficha. Siguen ahi a proposito.

- **Criterio de cierre:**
  1. **Enunciado:** a ese commit, la ficha de `T-042` lleva su nota y las ocho vinetas.
  2. **Ordenes:**
     ```
     git show d80a965:_persistence/tasks.md | sed -n '/^### T-042 /,/^### T-038 /p' | grep -cE '^  - \*\*D-0'
     git show d80a965:_persistence/tasks.md | grep -c 'la cifra correcta es OCHO'
     ```
  3. **Salidas:**
     ```
     8
     2
     ```

  📌 **El `2` es `LG-101`:** la nota y la linea de la orden de `T-043` que la cita.

  📌 **Ancladas por el Paso 7c-bis al commit `d80a965`.** Las dos reproducen lo publicado arriba.

### D-076 - F-026 se acepta, y los dos hashes de la NOTA DE CIERRE pasan a derivarse
| Campo | Valor |
|---|---|
| Fecha | 2026-09-18 |
| Estado | Vigente |
| Origen | report_auditor |

- **Contexto:** `F-026` (`R-020`, `Media`/`No bloqueante`) observa que la NOTA DE CIERRE de
  `_audit/S-018.md` nombra `ed64348` como commit de anclaje **y** como commit de sesion. Solo lo
  segundo es cierto: el anclaje esta en `a22ef55`. Verificado vigente contra `HEAD` antes de tratarlo.
- **Decision:** se acepta en sus dos mitades. **La primera:** nota fechada bajo la NOTA DE CIERRE que
  declara `a22ef55` como commit de anclaje y `ed64348` como commit de sesion, con los dos derivados,
  sin reescribir la linea original. **La segunda:** la plantilla de la NOTA DE CIERRE de
  `protocol-close` exige ahora **derivar** los dos hashes con `git rev-parse --short HEAD` y `HEAD^`
  despues del commit de anclaje, en vez de teclearlos. Tarea: `T-044`.
- **Por que la segunda mitad no es opcional:** corregir el caso que cita un hallazgo sin poner el
  control deja el defecto reapareciendo. Es `L-019`, la leccion que esta misma etapa promovio como
  enmienda de `LG-100`, y aplicarla aqui es literalmente su primer uso. Dos hashes tecleados a mano
  salen iguales con facilidad; derivados, no pueden.
- **Por que `HEAD` y `HEAD^` y no dos ordenes cualesquiera:** el commit de anclaje no existe mientras
  se redacta la nota —ese es el huevo-y-gallina que el Paso 7c ya resolvia para el informe—, asi que
  los dos se leen **despues** de commitear el anclaje, y entonces son exactamente `HEAD` y su padre.
- **Alternativas descartadas:**
  - **Solo la nota fechada, sin tocar la skill:** deja el defecto listo para repetirse en el cierre
    siguiente, y el hallazgo volveria con otro numero.
  - **Solo la regla, sin la nota:** el informe de `S-018` seguiria afirmando algo falso sobre su propia
    trazabilidad, y esta commiteado: nadie lo corregiria despues.
  - **Reescribir la linea original del informe:** convertiria «falta evidencia» en «hay evidencia
    falsa», esta vez sin nadie que lo note.
- **Verificacion.** Los dos hashes, derivados con las dos ordenes que la skill pasa a exigir:

  ```
  $ git rev-parse --short a22ef55
  a22ef55
  $ git rev-parse --short a22ef55^
  ed64348
  ```

  Y la prueba de que la nota no pudo nacer en el commit que se atribuia:

  ```
  $ git show ed64348:_audit/S-018.md | grep -c 'NOTA DE CIERRE — commit de anclaje'
  0
  $ git show a22ef55:_audit/S-018.md | grep -c 'NOTA DE CIERRE — commit de anclaje'
  1
  ```

- **Criterio de cierre:**
  1. **Enunciado:** a ese commit, el informe lleva su nota y la skill exige derivar los dos hashes.
  2. **Ordenes:**
     ```
     git show d80a965:_audit/S-018.md | grep -c 'el commit de anclaje es `a22ef55`'
     git show d80a965:.claude/skills/protocol-close/SKILL.md | grep -c 'se DERIVAN con una'
     ```
  3. **Salidas:**
     ```
     1
     1
     ```

  📌 **Ancladas por el Paso 7c-bis al commit `d80a965`.** Las dos reproducen lo publicado arriba.

### D-077 - F-027 se acepta y se corrige ahora: el control aprende el formato Ordenes/Salidas
| Campo | Valor |
|---|---|
| Fecha | 2026-09-18 |
| Estado | Vigente |
| Origen | report_auditor |

- **Contexto:** `F-027` (`R-020`, `Media`/`No bloqueante`) observa que la funcion `salidas()` del
  CONTROL DE SALIDA REPRODUCIDA (Paso 7c-bis de `protocol-close`) solo excluye del computo las lineas
  con prefijo `$ `, y que las decisiones de este proyecto ya no usan ese prefijo: escriben el criterio
  en tres puntos, con una cerca `**Ordenes:**` y otra `**Salidas:**`. El control clasificaba cada
  orden como si fuera una salida. Verificado vigente contra `HEAD`, y **empeorando**.
- **Decision:** se acepta y **se corrige ahora, no se aplaza a `DT-XXX`**. `salidas()` reconoce las dos
  etiquetas: de una cerca precedida de `**Ordenes:**` no extrae nada, de una precedida de
  `**Salidas:**` lo extrae todo, y una cerca sin etiqueta conserva el comportamiento anterior. Se
  actualiza tambien la prosa que describe el control. Tarea: `T-045`.
- **Por que ahora y no como deuda:** el defecto **crece solo**. Diez ordenes coladas en el commit
  auditado, dieciseis al empezar esta sesion — y las seis nuevas son de las decisiones que esta misma
  jornada escribio. Una deuda que se paga mas cara cada dia no es una deuda que convenga aplazar. Y el
  7c-bis es obligatorio: un control que siempre avisa deja de leerse, lo dice la convencion de
  `findings.md`, y entonces el cierre da por revisado lo que no reviso.
- **Que NO cambia:** el control sigue comparando texto y **sigue sin reejecutar ninguna orden**. Esa
  limitacion es `DT-002` y no se toca aqui.
- **Alternativas descartadas:**
  - **Registrarlo como `DT-XXX` y aplazarlo**, que es la segunda mitad de lo que el hallazgo propone:
    se descarta porque el coste sube con cada decision nueva y el arreglo cabe en una condicion del
    `awk`. Aplazar habria sido mas caro que hacerlo.
  - **Obligar a todas las decisiones a volver al prefijo `$ `:** el formato en tres puntos es mejor
    —separa orden de salida sin ambiguedad— y cambiarlo obligaria a reescribir entradas commiteadas.
    Se adapta el control al registro, no el registro al control.
  - **Prohibir una de las dos formas hacia adelante:** las dos conviven en entradas ya commiteadas, asi
    que el control tiene que entender las dos de todas formas.
- **Verificacion.** La funcion **copiada literalmente del archivo**, contra el registro entero:

  ```
  $ eval "$(grep -m1 '^salidas() {' .claude/skills/protocol-close/SKILL.md)"
  $ salidas < _persistence/decisions.md | grep -c 'git show'
  1
  $ salidas < _persistence/decisions.md | grep 'git show'
  D-008 | T-001 |   $ git show <hash>:project.md | grep -cE '<[A-Za-z]'
  ```

  📌 **El `1` no es una orden colada: es una salida legitima.** Lo que `D-008` publica como salida es,
  a su vez, una linea de `T-001` que contiene `$ git show`. La orden que la produjo devolvio ese texto,
  asi que cuenta como salida y tiene que entrar en la comparacion.

  📌 **Antes del arreglo esa misma orden devolvia `16`**, y devolvia `10` sobre el commit que la
  auditoria juzgo. La diferencia entre `16` y `1` es lo que el control dejaba de distinguir.

- **Criterio de cierre:**
  1. **Enunciado:** a ese commit, la skill lleva la condicion de etiqueta y la prosa que la explica.
  2. **Ordenes:**
     ```
     git show d80a965:.claude/skills/protocol-close/SKILL.md | grep -c 'm!="O"'
     git show d80a965:.claude/skills/protocol-close/SKILL.md | grep -c 'los dos formatos'
     ```
  3. **Salidas:**
     ```
     1
     1
     ```

  📌 **Ancladas por el Paso 7c-bis al commit `d80a965`.** Las dos reproducen lo publicado arriba.

### D-078 - L-021 no sube: ya cubierta por LG-32, sexta pasada de la cosecha de 005_discovery
| Campo | Valor |
|---|---|
| Fecha | 2026-09-18 |
| Estado | Vigente |
| Origen | manager |

- **Contexto:** al corregir los tres hallazgos de `R-020` nacio `L-021`, y nacio **despues** de que el
  patrocinador firmara el acta de cierre de la etapa (`D-074`). Una leccion nueva con `Portabilidad`
  en `Sin evaluar` deja falsa la septima casilla de la condicion de salida de `005_discovery`
  —«ninguna leccion de esta etapa queda `Sin evaluar`»— en el arbol de trabajo. El patrocinador fijo
  la condicion: no hacer nada que afecte al cierre ya firmado.
- **Decision:** sexta pasada de `protocol-harvest` sobre `005_discovery`, con **una sola candidata**.
  `L-021` se clasifica **`Ya cubierta por LG-32`** y **no sube**. No hay `Global candidata`, asi que la
  puerta del Paso 5 no tiene nada que aprobar y el Paso 6 **no se ejecuta**: el repositorio de
  lecciones globales **no se toca**, sigue en la version 7 y en el commit `e915383`.
- **Por que no sube — el filtro concreto es el 4:** `LG-32` ya dice, literal, «Si existe la orden que
  produce el dato, se pega la orden y su salida, no el dato», y ya recoge el angulo de la confianza
  —«conocer la forma del fallo no protege de cometerlo cuando la cifra se escribe de memoria»—. El
  mecanismo concreto de los dos errores de esta sesion —que la linea de la propia orden contiene el
  literal que busca— es `LG-101` palabra por palabra. Las dos mitades de `L-021` ya estan; no es ni
  entrada nueva ni cara nueva que enmendar.
- **Por que se registra igual en `lessons.md`:** una leccion que no sube **no se borra**. Es el
  aprendizaje de esta sesion y explica por que dos cifras se corrigieron antes de commitear; sin ella,
  el commit muestra las cifras buenas y nadie sabe que estuvieron mal.
- **La tension de orden, declarada:** `protocol-harvest` dice que la cosecha va **antes** de la firma
  del patrocinador, y esta va despues. Se hace igual, y el motivo es que la razon escrita de esa regla
  —«hecha despues de firmar, esa casilla no se podria marcar nunca»— no aplica aqui: la casilla **si**
  se marco, verificada por el acta sobre `d09abc6`, donde era cierta, y `L-021` no existia entonces.
  Esta pasada no marca ninguna casilla: devuelve el arbol al estado que el acta ya dictamino.
- **Que NO cambia:** el acta, su dictamen y la firma del patrocinador. Ninguna de las tres se toca, y
  esta decision no las revisa.
- **Alternativas descartadas:**
  - **Dejar `L-021` en `Sin evaluar` hasta la cosecha de la etapa siguiente:** dejaria una etapa
    cerrada con una leccion suya sin clasificar, y el registro afirmando dos cosas a la vez.
  - **Reasignar la `Etapa` de `L-021` a la etapa siguiente para que no cuente:** la etapa siguiente no
    ha empezado, y mover la etiqueta para esquivar una casilla es exactamente lo que vacia de sentido
    a la casilla.
  - **Borrar `L-021`:** una leccion que no sube no se borra; ese es el motivo de que la columna
    `Portabilidad` exista y tenga tres valores y no dos.
- **Verificacion.** El barrido del Paso 1, y el contraste del Paso 3 (una candidata, una fila
  clasificada):

  ```
  $ grep -E '^\| \[L-' _persistence/lessons.md | grep '005_discovery' | grep -c 'Sin evaluar'
  0
  $ grep -E '^\| \[L-' _persistence/lessons.md | grep -c 'Global candidata'
  0
  ```

  📌 **El primer `0` es el de DESPUES de clasificar.** Antes de esta pasada esa misma orden devolvia
  `1`, que es la candidata de la que habla esta decision.

  Y que el repositorio de lecciones globales no se toco:

  ```
  $ git -C "C:/Users/USUARIO/Documents/Company_TripleS/TripleS_Lessons" rev-parse --short HEAD
  e915383
  $ git -C "C:/Users/USUARIO/Documents/Company_TripleS/TripleS_Lessons" status --short
  ```

  📌 **La segunda orden no devuelve nada, y es lo que se afirma:** arbol limpio, ni un archivo tocado.
  El hash es el mismo que declaro `D-072`.

- **Criterio de cierre:**
  1. **Enunciado:** a ese commit, ninguna leccion de `005_discovery` queda `Sin evaluar`, ninguna queda
     `Global candidata`, y `L-021` remite a `LG-32`.
  2. **Ordenes:**
     ```
     git show d80a965:_persistence/lessons.md | grep -E '^\| \[L-' | grep '005_discovery' | grep -c 'Sin evaluar'
     git show d80a965:_persistence/lessons.md | grep -cE '^\| \[L-021\].*\| Ya cubierta por LG-32 \|'
     ```
  3. **Salidas:**
     ```
     0
     1
     ```

  📌 **Ancladas por el Paso 7c-bis al commit `d80a965`.** Las dos reproducen lo publicado arriba.

### D-079 - A-004 y A-005 se confirman: sus disparadores corrieron con el cierre de la etapa
| Campo | Valor |
|---|---|
| Fecha | 2026-09-18 |
| Estado | Vigente |
| Origen | manager |

- **Contexto:** al cerrar `005_discovery` (`D-074`), dos supuestos `Abierto` tenian su disparador atado
  a esa etapa. `A-004` —el patrocinador revisa cada salida de la IA antes de que entre al registro—
  disparaba «en el acta de cierre de la etapa», que es hoy. `A-005` —hay acceso a personas que conocen
  el proceso real— disparaba en el Paso 2 de la etapa (`T-029`), que ya esta `Implementada`. Un supuesto
  abierto cuyo disparador ya corrio, y que nadie mira, deja de ser un supuesto y pasa a ser un riesgo
  sin nadie que lo haya firmado.
- **Decision:** los dos pasan a `Confirmado`, cada uno con su nota fechada y su evidencia, en el indice
  y en la ficha. No se reescribe ningun enunciado ni ningun disparador: se anade la nota debajo.
- **Por que `A-004` queda confirmado:** se refutaba si alguna entrada llegaba al registro sin
  confirmacion explicita del patrocinador. Las nueve decisiones que adoptaron el contenido de los cuatro
  artefactos llevan `Origen: usuario`, y el acta de cierre no abrio ningun hallazgo sobre los artefactos.
- **Por que `A-005` queda confirmado:** el enunciado tenia dos ramas —acceso a terceros **o** el
  patrocinador es el mismo usuario del proceso— y lo que devolvio `T-029` es la segunda. El acta lo
  recogio al verificar el actor originador. No hubo que escalar nada: se refutaba solo si fallaban las
  dos ramas a la vez.
- **Que NO cambia:** `A-008` sigue `Abierto`. Su disparador es la primera linea de codigo del prototipo,
  en la etapa siguiente, y esa etapa no ha empezado. Cerrar `005_discovery` lo acerca, no lo dispara.
- **Alternativas descartadas:**
  - **Dejar los dos `Abierto` hasta la etapa siguiente:** sus disparadores ya corrieron. Un supuesto que
    sigue abierto despues de que su disparador corriera no espera a nadie, porque ya nadie tiene la
    obligacion de volver a el — la convencion del propio archivo lo llama riesgo abierto sin firma.
  - **Pasarlos a `Riesgo abierto`:** ese estado es para lo que **no se puede** verificar antes de
    necesitarlo. Estos dos si se pudieron, y se verificaron.
- **Verificacion.** Las dos ordenes de las notas, corridas en el arbol de trabajo:

  ```
  $ for d in 051 052 053 054 055 056 057 058 061; do sed -n "/^### D-$d /,/^- \*\*Contexto/p" _persistence/decisions.md | grep -c '^| Origen | usuario |'; done | sort -u
  1
  $ grep -cE '^\| \[T-029\].*\| Implementada \|' _persistence/tasks.md
  1
  ```

  📌 **El `1` unico de la primera es lo que se afirma:** las nueve fichas devuelven el mismo valor. Si
  alguna no llevara `Origen: usuario`, `sort -u` devolveria tambien un `0`.

- **Criterio de cierre:**
  1. **Enunciado:** a ese commit, los dos supuestos estan `Confirmado` en el indice y en la ficha, y
     `A-008` sigue `Abierto`.
  2. **Ordenes:**
     ```
     git show d80a965:_persistence/assumptions.md | grep -cE '^\| \[A-00[45]\].*\| Confirmado \|'
     git show d80a965:_persistence/assumptions.md | grep -cE '^\| \[A-008\].*\| Abierto \|'
     ```
  3. **Salidas:**
     ```
     2
     1
     ```

  📌 **Ancladas por el Paso 7c-bis al commit `d80a965`.** Las dos reproducen lo publicado arriba.

### D-080 - F-028 se acepta: la nota de anclaje declara donde vive, y el autorreferente queda prohibido
| Campo | Valor |
|---|---|
| Fecha | 2026-09-18 |
| Estado | Vigente |
| Origen | report_auditor |

- **Contexto:** `F-028` (`R-021`, `Media`/`No bloqueante`) observa que la nota fechada de
  `_audit/S-019.md` afirma, del commit de anclaje `70fe40c`, «este mismo, el que anadio esta nota».
  La nota no esta en `70fe40c`: entro en un tercer commit, `e610906`. Verificado vigente contra
  `HEAD` antes de tratarlo.
- **Decision:** se acepta en sus dos mitades. **La primera:** una nota fechada mas bajo la anterior,
  que declare que la nota de anclaje vive en `e610906`, con el hash derivado, sin reescribir ninguna
  linea previa. **La segunda:** la plantilla de la NOTA DE CIERRE de `protocol-close` prohibe el
  autorreferente —«este mismo commit», «el que anadio esta nota»— dentro de una nota que se redacta
  **antes** del commit que la contiene. Tarea: `T-047`.
- **Por que la nota nueva no reintroduce el defecto:** la anterior fallo por afirmar algo sobre **su
  propio** commit, que todavia no existia al redactarla. La nueva afirma algo sobre un commit
  **anterior y ya existente** (`e610906`), asi que el hecho es comprobable en el momento de
  escribirlo. Eso corta la recursion: no hace falta una cuarta pasada.
- **Por que la segunda mitad no es opcional:** `D-076` puso el control sobre *que hashes* se
  escriben, y funciono —los dos que la nota publica son correctos—; lo que quedo sin control es *a
  que commit se atribuye la nota*. Corregir solo el caso deja el mismo hueco abierto para el cierre
  siguiente, que es `L-019` otra vez.
- **Alternativas descartadas:**
  - **Reescribir el parentesis de la linea 289:** convertiria «falta evidencia» en «hay evidencia
    falsa», que es justo lo que las notas fechadas existen para no hacer.
  - **Solo la nota, sin tocar la skill:** el autorreferente es comodo de escribir y volvera en el
    proximo anclaje; el hallazgo volveria con otro numero.
  - **Solo la regla, sin la nota:** `_audit/S-019.md` seguiria afirmando algo comprobablemente falso
    sobre su propia trazabilidad, ya commiteado.
  - **Exigir un cuarto commit que se autorreferencie bien:** imposible por construccion — una nota no
    puede nombrar el commit que aun no la contiene. El problema no es el numero de pasadas, es el
    autorreferente.
- **Verificacion.** La nota no esta en el commit que se atribuye, y si en el siguiente:

  ```
  $ git show 70fe40c:_audit/S-019.md | grep -c 'NOTA 2026-09-18 — el commit de anclaje es'
  0
  $ git show e610906:_audit/S-019.md | grep -c 'NOTA 2026-09-18 — el commit de anclaje es'
  1
  ```

  Y el hash derivado como lo derivara la nota nueva, sobre el arbol de trabajo en `HEAD` (`00f09e1`):

  ```
  $ git log -1 --format=%h -- _audit/S-019.md
  e610906
  ```

- **Criterio de cierre:** `manager` escribe la nota fechada en `_audit/S-019.md` declarando
  `e610906` como commit que contiene la nota de anclaje, y anade a la plantilla de la NOTA DE CIERRE
  de `protocol-close` la prohibicion del autorreferente. Mientras `T-047` este `No implementada`, el
  criterio es prosa: sus ordenes se publicaran ancladas en la sesion que la implemente.

### D-081 - F-029 se acepta: la fila de firma se instancia a D-074 y el control de huecos ve los codigos genericos
| Campo | Valor |
|---|---|
| Fecha | 2026-09-18 |
| Estado | Vigente |
| Origen | report_auditor |

- **Contexto:** `F-029` (`R-021`, `Baja`/`No bloqueante`) observa que la seccion 5.2 del acta
  `_audit/005_discovery/005_phase_exit_record_001.md` dejo la fila «Donde queda registrada» con el
  `D-XXX` generico de la plantilla, sin instanciar a `D-074`. Verificado vigente contra `HEAD` antes
  de tratarlo.
- **Decision:** se acepta en sus dos mitades. **La primera:** instanciar la fila a `D-074`, siguiendo
  la forma que el acta de `000_preproject` ya establecio. **La segunda:** el control de huecos del
  acta, en `protocol-phase-exit`, pasa a barrer tambien los codigos genericos sin instanciar
  —`D-XXX`, `T-XXX`, `F-NNN`— sobre las secciones de firma. Tarea: `T-048`.
- **Por que esto no es «reescribir el registro»:** la fila no afirma nada falso ni publica una
  salida: es un hueco que quedo con el texto de la plantilla. Instanciarlo anade el puntero que
  faltaba, no cambia un hecho ya afirmado. Es la misma clase de reparacion que `T-010` hizo sobre la
  tabla 5.2 del acta anterior.
- **Por que la segunda mitad no es opcional:** el control existente busca `<en blanco>` y esta fila
  nunca llevo ese marcador, asi que **paso el control estando sin rellenar**. Un control que no ve el
  defecto que acaba de ocurrir no protege al acta siguiente; y toda plantilla agnostica deja codigos
  genericos por construccion, asi que el caso se repetira en cada etapa que cierre.
- **Alternativas descartadas:**
  - **Solo instanciar la fila:** deja el control ciego al mismo defecto en la siguiente acta, que es
    el unico sitio donde volveria a ocurrir.
  - **Corregir la plantilla para que no lleve `D-XXX`:** la plantilla debe llevarlo — es el hueco. El
    defecto esta en no rellenarlo al copiar, no en que exista.
  - **Barrer los codigos genericos en todo el acta:** produciria falsos positivos donde el acta cita
    la forma de un codigo legitimamente; se acota a las secciones de firma, que es donde el hueco es
    siempre un hueco.
- **Verificacion.** La fila de la instancia es identica a la de la plantilla, y el acta anterior si
  la instancio:

  ```
  $ sed -n '/^| Donde queda/p' _audit/005_discovery/005_phase_exit_record_001.md
  | Donde queda registrada | `_persistence/decisions.md`, con su `D-XXX` |
  $ sed -n '/^| Donde queda/p' _templates/phase_exit_record.md
  | Donde queda registrada | `_persistence/decisions.md`, con su `D-XXX` |
  $ sed -n '/^| Donde queda/p' _audit/000_preproject/005_phase_exit_record_001.md
  | Donde queda registrada | `_persistence/decisions.md`, con `D-015` (decision) y `D-020` (firma escrita en esta tabla) |
  ```

  Y `D-074` existe y es el codigo que la fila debe citar:

  ```
  $ grep -c '^### D-074 - El patrocinador firma el acta y 005_discovery queda cerrada' _persistence/decisions.md
  1
  ```

- **Criterio de cierre:** `manager` instancia la fila 5.2 del acta a `D-074` y amplia el control de
  huecos de `protocol-phase-exit` a los codigos genericos de las secciones de firma. Mientras `T-048`
  este `No implementada`, el criterio es prosa: sus ordenes se publicaran ancladas en la sesion que
  la implemente.

### D-082 - Promocion al esqueleto de arranque de los seis candidatos del desfase
| Campo | Valor |
|---|---|
| Fecha | 2026-09-18 |
| Estado | Vigente |
| Origen | usuario |

- **Contexto:** el usuario pide promover. El barrido del Paso 1 mide **seis diferencias**: cuatro
  archivos que difieren (`.claude/agents/session-closer.md`,
  `.claude/skills/protocol-close/SKILL.md`, `_templates/005_discovery/015_stakeholders.md`,
  `_workflow/005_discovery.md`) y dos carpetas que solo existen aqui (`.claude/checks/`,
  `.claude/hooks/`). **Cero** diferencias en la direccion del esqueleto: sin hallazgos.
- **Decision:** se promueven **los seis**, aprobados por el usuario en la puerta del Paso 5. Commit
  del esqueleto `5b3fb6e`, desde el origen `00f09e1` de este repositorio.
- **Lo que `manager` recomendo, y por que la recomendacion estaba mal fundada:** recomendo dejar
  fuera `session-closer.md` y `.claude/hooks/` alegando que son el producto de `T-032`, que sigue
  `No implementada`, y que por tanto el mecanismo **no estaba ejercitado**. 🚨 **Esa segunda mitad es
  falsa, y se detecto al revisar `_persistence/` antes del cierre de esta misma sesion.** El
  mecanismo si esta ejercitado: `A-006` y `A-007` estan `Confirmado`, y `A-007` probo **los dos
  casos** —skill ajena bloqueada y `protocol-close` cargando— dentro de un agente con la cabecera
  literal de `session-closer`, con la salida cruda pegada en su ficha.
- **Que sigue realmente pendiente en `T-032`, que no es lo mismo:** su criterio de cierre **literal**
  dice «`A-006` confirmado **tras reiniciar Claude Code**», y no hubo reinicio: la sonda `hook-probe`
  aparecio disponible sin el. La nota de `session-closer` en esa tarea deja dicho que, si `D-050` se
  toma como reemplazo valido de ese criterio, hace falta que `manager` lo escriba asi. Mientras no lo
  escriba, la tarea sigue `No implementada` — pero eso es una casilla formal sin cerrar, **no un
  mecanismo sin probar**.
- **Por que se registra el error en vez de corregirlo en silencio:** la recomendacion equivocada se
  presento al usuario en la puerta del Paso 5, que es donde se decide lo que se hereda hacia
  adelante. Se le dio una razon para dudar que no se sostenia. El usuario aprobo «todo» de todas
  formas —y esa aprobacion resulto ser la correcta—, pero lo que hay que conservar es que **la puerta
  se contesto sobre una premisa falsa**.
- ⚠️ **El mensaje del commit `5b3fb6e` del esqueleto arrastra esa misma afirmacion, y no se
  reescribe.** Dice que la tarea «sigue No implementada — su verificacion exige un reinicio real de
  Claude Code — y el esqueleto recibe andamiaje ya ejercitado». Reescribir historia en el esqueleto
  esta prohibido por el protocolo, y ademas convertiria «falta evidencia» en «hay evidencia falsa».
  **Esta entrada es la correccion**, y es a donde lleva el puntero del hash de origen que ese commit
  cita. Lo que el commit afirma de mas es el juicio, no los hechos: los seis archivos que nombra y
  las cifras que publica son correctos.
- **Por que los dos del lote no ejercitado van juntos:** la cabecera de `session-closer.md`
  referencia `node .claude/hooks/allow-only-skill.js`. Promover uno sin el otro dejaria el esqueleto
  declarando un hook inexistente.
- **Las lineas que la promocion borro en el esqueleto, leidas una a una (Paso 2):** seis en total.
  Cuatro en `protocol-close/SKILL.md` (la version anterior de `salidas()`, el `awk` anterior del
  control indice/ficha y dos lineas de prosa del CONTROL DE SALIDA REPRODUCIDA), una en
  `015_stakeholders.md` y una en `_workflow/005_discovery.md` (las dos, «seis condiciones/casillas»
  sustituido por «siete»). **Todas eran versiones anteriores de parrafos ya reescritos aqui:** el
  supuesto del sentido unico se sostiene tambien en esta pasada. `session-closer.md` y las dos
  carpetas nuevas no borraron ninguna linea.
- **Alternativas descartadas:**
  - **Promover solo el lote ejercitado:** era la recomendacion de `manager`; el usuario decidio lo
    contrario y esa eleccion es suya.
  - **Mejorar algo de paso en el esqueleto:** prohibido por el protocolo — alli no corre ningun cierre
    ni ningun auditor, asi que seria una mejora que nadie ha ejercitado ni revisado.
  - **Esperar a commitear antes la evaluacion de `F-028`/`F-029`:** esos tres archivos estan fuera de
    las seis areas agnosticas y no entran en ninguna promocion; el disparador del Paso 0 se cumplia.
- **Verificacion.** Los finales de linea, medidos por pareja antes de copiar: los dos archivos de
  `.claude/` estaban en CRLF aqui y en LF alli, y se convirtieron a LF (el final del destino); los
  demas coincidian. En el destino, tras copiar:

  ```
  $ tr -dc '\r' < "$ESQ/.claude/agents/session-closer.md" | wc -c
  0
  $ tr -dc '\r' < "$ESQ/.claude/skills/protocol-close/SKILL.md" | wc -c
  0
  ```

  Los tres barridos del Paso 3, con sus patrones y sobre las seis areas:

  ```
  $ git grep -nE "YouOtto|Company_TripleS|github\.com" -- .claude CLAUDE.md _phases _methodology _templates _workflow
  (sin salida)
  $ git grep -noE '\b[A-Z]{1,2}-[0-9]+\b' -- _phases _workflow | grep -vE ':PI-[0-9]+$'
  (sin salida)
  $ git grep -nE "C:\\|C:/|/Users/|/home/|USUARIO|jdrodriguez|@gmail|SDAI_TripleS|[Bb]aloto|localhost|https?://|[0-9]{1,3}(\.[0-9]{1,3}){3}" -- .claude CLAUDE.md _phases _methodology _templates _workflow
  _templates/010_prototype/025_business_validation.md:14:> 🚨 **SESION APARTE, CON EL PATROCINADOR, SIN USUARIOS DELANTE.**
  ```

  📌 **La unica linea del tercero es un falso positivo declarado:** `USUARIOS` es la palabra, no el
  segmento de la ruta `C:\Users\USUARIO`. El patron se publica entero porque un barrido sin su patron
  no es reproducible; el enunciado que sostiene es «esos patrones, en esas seis areas, no devuelven
  ningun dato propio».

  El Paso 1b sobre el commit del esqueleto, plantilla y copia leidas las dos de `5b3fb6e`:

  ```
  $ for p in 005_project.md:project.md 010_progress.md:_persistence/progress.md 015_tasks.md:_persistence/tasks.md 020_decisions.md:_persistence/decisions.md 025_constraints.md:_persistence/constraints.md 030_assumptions.md:_persistence/assumptions.md 035_lessons.md:_persistence/lessons.md 040_techdebt.md:_persistence/techdebt.md 045_audit_index.md:_audit/index.md 050_audit_findings.md:_audit/findings.md; do t=${p%%:*}; c=${p#*:}; printf '%3d  %s\n' "$(diff --strip-trailing-cr <(git -C "$ESQ" show "5b3fb6e:_templates/000_preproject/$t") <(git -C "$ESQ" show "5b3fb6e:$c") | grep -c '^[<>]')" "$c"; done
    0  project.md
    0  _persistence/progress.md
    0  _persistence/tasks.md
    0  _persistence/decisions.md
    0  _persistence/constraints.md
    0  _persistence/assumptions.md
    0  _persistence/lessons.md
    0  _persistence/techdebt.md
    0  _audit/index.md
    0  _audit/findings.md
  ```

  Ninguna plantilla de las diez estaba entre los candidatos, asi que ninguna copia quedo por detras.

  Y el barrido del Paso 1 corrido **despues** de promover, que es lo que demuestra que el desfase
  cerro:

  ```
  $ for d in .claude _phases _methodology _templates _workflow; do diff -rq --strip-trailing-cr "$ESQ/$d" "$d"; done; diff -q --strip-trailing-cr "$ESQ/CLAUDE.md" CLAUDE.md
  (sin salida)
  ```

  El commit del esqueleto y su push:

  ```
  $ git -C "$ESQ" log --oneline -1
  5b3fb6e promocion desde el proyecto YouOtto (origen 00f09e1)
  $ git -C "$ESQ" status -sb
  ## main...origin/main
  ```

- **Criterio de cierre:**
  1. **Enunciado:** a ese commit, el registro de este repositorio cita los dos hashes de la promocion.
  2. **Ordenes:**
     ```
     git show 7b0c48f:_persistence/decisions.md | grep -c 'Commit del esqueleto `5b3fb6e`'
     git show 7b0c48f:_persistence/decisions.md | grep -c 'desde el origen `00f09e1`'
     ```
  3. **Salidas:**
     ```
     1
     1
     ```

     **Salida anclada (Paso 7c-bis, commit `7b0c48f`):**
     ```
     1
     2
     ```

📌 **Ancladas por el Paso 7c-bis al commit `7b0c48f`. La primera orden reproduce; la segunda no.**
La segunda publica `1` y la version anclada devuelve `2`: la cadena buscada, «desde el origen
`00f09e1`», aparece tambien dentro de su propio bloque «Ordenes» — la orden se hace match a si
misma. No se corrige aqui: la discrepancia queda con las dos salidas a la vista, para que `manager`
la trate en la sesion siguiente.
