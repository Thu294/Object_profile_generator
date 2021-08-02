// importing Employee constructor

const Employee = require("./Employee");

//Eng
class Engineer extends Employee {
    constructor (name, id, email, github) {
        //calling employee constructor
        super (name, id, email);
        this.github = github;
    }


//returning github from input
getGithub () {
    return this.github;
}
// overide employee role to engineer
getRole () {
    return "Engineer";
}
};
// be exported
module.exports = Engineer;




