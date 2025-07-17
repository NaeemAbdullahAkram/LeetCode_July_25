function maximumLength(nums, k) {
  const n = nums.length;
  const dp = Array.from({ length: n }, () => Array(k).fill(0));
  let longest = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      const mod = (nums[i] + nums[j]) % k;
      dp[i][mod] = dp[j][mod] + 1;
      if (dp[i][mod] > longest) longest = dp[i][mod];
    }
  }

  return longest + 1;
}