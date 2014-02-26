/**
 * @author Annie P Waldman
 */

//Console log to make sure that I know that this works.
console.log ("Hi there. About to make a pretty cool visualization about Syria.");











//Adding the googleLoaded function. This function will go and get my data and eventually display it on the page! :-)
function googleLoaded(){
	console.log ("Google has loaded")
	
	//Time to load data with get function. This will tell my page to go and get this data set and use the function
	//dataLoaded to render it. 
	$.get("mentions_syria_09_14.json", dataLoaded, "json");
	

}




//Adding my new function pageLoaded and console logging to make sure that the pageLoaded function activates on
//document ready. This will eventually load my google visualization.
function pageLoaded () {
	
	//console log checks to make sure that page loaded works.
	console.log ("Got to page loaded.");
	
	//Load the google visualization library with the callback googleLoaded. This will tell the browser to load the function
	//googleLoaded. This is using the google visualization script to work. But now I have to make sure that I have
	//my function googleLoaded working.
	google.load("visualization", "1", {packages:["corechart"], callback: "googleLoaded"});
		
	
}



//Adding my document ready to activate my pageLoaded function (which will activate the visualization).
$(document).ready(pageLoaded);

//Putting an end page console log just for double checking things.
console.log ("This is the end page console log. Just for double checking things.");