const express = require("express")
const app = express()
const cors = require("cors")

// use middleware to form our contract for incoming json payload ONLY !!!
app.use(express.json())

// use middleware for url encoding
app.use(express.urlencoded({ extended: true }))

// use middleware to handle cors policy
// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*")
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Content-Type, Accept, Authorization, Origin, X-Requested-With"
//   )
//   if (req.method === "OPTIONS") {
//     res.header("access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE")
//   }
//   next()
// })
app.use(cors())

// health point or actuator
app.get("/", (req, res, next) => {
  res.status(200).json({ message: "Server is up " })
})

//routers
// app.use("/register", registrationRouter)

// bad url or error we can handle
// with middleware
app.use((req, res, next) => {
  const error = new Error("Not Found")
  error.status = 404
  next(error)
})
app.use((error, req, res, next) => {
  res.status(error.status || 500).json({
    message: error.message,
    status: error.status,
  })
})
module.exports = app