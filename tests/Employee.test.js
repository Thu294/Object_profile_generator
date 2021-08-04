const { expect, test } = require('@jest/globals');
const Employee = require('../lib/Employee');

//creates employee object
test('creates an employee object', () => {
    const employee = new Employee('mthud', 29, 'mthud.2904@gmail.com');

expect(employee.name).toEqual(expect.any(String));
expect(employee.id).toEqual(expect.any(Number));
expect(employee.email).toEqual(expect.any(String));
});

//get id from getID()

test('get employee name', () => {
    const employee = new Employee('mthud', 29, 'mthud.2904@gmail.com');
    expect(employee.getName()).toEqual(expect.any(String));
}
);

//get id from gerID()
test('gets employee ID',  () => {
    const employee = new Employee('mthud', 29, 'mthud.2904@gmail.com');
    expect(employee.getId()).toEqual(expect.any(Number));
}
);

//get email from getE()
test('gets employee email', () => {
const employee = new Employee('mthud',29, 'mthud.2904@gmail.com');

expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email,toString()));
});

// gets role from getRole()
test('gets role of employee', () => {
    const employee = new Employee('mthud', 29, 'mthud.elisaw@gmail.com');

    expect(employee.getRole()).toEqual("Employee");
}); 

