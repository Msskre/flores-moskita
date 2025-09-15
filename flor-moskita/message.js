// Texto que quieres escribir
const texto =
  "Feliz 21 de Septiembre 💛\nAunque no podamos vernos,\nsiempre estoy pensando en ti. \n\n\nMi Moskita preciosa.\nDe: Tu Moskito";

// Efecto typewriter
const messageEl = document.getElementById("message");
let i = 0;

// Espera a que las flores aparezcan
setTimeout(() => {
  const interval = setInterval(() => {
    messageEl.style.opacity = 1;
    messageEl.textContent = texto.slice(0, i);
    i++;
    if (i > texto.length) {
      clearInterval(interval);
    }
  }, 50);
}, 3000); // 3 segundos después
