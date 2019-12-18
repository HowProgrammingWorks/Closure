'use strict';

const array = (n = 0) => {
  const _ = new Array(n);
  const $ = x => _[x];
  $.push = x => _.push(x);
  $.pop = x => _.pop(x);
  return $;
};

module.exports = { array };
