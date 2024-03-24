import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "Enter your first number", type: "number", name: "firstNumber" },
  { message: "Enter your second number", type: "number", name: "secondNumber" },
  {
    message: "select one of operator to perform action ",
    type: "list",
    name: "operator",
    choices: ["ADDITIION", "SUBTRACTION", "MULTIPLICATION", "DIVISION"],
  },
]);
//CONDITIONAL STATEMENT
if (answer.operator === "addition")
{console.log(answer.fristnumber + answer.secondnumber);}
else if (answer.operator === "subtraction")
{console.log(answer.fristnumber - answer.secondnumber);}
else if (answer.operator === "multiplication")
{console.log(answer.fristnumber * answer.secondnumber);}
else if (answer.operator === "division")
{console.log(answer.fristnumber / answer.secondnumber);}
else {console.log("please select valid operator")}