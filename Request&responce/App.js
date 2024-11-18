const fs = require("fs");

let a = 20;
let b = 30;

const sum = (a, b) => {
  return a + b;
}

fs.writeFile("./output.txt", `The sum of ${a} and ${b} is ${sum(a, b)}`, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("File Written Successfully");
  }
});