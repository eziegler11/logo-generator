// Required dependencies
const inquirer = require('./node_modules/inquirer');
const fs = require('fs');

// Array of prompts to generate logo
const questions = [
	{
		type: 'input', // needs to be up to only 3 characters max
		message: 'What letters do you want in your logo?',
		name: 'text',
	},
	{
		type: 'input',
		message: 'What color do you want the text to be?',
		name: 'textColor',
	},
	{
		type: 'list',
		message: 'Which shape do you want to use?',
		name: 'shape',
        choices: ['circle', 'triangle', 'square'],
	},
	{
		type: 'input',
		message: 'What color do you want the shape to be?',
		name: 'shapeColor',
	},
];

// Writes the SVG file and displays success, or shows error
function writeToFile(fileName, data) {
	fs.writeFile(fileName, data, (err) =>
		err ? console.error(err) : console.log('Generated logo.svg')
	);
}

// Initializes the app when run in the command line and produces the content of the ReadMe
function init() {
	inquirer.prompt(questions).then((response) => {
		console.log(response);
		const logo = `<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
   
     <circle cx="150" cy="100" r="80" fill="${response.shapeColor}"/>
   
     <text x="150" y="125" font-size="60" text-anchor="middle" fill="${response.textColor}">${response.text}</text>
   
   </svg>`;

		writeToFile('logo.svg', logo);
	});
}

// Function call to initialize app
init();

