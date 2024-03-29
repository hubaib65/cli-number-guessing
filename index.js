#! /usr/bin/env node
import inquirer from "inquirer";
//1.generate random number
//2.user input for guessing number
//3.check if guess is right or wrong
//const random_number = 13;
const random_number = Math.floor(Math.random() * 10) + 1;
console.log("welcome to number guessing game");

const answers = await inquirer.prompt([
    {
        name: "user guessed number",
        type: "number",
        message: "Guess the number b/t 1 to 10: ",
    },
]);
if (answers["user guessed number"] === random_number) {
    console.log("you guessed right");
}
else {
    console.log("you guessed wrong");
}
