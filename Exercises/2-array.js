'use strict';

class A extends Array {
  constructor(options = []) {
    super(options);
    return Object.assign(i => this[i], {
      push: val => this.push(val), pop: () => this.pop()
    });
  }
}
// array is function
const array = new A();

module.exports = { array };
