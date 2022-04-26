// Require empoyee from lib foler
const Employee = require('../lib/Employee');

test("Employee should be a new object", () => {
    const e = new Employee();
    expect(typeof(e)).toBe("object");
});

test("Name should equal user input", () => {
    const name = "Mike";
    const e = new Employee(name);
    expect(e.name).toBe(name);
});

test("ID should equal user input", () => {
    const ID = 777;
    const e = new Employee("Mike", ID);
    expect(e.id).toBe(ID);
});

test("Email should equal user input", () => {
    const email = "mikesands94@gmail.com";
    const e = new Employee("Mike", 777, email);
    expect(e.email).toBe(email);
});

test("getName() should match user input for name", () => {
    const getName = "Mike";
    const e = new Employee(getName);
    expect(e.getName()).toBe(getName);
});

test("getId() should match user input for id", () => {
    const id = 77;
    const e = new Employee("Mike", id);
    expect(e.getId()).toBe(id);
});

test("getEmail() should match user input for email", () => {
    const email = "mikesands94@gmail.com";
    const e = new Employee("Mike", 77, email);
    expect(e.getEmail()).toBe(email);
});

test("getRole() should return \"Employee\"", () => {
    const result = "Employee";
    const e = new Employee("Mike", 77, "mikesands94@gmail.com");
    expect(e.getRole()).toBe(result);
});
