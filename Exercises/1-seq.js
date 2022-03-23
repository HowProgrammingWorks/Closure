'use strict';

const seq = (x) => (y) => (typeof y === 'number'  ? x(y) :
  seq((z) => x(y(z))));

module.exports = { seq };
