// Clase que representa una coleccion de tareas

const Tarea = require("./Tarea");

class ListaDeTareas {
  #tareas;
  constructor() {
    this.#tareas = [];
  }

  // Metodo para agregar una tarea creada al arreglo de tareas
  agregarTareaCompleta(tarea) {
    this.#tareas.push(tarea);
  }

  agregarTarea(descripcion) {
    if (typeof descripcion !== "string" || descripcion.trim() === "") {
      throw new Error("Ingrese una descripcion válida");
    }
    const id = this.#tareas.length + 1;
    const nuevaTarea = new Tarea(id, descripcion);
    this.#tareas.push(nuevaTarea);
    return nuevaTarea;
  }

  obtenerNumeroDeTareas() {
    return this.#tareas.length;
  }

  obtenerTareas() {
    return [...this.#tareas];
  }

  tareasPendientes() {
    return this.#tareas.filter((tarea) => !tarea.tareaRealizada());
  }

  // Devuelve una tarea a modo de verificacion si es que esta existe dentro del arreglo de tareas
  existeTarea(id) {
    return this.#tareas.find((tarea) => tarea.getId() === id);
  }

  eliminarTarea(id) {
    if (!this.existeTarea(id)) {
      throw new Error("No se encontró la tarea.");
    }
    this.#tareas = this.#tareas.filter((tarea) => tarea.getId() !== id);
    this.#tareas.forEach((tarea, index) => {
      tarea.setId(index + 1);
    });
  }

  completarTarea(id) {
    const tarea = this.existeTarea(id);
    if (!tarea) {
      throw new Error("No se encontró la tarea.");
    }
    tarea.finalizarTarea();
  }
}

module.exports = ListaDeTareas;

// Este archivo implementa la clase ListaDeTareas, que es responsable de gestionar un conjunto de tareas.
// Se realizo un enfocado en facilitar la gestión de las tareas a través de métodos claros y bien definidos, manteniendo
// la lista de tareas cohesiva y fácilmente manipulable
