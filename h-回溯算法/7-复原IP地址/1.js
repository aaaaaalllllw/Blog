function restoreIpAddress(s) {
  let res = [],
    path = [];
  function backTracing(startIndex, pointNum) {
    if (pointNum > 4) return;
    if (pointNum == 4 && startIndex == s.length) {
      res.push(path.join("."));
      return;
    }
    for (let i = startIndex; i < s.length; i++) {
      const str = s.slice(startIndex, i + 1);
      if (str.length > 4 || +str > 255) break;
      if (str.length > 1 && str[0] == "0") break;
      path.push(str);
      backTracing(i + 1, pointNum + 1);
      path.pop();
    }
  }
  backTracing(0, 0);
  return res;
}

console.log(restoreIpAddress("0000"));
