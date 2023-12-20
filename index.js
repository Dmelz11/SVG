const fs = require("fs");
const inquirer = require("inquirer");
const {Shapes, Circle, Triangle, Square} = require("./lib/shapes");


const questions = [
    

    {
        type: "input",
        message: "Please enter your choice of text,up to three characters in length.",
        name: "text",
    },
    {
        type: "input",
        message: "Please choose your text color,(enter either a color keyword or hexadecimal number",
        name: "text-color",
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
        name: "shape-color",
    },
];
inquirer.prompt(questions).then((answers)=> {
    const {shape, shapeColor, text, textColor} = answers;
    const logoObj = new Shapes ();
    let svgElement = "";

    logoObj.setShapeColor(shapeColor);

    switch(shape){

        case "Circle":
            const circle = new Circle();
            logoObj.setShapeColor(shapeColor);
            svgElement = circle.render();
            break;
        case "Triangle":
            const triangle = new Triangle ();
            logoObj.setShapeColor(shapeColor);
            svgElement = triangle.render ();
            break;
        case "Square":
            const square = new Square ();
            logoObj.setShapeColor(shapeColor);
            svgElemenet = square.render ();        
    }
    let x = 150, y = 120;
    if (shape === "Triangle"){
        y = 135;
    } else if (shape === "Square"){
        y = 145;
    }
    const finalSvg =`<svg mlns = "http://www.w3.org/2000/svg" width = "300" height = "200">
    ${svgElement}<text x = "${x}" y = "${y}" fill = "${textColor}"
    font-size = "50" text-anchor = "middle">${text}</text></svg>`;

    fs.writeFileSync("logo.svg", finalSvg);

    console.log('Generated logo.svg');
});