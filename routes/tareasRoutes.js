// Define las rutas para gestionar las tareas

const express = require("express");
const ListaController = require("../controlador/ListaController");

const router = express.Router();

const listaController = new ListaController();

router.post("/tareas", (req, res) => {
  try {
    listaController.agregarTarea(req.body.descripcion);
    res.status(200).send({ mensaje: "Tarea agregada exitosamente" });
  } catch (error) {
    return res.status(500).send({ error: "Ingrese una descripción valida" });
  }
});

router.delete("/tareas/:id", (req, res) => {
  try {
    listaController.eliminarTarea(parseInt(req.params.id));
    res.status(200).send({ mensaje: "Tarea eliminada exitosamente." });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      error: "Ocurrio un error, verifique que el id proporcionado exista.",
    });
  }
});

router.put("/tareas/:id", (req, res) => {
  try {
    listaController.completarTarea(parseInt(req.params.id));
    res.status(200).send("Tarea completada con exitosamente.");
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      error: "Ocurrio un error, verifique que el id proporcionado exista.",
    });
  }
});

router.get("/tareas", (req, res) => {
  try {
    const tareasArchivo = listaController.obtenerTareas();
    let tareas = [];
    tareasArchivo.forEach((tarea) => {
      tareas.push({
        ID: tarea.getId(),
        Descripcion: tarea.getDescripcion(),
        Estado: tarea.tareaRealizada() ? "Realizada" : "Pendiente",
      });
    });
    res.status(200).send(tareas);
  } catch (error) {
    return res
      .status(500)
      .send({ error: "Ocurrió un error al obtener las tareas." });
  }
});

router.get("/tareas_pendientes", (req, res) => {
  try {
    const tareasPendientes = listaController.tareasPendientes();
    let tareas = [];
    tareasPendientes.forEach((tarea) => {
      tareas.push({
        ID: tarea.getId(),
        Descripcion: tarea.getDescripcion(),
        Estado: tarea.tareaRealizada() ? "Realizada" : "Pendiente",
      });
    });
    res.status(200).send(tareas);
  } catch (error) {
    return res
      .status(500)
      .send({ error: "Ocurrió un error al obtener las tareas." });
  }
});

router.get("/tareas/:id", (req, res) => {
  try {
    const tarea = listaController.obtenerTareaPorId(parseInt(req.params.id));
    res.status(200).send({
      ID: tarea.getId(),
      Descripcion: tarea.getDescripcion(),
      Estado: tarea.tareaRealizada() ? "Realizada" : "Pendiente",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      error:
        "Ocurrio un error, verifique que exista una tarea con el ID proporcionado.",
    });
  }
});

module.exports = router;
