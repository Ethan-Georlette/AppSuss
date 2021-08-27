import { NoteFeatures } from "./note-features.jsx"

export class NoteTxt extends React.Component {
  state = {
    info: null,
    isPinned: null,
    styled: null

  }

  componentDidMount() {
    // console.log('component is mounting');
    const { note } = this.props
    // this.styled = note.styled
    // console.log('this.styled', this.styled);
    this.setState({ info: note.info, isPinned: note.isPinned, styled: this.styled })

  }
  styled
  componentDidUpdate() {
    console.log('Component is updating');
    const { note } = this.props
    // this.styled = note.styled
    // console.log('note-txt', note);
    // this.setState({ info: note.info, isPinned: note.isPinned, styled: note.styled })

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
    const { info, isPinned } = this.state
    // console.log('styled from render', styled);
    this.styled = this.props.note.styled
    if (!info || !this.styled) return <div>loading</div>
    return (
      <div className='note note-txt flex column' style={this.styled}>
        <p>{info.txt}</p>
        <p>{isPinned}</p>
        <NoteFeatures id={this.props.note.id} onUpdateNoteStyle={this.props.onUpdateNoteStyle} />
      </div>

    )
  }
}