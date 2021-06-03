// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'github',
        message: 'What is your github username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address'
    },
    {
        type: 'input',
        name: 'title',
        message: "What is your project's name?"
    },
    {
        type: 'input',
        name: 'description',
        message: "What is your project's description?"
    },
    {
        type: 'input',
        name: 'version',
        message: "Version #?"
    },
    {
        type: 'input',
        name: 'releaseDate',
        message: "Release Date?"
    },
    {
        type: 'input',
        name: 'usage',
        message: "Usage?"
    },
    {
        type: 'list',
        name: 'lic',
        message: "What lic are you using?",
        choices: ['MIT', 'APACHE', 'ABC', 'EFG']
    },
    {
        type: "input",
        name: "contribute",
        message: "Enter contributing information: ",
        name: "contribute"
    },
    {
        type: "input",
        name: "test",
        message: "Enter any tests you are running for your project: ",
        name: "tests"
    },
    {
        type: 'input',
        name: 'Questions',
        message: "Do you have any questions?"

    }

];

// TODO: Create a function to write README file using the user input from our choices above
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((response) => {
            console.log('Your readME is being created.....');
            writeToFile('README.md', generateMarkdown(response));
        }
        )
}

// Function call to initialize app
init();
