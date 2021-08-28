import { object } from "prop-types";
import { storageService } from "../../../services/storage.service.js";
import { utilService } from "../../../services/util.service.js";

const _defaultStyle = {
  backgroundColor: '#42e3f5'
}
let gNotes = storageService.loadFromStorage('gNotes') || [
  {
    id: "n101", type: "note-txt", isPinned: true, info: { txt: "Fullstack Me Baby!" },
    styled: {
      backgroundColor: 'lightblue',
      writable: true
    }
  },
  {
    id: "n102", type: "note-img",
    isPinned: true,
    info: {
      title: "God's new Team",
      url: 'https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Ftimes%2Fprod%2Fweb%2Fbin%2Fa61db148-0766-11ec-89b3-29a9a04e8645.jpg?crop=2332%2C1312%2C716%2C42&resize=1200'
    },
    styled: {
      backgroundColor: '#42e3f5'
    }
  },
  {
    id: 'n104',
    type: 'note-video',
    isPinned: true,
    info: {
      label: 'How to Create HTML5 Videos',
      url: 'https://www.youtube.com/watch?v=OOy764mDtiA'
    },
    styled: {
      backgroundColor: '#888',
      writable: true
    },
    writable: true
  },
  {
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
    styled: {
      backgroundColor: '#888',
      writable: true
    },

  },
  {
    id: 'n099',
    type: 'note-video',
    isPinned: true,
    info: {
      label: 'Dont look back in anger',
      url: 'https://www.youtube.com/watch?v=y_KCK-pHzqk'
    },
    styled: {
      backgroundColor: '#888',
      writable: true
    },
    writable: true
  },
]

storageService.saveToStorage('gNotes', gNotes)


function createNote(type, txt, url, todosString, isPinned = false, styled = _defaultStyle) {

  const newNote = {
    id: utilService.makeId(), type, isPinned, styled
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
  storageService.saveToStorage('gNotes', gNotes)
  return Promise.resolve()
}

function getNoteById(noteId) {
  const note = gNotes.find(note => {
    return note.id === noteId
  })
  return Promise.resolve(note)
}

function deleteNote(noteId) {
  const idx = gNotes.findIndex(note => note.id === noteId)
  gNotes.splice(idx, 1)
  storageService.saveToStorage('gNotes', gNotes)
  return Promise.resolve()
}

const getTodosFromString = (strToFormat) => {
  return strToFormat.split(',').map(str => ({ txt: str }))
}

function updateStyle(id, styled) {
  const note = gNotes.find(note => note.id === id)
  note.styled.whatever = 'muki'
  note.styled = styled
  // note.styled = styled
  storageService.saveToStorage('gNotes', gNotes)
  return Promise.resolve()
}

function query(filterBy = null) {
  return Promise.resolve(gNotes)
}

function toggleTodo(note, todoIDx, shoudBeChecked) {
  note.info.todos[todoIDx].doneAt = shoudBeChecked ? Date.now : null
  storageService.saveToStorage('gNotes', gNotes)
  return Promise.resolve()

}

function deleteTodo(note, todoIdx) {
  note.info.todos.splice(todoIdx, 1)
  storageService.saveToStorage('gNotes', gNotes)
  return Promise.resolve()
}

function addTodo(note, newTodo) {
  note.info.todos.push({ txt: newTodo, doneAt: null })
  storageService.saveToStorage('gNotes', gNotes)
  return Promise.resolve()
}

function updateTodo(note, todoIdx, newTxt) {
  note.info.todos[todoIdx].txt = newTxt
  storageService.saveToStorage('gNotes', gNotes)
  console.log('from service', gNotes);
  return Promise.resolve()
}

export const noteService = {
  createNote,
  addNote,
  getNoteById,
  query,
  updateStyle,
  toggleTodo,
  deleteTodo,
  addTodo,
  updateTodo,
  deleteNote


}