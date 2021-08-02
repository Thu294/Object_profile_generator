const Employee = require('./Employee');

// intern constructor extends employee constructor
class Manager extends Employee {
  constructor (name, id, email, officeNumber) {
      super (name, id, email);

      this.officeNumber = officeNumber;
  }


// overide employee rolde to intern
getRole () {
    return "Manager";
}
};
//be exported

module.exports = Manager;