// 给定一个赎金信 (ransom) 字符串和一个杂志(magazine)字符串，判断第一个字符串 ransom 能不能由第二个字符串 magazines 里面的字符构成。如果可以构成，返回 true ；否则返回 false。

function canConstruct(ransomNote, magazine) {
  let map = new Map();
  for (const item of ransomNote) {
    map[item] = map[item] ? map[item] + 1 : 1;
  }
  for (const item of magazine) {
    if (map[item]) {
      map[item] = map[item] - 1;
    }
  }

  for (const item in map) {
    if (map[item] != 0) return false;
  }
  return true;
}
console.log(canConstruct("aa", "aab"));
