const fs = require("fs");

class Triangle {
    constructor() {
      this.color = "";
    }
  
    setColor(color) {
      this.color = color;
    }
  
    render() {
      return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
  }

const triangle = new Triangle();
triangle.setColor("blue");
const expectedOutput = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">' + triangle.render() + '</svg>';
const generatedOutput = fs.readFileSync(`./Assets/logo.svg`, "utf8");
expect(generatedOutput).toEqual(expectedOutput);   