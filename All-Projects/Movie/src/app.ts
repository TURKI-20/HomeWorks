import express ,{Application} from "express";
import { connectDB } from "./config/db";
import moviesRouter from "./routes/Movie";
import * as dotenv from 'dotenv';



dotenv.config();
const app:Application = express();
app.use(express.json());
connectDB();
const port =  process.env.PORT||3307;
app.use("/movies", moviesRouter)
app.listen(port, () => {
  console.log("server listening on port " + port);
});


