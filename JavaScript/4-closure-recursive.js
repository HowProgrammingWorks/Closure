'use strict';

function add(x) {
  return function(y) {
    const z = x + y;
    console.log(x + '+' + y + '=' + z);
    return add(z);
  };
}

// const add = x => y => add(x + y);

const a1 = add(5);
const a2 = a1(2);
const a3 = a2(3);
const a4 = a1(1);
const a5 = a2(10);

add(1)(4)(8)(8);
