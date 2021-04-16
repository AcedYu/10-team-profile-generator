// Grab Modules
const inquirer = require('inquirer');
const fs = require('fs');

// Grab classes
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

class Team {
  constructor() {
    this.members = [];
  }
}

module.exports Team;