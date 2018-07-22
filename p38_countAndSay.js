/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    var a = ['1'];
    for (var i = 1; i < n; ++i) {
        a = preStr(a)
    }
    return a.join('')

    function preStr(a) {
        let startIdx = 0
        let endIdx = 0
        let nextArr = []
        while (endIdx < a.length) {
            while(a[startIdx] === a[endIdx] && endIdx < a.length) {
                endIdx++
                console.log(endIdx)
            }
            let num = endIdx - startIdx
            console.log(num)
            nextArr.push(num.toString())
            nextArr.push(a[startIdx])
            startIdx = endIdx
        }
        return nextArr
    }
};

console.log(countAndSay(1))