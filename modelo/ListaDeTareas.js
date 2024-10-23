const Tarea = require("./Tarea");

class ListaDeTareas {
  #tareas;
  constructor() {
    this.#tareas = [];
  }

  agregarTarea(descripcion) {
    if (typeof descripcion !== "string" || descripcion.trim() === "") {
      throw new Error("Ingrese una descripcion valida");
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
