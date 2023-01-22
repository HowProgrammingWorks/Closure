'use strict';

const array = () => {
  const arr = [];
  const f = (a) => arr[a];
  f['push'] = (a) => arr.push(a);
  f['pop'] = (a) => arr.pop(a);
  return f;
};

module.exports = { array };
