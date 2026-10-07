'use strict';

const array = [true, 'hello', 5, 12, -200, false, false, 'word', NaN,'бєбєбє', 'мямя', null, undefined, null, Symbol('id'), Symbol.iterator,{ name: 'io' }, [1, 2, 3], () => {}, function name (){}];
const counts: Record<string, number> = {};

for (const item of array) {
  const type = typeof item as keyof typeof counts;
  if (type in counts) {
    counts[type]++;
  } else {
    counts[type] = 1;
  }
}

console.dir(counts);