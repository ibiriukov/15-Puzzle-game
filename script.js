	//JavaScript
	

	function dispRules() {
	  document.getElementById("rulesBox").style.display = 'block';
      document.getElementById("introBox").style.display = 'none';
	  document.getElementById("gameBox").style.display = 'none';
      
}
    function dispIntro() {
	  document.getElementById("introBox").style.display = 'block';
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