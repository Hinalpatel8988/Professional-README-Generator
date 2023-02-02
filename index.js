// TODO: Create an array of questions for user input
// TODO: Create a function to write README file
// TODO: Create a function to initialize app
// Function call to initialize app


const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");


inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your project title?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Describe about your project:',
      name: 'description',
    },
    {
      type: 'input',
      message: 'How you intend to use the Project?',
      name: 'usage',
    },
    {
        type: 'input',
        message: 'How to install your project?',
        name: 'installation',
      },
      {
        type: 'input',
        message: 'How can the user contribute to your project?',
        name: 'contribution',
      },
      {
        type: 'input',
        message: 'What command should be run to run the tests?',
        name: 'tests',
      },
      {
        type: 'input',
        message: 'What is your GitHub Username?',
        name: 'github',
      },
      {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
      },
      {
        type: 'input',
        message: 'How to reach you with additional questions?',
        name: 'questions',
      },
      {
        type: 'list',
        message: 'Choose your license for your project',
        name: 'license',
        choices: ["MIT", "MPL-2.0", "APACHE 2.0", "GPL 3.0", "BSD 3", "IPL-1.0", "None"]
      },
  ])
  .then((answers) => {
    const pageContent = generateMarkdown(answers);

    fs.writeFile('README.md', pageContent, (err) =>
      err ? console.log(err) : console.log('The README.md is successfully created!')
    );
  });
    
   function init() {}

init();
 