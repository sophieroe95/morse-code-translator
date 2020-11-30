import morseCode from "./morseCode.js"

const textToMorse = (textInput) => {
    let inputText = textInput.toLowerCase();
    const morseCodeArray = [];
    if (textInput.length === 0) {
        return "please write a message to translate"
    } else {
        let inputArray = inputText.split('');
        inputArray.forEach(element => {
            if (morseCode.hasOwnProperty(element)) {
                let translation = morseCode[element];
                morseCodeArray.push(translation);
            }
        });
        let translatedText = morseCodeArray.join(" ");
        return translatedText;
    }
}

export default textToMorse;