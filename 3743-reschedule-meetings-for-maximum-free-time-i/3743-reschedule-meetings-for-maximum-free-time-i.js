var maxFreeTime = function (eventTime, k, startTime, endTime) {
  const tuples = [];
  for (let i = 0; i < startTime.length; i++) {
    tuples.push([startTime[i], endTime[i]]);
  }
  tuples.sort(customSort);
  if (tuples.at(0)[0] !== 0) tuples.unshift([0, 0]);
  if (tuples.at(-1)[1] !== eventTime) tuples.push([eventTime, eventTime]);

  const gaps = [];
  for (let i = 1; i < tuples.length; i++) {
    const gap = tuples[i][0] - tuples[i - 1][1];
    gaps.push(gap);
  }

  let ans = 0;
  let start = 0;
  let sum = 0;
  for (let end = 0; end < gaps.length; end++) {
    sum += gaps[end];
    if (end - start + 1 > k + 1) {
      sum -= gaps[start++];
    }
    ans = Math.max(ans, sum);
  }

  return ans;
};

function customSort(a, b) {
  if (a[0] !== b[0]) {
    return a[0] - b[0];
  }
  return a[1] - b[1];
}