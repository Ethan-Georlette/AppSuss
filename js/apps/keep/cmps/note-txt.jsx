import { NoteFeatures } from "./note-features.jsx"

export class NoteTxt extends React.Component {
  state = {
    isHovered: false,
    info: null,
    isPinned: null,
    styled: null

  }

  componentDidMount() {
    const { note } = this.props
    this.styled = note.styled
    this.setState({ info: note.info, isPinned: note.isPinned, styled: this.styled })

  }
  styled
  componentDidUpdate() {
    console.log('Component is updating');
    // const { note } = this.props

  }

  handleMouse = (ev) => {
    // console.log(ev.type);
    if (ev.type === 'mouseover') {
      if (!this.state.isHovered) return this.setState({ isHovered: true })
    } else {
      console.log('mouseOut');
      this.setState({ isHovered: false })
    }
    // // const newHoverd = ev.type === 'mouseover'  ? true : false
    // this.setState({ isHovered: newHoverd })
  }


  render() {
    const { info, isPinned } = this.state
    const { note } = this.props
    this.styled = note.styled
    if (!info || !this.styled) return <div>loading</div>
    return (
      <div className='note note-txt flex column' style={this.styled}>
        <p>{info.txt}</p>
        <p>{isPinned}</p>
        <NoteFeatures className='note-features' id={this.props.note.id} onUpdateNoteStyle={this.props.onUpdateNoteStyle} />
      </div>

    )
  }
}