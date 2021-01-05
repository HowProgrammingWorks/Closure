'use strict';

const adder = (a) => ({
  value() {
    return a;
  },
  add(b) {
    a += b;
    return this;
  }
});

// Usage

const v = adder(3).add(-9).add(12).value();
console.log(v);
