const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { request } = require("express");
const { response } = require("express");
const stripe = require("stripe")('sk_test_51ItYUdSFQyIfm17KDQsfq5B8XXAHKaRKh09qnGr5DBjzbt7T5j0uR3W6meKLZNUeQqvgcEJNG4ChRXBhj09MU8cB001EpNZRqd')

//API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin:true }))
app.use(express.json());

// - API route
app.get('/', (request,response) => response.status(200).send("Hello world"));

app.post('/payments/create', async (request,response)=>{
    const total = request.query.total;

    console.log("Payment request received for this amount" , total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // subunits
        currency: "inr",
    })
    // ok -created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })

})

// - Listen Command

exports.api = functions.https.onRequest(app);


//http://localhost:5001/clone-79817/us-central1/api
