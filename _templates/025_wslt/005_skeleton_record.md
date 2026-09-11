# Acta del esqueleto — <NOMBRE DEL PROYECTO>

| Campo | Valor |
|---|---|
| Artefacto | `025_wslt/005_skeleton_record.md` |
| Etapa que lo produce | `025_wslt`, Pasos 1 a 6 |
| Estado | `BORRADOR` |
| Abierto | `<AAAA-MM-DD>` |
| Cerrado | `<AAAA-MM-DD, o «—» mientras siga en BORRADOR>` |
| Escrito por | `manager` |
| Despliegue firmado por | `<NOMBRE DE LA PERSONA QUE EJECUTO EL DESPLIEGUE>` |

> **Estado:** `BORRADOR` mientras la etapa siga abierta · `CERRADO` cuando se cumpla la condicion de
> salida de `_phases/025_wslt.md` §6.
>
> ⚠️ **Las dos fechas las lee `report_auditor` y las cruza contra el historial de `git`.**
>
> 🚨 **La ultima fila lleva un nombre de persona, y no es una formalidad.** El despliegue es la unica
> accion de todo el metodo que `_workflow/team.md` §5.1 clasifica como irreversible y que esta etapa
> ejecuta: quien la firma responde por ella.

---

## 0. 🚨 La regla que gobierna este archivo entero

> **Este archivo existe porque el `git diff` no distingue un test que se vio en rojo de uno que
> siempre estuvo verde.**

Son el mismo archivo. Lo mismo pasa con una capa real y una simulada, con un despliegue que salio a
la primera y uno que costo cuatro dias, y con una comprobacion externa contra el entorno real y otra
contra la maquina de quien la escribio. **Todas esas parejas se ven identicas cuando la etapa
termina** — y en cada una de ellas, una mitad prueba algo y la otra no.

📌 **Por eso aqui no se escriben conclusiones: se pegan salidas.** «Se comprobo», «funciona»,
«ninguna capa esta simulada» son veredictos. Lo que alimenta una auditoria es **la orden ejecutada
literal y lo que devolvio**, tal cual salio.

⛔ **Y lo que no se pudo comprobar se declara NO COMPROBADO, nunca en blanco.** Un hueco vacio se lee
como que no habia nada que decir; una casilla que dice «no comprobado» se lee como lo que es.

---

## 1. El camino que se recorrio

**Se escribe en el Paso 1, ANTES de construirlo.** Escrito despues, el camino que queda registrado
es el que se pudo, no el que se eligio.

| Campo | Contenido |
|---|---|
| Escenario del que sale | `<el escenario del camino feliz que el prototipo valido con usuarios reales>` |
| El camino, en una frase | `<enviar UN dato → guardarlo → leerlo → mostrarlo>` |
| Que se dejo fuera al adelgazarlo | `<lo que el escenario completo tenia y este camino no>` |
| Fecha en que se escribio | `<AAAA-MM-DD — antes de la primera linea de codigo>` |

🚨 **La prueba no es que tan util es el camino: es cuantas capas atraviesa.** Un camino inutil que
toca todas es correcto; uno util que se queda en la primera, no.

---

## 2. Las capas, una por una — y ninguna simulada

**Una fila por capa que la Arquitectura Base declara. Ninguna se omite, ni siquiera las que no
tocaba tocar** — si una capa de la arquitectura no aparece aqui, el camino no la atraveso, y eso hay
que verlo.

| # | Capa (segun la Arquitectura Base) | Que hace en este camino | ¿Real? | Como se comprobo que es real |
|---|---|---|---|---|
| 1 | `<capa>` | `<que hace>` | `SI` / `NO` | `<la orden que lo demuestra, o «NO COMPROBADO»>` |
| 2 | `<capa>` | `<que hace>` | `SI` / `NO` | `<...>` |
| 3 | `<capa>` | `<que hace>` | `SI` / `NO` | `<...>` |

**Salidas crudas de la columna «Como se comprobo»:**

```
<PEGA AQUI la orden literal y su salida, una por capa. Sin editar.>
```

🚨 **Una sola `NO` en la cuarta columna deja la etapa abierta.** No es una casilla informativa: es la
prohibicion que define la etapa (`_phases/025_wslt.md` §2). Un esqueleto con una capa simulada da
**exactamente el mismo verde** que uno completo.

⚠️ **«Es real porque lo escribi asi» no vale como comprobacion.** Lo que vale es una orden que
distinga las dos cosas: consultar el almacenamiento por fuera del codigo, apagar la pieza y ver que
el camino se rompe, mirar lo que quedo escrito donde tenia que quedar.

---

## 3. El entorno reproducible

| Campo | Contenido |
|---|---|
| Comando unico de arranque | `<el comando, literal>` |
| Donde estan fijadas las dependencias | `<archivo>` |
| Configuracion | `<por variables de entorno; ninguna dentro del codigo>` |
| Quien lo levanto desde cero, sin haberlo construido | `<nombre>` |
| Fecha | `<AAAA-MM-DD>` |
| ¿Tuvo que preguntar algo? | `SI` / `NO` — `<que>` |

```
<PEGA AQUI la salida de levantarlo desde cero: el comando y lo que devolvio.>
```

🔑 **La prueba de que esta bien no es que arranque: es que arranque para otro.** Si hubo que
explicar algo por voz, eso que se explico **falta en lo escrito**, y la casilla de §8 no se puede
marcar.

---

## 4. El despliegue: que rompio

**Esta es la seccion mas valiosa del archivo, y la que mas se deja para el final.** Se escribe
**mientras se despliega**, no despues: reconstruida al cerrar la etapa, de todo esto queda «hubo
problemas de despliegue».

| Campo | Contenido |
|---|---|
| Entorno de destino | `<donde va a vivir el producto>` |
| ¿Estaba vacio? | `SI` / `NO` — `<que habia>` |
| Quien ejecuto el despliegue | `<nombre — un humano; `_workflow/025_wslt.md` §3>` |
| Fecha y hora | `<AAAA-MM-DD HH:MM>` |
| Intentos hasta que quedo arriba | `<numero>` |

**Lo que rompio, una fila por cosa:**

| # | Que rompio | Por que | Donde quedo registrado |
|---|---|---|---|
| 1 | `<sintoma>` | `<causa real, no la primera sospecha>` | `C-XXX` / `A-XXX` refutado / `L-XXX` / `DT-XXX` |
| 2 | `<...>` | `<...>` | `<...>` |

```
<PEGA AQUI la salida cruda del despliegue y la de la comprobacion de que quedo arriba.>
```

⚠️ **Si esta tabla esta vacia, dilo con esas palabras: «no rompio nada».** Es un resultado posible y
poco frecuente, y se publica igual — un hueco vacio no se distingue de un despliegue que nadie
registro.

🚨 **Cada fila de la tercera columna tiene que existir en el registro.** Un limite del entorno que
solo esta escrito aqui no lo va a encontrar nadie: `_persistence/constraints.md` es donde se buscan
los limites, y esta acta no la lee quien vaya a elegir la siguiente pieza.

---

## 5. Las tres preguntas, en su version minima

La baseline las declaro con dueño y sitio; aqui **nacen**. Las tres se comprueban **provocandolas**,
no mirandolas.

### 5.1 Evaluacion — el test del camino

| Campo | Contenido |
|---|---|
| Ruta del test | `<archivo>` |
| Comando que lo corre | `<el comando, literal>` |
| Como se rompio el camino para verlo en rojo | `<que se apago o que se cambio>` |
| Quien vio el rojo | `<nombre — un humano; `_workflow/025_wslt.md` §3>` |
| Fecha del rojo | `<AAAA-MM-DD>` |

**Rojo — la salida cruda, con el camino roto a proposito:**

```
<PEGA AQUI el comando y su salida en ROJO.>
```

**Verde — la salida cruda, con el camino arreglado:**

```
<PEGA AQUI el mismo comando y su salida en VERDE.>
```

🚨 **Los dos bloques van, y en este orden.** Solo el verde es un test que nadie ha visto fallar —
`CLAUDE.md`: «un test escrito para pasar no cuenta».

⚠️ **Y el rojo tiene que ser el rojo correcto.** Un test que falla porque el entorno de pruebas no
arranca da el mismo rojo que uno que falla porque la pieza que se apago hacia falta, y solo el
segundo prueba algo. Si el rojo no se distingue, se rompe otra cosa y se repite.

### 5.2 Observabilidad — la linea de registro

| Campo | Contenido |
|---|---|
| Donde se escribe | `<ruta o destino decidido en la baseline>` |
| Formato | `<el elegido>` |
| Como se provoco | `<el error que la escribe>` |
| Que NO se registra nunca | `<lo que no puede aparecer ahi>` |

```
<PEGA AQUI la linea tal cual quedo escrita, y la orden con que se leyo.>
```

### 5.3 Seguridad — secretos fuera del historial

| Campo | Contenido |
|---|---|
| Ambito barrido | `<que se barrio: el arbol, el historial entero, desde que commit>` |
| Que familias cubre el patron | `<enumeradas — no «todos los secretos»>` |
| Superficie expuesta | `<lo que queda accesible desde fuera>` |

```
<PEGA AQUI el barrido: su patron, su ambito, su salida cruda y su codigo de salida.>
```

🚨 **El enunciado que acompaña al barrido no puede afirmar mas de lo que su patron cubre.** «No hay
secretos» es un veredicto sobre todo lo imaginable; lo que el barrido prueba es que **esas familias,
en ese ambito**, no aparecen. Se escribe lo segundo.

---

## 6. La comprobacion desde fuera

| Campo | Contenido |
|---|---|
| Contra que se lanzo | `<el entorno real de destino — no la maquina de quien lo escribio>` |
| La peticion | `<la orden literal>` |
| Fecha | `<AAAA-MM-DD>` |
| ¿Coincide con el test de §5.1? | `SI` / `NO` |

```
<PEGA AQUI la peticion y su respuesta cruda.>
```

🔑 **Esta es la que no se puede falsear.** Un test puede pasar contra un montaje que en el entorno de
destino no existe; una peticion real contra la maquina real, no.

🚨 **Si la ultima casilla dice `NO`, manda esta y no el test** — y la discrepancia se explica aqui
antes de cerrar el archivo:

```
<Que dice cada una, y que se decidio. La decision la firma un humano (`_workflow/025_wslt.md` §2).>
```

---

## 7. El veredicto sobre la arquitectura

| Resultado | Marca una |
|---|---|
| **La Arquitectura Base se sostuvo** — el camino la atraveso entera sin cambiarla | `<SI/NO>` |
| **Hubo que corregirla** — el esqueleto demostro que no se sostenia | `<SI/NO>` |

**Si hubo correccion:**

| Campo | Contenido |
|---|---|
| Que se cambio | `<la pieza y por que otra>` |
| Que lo demostro | `<la evidencia concreta, de §4 o de §6>` |
| Decision arquitectonica que lo registra | `<el artefacto donde quedo>` |
| Documento de arquitectura actualizado | `SI` / `NO` |

🚨 **Que la arquitectura no se sostenga NO es un fracaso de la etapa: es la etapa pagando lo que
costo** (`_phases/025_wslt.md` §6). Lo que si es un fallo es corregirla y no registrarlo: quedan dos
arquitecturas, y la que la etapa siguiente va a leer es la falsa.

⚠️ **La ultima casilla en `NO` deja la etapa abierta**, aunque el esqueleto camine.

---

## 8. Comprobacion antes de cerrar este archivo

- [ ] §1 se escribio **antes** de la primera linea de codigo, y su fecha lo demuestra.
- [ ] §2 tiene **una fila por capa** de la Arquitectura Base, y **ninguna** dice `NO` en «¿Real?».
- [ ] §2 pega la orden de cada comprobacion, no su conclusion.
- [ ] §3 dice quien lo levanto desde cero y si tuvo que preguntar algo.
- [ ] §4 nombra a la persona que ejecuto el despliegue, y cada cosa que rompio tiene su codigo en el
      registro.
- [ ] §5.1 tiene **los dos bloques**, rojo y verde, y dice como se rompio el camino.
- [ ] §5.3 publica el patron y el ambito, y su enunciado no afirma mas de lo que el patron cubre.
- [ ] §6 se lanzo contra el entorno real, y si no coincide con el test, la discrepancia esta
      explicada.
- [ ] §7 tiene una de las dos marcas, y si hubo correccion, el documento de arquitectura esta
      actualizado.
- [ ] **No queda ni un solo `<` en el archivo** — ningun hueco sin rellenar.
- [ ] La seccion «Guia de llenado» de abajo **esta borrada**.
- [ ] La cabecera dice `CERRADO` y tiene fecha de cierre.

Las mecanicas se comprueban desde fuera:

```bash
grep -n "<" 025_wslt/005_skeleton_record.md                    # debe no devolver nada
grep -n "Guia de llenado" 025_wslt/005_skeleton_record.md      # debe no devolver nada
grep -n "^| Estado |" 025_wslt/005_skeleton_record.md          # debe decir CERRADO
sed -n '/^## 2\./,/^## 3\./p' 025_wslt/005_skeleton_record.md | grep -c '| `NO` |'
grep -c "NO COMPROBADO" 025_wslt/005_skeleton_record.md
```

📌 **La cuarta y la quinta deben devolver `0`.** Se publica el numero tal cual sale, tambien cuando
es cero: un control cuyo resultado no se publica no se distingue de un control que no se corrio.

🚨 **La salida cruda de las cinco ordenes va al registro**, no la conclusion.

---
---

## Guia de llenado — ⚠️ BORRAR esta seccion al cerrar el artefacto

> Existe para escribir el archivo. **No sobrevive al cierre de la etapa.**

### La pregunta que hace todo el trabajo

> **¿Que de esto sabria alguien que solo tuviera el repositorio?**

Casi nada. El codigo dice como quedo; no dice que se probo, que se rompio, ni contra que. Esta acta
es la unica parte de la etapa que no se puede reconstruir despues — y por eso es la unica que hay que
escribir mientras pasa.

### Las cuatro parejas indistinguibles

Cada seccion de este archivo existe para separar una pareja que, cuando la etapa termina, se ve
identica:

| Se ven igual | Solo una prueba algo | Que seccion las separa |
|---|---|---|
| una capa real y una simulada | la real | §2 |
| un test que se vio rojo y uno que siempre estuvo verde | el que se vio rojo | §5.1 |
| una comprobacion contra el entorno real y una contra la maquina local | la del entorno real | §6 |
| una arquitectura que aguanto y una que se corrigio en silencio | la que se registro | §7 |

🚨 **En las cuatro, la mitad que no prueba nada es la que sale mas barata y la que da el mismo
verde.** Ese es el argumento entero de este archivo.

### Cuando se escribe cada seccion

| Seccion | Cuando |
|---|---|
| §1 | en el Paso 1, **antes** de escribir codigo |
| §3 | cuando alguien lo levante desde cero, no cuando arranque en la maquina de siempre |
| §4 | **mientras se despliega**, fila a fila, no al terminar |
| §5 | en el Paso 5, con el rojo pegado el dia que se vio |
| §6 y §7 | en el Paso 6, al cerrar |

⏱️ **§4 es la que mas se pierde.** Un problema de despliegue se resuelve y se olvida en el mismo dia;
al cabo de una semana nadie recuerda cual era la version que no coincidia.

### Errores que esta plantilla existe para evitar

| Error | Como suena | Que hacer |
|---|---|---|
| Escribir el camino al final | «lo documento cuando funcione» | §1 lleva fecha, y se cruza contra el historial |
| Omitir una capa de §2 | «esa no la tocamos» | si la arquitectura la declara, va con su fila; si el camino no la toca, eso es el hallazgo |
| Dar el rojo por visto | «ya esta verde» | sin el bloque rojo, §8 no se puede marcar |
| Aceptar el rojo equivocado | «fallo, luego sirve» | tiene que fallar por lo que se rompio |
| Afirmar mas que el patron | «no hay secretos» | «esas familias, en ese ambito, no aparecen» |
| Dejar un hueco vacio | — | `NO COMPROBADO`, con esas palabras |
| Reescribir una salida para que cuadre | «la vuelvo a correr y pego la nueva» | la salida vieja se queda, con su nota fechada al lado |
| Cerrar con §7 sin actualizar la arquitectura | «lo cambiamos y ya» | quedan dos arquitecturas y la siguiente etapa lee la falsa |

### Lo que esta etapa tiene PROHIBIDO, y aqui se cuela solo

Al escribir §2 aparece la tentacion de contar **lo que el esqueleto ya casi puede hacer**. No se
cuenta: `_phases/025_wslt.md` §2 prohibe reglas de negocio, validaciones, casos de error y features.
Si algo de eso llego a escribirse, **no se disimula en esta acta**: se quita del codigo, o se
registra como deuda con su motivo.

📌 **Y si el esqueleto acabo haciendo mas de lo que este camino necesitaba, esa es la informacion
mas util que puede dar esta acta** — porque significa que la etapa se desbordo, y desbordarse aqui
se paga en la siguiente.
