const timeline = [
  {
    title: "Carromato",
    duration: 3,
    icon: "caravan",
    role: "Introduccion narrativa",
    objective: "Presentar la desaparicion de las criaturas y enviar al grupo al castillo del mago.",
    summary:
      "Los jugadores empiezan a oscuras dentro del carromato. El conductor narra el misterio del reino y, al encenderse las luces, la proyeccion revela que han llegado al bosque.",
    beats: ["Conductor narrador", "Viaje simulado", "Llegada al bosque"],
  },
  {
    title: "Exterior del castillo",
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
    duration: 20,
    icon: "landmark",
    role: "Nucleo principal de la experiencia",
    objective: "Obtener la varita, sembrar sospechas sobre el mago y abrir el acceso al pasillo.",
    summary:
      "La sala concentra criaturas animatronicas, caldero, dia y noche, libros vivos, mini armadura, cuadro magico y espejo. Aqui aparece la varita y la historia se vuelve mas inquietante.",
    beats: ["Varita", "Caldero", "Libros moviles", "Espejo magico"],
  },
  {
    title: "Pasillo / mazmorra",
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
    duration: 14,
    icon: "flask-conical",
    role: "Revelacion final y climax",
    objective: "Liberar a las criaturas magicas y escapar antes de que el mago los atrape.",
    summary:
      "El grupo descubre que el mago experimenta con las criaturas. Entre pistas falsas y objetos inutiles, resuelven el conjuro final; el mago aparece y se abre la huida.",
    beats: ["Pistas falsas", "Conjuro colectivo", "Aparicion del mago", "Huida"],
  },
];

const backlog = [
  ["J-001", "Carromato", "Proyeccion introductoria con conductor", "Definido conceptualmente", "Alta"],
  ["J-002", "Carromato", "Simulacion de viaje / llegada al bosque", "Pendiente de diseno tecnico", "Alta"],
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
  ["J-017", "Sala principal", "Obtencion de la varita", "Definido conceptualmente", "Alta"],
  ["J-018", "Sala principal", "Juego de libros moviles", "Definido conceptualmente", "Alta"],
  ["J-019", "Sala principal", "Libro legible desde altillo", "Pendiente de diseno", "Alta"],
  ["J-020", "Sala principal", "Mini armadura / caballero limpio", "Definido conceptualmente", "Media-alta"],
  ["J-021", "Sala principal", "Cuadro magico cambiante", "Definido conceptualmente", "Alta"],
  ["J-022", "Sala principal", "Cuadro con posturas de varita", "Pendiente de contenido", "Alta"],
  ["J-023", "Sala principal", "Espejo magico interactivo", "Definido conceptualmente", "Alta"],
  ["J-024", "Sala principal", "Resolucion espejo + apertura pasillo", "Pendiente de diseno", "Alta"],
  ["J-025", "Pasillo", "Pista conectada con cuadro anterior", "Pendiente de diseno", "Media"],
  ["J-026", "Pasillo", "Animatronico silbando melodia", "Definido conceptualmente", "Alta"],
  ["J-027", "Pasillo", "Piedras tactiles luminosas", "Definido conceptualmente", "Alta"],
  ["J-028", "Pasillo", "Reproduccion de melodia con piedras", "Definido conceptualmente", "Alta"],
  ["J-029", "Laboratorio", "Pistas falsas / llaves inutiles", "Pendiente de diseno", "Media"],
  ["J-030", "Laboratorio", "Juego final de liberacion de criaturas", "Pendiente de diseno", "Alta"],
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
  ["image", "Cuadro magico", "Elegir pantalla, proyeccion o efecto fisico segun coste y mantenimiento."],
  ["mic-vocal", "Espejo magico", "Resolver si sera actor, IA, video, pantalla o sistema pregrabado."],
  ["hand", "Piedras tactiles", "Elegir sensores capacitivos, presion o botones ocultos para asegurar fiabilidad."],
  ["flask-conical", "Dos juegos de laboratorio", "Disenar los dos juegos que faltan para sostener el climax."],
  ["sparkles", "Liberacion visual", "Definir como se vera la liberacion de las criaturas en el final."],
  ["route", "Obtencion de la varita", "Concretar el momento exacto en que se consigue este objeto central."],
];

const areaIcons = {
  Carromato: "caravan",
  Exterior: "trees",
  "Sala principal": "landmark",
  Pasillo: "music",
  Laboratorio: "flask-conical",
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
    .map(
      (item, index) => `
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
        </div>
      </article>
    `,
    )
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
