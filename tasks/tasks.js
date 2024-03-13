const fs = require('fs');

let taskList = [];

const saveDB = () => {

    const data = JSON.stringify(taskList);

    fs.writeFile('./db/data.json', data, (err) => {
        if (err) throw new Error('Data could not be saved',err);
        console.log('Data successfully sent')
    });

}

const loadDB = () => {
    
    try {
        taskList = require('../db/data.json');
    } catch {
        taskList = [];
    }
    
}

const create = (description) => {

    loadDB();

    let task = {
        description,
        completed: false
    };

    taskList.push(task);
    saveDB();

    return task;

}

const getList = () => {
   
    loadDB();
    return taskList;
}

const update = (description, completed = true) => {

    loadDB();
    let index = taskList.findIndex( task => task.description === description);

    if (index >= 0) {
        taskList[index].completed = completed;
        saveDB();
        return true;
    } else {
        return false;
    }
}

const remove = (description) => {

    loadDB();
    let index = taskList.findIndex( task => task.description === description);

    if ( index >= 0) {
        taskList.splice(1,index);
        saveDB();
        return true;
    } else {
        return false;
    }
}

module.exports = {
    create,
    getList,
    update,
    remove
}