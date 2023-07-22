import React from 'react';
import { Stack, Box } from "@chakra-ui/react";
import CARD from './CARD';
import axios from "axios";
// import Razorpay from "razorpay";

const HOME = () => {
    const checkoutHandler = async (amount) => {
        const { data: { key } } = await axios.get('http://localhost:4000/api/getkey');
        const { data: { order } } = await axios.post('http://localhost:4000/api/checkout', { amount });
        const options = {
            key,
            amount: order.amount,
            currency: "INR",
            name: "ankush",
            description: "Test Transaction",
            image: "https://example.com/your_logo",
            order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            callback_url: 'http://localhost:4000/api/paymentVerification',
            prefill: {
                name: "Gaurav Kumar",
                email: "gaurav.kumar@example.com",
                contact: "9000090000"
            },
            notes: {
                address: "Razorpay Corporate Office"
            },
            theme: {
                color: "#3399cc"
            }
        };
        var razor = window.Razorpay(options);

        razor.open();
    }

    

    return (

        <Box >
            <Stack alignItems="center" justifyContent="center" direction={["row", "column"]}>
                <CARD amount={200} img={"https://plus.unsplash.com/premium_photo-1681702178635-52b7725c440a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"} checkoutHandler={checkoutHandler} />
                <CARD amount={500} img={'https://img.freepik.com/free-vector/slr-camera-grunge-tshirt-design-hand-drawn-sketch-vector-illustration_460848-14467.jpg?w=740&t=st=1690006139~exp=1690006739~hmac=854eda3be1e9d8cc8b0e82cd60e4b6cc6e16e3dd27016c5eec494bd0aa00e3a7'} checkoutHandler={checkoutHandler} />
            </Stack>
        </Box>
    )
}

export default HOME