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


function x(response) {
    const tasks = response.data;
    printTasks(tasks);
}

function cbError(error) {
    console.log(error);
}

function getTasks() {
    axios.get('https://tasks-crud.academlo.com/api/tasks', { headers: headers })
        .then(x)
        .catch(cbError)
}

// printTasks();
getTasks();