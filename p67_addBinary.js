/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let arrA = a.split('')
    let arrB = b.split('')
    let len = arrA.length < arrB.length ? arrB.length : arrA.length
    let c = 0
    let result = ''

    for(let i = len - 1; i >= 0 || c > 0; i--) {
        
        let curA = arrA.pop()
        let curB = arrB.pop()

        if(curA) {
            c += parseInt(curA)
        }
        if(curB) {
            c += parseInt(curB)
        }
        result = (c % 2) + result
        c = c > 1 ? 1 : 0
    }
    return result
};

console.log(addBinary('1010', '1011'))