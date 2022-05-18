import { getTasks, createTask, deleteTask } from './crud.js'

getTasks();

window.createTask = createTask;
window.deleteTask = deleteTask;

// Crear la tarea con datos de un formulario
// Después de crear una tarea actualizar el listado de tareas sin recargar la página