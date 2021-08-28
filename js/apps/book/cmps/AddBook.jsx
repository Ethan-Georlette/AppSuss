import { addBooks } from "../services/AddBooks.service.js";
import { utilService } from "../../../services/util.service.js";
import { AddBookPreview } from "./AddBookPreview.jsx";

export class AddBook extends React.Component {
    state = {
        books: null,
        src: '',
    }

    handleChange = ({ target }) => {
        const src = target.value;
        this.setState({ src })
        this.onSearchVal();
    }

    onSearchVal = utilService.debounce(() => {
        addBooks.getBooks(this.state.src)
            .then((books) => this.setState({ books }))
    }
    , 3000);

    

    render() {
        const { books, src } = this.state
        return (
            <section>
                <input type="search" name="title" value={src} onChange={this.handleChange} />
                {books && books.map(book => {
                    return <AddBookPreview key={book.id} book={book} onAddBook={this.props.onAddBook} />
                })}
            </section>

        )
    }
}