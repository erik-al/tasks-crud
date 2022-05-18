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
                            <div class="text-end">
                                <button class="btn btn-danger" onclick="deleteTask(${tasks[i].id})">
                                    <i class="fas fa-trash-alt"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>`
    }
    // Imprimir el HTML
    container.innerHTML = html;
}

export { printTasks }