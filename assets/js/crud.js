import { printTasks } from "./ui.js";

const token = '915|R9cNRDzg5yxJmJU1CryU2h2yzpbe6FmZorjktO6y';
const headers = {
    Authorization: `Bearer ${token}`
}
const baseURL = 'https://tasks-crud.academlo.com/api';

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

function deleteTask(id) {
    const confirmation = confirm('¿Estás seguro de eliminar la tarea?');
    if(!confirmation){
        return
    }
    axios.delete(`${baseURL}/tasks/${id}`, { headers: headers })
        .then(function () {
            alert('La tarea se eliminó correctamente');
            getTasks();
        })
        .catch(function (error) {
            alert('No se pudo eliminar la tarea');
        })
}

export { getTasks, createTask, deleteTask }