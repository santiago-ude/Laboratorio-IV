

const urlBase = "http://localhost:3000/tareas"

//GET
export async function GETtareas() {

    try {

        const response = await fetch(urlBase); //devuelve una promise

        if (!response.ok) { //si no es valida tira una excepcion con el status de la respuesta

            throw new Error('HTTP Request error ' + response.status);
        }

        return await response.json(); //si pasa la validacion retorna la respuesta en modo de json

    }
    catch (error) {

        if (error instanceof TypeError) { //verifica si es un error de red

            console.log('Error Red');

        } else {

            console.error('Error al obtener los datos de las tareas');

        }
        throw error;
    }
}

//GETbyID
export async function GETbyIDtareas(id) {


    try {

        const response = await fetch('${urlBase}/${id}', {
            method: "GET"
        });

        if(!response.ok){
            throw new Error('HTTP Request Error ' + response.status);
        }

        return await response.json(); 
        
    } catch (error) {
        

        if(error instanceof TypeError){

            console.log('Error de red');

        }
        else{

            console.log('Error al querer mostrar los datos de una tarea');
        }
    }
}

//POST
export async function POSTtareas(tarea) {


    try {
        //en el post el fetch contiene 2 parametros
        const response = await fetch(urlBase, {

            method: 'POST', //especifica el metodo de la request
            headers: { 'Content-Type': 'application/json' }, //pasa los headers TEXTUALES RESPETANDO MAYUS Y MINUS
            body: JSON.stringify(tarea) // convirete o advierte que se va a pasar un objeto JSON.
        });

        if (!response.ok) {

            throw new Error('HTTP Request Error ' + response.status);

        }


        return await response.json();

    } catch (error) {

        if (error instanceof TypeError) { //verifica si es un error de red

            console.log('Error Red');

        } else {

            console.error('Error al cargar los datos de las tareas');

        }
        throw error;
    }
}

//DELETE
export async function DELETEtarea(id) {


    try {

        const response = await fetch('${urlBase}/${id}', {

            method: "DELETE"
        })

        if (!response.ok) { throw new Error('HTTP Request Error ' + response.status); }


        return await response.json();

    } catch (error) {

        if (error instanceof TypeError) {

            console.log('Error de red');
        }
        else {

            console.log('Error al eliminar una tarea');

        }
    }
}

//PUT
export async function PUTtarea(id,tarea) {

    try {
        
        const response = await fetch(`${url}/${id}`,{

            method: "PUT",
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(tarea)
        });

        if(!response.ok){

            console.log('HTTP Request Error' + response.status);

        }

        return await response.json();

    } catch (error) {


        if(error instanceof TypeError){

            console.log('Error de red');

        }
        else{

            console.log('Error al querer actualizar una tarea');

        }

        
    }
    throw error;

}








































