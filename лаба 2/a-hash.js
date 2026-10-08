'use strict';

const hash = {
  'Gojo Satoru': '+380445554433',
  'Geto Suguru': '+380445554434',
  'Itadory Yuji': '+380445554435',
  'Yarick PolyanaKing': '+380777777777'
};

const findPhoneByName = (name) => {
  return hash[name];
};

console.log(findPhoneByName('Yarick PolyanaKing'));