const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const fade = document.getElementById("fade");

// Tamaño inicial
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Ajustar tamaño al cambiar ventana
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

// Clase círculo
class Circulo {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.radio = 10 + Math.random() * 20;
    this.dx = (Math.random() - 0.5) * 4;
    this.dy = (Math.random() - 0.5) * 4;
    this.color = `hsl(${20 + Math.random() * 20}, 40%, ${30 + Math.random() * 20}%)`;
  }

  dibujar() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radio, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
  }

  mover() {
    if (this.x + this.radio > canvas.width || this.x - this.radio < 0) {
      this.dx = -this.dx;
    }
    if (this.y + this.radio > canvas.height || this.y - this.radio < 0) {
      this.dy = -this.dy;
    }

    this.x += this.dx;
    this.y += this.dy;

    this.dibujar();
  }
}

const circulos = [];
const cantidad = 80;

// Crear círculos
for (let i = 0; i < cantidad; i++) {
  circulos.push(new Circulo());
}

// Animación
function animar() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  circulos.forEach(c => c.mover());
  requestAnimationFrame(animar);
}

animar();

// TEMPORIZADOR + FADE OUT
setTimeout(() => {
  fade.style.opacity = "1"; // aparece fade negro

  setTimeout(() => {
    window.location.href = "Cuerpo del codigo.html";
  }, 1000); // duración del fade

}, 5000); // tiempo antes del fade
