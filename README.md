### This is a TO DO task application using command line interface ###

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
create      Creates a new task
list        List all tasks
update      Updates a task
remove      Removes a task
```

This app uses <a href="https://www.npmjs.com/package/colors">Colors</a> package to display Tasks in an user-friendly manner.

### Example usage

- List all tasks:

```shell
node app.js list

=========TASK==========
'Learn nodejs'
State: false
=========================
=========TAREA==========
Run
State: true
=========================
```

- Create new task:

```shell
node app.js create -d "Test 2024"

{ description: 'Test 2024', completed: false }
Data successfully sent
```

- Update a task:

```sh
node app.js update -d "Run" -c true
```