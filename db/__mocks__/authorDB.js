// {firstName: req.body.firstName, email: req.body.email}
const findAuthor = async (obj) => {
  console.log("mocks find a Author")
  return Promise.resolve({
    name: "Unknow",
    book: "6563690023858adc34dded14",
    publisher: "TuongHC",
    website: "unknow.com",
    twitter: "@tuongtuong",
    about: "I don't know",
  })
}
const saveAuthor = async (newAuthor) => {
  console.log("mocks save Author")
  return Promise.resolve({
    name: "Unknow",
    book: "6563690023858adc34dded14",
    publisher: "TuongHC",
    website: "unknow.com",
    twitter: "@tuongtuong",
    about: "I don't know",
  })
}

const findAuthors = async (obj, selectValues) => {
  console.log("mocks find Authors")
  return Promise.resolve([
    {
      name: "Unknow",
      book: "6563690023858adc34dded14",
      publisher: "TuongHC",
      website: "unknow.com",
      twitter: "@tuongtuong",
      about: "I don't know",
    },
    {
      name: "Unknow 1",
      book: "6563690023858adc34dded14",
      publisher: "TuongHC",
      website: "unknow.com",
      twitter: "@tuongtuong",
      about: "I don't know",
    },
  ])
}

const updateAuthor = async (filter, updateValues) => {
  console.log("mocks update Author")
  return Promise.resolve({
    acknowledged: true,
    modifiedCount: 0,
    upsertedId: null,
    upsertedCount: 0,
    matchedCount: 0,
  })
}

const deleteAuthor = async (obj) => {
  console.log("mocks delete Author")
  return Promise.resolve({
    acknowledged: true,
    deletedCount: 0,
  })
}

module.exports = {
  findAuthor,
  saveAuthor,
  findAuthors,
  updateAuthor,
  deleteAuthor,
}
