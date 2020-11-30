"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _alphabet = _interopRequireDefault(require("./alphabet.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var morseToText = function morseToText(morseInput) {
  var inputText = morseInput.toLowerCase();
  var alphabetArray = [];

  if (morseInput.length === 0) {
    return "please write a message to translate";
  } else {
    var inputArray = inputText.split(' ');
    inputArray.forEach(function (element) {
      if (_alphabet["default"].hasOwnProperty(element)) {
        var translation = _alphabet["default"][element];
        alphabetArray.push(translation);
      }

      ;
    });
    var translatedText = alphabetArray.join("");
    return translatedText;
  }
};

var _default = morseToText;
exports["default"] = _default;