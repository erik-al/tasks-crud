import { getTasks, createTask, deleteTask, editTask, updateTask } from './crud.js'

getTasks();

window.editTask = editTask;
window.createTask = createTask;
window.deleteTask = deleteTask;
window.updateTask = updateTask;

// Crear la tarea con datos de un formulario
// Después de crear una tarea actualizar el listado de tareas sin recargar la página