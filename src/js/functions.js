function capitalizeStr(str) {
  let stringArr = str.split("");
  stringArr[0] = stringArr[0].toUpperCase();
  str = stringArr.join("");
  return str;
}
function reverseStr(str) {
  return str.split("").reverse().join("");
}
class Calculator {
  add(num1, num2) {
    return +num1 + +num2;
  }
}
module.exports = { capitalizeStr, reverseStr, Calculator };
