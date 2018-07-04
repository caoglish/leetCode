var uniqueMorseRepresentations = function (words) {
    const morseCode = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."]
    const codeOffset = "a".charCodeAt(0);

    let morseCodeList = words.map((word) => {
        return word.split("").map((v) => {
            return morseCode[v.charCodeAt(0) - codeOffset]
        }).join("");
    });

    const morseSet = new Set(morseCodeList);

    return morseSet.size;
};


module.exports = uniqueMorseRepresentations;