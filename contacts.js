const fs = require("fs/promises")
const path = require("path")

const operationPath = path.resolve(__dirname, "actions")
const contactsOperations = require(operationPath)

// TODO: задокументировать каждую функцию
 async function listContacts() {
  const list = await contactsOperations.getAll()
  return console.log(list)
}

async function getContactById(contactId) {
  const contact = await contactsOperations.getById(contactId)
  return console.log(contact)
}

async function removeContact(contactId) {
  const contact = await contactsOperations.remove(contactId)
  return console.log(contact)
}

removeContact('4')

function addContact(name, email, phone) {
  // ...твой код
}
