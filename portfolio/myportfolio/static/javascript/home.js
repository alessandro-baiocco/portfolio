const body = document.querySelector("body");

const linksStaticAliens = ["purple.svg", "yellow.svg", "darkblue.png", "cyan.png", "green.png", "red.png"];

const respawn = (e) => {
  e.target.style.top = `${Math.floor(Math.random() * 80 + 10)}%`;
  e.target.style.left = `${Math.floor(Math.random() * 80 + 10)}%`;
  e.target.classList.remove("dissolve");
};

const dissolve = (e) => {
  e.target.classList.add("dissolve");
  setTimeout(() => {
    respawn(e);
  }, 2000);
};

window.onload = () => {
  for (let i = 0; i < 20; i++) {
    const ghost = document.createElement("div");

    myAlienImg = document.createElement("img");
    myAlienImg.classList.add("invader");
    myAlienImg.src = `static/assets/aliens/${linksStaticAliens[Math.floor(Math.random() * 6)]}`;
    myAlienImg.alt = "alien";
    myAlienImg.style.position = `fixed`;
    myAlienImg.style.maxWidth = `40px`;
    myAlienImg.style.top = `${Math.floor(Math.random() * 80 + 10)}%`;
    myAlienImg.style.left = `${Math.floor(Math.random() * 80 + 10)}%`;
    myAlienImg.onclick = (e) => dissolve(e);

    ghost.append(myAlienImg);

    body.append(ghost);
  }
};
