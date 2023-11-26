const errorTemplate = require("../templates/errorTemplate")
const successTemplate = require("../templates/successTemplate")
const {
  findBooks,
  findBook,
  saveBook,
  updateBook,
  deleteBook,
} = require("../db/bookDb")
const mongoose = require("mongoose")
const { bookMessages } = require("../message/bookMessages")
const BookModel = require("../models/bookModel")

exports.getAllBooks = async (req, res) => {
  try {
    const books = await findBooks({}, "-__v")
    return res.status(200).json({
      message: bookMessages.book_found,
      books: books,
    })
  } catch (error) {
    errorTemplate(res, error, bookMessages.book_not_found)
  }
}

exports.getBookByIds = async (req, res) => {
  try {
    const book = await findBook({ _id: req.params.bookId }, "-__v")
    if (!book) {
      throw new Error(bookMessages.book_not_found)
    } else {
      successTemplate(res, book, bookMessages.book_found, 200)
    }
  } catch (error) {
    errorTemplate(res, error, bookMessages.book_not_found)
  }
}

exports.postBook = async (req, res) => {
  try {
    console.log("save");
    const bookStub = new BookModel()
    const foundBook = Object.assign(bookStub, req.body)
    const book = await findBook(foundBook)
    if (book) {
      throw new Error(bookMessages.book_existed)
    } else {
      let newBook = new BookModel()
      newBook._id = new mongoose.Types.ObjectId()

      newBook = Object.assign(newBook, req.body)
      const savedBook = await saveBook(newBook)

      successTemplate(res, savedBook, bookMessages.book_saved, 201)
    }
  } catch (error) {
    return errorTemplate(res, error, bookMessages.book_not_found)
  }
}

exports.updateBook = async (req, res) => {
  try {
    const id = req.params.bookId
    const book = new BookModel()
    const update = Object.assign(book, req.body)
    const result = await updateBook({ _id: id }, update)
    return successTemplate(res, result, bookMessages.book_updated, 200)
  } catch (error) {
    return errorTemplate(res, error, bookMessages.book_not_update)
  }
}

exports.deleteBook = async (req, res) => {
  try {
    const id = req.params.bookId
    const result = await deleteBook({ _id: id })
    return successTemplate(res, result, bookMessages.book_deleted, 200)
  } catch (error) {
    return errorTemplate(res, error, bookMessages.book_not_deleted)
  }
}
