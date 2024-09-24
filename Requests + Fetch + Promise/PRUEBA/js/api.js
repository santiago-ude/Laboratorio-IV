    

const url = "http://localhost:3000/tareas";


//GET
export async function GETtareas() {

    try {

        const response = await fetch(url);

        if (!response.ok) {

            throw new Error('HTTP Request Error' + response.status);

        }

        return await response.json();

    } catch (error) {

        if (error instanceof TypeError) {

            console.log('Error de red');

        }
        else {

            console.log('Error al traer datos de las tareas');

        }
        throw error;

    }
}

//GET por ID
export async function GETporID(id) {

    try {

        const response = await fetch(`${url}/${id}`, {

            method: "GET"
        })

        if (!response.ok) {

            throw new Error('HTTP Request Error' + response.status);

        }

        return await response.json();


    } catch (error) {

        if (error instanceof TypeError) {

            console.log('Error de red');

        }
        else {

            console.log('Error al traer datos de las tareas');

        }
        throw error;
    }
}

//POST 
export async function POSTtareas(tarea) {

    try {

        const response = await fetch(url, {

            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(tarea)
        });

        if (!response.ok) {

            throw new Error('HTTP Request Error' + response.status);
        }

        return await response.json();

    } catch (error) {

        if (error instanceof TypeError) {

            console.log('Error de red');
        }
        else {

            console.log('Error al cargar una tarea');

        }
        throw error;
    }
}

//DELETE
export async function DELETEtarea(id) {


    try {

        const response = await fetch(`${url}/${id}`, {

            method: "DELETE"
        });

        if (!response.ok) {

            console.log('HTTP Request Error' + response.status);

        }

        return await response.json();

    } catch (error) {

        if (error instanceof TypeError) {

            console.log('Error de red');

        } else {

            console.log('Error al eliminar una tarea ');

        }

        throw error;
    }

}


//PUT
export async function PUTtarea(id, tarea) { 

    try {

        const response = await fetch(`${url}/${id}`, {

            method: "PUT",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(tarea)
        })

        if (!response.ok) {

            throw new Error('HTTP Request Error' + response.status);

        }

        return await response.json();

    } catch (error) {

        if (error instanceof TypeError) {

            console.log('Error de Red');

        } else {

            console.log('Error al querer actualizar una tarea');

        }

        throw error;
    }

}

