const Router = ReactRouterDOM.HashRouter;
const { Route, Switch } = ReactRouterDOM;
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
                    {/* <Route path="/books" component={Books} /> */}
                    {/* <Route path="/keeper" component={Keeper} /> */}
                    {/* <Route path="/mail" component={Mail} /> */}
                    <Route path="/" component={Home} />
                </Switch>
            </main>
            <footer>
                <AppFooter/>
            </footer>
        </Router>
    )
}



