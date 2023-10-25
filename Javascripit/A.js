function reverseWordsInSentence(sentence) {
    const words = sentence.split(" ");
    const reversedWords = [];

    for (const word of words) {
        const reversedWord = reverseWord(word);
        reversedWords.push(reversedWord);
    }

    const reversedSentence = reversedWords.join(" ");
    return reversedSentence;
}

function reverseWord(word) {
    const wordArray = word.split("");
    let left = 0;
    let right = wordArray.length - 1;

    while (left < right) {
        const temp = wordArray[left];
        wordArray[left] = wordArray[right];
        wordArray[right] = temp;

        left++;
        right--;
    }

    return wordArray.join("");
}

const sentence = "This is a sunny day";
const reversedSentence = reverseWordsInSentence(sentence);
console.log("Reversed Sentence: " + reversedSentence);
