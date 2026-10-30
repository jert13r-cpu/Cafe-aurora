const plans = {
  oro: {
    name: "Suscripción Oro",
    detail: "Hasta 500 g · Dos bolsas distintas",
    price: 29900,
    priceLabel: "$29.900 COP"
  },
  diamante: {
    name: "Suscripción Diamante",
    detail: "Hasta 750 g · Dos bolsas distintas",
    price: 49900,
    priceLabel: "$49.900 COP"
  },
  vip: {
    name: "Suscripción VIP",
    detail: "Hasta 1.000 g · Dos bolsas distintas",
    price: 69900,
    priceLabel: "$69.900 COP"
  }
};

const dialog = document.querySelector("#checkout-dialog");
const form = document.querySelector("#subscription-form");
let selectedPlan = null;

function setStep(stepNumber) {
  document.querySelectorAll(".checkout-step").forEach((step) => {
    step.hidden = Number(step.dataset.step) !== stepNumber;
  });
  const activeHeading = document.querySelector(`[data-step="${stepNumber}"] h2`);
  dialog.setAttribute("aria-labelledby", activeHeading.id);
  document.querySelectorAll(".progress-dot").forEach((dot) => {
    const dotNumber = Number(dot.dataset.progress);
    dot.classList.toggle("is-current", dotNumber === stepNumber);
    dot.classList.toggle("is-done", dotNumber < stepNumber);
  });
}

function startCheckout(planId) {
  const plan = plans[planId];
  if (!plan) return;

  selectedPlan = { ...plan, id: planId };
  document.querySelector("[data-summary-name]").textContent = plan.name;
  document.querySelector("[data-summary-detail]").textContent = plan.detail;
  document.querySelector("[data-summary-price]").textContent = plan.priceLabel;
  document.querySelector("[data-total-price]").textContent = `${plan.priceLabel} / mes`;
  setStep(1);
  dialog.showModal();
}

document.querySelectorAll(".choose-plan").forEach((button) => {
  button.addEventListener("click", () => startCheckout(button.dataset.plan));
});

document.querySelectorAll("[data-scroll-plans]").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelector("#planes").scrollIntoView({ behavior: "smooth" });
  });
});

document.querySelectorAll("[data-close-dialog]").forEach((button) => {
  button.addEventListener("click", () => dialog.close());
});

dialog.addEventListener("close", () => {
  form.reset();
  selectedPlan = null;
  setStep(1);
});

document.querySelector("[data-next]").addEventListener("click", () => {
  setStep(2);
  document.querySelector("#customer-name").focus();
});

document.querySelector("[data-previous]").addEventListener("click", () => setStep(1));

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!form.reportValidity() || !selectedPlan) return;

  const name = form.elements.name.value.trim();
  const orderId = `AUR-${Math.random().toString(36).slice(2, 8).toUpperCase()}`;
  document.querySelector("[data-confirmation-name]").textContent = name;
  document.querySelector("[data-confirmation-plan]").textContent = selectedPlan.name;
  document.querySelector("[data-order-id]").textContent = orderId;
  setStep(3);
});
