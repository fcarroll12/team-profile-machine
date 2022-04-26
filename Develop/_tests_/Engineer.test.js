const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    it("Can set GitHub account via constructor", () => {
      const gitHubAccount = "fcarroll12";
      const engineer = new Engineer("Fiona", 100, "fiona.carroll@me.com", gitHubAccount);
      expect(engineer.github).toBe(gitHubAccount);
    });

    it('getRole() should return "Engineer"', () => {
      const testValue = "Engineer";
      const engineer = new Engineer("Fiona", 100, "fiona.carroll@me.com", "fcarroll12");
      expect(engineer.getRole()).toBe(testValue);
    });

    it("Can get GitHub username via getGithub()", () => {
      const testValue = "fcarroll12";
      const engineer = new Engineer("Fiona", 100, "fiona.carroll@me.com", testValue);
      expect(engineer.getGithub()).toBe(testValue);
    });
});