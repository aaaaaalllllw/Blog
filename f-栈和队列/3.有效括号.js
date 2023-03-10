//有效括号只有括号匹配好才返回true
// 括号匹配是使用栈解决的经典问题。
// 题意其实就像我们在写代码的过程中，要求括号的顺序是一样的，有左括号，相应的位置必须要有右括号。
//三种情况
// 1.遍历完字符串，但是栈不为空，说明相应的左括号没有右括号来匹配，return false
// 2.遍历字符串种，[{)]这种情况，{]匹配不上
// 3.遍历字符串中，发现栈已经空，闭合的符号没有找对对应的开始符号

//技巧添加的是相反值
function isValid(s) {
  if (s.length % 2 != 0) return false;
  let st = [];
  s = Array.from(s);
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "[") st.push("]");
    else if (s[i] == "{") st.push("}");
    else if (s[i] == "(") st.push(")");
    else if (st.length == 0) return false; //栈空了，但是字符串没空
    else if (s[i] != st[st.length - 1]) return false; //层级结构不对
    else st.pop(); //暂时匹配上了
  }
  return st.length == 0 ? true : false;
}
