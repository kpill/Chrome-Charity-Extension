chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
  let title = tabs[0].title;
	let search = JSON.stringify(title);
	var url = "https://api.data.charitynavigator.org/v2/Organizations?app_id=182dd05a&app_key=af09573c3fec842aad8a44d18ad57e4d&search="
	var url = url.concat(search);
	console.log(url)

fetch(url)
	.then(response => {
		console.log(response);
		return response.json();
	})
	.then(function(data) {
		appendData(data);
	})
	.catch(function (err) {
		console.log('error: ' + err);
	});

function appendData(data) {
	var mainContainer = document.getElementById("myData");
	for (var i = 0; i < data.length; i++) {
		var div = document.createElement("div");
		div.innerHTML = 'Charity Name: ' + data[i].charityName;
		mainContainer.appendChild(div);
  	}
}
	
var header = document.getElementById("myDIV");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}

});


