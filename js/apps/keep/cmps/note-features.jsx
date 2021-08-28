import { noteService } from "../services/note.service.js"
import { Palette } from "./palette.jsx"

export class NoteFeatures extends React.Component {
  state = {
    paletteClicked: false,
  }

  onChangeStyle = (newStyle) => {
    this.props.onUpdateNoteStyle(this.props.id, newStyle)
  }
  onDeleteNote = () => {
    const { noteId } = this.props
    noteService.deleteNote(noteId)
      .then(this.props.onHandleChange())
  }
  render() {
    const { paletteClicked } = this.state
    return (

      <div className='note-features flex'>
        <Palette className='palette' />
        <label htmlFor="palette" className='my-icon palette-icon'></label>
        <label htmlFor="palette" onClick={this.onDeleteNote} className='my-icon delete-icon'></label>
      </div >
    )
  }
}