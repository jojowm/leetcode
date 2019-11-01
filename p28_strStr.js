/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (!needle) {
        return 0
    }
    let haystackLen = haystack.length
    let needleLen = needle.length
    for(let i = 0; i < haystackLen - needleLen + 1; ++i) {
        if(haystack.substring(i, i + needleLen) == needle) {
            return i
            break
        }
    }
    return -1
};

console.log(strStr('baaaa', 'aa'))