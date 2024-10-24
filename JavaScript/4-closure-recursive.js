'use strict';

const add = (x) => {
  const internalAdd = (y) => {
    const z = x + y;
    console.log(`${x} + ${y} = ${z}`);
    return add(z);
  };
  return internalAdd;
};

// const add = x => y => add(x + y);

// Usage

const a1 = add(5);
const a2 = a1(2);
const a3 = a2(3);
const a4 = a1(1);
const a5 = a2(10);
console.log(a1, a2, a3, a4, a5);

const res = add(5)(2)(3)(7);
console.log(res);
