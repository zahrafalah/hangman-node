
var letter = function(value) {
    this.value = value;
    this.guessed = false;
	if (this.value == ' ') 
        this.guessed = true;
        
    letter.prototype.printInfo = function() {
        if (this.guessed) {
            return this.value;
        }
        return "_ ";
    }
}

exports.letter = letter;

//Test
// myLetter = new letter('a');
// console.log(myLetter);
// console.log(myLetter.value);
    