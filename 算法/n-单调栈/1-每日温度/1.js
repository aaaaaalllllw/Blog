/**
 * @param {number[]} temperaures
 * @return {number[]}
 */
var dailyTemperatures = function (T) {
  let len = T.length;
  let res = new Array(len).fill(0);
  let st = [];
  st.push(0);
  for (let i = 1; i < len; i++) {
    if (T[i] <= T[st[st.length - 1]]) {
      st.push(i);
    } else {
      while (st.length && T[i] > T[st[st.length - 1]]) {
        res[st[st.length - 1]] = i - st[st.length - 1];
        st.pop();
      }
      st.push(i);
    }
  }
  return res;
};
