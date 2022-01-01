import express from "express";
const app = express();

import { register } from "../Controlles/register.controllers.js";
import { login } from "../Controlles/login.controlles.js";
import { authenticate } from "../Middleware/Authenticate.js";
import { addBeer, getBeers } from "../Controlles/beer.controllers.js";
import { sendEmail } from "../Controlles/sendEmail.controllers.js";

app.get("/verifyToken", authenticate);
app.post("/register", register);
app.post("/login", login);
app.post("/addBeer", authenticate, addBeer);
app.get("/getBeers", authenticate, getBeers);
app.post("/sendEmail", sendEmail);

export default app;
