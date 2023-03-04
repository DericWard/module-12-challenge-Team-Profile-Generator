const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


const questions = [
    {
        name: 'name',
        message: 'Enter employee name:',
        type: 'input'
    },
    {
        name: 'email',
        message: 'Enter email:',
        type: 'email'
    },
    {
        name: 'id',
        message: 'Enter ID:',
        type: 'input'
    },
];

// TODO: Write Code to gather information about the development team members, and render the HTML file.


// check if user has finished building team, if so, quit and
// generate HTML

// pass all employees array to the render function

// rendered file name is team.html
// check the providd 'outputPath' to target team.html

