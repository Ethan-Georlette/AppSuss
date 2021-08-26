import { utilService } from "../../../services/util.service.js"

export class NoteDotos extends React.Component {
  state = {
    info: null,
    isPinned: null,
    style: null
  }

  componentDidMount() {
    const { note } = this.props
    this.setState({ info: note.info, isPinned: note.isPinned, style: note.style })

  }

  // text-decoration: line-through;
  // { txt: "Driving liscence", doneAt: null },
  // { txt: "Coding power", doneAt: 187111111 }
  renderTodos = (todos) => {
    return todos.map(todo => {
      return <li key={utilService.makeId()} className={todo.doneAt ? 'done todo' : 'todo'}>{todo.txt}</li>
    })
  }
  render() {

    const { info, isPinned, style } = this.state
    if (!info) return <div>loading</div>
    const { label, todos } = info

    return (
      <div className='note note-todos flex column' style={style}>
        <p>{label}</p>
        <ul className='todo-list clean-list'>
          {this.renderTodos(todos)}
        </ul>
      </div>
    )
  }
}