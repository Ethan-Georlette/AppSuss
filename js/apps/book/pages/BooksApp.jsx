import { BooksContainer } from '../cmps/BooksContainer.jsx';
import { booksService } from '../services/books.service.js'
import { BooksFilter } from '../cmps/BooksFilter.jsx'
import { AddBook } from '../cmps/AddBook.jsx';
export class BooksApp extends React.Component {
    state = {
        books: [],
        filterBy: null,
        selectedBook: null,
    };

    componentDidMount() {
        this.loadBooks();
    }

    onSetFilter = (filterBy) => {
        this.setState({ filterBy }, this.loadBooks);
    };

    loadBooks = () => {
        booksService.query(this.state.filterBy)
            .then((books) => {
                this.setState({ books });
            });
    };
    onAddBook = (book) => {
        booksService.addBookToService(book)
            .then(() => {
                console.log('book added');
                this.loadBooks();
            })
    };

    render() {
        const { books } = this.state
        return (
            <section className="books-app">
                <BooksFilter onSetFilter={this.onSetFilter} />
                <AddBook onAddBook={this.onAddBook} />
                <BooksContainer books={books} />
            </section >
        )
    }
}