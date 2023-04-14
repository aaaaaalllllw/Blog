var lemonadeChange = function (bills) {
  let five = 0,
    ten = 0,
    twenty = 0;
  for (let item of bills) {
    if (item == 5) {
      five++;
    } else if (item == 10) {
      if (five > 0) {
        five--;
        ten++;
      } else return false;
    } else if (item == 20) {
      if (five > 0 && ten > 0) {
        five--;
        ten--;
        twenty++;
      } else if (five >= 3) {
        five -= 3;
        twenty++;
      } else {
        return false;
      }
    }
  }
  return true;
};

console.log(lemonadeChange([5, 5, 5, 10, 20]));
