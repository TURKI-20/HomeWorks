import  express from 'express';
import { 
        addALoan,
        AddBook,
        AddUser,
        getAllBooks,
        getAllLoans,
        getLendedBooks,
        getUsers 
           } from '../controller/book.controller';

let router =  express.Router();

router.post("/user",AddUser)
router.post("/",AddBook)
router.get("/loans",getAllLoans)
router.post("/loan",addALoan)
router.get("/users",getUsers)
router.get("/lendedbooks",getLendedBooks)
router.get("/",getAllBooks)





export default router;