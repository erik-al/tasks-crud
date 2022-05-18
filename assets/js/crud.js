import { printTasks } from "./ui.js";

const token = '915|R9cNRDzg5yxJmJU1CryU2h2yzpbe6FmZorjktO6y';
const headers = {
    Authorization: `Bearer ${token}`
}
const baseURL = 'https://tasks-crud.academlo.com/api';
let editingID = null;

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

function editTask(id) {
    axios.get(`${baseURL}/tasks/${id}`, { headers: headers })
        .then(function (response) {
            editingID = id;
            const task =  response.data;
            document.getElementById('name').value = task.name;
            document.getElementById('description').value = task.description;
        })
        .catch(function (error) {
            alert('No se pudo cargar la tarea');
        })
}

function updateTask() {
    const taskEdited = {
        name: document.getElementById('name').value,
        description: document.getElementById('description').value
    }

    axios.put(`${baseURL}/tasks/${editingID}`, taskEdited, { headers: headers })
        .then(function (response) {
            alert('Se editó la tarea correctamente');
            getTasks();
        })
        .catch(function (error) {
            alert('No se pudo editar la tarea');
        })
}

export { getTasks, createTask, deleteTask, editTask, updateTask }