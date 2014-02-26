/**
 * @author Annie P Waldman
 */

//Console log to make sure that I know that this works.
console.log ("Hi there. About to make a pretty cool visualization about Syria.");










//Adding my new function pageLoaded and console logging to make sure that the pageLoaded function activates on
//document ready. This will eventually load my google visualization.
function pageLoaded () {
	
	console.log ("Got to page loaded.");
	
}



//Adding my document ready to activate my pageLoaded function (which will activate the visualization).
$(document).ready(pageLoaded);

//Putting an end page console log just for double checking things.
console.log ("This is the end page console log. Just for double checking things.");