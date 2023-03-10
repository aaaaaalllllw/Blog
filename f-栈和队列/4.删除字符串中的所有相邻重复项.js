//删除字符串中所有相邻重复项
// 输入："abbaca"
// 输出："ca"
// 解释：例如，在 "abbaca" 中，我们可以删除 "bb" 由于两字母相邻且相同，这是此时唯一可以执行删除操作的重复项。之后我们得到字符串 "aaca"，其中又只有 "aa" 可以执行重复项删除操作，所以最后的字符串为 "ca"。

// 用栈来记录字符串，如果一个个进去，如果栈的最后一个和当前遍历的值相等，那么就删除，
//返回栈中元素就行

function removeDuplicates(s) {
  s = Array.from(s);
  let st = [];
  for (let i = 0; i < s.length; i++) {
    if (st.length == 0) st.push(s[i]); //进栈
    else if (st[st.length - 1] != s[i]) st.push(s[i]); //不相等,进栈
    else st.pop(); //相等，弹栈
  }
  return st.join("");
}

console.log(removeDuplicates("abbaca"));
