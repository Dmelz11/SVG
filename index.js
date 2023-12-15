const fs = require("fs");

const inquirer = require("inquirer");

const {Circle, Triangle, Square} = require("./lib/shapes");


    inquirer
    .prompt ([

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
        choices: [Circle, Triangle, Square],
        name: "shape",
    },
    {
        type: "input",
        message: "Please choose a color for your shape,(enter either a color keyword or a hexadecimal nunber",
        name: "shape-color",
    },
])

class svg{
    constructor(){
    this.textElement = ""
    this.shapeElement = ""
}
render() {
    return `<svg version = "1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200"`
}
setTextElement (text, color) {
    this.textElement =`<text x="150" y="125" font-size="60" text-anchor="middle" fill="100%"`
}
setShapeElement (shape){
    this.shapeElement = shape.render()
}
};