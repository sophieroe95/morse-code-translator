import textToMorse from "./textToMorse.js";
import morseCode from "./morseCode.js"
import { it } from "@jest/globals";

//valid inputs 
it('should be one', () => {
    expect(1).toBe(1);
});

it('should translate a to .-', () => {
    const result = textToMorse('a');
    expect(result).toBe('.-')
});

it('should translate red deer to .-. . -.. / -.. . . .-.', () => {
    const result = textToMorse('red deer');
    expect(result).toBe('.-. . -.. / -.. . . .-.')
});

//invalid inputs 




//null 
it('should translate no text to input valid text', () => {
    const result = textToMorse('');
    expect(result).toBe('please write a message to translate')
});