# lessons.md

> 📄 **Se copia a `_persistence/lessons.md`.** Se copia entero, con el indice vacio y la plantilla
> de entrada intacta.
>
> ⛔ **Lo que se borra al copiar son los ejemplos, no las convenciones.** Las convenciones son las
> reglas del archivo, y `CLAUDE.md` manda leerlas antes de escribir en el.
>
> 🚨 **Este archivo lo escribe `manager`, nunca el cierre.** Y es el camino de ida de la cosecha:
> al cerrar una etapa, lo que aqui supere el filtro sube al archivo de lecciones globales.

---

> Registro de las **lecciones aprendidas** durante la ejecucion del proyecto.
> Cada leccion tiene codigo `L-XXX`.

---

## Indice

| Codigo | Leccion | Fecha | Etapa | Portabilidad |
|---|---|---|---|---|
| [L-001](#l-001---el-historial-heredado-del-esqueleto-se-comprueba-antes-del-primer-push) | El historial heredado del esqueleto se comprueba antes del primer push | 2026-09-15 | 000_preproject | Promovida a LG-105 |
| [L-002](#l-002---un-registro-que-una-regla-cita-se-comprueba-que-existe-al-arrancar) | Un registro que una regla cita se comprueba que existe al arrancar | 2026-09-15 | 000_preproject | Solo proyecto |
| [L-003](#l-003---un-control-con-patron-literal-se-prueba-contra-el-formato-real-del-registro) | Un control con patron literal se prueba contra el formato real del registro | 2026-09-15 | 000_preproject | Ya cubierta por LG-06 |
| [L-004](#l-004---un-agente-que-no-aparece-se-diagnostica-validando-su-cabecera-antes-de-suponer) | Un agente que no aparece se diagnostica validando su cabecera antes de suponer | 2026-09-15 | 000_preproject | Solo proyecto |
| [L-005](#l-005---una-orden-escrita-al-registro-por-un-script-se-reejecuta-copiandola-del-archivo) | Una orden escrita al registro por un script se reejecuta copiandola del archivo | 2026-09-16 | 000_preproject | Ya cubierta por LG-103 |
| [L-006](#l-006---un-criterio-que-busca-un-texto-se-excluye-a-si-mismo-del-recuento) | Un criterio que busca un texto se excluye a si mismo del recuento | 2026-09-16 | 000_preproject | Ya cubierta por LG-101 |
| [L-007](#l-007---un-criterio-que-comparten-dos-entradas-se-copia-del-archivo-no-se-reescribe) | Un criterio que comparten dos entradas se copia del archivo, no se reescribe | 2026-09-16 | 000_preproject | Ya cubierta por LG-98 |
| [L-008](#l-008---una-firma-que-el-artefacto-espera-se-escribe-en-el-artefacto-no-solo-en-el-registro) | Una firma que el artefacto espera se escribe en el artefacto, no solo en el registro | 2026-09-16 | 005_discovery | Promovida a LG-106 |
| [L-009](#l-009---un-control-nuevo-se-prueba-tambien-sobre-el-texto-que-lo-describe) | Un control nuevo se prueba tambien sobre el texto que lo describe | 2026-09-16 | 005_discovery | Ya cubierta por LG-101 |
| [L-010](#l-010---la-prueba-de-que-un-control-no-detecta-algo-lleva-su-caso-positivo-al-lado) | La prueba de que un control no detecta algo lleva su caso positivo al lado | 2026-09-16 | 005_discovery | Ya cubierta por LG-22 |
| [L-011](#l-011---una-regla-que-un-agente-en-frio-necesita-se-escribe-en-el-paso-que-lee) | Una regla que un agente en frio necesita se escribe en el paso que lee | 2026-09-16 | 005_discovery | Promovida a LG-107 |
| [L-012](#l-012---la-promocion-va-al-principio-de-la-sesion-antes-de-tocar-el-andamiaje) | La promocion va al principio de la sesion, antes de tocar el andamiaje | 2026-09-16 | 005_discovery | Promovida a LG-108 |
| [L-013](#l-013---antes-de-lanzar-la-auditoria-se-mira-en-el-historial-que-el-cierre-no-audito-su-sesion) | Antes de lanzar la auditoria se mira en el historial que el cierre no audito su sesion | 2026-09-16 | 005_discovery | Ya cubierta por LG-100 |
| [L-014](#l-014---una-exclusividad-que-ya-fallo-se-pone-en-la-herramienta-no-en-el-texto) | Una exclusividad que ya fallo se pone en la herramienta, no en el texto | 2026-09-17 | 005_discovery | Promovida a LG-109 |
| [L-015](#l-015---un-bloqueo-se-prueba-en-los-dos-casos-el-prohibido-y-el-permitido) | Un bloqueo se prueba en los dos casos: el prohibido y el permitido | 2026-09-17 | 005_discovery | Promovida a LG-22 |
| [L-016](#l-016---una-cifra-escrita-donde-no-se-puede-corregir-se-cuenta-antes-no-despues) | Una cifra escrita donde no se puede corregir se cuenta antes, no despues | 2026-09-17 | 005_discovery | Promovida a LG-32 |
| [L-017](#l-017---los-sitios-que-cita-un-hallazgo-son-una-muestra-no-el-inventario) | Los sitios que cita un hallazgo son una muestra, no el inventario | 2026-09-17 | 005_discovery | Ya cubierta por LG-85 |
| [L-018](#l-018---un-barrido-de-estado-encuentra-tambien-el-archivo-que-prohibe-ese-estado) | Un barrido de estado encuentra tambien el archivo que prohibe ese estado | 2026-09-17 | 005_discovery | Ya cubierta por LG-101 |
| [L-019](#l-019---corregir-el-caso-que-cita-un-hallazgo-sin-poner-el-control-deja-el-defecto-reapareciendo) | Corregir el caso que cita un hallazgo, sin poner el control, deja el defecto reapareciendo | 2026-09-17 | 005_discovery | Promovida a LG-100 |
| [L-020](#l-020---al-cambiar-la-estructura-de-un-archivo-los-controles-que-lo-miden-se-reejecutan-en-la-misma-pasada) | Al cambiar la estructura de un archivo, los controles que lo miden se reejecutan en la misma pasada | 2026-09-17 | 005_discovery | Ya cubierta por LG-06 |
| [L-021](#l-021---una-salida-se-pega-de-la-ejecucion-nunca-se-predice-por-trivial-que-parezca-la-orden) | Una salida se pega de la ejecucion, nunca se predice, por trivial que parezca la orden | 2026-09-18 | 005_discovery | Ya cubierta por LG-32 |
| [L-022](#l-022---el-estado-de-una-tarea-no-dice-si-su-mecanismo-funciona-eso-lo-dicen-los-supuestos-que-la-respaldan) | El estado de una tarea no dice si su mecanismo funciona: eso lo dicen los supuestos que la respaldan | 2026-09-18 | 010_prototype | Sin evaluar |
| [L-023](#l-023---un-documento-legal-enlazado-desde-un-sitio-no-siempre-regula-ese-sitio-se-lee-su-alcance-antes-de-citarlo) | Un documento legal enlazado desde un sitio no siempre regula ese sitio: se lee su alcance antes de citarlo | 2026-09-18 | 010_prototype | Sin evaluar |
| [L-024](#l-024---un-defecto-que-reaparece-por-cuarta-vez-no-es-un-descuido-es-un-control-que-no-mira-donde-hace-falta) | Un defecto que reaparece por cuarta vez no es un descuido: es un control que no mira donde hace falta | 2026-09-18 | 010_prototype | Sin evaluar |
| [L-025](#l-025---un-bloque-de-verificacion-se-escribe-despues-de-correr-la-orden-nunca-antes) | Un bloque de verificacion se escribe DESPUES de correr la orden, nunca antes | 2026-09-18 | 010_prototype | Sin evaluar |
| [L-026](#l-026---una-respuesta-dictada-que-admite-dos-lecturas-se-pregunta-antes-de-escribirla-y-se-declara-de-donde-salio-la-aclaracion) | Una respuesta dictada que admite dos lecturas se pregunta antes de escribirla, y se declara de donde salio la aclaracion | 2026-09-18 | 010_prototype | Sin evaluar |
| [L-027](#l-027---un-comentario-que-llega-en-estilo-indirecto-ya-no-se-puede-volver-literal-las-palabras-exactas-se-anotan-en-la-sesion) | Un comentario que llega en estilo indirecto ya no se puede volver literal: las palabras exactas se anotan en la sesion | 2026-09-19 | 010_prototype | Sin evaluar |
| [L-028](#l-028---un-criterio-de-cierre-tiene-que-leer-cada-sitio-que-la-decision-dice-cambiar-no-solo-el-primero) | Un criterio de cierre tiene que leer cada sitio que la decision dice cambiar, no solo el primero | 2026-09-19 | 010_prototype | Sin evaluar |

---

## Convenciones

| Campo | Valores posibles |
|---|---|
| Codigo | `L-XXX`, correlativo, no se reutiliza |
| Origen | `usuario` / `manager` / `report_auditor` |

Cada leccion registra: contexto, que ocurrio, leccion y como aplicarla.

🚨 **Una leccion sin «como aplicarla» es una anecdota.** El campo que la convierte en leccion es la
accion concreta a futuro; si no se puede escribir, lo que hay todavia no es una leccion.

⚠️ **El titulo enuncia la leccion, no el incidente.** Se lee como regla, no como cronica.

🚨 **El indice se escribe a mano, sin generador.** Cada fila enlaza por ancla a su leccion.

**Y una columna que solo vive en el indice: `Portabilidad`.** Dice si esa leccion sube al archivo de
lecciones globales, y es lo que hace que la cosecha se pueda comprobar.

| Valor | Significa |
|---|---|
| `Sin evaluar` | todavia no ha pasado por los filtros de promocion. Es el valor de partida de toda leccion nueva |
| `Global candidata` | pasa los filtros y esta pendiente de subir |
| `Promovida a <codigo global>` | ya esta en el archivo global, con su codigo |
| `Ya cubierta por <codigo global>` | el archivo global ya lo dice. **No se sube**, y se anota cual lo cubre |
| `Solo proyecto` | no sobrevive al cambio de lenguaje, libreria o dominio |

🔑 **Vive en el indice y en ningun sitio mas.** No se repite dentro de la ficha: un estado escrito en
dos sitios acaba diciendo dos cosas, y entonces no se sabe cual manda. Ademas la cosecha es un
barrido —se lee una columna, no quince fichas—, y para eso el indice es el sitio.

⚠️ **`Sin evaluar` no significa «no sube»: significa que nadie lo ha mirado.** Los dos se parecen al
leerlos deprisa, y confundirlos deja la cosecha hecha sobre lecciones que nunca se evaluaron.

🚨 **Los filtros de promocion no estan aqui: viven en el archivo global**, en su seccion de
promocion, y se leen alli en el momento de cosechar. Copiarlos a este archivo crearia una segunda
copia que envejeceria por su cuenta.

---

## Lecciones

<!--
Plantilla:

### L-XXX - Titulo (enunciado como regla, no como cronica)
| Campo | Valor |
|---|---|
| Fecha | AAAA-MM-DD |
| Etapa | |
| Origen | |

- **Contexto:** que se estaba haciendo.
- **Que ocurrio:** el hecho, sin interpretarlo todavia.
- **Leccion:** que ensena, en una frase que valga fuera de este caso.
- **Como aplicarla:** la accion concreta a futuro. Sin esto, es una anecdota.
-->

### L-001 - El historial heredado del esqueleto se comprueba antes del primer push
| Campo | Valor |
|---|---|
| Fecha | 2026-09-15 |
| Etapa | 000_preproject |
| Origen | manager |

- **Contexto:** completar `project.md` en la primera sesion del proyecto, arrancado desde el
  esqueleto.
- **Que ocurrio:** el paso de borrar el `.git` del clon (`README.md`, linea 47) no se hizo. El
  proyecto subio a su remoto los siete commits del esqueleto, y nadie lo noto hasta que se comparo
  el hash de partida con el `HEAD` del proyecto. Para entonces deshacerlo exigia un push forzado, y
  se decidio conservarlo (`D-004`).
- **Leccion:** un paso de arranque que no deja rastro visible se salta sin que nadie lo note, y se
  descubre cuando corregirlo ya es irreversible.
- **Como aplicarla:** antes del primer push de un proyecto nuevo, correr
  `git rev-list --count HEAD` y `git log --oneline`: si aparecen commits que no son del proyecto, el
  historial heredado sigue ahi y se decide que hacer mientras aun es local.

### L-002 - Un registro que una regla cita se comprueba que existe al arrancar
| Campo | Valor |
|---|---|
| Fecha | 2026-09-15 |
| Etapa | 000_preproject |
| Origen | manager |

- **Contexto:** consulta de las lecciones globales de arranque (`D-005`), aplicando `LG-38`.
- **Que ocurrio:** `CLAUDE.md` manda leer la clasificacion de lo irreversible de un inventario en
  `constraints.md`, pero ni el archivo ni su plantilla lo traian. La regla se habia estado cumpliendo
  «a criterio» sin que ningun control lo senalara, hasta que la consulta lo busco (`D-006`).
- **Leccion:** una regla que remite a un registro que no existe parece vigente y no obliga a nada.
- **Como aplicarla:** al arrancar un proyecto, buscar en `CLAUDE.md` y los protocolos cada registro
  al que remiten («vive en», «el inventario de») y comprobar con `grep` que existe; el que falte se
  crea o se registra como deuda antes de salir de `000_preproject`.

### L-003 - Un control con patron literal se prueba contra el formato real del registro
| Campo | Valor |
|---|---|
| Fecha | 2026-09-15 |
| Etapa | 000_preproject |
| Origen | report_auditor |

- **Contexto:** evaluacion de `F-001`, de la primera auditoria del proyecto.
- **Que ocurrio:** los barridos de anclaje del cierre buscaban `$ ` en la primera columna, y el
  registro escribe los bloques dentro de vinetas, con sangria. El control salio limpio sobre ordenes
  que no veia, y el propio informe notaba el sintoma pero la cuenta lo dejaba fuera (`D-008`).
- **Leccion:** un control mecanico que sale limpio no prueba nada si su patron nunca se probo con una
  linea que tuviera que atrapar.
- **Como aplicarla:** al escribir o cambiar un patron de control, correrlo sobre un commit donde el
  defecto este presente y comprobar que lo devuelve. Si no hay caso real, fabricar la linea con el
  formato con que el registro escribe de verdad.

### L-004 - Un agente que no aparece se diagnostica validando su cabecera antes de suponer
| Campo | Valor |
|---|---|
| Fecha | 2026-09-15 |
| Etapa | 000_preproject |
| Origen | manager |

- **Contexto:** los agentes de Gate y de acta no aparecian entre los lanzables.
- **Que ocurrio:** se supuso que faltaba reiniciar Claude Code (`A-002`) y se espero una sesion. La
  causa estaba en el propio archivo: un `: ` sin comillas en la `description` hacia invalido el YAML,
  y Claude Code descarta el agente sin avisar (`D-009`).
- **Leccion:** un fallo de carga silencioso se diagnostica leyendo el archivo con el mismo formato con
  que se carga, antes de construir un supuesto sobre el entorno.
- **Como aplicarla:** si un agente o una skill no aparece, pasar su cabecera por un parser YAML en el
  momento. Solo si sale valida tiene sentido sospechar de la carga.

### L-005 - Una orden escrita al registro por un script se reejecuta copiandola del archivo
| Campo | Valor |
|---|---|
| Fecha | 2026-09-16 |
| Etapa | 000_preproject |
| Origen | manager |

- **Contexto:** registro de `D-010` con un script de Python que generaba la entrada.
- **Que ocurrio:** la orden `printf "...\n"` de la verificacion previa quedo partida en dos lineas: el
  `\n` literal se convirtio en un salto de linea real al pasar por el script. En pantalla parecia
  correcta, y solo fallo al reejecutar las ordenes extraidas del propio archivo
  (`unexpected EOF while looking for matching '"'`).
- **Leccion:** una orden que pasa por una capa que interpreta escapes puede quedar escrita distinta de
  como se tecleo, y solo se nota al ejecutarla desde donde quedo escrita.
- **Como aplicarla:** despues de escribir una entrada con ordenes, extraer las lineas `$ ` del archivo
  y ejecutarlas tal cual; comparar su salida con la publicada antes de dar la entrada por buena.

### L-006 - Un criterio que busca un texto se excluye a si mismo del recuento
| Campo | Valor |
|---|---|
| Fecha | 2026-09-16 |
| Etapa | 000_preproject |
| Origen | manager |

- **Contexto:** criterio de cierre de `D-011`, que cuenta en la propia decision las lineas que nombran
  a los firmantes.
- **Que ocurrio:** la orden devolvio 3 y no los 2 esperados: su propio patron, escrito en la linea
  `$ ` del bloque, coincidia consigo mismo. Se corrigio excluyendo las lineas de orden
  (`grep -v '\$ '`).
- **Leccion:** un criterio que busca una cadena dentro del registro donde esta escrito cuenta tambien
  su propia orden.
- **Como aplicarla:** si el ambito de la busqueda incluye el bloque del criterio, excluir las lineas
  `$ ` o anclar el patron a la forma de la linea buscada, y ejecutar el criterio antes de publicar su
  salida.

### L-007 - Un criterio que comparten dos entradas se copia del archivo, no se reescribe
| Campo | Valor |
|---|---|
| Fecha | 2026-09-16 |
| Etapa | 000_preproject |
| Origen | report_auditor |

- **Contexto:** evaluacion de `F-005`, sobre el anclaje de `S-003`.
- **Que ocurrio:** `T-006` declaraba como criterio de cierre «el de `D-010`» y repetia su bloque, pero
  la segunda orden perdio el `| cut -d: -f2-` al pasar de una entrada a otra. La salida publicada era
  la de la orden con filtro; la orden escrita no podia devolverla. El anclaje la sustituyo sin
  detenerse y la linea `📌` afirmo que reproducia (`D-013`).
- **Leccion:** repetir a mano un bloque de evidencia crea una segunda copia que puede divergir en un
  detalle que no cambia el resultado a la vista, y deja de ser la misma prueba.
- **Como aplicarla:** cuando una entrada reutiliza el criterio de otra, extraer el bloque del archivo
  con una orden (`awk`/`sed`) y compararlo con `diff` contra el original antes de publicarlo.

### L-008 - Una firma que el artefacto espera se escribe en el artefacto, no solo en el registro
| Campo | Valor |
|---|---|
| Fecha | 2026-09-16 |
| Etapa | 005_discovery |
| Origen | report_auditor |

- **Contexto:** evaluacion de `F-006`, sobre el cierre de `000_preproject`.
- **Que ocurrio:** la firma del patrocinador se registro en `D-015` con la nota «el acta no se edita»,
  y la tabla 5.2 del acta quedo en `<pendiente>` bajo una cabecera que dice que, sin esa firma, la
  etapa sigue abierta. El registro afirmo dos estados a la vez hasta que `D-020` escribio la firma en
  el acta.
- **Leccion:** cuando una plantilla reserva un hueco para una aprobacion, registrarla en otro sitio no
  la sustituye: el artefacto sigue diciendo lo contrario a quien lo lea sin el registro delante.
- **Como aplicarla:** al registrar una aprobacion o decision que un artefacto espera, rellenar el hueco
  del artefacto en la misma pasada y citar la `D-XXX`; si se decide no hacerlo, cambiar la plantilla
  para que el artefacto no afirme lo contrario.

### L-009 - Un control nuevo se prueba tambien sobre el texto que lo describe
| Campo | Valor |
|---|---|
| Fecha | 2026-09-16 |
| Etapa | 005_discovery |
| Origen | report_auditor |

- **Contexto:** evaluacion de `F-008`, sobre el control `SIN ANCLAR` del 7c-quater.
- **Que ocurrio:** el control se probo contra informes viejos, y su prueba ya contaba prosa como si
  fueran ordenes. En su primera ejecucion real salto con la frase del propio informe que lo describia,
  y el cierre siguio adelante ignorando la parada.
- **Leccion:** un control por cadena que se anuncia en prosa se encuentra a si mismo; y un control que
  salta con falsos positivos se aprende a ignorar desde la primera vez.
- **Como aplicarla:** al crear un control por `grep`, correrlo tambien sobre un texto que lo mencione
  (el informe o la decision que lo introduce) y mirar **las lineas** que devuelve, no solo la cifra;
  acotar el patron a la forma sintactica de lo que se busca, no a la cadena.

### L-010 - La prueba de que un control no detecta algo lleva su caso positivo al lado
| Campo | Valor |
|---|---|
| Fecha | 2026-09-16 |
| Etapa | 005_discovery |
| Origen | manager |

- **Contexto:** comprobacion del punto ciego del 7c-quater para `D-026`: una orden entre comillas
  invertidas partida en dos lineas, con la tuberia en la segunda.
- **Que ocurrio:** el primer archivo de prueba dejo la tuberia al final de la primera linea, y el
  control la detecto (`1`): la prueba no reproducia el caso que decia probar. Se repitio con la tuberia
  en la segunda linea (`0`) y, al lado, la misma orden en una sola linea (`1`).
- **Leccion:** un `0` solo demuestra un punto ciego si el mismo control, con el mismo patron, da
  positivo sobre el caso equivalente que si deberia ver; sin ese contraste, el `0` puede venir de una
  prueba mal construida.
- **Como aplicarla:** al afirmar que un control no detecta algo, correrlo sobre dos entradas que solo
  difieran en el rasgo del punto ciego, mostrar las entradas (`cat`) y publicar las dos salidas juntas.

### L-011 - Una regla que un agente en frio necesita se escribe en el paso que lee
| Campo | Valor |
|---|---|
| Fecha | 2026-09-16 |
| Etapa | 005_discovery |
| Origen | report_auditor |

- **Contexto:** `F-010` de `R-008`, atendido con `D-027`.
- **Que ocurrio:** los cierres de `S-004`, `S-006` y `S-007` marcaron `Implementada` las tareas con su trabajo en el commit,
  pero esa practica no estaba escrita en el Paso 4 de `protocol-close`. El cierre de `S-008`, que
  arranca en frio, aplico el criterio contrario («esperar al anclaje») y lo presento como la practica
  de siempre; ningun paso posterior podia mover el estado.
- **Leccion:** una practica repetida que no esta escrita donde el agente trabaja no es una regla para
  el: la reconstruye cada vez, y puede reconstruirla al reves con total seguridad.
- **Como aplicarla:** cuando un agente en frio aplica bien un criterio varias veces sin que este
  escrito, escribirlo en el paso de su skill que lo usa, no solo en `decisions.md`, que ese paso no lee.

### L-012 - La promocion va al principio de la sesion, antes de tocar el andamiaje
| Campo | Valor |
|---|---|
| Fecha | 2026-09-16 |
| Etapa | 005_discovery |
| Origen | usuario |

- **Contexto:** `D-030` y `D-032`. El usuario lo describio como un circulo vicioso.
- **Que ocurrio:** en la misma sesion se corregia el andamiaje por una recomendacion de auditoria y
  luego se intentaba promover. `protocol-promote` exige las seis areas limpias y subidas, asi que la
  correccion sin commitear bloqueaba la promocion. Cerrar y auditar para desbloquearla dejaba nuevos
  puntos, y la sesion siguiente repetia el orden. Se salio promoviendo desde el ultimo commit auditado
  con la correccion retirada un momento del arbol.
- **Leccion:** para promover no hace falta una auditoria sin puntos. Hace falta un arbol limpio, y
  eso solo pasa al principio de la sesion, antes de editar nada del andamiaje.
- **Como aplicarla:** si hay desfase con el esqueleto que promover, se promueve **lo primero de la
  sesion**, justo despues del arranque y antes de atender correcciones que toquen las seis areas.
  Las correcciones van despues y suben en el lote siguiente. Si ya se edito algo, se retira del arbol
  guardandolo aparte, se promueve desde `HEAD` y se repone.
- 🕐 **Nota 2026-09-16 (`D-035`): aplicada y funciono.** En `S-011` la promocion de `DT-004` se hizo
  antes de tocar las seis areas: el Paso 0 de `protocol-promote` salio limpio a la primera, sin retirar
  nada del arbol, y el barrido de despues quedo vacio. Las correcciones de la sesion (`D-033`, `D-034`)
  solo tocaron `_persistence/` y `_audit/`, que no bloquean la promocion.

### L-013 - Antes de lanzar la auditoria se mira en el historial que el cierre no audito su sesion
| Campo | Valor |
|---|---|
| Fecha | 2026-09-16 |
| Etapa | 005_discovery |
| Origen | report_auditor |

- **Contexto:** `D-038`, a partir de la segunda recomendacion sin hallazgo de `R-012`.
- **Que ocurrio:** tras el cierre de `S-011`, el agente de cierre corrio tambien la auditoria de su
  propia sesion y la subio como `R-011` (`709050c`). Se detecto despues y se revirtio (`9eb9d49`), pero
  los ids `R-011` y `F-012` ya estaban consumidos en el historial subido, y el hueco quedo sin explicar
  hasta `D-038`.
- **Leccion:** que un protocolo sea de uso exclusivo de un agente no impide que otro lo ejecute. Lo
  que lo delata es el historial, y hay que mirarlo antes de que el siguiente paso construya encima.
- **Como aplicarla:** cuando el cierre devuelva su reporte, y antes de lanzar `report_auditor`, se
  corre `git log --oneline -4`. Tiene que haber solo commits de sesion y de anclaje; si aparece un
  commit de auditoria, no se lanza nada: se revierte y los ids consumidos se registran como retirados
  en la misma sesion.
- 🕐 **Nota 2026-09-17 (`F-014`, `D-041`):** esta leccion entro en el commit `cf2992f`, de `2026-09-17`, y esa es su fecha. El `2026-09-16` de la ficha y de su fila de indice es el dia en que se redacto, la noche anterior al cierre. No se reescribe.

### L-014 - Una exclusividad que ya fallo se pone en la herramienta, no en el texto
| Campo | Valor |
|---|---|
| Fecha | 2026-09-17 |
| Etapa | 005_discovery |
| Origen | usuario |

- **Contexto:** `D-047`, `D-048`.
- **Que ocurrio:** tras `L-013`, que manda mirar el historial antes de lanzar la auditoria, el agente de
  cierre volvio a ejecutar `protocol-audit` sobre su propia sesion y la subio (`798500e`). La leccion
  anterior detecto, pero no impidio.
- **Leccion:** una regla de «uso exclusivo» escrita en un protocolo depende de que el agente la lea y la
  obedezca. Si ya fallo una vez, la siguiente barrera no es mas texto ni otra revision posterior: es que
  la herramienta no deje hacerlo.
- **Como aplicarla:** cuando una prohibicion a un agente se incumpla, se busca primero el mecanismo que
  la aplique (permisos, hooks, herramientas del agente) y se deja el texto y la deteccion como segunda
  barrera.

### L-015 - Un bloqueo se prueba en los dos casos: el prohibido y el permitido
| Campo | Valor |
|---|---|
| Fecha | 2026-09-17 |
| Etapa | 005_discovery |
| Origen | manager |

- **Contexto:** `D-048`, `D-050`, `A-006`, `A-007`.
- **Que ocurrio:** la primera sonda del hook probo solo que una skill ajena quedaba bloqueada, y con otra
  skill permitida distinta de la real. Quedaba sin probar lo contrario: que el agente pudiera cargar **su
  propia** skill. Si eso hubiera fallado, el cierre no habria podido arrancar, y se habria descubierto en
  el peor momento.
- **Leccion:** un mecanismo que impide algo se prueba con los dos casos y con la configuracion literal que
  va a correr en produccion. El caso permitido es el que decide si el sistema sigue funcionando; el
  prohibido solo decide si la barrera sirve.
- **Como aplicarla:** al montar cualquier bloqueo —hook, permiso, validacion—, la prueba lleva siempre la
  pareja: una entrada que debe pasar y una que no.

### L-016 - Una cifra escrita donde no se puede corregir se cuenta antes, no despues
| Campo | Valor |
|---|---|
| Fecha | 2026-09-17 |
| Etapa | 005_discovery |
| Origen | manager |

- **Contexto:** `D-062`, la cosecha de `005_discovery`. El mismo dia en que se evaluo `F-019`, que abre
  precisamente por una cifra publicada que su propia orden no devuelve.
- **Que ocurrio:** el cuerpo del mensaje del commit `a9ed27b`, en el repositorio de lecciones, dice «No
  suben cuatro» y a continuacion lista tres. El reparto real —cuatro promovidas, una enmienda, tres ya
  cubiertas— estaba bien en el archivo y bien en la tabla que se aprobo; lo unico mal es la cifra del
  mensaje. Y el mensaje de un commit ya subido no se enmienda: `protocol-harvest` prohibe reescribir
  historia en los dos repositorios, asi que el defecto se queda ahi y solo se puede declarar aparte.
- **Leccion:** una cifra que resume una lista se escribe **contando la lista**, no recordandola — y en un
  soporte que no admite correccion, ese descuido no tiene arreglo, solo declaracion. Que la misma jornada
  estuviera tratando un hallazgo de esa forma exacta no ayudo: conocer la forma del fallo no protege del
  fallo cuando la cifra se escribe de memoria.
- **Como aplicarla:** antes de escribir un mensaje de commit, un acta o cualquier texto que no se vaya a
  poder corregir, toda cifra que resuma un conjunto se contrasta contra el conjunto que tiene al lado. Si
  el texto ya esta subido, se corrige por declaracion fechada donde si se pueda escribir, nunca
  reescribiendo historia.

### L-017 - Los sitios que cita un hallazgo son una muestra, no el inventario
| Campo | Valor |
|---|---|
| Fecha | 2026-09-17 |
| Etapa | 005_discovery |
| Origen | manager |

- **Contexto:** el tratamiento de un hallazgo de auditoria sobre una cifra equivocada («seis» donde el
  archivo de etapa enumera «siete»). El hallazgo venia con su barrido y su salida cruda, citando **dos**
  archivos afectados.
- **Que ocurrio:** al rehacer el barrido con el mismo patron pero sobre un ambito mas ancho, aparecio un
  **tercer** archivo que el hallazgo no nombraba — y en el, el defecto era peor que la cifra: a una
  tabla de reparto le faltaba una fila entera. Aceptar el hallazgo por su lista habria cerrado la tarea
  dejando el sitio peor sin tocar, y con la sensacion de estar resuelto. El auditor no se equivoco en lo
  que dijo; se quedo corto en donde miro, que no es lo mismo y no se ve igual.
- **Leccion:** un hallazgo bien escrito —con su orden y su salida cruda— invita a leer su lista como el
  inventario completo, precisamente porque **parece** exhaustivo. La evidencia que trae prueba que esos
  sitios estan mal; no prueba que sean los unicos. Y el ambito de un barrido ajeno no se hereda: se
  vuelve a elegir.
- **Como aplicarla:** antes de aceptar o rechazar un hallazgo, **rehacer su barrido con su patron y un
  ambito propio** — tipicamente el repositorio entero en vez de las carpetas que cita—, y publicar esa
  salida al lado de la del hallazgo. Si aparece algo mas, entra en la misma tarea y se dice que el
  hallazgo se quedo corto; si no aparece nada, el barrido propio es la prueba de que la lista estaba
  completa.

### L-018 - Un barrido de estado encuentra tambien el archivo que prohibe ese estado
| Campo | Valor |
|---|---|
| Fecha | 2026-09-17 |
| Etapa | 005_discovery |
| Origen | manager |

- **Contexto:** al listar que artefactos de la etapa seguian abiertos, para decir que faltaba para
  cerrarla. El barrido usado fue `grep -m1 -oE 'BORRADOR|CERRADO'` sobre cada archivo.
- **Que ocurrio:** clasifico el artefacto de la hipotesis como `BORRADOR`. No lo es: nace **`SELLADA`**
  y es el unico de los cuatro que nunca lleva `BORRADOR`. Lo que el barrido encontro fue la linea que
  **prohibe** ese estado — una advertencia en mayusculas que dice que el archivo no lleva `BORRADOR`—,
  y `-m1` la tomo por el valor porque aparece antes que la fila de cabecera. Con la misma orden se
  publicaron otras dos afirmaciones falsas sobre el mismo archivo —huecos sin rellenar y guia sin
  borrar—, que eran las citas de su propia seccion de comprobacion.
- **El coste estuvo a un paso de ser real:** ese archivo se sella con **un unico commit**, y un Gate
  posterior comprueba en el historial que devuelva una sola linea. Editarlo habria anadido un segundo
  commit y dejado al Gate sin nada contra que medir, sin forma de recuperar cual era la apuesta
  original. Lo que lo evito no fue el barrido: fue **leer el archivo entero antes de tocarlo**.
- **Leccion:** un barrido que busca un **valor** lo encuentra igual en la linea que lo asigna y en la
  que lo prohibe, lo advierte o lo cita — y `-m1` no elige la correcta, elige la primera. Un estado no
  se lee buscando su valor en el archivo: se lee en **el campo que lo declara**. Y la forma del fallo
  ya estaba escrita y conocida al cometerlo, en la misma jornada en que se trato dos veces.
- **Como aplicarla:** un barrido de estado se ancla a la **forma de la linea** del campo
  —`grep -m1 '^| Estado |'`—, nunca al valor suelto; y la salida se publica con la linea entera, que es
  lo que delata haber leido otra cosa. Antes de editar un archivo que un barrido senalo, **leerlo**: la
  lectura es el control que atrapa la mala clasificacion, y en un archivo irreversible es el unico.

### L-019 - Corregir el caso que cita un hallazgo, sin poner el control, deja el defecto reapareciendo
| Campo | Valor |
|---|---|
| Fecha | 2026-09-17 |
| Etapa | 005_discovery |
| Origen | manager |

- **Contexto:** al tratar un hallazgo que senalaba un ancla rota en el indice de la bitacora. Un
  hallazgo cita **un** sitio, y la reaccion natural es arreglar ese sitio y cerrar el asunto.
- **Que ocurrio:** el mismo defecto ya se habia detectado dieciseis sesiones antes, sobre otra fila del
  mismo archivo. Aquella vez se acepto, se corrigio **la fila citada**, una auditoria posterior lo
  verifico y el hallazgo se cerro como `Implementado` — todo correcto segun el procedimiento. Lo que no
  se puso fue un control, y al barrer el archivo entero aparecieron **seis** anclas rotas: la citada
  por el hallazgo nuevo y cinco mas, acumuladas en las sesiones intermedias sin que nadie las viera.
  Cinco de las seis ni siquiera tenian la causa del caso citado: eran titulos retocados despues de
  escribir su ancla.
- **Leccion:** un hallazgo cerrado como `Implementado` no significa que su defecto este resuelto:
  significa que **su instancia** lo esta. Si el defecto puede volver a producirse —y puede, siempre que
  dependa de que alguien se acuerde—, la correccion completa son dos cosas: la instancia y el control
  que detecta la siguiente. Sin la segunda, el cierre del hallazgo es lo que hace que nadie vuelva a
  mirar, y el defecto reaparece con la ventaja de estar declarado resuelto.
- **Como aplicarla:** al aceptar un hallazgo, antes de corregir, preguntar **dos** cosas: «¿cuantos
  sitios mas tienen esto?» —el barrido, que ya pide otra leccion— y «¿que impide que vuelva a pasar
  manana?». Si la respuesta a la segunda es «acordarse», el hallazgo no esta tratado hasta que exista
  un control mecanizado; y si ese control no se puede poner en la misma sesion, lo que queda no es una
  tarea sin mas, es **deuda tecnica declarada** con su `DT-XXX`, porque el hallazgo se va a cerrar
  igual y con el se va el unico recordatorio.

### L-020 - Al cambiar la estructura de un archivo, los controles que lo miden se reejecutan en la misma pasada
| Campo | Valor |
|---|---|
| Fecha | 2026-09-17 |
| Etapa | 005_discovery |
| Origen | manager |

- **Contexto:** al anadir una columna al indice de un archivo del registro que un control de cierre
  compara contra las fichas del mismo archivo.
- **Que ocurrio:** el control extraia el valor a comparar como «el penultimo campo de la fila»
  (`$(NF - 1)` en `awk`), asi que con la columna nueva pasaba a leer **otra columna**. Se corrigio en
  la misma pasada. Y despues se comprobo que habria pasado sin corregirlo, en vez de suponerlo: el
  control viejo, corrido sobre el archivo ya cambiado, devuelve las 22 filas como diferencias
  (`1,22c1,22`) — **falla ruidosamente**, porque `Registrado en` y `Estado` no se parecen. La sospecha
  de partida era la contraria, un verde falso, y la orden la desmintio.
- **Leccion:** un control que direcciona por posicion tiene una dependencia oculta con la estructura
  del archivo que mide, y al cambiar esa estructura **cambia de objeto sin que nadie lo toque**. Lo que
  no se puede suponer es **como** se va a manifestar: da un rojo escandaloso si los valores de las dos
  columnas se parecen poco, y un verde falso si se parecen mucho. Las dos son roturas; solo una avisa,
  y cual de las dos toca no lo decide el control, lo deciden los datos.
- **Como aplicarla:** cuando se cambie la estructura de un archivo que un control lee —una columna, un
  campo, el orden—, **buscar y reejecutar los controles que lo leen en la misma pasada**, y dejar su
  salida publicada; no se aplaza a la siguiente sesion. Y al escribir un control nuevo, preferir
  direccionar **por nombre** —el encabezado de la columna, el rotulo del campo— antes que por posicion,
  aunque cueste dos lineas mas de `awk`. ⚠️ **Y cuando se diga como habria fallado, se corre:** aqui la
  version inicial de esta leccion afirmaba el verde silencioso, que es la forma mas alarmante y la que
  primero viene a la cabeza, y la comprobacion mostro un rojo.

### L-021 - Una salida se pega de la ejecucion, nunca se predice, por trivial que parezca la orden
| Campo | Valor |
|---|---|
| Fecha | 2026-09-18 |
| Etapa | 005_discovery |
| Origen | manager |

- **Contexto:** al escribir el bloque «Criterio de cierre» de tres tareas nacidas de aceptar unos
  hallazgos, en la misma sesion en que se corregia un hallazgo cuyo defecto era exactamente ese: una
  cifra tecleada que la propia enumeracion contradecia.
- **Que ocurrio:** dos de las cifras publicadas se escribieron **antes** de correr su orden, porque
  parecian evidentes — un `grep -c` de un literal que se acababa de escribir una sola vez. Al
  reejecutarlas, las dos estaban mal: una devolvia `2` y no `1`, porque la propia linea de la orden
  cita el literal que busca; la otra devolvia `2` y no `1`, porque la palabra elegida ya aparecia en un
  parrafo ajeno del mismo archivo. Se corrigieron antes de commitear: una publicando el `2` verdadero
  con su explicacion, la otra afinando el literal a uno que solo aparece una vez.
- **Leccion:** la tentacion de teclear una salida es maxima justo cuando la orden parece trivial, y es
  ahi donde el registro se vuelve falso sin que nadie sospeche. Un `grep -c` sobre un texto recien
  escrito **no es predecible**: el archivo contiene tambien la orden que lo busca, las citas de ese
  texto en otras entradas, y las apariciones previas de la palabra elegida. Escribir la cifra que
  «tiene que salir» es hacer una prediccion y presentarla como evidencia.
- **Como aplicarla:** **correr la orden y pegar lo que devuelva, siempre, antes de escribir la cifra**
  — no despues, para «confirmar». Si el numero sorprende, la salida manda y lo que se ajusta es o bien
  el literal buscado, o bien la explicacion que acompana a la cifra; nunca la cifra. ⚠️ **Y la senal de
  alarma util es la confianza:** cuanto mas obvia parezca la salida, mas barato es correrla y mas caro
  es equivocarse, porque nadie la va a revisar.

### L-022 - El estado de una tarea no dice si su mecanismo funciona: eso lo dicen los supuestos que la respaldan
| Campo | Valor |
|---|---|
| Fecha | 2026-09-18 |
| Etapa | 010_prototype |
| Origen | manager |

- **Contexto:** en la puerta del protocolo de promocion —el punto donde se decide que se hereda al
  esqueleto del que partiran todos los proyectos siguientes—, dos de los seis candidatos eran el hook
  de cierre y la cabecera que lo declara.
- **Que ocurrio:** `manager` leyo la **fila del indice** de la tarea que los escribio, vio
  `No implementada`, y recomendo al usuario no promoverlos «porque el mecanismo no esta ejercitado».
  No abrio la ficha de la tarea ni los supuestos que la respaldan. Los dos existian y decian lo
  contrario: `A-006` y `A-007` estaban `Confirmado`, con la salida cruda de una sonda que probo los
  dos casos —el bloqueado y el permitido— dentro de un agente con la cabecera literal. Lo unico
  pendiente era una casilla formal: el criterio literal de la tarea pedia un reinicio que no hizo
  falta. El error se detecto al revisar `_persistence/` antes del cierre, **despues** de que la
  puerta se contestara y el commit del esqueleto estuviera subido.
- **Leccion:** `No implementada` responde «¿se cumplio el criterio de cierre tal como esta escrito?»,
  y **no** responde «¿funciona esto?». Las dos preguntas se separan en cuanto un criterio se redacta
  con una condicion que luego resulta innecesaria — y entonces el estado de la tarea se queda
  congelado en el `No` mientras la evidencia real vive en otro archivo. Citar el estado como si
  contestara la segunda pregunta es un error barato de cometer y caro de detectar, porque el dato que
  se cita es verdadero: lo falso es lo que se deduce de el.
- **Como aplicarla:** **antes de afirmar en una puerta que algo no esta probado, abrir la ficha de la
  tarea y los supuestos que nombra**, no la fila del indice. La fila sirve para priorizar; no sirve
  para fundamentar una recomendacion. ⚠️ **Y la senal de alarma es la forma del argumento:** en
  cuanto una recomendacion se apoya en un *estado* («sigue abierta», «no implementada», «pendiente»)
  en vez de en una *evidencia* («la sonda devolvio esto»), hay que ir a buscar la evidencia antes de
  decirla en voz alta. Vale doble donde la decision es dificil de revertir: en una puerta que escribe
  fuera del repositorio, una premisa falsa no la corrige nadie despues.

### L-023 - Un documento legal enlazado desde un sitio no siempre regula ese sitio: se lee su alcance antes de citarlo
| Campo | Valor |
|---|---|
| Fecha | 2026-09-18 |
| Etapa | 010_prototype |
| Origen | manager |

- **Contexto:** cerrar el supuesto de si estaba permitido leer de forma automatizada el historico
  publicado por la fuente externa del producto. Su forma de refutarlo, escrita de antemano, era leer
  las condiciones de uso publicadas y el `robots.txt`.
- **Que ocurrio:** el unico documento legal enlazado desde el pie del sitio resulto declarar en su
  encabezado **el alcance de otra plataforma del mismo grupo**, no el del sitio que se iba a leer. Si
  no se hubiera mirado esa linea, el documento se habria citado como «las condiciones de uso del
  sitio» —tanto para aprobar como para rechazar—, y el registro habria quedado afirmando algo que su
  propia fuente no dice. La conclusion practica no cambio; lo que cambio fue **sobre que se apoya**.
- **Leccion:** un documento enlazado desde un sitio no regula ese sitio **por estar enlazado ahi**.
  Antes de citarlo hay que leer que dice cubrir, y decirlo en el registro. Un texto legal
  fuera de alcance no se distingue de uno dentro de alcance por su contenido: los dos suenan a
  condiciones de uso, y el contenido es justo lo que se va a citar.
- **Como aplicarla:** al usar un documento externo como evidencia, **buscar primero su alcance
  declarado** —encabezado, objeto, ambito— y registrarlo junto a la cita. Y cuando resulte que no
  cubre lo que hace falta, **escribir que no existe documento aplicable** en vez de dejar que el mas
  parecido ocupe su sitio en silencio: «no hay condiciones de uso del sitio» es un hallazgo, y uno
  distinto de «las condiciones de uso lo permiten».

### L-024 - Un defecto que reaparece por cuarta vez no es un descuido: es un control que no mira donde hace falta
| Campo | Valor |
|---|---|
| Fecha | 2026-09-18 |
| Etapa | 010_prototype |
| Origen | manager |

- **Contexto:** la auditoria de la sesion anterior abrio un hallazgo sobre un hash que la nota de
  cierre debia publicar y dejo sin instanciar. Es el **cuarto** hallazgo de la misma familia: en los
  tres anteriores el hash estaba mal atribuido, o llegaba en un commit no declarado, o se
  autorreferenciaba.
- **Que ocurrio:** los tres anteriores se cerraron **corrigiendo el caso concreto por nota**, cada vez
  con su tarea y su decision, sin tocar el control que debia haberlo visto. El control ancla su patron
  a principio de linea y el marcador va **inline**; el otro control comprueba que los rotulos
  **existan**, no que su contenido este relleno. Entre los dos dejaban sin vigilar exactamente el dato
  que el mecanismo existe para publicar.
- **Leccion:** la reincidencia **es el dato**, y llega gratis: no hay que investigarla, basta con
  contar. Una vez es un descuido; cuatro veces con el mismo mecanismo fallando por cuatro caras
  distintas es un control mal colocado, y corregir el caso sin corregir el control **garantiza la
  quinta**. Ademas cada correccion por nota se siente como progreso —hay una tarea, hay una decision,
  hay evidencia—, y eso es justo lo que permite que la serie siga sin que nadie la sume.
- **Como aplicarla:** al evaluar un hallazgo, **preguntar si ya hubo otros de la misma familia** y
  contarlos. A partir del segundo, la correccion aceptable tiene **dos mitades**: el caso, y el
  control que no lo vio. Si la segunda mitad no cabe en la sesion, se abre como tarea con el recuento
  escrito dentro — de modo que quien la lea vea la serie, y no un caso aislado mas.

### L-025 - Un bloque de verificacion se escribe DESPUES de correr la orden, nunca antes
| Campo | Valor |
|---|---|
| Fecha | 2026-09-18 |
| Etapa | 010_prototype |
| Origen | manager |

- **Contexto:** al registrar la tarea que completaba por nota el anclaje de una sesion anterior,
  `manager` redacto la ficha entera de un tiron —incluido su bloque «Verificacion»— y **puso las
  cifras que esperaba** de tres ordenes: dos recuentos y una linea literal.
- **Que ocurrio:** al correrlas de verdad, dos de las tres cifras eran falsas. Los recuentos reales
  eran el doble y el cuadruple de lo escrito, porque el archivo ya contenia menciones previas que la
  estimacion no considero. Se corrigieron pegando la salida cruda antes de commitear, y el error se
  declaro en la respuesta al usuario.
- **Leccion:** escribir la salida antes de correr la orden produce **evidencia falsa, no evidencia que
  falta** — y es peor que no poner el bloque, porque un numero concreto se lee como comprobado. El
  riesgo no esta en las ordenes dificiles: las dos que fallaron eran `grep -c`, las mas faciles del
  bloque, y precisamente por eso parecieron seguras de estimar.
- **Como aplicarla:** la orden se corre **primero**, y su salida se pega **copiada**, nunca tecleada
  ni reconstruida de memoria. Si al redactar una ficha hace falta dejar el bloque para despues, se
  deja **vacio**: un hueco visible se corrige, una cifra plausible no se vuelve a mirar. Vale igual
  para los recuentos que uno «ya sabe» cuanto dan.

### L-026 - Una respuesta dictada que admite dos lecturas se pregunta antes de escribirla, y se declara de donde salio la aclaracion
| Campo | Valor |
|---|---|
| Fecha | 2026-09-18 |
| Etapa | 010_prototype |
| Origen | manager |

- **Contexto:** los registros de sesion del prototipo los transcribe `manager` al dictado de la
  facilitadora. En dos sesiones seguidas, la respuesta a «¿Como haces esto hoy?» llego en una forma
  que admitia mas de una lectura: «Realmente hoy no lo hago» en la primera y «No hubo» en la segunda.
- **Que ocurrio:** en la segunda, «No hubo» podia significar que no se hizo la pregunta, que no hubo
  respuesta o que no hubo seguimiento. `manager` no relleno ninguna de las tres: pregunto, y la
  aclaracion llego durante la transcripcion, no durante la sesion. Se escribio lo dictado y, aparte,
  la aclaracion con su procedencia (`D-099`). De esa respuesta dependian tres casillas de §1, entre
  ellas «¿Encajo en el perfil?».
- **Leccion:** en un registro que decide un Gate, elegir en silencio la lectura mas plausible de una
  respuesta ambigua es fabricar el dato. Y una aclaracion obtenida despues de la sesion no pesa lo
  mismo que una respuesta dada en ella: si el registro no dice de donde salio, las dos se leen igual.
- **Como aplicarla:** ante una respuesta dictada que admite mas de una lectura, se ofrecen al que
  dicta las lecturas posibles y se espera su eleccion antes de escribir. La respuesta original se
  conserva literal, y la aclaracion se anade al lado diciendo **cuando y por quien** se dio. Si la
  misma pregunta resulta ambigua en sesiones seguidas, la facilitadora puede hacer el seguimiento
  **en la sesion**, como en la primera, en vez de dejarlo para la transcripcion.

### L-027 - Un comentario que llega en estilo indirecto ya no se puede volver literal: las palabras exactas se anotan en la sesion
| Campo | Valor |
|---|---|
| Fecha | 2026-09-19 |
| Etapa | 010_prototype |
| Origen | manager |

- **Contexto:** los registros de sesion del prototipo los transcribe `manager` al dictado de la
  facilitadora, y la plantilla exige los comentarios espontaneos **entrecomillados**, con las palabras
  exactas del participante.
- **Que ocurrio:** en la sesion `004` el unico comentario espontaneo llego como «menciono que le
  gustaria que…». Las respuestas de §7 si llegaron en primera persona. No habia cita que recuperar, y
  el comentario quedo en §6 declarado como **transmitido, no literal** (`D-104`).
- **Leccion:** el estilo indirecto no es un formato que se pueda corregir al transcribir: es la
  version de quien lo oyo, y la cita original ya no existe en ningun sitio. Entrecomillarlo despues
  seria fabricar el dato; dejarlo sin marcar lo haria pasar por literal.
- **Como aplicarla:** antes de cada sesion se recuerda a la facilitadora que los comentarios
  espontaneos se anotan **en el momento y con las palabras exactas**, igual que las respuestas de §7.
  Si aun asi llegan en estilo indirecto, se registran declarados como transmitidos y la decision de la
  sesion lo dice.

### L-028 - Un criterio de cierre tiene que leer cada sitio que la decision dice cambiar, no solo el primero
| Campo | Valor |
|---|---|
| Fecha | 2026-09-19 |
| Etapa | 010_prototype |
| Origen | report_auditor |

- **Contexto:** en este registro, un supuesto, un hallazgo o una tarea viven en dos sitios del mismo
  archivo: la fila del indice y la ficha. Una decision que cambia el estado tiene que cambiar los dos.
- **Que ocurrio:** `D-079` decidio pasar `A-004` y `A-005` a `Confirmado` «en el indice y en la
  ficha», y solo cambio el indice. Su criterio de cierre solo leia filas del indice, asi que dio por
  buena una decision a medio hacer, y el desfase siguio de `S-019` a `S-026` hasta que `R-028` lo vio
  (`F-037`, `D-105`).
- **Leccion:** un criterio que solo comprueba una parte de lo que la decision afirma no puede fallar
  en la otra parte. Da el mismo resultado tanto si esa parte se hizo como si no, y por eso no la
  respalda.
- **Como aplicarla:** al escribir el criterio de cierre, se recorren los sitios que nombra la
  **Decision** («en el indice y en la ficha», «en la tabla y en la nota») y cada uno lleva su orden.
  Si dos sitios deben decir lo mismo, la orden los compara entre si, como hace el `diff` de `D-105`,
  en vez de contar solo uno.
