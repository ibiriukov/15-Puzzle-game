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
  	  
	 
	    function randomN(){
	      var x = Math.floor((Math.random() * 16));
		  return x;
	    }
	   
	  loadGrid(randNumList);
	  
	}
	
	//********************Load Grid Section*****************
	function loadGrid(arr){
	  
	 var randN = arr; 
	                                                 
	 //document.getElementById("testField2").innerHTML = randN.toString();
	  		
        for (var b =0; b < randN.length; b++){	
	      document.getElementById(b+1).innerHTML = (randN[b] == 0 ? "" : randN[b]);
		 
	  }   
      //alert(gridArray.join('\n')); 
	   countTimer(); 
	   moveTile(randN);
       return randN;
	}
	
	//********************Timer & Counter Section*****************
	function countTimer(){
		var resetTimer = 1; 	 		
		
		var move = document.getElementById("move");
				
		move.innerHTML = "Move: 0"; 		 
		startTimer(resetTimer);		
	}	
	
	
	var c=0;
	var t;
    var timer_is_on=0;

	function timer(){
	    document.getElementById('time').innerHTML="Time: " +c+"s";
		c=c+1;
		t=setTimeout("timer()",1000);		
	}

	function startTimer(rT){
		var resetTimer = rT;
		if (!timer_is_on){	
			timer_is_on=1;
			timer();
			document.getElementById("play").innerHTML= "Reset";
		 }else {stopTimer(resetTimer);}  
	}

	function stopTimer(rt){
	    var resetTimer = rt;
		clearTimeout(t);
		if (resetTimer == 1){
		c =0;
		timer_is_on=0;
		
		document.getElementById('time').innerHTML="Time: " +c+"s";
		startTimer();	
		} else {document.getElementById('time').innerHTML="Time: " +c+"s";}
		
	}

  