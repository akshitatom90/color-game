// "use strict";

// // const maincontainer=document.querySelector(".main-container");
// // const container= document.querySelector("con")
const body = document.querySelector("body");
// const yellowcolor = document.querySelector(".yellow");
// const orangecolor = document.querySelector(".orange");
// const redcolor = document.querySelector(".red");
// const purplecolor = document.querySelector(".purple");
// const browncolor = document.querySelector(".brown");
// const pinkcolor = document.querySelector(".pink");
// const bluecolor = document.querySelector(".blue");
// const blackcolor = document.querySelector(".black");
// const greencolor = document.querySelector(".green");

// yellowcolor.addEventListener("click", function () {
//   body.style.background = "yellow";
// });

// redcolor.addEventListener("click", function () {
//   body.style.background = "red";
// });

// bluecolor.addEventListener("click", function () {
//   body.style.background = "blue";
// });

// pinkcolor.addEventListener("click", function () {
//   body.style.background = "pink";
// });

// greencolor.addEventListener("click", function () {
//   body.style.background = "green";
// });

// purplecolor.addEventListener("click", function () {
//   body.style.background = "purple";
// });

// blackcolor.addEventListener("click", function () {
//   body.style.background = "gray";
// });

// orangecolor.addEventListener("click", function () {
//   body.style.background = "orange";
// });

// browncolor.addEventListener("click", function () {
//   body.style.background = "brown";
// });

const containers = document.querySelectorAll(".container");

for (let i = 0; i < containers.length; i++) {
  containers[i].addEventListener("click", function () {
    body.style.background = containers[i].innerText;
  });
}
