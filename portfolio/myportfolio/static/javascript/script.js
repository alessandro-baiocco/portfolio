// const container = document.querySelectorAll(".drag");

// const onMouseDrag = (e, { movementX, movementY }) => {
//   let getContainerStyle = window.getComputedStyle(e.target);
//   let leftValue = parseInt(getContainerStyle.left);
//   let topValue = parseInt(getContainerStyle.top);
//   container.style.left = `${leftValue + movementX}px`;
//   container.style.top = `${topValue + movementY}px`;
// };

// for (let i = 0; i < container.length; i++) {
//   container[i].addEventListener("mousedown", () => {
//     container[i].addEventListener("mousemove", onMouseDrag(container[i]));
//   });
//   document.addEventListener("mouseup", () => {
//     container[i].removeEventListener("mousemove", onMouseDrag(container[i]));
//   });
// }
