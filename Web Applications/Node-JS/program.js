var dice = require("./dice");

var die = dice.game;

die.size = 10;
console.log(die.roll());
console.log(die.roll());
console.log(die.roll());

console.log("Total rolls " + die.totalRolls);