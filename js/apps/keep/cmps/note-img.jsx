
export class NoteImg extends React.Component {
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
    const { url, title } = info
    console.log(title);
    return (
      <div className='note note-img flex column' style={style}>
        <img src={url} />
        <p>{title}</p>
      </div>
    )
  }
}