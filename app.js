const validator = require('validator');
const notes = require('./notes');
const chalk = require('chalk');

const success = chalk.green.inverse.bold;
const error = chalk.red.bold;

console.log(success(notes()));
console.log(error(validator.isURL('aramarakelyan22gmail')));
const command = process.argv[2];

if(command === 'add') {
    console.log('Add Notes..')
}
else if (command === 'remove') {
    console.log('Notes Removed')
}