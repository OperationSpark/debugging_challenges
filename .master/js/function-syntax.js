/* 
This file is full of Syntax Errors, fix all syntax errors before
attempting to fix the Logical Errors
*/

// Fix Me 1:

function isEven(num) {
    if (num % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
}
var even = isEven(3);
console.log(even);

// Fix Me 2:

function decimalToPercent(num) {
    return num * 100 + "%";
}
var percent = decimalToPercent(.29);
console.log(percent);

// Fix Me 3:

function dieGame(roll) {
    if (roll === 1) { console.log("Player 1 wins!"); }
    else if (roll === 2) { console.log("Player 2 wins!"); }
    else if (roll === 3) { console.log("Player 3 wins!"); }
    else { console.log("Everyone loses!") }
}
var result = dieGame(Math.ceil(Math.random() * 6));
console.log(result);

// Fix Me 4:

function getEmoticon(mood) {
    if (mood === "happy") {
        return ":)";
    }
    else if (mood === "sad") {
        return ":(";
    }
    else {
        return "?";
    }
}
var emoticon = getEmoticon("happy");
console.log(emoticon);

// Fix Me 5:

function subtract(x, y) {
    return x - y;
}
var difference = subtract(2 - 3);
console.log(difference);

// Fix Me 6:

function whoIsTaller(height1, height2) {
    if (height1 > height2) {
        return "Person 1 is taller.";
    }
    else {
        return "Person 2 is taller";
    }
}
var taller = whoIsTaller(62, 61.5);
console.log(taller);

// Fix Me 7:

function checkPassword(password) {
    if (password === "lol") {
        return true;
    }
    else if (password !== "lol") {
        return false;
    }
}
var allowAccess = checkPassword('lol');
console.log(allowAccess);
