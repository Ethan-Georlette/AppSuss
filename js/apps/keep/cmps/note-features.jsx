import { noteService } from "../services/note.service.js"

export class NoteFeatures extends React.Component {
  state = {

  }

  onSetStyle = ({ target }) => {
    const newStyle = { [target.name]: target.value }
    this.props.onUpdateNoteStyle(this.props.id, newStyle)
  }
  render() {
    return <div className='note-feature'>
      <input type="color" name="backgroundColor" onChange={this.onSetStyle} />
    </div>
  }
}