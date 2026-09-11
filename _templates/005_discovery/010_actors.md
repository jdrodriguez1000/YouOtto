# Actores — <NOMBRE DEL PROYECTO>

| Campo | Valor |
|---|---|
| Artefacto | `005_discovery/010_actors.md` |
| Etapa que lo produce | `005_discovery` |
| Estado | `BORRADOR` |
| Abierto | `<AAAA-MM-DD>` |
| Cerrado | `<AAAA-MM-DD, o «—» mientras siga en BORRADOR>` |
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
| `<Generador>` | `<…>` | de negocio | `<…>` | `<N-001>` |
| `<Coordinador>` | `<…>` | de negocio | `<…>` | `<N-002>` |
| `<Integrador>` | `<…>` | externo | `<…>` | `<N-00X>` |

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
| Actor concreto | `<…>` |
| Accion que da origen al proceso | `<la accion principal, la que arranca todo>` |
| Identificacion | `<nombre y apellido, o un perfil real y alcanzable CON NUMERO>` |
| ¿Es alcanzable hoy? | `<si / no — y como se llega a ellos>` |
| Quien confirma que existen | `<persona o documento que lo sostiene, no una suposicion>` |
| Como hace hoy esa accion | `<el proceso sin la aplicacion>` |
| Verificado el | `<AAAA-MM-DD>` |

**La comprobacion es concreta, y tiene dos columnas:**

| ❌ No es un Generador identificado | ✅ Si lo es |
|---|---|
| «los clientes» | «las empresas que hoy llaman por telefono para pedir recogida, unas 40 al mes» |
| «los usuarios del area» | «las 6 analistas del turno de la mañana en la sede norte» |

### Veredicto de la etapa

- [ ] **Hay Generador real y alcanzable** → la etapa continua.
- [ ] **NO hay Generador real y alcanzable** → la etapa termina aqui con `NO CONTINUA`.

Si el veredicto es `NO CONTINUA`, se escribe por que:

> **Motivo del `NO CONTINUA`:** `<…>`

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
| `<Ejecutor>` | `<nadie ejecuta trabajo fisico originado en la aplicacion>` | `<no>` |
| `<Supervisor>` | `<hoy nadie mide resultados>` | `<si, mas adelante>` |

---

## 4. Permisos y condiciones de acceso

⚠️ **No existe «Actor Invitado».** «Invitado» describe una **condicion de acceso**, no un
comportamiento. Lo temporal, lo externo y lo restringido son **permisos y seguridad**, nunca un
tipo de actor.

| Actor concreto | Su tipo | Condicion de acceso |
|---|---|---|
| `<Auditor externo>` | `<Supervisor>` | `<externo · solo lectura · solo informes>` |
| `<Socio comercial>` | `<Supervisor>` | `<temporal · vence el AAAA-MM-DD>` |

📌 Si esta tabla esta vacia, borrala. Solo se llena si hay accesos que no son el caso normal del
actor.

---

## 5. Comprobacion antes de cerrar este archivo

- [ ] Hay un **Actor Generador identificado y alcanzable**, con actor concreto.
- [ ] Su identificacion **no es un plural generico**: tiene nombre, o perfil con numero.
- [ ] Cada actor de §1 tiene **tipo** y **actor concreto**, separados.
- [ ] Ningun tipo se clasifico por el cargo en la empresa.
- [ ] **Solo estan los actores que existen**; los ausentes se declaran en §3 con su motivo.
- [ ] No aparece ningun «Actor Invitado» — lo temporal y lo externo estan en §4.
- [ ] Cada actor concreto se puede amarrar a una `N-XXX` de `005_needs.md`.
- [ ] Lo que se afirmo sin verificar esta como `A-XXX` en `_persistence/assumptions.md`.
- [ ] **No queda ni un solo `<` en el archivo.**
- [ ] La seccion «Guia de llenado» **esta borrada**.
- [ ] La cabecera dice `CERRADO` y tiene fecha de cierre.

```bash
grep -n "<" 005_discovery/010_actors.md                 # debe no devolver nada
grep -n "Guia de llenado" 005_discovery/010_actors.md   # debe no devolver nada
grep -ni "invitado" 005_discovery/010_actors.md         # SOLO la advertencia de §4, ni una linea mas
```

📌 El tercero **no** devuelve vacio a proposito: la advertencia de §4 nombra la palabra. Lo que se
comprueba es que **no aparezca en ninguna otra linea** — si sale en una fila de §1, alguien la metio
como tipo de actor.

🚨 **La salida cruda de las tres ordenes va al registro**, no la conclusion.

---
---

## Guia de llenado — ⚠️ BORRAR esta seccion al cerrar el artefacto

> Existe para escribir el archivo. **No sobrevive al cierre de la etapa.**

### Los seis tipos, en una linea cada uno

| # | Tipo | Que hace | Grupo |
|---|---|---|---|
| 1 | **Generador** | realiza la accion que **da origen** al proceso | de negocio |
| 2 | **Coordinador** | **organiza** el trabajo: asigna, prioriza, distribuye, reasigna | de negocio |
| 3 | **Ejecutor** | **realiza** el trabajo fisica o directamente | de negocio |
| 4 | **Supervisor** | usa la informacion para **supervisar** resultados y decidir | de negocio |
| 5 | **Administrador de Plataforma** | usuarios, roles, permisos, parametros, catalogos, integraciones | de plataforma |
| 6 | **Integrador** | **sistema externo** que intercambia informacion: ERP, pagos, mapas, correo, APIs | externo |

**La confusion mas frecuente:** Coordinador contra Ejecutor.
> **El Coordinador organiza el trabajo; el Ejecutor lo realiza.**

**El Integrador no es una persona.** Un servicio de mapas es un actor.

### Cuantos actores deberia haber

| Tipo de aplicacion | Actores esperables |
|---|---|
| Sencilla | Generador + Administrador de Plataforma |
| Operativa | Generador + Coordinador + Ejecutor |
| Empresarial | los seis |

Una aplicacion puede empezar **solo con Generador**. Que existan los seis en la taxonomia no obliga
a inventarlos aqui.

### Ejemplo — app de recogida de reciclaje

*(otro dominio a proposito, para que no se confunda con el proyecto que se este escribiendo)*

| Tipo | Actor concreto |
|---|---|
| Generador | Cliente que solicita la recogida |
| Coordinador | Analista de logistica |
| Ejecutor | Conductor / recolector |
| Supervisor | Gerente de operaciones |
| Administrador de Plataforma | Administrador de TI |
| Integrador | Servicio de mapas |

### Errores que esta plantilla existe para evitar

| Error | Como se ve | Que hacer |
|---|---|---|
| Clasificar por cargo | aparece «Gerente» como tipo | el cargo va en *actor concreto*; el tipo es la funcion |
| Inventar los seis | hay Supervisor y nadie mide nada | sacarlo de §1 y declararlo ausente en §3 |
| Generador en plural generico | «los clientes» | nombre y apellido, o perfil **con numero** |
| «Actor Invitado» | aparece un septimo tipo | es Supervisor mas un permiso → §4 |
| Confundir actor con interesado | el gerente que financia pero no usa la aplicacion | ese va en `015_stakeholders.md` |
| Declarar Generador sin verificar | nadie ha hablado con ninguno | es un `A-XXX` en `_persistence/assumptions.md`, no un hecho |

### Lo que esta etapa tiene PROHIBIDO, y aqui se cuela solo

Nada de pantallas por actor, ni de permisos tecnicos, ni de roles del sistema. Aqui se dice
**quien** y **que funcion**, no **que ve** ni **con que se autentica**.

📌 Definiciones: `_methodology/000_method.md` §7-§12.
📌 Procedimiento: `_phases/005_discovery.md` §4, pasos 3 y 4.
