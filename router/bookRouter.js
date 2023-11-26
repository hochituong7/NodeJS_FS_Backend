const express = require("express")
const router = express.Router()
const {
  getAllBooks,
  getBookByIds,
  postBook,
  updateBook,
  deleteBook,
} = require("../services/bookService")

const auth = require("../auth/authorization")
router.get("/", [auth, getAllBooks])
router.get("/:bookId", [auth, getBookByIds])
router.post("/", [auth, postBook])
router.put("/:bookId", [auth, updateBook])
router.delete("/:bookId", [auth, deleteBook])

module.exports = router
