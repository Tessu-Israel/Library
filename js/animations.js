document.addEventListener("DOMContentLoaded", () => {
  // Hero title animation
  const title = document.querySelector(".hero-title");
  if (title) {
    const words = title.innerText.split(" ");
    title.innerHTML = words.map(w => `<span class="opacity-0 inline-block">${w}</span>`).join(" ");
    gsap.to(".hero-title span", { opacity: 1, stagger: 0.2, duration: 0.6, ease: "power2.out" });
  }

  // Hero parallax tilt
  const heroCard = document.getElementById("heroContent");
  heroCard.addEventListener("mousemove", e => {
    const { offsetWidth: w, offsetHeight: h } = heroCard;
    const x = e.offsetX - w / 2;
    const y = e.offsetY - h / 2;
    heroCard.style.transform = `rotateX(${(y / h) * -10}deg) rotateY(${(x / w) * 10}deg)`;
  });
  heroCard.addEventListener("mouseleave", () => {
    heroCard.style.transform = "rotateX(0) rotateY(0)";
  });

  // Book cards stagger animation
  gsap.from(".book-card", {
    opacity: 0,
    y: 30,
    duration: 0.8,
    stagger: 0.15
  });
});

// Animate grid shuffle on category change
document.addEventListener("alpine:init", () => {
  Alpine.effect(() => {
    const cards = document.querySelectorAll(".book-card");
    gsap.from(cards, { opacity: 0, y: 20, stagger: 0.05, duration: 0.4 });
  });
});

// Inside animations.js
document.addEventListener("alpine:init", () => {
  Alpine.effect(() => {
    const modal = document.querySelector(".modal-card");
    if (modal) {
      gsap.from(modal, { scale: 0.9, opacity: 0, duration: 0.4, ease: "power2.out" });
    }
  });
});