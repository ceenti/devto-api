const express = require('express')
const auth = require('../usecases/auth')

const router = express.Router()

// /POST/signup
router.post('/signup', async(request, response) => {
    try{
        const {email, password} = await request.body
        const userCreater = await auth.signup( email, password )
        response.json({
            success: true,
            data: userCreater
        })
    } catch(error){
        response.status(401)
        response.json({
            success: false, 
            message: error.message
        })
    }
})

router.post('/login', async( request, response) => {
    try{
        const { email, password } = await request.body
        const token = await auth.login( email, password )

        response.json({
            success: true,
            message: 'User Logged In :)',
            data: {
                token: token,
                email: email
            }

        })
    } catch (error){
        response.status(401)
        response.json({
            success: false,
            message: error.message
        })
    }
})

module.exports = router