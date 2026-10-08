'use strict';

const generateKey = (length, characters) => {
  let key = '';
  for (let i = 0; i < length; i++) {
    const index = random(0, characters.length - 1);
    key += characters[index];
  }
  return key;
};

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
console.log(generateKey(16, characters)); // eg599gb60q926j8i