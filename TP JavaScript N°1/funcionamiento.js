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

      arrayEstudiantes.splice(i, 1);

    }
    i++;
  }

  return arrayEstudiantes;
}

console.log(eliminarEstudiante(arrayEstudiantes, 'santiago'));


//punto 26

var arrayProductos = [];

const productito1 = new Producto('Pelota', 12000, 100);
arrayProductos.push(productito1);

const productito2 = new Producto('Botines', 135000, 10);
arrayProductos.push(productito2);

const productito3 = new Producto('Venda', 500, 20);
arrayProductos.push(productito3);

const productito4 = new Producto('Canillera', 7000, 44);
arrayProductos.push(productito4);

const productito5 = new Producto('Media', 10000, 55);
arrayProductos.push(productito5);



function totalCarrito(arrayProductos) {


  let totalCarrito = 0;

  arrayProductos.forEach(element => {

    totalCarrito = totalCarrito + element.precio;

  });

  return totalCarrito;
}

console.log(`26) El total del carrito es $${totalCarrito(arrayProductos)}`);


//punto 27


function crearCalculadora() {


  let calculadora = {

    sumar: function (num1, num2) {
      return (num1 + num2);
    },

    restar: function (num1, num2) {
      return (num1 - num2);
    },

    multiplicar: function (num1, num2) {
      return (num1 * num2)
    },

    dividir: function (num1, num2) {
      return (num1 / num2);
    }

  }

  return calculadora;

}

var calculadora = crearCalculadora();

const resultadito = calculadora.sumar(5, 8);

console.log(`27) La calculadora sumo 5 + 8 y el resultado dio: ${resultadito}`);



//punto 28

function crearCuentaBancaria() {

  let cuentaBancaria = {

    saldo: 0,
    depositar: function (monto) {
      this.saldo = this.saldo + monto;
    },

    retirar: function (monto) {
      this.saldo = this.saldo - monto;
    },

    verSaldo: function () {
      console.log(`El saldo actual de la cuenta es: $${this.saldo}`);
    }

  }

  return cuentaBancaria;
}


var cuentaBancaria = crearCuentaBancaria();
cuentaBancaria.depositar(10000);
cuentaBancaria.retirar(3000);

console.log('28) Primero se depositaron $10000 y luego se retiraron $3000');

cuentaBancaria.verSaldo();

//punto 29

function Libro(titulo, autor, paginas) {


  this.titulo = titulo;
  this.autor = autor;
  this.paginas = paginas;

  this.verInfo = function () {
    console.log(`Titulo: ${this.titulo} Autor: ${this.autor} Paginas: ${this.paginas}`);
  }

}

const libro = new Libro('Harry Potter', 'Santiago Ude', 150);
libro.verInfo();


//punto 30



function Tarea(tituloTarea) {

  this.tituloTarea = tituloTarea;
  this.completada = false;
  this.marcarCompletada = function () {
    this.completada = true;
  }

}

var arrayTareas = [];
crearTarea('Repasar para el parcial');
crearTarea('Hacer el tp 1');
crearTarea('Cursar Legislacion');
crearTarea('Desayunar bien');
crearTarea('organizar el notion');


function listarTareas(arrayTareas) {

  arrayTareas.forEach(element => {

    console.log(element);

  });

}

function crearTarea(titulo) {

  let tarea = new Tarea(titulo);
  arrayTareas.push(tarea);
}

function marcarTarea(titulo) {

  arrayTareas.forEach(element => {

    if(element.tituloTarea == titulo){

      element.marcarCompletada();
    }
  });

}

marcarTarea('Hacer el tp 1');
marcarTarea('Desayunar bien');

crearTarea('Paja pre parcial')
marcarTarea('Paja pre parcial')
listarTareas(arrayTareas);

