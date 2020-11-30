"use strict";

var _textToMorse = _interopRequireDefault(require("./textToMorse.js"));

var _morseCode = _interopRequireDefault(require("./morseCode.js"));

var _globals = require("@jest/globals");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//valid inputs 
(0, _globals.it)('should be one', function () {
  expect(1).toBe(1);
});
(0, _globals.it)('should translate a to .-', function () {
  var result = (0, _textToMorse["default"])('a');
  expect(result).toBe('.-');
});
(0, _globals.it)('should translate red deer to .-. . -.. / -.. . . .-.', function () {
  var result = (0, _textToMorse["default"])('red deer');
  expect(result).toBe('.-. . -.. / -.. . . .-.');
}); //invalid inputs 
//null 

(0, _globals.it)('should translate no text to input valid text', function () {
  var result = (0, _textToMorse["default"])('');
  expect(result).toBe('please write a message to translate');
});