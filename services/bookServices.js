import * as bookModel from '../models/bookModel.js';

export const fetchAllBooks = async () => {
    const book = await bookModel.fetchAllBooks();
    return book;
}

export const createBooks = async (book) => {
    const bookId = await bookModel.insert(book);
    return bookId;
}

export const updateBook= async(book) => {
    const updateBook = await bookModel.update(book);
    return updateBook;
}
