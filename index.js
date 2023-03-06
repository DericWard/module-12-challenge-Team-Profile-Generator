const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

const team = [];

const addEmployee = [
    {
        name: "addEmployee",
        message: "Add employee:",
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
]

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
        name: "school",
        message: "School name:",
        type: "input"
    }
];

function init() {
            
    inquirer.prompt(questions).then(function(responses) {
        console.log(responses);
        
        if(responses.role === "Manager") {
            inquirer.prompt(managerQuestion).then(function(managerAnswer) {
            const manager = new Manager(responses.name, responses.email, responses.id, managerAnswer.officeNumber);
            team.push(manager);
            addAnotherEmployee();
            });

        } else if(responses.role === "Engineer") {
            inquirer.prompt(engineerQuestion).then(function(engineerAnswer) {
            const engineer = new Engineer(responses.name, responses.email, responses.id, engineerAnswer.github);
            team.push(engineer);
            addAnotherEmployee();
            });

        } else if(responses.role === "Intern") {
            inquirer.prompt(internQuestion).then(function(internAnswer) {
            const intern = new Intern(responses.name, responses.email, responses.id, internAnswer.school);
            team.push(intern);
            addAnotherEmployee();
            });
        };
    });
};

function addAnotherEmployee() {
    inquirer.prompt(addEmployee).then(function(response) {
        if(response.addEmployee) {
            init();
        } else {
            fs.writeFile(outputPath, render(team), function() {
                console.log("HMTL file generated successully! at " + outputPath);
            });
        };
    });
};

init();