document.querySelectorAll(".slide-title").forEach((title) => {
  const text = title.textContent.trim();
  title.textContent = "";
  const words = text.split(" ");

  words.forEach((word, index) => {
    const span = document.createElement("span");
    span.className = "line";
    span.style.transitionDelay = `${index * 34}ms`;
    span.textContent = `${word}${index === words.length - 1 ? "" : " "}`;
    title.appendChild(span);
  });
});

const revealItems = document.querySelectorAll(".reveal");

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

document.querySelectorAll(".tilt-card").forEach((card) => {
  card.addEventListener("pointermove", (event) => {
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const rotateX = ((y / rect.height) - 0.5) * -8;
    const rotateY = ((x / rect.width) - 0.5) * 8;

    card.style.transform = `perspective(1100px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px) scale(1.01)`;
  });

  card.addEventListener("pointerleave", () => {
    card.style.transform = "perspective(1100px) rotateX(0deg) rotateY(0deg)";
  });
});
