
import { GETtareas, POSTtareas } from "./api.js";
import { Tarea } from "../tareas/Tarea.js";


document.addEventListener('DOMContentLoaded', async (e) => {

    console.log(e);
    try {

        const lista = await GETtareas();

        crearTabla(lista);
    } catch (error) {

        console.log(error);

    }
})


function crearTabla(lista) {

    lista.forEach(tarea => {

        crearFila(tarea);

    });

}


function crearFila(tarea) {


    const tr = document.createElement('tr');
    const tdNombre = document.createElement('td');
    tdNombre.textContent = tarea.nombre;
    const tdId = document.createElement('td');
    tdId.textContent = tarea.id;
    const lista = document.getElementById('listaTareas');

    tr.append(tdId, tdNombre);

    lista.appendChild(tr);

}



const formulario = document.getElementById('formulario');
const input = document.getElementById('tarea');

formulario.addEventListener('submit', async (e) => {

    try {

        const tarea = new Tarea(input.value);
        await POSTtareas(tarea);

    } catch (error) {

        console.log(error);

    }
})






































