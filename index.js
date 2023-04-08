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

    