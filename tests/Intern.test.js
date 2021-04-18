// Tests for class Intern
const Intern = require('../lib/Intern');

// Globally define the example
const example = new Intern('Bob', 1, 'bob@email.com', 'UC Berkeley');
const expectedName = 'Bob';
const expectedid = 1;
const expectedEmail = 'bob@email.com';
const expectedSchool = 'UC Berkeley';

describe("Intern class", () => {
  it("Should contain all of the necessary parameter values.", () => {

    const actualName = example.name;
    const actualid = example.id;
    const actualEmail = example.email;
    const actualSchool = example.school;

    expect(expectedName).toEqual(actualName);
    expect(expectedid).toEqual(actualid);
    expect(expectedEmail).toEqual(actualEmail);
    expect(expectedSchool).toEqual(actualSchool);
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

    it("getSchool should return the school", () => {
      expect(example.getSchool()).toEqual(expectedSchool);
    });

    it("getRole should be 'Intern'", () => {
      expect(example.getRole()).toEqual('Intern');
    });
  });

  describe("card", () => {
    it("Should return a string", () => {

      const cardReturnType = typeof(example.card());

      expect(cardReturnType).toBe('string');
    });
  });
});