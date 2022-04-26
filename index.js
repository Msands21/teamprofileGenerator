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
}