var hasAllCodes = function(s, k) {
    const subStr = new Set();
    const amount = Math.pow(2, k);

    for (let i = 0; i <= s.length - k; i++) {
        const str = s.slice(i, i + k);
        subStr.add(str);

        // if (subStr.size === amount) return true;
    }
    console.log(subStr);
    return subStr.size === amount;
};

// =============

const s = "00110";
const k = 2;

console.log(hasAllCodes(s, k));