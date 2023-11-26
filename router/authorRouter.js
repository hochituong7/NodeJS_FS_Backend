const express = require("express")
const router = express.Router()
const {
  getAllAuthors,
  getAuthorByIds,
  postAuthor,
  updateAuthor,
  deleteAuthor,
} = require("../services/authorService")

const auth = require("../auth/authorization")
router.get("/", [auth, getAllAuthors])
router.get("/:authorId", [auth, getAuthorByIds])
router.post("/", [auth, postAuthor])
router.put("/:authorId", [auth, updateAuthor])
router.delete("/:authorId", [auth, deleteAuthor])

module.exports = router
