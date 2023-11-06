const connect = async () => {
  console.log("MongoDB mocked connection !")
}

const disconnect = async () => {
  console.log("MongoDB mocked disconnection !")
}

// {firstName: req.body.firstName, email: req.body.email}
const findUser = async (obj) => {
  return Promise.resolve({
    firstName: "Tuong",
    lastName: "Ho",
    address: "P7 Q8",
    city: "HCM",
    state: "VN",
    zipCode: "10000",
    email: "hochituong7@gmail.com",
    password: "123123abc",
  })
}
const saveUser = async (newUser) => {
  return Promise.resolve({
    firstName: "Tuong",
    lastName: "Ho",
    address: "P7 Q8",
    city: "HCM",
    state: "VN",
    zipCode: "10000",
    email: "hochituong7@gmail.com",
    password: "123123abc",
  })
}
module.exports = { connect, disconnect, findUser, saveUser }
