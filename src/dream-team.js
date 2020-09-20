const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;

  return members.reduce((dreanTeam, elem) => {
      if (typeof elem !== "string") return dreanTeam += '';
      let trimStr = elem.trim();
      return dreanTeam += trimStr[0].toUpperCase();
  }, '')
      .split('')
      .sort()
      .join('');
};
