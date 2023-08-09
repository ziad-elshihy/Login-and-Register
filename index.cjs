const express = require('express')
const mongoose = require('mongoose')
const userModel = require('./Models/user.cjs')
const userRouter = require('./Routs/user.cjs')
const app = express()

const bodyParser = require('body-parser')

const url = 'mongodb+srv://ziad-elshihy:Ziad2002@mag.evubmwm.mongodb.net/'

const connectDB = async () => {
   try {
      mongoose.set('strictQuery', false)
      mongoose.connect(url)
      console.log("Connected DB")
   } catch (err) {
      console.log("the error" + err)
      process.exit()
   }
}

connectDB()


app.use('/', userRouter)


app.listen(5000 || process.env.PORT)