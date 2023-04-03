/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const cardEl = document.querySelector(".card");
const newCardBtn = document.getElementById("new-card-btn");
const widthInput = document.getElementById("width-input");
const heightInput = document.getElementById("height-input");

const suits = ["heart", "spade", "club", "diamond"];
const values = [
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
  "K",
  "A"
];

function generateRandomCard() {
  const suit = suits[Math.floor(Math.random() * suits.length)];
  const value = values[Math.floor(Math.random() * values.length)];
  return { suit, value };
}

function renderCard(card, width, height) {
  cardEl.className = `card ${card.suit}`;
  cardEl.style.width = `${width}px`;
  cardEl.style.height = `${height}px`;
  cardEl.innerHTML = `<div class="number">${card.value.toUpperCase()}</div>`;
}

newCardBtn.addEventListener("click", () => {
  const card = generateRandomCard();
  const width = widthInput.value;
  const height = heightInput.value;
  renderCard(card, width, height);
});

//generar una nueva carta automáticamente cada 10 segundos
setInterval(() => {
  const card = generateRandomCard();
  const width = widthInput.value;
  const height = heightInput.value;
  renderCard(card, width, height);
}, 10000);
