/**
 * @param {string} word
 * @return {boolean}
 */
var isValid = function(word) {
    if(word.length<3)return false
    let vow = ['A','E','I','O','U','a', 'e', 'i', 'o', 'u']
    let regex=/^[A-Za-z0-9]*$/
    let letters = word.match(/[A-Za-z]+/g)?.join('')
    if(!letters)return false
    let v=false
    let c=false
    for(let ch of letters){
        if(vow.includes(ch)){
            v=true
        }else{
            c=true
        }
    }
    return regex.test(word)&&v&&c
};