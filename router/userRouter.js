const express = require("express")
const bcrypt = require("bcrypt")
const mongoose = require("mongoose")
const { saveUser, findUser } = require("../db/db")
const User = require("../models/userModel")
const router = express.Router()
router.post("/register", (req, res, next) => {
  // findUser
  // if the user exist
  // return response that Email exist try logging in
  // else
  // encrypt password
  // set the password with the encrypt password
  // save user to DB
  findUser({ email: req.body.email })
    .then((user) => {
      if (user) {
        res.status(409).json({ message: "User exist, try logging in" })
      } else {
        const user = new User()
        user._id = new mongoose.Types.ObjectId()
        const newUser = Object.assign(user, req.body)
        bcrypt.hash(newUser.password, 10, (err, hash) => {
          // Store hash in your password DB.
          if (err) {
            return res.status(501).json({ message: "Error " + err.message })
          } else {
            newUser.password = hash
            saveUser(newUser)
              .then((user) => {
                return res
                  .status(201)
                  .json({ message: "Successful Registration", user: user })
              })
              .catch((error) => {
                error: {
                  message: error.message
                }
              })
          }
        })
      }
    })
    .catch((error) => {
      error: {
        message: error.message
      }
    })
})

router.post("/login", (req, res, next) => {})
module.exports = router
