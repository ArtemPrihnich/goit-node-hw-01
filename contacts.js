const fs = require("fs/promises")
const path = require("path")
//  Раскомментируй и запиши значение
const contactsPath = path.resolve('./db/contacts.json');
// console.log(contactsPath)
 
// fs.readFile(contactsPath).then(data => console.log(data)).catch(err => console.log(err))


// TODO: задокументировать каждую функцию
async function listContacts() {
  // fs.readFile(contactsPath).then(data => console.log(data)).catch(err => console.log(err))
  const list = await fs.readFile(contactsPath, "utf-8")
  console.log(list)
}

function getContactById(contactId) {
  // ...твой код
}

function removeContact(contactId) {
  // ...твой код
}

function addContact(name, email, phone) {
  // ...твой код
}

const data = {
  listContacts
}

module.exports = data