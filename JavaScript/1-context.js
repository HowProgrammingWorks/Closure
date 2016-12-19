'use strict';

function hash() {
  let data = {};
  let counter = 0;
  return function(key, value) {
    data[key] = value;
    counter++;
    console.dir({ counter });
    return data;
  };
}

let h1 = hash();
h1('name', 'Marcus');
h1('city', 'Roma');
let obj1 = h1('born', 121);
console.dir({ obj1 });
