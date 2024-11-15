const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addNumbers(a, b) {
  return a + b;
}

rl.question("Enter the first number: ", (firstInput) => {
  rl.question("Enter the second number: ", (secondInput) => {
    const num1 = parseFloat(firstInput);
    const num2 = parseFloat(secondInput);

    const sum = addNumbers(num1, num2);

    fs.writeFile("./output.txt", `The sum of ${num1} and ${num2} is ${sum}`, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("File Written Successfully");
      }
      rl.close();
    });
  });
});