// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const questions =  require('./utils/questions')

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(fileName, data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) => {
        console.log(responses);
        console.log("Create a Professional READ.md File...");
        writeToFile("./file/README.md", generateMarkdown(responses));
    });
}
// Function call to initialize app
init();