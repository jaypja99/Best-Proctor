const express = require('express')
const router = express.Router()
const User = require('../models/seller');
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

    router.post("/sellerLogin", (req, res)=> {
        const { email, password} = req.body
        User.findOne({ email: email}, (err, user) => {
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