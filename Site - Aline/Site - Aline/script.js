document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("input");
  const logo = document.querySelector('img[alt="Logo-Melissa"]');

  // Função para atualizar a logo com base no tema atual
  const updateLogo = () => {
    if (document.documentElement.classList.contains("dark")) {
      logo.src = "img/melissa-logobranca.png";
    } else {
      logo.src = "img/melissa-logo.png";
    }
  };

  // Aplica transição suave nas cores
  const applyTransition = () => {
    document.body.classList.add("theme-transition");
    setTimeout(() => {
      document.body.classList.remove("theme-transition");
    }, 500);
  };

  // Ao carregar a página, garante que a logo está certa
  updateLogo();

  // Ao trocar o tema manualmente
  themeToggle.addEventListener("change", () => {
    document.documentElement.classList.toggle("dark");
    applyTransition();
    updateLogo();
  });
});
