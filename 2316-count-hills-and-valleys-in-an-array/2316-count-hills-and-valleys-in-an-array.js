var countHillValley = function(nums) {
    let last = nums[0];
    let count = 0;
    let maxi = nums.length - 1;
    for (let i = 1; i < maxi; i++)
        if (nums[i] == nums[i + 1]) continue;
        else if ((nums[i + 1] > nums[i] && last > nums[i]) || (nums[i + 1] < nums[i] && last < nums[i])) {
            count++;
            last = nums[i];
        }
    return count;
};