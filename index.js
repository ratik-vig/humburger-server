const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const dotenv = require('dotenv')

const customerController = require('./controllers/customerController')

const app = express()
app.use(cors())
app.use(express.json())
app.use(morgan())

dotenv.config()

app.use('/api/v1/customers', customerController)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`)
})