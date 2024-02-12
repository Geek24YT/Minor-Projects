// const btn = document.getElementsByClassName("btn")[0];
// const body = document.getElementsByTagName("body")[0];

const btn = document.querySelector(".btn");
const body = document.querySelector("body");

// console.log(document.querySelectorAll(".btn")[0]);

let colors = ["#512B81", "#4477CE", "#8CABFF", "#535C91", "#9290C3"];

body.style.backgroundColor = "#35155D";

let counter = 0;

const setColor = () => {
  body.style.background = colors[counter % colors.length];
  //   body.style.backgroundColor =
  //     colors[Math.floor(Math.random() * colors.length)];
  counter++;
};

btn.addEventListener("click", setColor);
