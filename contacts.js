const fs = require("fs/promises")
const path = require("path")

const operationPath = path.resolve(__dirname, "actions")
const contactsOperations = require(operationPath)

 async function getListContacts() {
  const list = await contactsOperations.getAll()
  return console.table(list)
}

async function getContactById(contactId) {
  const contact = await contactsOperations.getById(contactId)
  return console.log(contact)
}

async function removeContact(contactId) {
  const contact = await contactsOperations.remove(contactId)
  return console.log(contact)
}

async function addContact(name, email, phone) {
  const contact = await contactsOperations.add({ name, email, phone })
  return console.log(contact)
}

module.exports = {
  getListContacts,
  getContactById,
  removeContact,
  addContact
}