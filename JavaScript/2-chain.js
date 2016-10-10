'use strict';

function hash() {
  let data = {};
  Object.defineProperty(data, 'add', {
    enumerable: false,
    value: function(key, value) {
      data[key] = value;
      return data;
    }
  });
  return data;
}

console.dir(
  hash()
  .add('name', 'Marcus')
  .add('city', 'Roma')
  .add('born', 121)
);
