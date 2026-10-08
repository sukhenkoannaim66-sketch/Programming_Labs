'use strict';

const phoneBook = [
  { name: 'Gojo Satoru', phone: '+380445554433' },
  { name: 'Geto Suguru', phone: '+380445554434' },
  { name: 'Itadory Yuji', phone: '+380445554435' },
  { name: "Yarick PolyanaKing", phone: "+380445554436" }
];

const findPhoneByName = (name) => {
  for (const person of phoneBook) {
    if (person.name === name) return person.phone;
  }

  return 'Not found';
};

console.log(findPhoneByName('Yarick PolyanaKing'));
