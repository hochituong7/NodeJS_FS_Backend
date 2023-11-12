require("dotenv").config()
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const mongoose = require("mongoose")
const errorTemplate = require("../templates/errorTemplate")
const { saveUser, findUser } = require("../db/db")
const User = require("../models/userModel")

exports.registerUser = async (req, res) => {
  try {
    // findUser
    // if the user exist
    // return response that Email exist try logging in
    // else
    // encrypt password
    // set the password with the encrypt password
    // save user to DB
    const user = await findUser({ email: req.body.email })
    if (user) {
      throw new Error("User exist, try logging in")
    } else {
      const user = new User()
      user._id = new mongoose.Types.ObjectId()
      const newUser = Object.assign(user, req.body)
      const hash = await bcrypt.hash(newUser.password, 10)
      newUser.password = hash
      const savedUser = await saveUser(newUser)
      return res
        .status(201)
        .json({ message: "Successful Registration", user: savedUser })
    }
  } catch (error) {
    errorTemplate(res, error, error.message)
  }
}

exports.loginUser = async (req, res) => {
  // email and password
  // find the user return a user
  // if the user is not found return response authentication fail
  // else
  // use bcrypt to compare password
  // if error
  // return res authentication fail
  // else
  // test the result wit if statement
  // if result
  // create a JSON WEB TOKEN if err return authentication fail
  // return res successful, token, logged: true
  // else return res authentication fail
  try {
    const loggedUser = await findUser({ email: req.body.email })
    if (!loggedUser) {
      throw new Error("Authentication failed: Unable to find user")
    } else {
      const result = await bcrypt.compare(
        req.body.password,
        loggedUser.password
      )
      if (result) {
        loggedUser.password = null
        const token = jwt.sign({ user: loggedUser }, process.env.jwt_secret)
        return res.status(201).json({
          user: loggedUser,
          logged: true,
          token: token,
          message: "Login successful",
        })
      } else {
        throw new Error("Authentication failed: Email or password do not match")
      }
    }
  } catch (error) {
    errorTemplate(res, error, error.message)
  }
}
