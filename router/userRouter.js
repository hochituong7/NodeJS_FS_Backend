const express = require("express")

const {saveUser} = require("../db/db")

const router = express.Router()
router.post("/register", (req, res, next) => {
  // findUser
  // if the user exist
  // return response that Email exist try logging in
  // else
  // encrypt password
  // set the password with the encrypt password
  // save user to DB
  saveUser(newUser)

})

router.post("/login", (req, res, next) => {

})
module.exports = router