const Employee = require('./Employee');

// intern constructor extends employee constructor
class Intern extends Employee {
  constructor (name, id, email, school) {
      super (name, id, email);

      this.school = school;
  }

//returning school from input 
getSchool () {
    return this.school;
}

// overide employee rolde to intern
getRole () {
    return "Intern";
}
};
//be exported

module.exports = Intern;