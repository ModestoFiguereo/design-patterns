function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;

  Object.defineProperty(this, 'emails', {
    value: [],
    writable: false
  });
}

Person.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
}

Person.prototype.addEmail = function (email) {
  if (this.emails.indexOf(email) === -1) {
    this.emails.push(email);
  }
}

Person.prototype.removeEmail = function (email) {
  const index = this.emails.indexOf(email);

  if(index !== -1) {
    this.emails.splice(index, 1);
  }
}

const peter = new Person('Petter', 'Smith');

console.log(peter.getFullName());
