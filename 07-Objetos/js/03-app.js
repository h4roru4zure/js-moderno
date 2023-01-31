// Veamos como asignar variables hacia un objeto


const producto = {
    nombre: "Monitor 20 pulgadas", // La , es importante, sin ella tendriamos un error
    precio: 30,
    disponible: true, // el último elemento puede o no tener la ,
}


// const nombre = producto.nombre;




// Otra forma de hacerlo y que también es nueva, es con algo llamado object destructuring...

// Destructuring significa, sacar de una esctructura, puede ser complejo, no lo es tanto sobretodo cuando lo practicas

const { nombre2 } = producto;


// si deseas extraer más variables;
const { precio2 } = producto;
console.log(producto.nombre);
console.log(producto.precio);
producto.nombre2="juan rulfo";
console.log(producto.nombre2);
producto.precio2=100;
console.log(producto.precio2);

// O puedes hacerlo mejor con 

const {nombre, precio} = producto;