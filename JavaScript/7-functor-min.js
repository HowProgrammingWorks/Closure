'use strict';

function add(x) {
  const f = y => add(x + y);
  f.map = fn => fn(x);
  return f;
}

add(2)(7)(1).map(console.log);
