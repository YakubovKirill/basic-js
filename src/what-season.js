const CustomError = require("../extensions/custom-error");

const SEASONS = {
  'winter': [11, 0, 1],
  'spring': [2, 3, 4],
  'summer': [5, 6, 7],
  'fall': [8, 9, 10]
}

module.exports = function getSeason(date) {
  let currentDate = new Date();
  if (date === undefined) return 'Unable to determine the time of year!'
  if (!date instanceof Date && !isNaN(date.valueOf())) throw new Error();
  if ((currentDate.getTime() - date.getTime()) === 0) throw new Error();
  let currentMonth = date.getMonth();
  for(season in SEASONS) {
    if (SEASONS[season].filter(elem => elem === currentMonth).length !== 0) return season
  }
};
