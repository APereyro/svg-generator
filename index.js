const inquirer = require("inquirer");
const fs = require("fs");
const { Circle, Triangle, Square } = require("./lib/shapes");

inquirer
  .prompt([
    {
      type: "input",
      name: "text",
      message: "Enter the text for the logo (up to 3 characters):",
      validate: function (input) {
        if (input.length <= 3) {
          return true;
        } else {
          return "Please enter up to 3 characters";
        }
      },
    },
    {
      type: "input",
      name: "textColor",
      message: "Enter the text color (keyword or hexadecimal value):",
    },
    {
      name: "shape",
      message: "Choose a shape for the logo:",
      type: "list",
      choices: ["circle", "triangle", "square"],
    },
    {
      type: "input",
      name: "shapeColor",
      message: "Enter the shape color (keyword or hexadecimal value):",
    },
  ])
  .then(function (answers) {
    let svg;

    switch (answers.shape) {
      case "circle":
        svg = new Circle();
        break;

      case "square":
        svg = new Square();
        break;

      case "triangle":
        svg = new Triangle();
        break;
    }
    svg.setColor(answers.shapeColor);

    const text = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${svg.render()}<text x="50%" y="60%" font-size="60" text-anchor="middle" fill="${
      answers.textColor
    }">${answers.text}</text></svg>`;

    fs.writeFile(`./Assets/logo.svg`, text, function (err) {
      if (err) throw err;
      console.log("Generated logo.svg");
    });
  });


  


