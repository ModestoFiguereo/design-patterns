function Person(firstName, lastName) {
  const emails = [];

  this.firstName = firstName;
  this.lastName = lastName;

  this.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
  }

  this.addEmail = function (email) {
    if (emails.indexOf(email) === -1) {
      emails.push(email);
    }
  }

  this.removeEmail = function (email) {
    const index = emails.indexOf(email);

    if(index !== -1) {
      emails.splice(index, 1);
    }
  }

  this.getEmails = function() {
    return emails.splice();
  }
}

const peter = new Person('Petter', 'Smith');

console.log(peter.getFullName());
