/*
  This is essentially the same as basic constructor pattern
  but with the benefit that we create methods once and
  not each time we instanctiate Person.
*/

function Person(data) {
  this.firstName = data.firstName;
  this.lastName = data.lastName;
  this.age = data.age;
  this.emails = data.emails || []
}

Person.prototype.getFullName = function () {
  return this.firstName + ' ' + this.lastName;
}

Person.prototype.addEmail = function (email) {
  if (this.emails.indexOf(email) === -1) {
    this.emails.push(email);
  }
}

Person.prototype.removeEmail = function (email) {
  var index = this.emails.indexOf(email);

  if(index !== -1) {
    this.emails.splice(index, 1);
  }
}

var peter = new Person({
  firstName: 'Petter',
  lastName: 'Smith',
  age: 25
});

console.log(peter.getFullName());
