const body = document.querySelector("body");

// const alienColors = ["darkblue.jpg", "cian", "orange", "green", "red"];
const linksAliens = [
  "https://www.svgrepo.com/show/275959/space-invaders.svg",
  "https://freepngimg.com/save/32282-space-invaders-free-download/1280x931",
  "https://freesvg.org/img/space-invaders.png",
  "https://www.pngfind.com/pngs/b/57-578462_space-invaders-alien-png-photo-space-invaders-alien.png",
  "https://png.pngtree.com/png-vector/20220623/ourmid/pngtree-space-invaders-character-game-play-png-image_5173025.png",
];

const dissolve = (e) => {
  e.target.classList.add("dissolve");
};

window.onload = () => {
  for (let i = 0; i < 20; i++) {
    const ghost = document.createElement("div");
    ghost.classList.add("invader");
    ghost.style.position = `absolute`;
    ghost.style.maxWidth = `40px`;
    ghost.style.top = `${Math.floor(Math.random() * 80 + 10)}%`;
    ghost.style.left = `${Math.floor(Math.random() * 80 + 10)}%`;

    ghost.onclick = (e) => dissolve(e);

    ghost.innerHTML = `<img src="${linksAliens[Math.floor(Math.random() * 5)]}" alt="ghost" class="img-fluid" />`;
    body.append(ghost);
  }
};
