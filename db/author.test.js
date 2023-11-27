const {
  saveAuthor,
  findAuthor,
  findAuthors,
  updateAuthor,
  deleteAuthor,
} = require("./authorDB")
const Author = require("../models/authorModel")
const mongoose = require("mongoose")

// describe, test(), expect()
jest.mock("./authorDB.js")
let id = null
describe("Author DB test", () => {
  test("As a User I want to save a author to the database", async () => {
    const newAuthorId = new mongoose.Types.ObjectId()
    const newAuthor = new Author({
      _id: newAuthorId,
      name: "Unknow",
      book: "6563690023858adc34dded14",
      publisher: "TuongHC",
      website: "unknow.com",
      twitter: "@tuongtuong",
      about: "I don't know",
    })
    const author = await saveAuthor(newAuthor)
    id = author._id
    expect(author.name).toEqual("Unknow")
    expect(author.book).toEqual("6563690023858adc34dded14")
    expect(author.publisher).toEqual("TuongHC")
    expect(author.website).toEqual("unknow.com")
    expect(author.twitter).toEqual("@tuongtuong")
    expect(author.about).toEqual("I don't know")
  })

  test("As a User I want to find authors from the database", async () => {
    const author = await findAuthors()
    expect(author[0].name).toEqual("Unknow")
    expect(author[0].book).toEqual("6563690023858adc34dded14")
    expect(author[0].publisher).toEqual("TuongHC")
    expect(author[0].website).toEqual("unknow.com")
    expect(author[0].twitter).toEqual("@tuongtuong")
    expect(author[0].about).toEqual("I don't know")
  })

    test("As a User I want to find a author from the database", async () => {
      const author = await findAuthor({ _id: id })
      expect(author.name).toEqual("Unknow")
      expect(author.book).toEqual("6563690023858adc34dded14")
      expect(author.publisher).toEqual("TuongHC")
      expect(author.website).toEqual("unknow.com")
      expect(author.twitter).toEqual("@tuongtuong")
      expect(author.about).toEqual("I don't know")
    })

    test("As a User I want to update a author to the database", async () => {
      const author = await updateAuthor({ _id: id })
      expect(author.acknowledged).toEqual(true)
      expect(author.modifiedCount).toEqual(0)
      expect(author.upsertedId).toEqual(null)
      expect(author.upsertedCount).toEqual(0)
      expect(author.matchedCount).toEqual(0)
    })

    test("As a User I want to delete a author to the database", async () => {
      const author = await deleteAuthor({ _id: id })
      expect(author.acknowledged).toEqual(true)
      expect(author.deletedCount).toEqual(0)
    })
})
