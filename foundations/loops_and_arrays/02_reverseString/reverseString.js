const reverseString = function (str) {
  let string = str.split(" ");
  let ans = [];
  for (let item of string) {
    ans.unshift(item.split("").reverse().join(""));
  }
  return ans.join(" ");
};
console.log(reverseString("hello"));
// Do not edit below this line
module.exports = reverseString;
