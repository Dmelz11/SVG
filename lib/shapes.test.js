const { Shape, Circle, Triangle, Square } = require("./shapes");

describe("Circle", () => {
  test("renders correctly", () => {
    const shape = new Circle();
    var color = "blue";
    shape.setShapeColor(color);
    expect(shape.render()).toEqual(
      `<circle cx="25" cy="75" r="20" fill="blue"/>`,
    );
  });
  test("setText correctly", () => {
    const shape = new Circle();
    var text = "ABC";
    shape.setText(text);
    expect(shape.text).toEqual("ABC");
  });
  test("setTextColor correctly", () => {
    const shape = new Circle();
    var textColor = "yellow";
    shape.setTextColor(textColor);
    expect(shape.textColor).toEqual("yellow");
  });
  test("setShapeColor correctly", () => {
    const shape = new Circle();
    var color = "blue";
    shape.setShapeColor(color);
    expect(shape.shapeColor).toEqual("blue");
  });
});
describe("Triangle", () => {
  test("renders correctly", () => {
    const shape = new Triangle();
    var color = "green";
    shape.setShapeColor(color);
    expect(shape.render()).toEqual(
      `<polygon points="50, 160 55, 180 70, 180 60, 190 65, 205 50, 195 35, 205 40, 190 30, 180 45, 180"fill="green"/>`,
    );
  });
  test("setText correctly", () => {
    const shape = new Triangle();
    var text = "ABC";
    shape.setText(text);
    expect(shape.text).toEqual("ABC");
  });
  test("setTextColor correctly", () => {
    const shape = new Triangle();
    var color = "blue";
    shape.setTextColor(color);
    expect(shape.textColor).toEqual("blue");
  });
  test("setShapeColor correctly", () => {
    const shape = new Triangle();
    var color = "green";
    shape.setShapeColor(color);
    expect(shape.shapeColor).toEqual("green");
  });
  describe("Square", () => {
    test("renders correctly", () => {
      const shape = new Square();
      var color = "red";
      shape.setShapeColor(color);
      expect(shape.render()).toEqual(
        `<rect x="10" y="10" width="30" height="30" fill="red"/>`,
      );
    });
    test("setText correctly", () => {
      const shape = new Square();
      var text = "ABC";
      shape.setText(text);
      expect(shape.text).toEqual("ABC");
    });
    test("setTextColor correctly", () => {
      const shape = new Triangle();
      var color = "yellow";
      shape.setTextColor(color);
      expect(shape.textColor).toEqual("yellow");
    });
    test("setShapeColor correctly", () => {
      const shape = new Square();
      var color = "red";
      shape.setShapeColor(color);
      expect(shape.shapeColor).toEqual("red");
    });
  });
});
