const inquirer = require('inquirer');
const fs = require('fs');

const questions = [
    {
        type: 'input',
        message: 'What is your SVG Logo text?',
        name: 'text',
    },
    {
        type: 'input',
        message: 'What is your SVG Logo text color?',
        name: 'textcolor',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Choose a SVG Logo shape:',
        choices: [
            'circle',
            'triangle',
            'square',
        ],
    },
    {
        type: 'input',
        message: 'What is your SVG Logo shape color?',
        name: 'shapecolor',
    },
];

const Circle = require('./lib/circle.js');
const Triangle = require('./lib/triangle.js');
const Square = require('./lib/square.js');

let writeFile = function (path, html) {
    fs.writeFile(path, html, (err) =>
        err ? console.error(err) : console.log('Success!')
    );
}

let renderSVG = function (shape, text) {
    return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
<g>
${shape}
${text}
</g>
</svg>`;
}

let renderText = function (data) {
    return `<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="Verdana" font-size="35" fill="${data.textcolor}">${data.text}</text>`;
}

function init() {
    let prompt = inquirer.createPromptModule();
    prompt(questions)
        .then((response) => {
            console.log(response);
            let shape;
            switch (response.shape) {
                case 'circle':
                    shape = new Circle();
                    console.log('circle');
                    break;
                case 'triangle':
                    shape = new Triangle();
                    break;
                case 'square':
                    shape = new Square();
                    break;
                default:
                    console.log('incorrect shape value');
                    break;
            }
            shape.setColor(response.shapecolor);
            shape.setTextColor(response.textcolor);
            let html = renderSVG(shape.render(), renderText(response));
            writeFile('./examples/logo.svg', html);
            console.log('Generated logo.svg');
        }
        );
}

init();
