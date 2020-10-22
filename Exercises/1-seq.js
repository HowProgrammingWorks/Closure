'use strict';

const seq = a => b => (isNaN(b) ? seq(c => a(b(c))) : a(b));

module.exports = { seq };
