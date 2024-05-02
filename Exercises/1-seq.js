'use strict';

const seq = (outFn) => (inFn) => (typeof inFn === 'number' ?
  outFn(inFn) :
  seq((x) => outFn(inFn(x))));

module.exports = { seq };
