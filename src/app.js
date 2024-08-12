/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let icons = ["♦", "♥", "♠", "♣"];

function generateCard() {
  let numbers = Math.floor(Math.random() * 10) + 1;
  let icon = icons[Math.floor(Math.random() * icons.length)];
  let carta = document.getElementById("carta");
}
