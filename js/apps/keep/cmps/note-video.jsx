import { NoteFeatures } from "./note-features.jsx"
export class NoteVideo extends React.Component {
  state = {
    info: null,
    isPinned: null,
    styled: null
  }

  componentDidMount() {
    console.log('component is mounting');
    const { note } = this.props
    this.setState({ info: note.info, isPinned: note.isPinned, styled: this.styled })

  }

  styled
  componentDidUpdate() {
    const { note } = this.props

  }
  render() {
    const { info, isPinned } = this.state
    this.styled = this.props.note.styled;
    if (!info || !this.styled) return <div>loading</div>
    const { url, label } = info
    return (
      <div className='note note-video flex column' style={this.styled}>
        <div className='video-container'>
          <iframe src={url.replace('watch?v=', 'embed/')}
            title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
          </iframe>
        </div>
        <p>{label}</p>
        <NoteFeatures id={this.props.note.id} onUpdateNoteStyle={this.props.onUpdateNoteStyle} />
      </div>
    )
  }
}