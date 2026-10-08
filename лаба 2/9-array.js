'use strict';

const phoneBook = [
  { name: 'Gojo Satoru', phone: '+380445554433' },
  { name: 'Geto Suguru', phone: '+380445554434' },
  { name: 'Itadory Yuji', phone: '+380445554435' },
  { name: "Yarick PolyanaKing", phone: "+380445554436" }
];

const findPhoneByName = (name) => {
  for (const entry of phoneBook) {
    if (entry.name === name) return entry.phone;
  }
};

console.log(findPhoneByName('Yarick PolyanaKing'));
