// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "Woohoo you finished your project!! What is your project name?",
        name: "title",
    },
    {
        type: "input",
        message: "write a description regarding your project?",
        name: "description",
    },
    {
        type: "list",
        message: "What license would you like to use?",
        choices: ["MIT", "ISC", "GPL"],
        name: "license",
    },
    {
        type: "input",
        message:
            "Write a brief paragraph to tell the user how to install or use your application!",
        name: "install",
    },
    {
        type: "input",
        message: "List the individuals who contributed to this project!",
        name: "contributors",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, readMeContent) {
    //path shipped module its within node, must be required
    //join method on path
    //lets just try to get a file to create and grabbing the information

    return fs.writeFileSync(fileName, readMeContent);
}

// TODO: Create a function to initialize app
function init() {
    //user will see the first question
    inquirer.prompt(questions).then((data) => {
        //figure out how to take those response from the user and wire them to a file
        writeToFile("README.md", generateMarkdown(data));
    });
}

// Function call to initialize app
init();


