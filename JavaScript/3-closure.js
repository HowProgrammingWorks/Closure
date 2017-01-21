'use strict';

function add(x) {
  return function(y) {
    const z = x + y;
    console.log(x + '+' + y + '=' + z);
    return z;
  };
}

add(3)(6);
