const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51LQjKEE9YQAk8HvgL1vCL2DVvioYVwVIHx2j44aHOeV0YU5IUCnrKeAv79fbxz8IGy7ldaadCXCJo2IH0mTLZlkN00C3lApOsv");

// API

// App Config
const app = express();

// Middleware
app.use(cors({origin: true}));
app.use(express.json());

// API router
app.get("/", (request, response) => {
  response.status(200).send("Hello world");
});

// API for making payment via Stripe
app.post("/payments/create", async(request, response) => {
  const total = request.query.total;
  console.log('Payment request received >>>', total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // Subtotal of the currency
    currency: "usd",
  });

  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  })
});
// Listen command
exports.api = functions.https.onRequest(app);
