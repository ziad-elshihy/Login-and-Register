const userModel = require("../Models/user.cjs")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")


exports.register = async (req, res) => {
   try {
      let newUser = new userModel(req.body)
      const hashedPassword = await bcrypt.hash(req.body.password, 10)
      newUser.password = hashedPassword
      let user = await newUser.save()
      return res.json({ message: 'registered', user: { id: user._id, name: user.name, email: user.email, phone: user.phone } })
   } catch (err) {
      return res.status(400).send({ message: err })
   }
}
exports.login = async (req, res) => {
   try {
      let user = await userModel.findOne({ email: req.body.email })
      if (!user || !user.comparePassword(req.body.password)) {
         return res.status(401).send({ message: 'failed' })
      }
      const token = jwt.sign({ id: user._id, name: user.name, email: user.email, phone: user.phone }, 'uehriuhsifbajsbfjaks54654//slcms')
      return res.json({ user: { id: user._id, name: user.name, email: user.email, phone: user.phone, token: token } })
   } catch (err) {
      return res.status(400).send({ message: err })
   }
}