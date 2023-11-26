require("dotenv").config()

const jwt = require("jsonwebtoken")
const errorTemplate = require("../templates/errorTemplate")
const { authMessages } = require("../message/authMessages")
module.exports = (req, res, next) => {
  try {
    const [, token] = req.headers.authorization.split(" ")
    jwt.verify(token, process.env.jwt_secret)
    console.log("success auth")
    next()
  } catch (error) {
    console.log("fail auth", authMessages.auth_failed)
    return errorTemplate(res, error, authMessages.auth_failed, 500)
  }
}
