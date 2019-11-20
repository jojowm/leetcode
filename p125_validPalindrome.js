/**
 * @param {string} s
 * @return {boolean}
 */
// var isPalindrome = function(s) {
//   function formatStr(s) {
//     return s.replace(/[\@\#\$\%\^\&\*\(\)\{\}\:\"\<\>\?\[\]\,\.\-\?\'\"\\\/\b\f\n\r\t\;\!\~\`]/g, '').split(' ').join('').toLowerCase();
//   }
//   var res;
//   if (s.length === 1 || s.length === 0) return true;
//   var formattedStr = formatStr(s);
//   if (formattedStr.length % 2 === 0) {
//     for(var i = 0; i < (formattedStr.length / 2); i++) {
//       if (formattedStr[i] !== formattedStr[formattedStr.length - i - 1]) {
//         res = false;
//         return res;
//       }
//     }
//   } else {
//     for(var i = 0; i < (Math.floor(formattedStr.length / 2)); i++) {
//       if (formattedStr[i] !== formattedStr[formattedStr.length - i - 1]) {
//         res = false;
//         return res;
//       }
//     }
//   }
//   return true
// };
// 更好的解法
var isPalindrome = function(s) {
  // s = s.replace(/[^\w]/g, '').toLowerCase()
  // 题目要求只考虑字母和数字字符，所以上面的写法也没啥问题
  s = s.replace(/[^0-9a-zA-Z]/g, '').toLowerCase()
  let left = 0;
  let right = s.length - 1;

  while(left < right) {
      if(s[left] != s[right]) {
         return false 
      }
      left++
      right--
  }
  return true
};

// console.log(isPalindrome('A man, a plan, a canal: Panama'))
// console.log(isPalindrome('race a car'))
console.log(isPalindrome("Live on evasions? No, I save no evil."))