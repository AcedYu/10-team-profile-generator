// Tests for Class Employee
const Employee = require('../lib/Employee');

describe("Employee class", () => {
  it("Should contain all of the necessary parameter values.", () => {
    const example = new Employee('Bob', 1, 'bob@email.com');

    const expectedName = 'Bob';
    const actualName = example.name;

    const expectedid = 1;
    const actualid = example.id;

    const expectedEmail = 'bob@email.com';
    const actualEmail = example.email;

    expect(expectedName).toEqual(actualName);
    expect(expectedid).toEqual(actualid);
    expect(expectedEmail).toEqual(actualEmail);
  });
});