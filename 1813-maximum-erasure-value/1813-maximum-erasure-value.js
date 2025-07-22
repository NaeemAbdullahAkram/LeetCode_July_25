
var maximumUniqueSubarray = function(nums) {
  let seen = new Set();
  let maxSum = 0, currSum = 0;
  let left = 0;
  
  for (let right = 0; right < nums.length; right++) {
    while (seen.has(nums[right])) {
      seen.delete(nums[left]);
      currSum -= nums[left];
      left++;
    }
    
    seen.add(nums[right]);
    currSum += nums[right];
    
    if (currSum > maxSum) maxSum = currSum;
  }
  
  return maxSum;
};