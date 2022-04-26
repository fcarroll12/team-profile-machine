const Employee = require("../lib/Employee");

test("Can instantiate Employee instance", () => {
  const employee = new Employee();
  expect(typeof(employee)).toBe("object");
});

test("Can set name via constructor arguments", () => {
  const name = "Fiona";
  const employee = new Employee(name);
  expect(employee.name).toBe(name);
});

test("Can set id via constructor argument", () => {
  const id = 100;
  const employee = new Employee("Fiona", id);
  expect(employee.id).toBe(id);
});

test("Can set email via constructor argument", () => {
  const email = "fiona.carroll@me.com";
  const employee = new Employee("Fiona", 100, email);
  expect(employee.email).toBe(email);
});

test("Can get name via getName()", () => {
  const testValue = "Fiona";
  const employee = new Employee(testValue);
  expect(employee.getName()).toBe(testValue);
});

test("Can get id via getId()", () => {
  const idValue = 100;
  const employee = new Employee("Fiona", idValue);
  expect(employee.getId()).toBe(idValue);
});

test("Can get email via getEmail()", () => {
  const emailValue = "fiona.carroll@me.com";
  const employee = new Employee("Fiona", 100, emailValue);
  expect(employee.getEmail()).toBe(emailValue);
});

test('getRole() should return "Employee"', () => {
  const getRoleValue = "Employee";
  const employee = new Employee("Fiona", 100, "fiona.carroll@me.com");
  expect(employee.getRole()).toBe(getRoleValue);
});