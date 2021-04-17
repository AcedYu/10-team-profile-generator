// Tests for class Engineer
const Engineer = require('../lib/Engineer');

describe("Engineer class", () => {
  it("Should contain all of the necessary parameter values.", () => {
    const example = new Engineer('Bob', 1, 'bob@email.com', 'ProgrammerBob');

    const expectedName = 'Bob';
    const actualName = example.name;

    const expectedid = 1;
    const actualid = example.id;

    const expectedEmail = 'bob@email.com';
    const actualEmail = example.email;

    const expectedGithub = 'ProgrammerBob';
    const actualGithub = example.github;

    expect(expectedName).toEqual(actualName);
    expect(expectedid).toEqual(actualid);
    expect(expectedEmail).toEqual(actualEmail);
    expect(expectedGithub).toEqual(actualGithub);
  });

  describe("card", () => {
    it("Should return a string", () => {
      const example = new Engineer('Bob', 1, 'bob@email.com', 'ProgrammerBob');
      const cardReturnType = typeof(example.card());

      expect(cardReturnType).toBe('string');
    });
  });
});