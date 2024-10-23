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

  eliminarTarea(id) {
    const tareaIndex = this.#tareas.findIndex((tarea) => tarea.getId() === id);
    if (tareaIndex === -1) {
      throw new Error("No se encontró la tarea.");
    }

    this.#tareas.splice(tareaIndex, 1);

    this.#tareas.forEach((tarea, index) => {
      tarea.setId(index + 1);
    });
  }
}

module.exports = ListaDeTareas;
