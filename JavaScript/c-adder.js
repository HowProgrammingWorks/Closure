'use strict';

const adder = a => ({ value: () => a, add: b => adder(a + b) });

const v = adder(3).add(-9).add(12).value();
console.log(v);
