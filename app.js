const argv = require('./config/yargs').argv;
const tareas = require('./tareas/tareas');
const colors = require('colors');

let comando = argv._[0];

switch (comando) {
    case 'crear':
       let  tarea = tareas.crear(argv.descripcion);
       console.log(tarea);
        break;
    case 'listar':
        let listado = tareas.getListado();
        for( let tarea of listado){
            console.log('=========TAREA=========='.green);
            console.log(tarea.descripcion);
            console.log(`Estado: ${tarea.completado}`);
            console.log('========================='.green);
        }
        break;
    case 'actualizar':
        let actualizado = tareas.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;
    case 'borrar':
            let borrado = tareas.borrar(argv.descripcion);
            console.log(borrado);
            break;
    default:
        console.log('El comando no es valido');
}