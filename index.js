// Required dependencies
const inquirer = require('./node_modules/inquirer');
const fs = require('fs');

// Array of prompts to generate logo
const questions = [
	{
		type: 'input',
		message: 'What is the title of your project?',
		name: 'title',
	},
	{
		type: 'input',
		message: 'What is your project about?',
		name: 'description',
	},
	{
		type: 'input',
		message: 'How does a user install your code?',
		name: 'installation',
	},
	{
		type: 'input',
		message: 'How does a user run your code?',
		name: 'usage',
	},
	{
		type: 'input',
		message: 'How can a user contribute to your code?',
		name: 'contribute',
	},
	{
		type: 'input',
		message: 'How can a user test your code?',
		name: 'test',
	},
	{
		type: 'list',
		message: 'Which license do you want to use?',
		name: 'license',
		choices: ['MIT', 'GNU', 'CC0', 'BSD'],
	},
	{
		type: 'input',
		message: 'What is your GitHub username?',
		name: 'github',
	},
	{
		type: 'input',
		message: 'What is your email address?',
		name: 'email',
	},
];