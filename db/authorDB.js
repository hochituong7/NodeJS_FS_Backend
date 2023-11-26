const AuthorModel = require("../models/authorModel")

const findAuthors = async (obj) => {
  return await AuthorModel.find(obj).populate("book").select("-__v").exec()
}
const findAuthor = async (obj) => {
  return await AuthorModel.findOne(obj).populate("book").select("-__v").exec()
}
const saveAuthor = async (newAuthor) => {
  return await newAuthor.save()
}
const updateAuthor = async (filter, updateValues) => {
  return await AuthorModel.updateOne(filter, updateValues, { new: true }).exec()
}
const deleteAuthor = async (obj) => {
  return await AuthorModel.deleteOne(obj).exec()
}
module.exports = {
  findAuthor,
  findAuthors,
  saveAuthor,
  updateAuthor,
  deleteAuthor,
}
