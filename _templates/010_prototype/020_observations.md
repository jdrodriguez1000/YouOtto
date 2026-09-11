# Observaciones clasificadas — <NOMBRE DEL PROYECTO>

| Campo | Valor |
|---|---|
| Artefacto | `010_prototype/020_observations.md` |
| Etapa que lo produce | `010_prototype`, Paso 8 |
| Estado | `BORRADOR` |
| Abierto el | `<AAAA-MM-DD — con la ronda YA terminada>` |
| Cerrado el | `<AAAA-MM-DD, o — mientras siga en BORRADOR>` |
| Sesiones que resume | `<001 a NNN>` |
| Escrito por | `manager` |

> 🚨 **ESTE ARCHIVO SE ESCRIBE CUANDO LA RONDA ENTERA TERMINO. No sesion a sesion.**
>
> Clasificar sobre la marcha convierte al primer usuario en la vara con la que se leen los demas: lo
> que el dijo se vuelve categoria, y lo que dicen los otros se acomoda dentro. **El patron solo se
> ve con todas las sesiones delante.**
>
> 📌 Su fecha de apertura debe ser **posterior** a la ultima sesion. La revision del Gate lo mira:
>
> ```bash
> git log --diff-filter=A --format=%ad -- 010_prototype/020_observations.md
> ```

---

## 1. La regla que gobierna este archivo

> **Una observacion del usuario NO se convierte automaticamente en un requisito.**

Los usuarios diran *«seria bueno que tambien pudiera hacer X»*. Eso **no** significa que el
prototipo fracaso por no tener X. Significa que alguien dijo algo, y que hay que decidir que es.

**Clasificar es exactamente esa decision, y se toma una vez, aqui.**

---

## 2. Las nueve categorias

| # | Categoria | Que es | ¿Pesa en el Gate? |
|---|---|---|---|
| 1 | `problema funcional` | algo no funciona o impide avanzar | ✅ **si** |
| 2 | `problema de comprension` | no entiende que significa o que va a pasar | ✅ **si** |
| 3 | `problema de usabilidad` | lo logra, pero con esfuerzo o por ensayo y error | ✅ **si** |
| 4 | `necesidad no contemplada` | una necesidad real que el descubrimiento no vio | ➡️ etapa posterior |
| 5 | `sugerencia` | una preferencia suya | ➡️ etapa posterior |
| 6 | `nueva funcionalidad potencial` | otra cosa que el producto podria hacer | ➡️ etapa posterior |
| 7 | `caso excepcional` | una rama que el camino feliz no cubre | ➡️ etapa posterior |
| 8 | `requisito de negocio` | una regla de la empresa que aparecio aqui | ➡️ `025_business_validation.md` |
| 9 | `idea para una etapa posterior` | buena idea, sin sitio todavia | ➡️ etapa posterior |

🚨 **Solo las tres primeras pesan en el Gate.** Las otras seis **no son ruido**: son el material de
las etapas siguientes, y por eso se guardan enteras. Lo que seria un error es dejarlas pesar en un
veredicto que no las estaba midiendo.

📌 La frontera que mas cuesta es **3 contra 5**: *«tuve que intentarlo dos veces»* es un problema de
usabilidad y pesa; *«me gustaria que fuera de otro color»* es una sugerencia y no. Cuando dudes,
decide por el comportamiento observado, no por lo que dijo.

⚠️ **«Etapa posterior» no nombra ninguna etapa a proposito.** Cuales existen despues del Gate lo
dice `project.md`, y mientras no esten declaradas la respuesta correcta es *«sin decidir»*. Lo que
si esta decidido es donde se guarda mientras tanto: en `_persistence/`, segun la tabla de §7.

---

## 3. Las observaciones

Una fila por observacion. Cada una amarrada a **donde se vio**, no a quien la conto de memoria.

| # | Observacion | Categoria | Sesiones donde aparecio | Punto del flujo | Evidencia |
|---|---|---|---|---|---|
| `<codigo>` | `<que se observo, en comportamiento>` | `<problema de comprension>` | `<001, 003, 004>` | `<el punto concreto del flujo>` | `<015_session_001.md §4 fila 1>` |
| `<codigo>` | `<…>` | `<…>` | `<…>` | `<…>` | `<…>` |

🚨 **El codigo de observacion se declara antes en la tabla «Codigos» de `project.md`, con su
`D-XXX`.** Escribir el primero sin declararlo es un desfase, no una novedad — y un prefijo que
significa dos cosas segun el archivo hace ilegible justo lo que la trazabilidad existe para poder
leer.

📌 La columna **«sesiones donde aparecio»** es la que convierte varias anecdotas en un dato. Una
observacion de una sola sesion y una que salio en cuatro no valen lo mismo, y sin esa columna se
leen igual.

---

## 4. Los patrones

Lo que decide no es el promedio: es **que le paso a varias personas en el mismo sitio**.

| Patron | Cuantos de `<N>` | Donde | Que sugiere |
|---|---|---|---|
| `<tres se bloquearon en el mismo campo>` | `<3 de 5>` | `<…>` | `<…>` |
| `<…>` | `<…>` | `<…>` | `<…>` |

> **Tres usuarios bloqueados en el mismo campo dice mas que un promedio de 2,3.**

📌 Un promedio junta cosas distintas y devuelve una cifra que **no señala a ninguna pantalla**. Un
patron señala.

---

## 5. Resumen de estados

Se copia de los archivos de sesion. **No se recalcula ni se redondea.**

| Estado | Cuantos | Sesiones |
|---|---:|---|
| Exito autonomo (3) | `<…>` | `<…>` |
| Exito con dudas (2) | `<…>` | `<…>` |
| Exito con ayuda (1) | `<…>` | `<…>` |
| Fracaso (0) | `<…>` | `<…>` |

⚠️ **Aqui no se suma ni se promedia nada.** El Gate lee los estados, no una nota media: *«tres de
cinco con ayuda»* no es *«2,0 de media»*, y las dos frases llevan a veredictos distintos.

---

## 6. Contra la hipotesis — lo observado, sin veredicto

Se pone al lado lo que se sello y lo que se vio. **Se describe; no se concluye.**

| Campo | Contenido |
|---|---|
| **La hipotesis decia** | `<la frase sellada, copiada literal>` |
| **La condicion de falsacion decia** | `<copiada literal>` |
| **Lo que se observo** | `<los hechos, sin adjetivos>` |

🚨 **Aqui NO se escribe si la hipotesis se cumplio o se rompio.** Esa comparacion es del Gate, y la
hace **una revision independiente**. Quien construyo el prototipo y condujo las sesiones no puede
ademas declarar que salieron bien: un sistema que se revisa a si mismo comprueba que es
**coherente**, no que sea **cierto**.

📌 Poner las tres filas juntas **si** es trabajo de quien escribe este archivo: le ahorra buscar a
quien revise, sin decidir por el.

---

## 7. Que se hace con cada categoria

| Categoria | Destino | Registrado en |
|---|---|---|
| `problema funcional` · `problema de comprension` · `problema de usabilidad` | los lee el **Gate** | este archivo |
| `necesidad no contemplada` | etapa posterior — puede volverse una `N-XXX` nueva | este archivo, y `_persistence/lessons.md` si enseño algo |
| `requisito de negocio` | contrastar con el patrocinador | `025_business_validation.md` y `_persistence/constraints.md` |
| `caso excepcional` · `sugerencia` | etapa posterior, si sobreviven al alcance | este archivo |
| `nueva funcionalidad potencial` · `idea para una etapa posterior` | etapa posterior | este archivo |

📌 **Ninguna se borra.** Una idea descartada hoy que aparece sola dentro de un año es la misma idea,
y saber que ya se habia dicho cambia como se decide.

⚠️ **Lo que aprendio el equipo va aparte, a `_persistence/lessons.md`**, y con su columna
`Portabilidad` rellena: la condicion de salida de la etapa exige que ninguna leccion quede
`Sin evaluar`, y que lo que sea `Global candidata` ya haya subido al archivo de lecciones globales
con su `D-XXX`.

---

## 8. Supuestos del descubrimiento que las sesiones tocaron

| Supuesto | Que decia | Las sesiones lo | Donde se vio |
|---|---|---|---|
| `<A-XXX>` | `<…>` | `<CONFIRMARON · TUMBARON>` | `<sesiones 002 y 004>` |

⚠️ Los tumbados **se marcan, no se borran**, aqui y en `_persistence/assumptions.md`. Un supuesto que
resulto falso explica decisiones que despues nadie entiende.

📌 Los `C-XXX` nuevos que aparezcan al hablar con usuarios reales van a `_persistence/constraints.md`,
no aqui. Este archivo registra lo observado; el registro del porque es de `manager` y vive en
`_persistence/`.

---

## 9. Comprobacion antes de cerrar este archivo

- [ ] La fecha de apertura es **posterior a la ultima sesion**.
- [ ] **Todas** las observaciones en bruto de los §8 de las sesiones llegaron aqui.
- [ ] Cada observacion tiene **una** categoria de las nueve, no dos.
- [ ] Cada una dice **en que sesiones** aparecio y **donde** en el flujo.
- [ ] Los estados de §5 estan **copiados**, no recalculados ni promediados.
- [ ] §6 describe lo observado y **no declara** si la hipotesis se cumplio.
- [ ] Ninguna observacion se borro por parecer menor.
- [ ] Los supuestos tumbados estan marcados, aqui y en `_persistence/assumptions.md`.
- [ ] **No queda ni un solo `<` en el archivo.**
- [ ] La seccion «Guia de llenado» **esta borrada**.

```bash
grep -n "<" 010_prototype/020_observations.md                # debe no devolver nada
grep -n "Guia de llenado" 010_prototype/020_observations.md  # debe no devolver nada
sed -n '/^## 3. Las observaciones/,/^## 4/p' 010_prototype/020_observations.md | grep -c '^| '
git log --diff-filter=A --format=%ad -- 010_prototype/020_observations.md   # posterior a la ultima sesion
```

📌 **El tercero cuenta las filas de §3 incluyendo la cabecera y el separador**, asi que devuelve dos
mas que el numero de observaciones. Se publica tal cual y se dice cuantas son: un recuento
maquillado deja de ser reproducible.

🚨 **La salida cruda de las cuatro ordenes va al registro**, no la conclusion.

---
---

## Guia de llenado — ⚠️ BORRAR esta seccion al cerrar el artefacto

> Existe para escribir el archivo. **No sobrevive al cierre de la etapa.**

### Como se clasifica, en una pregunta por categoria

| Pregunta | Si la respuesta es si |
|---|---|
| ¿Le impidio avanzar? | `problema funcional` |
| ¿No sabia que significaba o que iba a pasar? | `problema de comprension` |
| ¿Lo logro, pero a la tercera? | `problema de usabilidad` |
| ¿Necesita algo real que nadie habia visto en el descubrimiento? | `necesidad no contemplada` |
| ¿Dijo como le gustaria que fuera? | `sugerencia` |
| ¿Habla de otra cosa que el producto podria hacer? | `nueva funcionalidad potencial` |
| ¿Es una rama que el camino feliz no cubre? | `caso excepcional` |
| ¿Es una regla de la empresa? | `requisito de negocio` |
| ¿Es buena y no tiene sitio todavia? | `idea para una etapa posterior` |

**Una observacion, una categoria.** Si encaja en dos, es que son dos observaciones distintas metidas
en la misma frase: separalas.

### Dos ejemplos que enseñan la frontera

- **Varias personas buscaron lo mismo y no estaba.** Eso ya no es una sugerencia — es una
  **necesidad no contemplada**, y va a la etapa posterior con peso propio.
- **No supieron si su solicitud habia quedado registrada.** Es **comprension**, y de las que pesan
  en el Gate: si el usuario no sabe que termino, el camino feliz no cierra.

### Errores que esta plantilla existe para evitar

| Error | Como se ve | Que hacer |
|---|---|---|
| Clasificar sesion a sesion | el archivo nace antes de la ultima sesion | esperar. El patron necesita la ronda entera |
| Convertir sugerencias en requisitos | la lista de lo que hay que construir crece con lo que dijo un usuario | una observacion no es un requisito. Categoria 5 |
| Descartar lo que no pesa en el Gate | solo aparecen las tres primeras categorias | las otras seis son el material de las etapas siguientes |
| Promediar los estados | «nota media 2,4» | el Gate lee estados, no notas. Copiar, no calcular |
| Declarar el veredicto | §6 dice «la hipotesis se cumplio» | eso lo declara el Gate, sobre una revision independiente |
| Observacion sin sitio en el flujo | «la aplicacion es confusa» | ¿donde? Sin punto del flujo no se puede arreglar ni auditar |
| Fundir dos observaciones en una | «no entendio y ademas sugirio otra cosa» | dos filas, dos categorias |
| Contar 1 lo que salio en 4 sesiones | una fila por vez que se dijo | una fila por observacion, con las sesiones en su columna |

### Lo que esta etapa tiene PROHIBIDO, y aqui se cuela solo

**Declarar si el prototipo tuvo exito.** Cerrar la etapa significa *«la evidencia esta completa y
registrada»*, nada mas. La linea «el Gate quedo aprobado» no la escribe nunca quien construyo el
prototipo.

📌 Definiciones: `_methodology/000_method.md` §24, §26, §27.
📌 Procedimiento: `_phases/010_prototype.md` §4, Paso 8, y §6.
📌 Donde va este archivo relleno lo dice `project.md`, no esta plantilla.
⚠️ **Quien declara el Gate y con que firmas no lo dice este archivo:** lo dicen la guia de metodo y
el registro de decisiones del proyecto. Mientras la etapa del Gate no tenga su `D-XXX` y su archivo
en `_phases/`, la respuesta correcta a «¿que viene despues?» es *«sin decidir»*.
