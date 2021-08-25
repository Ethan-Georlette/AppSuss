const Router = ReactRouterDOM.HashRouter;
const { Route, Switch } = ReactRouterDOM;
import { Inbox } from "./cmps/mail-inbox.jsx";
import { MailHome } from "./cmps/mail-home.jsx";


// Simple React Component
export function MailApp() {
  return (
    <Router>
      <main className='mail-app'>
        <Switch>
          <Route exact path="/inbox" component={Inbox} />
          <Route path="/" component={MailHome} />
        </Switch>
      </main>
    </Router>
  )
}



