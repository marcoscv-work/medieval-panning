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
- Panel emergente de planificacion.
- Resumen de avance de construccion, definicion y pendiente.
- Backlog filtrable por prioridad y estado.
- Iconografia con Lucide.
- Diseno responsive para escritorio y movil.
- Datos derivados del backlog inicial de 35 mecanismos.

## Estado actual del proyecto

- Construccion: 3%.
- Definicion: 40%, calculado sobre 14 mecanismos definidos conceptualmente de 35.
- Pendiente de concretar: 60%, incluyendo diseno tecnico, contenido, dudas, juegos sin definir y decisiones de coste.
- Duracion narrativa: 59 minutos.
- Zonas jugables: 5.
- Mecanismos registrados: 35.

## Como evolucionarlo

1. Actualizar los datos en `script.js`.
2. Ajustar el diseno en `styles.css`.
3. Mantener la estructura base en `index.html`.
4. Documentar decisiones importantes en `docs/roadmap.md`.
5. Si se anaden nuevos estados o campos, actualizar `docs/content-model.md`.

Para mas detalle, ver [docs/evolution-guide.md](docs/evolution-guide.md).

## Publicacion

El site esta pensado para publicarse con GitHub Pages desde la rama `main` y la carpeta raiz.

Ver [docs/deployment.md](docs/deployment.md).
