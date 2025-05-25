document.addEventListener("DOMContentLoaded", function () {
  // Lightbox functionality
  const lightboxModal = document.getElementById("lightbox-modal");
  const lightboxImage = document.getElementById("lightbox-image");
  const lightboxClose = document.getElementById("lightbox-close");

  let activeImage = null;
  let imageClone = null;

  // Adiciona evento de clique a todas as imagens do carrossel
  document.querySelectorAll(".carrossel-slide img").forEach((img) => {
    img.addEventListener("click", function (e) {
      activeImage = e.target;
      const rect = activeImage.getBoundingClientRect();

      // Criar clone para animação
      imageClone = activeImage.cloneNode();
      imageClone.style.position = "fixed";
      imageClone.style.top = `${rect.top}px`;
      imageClone.style.left = `${rect.left}px`;
      imageClone.style.width = `${rect.width}px`;
      imageClone.style.height = `${rect.height}px`;
      imageClone.style.objectFit = "contain";
      imageClone.style.zIndex = "9998";
      imageClone.style.transition = "all 0.4s cubic-bezier(0.2, 0, 0.13, 1.5)";
      imageClone.style.borderRadius = "0.75rem";
      document.body.appendChild(imageClone);

      // Configurar lightbox
      lightboxImage.src = this.src;
      lightboxImage.alt = this.alt;

      // Forçar reflow
      void lightboxModal.offsetWidth;

      // Iniciar animação
      setTimeout(() => {
        lightboxModal.classList.add("show");

        const targetWidth = Math.min(rect.width * 3, window.innerWidth - 40);
        const targetHeight = Math.min(rect.height * 3, window.innerHeight - 40);
        const targetTop = (window.innerHeight - targetHeight) / 2;
        const targetLeft = (window.innerWidth - targetWidth) / 2;

        imageClone.style.top = `${targetTop}px`;
        imageClone.style.left = `${targetLeft}px`;
        imageClone.style.width = `${targetWidth}px`;
        imageClone.style.height = `${targetHeight}px`;

        setTimeout(() => {
          if (imageClone) {
            imageClone.style.opacity = "0";
            setTimeout(() => {
              if (imageClone && imageClone.parentNode) {
                imageClone.parentNode.removeChild(imageClone);
              }
            }, 300);
          }
        }, 50);
      }, 10);

      document.body.style.overflow = "hidden";
    });
  });

  // Função para fechar o lightbox com animação
  function closeLightbox() {
    if (!activeImage) return;

    const rect = activeImage.getBoundingClientRect();

    // Criar clone para animação de volta
    const closingClone = lightboxImage.cloneNode();
    closingClone.style.position = "fixed";
    closingClone.style.top = "50%";
    closingClone.style.left = "50%";
    closingClone.style.transform = "translate(-50%, -50%)";
    closingClone.style.width = `${lightboxImage.offsetWidth}px`;
    closingClone.style.height = `${lightboxImage.offsetHeight}px`;
    closingClone.style.objectFit = "contain";
    closingClone.style.zIndex = "9998";
    closingClone.style.transition = "all 0.4s cubic-bezier(0.2, 0, 0.13, 1.5)";
    closingClone.style.borderRadius = "0.75rem";
    document.body.appendChild(closingClone);

    lightboxModal.classList.remove("show");

    // Animar clone de volta para a posição original
    setTimeout(() => {
      closingClone.style.top = `${rect.top}px`;
      closingClone.style.left = `${rect.left}px`;
      closingClone.style.width = `${rect.width}px`;
      closingClone.style.height = `${rect.height}px`;
      closingClone.style.transform = "none";

      setTimeout(() => {
        if (closingClone && closingClone.parentNode) {
          closingClone.parentNode.removeChild(closingClone);
        }
        document.body.style.overflow = "";
      }, 400);
    }, 10);
  }

  // Fecha o lightbox
  lightboxClose.addEventListener("click", closeLightbox);

  // Fecha ao clicar fora da imagem
  lightboxModal.addEventListener("click", function (e) {
    if (e.target === lightboxModal) {
      closeLightbox();
    }
  });

  // Fecha com ESC
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && lightboxModal.classList.contains("show")) {
      closeLightbox();
    }
  });

  // Seu código existente do carrossel aqui...
  document.querySelectorAll(".carrossel-container").forEach((carrossel) => {
    // ... (mantenha o código do carrossel que já existe)
  });
});
