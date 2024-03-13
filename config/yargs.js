const description = {
    alias: 'd',
    demand: true
};

const completed =  {
    default: true,
    alias: 'c'
};

const argv = require('yargs')
            .command('create','Creates a new task to be done',{
                description 
            })
            .command('list','List all tasks',{
                completed
            })
            .command('update','Updates the selected task',{
                description,
                completed
            })
            .command('remove','Removes a task',{
                description
            })
            .help()
            .argv;

module.exports = {
    argv
}