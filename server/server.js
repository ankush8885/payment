import { app } from "./app.js";
import Razorpay from "razorpay";
import { connectDb } from "./db/database.js";

export const instance = new Razorpay({
    key_id: process.env.RAZOR_KEY_ID,
    key_secret: process.env.RAZOR_SECRET_KEY,
  });

app.listen(process.env.PORT,()=>{
    console.log("Server is listening on",process.env.PORT);
    connectDb()
})