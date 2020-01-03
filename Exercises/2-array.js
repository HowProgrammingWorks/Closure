'use strict';

const array = (a = [], f) =>
  (f = i => a[i], f.push = s => a.push(s), f.pop = () => a.pop(), f);

module.exports = { array };
