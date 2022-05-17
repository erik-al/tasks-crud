const token = '915|R9cNRDzg5yxJmJU1CryU2h2yzpbe6FmZorjktO6y';
const headers = {
    Authorization: `Bearer ${token}`
}

function printTasks(tasks) {
    // Identificar el contenedor
    const container = document.getElementById('tasks-container');
    // Generar el HTML
    let html = '';
    for(let i = 0; i < tasks.length; i++) {
        html += `<div class="col-md-6 col-lg-4 mt-3">
                    <div class="card">
                        <div class="card-body">
                        <h5 class="card-title">${tasks[i].name}</h5>
                        <p class="card-text">${tasks[i].description}</p>
                        </div>
                    </div>
                </div>`
    }
    // Imprimir el HTML
    container.innerHTML = html;
}



function getTasks() {
    axios.get('https://tasks-crud.academlo.com/api/tasks', { headers: headers })
        .then(function (response) {
            const tasks = response.data;
            printTasks(tasks);
        })
        .catch(function (error) {
            console.log(error);
        })
}

function createTask() {
    const newTask = {
        name: 'Nueva tarea',
        description: 'Descripción'
    }

    axios.post('https://tasks-crud.academlo.com/api/tasks', newTask, { headers: headers })
        .then(function (response) {
            console.log(response);
            alert('Se creo la tarea correctamente');
        })
        .catch(function (error) {
            alert('No se pudo crear la tarea');
            console.log(error);
        })
}

getTasks();

// Crear la tarea con datos de un formulario
// Después de crear una tarea actualizar el listado de tareas sin recargar la página