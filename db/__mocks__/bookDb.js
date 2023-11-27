// {firstName: req.body.firstName, email: req.body.email}
const findBook = async (obj) => {
  console.log("mocks find a book")
  return Promise.resolve({
    title: "Harry Poster",
    author: "Unknow",
    ISBN: "10-234289-234",
    numberOfPage: "1024",
    price: 39.09,
    yearPublished: "19966",
  })
}
const saveBook = async (newBook) => {
  console.log("mocks save book")
  return Promise.resolve({
    title: "Harry Poster",
    author: "Unknow",
    ISBN: "10-234289-234",
    numberOfPage: "1024",
    price: 39.09,
    yearPublished: "19966",
  })
}

const findBooks = async (obj, selectValues) => {
  console.log("mocks find books")
  return Promise.resolve([
    {
      title: "Harry Poster",
      author: "Unknow",
      ISBN: "10-234289-234",
      numberOfPage: "1024",
      price: 39.09,
      yearPublished: "19966",
    },
    {
      title: "Harry Poster 1",
      author: "Unknow",
      ISBN: "10-234289-234",
      numberOfPage: "1024",
      price: 39.09,
      yearPublished: "19966",
    },
  ])
}

const updateBook = async (filter, updateValues) => {
  console.log("mocks update book")
  return Promise.resolve({
    acknowledged: true,
    modifiedCount: 0,
    upsertedId: null,
    upsertedCount: 0,
    matchedCount: 0,
  })
}

const deleteBook = async (obj) => {
  console.log("mocks delete book")
  return Promise.resolve({
    acknowledged: true,
    deletedCount: 0,
  })
}

module.exports = { findBook, saveBook, findBooks, updateBook, deleteBook }
