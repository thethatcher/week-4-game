//declare global variables
var characterSelectEnabled = true;
var enemySelectEnabled = false;
var attackBtnEnabled = false;
var resetBtnEnabled = false;
var character1 = new character(100, 10, 20);
var character2 = new character(120, 8, 12);
var character3 = new character(150, 10, 17);
var character4 = new character(200, 6, 10);
var activePlayerCharacter;
var activeEnemyCharacter;
var availableEnemyCount = 3;


function character(hp, attack, counterAttack){ //constructor for the character objects. 
	this.healthPoints = hp;
	this.attackPower = attack;
	this.baseAttackPower = attack;
	this.counterAttackPower = counterAttack;
	this.playerCharacter = false; //determines if this object is the player(true) or an enemy(false). 

	//start object functions
	this.attack = function(opponent){
		if (attackBtnEnabled) {
			opponent.healthPoints -= this.attackPower; console.log("Opponent HP: " + opponent.healthPoints);
			this.attackPower += this.baseAttackPower; console.log("Your attack power: " + this.attackPower);
			if(opponent.healthPoints >0){
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
}

//character listener for clicks. 
$(".character").on("click", function(){
	/*TODO 
	-move all other characters to the enemySpace
	*/
	if (characterSelectEnabled) {
		console.log('character selected');
		if ($(this).attr("dataAttribute") === "character1"){
			activePlayerCharacter = character1;
			$(this).addClass('player');
			$(this).removeClass('character');
			for(var i = 0; i < availableEnemyCount; i++){
				var tempChar = $(".character");
				tempChar.addClass('enemy');
				tempChar.removeClass('character');
				tempChar.appendTo($('.enemySpace'));
			}
		}
		else if ($(this).attr("dataAttribute") === "character2") {
			activePlayerCharacter = character2;
			$(this).addClass('player');
			$(this).removeClass('character');
			for(var i = 0; i < availableEnemyCount; i++){
				var tempChar = $(".character");
				tempChar.addClass('enemy');
				tempChar.removeClass('character');
				tempChar.appendTo($('.enemySpace'));
			}
		}
		else if ($(this).attr("dataAttribute") === "character3") {
			activePlayerCharacter = character3;
			$(this).addClass('player');
			$(this).removeClass('character');
			for(var i = 0; i < availableEnemyCount; i++){
				var tempChar = $(".character");
				tempChar.addClass('enemy');
				tempChar.removeClass('character');
				tempChar.appendTo($('.enemySpace'));
			}
		}
		else if ($(this).attr("dataAttribute") === "character4") {
			activePlayerCharacter = character4;
			$(this).addClass('player');
			$(this).removeClass('character');
			for(var i = 0; i < availableEnemyCount; i++){
				var tempChar = $(".character");
				tempChar.addClass('enemy');
				tempChar.removeClass('character');
				tempChar.appendTo($('.enemySpace'));
			}
		}
		console.log(activePlayerCharacter);
		characterSelectEnabled = false;
		enemySelectEnabled = true;
		$(this).appendTo($(".playerSpace"));

	}
	else if (enemySelectEnabled) {
		if ($(this).attr("dataAttribute") === "character1"){activeEnemyCharacter = character1;}
		else if ($(this).attr("dataAttribute") === "character2") {activeEnemyCharacter = character2;}
		else if ($(this).attr("dataAttribute") === "character3") {activeEnemyCharacter = character3;}
		else if ($(this).attr("dataAttribute") === "character4") {activeEnemyCharacter = character4;}
		enemySelectEnabled = false;
		attackBtnEnabled = true;
		$(this).prependTo($(".activeEnemySpace"));
	}
});


//global functions
function enableAttackBtn(){
	$(".btn-danger").css("background-color","");
	attackBtnEnabled = true;
}
function disableAttackBtn(){
	$(".btn-danger").css("background-color", "#c7757e");
	attackBtnEnabled = false;
}

function gameOver(){
	/*TODO program the game over function
	-notify player of loss.
	-enable a reset button.
	-disable the attack button.
	*/
}

function reset(){
	//TODO reset all variables to base values. 
}


//test block
// enableAttackBtn();
// 	for (var i = 0; i < 5; i++) {
// 		console.log("-----------------------\nturn " + (i+1) + "\n-----------------------"); 
// 		character1.attack(character3);
// 	}
// 	for (var i = 0; i < 2; i++) {
// 		console.log("-----------------------\nturn " + (i+1) + "\n-----------------------"); 
// 		character1.attack(character2);
// 	}

// 	for (var i = 0; i < 2; i++) {
// 		console.log("-----------------------\nturn " + (i+1) + "\n-----------------------"); 
// 		character1.attack(character4);
// 	}

