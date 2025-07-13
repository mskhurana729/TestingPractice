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
  subtract(num1, num2) {
    return +num1 - +num2;
  }
  divide(num1, num2) {
    return +num1 / +num2;
  }
  multiply(num1, num2) {
    return +num1 * +num2;
  }
}
function caesarCipher(text, shift) {
  let result = "";
  shift = shift % 26;
  if (shift < 0) {
    shift += 26;
  }

  for (let i = 0; i < text.length; i++) {
    let char = text[i];
    let charCode = char.charCodeAt(0);
    if (charCode >= 65 && charCode <= 90) {
      char = String.fromCharCode(((charCode - 65 + shift) % 26) + 65);
    } else if (charCode >= 97 && charCode <= 122) {
      char = String.fromCharCode(((charCode - 97 + shift) % 26) + 97);
    }
    result += char;
  }
  return result;
}
function analyzeArr(arr) {
  arr = arr.sort((a, b) => a - b);
  let averageOfArr = arr.reduce((prev, cur) => prev + cur, 0) / arr.length;
  return {
    average: averageOfArr,
    min: arr[0],
    max: arr[arr.length - 1],
    length: arr.length,
  };
}
module.exports = {
  capitalizeStr,
  reverseStr,
  Calculator,
  caesarCipher,
  analyzeArr,
};
