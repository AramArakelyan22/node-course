const fs = require('fs');
const chalk = require('chalk');


const addNote = (title, body) => {

  const notes = loadNotes();
  const duplicateNote = notes.find(note => note.title === title);
  debugger;
  if(duplicateNote) {
    console.log('Note with this title already exist')
  }
  else {
    notes.push({
      title: title,
      body: body,
    });
    console.log(notes);
    const stringifyedData = JSON.stringify(notes);
    fs.writeFileSync('./playground/1-json.json', stringifyedData)
  }
}

const removeNote = title => {

  const notes = loadNotes();
  const newNotes = notes.filter((note) => {
    return title !== note.title
  })
  if(notes > newNotes) {
    const stringifyedData = JSON.stringify(newNotes);
    fs.writeFileSync('./playground/1-json.json', stringifyedData);
    console.log(chalk.green.inverse('Note removed'))
  }
  else {
    console.log(chalk.red.inverse('Note not found'))
  }
}


const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('./playground/1-json.json');
    const bufferedData = dataBuffer.toString();
    return JSON.parse(bufferedData);
  }
  catch(err) {
    return []
  }
}

const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.inverse('Your notes!'))
  notes.forEach(note => console.log(note.title))
}

const readNote = title => {
  const notes = loadNotes();
  const note = notes.find(note => note.title === title);
  if (note) {
    console.log(chalk.green.inverse('title ' + note.title));
    console.log(chalk.green.inverse('body ' + note.body));
  }
  else {
    console.log(chalk.red.inverse('Note not found'))
  }
}

module.exports = {
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote
}