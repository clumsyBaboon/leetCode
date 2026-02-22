var convertToTitle = function(columnNumber) {
    let str = [];
    let int = columnNumber;
    while (int > 26) {
        if ((int % 26) == 0) {
            str.unshift(String.fromCharCode(26 + 64));
            int = Math.floor(int / 26) - 1;
        } else {
            str.unshift(String.fromCharCode(int % 26 + 64));
            int = Math.floor(int / 26);
        }
    }
    str.unshift(String.fromCharCode(int + 64));
    return str.join("");
};

// ==========
const columnNumber = 52;
console.log(convertToTitle(columnNumber));