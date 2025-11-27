document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".project-gallery img");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = lightbox.querySelector(".lightbox-img");
  const closeBtn = lightbox.querySelector(".lightbox-close");

  // Ouverture
  images.forEach((img) => {
    img.addEventListener("click", () => {
      lightboxImg.src = img.src;
      lightbox.classList.add("is-open");
      document.body.style.overflow = "hidden"; // bloque le scroll derrière
    });
  });

  // Fermeture par la croix
  closeBtn.addEventListener("click", closeLightbox);

  // Fermeture en cliquant dans le fond
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });

  // Fermeture avec la touche ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && lightbox.classList.contains("is-open")) {
      closeLightbox();
    }
  });

  function closeLightbox() {
    lightbox.classList.remove("is-open");
    lightboxImg.src = "";
    document.body.style.overflow = "";
  }
});
