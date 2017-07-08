//declare global variables
var characterSelectEnabled = true;
var enemySelectEnabled = false;
var attackBtnEnabled = false;
var resetBtnEnabled = false;
var character1 = new character(100, 10, 20, $("#character1"));
var character2 = new character(120, 8, 12, $("#character2"));
var character3 = new character(150, 10, 17, $("#character3"));
var character4 = new character(170, 5, 10, $("#character4"));
var activePlayerCharacter;
var activeEnemyCharacter;
var availableEnemyCount = 3;

//fill in the HP for the characters
$("#healthDisplay1").text(character1.healthPoints);
$("#healthDisplay2").text(character2.healthPoints);
$("#healthDisplay3").text(character3.healthPoints);
$("#healthDisplay4").text(character4.healthPoints);

function character(hp, attack, counterAttack, $display){ //constructor for the character objects. 
	this.healthPoints = hp;
	this.attackPower = attack;
	this.baseAttackPower = attack;
	this.counterAttackPower = counterAttack;
	this.playerCharacter = false; //determines if this object is the player(true) or an enemy(false).
	this.$display = $display; //jQuery object associated with the character display.  

	//start object functions
	this.attack = function(opponent){
		if (attackBtnEnabled) {
			opponent.healthPoints -= this.attackPower; console.log("Opponent HP: " + opponent.healthPoints);
			opponent.updateHp();
			this.attackPower += this.baseAttackPower; console.log("Your attack power: " + this.attackPower);
			if(opponent.healthPoints >0){
				this.healthPoints -= opponent.counterAttackPower; console.log("your hp: " + this.healthPoints);
				this.updateHp();
				if(this.healthPoints <= 0){
					gameOver(); console.log("game-over. your HP is <= 0");
				}
			}
			else if(opponent.healthPoints <= 0){
				//TODO remove opponent. Enable opponent selection. 
				console.log("opponent defeated.")
				opponent.$display.remove();
				availableEnemyCount--;
				enemySelectEnabled = true;
				disableAttackBtn();
			}

		}
	}
	this.updateHp = function(){
		this.$display.find('.healthdisplay').text(this.healthPoints);
		console.log(this.$display.find('.healthdisplay'));
	}
}

//character listener for clicks. 
$(".character").on("click", function(){
	if (characterSelectEnabled) {
		console.log('character selected');
		if ($(this).attr("dataAttribute") === "character1"){
			activePlayerCharacter = character1;
			$(this).addClass('player');
			$(this).removeClass('character');
			$(this).addClass('col');
			$(this).removeClass('col-sm-2');			
			for(var i = 0; i < availableEnemyCount; i++){ //moving all other characters to the available enemy box. 
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
			$(this).addClass('col');
			$(this).removeClass('col-sm-2');
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
			$(this).addClass('col');
			$(this).removeClass('col-sm-2');
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
			$(this).addClass('col');
			$(this).removeClass('col-sm-2');
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
		enableAttackBtn();
		$(this).prependTo($(".activeEnemySpace"));
		$(this).addClass('activeEnemy');
		$(this).removeClass('enemy');
		$(this).addClass('col');
		$(this).removeClass('col-sm-2');
	}
});

//attack button listener.
$(".btn-danger").on("click", function(){
	activePlayerCharacter.attack(activeEnemyCharacter);
	console.log(activePlayerCharacter.$display);
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

