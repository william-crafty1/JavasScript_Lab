const randomDamage = () => Math.floor((Math.random() * 10) + 1);
const chooseOption = (opt1, opt2) => {
    const randNum = Math.floor((Math.random() * 2)); 
    return (randNum === 0 ? opt1 : opt2);
} 
function attackPlayer(health){
    return health = health - randomDamage();
}

const logHealth = (player, health) => console.log(`${player} has ${health} HP`);
const logDeath = (winner, loser) => console.log(`${winner} has vanquished ${loser}!`);
const isDead = (health) => health <= 0 ? true : false;

function fight(player1, player2, player1Health, player2Health){
    while(true){
        const attacker = chooseOption(player1, player2);
        if(attacker === player1){
            player2Health = attackPlayer(player2Health);
            logHealth(player2, player2Health);
            if(isDead(player2Health)){
                logDeath(player1, player2);
                break;
            }
        }
        else{
            player1Health = attackPlayer(player1Health);
            logHealth(player1, player1Health);
            if(isDead(player1Health)){
                logDeath(player2, player1);
                break;
            }
        }
    }
}

fight("Warrior", "Monster", 100, 100);

console.log("============================================");
console.log("Extended challenges:")

function prntSquare(width){
    let string = "#"
        for(let i = 1; i <= width; i++){
            string += "#";
            if(string.length === width){
                for(let x = 1; x <= width; x++){
                    console.log(string);
                }
            }
        }
}

function prntTriangle(width){
    var string = "#";
    for(let i = 1; i <= width; i++){
        console.log(string);
        string += "#";
    }
}

function getGrades(grade){
    if(grade >= 90){
        let result = "A";
        return result;
    }
    else if(grade < 90 && grade >= 80){
        let result = "B";
        return result;
    }
    else if(grade < 80 && grade >= 70){
        let result = "C";
        return result;
    }
    else if(grade < 70 && grade >= 60){
        let result = "D";
        return result;
    }
    else{
        let result = "F";
        return result;
    }

}

function prioritize(urgent, important){
    let priority;
    if(urgent === true && important === true ){
        priority = 1;
        return priority;
    }
    else if(urgent === false && important === true){
        priority = 2;
        return priority;
    }
    else if(urgent === true && important === false){
        priority = 3;
        return priority;
    }
    else{
        priority = 4;
        return priority;
    }

}

console.log("Shape formation functions:")
const square = prntSquare(5);
const triangle = prntTriangle(10);

console.log("getGrade function:")
const grade1 = getGrades(95);
const grade2 = getGrades(85);
const grade3 = getGrades(75);
const grade4 = getGrades(65);
const grade5 = getGrades(2);
console.log(grade1);
console.log(grade2);
console.log(grade3);
console.log(grade4);
console.log(grade5);

console.log("prioritizing function:")
let priority1 = prioritize(true, true);
console.log(priority1);
let priority2 = prioritize(false, true);
console.log(priority2);
let priority3 = prioritize(true, false);
console.log(priority3);
let priority4 = prioritize(false, false);
console.log(priority4);