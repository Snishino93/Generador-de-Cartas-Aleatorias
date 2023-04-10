/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const card = generateRandomCard();
  const width = widthInput.value;
  const height = heightInput.value;
  renderCard(card, width, height);

  //Generar carta hacienco click
  newCardBtn.addEventListener("click", () => {
    const card = generateRandomCard();
    const width = widthInput.value;
    const height = heightInput.value;
    renderCard(card, width, height);
  });

  //Generar una nueva carta automáticamente cada 10 segundos
  setInterval(() => {
    const card = generateRandomCard();
    const width = widthInput.value;
    const height = heightInput.value;
    renderCard(card, width, height);
  }, 10000);
};

const cards = document.querySelector(".card");
const newCardBtn = document.getElementById("new-card-btn");
const widthInput = document.getElementById("width-input");
const heightInput = document.getElementById("height-input");

//Definir Arrays
const suits = ["heart", "spade", "club", "diamond"];
const values = [
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

//Genera carta aleatoria
function generateRandomCard() {
  const suit = suits[Math.floor(Math.random() * suits.length)];
  const value = values[Math.floor(Math.random() * values.length)];
  return { suit, value };
}

//Mostrar carta
function renderCard(card, width, height) {
  cards.className = `card ${card.suit}`;
  cards.style.width = `${width}px`;
  cards.style.height = `${height}px`;
  cards.innerHTML = `<div class="number">${card.value.toUpperCase()}</div>`;
}
