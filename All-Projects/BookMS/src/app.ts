import  express,{Application} from 'express';
import booksRouter from './Routes/Route.book';
import * as dotenv from 'dotenv';
import {connectDB} from './config/db'



dotenv.config();
const app:Application = express();
let port = process.env.PORT || 3306;
app.use("/books", booksRouter)
connectDB();
app.use(express.json())



app.listen(port, ()=>{console.log("express is start on "+port)});