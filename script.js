const timeline = [
  {
    title: "Bosque — prologo",
    area: "Bosque",
    duration: 3,
    icon: "trees",
    role: "Introduccion narrativa",
    objective: "Descubrir la mision y emprender el camino hacia la fortaleza del gran mago.",
    summary:
      "Los jugadores entran en el bosque a oscuras y se sientan en unos troncos. El Game Master se marcha y comienza una proyeccion: han llegado a un mundo magico cuyas criaturas estan desapareciendo. Para descubrir la causa, deberan visitar al gran mago del reino en su fortaleza.",
    beats: ["Entrada a oscuras", "Troncos", "Salida del Game Master", "Proyeccion de la mision"],
  },
  {
    title: "Exterior del castillo",
    area: "Exterior",
    duration: 15,
    icon: "trees",
    role: "Primera zona jugable real",
    objective: "Deshacer el encantamiento que bloquea la entrada al castillo.",
    summary:
      "Frente al castillo, el grupo encuentra al alma perdida. Tras realizar una ofrenda, este personaje acompana la aventura y sirve como canal narrativo del Game Master.",
    beats: ["Alma perdida", "Ofrenda", "Encantamiento", "Objetos fisicos"],
  },
  {
    title: "Sala principal",
    area: "Sala principal",
    duration: 20,
    icon: "landmark",
    role: "Nucleo principal de la experiencia",
    objective: "Obtener la varita como objetivo principal, sembrar sospechas sobre el mago y abrir el acceso al pasillo.",
    summary:
      "La sala concentra criaturas animatronicas, caldero, dia y noche, libros vivos y una mini armadura. El cuadro magico cambiara mediante una pantalla de tinta electronica de 13,3 pulgadas y el espejo mostrara un monitor oculto tras una lamina semirreflectante. Todo el recorrido converge en la obtencion de la varita.",
    beats: ["Varita: objetivo principal", "Cuadro de tinta electronica", "Espejo con monitor", "Caldero", "Libros moviles"],
  },
  {
    title: "Pasillo / mazmorra",
    area: "Pasillo",
    duration: 7,
    icon: "music",
    role: "Transicion intensa y sensorial",
    objective: "Reproducir la melodia de las piedras tactiles para abrir el laboratorio.",
    summary:
      "La atmosfera se estrecha: piedra, oscuridad y una pista conectada con el cuadro anterior. Un animatronico silba la cancion que los jugadores deben replicar tocando piedras luminosas.",
    beats: ["Pista del cuadro", "Animatronico silbando", "Piedras tactiles"],
  },
  {
    title: "Laboratorio del mago",
    area: "Laboratorio",
    duration: 14,
    icon: "flask-conical",
    role: "Revelacion final y climax",
    objective: "Liberar a las criaturas magicas y escapar antes de que el mago los atrape.",
    summary:
      "El grupo descubre que el mago experimenta con criaturas encerradas en al menos seis jaulas. Durante la liberacion se apaga la luz, unos motores ocultan las criaturas al fondo de las jaulas y, al volver la iluminacion, el audio y una proyeccion de apoyo confirman que han escapado.",
    beats: ["Conjuro colectivo", "Apagon y motores", "Audio de liberacion", "Proyeccion de apoyo", "Huida"],
  },
];

const backlog = [
  ["J-001", "Bosque", "Entrada a oscuras y acomodo en los troncos", "Definido conceptualmente", "Alta"],
  ["J-002", "Bosque", "Proyeccion introductoria tras la salida del Game Master", "Pendiente de diseno tecnico", "Alta"],
  ["J-003", "Exterior", "Alma perdida / acompanante Game Master", "Definido conceptualmente", "Alta"],
  ["J-004", "Exterior", "Ofrenda al alma perdida", "Pendiente de diseno", "Alta"],
  ["J-005", "Exterior", "Deshacer encantamiento de la puerta", "Pendiente de diseno", "Alta"],
  ["J-006", "Exterior", "Busqueda de objetos para desbloqueo", "Pendiente de diseno", "Alta"],
  ["J-007", "Exterior", "Juego fisico 1, posiblemente poleas", "Sin definir", "Media"],
  ["J-008", "Exterior", "Juego fisico 2 aprovechando tamano de sala", "Sin definir", "Media"],
  ["J-009", "Exterior", "Pista fija en proyector tras intro", "Pendiente de contenido", "Media"],
  ["J-010", "Exterior", "Guardianes con acertijos", "Duda / opcional", "Baja-media"],
  ["J-011", "Sala principal", "Animatronicos de ojos / criaturas magicas", "Definido conceptualmente", "Alta"],
  ["J-012", "Sala principal", "Averiguar nombres de criaturas", "Pendiente de diseno", "Alta"],
  ["J-013", "Sala principal", "Caldero fisico", "Pendiente de mecanica concreta", "Alta"],
  ["J-014", "Sala principal", "Juego fisico adicional", "Sin definir", "Media"],
  ["J-015", "Sala principal", "Juego de dia y noche", "Definido conceptualmente", "Alta"],
  ["J-016", "Sala principal", "Evento especial del alba", "Pendiente de diseno tecnico", "Alta"],
  ["J-017", "Sala principal", "Obtencion de la varita como objetivo principal de la sala", "Definido conceptualmente", "Alta"],
  ["J-018", "Sala principal", "Juego de libros moviles", "Definido conceptualmente", "Alta"],
  ["J-019", "Sala principal", "Libro legible desde altillo", "Pendiente de diseno", "Alta"],
  ["J-020", "Sala principal", "Mini armadura / caballero limpio", "Definido conceptualmente", "Media-alta"],
  ["J-021", "Sala principal", "Cuadro magico con pantalla de tinta electronica de 13,3 pulgadas", "Definido conceptualmente", "Alta"],
  ["J-022", "Sala principal", "Cuadro con posturas de varita", "Pendiente de contenido", "Alta"],
  ["J-023", "Sala principal", "Espejo magico: monitor tras lamina semirreflectante", "Definido conceptualmente", "Alta"],
  ["J-024", "Sala principal", "Resolucion espejo + apertura pasillo", "Pendiente de diseno", "Alta"],
  ["J-025", "Pasillo", "Pista conectada con cuadro anterior", "Pendiente de diseno", "Media"],
  ["J-026", "Pasillo", "Animatronico silbando melodia", "Definido conceptualmente", "Alta"],
  ["J-027", "Pasillo", "Piedras tactiles luminosas con sensores capacitivos", "Definido conceptualmente", "Alta"],
  ["J-028", "Pasillo", "Reproduccion de melodia con piedras", "Definido conceptualmente", "Alta"],
  ["J-029", "Laboratorio", "Pistas falsas / llaves inutiles", "Pendiente de diseno", "Media"],
  ["J-030", "Laboratorio", "Liberacion en 6+ jaulas: apagon, motores, audio y proyeccion de apoyo", "Definido conceptualmente", "Alta"],
  ["J-031", "Laboratorio", "Juego adicional 1", "Sin definir", "Alta"],
  ["J-032", "Laboratorio", "Juego adicional 2", "Sin definir", "Alta"],
  ["J-033", "Laboratorio", "Conjuro final colectivo", "Definido conceptualmente", "Alta"],
  ["J-034", "Laboratorio", "Aparicion final del mago / GM disfrazado", "Definido conceptualmente", "Alta"],
  ["J-035", "Laboratorio", "Apertura de puerta final / huida", "Pendiente de diseno tecnico", "Alta"],
].map(([id, area, name, status, priority]) => ({ id, area, name, status, priority }));

const tasks = [
  {
    icon: "book-open-text",
    title: "Documento narrativo jugable",
    body: "Convertir el recorrido completo en una version limpia que explique que ve, entiende y consigue el jugador en cada sala.",
  },
  {
    icon: "clipboard-list",
    title: "Fichas de diseno por juego",
    body: "Crear una ficha individual para cada mecanismo con mecanica, fisicos, sensores, audio, luces, pistas, reset y dependencias.",
  },
  {
    icon: "wand-sparkles",
    title: "Prototipos clave",
    body: "Priorizar varita, cuadro, espejo, piedras tactiles, caldero y conjuro final porque conectan varias salas.",
  },
];

const questions = [
  ["shield-question", "Guardianes o alma perdida", "Decidir si el exterior tendra guardianes con acertijos o si todo pivota sobre el alma perdida."],
  ["gift", "Tipo de ofrenda", "Definir si sera fisica, simbolica, sonora o combinada."],
  ["key-round", "Objetos del encantamiento", "Concretar que piezas necesita el grupo para abrir la puerta del castillo."],
  ["wand", "Varita electronica", "Decidir si la varita sera prop fisico o tendra sensores/electronica."],
  ["image", "Validacion del cuadro magico", "Probar el refresco y la integracion escenografica de la pantalla de tinta electronica de 13,3 pulgadas ya adquirida."],
  ["mic-vocal", "Validacion del espejo magico", "Probar brillo, contraste y ocultacion del monitor detras de la lamina semirreflectante."],
  ["flask-conical", "Dos juegos de laboratorio", "Disenar los dos juegos que faltan para sostener el climax."],
  ["route", "Obtencion de la varita", "Disenar la mecanica y el momento exactos de su entrega como objetivo principal de la Sala principal."],
];

const areaIcons = {
  Bosque: "trees",
  Exterior: "trees",
  "Sala principal": "landmark",
  Pasillo: "music",
  Laboratorio: "flask-conical",
};

const balanceNotes = {
  Exterior: "Densidad alta para 15 minutos: conviene fusionar varios mecanismos o tratarlos como microacciones guiadas.",
  "Sala principal": "Zona muy cargada: mejor separar 5-6 puzzles principales y convertir el resto en pistas, efectos o subpasos.",
  Laboratorio: "Climax con bastante carga: mantener 2-3 juegos reales y usar pistas falsas/huida como tension narrativa.",
};

const mapPoints = [
  {
    id: "banco",
    title: "Banco de espera",
    area: "Escenografia",
    zone: "scenic",
    icon: "armchair",
    x: 10,
    y: 43,
    summary: "Banco de 200 × 50 cm situado en el extremo izquierdo del recorrido.",
    details: "Punto fisico de apoyo y espera. Conviene mantener libre su entorno para no interferir con la circulacion ni con la entrada a la puerta magica.",
    mechanisms: [],
  },
  {
    id: "puerta-entrada",
    title: "Puerta magica de entrada",
    area: "Sala principal",
    zone: "main",
    icon: "door-open",
    x: 25,
    y: 46,
    summary: "Acceso encantado que introduce al grupo en la zona interior del castillo.",
    details: "Debe reforzar el paso desde el exterior hacia la Sala principal y funcionar como hito narrativo claro dentro del recorrido.",
    mechanisms: ["J-005", "J-006"],
  },
  {
    id: "animatronico-principal",
    title: "Criaturas animatronicas",
    area: "Sala principal",
    zone: "main",
    icon: "eye",
    x: 29,
    y: 62,
    summary: "Criaturas con movimiento de ojos que observan a los jugadores.",
    details: "Presentan la presencia de criaturas magicas dentro del castillo y ayudan a construir la sospecha de que algo no va bien.",
    mechanisms: ["J-011", "J-012"],
  },
  {
    id: "altillo",
    title: "Altillo y escalera",
    area: "Sala principal",
    zone: "main",
    icon: "move-up-right",
    x: 38,
    y: 34,
    summary: "Desnivel central que conecta la sala con los libros y elementos elevados.",
    details: "La altura se aprovecha para cambiar el punto de vista del jugador y permitir la lectura o activacion de elementos que no funcionan desde el nivel inferior.",
    mechanisms: ["J-019", "J-020"],
  },
  {
    id: "caldero",
    title: "Caldero fisico",
    area: "Sala principal",
    zone: "main",
    icon: "cooking-pot",
    x: 43,
    y: 24,
    summary: "Pieza fisica protagonista situada junto al altillo.",
    details: "Su mecanica concreta sigue pendiente, pero debe integrarse como una interaccion de alta prioridad y resistir el uso repetido entre sesiones.",
    mechanisms: ["J-013"],
  },
  {
    id: "libros",
    title: "Biblioteca encantada",
    area: "Sala principal",
    zone: "main",
    icon: "book-open-text",
    x: 55,
    y: 19,
    summary: "Libros moviles y un volumen que se descifra desde el altillo.",
    details: "La biblioteca combina movimiento escenografico con una lectura condicionada por la posicion elevada del jugador.",
    mechanisms: ["J-018", "J-019"],
  },
  {
    id: "cuadro",
    title: "Cuadro magico",
    area: "Sala principal",
    zone: "main",
    icon: "image",
    x: 50,
    y: 43,
    summary: "Cuadro cambiante mediante una pantalla de tinta electronica de 13,3 pulgadas.",
    details: "La pantalla ya esta adquirida. Queda validar su refresco e integracion escenografica y preparar el contenido con las posturas de la varita.",
    mechanisms: ["J-021", "J-022"],
  },
  {
    id: "varita",
    title: "Obtencion de la varita",
    area: "Sala principal",
    zone: "main",
    icon: "wand-sparkles",
    x: 43,
    y: 56,
    summary: "Objetivo principal de toda la Sala principal.",
    details: "Los juegos de la sala deben converger en su obtencion. La mecanica y el momento exactos de entrega aun deben definirse.",
    mechanisms: ["J-017"],
  },
  {
    id: "espejo",
    title: "Espejo magico",
    area: "Sala principal",
    zone: "main",
    icon: "scan-face",
    x: 61,
    y: 28,
    summary: "Monitor oculto detras de una lamina semirreflectante.",
    details: "El contenido aparecera cuando se ilumine el monitor. Queda validar brillo, contraste y ocultacion para que el efecto resulte convincente.",
    mechanisms: ["J-023", "J-024"],
  },
  {
    id: "aldabas",
    title: "Aldabas parlantes",
    area: "Pasillo",
    zone: "passage",
    icon: "audio-lines",
    x: 69,
    y: 27,
    summary: "Punto sonoro previsto en el acceso al corredor.",
    details: "Puede funcionar como voz diegetica, aviso o sistema de pistas. Su contenido y su relacion exacta con la progresion siguen por concretar.",
    mechanisms: [],
  },
  {
    id: "escritorio",
    title: "Escritorio",
    area: "Escenografia",
    zone: "scenic",
    icon: "notebook-tabs",
    x: 57,
    y: 67,
    summary: "Mueble situado en la transicion entre la Sala principal y el pasillo.",
    details: "Puede alojar documentos, props o controles ocultos sin invadir el flujo principal de jugadores.",
    mechanisms: [],
  },
  {
    id: "vidrieras",
    title: "Vidrieras",
    area: "Sala principal",
    zone: "main",
    icon: "sunrise",
    x: 52,
    y: 75,
    summary: "Franja de vidrieras vinculada a los cambios de luz de la sala.",
    details: "Sirve de soporte escenografico para el ciclo de dia y noche y para el evento especial del alba.",
    mechanisms: ["J-015", "J-016"],
  },
  {
    id: "pista-pasillo",
    title: "Pista del cuadro",
    area: "Pasillo",
    zone: "passage",
    icon: "route",
    x: 65,
    y: 47,
    summary: "Conexion narrativa entre el cuadro de la Sala principal y la prueba musical.",
    details: "Debe preparar al grupo para interpretar la melodia sin resolver por adelantado la secuencia de las piedras tactiles.",
    mechanisms: ["J-025"],
  },
  {
    id: "animatronico-silbando",
    title: "Animatronico silbando",
    area: "Pasillo",
    zone: "passage",
    icon: "bird",
    x: 68,
    y: 58,
    summary: "Criatura que comunica mediante un silbido la melodia que debe reproducirse.",
    details: "Es la fuente sonora de referencia para el puzzle tactil y debe poder repetirse con claridad cuando el grupo necesite otra escucha.",
    mechanisms: ["J-026"],
  },
  {
    id: "piedras",
    title: "Piedras tactiles",
    area: "Pasillo",
    zone: "passage",
    icon: "hand",
    x: 72,
    y: 51,
    summary: "Piedras luminosas controladas mediante sensores capacitivos.",
    details: "Los jugadores reproducen sobre ellas la melodia del animatronico para abrir el acceso al laboratorio.",
    mechanisms: ["J-027", "J-028"],
  },
  {
    id: "jaulas",
    title: "Jaulas de criaturas",
    area: "Laboratorio",
    zone: "laboratory",
    icon: "paw-print",
    x: 86,
    y: 36,
    summary: "Zona final con al menos seis jaulas y criaturas cautivas.",
    details: "Durante la liberacion se apaga la luz y los motores tumban las criaturas al fondo de las jaulas para ocultarlas. La luz vuelve con audio de liberacion y una proyeccion de apoyo.",
    mechanisms: ["J-029", "J-030", "J-033"],
  },
  {
    id: "puerta-final",
    title: "Puerta magica final",
    area: "Laboratorio",
    zone: "laboratory",
    icon: "log-out",
    x: 86,
    y: 73,
    summary: "Salida que se abre tras liberar a las criaturas.",
    details: "El mago aparece para elevar la tension y el grupo debe atravesar esta puerta durante la huida final.",
    mechanisms: ["J-034", "J-035"],
  },
];

const timelineList = document.querySelector("#timelineList");
const backlogGrid = document.querySelector("#backlogGrid");
const drawer = document.querySelector("#planningDrawer");
const backdrop = document.querySelector("#drawerBackdrop");
const mapMarkers = document.querySelector("#mapMarkers");
const mapModal = document.querySelector("#mapModal");
const mapModalBackdrop = document.querySelector("#mapModalBackdrop");
const closeMapModalButton = document.querySelector("#closeMapModal");
let lastMapTrigger = null;

function icon(name) {
  return `<i data-lucide="${name}"></i>`;
}

function renderTimeline() {
  timelineList.innerHTML = timeline
    .map((item, index) => {
      const games = backlog.filter((game) => game.area === item.area);

      return `
      <article class="timeline-card" style="transition-delay: ${index * 90}ms">
        <div class="timeline-icon">${icon(item.icon)}</div>
        <div class="timeline-content">
          <div class="timeline-meta">
            <span class="pill">${icon("timer")} ${item.duration} min</span>
            <span class="pill">${icon("flag")} ${item.role}</span>
          </div>
          <h3>${index + 1}. ${item.title}</h3>
          <p>${item.summary}</p>
          <p><strong>Objetivo:</strong> ${item.objective}</p>
          <ul>${item.beats.map((beat) => `<li class="pill">${beat}</li>`).join("")}</ul>
          ${
            balanceNotes[item.area]
              ? `<div class="room-warning">
                  ${icon("triangle-alert")}
                  <span>${balanceNotes[item.area]}</span>
                </div>`
              : ""
          }
          <div class="room-games">
            <div class="room-games-header">
              <span>${icon("list-ordered")} Orden de resolucion</span>
              <strong>${games.length} juegos</strong>
            </div>
            <ol>
              ${games
                .map(
                  (game) => `
                    <li>
                      <span class="game-step">${game.id}</span>
                      <div>
                        <strong>${game.name}</strong>
                        <small>${game.status} · ${game.priority}</small>
                      </div>
                    </li>
                  `,
                )
                .join("")}
            </ol>
          </div>
        </div>
      </article>
    `;
    })
    .join("");
}

function renderBacklog(filter = "all") {
  const filtered = backlog.filter((item) => {
    if (filter === "all") return true;
    if (filter === "Pendiente") return item.status.includes("Pendiente") || item.status.includes("Duda");
    return item.priority.includes(filter) || item.status.includes(filter);
  });

  backlogGrid.innerHTML = filtered
    .map(
      (item) => `
      <article class="backlog-item">
        <div class="backlog-icon">${icon(areaIcons[item.area] || "puzzle")}</div>
        <div>
          <span class="pill">${item.id} · ${item.area}</span>
          <h3>${item.name}</h3>
          <p>${item.status}</p>
          <span class="pill priority">${icon("chevrons-up")} ${item.priority}</span>
        </div>
      </article>
    `,
    )
    .join("");
  refreshIcons();
}

function renderPlanPanel() {
  document.querySelector("#tab-tasks").innerHTML = tasks
    .map(
      (task) => `
      <article class="plan-item">
        ${icon(task.icon)}
        <div><strong>${task.title}</strong><p>${task.body}</p></div>
      </article>
    `,
    )
    .join("");

  const pending = backlog.filter(
    (item) => item.status.includes("Pendiente") || item.status.includes("Sin definir") || item.status.includes("Duda"),
  );
  document.querySelector("#tab-pending").innerHTML = pending
    .map(
      (item) => `
      <article class="plan-item">
        ${icon(areaIcons[item.area] || "puzzle")}
        <div><strong>${item.id} · ${item.name}</strong><span>${item.area} · ${item.status} · ${item.priority}</span></div>
      </article>
    `,
    )
    .join("");

  document.querySelector("#tab-questions").innerHTML = questions
    .map(
      ([questionIcon, title, body]) => `
      <article class="plan-item">
        ${icon(questionIcon)}
        <div><strong>${title}</strong><p>${body}</p></div>
      </article>
    `,
    )
    .join("");
}

function renderMap() {
  mapMarkers.innerHTML = mapPoints
    .map(
      (point, index) => `
        <button
          class="map-marker ${point.zone}"
          type="button"
          style="--x: ${point.x}%; --y: ${point.y}%"
          data-map-point="${point.id}"
          data-tooltip="${point.title}"
          aria-label="Abrir ficha: ${point.title}"
        >
          <span>${icon(point.icon)}</span>
          <b>${String(index + 1).padStart(2, "0")}</b>
        </button>
      `,
    )
    .join("");
}

function openMapModal(pointId, trigger) {
  const point = mapPoints.find((item) => item.id === pointId);
  if (!point) return;

  const related = point.mechanisms
    .map((mechanismId) => backlog.find((item) => item.id === mechanismId))
    .filter(Boolean);

  document.querySelector("#mapModalIcon").innerHTML = icon(point.icon);
  document.querySelector("#mapModalArea").textContent = point.area;
  document.querySelector("#mapModalTitle").textContent = point.title;
  document.querySelector("#mapModalSummary").textContent = point.summary;
  document.querySelector("#mapModalDetails").innerHTML = `
    <p>${point.details}</p>
    ${
      related.length
        ? `<div class="map-related"><strong>Mecanismos relacionados</strong>${related
            .map(
              (item) => `
                <article>
                  <span>${item.id}</span>
                  <div><b>${item.name}</b><small>${item.status} · Prioridad ${item.priority}</small></div>
                </article>
              `,
            )
            .join("")}</div>`
        : '<div class="map-related"><strong>Tipo de punto</strong><p>Elemento escenografico sin mecanismo asignado.</p></div>'
    }
  `;

  mapModal.classList.add("open");
  mapModal.inert = false;
  mapModal.setAttribute("aria-hidden", "false");
  mapModalBackdrop.hidden = false;
  document.body.classList.add("modal-open");
  lastMapTrigger = trigger;
  closeMapModalButton.focus();
  refreshIcons();
}

function closeMapModal() {
  mapModal.classList.remove("open");
  mapModal.inert = true;
  mapModal.setAttribute("aria-hidden", "true");
  mapModalBackdrop.hidden = true;
  document.body.classList.remove("modal-open");
  if (lastMapTrigger && document.contains(lastMapTrigger)) lastMapTrigger.focus();
  lastMapTrigger = null;
}

function refreshIcons() {
  if (window.lucide) window.lucide.createIcons();
}

function openDrawer() {
  drawer.classList.add("open");
  drawer.setAttribute("aria-hidden", "false");
  backdrop.hidden = false;
  document.body.classList.add("drawer-open");
}

function closeDrawer() {
  drawer.classList.remove("open");
  drawer.setAttribute("aria-hidden", "true");
  backdrop.hidden = true;
  document.body.classList.remove("drawer-open");
}

renderTimeline();
renderBacklog();
renderPlanPanel();
renderMap();
refreshIcons();

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  },
  { threshold: 0.18 },
);
document.querySelectorAll(".timeline-card").forEach((card) => observer.observe(card));

document.querySelectorAll(".filter").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    renderBacklog(button.dataset.filter);
  });
});

document.querySelectorAll(".tab").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach((tab) => tab.classList.remove("active"));
    document.querySelectorAll(".drawer-panel").forEach((panel) => panel.classList.remove("active"));
    button.classList.add("active");
    document.querySelector(`#tab-${button.dataset.tab}`).classList.add("active");
  });
});

document.querySelector("#openPlanning").addEventListener("click", openDrawer);
document.querySelector("#openPlanningHero").addEventListener("click", openDrawer);
document.querySelector("#closePlanning").addEventListener("click", closeDrawer);
backdrop.addEventListener("click", closeDrawer);
mapMarkers.addEventListener("click", (event) => {
  const marker = event.target.closest("[data-map-point]");
  if (marker) openMapModal(marker.dataset.mapPoint, marker);
});
closeMapModalButton.addEventListener("click", closeMapModal);
mapModalBackdrop.addEventListener("click", closeMapModal);
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeDrawer();
    closeMapModal();
  }
});
