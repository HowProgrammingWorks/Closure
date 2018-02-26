'use strict';

const adder = (a) => {
  const value = () => a;
  const add = (b) => adder(a + b);
  return { add, value };
};

// Usage

const v = adder(3).add(-9).add(12).value();
console.log(v);
