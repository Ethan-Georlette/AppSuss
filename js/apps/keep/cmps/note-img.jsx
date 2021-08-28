import { NoteFeatures } from "./note-features.jsx"

export class NoteImg extends React.Component {
  state = {
    info: null,
    isPinned: null,
    styled: null
  }

  componentDidMount() {
    const { note } = this.props
    this.setState({ info: note.info, isPinned: note.isPinned, styled: note.styled })

  }

  render() {

    const { info, isPinned, styled } = this.state
    if (!info) return <div>loading</div>
    const { url, title } = info
    return (
      <div className="note note-img flex column space-between" style={styled}>
        <div className='note img-container flex column' >
          <img src={url} />
          <p>{title}</p>
        </div>
        <NoteFeatures noteId={this.props.note.id} onHandleChange={this.props.onHandleChange} onUpdateNoteStyle={this.props.onUpdateNoteStyle} />
      </div>
    )
  }
}