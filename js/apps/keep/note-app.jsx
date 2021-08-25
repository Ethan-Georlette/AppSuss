const Router = ReactRouterDOM.HashRouter;
const { Route, Switch } = ReactRouterDOM;
import { NoteHome } from "./cmps/note-home.jsx";
// Simple React Component
export function NoteApp() {
  return (
    <Router>
      <main className='note-app'>
        <Switch>
          <Route path="/" component={NoteHome} />
        </Switch>
      </main>
    </Router>
  )
}



