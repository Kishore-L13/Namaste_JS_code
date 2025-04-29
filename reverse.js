const reverseEachWord = (sentence) => {
    let result = '';
    let word = '';

    for (let i = 0; i < sentence.length; i++) {
        const char = sentence[i];

        if (char !== ' ') {
            word += char; // build the word
        } else {
            // reverse the current word
            for (let j = word.length - 1; j >= 0; j--) {
                result += word[j];
            }
            word = '';          // reset word
            result += ' ';      // preserve the space
        }
    }

    // reverse and add the last word (if any)
    for (let j = word.length - 1; j >= 0; j--) {
        result += word[j];
    }

    return result;
}

console.log(reverseEachWord("Hello   World")); // Output: "olleH   dlroW"
