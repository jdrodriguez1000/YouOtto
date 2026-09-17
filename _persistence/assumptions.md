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
| [A-001](#a-001---los-juegos-registrados-pueden-ser-datos-de-personas) | Los juegos registrados pueden ser datos de personas | 2026-09-15 | Abierto |
| [A-002](#a-002---los-agentes-de-gate-y-de-acta-se-cargan-al-reiniciar-claude-code) | Los agentes de Gate y de acta se cargan al reiniciar Claude Code | 2026-09-15 | Refutado |
| [A-003](#a-003---con-la-cabecera-yaml-valida-los-agentes-de-gate-y-de-acta-cargan) | Con la cabecera YAML valida, los agentes de Gate y de acta cargan | 2026-09-15 | Confirmado |
| [A-004](#a-004---el-patrocinador-revisa-cada-salida-de-la-ia-antes-de-que-entre-al-registro) | El patrocinador revisa cada salida de la IA antes de que entre al registro | 2026-09-17 | Abierto |
| [A-005](#a-005---hay-acceso-a-personas-que-conocen-el-proceso-real-ademas-del-patrocinador) | Hay acceso a personas que conocen el proceso real, ademas del patrocinador | 2026-09-17 | Abierto |

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
| Estado | Abierto |
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
