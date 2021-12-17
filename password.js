const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let welcome = "Welcome to the password validator tool"
console.log(welcome)

let passQuestion = "Please enter a password to validate "


reader.question(passQuestion, function(answer) {
    if (answer.length === 10 && answer[0] === answer[0].toUpperCase()){
        console.log("You're all set to go!")
    } else{
        console.log("Try again")
    }
    console.log(answer);
    reader.close();
  });
