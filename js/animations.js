document.addEventListener("DOMContentLoaded", () => {
  // === Hero Text Reveal ===
  gsap.from(".hero-title", {
    duration: 1.2,
    y: 40,
    opacity: 0,
    ease: "power3.out"
  });

  // === Book Card Hover Sweep ===
  document.querySelectorAll(".book-card-inner").forEach(card => {
    card.addEventListener("mouseenter", () => {
      gsap.to(card, { rotationY: 6, rotationX: 3, scale: 1.02, duration: 0.4, ease: "power2.out" });
    });
    card.addEventListener("mouseleave", () => {
      gsap.to(card, { rotationY: 0, rotationX: 0, scale: 1, duration: 0.5, ease: "power2.inOut" });
    });
  });

  // === Filter Ripple Effect ===
  document.querySelectorAll("[data-filter]").forEach(btn => {
    btn.addEventListener("click", e => {
      const ripple = document.createElement("span");
      ripple.className = "filter-ripple";
      ripple.style.left = `${e.clientX - e.target.getBoundingClientRect().left}px`;
      ripple.style.top = `${e.clientY - e.target.getBoundingClientRect().top}px`;
      e.target.appendChild(ripple);
      setTimeout(() => ripple.remove(), 600);
    });
  });
});