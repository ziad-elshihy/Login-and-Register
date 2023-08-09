const mongoose = require("mongoose")
const bcrypt = require('bcrypt')
const Schema = mongoose.Schema

const userSchema = new Schema({
   name: String,
   email: { type: String, unique: true },
   password: String,
   phone: { type: String, unique: true }
})

userSchema.methods.comparePassword = async (password) => {
   return await bcrypt.compare(password, this.password)
}

module.exports = mongoose.model("Users", userSchema)