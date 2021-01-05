'use strict';

const adder = (a) => {
  let onZerro = null;
  const obj = {};
  const value = () => a;
  const add = (b) => {
    let x = a + b;
    if (x < 0) {
      x = 0;
      if (onZerro) onZerro();
    }
    return adder(x);
  };
  const on = (name, callback) => {
    if (name === 'zero') onZerro = callback;
    return obj;
  };
  return Object.assign(obj, { add, value, on });
};

// Usage

const a = adder(3)
  .on('zero', () => console.log('Less than zero'))
  .add(-9)
  .add(12)
  .add(5)
  .value();
console.log(a);
