const fs = require("fs");
const ListaDeTareas = require("../modelo/ListaDeTareas");
const Tarea = require("../modelo/Tarea");

const archivoTareas = "./data/tareas.js";

class ListaController {
  constructor() {
    this.tareas = new ListaDeTareas();
    this.cargarTareasDesdeArchivo();
  }

  cargarTareasDesdeArchivo() {
    try {
      const data = fs.readFileSync(archivoTareas, "utf-8");
      const tareasGuardadas = JSON.parse(data);
      tareasGuardadas.forEach((tarea) => {
        const nuevaTarea = new Tarea(
          tarea.id,
          tarea.descripcion,
          tarea.realizada
        );
        this.tareas.agregarTareaCompleta(nuevaTarea);
      });
    } catch (error) {
      console.log(
        "No se pudo cargar el archivo de datos. Comenzando con una lista vacía."
      );
    }
  }

  guardarTareasEnArchivo() {
    const tareas = this.tareas.obtenerTareas().map((tarea) => ({
      id: tarea.getId(),
      descripcion: tarea.getDescripcion(),
      realizada: tarea.tareaRealizada(),
    }));
    fs.writeFileSync(archivoTareas, JSON.stringify(tareas, null, 2), "utf-8");
  }

  agregarTarea(descripcion) {
    const nuevaTarea = this.tareas.agregarTarea(descripcion);
    this.guardarTareasEnArchivo();
    return nuevaTarea;
  }

  obtenerTareas() {
    return this.tareas.obtenerTareas();
  }

  eliminarTarea(id) {
    this.tareas.eliminarTarea(id);
    this.guardarTareasEnArchivo();
  }

  completarTarea(id) {
    this.tareas.completarTarea(id);
    this.guardarTareasEnArchivo();
  }

  obtenerNumeroDeTareas() {
    return this.tareas.obtenerNumeroDeTareas();
  }

  tareasPendientes() {
    return this.tareas.tareasPendientes();
  }

  obtenerTareaPorId(id) {
    return this.tareas.existeTarea(id);
  }
}

module.exports = ListaController;
