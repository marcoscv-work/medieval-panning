# Escape Room Medieval - Timeline y Planificacion

Site estatico en HTML, CSS y JavaScript vanilla para visualizar el timeline vertical, el backlog de mecanismos y el estado de planificacion de una escape room medieval.

La version actual convierte el documento inicial de timeline/backlog en una interfaz visual: fases de juego, progreso de construccion, avance de definicion, juegos pendientes, dudas abiertas y tareas de evolucion.

## Demo local

```bash
python3 -m http.server 4173
```

Abrir:

```text
http://127.0.0.1:4173/
```

## Estructura

```text
.
├── index.html
├── styles.css
├── script.js
├── README.md
└── docs/
    ├── content-model.md
    ├── evolution-guide.md
    ├── roadmap.md
    └── deployment.md
```

## Que incluye

- Timeline vertical con animacion de descubrimiento.
- Plano interactivo con puntos, tooltips y fichas modales vinculadas al backlog.
- Presupuesto online editable por areas, con calculo de equipo, imprevistos, IVA y seleccion de contenido para imprimir.
- Panel emergente de planificacion.
- Resumen de avance de construccion, definicion y pendiente.
- Backlog filtrable por prioridad y estado.
- Iconografia con Lucide.
- Diseno responsive para escritorio y movil.
- Datos derivados del backlog inicial de 35 mecanismos.

## Estado actual del proyecto

- Construccion: 3%.
- Definicion: 49%, estimacion editorial de 16 conceptos definidos mas 0,5 puntos por cada uno de los dos prototipos web (17 / 35, redondeado). No mide fabricacion ni integracion terminadas.
- Pendiente de concretar: 51%, incluyendo diseno tecnico, contenido, dudas, juegos sin definir y decisiones de coste.
- Prologo J-002: [La ultima luz](https://quakespain.es/prologo/), cuento 3D narrado disponible en web. Pendientes las pruebas de proyeccion y sonido, el disparo desde el gestor y la transicion al juego.
- Espejo J-023: [espejo / mascara](https://quakespain.es/mask/), prototipo floating-mask publicado, con expresiones y voz sincronizada. Pendientes montaje optico, control de sala y resolucion del acertijo J-024; no se considera un juego fisico completado.
- Duracion narrativa: 59 minutos.
- Zonas jugables: 5.
- Mecanismos registrados: 35.

Actualizacion: 18 de octubre de 2026. Ambos enlaces respondieron HTTP 200 al comprobarlos. Las demos se alojan fuera del planning y se abren desde Avance, timeline, backlog y la ficha del espejo en el plano. Los tres minutos del bosque siguen incluyendo entrada, acomodo y transicion, no solo la duracion del video.

## Como evolucionarlo

1. Actualizar los datos en `script.js`.
2. Ajustar el diseno en `styles.css`.
3. Mantener la estructura base en `index.html`.
4. Documentar decisiones importantes en `docs/roadmap.md`.
5. Si se anaden nuevos estados o campos, actualizar `docs/content-model.md`.

El presupuesto se encuentra en `presupuesto.html`. Sus cifras iniciales son orientativas y se guardan localmente en el navegador; cada partida puede restaurarse desde la propia cabecera de configuracion.

Para mas detalle, ver [docs/evolution-guide.md](docs/evolution-guide.md).

## Publicacion

El site esta pensado para publicarse con GitHub Pages desde la rama `main` y la carpeta raiz.

Ver [docs/deployment.md](docs/deployment.md).
