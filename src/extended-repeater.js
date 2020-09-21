const CustomError = require("../extensions/custom-error");



module.exports = function repeater(str, options = {...parametres}) {
  if (options.repeatTimes === undefined) options.repeatTimes = 1;
  if (options.additionRepeatTimes === undefined) options.additionRepeatTimes = 1;
  let opt = {
    repeatTimes: options.repeatTimes || 1,
    separator: options.separator || '+',
    addition: ((typeof options.addition === "boolean") || (options.addition === null)) ? `${options.addition}`: options.addition || '',
    additionRepeatTimes: options.additionRepeatTimes || 0,
    additionSeparator: options.additionSeparator || '|'
  }

  let getAdditions = (options) => {
    if (options.additionRepeatTimes === 0) return '';
    if (options.additionRepeatTimes === 1) return `${options.addition}`;
    let additionStr = '';
    for(let i = 1; i <= options.additionRepeatTimes - 1; i++) {
      additionStr += `${options.addition}${options.additionSeparator}`;
    }
    additionStr += `${options.addition}`;
    return additionStr;
  }
  
  if (opt.repeatTimes === 0) return '';
  if (opt.repeatTimes === 1) return `${str}${getAdditions(opt)}`;
  let finalStr = ``;
  for(let i = 1; i <= opt.repeatTimes - 1; i++) {
    finalStr += `${str}${getAdditions(opt)}${opt.separator}`;
  }
  finalStr += `${str}${getAdditions(opt)}`;
  return finalStr;
};
  