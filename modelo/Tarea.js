// Clase que representa una tarea con sus atributos y modificadores de atributos

class Tarea {
  #id;
  #descripcion;
  #realizada;

  constructor(id, descripcion, realizada = false) {
    this.#id = id;
    this.setDescripcion(descripcion);
    this.#realizada = realizada;
  }

  getDescripcion() {
    return this.#descripcion;
  }

  setDescripcion(descripcion) {
    if (typeof descripcion !== "string" || descripcion.trim() === "") {
      throw new Error("Ingrese una descripción válida");
    }
    this.#descripcion = descripcion;
  }

  finalizarTarea() {
    if (!this.#realizada) {
      this.#realizada = true;
    }
  }

  reabrirTarea() {
    if (this.#realizada) {
      this.#realizada = false;
    }
  }

  tareaRealizada() {
    return this.#realizada;
  }

  getId() {
    return this.#id;
  }

  setId(id) {
    this.#id = id;
  }
}

module.exports = Tarea;

// En este archivo se encapsula la lógica de una tarea individual, siguiendo el principio de encapsulamiento.
// Las propiedades privadas (#id, #descripcion, #completado) protegen el estado interno de la tarea
// y se proporcionan métodos públicos para interactuar con la tarea (obtener atributos y marcarla como completada).
