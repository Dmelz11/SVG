const {Shape, Circle, Triangle, Square} = require("./shapes");

//tests for rendering of circle shape, text, textColor and shapeColor
describe("Circle", () => {
  test("renders correctly", () => {
    const shape = new Circle();
    var color = "blue";
    shape.setShapeColor(color);
    expect(shape.render()).toEqual(`<circle cx="60" cy="75" r="60" fill="blue"/>`); 
   })
  });
 test ("setText correctly", ()=>{
  const shape = new Circle ();
  var text = "ABC";
  shape.setText(text);
  expect(shape.text).toEqual("ABC")
 });
 test ("setTextColor correctly", ()=>{
  const shape = new Circle ();
  var textColor = "red";
  shape.setTextColor(textColor);
  expect(shape.textColor).toEqual("red")
 });
 test ("setShapeColor correctly", ()=>{
  const shape = new Circle ();
  var shapeColor = "blue";
  shape.setShapeColor(shapeColor);
  expect (shape.shapeColor).toEqual("blue")
 });
 //tests for rendering of triangle shape, text, textColor and shapeColor
describe("Triangle", () =>{
  test("renders correctly", () => {
    const shape = new Triangle();
    var color = "green";
    shape.setShapeColor(color);
    expect(shape.render()).toEqual(`<polygon points="75 0, 150 100, 0 100" fill="green"/>`);
   })
  });
test ("setText correctly", ()=>{
  const shape = new Triangle ();
  var text = "ABC";
  shape.setText(text);
  expect(shape.text).toEqual("ABC");
 });
 test ("setTextColor correctly", ()=>{
  const shape = new Triangle ();
  var textColor = "yellow";
  shape.setTextColor(textColor);
  expect(shape.textColor).toEqual("yellow")
 });
 test ("setShapeColor correctly", ()=>{
  const shape = new Circle ();
  var shapeColor = "green";
  shape.setShapeColor(shapeColor);
  expect (shape.shapeColor).toEqual("green")
 });
 //tests for rendering of square shape, text, textColor and shapeColor
  describe("Square", () => {
    test("renders correctly", () => {
      const shape = new Square();
      var color = "red";
      shape.setShapeColor(color);
      expect(shape.render()).toEqual(`<rect x="10" y="10" width="100" height="100" fill="red"/>`);
     })
    });
  test ("setText correctly", ()=>{
    const shape = new Square ();
    var text = "ABC";
    shape.setText(text);
    expect(shape.text).toEqual("ABC")
   });
   test ("setTextColor correctly", ()=>{
    const shape = new Triangle ();
    var textColor = "yellow";
    shape.setTextColor(textColor);
    expect(shape.textColor).toEqual("yellow")
   });
   test ("setShapeColor correctly", ()=>{
    const shape = new Circle ();
    var shapeColor = "red";
    shape.setShapeColor(shapeColor);
    expect (shape.shapeColor).toEqual("red")
   });
