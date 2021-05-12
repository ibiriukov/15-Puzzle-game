//JavaScript
function backScreen(i){
  if(i == 1){
  document.getElementById("introScreenBack").style.display = 'inline-block';
  document.getElementById("gameScreenBack").style.display = 'none';
  
  
  } else{
    document.getElementById("introScreenBack").style.display = 'none';
    document.getElementById("gameScreenBack").style.display = 'inline-block';
  }

}

function dispRules() {
    

    document.getElementById("rulesBox").style.display = 'inline-block';
    document.getElementById("introBox").style.display = 'none';
    document.getElementById("gameBox").style.display = 'none';
    document.getElementById("exitTheGame").style.display ='none';
    
}

function dispIntro() {
    document.getElementById("introBox").style.display = 'inline-block';
    document.getElementById("rulesBox").style.display = "none";
    document.getElementById("gameBox").style.display = 'none';
    document.getElementById("exitTheGame").style.display ='none';
}

function playGame() {
    document.getElementById("gameBox").style.display = 'block';
    document.getElementById("introBox").style.display = 'none';
    document.getElementById("rulesBox").style.display = "none";
    document.getElementById("exitTheGame").style.display ='none';
}

function exit(){
    
    document.getElementById("exitTheGame").style.display = 'block';
    document.getElementById("gameBox").style.display = 'none';
    document.getElementById("introBox").style.display = 'none';
    document.getElementById("rulesBox").style.display = "none";
}

function exitGame() {

    document.getElementById("exitAppBox").style.display = 'block';
    timeOut();
}

function timeOut() {
    setTimeout(function () {
        document.getElementById("exitAppBox").style.display = 'none';
    }, 3000);

}

//********************Random Number Generator Section*****************
var gameActive = false;
function randomNumberGenerator() {

   var randNumList = new Array();
    
    //document.getElementById("testField").innerHTML = "test";

    var n = 16;

    do {
        // Generating random number
        const randomNumber = randomN();

        // Pushing into the array only
        // if the array does not contain it
        if (!randNumList.includes(randomNumber)) {
            randNumList.push(randomNumber);

        }

    } while (randNumList.length < n);


    function randomN() {
        var x = Math.floor((Math.random() * 16));
        return x;
    }

    console.log(randNumList);
    loadGrid(randNumList);
    gameActive = true;
}

//********************Load Grid Section*****************
function loadGrid(arr) {
    var n = 0; 
    var randN = arr;
     
    for (var a =0; a < randN.length; a++){		     	 
		 if (randN[a] == a+1){			  
		 n++;	 	 		 	     
		  }
    }

    console.log("this is arr in loadGrid " + arr);
    //document.getElementById("testField2").innerHTML = randN.toString();

    for (var b = 0; b < randN.length; b++) {
        document.getElementById(b + 1).innerHTML = (randN[b] === 0 ? "" : randN[b]);

    }
    //alert(gridArray.join('\n'));
    if (n == 15){
		   randomNumberGenerator();  
		 }  
		  
	  

    countTimer();
    return randN;
}

var moveCounter = 0;

function clickedButton(id) {
if(!gameActive){
    return;
}
    var buttonHTML = document.getElementById(id).innerHTML;
    var emptyTile = '';
    for (var i = 1; i < 17; i++) {

        var oneButton = document.getElementById(i.toString()).innerHTML;
        if (oneButton === '') {
            console.log('found at ' + i);
            emptyTile = i;
        }
    }
    //gets adjacent tiles
    var leftTile = document.getElementById(emptyTile - 1);
    var rightTile = document.getElementById(emptyTile + 1);
    var belowTile = document.getElementById(emptyTile + 4)
    var aboveTile = document.getElementById(emptyTile - 4);

    var arr = [leftTile, rightTile, belowTile, aboveTile];
    var arr_out = [];
    //each time a tile is clicked this adds exisiting adjacent tiles to arr_out
    for (let i = 0; i < arr.length; i++) {
        try {
            if (arr[i].id) {
                arr_out.push(arr[i])
            }
        } catch (e) {
            console.log(e);
        }
    }
  //iterate through array to see if the clicked tile is adjacent to the empty tile, then swaps position with empty tile
    for (var j = 0; j < arr_out.length; j++) {
        if (arr_out[j].id === id) {

            document.getElementById(emptyTile).innerHTML = buttonHTML;
            document.getElementById(id).innerHTML = '';

            moveCounter = moveCounter + 1;
            var move = document.getElementById("move");
            move.innerHTML = "Move: " + moveCounter;
        }
        
    }
checkWin();
winMessage(checkWin());
}

//********************Timer & Counter Section*****************

function countTimer() {
    var resetTimer = 1;
    startTimer(resetTimer);
}


var c = 0;
var t;
var timer_is_on = 0;

function timer() {
    document.getElementById('time').innerHTML = "Time: " + c + "s";
    c = c + 1;
    t = setTimeout("timer()", 1000);
}

function startTimer(rT) {
    if (!timer_is_on) {
        timer_is_on = 1;
        timer();
        document.getElementById("play").innerHTML = "Reset";
    } else {
        stopTimer(rT);
    }
}

function stopTimer(rt) {
    var resetTimer = rt;
    clearTimeout(t);
    if (resetTimer == 1) {
        c = 0;
        timer_is_on = 0;
        moveCounter = 0;
        move.innerHTML = "Move: " + moveCounter;
        document.getElementById('time').innerHTML = "Time: " + c + "s";
        startTimer();
    } else {
        document.getElementById('time').innerHTML = "Time: " + c + "s";
    }

}

function checkWin() {

var win = true;
// to demonstrate win screen comment out everything below until 'return win', then re-run the game, hit play, and move one tile

//var correctSquares = 0;

// for(var x = 0; x<16; x++) {
//     if(document.getElementById(x+1).innerHTML == x+1) {
//      correctSquares++;
//       continue;  
//     }
//     else if(x == 15 && document.getElementById("16").innerHTML == "") {
      
//         correctSquares++;
//         continue;
//     }
//     else {
//       correctSquares = 0;
//         win = false;
//     }
// }
// if(correctSquares == 16) {
//   win = true;
//   document.getElementById("16").innerHTML = "Win";
//   stopTimer(t);
// }
 


return win;
}