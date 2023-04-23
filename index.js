const inquirer = require("inquirer");
const fs = require("fs");
const { error } = require("console");


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
        svg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="150" cy="100" r="80" fill="${answers.shapeColor}" />
                  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${answers.textColor}">${answers.text}</text>
              </svg>`;
        break;

      case "square":
        svg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                  <rect x="90" y="40" width="120" height="120" fill="${answers.shapeColor}" />
                  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${answers.textColor}">${answers.text}</text>
              </svg>`;
        break;

      case "triangle":
        svg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                  <polygon points="150, 18 244, 182 56, 182" fill="${answers.shapeColor}" />
                  <text x="150" y="150" font-size="60" text-anchor="middle" fill="${answers.textColor}">${answers.text}</text>
              </svg>`;
        break;

      default:
        console.error("Invalid shape choice:", answers.shape);
        return;
    }

    fs.writeFile("./Assets/logo.svg", svg, function (err) {
      if (err) throw err;
      console.log("Generated logo.svg");
      fs.writeFile("./index.html", newHtml, function (err) {
        if (err) throw err;
        console.log("Updated index.html");
      });
    });
  });