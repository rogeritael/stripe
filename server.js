if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
} 

//chaves do stripe
const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
const stripePublicKey = process.env.STRIPE_SECRET_KEY;

const express = require("express");
const app = express();


app.listen(3000)