"use strict";

var _data = _interopRequireDefault(require("./data.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var input = document.querySelector('#input');
var output = document.querySelector('#output');
var submit = document.querySelector('#submit');
var arrow = document.querySelector("i");
var label1 = document.querySelector("#label-1");
var label2 = document.querySelector("#label-2");
var refreshButton = document.querySelector('#refresh-button');
arrow.addEventListener('click', function () {
  label1.classList.toggle("arrowToggle");
  arrow.classList.toggle("red");
});
submit.addEventListener('click', function () {
  if (label1.classList.contains("arrowToggle")) {
    morseToText();
  } else {
    textToMorse();
  }
});
refreshButton.addEventListener('click', function () {
  location.reload();
});

var textToMorse = function textToMorse() {
  var morseCodeArray = [];
  var inputArray = input.value.split('');
  console.log(inputArray);
  inputArray.forEach(function (element) {
    if (morseCode.hasOwnProperty(element)) {
      var translation = morseCode[element];
      morseCodeArray.push(translation);
    }

    ;
    var translatedCode = morseCodeArray.join(" ");
    output.value = translatedCode;
  });
};

var morseToText = function morseToText() {
  var alphabetArray = [];
  var inputArray = input.value.split(' ');
  console.log(inputArray);
  inputArray.forEach(function (element) {
    if (alphabet.hasOwnProperty(element)) {
      var translation = alphabet[element];
      alphabetArray.push(translation);
    }

    ;
    var translatedCode = alphabetArray.join("");
    console.log(translatedCode);
    output.value = translatedCode;
  });
};