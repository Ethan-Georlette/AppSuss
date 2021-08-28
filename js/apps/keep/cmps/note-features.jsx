import { noteService } from "../services/note.service.js"
import { Palette } from "./palette.jsx"

export class NoteFeatures extends React.Component {
  state = {
    paletteClicked: false,
  }

  onChangeStyle = (newStyle) => {
    this.props.onUpdateNoteStyle(this.props.id, newStyle)
  }

  render() {
    const { paletteClicked } = this.state
    return (
      <section>
        <div>
          {paletteClicked && <Palette />}
        </div>
        <div className='note-feature'>
          <label htmlFor="palette" onClick={() => this.setState({ paletteClicked: true })} className='palette'></label>
        </div >
      </section>
    )
  }
}