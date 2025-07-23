var maximumGain = function (s, x, y) {
    const points = {
        'ab': x,
        'ba': y,
    };

    const [minSub, maxSub] = x > y ? ['ba', 'ab'] : ['ab', 'ba'];
    const minStack = [];
    const maxStack = [];

    let maxSum = 0;

    for (let char of s) {
        const lastTwo = maxStack.at(-1) + char;

        if (lastTwo === maxSub) {
            maxSum += points[maxSub];
            maxStack.pop();
        } else {
            maxStack.push(char);
        }
    }

    for (let char of maxStack) {
        const lastTwo = minStack.at(-1) + char;

        if (lastTwo === minSub) {
            maxSum += points[minSub];
            minStack.pop();
        } else {
            minStack.push(char);
        }
    }
    return maxSum;
};