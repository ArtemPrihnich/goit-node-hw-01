const path = require('./contactsPath')
const fs = require('fs/promises')

const updateContactList = async (contact) => {
    await fs.writeFile(path, JSON.stringify(contact))
}

module.exports = updateContactList