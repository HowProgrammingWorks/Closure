'use strict';

function add(x) {
  return function(y) {
    let z = x + y;
    console.log(x + '+' + y + '=' + z);
    return add(z);
  };
}

let a1 = add(5);
let a2 = a1(2);
let a3 = a2(3);
let a4 = a1(1);
let a5 = a2(10);

console.log('--------');

add(1)(4)(8)(8);
