const Intern = require("../lib/Intern");

test("Can set school via constructor", () => {
  const schoolTest = "UCLA";
  const employee = new Intern("Fiona", 100, "fiona.carroll@me.com", schoolTest);
  expect(employee.school).toBe(schoolTest);
});

test('getRole() should return "Intern"', () => {
  const testReturn = "Intern";
  const employee = new Intern("Fiona", 100, "fiona.carroll@me.com", "UCLA");
  expect(employee.getRole()).toBe(testReturn);
});

test("Can get school via getSchool()", () => {
  const schoolTest = "UCLA";
  const employee = new Intern("Fiona", 100, "fiona.carroll@me.com", schoolTest);
  expect(employee.getSchool()).toBe(schoolTest);
});