
var kthCharacter = function(k) {
    function helper(word, k) {
        if (word.length >= k) {
            return word[k - 1];
        }
        let newWord = word;
        for (let i = 0; i < word.length; i++) {
            newWord += String.fromCharCode(word.charCodeAt(i) + 1);
        }
        return helper(newWord, k);
    }

    return helper("a", k);
};