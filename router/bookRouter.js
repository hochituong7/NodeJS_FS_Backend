const express = require("express")
const router = express.Router()
const {
  getAllBooks,
  getBookByIds,
  postBook,
  updateBook,
  deleteBook,
} = require("../services/bookService")

router.get("/", getAllBooks)
router.get("/:bookId", getBookByIds)
router.post("/", postBook)
router.put("/:bookId", updateBook)
router.delete("/:bookId", deleteBook)

module.exports = router
