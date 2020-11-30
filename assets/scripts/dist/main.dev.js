"use strict";

var _textToMorse = _interopRequireDefault(require("./textToMorse.js"));

var _morseToText = _interopRequireDefault(require("./morseToText.js"));

var _morseCode = _interopRequireDefault(require("./morseCode.js"));

var _alphabet = _interopRequireDefault(require("./alphabet.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var submit = document.querySelector('#submit');
var arrow = document.querySelector("i");
var label1 = document.querySelector("#label-1");
;
var refreshButton = document.querySelector('#refresh-button');
arrow.addEventListener('click', function () {
  label1.classList.toggle("arrowToggle");
  arrow.classList.toggle("red");
});
submit.addEventListener('click', function () {
  if (label1.classList.contains("arrowToggle")) {
    var morseInput = document.querySelector("#input");
    var translatedMorse = (0, _morseToText["default"])(morseInput.value);
    document.querySelector("#output").innerHTML = translatedMorse;
  } else {
    var textInput = document.querySelector("#input");
    var translatedText = (0, _textToMorse["default"])(textInput.value);
    document.querySelector("#output").innerHTML = translatedText;
  }
});
refreshButton.addEventListener('click', function () {
  location.reload();
});