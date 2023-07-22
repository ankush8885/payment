import paymentroute from "../routes/paymentroute.js";
import { instance } from "../server.js";
import crypto from "crypto";
import { Payment } from "../models/payment.js";

export const checkout = async function (req, res) {
  var options = {
    amount: Number(req.body.amount * 100),  // amount in the smallest currency unit
    currency: "INR"
  };
  const order = await instance.orders.create(options);
  // console.log(order);
  res.status(200).json({ order })
}

export const paymentVerification = async function (req, res) {

  const { razorpay_payment_id, razorpay_order_id, razorpay_signature } = req.body

  const body = razorpay_order_id +"|"+razorpay_payment_id;
  
  const expectedSignature = crypto.createHmac('sha256',process.env.RAZOR_SECRET_KEY).update(body.toString()).digest('hex')

  if (expectedSignature == razorpay_signature) {
    //saving in db
    await Payment.create({
      razorpay_payment_id,
      razorpay_order_id,
      razorpay_signature});
    
    res.redirect(`http://localhost:3000/paymentsuccess?reference=${razorpay_payment_id}`);

  } else{
    res.status(400).json({success: false})

  }

  
}