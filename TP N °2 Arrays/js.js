//* punto 1

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function sumaArray(arrayNumeros) {
  let sumaNumeros = 0;

  arrayNumeros.forEach((element) => {
    sumaNumeros = sumaNumeros + element;
  });

  return sumaNumeros;
}
console.log("1)");
console.log("La suma de los elementos del array es: " + sumaArray(numeros));

//*punto 2

const promedio = sumaArray(numeros) / numeros.length;
console.log("2)");
console.log("El promedio de los numeros del array es: " + promedio);

//*punto 3
console.log("3)");
console.log("El numero maximo del array es: " + Math.max(...numeros));
console.log("El numero minimo del array es: " + Math.min(...numeros));

//*punto 4

const valorBuscado = 8;

function buscarValor(arrayNumeros, valorBuscado) {
  let i = 0;

  while (i < arrayNumeros.length) {
    if (arrayNumeros[i] == valorBuscado) {
      return i;
    }

    i++;
  }

  return -1;
}
console.log("4)");
console.log(
  "Si encuentra le valor 8 devuelve la posicion y sino devuelve -1: " +
  buscarValor(numeros, valorBuscado)
);

//*punto 5

var arrayImpares = [];
var arrayPares = [];

function filtrarPares(arrayNumeros, arrayImpares, arrayPares) {
  arrayNumeros.forEach((element) => {
    if (element % 2 == 0) {
      arrayPares.push(element);
    } else {
      arrayImpares.push(element);
    }
  });
}

filtrarPares(numeros, arrayImpares, arrayPares);

console.log("5)");
console.log("El array de impares es el siguiente: " + arrayImpares);
console.log("El array de pares es el siguiente  : " + arrayPares);

//* punto 6

const arrayCDuplicados = [5, 5, 1, 1, 3, 4, 5, 6, 7, 8, 34, 2, 5];

function eliminarDuplicados(arrayNumeros) {
  let i = 0;
  let arrayAux = [];
  let posDuplicados = [];

  while (i < arrayNumeros.length) {
    arrayAux.push(arrayNumeros[i]);

    let j = i + 1;

    while (j < arrayNumeros.length) {
      if (arrayAux[i] == arrayNumeros[j]) {
        posDuplicados.push(j);
      }
      j++;
    }

    if (posDuplicados != null) {
      posDuplicados.forEach((element) => {
        arrayNumeros.splice(element, 1);
      });
      posDuplicados.splice(0);
    }

    i++;
  }
}

eliminarDuplicados(arrayCDuplicados);
console.log("6)");
console.log(
  "Array de numeros con los duplicados borrados: " + arrayCDuplicados
);

//* punto 7

const arrayDesordenado = [5, 4, 1, 3, 2, 8, 9, 6, 7, 10];

arrayDesordenado.sort(function (a, b) {
  return a - b;
});

console.log("7)");
console.log(`${arrayDesordenado}`);

//* punto 8

const valorABorrar = 9;
const arrayDeValores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 10, 9];

function borrarValor(valorABorrar, arrayDeValores) {
  let i = 0;
  const tamanio = arrayDeValores.length;

  while (i < tamanio) {
    if (arrayDeValores[i] == valorABorrar) {
      arrayDeValores.splice(i, 1);
    } else {
      i++;
    }
  }
}

borrarValor(valorABorrar, arrayDeValores);

console.log("8)");
console.log(`array con todos los 9 borrados (tenia 3): ${arrayDeValores}`);

//* punto 9

const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const array2 = [11, 222, , 11, 12, 12, 13, 10, 33, 2, 4, 5, 6, 123];

var arrayConcatenadoSinDuplicados = array1.concat(array2);

eliminarDuplicados(arrayConcatenadoSinDuplicados);

console.log("9)");
console.log(
  `Array concatenado y sin duplicados: ${arrayConcatenadoSinDuplicados}`
);

//* punto 10

function Producto(nombre, cantidad) {
  this.nombre = nombre;
  this.cantidad = cantidad;
}

function Compra() {
  this.productos = [];

  this.sumarProducto = function (nombre, cantidad) {
    this.productos.push(new Producto(nombre, cantidad));
  };
}

const compra = new Compra();

compra.sumarProducto("pelota", 10);
compra.sumarProducto("botines", 5);
compra.sumarProducto("canilleras", 20);

console.log("10)");
console.log(compra.productos);

//* punto 11

function Contacto(nombre, nroTelefono, email) {
  this.nombre = nombre;
  this.nroTelefono = nroTelefono;
  this.email = email;
}

const contacto1 = new Contacto(
  "santiago",
  "2236226805",
  "santiude2004@gmail.com"
);
const contacto2 = new Contacto("facundo", "2234567890", "facrack12@gmail.com");
const contacto3 = new Contacto(
  "gianella",
  "2236882728",
  "gianeesorano@gmail.com"
);
const contacto4 = new Contacto(
  "renzo",
  "22366655644",
  "rendomingo23@gmail.com"
);
const contacto5 = new Contacto("tomas", "2239049567", "tomicracken@gmail.com");

var contactos = [];
contactos.push(contacto1, contacto2, contacto3, contacto4, contacto5);

console.log("11)");
console.log(contactos);

//* punto 12

var parrafo =
  "River Plate hoy en dia es el equipo mas grande de argentina, a pesar de la mayor cantidad de titulos de su eterno rivar Boca Juniros, no cambia la grandeza" +
  "del club de nuniez, river plate es el equipo con mas campeonatos en distintas decadas.";

var palabraBuscada = "riVEr";

const parrafoMinuscula = parrafo.toLowerCase();
const palabraMinuscula = palabraBuscada.toLowerCase();

const parrafoSeparado = parrafoMinuscula.split(/\s+/);

var contador = 0;

for (let i = 0; i < parrafoSeparado.length; i++) {
  if (parrafoSeparado[i] == palabraMinuscula) {
    contador++;
  }
}
console.log("12)");
console.log(`La palabra que se busco esta en el parrafo ${contador} veces`);

//* punto 13

function Persona(nombre, apellido, edad, dni) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.edad = edad;
  this.dni = dni;
}

const persona1 = new Persona("santiago", "ude", 20, "45820343");
const persona2 = new Persona("facundo", "ude", 20, "45820344");
const persona3 = new Persona("gianella", "sorano", 19, "46112411");
const persona4 = new Persona("miguel", "ude", 64, "13704204");
const persona5 = new Persona("ramon", "sosa", 24, "12345678");
const persona6 = new Persona("miguel", "borja", 32, "11234655");

const arrayPersonas = [];
arrayPersonas.push(persona1, persona2, persona3, persona4, persona5, persona6);

arrayPersonas.sort(function (a, b) {
  return a.apellido.localeCompare(b.apellido);
});

console.log(arrayPersonas);

//*punto 15

function Productito(nombre, precio, cantidad) {
  this.nombre = nombre;
  this.precio = precio;
  this.cantidad = cantidad;
}

function Carrito() {
  this.productos = [];

  this.agregar = function (producto) {
    this.productos.push(producto);
  };
  this.eliminar = function (nombreProducto) {
    let i = 0;

    while (i < this.productos.length) {
      if (this.productos[i].nombre == nombreProducto) {
        this.productos.splice(i, 1);
      }

      i++;
    }
  };

  this.calcularCosto = function () {

    let sumador = 0;

    this.productos.forEach(element => {

      sumador = sumador + element.precio;

    });

    return sumador;
  }


}


const productito1 = new Productito('pelotita', 145.99, 10);
const productito2 = new Productito('medias antideslizantes', 100, 30);
const productito3 = new Productito('canilleras', 120, 15);



var carrito1 = new Carrito();

carrito1.agregar(productito1);
carrito1.agregar(productito2);
carrito1.agregar(productito3);


console.log('El precio del carrito actual es ' + carrito1.calcularCosto());

//* punto 16


function Tarea(nombre, duracion) {

  this.nombre = nombre;
  this.duracion = duracion;
  this.estado = false;
}


function gestorTareas() {

  this.tareas = [];


  this.agregarTarea = function (tarea) {

    this.tareas.push(tarea);

  }
    ;
  this.completarTarea = function (nombreTarea) {

    this.tareas.forEach(element => {

      if (element.nombre == nombreTarea) {

        element.estado = true;
        console.log('Tarea completada: "' + element.nombre + '"');

      }


    });

  }
    ;
    this.listarTareasPendientes = function() {
      this.tareas.forEach(element => {

        if (element.estado == false) {
          console.log(element);
        }
      });


    }


}


const tarea1 = new Tarea('Hacer la cama', 10);
const tarea2 = new Tarea('Lavarme los dientes', 5);
const tarea3 = new Tarea('Lavar el baño', 30);
const tarea4 = new Tarea('Cocinar', 60);
const tarea5 = new Tarea('Comer', 35);


var gestorTareas = new gestorTareas();

gestorTareas.agregarTarea(tarea1);
gestorTareas.agregarTarea(tarea2);
gestorTareas.agregarTarea(tarea3);
gestorTareas.agregarTarea(tarea4);
gestorTareas.agregarTarea(tarea5);


gestorTareas.completarTarea('Hacer la cama')
gestorTareas.listarTareasPendientes();















