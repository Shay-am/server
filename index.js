import express from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express();
import db from "./database/mongoose.js";
import cors from "cors";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import routers from "./Routes/auth.js";

const PORT = process.env.PORT;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());

const corsOptions = {
	origin: [
		"http://localhost:3000",
		"https://frozen-reaches-35058.herokuapp.com",
	],
	credentials: true,
	optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routers);

app.listen(PORT, () => {
	console.log("Server started on port" + PORT);
});
