//逆波兰式求值
// 输入: ["2", "1", "+", "3", "*"]
// 输出: 9
// 解释: 该算式转化为常见的中缀算术表达式为：((2 + 1) * 3) = 9
// 适合用栈操作运算：遇到数字则入栈；遇到运算符则取出栈顶两个数字进行计算，并将结果压入栈中。
function evalRPM(tokens) {
  let st = [];
  let num = ["+", "-", "/", "*"];
  for (let i = 0; i < tokens.length; i++) {
    let x = tokens[i];
    if (num.includes(x)) {
      let num2 = st.pop();
      let num1 = st.pop();
      switch (x) {
        case "+":
          st.push(num2 + num1);
          break;
        case "-":
          st.push(num1 - num2);
          break;
        case "/":
          st.push((num1 / num2) | 0);
          break;
        case "*":
          st.push(num1 * num2);
          break;
      }
    } else st.push(Number(x));
  }
  return st.pop();
}
console.log(evalRPM(["2", "1", "+", "3", "*"]));
