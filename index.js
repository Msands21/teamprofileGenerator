// Node packages
const inquirer = require ('inquirer');
const fs = require ('fs');
const generateStaff = require ('./src/template-helper')

// Lib classes
const Engineer = require ('./lib/Engineer');
const Intern = require ('./lib/Intern');
const Manager = require ('./lib/Manager');

// Array for answers
const newStaffInfo = [];

// Questions to be asked in command line to user
const questions = async () => {
    const answers = await inquirer
        .prompt ([
            {
            type: 'input',
            message: 'What is your name?', 
            name: 'name',
            },
            {
            type: 'input',
            message: 'What is your ID number?', 
            name: 'id',
            },
            {
            type: 'input',
            message: 'What is your email address?', 
            name: 'email',
            },
            {
            type: 'list',
            message: 'What is your role?', 
            name: 'role',
            choices: ['Manager', 'Engineer', 'Intern'],
            },
        ])


// If manager, answer this question
    if (answers.role === 'Manager') {
        const managerRole = await inquirer
            .prompt([
            {
                type:'input',
                message: 'What is your office number?',
                name: 'officeNumber',
            },
            ])
            const newManager = new Manager (
                answers.name,
                answers.id,
                answers.email,
                managerRole.officeNumber
            );
            newStaffInfo.push(newManager);

// If engineer, answer this question
    } else if (answers.role === 'Engineer'){
        const engineerRole = await inquirer
            .prompt ([
                {
                    type: 'input',
                    message: 'What is your GitHub username?',
                    name: 'github',
                }
            ])
            const newEngineer = new Engineer(
                answers.name,
                answers.id,
                answers.email,
                engineerRole.github
            );
            newStaffInfo.push(newEngineer);
    

// If intern, answer this question
    } else if (answers.role === 'Intern') {
        const internRole = await inquirer
            .prompt ([
                {
                    type: 'input',
                    message: 'What school did you attend?',
                    name: 'school',
                },
            ])
            const newIntern = new Intern(
                answers.name,
                answers.id,
                answers.email,
                internRole.school
            );
            newStaffInfo.push(newIntern);
    }
};