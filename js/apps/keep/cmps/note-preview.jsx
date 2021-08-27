import { NoteImg } from "./note-img.jsx"
import { NoteDotos } from "./note-todos.jsx"
import { NoteTxt } from "./note-txt.jsx"
import { NoteVideo } from "./note-video.jsx"

export class NotePreview extends React.Component {


  render() {
    const { note } = this.props
    switch (note.type) {
      case 'note-txt':
        return <NoteTxt note={note} onUpdateNoteStyle={this.props.onUpdateNoteStyle} onMouseOver={this.onMouseOver} />
      case 'note-img':
        return <NoteImg note={note} onUpdateNoteStyle={this.props.onUpdateNoteStyle} />
      case 'note-todos':
        return <NoteDotos note={note} onUpdateNoteStyle={this.props.onUpdateNoteStyle} />
      case 'note-video':
        return <NoteVideo note={note} onUpdateNoteStyle={this.props.onUpdateNoteStyle} />
    }

  }


}