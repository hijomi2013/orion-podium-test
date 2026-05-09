let networks = {};
let pedagogyStories = {
  type_verre: {},
  matiere: {},
  traitement: {},
  option: {}
};

const lensStories = {
  "Varilux XR Pro": {
    typeTitle: "Progressif haut de gamme",
    typeText: "Varilux XR met l'accent sur une vision progressive fluide, avec une priorité donnée à la réactivité et au confort de passage entre les distances.",
    source: "Essilor / Varilux XR Series"
  },
  "Varilux S 2": {
    typeTitle: "Progressif premium personnalisé",
    typeText: "Varilux S 2 priorise une vision progressive haut de gamme, avec une adaptation fine aux paramètres de port et au comportement de lecture.",
    source: "Essilor / Varilux S Series"
  },
  "Varilux Physio 3D": {
    typeTitle: "Progressif Varilux équilibré",
    typeText: "Varilux Physio 3D vise une vision nette et confortable à plusieurs distances, avec une bonne stabilité en mouvement.",
    source: "Essilor / Varilux"
  },
  "Varilux XR": {
    typeTitle: "Progressif haut de gamme",
    typeText: "Varilux XR met l'accent sur une vision progressive fluide, avec une priorité donnée à la réactivité et au confort de passage entre les distances.",
    source: "Essilor / Varilux XR Series"
  },
  "Varilux Comfort Max": {
    typeTitle: "Progressif confort",
    typeText: "Varilux Comfort Max privilégie une adaptation confortable et une vision quotidienne polyvalente.",
    source: "Essilor / Varilux Comfort Max"
  },
  "Varilux Liberty": {
    typeTitle: "Progressif essentiel",
    typeText: "Varilux Liberty 3.0 est une solution progressive plus accessible, pensée pour garder un bon confort quotidien.",
    source: "Essilor / Varilux Liberty"
  },
  "Varilux Digitime": {
    typeTitle: "Verre digital",
    typeText: "Varilux Digitime accompagne les usages numériques et les distances intermédiaires, avec une lecture plus confortable sur écrans.",
    source: "Essilor / Varilux Digitime"
  },
  "Essilor Amatsi XT": {
    typeTitle: "Progressif Essilor accessible",
    typeText: "Amatsi XT se place comme un progressif Essilor plus économique que les gammes Varilux, utile quand le prix devient prioritaire.",
    source: "Essilor / Amatsi"
  },
  "Essilor Prems HD": {
    typeTitle: "Progressif généraliste",
    typeText: "Prems HD est un progressif Essilor simple et lisible dans l'offre, pensé pour une réponse plus standard.",
    source: "Essilor / Prems HD"
  },
  "Essilor Advans": {
    typeTitle: "Verre Essilor accessible",
    typeText: "Advans est une solution Essilor plus simple, utile pour garder un bon équilibre prix, confort et traitement.",
    source: "Essilor / Advans"
  },
  "Essilor Inizio": {
    typeTitle: "Progressif d'entrée de gamme",
    typeText: "Inizio sert de choix progressif économique dans les réseaux, avec une logique de compromis prix et adaptation.",
    source: "Essilor / Inizio"
  },
  Stellest: {
    typeTitle: "Verre enfant myopie",
    typeText: "Stellest est orienté enfants, avec une logique de prise en charge spécifique de la myopie évolutive.",
    source: "Essilor / Stellest"
  },
  Xperio: {
    typeTitle: "Verre solaire polarisé",
    typeText: "Xperio Polarized est orienté solaire, avec une réduction de l'éblouissement et une meilleure perception des contrastes dehors.",
    source: "Essilor / Xperio"
  },
  "Eyezen Boost": {
    typeTitle: "Unifocal avec soutien digital",
    typeText: "Eyezen Boost aide les porteurs sollicités par les écrans, avec un soutien de vision de près intégré.",
    source: "Essilor / Eyezen Boost"
  },
  "Eyezen Start": {
    typeTitle: "Unifocal optimisé",
    typeText: "Eyezen Start est un unifocal optimisé pour les usages modernes, notamment les distances variables et les écrans.",
    source: "Essilor / Eyezen Start"
  },
  "Eyezen Kids": {
    typeTitle: "Unifocal enfant",
    typeText: "Eyezen Kids cible les usages de l'enfant, avec une logique de confort et de protection adaptée au quotidien scolaire.",
    source: "Essilor / Eyezen"
  },
  Ormix: {
    typeTitle: "Unifocal standard",
    typeText: "Verre unifocal simple en matière Ormix, utile comme solution claire, compacte et économique dans le réseau.",
    source: "Essilor"
  }
};

const materialStories = {
  Orma: {
    title: "Orma 1.5",
    text: "Matière organique standard, économique et polyvalente, adaptée aux corrections faibles à modérées.",
    visual: "material-orma"
  },
  Ormix: {
    title: "Ormix 1.6",
    text: "Matière plus mince que l'Orma, bon compromis entre finesse, légèreté et rendu esthétique.",
    visual: "material-ormix"
  },
  Airwear: {
    title: "Airwear 1.59",
    text: "Polycarbonate Essilor : léger, résistant aux chocs, intéressant pour enfants, sport et sécurité.",
    visual: "material-airwear"
  }
};

const treatmentStories = {
  "CZ Rock": {
    title: "Crizal Rock",
    text: "Traitement antireflet orienté robustesse : résistance aux rayures, salissures, poussière et nettoyage facile.",
    visual: "treatment-rock"
  },
  "CZ Prev": {
    title: "Crizal Prevencia",
    text: "Traitement avec filtration sélective de la lumière bleu-violet, tout en gardant une vision claire.",
    visual: "treatment-prev"
  },
  "CZ Sapph": {
    title: "Crizal Sapphire",
    text: "Traitement antireflet premium, pensé pour réduire les reflets et améliorer la transparence du verre.",
    visual: "treatment-sapph"
  },
  "CZ EasyP": {
    title: "Crizal Easy Pro",
    text: "Traitement axé sur le nettoyage facile, la réduction des reflets et une bonne protection UV.",
    visual: "treatment-easyp"
  },
  "CZ Kids": {
    title: "Traitement enfant",
    text: "Option dédiée aux usages enfants quand elle existe dans le réseau, à valider verre par verre.",
    visual: "treatment-kids"
  }
};

const photochromicStory = {
  title: "Photochromique",
  text: "Option qui fonce au soleil et redevient claire en intérieur. Le prix du verre est automatiquement recalculé quand elle est activée.",
  source: "Essilor / Photochromique",
  image: "assets/ui/lune-soleil.png"
};

const materials = ["Orma", "Ormix", "Airwear"];
const treatments = ["CZ EasyP", "CZ Prev", "CZ Sapph", "CZ Kids", "CZ Rock"];
const primaryButtons = [...document.querySelectorAll(".primary-picker .network-button")];
const closedNetworkButtons = [...document.querySelectorAll(".network-picker .network-button")];
const visionPicker = document.querySelector(".vision-picker");
let visionButtons = [];
const networkPicker = document.querySelector(".network-picker");
const closedNetwork = document.querySelector(".closed-network");
const lensInfoPanel = document.querySelector("#lens-info-panel");
const networkChoices = document.querySelector("#network-choices");
const toast = document.querySelector("#toast");
const modalButtons = [...document.querySelectorAll("[data-modal-target]")];
const modals = [...document.querySelectorAll(".info-modal")];
const pedagogyModal = document.querySelector("#pedagogy-modal");
const pedagogyModalTitle = document.querySelector("#pedagogy-modal-title");
const pedagogyModalImage = document.querySelector("#pedagogy-modal-image");

const familyLabels = {
  tous: "Tous",
  progressifs: "Progressifs",
  unifocaux: "Unifocaux",
  progressifs_blanc: "Progressifs blanc",
  unifocaux_blanc: "Unifocaux blanc",
  progressifs_solaire: "Progressifs solaire",
  unifocaux_solaire: "Unifocaux solaire"
};

let activeNetwork = "libre";
let activeVision = "progressifs";
let toastTimer;
let animateNextRender = false;
let pinnedOpenIndex = 0;
let activeInfoIndex = 0;
let infoPanelVisible = true;
let animateInfoPanel = false;

const lensSelections = {};


const csvConfig = {
  sectionMap: {
    marche_libre: "libre",
    devis: "devis",
    forfait: "forfait"
  },
  networkKeyMap: {
    itelis: "itelis",
    carte_blanche: "carte-blanche",
    kalixia: "kalixia",
    santeclair: "santeclair",
    seveane: "seveane"
  },
  labels: {
    libre: "March? libre",
    devis: "Devis",
    forfait: "Forfait 2eme paire",
    itelis: "Itelis",
    "carte-blanche": "Carte Blanche",
    kalixia: "Kalixia",
    santeclair: "Sant?clair",
    seveane: "S?v?ane"
  },
  materialOrder: ["Orma", "Ormix", "Airwear"],
  treatmentOrder: ["CZ EasyP", "CZ Prev", "CZ Sapph", "CZ Kids", "CZ Rock", "HMC+BlueC", "HC", "HMC", "CZ Sun XP", "XP Supra", "Supra", "Polar HMC FA", "Polar HC"],
  shopLabels: {
    prix_versailles: "Versailles",
    prix_lvdb: "LVDB",
    prix_autres: "Autres"
  }
};

function parseCsv(text) {
  const rows = [];
  let row = [];
  let cell = "";
  let quoted = false;

  for (let index = 0; index < text.length; index += 1) {
    const char = text[index];
    const next = text[index + 1];

    if (char === '"') {
      if (quoted && next === '"') {
        cell += '"';
        index += 1;
      } else {
        quoted = !quoted;
      }
      continue;
    }

    if (char === "," && !quoted) {
      row.push(cell.trim());
      cell = "";
      continue;
    }

    if ((char === "\n" || char === "\r") && !quoted) {
      if (char === "\r" && next === "\n") index += 1;
      row.push(cell.trim());
      if (row.some(Boolean)) rows.push(row);
      row = [];
      cell = "";
      continue;
    }

    cell += char;
  }

  if (cell || row.length) {
    row.push(cell.trim());
    if (row.some(Boolean)) rows.push(row);
  }

  const headers = rows.shift() || [];
  return rows.map((values) => Object.fromEntries(headers.map((header, index) => [header, (values[index] || "").trim()])));
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function storyFromPedagogyRow(row) {
  return {
    label: row.libelle_carte || "",
    title: row.titre_court || row.cle || "À compléter",
    text: row.resume_court || "À compléter",
    source: row.source_courte || "",
    image: row.image_picto || "",
    modalTitle: row.modal_titre || row.titre_court || row.cle || "",
    modalImage: row.image_modal || "",
    sourceUrl: row.source_url || ""
  };
}

function buildPedagogyStories(rows) {
  const nextStories = {
    type_verre: {},
    matiere: {},
    traitement: {},
    option: {}
  };

  rows.forEach((row) => {
    if (!row.categorie || !row.cle) return;
    if (!nextStories[row.categorie]) nextStories[row.categorie] = {};
    nextStories[row.categorie][row.cle] = storyFromPedagogyRow(row);
  });

  return nextStories;
}

function uniqueOrdered(values, order) {
  const set = new Set(values.filter(Boolean));
  return [
    ...order.filter((value) => set.has(value)),
    ...[...set].filter((value) => !order.includes(value)).sort()
  ];
}

function parsePriority(value) {
  const priority = Number(String(value || "").replace(",", "."));
  return Number.isFinite(priority) ? priority : 999;
}

function parseSupplement(value) {
  if (!value) return null;
  const supplement = Number(String(value).replace(",", "."));
  return Number.isFinite(supplement) ? supplement : null;
}

function createEmptyNetworks() {
  return Object.fromEntries(
    Object.entries(csvConfig.labels).map(([key, label]) => [key, { label, families: {} }])
  );
}

function buildNetworksFromCsv(rows) {
  const nextNetworks = createEmptyNetworks();
  const optionGroups = new Map();
  const lensGroups = new Map();

  function getOptionGroup(group) {
    if (!optionGroups.has(group)) optionGroups.set(group, { materials: new Set(), treatments: new Set() });
    return optionGroups.get(group);
  }

  rows.forEach((row) => {
    const optionGroupKey = row.section === "reseaux" ? "reseaux" : row.section;
    const optionGroup = getOptionGroup(optionGroupKey);
    if (row.matiere) optionGroup.materials.add(row.matiere);
    if (row.traitement) optionGroup.treatments.add(row.traitement);
  });

  rows.forEach((row) => {
    const networkKey = row.section === "reseaux"
      ? csvConfig.networkKeyMap[row.reseau] || row.reseau?.replace(/_/g, "-")
      : csvConfig.sectionMap[row.section] || row.section;
    if (!nextNetworks[networkKey]) nextNetworks[networkKey] = { label: networkKey, families: {} };

    const family = row.type_verre;
    const priority = parsePriority(row.priorite);
    const name = row.nom_verre || "? compl?ter";
    const key = [networkKey, family, priority, name].join("||");

    if (!lensGroups.has(key)) {
      lensGroups.set(key, {
        networkKey,
        family,
        priority,
        name,
        optionGroupKey: row.section === "reseaux" ? "reseaux" : row.section,
        rows: []
      });
    }
    lensGroups.get(key).rows.push(row);
  });

  lensGroups.forEach((group) => {
    const groupRows = group.rows;
    const materialsForLens = uniqueOrdered(groupRows.map((row) => row.matiere), csvConfig.materialOrder);
    const treatmentsForLens = uniqueOrdered(groupRows.map((row) => row.traitement), csvConfig.treatmentOrder);
    const defaultMaterial = groupRows[0].matiere || materialsForLens[0] || "Orma";
    const defaultTreatment = groupRows[0].traitement || treatmentsForLens[0] || "? compl?ter";
    const optionGroup = optionGroups.get(group.optionGroupKey) || { materials: new Set(), treatments: new Set() };

    const prices = {};
    const references = {};
    const transitionPrices = {};
    const shopPrices = {};
    let photochromic = false;
    let transitionPrice = null;

    groupRows.forEach((row) => {
      const material = row.matiere || defaultMaterial;
      const treatment = row.traitement || defaultTreatment;
      const combo = `${material}|${treatment}`;
      prices[combo] = row.prix || "";
      references[combo] = row.reference_affichee || `${group.name} ${material} ${treatment}`;
      photochromic = photochromic || row.photochromique_possible?.toLowerCase() === "oui";

      const supplement = parseSupplement(row.supplement_photochromique);
      if (supplement !== null) {
        transitionPrices[combo] = supplement;
        if (transitionPrice === null) transitionPrice = supplement;
      }

      const comboShopPrices = Object.fromEntries(
        Object.keys(csvConfig.shopLabels).map((shopKey) => [shopKey, row[shopKey] || ""])
      );
      if (Object.values(comboShopPrices).some(Boolean)) shopPrices[combo] = comboShopPrices;
    });

    const lens = {
      template: `${group.name} {material} {treatment}`,
      csvName: group.name,
      optionGroup: group.optionGroupKey,
      materials: materialsForLens.length ? materialsForLens : [defaultMaterial],
      treatments: treatmentsForLens.length ? treatmentsForLens : [defaultTreatment],
      materialOptions: uniqueOrdered([...optionGroup.materials], csvConfig.materialOrder),
      treatmentOptions: uniqueOrdered([...optionGroup.treatments], csvConfig.treatmentOrder),
      defaultMaterial,
      defaultTreatment,
      prices,
      references,
      shopPrices,
      photochromic,
      csvPriority: group.priority
    };

    if (Object.keys(transitionPrices).length) lens.transitionPrices = transitionPrices;
    if (transitionPrice !== null) lens.transitionPrice = transitionPrice;

    nextNetworks[group.networkKey].families[group.family] ||= [];
    nextNetworks[group.networkKey].families[group.family].push(lens);
  });

  Object.values(nextNetworks).forEach((network) => {
    Object.values(network.families).forEach((lenses) => {
      lenses.sort((left, right) => (left.csvPriority - right.csvPriority) || left.csvName.localeCompare(right.csvName));
    });
  });

  return nextNetworks;
}

async function loadCsvDatabase() {
  const response = await fetch("data/verres-template.csv", { cache: "no-store" });
  if (!response.ok) throw new Error(`CSV introuvable (${response.status})`);
  const text = await response.text();
  networks = buildNetworksFromCsv(parseCsv(text));
}

async function loadPedagogyDatabase() {
  const response = await fetch("data/pedagogie-template.csv", { cache: "no-store" });
  if (!response.ok) throw new Error(`CSV panneau introuvable (${response.status})`);
  const text = await response.text();
  pedagogyStories = buildPedagogyStories(parseCsv(text));
}

function showToast(anchor) {
  clearTimeout(toastTimer);
  if (anchor) {
    const rect = anchor.getBoundingClientRect();
    toast.style.left = `${rect.left + rect.width / 2}px`;
    toast.style.top = `${rect.top - 12}px`;
  }
  toast.classList.add("visible");
  toastTimer = setTimeout(() => toast.classList.remove("visible"), 1200);
}

function getTreatmentLabel(treatment) {
  return treatment === "CZ Prev" ? "CZ F Prev" : treatment;
}

function getLensStoryKey(lens) {
  const source = `${lens.csvName || ""} ${lens.template || ""}`;
  if (source.includes("Varilux XR Design")) return "Varilux XR Design";
  if (source.includes("Varilux XR Pro")) return "Varilux XR Pro";
  if (source.includes("Varilux XR")) return "Varilux XR Pro";
  if (source.includes("Varilux P exten Track")) return "Varilux P exten Track";
  if (source.includes("Varilux S 2")) return "Varilux S2";
  if (source.includes("Varilux S2")) return "Varilux S2";
  if (source.includes("Varilux Physio 3D")) return "Varilux Physio 3D";
  if (source.includes("Varilux Cft Max")) return "Varilux Cft Max";
  if (source.includes("Varilux Comfort Max")) return "Varilux Cft Max";
  if (source.includes("Varilux Liberty 3")) return "Varilux Liberty 3";
  if (source.includes("Varilux Liberty")) return "Varilux Liberty 3";
  if (source.includes("Varilux Digitime")) return "Varilux Digitime";
  if (source.includes("Essilor Amatsi XT")) return "Essilor Amatsi";
  if (source.includes("Essilor Amatsi")) return "Essilor Amatsi";
  if (source.includes("Essilor Advans")) return "Essilor Advans";
  if (source.includes("Essilor Inizio")) return "Essilor Inizio";
  if (source.includes("Essilor Prelude")) return "Essilor Prems";
  if (source.includes("Essilor Prems HD")) return "Essilor Prems";
  if (source.includes("Essilor Prems")) return "Essilor Prems";
  if (source.includes("Eyezen Boost")) return "Eyezen Boost";
  if (source.includes("Eyezen Start")) return "Eyezen Start";
  if (source.includes("Eyezen Kids")) return "Eyezen Kids";
  if (source.includes("Stellest")) return "Stellest";
  if (source.includes("Sun") || source.includes("Polar")) return "Xperio";
  return "Ormix";
}

function getLensKey(index) {
  return `${activeNetwork}:${activeVision}:${index}`;
}

function getSelection(lens, index) {
  const key = getLensKey(index);
  const selection = lensSelections[key] || {
    material: lens.defaultMaterial || lens.materials[0],
    treatment: lens.defaultTreatment || lens.treatments[0],
    transitions: false,
    priceOpen: false,
    selectedShop: "prix_versailles"
  };

  if (!lens.materials.includes(selection.material)) selection.material = lens.materials[0];
  if (!lens.treatments.includes(selection.treatment)) selection.treatment = lens.defaultTreatment || lens.treatments[0];
  if (!isPhotochromicAvailable(lens)) selection.transitions = false;
  if (!selection.selectedShop) selection.selectedShop = "prix_versailles";

  lensSelections[key] = selection;
  return selection;
}

function isPhotochromicAvailable(lens) {
  return lens.photochromic !== false;
}

function getLensName(lens, index) {
  const selection = getSelection(lens, index);
  const reference = lens.references?.[`${selection.material}|${selection.treatment}`];

  if (reference) return reference;

  return lens.template
    .replace("{material}", selection.material)
    .replace("{treatment}", getTreatmentLabel(selection.treatment));
}

function getLensPrice(lens, index) {
  const selection = getSelection(lens, index);
  return getFormattedPrice(lens.prices?.[`${selection.material}|${selection.treatment}`] || "", lens, selection);
}

function getFormattedPrice(basePrice, lens, selection) {
  const numericPrice = parseFrenchPrice(basePrice);
  if (!numericPrice) return "";

  const photoPrice = selection.transitions && isPhotochromicAvailable(lens)
    ? lens.transitionPrices?.[`${selection.material}|${selection.treatment}`] ?? lens.transitionPrice ?? 25
    : 0;
  return formatFrenchPrice(numericPrice + photoPrice);
}

function getShopPrices(lens, index) {
  const selection = getSelection(lens, index);
  return lens.shopPrices?.[`${selection.material}|${selection.treatment}`] || {};
}

function parseFrenchPrice(price) {
  return Number(String(price).match(/\d+(?:[,.]\d+)?/)?.[0].replace(",", ".") || 0);
}

function formatFrenchPrice(price) {
  return `${Number.isInteger(price) ? price : price.toFixed(2).replace(".", ",")} €`;
}

function renderOptions(options, activeValue, dataName, availableOptions, index) {
  return options
    .map((option) => {
      const isAvailable = availableOptions.includes(option);
      const classes = ["hero-option", option === activeValue ? "active" : "", isAvailable ? "" : "disabled"]
        .filter(Boolean)
        .join(" ");

      return `<button class="${classes}" type="button" data-index="${index}" data-${dataName}="${option}" ${isAvailable ? "" : "disabled"}>${option}</button>`;
    })
    .join("");
}

function renderPriceControl(lens, index, lensPrice, isOpen) {
  const selection = getSelection(lens, index);
  const shopPrices = getShopPrices(lens, index);
  const isSanteclair = activeNetwork === "santeclair";

  if (!isSanteclair) {
    return lensPrice ? `<span class="lens-price">${lensPrice}</span>` : "";
  }

  const availableShopEntries = Object.entries(csvConfig.shopLabels).filter(([shopKey]) => shopPrices[shopKey]);
  if (!availableShopEntries.length) return "";

  const selectedShop = shopPrices[selection.selectedShop] ? selection.selectedShop : availableShopEntries[0][0];
  const selectedPrice = selection.priceOpen ? getFormattedPrice(shopPrices[selectedShop], lens, selection) : "";

  if (!isOpen) {
    return selectedPrice ? `<span class="lens-price">${selectedPrice}</span>` : "";
  }

  const shopButtons = availableShopEntries
    .map(([shopKey, label]) => `<button class="shop-price${selection.priceOpen && shopKey === selectedShop ? " active" : ""}" type="button" data-shop-price="${shopKey}" data-index="${index}">${label}</button>`)
    .join("");

  return `
    <span class="price-control is-open has-shops">
      <span class="shop-price-row">${shopButtons}</span>
      ${selectedPrice ? `<span class="lens-price">${selectedPrice}</span>` : ""}
    </span>
  `;
}

function renderVisual(className, image, altText) {
  if (image) {
    return `<div class="info-visual has-image ${className}"><img src="${escapeHtml(image)}" alt="${escapeHtml(altText)}"></div>`;
  }

  return `<div class="info-visual ${className}"><span></span></div>`;
}

function withPedagogyStory(category, key, fallback) {
  const story = pedagogyStories[category]?.[key];
  if (!story) return fallback;

  return {
    ...fallback,
    title: story.title || fallback.title,
    typeTitle: story.title || fallback.typeTitle,
    text: story.text || fallback.text,
    typeText: story.text || fallback.typeText,
    source: story.source || fallback.source,
    image: story.image || fallback.image,
    modalTitle: story.modalTitle || story.title || fallback.title || fallback.typeTitle,
    modalImage: story.modalImage || "",
    sourceUrl: story.sourceUrl || ""
  };
}

function renderInfoCard({ category, key, label, visualClass, story }) {
  const modalAttributes = story.modalImage
    ? ` role="button" tabindex="0" data-pedagogy-category="${escapeHtml(category)}" data-pedagogy-key="${escapeHtml(key)}"`
    : "";

  return `
    <article class="info-card${story.modalImage ? " has-modal" : ""}"${modalAttributes}>
      ${renderVisual(visualClass, story.image, story.title || story.typeTitle)}
      <div>
        <span class="info-label">${escapeHtml(label)}</span>
        <h2>${escapeHtml(story.title || story.typeTitle)}</h2>
        <p>${escapeHtml(story.text || story.typeText)}</p>
        <small>${escapeHtml(story.source || "")}</small>
      </div>
    </article>
  `;
}

function getTreatmentStory(treatment) {
  if (treatmentStories[treatment]) return treatmentStories[treatment];
  if (treatment.includes("Sun") || treatment.includes("Polar")) {
    return {
      title: treatment,
      text: "Option solaire ou polarisée, pensée pour réduire l'éblouissement et améliorer le confort dehors.",
      visual: "treatment-sapph"
    };
  }

  return {
    title: treatment,
    text: "Traitement ou finition spécifique de cette offre, à utiliser selon la catégorie et le prix du verre.",
    visual: "treatment-easyp"
  };
}

function copyToClipboard(text) {
  if (navigator.clipboard && window.isSecureContext) {
    return navigator.clipboard.writeText(text);
  }

  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
  return Promise.resolve();
}

function getActiveLenses() {
  const network = networks[activeNetwork];
  if (!network.families || !activeVision) return [];
  if (activeVision === "tous") return Object.values(network.families).flat();
  return network.families[activeVision] || [];
}

function getDefaultVision(networkKey = activeNetwork) {
  const families = networks[networkKey]?.families || {};
  if (families.progressifs) return "progressifs";
  return Object.keys(families)[0] || "";
}

function ensureActiveVision() {
  const families = networks[activeNetwork]?.families || {};
  if (!activeVision || !families[activeVision]) {
    activeVision = getDefaultVision();
  }
}

function renderVisionPicker() {
  ensureActiveVision();
  const families = networks[activeNetwork]?.families || {};
  const familyKeys = Object.keys(families);

  visionPicker.innerHTML = familyKeys
    .map((key) => `<button class="vision-button${activeVision === key ? " active" : ""}" type="button" data-vision="${key}">${familyLabels[key] || key}</button>`)
    .join("");

  visionButtons = [...visionPicker.querySelectorAll(".vision-button")];
}

function renderLens(lens, index, className, extraAttributes = "") {
  const selection = getSelection(lens, index);
  const photochromicAvailable = isPhotochromicAvailable(lens);
  const enterClass = animateNextRender ? " lens-enter" : "";
  const isOpen = pinnedOpenIndex === index;
  const pinnedClass = isOpen ? " is-open" : "";
  const enterStyle = animateNextRender ? ` style="--enter-delay: ${index * 90}ms"` : "";
  const lensPrice = getLensPrice(lens, index);

  return `
    <div class="${className}${enterClass}${pinnedClass}" role="button" tabindex="0" data-index="${index}" ${extraAttributes}${enterStyle}>
      <span class="hero-label">${getLensName(lens, index)}</span>
      ${renderPriceControl(lens, index, lensPrice, isOpen)}
      <label class="transition-toggle${photochromicAvailable ? "" : " disabled"}" data-index="${index}" title="${photochromicAvailable ? "" : "Photochromique non disponible sur ce verre"}">
        <input type="checkbox" data-index="${index}" data-transition="true" ${selection.transitions ? "checked" : ""} ${photochromicAvailable ? "" : "disabled"}>
        <span><strong>Photochromique</strong></span>
      </label>
      <span class="hero-pickers">
        <span class="hero-picker material-picker" aria-label="Choix de la matiere">
          ${renderOptions(lens.materialOptions || materials, selection.material, "material", lens.materials, index)}
        </span>
        <span class="hero-picker treatment-picker" aria-label="Choix du traitement">
          ${renderOptions(lens.treatmentOptions || treatments, selection.treatment, "treatment", lens.treatments, index)}
        </span>
      </span>
    </div>
  `;
}

function renderInfoPanel() {
  const lenses = getActiveLenses();

  if (!lenses.length) {
    lensInfoPanel.classList.add("hidden");
    lensInfoPanel.innerHTML = "";
    return;
  }

  if (!infoPanelVisible) {
    lensInfoPanel.classList.add("hidden");
    lensInfoPanel.innerHTML = "";
    return;
  }

  const lens = lenses[activeInfoIndex] || lenses[0];
  const selection = getSelection(lens, activeInfoIndex);
  const lensStoryKey = getLensStoryKey(lens);
  const lensStory = withPedagogyStory("type_verre", lensStoryKey, lensStories[lensStoryKey] || lensStories.Ormix);
  const materialStory = withPedagogyStory("matiere", selection.material, materialStories[selection.material] || {
    title: selection.material || "À compléter",
    text: "À compléter",
    visual: "material-orma"
  });
  const treatmentStory = withPedagogyStory("traitement", selection.treatment, getTreatmentStory(selection.treatment));
  const photoStory = withPedagogyStory("option", "Photochromique", photochromicStory);
  const selectedName = getLensName(lens, activeInfoIndex);
  const photochromicCard = selection.transitions && isPhotochromicAvailable(lens) ? `
    ${renderInfoCard({
      category: "option",
      key: "Photochromique",
      label: "Option",
      visualClass: "photochromic-visual",
      story: photoStory
    })}
  ` : "";

  lensInfoPanel.classList.remove("hidden", "panel-enter");
  if (animateInfoPanel) {
    void lensInfoPanel.offsetWidth;
    lensInfoPanel.classList.add("panel-enter");
    animateInfoPanel = false;
  }
  lensInfoPanel.innerHTML = `
    <div class="info-panel-head">
      <span class="info-kicker">Analyse Essilor</span>
      <span class="info-reference-row">
        <strong>${selectedName}</strong>
        <button class="copy-reference" type="button" data-copy-reference="${selectedName}" aria-label="Copier la référence">Copier</button>
      </span>
    </div>
    ${renderInfoCard({
      category: "type_verre",
      key: lensStoryKey,
      label: "Type de verre",
      visualClass: "visual-type",
      story: {
        ...lensStory,
        title: lensStory.typeTitle || lensStory.title,
        text: lensStory.typeText || lensStory.text
      }
    })}
    ${renderInfoCard({
      category: "matiere",
      key: selection.material,
      label: "Matière",
      visualClass: materialStory.visual,
      story: {
        ...materialStory,
        source: materialStory.source || "Essilor matières"
      }
    })}
    ${renderInfoCard({
      category: "traitement",
      key: selection.treatment,
      label: "Traitement",
      visualClass: treatmentStory.visual,
      story: {
        ...treatmentStory,
        source: treatmentStory.source || "Essilor Crizal"
      }
    })}
    ${photochromicCard}
  `;
}

function renderNetwork() {
  ensureActiveVision();
  const lenses = getActiveLenses();
  renderVisionPicker();

  if (!lenses.length) {
    closedNetwork.classList.add("hidden");
    lensInfoPanel.classList.add("hidden");
    lensInfoPanel.innerHTML = "";
    return;
  }

  closedNetwork.classList.remove("hidden");
  document.querySelector("#network-hero").outerHTML = renderLens(lenses[0], 0, "network-hero", 'id="network-hero"');

  networkChoices.innerHTML = lenses
    .slice(1)
    .map((lens, offset) => renderLens(lens, offset + 1, "network-choice"))
    .join("");
  renderInfoPanel();
  animateNextRender = false;
}

function openLensByIndex(index, shouldAnimateInfo = true) {
  activeInfoIndex = index;
  infoPanelVisible = true;
  animateInfoPanel = shouldAnimateInfo;
  pinnedOpenIndex = index;

  closedNetwork.querySelectorAll(".network-hero, .network-choice").forEach((lensElement) => {
    lensElement.classList.toggle("is-open", Number(lensElement.dataset.index || 0) === index);
  });

  renderInfoPanel();
}

primaryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    primaryButtons.forEach((primaryButton) => primaryButton.classList.remove("active"));
    button.classList.add("active");
    activeInfoIndex = 0;
    infoPanelVisible = true;
    animateInfoPanel = true;
    animateNextRender = true;
    pinnedOpenIndex = 0;
    renderVisionPicker();

    if (button.dataset.section === "reseaux") {
      networkPicker.classList.remove("hidden");
      activeNetwork = "itelis";
      activeVision = getDefaultVision(activeNetwork);
      infoPanelVisible = true;
      animateInfoPanel = true;
      animateNextRender = true;
      closedNetworkButtons.forEach((networkButton) => networkButton.classList.toggle("active", networkButton.dataset.network === activeNetwork));
      renderNetwork();
      return;
    }

    networkPicker.classList.add("hidden");
    activeNetwork = button.dataset.network;
    activeVision = getDefaultVision(activeNetwork);
    infoPanelVisible = true;
    animateInfoPanel = true;
    animateNextRender = true;
    closedNetworkButtons.forEach((networkButton) => networkButton.classList.remove("active"));
    renderNetwork();
  });
});

closedNetworkButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeNetwork = button.dataset.network;
    activeVision = getDefaultVision(activeNetwork);
    activeInfoIndex = 0;
    infoPanelVisible = true;
    animateInfoPanel = true;
    animateNextRender = true;
    pinnedOpenIndex = 0;
    closedNetworkButtons.forEach((networkButton) => networkButton.classList.remove("active"));
    renderVisionPicker();
    button.classList.add("active");
    renderNetwork();
  });
});

visionPicker.addEventListener("click", (event) => {
  const button = event.target.closest(".vision-button");
  if (!button) return;

  activeVision = button.dataset.vision;
  activeInfoIndex = 0;
  infoPanelVisible = true;
  animateInfoPanel = true;
  animateNextRender = true;
  pinnedOpenIndex = 0;
  visionButtons.forEach((visionButton) => visionButton.classList.remove("active"));
  button.classList.add("active");
  renderNetwork();
});

closedNetwork.addEventListener("click", (event) => {
  const materialButton = event.target.closest("[data-material]");
  const treatmentButton = event.target.closest("[data-treatment]");
  const shopPriceButton = event.target.closest("[data-shop-price]");
  const transitionToggle = event.target.closest(".transition-toggle");
  const transitionInput = transitionToggle?.querySelector("[data-transition]");
  const optionButton = materialButton || treatmentButton || transitionToggle;

  if (shopPriceButton) {
    event.preventDefault();
    const index = Number(shopPriceButton.dataset.index);
    const lens = getActiveLenses()[index];
    const selection = getSelection(lens, index);

    selection.selectedShop = shopPriceButton.dataset.shopPrice;
    selection.priceOpen = true;

    activeInfoIndex = index;
    infoPanelVisible = true;
    animateInfoPanel = false;
    pinnedOpenIndex = index;
    renderNetwork();
    return;
  }

  if (optionButton) {
    if (optionButton.disabled || transitionToggle?.classList.contains("disabled") || transitionInput?.disabled) return;

    const index = Number(optionButton.dataset.index);
    activeInfoIndex = index;
    const lens = getActiveLenses()[index];
    const selection = getSelection(lens, index);

    if (materialButton) selection.material = materialButton.dataset.material;
    if (treatmentButton) selection.treatment = treatmentButton.dataset.treatment;
    if (materialButton || treatmentButton) selection.priceOpen = false;
    if (transitionToggle) {
      event.preventDefault();
      selection.transitions = !selection.transitions;
    }

    infoPanelVisible = true;
    animateInfoPanel = Boolean(materialButton || treatmentButton || transitionToggle);
    pinnedOpenIndex = index;
    renderNetwork();
    return;
  }

  const lensElement = event.target.closest(".network-hero, .network-choice");
  if (lensElement) {
    openLensByIndex(Number(lensElement.dataset.index || 0), true);
  }
});

lensInfoPanel.addEventListener("click", (event) => {
  const copyButton = event.target.closest("[data-copy-reference]");
  if (copyButton) {
    copyToClipboard(copyButton.dataset.copyReference).then(() => showToast(copyButton));
    return;
  }

  const pedagogyCard = event.target.closest("[data-pedagogy-category][data-pedagogy-key]");
  if (!pedagogyCard) return;

  openPedagogyModal(pedagogyCard.dataset.pedagogyCategory, pedagogyCard.dataset.pedagogyKey);
});

lensInfoPanel.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" && event.key !== " ") return;

  const pedagogyCard = event.target.closest("[data-pedagogy-category][data-pedagogy-key]");
  if (!pedagogyCard) return;

  event.preventDefault();
  openPedagogyModal(pedagogyCard.dataset.pedagogyCategory, pedagogyCard.dataset.pedagogyKey);
});

closedNetwork.addEventListener("keydown", (event) => {
  const lensElement = event.target.closest(".network-hero, .network-choice");
  if ((event.key === "Enter" || event.key === " ") && lensElement) {
    event.preventDefault();
    openLensByIndex(Number(lensElement.dataset.index || 0), true);
  }
});

document.querySelector(".back-top").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

function updateFixedControlsVisibility() {
  document.body.classList.toggle("is-scrolled", window.scrollY > 120);
}

window.addEventListener("scroll", updateFixedControlsVisibility, { passive: true });
updateFixedControlsVisibility();

function closeModal() {
  modals.forEach((modal) => modal.classList.add("hidden"));
}

function openPedagogyModal(category, key) {
  const story = pedagogyStories[category]?.[key];
  if (!story?.modalImage || !pedagogyModal || !pedagogyModalTitle || !pedagogyModalImage) return;

  closeModal();
  pedagogyModalTitle.textContent = story.modalTitle || story.title || key;
  pedagogyModalImage.src = story.modalImage;
  pedagogyModalImage.alt = story.modalTitle || story.title || key;
  pedagogyModal.classList.remove("hidden");
}

modalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    closeModal();
    document.querySelector(`#${button.dataset.modalTarget}`)?.classList.remove("hidden");
  });
});

modals.forEach((modal) => {
  modal.addEventListener("click", (event) => {
    if (event.target === modal || event.target.closest("[data-modal-close]")) {
      closeModal();
    }
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeModal();
});

async function initializeApp() {
  try {
    await loadCsvDatabase();
  } catch (error) {
    console.error(error);
    closedNetwork.classList.add("hidden");
    lensInfoPanel.classList.remove("hidden");
    lensInfoPanel.innerHTML = `<div class="info-panel-head"><span class="info-kicker">Base de données</span><div class="info-reference-row"><h2>CSV impossible à charger</h2></div></div><article class="info-card"><div><span class="info-label">À vérifier</span><p>Ouvre le site depuis Render ou un petit serveur local pour autoriser la lecture de data/verres-template.csv.</p></div></article>`;
    return;
  }

  try {
    await loadPedagogyDatabase();
  } catch (error) {
    console.warn(error);
  }

  activeVision = getDefaultVision(activeNetwork);
  primaryButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.network === activeNetwork);
  });
  renderNetwork();
}

initializeApp();
