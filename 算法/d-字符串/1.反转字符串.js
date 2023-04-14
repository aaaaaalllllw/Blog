function reverseString(s) {
  let l = 0,
    r = s.length - 1;
  while (l < r) {
    [s[l], s[r]] = [s[r], s[l]];
    l++;
    r--;
  }
  return s;
}

console.log(reverseString("hello"));
