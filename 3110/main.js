var scoreOfString = function(s) {
    let counter = 0;
    for (let i = 1; i < s.length; i++) counter += Math.abs(s.codePointAt(i - 1) - s.codePointAt(i));
    return counter;
};

// ================ codePointAt(index)
const s = "hello";
console.log(scoreOfString(s));