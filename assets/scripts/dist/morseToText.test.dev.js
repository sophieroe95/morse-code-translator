"use strict";

var _morseToText = _interopRequireDefault(require("./morseToText.js"));

var _alphabet = _interopRequireDefault(require("./alphabet.js"));

var _globals = require("@jest/globals");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//valid inputs 
(0, _globals.it)('should be one', function () {
  (0, _globals.expect)(1).toBe(1);
});
(0, _globals.it)('should translate .- to a', function () {
  var result = (0, _morseToText["default"])('.-');
  (0, _globals.expect)(result).toBe('a');
});
(0, _globals.it)('should translate .-. . -.. / -.. . . .-. to red deer', function () {
  var result = (0, _morseToText["default"])('.-. . -.. / -.. . . .-.');
  (0, _globals.expect)(result).toBe('red deer');
}); //invalid inputs
//null inputs

(0, _globals.it)('should translate no text to input valid text', function () {
  var result = (0, _morseToText["default"])('');
  (0, _globals.expect)(result).toBe('please write a message to translate');
});