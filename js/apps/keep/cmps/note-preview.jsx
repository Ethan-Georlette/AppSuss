import { NoteTxt } from "./note-txt.jsx"

export class NotePreview extends React.Component {

  render() {
    const { note } = this.props
    switch (note.type) {
      case 'note-txt':
        return <NoteTxt note={note} />
      case 'puki':
        return <div>hi</div>
    }

  }
}