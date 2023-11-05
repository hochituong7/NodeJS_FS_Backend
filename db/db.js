const mongoose = require("mongoose")
require("dotenv").config()
const User = require("../models/userModel")

const connect = async () => {
  try {
    await mongoose.connect(process.env.mongodb)
    console.log("Connect MongoDB Successful !")
  } catch (error) {
    console.error("Error connecting to MongoDB:", error)
  }
}

const disconnect = async () => {
  await mongoose.connection.close()
}

// {firstName: req.body.firstName, email: req.body.email}
const findUser = async (onj) => {
  User.findOne(obj)
}
const saveUser = async (newUser) => {
  return await newUser.save()
}
module.exports = { connect, disconnect, findUser, saveUser }
