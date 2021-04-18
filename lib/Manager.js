const Employee = require('./Employee');

class Manager extends Employee {
  constructor(name, id, email, officenum) {
    super(name, id, email);
    this.office = officenum;
  }
  getRole() {
    return 'Manager';
  }
  // function to return a template literal bootstrap-styled html card
  card() {
    return(
   `<div class="card m-auto" style="width: 18rem;">
      <div class="card-header">
        <h1>${this.name}</h1>
        <h2>Manager ✔️</h2>
      </div>
      <div class="card-body">
        <ul class="list-group">
          <li class="list-group-item">ID: ${this.id}</li>
          <li class="list-group-item">Email: <a href = "mailto: ${this.email}">${this.email}</a></li>
          <li class="list-group-item">Office Number: ${this.office}</li>
        </ul>
      </div>
    </div>
    `);
  }
}

module.exports = Manager;