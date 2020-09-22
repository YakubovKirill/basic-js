const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  decryptor;
  constructor (type = true) {
    if (typeof type !== "boolean") throw new Error();
    this.decryptor = type; 
  }
  
  encrypt(str, keyword) {
    if ((typeof str !== "string") && (typeof keyword !== "string")) throw new Error();

    let basicStr = str.toUpperCase().split('');
    let key = this.getKey(basicStr, keyword);
    let finalStr = '';

    basicStr.forEach((elem, index) => {
      if (this.isLetter(elem)) {
        let alphabetElemIndex = (elem.charCodeAt(0) + key.charCodeAt(index)) % this.alphabet.length;
        finalStr += this.alphabet[alphabetElemIndex]
      }
      else finalStr += elem;
    });

    return (this.decryptor) ? finalStr : finalStr.split('').reverse().join('');
  }   
  decrypt(str, keyword) {
    if ((typeof str !== "string") && (typeof keyword !== "string")) throw new Error();

    let basicStr = str.toUpperCase().split('');
    let key = this.getKey(basicStr, keyword);
    let finalStr = '';

    basicStr.forEach((elem, index) => {
      if (this.isLetter(elem)) {
        let alphabetElemIndex = (elem.charCodeAt(0) + this.alphabet.length - key.charCodeAt(index)) % this.alphabet.length;
        finalStr += this.alphabet[alphabetElemIndex]
      }
      else finalStr += elem;
    });

    return (this.decryptor) ? finalStr : finalStr.split('').reverse().join('');
  }

  isLetter(char) {
    let length = this.alphabet.filter(elem => elem === char).length;
    return (length === 0) ? false : true;
  }

  getKey (strArr, keyword) {
    let key = '';
    let counter = 0;

    strArr.forEach(element => {
      if (counter === keyword.length) counter = 0;
      if (this.isLetter(element)) {
        key += keyword[counter].toUpperCase();
        counter ++;
      }
      else key += element;
    });

    return key;
  }
}

module.exports = VigenereCipheringMachine;
