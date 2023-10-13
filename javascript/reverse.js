function revSent(sentence) {
    const words = sentence.split(' ');
    const reversedWords = words.map(word => revWord(word));
    const reversedSentence = reversedWords.join(' ');
    return reversedSentence;
}

function revWord(word) {
    return word.split('').reverse().join('');
}

const inputSentence = "This is a sunny day";

const reversedSentence = revSent(inputSentence);

console.log(reversedSentence);