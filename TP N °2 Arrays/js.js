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

const arrayCDuplicados = [1, 2, 3, 4, 4, 5, 6, 7, 2, 9, 10];

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

console.log(
  "Array de numeros con los duplicados borrados: " + arrayCDuplicados
);
