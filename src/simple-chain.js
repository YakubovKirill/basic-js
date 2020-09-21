const CustomError = require("../extensions/custom-error");
let chainMaker = {
  chain : new Array(),
  getLength() {
    throw new CustomError('Not implemented');
    //return this.chain.length;
  },
  addLink(value = '') {
    throw new CustomError('Not implemented');
    /*
    this.chain.push(`( ${value} )`)
    return this;
    */
  },
  removeLink(position) {
    throw new CustomError('Not implemented');
    /*
    if ((position < 1) || (position > this.chain.length)) throw new Error()
    this.chain = this.chain.filter(elem => elem !== this.chain[position - 1]);
    return this;
    */
  },
  reverseChain() {
    throw new CustomError('Not implemented');
    /*
    this.chain = this.chain.reverse()
    return this;
    */
  },
  finishChain() {
    throw new CustomError('Not implemented');
    /*
    this.chain = this.chain.join('~~')
    return this.chain;
    */
  }
};

module.exports = chainMaker;
