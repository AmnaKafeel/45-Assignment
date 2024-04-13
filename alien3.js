"use strict";
//Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
let alien_color = "green";
//• If the alien is green, print a message that the player earned 5 points.
//version #1 of the program
if (alien_color === "green") {
    console.log("version 1: Player Earned 5 Points.");
}
else if (alien_color === "Red") {
    console.log("{player earned 15 points.");
}
else if (alien_color === "Yellow") {
    console.log("Player Earned 10 Points.");
}
else {
    console.log("Please Select Right Color.");
}
//Version # 2 of the program
alien_color = "Yellow";
if (alien_color === "green") {
    console.log("Player Earned 5 Points.");
}
else if (alien_color === "Red") {
    console.log("{player earned 15 points.");
}
else if (alien_color === "Yellow") {
    console.log("version 2 : Player Earned 10 Points.");
}
else {
    console.log("Please Select Right Color.");
}
//Version #3 of the Program
alien_color = "Red";
if (alien_color === "green") {
    console.log("Player Earned 5 Points.");
}
else if (alien_color === "Red") {
    console.log("Version 3: player earned 15 points.");
}
else if (alien_color === "Yellow") {
    console.log("Player Earned 10 Points.");
}
else {
    console.log("Please Select Right Color.");
}
