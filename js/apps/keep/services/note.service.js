import { object } from "prop-types";
import { utilService } from "../../../services/util.service.js";

let gNotes = []
let _defaultStyle = {
  backgroundColor: 'lightblue'
}
let someNote = {
  id: "n101", type: "note-txt", isPinned: true, info: { txt: "Fullstack Me Baby!" },
  style: { backgroundColor: 'lightblue' }
};
// assets\img\keep\idanIsAFather.jpg
let noteImg = {
  id: "n102", type: "note-img",
  isPinned: true,
  info: { url: ".././assets/img/keep/idanIsAFather.jpg", title: "Bobi and Me" },
  style: { backgroundColor: "#00d" }
}
let todoNote = {
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

let videoNote = {
  id: 'n104',
  type: 'note-video',
  isPinned: true,
  info: {
    label: 'Chris Martin at his very best',
    // url: 'https://www.youtube.com/watch?v=y_KCK-pHzqk'
    // url: 'https://www.youtube.com/watch?v=dlOHVCZZwEc&t=331s'
    url: 'https://www.youtube.com/watch?v=OOy764mDtiA'
  },
  style: { backgroundColor: '#888' }
}

gNotes.push(someNote)
gNotes.push(noteImg)
gNotes.push(todoNote)
gNotes.push(videoNote)
function createNote(type, txt, url, todosString, isPinned = false, style = null) {
  let newStyle
  if (!style) {
    newStyle = _defaultStyle
  }
  const newNote = {
    id: utilService.makeId(), type, isPinned, style: newStyle
  }
  const info = type === 'note-txt' ? { txt } : type === 'note-img' ? { url, title: txt } :
    type === 'note-video' ? { label: txt, url } : { label: txt, todos: getTodosFromString(todosString) }
  newNote.info = info
  return Promise.resolve(newNote)
}

function addNote(newNote) {
  // const duplicateNote = gNotes.find(note => {
  //   return note.id === newNote.id
  // })
  // if (duplicateNote) return Promise.reject('Error: DuplicateId')
  gNotes.push(newNote)
  return Promise.resolve()
}

function getNoteById(noteId) {
  const note = gNotes.find(note => {
    return note.id === noteId
  })
  return Promise.resolve(note)
}

const getTodosFromString = (strToFormat) => {
  return strToFormat.split(',').map(str => ({ txt: str }))
}

function updateStyle(id, style) {
  const noteIdx = gNotes.findIndex(note => note.id === id)
  for (const key in style) {
    gNotes[noteIdx].style['color'] = 'white';


  }
  // Object.assign(note.style, style)
  return Promise.resolve()
}

function query(filterBy = null) {
  return Promise.resolve(gNotes)
}

export const noteService = {
  createNote,
  addNote,
  getNoteById,
  query,
  updateStyle

}