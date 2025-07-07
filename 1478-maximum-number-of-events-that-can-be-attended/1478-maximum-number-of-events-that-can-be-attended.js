var maxEvents = function(events) {
  events.sort((a, b) => a[0] - b[0]);

  const minHeap = [];
  let res = 0;
  let day = 1;
  let i = 0;
  const n = events.length;

  const push = (val) => {
    minHeap.push(val);
    let ci = minHeap.length - 1;
    while (ci > 0) {
      let pi = Math.floor((ci - 1) / 2);
      if (minHeap[ci] >= minHeap[pi]) break;
      [minHeap[ci], minHeap[pi]] = [minHeap[pi], minHeap[ci]];
      ci = pi;
    }
  };

  const pop = () => {
    const val = minHeap[0];
    const end = minHeap.pop();
    if (minHeap.length > 0) {
      minHeap[0] = end;
      let i = 0;
      const n = minHeap.length;
      while (true) {
        let left = 2 * i + 1;
        let right = 2 * i + 2;
        let smallest = i;
        if (left < n && minHeap[left] < minHeap[smallest]) smallest = left;
        if (right < n && minHeap[right] < minHeap[smallest]) smallest = right;
        if (smallest === i) break;
        [minHeap[i], minHeap[smallest]] = [minHeap[smallest], minHeap[i]];
        i = smallest;
      }
    }
    return val;
  };

  const peek = () => minHeap[0];
  const size = () => minHeap.length;

  while (i < n || size() > 0) {
    while (i < n && events[i][0] === day) {
      push(events[i][1]);
      i++;
    }

    while (size() > 0 && peek() < day) {
      pop();
    }

    if (size() > 0) {
      pop();
      res++;
    }

    day++;
  }

  return res;
};