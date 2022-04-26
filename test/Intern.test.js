// Require intern from lib folder 
const Intern = require('../lib/Intern');

test("School should match user input", () => {
    const school = "FSU";
    const e = new Intern("Mike", 77, "mikesands94@gmail.com", school);
    expect(e.school).toBe(school);
});

test("getSchool() returns school input", () => {
    const school = "FSU";
    const e = new Intern("Mike", 77, "mikesands94@gmail.com", school);
    expect(e.getSchool()).toBe(school);
});

test("getRole() returns \"Intern\"", () => {
    const role = "Intern";
    const e = new Intern("Mike", 77, "mikesands94@gmail.com", "FSU");
    expect(e.getRole()).toBe(role);
});
