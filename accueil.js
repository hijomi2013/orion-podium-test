const cards = [...document.querySelectorAll(".card")];
const links = [...document.querySelectorAll("[data-href]")];
const solaireTriggers = [...document.querySelectorAll("[data-solaire-modal]")];
const infoTriggers = [...document.querySelectorAll("[data-info-modal]")];
const imageModal = document.querySelector("#image-modal");
const imageModalKicker = document.querySelector("#image-modal-kicker");
const imageModalTitle = document.querySelector("#image-modal-title");
const imageModalImage = document.querySelector("#image-modal-image");
const imageModalOfferActions = document.querySelector("#image-modal-offer-actions");
const imageModal3Plus1Actions = document.querySelector("#image-modal-3plus1-actions");
const lensOfferButtons = [...document.querySelectorAll("[data-lens-offer]")];
const lens3Plus1Buttons = [...document.querySelectorAll("[data-lens-3plus1]")];
const imageModalClose = [...document.querySelectorAll("[data-modal-close]")];
const directorAccess = document.querySelector(".director-access");
const directorToggle = document.querySelector("[data-director-toggle]");
const SWITCH_CLOSE_DELAY = 360;
const TILT_STRENGTH = 5;
let pendingCloseTimer = 0;
let lastModalTrigger = null;

const lensOfferImages = {
  alcon: {
    image: "assets/lentilles/offre/alcon.png",
    alt: "Offre lentilles Alcon",
  },
  "johnson-johnson": {
    image: "assets/lentilles/offre/johnson.png",
    alt: "Offre lentilles Johnson & Johnson",
  },
  "bausch-lomb": {
    image: "assets/lentilles/offre/bauschlomb.png",
    alt: "Offre lentilles Bausch & Lomb",
  },
  ophtalmic: {
    image: "assets/lentilles/offre/ophtalmic.png",
    alt: "Offre lentilles Ophtalmic",
  },
  coopervision: {
    image: "assets/lentilles/offre/coopervision.png",
    alt: "Offre lentilles Coopervision",
  },
};

const lens3Plus1Images = {
  "dailies-aqua-comfort": {
    image: "assets/lentilles/offre3plus1/dailies.png",
    alt: "Offre 3+1 Dailies Aqua Comfort+",
  },
  "precision-one": {
    image: "assets/lentilles/offre3plus1/precision-one.png",
    alt: "Offre 3+1 Precision One",
  },
  "total-one": {
    image: "assets/lentilles/offre3plus1/total-one.png",
    alt: "Offre 3+1 Total One",
  },
  moist: {
    image: "assets/lentilles/offre3plus1/moist.png",
    alt: "Offre 3+1 Moist",
  },
  oasys: {
    image: "assets/lentilles/offre3plus1/oasys.png",
    alt: "Offre 3+1 Oasys",
  },
  "oasys-max": {
    image: "assets/lentilles/offre3plus1/oasys-max.png",
    alt: "Offre 3+1 Oasys Max",
  },
};

const solarCatalogues = {
  demetz: {
    title: "Demetz",
    image: "assets/solaire/demetz.jpg",
    alt: "Catalogue solaire Demetz",
    isTall: true,
  },
  oakley: {
    title: "Oakley",
    image: "assets/solaire/oakley.png",
    alt: "Tarif montures sport Oakley",
  },
  rayban: {
    title: "Ray-Ban",
    image: "assets/solaire/rayban.jpg",
    alt: "Tarif Ray-Ban Authentic",
  },
  vuarnet: {
    title: "Vuarnet",
    image: "assets/solaire/vuarnet.jpg",
    alt: "Catalogue solaire Vuarnet",
    isTall: true,
  },
  bolle: {
    title: "Bolle",
    image: "assets/solaire/bolle.png",
    alt: "Prix de vente Bolle Safety",
  },
};

const infoCatalogues = {
  "lentilles-offre": {
    kicker: "Univers Lentilles",
    title: "Offre",
    image: lensOfferImages.alcon.image,
    alt: lensOfferImages.alcon.alt,
    hasOfferActions: true,
  },
  "lentilles-garantie": {
    kicker: "Univers Lentilles",
    title: "Garantie",
    image: "assets/lentilles/garantie-lentille.png",
    alt: "Garantie lentilles",
    isTall: true,
  },
  "lentilles-produits": {
    kicker: "Univers Lentilles",
    title: "Produits",
    image: "assets/lentilles/entretien-lentille.png",
    alt: "Produits lentilles",
  },
  "lentilles-3plus1": {
    kicker: "Univers Lentilles",
    title: "Offres 3+1",
    image: lens3Plus1Images["dailies-aqua-comfort"].image,
    alt: lens3Plus1Images["dailies-aqua-comfort"].alt,
    has3Plus1Actions: true,
  },
  "directeur-planning": {
    kicker: "Espace Directeur",
    title: "Planning",
    image: "assets/verres/sav-construction.png",
    alt: "Planning directeur",
  },
  "directeur-encaissements": {
    kicker: "Espace Directeur",
    title: "Encaissements",
    image: "assets/verres/sav-construction.png",
    alt: "Encaissements directeur",
  },
  sav: {
    kicker: "Module Verres",
    title: "SAV",
    image: "assets/verres/sav-construction.png",
    alt: "Page SAV en construction",
  },
};

function clearPendingClose() {
  if (!pendingCloseTimer) return;
  window.clearTimeout(pendingCloseTimer);
  pendingCloseTimer = 0;
}

function setCardOpen(card, isOpen) {
  card.classList.toggle("is-flipped", isOpen);
  card.setAttribute("aria-expanded", String(isOpen));
  card.style.removeProperty("--tilt-x");
  card.style.removeProperty("--tilt-y");
}

function closeCards() {
  clearPendingClose();
  cards.forEach((card) => setCardOpen(card, false));
}

function closeDirectorAccess() {
  if (!directorAccess || !directorToggle) return;
  directorAccess.classList.remove("is-open");
  directorToggle.setAttribute("aria-expanded", "false");
}

function openCard(cardToOpen) {
  clearPendingClose();

  const cardsToClose = cards.filter((card) => card !== cardToOpen && card.classList.contains("is-flipped"));

  setCardOpen(cardToOpen, true);

  if (!cardsToClose.length) return;

  pendingCloseTimer = window.setTimeout(() => {
    cardsToClose.forEach((card) => setCardOpen(card, false));
    pendingCloseTimer = 0;
  }, SWITCH_CLOSE_DELAY);
}

cards.forEach((card) => {
  card.setAttribute("role", "button");
  card.setAttribute("aria-expanded", "false");

  card.addEventListener("pointermove", (event) => {
    if (card.classList.contains("is-flipped")) return;

    const box = card.getBoundingClientRect();
    const x = ((event.clientX - box.left) / box.width - 0.5) * TILT_STRENGTH;
    const y = ((event.clientY - box.top) / box.height - 0.5) * -TILT_STRENGTH;

    card.style.setProperty("--tilt-x", `${y.toFixed(2)}deg`);
    card.style.setProperty("--tilt-y", `${x.toFixed(2)}deg`);
  });

  card.addEventListener("pointerleave", () => {
    card.style.removeProperty("--tilt-x");
    card.style.removeProperty("--tilt-y");
  });

  card.addEventListener("click", (event) => {
    event.stopPropagation();

    if (card.classList.contains("is-flipped")) {
      closeCards();
      return;
    }

    openCard(card);
  });

  card.addEventListener("keydown", (event) => {
    if (event.target.closest("button")) return;
    if (event.key !== "Enter" && event.key !== " ") return;

    event.preventDefault();
    event.stopPropagation();

    if (card.classList.contains("is-flipped")) {
      closeCards();
      return;
    }

    openCard(card);
  });
});

if (directorAccess && directorToggle) {
  directorAccess.addEventListener("click", (event) => {
    event.stopPropagation();
  });

  directorToggle.addEventListener("click", () => {
    const isOpen = directorAccess.classList.toggle("is-open");
    directorToggle.setAttribute("aria-expanded", String(isOpen));
    closeCards();
  });
}

links.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.stopPropagation();
    window.location.href = link.dataset.href;
  });
});

function openImageModal(catalogue, trigger) {
  if (!catalogue || !imageModal || !imageModalKicker || !imageModalTitle || !imageModalImage) return;

  lastModalTrigger = directorAccess && directorAccess.contains(trigger) ? directorToggle : trigger;
  imageModalKicker.textContent = catalogue.kicker || "Catalogue solaire";
  imageModalTitle.textContent = catalogue.title;
  if (imageModalOfferActions) {
    imageModalOfferActions.hidden = !catalogue.hasOfferActions;
    lensOfferButtons.forEach((button, index) => {
      button.classList.toggle("is-active", Boolean(catalogue.hasOfferActions) && index === 0);
    });
  }
  if (imageModal3Plus1Actions) {
    imageModal3Plus1Actions.hidden = !catalogue.has3Plus1Actions;
    lens3Plus1Buttons.forEach((button, index) => {
      button.classList.toggle("is-active", Boolean(catalogue.has3Plus1Actions) && index === 0);
    });
  }
  if (catalogue.image) {
    imageModalImage.src = catalogue.image;
    imageModalImage.alt = catalogue.alt;
  } else {
    imageModalImage.removeAttribute("src");
    imageModalImage.alt = "";
  }
  imageModalImage.classList.toggle("is-tall", Boolean(catalogue.isTall));
  imageModalImage.classList.toggle("is-pending", !catalogue.image);
  imageModal.classList.add("is-open");
  imageModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function setLensOfferImage(offerKey) {
  const offer = lensOfferImages[offerKey];
  if (!offer || !imageModalImage) return;

  imageModalImage.src = offer.image;
  imageModalImage.alt = offer.alt;
  imageModalImage.classList.remove("is-pending", "is-tall");
}

function setLens3Plus1Image(offerKey) {
  const offer = lens3Plus1Images[offerKey];
  if (!offer || !imageModalImage) return;

  if (offer.image) {
    imageModalImage.src = offer.image;
    imageModalImage.alt = offer.alt;
  } else {
    imageModalImage.removeAttribute("src");
    imageModalImage.alt = "";
  }
  imageModalImage.classList.toggle("is-pending", !offer.image);
  imageModalImage.classList.remove("is-tall");
}

lensOfferButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.stopPropagation();
    lensOfferButtons.forEach((offerButton) => {
      offerButton.classList.toggle("is-active", offerButton === button);
    });
    setLensOfferImage(button.dataset.lensOffer);
  });
});

lens3Plus1Buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.stopPropagation();
    lens3Plus1Buttons.forEach((offerButton) => {
      offerButton.classList.toggle("is-active", offerButton === button);
    });
    setLens3Plus1Image(button.getAttribute("data-lens-3plus1"));
  });
});

function closeImageModal() {
  if (!imageModal || !imageModal.classList.contains("is-open")) return;

  imageModal.classList.remove("is-open");
  imageModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
  imageModalImage.removeAttribute("src");

  if (lastModalTrigger) lastModalTrigger.focus();
  lastModalTrigger = null;
}

solaireTriggers.forEach((trigger) => {
  trigger.addEventListener("click", (event) => {
    event.stopPropagation();
    openImageModal(solarCatalogues[trigger.dataset.solaireModal], trigger);
  });
});

infoTriggers.forEach((trigger) => {
  trigger.addEventListener("click", (event) => {
    event.stopPropagation();
    closeDirectorAccess();
    openImageModal(infoCatalogues[trigger.dataset.infoModal], trigger);
  });
});

imageModalClose.forEach((closeControl) => {
  closeControl.addEventListener("click", (event) => {
    event.stopPropagation();
    closeImageModal();
  });
});

document.addEventListener("click", () => {
  if (imageModal && imageModal.classList.contains("is-open")) return;
  closeDirectorAccess();
  closeCards();
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;

  if (imageModal && imageModal.classList.contains("is-open")) {
    closeImageModal();
    return;
  }

  closeDirectorAccess();
  closeCards();
});
