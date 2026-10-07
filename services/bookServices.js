import * as bookModel from '../models/bookModel.js';

export const fetchAllBooks = async () => {
    const book = await bookModel.fetchAllBooks();
    return book;
};

<<<<<<< HEAD
export const createBooks = async (book) => {
=======
export const createBook = async (book) => {
>>>>>>> 761e369bf11f40d54c6b7991fb41e5f87c938732
    const bookId = await bookModel.insert(book);
    return bookId;
};