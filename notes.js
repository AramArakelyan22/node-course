const fs = require('fs');

const getNotes = () => {
  return "This are notes.."
}

const addNote = function (title, body) {
  const notes = loadNotes();
  notes.push({
    title: title,
    body: body,
  })
  console.log(notes);
}

const loadNotes = function() {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const bufferedData = dataBuffer.toString();
    return JSON.parse(bufferedData);
  }
  catch(err) {
    return []
  }
}

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
}