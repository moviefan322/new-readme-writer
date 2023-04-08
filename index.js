//DEPENDENCIES
const inquirer = require("inquirer");
const fs = require("fs");

//DATA
const questions = [
  //name
  {
    type: "input",
    message: "What is your full name?",
    name: "name",

    //title
  },
  {
    type: "input",
    message: "What is the title of your README?",
    name: "title",
  },
  //description
  {
    type: "input",
    message: "What is the description of your program?",
    name: "description",
  },
  //installation
  {
    type: "input",
    message: "How is your program installed??",
    name: "installation",
  },
  //usage
  {
    type: "input",
    message: "How is your program used?",
    name: "usage",
  },

  //contribtions
  {
    type: "input",
    message: "Who were the contributors to the program?",
    name: "contributors",
  },
  //tests
  {
    type: "input",
    message: "How can the program be tested?",
    name: "test",
  },
  //license
  {
    type: "list",
    message: "What license was used for this program?",
    name: "license",
    choices: [
      "MIT",
      "Apache License 2.0",
      "GNU General Public License",
      'BSD 2-Clause "Simplified" License',
      "Boost Software License 1.0",
      "Creative Commons Zero v1.0 Universal",
      "Eclipse Public License 2.0",
      "GNU Affero General Public License 2.0",
      "GNU General Public License v.20",
      "GNU Lesser General Public License v2.1",
      "Mozilla Public License 2.0",
      "The Unlicense",
    ],
  },
  //github
  {
    type: "input",
    message: "What is your github username?",
    name: "username",
  },
  //email
  {
    type: "input",
    message: "What is your e-mail address?",
    name: "email",
  },
];

//FUNCTIONS
function generateREADME(fileName, data) {}
function generateMarkDown(answers) {
  const markDownText = `
# ${answers.title} [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Table of Contents

### [Description](#description)
### [Installation](#installation)
### [Usage](#usage)
### [Screenshot](#screenshot)
### [Testing](#testing)
### [Contributors](#contributors)
### [License](#license)
### [Questions](#questions)

## Description <a id="description"></a>
    
${answers.description}
    
## Installation <a id="installation"></a>
    
${answers.installation}

## Usage <a id="usage"></a>
    
${answers.usage}    

## Screenshot <a id="screenshot"></a>
//INSERT LINK TO SCREENSHOT BELOW!
[Screenshot of webpage](./images/screenshot.png)

## Testing <a id="testing"></a>

${answers.test}

## Contributors <a id="contributors"></a>
    
${answers.contributors}

## License <a id="license"></a>
    
${answers.description}

## Questions <a id="questions"></a>

${answers.name}

https://github.com/${answers.username}

${answers.email}
    `;
  fs.writeFile("README.md", markDownText, (err) => {
    if (err) console.log(err);
    else {
      console.log("File written successfully\n");
      console.log("The written has the following contents:");
      console.log(fs.readFileSync("README.md", "utf8"));
    }
  });
}

//USER INTERACTIONS/INITIALIZATION
inquirer
  .prompt(questions)
  /* Pass your questions in here */

  .then((answers) => {
    console.log(answers);
    const markDown = generateMarkDown(answers);

    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log(error.isTtyError);
    } else {
      console.log("Something else went wrong");
    }
  });
