// created shape class
class Shapes {
  constructor(shapeColor, text, textColor) {
    this.shapeColor = "";
    this.text = "";
    this.textColor = "";
  }
  setShapeColor(shapeColor) {
    this.shapeColor = shapeColor;
  }
  setText(text) {
    this.text = text;
  }
  setTextColor(textColor) {
    this.textColor = textColor;
  }
}
//created subclasses
class Circle extends Shapes {
  render() {
    return `<circle cx="60" cy="75" r="60" fill="${this.shapeColor}"/>`;
  }
}
class Triangle extends Shapes {
  render() {
    return `<polygon points="75 0, 150 100, 0 100" fill="${this.shapeColor}"/>`;
  }
}
class Square extends Shapes {
  render() {
    return `<rect x="10" y="10" width="100" height="100" fill="${this.shapeColor}"/>`;
  }
}
module.exports = {Shapes, Circle, Triangle, Square };
