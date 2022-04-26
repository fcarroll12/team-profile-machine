const Manager = require("../lib/Manager");

test("Can set office number via constructor argument", () => {
  const office = 105;
  const employee = new Manager("Fiona", 100, "fiona.carroll@me.com", office);
  expect(employee.officeNumber).toBe(office);
});

test('getRole() should return "Manager"', () => {
  const managerReturn = "Manager";
  const employee = new Manager("Fiona", 100, "fiona.carroll@me.com", 105);
  expect(employee.getRole()).toBe(managerReturn);
});

test("Can get office number via getOffice()", () => {
  const testOffice = 105;
  const employee = new Manager("Fiona", 100, "fiona.carroll@me.com", testOffice);
  expect(employee.getOfficeNumber()).toBe(testOffice);
});