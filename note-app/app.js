const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');

// Customize yargs version
yargs.version('1.1.0')

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.addNote(argv.title, argv.body)
    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove a note.',
    builder: {
        title: {
            describe: 'The title of the note to be delated.',
            demandOption: true,
            type: 'String'
        }
    },
    handler: function(argv){
        notes.removeNote(argv.title);
    }
})

yargs.command({
    command: 'list',
    describe: 'List all the notes',
    handler: function(){
        notes.listNotes();
    }
})

yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Enter the title of the note you want to read.',
            demandOption: true,
            type: 'String'
        }
    },
    handler: function(argv){
        notes.readNote(argv.title);
    }
})

console.log(yargs.argv);
