# Infraestructura audiovisual y seguimiento

Actualizacion: 19 de noviembre de 2026. Requisitos indicados por Marcos; diseno previsto, no inventario comprado ni montaje validado. No cambia el avance: definicion 55%, construccion 20%, pendiente 45%.

## Dotacion

| Elemento | Cantidad prevista | Ubicacion o condicion |
| --- | --- | --- |
| Proyectores | 2 | Uno en la primera sala (Bosque / prologo), otro en la ultima (Laboratorio) |
| Altavoces | Al menos 4; posiblemente 5 | Distribucion por zonas pendiente; maximo 2 activos simultaneamente |
| Amplificador | 1 estereo | Audio mono entregado a sus dos canales independientes |
| Seleccion de altavoces | Sistema de reles | Seleccion de destinos y limitacion de simultaneidad; numero y modelo de reles pendientes |
| Microfonos | Al menos 6 | Ubicaciones, tipo, alimentacion e interfaz de entradas pendientes |
| Camaras | 9 PoE | Seguimiento de la experiencia; ubicaciones, modelos y red pendientes |

La pantalla del espejo y la de tinta electronica no son proyectores y no cambian ese total. J-009 conserva la pista proyectada tras el prologo: validar continuidad de la zona o visibilidad del primer proyector. No contar un tercer proyector sin revisar esta decision.

## Audio por zonas

Planteamiento inicial: una fuente mono alimenta las dos entradas de un unico amplificador estereo. Cada canal alimenta como maximo un altavoz seleccionado por reles. Entre los cuatro o cinco altavoces instalados solo pueden sonar dos a la vez. Cero o uno tambien son estados validos; durante una conmutacion puede haber silencio.

```text
Fuente / mezcla mono
  -> entrada L -> canal L -> seleccion por reles -> altavoz seleccionado A
  -> entrada R -> canal R -> seleccion por reles -> altavoz seleccionado B
```

No es un modo puente del amplificador ni una union de sus salidas de potencia. La mezcla mono se obtiene antes de la etapa de potencia. La asignacion de cada altavoz a los canales y las parejas permitidas aun debe definirse; no se presupone que cualquier pareja sea seleccionable con el mismo circuito.

### Validacion antes del montaje

- Confirmar el modelo del amplificador, tipo de salidas, potencia y carga admisible, junto con impedancia y potencia de los altavoces. El planteamiento presupone altavoces pasivos compatibles con esa etapa.
- Dimensionar contactos, cableado y aislamiento de los reles para el circuito de altavoz. No dar por valido un modulo de reles solo por disponer de suficientes canales de control.
- Definir y probar la secuencia: silenciar, desconectar el destino anterior, confirmar el intervalo sin solape, conectar el nuevo y recuperar el audio. Los tiempos dependen del equipo y del rele; quedan pendientes.
- Impedir mas de un destino por canal y cualquier conexion entre salidas L/R. No asumir negativos comunes: revisar si la etapa usa salidas en puente (BTL) y necesita conmutar ambos conductores de cada altavoz.
- Definir un estado de arranque y fallo sin rutas activas, el enclavamiento y las pruebas ante ordenes solapadas, reinicio o perdida del controlador. Un limite en la interfaz no sustituye la validacion del circuito.
- Probar cambios de zona, chasquidos, volumen, temperatura y ausencia de audio en destinos inactivos antes de usarlo con jugadores.

Referencia tecnica, no seleccion de producto: la [hoja de datos de Texas Instruments TPA3116D2](https://www.ti.com/lit/ds/symlink/tpa3116d2.pdf) distingue salidas BTL, modos estereo/mono y control MUTE. Ilustra por que no se debe inferir el cableado de un amplificador desconocido; mandan el manual y las pruebas del modelo finalmente elegido.

## Microfonos

Los seis microfonos como minimo son una dotacion separada de las camaras. No se asume que el audio integrado de una camara los sustituya.

Definir posiciones, cobertura, alimentacion, entradas de previo/interfaz o mezclador y que canales se escuchan simultaneamente. El amplificador de altavoces no resuelve por si mismo las entradas de microfono. Revisar monitorizacion del Game Master, inteligibilidad y acoples; no se presupone que los microfonos se reenvien a los altavoces de sala.

## Nueve camaras PoE

- Preparar un plano con nueve posiciones y cobertura, sin asignar ubicaciones definitivas sin comprobar la sala.
- Prever nueve conexiones PoE para las camaras, mas los enlaces de red necesarios. Seleccionar puertos y potencia total a partir de las fichas de las camaras y del equipo de alimentacion.
- Definir cableado, etiquetado, acceso del Game Master y pruebas de imagen en la oscuridad real de la experiencia.
- Decidir entre visualizacion en directo o tambien grabacion. Grabador, almacenamiento, acceso y conservacion quedan pendientes; no se presupone un NVR adquirido ni grabacion activa.

## Presupuesto y seguimiento

El planning muestra esta dotacion en Infraestructura prevista y enlaza esta ficha. Las tareas y dudas del panel incluyen proyeccion, audio, captacion y red PoE. Se conservan los 35 mecanismos y su orden.

En el presupuesto, el primer proyector se referencia en `forest-projection`, el segundo en `lab-release`, y el audio compartido y las nueve camaras en las notas de `integration-av`. Sus cantidades economicas representan partidas/lotes, no el inventario de cada dispositivo. No se han anadido precios unitarios ni duplicado costes ya agrupados.

La exclusion anterior de camaras se revisa: estas nueve PoE forman parte de la dotacion prevista; los sistemas generales de seguridad del inmueble ajenos a ellas siguen fuera. Importes orientativos y precio acordado permanecen intactos hasta recotizar equipos e integracion. El quinto altavoz es opcional, no una compra cerrada.
