# Guia de evolucion

El objetivo del site es crecer desde una visualizacion inicial hacia una herramienta de seguimiento para diseno, produccion y direccion de juego.

## Principios

- La primera pantalla debe seguir siendo util: estado, duracion y acceso rapido al plan.
- El timeline debe explicar la experiencia desde el punto de vista del jugador.
- El backlog debe servir para tomar decisiones de produccion.
- Las dudas abiertas deben convertirse en decisiones documentadas.
- Las metricas deben salir del contenido, no de sensaciones sueltas.

## Siguientes mejoras recomendadas

1. Separar datos a `data.js` o `data/*.json`.
2. Crear fichas individuales para cada mecanismo.
3. Anadir vista por area: Carromato, Exterior, Sala principal, Pasillo y Laboratorio.
4. Anadir estados de produccion: idea, diseno, prototipo, fabricacion, integrado, probado.
5. Anadir dependencia entre mecanismos.
6. Anadir estimacion de coste, riesgo tecnico y responsable.
7. Exportar backlog a CSV o JSON.
8. Preparar modo presentacion para reuniones.

## Como anadir una nueva fase al timeline

1. Anadir un objeto a `timeline` en `script.js`.
2. Elegir un icono Lucide.
3. Escribir un `summary` breve.
4. Definir `objective` desde la accion del jugador.
5. Anadir `beats` concretos.
6. Probar responsive en movil.

## Como anadir un juego al backlog

1. Crear nuevo ID correlativo, por ejemplo `J-036`.
2. Asignar area existente o crear una nueva.
3. Escribir un nombre accionable.
4. Usar un estado claro.
5. Asignar prioridad.
6. Si el area es nueva, actualizar `areaIcons`.

## Ficha recomendada para cada juego

```text
ID:
Nombre del juego:
Area:
Duracion estimada:
Objetivo del jugador:
Descripcion narrativa:
Mecanica:
Elementos fisicos:
Electronica / sensores:
Audio:
Iluminacion:
Proyeccion / pantalla:
Pistas disponibles:
Estado de exito:
Estado de fallo:
Reinicio para siguiente partida:
Dependencias:
Dudas abiertas:
Prioridad:
Estado:
```

## Criterios para actualizar avances

Construccion:

- Mantenerlo bajo mientras no haya props, electronica, escenografia o integracion real.
- Subirlo solo cuando haya elementos fisicos construidos o probados.

Definicion:

- Contar como definido solo lo que tenga mecanica jugable clara.
- No contar como definido algo que sea solo una idea narrativa.
- Separar definicion narrativa de definicion tecnica cuando el proyecto crezca.

Pendiente:

- Todo lo que tenga `Pendiente`, `Sin definir`, `Duda` o dependa de una decision abierta.
