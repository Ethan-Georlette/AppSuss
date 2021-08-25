const { NavLink } = ReactRouterDOM
export function NoteHome() {
  return (
    <div>
      <h1>Note Home</h1>
      <NavLink to="/keeper/n101">to note</NavLink>
    </div>
  )
}