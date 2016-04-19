function Person(data) {
  this.firstName = data.firstName;
  this.lastName = data.lastName;
  this.age = data.age;
  this.emails = data.emails || [];

  this.getFullName = function () {
    return this.firstName + ' ' + this.lastName;
  }

  this.addEmail = function (email) {
    if (emails.indexOf(email) === -1) {
      emails.push(email);
    }
  }

  this.removeEmail = function (email) {
    var index = emails.indexOf(email);

    if(index !== -1) {
      emails.splice(index, 1);
    }
  }
}

var peter = new Person({
  firstName: 'Petter',
  lastName: 'Smith',
  age: 25
});

console.log(peter.getFullName());
