class AddressBook {

  constructor () {
    this.contact = new Array();
    this.initialComplete = false;
  }

  addContact (contact) {
    this.contact.push(contact);
  }

  getContact (index) {
    return this.contact.pop(index);
  }

  deleteContact (index) {
    this.contact.pop(0);
  }

  getInitialContacts (done) {
    let self = this;
    setTimeout(function () {
      self.initialComplete = true;
      if (done) {
        return done();
      }
    }, 5500); //max. 5 sec. in Jasmine by default
  }

}