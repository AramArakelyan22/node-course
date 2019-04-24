const validator = require('validator');
const notes = require('./notes');
const chalk = require('chalk');

const success = chalk.green.inverse.bold;
const error = chalk.red.bold;

console.log(success(notes()));
console.log(error(validator.isURL('aramarakelyan22gmail')))