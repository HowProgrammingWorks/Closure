'use strict';

const adder = (a) => {
  const obj = { value, add };
  function value() {
    return a;
  }
  function add(b) {
    a += b;
    return obj;
  }
  return obj;
};

// Usage

const v = adder(3).add(-9).add(12).value();
console.log(v);
