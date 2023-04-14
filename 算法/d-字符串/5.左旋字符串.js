//左旋字符串，把字符串的前若干字符串转到字符串的尾部
// 输入: s = "abcdefg", k = 2
// 输出: "cdefgab"

// 思路:0-n-1,反转;n-1,length-1，反转;整个字符串再反转
function reverseWord(s, n) {
  let num = s.split("");
  reverse(0, n - 1);
  reverse(n, num.length - 1);
  reverse(0, num.length - 1);
  function reverse(i, l) {
    while (i < l) {
      [num[l], num[i]] = [num[i], num[l]];
      i++;
      l--;
    }
  }
  return num.join("");
}

console.log(reverseWord("hello", 2));
