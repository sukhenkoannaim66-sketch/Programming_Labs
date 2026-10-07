'use strict';

const array = [true, 'hello', 5, 12, -200, false, false, 'word', NaN,'бєбєбє', 'мямя', null, undefined, null, Symbol('id'), Symbol.iterator,{ name: 'io' }, [1, 2, 3], () => {}, function name (){}];

const hash = {};

for (const item of array) {
  const type = typeof item; 
  hash[type] = (hash[type] ?? 0) + 1;
}

console.log(hash);
