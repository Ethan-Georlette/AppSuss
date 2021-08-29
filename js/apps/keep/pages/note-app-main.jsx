import { NewNote } from "../cmps/new-note.jsx";
import { NoteList } from "../cmps/note-list.jsx";
import { noteService } from "../services/note.service.js";

export class NoteAppMain extends React.Component {

  state = {
    filterBy: null,
    notesToRender: null,
    notesChanged: 1
  }

  componentDidMount() {
    this.loadNotes();
  }

  onSetFilter = (filterBy) => {
    this.setState({ filterBy }, this.loadNotes);
  };

  loadNotes = () => {
    console.log('updating notes from app main');
    noteService.query(this.state.filterBy)
      .then((notesToRender) => {
        this.setState({ notesToRender, notesChanged: this.state.notesChanged + 1 });
      });
  };
  onAddNote = (newNote) => {
    noteService.addNote(newNote)
      .then(() => {
        this.loadNotes();
        return Promise.resolve()
      })
  };
  onUpdateNoteStyle = (id, style) => {
    noteService.updateStyle(id, style)
      .then(() => {
        this.loadNotes();
        return Promise.resolve()
      })
  }
  render() {
    const { notesToRender } = this.state
    if (!notesToRender) return <div>loading</div>
    return (
      <div className='note-app-main flex column align-center'>
        <NewNote onAddNote={this.onAddNote} />
        < NoteList notes={notesToRender} onHandleChange={this.loadNotes} onUpdateNoteStyle={this.onUpdateNoteStyle} />
      </div>
    )
  }

}
