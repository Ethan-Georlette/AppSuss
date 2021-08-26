

let gNotes = []
const someNote = {
  id: "n101", type: "note-txt", isPinned: true, info: { txt: "Fullstack Me Baby!" },
  style: { backgroundColor: 'lightblue' }
};
// assets\img\keep\idanIsAFather.jpg
const noteImg = {
  id: "n102", type: "note-img",
  isPinned: true,
  info: { url: ".././assets/img/keep/idanIsAFather.jpg", title: "Bobi and Me" },
  style: { backgroundColor: "#00d" }
}
const todoNote = {
  id: "n103",
  type: "note-todos",
  isPinned: true,
  info: {
    label: "Get my stuff together",
    todos: [
      { txt: "Driving liscence", doneAt: null },
      { txt: "Coding power", doneAt: 187111111 }
    ]
  },
  style: { backgroundColor: '#888' }
}

const videoNote = {
  id: 'n104',
  type: 'note-video',
  isPinned: true,
  info: {
    label: 'Chris Martin at his very best',
    url: 'https://www.youtube.com/watch?v=y_KCK-pHzqk'
  },
  style: { backgroundColor: '#888' }
}

gNotes.push(someNote)
gNotes.push(noteImg)
gNotes.push(todoNote)
gNotes.push(videoNote)
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