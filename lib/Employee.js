class Employee {
    constructor(name, email, id) { // Create constructor blueprint for this class including 'name' 'id' and 'email
        this.name = name;
        this.email = email;
        this.id = id;   
    };

    getName() {
        return this.name;       // return generic (apply to ALL sub-classes) employee name
    };
    getId() {
        return this.id;         // return generic (apply to ALL sub-classes) employee ID
    };
    getEmail() {
        return this.email;      // return generic (apply to ALL sub-classes) employee email
    };
    getRole() {
        return 'Employee';      // generic employee role, is overwritten by the sub-classes
    };
};

module.exports = Employee;      // allow this 'template' employee class to be inmported by other files