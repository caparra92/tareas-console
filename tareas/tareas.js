const fs = require('fs');

let listadoTareas = [];

const guardarDB = () => {

    const data = JSON.stringify(listadoTareas);

    fs.writeFile('./db/data.json', data, (err) => {
        if (err) throw new Error('No se pudo grabar los datos',err);
        console.log('Datos enviados al archivo con éxito')
    });

}

const cargarDB = () => {
    
    try {
        listadoTareas = require('../db/data.json');
    } catch {
        listadoTareas = [];
    }
    
}



const crear = (descripcion) => {

    cargarDB();

    let tarea = {
        descripcion,
        completado: false
    };

    listadoTareas.push(tarea);
    guardarDB();

    return tarea;

}

const getListado = () => {
   
    cargarDB();
    return listadoTareas;
}

const actualizar = (descripcion, completado = true) => {

    cargarDB();
    let index = listadoTareas.findIndex( tarea => tarea.descripcion === descripcion);

    if (index >= 0) {
        listadoTareas[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
}

const borrar = (descripcion) => {

    cargarDB();
    let index = listadoTareas.findIndex( tarea => tarea.descripcion === descripcion);

    if ( index >= 0) {
        listadoTareas.splice(1,index);
        guardarDB();
        return true;
    } else {
        return false;
    }
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}