/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    if (nums.length === 0) return 0;

    const maxVal = Math.max(...nums);
    let maxLen = 0;
    let curLen = 0;

    for (let num of nums) {
        if (num === maxVal) {
            curLen++;
            maxLen = Math.max(maxLen, curLen);
        } else {
            curLen = 0; // reset on mismatch
        }
    }

    return maxLen;
};