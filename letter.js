
var letter = function() {
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