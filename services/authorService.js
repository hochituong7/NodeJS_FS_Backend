const errorTemplate = require("../templates/errorTemplate")
const successTemplate = require("../templates/successTemplate")
const {
  findAuthors,
  findAuthor,
  saveAuthor,
  updateAuthor,
  deleteAuthor,
} = require("../db/authorDB")
const mongoose = require("mongoose")
const { authorMessages } = require("../message/authorMessages")
const AuthorModel = require("../models/authorModel")

exports.getAllAuthors = async (req, res) => {
  try {
    const authors = await findAuthors({})
    if (authors.length > 0) {
      return successTemplate(res, authors, authorMessages.author_found, 200)
    } else {
      throw new Error(authorMessages.author_not_found)
    }
  } catch (error) {
    return errorTemplate(res, error, authorMessages.author_not_found)
  }
}

exports.getAuthorByIds = async (req, res) => {
  try {
    const author = await findAuthor({ _id: req.params.authorId })
    if (!author) {
      throw new Error(authorMessages.author_not_found)
    } else {
      return successTemplate(res, author, authorMessages.author_found, 200)
    }
  } catch (error) {
    return errorTemplate(res, error, authorMessages.author_not_found)
  }
}

exports.postAuthor = async (req, res) => {
  try {
    const author = await findAuthor({
      name: req.body.name,
      book: req.body.book,
    })
    if (author) {
      throw new Error(authorMessages.author_existed)
    } else {
      let newAuthor = new AuthorModel()
      newAuthor._id = new mongoose.Types.ObjectId()

      newAuthor = Object.assign(newAuthor, req.body)
      const savedAuthor = await saveAuthor(newAuthor)

      successTemplate(res, savedAuthor, authorMessages.author_saved, 201)
    }
  } catch (error) {
    return errorTemplate(res, error, authorMessages.author_not_found)
  }
}

exports.updateAuthor = async (req, res) => {
  try {
    const id = req.params.authorId
    const author = new AuthorModel()
    const update = Object.assign(author, req.body)
    const result = await updateAuthor({ _id: id }, update)
    return successTemplate(res, result, authorMessages.author_updated, 200)
  } catch (error) {
    return errorTemplate(res, error, authorMessages.author_not_update)
  }
}

exports.deleteAuthor = async (req, res) => {
  try {
    const id = req.params.authorId
    const result = await deleteAuthor({ _id: id })
    return successTemplate(res, result, authorMessages.author_deleted, 200)
  } catch (error) {
    return errorTemplate(res, error, authorMessages.author_not_deleted)
  }
}
