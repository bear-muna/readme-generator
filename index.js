const markdown = require('./utils/generateMarkdown');

const fileName = 'readme';

const whatWeNeed = [
    'generate readme.md', 
    'title of project',
    'description',
    'table of contents',
    'installation',
    'usage',
    'license and license badge',
    'contributing',
    'tests',
    'questions => email and preferred method of contact for questions',
    'github username and link to profile',
    
];


// TODO: Include packages needed for this application
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your application?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Give us a brief description of your application.',
        name: 'description',
    },
    {
        type: 'input',
        message: 'How do you install your application?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'How you do use your application?',
        name: 'usage',
    },
    {
        // License function separate?
        type: 'list',
        message: 'What license is used for the application?',
        choices: ['unsure need to complete later on'],
        name: 'license',
    },
    {
        type: 'input',
        message: 'Who are the contributors to the application?',
        name: 'contributors',
    },
    {
        type: 'input',
        message: 'What tests were used for the application?',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'What is an email that users can contact you for any questions?',
        name: 'questions',
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'github',
    }
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(data => console.log(data));
};

// Function call to initialize app
init();
