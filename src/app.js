/* eslint-disable */
//import "bootstrap";
//import "./style.css";

//import "./assets/img/rigo-baby.jpg";
//import "./assets/img/4geeks.ico";

function newCard() {
  let suits = ["♦", "♥", "♠", "♣"];
  let numbers = [
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
    "K",
  ];

  //Indices aleatorios
  let indexSuits = Math.floor(Math.random() * suits.length);
  let indexNumbers = Math.floor(Math.random() * numbers.length);

  let superiorCard = document.querySelector("#superiorCard");
  let inferiorCard = document.querySelector("#inferiorCard");
  let number = document.querySelector("#number");

  superiorCard.innerHTML = suits[indexSuits];
  inferiorCard.innerHTML = suits[indexSuits];
  number.innerHTML = numbers[indexNumbers];

  let changeClass = //clases para los colores
    suits[indexSuits] == "♦" || suits[indexSuits] == "♥"
      ? "text-danger"
      : "text-dark";
  superiorCard.className = changeClass;
  inferiorCard.className = changeClass;
  number.className = changeClass;
}
window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  newCard();
};

let btnGenerateNewCard = document.querySelector("#btnGenerateNewCard");
btnGenerateNewCard.addEventListener("click", () => newCard());
