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
      throw new Error("Ingrese una descripcion valida");
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

  isRealizada() {
    return this.#realizada;
  }

  getId() {
    return this.#id;
  }
}

module.exports = Tarea;
