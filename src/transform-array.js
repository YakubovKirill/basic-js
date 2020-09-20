const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw new Error();
  if (arr.length === 0) return [];

  let finalArr = [];

  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case '--discard-next': {
        if (i < arr.length - 1) {
          finalArr.push(undefined)
          i++;
        }
        break;
      }

      case '--discard-prev': {
        if (i > 0) {
          finalArr = finalArr.slice(0, finalArr.length - 1)
        }
        break;
      }

      case '--double-next': {
        if (i < arr.length - 1) {
          finalArr.push(arr[i + 1]);
        }
        break;
      }

      case '--double-prev': {
        if (i > 0) {
          let prev = finalArr[finalArr.length - 1];
          finalArr.push(prev);
        }
        break;
      }
      default : finalArr.push(arr[i]);
    }
  }
  return finalArr.filter(item => item !== undefined);
};