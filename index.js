#! /usr/bin/env node
import inquirer from "inquirer";
console.log("Welcome to number guessing game");
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answer = await inquirer.prompt([
    {
        message: "please guess a number 1 to 6: ", type: "number", name: "userGuessedNumber"
    }
]);
if (answer.userGuessedNumber === randomNumber) {
    console.log("congtratutlation! You guessed a right number");
}
else {
    console.log("You guesssed a wrong number");
}
