'use strict';

function logger(level) {
  let color = logger.colors[level] || logger.colors.info;
  return function(s) {
    let date = new Date().toISOString();
    console.log(color + date + '\t' + s);
  };
}

logger.colors = {
  warning: '\x1b[1;33m',
  error: '\x1b[0;31m',
  info: '\x1b[1;37m'
};

let warning = logger('warning');
let error = logger('error');
let debug = logger('debug');

warning('Hello');
error('World');
debug('Bye!');
