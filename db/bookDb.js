const BookModel = require("../models/bookModel")

const findBooks = async (obj, selectValues) => {
  return await BookModel.find(obj).select(selectValues).exec()
}
const findBook = async (obj, selectValues) => {
  return await BookModel.findOne(obj).select(selectValues).exec()
}
const saveBook = async (newBook) => {
  return await newBook.save()
}
const updateBook = async (filter, updateValues) => {
  return await BookModel.updateOne(filter, updateValues, { new: true }).exec()
}
const deleteBook = async (obj) => {
  return await BookModel.deleteOne(obj).exec()
}
module.exports = { findBooks, findBook, saveBook, updateBook, deleteBook }
