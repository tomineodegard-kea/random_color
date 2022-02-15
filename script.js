"use strict";

window.addEventListener("DOMContentLoaded", randomBackground);

// ---- A function that sets the background to a random color ----
function randomBackground() {
  let randomColorReturn = randomColor;
  let rgbObject = rgbToCSS(randomColorReturn);

  let bodyColor = document.querySelector("#body");
  bodyColor.style.backgroundColor = rgbObject;
}

// ---- A function that returns a random rgb color object ----
function randomColor() {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);

  let rgbValues = { r, g, b };
  return rgbValues;

  //   rgbToCSS(rgb);
}
// ---- A function that converts a rgb color object into a CSS color string ----
function rgbToCSS(rgb) {
  let rgbRetun = randomColor();
  let cssColor = `rgb(${rgbRetun.r}, ${rgbRetun.g}, ${rgbRetun.b})`;
  console.log(`The rgb value: ${cssColor}`);
  return cssColor;
}
