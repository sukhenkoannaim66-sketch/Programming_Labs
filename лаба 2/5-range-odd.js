'use strict';

const rangeOdd = (begin, end) => {
  const result = [];
  for (let n = begin; n <= end; n++) {
    if (n % 2 === 1) result.push(n);
  }
  return result;
};

console.log(rangeOdd(15, 30));