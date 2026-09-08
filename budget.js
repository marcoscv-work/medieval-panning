const BUDGET_STORAGE_KEY = "medieval-budget-v1";

const defaultBudgetState = {
  config: {
    people: 2,
    months: 8,
    monthlyRate: 3000,
    contingency: 10,
    vat: 21,
    project: "Escape Room Medieval — construccion integral",
    client: "Por definir",
    reference: "PRE-2026-01",
    date: "2026-09-08",
  },
  print: {
    scope: true,
    schedule: true,
    labor: true,
    forest: true,
    exterior: true,
    mainRoom: true,
    passage: true,
    laboratory: true,
    integration: true,
    totals: true,
  },
  items: {},
};

const budgetSections = [
  {
    id: "labor",
    title: "Equipo y dedicacion",
    subtitle: "Dos personas durante ocho meses, desde Q4 2026 hasta Q2 2027.",
    icon: "users",
    items: [
      {
        id: "labor-team",
        description: "Trabajo integral de diseno, construccion, programacion, montaje y pruebas",
        note: "La cantidad se calcula como personas × meses y el precio unitario es el coste mensual por persona.",
        dynamic: "labor",
      },
    ],
  },
  {
    id: "forest",
    title: "Bosque y prologo",
    subtitle: "Entrada a oscuras, troncos y proyeccion introductoria.",
    icon: "trees",
    items: [
      { id: "forest-set", description: "Ambientacion forestal, troncos y zona de acomodo", qty: 1, unit: 1800 },
      { id: "forest-projection", description: "Proyeccion introductoria, soporte y cableado", qty: 1, unit: 2000 },
      { id: "forest-av", description: "Audio, iluminacion y control de secuencia", qty: 1, unit: 1500 },
    ],
  },
  {
    id: "exterior",
    title: "Exterior del castillo",
    subtitle: "Escenografia, acceso encantado, alma perdida y juegos fisicos.",
    icon: "castle",
    items: [
      { id: "exterior-set", description: "Escenografia exterior y fachada de fortaleza", qty: 1, unit: 6500 },
      { id: "exterior-door", description: "Puerta magica, herrajes y automatizacion", qty: 1, unit: 2800 },
      { id: "exterior-spirit", description: "Alma perdida, ofrenda y elementos narrativos", qty: 1, unit: 2200 },
      { id: "exterior-games", description: "Juegos fisicos, poleas, objetos y mecanismos", qty: 1, unit: 3500 },
    ],
  },
  {
    id: "mainRoom",
    title: "Sala principal",
    subtitle: "Nucleo de la experiencia y obtencion de la varita.",
    icon: "landmark",
    items: [
      { id: "main-creatures", description: "Criaturas animatronicas y movimiento de ojos", qty: 1, unit: 4200 },
      { id: "main-cauldron", description: "Caldero fisico y electronica de interaccion", qty: 1, unit: 2200 },
      { id: "main-light", description: "Iluminacion de dia, noche y evento del alba", qty: 1, unit: 2600 },
      { id: "main-wand", description: "Varita, soporte y sistema de obtencion", qty: 1, unit: 1800 },
      { id: "main-books", description: "Libros moviles, biblioteca y juego del altillo", qty: 1, unit: 3200 },
      { id: "main-armor", description: "Mini armadura y mecanismo escenografico", qty: 1, unit: 1600 },
      {
        id: "main-picture",
        description: "Integracion del cuadro de tinta electronica de 13,3 pulgadas",
        note: "La pantalla ya adquirida se considera aportada; se presupuesta su integracion y acabado.",
        qty: 1,
        unit: 900,
      },
      { id: "main-mirror", description: "Espejo magico: monitor, lamina e integracion", qty: 1, unit: 2200 },
      { id: "main-door", description: "Apertura magica hacia el pasillo", qty: 1, unit: 1800 },
    ],
  },
  {
    id: "passage",
    title: "Pasillo y mazmorra",
    subtitle: "Transicion sensorial y puzzle musical con sensores capacitivos.",
    icon: "music",
    items: [
      { id: "passage-set", description: "Escenografia de piedra y ambientacion de mazmorra", qty: 1, unit: 2500 },
      { id: "passage-creature", description: "Animatronico silbando y sistema de audio", qty: 1, unit: 1800 },
      { id: "passage-stones", description: "Piedras tactiles, sensores capacitivos e iluminacion", qty: 1, unit: 2600 },
      { id: "passage-door", description: "Automatizacion del acceso al laboratorio", qty: 1, unit: 1200 },
    ],
  },
  {
    id: "laboratory",
    title: "Laboratorio del mago",
    subtitle: "Jaulas, liberacion de criaturas, conjuro y huida final.",
    icon: "flask-conical",
    items: [
      { id: "lab-set", description: "Escenografia integral del laboratorio", qty: 1, unit: 4000 },
      { id: "lab-cages", description: "Jaulas con criatura y acabado escenografico", qty: 6, unit: 800 },
      { id: "lab-motors", description: "Motores y mecanismos de ocultacion de criaturas", qty: 6, unit: 250 },
      { id: "lab-release", description: "Apagon, iluminacion, audio y proyeccion de apoyo", qty: 1, unit: 2600 },
      { id: "lab-spell", description: "Interfaz y efectos del conjuro colectivo", qty: 1, unit: 2200 },
      { id: "lab-exit", description: "Aparicion del mago y automatizacion de salida", qty: 1, unit: 2200 },
    ],
  },
  {
    id: "integration",
    title: "Integracion y puesta en marcha",
    subtitle: "Infraestructura propia del juego, montaje, pruebas y entrega.",
    icon: "cpu",
    items: [
      { id: "integration-control", description: "Control central, cuadros de baja tension y cableado de juego", qty: 1, unit: 4800 },
      { id: "integration-software", description: "Software, secuencias, estados y sistema de pistas", qty: 1, unit: 4500 },
      { id: "integration-av", description: "Integracion global de audio, luz y proyecciones", qty: 1, unit: 2800 },
      { id: "integration-tests", description: "Pruebas, ajustes, reset, documentacion y formacion", qty: 1, unit: 2600 },
      { id: "integration-install", description: "Transporte, montaje y consumibles de instalacion", qty: 1, unit: 3500 },
    ],
  },
];

const printSections = [
  { id: "scope", label: "Alcance y exclusiones" },
  { id: "schedule", label: "Calendario" },
  ...budgetSections.map((section) => ({ id: section.id, label: section.title })),
  { id: "totals", label: "Resumen de totales" },
];

const currencyFormatter = new Intl.NumberFormat("es-ES", {
  style: "currency",
  currency: "EUR",
  minimumFractionDigits: 0,
  maximumFractionDigits: 2,
});

function cloneDefaults() {
  return JSON.parse(JSON.stringify(defaultBudgetState));
}

function loadBudgetState() {
  const defaults = cloneDefaults();
  try {
    const saved = JSON.parse(localStorage.getItem(BUDGET_STORAGE_KEY));
    if (!saved) return defaults;
    return {
      config: { ...defaults.config, ...saved.config },
      print: { ...defaults.print, ...saved.print },
      items: { ...defaults.items, ...saved.items },
    };
  } catch {
    return defaults;
  }
}

let budgetState = loadBudgetState();

function numberValue(value, fallback = 0) {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? Math.max(0, parsed) : fallback;
}

function formatCurrency(value) {
  return currencyFormatter.format(numberValue(value));
}

function itemValues(item) {
  if (item.dynamic === "labor") {
    return {
      qty: numberValue(budgetState.config.people) * numberValue(budgetState.config.months),
      unit: numberValue(budgetState.config.monthlyRate),
    };
  }
  return {
    qty: numberValue(budgetState.items[item.id]?.qty, item.qty),
    unit: numberValue(budgetState.items[item.id]?.unit, item.unit),
  };
}

function sectionTotal(section) {
  return section.items.reduce((total, item) => {
    const values = itemValues(item);
    return total + values.qty * values.unit;
  }, 0);
}

function saveBudgetState() {
  localStorage.setItem(BUDGET_STORAGE_KEY, JSON.stringify(budgetState));
}

function renderPrintControls() {
  document.querySelector("#printAreaControls").innerHTML = printSections
    .map(
      (section) => `
        <label class="print-toggle">
          <input type="checkbox" data-print-toggle="${section.id}" ${budgetState.print[section.id] ? "checked" : ""} />
          <span>${section.label}</span>
        </label>
      `,
    )
    .join("");
}

function renderBudgetSections() {
  document.querySelector("#budgetSections").innerHTML = budgetSections
    .map(
      (section) => `
        <section class="budget-area" data-print-section="${section.id}">
          <header>
            <div class="budget-area-title">
              <span><i data-lucide="${section.icon}"></i></span>
              <div><h2>${section.title}</h2><p>${section.subtitle}</p></div>
            </div>
            <strong id="sectionTotal-${section.id}">—</strong>
          </header>
          <div class="budget-table-wrap">
            <table class="budget-table">
              <thead><tr><th>Concepto</th><th>Cantidad</th><th>Precio unitario</th><th>Importe</th></tr></thead>
              <tbody>
                ${section.items
                  .map((item) => {
                    const values = itemValues(item);
                    const isDynamic = item.dynamic === "labor";
                    return `
                      <tr>
                        <td><strong>${item.description}</strong>${item.note ? `<small>${item.note}</small>` : ""}</td>
                        <td>
                          ${
                            isDynamic
                              ? `<span class="calculated-value">${values.qty}</span>`
                              : `<input class="budget-line-input" data-item="${item.id}" data-field="qty" type="number" min="0" step="0.1" value="${values.qty}" aria-label="Cantidad: ${item.description}" />`
                          }
                        </td>
                        <td>
                          ${
                            isDynamic
                              ? `<span class="calculated-value">${formatCurrency(values.unit)}</span>`
                              : `<input class="budget-line-input money" data-item="${item.id}" data-field="unit" type="number" min="0" step="10" value="${values.unit}" aria-label="Precio unitario: ${item.description}" /><span class="currency-suffix">€</span>`
                          }
                        </td>
                        <td><b id="lineTotal-${item.id}">${formatCurrency(values.qty * values.unit)}</b></td>
                      </tr>
                    `;
                  })
                  .join("")}
              </tbody>
            </table>
          </div>
        </section>
      `,
    )
    .join("");
  if (window.lucide) window.lucide.createIcons();
}

function applyStateToFields() {
  const fieldMap = {
    budgetPeople: "people",
    budgetMonths: "months",
    budgetMonthlyRate: "monthlyRate",
    budgetContingency: "contingency",
    budgetVat: "vat",
    budgetProject: "project",
    budgetClient: "client",
    budgetReference: "reference",
    budgetDate: "date",
  };
  Object.entries(fieldMap).forEach(([elementId, stateKey]) => {
    document.querySelector(`#${elementId}`).value = budgetState.config[stateKey];
  });
}

function updatePrintVisibility() {
  printSections.forEach((section) => {
    document.querySelectorAll(`[data-print-section="${section.id}"]`).forEach((element) => {
      element.classList.toggle("print-excluded", !budgetState.print[section.id]);
    });
  });

  const excludedLabels = printSections
    .filter((section) => !budgetState.print[section.id] && section.id !== "totals")
    .map((section) => section.label);
  const note = document.querySelector("#printExclusionsNote");
  note.textContent = excludedLabels.length ? `Secciones excluidas de esta impresion: ${excludedLabels.join(", ")}.` : "";
  note.hidden = excludedLabels.length === 0;
}

function updateBudget() {
  const totalsBySection = Object.fromEntries(budgetSections.map((section) => [section.id, sectionTotal(section)]));
  const fullBase = Object.values(totalsBySection).reduce((sum, value) => sum + value, 0);
  const selectedBase = budgetSections.reduce(
    (sum, section) => sum + (budgetState.print[section.id] ? totalsBySection[section.id] : 0),
    0,
  );
  const contingencyRate = numberValue(budgetState.config.contingency) / 100;
  const vatRate = numberValue(budgetState.config.vat) / 100;
  const fullBeforeVat = fullBase * (1 + contingencyRate);
  const fullTotal = fullBeforeVat * (1 + vatRate);
  const selectedContingency = selectedBase * contingencyRate;
  const selectedBeforeVat = selectedBase + selectedContingency;
  const selectedVat = selectedBeforeVat * vatRate;
  const selectedTotal = selectedBeforeVat + selectedVat;

  budgetSections.forEach((section) => {
    document.querySelector(`#sectionTotal-${section.id}`).textContent = formatCurrency(totalsBySection[section.id]);
    section.items.forEach((item) => {
      const values = itemValues(item);
      document.querySelector(`#lineTotal-${item.id}`).textContent = formatCurrency(values.qty * values.unit);
    });
  });

  document.querySelector("#fullBudgetTotal").textContent = formatCurrency(fullTotal);
  document.querySelector("#printBudgetTotal").textContent = formatCurrency(selectedTotal);
  document.querySelector("#selectedBase").textContent = formatCurrency(selectedBase);
  document.querySelector("#selectedContingency").textContent = formatCurrency(selectedContingency);
  document.querySelector("#selectedBeforeVat").textContent = formatCurrency(selectedBeforeVat);
  document.querySelector("#selectedVat").textContent = formatCurrency(selectedVat);
  document.querySelector("#selectedGrandTotal").textContent = formatCurrency(selectedTotal);
  document.querySelector("#contingencyLabel").textContent = `Imprevistos (${numberValue(budgetState.config.contingency)}%)`;
  document.querySelector("#vatLabel").textContent = `IVA (${numberValue(budgetState.config.vat)}%)`;
  document.querySelector("#budgetPeriod").textContent = `${numberValue(budgetState.config.months)} meses`;
  document.querySelector("#budgetTeamLabel").textContent = `${numberValue(budgetState.config.people)} personas · Q4 2026 — Q2 2027`;
  updatePrintVisibility();
}

function bindBudgetEvents() {
  const numericFields = {
    budgetPeople: "people",
    budgetMonths: "months",
    budgetMonthlyRate: "monthlyRate",
    budgetContingency: "contingency",
    budgetVat: "vat",
  };
  Object.entries(numericFields).forEach(([elementId, stateKey]) => {
    document.querySelector(`#${elementId}`).addEventListener("input", (event) => {
      budgetState.config[stateKey] = numberValue(event.target.value);
      updateBudget();
      saveBudgetState();
    });
  });

  const textFields = {
    budgetProject: "project",
    budgetClient: "client",
    budgetReference: "reference",
    budgetDate: "date",
  };
  Object.entries(textFields).forEach(([elementId, stateKey]) => {
    document.querySelector(`#${elementId}`).addEventListener("input", (event) => {
      budgetState.config[stateKey] = event.target.value;
      saveBudgetState();
    });
  });

  document.querySelector("#budgetSections").addEventListener("input", (event) => {
    const input = event.target.closest("[data-item][data-field]");
    if (!input) return;
    budgetState.items[input.dataset.item] = {
      ...budgetState.items[input.dataset.item],
      [input.dataset.field]: numberValue(input.value),
    };
    updateBudget();
    saveBudgetState();
  });

  document.querySelector("#printAreaControls").addEventListener("change", (event) => {
    const toggle = event.target.closest("[data-print-toggle]");
    if (!toggle) return;
    budgetState.print[toggle.dataset.printToggle] = toggle.checked;
    updateBudget();
    saveBudgetState();
  });

  document.querySelector("#selectAllPrint").addEventListener("click", () => {
    printSections.forEach((section) => (budgetState.print[section.id] = true));
    renderPrintControls();
    updateBudget();
    saveBudgetState();
  });

  document.querySelector("#clearAllPrint").addEventListener("click", () => {
    printSections.forEach((section) => (budgetState.print[section.id] = false));
    renderPrintControls();
    updateBudget();
    saveBudgetState();
  });

  document.querySelector("#resetBudget").addEventListener("click", () => {
    budgetState = cloneDefaults();
    localStorage.removeItem(BUDGET_STORAGE_KEY);
    renderPrintControls();
    renderBudgetSections();
    applyStateToFields();
    updateBudget();
  });

  const print = () => {
    updateBudget();
    window.print();
  };
  document.querySelector("#printBudget").addEventListener("click", print);
  document.querySelector("#printBudgetTop").addEventListener("click", print);
  window.addEventListener("beforeprint", updateBudget);
}

renderPrintControls();
renderBudgetSections();
applyStateToFields();
updateBudget();
bindBudgetEvents();
if (window.lucide) window.lucide.createIcons();
