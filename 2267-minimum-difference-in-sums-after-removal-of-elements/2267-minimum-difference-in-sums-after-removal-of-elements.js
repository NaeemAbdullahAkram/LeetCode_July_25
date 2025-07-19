/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumDifference = function(nums) {
    const total = nums.length;
    const n = total / 3;
    
    const maxHeap = new PriorityQueue((a,b) => a < b ? 1 : -1)
    const leftDP = new Array(n).fill(Infinity)
    let minLeftSum = 0
    for(let i = 0; i < n*2; i++) {
        const num = nums[i]
        minLeftSum += num;
        maxHeap.enqueue(num)

        if(maxHeap.size() > n) {
            minLeftSum -= maxHeap.dequeue();
        }

        if(maxHeap.size() === n) {
            leftDP[i+1-n] = minLeftSum
        }
    }

    const minHeap = new PriorityQueue((a,b) => a > b ? 1 : -1)
    const rightDP = new Array(n).fill(Infinity)
    let maxRightSum = 0
    for(let i = total - 1; i > n -1; i--) {
        const num = nums[i]
        maxRightSum += num;
        minHeap.enqueue(num)

        if(minHeap.size() > n) {
            maxRightSum -= minHeap.dequeue();
        }

        if(minHeap.size() === n) {
            rightDP[i-n] = maxRightSum
        }
    }

    let minDiff = Infinity;

    for(let i = 0; i <= n; i++) {
        minDiff = Math.min(minDiff, leftDP[i] - rightDP[i])
    }
    
    return minDiff;
};