const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
    let catsCount = 0;
    if (matrix.length === 0) return 0;
    return matrix.reduce((count, line) => {
        return count += line.filter(element => `${element}` === '^^').length;
    }, 0);
};
