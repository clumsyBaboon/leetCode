var isAnagram = function(s, t) {
    const sStrLetters = [];
    for (let i = 97; i <= 122; i++) {
        sStrLetters[i - 97] = calcLettersInStr(s, String.fromCharCode(i));
    }
    const tStrLetters = [];
    for (let i = 97; i <= 122; i++) {
        tStrLetters[i - 97] = calcLettersInStr(t, String.fromCharCode(i));
    }
    return JSON.stringify(sStrLetters) == JSON.stringify(tStrLetters);
};

function calcLettersInStr(str, letter) {
    let counter = 0;
    for (let i = 0; i < str.length; i++) if (str[i] === letter) counter++;
    return counter;
}

// ======
const s = "anagram";
const t = "nagaram";

console.log(isAnagram(s, t));