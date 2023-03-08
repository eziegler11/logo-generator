// Required dependencies
const inquirer = require('./node_modules/inquirer');
const fs = require('fs');
const { Triangle, Square, Circle } = require('./lib/shapes')

// Array of prompts to generate logo
const questions = [
	{
		type: 'input',
		message: 'What letters do you want in your logo?',
		name: 'text',
        // function to limit input to 3 characters
        validate: function (input) {
            const done = this.async();
            if (input.length === 3) {
                done(null, true);
                return true;
            } else {
                done('Must have 3 characters');
                return false
            };
        }
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

// Initializes the app when run in the command line
function init() {
	inquirer.prompt(questions).then((response) => {
        function getShapeHTML(){
            let shape;
            switch (response.shape) {
                case "circle":
                    shape = new Circle(response.shapeColor);
                    break;
                case "triangle":
                    shape = new Triangle(response.shapeColor);
                    break;
                case "square":
                    shape = new Square(response.shapeColor);
                    break;
            } // Switch Ends
            const html = shape.render();
            return html;
        } // getShapeHTML ends
		const logo = `<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
   
     ${getShapeHTML ()}
   
     <text x="150" y="145" font-size="50" text-anchor="middle" fill="${response.textColor}">${response.text}</text>
   
   </svg>`;

		writeToFile('logo.svg', logo);
	});
}

// Function call to initialize app
init();

