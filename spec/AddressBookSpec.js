describe("AddressBook", function () {
  let addressBook, thisContact;

  beforeEach(function () {
    addressBook = new AddressBook();
    thisContact = new Contact();
  });

  it("should be able to add a contact", function () {
    addressBook.addContact(thisContact);

    expect(addressBook.getContact(0)).toBe(thisContact);
  });

  it("shoud be able to delete a contact", function () {
    addressBook.addContact(thisContact);
    addressBook.deleteContact(0);

    expect(addressBook.getContact(0)).not.toBe(thisContact);
  });

  describe("Async Address Book", function () {
    let addressBook = new AddressBook();

    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;

    beforeEach(function (done) {
      addressBook.getInitialContacts(function () {
        done();
      });
    });

    it("should grab initial contacts", function (done) {
      debugger;
      expect(addressBook.initialComplete).toBe(true);
      done();
    });
  });

});