// GSAP card reveal animation
document.addEventListener("DOMContentLoaded", () => {
  gsap.from(".book-card", {
    opacity: 0,
    y: 30,
    duration: 0.8,
    stagger: 0.15
  });
});