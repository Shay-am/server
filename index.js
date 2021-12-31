import express from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express();
import db from "./database/mongoose.js";
import cors from "cors";
import bodyParser from "body-parser";
import routers from "./Routes/auth.js";

const PORT = process.env.PORT;

app.use(bodyParser.urlencoded({ extended: true }));


const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routers);

app.listen(PORT, () => {
	console.log("Server started on port" + PORT);
});
