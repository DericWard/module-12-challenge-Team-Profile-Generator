const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

const addEmployee = [
    {
        name: "addEmployee",
        message: "Add an employee? :",
        type: "confirm"
    }
];

const questions = [
    {
        name: "name",
        message: "Employee name:",
        type: "input"
    },
    {
        name: "email",
        message: "email:",
        type: "email"
    },
    {
        name: "id",
        message: "Employee ID:",
        type: "input"
    },
    {
        name: "role",
        message: "Role:",
        type: "list",
        choices: ["Manager", "Engineer", "Intern"]
    }
];

const managerQuestion = [
    { 
        name: "officeNumber",
        message: "Office number:",
        type: "input"
    }
];

const engineerQuestion = [
    {
        name: "github",
        message: "GitHub ID:",
        type: "input"
    }
];

const internQuestion = [
    {
        name: "School:",
        message: "School name:",
        type: "input"
    }
];

function init() {
    inquirer.prompt(addEmployee).then(function(response) {
        console.log(response);

        // while(response.addEmployee) {

            inquirer.prompt(questions).then(function(responses) {
                console.log(responses);
        
                if(responses.role === "Manager") {
                    const {officeNumber} = inquirer.prompt(managerQuestion);
                } else 
                if(responses.role === "Engineer") {
                    const {github} = inquirer.prompt(engineerQuestion);
                } else {
                    responses.role === "Intern";
                    const {school} = inquirer.prompt(internQuestion);
                };   
            });
        }
        return;
    });
};


//     inquirer.prompt(questions).then(function(responses) {
//         console.log(responses);

//         if(responses.role === "Manager") {
//             const {officeNumber} = inquirer.prompt(managerQuestion);
//         } else 
//         if(responses.role === "Engineer") {
//             const {github} = inquirer.prompt(engineerQuestion);
//         } else {
//             responses.role === "Intern";
//             const {school} = inquirer.prompt(internQuestion);
//         };   
//     });


// };


init();

// TODO: Write Code to gather information about the development team members, and render the HTML file.


// check if user has finished building team, if so, quit and
// generate HTML

// pass all employees array to the render function

// rendered file name is team.html
// check the providd "outputPath" to target team.html

