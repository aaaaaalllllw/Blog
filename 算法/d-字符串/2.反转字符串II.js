//反转字符串
//给定一个字符串和一个整数，从字符串开头算起，
//每计数至2k个字符，就反装这个2k字符中前k个字符
//如果剩余字符串少于k个，则将剩余字符全部反转
//如果剩余字符小于2k但大于或等于k个，则反转前k个字符，其余字符串保持原样
//输入:s="abcdefg",k=2 输出:"bacdfeg"

//每次i移动2k，然后算好要反转的区间，就是要判断剩余字符
function reverse(s, k) {
  s = s.split("");
  for (let i = 0; i < s.length; i += 2 * k) {
    //i+k>len，不足k就翻转[i,length-1]
    //i+k<len,就反转长度k,[i,i+k]
    let r = i + k > s.length ? s.length - 1 : i + k - 1;
    let l = i;
    while (l < r) {
      [s[l], s[r]] = [s[r], s[l]];
      l++;
      r--;
    }
  }
  return s.join("");
}
