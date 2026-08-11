'use strict';

const array = () => {
    const data = []; 
  
    return (arg) => {
      if (typeof arg === 'number') {
        return data[arg]; 
      }
  
      const method = arg.method;
      const value = arg.value;
  
      if (method === 'push') {
        data.push(value); 
        return;
      }
  
      if (method === 'pop') {
        return data.pop(); 
      }
    };
  };

module.exports = { array };
