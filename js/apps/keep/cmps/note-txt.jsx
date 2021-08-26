import { noteService } from "../services/note.service.js"

export class NoteTxt extends React.Component {
  state = {
    info: null,
    isPinned: null,
    style: null

  }

  componentDidMount() {
    const { note } = this.props
    this.setState({ info: note.info, isPinned: note.isPinned, style: note.style })

  }

  // loadNote = () => {
  //   console.log('loading note');
  //   const { noteId } = this.props.match.params
  //   noteService.getNoteById(noteId)
  //     .then(note => {
  //       if (!note) this.props.history.push('/')
  //     })
  // }

  render() {
    const { info, isPinned, style } = this.state
    if (!info) return <div>loading</div>
    return (
      <div className='note note-txt flex column' style={style}>
        <p>{info.txt}</p>
        <p>{isPinned}</p>
      </div>

    )
  }
}