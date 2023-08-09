const express = require("express")
const userController = require("../Controller/userController.cjs")
const router = express.Router()


router.post('/api/users/register', userController.register)
router.post('/api/users/login', userController.login)
router.get('/api/users/ziad', (req,res)=>{
   res.json({msg: 'Hello Ziad'})
})


module.exports = router