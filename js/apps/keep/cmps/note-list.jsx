
import { NotePreview } from "./note-preview.jsx";

export function NoteList(props) {

  function renderByModulo(mod) {
    const notesToRender = props.notes.filter((note, idx) => {
      return idx % 4 === mod
    })
    return notesToRender.map(note => <NotePreview key={note.id} onHandleChange={props.onHandleChange} note={note} onUpdateNoteStyle={props.onUpdateNoteStyle} />)
  }

  return (
    <div className="note-list flex">
      <div className="col col1">
        {renderByModulo(0)}
      </div>
      <div className="col col2">
        {renderByModulo(1)}

      </div>
      <div className="col col3">
        {renderByModulo(2)}
      </div>
      <div className="col col4">
        {renderByModulo(3)}
      </div>
      {/* {props.notes.map(note => <NotePreview key={note.id} onHandleChange={props.onHandleChange} note={note} onUpdateNoteStyle={props.onUpdateNoteStyle} />)} */}
    </div>
  )
}