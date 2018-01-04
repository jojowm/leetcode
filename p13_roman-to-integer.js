var romanToInt = function(s) {
    var map = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    var result = 0;
    var arr = s.split('');
    var pre = map[arr[0]];
    var cur;

    if(s.length <= 0) {
        return result;
    } else {
        result = pre;
        for (var i = 1; i < s.length; i++) {
            cur = map[arr[i]];
            if (cur <= pre) {
                result += cur;
            } else {
                result = result - 2 * pre + cur;
            }
            pre = cur;
        }
        return result;
    }
};
romanToInt('MCMXCVI')