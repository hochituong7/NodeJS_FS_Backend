const { connect, disconnect, saveUser, findUser } = require("./db")
const User = require("../models/userModel")
const mongoose = require("mongoose")



// describe, test(), expect()
jest.mock("./db")
beforeAll(async () => {
  return await connect()
})
describe("Unit test Suite", () => {
  test("As a User I want to save a user to the database", async () => {
    const newUserId = new mongoose.Types.ObjectId()
    const newUser = new User({
      _id: newUserId,
      firstName: "Tuong",
      lastName: "Ho",
      address: "P7 Q8",
      city: "HCM",
      state: "VN",
      zipCode: "10000",
      email: "hochituong7@gmail.com",
      password: "123123abc",
    })
    const user = await saveUser(newUser)
    expect(user.firstName).toEqual("Tuong")
    expect(user.lastName).toEqual("Ho")
    expect(user.address).toEqual("P7 Q8")
    expect(user.city).toEqual("HCM")
    expect(user.state).toEqual("VN")
    expect(user.zipCode).toEqual("10000")
    expect(user.email).toEqual("hochituong7@gmail.com")
    expect(user.password).toEqual("123123abc")
  })

  test("As a User I want to find a user by any property", async () => {
    const obj = { firstName: "Tuong" }
    await findUser(obj)
      .then((user) => {
        console.log("User: ", JSON.stringify(user))
        expect(user.firstName).toBe("Tuong")
        expect(user.lastName).toBe("Ho")
        expect(user.address).toBe("P7 Q8")
        expect(user.city).toBe("HCM")
        expect(user.state).toBe("VN")
        expect(user.zipCode).toBe("10000")
        expect(user.email).toBe("hochituong7@gmail.com")
        expect(user.password).toBe("123123abc")
      })
      .catch((error) => {
        console.log("Error: ", JSON.stringify(error))
      })
  })
})

afterAll(async () => {
  return await disconnect()
})
