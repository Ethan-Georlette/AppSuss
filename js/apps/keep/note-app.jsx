const Router = ReactRouterDOM.HashRouter;
const { Route, Switch } = ReactRouterDOM;
import { NoteHome } from "./cmps/note-home.jsx";
import { NoteList } from "./cmps/note-list.jsx";
import { NoteTxt } from "./cmps/note-txt.jsx";
import { NoteAppMain } from "./pages/note-app-main.jsx";
import { noteService } from "./services/note.service.js";
// Simple React Component
export class NoteApp extends React.Component {


  render() {
    return (
      <Router>
        <main className='note-app'>
          <Switch>
            {/* <Route path="/keeper/notes" component={NoteTxt} /> */}
            {/* <Route path="/keeper/:noteId" component={NoteTxt} /> */}
            {/* <Route path="/" component={NoteHome} /> */}
            <Route path='/keeper' component={NoteAppMain} />



          </Switch>
        </main>
      </Router>
    )

  }
}



