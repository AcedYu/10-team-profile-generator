const Employee = require('./Employee');

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }
  getGithub() {
    return this.github;
  }
  getRole() {
    return 'Engineer';
  }
  // function to return a template literal bootstrap-styled html card
  card() {
    return(
   `<div class="card m-auto" style="width: 18rem;">
      <div class="card-header">
        <h1>${this.name}</h1>
        <h2>Engineer 🖥️</h2>
      </div>
      <div class="card-body">
        <ul class="list-group">
          <li class="list-group-item">ID: ${this.id}</li>
          <li class="list-group-item">Email: <a href = "mailto: ${this.email}">${this.email}</a></li>
          <li class="list-group-item">Github: <a href = "https://github.com/${this.github}" target="_blank">${this.github}</a></li>
        </ul>
      </div>
    </div>
    `);
  }
}

module.exports = Engineer;