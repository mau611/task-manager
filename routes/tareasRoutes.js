const express = require("express");
const ListaController = require("../controlador/ListaController");

const router = express.Router();

const listaController = new ListaController();

router.post("/tareas", (req, res) => {
  try {
    listaController.agregarTarea(req.body.descripcion);
    res.status(200).send("Tarea agregada exitosamente");
  } catch (error) {
    return res.status(500).send({ error: "Ingrese una descripción valida" });
  }
});

router.delete("/tareas/:id", (req, res) => {
  try {
    listaController.eliminarTarea(parseInt(req.params.id));
    res.status(200).send("Tarea eliminada exitosamente.");
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      error: "Ocurrio un error, verifique que el id proporcionado exista.",
    });
  }
});

module.exports = router;
