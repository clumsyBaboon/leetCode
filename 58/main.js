var lengthOfLastWord = function(s) {
    let start = null;
    let finish = 0;
    for (let i = s.length - 1; i >= 0; i--) {
        if (start === null) {
            if (s[i] != " ") start = i + 1;
        } else {
            if (s[i] == " ") {
                finish = i + 1;
                break;
            }
        }
    }
    return s.slice(finish, start).length
};

// =========
const s = "a"
console.log(lengthOfLastWord(s));