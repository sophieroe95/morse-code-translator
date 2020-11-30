import textToMorse from "./textToMorse.js";
import morseToText from "./morseToText.js";
import morseCode from "./morseCode.js";
import alphabet from "./alphabet.js";

let submit = document.querySelector('#submit');
let arrow = document.querySelector("i");
let label1 = document.querySelector("#label-1");;
const refreshButton = document.querySelector('#refresh-button')

arrow.addEventListener('click', () => {
    label1.classList.toggle("arrowToggle");
    arrow.classList.toggle("red");
})

submit.addEventListener('click', () => {
    if (label1.classList.contains("arrowToggle")) {
        const morseInput = document.querySelector("#input");
        const translatedMorse = morseToText(morseInput.value);
        document.querySelector("#output").innerHTML = translatedMorse;
    } else {
        let textInput = document.querySelector("#input");
        let translatedText = textToMorse(textInput.value);
        document.querySelector("#output").innerHTML = translatedText;
    }
})

refreshButton.addEventListener('click', () => {
    location.reload();
});