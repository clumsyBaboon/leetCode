var binaryGap = function(n) {
    const str = n.toString(2);
    if (str.indexOf("1") === str.lastIndexOf("1")) return 0;
    let start = str.indexOf("1");
    let record = 0;
    for (let i = start + 1; i < str.length; i++) {
        if (str[i] === "1") {
            if (record < i - start) record = i - start;
            start = i;
        }
    }
    return record;
};


// =========
const n = 22; // 10110
console.log(binaryGap(n));