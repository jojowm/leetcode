/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    // if (s === '') {
    //     return 0
    // } else {
        return s.trim().split(' ').slice(-1)[0].length
    // }
};

console.log(lengthOfLastWord(" "))