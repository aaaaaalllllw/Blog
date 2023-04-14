// 实现 strStr() 函数。
// 给定一个 haystack 字符串和一个 needle 字符串，在 haystack 字符串中找出 needle 字符串出现的第一个位置 (从0开始)。如果不存在，则返回  -1。
//典型的kmp
// 示例 1: 输入: haystack = "hello", needle = "ll" 输出: 2
// KMP的经典思想就是:当出现字符串不匹配时，可以记录一部分之前已经匹配的文本内容，利用这些信息避免从头再去做匹配。
// next数组就是一个前缀表（prefix table）。
// 前缀表有什么作用呢？
// 前缀表是用来回退的，它记录了模式串与主串(文本串)不匹配的时候，模式串应该从哪里开始重新匹配。

const { get } = require("https");

//公共最长前缀
// 文章中字符串的前缀是指不包含最后一个字符的所有以第一个字符开头的连续子串。
// 后缀是指不包含第一个字符的所有以最后一个字符结尾的连续子串。
// 正确理解什么是前缀什么是后缀很重要!
// 那么网上清一色都说 “kmp 最长公共前后缀” 又是什么回事呢？
// 我查了一遍 算法导论 和 算法4里KMP的章节，都没有提到 “最长公共前后缀”这个词，也不知道从哪里来了，我理解是用“最长相等前后缀” 更准确一些。
// 因为前缀表要求的就是相同前后缀的长度。
// 而最长公共前后
// 所以字符串a的最长相等前后缀为0。 字符串aa的最长相等前后缀为1。 字符串aaa的最长相等前后缀为2。 等等.....。
//模式串 aabaaf ，next表就是010120
//看看f，前面的aa跟开头aa，相同，所以f这是2

//next表有什么用，用于模式串的回溯

//计算出next数组就是一个双指针，i是去遍历数组给next赋值，j是去找最长模式匹配
//如果当前s[i],s[j+1]相等，先给next[i],赋值，继续i+1的的循环，如果继续相等j++,赋值给当前的next[i]
//如果当前s[i],s[j+1]不相等，就不断回溯j=next[j],跳出循环有两个条件，j=-1，s[i]=s[j+1]
// function getNext(s) {
//   let j = -1,
//     next = [];
//   next[0] = j;
//   for (let i = 0; i < s.length; i++) {
//     while (j >= 0 && s[i] != s[j + 1]) {
//       j = next[j];
//     }
//     if (s[i] == s[j + 1]) {
//       j++;
//     }
//     next[i] = j;
//   }
// }

/**
构造next数组其实计算模式串s，前缀表的过程
1.初始化
  定义两个指针i和j，j指向前缀末尾位置，i指向后缀末尾位置
  然后还要对next数组进行初始化赋值
  int j=-1
  next[0]=j
  next[i]表示(包括i)之前最长相等的前后缀长度(就是j)，所以初始化next[0]=j

2.处理前后缀不相同的情况
  因为j初始化-1，那么i从1开始，进行s[i]与s[j+1]的比较
  所以遍历模式串的循环下标i要从1开始
  for(let i=1,i<s.length;i++)
  如果s[i]与s[j+1]不相同，遇到前后缀末尾不同，就要向前回退
  怎么回退?
  next[j]就是记录j(包括)之前的子串的相同前后缀的长度
  那么s[i]与s[j+1]
  while(j>=0&&s[i]!=s[j+1])//前后缀不相同了
    j=next[j]//向前回退
  
3.处理前后缀相同的情况
  如果 s[i] 与 s[j + 1] 相同，那么就同时向后移动i 和j 说明找到了相同的前后缀，同时还要将j（前缀的长度）赋给next[i], 因为next[i]要记录相同前后缀的长度。
    if(s[i]==s[j+1]){//找到相同的前后缀
      j++
    }
    next[i]=j

 */

// 本题要在文本串字符串中找出模式串出现的第一个位置 (从0开始)，所以返回当前在文本串匹配模式串的位置i 减去 模式串的长度，就是文本串字符串中出现模式串的第一个位置。
// 用next数组来匹配串
// int j = -1; // 因为next数组里记录的起始位置为-1
// for (int i = 0; i < s.size(); i++) { // 注意i就从0开始
//     while(j >= 0 && s[i] != t[j + 1]) { // 不匹配
//         j = next[j]; // j 寻找之前匹配的位置
//     }
//     if (s[i] == t[j + 1]) { // 匹配，j和i同时向后移动
//         j++; // i的增加在for循环里
//     }
//     if (j == (t.size() - 1) ) { // 文本串s里出现了模式串t
//         return (i - t.size() + 1);
//     }
// }

//找到模板串的条件就是，模板串遍历的j==模板串.length-1
function strStr(haystack, needle) {
  if (needle.length === 0) return 0;
  let next = [];
  getNext();
  function getNext() {
    let j = -1;
    next[0] = j;
    for (let i = 1; i < needle.length; i++) {
      while (j >= 0 && needle[i] != needle[j + 1]) {
        j = next[j];
      }
      if (needle[i] == needle[j + 1]) {
        j++;
      }
      next[i] = j;
    }
  }
  let j = -1;
  for (let i = 0; i < haystack.length; i++) {
    while (j >= 0 && haystack[i] != needle[j + 1]) {
      j = next[j];
    }
    if (haystack[i] == next[j + 1]) {
      j++;
    }
    if (j == needle.length - 1) {
      return i - needle.length + 1;
    }
  }
  return -1;
}
