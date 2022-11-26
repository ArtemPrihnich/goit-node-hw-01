const fs = require("fs/promises")
// const path = require("path")
// const contactsPath = path.resolve(__dirname, "../db/contacts.json");
const path = require('./contactsPath')

const getAllContacts = async () => {
    const data = await fs.readFile(path)
    const list = JSON.parse(data)
    return list
}

module.exports = getAllContacts