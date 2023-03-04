// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
// require the Employee class
const Employee = require("./Employee");
class Engineer extends Employee {  // extend the Employee class with this Engineer class
    constructor({name, email, id, github}) {
        
        super({name, email, id}); // get name, email, id from Employee

        this.github = github;
        this.role = "Engineer";
    };

};

module.exports = Engineer;

// name
// id
// email
// *******
// github
// *******
// getRole() returns engineer