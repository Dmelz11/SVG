const inquirer = require('inquirer');
const fs = requirer('fs');
const {Circle, Triangle, Square} = require('./lib/shapes');

class Svg{
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
        choices: [Circle, Triangle, Square],
        name: "shape",
    },
    {
        type: "input",
        message: "Please choose a color for your shape,(enter either a color keyword or a hexadecimal nunber",
        name: "shape-color",
    },
]
function writeToFile (fileName,data){
    const content = generateLogo(data);
    fs.writeFile(fileName,content,function (error) {
        if (error){
            return console.log(error);
        }
        console.log('Generated logo.svg');
    });
    function init(){
        inquirer.createPromptModule(questions).then(function(data){
            const fileName = "logo.svg";
            writeToFile(fileName,data);
        });
        init();
    }
}