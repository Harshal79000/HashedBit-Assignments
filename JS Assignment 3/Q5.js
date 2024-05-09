function correctfn(sentence, wrongWord, correctWord) {
    const regex = new RegExp('\\b' + wrongWord + '\\b', 'gi');
    const correctedSentence = sentence.replace(regex, correctWord);
    return correctedSentence;
}

const sentence = "The qick brown fox jumps over the lazy dog.";
const wrongWord = "qick";
const correctWord = "quick";

const correctedSentence = correctfn(sentence, wrongWord, correctWord);
console.log(correctedSentence);
