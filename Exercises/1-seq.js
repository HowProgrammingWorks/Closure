'use strict';

const seq = (f) => (n) => (typeof n === 'number' ? f(n) : seq((a) => f(n(a))));

module.exports = { seq };
