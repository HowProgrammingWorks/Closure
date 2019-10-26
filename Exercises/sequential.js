'use strict';

const seq = f => g => (typeof(g) === 'function' ? seq(a => f(g(a))) : f(g));

module.exports = { seq };
