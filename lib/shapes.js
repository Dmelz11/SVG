class Shapes {
    constructor(text, textColor, shapeColor) {
      this.text = "";
      this.textColor = "";
      this.shapeColor = "";
    }
  
    setText(text) {
     this.text = text;
    }
  
  setTextColor(textColor) {
    this.textColor = textColor;
   }
 setShapeColor(shapeColor) {
    this.shapeColor = shapeColor;
   }
}
   class Circle extends Shapes {
    render() {
      return `<circle cx="25" cy="75" r="20" fill="${this.shapeColor}"/>`;
    }
   }
   class Triangle extends Shapes {
    render() {
      return `<polygon points="50, 160 55, 180 70, 180 60, 190 65, 205 50, 195 35, 205 40, 190 30, 180 45, 180"fill="${this.shapeColor}"/>`;
    }
   }
   class Square extends Shapes {
    render() {
      return `<rect x="10" y="10" width="30" height="30" fill="${this.shapeColor}"/>`;
    }
   }
  
  module.exports = {Circle, Triangle, Square};
  