import { noteService } from "../services/note.service.js"

export class NoteFeatures extends React.Component {
  state = {

  }

  onSetStyle = ({ target }) => {
    const style = { [target.name]: target.value }
    this.props.onUpdateNoteStyle(this.props.id, style)
  }
  render() {
    return <div className='note-feature'>
      <input type="color" name="backgroundColor" onChange={this.onSetStyle} />
    </div>
  }
}