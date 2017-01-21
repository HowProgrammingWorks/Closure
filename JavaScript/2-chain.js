'use strict';

function hash() {
  const data = {};
  Object.defineProperty(data, 'add', {
    enumerable: false,
    value(key, value) {
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
