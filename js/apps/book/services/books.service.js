import { books } from "./data.js";
import { utilService } from "../../../services/util.service.js";

export const booksService = {
    query,
    getBookById,
    getNextBookId,
    deleteReview,
    addReview,
    addBookToService,
}

const gBooks = books;
_createBooks();


function query(filterBy) {
    if (filterBy) {
        let { name, minPrice, maxPrice, author, category } = filterBy

        const booksToShow = gBooks.filter(book => {
            const price = book.listPrice.amount
            return (
                (book.title.includes(name) &&
                    price >= minPrice &&
                    price <= maxPrice) &&
                book.authors.some(booksAuthor => booksAuthor.toLowerCase().includes(author.toLowerCase())) &&
                book.categories.some(cat => cat.toLowerCase().includes(category.toLowerCase()))
            )
        })
        return Promise.resolve(booksToShow);
    }
    return Promise.resolve(gBooks)
}

function getBookById(id) {
    const book = gBooks.find((book) => {
        return id === book.id
    })
    return Promise.resolve(book)
}

function getNextBookId(id, num) {
    const bookIdx = gBooks.findIndex(book => book.id === id)
    let nextBookIdx = bookIdx + parseInt(num)
    if (nextBookIdx === gBooks.length) nextBookIdx = 0
    if (nextBookIdx === -1) nextBookIdx = gBooks.length - 1
    return gBooks[nextBookIdx].id
}

function deleteReview(bookId, reviewId) {
    const book = getBookById(bookId)
        .then((book) => {
            const reviewIdx = book.reviews.findIndex(review => review.id === reviewId);
            book.reviews.splice(reviewIdx, 1);
        })
    return Promise.resolve();
}

function addReview(bookToEdit, review) {
    return getBookById(bookToEdit.id)
        .then((book) => {
            book.reviews.unshift({ id: utilService.makeId(), name: review.name, rate: review.rate, txt: review.txt, date: review.date })
            return Promise.resolve()
        })
}
function addBookToService(book){
    gBooks.push(book)
    return Promise.resolve();
}

function _createBooks() {
    const review = {
        name: 'Books Reader',
        rate: 3,
        txt: 'Example review about book',
        date: new Date().toDateString()
    }
    gBooks.forEach((book) => {
        addReview(book, review)
    })
    gBooks.forEach((book) => book.listPrice.sign = getCurrency(book.listPrice.currencyCode))
}

function getCurrency(code) {
    let currIcon = '';
    switch (code) {
        case 'EUR':
            currIcon = '₤';
            break;
        case 'ILS':
            currIcon = '₪';
            break;
        case 'USD':
            currIcon = '$';
            break;
    }
    return currIcon;
}

function _saveCarsToStorage() {
    saveToStorage(KEY, gCars)
}
