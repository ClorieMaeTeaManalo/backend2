import * as bookController from '../controllers/bookControllers.js';
import express from "express";

const bookrouter = express.Router();


bookrouter.get('/all', bookController.fetchAllBooks);
bookrouter.post('/', bookController.createBooks);
bookrouter.put('/:id', bookController.editBook);

export default bookrouter;


