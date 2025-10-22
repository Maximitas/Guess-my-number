"use strict";

window.addEventListener("DOMContentLoaded", main);

let currentGuess;

function main() {
    console.log("Js kører!");

    document.querySelector("#btn_guess_to_low").addEventListener("click", tooLow);
    document.querySelector("#btn_guess_to_high").addEventListener("click", tooHigh);
    document.querySelector("#btn_guess_correct").addEventListener("click", correct);

    makeGuess();
}

function makeGuess() {
  currentGuess = Math.floor(Math.random() * 100) + 1;
  document.querySelector("#guesses").insertAdjacentHTML( "beforeend",`<li>Mit gæt er ${currentGuess}</li>`
    );
}


function tooLow() {
  document.querySelector("#guesses").insertAdjacentHTML("beforeend",`<li>${currentGuess} var for lavt</li>`
  );
  makeGuess();
}

function tooHigh() {
  document.querySelector("#guesses").insertAdjacentHTML("beforeend",`<li>${currentGuess} var for højt</li>`
  );
  makeGuess();
}

function correct() {
  document.querySelector("#guesses").insertAdjacentHTML("beforeend",`<li>${currentGuess} var korrekt!</li>`
  );

}
