# Actores — YouOtto

| Campo | Valor |
|---|---|
| Artefacto | `005_discovery/010_actors.md` |
| Etapa que lo produce | `005_discovery` |
| Estado | `CERRADO` |
| Abierto | `2026-09-17` |
| Cerrado | `2026-09-17` |
| Escrito por | `manager` |

> ⚠️ **Las dos fechas las lee `report_auditor` y las cruza contra el historial de `git`.** Una fecha
> declarada que no cuadra con la del commit es un hallazgo.

---

## 1. Los actores de este producto

Un actor se clasifica por **la funcion que cumple dentro de la aplicacion**, nunca por su cargo en
la empresa. «Gerente de operaciones» no es un tipo: es un actor concreto que ejerce de
**Supervisor**.

🚨 **Solo se listan los tipos que existen en este producto.** Un tipo sin actor concreto detras
**no se anota aqui** — se declara ausente en §3.

| Tipo de actor | Actor concreto | Grupo | Que hace dentro de la aplicacion | Necesidad que atiende |
|---|---|---|---|---|
| Generador | JD Rodriguez, jugador que prepara su apuesta | de negocio | Pide la combinacion del metodo, la registra para el proximo sorteo y consulta el resultado y el acumulado | `N-001`, `N-002`, `N-003`, `N-004` |
| Integrador | La web oficial de Baloto (`baloto.com`, con su pagina de resultados) | externo | Entrega el historico de sorteos de Baloto y Revancha y los valores del acumulado | `N-001`, `N-004` |

📌 Si un actor concreto no se puede amarrar a ninguna `N-XXX` de `005_needs.md`, preguntate por que
esta en la lista.

⚠️ **La taxonomia la fija la guia de metodo, no este archivo.** No se añaden tipos nuevos: lo
temporal, lo externo y lo restringido son **permisos**, y van en §4.

---

## 2. El Actor Generador — la ficha que decide si hay proyecto

> **Si el Generador no existe o no usara la aplicacion, no hay razon fundamental para que la
> aplicacion exista.**

Por eso lleva ficha propia: el prototipo lo valida **a el**, y el producto minimo se construye
**para el**.

| Campo | Contenido |
|---|---|
| Actor concreto | JD Rodriguez, jugador de Baloto y Revancha y patrocinador de este proyecto |
| Accion que da origen al proceso | Decidir que combinacion de 6 numeros va a jugar en el proximo sorteo |
| Identificacion | Una sola persona, con nombre y apellido: es el patrocinador del proyecto y hoy el unico usuario previsto |
| ¿Es alcanzable hoy? | Si: dirige este proyecto y participa en cada sesion de trabajo |
| Quien confirma que existen | El propio JD Rodriguez, en la conversacion de `S-015`, y su descripcion del proceso en `_brief/client_brief.md` |
| Como hace hoy esa accion | Lunes, miercoles y sabado por la manana, pasa el ultimo sorteo a Excel y aplica a mano su metodo (`D-052`, `D-053`), entre 40 y 60 minutos |
| Verificado el | 2026-09-17 |

**La comprobacion es concreta, y tiene dos columnas:**

| ❌ No es un Generador identificado | ✅ Si lo es |
|---|---|
| «los clientes» | «las empresas que hoy llaman por telefono para pedir recogida, unas 40 al mes» |
| «los usuarios del area» | «las 6 analistas del turno de la mañana en la sede norte» |

### Veredicto de la etapa

- [x] **Hay Generador real y alcanzable** → la etapa continua.
- [ ] **NO hay Generador real y alcanzable** → la etapa termina aqui con `NO CONTINUA`.

Si el veredicto es `NO CONTINUA`, se escribe por que:

> **Motivo del `NO CONTINUA`:** no aplica — el veredicto es que si hay Generador.

🚨 **`NO CONTINUA` no es un fracaso: es el resultado mas barato que puede dar el metodo.** Cuesta
una etapa de entrevistas en vez de un producto entero. Se registra con su `D-XXX`, igual que
cualquier otro resultado.

⚠️ **Ese cierre no lo declara `manager` en solitario.** Detener un proyecto es irreversible en la
practica —libera al equipo, cancela el encargo, se comunica al cliente—, asi que **se escala al
usuario antes de actuar**, nunca despues.

---

## 3. Tipos de actor que NO existen en este producto

Los actores son **potenciales, no obligatorios**. Que un tipo exista en la taxonomia no significa
que deba existir aqui.

Esta tabla se llena **igual de en serio que la §1**: declarar una ausencia es una decision con
fecha; dejar el hueco en blanco es un olvido que nadie puede distinguir de una decision.

| Tipo ausente | Por que no existe en este producto | ¿Podria aparecer despues? |
|---|---|---|
| Coordinador | Nadie organiza, asigna ni prioriza trabajo originado en la aplicacion: el jugador decide para si mismo | No |
| Ejecutor | No hay trabajo que alguien realice a partir de lo que sale de la aplicacion | No |
| Supervisor | Nadie usa esta informacion para supervisar resultados ajenos ni decidir sobre el trabajo de otro | No |
| Administrador de Plataforma | No hay usuarios, roles, permisos ni catalogos que administrar: el jugador es el unico usuario (`D-055`) | Solo si algun dia la usara otra persona |

---

## 4. Permisos y condiciones de acceso

⚠️ **No existe «Actor Invitado».** «Invitado» describe una **condicion de acceso**, no un
comportamiento. Lo temporal, lo externo y lo restringido son **permisos y seguridad**, nunca un
tipo de actor.

📌 **Sin filas: no hay accesos distintos del caso normal.** El unico actor de negocio es el propio
jugador, y el Integrador es una fuente publica que se consulta sin credenciales (`D-055`). La
seccion se conserva vacia, y no se borra, porque la comprobacion de §5 busca en ella la advertencia
de arriba.

---

## 5. Comprobacion antes de cerrar este archivo

- [x] Hay un **Actor Generador identificado y alcanzable**, con actor concreto.
- [x] Su identificacion **no es un plural generico**: tiene nombre, o perfil con numero.
- [x] Cada actor de §1 tiene **tipo** y **actor concreto**, separados.
- [x] Ningun tipo se clasifico por el cargo en la empresa.
- [x] **Solo estan los actores que existen**; los ausentes se declaran en §3 con su motivo.
- [x] No aparece ningun «Actor Invitado» — lo temporal y lo externo estan en §4.
- [x] Cada actor concreto se puede amarrar a una `N-XXX` de `005_needs.md`.
- [x] Lo que se afirmo sin verificar esta como `A-XXX` en `_persistence/assumptions.md`.
- [x] **No queda ni un solo `<` en el archivo.**
- [x] La seccion «Guia de llenado» **esta borrada**.
- [x] La cabecera dice `CERRADO` y tiene fecha de cierre.

```bash
grep -n "<" 005_discovery/010_actors.md                 # debe no devolver nada
grep -n "Guia de llenado" 005_discovery/010_actors.md   # debe no devolver nada
grep -ni "invitado" 005_discovery/010_actors.md         # SOLO la advertencia de §4, ni una linea mas
```

📌 El tercero **no** devuelve vacio a proposito: la advertencia de §4 nombra la palabra. Lo que se
comprueba es que **no aparezca en ninguna otra linea** — si sale en una fila de §1, alguien la metio
como tipo de actor.

🚨 **La salida cruda de las tres ordenes va al registro**, no la conclusion.

⚠️ **Los dos primeros no pueden devolver vacio en este archivo, y no es un hueco sin rellenar:** las
unicas lineas que quedan con `<` y con «Guia de llenado» son **las de esta misma seccion**, que los
nombra para enunciar la comprobacion. La guia se borro; el cuerpo del artefacto no tiene ni un hueco.
Su salida, con el alcance que lo demuestra, va en `D-060`.
