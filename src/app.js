/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let icons = ["♦", "♥", "♠", "♣"];

function generateCard() {
  let num = Math.floor(Math.random() * 10) + 1;
  let icon = icons[Math.floor(Math.random() * icons.length)];
  let carta = document.getElementById("carta");

  let color = (icon === "♦" || icon === "♥") ? "red" : "black";

  carta.innerHTML = `
  <div class="icon-right" style ="color: ${color}">${icon}</div>
  <div class="num">${num}</div>
  <div class="icon-left" style ="color: ${color}">${icon}</div>
  `;
}

window.onload = generateCard();
setInterval(generateCard, 1000);

let button = document.getElementById("boton");
button.addEventListener("click", generateCard);