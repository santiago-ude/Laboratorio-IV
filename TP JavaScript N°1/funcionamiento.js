//punto 1

const nombre = "santiago";
console.log("1) " + nombre);

//punto 2

const num1 = 5;
const num2 = 9;
const resultado = num1 + num2;
console.log(
  "2) num1: " + num1 + " y num2: " + num2 + " resultado: " + resultado
);

//punto 3
const PI = Math.PI;
console.log("3) " + PI);

//punto 4

function saludar(nombre) {
  console.log("4) Hola " + nombre + " como te encontras?");
}
saludar("lautaro");

//punto 5

const numeroEvaluado = 3;

function esPar(numeroEvaluado) {
  if (numeroEvaluado % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

if (esPar(numeroEvaluado)) {
  console.log("5) El numero " + numeroEvaluado + " es par");
} else {
  console.log("5) El numero " + numeroEvaluado + " es impar");
}

// punto 6

arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function sumarArray(arrayNumeros) {
  let acumulador = 0;
  let i = 0;

  while (arrayNumeros[i] != null) {
    acumulador = acumulador + arrayNumeros[i];

    i++;
  }

  return acumulador;
}

console.log(
  "6) La suma de los elementos del array es " + sumarArray(arrayNumeros)
);

//punto 7

const persona = {
  nombre: "robertito",
  edad: 55,
  profesion: "profesor",
};

console.log(persona);

//punto 8

function Producto(nombre, precio, stock) {
  this.nombre = nombre;
  this.precio = precio;
  this.stock = stock;
}

const producto = new Producto("Pelota", 14000.24, 100);
console.log(producto);

//punto 9

function Pelicula(titulo, director, anio) {
  this.titulo = titulo;
  this.director = director;
  this.anio = anio;
}

const pelicula = new Pelicula("La Era de Hielo", "Facundo Procelli", 2004);
console.log(pelicula);

//punto 10

const frutas = [
  "frutilla",
  "manzana",
  "naranja",
  "arandanos",
  "mandarina",
  "banana",
  "pera",
  "frambuesa",
];
console.log("10)" + frutas[2]);

//punto 11 (utilizando el array anterior)

//antes
console.log("11) antes: " + frutas);

frutas.push("frutos rojos");

//despues
console.log("  despues: " + frutas);

//punto 12

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function filtrarPares(numeros) {
  let numerosPares = [];
  let i = 0;

  while (numeros[i] != null) {
    if (esPar(numeros[i])) {
      numerosPares.push(numeros[i]);
    }

    i++;
  }

  return numerosPares;
}

console.log("12) pares: " + filtrarPares(numeros));

//punto 13

//constructor
function Persona(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;
}
//

function crearPersona(nombre, edad) {
  let persona = new Persona(nombre, edad);

  return persona;
}

console.log(crearPersona("santiago ude", 20));

//punto 14

const personaAux = new Persona("Fabricio Bustos", 28);

function obtenerInfo(persona) {
  console.log(`Nombre: ${persona.nombre} Edad: ${persona.edad}`);
}
obtenerInfo(personaAux);

//punto 15

const numeros1 = [1, 2, 3, 4, 5];

function duplicarArray(numeros1) {
  let i = 0;
  let numerosDuplicado = [];

  while (numeros1[i] != null) {
    numerosDuplicado.push(numeros[i]);
    numerosDuplicado.push(numeros[i]);
    i++;
  }

  return numerosDuplicado;
}

console.log("15)Primer array: " + numeros1);
console.log("Array duplicado: " + duplicarArray(numeros1));

//punto 16

//despues lo hago

//punto 17

const arrayPalabras = [
  "silvina",
  "martin",
  "leonardo",
  "lautaro",
  "santiago",
  "facundo",
  "romina",
];

function filtrarPorLongitud(arrayPalabras, numeroFiltro) {
  let nuevoArrayFiltrado = [];
  let i = 0;

  arrayPalabras.forEach((element) => {
    if (element.length == numeroFiltro) {
      nuevoArrayFiltrado.push(element);
    }
  });

  return nuevoArrayFiltrado;
}

console.log("17) (filtrado 7) " + filtrarPorLongitud(arrayPalabras, 7));

//punto 18

//CONSTRUCTOR ESTUDIANTE---------------------

function Estudiante(nombre, edad, promedio) {
  this.nombre = nombre;
  this.edad = edad;
  this.promedio = promedio;
}

//----------------------------------------

const arrayEstudiantes = [];
arrayEstudiantes.push(new Estudiante("lautaro", 20, 10));
arrayEstudiantes.push(new Estudiante("facundo", 20, 7));
arrayEstudiantes.push(new Estudiante("santiago", 20, 8));

console.log(arrayEstudiantes);

//punto 19

function buscarEstudiante(arrayEstudiantes, nombre) {
  let i = 0;

  while (arrayEstudiantes[i] != null) {
    if (arrayEstudiantes[i].nombre == nombre) {
      return arrayEstudiantes[i];
    }
    i++;
  }

  return null;
}

console.log("19) (null = no se encuentra en el array)");
console.log(buscarEstudiante(arrayEstudiantes, "facundo"));

//punto 20

function promedioClase(arrayEstudiantes) {
  let promedioPromedios = 0;
  let contador = 0;

  arrayEstudiantes.forEach((element) => {
    promedioPromedios = promedioPromedios + element.promedio;
    contador++;
  });

  let promedio = promedioPromedios / contador;

  return promedio;
}

console.log(
  "El promedio de las notas de los estudiantes es: " +
  promedioClase(arrayEstudiantes)
);

//punto 21

const Auto = {
  marca: "Ford",
  modelo: "F-150",
  anio: 2024,
  arrancar: function () {
    console.log(`Mi ${this.marca + " " + this.modelo} arranco!!`);
  },
  detener: function () {
    console.log(`Mi ${this.marca + " " + this.modelo} se detuvo!!`);
  },
};

console.log(Auto);
Auto.arrancar();
Auto.detener();


//punto 22

function Personaa(nombre, edad) {


  this.nombre = nombre;
  this.edad = edad;
  this.saludar = function () {

    console.log(`Hola, como estas? mi nombre es ${this.nombre} y tengo ${this.edad} anios`);

  }

}

const personita = new Personaa('roberto', 29);
console.log('22) ');
personita.saludar();


//punto 23


function Carrito(fecha) {

  this.fecha = fecha;
  this.productos = [];
  this.agregarProducto = function (producto) {

    this.productos.push(producto);

  }

}


const productito = new Producto('zapato', 78000, 100);

const carrito = new Carrito('12 de mayo');

carrito.agregarProducto(productito);


console.log(carrito);



//punto 24
//despues lo hago


//punto 25

function eliminarEstudiante(arrayEstudiantes, nombre) {

  let i = 0;

  while (arrayEstudiantes[i] != null) {

    if (arrayEstudiantes[i].nombre == nombre) {

      arrayEstudiantes.splice(i,1);

    }
    i++;
  }

return arrayEstudiantes;
}


console.log(eliminarEstudiante(arrayEstudiantes,'santiago'));





