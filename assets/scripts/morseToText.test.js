import morseToText from "./morseToText.js";
import alphabet from "./alphabet.js"
import { expect, it } from "@jest/globals";

//valid inputs 
it('should be one', () => {
    expect(1).toBe(1);
});

it('should translate .- to a', () => {
    const result = morseToText('.-');
    expect(result).toBe('a')
});

it('should translate .-. . -.. / -.. . . .-. to red deer', () => {
    const result = morseToText('.-. . -.. / -.. . . .-.');
    expect(result).toBe('red deer')
});

//invalid inputs

//null inputs
it('should translate no text to input valid text', () => {
    const result = morseToText('');
    expect(result).toBe('please write a message to translate')
});