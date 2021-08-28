const { Link } = ReactRouterDOM
export function BookPreview({ book }) {
    return (
        <Link to={`/books/${book.id}`}>
            <div className='book-card'>
                <h2>{book.title}</h2>
                <img src={book.thumbnail} />
                <h4>Price:{book.listPrice.amount}{book.listPrice.sign}</h4>
                {book.listPrice.isOnSale && <div className='sale' />}
            </div>
        </Link>
    )
}
