require('dotenv').config()
const Paystack = require('paystack')(process.env.TEST_SECRET_KEY)

const express = require('express')
const app = express()
app.use(express.json())
const paymentRoute = require('./Router/paystackRouter')

app.use('/', paymentRoute)

app.listen(3000, ()=>{
    console.log('Server running')
})