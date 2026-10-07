import * as bookServices from '../services/bookServices.js';

export const fetchAllBooks = async (req, res) => {
    const book = await bookServices.fetchAllBooks();
    res.status(200).json(book);
};

<<<<<<< HEAD
export const createBooks = async (req,res) => {
    console.log(req.body);
    const { name, author } = req.body;
    const book = { name, author };
    
    try{
        const bookId = await bookServices.createBooks(book);
        res.status(200).json({
            success: true,
            message:bookId
        });
    }catch(e){
        console.log(e);
        res.status(500).json({
            error: "Internal Server Error"
        });
    }
}
=======
export const createBook = async (req, res) => {
    const { name, author } = req.body;
    const book = { name, author };

    try {
        const bookId = await bookServices.createBook(book);
        res.status(200).json({
            success: true,
            message: bookId
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            error: "Internal server Error"
        });
    }
}
>>>>>>> 761e369bf11f40d54c6b7991fb41e5f87c938732
