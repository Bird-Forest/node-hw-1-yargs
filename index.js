const contacts = require("./contacts.js");
const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");
const argv = require("yargs").argv;

// TODO: рефакторити
async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const allContacts = await contacts.listContacts();
      return console.table(allContacts);
      break;

    case "get":
      const contactObj = await contacts.getContactById(id);
      return console.table(contactObj);
      break;

    case "add":
      const newContact = await contacts.addContact(name, email, phone);
      return console.table(newContact);
      break;

    case "remove":
      const deleteContact = await contacts.removeContact(id);
      return console.table(deleteContact);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}
invokeAction(argv);

// *****************************************************************
// const arr = hideBin(process.argv);
// const { argv } = yargs(arr);
// console.log(argv);
// invokeAction(argv);

// console.log(process.argv);
// console.log(action);

// const actionId = process.argv.indexOf("--action");
// if (actionId !== -1) {
//   const action = process.argv[actionId + 1];
//   console.log(action)
//   invokeAction({action});
// }

// invokeAction({ action: "get", id: "05olLMgyVQdWRwgKfg5J6" });
// invokeAction({
//   action: "add",
//   name: "Mango",
//   email: "mango@gmail.com",
//   phone: "322-22-22",
// });
// invokeAction({ action: "remove", id: "qdggE76Jtbfd9eWJHrssH" });
