### Esta es una aplicación CRUD de tareas mediante linea de comandos ###

Module installation:

```shell
npm install
```

To get help of available commands:

```shell
node app.js --help
```

Available commands:

```shell
crear       Crear una tarea por hacer
listar      Lista las tareas existentes
actualizar  Actualiza una tarea
borrar      Elimina una tarea
```

This app uses <a href="https://www.npmjs.com/package/colors">Colors</a> package to display Tasks in an user-friendly manner.

### Example usage

- List all tasks:

```shell
node app.js listar

=========TAREA==========
Aprender nodejs
Estado: false
=========================
=========TAREA==========
Comer
Estado: true
=========================
```

- Create new task:

```shell
node app.js crear -d "Test 2024"

{ descripcion: 'Test 2024', completado: false }
Datos enviados al archivo con éxito
```