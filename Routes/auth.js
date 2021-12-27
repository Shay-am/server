import express from "express";
const app = express();

import { register } from "../Controlles/registerControllers.js";
import { login } from "../Controlles/loginControlles.js";
import { authenticate } from "../Middleware/Authenticate.js";
import { addBeer, getBeers } from "../Controlles/beerControllers.js";
import { sendEmail } from "../Controlles/sendEmailControllers.js";

app.get("/verifyToken", authenticate);
app.post("/register", register);
app.post("/login", login);
app.post("/addBeer", authenticate, addBeer);
app.get("/getBeers", authenticate, getBeers);
app.post("/sendEmail", sendEmail);

export default app;
