//punto 1


const persona = {

    nombre: 'santiago',
    edad: 20,
    profesion: 'Profesor',

}
console.log('1)');
console.log(persona);


//punto 2

console.log(`2) El nombre de la persona creada en ejercicio 1 es: ${persona.nombre}`);


//punto 3

persona.edad = 22;
console.log('3) Actualice la propiedad edad a 22');
console.log(persona);

//punto 4

delete persona.profesion;
console.log('4) Elimine la propiedad "profesion"');
console.log(persona);

//punto 5

persona.email = 'santiude2004@gmail.com';
console.log('5) agregue la propiedad email');
console.log(persona);



//punto 6

const numeros = [1,2,3,4,5];
console.log(`6) ${numeros}`);


//punto 7

console.log(`7) El tercer elemento del array esta en la segunda posicion y es ${numeros[2]}`);

//punto 8

numeros.push(6);
console.log(`8) Agregue el numero 6: ${numeros}`);


//punto 9

numeros.splice(numeros.length - 1)
console.log(`9) borre el ultimo numero del array (6): ${numeros}`);


//punto 10

console.log('10) muestro los elementos del array con un bucle for');
for(let i = 0; i < numeros.length; i++){


console.log(numeros[i]);

}


//punto 11


function Producto(nombre, precio){

this.nombre = nombre;
this.precio = precio;
}

const producto1 = new Producto('Producto1', 12999);
const producto2 = new Producto('Producto2', 124459);
const producto3 = new Producto('Producto3', 8765);

var productos = [];
productos.push(producto1);
productos.push(producto2);
productos.push(producto3);


console.log(`11) creo array de productos con 3 productos cargados`);
for(let i = 0; i < productos.length; i++){

    console.log(productos[i]);

}




//punto 12

console.log('12) voy a mostrar el primer producto del array');
console.log(productos[0]);


//punto 13

console.log('13) cambie el precio del segundo producto del array');

productos[1].precio = 135000;

for(let i = 0; i < productos.length; i++){

    console.log(productos[i]);

}


//punto 14

console.log('14) elimine el primer producto del array');
productos.shift();
for(let i = 0; i < productos.length; i++){

    console.log(productos[i]);

}

//punto 15
//no vimos prototype todavia

//punto 16
//despues lo hago

//punto 17


const nuevoArray = numeros.filter(num => num > 3)
console.log(`17) Muestro el nuevo arrayFiltrado que tiene los elementos del array numeros mayores a tres: ${nuevoArray}`);

//punto 18



































