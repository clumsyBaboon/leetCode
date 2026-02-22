var containsDuplicate = function(nums) {
    const uniqElem = new Set(nums);
    return uniqElem.size != nums.length;
};

// ========
const nums = [1, 2, 3, 3];
console.log(containsDuplicate(nums));