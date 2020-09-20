const CustomError = require("../extensions/custom-error");

const SECONDS = 3600;

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let numberOfTurns = Math.pow(2, disksNumber) - 1;
  let time = Math.floor((SECONDS / turnsSpeed) * numberOfTurns);
  return {
    turns: numberOfTurns,
    seconds: time
  }
};
