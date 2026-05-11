const cards = [...document.querySelectorAll(".card")];
const links = [...document.querySelectorAll("[data-href]")];
const SWITCH_CLOSE_DELAY = 360;
const TILT_STRENGTH = 5;
let pendingCloseTimer = 0;

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

links.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.stopPropagation();
    window.location.href = link.dataset.href;
  });
});

document.addEventListener("click", closeCards);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeCards();
});
