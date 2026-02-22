var getConcatenation = function(nums) {
    let ans = [...nums];
    for (let i = 0; i < nums.length; i++) ans.push(nums[i]);
    return ans;
    // return [...nums, ...nums]
};

// ===========
const nums = [1, 2, 1];
console.log(getConcatenation(nums))