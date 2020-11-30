import alphabet from "./alphabet.js"

const morseToText = (morseInput) => {
    let inputText = morseInput.toLowerCase();
    const alphabetArray = [];
    if (morseInput.length === 0) {
        return "please write a message to translate"
    } else {
        let inputArray = inputText.split(' ');
        inputArray.forEach(element => {
            if (alphabet.hasOwnProperty(element)) {
                let translation = alphabet[element];
                alphabetArray.push(translation);
            };
        });
        let translatedText = alphabetArray.join("");
        return translatedText;
    }
}

export default morseToText;