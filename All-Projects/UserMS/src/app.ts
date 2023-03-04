import  express,{Application} from 'express';
import * as dotenv from 'dotenv';
import {connectDB} from './config/db'
import usersRouter from './Routes/user.route';
dotenv.config();



const app:Application = express();
let port = process.env.PORT || 3306;
connectDB();
app.use(express.json())

app.use("/users", usersRouter)


app.listen(port, ()=>{console.log("express is start on "+port)});



