// GSAP card reveal animation
document.addEventListener("DOMContentLoaded", () => {
  gsap.from(".book-card", {
    opacity: 0,
    y: 30,
    duration: 0.8,
    stagger: 0.15
  });
});

// Hero Title Word-by-Word Animation
document.addEventListener("DOMContentLoaded", () => {
  const title = document.querySelector(".hero-title");
  if (title) {
    const words = title.innerText.split(" ");
    title.innerHTML = words.map(w => `<span class="opacity-0 inline-block">${w}</span>`).join(" ");
    gsap.to(".hero-title span", { opacity: 1, stagger: 0.2, duration: 0.6, ease: "power2.out" });
  }
});

// 3D Parallax Tilt for Hero Card
const heroCard = document.getElementById("heroContent");
if (heroCard) {
  heroCard.addEventListener("mousemove", e => {
    const { offsetWidth: w, offsetHeight: h } = heroCard;
    const x = e.offsetX - w / 2;
    const y = e.offsetY - h / 2;
    const rotateX = (y / h) * -10;
    const rotateY = (x / w) * 10;
    heroCard.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });
  heroCard.addEventListener("mouseleave", () => {
    heroCard.style.transform = "rotateX(0) rotateY(0)";
  });
}