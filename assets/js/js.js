import { getTasks, createTask } from './crud.js'

getTasks();
window.createTask = createTask;

// Crear la tarea con datos de un formulario
// Después de crear una tarea actualizar el listado de tareas sin recargar la página