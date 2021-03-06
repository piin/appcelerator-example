$.index.backgroundImage = backgroundImage;

// Add points
function addPointBlue() {
	blueScore = +blueScore + +increaseBy; 
	$.scoreLText.value = blueScore;
}

function addPointRed() {
	redScore = +redScore + +increaseBy;
	$.scoreRText.value = redScore;
}

// Minus points
function minusPointBlue() {
	if (blueScore >= 1) {
		blueScore = +blueScore - +increaseBy;
		$.scoreLText.value = blueScore;
	};	
}

function minusPointRed() {
	if (redScore >= 1) {
		redScore= +redScore - +increaseBy;
		$.scoreRText.value = redScore;
	};
}

function determineSwipeRight(e) {
	if(e.direction == 'up') {
		addPointRed();
	} else if(e.direction == 'down') {
		minusPointRed();
	}
}
function determineSwipeLeft(e) {
	if(e.direction == 'up') {
		addPointBlue();
	} else if(e.direction == 'down') {
		minusPointBlue();
	}
}

// Animating in scores
$.scoreBackR.animate({
	right: 15,
	opacity: 1,
	duration: 600
});

$.scoreBackL.animate({
	left: 15,
	opacity: 1,
	duration: 600
});

// Open settings
function openSettings(){
    var settingsPage = Alloy.createController('settings').getView();
    settingsPage.open({modal:true}); 
}

// Test

function doTest() {
	var url = 'https://jsonplaceholder.typicode.com/todos/1';
	var xhr = Ti.Network.createHTTPClient({
		onload: function (e) {
			Ti.API.debug(this.responseText);
			$.responseLabel.text = "Title: " + JSON.parse(this.responseText).title;
		},
		onerror: function (e) {
			Ti.API.debug(e.error);
        		alert('error');
		},
		timeout: 5000
	});
	xhr.open('GET',url);
	xhr.send();
}

$.index.open();
Alloy.Globals.parent = $.index;