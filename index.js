#! /usr/bin/env node
import inquirer from "inquirer";
let todo = [];
let condition = true;
while (condition) {
    let addTask = await inquirer.prompt([
        {
            name: "toDo",
            type: "input",
            message: "what you want do do today:"
        },
        {
            name: "addMore",
            type: "confirm",
            message: "DO you want to add more?",
            default: false
        }
    ]);
    todo.push(addTask.toDo);
    condition = addTask.addMore;
}
;
console.log(todo);
