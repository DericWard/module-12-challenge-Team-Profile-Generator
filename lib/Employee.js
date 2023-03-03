// TODO: Write code to define and export the Employee class
// create Employee class
class Employee {
    // create constructor blueprint for this class including 'name' 'id' and 'email:
    constructor({name, id, email}) {
        this.name = name;
        this.id = id;
        this.email = email;
    };

    getName() {
        return this.name;
    };

    getid() {
        return this.id;
    };

    getemail() {
        return this.email;
    };

    getRole() {

    };
};

// name
// id
// email
// *********
// getName()
// getID()
// getRole() returns employee
//
module.exports = Employee;

//

