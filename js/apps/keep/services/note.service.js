

let gNotes = []
const someNote = {
  id: "n101", type: "note-txt", isPinned: true, info: { txt: "Fullstack Me Baby!" },
  style: { backgroundColor: 'lightblue' }
};
gNotes.push(someNote)
// { id: "n101", type: "note-txt",
//  isPinned: true,
//   info: { txt: "Fullstack Me Baby!" } }

// , { id: "n102", type: "note-img", info: { url: "http://some-img/me", title: "Bobi and Me" }, style: { backgroundColor: "#00d" } }, { id: "n103", type: "note-todos", info: { label: "Get my stuff together", todos: [{ txt: "Driving liscence", doneAt: null }, { txt: "Coding power", doneAt: 187111111 }] } }

function createNote(id, type, info, isPinned = false, style = {}) {
  const newNote = {
    id, type, info, isPinned, style
  }
  return newNote
}

function addNote(newNote) {
  const duplicateNote = gNotes.find(note => {
    return note.id === newNote.id
  })
  if (duplicateNote) return
  gNotes.push(newNote)
}

function getNoteById(noteId) {
  const note = gNotes.find(note => {
    return note.id === noteId
  })
  return Promise.resolve(note)
}


function getNotes() {
  return gNotes;
}

export const noteService = {
  createNote,
  addNote,
  getNoteById,
  getNotes

}