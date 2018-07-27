/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if(n===1) return 1
    if(n===2) return 2
    // y(n) = y(n-1) + y(n-2)
    let y1 = 1
    let y2 = 2

    // y3 = y1 + y2
    let y3

    for(let i = 2; i < n; i++) {
        y3 = y1 + y2
        y1 = y2
        y2 = y3
    }
    return y3
};