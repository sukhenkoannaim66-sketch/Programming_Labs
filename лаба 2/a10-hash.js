'use strict';

const hash = {
  'Gojo Satoru': '+380445554433',
  'Geto Suguru': '+380445554434',
  'Itadory Yuji': '+380445554435',
  'Yarick PolyanaKing': '+380445554436'
};

const findPhoneByName = function(name){
    if(typeof(hash[name]) === 'string'){
        return hash[name];
    }
    return 'Not Found';
};

console.log(findPhoneByName('Yarick PolyanaKing'));
