// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, email, id, officeNumber) {
    
        super({name, email, id});

        this.officeNumber = officeNumber;
        
        // this.role = "Manager";
    };
    getOfficeNumber() {
        return this.officeNumber;
    };
    getRole() {
        return 'Manager';
    };
};

module.exports = Manager;

// name
// id
// email
// *******
// getOfficeNumber()
// *******
// getRole() returns manager