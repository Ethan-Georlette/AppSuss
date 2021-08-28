import { storageService } from "../../../services/storage.service.js";
import { utilService } from "../../../services/util.service.js";
export const addBooks = {
    getBooks,
}
const gResult = storageService.loadFromStorage('BooksDB') || {};

function getBooks(src) {
    if (gResult[src]) {
        console.log('from cache');
        return Promise.resolve(gResult[src]);
    }
    return fetch(`https://www.googleapis.com/books/v1/volumes?q=${src}`)
        .then(res => {
            return res.json();
        })
        .then(res => {
            const books = res.items.splice(0, 4).map(book => {
                console.log(book);
                return {
                    id: book.id,
                    title: book.volumeInfo.title,
                    subtitle: book.volumeInfo.subtitle,
                    authors: book.volumeInfo.authors,
                    publishedDate: book.volumeInfo.publishedDate,
                    description: book.volumeInfo.description,
                    pageCount: book.volumeInfo.pageCount,
                    categories: book.volumeInfo.categories,
                    reviews: [],
                    thumbnail: book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : '../assets/img/book.png',
                    language: book.volumeInfo.language,
                    listPrice: {
                        "amount": utilService.getRandomIntInclusive(10, 250),
                        "currencyCode": 'ILS',
                        "isOnSale": (Math.random() > 0.5)
                    }
                }
            })
            gResult[src] = books;
            storageService.saveToStorage('BooksDB', gResult)
            return books;
        })
        .catch(console.log)
}
