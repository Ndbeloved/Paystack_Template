const express = require('express')
const router = express.Router()
const initializePayment = require('../Controller/paystackController')


router.post('/acceptpayment', initializePayment.acceptPayment)

module.exports = router