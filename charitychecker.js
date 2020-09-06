chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
  let title = tabs[0].title;
	let search = JSON.stringify(title);
	var url = "https://api.data.charitynavigator.org/v2/Organizations?app_id=182dd05a&app_key=af09573c3fec842aad8a44d18ad57e4d&pageSize=10&searchType=NAME_ONLY&search=";
	var url = url.concat(search);
	console.log(url)
	
var header = document.getElementById("myDIV");
        var btns = header.getElementsByClassName("btn");
        for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
        });
        }  
	
var result = fetch(url)
	.then(response => {
		console.log(response);
		return response.json(); // pass the data as promise to next then block
	})
	.then(function(data) {
		appendData(data);
		var ein = getEIN(data);
		console.log(ein);
		return fetch(ein); // make a 2nd request and return a promise
	})
	 .then(function(response) {
	 	console.log(response);
    	return response.json();
  	})
	.then(function(data) {
		appendReview(data);
		console.log("yes");
	}) 	
	.catch(function (err) {
		console.log('error: ' + err);
	});

function appendData(data) {
	var mainContainer = document.getElementById("myData");
	for (var i = 0; i < data.length; i++) {
		var div = document.createElement("div");
		div.innerHTML = 'Charity Name: ' + data[i].charityName +  '<br/> IRS deductibility: ' + data[i].irsClassification.deductibility +  '<br/> Mission Statement: ' + data[i].mission + '<br/> ';
		mainContainer.appendChild(div);
  	}
}

function getEIN(data) {
var ein_numbers = [];
var urls = [];
	// for (var i = 0; i < data.length; i++) {
	// 	//ein_numbers[i] =  data[i].ein;
	// 	urls[i] = "https://api.data.charitynavigator.org/v2/Organizations/" + data[i].ein + "/Advisories?app_id=182dd05a&app_key=af09573c3fec842aad8a44d18ad57e4d";
	// }
urls = "https://api.data.charitynavigator.org/v2/Organizations/"+ data[1].ein + "/Advisories?app_id=182dd05a&app_key=af09573c3fec842aad8a44d18ad57e4d";
return(urls)
}
//i made getEIN only do one url to test it^^

function appendReview(data) {
var mainContainer = document.getElementById("myReviews");
var div = document.createElement("div"); 
div.innerHTML = 'Name: ' + '<br/> Advisory: ' + data[1].sources.summary;
mainContainer.appendChild(div);
}
//trying to make it display the advisory summary like i did for the irs tab^^

});


