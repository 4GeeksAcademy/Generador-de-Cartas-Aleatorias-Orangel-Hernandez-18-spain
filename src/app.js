/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
//variables
const iconUp = document.querySelector("#iconUp");
const cardValue = document.querySelector("#cardValue");
const iconDown = document.querySelector("#iconDown");
const numeroIconos = ["♦", "♥", "♠", "♣"];
const numeroCarta = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];

function valorCarta() {
  let indexNumero = Math.floor(Math.random() * numeroCarta.length);
  return numeroCarta[indexNumero];
}
function valorIconos() {
  let indexIconos = Math.floor(Math.random() * numeroIconos.length);
  return numeroIconos[indexIconos];
}
function coloresIconos(icono) {
  if (icono === "♦" || icono === "♥") {
    iconUp.classList.add("red");
    iconDown.classList.add("red");
    cardValue.classList.add("red");
  } else {
    iconUp.classList.add("black");
    iconDown.classList.add("black");
    cardValue.classList.add("black");
  }
}
window.onload = function() {
  const randomCardValue = valorCarta();
  const randomIcon = valorIconos();

  cardValue.innerHTML = randomCardValue;
  iconUp.innerHTML = randomIcon;
  iconDown.innerHTML = randomIcon;

  coloresIconos(randomIcon);
};
