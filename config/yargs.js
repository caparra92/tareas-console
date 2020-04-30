const descripcion = {
    alias: 'd',
    demand: true
};

const completado =  {
    default: true,
    alias: 'c'
};

const argv = require('yargs')
            .command('crear','Crear una tarea por hacer',{
                descripcion 
            })
            .command('listar','Lista las tareas existentes',{
                completado
            })
            .command('actualizar','Actualiza una tarea',{
                descripcion,
                completado
            })
            .command('borrar','Elimina una tarea',{
                descripcion
            })
            .help()
            .argv;

module.exports = {
    argv
}