var wordCons = require("./word.js");
var letterCons = require("./letter.js");
var inquirer = require("inquirer");

var wordsToGuess = ["Guess", "Random", "Yellow", "Infusion", "Piano", "Awe", "Javascript", "Readme", "Index", "Mysql", "package"];
var randoIndex = Math.floor(Math.random() * wordsToGuess.length);
var randoWord = wordsToGuess[randoIndex];



var letterGuessed;


var myWord = new wordCons.wordCons(randoWord);
var maxGuesses = 10;

function takeAGuess(){

    console.log(myWord.toString());
    
	if (myWord.guessesMade.length >= maxGuesses){
		console.log('You have no more guesses. Game Over!.');
	return; //Game over
    }
    
	inquirer.prompt([{
		name: 'letter',
		type: 'text',
        message: 'Enter a letter:',
        
		validate: function(str){
			var regEx = new RegExp("^[a-zA-Z\s]{1,1}$");
			return regEx.test(str);
                }
                
        }]).then(function(letterInput){ //Game control
            
				var letter = letterInput.letter; 
                myWord.findLetter(letter); //Check
                
					if(myWord.isComplete()){ 
					console.log('Yes! It was ' + myWord.toString() + '!');
					return; 
                    }
                    
				console.log('-------------------\n');
				console.log('You have ' + (maxGuesses - myWord.guessesMade.length) + ' guesses left.')
				takeAGuess(); //Recursive call
				}
  );
}

takeAGuess();


