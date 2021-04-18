// Tests for class Engineer
const Engineer = require('../lib/Engineer');

// Globally define the example
const example = new Engineer('Bob', 1, 'bob@email.com', 'ProgrammerBob');
const expectedName = 'Bob';
const expectedid = 1;
const expectedEmail = 'bob@email.com';
const expectedGithub = 'ProgrammerBob';

describe("Engineer class", () => {
  it("Should contain all of the necessary parameter values.", () => {

    const actualName = example.name;
    const actualid = example.id;
    const actualEmail = example.email;
    const actualGithub = example.github;

    expect(expectedName).toEqual(actualName);
    expect(expectedid).toEqual(actualid);
    expect(expectedEmail).toEqual(actualEmail);
    expect(expectedGithub).toEqual(actualGithub);
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

    it("getGithub should return the github", () => {
      expect(example.getGithub()).toEqual(expectedGithub);
    });

    it("getRole should be 'Engineer'", () => {
      expect(example.getRole()).toEqual('Engineer');
    });
  });

  describe("card", () => {
    it("Should return a string", () => {

      const cardReturnType = typeof(example.card());

      expect(cardReturnType).toBe('string');
    });
  });
});