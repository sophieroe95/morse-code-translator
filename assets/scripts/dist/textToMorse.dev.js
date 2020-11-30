"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _morseCode = _interopRequireDefault(require("./morseCode.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var textToMorse = function textToMorse(textInput) {
  var inputText = textInput.toLowerCase();
  var morseCodeArray = [];

  if (textInput.length === 0) {
    return "please write a message to translate";
  } else {
    var inputArray = inputText.split('');
    inputArray.forEach(function (element) {
      if (_morseCode["default"].hasOwnProperty(element)) {
        var translation = _morseCode["default"][element];
        morseCodeArray.push(translation);
      }
    });
    var translatedText = morseCodeArray.join(" ");
    return translatedText;
  }
};

var _default = textToMorse;
exports["default"] = _default;