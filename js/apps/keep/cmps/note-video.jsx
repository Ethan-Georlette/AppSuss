import { NoteFeatures } from "./note-features.jsx"
export class NoteVideo extends React.Component {
  state = {
    info: null,
    isPinned: null,
    style: null
  }

  componentDidMount() {
    const { note } = this.props
    this.setState({ info: note.info, isPinned: note.isPinned, style: note.style })

  }

  render() {

    const { info, isPinned, style } = this.state
    if (!info) return <div>loading</div>
    const { url, label } = info
    // console.log('embeded', url.replace('watch?v=', 'embed/'));
    return (
      <div className='note note-video flex column' style={style}>
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