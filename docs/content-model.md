# Modelo de contenido

Este documento explica como estan organizados los datos del timeline y del backlog dentro de `script.js`.

## Timeline

La constante `timeline` contiene las cinco fases principales de la experiencia.

Campos actuales:

- `title`: nombre de la sala o fase.
- `area`: clave que conecta la sala con los juegos del backlog.
- `duration`: duracion en minutos.
- `icon`: nombre de icono Lucide.
- `role`: funcion dentro de la experiencia.
- `objective`: objetivo jugable de la zona.
- `summary`: resumen narrativo visible en la tarjeta.
- `beats`: momentos, objetos o ideas clave que se muestran como etiquetas.

Ejemplo:

```js
{
  title: "Bosque — prologo",
  area: "Bosque",
  duration: 3,
  icon: "trees",
  role: "Introduccion narrativa",
  objective: "Descubrir la mision y emprender el camino hacia la fortaleza...",
  summary: "Los jugadores entran en el bosque a oscuras y se sientan en unos troncos...",
  beats: ["Entrada a oscuras", "Troncos", "Salida del Game Master", "Proyeccion de la mision"]
}
```

## Backlog

La constante `backlog` contiene los 35 mecanismos iniciales.

Campos actuales:

- `id`: identificador de juego, por ejemplo `J-001`.
- `area`: zona a la que pertenece.
- `name`: nombre del mecanismo.
- `status`: estado de definicion.
- `priority`: prioridad.

Los filtros actuales dependen de `priority` y `status`.

El timeline usa `area` para mostrar automaticamente los juegos de cada sala en el mismo orden en que aparecen en el backlog. Ese orden se considera el orden de resolucion.

## Plano interactivo

La constante `mapPoints` coloca los puntos interactivos sobre `assets/interactive-floor-plan.jpg`.

- `id`: identificador interno estable.
- `title`: titulo mostrado en tooltip y modal.
- `area`: zona o categoria visible.
- `zone`: clase de color (`main`, `passage`, `laboratory` o `scenic`).
- `icon`: icono Lucide del punto.
- `x` e `y`: posicion porcentual sobre el plano.
- `summary` y `details`: explicacion breve y ampliada.
- `mechanisms`: IDs del backlog relacionados con ese punto.

Las coordenadas porcentuales mantienen los puntos alineados cuando cambia el tamano del plano. En pantallas estrechas, el plano conserva su escala y permite desplazamiento horizontal.

## Panel de planificacion

El panel lateral usa tres grupos:

- `tasks`: tareas de alto nivel.
- `pending`: se calcula automaticamente desde el backlog buscando estados `Pendiente`, `Sin definir` o `Duda`.
- `questions`: dudas abiertas importantes.

## Iconos

Los iconos vienen de Lucide, cargado por CDN en `index.html`.

Cuando se anada un area nueva, actualizar `areaIcons` en `script.js`.

## Reglas para mantener el contenido limpio

- Mantener los textos cortos en tarjetas.
- Guardar detalles largos en documentos externos o futuras fichas.
- Usar un ID estable para cada juego.
- No reutilizar IDs eliminados.
- Convertir dudas recurrentes en tareas o decisiones cerradas.
