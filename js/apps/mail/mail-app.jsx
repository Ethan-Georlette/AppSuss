const Router = ReactRouterDOM.HashRouter;
const { Route, Switch } = ReactRouterDOM;
import { MailHome } from "./pages/mail-home.jsx";


// Simple React Component
export function MailApp() {
  return (
    <Router>
      <main className='mail-app'>
        <Switch>
          <Route path="/mail" component={MailHome} />
        </Switch>
      </main>
    </Router>
  )
}



