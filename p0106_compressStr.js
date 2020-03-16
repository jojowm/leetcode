/**
 * @param {string} S
 * @return {string}
 */
var compressString = function(S) {
  if (!S) return S;
  const res = [tmp];
  let tmp = S[0];
  let count = 1;
  for(var i = 1; i < S.length; i++) {
    if (tmp === S[i]) {
      count++;
    } else {
      tmp = S[i];
      res.push(count, S[i]);
      count = 1;
    }
  }
  res.push(count)

  if (res.length < S.length) {
    return res.join('');
  } else {
    return S
  }
}

// console.log(compressString('aabcccccaaa'))
console.log(compressString('UUUHHHLczrrrRRvvwwE'))