'use strict';

const adder = (a) => {
  let onZero = null;
  const obj = {};
  const value = () => a;
  const add = (b) => {
    let sum = a + b;
    if (sum < 0) {
      sum = 0;
      onZero?.();
    }
    return adder(sum);
  };
  const on = (name, callback) => {
    if (name === 'zero') onZero = callback;
    return obj;
  };
  return Object.assign(obj, { add, value, on });
};

// Usage

const res = adder(3)
  .on('zero', () => console.log('Less than zero'))
  .add(-9)
  .add(12)
  .add(5)
  .value();

console.log({ res });
