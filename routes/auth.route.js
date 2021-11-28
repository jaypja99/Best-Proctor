const express = require('express')
const router = express.Router()
const Seller = require('../models/seller')
const Teacher = require('../models/school')
const Parent = require('../models/parent')
// Load Controllers
const {
    registerController,
    activationController,
    signinController,
    forgotPasswordController,
    resetPasswordController,
    // googleController,
    // facebookController
} = require('../controllers/auth.controller')


const {
    validSign,
    validLogin,
    forgotPasswordValidator,
    resetPasswordValidator
} = require('../helpers/valid')

router.post('/register',
    validSign,
    registerController)

//router.post('/sellerLogin', signinController)
router.post("/sellerLogin", (req, res)=> {
    const { email, password} = req.body
    Seller.findOne({ email: email}, (err, user) => {
        if(user){
            if(password === user.password ) {
                res.send({message: "Login Successfull", user: user})
            } else {
                res.send({ message: "Password didn't match"})
            }
        } else {
            res.send({message: "User not registered"})
        }
    })
}) 

router.post("/teacherLogin", (req, res)=> {
    const { email, password} = req.body
    Teacher.findOne({ email: email}, (err, user) => {
        if(user){
            if(password === user.password ) {
                res.send({message: "Login Successfull", user: user})
            } else {
                res.send({ message: "Password didn't match"})
            }
        } else {
            res.send({message: "User not registered"})
        }
    })
}) 

router.post("/parentLogin", (req, res)=> {
    const { email, password} = req.body
    Parent.findOne({ email: email}, (err, user) => {
        if(user){
            if(password === user.password ) {
                res.send({message: "Login Successfull", user: user})
            } else {
                res.send({ message: "Password didn't match"})
            }
        } else {
            res.send({message: "User not registered"})
        }
    })
}) 

router.post('/activation', activationController)

// forgot reset password
router.put('/forgotpassword', forgotPasswordValidator, forgotPasswordController);
router.put('/resetpassword', resetPasswordValidator, resetPasswordController);

// // Google and Facebook Login
// router.post('/googlelogin', googleController)
// router.post('/facebooklogin', facebookController)
module.exports = router