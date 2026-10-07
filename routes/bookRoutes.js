import * as bookController from '../controllers/bookControllers.js';
import express from 'express';

const bookrouter = express.Router();

<<<<<<< HEAD
bookrouter.get('/all', bookController.fetchAllBooks);
bookrouter.post('/', bookController.createBooks);

export default bookrouter;
=======
bookRoutes.get('/all', bookController.fetchAllBooks);
bookRoutes.post('/', bookController.createBook);
>>>>>>> 761e369bf11f40d54c6b7991fb41e5f87c938732

