function character(hp, attack, counterAttack){
	this.healthPoints = hp;
	this.attackPower = attack;
	this.baseAttackPower = attack;
	this.counterAttackPower = counterAttack;
	this.attack = function(opponent){
		opponent.healthPoints -= this.attackPower; console.log("Opponent HP: " + opponent.healthPoints);
		this.attackPower += this.baseAttackPower; console.log("Your attack power: " + this.attackPower);
		if(opponent.healthPoints >0){
			//TODO oppenent attacks player
			this.healthPoints -= opponent.counterAttackPower; console.log("your hp: " + this.healthPoints);
			if(this.healthPoints <= 0){
				gameOver(); console.log("game-over. your HP is <= 0");
			}
		}
		else if(opponent.healthPoints <= 0){
			//TODO remove opponent. Enable opponent selection.
			console.log("opponent defeated.")
		}
	}
}

var character1 = new character(100, 10, 20);
var character2 = new character(120, 8, 12);
var character3 = new character(150, 10, 17);
var character4 = new character(200, 6, 10);

for (var i = 0; i < 6; i++) {
	console.log("-----------------------\nturn " + (i+1) + "\n-----------------------"); 
	character1.attack(character3);
}

function gameOver(){
	/*TODO program the game over function
	-notify player of loss.
	-enable a reset button.
	-disable the attack button.
	*/
}