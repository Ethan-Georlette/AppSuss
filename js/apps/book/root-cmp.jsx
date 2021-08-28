const Router = ReactRouterDOM.HashRouter;
const { Route, Switch } = ReactRouterDOM;
import { BooksHeader } from './cmps/BooksHeader.jsx';
import { BookDetails } from './pages/BookDetails.jsx';
import { BooksApp } from './pages/BooksApp.jsx';

export function BookMain() {
    return (
        <Router>
            <main>
                <Switch>
                    <Route path="/books/:bookId" component={BookDetails} />
                    <Route path="/books" component={BooksApp} />
                </Switch>
            </main>
        </Router>
    );
}
