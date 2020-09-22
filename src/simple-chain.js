const CustomError = require("../extensions/custom-error");
let chainMaker = {
  chain : [],
  getLength() {
    return this.chain.length;
  },
  addLink(value = '') {
    this.chain.push(`( ${value} )`)
    return this;
    
  },
  removeLink(position) {
    if ((position < 1) || (position > this.chain.length)) {
      this.chain = [];
      throw new Error()
    }
    this.chain = this.chain.filter(elem => elem !== this.chain[position - 1]);
    return this;
  },
  reverseChain() {
    this.chain = this.chain.reverse()
    return this;
  },
  finishChain() {
    let finalStr = this.chain.join('~~');
    this.chain = [];
    return finalStr;
  }
};

module.exports = chainMaker;
