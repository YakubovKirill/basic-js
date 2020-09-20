const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
    let sampleActivityNumber = Number(sampleActivity) || false;

    if (!sampleActivityNumber || typeof sampleActivity !== "string") return false;
    if (sampleActivityNumber <= 0 || sampleActivityNumber > MODERN_ACTIVITY) return false;

    let k = 0.693 / HALF_LIFE_PERIOD;
    let years = Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivityNumber) / k);

    return years;
};
