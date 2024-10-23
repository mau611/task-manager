const readline = require("readline");
const ListaDeTareas = require("./modelo/ListaDeTareas");
const Tarea = require("./modelo/Tarea");

let tareas = new ListaDeTareas();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const mainMenu = () => {
  console.log("\nGestión de Tareas:");
  console.log("1. Listar tareas");
  console.log("2. Añadir tarea");
  console.log("3. Salir");
  rl.question("Elige una opción: ", (answer) => {
    if (answer === "1") {
      console.log("Tareas:");
      if (tareas.obtenerNumeroDeTareas() > 0) {
        tareas.obtenerTareas().forEach((tarea) => {
          console.log(`${tarea.getId()}. ${tarea.getDescripcion()}`);
        });
      } else {
        console.log("Aun no se agregaron tareas.");
      }
      mainMenu();
    } else if (answer === "2") {
      rl.question("Descripcion de la tarea: ", (descripcion) => {
        tareas.agregarTarea(descripcion);
        console.log("Tarea agregada con exito.");
        mainMenu();
      });
    } else if (answer === "3") {
      rl.close();
    } else {
      console.log("Opción no válida");
      mainMenu();
    }
  });
};

mainMenu();
