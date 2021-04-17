// Grab Modules
const inquirer = require('inquirer');
const fs = require('fs');

// Grab classes
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

class Team {
  constructor() {
    // this.members will store an array of classes
    this.members = [];
    // leader will be assigned the name of the manager
    this.leader = '';
    // the html page
    this.htmlPage =
    `<!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
        <title>My Team</title>
      </head>
      <body>
        <header class = "card-header text-white bg-primary mb-3" style="text-align: center;">
          <h1>My Team</h1>
        </header>
        <div class="d-flex container">
      `;
    // finish the page with the closing divs for the container, body, and html
    this.endPage =
    `
        </div>
      </body>
    </html>`;
  }
  // initilize everything
  start() {
    console.log("Welcome to the Team generator, begin by putting in the information for the manager employee.");
    this.getManager();
  }
  // get manager inquirer function
  getManager() {
    return inquirer
      .prompt([
        {
          type: "input",
          message: "What is this employee's name?",
          name: "name",
          validate: val => /[a-z1-9]/gi.test(val) // validation
        },
        {
          type: "input",
          message: "What is this employee's ID?",
          name: "id",
          validate: val => /^\d+$/.test(val) // validation
        },
        {
          type: "input",
          message: "What is this employee's email?",
          name: "email",
          validate: val => /[a-z1-9]/gi.test(val) // validation
        },
        {
          type: "input",
          message: "What is this employee's office number?",
          name: "office",
          validate: val => /^\d+$/.test(val) // validation
        }
      ])
      .then(({ name, id, email, office }) => {
        let newEmployee = new Manager(name, id, email, office);
        this.leader = name;
        this.members.push(newEmployee);
        this.askMore();
      });
  }
  // get Employee inquirer function, goes into getEngineer or getIntern based on choice
  getEmployee() {
    return inquirer
      .prompt(
        {
          type: 'list',
          message: "What kind of employee would you like to add?",
          name: 'employee',
          choices: ['engineer', 'intern']
        }
      )
      .then(({ employee }) => {
        if (employee === 'engineer') {
          this.getEngineer();
        } else if (employee === 'intern') {
          this.getIntern();
        }
      });
  }
  // getEngineer inquirer function
  getEngineer() {
    return inquirer
      .prompt([
        {
          type: "input",
          message: "What is this employee's name?",
          name: "name",
          validate: val => /[a-z1-9]/gi.test(val) // validation
        },
        {
          type: "input",
          message: "What is this employee's ID?",
          name: "id",
          validate: val => /^\d+$/.test(val) // validation
        },
        {
          type: "input",
          message: "What is this employee's email?",
          name: "email",
          validate: val => /[a-z1-9]/gi.test(val) // validation
        },
        {
          type: "input",
          message: "What is this employee's github?",
          name: "github",
          validate: val => /^[a-z0-9]+$/i.test(val) // validation
        }
      ])
      .then(({ name, id, email, github }) => {
        let newEmployee = new Engineer(name, id, email, github);
        this.members.push(newEmployee);
        this.askMore();
      });
  }
  // getIntern inquirer function
  getIntern() {
    return inquirer
      .prompt([
        {
          type: "input",
          message: "What is this employee's name?",
          name: "name",
          validate: val => /[a-z1-9]/gi.test(val) // validation
        },
        {
          type: "input",
          message: "What is this employee's ID?",
          name: "id",
          validate: val => /^\d+$/.test(val) // validation
        },
        {
          type: "input",
          message: "What is this employee's email?",
          name: "email",
          validate: val => /[a-z1-9]/gi.test(val) // validation
        },
        {
          type: "input",
          message: "What school is this employee attending?",
          name: "school",
          validate: val => /[a-z1-9]/gi.test(val) // validation
        }
      ])
      .then(({ name, id, email, school }) => {
        let newEmployee = new Intern(name, id, email, school);
        this.members.push(newEmployee);
        this.askMore();
      });
  }
  // function to ask for more employees or finish team building.
  askMore() {
    return inquirer
      .prompt(
        {
          type: "list",
          message: "Add another employee?",
          name: "choice",
          choices: ['yes', 'no']
        }
      )
      .then(({ choice }) => {
        if (choice === 'yes') {
          this.getEmployee();
        } else {
          this.compilePage();
        }
      })
  }
  // function that puts together the html page
  compilePage() {
    for (let member of this.members) {
      // uses the .card function that every class has to return a template literal that contains a bootstrap styled card
      this.htmlPage += member.card();
    }
    this.htmlPage += this.endPage;
    console.log("Page Complete.");
    // invoke the createPage function
    this.createPage();
  }
  // createPage creates the html page using fs.writeFile
  createPage() {
    let fileName = `./dist/team${this.leader.split(' ').join('')}.html`;
    fs.writeFile(fileName, this.htmlPage, err => {
      if (err) {
        console.log(`Error creating file. Error message of: ${err}`);
      } else {
        console.log(`Creating file: ${fileName}`);
      }
    });
  }
}

module.exports = Team;