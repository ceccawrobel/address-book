
//Business Logic For AddressBook ----
function AddressBook() {
  this.contacts = []
}

AddressBook.prototype.addContact = function(contact) {
  this.contacts.push(contact);
}

// Business Logic for Contacts ----
function Contact(firstName, lastName, phoneNumber) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.phoneNumber = phoneNumber;
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

var myAddressBook = new AddressBook();
var myContact = new Contact("Ada", "Lovelace", "123-123-1123");
var myContact2 = new Contact("Elmo", "Rodgers", "555-123-4433");
myAddressBook.addContact(myContact);
