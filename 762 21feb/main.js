const left = 6;
const right = 10;
// ===========================

const primeNumbers = [2, 3, 5, 7, 11, 13, 17, 19];
var countPrimeSetBits = function(left, right) {
    let counter = 0;
    for (let i = left; i <= right; i++) {
        const iToStr = i.toString(2);
        const iToStrNumberOfSetBits = calcOnes(iToStr);
        const isPrime = primeNumbers.includes(iToStrNumberOfSetBits);
        if (isPrime) counter++;
    }
    return counter;
};
function calcOnes(arr) {
    let counter = 0;
    for (let i = 0; i < arr.length; i++) if (arr[i] === "1") counter++;
    return counter
}

// ===========================
console.log(countPrimeSetBits(left, right))