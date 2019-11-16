let btn_r;
let btn_p;
let btn_s;

let userchoice;
let gameswon = 0;

// let btn_more; 

let choices = ['Rock','Paper',"Scissors"]; 


const makeChoice = function (e) {
	userchoice=e.target.value;

	document.querySelector('.userchoice')
	.innerHTML = '<img class = "icon" src="image/'+choices[userchoice].toLowerCase()+'.svg">'

	document.querySelector('.robotchoice')
	.innerHTML = ''

	document.querySelector ('.result')
	.innerHTML = ''

	console.log (choices[userchoice]);

	setTimeout (getResult,1000);
}


	
const getResult = function () {
	
	robotchoice = rand (0,2);  

	console.log (choices[robotchoice]);
	
	document.querySelector ('.robotchoice')
	.innerHTML = '<img class = "icon" src="image/' + choices[robotchoice].toLowerCase()+'.svg"></div>';
	
	document.querySelector ('.result')
	.innerHTML = '<div>' + compareChoice(userchoice,robotchoice) + '</div>';

	document.querySelector ('.scoreoutput')
	.innerHTML = '<div>' + gameswon + '</div>';

}

 const compareChoice = function(u,r){


 
 	if (u == r) {
 		return "<p>YOU TIED</p>";
 	}

 	else if (u == 0 && r == 1 ||
			 u == 1 && r == 2 ||
			 u == 2 && r == 0 ){
 		return "<p>YOU LOSE</p>";
 	}

 	else { gameswon++;
 		return "<p>YOU WIN</p>";
 			
 	}


}

// const gameResult = function(){

// 	if (gameswon == 2){
//  		console.log('win');
//  	}
// }
	


 const rand = function(min,max){
 	return Math.round(Math.random()*(max-min)+min);
 }



window.addEventListener("DOMContentLoaded", function(){
	btn_r = document.querySelector (".btn_r"); 
	btn_p = document.querySelector (".btn_p");
	btn_s = document.querySelector (".btn_s");


	btn_r.addEventListener ("click", makeChoice); 
	btn_p.addEventListener ("click", makeChoice); 
	btn_s.addEventListener ("click", makeChoice); 

	
	});

	
 

