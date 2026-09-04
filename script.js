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

const timelineList = document.querySelector("#timelineList");
const backlogGrid = document.querySelector("#backlogGrid");
const drawer = document.querySelector("#planningDrawer");
const backdrop = document.querySelector("#drawerBackdrop");

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
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeDrawer();
});
