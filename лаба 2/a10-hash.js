'use strict';

const phoneBook = {
  'Gojo Satoru': '+380445554433',
  'Geto Suguru': '+380445554434',
  'Itadory Yuji': '+380445554435',
  'Yarick PolyanaKing': '+380445554436'
};

const findPhoneByName = function(name){
    if(typeof(phoneBook[name]) === 'string'){
        return phoneBook[name];
    }
    return 'Not Found';
};

console.log(findPhoneByName('Yarick PolyanaKing'));
