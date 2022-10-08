/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "👑", "👸", "A"];
  let palos = ["♦", "♥", "♠", "♣"];

  const getARandomFromAnyArray = array => {
    const positionRandomInArray = Math.floor(Math.random() * array.length);
    const valueRandomInArray = array[positionRandomInArray];
    return valueRandomInArray;
  };

  const h1Numbers = document.querySelector("#numberOfCard");
  const h1Palos = document.querySelector(".paloOfCard");
  const h1Palos2 = document.querySelector(".paloOfCard2");

  h1Numbers.innerHTML = getARandomFromAnyArray(numbers);
  h1Palos.innerHTML = getARandomFromAnyArray(palos);
  h1Palos2.innerHTML = h1Palos.innerHTML;
};
