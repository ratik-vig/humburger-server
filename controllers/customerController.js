const express = require('express')
const cors = require('cors')

const customerValidators = require('../validators/customerValidators')
const CustomerService = require('../services/customerService')

const router = express()
router.use(cors())
router.use(express.json())

router.post('/register', customerValidators.registerCustomer, CustomerService.registerCustomer)

module.exports = router