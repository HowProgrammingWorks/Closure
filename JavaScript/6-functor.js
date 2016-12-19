'use strict';

function add(x) {
  let f = function(y) {
    let z = x + y;
    console.log(x + '+' + y + '=' + z);
    return add(z);
  };
  f.map = function(fn) {
    fn(x);
  };
  return f;
}

let a1 = add(5);
let a2 = a1(2);
let a3 = a2(3);
let a4 = a1(1);
let a5 = a2(10);
a5.map(console.log);

add(2)(7)(1).map(console.log);
