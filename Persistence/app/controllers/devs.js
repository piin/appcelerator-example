var devsRepository = require('devsRepository');
var devs = [];

getDevs();

$.devsList.sections[0].setItems(devs);

/**
 * Get devs from the DB
 * 
 */
function getDevs() {
	devs = devsRepository.devs.get().map(function (element) {
		return {
			properties: {
				title: element.id + " " + element.name
			}
		};
	});
}

function close() {
	$.devsContainer.close();
}
