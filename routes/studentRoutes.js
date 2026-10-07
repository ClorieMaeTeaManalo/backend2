import * as studentController from '../controllers/studentController.js';
import express from 'express';

const studentrouter = express.Router();

<<<<<<< HEAD
=======
studentRoutes.get('/all', studentController.fetchAllStudent);
studentRoutes.post('/', studentController.createStudent);
>>>>>>> 761e369bf11f40d54c6b7991fb41e5f87c938732

studentrouter.get('/all', studentController.fetchAllStudent);
studentrouter.post('/', studentController.createStudent);


export default studentrouter;