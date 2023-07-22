import mongoose, { model } from "mongoose";

const PaymentSchema = new mongoose.Schema({
    razorpay_payment_id:{
        type: String,
        required: true
    },
    razorpay_order_id:{
        type: String,
        required: true
    },
    razorpay_signature:{
        type: String,
        required: true
    }
})

export const Payment = model("payment",PaymentSchema);