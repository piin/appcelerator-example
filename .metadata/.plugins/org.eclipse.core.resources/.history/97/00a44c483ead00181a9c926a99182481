$.container2.backgroundImage = backgroundImage;

// Arguments passed into this controller can be accessed via the `$.args` object directly or:
// var args = $.args;
function closeSettings(){
	increaseBy = $.increaseByNum.value;
    $.container2.close();
};

var parent = Alloy.Globals.parent;

function updateBackground(e) {
	if(e.source.id == "footballView") {
		backgroundImage = "images/Football_Field.png";
		
		var db = Ti.Database.open("sksettingsV1");
		db.execute("UPDATE sksettings SET image =? WHERE id = 1", backgroundImage);
		db.close();
		
		parent.backgroundImage = backgroundImage;
		$.container2.backgroundImage = backgroundImage;
	}else if(e.source.id == "soccerView") {
		backgroundImage = "images/Soccer_Back.png";
		
		var db = Ti.Database.open("sksettingsV1");
		db.execute("UPDATE sksettings SET image =? WHERE id = 1", backgroundImage);
		db.close();
		
		parent.backgroundImage = backgroundImage;
		$.container2.backgroundImage = backgroundImage;
	}else if(e.source.id == "basketballView") {
		backgroundImage = "images/Basketball_Back.png";
		
		var db = Ti.Database.open("sksettingsV1");
		db.execute("UPDATE sksettings SET image =? WHERE id = 1", backgroundImage);
		db.close();
		
		parent.backgroundImage = backgroundImage;
		$.container2.backgroundImage = backgroundImage;
	}else if(e.source.id == "foosballView") {
		backgroundImage = "images/Foosball_Back.png";
		
		var db = Ti.Database.open("sksettingsV1");
		db.execute("UPDATE sksettings SET image =? WHERE id = 1", backgroundImage);
		db.close();
		
		parent.backgroundImage = backgroundImage;
		$.container2.backgroundImage = backgroundImage;
	}
}
