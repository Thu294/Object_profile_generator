// Employee constructor
class Employee {
    constructor (name, id, email) 
    {
        this.name = name;
        this.id = id;
        this. email = email
    }
// returning name from input

getName () {
    return this.name;   
}
 // returning ID 
 
 getId () {
     return this.id;

 }
//returning email
getEmail () {
    return this.email;

}
//returning employye type
getRole () {
    return 'Employee';
}
};
 //be exported

module.exports = Employee;