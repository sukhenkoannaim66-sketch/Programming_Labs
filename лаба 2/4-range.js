'use strict';

const range = (begin, end) => {
  const result = [];
  for (let n = begin; n <= end; n++) {
    result.push(n);
  }
  return result;
};

console.log(range(15, 30));