import express from "express";
import dotenv from 'dotenv';
import cors from 'cors';

const app = express();

const corsOption = {
    origin: process.env.CORS_ORIGIN,
}

app.use(cors(corsOption));

//ROUTES IMPORT:
import productRoute from "./routes/product.routes.js" ;

//ROUTES DECLARATION
app.use('/api/v0/products',productRoute);



export default app;
