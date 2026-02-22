// const s = "110110001111000010";
const s = "11011000"

var makeLargestSpecial = function(s) {    
    return divide(s);
};

function divide(str) {
    let group = [];
    let curentStart = 0;
    let counter = 0;
    
    for (let i = 0; i < str.length; i++) {
        counter += (str[i] === "1") ? 1 : -1;
        
        if (counter == 0) {
            group.push("1" + divide(str.slice(curentStart, i + 1).slice(1, -1)) + "0");
            curentStart = i + 1;
        }
    }
    console.log(group);
    return group.sort((a, b) => b.localeCompare(a)).join("");
}

console.log(makeLargestSpecial(s));