const fs = require('fs');
const chalk = require('chalk');

const getNotes = function(){
    return 'This is my note. ';
};

const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNote = notes.find( note =>  note.title === title )

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        });
        saveNotes(notes);
        console.log(chalk.green.inverse('New note added!'));
    } else {
        console.log(chalk.red.inverse('Note title "' + title + '" has already been taken!'));
    }
    
}

const readNote = (title) => {
    const notes = loadNotes();
    const noteToRead = notes.find( note => note.title === title)
    if (noteToRead){
        console.log(`${chalk.yellow.bold(noteToRead.title)}\n${chalk.yellow.underline(noteToRead.body)}\n`);
    } else {
        console.log(chalk.red.inverse('The note is note found.'))
    }
    
}

const removeNote = (title) => {
    const notes = loadNotes();

    const notesToKeep = notes.filter( note => note.title !== title );

    if(notes.length > notesToKeep.length) {
        saveNotes(notesToKeep);
        console.log(chalk.green.inverse('The note ' + title + ' is removed!'));
    } else {
        console.log(chalk.red.inverse('The note "' + title + '" is not found. Please check your input and try again.'));
    }
    
}

const listNotes = () => {
    const notes = loadNotes();
    if(notes.length === 0){
        console.log('You don\'t have any notes.');
    } else {
        notes.forEach( note => {
            console.log(`${chalk.yellow.bold(note.title)}\n`);
        })
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }
    
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}