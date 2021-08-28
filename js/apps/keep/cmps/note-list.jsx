
import { NotePreview } from "./note-preview.jsx";

export function NoteList(props) {
  return (
    <div className="note-list flex">
      {props.notes.map(note => <NotePreview key={note.id} onHandleChange={props.onHandleChange} note={note} onUpdateNoteStyle={props.onUpdateNoteStyle} />)}
    </div>
  )
}