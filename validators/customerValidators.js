const { body, validationResult } = require('express-validator')

const registerCustomer = [
    body('fname').isLength({min: 2}).withMessage("First name should have minimum 2 characters"),
    body('lname').isLength({min: 2}).withMessage("Last name should have minimum 2 characters"),
    body('phone').matches(/^[6-9]\d{9}$/).withMessage("Enter a valid phone number"),
    body('email').isEmail().withMessage('Enter a valid email address'),
    body('password').isLength({min: 8}).withMessage('Password must have 8 characters'),
    (req, res, next) => {
        const errors = validationResult(req)
        if(!errors.isEmpty()) res.status(400).send({errors: errors.array()})
        else next()
    }
]

module.exports = { registerCustomer }