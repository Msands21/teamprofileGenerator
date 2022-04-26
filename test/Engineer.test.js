// Require Engineer from lib folder
const Engineer = require ('../lib/Engineer');

test("Github account should match user input", () => {
    const ghuser = "GitHubUser";
    const e = new Engineer("Mike", 77, "mikesands94@gmail.com.", ghuser);
    expect(e.github).toBe(ghuser);
});

test("getGithub() returns github username input", () => {
    const ghuser = "GitHubUser";
    const e = new Engineer("Mike", 77, "mikesands94@gmail.com", ghuser);
    expect(e.getGithub()).toBe(ghuser);
});

test("getRole() returns \"Engineer\"", () => {
    const role = "Engineer";
    const e = new Engineer("Mike", 77, "mikesands94@gmail.com", "ghuser");
    expect(e.getRole()).toBe(role);
});