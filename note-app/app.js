const chalk = require('chalk');
const yargs = require('yargs');
const getNotes = require('./notes');

yargs.command({
    command: 'add',
    describe: 'Add a new note.',
    handler: function(){
        console.log('Add a new note.')
    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove a note.',
    handler: function(){
        console.log('removing the note')
    }
})

yargs.command({
    command: 'list',
    describe: 'List all the notes',
    handler: function(){
        console.log('listing the notes')
    }
})

yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function(){
        console.log('reading the note...');
    }
})

console.log(yargs.argv);
