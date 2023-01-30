// Veamos el 3er tipo de formas de crear variables, const
// Existen pocas diferencias entre let y const, asi que vamos a verlas:

// primero una variable con const su valor no puede ser re-asignado:

const producto = 'Monitor 30 Pulgadas';
console.log(producto);
//producto = 'Monitor 23 Pulgadas';//Assignment to constant variable.

// Por otro lado, las variables con const, deben iniciarse con un valor:
//let precio; esta declarada en 02-app.js  
precio = 20;
console.log(precio);

// Existen otras diferencias entre const y let especialmente cuando se trabajan con arreglos y objetos,
//  que te mostraré mas adelante, pero recuerda, las variables con const, no se pueden re-asignar y
//   tampoco pueden iniciar sin un valor.
const actividad ="veaoms como llenamos un arreglo con split";
console.log(actividad);
let arreglo =[];
arreglo=actividad.split(" ");
console.log(arreglo);