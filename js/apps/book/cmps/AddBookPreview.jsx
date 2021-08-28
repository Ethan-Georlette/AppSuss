export function AddBookPreview({book,onAddBook}){
    return (
    <li>
        {book.title}
        <button onClick={()=>onAddBook(book)}>+</button>
    </li>
    )
}