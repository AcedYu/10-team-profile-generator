// tests for class Manager
const Manager = require('../lib/Manager');

// Globally define the example
const example = new Manager('Bob', 1, 'bob@email.com', '1234');
const expectedName = 'Bob';
const expectedid = 1;
const expectedEmail = 'bob@email.com';
const expectedOffice = '1234';

describe("Manager class", () => {
  it("Should contain all of the necessary parameter values.", () => {

    const actualName = example.name;
    const actualid = example.id;
    const actualEmail = example.email;
    const actualOffice = example.office;

    expect(expectedName).toEqual(actualName);
    expect(expectedid).toEqual(actualid);
    expect(expectedEmail).toEqual(actualEmail);
    expect(expectedOffice).toEqual(actualOffice);
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

    it("getRole should be 'Manager'", () => {
      expect(example.getRole()).toEqual('Manager');
    });
  });

  describe("card", () => {
    it("Should return a string", () => {

      const cardReturnType = typeof(example.card());

      expect(cardReturnType).toBe('string');
    });
  });
});