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
| [A-001](#a-001---los-juegos-registrados-pueden-ser-datos-de-personas) | Los juegos registrados pueden ser datos de personas | 2026-09-15 | Refutado |
| [A-002](#a-002---los-agentes-de-gate-y-de-acta-se-cargan-al-reiniciar-claude-code) | Los agentes de Gate y de acta se cargan al reiniciar Claude Code | 2026-09-15 | Refutado |
| [A-003](#a-003---con-la-cabecera-yaml-valida-los-agentes-de-gate-y-de-acta-cargan) | Con la cabecera YAML valida, los agentes de Gate y de acta cargan | 2026-09-15 | Confirmado |
| [A-004](#a-004---el-patrocinador-revisa-cada-salida-de-la-ia-antes-de-que-entre-al-registro) | El patrocinador revisa cada salida de la IA antes de que entre al registro | 2026-09-17 | Confirmado |
| [A-005](#a-005---hay-acceso-a-personas-que-conocen-el-proceso-real-ademas-del-patrocinador) | Hay acceso a personas que conocen el proceso real, ademas del patrocinador | 2026-09-17 | Confirmado |
| [A-006](#a-006---el-hook-de-la-cabecera-de-session-closer-se-dispara-dentro-del-agente) | El hook de la cabecera de session-closer se dispara dentro del agente | 2026-09-17 | Confirmado |
| [A-007](#a-007---la-cabecera-exacta-de-session-closer-deja-pasar-protocol-close-y-bloquea-las-demas-skills) | La cabecera exacta de session-closer deja pasar protocol-close y bloquea las demas skills | 2026-09-17 | Confirmado |
| [A-008](#a-008---las-condiciones-de-uso-de-baloto-permiten-leer-su-historico-de-forma-automatica) | Las condiciones de uso de Baloto permiten leer su historico de forma automatica | 2026-09-17 | Confirmado |

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

### A-001 - Los juegos registrados pueden ser datos de personas
| Campo | Valor |
|---|---|
| Fecha | 2026-09-15 |
| Estado | Refutado |
| Origen | manager |
| Dueno | manager |

- **Supuesto:** el historial de juegos registrados que describe el encargo («el historial de juegos
  registrados del usuario», `_brief/client_brief.md`, linea 294) puede quedar asociado a personas
  identificables, y entonces seria un dato de personas.
- **Sobre que se construye encima:** la nota de seguridad de `D-007` y la aplicacion de `C-001`
  (recoger datos de personas exige permiso previo) al diseño del registro de juegos.
- **Como se refuta:** en `005_discovery`, la identificacion de actores deja escrito si hay un solo
  usuario sin cuenta ni identidad guardada (se refuta) o varios usuarios identificables (se
  confirma y pasa a `constraints.md`).
- **Disparador:** la clasificacion de actores de `005_discovery` (`_templates/005_discovery/010_actors.md`).
- 🕐 **Nota 2026-09-17 (refutado, `D-056`):** el disparador se cumplio al clasificar los actores
  (`D-055`). Hay un solo usuario, el propio patrocinador, y el decide que la aplicacion **no guardara
  ningun dato personal, identidad, usuario, contrasena ni correo**: nada que identifique a una persona.
  Sin identidad guardada, el historial de juegos no queda asociado a nadie identificable, asi que el
  supuesto queda **refutado** y no pasa a `constraints.md` como dato de personas. Lo que si entra alli,
  por decision del patrocinador, es el limite de no recoger ninguno (`C-005`).

### A-002 - Los agentes de Gate y de acta se cargan al reiniciar Claude Code
| Campo | Valor |
|---|---|
| Fecha | 2026-09-15 |
| Estado | Refutado |
| Origen | manager |
| Dueno | manager |

- **Supuesto:** `phase_exit_auditor`, `gate1_auditor` y `gate2_auditor` existen en `.claude/agents/`
  pero no aparecian entre los agentes que esta sesion podia lanzar; se supone que es porque se
  cargan al arrancar Claude Code y aparecen tras reiniciarlo.
- **Sobre que se construye encima:** el plan de cierre de `000_preproject`, cuyo acta la emite
  `phase_exit_auditor`.
- **Como se refuta:** tras reiniciar Claude Code, `phase_exit_auditor` sigue sin figurar entre los
  agentes disponibles; entonces el defecto esta en la definicion del agente, no en la carga.
- **Disparador:** la primera sesion tras reiniciar Claude Code, y en todo caso antes de lanzar el
  acta de cierre de `000_preproject`.
- 🕐 **Nota 2026-09-15: refutado.** El usuario confirmo que habia reiniciado Claude Code antes de esta
  sesion, y en ella los agentes lanzables del proyecto siguen siendo solo `session-starter`,
  `session-closer` y `report_auditor`. La causa esta en la definicion y es comprobable. En los tres
  agentes que faltan, la `description` de la cabecera va sin comillas y contiene `NO decision: …`.
  Ese `: ` hace invalido el YAML, y los tres que si cargan no lo llevan. Verificado contra `HEAD`
  (`45e33a4`):

  ```
  $ git grep -nE "^description:.*: " 45e33a4 -- .claude/agents | cut -d: -f1-3
  45e33a4:.claude/agents/gate1_auditor.md:3
  45e33a4:.claude/agents/gate2_auditor.md:3
  45e33a4:.claude/agents/phase_exit_auditor.md:3
  $ for a in gate1_auditor gate2_auditor phase_exit_auditor report_auditor session-closer session-starter; do printf '%s ' $a; git show 45e33a4:.claude/agents/$a.md | python -c "import sys,re,yaml; s=sys.stdin.read(); fm=re.match(r'^---\r?\n(.*?)\r?\n---',s,re.S).group(1); yaml.safe_load(fm); print('OK')" 2>&1 | grep -E '^(OK|yaml\.)' ; done
  gate1_auditor yaml.scanner.ScannerError: mapping values are not allowed here
  gate2_auditor yaml.scanner.ScannerError: mapping values are not allowed here
  phase_exit_auditor yaml.scanner.ScannerError: mapping values are not allowed here
  report_auditor OK
  session-closer OK
  session-starter OK
  ```

  ⚠️ El defecto viene del esqueleto de arranque: su `HEAD` (`707d572`) trae las tres cabeceras con el
  mismo `: `. Corregirlo no depende de este supuesto, y queda pendiente de decision del usuario.

  ```
  $ git -C "C:/Users/USUARIO/Documents/Company_TripleS/SDAI_TripleS" grep -nE "^description:.*: " 707d572 -- .claude/agents | cut -d: -f1-3
  707d572:.claude/agents/gate1_auditor.md:3
  707d572:.claude/agents/gate2_auditor.md:3
  707d572:.claude/agents/phase_exit_auditor.md:3
  ```

### A-003 - Con la cabecera YAML valida, los agentes de Gate y de acta cargan
| Campo | Valor |
|---|---|
| Fecha | 2026-09-15 |
| Estado | Confirmado |
| Origen | manager |
| Dueno | manager |

- **Supuesto:** el YAML invalido de la cabecera era la unica causa de que `gate1_auditor`,
  `gate2_auditor` y `phase_exit_auditor` no aparecieran, y con la correccion de `D-009` cargan tras
  reiniciar Claude Code.
- **Sobre que se construye encima:** el acta de cierre de `000_preproject`, que emite
  `phase_exit_auditor`, y los dos Gates adoptados en `D-003`.
- **Como se refuta:** en la primera sesion tras reiniciar con `D-009` ya aplicada, alguno de los tres
  sigue sin figurar entre los agentes lanzables. Entonces hay otra causa, y la validacion YAML no
  bastaba para detectarla.
- **Disparador:** la primera sesion tras reiniciar Claude Code con `D-009` aplicada, y en todo caso
  antes de lanzar el acta de cierre de `000_preproject`.
- 🕐 **Nota 2026-09-15: confirmado, antes del disparador previsto.** En esta misma sesion, sin
  reiniciar y despues de aplicar `D-009`, Claude Code anuncio como lanzables `gate1_auditor`,
  `gate2_auditor` y `phase_exit_auditor`, con la `description` ya corregida (`NO decision — …`).
  Recargo los archivos al cambiar, asi que el reinicio no hacia falta. La correccion queda en `D-009`.
  ⚠️ **Lo que no se puede anclar:** que agentes estan disponibles en una sesion no deja rastro en el
  repositorio. La evidencia es el aviso de la propia sesion, igual que lo fue la refutacion de `A-002`.

### A-004 - El patrocinador revisa cada salida de la IA antes de que entre al registro
| Campo | Valor |
|---|---|
| Fecha | 2026-09-17 |
| Estado | Abierto |
| Origen | manager |
| Dueno | JD Rodriguez (patrocinador) |

- **Supuesto:** toda necesidad, actor, interesado o hipotesis que `manager` proponga en `005_discovery`
  la lee y la valida el patrocinador antes de que entre a un artefacto o al registro.
- **Sobre que se construye encima:** el nivel 0–1 de IA para el trabajo de la etapa y la discrepancia
  de §6 aceptada en `D-044`. Sin esa revision, la variabilidad alta de la entrada pide otro nivel.
- **Como se refuta:** al escribir cada artefacto de la etapa, `manager` comprueba que cada entrada tiene
  una confirmacion explicita del patrocinador en la conversacion y la cita en la decision que la adopta.
  Una entrada que llega al registro sin esa confirmacion lo refuta.
- **Disparador:** el primer artefacto de `005_discovery` que se escriba, y de nuevo en el acta de cierre
  de la etapa.
- 🕐 **Nota 2026-09-18 (confirmado, `D-079`):** el segundo disparador —el acta de cierre de la etapa—
  disparo hoy. Las nueve decisiones que adoptaron el contenido de los cuatro artefactos llevan
  `Origen: usuario`, y el acta de cierre no abrio ningun hallazgo:

  ```
  $ for d in 051 052 053 054 055 056 057 058 061; do sed -n "/^### D-$d /,/^- \*\*Contexto/p" _persistence/decisions.md | grep -c '^| Origen | usuario |'; done | sort -u
  1
  ```

  📌 **El `1` unico es lo que se afirma:** las nueve fichas devuelven el mismo valor, asi que ninguna
  adopto contenido sin que el patrocinador lo confirmara. Ninguna entrada llego al registro sin esa
  confirmacion, que es lo que lo habria refutado.

### A-005 - Hay acceso a personas que conocen el proceso real, ademas del patrocinador
| Campo | Valor |
|---|---|
| Fecha | 2026-09-17 |
| Estado | Abierto |
| Origen | manager |
| Dueno | JD Rodriguez (patrocinador) |

- **Supuesto:** para entrevistar y observar como se hace hoy el trabajo hay acceso a personas que lo
  hacen, o el patrocinador es el mismo usuario del proceso y puede hablar de el con conocimiento
  directo.
- **Sobre que se construye encima:** la entrada 2 de `_phases/005_discovery.md` §3.3. Sin acceso, la
  etapa no puede empezar, y lo que se produjera seria invencion documentada.
- **Como se refuta:** en los Pasos 1 y 2 se pregunta al patrocinador quien juega hoy y como lleva sus
  juegos y resultados. Si no es el mismo y no hay nadie alcanzable que lo haga, se refuta y se escala.
- **Disparador:** el Paso 2 de `005_discovery` (`T-029`), en la sesion siguiente.
- 🕐 **Nota 2026-09-18 (confirmado, `D-079`):** el disparador ya corrio: `T-029` esta `Implementada`, y
  lo que devolvio es la segunda rama del enunciado — el patrocinador **es** el usuario del proceso y
  hablo de el con conocimiento directo. El acta de cierre lo recogio al verificar el actor originador:
  «JD Rodriguez, jugador de Baloto y Revancha y patrocinador de este proyecto».

  ```
  $ grep -cE '^\| \[T-029\].*\| Implementada \|' _persistence/tasks.md
  1
  ```

  📌 **No hizo falta escalar nada:** el supuesto se refutaba solo si el patrocinador no era el usuario
  **y** no habia nadie alcanzable que lo fuera.

### A-006 - El hook de la cabecera de session-closer se dispara dentro del agente
| Campo | Valor |
|---|---|
| Fecha | 2026-09-17 |
| Estado | Confirmado |
| Origen | manager |
| Dueno | manager |

- **Supuesto:** en esta maquina (Windows), el hook `PreToolUse` declarado en la cabecera de un agente
  corre `node .claude/hooks/allow-only-skill.js <skill>` desde la raiz del repositorio, y su salida `2`
  bloquea la llamada a `Skill`.
- **Sobre que se construye encima:** `D-048`. El test solo prueba el script; si el hook no se dispara o
  el comando falla con otra salida, la llamada pasa sin aviso.
- **Como se refuta:** tras reiniciar Claude Code, `manager` lanza el agente temporal `hook-probe`, que
  lleva el mismo hook permitiendo solo `protocol-start` e intenta invocar `keybindings-help`. Si la
  herramienta devuelve exito, se refuta; si devuelve «Bloqueado: …», se confirma. En los dos casos se
  borra `.claude/agents/hook-probe.md` en la misma sesion.
- **Disparador:** la primera sesion tras reiniciar Claude Code, antes de su cierre.
- 🕐 **Nota 2026-09-17 (confirmado):** en la misma sesion, cuando `hook-probe` aparecio disponible sin
  reiniciar, `manager` lo lanzo. Hizo una sola llamada a `Skill` y devolvio literal:

  ```
  PreToolUse:Skill hook error: [node .claude/hooks/allow-only-skill.js protocol-start]: Bloqueado: este agente solo puede invocar la skill "protocol-start", no "keybindings-help". No intentes ejecutar ese protocolo por otra via: detente y dilo en tu reporte.
  ```

  Ese texto solo lo escribe el script, asi que el hook se disparo dentro del agente y su salida `2`
  bloqueo la llamada. `.claude/agents/hook-probe.md` se borro despues. Lo que no se probo es el caso
  permitido dentro del agente; el test del script lo cubre fuera.

### A-007 - La cabecera exacta de session-closer deja pasar protocol-close y bloquea las demas skills
| Campo | Valor |
|---|---|
| Fecha | 2026-09-17 |
| Estado | Confirmado |
| Origen | manager |
| Dueno | manager |

- **Supuesto:** dentro de un agente con la cabecera literal de `session-closer` (hook `PreToolUse` sobre
  `Skill` con `node .claude/hooks/allow-only-skill.js protocol-close`), una llamada a `Skill` con
  `protocol-close` pasa y una con cualquier otra skill queda bloqueada.
- **Sobre que se construye encima:** `T-032`. `A-006` probo solo el caso bloqueado, y con otra skill
  permitida (`protocol-start`); si el caso permitido fallara dentro del agente, el cierre no podria cargar
  su propio protocolo.
- **Como se refuta:** `manager` lanza el agente temporal `.claude/agents/hook-probe.md`, con esa cabecera
  copiada literal y solo la herramienta `Skill`, que hace dos llamadas: `protocol-audit` y
  `protocol-close`, sin ejecutar nada de lo que carguen. Se refuta si `protocol-audit` pasa o si
  `protocol-close` queda bloqueada. En los dos casos se borra `.claude/agents/hook-probe.md` en la misma
  sesion.
- **Disparador:** esta sesion, `S-015`, antes de su cierre.
- 🕐 **Nota 2026-09-17 (primer intento):** justo despues de crear `.claude/agents/hook-probe.md`,
  lanzarlo devolvio literal `Agent type 'hook-probe' not found. Available agents: claude,
  claude-code-guide, Explore, gate1_auditor, gate2_auditor, general-purpose, phase_exit_auditor, Plan,
  report_auditor, session-closer, session-starter, statusline-setup`. En el turno siguiente, sin reiniciar,
  Claude Code anuncio `hook-probe` como disponible. La sonda **no se ha lanzado todavia**: el supuesto
  sigue `Abierto`.
- 🕐 **Nota 2026-09-17 (confirmado, `D-050`):** lanzada la sonda, hizo sus dos llamadas y devolvio literal:

  ```
  1. protocol-audit →
  PreToolUse:Skill hook error: [node .claude/hooks/allow-only-skill.js protocol-close]: Bloqueado: este agente solo puede invocar la skill "protocol-close", no "protocol-audit". No intentes ejecutar ese protocolo por otra via: detente y dilo en tu reporte.
  2. protocol-close → cargo. Primera linea: Base directory for this skill: C:\Users\USUARIO\Documents\Company_TripleS\Proyectos_TripleS\YouOtto\.claude\skills\protocol-close
  ```

  Los dos casos quedan probados dentro del agente: la skill ajena bloqueada y la propia cargando. El texto
  del bloqueo solo lo escribe `.claude/hooks/allow-only-skill.js`. `.claude/agents/hook-probe.md` se borro
  despues, en la misma sesion, y nunca se commiteo.

### A-008 - Las condiciones de uso de Baloto permiten leer su historico de forma automatica
| Campo | Valor |
|---|---|
| Fecha | 2026-09-17 |
| Estado | Confirmado |
| Origen | manager |
| Dueno | usuario (JD Rodriguez) |

- **Supuesto:** leer de forma automatica el historico de sorteos y los acumulados del sitio oficial de
  Baloto esta permitido por sus condiciones de uso.
- **Sobre que se construye encima:** `N-001`, `N-003` y `N-004`, que no tienen otra fuente de datos, e
  `I-002` en `005_discovery/015_stakeholders.md`, cuya casilla «Consultado el» dice `TODAVIA NO`.
- **Como se refuta:** se leen las condiciones de uso publicadas en el sitio oficial y su `robots.txt`. Si
  prohiben la extraccion automatica, queda refutado y hay que buscar otra via —carga manual, otra fuente—
  o replantear el alcance. El patrocinador ya comprobo que **tecnicamente** es posible extraerlos; lo que
  no se ha contrastado es el permiso.
- **Disparador:** antes de escribir la primera linea de codigo que lea el sitio, es decir al arrancar la
  etapa del prototipo.
- 🕐 **Nota 2026-09-17 (`D-061`):** este supuesto sube de importancia sin cambiar de estado ni de
  disparador. `D-061` decide que **la aplicacion lee el sitio oficial de Baloto**, descartando la carga
  manual, asi que si queda refutado ya no afecta solo a como se obtienen los datos: afecta a la parte 2
  de esa decision, y obliga a replantear la fuente para `N-001`, `N-003` y `N-004`. La alternativa que lo
  sacaria del camino critico —que el jugador pegue el resultado de cada sorteo— esta escrita como
  alternativa descartada en `D-061`, con su motivo.
- 🕐 **Nota 2026-09-18 (confirmado, `D-083`):** se ejecuto la forma de refutarlo escrita arriba. El
  `robots.txt` del sitio oficial devolvio literal `User-agent: *` con `Disallow: /admin-baloto/` y
  `Disallow: /api/`: la pagina publica de resultados, que es la que el producto necesita, **no esta
  prohibida**. El unico documento legal enlazado desde el pie del sitio declara en su encabezado un
  alcance que **no es el del sitio informativo** —`AlcanceAtodalaorganizacionDEAPUESTAAQUI.COM`—, y
  el barrido de clausulas sobre uso automatizado sobre sus 245.986 caracteres devolvio **cero
  coincidencias**. Su unica prohibicion recae sobre «la venta, copia, alteracion y/o distribucion
  **del software**, sus partes, asi como la marca, el nombre, el logo». El patrocinador zanjo que el
  producto no reproduce nada de eso: lee resultados ya publicados de sorteos ya celebrados para
  calcular con ellos una combinacion propia. **El supuesto queda `Confirmado`**, y el limite que el
  `robots.txt` si impone se registra aparte como `C-006`. Las ordenes y sus salidas crudas estan en
  `D-083`.
