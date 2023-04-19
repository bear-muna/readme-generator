const inquirer = require('inquirer');
const fs = require('fs');

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
        type: 'list',
        message: 'What license is used for the application?',
        choices: ['APACHE', 'MIT', 'BSD', 'None'],
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

function init() {
    inquirer.prompt(questions)
        .then(data => {
            console.log(data)
            const readmeFile = `
# ${data.title}

## Description
${data.description}

## Table of Contents

* [Installation](#Installation)
* [Usage](#Usage)
* [License](#License)
* [Contributors](#Contributors)
* [Tests](#Tests)
* [Questions](#Questions)

## Installation

${data.installation}

## Usage

${data.usage}

## License

${data.license}

## Contributors

${data.contributors}

## Tests

${data.tests}

## Questions

If you have any questions, please contact me via: 
email: ${data.email}
GitHub: ${data.github}
`

            fs.writeFile('./gen/README.md', readmeFile, err => {
                if (err) {
                    throw err;
                } else {
                    console.log("Successful creation of README file");
                };
            })
        });
};

init();
