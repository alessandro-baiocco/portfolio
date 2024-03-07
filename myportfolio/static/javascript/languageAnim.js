window.onload = () => {
  const animLang = document.querySelectorAll(".animLang");
  animLang.forEach((lang) => {
    addAnimation(lang);
  });
};

const removeAnimation = (e) => {
  e.target.classList.remove("jelly");
  e.target.classList.remove("shake");
  e.target.classList.remove("pulse");
};

const restoreAnimation = (e) => {
  const animSelected = Math.floor(Math.random() * 3);

  switch (animSelected) {
    case 0:
      e.target.classList.add("jelly");
      break;

    case 1:
      e.target.classList.add("shake");
      break;

    case 2:
      e.target.classList.add("pulse");
      break;
  }
};
const addAnimation = (e) => {
  const animSelected = Math.floor(Math.random() * 3);

  switch (animSelected) {
    case 0:
      e.classList.add("jelly");
      break;

    case 1:
      e.classList.add("shake");
      break;

    case 2:
      e.classList.add("pulse");
      break;
  }
};
