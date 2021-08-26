import { NoteImg } from "./note-img.jsx"
import { NoteDotos } from "./note-todos.jsx"
import { NoteTxt } from "./note-txt.jsx"
import { NoteVideo } from "./note-video.jsx"

export class NotePreview extends React.Component {

  render() {
    const { note } = this.props
    switch (note.type) {
      case 'note-txt':
        return <NoteTxt note={note} />
      case 'note-img':
        return <NoteImg note={note} />
      case 'note-todos':
        return <NoteDotos note={note} />
      case 'note-video':
        return <NoteVideo note={note} />
    }

  }


}