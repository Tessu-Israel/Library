document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("bokehCanvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  let width = canvas.width = window.innerWidth;
  let height = canvas.height = window.innerHeight;

  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  // Create particles
  const particles = Array.from({ length: 40 }).map(() => ({
    x: Math.random() * width,
    y: Math.random() * height,
    r: Math.random() * 6 + 2,
    dx: (Math.random() - 0.5) * 0.3,
    dy: (Math.random() - 0.5) * 0.3
  }));

  function draw() {
    ctx.clearRect(0, 0, width, height);
    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 215, 0, ${0.3 + Math.random() * 0.7})`;
      ctx.shadowColor = "gold";
      ctx.shadowBlur = 15;
      ctx.fill();
      p.x += p.dx;
      p.y += p.dy;
      if (p.x < 0 || p.x > width) p.dx *= -1;
      if (p.y < 0 || p.y > height) p.dy *= -1;
    });
    requestAnimationFrame(draw);
  }

  draw();
});