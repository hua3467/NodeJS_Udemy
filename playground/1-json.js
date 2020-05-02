const fs = require('fs');

// const book = {
//     title: 'Ego is the Eminy',
//     author: 'Harry'
// }

// const bookJSON = JSON.stringify(book);

// fs.writeFileSync('1-json.json', bookJSON); 

// const dataBuffer = fs.readFileSync('1-json.json');
// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON);

// console.log(data.title);

const dataBuffer = fs.readFileSync('1-json.json');
const dataJSON = dataBuffer.toString();
const user = JSON.parse(dataJSON);

user.name = 'Aaron'

console.log(user.name);

fs.writeFileSync('1-json.json', JSON.stringify(user))