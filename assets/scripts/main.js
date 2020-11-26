import data from "./data.js"

let input = document.querySelector('#input');
let output = document.querySelector('#output');
let submit = document.querySelector('#submit');
let arrow = document.querySelector("i");
let label1 = document.querySelector("#label-1");
let label2 = document.querySelector("#label-2");
const refreshButton = document.querySelector('#refresh-button')

arrow.addEventListener('click', () => {
    label1.classList.toggle("arrowToggle");
    arrow.classList.toggle("red");
})

submit.addEventListener('click', () => {
    if (label1.classList.contains("arrowToggle")) {
        morseToText()
    } else {
        textToMorse();
    }
})

refreshButton.addEventListener('click', () => {
    location.reload();
});

const textToMorse = () => {
    const morseCodeArray = [];
    const inputArray = input.value.split('');
    console.log(inputArray);
    inputArray.forEach(element => {
        if (morseCode.hasOwnProperty(element)) {
            let translation = morseCode[element];
            morseCodeArray.push(translation);
        };
        const translatedCode = morseCodeArray.join(" ");
        output.value = translatedCode;
    });
}

const morseToText = () => {
    const alphabetArray = [];
    const inputArray = input.value.split(' ');
    console.log(inputArray);
    inputArray.forEach(element => {
        if (alphabet.hasOwnProperty(element)) {
            let translation = alphabet[element];
            alphabetArray.push(translation);
        };
        const translatedCode = alphabetArray.join("");
        console.log(translatedCode);
        output.value = translatedCode;

    });
}