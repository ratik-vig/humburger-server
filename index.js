const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')

const app = express()
app.use(cors())
app.use(express.json())

dotenv.config()

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`)
})