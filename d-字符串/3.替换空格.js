//遇到空格" "转换%20
//双指针，有快慢指针，有头尾指针，这次是两个尾指针的快慢指针
//快指针正常遍历元素，慢指针从就是要代替元素的新数组，需要将数组长度扩充
function replaceSpace(s) {
  let arr = s.split("");
  let oldSize = arr.length;
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == " ") count++;
  }
  let newSize = oldSize + count * 2;
  arr.length = newSize;
  for (let i = oldSize - 1, j = newSize - 1; i < j; i--, j--) {
    if (arr[i] != " ") {
      arr[j] = arr[i];
    } else {
      arr[j] = "%";
      arr[j - 1] = "2";
      arr[j - 2] = "0";
      j = j - 2;
    }
  }
  return arr.join("");
}

console.log(replaceSpace("w a "));
