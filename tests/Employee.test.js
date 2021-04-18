// Tests for Class Employee
const Employee = require('../lib/Employee');

// Globally define the example
const example = new Employee('Bob', 1, 'bob@email.com');
const expectedName = 'Bob';
const expectedid = 1;
const expectedEmail = 'bob@email.com';

describe("Employee class", () => {
  it("Should contain all of the necessary parameter values.", () => {

    const actualName = example.name;
    const actualid = example.id;
    const actualEmail = example.email;

    expect(expectedName).toEqual(actualName);
    expect(expectedid).toEqual(actualid);
    expect(expectedEmail).toEqual(actualEmail);
  });

  describe("Functions", () => {
    it("getName should return the name", () => {
      expect(example.getName()).toEqual(expectedName);
    });

    it("getId should return the id", () => {
      expect(example.getId()).toEqual(expectedid);
    });

    it("getEmail should return the email", () => {
      expect(example.getEmail()).toEqual(expectedEmail);
    });

    it("getRole should be 'Employee'", () => {
      expect(example.getRole()).toEqual('Employee');
    });
  });

});