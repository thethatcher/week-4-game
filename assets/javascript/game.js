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
disableAttackBtn();

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
			var fightString = "";
			opponent.healthPoints -= this.attackPower; console.log("Opponent HP: " + opponent.healthPoints);
			opponent.updateHp();
			fightString += "<p>You attacked your opponent for " + this.attackPower + " damage.</p>"; //building the fight update message.
			this.attackPower += this.baseAttackPower; console.log("Your attack power: " + this.attackPower);
			if(opponent.healthPoints >0){
				this.healthPoints -= opponent.counterAttackPower; console.log("your hp: " + this.healthPoints);
				this.updateHp();
				fightString += "<p>Your opponent dealt " + opponent.counterAttackPower + " damage to you.</p>"; //building the fight update message.
				if(this.healthPoints <= 0){
					gameOver(); console.log("game-over. your HP is <= 0");
					disableAttackBtn();
					fightString += "<p>You have been dealt a lethal blow.</p><p>Game Over.</p>"; //building the fight update message.
				}
			}
			else if(opponent.healthPoints <= 0){ 
				console.log("opponent defeated.")
				opponent.$display.remove();
				availableEnemyCount--;
				enemySelectEnabled = true;
				disableAttackBtn();
				if(availableEnemyCount>0){
				fightString += "<p>Your opponent falls to your strike.</p><p>Pick your next victim.</p>" //building the fight update message.
				}
				else if(availableEnemyCount === 0){
					fightString += "<p>Your final opponent falls against your strength.</p><p>Congratulations, you are the last jedi</p>"; //building the fight update message.
				}
			}
			$('#fightText').html(fightString);
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
		if (($(this).attr("dataAttribute") === "character1")){
			activePlayerCharacter = character1;
			activePlayerCharacter.playerCharacter = true;
			$(this).addClass('player');
			$(this).removeClass('character');
			$(this).addClass('col');
			$(this).removeClass('col-sm-2');
			$(this).attr('data-character-type','player')			
			for(var i = 0; i < availableEnemyCount; i++){ //moving all other characters to the available enemy box. 
				var tempChar = $(".character");
				tempChar.addClass('enemy');
				tempChar.removeClass('character');
				tempChar.appendTo($('.enemySpace'));
			}
		}
		else if (($(this).attr("dataAttribute") === "character2")) {
			activePlayerCharacter = character2;
			activePlayerCharacter.playerCharacter = true;
			$(this).addClass('player');
			$(this).removeClass('character');
			$(this).addClass('col');
			$(this).removeClass('col-sm-2');
			$(this).attr('data-character-type','player')
			for(var i = 0; i < availableEnemyCount; i++){
				var tempChar = $(".character");
				tempChar.addClass('enemy');
				tempChar.removeClass('character');
				tempChar.appendTo($('.enemySpace'));
			}
		}
		else if (($(this).attr("dataAttribute") === "character3")) {
			activePlayerCharacter = character3;
			activePlayerCharacter.playerCharacter = true;
			$(this).addClass('player');
			$(this).removeClass('character');
			$(this).addClass('col');
			$(this).removeClass('col-sm-2');
			$(this).attr('data-character-type','player')
			for(var i = 0; i < availableEnemyCount; i++){
				var tempChar = $(".character");
				tempChar.addClass('enemy');
				tempChar.removeClass('character');
				tempChar.appendTo($('.enemySpace'));
			}
		}
		else if (($(this).attr("dataAttribute") === "character4")) {
			activePlayerCharacter = character4;
			activePlayerCharacter.playerCharacter = true;
			$(this).addClass('player');
			$(this).removeClass('character');
			$(this).addClass('col');
			$(this).removeClass('col-sm-2');
			$(this).attr('data-character-type','player')
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
		if ($(this).attr('data-character-type') != 'player') {	
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
	//workaround with a page refresh
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

