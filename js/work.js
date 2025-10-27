document.addEventListener("DOMContentLoaded", function () {
  var splide = new Splide("#image-carousel", {
    type: "loop",
    perPage: 3, // 3 images visibles
    perMove: 1,
    autoplay: true,
    interval: 2000, // 3s par image
    pauseOnHover: true, // pause quand on survole
    arrows: false, // flèches navigation
    pagination: false, // pas de petits points
    gap: "20px", // espace entre images
    breakpoints: {
      1024: { perPage: 2 },
      768: { perPage: 1 },
    },
  });
  splide.mount();
});
