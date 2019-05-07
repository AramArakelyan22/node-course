const validator = require('validator');
const notes = require('./notes');
const chalk = require('chalk');
const yargs = require('yargs');


yargs.command({
    command: 'add',
    describe: 'Add a new.',
    builder: {
        title: {
            describe: 'Note define',
            demandOption: true,
            type: 'string',
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string',
        },
    },
    handler (argv) {
        notes.addNote(argv.title, argv.body)
    }
})

yargs.command({
    command: 'remove',
    describe: 'remove',
    handler(argv){
        notes.removeNote(argv.title)
    }
})

yargs.command({
    command: 'read',
    describe: 'read',
  builder: {
    title: {
      describe: 'Note define',
      demandOption: true,
      type: 'string',
    }
  },
    handler(argv){
    notes.readNote(argv.title)
    }
})

yargs.command({
    command: 'list',
    describe: 'list',
    handler(){
      notes.listNotes()
    }
})

yargs.parse();
/*
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
}*/
//console.log(yargs.argv)