//1

function mostrarMensaje(mensaje,callback){

console.log(mensaje);

callback();


}

console.log('1)');
mostrarMensaje('soy un capito (mensaje)',callback  = () =>{

    console.log('Mensaje impreso (callback)');

})



//----------------------------------------------------------------
//2

console.log('2)');
function sumarAsync(num1,num2,callback){

let resultado = num1 + num2;
console.log('resultado');

callback();
}


sumarAsync(1,2,callback = () =>{

    console.log('La suma fue concretada');

})

//----------------------------------------------------------------
//3

console.log('3)');
function retrasarSegundos(callback, segundos){


setTimeout(callback,segundos);


};

retrasarSegundos(callback =()=> {

console.log('Recien ahora se ejecuto el callback');

},3000);


//----------------------------------------------------------------
//4

console.log('4)');
function obtenerUsuario(ID, callback){

    let arrayDatos = [1,'santiago','ude',20];

    console.log(`ID: ${arrayDatos[0]} nombre: ${arrayDatos[1]} apellido: ${arrayDatos[2]} edad: ${arrayDatos[3]}`);
    callback();
}


obtenerUsuario(1, callback = ()=>{

console.log('Consulta realizada');

})



