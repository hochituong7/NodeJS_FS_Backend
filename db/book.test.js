const {
  saveBook,
  findBook,
  findBooks,
  updateBook,
  deleteBook,
} = require("./bookDb")
const Book = require("../models/bookModel")
const mongoose = require("mongoose")

// describe, test(), expect()
jest.mock("./bookDb.js")
let id = null
describe("Book DB test", () => {
  test("As a User I want to save a book to the database", async () => {
    const newBookId = new mongoose.Types.ObjectId()
    const newBook = new Book({
      _id: newBookId,
      title: "Harry Poster",
      author: "Unknow",
      ISBN: "10-234289-234",
      numberOfPage: "1024",
      price: 39.09,
      yearPublished: "19966",
    })
    const book = await saveBook(newBook)
    id = book._id
    expect(book.title).toEqual("Harry Poster")
    expect(book.author).toEqual("Unknow")
    expect(book.ISBN).toEqual("10-234289-234")
    expect(book.numberOfPage).toEqual("1024")
    expect(book.price).toEqual(39.09)
    expect(book.yearPublished).toEqual("19966")
  })

  test("As a User I want to find books from the database", async () => {
    const book = await findBooks()
    expect(book[0].title).toEqual("Harry Poster")
    expect(book[0].author).toEqual("Unknow")
    expect(book[0].ISBN).toEqual("10-234289-234")
    expect(book[0].numberOfPage).toEqual("1024")
    expect(book[0].price).toEqual(39.09)
    expect(book[0].yearPublished).toEqual("19966")
  })

  test("As a User I want to find a book from the database", async () => {
    const book = await findBook({ _id: id })
    expect(book.title).toEqual("Harry Poster")
    expect(book.author).toEqual("Unknow")
    expect(book.ISBN).toEqual("10-234289-234")
    expect(book.numberOfPage).toEqual("1024")
    expect(book.price).toEqual(39.09)
    expect(book.yearPublished).toEqual("19966")
  })

  test("As a User I want to update a book to the database", async () => {
    const book = await updateBook({ _id: id })
    expect(book.acknowledged).toEqual(true)
    expect(book.modifiedCount).toEqual(0)
    expect(book.upsertedId).toEqual(null)
    expect(book.upsertedCount).toEqual(0)
    expect(book.matchedCount).toEqual(0)
  })

  test("As a User I want to delete a book to the database", async () => {
    const book = await deleteBook({ _id: id })
    expect(book.acknowledged).toEqual(true)
    expect(book.deletedCount).toEqual(0)
  })
})
