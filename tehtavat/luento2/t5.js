'use strict'

var Moduuli = (function() {
  let x = 5;
  let kasvata = function() { return ++x; };
  let vahenna = function() { return --x; };
  return{kasvata, vahenna};
})();
  
console.log(Moduuli.kasvata()); 
console.log(Moduuli.vahenna()); 