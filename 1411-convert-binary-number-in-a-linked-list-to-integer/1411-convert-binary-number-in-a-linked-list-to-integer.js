var getDecimalValue = function(head) {
    let result = 0;
    while (head !== null) {
        result = (result << 1) | head.val;
        head = head.next;
    }
    return result;
};