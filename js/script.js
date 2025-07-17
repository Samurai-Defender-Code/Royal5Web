document.addEventListener("DOMContentLoaded", () => {
  const reveals = document.querySelectorAll('.reveal');

  const revealOnScroll = () => {
    for (const el of reveals) {
      const top = el.getBoundingClientRect().top;
      const visible = window.innerHeight - 100;
      if (top < visible) {
        el.classList.add('active');
      }
    }
  };

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll(); // Ejecutar en carga inicial
});