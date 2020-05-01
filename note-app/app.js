const validator = require('validator');
const notes = require('./notes');

const msg = notes();

console.log(msg);
console.log(validator.isEmail('Aaron@email.com'));