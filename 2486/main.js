var appendCharacters = function(s, t) {
    let counter = 0;
    let lastS = 0;
    for (let i = 0; i < t.length; i++) {
        if (lastS < s.length) {
            for (let j = lastS; j < s.length; j++) {
                console.log(`i: ${i}, j: ${j}, t[i]: ${t[i]}, s[j]: ${s[j]}`)
                if (t[i] == s[j]) {
                    lastS = j + 1;
                    break;
                }
                if (j == s.length - 1) return t.length - i;
            }
            
        } else {
            counter += t.length - i;
            break;
        }
    }
    return counter;
};

// ========
const s = "a";
const t = "a";

console.log(appendCharacters(s, t));