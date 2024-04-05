// let colors = ["red", "blue", "green", "orange", "purple", "black", "yellow"];
// let button = document.getElementsByClassName("btn");

// button.addEventListener("click", function () {
//   let index = parseInt(Math.random() * colors.length + 1);
//   let box = document.getElementsByClassName("box");
//   box.style.background = `${colors[index]}`;
// });
let colors = ["red", "blue", "green", "orange", "purple", "black", "yellow"];
let buttons = document.getElementsByClassName("btn");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    let index = parseInt(Math.random() * colors.length);
    let boxes = document.getElementsByClassName("box");
    for (let j = 0; j < boxes.length; j++) {
      boxes[j].style.background = colors[index];
    }
  });
}
