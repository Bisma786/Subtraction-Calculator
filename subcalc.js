import inquirer from "inquirer";
const input1 = await inquirer.prompt({
    name: "val1",
    type: "number",
    message: "Enter your fist number",
});
const input2 = await inquirer.prompt({
    name: "val2",
    type: "number",
    message: "Enter your 2nd value"
});
let total = input1.val1 - input2.val2;
console.log(total);
