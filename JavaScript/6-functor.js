'use strict';

function add(x) {
  const f = function(y) {
    const z = x + y;
    console.log(x + '+' + y + '=' + z);
    return add(z);
  };
  f.map = function(fn) {
    return fn(x);
  };
  return f;
}

const a1 = add(5);
const a2 = a1(2);
const a3 = a2(3);
const a4 = a1(1);
const a5 = a2(10);
a5.map(console.log);
