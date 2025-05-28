document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("input");
  const logo = document.querySelector('img[alt="Logo"]');
  const themeColorMeta = document.querySelector('meta[name="theme-color"]');

  // Cores para cada tema
  const themeColors = {
    light: "#eaeaea",
    dark: "#2d3748",
  };

  // Função para atualizar a logo e theme-color
  const updateTheme = () => {
    const isDark = document.documentElement.classList.contains("dark");

    // Atualiza logo
    logo.src = "img/Logo2-removebg-preview.png"; // Mantive seu código original

    // Atualiza theme-color
    themeColorMeta.content = isDark ? themeColors.dark : themeColors.light;

    // Para navegadores que não suportam media queries dinâmicas
    if (themeColorMeta.media) {
      themeColorMeta.removeAttribute("media");
    }
  };

  // Aplica transição suave nas cores
  const applyTransition = () => {
    document.body.classList.add("theme-transition");
    setTimeout(() => {
      document.body.classList.remove("theme-transition");
    }, 500);
  };

  // Atualiza tudo ao carregar
  updateTheme();

  // Ao trocar o tema manualmente
  themeToggle.addEventListener("change", () => {
    document.documentElement.classList.toggle("dark");
    applyTransition();
    updateTheme();

    // Opcional: Salva preferência no localStorage
    localStorage.setItem(
      "theme",
      document.documentElement.classList.contains("dark") ? "dark" : "light"
    );
  });

  // Opcional: Verifica preferência salva ao carregar
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.documentElement.classList.add("dark");
    updateTheme();
  }
});
