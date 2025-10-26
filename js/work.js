// Dupliquer les projets pour créer une boucle infinie
const track = document.querySelector(".carousel-track");
const projects = Array.from(track.children);

// Cloner les projets pour un effet loop
projects.forEach((proj) => {
  const clone = proj.cloneNode(true);
  track.appendChild(clone);
});
