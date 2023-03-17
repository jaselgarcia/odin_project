const btn = document.querySelector("button");
const select = document.querySelector("select");
let computerChoice;
let userChoice;
let cpuPoints = 0;
let userPoints = 0;
let game = 0;


btn.addEventListener ("click", () => {
    game = 1;
    userPoints = 0;
    cpuPoints = 0;
    });
select.addEventListener("change", round);

function round() {
    userChoice = select.value;
    getComputerChoice()
    console.log(rps(userChoice, computerChoice))
    if (game == 1){
            if (userPoints >=3 || cpuPoints >=3){
                game = 0;
                (userPoints > cpuPoints) 
                ? console.log("Congrats! You've defeated the computer.") 
                : console.log("Drat! The computer has bested you!");
                console.log(`Computer pts: ${cpuPoints} Player pts: ${userPoints}`);
            } else if (userPoints < 3 || cpuPoints < 3){
                console.log(`Computer pts: ${cpuPoints} | Player pts: ${userPoints}`)
            }
        }
    select.value = "";
}

function rps(user, cpu) {

    console.log(`Computer choice: ${capitalize(computerChoice)} | Player choice: ${capitalize(userChoice)}`)

    if (user === cpu) {
        return "Draw!"
    }
    let rules = {rock: 'scissors', paper: 'scissors', scissors: 'rock'};

    if (cpu === rules[user]){
        userPoints += 1;
        return `Seems like you bested me this time! ${capitalize(user)} beats ${lowerCase(cpu)}.`
    } else {
        cpuPoints += 1;
        return `Alas, victory is mine! ${capitalize(cpu)} beats ${lowerCase(user)}.`
    }
}

function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1);
}

function lowerCase(str) {
    return str[0].toLowerCase() + str.slice(1);
}

function getComputerChoice() {
    let rps = ['rock', 'paper', 'scissors'];
    computerChoice = rps[Math.floor(Math.random() * rps.length)];
}