document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".carrossel-container").forEach((carrossel) => {
    const track = carrossel.querySelector(".carrossel-track");
    const slides = carrossel.querySelectorAll(".carrossel-slide");
    const prevBtn = carrossel.querySelector(".carrossel-prev");
    const nextBtn = carrossel.querySelector(".carrossel-next");
    const indicators = carrossel.querySelectorAll(".carrossel-indicator");

    let currentIndex = 0;
    const totalSlides = slides.length;

    // Função para atualizar a posição do carrossel
    function updateCarrossel() {
      track.style.transform = `translateX(-${currentIndex * 100}%)`;

      // Atualiza indicadores
      indicators.forEach((indicator, index) => {
        if (index === currentIndex) {
          indicator.classList.add("active");
        } else {
          indicator.classList.remove("active");
        }
      });
    }

    // Event listeners para botões
    nextBtn.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % totalSlides;
      updateCarrossel();
    });

    prevBtn.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
      updateCarrossel();
    });

    // Event listeners para indicadores
    indicators.forEach((indicator, index) => {
      indicator.addEventListener("click", () => {
        currentIndex = index;
        updateCarrossel();
      });
    });

    // Inicializa o carrossel
    updateCarrossel();

    // Opcional: Autoplay (descomente se quiser)
    
      let autoplay = setInterval(() => {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateCarrossel();
      }, 5000);
      
      carrossel.addEventListener('mouseenter', () => clearInterval(autoplay));
      carrossel.addEventListener('mouseleave', () => {
        autoplay = setInterval(() => {
          currentIndex = (currentIndex + 1) % totalSlides;
          updateCarrossel();
        }, 5000);
      });
      
  });
});
