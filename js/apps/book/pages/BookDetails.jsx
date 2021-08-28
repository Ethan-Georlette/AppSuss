const { Link } = ReactRouterDOM
import { booksService } from '../services/books.service.js'
import { LongTxt } from '../cmps/LongTxt.jsx'
import { ReviewList } from '../cmps/reviewList.jsx';
import { WriteReview } from '../cmps/WriteReview.jsx';
export class BookDetails extends React.Component {
    state = {
        isLongTxtShown: false,
        book: null,
        isReview:true,
    };
    componentDidMount() {
        this.loadBook()
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.bookId !== this.props.match.params.bookId) {
            this.loadBook()
        }
    }


    loadBook = () => {
        const id = this.props.match.params.bookId
        booksService.getBookById(id)
            .then(book => {
                console.log(book);
                if (!book) this.props.history.push('/')
                this.setState({ book })
            })
    }

    onReadMore = () => {
        this.setState({ isLongTxtShown: !this.state.isLongTxtShown })
    }

    onBack = () => {
        this.props.history.push('/books')
    }

    onRemoveReview = (reviewId) => {
        booksService.deleteReview(this.state.book.id, reviewId)
            .then(this.loadBook);
    }

    OnWriteReview=()=>{
        this.setState({isReview:!this.state.isReview});
    }

    onAddReview=(review)=>{
        booksService.addReview(this.state.book,review).then(()=>this.setState({isReview:false}))
    }



    render() {
        const { book ,isReview} = this.state;
        if (!book) return <div>Loading...</div>
        const price = book.listPrice.amount;
        return (
            <article className='book-detail'>
                <h1>{book.title}</h1>
                <h2>{book.authors.join(',')}<span> (Author)</span></h2>
                <img src={book.thumbnail} />
                <h3>{book.subtitle}</h3>
                <LongTxt txt={book.description} isLongTxtShown={this.state.isLongTxtShown} onReadMore={this.onReadMore} />
                <p className={price < 20 ? 'green' : price > 150 ? 'red' : ''}>Price:{price}{book.listPrice.sign}</p>
                {(book.publishedDate === (new Date().getFullYear())) && <p>New!</p>}
                {((new Date().getFullYear()) - book.publishedDate) >= 10 && <p>Veteran Book</p>}
                {book.pageCount >= 500 && <p>Long reading</p>}
                {(book.pageCount >= 200 && book.pageCount < 500) && <p>Decent Reading</p>}
                {(book.pageCount < 100) && <p>Decent Reading</p>}
                <p>Publish Date:{book.publishedDate}</p>
                <p>Pages:{book.pageCount}</p>
                <p>Categories:{book.categories.map((cat, idx) => (<span className="categries" key={idx}>#{cat} </span>))}</p>
                <button className="write-review" onClick={this.OnWriteReview}>{isReview? "close":"Write a Review"}</button>
                {isReview&&<WriteReview onAddReview={this.onAddReview}/>}
                <ReviewList book={book} onRemoveReview={this.onRemoveReview} />
                <Link to={`/books/${booksService.getNextBookId(book.id, 1)}`}>Next Book</Link>
                <Link to={`/books/${booksService.getNextBookId(book.id, -1)}`}>Previous Book</Link>
                <button onClick={this.onBack}>Back</button>
            </article>
        );
    }

}