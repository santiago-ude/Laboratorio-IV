

class Tarea {

    constructor(nombre) {

        this.nombre = nombre;
    }
}

const inputTarea = document.getElementById('tarea');

const btnAdd = document.getElementById('btnAdd');

const divError = document.getElementById('error');

const ulLista = document.getElementById('lista');

inputTarea.addEventListener("keydown", () => {


    const tarea = new Tarea(inputTarea.value);

    if (event.key === "Enter") {

        if (inputTarea.value === '') {

            divError.innerText = 'Error de cargado, no se puede insertar una tarea vacia';

            setTimeout(() => {

                divError.innerText = '';

            }, 3000);

            return;
        }

        add(tarea);
        inputTarea.value = '';

    }
})

btnAdd.addEventListener("click", () => {

    if (inputTarea.value === '') {

        divError.innerText = 'Error de cargado, no se puede insertar una tarea vacia';

        setTimeout(() => {

            divError.innerText = ''

        }, 3000);


        return;
    }

    const tarea = new Tarea(inputTarea.value);

    add(tarea);
    inputTarea.value = '';


});


//Escucha que algo va a pasar
//primer parametro el evento ("click") por ejemplo
//segundo parametro la funcion flecha con la accion.


function add(tarea) {

    const li = document.createElement('li');

    li.textContent = tarea.nombre;

    ulLista.appendChild(li);
}


























































































