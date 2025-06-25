import express from "express";

const router = express.Router();
import { checkout, paymentVerification } from "../controllers/payment.js";

router.route('/checkout').post(checkout);
router.route('/paymentVerification').post(paymentVerification);

export default router;