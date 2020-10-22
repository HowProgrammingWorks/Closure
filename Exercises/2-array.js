'use strict';

const array = () => {
  const a = [];
  const b = c => a[c];
  b.push = d => (a.push(d));
  b.pop = () => a.pop();
  return b;
};

module.exports = { array };
