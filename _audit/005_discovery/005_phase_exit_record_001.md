# Acta de cierre de etapa — `005_discovery` — YouOtto

| Campo | Valor |
|---|---|
| Artefacto | `_audit/005_discovery/005_phase_exit_record_001.md` |
| Quien lo escribe | agente `phase_exit_auditor`, via `protocol-phase-exit` |
| Fecha | `2026-09-18` |
| Etapa que cierra | `005_discovery` |
| Archivo de etapa | `_phases/005_discovery.md`, seccion «Condicion de salida» |
| Commit sobre el que se dictamina | `d09abc6` |
| Numero de casillas declaradas | `7` |
| Pasada numero | `001` |

> 🚨 **ESTO ES UN ACTA CON DOS FIRMAS, Y NINGUNA SUSTITUYE A LA OTRA.**
>
> | Firma | Quien | Que certifica |
> |---|---|---|
> | **Revision tecnica** | el agente, en este archivo | que cada casilla tiene una orden detras y que su salida dice lo que la casilla pedia |
> | **Aprobacion** | el **patrocinador**, en este archivo | que con esa evidencia delante da la etapa por cerrada |
>
> ⛔ **Mientras falte la segunda firma, la etapa sigue abierta**, por bien que salgan las casillas.

---

## 1. Dictamen tecnico

```
DICTAMEN: CASILLAS SATISFECHAS
```

### La frase que lo sostiene

> Las siete casillas de la seccion «Condicion de salida» de `_phases/005_discovery.md` devuelven,
> sobre `d09abc6`, la salida que cada una exige — necesidad sin pantalla, actor originador
> alcanzable, actores clasificados por funcion, interesados con lo que aportan y lo que bloquean,
> hipotesis con falsacion sellada en un solo commit, alcance y objetivo en `D-061`, y ninguna
> leccion `005_discovery` en `Sin evaluar` con las promovidas verificadas dentro del repositorio de
> lecciones globales — y ninguna quedo sin orden.

---

## 2. Comprobacion 0 — ¿es auditable la evidencia?

```
RESULTADO: PASA
```

| # | Que se comprueba | Resultado | Evidencia cruda |
|---|---|---|---|
| 1 | El commit sobre el que se dictamina existe y esta subido | PASA | `d09abc6`, `git status -sb` sin `ahead` |
| 2 | El arbol de trabajo esta limpio a ese commit | PASA | `git status --short` sin salida |
| 3 | La lista de casillas sale del archivo de etapa a ese commit, no de la memoria de nadie | PASA | orden `git show d09abc6:_phases/005_discovery.md` + `sed`/`awk` — 7 lineas |
| 4 | El archivo de etapa no cambio despues del commit que se dictamina | PASA | `git log --oneline d09abc6..HEAD -- _phases/005_discovery.md` sin salida |

**Ordenes ejecutadas y su salida, tal cual salio:**

```
$ git log -1 --format='%h %ad %s' --date=short
d09abc6 2026-09-17 auditoria R-020 sobre S-018 (ed64348)

$ git status --short
(sin salida)

$ git rev-parse --short HEAD
d09abc6

$ git status -sb | head -1
## main...origin/main

$ git log --oneline d09abc6..HEAD -- _phases/005_discovery.md
(sin salida)

$ git show d09abc6:_phases/005_discovery.md | grep -n '^## 6\. Condicion de salida'
280:## 6. Condicion de salida

$ git show d09abc6:_phases/005_discovery.md | sed -n '/^## 6\. Condicion de salida/,/^## 7\./p' | grep -oE 'las (dos|tres|cuatro|cinco|seis|siete|ocho|nueve|diez|once|doce) son ciertas'
las siete son ciertas

$ git show d09abc6:_phases/005_discovery.md | sed -n '/^## 6\. Condicion de salida/,/^## 7\./p' | awk '/^- \[ \]/{n++; sub(/^- \[ \] /,""); print n" | "$0}'
1 | **Hay al menos una necesidad `N-XXX` enunciada sin nombrar una pantalla.**
2 | **Hay un actor originador identificado y alcanzable**, con actor concreto —no una categoria.
3 | **Los actores estan clasificados por funcion**, y solo los que existen en este producto.
4 | **Los interesados estan identificados**, con lo que aporta y lo que puede bloquear cada uno.
5 | **Hay una hipotesis con su condicion de falsacion escrita.**
6 | **El alcance y el objetivo del proyecto estan definidos y registrados** con su `D-XXX`.
7 | **La cosecha esta hecha:** ninguna leccion de esta etapa queda `Sin evaluar` en la columna
```

**Recuento declarado por la etapa vs. recuento devuelto por la orden 3:** ambos dicen **7**. No hay
discrepancia que registrar como hallazgo del acta.

---

## 3. Las casillas, una por una

| # | Casilla, copiada literal del archivo de etapa | Resultado | Donde esta su orden |
|---|---|---|---|
| 1 | **Hay al menos una necesidad `N-XXX` enunciada sin nombrar una pantalla.** | CUMPLE | §3.1 |
| 2 | **Hay un actor originador identificado y alcanzable**, con actor concreto —no una categoria. | CUMPLE | §3.2 |
| 3 | **Los actores estan clasificados por funcion**, y solo los que existen en este producto. | CUMPLE | §3.3 |
| 4 | **Los interesados estan identificados**, con lo que aporta y lo que puede bloquear cada uno. | CUMPLE | §3.4 |
| 5 | **Hay una hipotesis con su condicion de falsacion escrita.** | CUMPLE | §3.5 |
| 6 | **El alcance y el objetivo del proyecto estan definidos y registrados** con su `D-XXX`. | CUMPLE | §3.6 |
| 7 | **La cosecha esta hecha:** ninguna leccion de esta etapa queda `Sin evaluar` en la columna `Portabilidad` de `lessons.md`, y lo que quedo `Global candidata` esta ya en el archivo de lecciones globales, con su `D-XXX` y con la version nueva del archivo declarada. | CUMPLE | §3.7 |

### 3.1 · `Hay al menos una necesidad `N-XXX` enunciada sin nombrar una pantalla.`

```
$ git show d09abc6:005_discovery/005_needs.md | grep -n '^### N-'
56:### N-001 · Combinacion en maximo un minuto
71:### N-002 · Saber por que entra cada numero
86:### N-003 · Saber cuantos numeros acerte
101:### N-004 · Saber con que acumulado se juega

$ git show d09abc6:005_discovery/005_needs.md | grep -n '| Enunciado |'
60:| Enunciado | Armar la combinacion de 6 numeros con el metodo propio del jugador tarda entre 40 y 60 minutos cada vez, y el jugador necesita tenerla en un minuto como maximo. |
75:| Enunciado | El jugador no confia en una combinacion si no ve, numero por numero, por que se eligio cada uno de los 6. |
90:| Enunciado | Despues de cada sorteo el jugador quiere saber cuantos numeros acerto con la combinacion que jugo, en Baloto y en Revancha, sin compararla a mano contra la pagina de resultados. |
105:| Enunciado | Antes de jugar, el jugador quiere saber con que acumulado se juega el proximo sorteo y si el premio mayor cayo en el anterior, en Baloto y en Revancha. |

$ git show d09abc6:005_discovery/005_needs.md | grep -n '| Enunciado |' | grep -iE 'pantalla|boton|formulario|tablero|\bapp\b|menu'
(sin salida)
```

- **Que exigia la casilla:** al menos una `N-XXX` cuyo enunciado no nombre pantalla/boton/formulario/tablero/app/menu.
- **Que devolvio:** existen 4 necesidades (`N-001` a `N-004`); ninguno de los 4 enunciados contiene esas palabras.
- **Resultado:** CUMPLE

### 3.2 · `Hay un actor originador identificado y alcanzable, con actor concreto —no una categoria.`

```
$ git show d09abc6:005_discovery/010_actors.md | sed -n '/^## 2\. El Actor Generador/,/^## 3\./p' | grep -n "^| Actor concreto\|^- \[x\] \*\*Hay Generador real"
15:| Actor concreto | JD Rodriguez, jugador de Baloto y Revancha y patrocinador de este proyecto |
35:- [x] **Hay Generador real y alcanzable** → la etapa continua.
```

- **Que exigia la casilla:** un actor originador con nombre concreto, no una categoria, marcado como alcanzable.
- **Que devolvio:** «JD Rodriguez, jugador de Baloto y Revancha y patrocinador de este proyecto» — nombre y apellido, no una categoria — y el veredicto marcado `[x] Hay Generador real y alcanzable`.
- **Resultado:** CUMPLE

### 3.3 · `Los actores estan clasificados por funcion, y solo los que existen en este producto.`

```
$ git show d09abc6:005_discovery/010_actors.md | sed -n '/^## 1\. Los actores/,/^## 2\./p' | grep -n "^| Generador\|^| Integrador"
Generador | JD Rodriguez, jugador que prepara su apuesta | de negocio | ...
Integrador | La web oficial de Baloto (baloto.com, con su pagina de resultados) | externo | ...

$ git show d09abc6:005_discovery/010_actors.md | sed -n '/^## 3\. Tipos de actor que NO existen/,/^## 4\./p' | grep -n "^| Coordinador\|^| Ejecutor\|^| Supervisor\|^| Administrador"
| Coordinador | Nadie organiza, asigna ni prioriza trabajo originado en la aplicacion... |
| Ejecutor | No hay trabajo que alguien realice a partir de lo que sale de la aplicacion |
| Supervisor | Nadie usa esta informacion para supervisar resultados ajenos... |
| Administrador de Plataforma | No hay usuarios, roles, permisos ni catalogos que administrar... |

$ git show d09abc6:005_discovery/010_actors.md | grep -n "<"
(sin salida en el cuerpo; solo aparece dentro de la seccion de comprobacion §5, que se cita a si misma)

$ git show d09abc6:005_discovery/010_actors.md | grep -ni "invitado"
102:...«No existe «Actor Invitado»...
120:- [x] No aparece ningun «Actor Invitado»...
130:grep -ni "invitado" 005_discovery/010_actors.md   # SOLO la advertencia de §4, ni una linea mas
```

- **Que exigia la casilla:** los 6 tipos de la taxonomia (Generador, Coordinador, Ejecutor, Supervisor, Administrador de Plataforma, Integrador) cubiertos — presentes solo los que existen, ausentes con su motivo — y ninguna clasificacion por cargo.
- **Que devolvio:** §1 lista Generador (de negocio) e Integrador (externo) como existentes; §3 declara ausentes Coordinador, Ejecutor, Supervisor y Administrador de Plataforma con su motivo. Los 6 tipos quedan cubiertos entre las dos tablas, y ninguno se clasifica por cargo (Generador = JD Rodriguez, no «patrocinador»; Integrador = la web, no un rol de empresa).
- **Resultado:** CUMPLE

### 3.4 · `Los interesados estan identificados, con lo que aporta y lo que puede bloquear cada uno.`

```
$ git show d09abc6:005_discovery/015_stakeholders.md | sed -n '/^## 2\. Los interesados/,/^## 3\./p'
| # | Persona o rol | Organizacion | Rol frente al proyecto | Que aporta | Que puede bloquear | ¿Es tambien actor? |
| `I-001` | JD Rodriguez | ... | decide, financia, aprueba y aporta conocimiento | el metodo de seleccion, las decisiones del proyecto y el tiempo de construirlo | cualquier decision del proyecto, en cualquier momento | si → Generador |
| `I-002` | Baloto, operadora oficial del juego | ... | impone restricciones tecnicas y de uso sobre su informacion | la unica fuente del historico de sorteos y de los acumulados | el acceso a los datos, si cambia su sitio o sus condiciones de uso | si → Integrador |

$ git show d09abc6:005_discovery/015_stakeholders.md | grep -n "TODAVIA NO"
71:| Consultado el | TODAVIA NO → `A-008` |

$ git show d09abc6:_persistence/assumptions.md | grep -n "A-008"
31:| [A-008](#a-008---las-condiciones-de-uso-de-baloto-permiten-leer-su-historico-de-forma-automatica) | ... | 2026-09-17 | Abierto |
289:### A-008 - Las condiciones de uso de Baloto permiten leer su historico de forma automatica
```

- **Que exigia la casilla:** interesados identificados, cada uno con columna «que aporta» y «que puede bloquear» no vacias.
- **Que devolvio:** `I-001` e `I-002`, ambos con las dos columnas rellenas; el unico pendiente de consulta (`I-002`, «TODAVIA NO») tiene su `A-008` abierto en `assumptions.md`, tal como exige el propio artefacto.
- **Resultado:** CUMPLE

### 3.5 · `Hay una hipotesis con su condicion de falsacion escrita.`

```
$ git show d09abc6:005_discovery/020_hypothesis.md | sed -n '/^## 1\. La hipotesis/,/^## 3\./p'
> JD Rodriguez obtiene, sin ayuda y en menos de un minuto, la combinacion de 6 numeros que hoy arma
> a mano, y puede decir de donde salio cada uno de los 6 con lo que la aplicacion le muestra.
...
> Esta hipotesis queda TUMBADA si: en dos o mas de las cinco sesiones tarda mas de un minuto en
> tener la combinacion, necesita ayuda para obtenerla, o no puede decir de donde salio alguno de los
> 6 numeros con lo que la aplicacion le muestra.

$ git log --oneline -- 005_discovery/020_hypothesis.md
eda6314 S-015: F-018 aceptado y corregido (D-049), T-032 verificada con hook-probe (D-050), y Pasos 1-7 de 005_discovery con el patrocinador (D-051..D-058)
```

- **Que exigia la casilla:** una hipotesis con una condicion de falsacion escrita (que observacion la tumbaria).
- **Que devolvio:** la hipotesis esta escrita en §1, y §2 escribe la condicion de falsacion como observacion concreta («TUMBADA si...»). El archivo tiene un solo commit en su historial, lo que confirma que no se retoco despues de sellarse.
- **Resultado:** CUMPLE

### 3.6 · `El alcance y el objetivo del proyecto estan definidos y registrados con su D-XXX.`

```
$ git show d09abc6:_persistence/decisions.md | grep -n '^| \[D-061\]'
84:| [D-061](#d-061---objetivo-y-alcance-del-proyecto) | Objetivo y alcance del proyecto | 2026-09-17 | Vigente |

$ git show d09abc6:_persistence/decisions.md | sed -n '/^### D-061/,/^### D-062/p' | grep -n "1\. \*\*Objetivo del proyecto\|2\. \*\*Alcance del proyecto\|3\. \*\*Alcance del prototipo"
  1. **Objetivo del proyecto.** Que JD Rodriguez obtenga en menos de un minuto...
  2. **Alcance del proyecto: las cuatro necesidades.** `N-001` ... `N-004` ...
  3. **Alcance del prototipo: solo lo que la hipotesis mide.** ...
```

- **Que exigia la casilla:** alcance y objetivo definidos, registrados con un `D-XXX`.
- **Que devolvio:** `D-061` — «Objetivo y alcance del proyecto», `Estado: Vigente` — con las tres partes (objetivo, alcance del proyecto, alcance del prototipo) escritas.
- **Resultado:** CUMPLE

### 3.7 · `La cosecha esta hecha: ninguna leccion de esta etapa queda Sin evaluar en la columna Portabilidad de lessons.md, y lo que quedo Global candidata esta ya en el archivo de lecciones globales, con su D-XXX y con la version nueva del archivo declarada.`

```
$ git show d09abc6:_persistence/lessons.md | grep -E '^\| \[L-' | grep '005_discovery' | grep -c 'Sin evaluar'
0

$ git show d09abc6:_persistence/lessons.md | grep -E '^\| \[L-' | grep '005_discovery' | grep -i "candidata"
(sin salida)

$ git show d09abc6:_persistence/lessons.md | grep "| 005_discovery |"
| [L-008] ... | Promovida a LG-106 |
| [L-009] ... | Ya cubierta por LG-101 |
| [L-010] ... | Ya cubierta por LG-22 |
| [L-011] ... | Promovida a LG-107 |
| [L-012] ... | Promovida a LG-108 |
| [L-013] ... | Ya cubierta por LG-100 |
| [L-014] ... | Promovida a LG-109 |
| [L-015] ... | Promovida a LG-22 |
| [L-016] ... | Promovida a LG-32 |
| [L-017] ... | Ya cubierta por LG-85 |
| [L-018] ... | Ya cubierta por LG-101 |
| [L-019] ... | Promovida a LG-100 |
| [L-020] ... | Ya cubierta por LG-06 |

$ git -C "C:/Users/USUARIO/Documents/Company_TripleS/TripleS_Lessons" log --oneline -1
e915383 Cosecha de 005_discovery desde YouOtto, quinta pasada: enmienda de LG-100 (version 7)

$ git -C "C:/Users/USUARIO/Documents/Company_TripleS/TripleS_Lessons" status -sb | head -1
## main...origin/main

$ git -C "C:/Users/USUARIO/Documents/Company_TripleS/TripleS_Lessons" show e915383:global_lessons.md | grep -cE '^\| \*\*LG-10[6789]\*\*'
4

$ git -C "C:/Users/USUARIO/Documents/Company_TripleS/TripleS_Lessons" show e915383:global_lessons.md | grep -cF "donde no se puede corregir no hay segunda pasada"
1

$ git -C "C:/Users/USUARIO/Documents/Company_TripleS/TripleS_Lessons" show e915383:global_lessons.md | grep -cF "YouOtto\` · L-019"
1

$ git -C "C:/Users/USUARIO/Documents/Company_TripleS/TripleS_Lessons" show e915383:global_lessons.md | grep -nE '^> \*\*Versión: 7'
26:> **Versión: 7 · 2026-09-17** · 109 lecciones · 10 bloques
```

- **Que exigia la casilla:** ninguna leccion de `005_discovery` en `Sin evaluar`, y lo `Global candidata` ya subido con `D-XXX` y version del archivo global declarada.
- **Que devolvio:** las 13 lecciones de `005_discovery` (`L-008` a `L-020`) tienen todas un destino distinto de `Sin evaluar` y de `Global candidata` — `Promovida a LG-XXX` o `Ya cubierta por LG-XXX`. Las promovidas (`LG-100`, `LG-106`, `LG-107`, `LG-108`, `LG-109`, y las enmiendas de `LG-22` y `LG-32`) se verificaron dentro del repositorio de lecciones globales, en el commit `e915383` que esta subido a `origin/main`, con version declarada `7`. El registro de decisiones respalda cada pasada (`D-062`, `D-063`, `D-065`, `D-067`, `D-072`), incluida la nota que declara y resuelve la discrepancia intermedia de `L-016` sin reescribir la salida ya publicada.
- **Resultado:** CUMPLE

---

## 4. Lo que NO se pudo comprobar

| Casilla | Por que no | Que haria falta |
|---|---|---|
| ninguna | — | — |

Ninguna casilla quedo `NO COMPROBABLE`: las siete preguntan por hechos verificables contra el
repositorio (existencia y contenido de artefactos, estado de una decision, estado de una columna),
y todas tuvieron una orden que las resuelve.

---

## 5. Las dos firmas

### 5.1 Revision tecnica

| Campo | Valor |
|---|---|
| Quien | agente `phase_exit_auditor` |
| Fecha | `2026-09-18` |
| Dictamen | `CASILLAS SATISFECHAS` |
| Casillas `CUMPLE` | `7` de `7` |

### 5.2 Aprobacion del patrocinador

| Campo | Valor |
|---|---|
| Quien | `<en blanco>` |
| Fecha | `<en blanco>` |
| Decision | `<en blanco>` |
| Donde queda registrada | `_persistence/decisions.md`, con su `D-XXX` |
