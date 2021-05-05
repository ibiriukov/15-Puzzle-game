	//JavaScript
	

	function dispRules() {
	  document.getElementById("rulesBox").style.display = 'inline-block';
      document.getElementById("introBox").style.display = 'none';
	  document.getElementById("gameBox").style.display = 'none';
      
}
    function dispIntro() {
	  document.getElementById("introBox").style.display = 'inline-block';
      document.getElementById("rulesBox").style.display = "none";
      document.getElementById("gameBox").style.display = 'none';	  
}

    function playGame() {
	  document.getElementById("gameBox").style.display = 'block';
      document.getElementById("introBox").style.display = 'none';
      document.getElementById("rulesBox").style.display = "none";	  
}

    function exitGame() {
      
	  document.getElementById("exitAppBox").style.display = 'block';	  
      timeOut();
}
 
    function timeOut() {
	  setTimeout(function(){ document.getElementById("exitAppBox").style.display = 'none'; }, 3000);
	  
}

//********************Random Number Generator Section*****************
	function randomNumberGenerator(){
		
		var randNumList = new Array();
	 //	document.getElementById("testField").innerHTML = "test";
      
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
  	  
	 
	    function randomN(){
	      var x = Math.floor((Math.random() * 16));
		  return x;
	    }
	  
	  return randNumList;
	}
	
	//********************Load Grid Section*****************
	function loadGrid(){
	  
	 var randN = randomNumberGenerator(); 
	  
	 var gridArray = new Array(4);
	 for (var i = 0; i < gridArray.length; i++) {
			gridArray[i] = new Array(3);
		}
		
	 var rows = 4;
	 var cels = 4;
	 var n = 0; 
	                                             
	 document.getElementById("testField2").innerHTML = randN.toString();
	  				
        for (var b =0; b < rows; b++){	
	      for (var j =0; j < cels; j++){
	       gridArray[b][j] = randN[n];                                   
		   document.getElementById(n+1).innerHTML = (gridArray[b][j] == 0 ? "" : gridArray[b][j]);
		   n++;
	  	}
	  }  
       countTimer();   
       return gridArray;
	}

  //********************Timer & Counter Section*****************
	function countTimer(){		 	 				
		var move = document.getElementById("move");				
		move.innerHTML = "Move: 0"; 		 
		startTimer();	        			 		 
	}	
	
	var c=0;
	var t;
  var timer_is_on=0;

	function timer(){
	    document.getElementById('time').innerHTML="Time: " +c+"s";
	  	c=c+1;
	  	t=setTimeout("timer()",1000);		
	}

	function startTimer(){
		if (!timer_is_on){	
			timer_is_on=1;
			timer();
			document.getElementById("play").innerHTML= "Reset";
		 }else {stopTimer();}  
	}

	function stopTimer(){
	  clearTimeout(t);
		c =0;
		timer_is_on=0;
		document.getElementById('time').innerHTML="Time: " +c+"s";
		startTimer();
	}