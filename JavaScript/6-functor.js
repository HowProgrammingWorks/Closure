'use strict';

const add = (x) => {
  const f = (y) => {
    const z = x + y;
    console.log(x + '+' + y + '=' + z);
    return add(z);
  };
  f.map = (fn) => fn(x);
  return f;
};

// Usage

const a1 = add(5);
const a2 = a1(2);
const a3 = a2(3);
const a4 = a1(1);
const a5 = a2(10);
console.log('a3 sum is:');
a3.map(console.log);

console.log('\nAll functors:');
[a1, a2, a3, a4, a5].map((fn) => fn.map(console.log));
