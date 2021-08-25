const Router = ReactRouterDOM.HashRouter;
const { Route, Switch } = ReactRouterDOM;
import { MailDetails } from "./pages/mail-details.jsx";
import { MailHome } from "./pages/mail-home.jsx";


// Simple React Component
export function MailApp() {
  return (
    <Router>
        <Switch>
          <Route path="/mail/:mailId" component={MailDetails} />
          <Route path="/mail" component={MailHome} />
        </Switch>
    </Router>
  )
}



