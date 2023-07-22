import express, { urlencoded } from "express";
import 'dotenv/config';
import cors from "cors";
import paymentroute from "./routes/paymentroute.js";

export const app = express()

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/api',paymentroute);

app.get('/api/getkey',(req,res)=>{
    res.status(200).json({key:process.env.RAZOR_KEY_ID})
})