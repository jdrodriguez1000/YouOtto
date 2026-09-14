# Esqueleto de arranque

> Punto de partida para un proyecto de desarrollo de software con este metodo: la estructura, los
> protocolos, los agentes y las plantillas — **sin un solo dato de ningun producto**.

---

## Que es esto, y que no

**Es un original.** No una carpeta de ejemplo que cada quien copia y retoca por su cuenta: de aqui
parten todos los proyectos nuevos, y lo que se arregle aqui lo heredan todos los siguientes.

**No es un producto ni un proyecto.** No tiene alcance, no tiene etapa activa, no tiene historia. Su
`_persistence/` esta vacio a proposito: son las plantillas en su sitio, esperando al primer cierre
de sesion de un proyecto de verdad.

🚨 **Y no se edita para probar cosas.** Un cambio hecho aqui «para ver que pasa» viaja a todos los
proyectos que arranquen despues. El andamiaje viaja en **un solo sentido** —un proyecto lo mejora y
lo promueve hacia aqui, nunca al reves—, y quien rompa ese sentido dejara el original por detras de
una copia sin que nadie lo note.

---

## 1. Arrancar un proyecto nuevo

Cinco ordenes, **y el orden importa**:

```bash
git clone <url de este repositorio> <carpeta del proyecto>
cd <carpeta del proyecto>
git log -1 --format=%H          # 👈 ANOTA este hash: va a project.md y no se recupera despues
rm -rf .git
git init
git remote add origin <url del remoto del proyecto nuevo>
```

🚨 **No copies la carpeta con el explorador.** Una copia arrastra `.git/` **con el remoto de este
esqueleto dentro**, y entonces el primer `git push` del proyecto nuevo sube **aqui**. Eso rompe el
sentido unico por el peor sitio, y un push es irreversible: lo que se publico ya lo pudo clonar
cualquiera.

🔑 **Por que se clona y luego se borra el historial.** El dato que hace falta conservar no es el
historial: es **de que version se partio**, y eso cabe en un hash. El clone es lo unico que lo
produce de forma comprobable. Conservarlo entero mezclaria los commits del andamiaje con los del
producto, y el primer commit del proyecto dejaria de ser su primera sesion.

⚠️ **El hash se anota antes de `rm -rf .git`.** Despues ya no existe. Si se te paso, vuelve a clonar
en una carpeta desechable y leelo alli — no lo estimes ni lo copies «de memoria».

---

## 2. Lo que un clone NO trae

| Que | Por que | Que hacer |
|---|---|---|
| `temporal/` | esta en `.gitignore`, y git no versiona carpetas vacias | nada al arrancar: **creala a mano cuando la necesites** (`mkdir temporal`) |
| cualquier archivo ignorado | por definicion no esta versionado | nada: no deberia haber ninguno |

🔑 **Que `temporal/` no venga es a proposito, no un olvido.** Es el area de trabajo del usuario, y la
crea el cuando le haga falta. Lo que si tiene que estar desde el principio es **su linea en
`.gitignore`**, y ya viene puesta: sin ella, el `git add -A` del cierre commitearia su contenido
entero.

---

## 3. Rellenar: los diez archivos de instancia

Estos diez **son sus plantillas, copiadas tal cual**, y siguen siendolo: cada promocion que actualiza
una plantilla regenera tambien su copia, asi que lo que clonas nunca va por detras. Es lo primero que
se toca, y lo unico que se rellena:

| # | Archivo | Su plantilla |
|---|---|---|
| 1 | `project.md` | `_templates/000_preproject/005_project.md` |
| 2 | `_persistence/progress.md` | `_templates/000_preproject/010_progress.md` |
| 3 | `_persistence/tasks.md` | `_templates/000_preproject/015_tasks.md` |
| 4 | `_persistence/decisions.md` | `_templates/000_preproject/020_decisions.md` |
| 5 | `_persistence/constraints.md` | `_templates/000_preproject/025_constraints.md` |
| 6 | `_persistence/assumptions.md` | `_templates/000_preproject/030_assumptions.md` |
| 7 | `_persistence/lessons.md` | `_templates/000_preproject/035_lessons.md` |
| 8 | `_persistence/techdebt.md` | `_templates/000_preproject/040_techdebt.md` |
| 9 | `_audit/index.md` | `_templates/000_preproject/045_audit_index.md` |
| 10 | `_audit/findings.md` | `_templates/000_preproject/050_audit_findings.md` |

**En cada uno de los diez se hacen dos cosas, y solo dos:**

1. **Se borra el prologo de plantilla** — el bloque «📄 Se copia a …» de la cabecera. Dice como
   instanciar el archivo; una vez instanciado, sobra.
2. **Se borran los ejemplos**, que van marcados como tales.

⛔ **Lo que NO se borra son las convenciones.** Cada archivo abre con su indice y sus reglas —estados
validos, campos obligatorios, que significa cada columna—, y eso es el archivo, no decoracion.
`CLAUDE.md` obliga a leerlas antes de escribir en el.

### `project.md` es el unico que ademas se rellena

Es **el unico archivo del proyecto que guarda datos propios**: todo lo que en los protocolos, en los
agentes y en `CLAUDE.md` aparece como «el proyecto», «el remoto» o «las carpetas declaradas» se
resuelve aqui. Sus huecos van entre `<angulos>`. Cuando no quede ninguno, esta hecho:

```bash
grep -noE '<[^>]{1,60}>' project.md
```

🚨 **Rellenarlo no es opcional ni se puede posponer.** Varios controles del cierre leen sus valores:
un valor que este archivo no declare deja **sin poder ejecutarse** al control que lo usaba, y eso va
al reporte como `SIN COMPROBAR`. Un repositorio con este archivo a medias no arranca mal — arranca
**sin controles**.

**Tres de esos huecos son los que dicen de donde saliste**, y se rellenan con lo del paso 1:

| Fila | Con que |
|---|---|
| Esqueleto de arranque — repositorio | la ruta absoluta del esqueleto en esta maquina, o un guion si no lo tienes clonado |
| Esqueleto de arranque — remoto | la url de este repositorio |
| Esqueleto de arranque — version de partida | **el hash que anotaste antes de borrar `.git`** |

🔑 **La de «version de partida» no se vuelve a tocar nunca.** Las otras dos cambian si el esqueleto se
mueve; esa dice de que version del andamiaje partio el proyecto, y eso ya no cambia.

### Y uno que esta vacio a proposito

`_brief/client_brief.md` llega **vacio y sin plantilla**: ahi va el encargo del cliente **tal como lo
entregue**, ordenado o no, con la informacion como el la haya escrito. No se le da forma: es una
entrada, no una decision del equipo. Lo que el equipo decida hacer con el vive en
`_persistence/decisions.md`. Que el brief describa algo no significa que este decidido.

---

## 4. Lo que no se toca

Seis areas **agnosticas**: describen el metodo, no el producto. Llegan completas y funcionando, y un
proyecto nuevo no tiene nada que rellenar en ellas.

| Area | Que es |
|---|---|
| `CLAUDE.md` | las reglas de trabajo: quien decide, quien audita, que se registra y cuando |
| `.claude/` | los agentes y las skills de los protocolos |
| `_phases/` | que autoriza, que prohibe y cuando se sale de cada etapa |
| `_methodology/` | el metodo de desarrollo: que etapas existen y que pregunta responde cada una |
| `_templates/` | las plantillas, con sus huecos sin rellenar |
| `_workflow/` | el reparto de trabajo: humano, proceso determinista o IA, y con cuanta autonomia |

⚠️ **`_methodology/` describe el metodo; no declara las etapas de tu proyecto.** Las declaradas son
las que diga tu `project.md`, y ninguna otra.

🚨 **Si necesitas cambiar algo de estas seis, cambialo en tu proyecto y promuevelo despues.** Ese es
el sentido unico: tu proyecto es donde se descubre que algo falta, y este repositorio es donde se
conserva. La promocion lleva puerta — nada sube aqui sin que una persona lo apruebe, archivo por
archivo.

---

## 5. El primer ciclo de trabajo

Con los diez archivos instanciados y `project.md` sin huecos:

1. **Primer commit del proyecto.** Es su primera sesion, no un arrastre del andamiaje.
2. **Abre sesion.** La primera peticion de cualquier conversacion dispara el protocolo de inicio: lee
   el estado, el registro y los hallazgos abiertos, y dice donde esta el proyecto. Es de solo lectura.
3. **Trabaja**, registrando el porque **en el momento** — decisiones, restricciones, supuestos y
   lecciones se escriben cuando pasan, no al final de la jornada. No aparecen en ningun `git diff`:
   si no se escriben, se pierden.
4. **Cierra sesion.** El protocolo de cierre recoge la evidencia con `git`, actualiza el estado, deja
   el informe de la sesion en `_audit/` y hace el commit con su push.
5. **Audita.** Despues del push, y solo despues, corre la auditoria sobre **ese commit**. Sus
   hallazgos se trabajan en la sesion siguiente.

🔑 **El orden 4 → 5 no es negociable.** El valor entero de una auditoria es que se pueda reproducir:
con el hash delante, cualquiera corre `git show` y contrasta. Auditar trabajo sin commitear obliga a
juzgar algo que ya no existe cuando alguien va a comprobarlo.

⚠️ **La auditoria la lanza el propio auditado.** Si no se lanza, no hay auditoria y nadie lo nota.
Por eso es el ultimo paso del cierre, y no algo que se hace «cuando haga falta».

---

## 6. Las dos cosas que hay que entender antes de empezar

**Todo lo producido, decidido o asumido va a un archivo.** Lo que solo vive en la conversacion se
pierde al cerrarla. No es burocracia: es la unica razon por la que una sesion puede continuar el
trabajo de otra.

**Nada se da por terminado sin algo que lo respalde.** Si la tarea produce codigo, un test en verde;
si produce documentacion o registro, su bloque de verificacion — **la orden ejecutada literal y su
salida cruda**. No hay una tercera casilla. Lo que no se puede comprobar no esta hecho: esta
afirmado.
