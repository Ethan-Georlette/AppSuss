const Router = ReactRouterDOM.HashRouter;
const { Route, Switch } = ReactRouterDOM;
import { BooksApp } from './js/apps/book/pages/BooksApp.jsx';
import { NoteApp } from './js/apps/keep/note-app.jsx';
import { MailApp } from './js/apps/mail/mail-app.jsx';
import { AppFooter } from './js/cmps/AppFooter.jsx';
import { AppHeader } from './js/cmps/AppHeader.jsx';
import { Home } from './js/pages/home.jsx'


// Simple React Component
export function App() {
    return (
        <Router>
            <header>
                <AppHeader />
            </header>
            <main>
                <Switch>
                    <Route path="/books" component={BooksApp} />
                    <Route path="/keeper" component={NoteApp} />
                    <Route path="/mail" component={MailApp} />
                    <Route path="/" component={Home} />
                </Switch>
            </main>
            <footer>
                <AppFooter />
            </footer>
        </Router>
    )
}



