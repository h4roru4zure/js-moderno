// El tipo de dato boolean solo puede tener 2 valores, true o false, veamos como crearlos

const boolean1 = true;
const boolean2 = false;



console.log(boolean1);
console.log(boolean2);


console.log(typeof boolean2);

//También un Boolean se puede crear con la palabra new

const boolean3 = new Boolean(true);
console.log(boolean3);
console.log(typeof boolean3);

 let bArrayProto = new Boolean([]);
console.log("todo listo");
    
bArrayProto.valueOf();
// bArrayProto.push(false);
// bArrayProto.push(true);
 console.log(bArrayProto);

const arr = ['First item', 'Second item', 'Third item'];

arr.push('Fourth item');

console.log(arr);
console.log("MDN Plus");
const bZero = new Boolean(0);
const bNull = new Boolean(null);
const bEmptyString = new Boolean('');
const bfalse = new Boolean(false);

console.log(    typeof bfalse );// "object"
console.log(Boolean(bfalse) )//
console.log(Boolean( bEmptyString))// true

