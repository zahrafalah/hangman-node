var wordCons = require("./word.js");
var letterCons = require("./letter.js");
var inquirer = require("inquirer");

var wordsToGuess = ["Guess", "Random", "Yellow", "Infusion", "Piano", "Awe", "Javascript", "Readme", "Index", "Mysql", "package"];
var randoIndex = Math.floor(Math.random() * wordsToGuess.length);
var randoWord = wordsToGuess[randoIndex];



var letterGuessed;


var myWord = new wordCons.wordCons(randoWord);
var maxGuesses = 10;




