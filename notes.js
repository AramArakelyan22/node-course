const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => {
  return "This are notes.."
}

const addNote = (title, body) => {

  const notes = loadNotes();
  notes.push({
    title: title,
    body: body,
  });
  console.log(notes);
  const stringifyedData = JSON.stringify(notes);
  fs.writeFileSync('./playground/1-json.json', stringifyedData)
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

const readNotes = () => {
  const notes = loadNotes();
  console.log()
  notes.forEach( note => {
    console.log(note.title)
    }
  )
}

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote
}