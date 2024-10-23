const readline = require("readline");
const ListaDeTareas = require("./modelo/ListaDeTareas");
const Tarea = require("./modelo/Tarea");

let tareas = new ListaDeTareas();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const mainMenu = () => {
  console.log("\nGestión de Tareas, seleccione una opcion:");
  console.log("1. Listar tareas");
  console.log("2. Añadir tarea");
  console.log("3. Eliminar tarea");
  console.log("4. Completar tarea");
  console.log("5. Salir");
  rl.question("Elige una opción: ", (answer) => {
    if (answer === "1") {
      console.log("Tareas:");
      if (tareas.obtenerNumeroDeTareas() > 0) {
        tareas.obtenerTareas().forEach((tarea) => {
          console.log(
            `ID: ${tarea.getId()}, Descripcion: ${tarea.getDescripcion()}, Estado: ${
              tarea.tareaRealizada() ? "Realizada" : "Por realizar"
            }`
          );
        });
      } else {
        console.log("Aun no se agregaron tareas.");
      }
      mainMenu();
    } else if (answer === "2") {
      rl.question("Descripcion de la tarea: ", (descripcion) => {
        try {
          tareas.agregarTarea(descripcion);
          console.log("Tarea agregada con exito.");
        } catch (error) {
          console.log("Por favor, ingrese una descripcion valida.");
        }
        mainMenu();
      });
    } else if (answer === "3") {
      rl.question("Ingrese el Id de la tarea que desea eliminar: ", (id) => {
        try {
          tareas.eliminarTarea(parseInt(id));
          console.log("Tarea eliminada con exito.");
        } catch (error) {
          console.log("No se encontro la tarea a eliminar.");
        }
        mainMenu();
      });
    } else if (answer === "4") {
      rl.question(
        "Ingrese el Id de la tarea que desea marcar como completada: ",
        (id) => {
          try {
            tareas.completarTarea(parseInt(id));
            console.log("Tarea completada con exito.");
          } catch (error) {
            console.log("No se encontro la tarea a completar.");
          }
          mainMenu();
        }
      );
    } else if (answer === "5") {
      rl.close();
    } else {
      console.log("Opción no válida");
      mainMenu();
    }
  });
};

mainMenu();
