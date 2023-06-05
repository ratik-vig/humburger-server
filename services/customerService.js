const connection = require('../utils/db')
const queries = require('../utils/queries')

const registerCustomer = async(req, res)  => {
    try{
        const {
            fname,
            lname,
            email,
            phone,
            password
        } = req.body

        const [rows] = await connection.promise().query(queries.checkIfUserExists, [phone])
        if(rows.length > 0){
            res.status(409).send({message: "User already exists"})
            return
        }

        await connection.promise().query(queries.registerUser, [fname, lname, phone, email, password, new Date(), new Date()])
        res.send(200)
        
    }catch(err){
        console.log(err)
        res.sendStatus(500)
    }
}

const loginCustomer = async(req, res) => {
    try{
        const {
            email,
            password
        } = req.body

        const [rows] = await connection.promise().query(queries.loginCustomer, [email, password])

        if(rows.length === 0){
            res.status(404).send({message: ""})
        }
    }catch(err){
        console.log(err)
        res.sendStatus(500)
    }
}

module.exports = { registerCustomer, loginCustomer }