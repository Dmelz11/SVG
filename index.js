const fs = require("fs");
const inquirer = require("inquirer");
const {Shapes, Circle, Triangle, Square} = require("./lib/shapes");
const { log } = require("console");


const questions = [
   //inquirer prompts 

    {
        type: "input",
        message: "Please enter your choice of text,up to three characters in length.",
        name: "text",
    },
    {
        type: "input",
        message: "Please choose your text color,(enter either a color keyword or hexadecimal number",
        name: "textColor",
    },
    {
        type: "list",
        message: "Please choose a shape from the list",
        choices: [ 'Circle', 'Triangle', 'Square' ],
        name: "shape",
    },
    {
        type: "input",
        message: "Please choose a color for your shape,(enter either a color keyword or a hexadecimal number",
        name: "shapeColor",
    },
];
inquirer.prompt(questions).then((answers)=> {
    const {shape, shapeColor, text, textColor} = answers;
    console.log(answers);
    let svgElement;
    let logoObj;


    switch(shape){
        case "Circle":
            // Creating Circle SVG
            logoObj = new Circle();
            break;
        case "Triangle":
            // Creating Triangle SVG
            logoObj = new Triangle();
            break;
            // Creating Square SVG
        case "Square":
            logoObj = new Square();      
    }
    //setting shapeColor, Text and TextColor on logoObj variable
    logoObj.setShapeColor(shapeColor);
    logoObj.setText(text);
    logoObj.setTextColor(textColor);
    svgElement = logoObj.render();
    // aligning svg shapes and text on x and y axis
    let x = 60, y = 90;
    if (shape === "Triangle"){
        x = 75;
    } else if (shape === "Square"){
        y = 80;
    }
    const finalSvg =`<svg mlns = "http://www.w3.org/2000/svg" width = "300" height = "200">
    ${svgElement}<text x = "${x}" y = "${y}" fill = "${textColor}"
    font-size = "50" text-anchor = "middle">${text}</text></svg>`;

    fs.writeFileSync("logo.svg", finalSvg);

    console.log(logoObj);
    console.log(svgElement);
    console.log('Generated logo.svg');
});