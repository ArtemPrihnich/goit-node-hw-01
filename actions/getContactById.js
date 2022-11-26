const getContacts = require("./getContactsList")

const getContactById = async (id) => {
    const contacts = await getContacts()
    const result = contacts.find(item => item.id === id)
    return result
}

module.exports = getContactById