// Tests for class Intern
const Intern = require('../lib/Intern');

describe("Intern class", () => {
  it("Should contain all of the necessary parameter values.", () => {
    const example = new Intern('Bob', 1, 'bob@email.com', 'UC Berkeley');

    const expectedName = 'Bob';
    const actualName = example.name;

    const expectedid = 1;
    const actualid = example.id;

    const expectedEmail = 'bob@email.com';
    const actualEmail = example.email;

    const expectedSchool = 'UC Berkeley';
    const actualSchool = example.school;

    expect(expectedName).toEqual(actualName);
    expect(expectedid).toEqual(actualid);
    expect(expectedEmail).toEqual(actualEmail);
    expect(expectedSchool).toEqual(actualSchool);
  });

  describe("card", () => {
    it("Should return a string", () => {
      const example = new Intern('Bob', 1, 'bob@email.com', 'UC Berkeley');
      const cardReturnType = typeof(example.card());

      expect(cardReturnType).toBe('string');
    });
  });
});