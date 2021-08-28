import {BookPreview} from './BookPreview.jsx'

export function BooksContainer({ books }) {
    return (
        <section className="books-container">
            {books.map(book => <BookPreview key={book.id} book={book} />)}
        </section>
    );
}

