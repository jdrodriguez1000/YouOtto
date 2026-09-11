# Validacion de negocio — <NOMBRE DEL PROYECTO>

| Campo | Valor |
|---|---|
| Artefacto | `010_prototype/025_business_validation.md` |
| Etapa que lo produce | `010_prototype`, Paso 9 |
| Dimension | **D · Negocio** |
| Fecha de la sesion | `<AAAA-MM-DD>` |
| Quien valido | `<nombre y cargo — el patrocinador o quien tenga autoridad para declararlo>` |
| Quien mas asistio | `<…>` |
| ¿Hubo usuarios delante? | `NO` |
| Escrito por | `manager` |

> 🚨 **SESION APARTE, CON EL PATROCINADOR, SIN USUARIOS DELANTE.**
>
> No es un punto del orden del dia de otra reunion, ni una pregunta al final de una sesion de
> usuario. Es una sesion propia, y la etapa no cierra sin ella.
>
> ⚠️ **La fila «¿Hubo usuarios delante?» debe decir `NO`.** Con un usuario en la sala, el
> patrocinador no dice que el flujo choca con una regla interna: no va a contradecir a su cliente en
> su cara, y esa regla se descubrira construyendo el producto.
>
> 📌 Se escribe **el dia que ocurre**, como los archivos de sesion.

---

## 1. Que se valida aqui, y que no

| Dimension | Quien valida | Que valida |
|---|---|---|
| **C · Necesidad** | el **usuario**, en sus sesiones | «esto representa como yo haria esta tarea» |
| **D · Negocio** | la **empresa**, aqui | «este flujo es compatible con nuestro proceso» |

> **C y D no se funden, y las dos deben salir bien.**

Puede pasar que los usuarios lo usen sin problema y el patrocinador descubra que el flujo choca con
una regla interna. O al reves: que el proceso sea correcto y nadie sepa usarlo. **Son dos fallos
distintos con dos arreglos distintos**, y por eso se miden por separado.

---

## 2. Quien valida, y si podia hacerlo

| Campo | Contenido |
|---|---|
| **Quien** | `<nombre y cargo>` |
| **¿Tiene autoridad para declarar valido el proceso?** | `<si · no>` |
| **Si no, quien la tiene** | `<…>` |
| **Interesado correspondiente** | `<I-XXX de 005_discovery/015_stakeholders.md>` |

🚨 **Si quien vino no puede decidir, la validacion no esta hecha.** Una opinion favorable de alguien
sin autoridad se lee despues como un visto bueno, y no lo era. Se declara aqui y se repite la sesion
con quien corresponda.

---

## 3. El flujo, paso a paso, contra el proceso real

Se recorre el mismo camino feliz de `005_happy_path.md` §1. Una fila por paso.

| # | Paso del flujo | ¿Compatible con el proceso? | Regla interna que aplica | Comentario del patrocinador |
|---|---|---|---|---|
| 1 | `<…>` | `<si · no · con cambios>` | `<ninguna · la politica X>` | `<«…»>` |
| 2 | `<…>` | `<…>` | `<…>` | `<…>` |
| 3 | `<…>` | `<…>` | `<…>` | `<…>` |

📌 **Los comentarios van entrecomillados, igual que en las sesiones de usuario.** Un «con cambios»
parafraseado no dice que cambio, y dentro de un mes nadie lo recuerda.

---

## 4. Reglas de negocio que aparecieron aqui

Las que nadie habia escrito en el descubrimiento y salen al ver el flujo.

| # | Regla | Choca con | Que la respalda | Destino |
|---|---|---|---|---|
| 1 | `<toda solicitud debe quedar registrada el mismo dia>` | `<el paso 3>` | `<politica interna, documento X>` | `<C-XXX en _persistence/constraints.md>` |
| 2 | `<…>` | `<…>` | `<…>` | `<…>` |

⚠️ **Una regla que el patrocinador enuncia de memoria es un `A-XXX`, no un `C-XXX`**, hasta que se
pueda enseñar donde esta escrita. La vara es siempre la misma: *¿alguien puede enseñarme donde esta
escrito, o quien lo decidio?*

🚨 **Los dos registros son de `manager` y viven en `_persistence/`**, no en este archivo. Aqui queda
la regla tal como se enuncio y a donde fue; alli queda con su codigo y su forma de validarse.

---

## 5. Lo que la empresa declaro

Su declaracion, literal. **Es evidencia, no es el veredicto.**

| Campo | Contenido |
|---|---|
| **¿El flujo representa el proceso que la empresa quiere implementar?** | `<si · no · si con los cambios de §4>` |
| **Frase literal** | `<«…»>` |
| **Que haria falta para un si sin peros** | `<…>` |

🚨 **Aqui NO se escribe si el Gate aprueba.** El criterio de que *«la empresa considera valido el
proceso de negocio»* lo lee de esta declaracion **una revision independiente**. Lo que se registra
es **que dijo la empresa**, no que significa para la inversion.

📌 Y el gusto no es evidencia: *«nos encanto»* no responde a la pregunta de la primera fila. Si el
patrocinador solo dice eso, se vuelve a preguntar por el proceso.

---

## 6. Choques entre C y D

La casilla que casi siempre queda vacia, y cuando no lo esta es lo mas valioso del archivo.

| Que observaron los usuarios | Que dice la empresa | Quien tiene razon | Que se hace |
|---|---|---|---|
| `<pidieron elegir ellos tal cosa>` | `<eso lo asigna otra area>` | `<las dos: la necesidad es real y la regla tambien>` | `<no es un fallo del prototipo; es un requisito de negocio para la etapa posterior>` |

📌 **Un choque no es un error de nadie.** Es informacion que solo aparece al medir las dos
dimensiones por separado — y que se habria perdido preguntandoselo todo a la misma persona.

---

## 7. Comprobacion antes de commitear — el mismo dia

- [ ] La sesion fue **aparte**, y no hubo usuarios delante.
- [ ] Quien valido **tiene autoridad** para hacerlo, o esta declarado que no.
- [ ] Se recorrio el **mismo** camino feliz, paso por paso.
- [ ] Los comentarios estan **entrecomillados**.
- [ ] Las reglas nuevas estan en §4, separadas en las que tienen fuente y las que son de memoria.
- [ ] §5 registra **que dijo la empresa**, y no declara el veredicto del Gate.
- [ ] Los choques con lo observado en las sesiones estan en §6.
- [ ] Las reglas nuevas llegaron a `_persistence/constraints.md` o a `_persistence/assumptions.md`.
- [ ] **No queda ni un solo `<` en el archivo.**
- [ ] La seccion «Guia de llenado» **esta borrada**.

```bash
grep -n "<" 010_prototype/025_business_validation.md                # debe no devolver nada
grep -n "Guia de llenado" 010_prototype/025_business_validation.md  # debe no devolver nada
git log --diff-filter=A --format=%ad -- 010_prototype/025_business_validation.md   # = la fecha de la cabecera
```

🚨 **La salida cruda de las tres ordenes va al registro**, no la conclusion.

---
---

## Guia de llenado — ⚠️ BORRAR esta seccion antes de commitear

> Existe para escribir el archivo. **No sobrevive a la sesion.**

### Las cuatro combinaciones de C y D

Y cada una es un problema distinto con un arreglo distinto:

| C · usuario | D · empresa | Que significa | Que se hace |
|---|---|---|---|
| ✅ | ✅ | el flujo sirve y encaja | es el caso que el Gate espera |
| ✅ | ❌ | lo usan bien, **pero choca con una regla interna** | el flujo cambia, no el producto. Suele ser barato **si se descubre aqui** |
| ❌ | ✅ | el proceso es correcto y **nadie sabe usarlo** | es un problema de diseño; lo que venga despues arranca sabiendolo |
| ❌ | ❌ | ni sirve ni encaja | la hipotesis estaba mal planteada. Vuelta al descubrimiento |

📌 **La fila que justifica toda esta sesion es la segunda.** Sesiones de usuario perfectas y un flujo
que viola una politica interna: sin esta reunion, eso se descubre construyendo, y entonces cuesta un
rediseño en vez de una conversacion.

### Preguntas que sirven para D

Van sobre el **proceso**, no sobre el prototipo:

- ¿Este flujo es compatible con como la empresa quiere que se haga el trabajo?
- ¿Hay alguna politica, norma o control que este camino se salte?
- ¿Quien dentro de la empresa tendria que aprobar que se haga asi?
- ¿Que pasa con esto **despues** de la ultima pantalla?
- ¿Hay algo que hoy hace una persona y aqui desaparece?

📌 La ultima destapa mas reglas que ninguna: los controles informales viven en la cabeza de alguien
que hoy revisa algo a mano, y no estan escritos en ningun sitio.

### Errores que esta plantilla existe para evitar

| Error | Como se ve | Que hacer |
|---|---|---|
| Validar con usuarios delante | la fila de la cabecera dice `si` | repetir la sesion. El patrocinador no contradice a su cliente en su cara |
| Preguntarle al patrocinador por C | «¿le parecio facil de usar?» | C la valida el usuario. Aqui se pregunta por el proceso |
| Tomar «nos encanto» por validacion | §5 con una frase de entusiasmo | volver a preguntar por el proceso. El gusto no es evidencia |
| Validar con quien no decide | §2 dice que no tiene autoridad y aun asi se cerro | la validacion no esta hecha |
| Regla de memoria como restriccion | un `C-XXX` sin fuente | es un `A-XXX` hasta que alguien enseñe donde esta escrita |
| Saltarse la sesion porque el patrocinador vio las sesiones | no existe el archivo | observar no es validar; y observando estuvo callado a proposito |
| Declarar el Gate aqui | «el Gate queda aprobado» | aqui solo se registra que dijo la empresa |
| Dejar §6 vacia sin mirar | ningun choque en un flujo con reglas | compararlo de verdad: los choques son lo mas caro de descubrir tarde |

### Lo que esta etapa tiene PROHIBIDO, y aqui se cuela solo

**Prometer que lo que venga despues incluira lo que el patrocinador pidio en esta sesion.** Lo que
salga de aqui son reglas y requisitos registrados; el alcance de lo siguiente se decide en su etapa,
y esa etapa puede no estar ni declarada todavia.

Y la de siempre, que aqui llega en su forma mas razonable: *«ya esta hecho, ¿por que empezar de
cero?»*. **El codigo del prototipo no se reutiliza.** Se dice **antes** de enseñar el prototipo, no
cuando ya gusto.

⚠️ **Y si aun asi se decide promoverlo, eso no lo decide `manager`:** compromete la arquitectura del
producto entero, asi que **se escala al usuario antes de actuar**. Si se aprueba, todo el prototipo
pasa a `_persistence/techdebt.md` ese mismo dia, entero.

📌 Definiciones: `_methodology/000_method.md` §26, §29.
📌 Procedimiento: `_phases/010_prototype.md` §4, Paso 9.
📌 Donde va este archivo relleno lo dice `project.md`, no esta plantilla.
⚠️ **Quien declara el Gate y con que firmas no lo dice este archivo:** lo dicen la guia de metodo y
el registro de decisiones del proyecto. Mientras la etapa del Gate no tenga su `D-XXX` y su archivo
en `_phases/`, la respuesta correcta a «¿que viene despues?» es *«sin decidir»*.
