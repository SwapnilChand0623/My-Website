document.querySelectorAll(".slide-title").forEach((title) => {
  const text = title.textContent.trim();
  title.textContent = "";
  const words = text.split(" ");

  words.forEach((word, index) => {
    const span = document.createElement("span");
    span.className = "line";
    span.style.transitionDelay = `${index * 34}ms`;
    span.textContent = word;
    title.appendChild(span);

    if (index < words.length - 1) {
      title.appendChild(document.createTextNode(" "));
    }
  });
});

const revealItems = document.querySelectorAll(".reveal");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
      } else {
        entry.target.classList.remove("in-view");
      }
    });
  },
  { threshold: 0.2, rootMargin: "0px 0px -8% 0px" }
);

revealItems.forEach((item) => observer.observe(item));

if (!prefersReducedMotion) {
  document.querySelectorAll(".tilt-card").forEach((card) => {
    card.addEventListener("pointerenter", () => {
      card.classList.add("is-hovered");
    });

    card.addEventListener("pointerleave", () => {
      card.classList.remove("is-hovered");
    });
  });
}
