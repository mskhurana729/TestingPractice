function capitalizeStr(str) {
  let stringArr = str.split("");
  stringArr[0] = stringArr[0].toUpperCase();
  str = stringArr.join("");
  return str;
}
function reverseStr(str) {
  return str.split("").reverse().join("");
}
module.exports = { capitalizeStr, reverseStr };
