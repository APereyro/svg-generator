const { Circle } = require("../lib/shapes");
const { Triangle } = require("../lib/shapes");
const { Square } = require("../lib/shapes");

describe("Circle", () => {
  test("render should return SVG code for a circle", () => {
    const circle = new Circle();
    const svgCode = circle.render();
    expect(svgCode).toEqual(
      '<circle cx="150" cy="100" r="80" fill="undefined" />'
    );
  });
});

describe("Triangle", () => {
  test("render should return SVG code for a triangle", () => {
    const triangle = new Triangle();
    const svgCode = triangle.render();
    expect(svgCode).toEqual(
      '<polygon points="150, 18 244, 182 56, 182" fill="undefined" />'
    );
  });
});

describe("Square", () => {
  test("render should return SVG code for a square", () => {
    const square = new Square();
    const svgCode = square.render();
    expect(svgCode).toEqual(
      '<rect x="90" y="40" width="120" height="120" fill="undefined" />'
    );
  });
});
