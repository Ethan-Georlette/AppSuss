// import { utilService } from "../../../services/util.service.js";
import { noteService } from "../services/note.service.js";

export class NewNote extends React.Component {
  state = {
    placeholder: `What's on your mind`,
    type: 'note-txt',
    txt: '',
    url: '',
    todosString: '',
    // label: '',
    // title: ''
  }

  componentDidMount() {

  }

  onSubmit = (ev) => {
    console.log('submiting');
    ev.preventDefault()
    const { type, txt, url, todosString } = this.state;
    if (type) {
      noteService.createNote(type, txt, url, todosString)
        .then(newNote => this.props.onAddNote(newNote))
        .then(this.showFeedback())
    }
  }

  onChangeType = (ev) => {
    console.log('on change type');
    ev.preventDefault()
    const type = ev.target.value

    const placeholder = type === 'note-txt' ? `What's on your mind` :
      type === 'note-todos' ? 'Enter list title' :
        type === 'note-img' ? 'Enter img title' :
          type === 'note-video' ? 'Enter video title' : ''
    if (type !== this.state.type) {
      this.setState({
        type, placeholder,
        txt: '',
        url: '',
        todosString: '',
      })
    }
  }

  onInputChanged = ({ target }) => {
    const { type } = this.state;
    const field = target.name;
    const val = target.value;
    this.setState({ [field]: val })


  }



  showFeedback = () => {
    // console.log('New Note Added');
  }

  render() {
    // console.log('state,', this.state);
    const { type, placeholder, url, txt, todosString } = this.state

    return <form className='new-note-container flex space-between' onSubmit={this.onSubmit}>
      <div className="inputs-container" >
        <input className="new-note-input" name='txt' placeholder={placeholder}
          onChange={this.onInputChanged} type="text" value={txt} />
        {type === 'note-img' && <input className='new-note-input' name='url' value={url}
          placeholder='enter image url' onChange={this.onInputChanged}></input>}
        {type === 'note-video' && <input className='new-note-input' name='url' value={url}
          placeholder='enter video url' onChange={this.onInputChanged}></input>}
        {type === 'note-todos' && <input className='new-note-input' name='todosString' value={todosString}
          placeholder='Enter a comma separate list' onChange={this.onInputChanged}></input>}

      </div>
      <div className="buttons flex align-center">
        <button type='button' value='note-txt' className={`new-btn note-txt-btn ${type === 'note-txt' ? 'clicked' : ''}`}
          onClick={this.onChangeType}></button>
        <button type='button' value='note-todos' className={`new-btn note-todos-btn ${type === 'note-todos' ? 'clicked' : ''}`}
          onClick={this.onChangeType} ></button>
        <button type='button' value='note-img' className={`new-btn note-img-btn ${type === 'note-img' ? 'clicked' : ''}`}
          onClick={this.onChangeType} ></button>
        <button type='button' value='note-video' className={`new-btn note-video-btn ${type === 'note-video' ? 'clicked' : ''}`}
          onClick={this.onChangeType} ></button>
      </div>
      <button className="submit"></button>
    </form>
  }
}
