
//?------------------------------------------------------------------
//? PUNTO 1


function multiplicar(num1, num2, callback) {

    let resultado = num1 * num2;


    callback(resultado);
}

console.log('1)');

multiplicar(2, 15, callback = (resultado) => {

    console.log(`El resultado de la multiplicacion es: ${resultado}`);

});


//?------------------------------------------------------------------
//? PUNTO 2

function operaciones(num1, num2, callback) {

    console.log('operando...');

    return callback(num1, num2);

}

console.log('2)');
const resultSuma = operaciones(2, 5, callbackS = (num1, num2) => {

    return num1 + num2;

});

const resultResta = operaciones(10, 5, callbackS = (num1, num2) => {

    return num1 - num2;

});


console.log(`Resultado de la suma: ${resultSuma} y resultado de la resta: ${resultResta}`);


//?------------------------------------------------------------------
//? PUNTO 3

function imprimirRetrasado(callback) {


    setTimeout(callback, 2000);

}

console.log('3)');

imprimirRetrasado(callback = () => {

    console.log('Esto es un callback!');

})

//?------------------------------------------------------------------
//? PUNTO 4


function filtrarPares(numeros, callback) {


    console.log(`Array: ${numeros}`);

    callback(numeros);


}


const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log('4)');

filtrarPares(numeros, callback = (numeros) => {

    numeros.forEach(element => {

        if (element % 2 == 0) {

            console.log(element);

        }
    });
});


//?------------------------------------------------------------------
//? PUNTO 6


const set1 = new Set();

set1.add(1);
set1.add(2);
set1.add(3);
set1.add(4);
set1.add(5);

set1.delete(3);
set1.add(6);

console.log('6)');
console.log(set1);


//?------------------------------------------------------------------
//? PUNTO 7

const setNumeros = new Set();
setNumeros.add(1);
setNumeros.add(2);
setNumeros.add(3);
setNumeros.add(4);
setNumeros.add(5);

function setToArray(setNumeros) {

    let arrayNumeros = [];

    setNumeros.forEach(element => {

        arrayNumeros.push(element);

    });

    return arrayNumeros;
}

console.log('7)');
console.log(`Array: ${setToArray(setNumeros)}`);


//?------------------------------------------------------------------
//? PUNTO 8


const arrayNum = [1, 2, 3, 4, 5, 4, 5, 6, 7, 8, 9, 9, 10];


function arrayToSet(arrayNum) {

    let setNum = new Set();

    arrayNum.forEach(element => {

        setNum.add(element);
    });

    return setNum;
}

console.log('8)');

console.log(arrayToSet(arrayNum));


//?------------------------------------------------------------------
//? PUNTO 9


const set2 = new Set();

set2.add(1);
set2.add(2);
set2.add(3);
set2.add(4);
set2.add(5);
set2.add(6);



function comprobarExistencia(buscado, set2) {

    for (const element of set2) {

        if (element == buscado) {

            return true;

        }
    }
    return false;
}


const existencia = comprobarExistencia(4, set2);
console.log(`9)`);
console.log(`~false = no existe~ ~true = existe~ ---> existencia: ${existencia}`);



//?------------------------------------------------------------------
//? PUNTO 10


function mostrarSet(set1) {

    for (const element of set1) {

        console.log(element);
    }
}

mostrarSet(set1); //*Es el set del punto 6


//?------------------------------------------------------------------
//? PUNTO 11


const map1 = new Map();

console.log('11)');
map1.set("nombre", "Juan");
map1.set("Edad", "30");
map1.set("ciudad", "Madrid");

console.log(map1);
map1.set("pais", "Espania"); //*Agrego el campo ciudad con el valor espania
map1.delete("ciudad");       //*Elimino el campo ciudad

console.log(map1);


//?------------------------------------------------------------------
//? PUNTO 12

console.log(`12)`);
console.log(`Accediendo al valor de nombre...`);
console.log(`Es: ${map1.get("nombre")}`);



//?------------------------------------------------------------------
//? PUNTO 13

function iterandoYMostrandoMap(map1) {

    for (const [key, value] of map1) {

        console.log(`${key} = ${value}`);

    }
}

console.log('13)');
iterandoYMostrandoMap(map1)



//?------------------------------------------------------------------
//? PUNTO 14


function comprobarExistencia(campoAComprobar, map1) {

    return map1.has(campoAComprobar);
}

console.log('14)');
if (comprobarExistencia("Edad", map1)) {

    console.log('El campo edad existe en el map');
}
else {

    console.log('El campo edad no existe en el map');
}


//?------------------------------------------------------------------
//? PUNTO 15



function mapToArray(map1){

let array1 = [];


for(const [key, value] of map1){

    array1.push({[key] : value})

}
return array1;
}

console.log('15)');

console.log(mapToArray(map1));


//?------------------------------------------------------------------
//? PUNTO 16


const arrayAFiltrar = [5,10,15,20,25];

const arrayFiltrado = arrayAFiltrar.filter(numero => numero > 10);

console.log('16)');
console.log(`Numeros del array filtrado: ${arrayFiltrado}`);


//?------------------------------------------------------------------
//? PUNTO 17

const arrayDuplicar = [1,2,3,4,5];

const arrayDuplicado = arrayDuplicar.map(numero  =>numero * 2);


console.log('17)');
console.log(`El array duplicado: ${arrayDuplicado}`);

//?------------------------------------------------------------------
//? PUNTO 18

const arrayNombre = ["juan","maria","pedro"];

const arrayNombreMayus = arrayNombre.map(nombre => nombre.toUpperCase());

console.log('18)');
console.log(`Array nombres en mayuscula: ${arrayNombreMayus}`);


//?------------------------------------------------------------------
//? PUNTO 19


const arrayPalabras = ["arbol","casa","elefante","sol"];

const arrayPalabrasFiltrado = arrayPalabras.filter(palabra => palabra.length < 5)

console.log('19)');
console.log(`El array filtrado quedo asi: ${arrayPalabrasFiltrado}`);



//?------------------------------------------------------------------
//? PUNTO 20



const arrayNumeritos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const arrayNumeritosFiltrados = arrayNumeritos.filter(num => num%2 == 0);

const arrayNumeritosFiltradosSumados = arrayNumeritosFiltrados.reduce((cont,num) => {
    return cont + num;
})

console.log('20)');
console.log(`Los numeros filtrados sumados dan: ${arrayNumeritosFiltradosSumados}`);



//?-----------------EJERCICIOS AVANZADOS-------------------------------------------------
//?...






