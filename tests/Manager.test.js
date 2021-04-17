// tests for class Manager
const Manager = require('../lib/Manager');

describe("Manager class", () => {
  it("Should contain all of the necessary parameter values.", () => {
    const example = new Manager('Bob', 1, 'bob@email.com', '1234');

    const expectedName = 'Bob';
    const actualName = example.name;

    const expectedid = 1;
    const actualid = example.id;

    const expectedEmail = 'bob@email.com';
    const actualEmail = example.email;

    const expectedOffice = '1234';
    const actualOffice = example.office;

    expect(expectedName).toEqual(actualName);
    expect(expectedid).toEqual(actualid);
    expect(expectedEmail).toEqual(actualEmail);
    expect(expectedOffice).toEqual(actualOffice);
  });

  describe("card", () => {
    it("Should return a string", () => {
      const example = new Manager('Bob', 1, 'bob@email.com', '1234');
      const cardReturnType = typeof(example.card());

      expect(cardReturnType).toBe('string');
    });
  });
});