'use strict';

const fn = () => {
  const obj1 = { name: 'Ben' };
  let obj2 = { name: 'Artemis' };

  obj1.name = 'Yaroslave';
  obj2.name = 'Blublu';

  obj2 = { name: 'Eren' };

  return { obj1, obj2 };
};

console.log(fn());