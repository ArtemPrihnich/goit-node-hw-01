const yargs = require("yargs")
const { hideBin } = require("yargs/helpers")
const contactsOperations = require("./contacts")

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      await contactsOperations.getListContacts()
      break;

    case "get":
      await contactsOperations.getContactById(id)
      break;

    case "add":
      await contactsOperations.addContact(name, email, phone)
      break;

    case "remove":
      await contactsOperations.removeContact(id)
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

const arr = hideBin(process.argv)
const { argv } = yargs(arr)

invokeAction(argv)