function capitalizeStr(str) {
  let stringArr = str.split("");
  stringArr[0] = stringArr[0].toUpperCase();
  str = stringArr.join("");
  return str;
}
module.exports = capitalizeStr;
