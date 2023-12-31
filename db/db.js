const mongoose = require("mongoose")
require("dotenv").config()
const User = require("../models/userModel")

const connect = async () => {
  try {
    console.log("Connect MongoDB Successful !")
    mongoose.set("strictQuery", true)
    await mongoose.connect(process.env.mongodb)
  } catch (error) {
    console.error("Error connecting to MongoDB:", error)
  }
}
const disconnect = async () => {
  await mongoose.connection.close()
}
const findUser = async (obj) => {
  return User.findOne(obj).exec()
}
const saveUser = async (newUser) => {
  return await newUser.save()
}
module.exports = { connect, disconnect, findUser, saveUser }
