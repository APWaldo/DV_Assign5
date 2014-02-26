/**
 * @author Annie P Waldman
 */

//Console log to make sure that I know that this works.
console.log ("Hi there. About to make a pretty cool visualization about Syria.");




//This function will make magic with the dataset that I pointed to in googleLoaded. Gave the function a short hand name
//of Syria to work with.
function dataLoaded(SYRIA) {
	
	//Console log that the data has loaded just to double check. Put the name of the data SYRIA just to check.
	console.log (SYRIA)
	
	//Create a loop that is a short cut straight to what we want to chart. First
	//start by creating a variable. We want to work with results (and from that, we want to plot count.)
	var myObsData = MENTIONS.results;
	
	//Create an empty data array myDataArray in which to push all of my new data when I make an array of an array.
	var myDataArray = [];
	
	//Add the headers of the dataArray so that I know what I am working with. In the case of Syria, I am working with
	//Data and Mentions of Syria
	var headerArray = ["Date", "Mentions of Syria"];
	
	//Push the headers to myDataArray. So now the first "row" so to speak will be the headers Date and Mentions of Syria.
	myDataArray.push(headerArray);
	
}






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