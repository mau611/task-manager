# Task List Application

## Descripción
Esta aplicación permite gestionar tareas utilizando un enfoque orientado a objetos. Se puede utilizar tanto desde la consola como a través de una API REST.

El proyecto incluye las clases `Tarea` y `ListaDeTareas` para encapsular la lógica y los datos relacionados con la gestión de tareas. La clase `Tarea` maneja los detalles de cada tarea, mientras que `ListaDeTareas` gestiona el conjunto de tareas. El `ListaController` se encarga de la persistencia, separando la lógica de negocio de la gestión de archivos, lo que asegura modularidad y escalabilidad. El diseño sigue los principios de responsabilidad única, encapsulación, y manejo robusto de errores.

## Requisitos
Para ejecutar la aplicación, necesitarás tener instalados:
- Node.js
- npm (Node Package Manager)

## Instalación

1. Clona este repositorio:
```bash
   git clone https://github.com/mau611/task-manager.git
```

2. Accede al directorio del proyecto:
```bash
   cd task-list
```

3. Instala las dependencias necesarias:
```bash
   npm install
```

# Uso

### Ejecutar en modo consola:
Para utilizar la aplicación en modo consola, ejecuta el siguiente comando:

```bash
npm run start-console
```
Esto abrirá una interfaz interactiva en la que podrás gestionar tus tareas desde la terminal. Podrás agregar, listar, y eliminar tareas directamente desde la consola.

### Ejecutar la API

Si prefieres interactuar con la aplicación a través de la API REST, puedes ejecutar el servidor con el siguiente comando:

```bash
npm run start-api
```

Esto iniciará un servidor Express que expone varios endpoints para la gestión de tareas (agregar, listar, eliminar, etc.).

La API estará disponible en http://localhost:3000.

### Endpoints de la API

```bash
POST /api/tareas: Para añadir una nueva tarea.
DELETE /api/tareas/{id}: Para eliminar una tarea.
PUT /api/tareas/{id}: Para marcar una tarea como completada.
GET /api/tareas_pendientes: Para listar todas las tareas pendientes.
GET /api/tareas/{id}: Para obtener los detalles de una tarea específica.
GET /api/tareas/{id}: Para obtener todas las tareas.
```