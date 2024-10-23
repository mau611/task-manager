const readline = require("readline");
const ListaController = require("./controlador/ListaController");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const listaController = new ListaController();

const mainMenu = () => {
  console.log("\nGestión de Tareas, seleccione una opcion:");
  console.log("1. Listar tareas");
  console.log("2. Añadir tarea");
  console.log("3. Eliminar tarea");
  console.log("4. Completar tarea");
  console.log("5. Listar tareas pendientes");
  console.log("6. Salir");
  rl.question("Elige una opción: ", (answer) => {
    if (answer === "1") {
      console.log("Lista de tareas:");
      if (listaController.obtenerNumeroDeTareas() > 0) {
        listaController.obtenerTareas().forEach((tarea) => {
          console.log(
            `ID: ${tarea.getId()}, Descripción: ${tarea.getDescripcion()}, Estado: ${
              tarea.tareaRealizada() ? "Realizada" : "Pendiente"
            }`
          );
        });
      } else {
        console.log("Aún no se agregaron tareas.");
      }
      mainMenu();
    } else if (answer === "2") {
      rl.question("Descripción de la tarea: ", (descripcion) => {
        try {
          listaController.agregarTarea(descripcion);
          console.log("Tarea agregada exitosamente.");
        } catch (error) {
          console.log("Por favor, ingrese una descripción valida.");
        }
        mainMenu();
      });
    } else if (answer === "3") {
      rl.question("Ingrese el Id de la tarea que desea eliminar: ", (id) => {
        try {
          listaController.eliminarTarea(parseInt(id));
          console.log("Tarea eliminada con éxito.");
        } catch (error) {
          console.log("No se encontró la tarea a eliminar.");
        }
        mainMenu();
      });
    } else if (answer === "4") {
      rl.question(
        "Ingrese el Id de la tarea que desea marcar como completada: ",
        (id) => {
          try {
            listaController.completarTarea(parseInt(id));
            console.log("Tarea completada con éxito.");
          } catch (error) {
            console.log("No se encontró la tarea a completar.");
          }
          mainMenu();
        }
      );
    } else if (answer === "5") {
      const tareasPendientes = listaController.tareasPendientes();
      if (tareasPendientes.length > 0) {
        console.log("Lista de tareas pendientes:");
        tareasPendientes.forEach((tarea) => {
          console.log(
            `ID: ${tarea.getId()}, Descripción: ${tarea.getDescripcion()}, Estado: ${
              tarea.tareaRealizada() ? "Realizada" : "Pendiente"
            }`
          );
        });
      } else {
        console.log("No existen tareas pendientes.");
      }
      mainMenu();
    } else if (answer === "6") {
      rl.close();
    } else {
      console.log("Opción no válida");
      mainMenu();
    }
  });
};

mainMenu();
