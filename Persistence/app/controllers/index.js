var devsRepository = require('devsRepository');

function onAdd() {
	Ti.API.info(devsRepository.devs.get());
}

$.index.open();
