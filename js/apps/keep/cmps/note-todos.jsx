import { utilService } from "../../../services/util.service.js"
import { noteService } from "../services/note.service.js"

export class NoteTodos extends React.Component {
  state = {
    info: null,
    isPinned: null,
    styled: null
  }

  componentDidMount() {
    const { note } = this.props
    this.setState({ info: note.info, isPinned: note.isPinned, styled: note.styled })

  }

  // text-decoration: line-through;
  // { txt: "Driving liscence", doneAt: null },
  // { txt: "Coding power", doneAt: 187111111 }
  renderTodos = (todos) => {
    const { note } = this.props
    return todos.map((todo, idx) => {
      const isChecked = todo.doneAt ? true : false
      return <div key={`${note.id}-${idx}`} className={`flex space-between ${todo.doneAt ? 'done todo' : 'todo'}`}>
        <input type="checkbox" checked={isChecked} onClick={this.onToggleChecked} id={idx} /> {todo.txt}</div>
    })
  }

  onToggleChecked = ({ target }) => {
    console.log(this.props);
    const { note } = this.props
    const todoIdx = target.id
    console.log(todoIdx);
    noteService.toggleTodo(note, todoIdx, target.checked)
      .then(this.props.onHandleChange())


  }
  render() {

    const { info, isPinned, styled } = this.state
    if (!info) return <div>loading</div>
    const { label, todos } = info

    return (
      <div className='note note-todos' style={styled}>
        <h3>{label}</h3>
        <div className="todo-list flex column">
          {this.renderTodos(todos)}

        </div>
        {/* <ul className='todo-list clean-list'>
        </ul> */}
      </div>
    )
  }
}