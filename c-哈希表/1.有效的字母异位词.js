// 有效的字母异位词
// 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。
// 示例 1: 输入: s = "anagram", t = "nagaram" 输出: true
// 示例 2: 输入: s = "rat", t = "car" 输出: false
// 说明: 你可以假设字符串只包含小写字母。

//用个map记录s每个字母出现的概率，用map去t对应，对应到数量-1
//最后判断map所有value是否等于0，是0返回ture，不是返回false

function isAnagram(s, t) {
  if (s.length != t.length) return false;
  let map = new Map();
  for (let i = 0; i < s.length; i++) {
    let val = map[s[i]];
    // val为undefined时，表示未存储，map[item] = 1；否则map[item] = val + 1
    map[s[i]] = val ? val + 1 : 1;
  }
  for (let i = 0; i < t.length; i++) {
    //这个判断有问题
    if (map[t[i]]) {
      map[t[i]] = --map[t[i]];
    } else {
      return false;
    }
  }
  for (let item of map.values()) {
    if (item != 0) {
      return false;
    }
  }
  return true;
}
console.log(isAnagram("anagram", "nagaram"));
