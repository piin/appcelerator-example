var devsRepository = require('devsRepository');
var devs = [];

getDevs();

/**
 * Get devs from the DB and show them in the ListView
 */
function getDevs() {
	devs = devsRepository.devs.get().map(function (element) {
		return {
			properties: {
				id: element.id,
				title: element.id + " " + element.name
			}
		};
	});
	
	$.devsList.sections[0].setItems(devs);
}

function selectedItem(e) {
	if($.shouldDelete.value) {
		var id = devs[e.itemIndex].properties.id;
		devsRepository.devs.delete(id);
		
		getDevs();
		
		alert("Dev with the id: "+ id+ " has been deleted");
	} else {
		// TODO: Update dev
	}
}

function close() {
	$.devsContainer.close();
}
