// Require Manager from lib folder
const Manager = require ('../lib/Manager');

test("Office number should match user input", () => {
    const officeNumber = 123;
    const e = new Manager("Mike", 1, "mikesands94@gmail.com", officeNumber);
    expect(e.officeNumber).toBe(officeNumber);
});

test("getofficeNumber() should match office number input", () => {
    const officeNumber = 777;
    const e = new Manager("Mike", 77, "mikesands94@gmail.com", officeNumber);
    expect(e.getofficeNumber()).toBe(officeNumber);
});

test("getRole() returns \"Manager\"", () => {
    const role = "Manager";
    const e = new Manager("Mike", 77, "mikesands94@gmail.com", 777);
    expect(e.getRole()).toBe(role);
});
