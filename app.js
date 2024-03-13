const argv = require('./config/yargs').argv;
const tasks = require('./tasks/tasks');
const colors = require('colors');

let command = argv._[0];

switch (command) {
    case 'create':
       let  task = tasks.create(argv.description);
       console.log(task);
        break;
    case 'list':
        let list = tasks.getList();
        for( let task of list){
            console.log('=========TASK=========='.green);
            console.log(task.description);
            console.log(`State: ${task.completed}`);
            console.log('========================='.green);
        }
        break;
    case 'update':
        let updated = tasks.update(argv.description, argv.completed);
        console.log(updated);
        break;
    case 'remove':
            let removed = tasks.remove(argv.description);
            console.log(removed);
            break;
    default:
        console.log('Command not allowed');
}