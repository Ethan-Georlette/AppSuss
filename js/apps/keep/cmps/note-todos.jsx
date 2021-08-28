import { utilService } from "../../../services/util.service.js"
import { noteService } from "../services/note.service.js"

export class NoteTodos extends React.Component {
  state = {
    info: null,
    isPinned: null,
    styled: null,
    currTodo: { currIdx: -1, txt: 'popo' }
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
      const { currIdx, txt } = this.state.currTodo;
      return <div key={`${note.id}-${idx}`}
        className={`flex space-between`}>
        <div>
          <input className='todo-checkbox' type="checkbox" checked={isChecked} onClick={this.onToggleChecked} id={idx} />
          <span >
            <input className={todo.doneAt ? 'done todo' : 'todo'} id={idx} type="text" value={idx === currIdx ? txt : todo.txt}
              onClick={this.onUpdateTodo} onChange={this.onUpdateTodo} />
            {/* <input type="" /> */}
          </span>
        </div>
        <button className='delete-todo-btn' id={idx} onClick={this.onDeleteTodo}>X</button>
      </div>
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
  onDeleteTodo = ({ target }) => {
    const { note } = this.props
    const todoIdx = target.id
    noteService.deleteTodo(note, todoIdx)
      .then(this.props.onHandleChange())
  }

  onUpdateTodo = ({ target }) => {
    const { note } = this.props
    this.setState({ currTodo: { currIdx: +target.id, txt: target.value } })
    const todoIdx = target.id
    noteService.updateTodo(note, todoIdx, target.value)
      .then(this.props.onHandleChange())
  }


  hasNewTodoListenerHasRegistered = false
  addNewTodoListener = ({ target }) => {
    if (!this.hasNewTodoListenerHasRegistered) {
      this.hasNewTodoListenerHasRegistered = true
      const { note } = this.props
      target.addEventListener("keyup", (event) => {
        if (event.key === "Enter") {
          // console.log(event.target.value);
          const newTodo = event.target.value
          if (newTodo.length > 0) {
            noteService.addTodo(note, newTodo)
              .then(this.props.onHandleChange())
            event.target.value = ''
            event.target.blur()
          }
        }
      })
    }
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
        <div>
          <label className='new-todo-label' htmlFor="new-todo-input">+</label>
          <input type="text" id='new-todo-input' onChange={this.addNewTodoListener} className='new-todo-input' placeholder={`Wha's is your next todo?`} />
        </div>
      </div>
    )
  }
}